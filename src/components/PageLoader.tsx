import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Speed up as we go
                const increment = prev < 40 ? 2 : prev < 70 ? 1.5 : prev < 90 ? 0.8 : 0.3;
                return Math.min(prev + increment, 100);
            });
        }, 30);

        // Hide loader after progress completes
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-[#0a0a0a]"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {/* Background orbs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="orb orb-blue absolute -top-20 -left-20 animate-float" />
                        <div className="orb orb-purple absolute top-1/2 -right-20 animate-float" style={{ animationDelay: "-3s" }} />
                        <div className="orb orb-emerald absolute -bottom-20 left-1/3 animate-float" style={{ animationDelay: "-5s" }} />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo / Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                                MISHAL<span className="gradient-text">.</span>
                            </h1>
                        </motion.div>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-64 md:w-80"
                        >
                            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${progress}%`,
                                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)",
                                    }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="text-white/30 text-xs font-mono tracking-wider uppercase">
                                    Loading
                                </span>
                                <span className="text-white/50 text-xs font-mono">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                        </motion.div>

                        {/* Loading dots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-2 mt-8"
                        >
                            <div className="loader-dot w-2 h-2 rounded-full bg-blue-400" />
                            <div className="loader-dot w-2 h-2 rounded-full bg-purple-400" />
                            <div className="loader-dot w-2 h-2 rounded-full bg-emerald-400" />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}