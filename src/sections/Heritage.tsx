import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Heritage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={ref} className="py-40 bg-[#0F0F0F] text-[#F6F5F2] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />

            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
                <div className="order-2 md:order-1">
                    <motion.div style={{ y }} className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=1000"
                            alt="Old Map and Compass"
                            className="grayscale opacity-60 w-full h-auto object-cover"
                        />
                        <div className="absolute -top-12 -left-12 text-8xl md:text-[120px] font-serif opacity-10 pointer-events-none">1988</div>
                    </motion.div>
                </div>

                <div className="order-1 md:order-2 flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#D9C9A6] mb-8">Heritage</span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                        Born from <span className="italic opacity-60">Curiosity</span>
                    </h2>
                    <p className="font-light leading-relaxed opacity-60 max-w-md mb-8">
                        Founded three decades ago by a collective of explorers, architects, and philosophers,
                        Æthelard began as a private journal of the world's most untouched corners.
                    </p>
                    <p className="font-light leading-relaxed opacity-60 max-w-md">
                        Today, we remain a closed circle, offering keys to these hidden doors only to those
                        who understand that the greatest luxury is not gold, but perspective.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Heritage;
