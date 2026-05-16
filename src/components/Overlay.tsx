import { motion, MotionValue, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: 0% to 35% — Hero name
  const opacity1 = useTransform(progress, [0, 0.25, 0.35], [1, 1, 0], { clamp: true });
  const y1 = useTransform(progress, [0, 0.35], [0, -60], { clamp: true });
  const scale1 = useTransform(progress, [0, 0.35], [1, 0.95], { clamp: true });

  // Section 2: 35% to 55% — "I build digital experiences"
  const opacity2 = useTransform(progress, [0.35, 0.4, 0.5, 0.55], [0, 1, 1, 0], { clamp: true });
  const y2 = useTransform(progress, [0.35, 0.55], [60, -60], { clamp: true });

  // Section 3: 55% to 100% — "Bridging design and engineering"
  const opacity3 = useTransform(progress, [0.55, 0.6, 0.9, 0.98], [0, 1, 1, 0], { clamp: true });
  const y3 = useTransform(progress, [0.55, 0.98], [60, -60], { clamp: true });

  // Scroll indicator opacity (fades out as user scrolls)
  const scrollIndicatorOpacity = useTransform(progress, [0, 0.05, 0.1], [1, 1, 0], { clamp: true });

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 — Name & Title */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute w-full top-[12%] md:top-1/2 md:-translate-y-1/2 flex flex-col items-center text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-base font-mono tracking-[0.3em] uppercase text-blue-400 mb-4"
        >
          Creative Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 drop-shadow-2xl"
        >
          Mishal<span className="gradient-text">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/60 font-light tracking-wide max-w-xl"
        >
          Building digital experiences that bridge{" "}
          <span className="text-white/90 font-normal">design</span> and{" "}
          <span className="text-white/90 font-normal">engineering</span>.
        </motion.p>
      </motion.div>

      {/* Section 2 — "I build digital experiences" */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full bottom-[12%] md:top-1/2 md:bottom-auto md:-translate-y-1/2 flex flex-col items-center md:items-start px-8 md:px-24 lg:px-48"
      >
        <motion.p
          className="text-sm md:text-base font-mono tracking-[0.2em] uppercase text-emerald-400 mb-4"
        >
          What I Do
        </motion.p>
        <h2 className="text-3xl md:text-7xl font-bold text-white text-center md:text-left max-w-2xl leading-tight drop-shadow-2xl">
          I build digital{" "}
          <span className="gradient-text">experiences</span>.
        </h2>
        <p className="mt-4 text-lg text-white/50 max-w-xl text-center md:text-left">
          From concept to deployment, crafting interfaces that feel alive.
        </p>
      </motion.div>

      {/* Section 3 — "Bridging design and engineering" */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute w-full bottom-[12%] md:top-1/2 md:bottom-auto md:-translate-y-1/2 flex flex-col items-center md:items-end px-8 md:px-24 lg:px-48"
      >
        <motion.p
          className="text-sm md:text-base font-mono tracking-[0.2em] uppercase text-purple-400 mb-4"
        >
          The Approach
        </motion.p>
        <h2 className="text-3xl md:text-7xl font-bold text-white text-center md:text-right max-w-2xl leading-tight drop-shadow-2xl">
          Bridging{" "}
          <span className="gradient-text">design</span>{" "}
          and engineering.
        </h2>
        <p className="mt-4 text-lg text-white/50 max-w-xl text-center md:text-right">
          Where aesthetics meet performance. Pixel-perfect, every time.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={20} className="text-white/30 scroll-indicator" />
      </motion.div>
    </div>
  );
}
