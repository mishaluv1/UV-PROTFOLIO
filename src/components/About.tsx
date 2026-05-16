import { motion } from "framer-motion";
import { Code2, Palette, Zap, Layers } from "lucide-react";

const techStack = [
  { name: "React", color: "text-blue-400" },
  { name: "TypeScript", color: "text-blue-500" },
  { name: "Next.js", color: "text-white" },
  { name: "Tailwind CSS", color: "text-cyan-400" },
  { name: "Node.js", color: "text-emerald-400" },
  { name: "Framer Motion", color: "text-pink-400" },
  { name: "Figma", color: "text-purple-400" },
  { name: "Git", color: "text-orange-400" },
];

const skills = [
  { name: "HTML5", value: 95, gradient: "from-blue-400 to-cyan-400", glow: "bg-cyan-400" },
  { name: "CSS3", value: 90, gradient: "from-blue-400 to-emerald-400", glow: "bg-emerald-400" },
  { name: "JavaScript", value: 80, gradient: "from-yellow-400 to-orange-400", glow: "bg-orange-400" },
  { name: "React / Next.js", value: 85, gradient: "from-cyan-400 to-blue-500", glow: "bg-blue-500" },
  { name: "TypeScript", value: 75, gradient: "from-blue-500 to-purple-500", glow: "bg-purple-500" },
  { name: "UX/UI Design", value: 85, gradient: "from-purple-400 to-pink-400", glow: "bg-pink-400" },
];

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "12+" },
  { label: "GitHub Repos", value: "15+" },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-purple absolute -top-40 -right-40" />
        <div className="orb orb-blue absolute -bottom-40 -left-40" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm font-mono tracking-[0.3em] uppercase text-blue-400 mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">
            Turning ideas into{" "}
            <span className="gradient-text">digital reality</span>.
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
            I'm a creative developer passionate about crafting immersive web experiences
            that sit at the intersection of stunning design and solid engineering.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:gradient-text transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — About text + features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The person behind the pixels.
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              With a strong foundation in modern web technologies, I specialize in building
              highly interactive interfaces that don't just look good — they feel alive.
              Every project is an opportunity to push boundaries and explore what's possible.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source projects, or experimenting with creative coding.
            </p>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: "Clean Code", desc: "Readable & maintainable" },
                { icon: Palette, label: "Pixel Perfect", desc: "Design-driven dev" },
                { icon: Zap, label: "Performance", desc: "Blazing fast loads" },
                { icon: Layers, label: "Scalable", desc: "Built to grow" },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <Icon size={20} className="text-blue-400 mb-2" />
                  <div className="text-sm font-semibold text-white mb-1">{label}</div>
                  <div className="text-xs text-white/40">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Skills & Expertise.
            </h3>

            <div className="space-y-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-white/40 font-mono">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-white/[0.04] rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} relative`}
                    >
                      <div className={`skill-bar-glow ${skill.glow}`} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-12">
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-white/40 mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech.name} className="tech-pill">
                    <span className={`w-1.5 h-1.5 rounded-full ${tech.color.replace("text-", "bg-")}`} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
