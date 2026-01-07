import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const duration = 1500;

        const timer = setTimeout(() => {
            onComplete();
        }, duration + 400);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[999] bg-[#0A0A0A] text-[#F6F5F2] flex flex-col items-center justify-center"
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 flex flex-col items-center"
                >
                    <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mix-blend-difference">
                        SCROLLSCAPE
                    </h1>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
