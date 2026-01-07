import { motion } from 'framer-motion';
import { useState } from 'react';
import MembershipForm from '../components/MembershipForm';

const EliteClub = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const vvipImg = "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1600&q=80";

    return (
        <section className="relative min-h-[90vh] bg-ink flex items-center justify-center overflow-hidden py-24">
            {/* Background Image with Parallax-like scale */}
            <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.25 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0 bg-ink"
            >
                <img
                    src={vvipImg}
                    className="w-full h-full object-cover"
                    alt="VVIP Experience"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink z-10" />

            <div className="relative z-20 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-gold uppercase tracking-[1em] text-[10px] mb-8 block">Private Membership</span>
                    <h2 className="text-6xl md:text-[10rem] font-serif leading-none text-paper mb-12">
                        The <span className="italic-mask text-5xl md:text-9xl">Onyx</span> Circle
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16">
                    {[
                        { label: "Active Since", value: "1988" },
                        { label: "Guest Index", value: "V-142" },
                        { label: "Status", value: "Private" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
                        >
                            <span className="block text-paper/30 text-[10px] uppercase tracking-[0.4em] mb-3">{stat.label}</span>
                            <span className="text-2xl font-serif text-gold">{stat.value}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <p className="text-paper/40 text-[11px] md:text-sm max-w-md mb-10 font-light leading-relaxed uppercase tracking-widest">
                        Access is strictly by invitation or peer recommendation. Our vetting process ensures a community of shared values and unparalleled discretion.
                    </p>
                    <motion.button
                        onClick={() => setIsFormOpen(true)}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212, 175, 55, 0.15)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold text-ink px-12 md:px-16 py-5 md:py-6 text-[10px] uppercase tracking-[0.6em] transition-all duration-500 font-bold"
                    >
                        Request Entry
                    </motion.button>
                </motion.div>
            </div>

            {/* Subtle floating elements */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-24 h-[1px] bg-gold/10 hidden lg:block"
            />
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-10 w-32 h-[1px] bg-gold/10 hidden lg:block"
            />

            <MembershipForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </section>
    );
};

export default EliteClub;
