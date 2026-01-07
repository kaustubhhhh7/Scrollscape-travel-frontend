import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Map, Clock, Zap } from 'lucide-react';

const services = [
    {
        icon: <Shield className="w-5 h-5" />,
        title: "Global Security",
        desc: "Unobtrusive, professional protection for every step of your journey.",
        stat: "100% Secure"
    },
    {
        icon: <Map className="w-5 h-5" />,
        title: "Expert Liaisons",
        desc: "Local dignitaries and experts who open doors to the inaccessible.",
        stat: "Global Network"
    },
    {
        icon: <Clock className="w-5 h-5" />,
        title: "24/7 Precision",
        desc: "Infinite dedicated support, anticipating every whim before it arises.",
        stat: "Instant Response"
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Seamless Transit",
        desc: "Private jets and curated transport waiting at every transition.",
        stat: "Door-to-Door"
    }
];

const PrestigeServices = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="py-20 md:py-24 px-6 md:px-24 bg-paper relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full lg:w-3/5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[10px] uppercase tracking-[0.5em] text-gold">Beyond Concierge</span>
                            <div className="h-px w-12 bg-gold/30" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-ink/30 italic">Est. 1988</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] text-ink mb-8">
                            The Art of <br />
                            <span className="italic-mask text-4xl md:text-7xl">Oversight</span>
                        </h2>
                        <p className="text-ink/60 text-base md:text-lg font-light leading-relaxed max-w-lg">
                            Our service model transcends traditional hospitality. We provide a silent, invisible infrastructure that turns the world into your private sanctuary.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 border border-ink/5 hover:border-gold/20 transition-all bg-ink/[0.01]"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-gold transform group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <span className="text-[8px] uppercase tracking-widest text-ink/20 font-bold">{service.stat}</span>
                                </div>
                                <h4 className="text-lg font-serif text-ink mb-2">{service.title}</h4>
                                <p className="text-ink/40 text-xs font-sans tracking-wide leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-2/5 relative">
                    <div className="aspect-[3/4] overflow-hidden rounded-sm relative bg-ink/5 shadow-2xl">
                        <motion.img
                            style={{ y: imgY, scale: 1.1 }}
                            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80"
                            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                            alt="Luxury Service"
                        />
                        <div className="absolute inset-0 border border-ink/5 pointer-events-none" />
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="absolute -bottom-8 -left-8 hidden xl:flex w-56 h-56 glass-dark p-8 flex-col justify-between shadow-2xl border border-white/10"
                    >
                        <span className="text-gold/20 font-serif text-5xl">01</span>
                        <p className="text-paper text-[9px] uppercase tracking-widest leading-relaxed font-medium">
                            Every detail is triple-verified by our Zurich based coordination hub.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrestigeServices;
