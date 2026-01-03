import { motion } from 'framer-motion';
import { Waves, Flower2, Utensils, Palmtree } from 'lucide-react';

const Amenities = () => {
    const facilities = [
        {
            icon: <Flower2 className="w-8 h-8" />,
            title: 'Spa & Wellness',
            desc: 'A holistic haven inspired by ancient rituals and thermal therapy.'
        },
        {
            icon: <Waves className="w-8 h-8" />,
            title: 'Infinity Pool',
            desc: 'Overlooking the horizon, where the sky meets the emerald ocean.'
        },
        {
            icon: <Utensils className="w-8 h-8" />,
            title: 'Fine Dining',
            desc: 'A collection of bespoke culinary experiences curated by Michelin chefs.'
        },
        {
            icon: <Palmtree className="w-8 h-8" />,
            title: 'Private Beach',
            desc: 'Pristine white sands reserved exclusively for our distinguished guests.'
        }
    ];

    return (
        <section id="amenities" className="bg-surface-bg border-y border-white/5 relative overflow-hidden py-32">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-10" />

            <div className="container mx-auto px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sand uppercase tracking-[0.6em] text-[10px] mb-6"
                    >
                        Resort Amenities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl text-text-main font-display leading-[1.1]"
                    >
                        Designed for <span className="italic font-extralight text-text-main/80">Absolute</span> Serenity
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilities.map((facility, idx) => (
                        <motion.div
                            key={facility.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 1.2 }}
                            whileHover={{ y: -10 }}
                            className="glass p-16 text-center group transition-all duration-1000 hover:bg-white/[0.03]"
                        >
                            <div className="w-20 h-20 mx-auto mb-12 rounded-full border border-sand/20 flex items-center justify-center text-sand transition-all duration-1000 group-hover:scale-110 group-hover:bg-sand group-hover:text-dark">
                                {facility.icon}
                            </div>
                            <h4 className="text-xl text-text-main mb-6 font-display tracking-widest uppercase">{facility.title}</h4>
                            <p className="text-text-main/30 text-[10px] leading-relaxed tracking-[0.2em] font-light uppercase">
                                {facility.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
