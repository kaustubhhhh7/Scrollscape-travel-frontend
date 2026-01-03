import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DestinationModal from '../components/DestinationModal';

const destinations = [
    {
        id: "01",
        title: "Highlands",
        img: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&q=80&w=1600",
        loc: "Scotland"
    },
    {
        id: "02",
        title: "Dunes",
        img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600",
        loc: "Namibia"
    },
    {
        id: "03",
        title: "Glacier",
        img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=1600",
        loc: "Iceland"
    },
    {
        id: "04",
        title: "Kyoto",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1600",
        loc: "Japan"
    }
];

const Showcase = () => {
    const targetRef = useRef(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    const selectedDestination = destinations.find(d => d.id === selectedId) || null;

    return (
        <section id="experiences" ref={targetRef} className="relative h-[400vh] bg-ink text-paper">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 md:gap-24 px-4 md:px-24 items-center">
                    <div className="flex flex-col justify-center min-w-[85vw] md:min-w-[30vw] shrink-0">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-accent-color mb-8">Selected Works</span>
                        <h2 className="text-4xl md:text-8xl font-serif max-w-xl">
                            Curated <br /> <span className="opacity-50 italic">Horizons</span>
                        </h2>
                    </div>

                    {destinations.map((dest) => (
                        <motion.div
                            key={dest.id}
                            layoutId={`destination-container-${dest.id}`}
                            onClick={() => setSelectedId(dest.id)}
                            className="relative group w-[85vw] md:w-[40vw] flex-shrink-0 aspect-[3/4] md:aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 cursor-pointer"
                        >
                            <motion.img
                                layoutId={`destination-image-${dest.id}`}
                                src={dest.img}
                                alt={dest.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 left-0 p-6 md:p-8 flex justify-between w-full mix-blend-difference text-white pointer-events-none">
                                <span className="text-xs md:text-sm font-mono">{dest.id}</span>
                                <span className="text-xs md:text-sm font-mono">{dest.loc}</span>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 md:p-8 pointer-events-none">
                                <h3 className="text-4xl md:text-7xl font-serif text-transparent stroke-text group-hover:text-white transition-colors duration-700">
                                    {dest.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}

                    <div className="flex flex-col justify-center min-w-[50vw] md:min-w-[30vw] pl-12 md:pl-24">
                        <span className="text-6xl md:text-9xl font-serif opacity-10">End</span>
                    </div>
                </motion.div>
            </div>

            <DestinationModal
                destination={selectedDestination}
                onClose={() => setSelectedId(null)}
            />
        </section>
    );
};

export default Showcase;
