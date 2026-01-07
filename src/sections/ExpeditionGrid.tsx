import { motion } from 'framer-motion';
import { useState } from 'react';
import DestinationModal from '../components/DestinationModal';

const expeditions = [
    {
        id: "EXP-01",
        title: "Amazon Canopy",
        location: "Brazil",
        img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&q=80",
        loc: "Brazil",
        size: "large",
        desc: "An architectural marvel suspended above the verdant lungs of the earth. Preservation: 98% Intact Environment.",
        preservation: "98%"
    },
    {
        id: "EXP-02",
        title: "Arctic Silence",
        location: "Svalbard",
        img: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=1600&q=80",
        loc: "Svalbard",
        size: "small",
        desc: "A glass sanctuary in the heart of the frozen north. Witness the Aurora. Preservation: 100% Ancient Ice.",
        preservation: "100%"
    },
    {
        id: "EXP-03",
        title: "Desert Veil",
        location: "Gobi",
        img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1600&q=80",
        loc: "Gobi",
        size: "small",
        desc: "Nomadic luxury redefined. Traverse the dunes. Preservation: 94% Undiscovered Sands.",
        preservation: "94%"
    },

    {
        id: "EXP-04",
        title: "Alpine Reach",
        location: "Switzerland",
        img: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1600&q=80",
        loc: "Switzerland",
        size: "medium",
        desc: "High-altitude refinement. A secluded chalet. Preservation: 99% Crystalline Peaks.",
        preservation: "99%"
    }
];

const ExpeditionGrid = () => {
    const [selectedExp, setSelectedExp] = useState<any>(null);

    return (
        <section className="py-24 md:py-32 bg-ink text-paper overflow-hidden relative">
            <div className="px-6 md:px-24 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] uppercase tracking-[0.8em] text-gold mb-6 block font-light">The Collection</span>
                    <h2 className="text-5xl md:text-9xl font-serif">Frontier <br /><span className="italic-mask text-6xl md:text-[10rem]">Archeotypes</span></h2>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 px-6 md:px-24">
                {expeditions.map((exp, idx) => (
                    <motion.div
                        key={exp.id}
                        layoutId={`destination-container-${exp.id}`}
                        initial={{ opacity: 0, scale: 0.98, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedExp(exp)}
                        className={`relative group overflow-hidden cursor-pointer bg-white/5 shadow-2xl ${exp.size === 'large' ? 'md:col-span-8 aspect-[16/9]' :
                            'md:col-span-4 aspect-[4/5]'
                            }`}
                    >
                        <motion.img
                            layoutId={`destination-image-${exp.id}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            src={exp.img}
                            className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                            alt={exp.title}
                        />

                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">{exp.location}</span>
                            <h3 className="text-2xl md:text-4xl font-serif text-paper">{exp.title}</h3>
                            <div className="w-0 group-hover:w-full h-px bg-gold transition-all duration-1000 mt-4 delay-200" />
                            <p className="max-h-0 group-hover:max-h-20 overflow-hidden text-[10px] text-paper/60 uppercase tracking-widest mt-4 transition-all duration-700 font-light">
                                Discover the details <br /> of this {exp.id} expedition.
                            </p>
                        </div>

                        <div className="absolute top-8 right-8 mix-blend-difference">
                            <span className="text-xs font-mono text-paper opacity-40">#{exp.id.split('-')[1]}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 border-t border-paper/10 pt-12 px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 max-w-xs transition-opacity hover:opacity-100 cursor-default text-center md:text-left">
                    Each itinerary is single-occupancy focused, designed to preserve the sanctity of the experience.
                </p>
                <div className="flex gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-[10px] uppercase tracking-[0.4em] text-paper/60 hover:text-gold transition-colors"
                    >
                        Filter by Mood
                    </motion.button>
                    <motion.button
                        whileHover={{ letterSpacing: '0.8em', backgroundColor: 'var(--color-gold)', color: 'var(--color-ink)' }}
                        transition={{ duration: 0.4 }}
                        className="text-[10px] uppercase tracking-[0.4em] text-gold border border-gold/30 px-8 md:px-12 py-4 md:py-5 transition-all"
                    >
                        Full Portfolio
                    </motion.button>
                </div>
            </div>

            <DestinationModal
                destination={selectedExp ? {
                    id: selectedExp.id,
                    title: selectedExp.title,
                    img: selectedExp.img,
                    loc: selectedExp.location,
                    description: selectedExp.desc
                } : null}
                onClose={() => setSelectedExp(null)}
            />
        </section>
    );
};

export default ExpeditionGrid;
