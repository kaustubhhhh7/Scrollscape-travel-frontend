import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="bg-primary-bg relative overflow-hidden py-48">
            <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-sand/[0.03] blur-[250px] rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-ivory/[0.02] blur-[200px] rounded-full translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.99 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="glass p-24 md:p-48 rounded-sm border-white/5 relative"
                >
                    <div className="absolute top-12 left-12 text-[8px] uppercase tracking-[1em] text-sand/30 [writing-mode:vertical-lr] font-medium">RESERVE PRIVACY</div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1.5 }}
                    >
                        <h2 className="text-sand uppercase tracking-[0.8em] text-[10px] mb-12">Private Escape</h2>
                        <h3 className="text-5xl md:text-[7rem] text-text-main mb-24 font-display leading-[1] tracking-tighter">
                            Your Private <br />
                            <span className="italic font-extralight text-text-main/90">Sanctuary Awaits.</span>
                        </h3>

                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "#FFFFF0", color: "#050505" }}
                            whileTap={{ scale: 0.98 }}
                            className="px-20 py-8 bg-sand text-dark font-medium uppercase tracking-[0.5em] text-[10px] transition-all duration-1000 rounded-sm shadow-[0_30px_70px_rgba(194,178,128,0.1)]"
                        >
                            Reserve Your Escape
                        </motion.button>
                    </motion.div>

                    <div className="absolute bottom-12 right-12 text-[8px] uppercase tracking-[1em] text-sand/30 [writing-mode:vertical-lr] font-medium rotate-180">MALDIVES · SEYCHELLES · BALI</div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
