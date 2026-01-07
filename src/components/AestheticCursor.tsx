import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const AestheticCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Snappier spring configuration for a "faster" feel
    const springConfig = { damping: 20, stiffness: 300 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            // Offset roughly half the size of the new cursor (20px / 2 = 10px)
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for interactive elements to trigger hover state
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
            {/* Diamond Cursor Shape */}
            <motion.div
                className="w-5 h-5 border border-gold mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    rotate: 45, // Diamond rotation
                    scale: isHovering ? 2 : 1, // Scale up on hover
                    backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.4)' : 'transparent',
                }}
            />
            {/* Center Dot (Square rotated) */}
            <motion.div
                className="w-1 h-1 bg-gold fixed top-0 left-0"
                style={{
                    x: mousePos.x - 2,
                    y: mousePos.y - 2,
                    rotate: 45
                }}
            />
        </div>
    );
};

export default AestheticCursor;
