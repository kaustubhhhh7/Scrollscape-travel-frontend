import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Narrative = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" ref={containerRef} className="py-40 md:py-64 px-8 bg-paper text-ink relative overflow-hidden">
            <div className="max-w-[90vw] mx-auto grid grid-cols-12 gap-6 relative z-10">
                <div className="col-span-12 mb-24 md:mb-32 text-center">
                    <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-ink mb-6 uppercase">
                        We are <span className="text-accent-color">Æthelard</span>.<br />Global Tour Travellers.
                    </h2>
                    <p className="text-lg md:text-xl font-serif italic opacity-60">
                        Crafting voyages for the discerning soul.
                    </p>
                </div>

                <div className="col-span-12 md:col-span-5 md:col-start-2 flex flex-col justify-center">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-accent-color mb-8">Chapter I: Solitude</span>
                    <p className="font-serif text-3xl md:text-5xl leading-[1.2] mb-12">
                        We believe true luxury lies in the absence of noise. In the spaces between moments.
                    </p>
                    <p className="text-sm md:text-base font-sans opacity-60 leading-relaxed max-w-sm">
                        Far from the clamor of the known world, we curate sanctuaries where time behaves differently.
                        Where the only soundtrack is the wind moving through ancient stone and the rhythm of tides that have shaped continents.
                    </p>
                </div>

                <div className="col-span-12 md:col-span-4 md:col-start-8 mt-24 md:mt-0 relative">
                    <motion.div style={{ y }} className="relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200"
                            alt="Solitary Tree"
                            className="aspect-[3/4] object-cover w-full grayscale contrast-125 brightness-110"
                        />
                        <div className="absolute -bottom-6 -left-6 w-full h-full border border-ink/10 -z-10" />
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-1/2 left-0 w-full text-[20vw] font-serif text-ink/5 whitespace-nowrap -translate-y-1/2 pointer-events-none select-none">
                SANCTUARY
            </div>
        </section>
    );
};

export default Narrative;
