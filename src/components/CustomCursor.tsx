import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
    }, [cursorX, cursorY, isVisible]);

    const handleMouseDown = useCallback(() => setIsClicking(true), []);
    const handleMouseUp = useCallback(() => setIsClicking(false), []);

    const handleMouseEnter = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
            target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.closest("a") ||
            target.closest("button") ||
            target.closest("[role='button']") ||
            target.classList.contains("tilt-card")
        ) {
            setIsHovering(true);
        }
    }, []);

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
            target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.closest("a") ||
            target.closest("button") ||
            target.closest("[role='button']") ||
            target.classList.contains("tilt-card")
        ) {
            setIsHovering(false);
        }
    }, []);

    const handleMouseLeaveWindow = useCallback(() => setIsVisible(false), []);
    const handleMouseEnterWindow = useCallback(() => setIsVisible(true), []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseover", handleMouseEnter);
        document.addEventListener("mouseout", handleMouseLeave);
        document.addEventListener("mouseleave", handleMouseLeaveWindow);
        document.addEventListener("mouseenter", handleMouseEnterWindow);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseover", handleMouseEnter);
            document.removeEventListener("mouseout", handleMouseLeave);
            document.removeEventListener("mouseleave", handleMouseLeaveWindow);
            document.removeEventListener("mouseenter", handleMouseEnterWindow);
        };
    }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave, handleMouseLeaveWindow, handleMouseEnterWindow]);

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
                }}
                transition={{ duration: 0.15 }}
            >
                <div
                    className={`rounded-full transition-colors duration-200 ${isHovering
                            ? "w-10 h-10 bg-white/20 border border-white/40"
                            : "w-4 h-4 bg-white"
                        }`}
                />
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? (isHovering ? 1 : 0.6) : 0,
                    scale: isClicking ? 0.8 : isHovering ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
            >
                <div
                    className={`rounded-full border transition-all duration-300 ${isHovering
                            ? "w-16 h-16 border-white/30"
                            : "w-8 h-8 border-white/20"
                        }`}
                />
            </motion.div>
        </>
    );
}