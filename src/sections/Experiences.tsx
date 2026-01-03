import { motion } from 'framer-motion';
import { experiences } from '../data/resortData';
import { Clock, ExternalLink } from 'lucide-react';

const Experiences = () => {
    return (
        <section id="experiences" className="bg-primary-bg relative py-32">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sand uppercase tracking-[0.6em] text-[10px] mb-6">Curated Moments</h2>
                        <h3 className="text-5xl md:text-7xl text-text-main font-display">Resort <span className="italic font-extralight text-text-main/80">Experiences</span></h3>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-text-main/40 text-[10px] tracking-[0.5em] uppercase"
                    >
                        Bookable moments / Limited availability
                    </motion.p>
                </div>

                <div className="space-y-16">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: idx * 0.3 }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} glass rounded-sm overflow-hidden`}
                        >
                            <div className="lg:w-1/2 relative h-[500px] overflow-hidden group">
                                <motion.img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary-bg/20 group-hover:bg-primary-bg/10 transition-colors duration-1000" />
                            </div>

                            <div className="lg:w-1/2 p-16 lg:p-24 flex flex-col justify-center">
                                <span className="text-sand font-display text-2xl tracking-[0.3em] mb-8">{exp.price}</span>

                                <h4 className="text-4xl md:text-5xl text-text-main mb-8 font-display tracking-tight leading-tight">{exp.title}</h4>

                                <p className="text-text-main/40 text-sm font-light leading-relaxed mb-12 max-w-md">
                                    {exp.description}
                                </p>

                                <div className="flex items-center space-x-6 text-text-main/40 text-[10px] uppercase tracking-[0.5em] mb-12">
                                    <Clock size={16} className="text-sand" strokeWidth={1} />
                                    <span>{exp.duration}</span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-fit px-12 py-5 border border-sand/30 text-sand text-[10px] uppercase tracking-[0.5em] hover:bg-sand hover:text-dark transition-all duration-700 flex items-center space-x-4"
                                >
                                    <span>Reserve Now</span>
                                    <ExternalLink size={14} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
