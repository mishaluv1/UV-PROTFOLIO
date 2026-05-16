import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 192; // 000 to 191

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/frames/frame_${paddedIndex}_delay-0.041s.png`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const loadedCountRef = useRef(0);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images progressively
  useEffect(() => {
    let cancelled = false;
    loadedCountRef.current = 0;

    const loadImages = async () => {
      const loaded: HTMLImageElement[] = new Array(FRAME_COUNT);

      // Load in batches to show progress
      const BATCH_SIZE = 10;
      for (let i = 0; i < FRAME_COUNT; i += BATCH_SIZE) {
        if (cancelled) return;

        const batch = Array.from({ length: Math.min(BATCH_SIZE, FRAME_COUNT - i) }, (_, j) => {
          const idx = i + j;
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = getFramePath(idx);
            img.onload = () => {
              loaded[idx] = img;
              loadedCountRef.current++;
              setLoadProgress(Math.round((loadedCountRef.current / FRAME_COUNT) * 100));
              resolve();
            };
            img.onerror = () => {
              loaded[idx] = img;
              loadedCountRef.current++;
              setLoadProgress(Math.round((loadedCountRef.current / FRAME_COUNT) * 100));
              resolve();
            };
          });
        });

        await Promise.all(batch);
      }

      if (!cancelled) {
        setImages(loaded);
        setIsLoaded(true);
      }
    };

    loadImages();
    return () => { cancelled = true; };
  }, []);

  // Render the current frame
  const renderFrame = useCallback((index: number) => {
    if (!images[index] || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    const container = canvas.parentElement;
    if (!container) return;

    // Responsive Canvas dimensions
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  // Initial render when loaded
  useEffect(() => {
    if (isLoaded) {
      renderFrame(0);
    }

    const handleResize = () => {
      if (isLoaded) {
        renderFrame(Math.round(frameIndex.get()));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  // Render on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) {
      requestAnimationFrame(() => renderFrame(Math.round(latest)));
    }
  });

  return (
    <div id="hero" ref={containerRef} className="relative h-[500vh] w-full bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-50">
            <div className="flex flex-col items-center gap-6">
              {/* Spinner */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-white/10" />
                <div
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin"
                  style={{
                    borderImage: "linear-gradient(135deg, #3b82f6, #8b5cf6, #10b981) 1",
                  }}
                />
              </div>

              {/* Progress */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-white/50 text-sm font-mono tracking-widest uppercase">
                  Loading Frames
                </p>
                <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${loadProgress}%`,
                      background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)",
                    }}
                  />
                </div>
                <span className="text-white/30 text-xs font-mono">{loadProgress}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Canvas Container */}
        <div className="relative w-[85%] aspect-[4/5] rounded-2xl border border-white/[0.06] ring-1 ring-white/5 shadow-2xl bg-black/50 overflow-hidden md:w-full md:h-full md:aspect-auto md:rounded-none md:border-none md:ring-0 md:shadow-none">
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
        </div>

        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
