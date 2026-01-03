import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 100;
        const stepTime = duration / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, stepTime);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, duration + 800);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[999] bg-[#0A0A0A] text-[#F6F5F2] flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-md px-8 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-12"
                >
                    <h1 className="font-serif text-5xl md:text-7xl tracking-tighter">
                        Æthelard
                    </h1>
                </motion.div>

                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="absolute left-0 top-0 h-full bg-white/40"
                        initial={{ width: "0%" }}
                        animate={{ width: `${count}%` }}
                    />
                </div>

                <div className="mt-4 flex justify-between w-full text-[10px] uppercase tracking-widest opacity-40 font-mono">
                    <span>Loading Experience</span>
                    <span>{count}%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
