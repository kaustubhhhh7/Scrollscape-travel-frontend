import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { rooms } from '../data/resortData';
import { Maximize2, ArrowRight } from 'lucide-react';

const Rooms = () => {
    const sectionVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        }
    };

    return (
        <section id="rooms" className="bg-primary-bg relative overflow-hidden py-32">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-sand uppercase tracking-[0.6em] text-[10px] mb-6">Signature Accommodations</h2>
                        <h3 className="text-6xl md:text-8xl text-text-main font-display leading-[0.9]">
                            Suites & <br />
                            <span className="italic font-extralight text-text-main/80">Private Villas</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="max-w-sm"
                    >
                        <p className="text-text-main/40 text-sm leading-relaxed tracking-wide border-l border-sand/30 pl-8">
                            Each sanctuary is a masterpiece of design, offering an immersive connection
                            with the surrounding nature and the absolute tranquility of the ocean.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            variants={cardVariants}
                            className="group relative h-[650px] overflow-hidden rounded-sm cursor-pointer"
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <motion.img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent " />
                                <div className="absolute inset-0 bg-sand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-12">
                                <div className="flex items-center space-x-3 text-sand mb-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">
                                    <span className="text-[10px] uppercase tracking-[0.5em] font-medium">{room.category}</span>
                                </div>

                                <h4 className="text-3xl text-text-main mb-6 font-display group-hover:text-sand transition-colors duration-700">{room.title}</h4>

                                <div className="overflow-hidden mb-8">
                                    <p className="text-text-main/50 text-sm font-light leading-relaxed translate-y-[120%] group-hover:translate-y-0 transition-transform duration-1000 delay-100 line-clamp-2">
                                        {room.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">
                                    {room.features.map(f => (
                                        <span key={f} className="text-[9px] uppercase tracking-[0.3em] text-text-main/40 px-3 py-1 border border-white/5 rounded-full">
                                            {f}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex items-center space-x-3 text-text-main">
                                        <Maximize2 size={14} strokeWidth={1} />
                                        <span className="text-[10px] uppercase tracking-[0.6em]">View Details</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-main group-hover:border-sand group-hover:text-sand transition-all duration-700">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Rooms;
