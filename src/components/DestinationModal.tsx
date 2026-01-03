import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface DestinationDetail {
    id: string;
    title: string;
    img: string;
    loc: string;
    description?: string;
}

interface DestinationModalProps {
    destination: DestinationDetail | null;
    onClose: () => void;
}

const DestinationModal = ({ destination, onClose }: DestinationModalProps) => {
    return (
        <AnimatePresence>
            {destination && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-ink/90 backdrop-blur-md z-[60]"
                    />

                    <motion.div
                        layoutId={`destination-container-${destination.id}`}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div className="bg-paper text-ink w-full max-w-5xl h-[85vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl pointer-events-auto relative">

                            <div className="relative h-1/2 md:h-full overflow-hidden">
                                <motion.img
                                    layoutId={`destination-image-${destination.id}`}
                                    src={destination.img}
                                    alt={destination.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-6 left-6 mix-blend-difference text-white">
                                    <span className="text-xs uppercase tracking-[0.2em] block mb-2">{destination.loc}</span>
                                    <span className="font-mono text-sm opacity-60">Cord: 45.4N, 12.3E</span>
                                </div>
                            </div>

                            <div className="p-6 md:p-16 flex flex-col justify-between h-1/2 md:h-full relative overflow-y-auto md:overflow-hidden">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 md:top-8 md:right-8 p-2 hover:bg-ink/5 rounded-full transition-colors z-50 rounded-full"
                                >
                                    <X size={24} className="opacity-50 hover:opacity-100" />
                                </button>

                                <div>
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-accent-color text-xs uppercase tracking-[0.4em] block mb-6"
                                    >
                                        Expedition {destination.id}
                                    </motion.span>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-5xl md:text-7xl font-serif mb-8"
                                    >
                                        {destination.title}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-sm md:text-base opacity-60 leading-relaxed max-w-md"
                                    >
                                        Experience the untouched serenity of the {destination.loc} landscape.
                                        A journey designed for those who seek silence amidst the grandeur of nature.
                                        This curated expedition offers private access to restricted reserves
                                        and nocturnal stargazing events.
                                    </motion.p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-6 mt-12 pt-8 border-t border-ink/10"
                                >
                                    <button className="flex items-center gap-3 text-xs uppercase tracking-widest hover:text-accent-color transition-colors group">
                                        View Itinerary
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="flex items-center gap-3 text-xs uppercase tracking-widest hover:text-accent-color transition-colors group">
                                        Book Private Tour
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default DestinationModal;
