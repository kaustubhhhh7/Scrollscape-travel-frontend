import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const AestheticCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
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
            <motion.div
                className="w-8 h-8 rounded-full border border-gold mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                }}
                transition={{ type: 'spring', ...springConfig }}
            />
            <motion.div
                className="w-1 h-1 bg-gold rounded-full fixed top-0 left-0"
                style={{
                    x: mousePos.x - 2,
                    y: mousePos.y - 2,
                }}
            />
        </div>
    );
};

export default AestheticCursor;
