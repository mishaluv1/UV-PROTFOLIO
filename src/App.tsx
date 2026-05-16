import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollyCanvas from "./components/ScrollyCanvas";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import PageLoader from "./components/PageLoader";
import "./App.css";

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Small delay to let the page loader finish its animation
    const timer = setTimeout(() => setIsPageLoaded(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Noise Texture Overlay */}
      <div className="noise" />

      {/* Main Content */}
      <main
        className={`min-h-screen bg-[#0a0a0a] transition-opacity duration-700 ${
          isPageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <ScrollyCanvas />
        <About />
        <div id="work">
          <Projects />
        </div>
        <Contact />

        {/* Footer */}
        <footer className="relative w-full py-12 text-center bg-[#0a0a0a] border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/30 text-sm">
                © {new Date().getFullYear()} Mishal. All rights reserved.
              </p>
              <p className="text-white/20 text-sm font-mono">
                Designed & built with{" "}
                <span className="text-red-400">♥</span> using React & Framer Motion
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
