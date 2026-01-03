import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.8,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        },
    };

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-0 pb-0">
            {/* Background Section */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 15, ease: "linear" }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/70 via-primary-bg/30 to-primary-bg" />

                {/* Subtle Cinematic Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 3 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,178,128,0.1),transparent_70%)]"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-6 max-w-6xl"
            >
                <motion.div variants={itemVariants} className="inline-block mb-8">
                    <span className="text-sand uppercase tracking-[0.6em] text-[10px] md:text-xs px-6 py-2 border border-sand/20 rounded-full glass">
                        Exclusivity Reimagined
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-[8rem] font-display text-white mb-10 leading-[0.9] tracking-tight"
                >
                    A World-Class <span className="italic font-extralight block md:inline text-white/90">Resort</span> <br />
                    Experience
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-white/60 text-base md:text-lg font-light mb-16 max-w-2xl mx-auto leading-relaxed tracking-wider"
                >
                    Where comfort, elegance, and absolute privacy meet.
                    Discover your sanctuary in the heart of the ocean.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-14 py-6 bg-sand text-dark font-medium uppercase tracking-[0.4em] text-[10px] hover:bg-ivory transition-all duration-700 rounded-sm shadow-[0_20px_50px_rgba(194,178,128,0.15)]"
                    >
                        Book Your Stay
                    </motion.button>

                    <motion.button
                        whileHover={{ x: 10 }}
                        className="flex items-center space-x-6 text-white/80 uppercase tracking-[0.4em] text-[10px] transition-colors group"
                    >
                        <span className="group-hover:text-sand transition-colors">The Experience</span>
                        <div className="w-24 h-px bg-ivory/20 group-hover:bg-sand transition-all duration-700" />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Floating Sand Glow */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sand/5 blur-[150px] rounded-full pointer-events-none"
            />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 cursor-pointer group"
                onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-white/20 text-[8px] uppercase tracking-[0.5em] group-hover:text-sand transition-colors">Explore Sanctuary</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-sand/40 group-hover:text-sand transition-colors"
                >
                    <ChevronDown size={20} strokeWidth={1} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
