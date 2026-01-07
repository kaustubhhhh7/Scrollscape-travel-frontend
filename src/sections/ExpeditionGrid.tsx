import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Wind, Mountain, X } from 'lucide-react';

const expeditions = [
    {
        id: "01",
        title: "Amazon Canopy",
        location: "Brazil",
        img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&q=80",
        stats: { temp: "28°C", humidity: "98%", altitude: "40m" },
        desc: "An architectural marvel suspended above the verdant lungs of the earth.",
        icon: <Compass className="w-12 h-12 text-gold/20" />
    },
    {
        id: "02",
        title: "Arctic Silence",
        location: "Svalbard",
        img: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=1600&q=80",
        stats: { temp: "-12°C", humidity: "40%", altitude: "Sea Level" },
        desc: "A glass sanctuary in the heart of the frozen north. Witness the Aurora.",
        icon: <Wind className="w-12 h-12 text-gold/20" />
    },
    {
        id: "03",
        title: "Desert Veil",
        location: "Gobi",
        img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1600&q=80",
        stats: { temp: "35°C", humidity: "10%", altitude: "1500m" },
        desc: "Nomadic luxury redefined. Traverse the dunes in our solar-powered rover.",
        icon: <Compass className="w-12 h-12 text-gold/20" />
    },
    {
        id: "04",
        title: "Alpine Reach",
        location: "Switzerland",
        img: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1600&q=80",
        stats: { temp: "-5°C", humidity: "30%", altitude: "3000m" },
        desc: "High-altitude refinement. A secluded chalet accessible only by heli-drop.",
        icon: <Mountain className="w-12 h-12 text-gold/20" />
    }
];

const ExpeditionGrid = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className="py-40 bg-ink text-paper relative">
            <div className="px-6 md:px-24 mb-32 flex flex-col items-center text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[10px] uppercase tracking-[0.8em] text-gold mb-8 block"
                >
                    The Index
                </motion.span>
                <h2 className="text-6xl md:text-9xl font-serif leading-[0.9]">
                    Frontier <br />
                    <span className="italic-mask text-ink text-stroke-paper">Manifesto</span>
                </h2>
            </div>

            <div className="max-w-[90vw] mx-auto border-t border-paper/10">
                {expeditions.map((exp) => (
                    <div
                        key={exp.id}
                        onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
                        className="relative border-b border-paper/10 group bg-ink hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer"
                    >
                        {/* Header ROW - Clean, no details */}
                        <div className="py-12 px-8 md:px-16 flex items-center justify-between relative z-20">
                            <div className="flex items-baseline gap-12 md:gap-24">
                                <span className={`text-xl font-mono transition-colors duration-500 ${activeId === exp.id ? 'text-gold' : 'text-paper/20'}`}>
                                    {exp.id}—EXP
                                </span>
                                <h3 className="text-4xl md:text-7xl font-serif group-hover:translate-x-4 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                                    {exp.title}
                                </h3>
                            </div>

                            <div className="hidden md:flex items-center gap-4">
                                <span className="text-xs uppercase tracking-[0.4em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{exp.location}</span>
                                <motion.div
                                    animate={{ rotate: activeId === exp.id ? 45 : 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {activeId === exp.id ? <X className="w-6 h-6 text-gold" /> : <ArrowRight className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </motion.div>
                            </div>
                        </div>

                        {/* Expanded Content Area - ON CLICK ONLY */}
                        <AnimatePresence>
                            {activeId === exp.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden bg-ink"
                                >
                                    <div className="px-8 md:px-16 pb-16 pt-4 flex flex-col md:flex-row gap-16">

                                        {/* IMAGE REVEAL */}
                                        <div className="w-full md:w-1/2 aspect-video overflow-hidden relative">
                                            <motion.img
                                                initial={{ scale: 1.1, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 1.2, delay: 0.2 }}
                                                src={exp.img}
                                                alt={exp.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* TEXT DETAILS */}
                                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                                            <p className="text-2xl md:text-3xl font-light leading-relaxed text-paper font-serif italic mb-12">
                                                "{exp.desc}"
                                            </p>

                                            <div className="grid grid-cols-3 gap-12 border-t border-gold/20 pt-8">
                                                {Object.entries(exp.stats).map(([key, value]) => (
                                                    <div key={key} className="flex flex-col">
                                                        <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">{key}</span>
                                                        <span className="text-xl font-mono text-gold">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpeditionGrid;
