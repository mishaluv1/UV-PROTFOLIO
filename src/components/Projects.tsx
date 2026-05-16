import { motion } from "framer-motion";
import { useRef, useCallback, useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "UV Store",
    category: "E-Commerce",
    description: "A modern online store with a sleek UI, smooth animations, and a fully responsive shopping experience.",
    image: "/projects/uvstore.svg",
    link: "https://uvstore-nine.vercel.app/",
    tags: ["Angular", "TypeScript", "RxJS", "Vercel"],
  },
  {
    title: "Cookpedia",
    category: "Web App",
    description: "A recipe discovery platform with rich search, filtering, and a beautiful card-based layout for food enthusiasts.",
    image: "/projects/cookpedia.svg",
    link: "https://cookpedia-fr5t.vercel.app/",
    tags: ["React", "API", "CSS", "Vercel"],
  },
  {
    title: "Nutrition Dietetics",
    category: "Health",
    description: "A professional nutrition and dietetics platform offering meal plans, health tips, and dietary guidance.",
    image: "/projects/nutrition.svg",
    link: "https://nutrition-dietetics.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    title: "UV Player",
    category: "Media",
    description: "A custom video player with a clean interface, playlist support, and smooth playback controls.",
    image: "/projects/uvplayer.svg",
    link: "https://uvplayer.vercel.app/",
    tags: ["React", "Video", "UI/UX", "Vercel"],
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-[0.3em] uppercase text-emerald-400 mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">
            Selected{" "}
            <span className="gradient-text">Work</span>.
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl">
            A curated collection of digital products and experiences
            I've crafted over the years.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <TiltCard>
                <div className="glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 h-full">
                  {/* Image Area */}
                  <div className="relative h-[280px] md:h-[340px] w-full overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/[0.02] flex flex-col items-center justify-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                          <span className="text-2xl font-black gradient-text">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <span className="text-white/20 text-xs font-mono tracking-widest uppercase">
                          Preview Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Quick action buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/80 hover:border-white/[0.12] transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== 3D Tilt Card Component ========== */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  }, []);

  return (
    <div
      ref={ref}
      className="tilt-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilt-card-content">{children}</div>
    </div>
  );
}
