import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const moodConfigs: any = {
    cinematic: {
        images: [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2560&q=80",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2560&q=80"
        ],
        accent: "#D4AF37",
        title: "Silent Whispers"
    },
    calm: {
        images: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2560&q=80",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=2560&q=80"
        ],
        accent: "#065F46",
        title: "Absolute Serenity"
    },
    vibrant: {
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2560&q=80",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=2560&q=80"
        ],
        accent: "#10B981",
        title: "Boundless Frontier"
    }
};

const Opening = () => {
    const [mood, setMood] = useState('cinematic');
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % moodConfigs[mood].images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [mood]);

    return (
        <section id="home" className="relative h-[110vh] w-full overflow-hidden flex flex-col justify-end pb-24 md:pb-40 px-8 md:px-16 bg-ink">
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0 h-[120%]"
            >
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={`${mood}-${currentImage}`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        src={moodConfigs[mood].images[currentImage]}
                        alt="Atmospheric Landscape"
                        className="absolute inset-0 w-full h-full object-cover grayscale-[10%] brightness-[0.7]"
                    />
                </AnimatePresence>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full flex flex-col items-start mix-blend-difference text-paper"
            >
                <div className="flex gap-4 mb-8 md:mb-12">
                    {Object.keys(moodConfigs).map((m) => (
                        <button
                            key={m}
                            onClick={() => { setMood(m); setCurrentImage(0); }}
                            className={`text-[9px] uppercase tracking-[0.4em] transition-all py-1 border-b ${mood === m ? 'border-gold text-gold' : 'border-transparent opacity-40 hover:opacity-80'}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>

                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 md:mb-8 ml-1"
                >
                    The Art of Voyage
                </motion.span>

                <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-serif tracking-tight ml-[-0.05em]">
                    <motion.span
                        key={`title-1-${mood}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        {moodConfigs[mood].title.split(' ')[0]}
                    </motion.span>
                    <motion.span
                        key={`title-2-${mood}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="block italic-mask font-light pl-[1.5em] md:pl-[2em]"
                    >
                        {moodConfigs[mood].title.split(' ')[1]}
                    </motion.span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-12 right-12 text-paper mix-blend-difference flex items-center gap-6"
            >
                <div className="flex flex-col items-end">
                    <span className="text-[8px] uppercase tracking-[0.4em] opacity-40">Scroll to</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-serif italic text-gold">Immerse</span>
                </div>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-paper to-transparent opacity-30" />
            </motion.div>
        </section>
    );
};

export default Opening;
