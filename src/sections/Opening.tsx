import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2560", // Original Mountain (Reliable)
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2560", // Deep Forest
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=2560", // Alpine Lake
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2560", // Starry Night Mountains
];

const Opening = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-[110vh] w-full overflow-hidden flex flex-col justify-end pb-32 md:pb-48 px-8 md:px-16">
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0 h-[120%]"
            >
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        src={images[currentImage]}
                        alt="Atmospheric Landscape"
                        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-[1.1] brightness-[0.8]"
                    />
                </AnimatePresence>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full flex flex-col items-start mix-blend-difference text-paper"
            >
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 md:mb-8 ml-1"
                >
                    The Art of Voyage
                </motion.span>

                <h1 className="text-[12vw] leading-[0.8] font-serif tracking-tight ml-[-0.05em]">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        Silent
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="block italic font-light opacity-80 pl-[1.5em]"
                    >
                        Whispers
                    </motion.span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-8 right-8 text-paper mix-blend-difference flex items-center gap-4"
            >
                <span className="text-[9px] uppercase tracking-[0.3em]">Begin</span>
                <div className="w-[1px] h-12 bg-current opacity-50" />
            </motion.div>
        </section>
    );
};

export default Opening;
