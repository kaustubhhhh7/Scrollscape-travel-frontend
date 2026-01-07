import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
    {
        day: "06",
        title: "The Arrival",
        desc: "Private jet transit to the edge of the map. Champagne reception upon landing at our remote airstrip.",
        img: "https://images.unsplash.com/photo-1520437358207-323b43b50729?w=1600&q=80"
    },
    {
        day: "05",
        title: "The Sanctuary",
        desc: "Acclimatize in our eco-glass pods nestled within the ancient fern forest. Silence redefined.",
        img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&q=80"
    },
    {
        day: "04",
        title: "The Horizon",
        desc: "Helicopter transfers to nomadic camps. Explore landscapes that have remained unchanged for millennia.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
    },
    {
        day: "03",
        title: "The Void",
        desc: "A spiritual trek across the salt flats. Guided meditation under the most star-dense sky on Earth.",
        img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1600&q=80"
    },
    {
        day: "02",
        title: "The Zenith",
        desc: "Crest unexplored peaks and enjoy a Michelin-starred dinner atop the world's highest private terrace.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
    },
    {
        day: "01",
        title: "The Ascent",
        desc: "A final three-day retreat in our glass sanctuary for reflection before the private return journey.",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80"
    }
];

const CuratedJourney = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    // Inversed scroll: content moves from left to right (Starts at -90% and moves to 0% to accommodate wider content)
    const x = useTransform(scrollYProgress, [0, 1], ["-90%", "0%"]);


    return (
        <section ref={containerRef} className="relative h-[300vh] bg-paper">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                {/* Luxury Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-[15vw] bg-gradient-to-r from-[var(--color-paper)] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-[15vw] bg-gradient-to-l from-[var(--color-paper)] to-transparent z-10 pointer-events-none" />

                <motion.div style={{ x }} className="flex flex-row-reverse gap-12 md:gap-24 px-12 md:px-24 items-center">
                    {/* Introductory Text now on the RIGHT side in the DOM, 
                        but flex-row-reverse makes it the first thing visible at x="-75%" */}
                    <div className="flex flex-col justify-center min-w-[300px] md:min-w-[450px] ml-12 md:ml-24">
                        <span className="text-[10px] uppercase tracking-[0.8em] text-ink/30 block mb-6">Chronicle</span>
                        <h2 className="text-5xl md:text-8xl font-serif text-ink tracking-tight mb-8 leading-[0.9]">
                            The Seven Day <br /><span className="italic-mask text-4xl md:text-7xl">Eclipse</span>
                        </h2>
                        <p className="text-ink/40 text-[10px] uppercase tracking-[0.4em] max-w-xs leading-loose">
                            A rigid schedule is the enemy of luxury. Our itineraries are frameworks for serendipity.
                        </p>
                    </div>

                    {[...steps].reverse().map((step) => (
                        <div key={step.day} className="flex flex-col justify-center min-w-[70vw] md:min-w-[45vw] group cursor-pointer">
                            <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-ink/5">
                                <motion.img
                                    src={step.img}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:brightness-110"
                                    alt={step.title}
                                />
                                <div className="absolute top-6 left-6 text-paper text-4xl md:text-6xl font-serif opacity-40 group-hover:opacity-100 transition-opacity">
                                    {step.day}
                                </div>
                            </div>
                            <div className="px-2">
                                <h3 className="text-2xl md:text-4xl font-serif text-ink mb-4 group-hover:text-gold transition-colors">{step.title}</h3>
                                <p className="text-ink/60 text-sm md:text-base font-light leading-relaxed max-w-md">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-col justify-center min-w-[50vw] md:min-w-[30vw] border-r border-ink/10 pr-24 mr-12 md:mr-24">
                        <h3 className="text-5xl md:text-8xl font-serif text-ink opacity-10 uppercase tracking-tighter">Your <br /> Story <br /> Awaits</h3>
                        <button className="mt-12 text-[10px] uppercase tracking-[0.6em] text-gold border border-gold/30 px-12 py-5 hover:bg-gold hover:text-ink transition-all w-fit font-bold">
                            Begin Expedition
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CuratedJourney;
