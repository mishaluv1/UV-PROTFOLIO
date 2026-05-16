import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success message
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue absolute top-1/3 -left-40" />
        <div className="orb orb-emerald absolute -bottom-40 right-0" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-mono tracking-[0.3em] uppercase text-purple-400 mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">
              Let's{" "}
              <span className="gradient-text">work together</span>.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-md">
              I'm currently available for freelance projects and open to new opportunities.
              Whether you have a project in mind or just want to say hi — I'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              <a
                href="mailto:mishalmishal854@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-white/[0.08] transition-all">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-0.5">Email</div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    mishalmishal854@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <MapPin size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-0.5">Location</div>
                  <div className="text-white font-medium">Dubai, UAE</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-mono tracking-[0.2em] uppercase text-white/30 mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/mishaluv1",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/muhammed-mishal-uv1/",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    ),
                  },
                  {
                    label: "WhatsApp",
                    href: "https://wa.me/971545231374",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.291-.506.1-.197.05-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.01-.371-.01-.571-.01-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.22 3.06c.149.195 2.105 3.21 5.1 4.495.713.307 1.27.49 1.704.627.716.227 1.367.195 1.882.118.574-.085 1.767-.72 2.016-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.195-.57-.345m-5.446 7.443h-.016c-1.77-.002-3.508-.477-5.024-1.374l-.36-.214-3.735.98.996-3.64-.235-.374c-.99-1.58-1.514-3.41-1.512-5.3.004-5.52 4.496-10.01 10.016-10.01 2.674.01 5.19 1.05 7.08 2.94 1.89 1.89 2.93 4.4 2.92 7.07-.01 5.52-4.5 10.01-10.02 10.01m5.45-18.46C15.72 1.59 13.41.65 10.96.63h-.01C5.48.63.99 5.12 1 10.61c0 1.76.46 3.48 1.33 4.99L1 21.44l5.98-1.56c1.46.79 3.1 1.21 4.77 1.21h.004c5.5 0 9.98-4.48 9.98-9.98 0-2.67-1.04-5.18-2.93-7.07" /></svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all ${isSubmitted
                  ? "bg-emerald-500 text-white cursor-default"
                  : "bg-white text-black hover:bg-white/90"
                  } disabled:opacity-50`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>Message Sent!</span>
                    <Send size={18} />
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </motion.button>
            </form>

            {/* Success toast */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center"
              >
                Thanks for reaching out! I'll get back to you within 24 hours.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
