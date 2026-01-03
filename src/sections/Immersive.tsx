import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Immersive = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);

    return (
        <section id="destinations" ref={containerRef} className="h-[200vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.div style={{ scale, opacity }} className="absolute inset-0 w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2560"
                        alt="Immersive Ocean"
                        className="w-full h-full object-cover brightness-75 grayscale-[30%]"
                    />
                    <div className="absolute inset-0 bg-ink/20" />
                </motion.div>

                <motion.div style={{ opacity: textOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center px-8 mix-blend-overlay">
                        <h2 className="text-[15vw] font-serif text-white leading-none opacity-50">Deep</h2>
                        <h2 className="text-[15vw] font-serif text-white leading-none opacity-50 ml-32">Blue</h2>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Immersive;
