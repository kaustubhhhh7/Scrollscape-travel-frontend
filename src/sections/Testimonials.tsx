import { motion } from 'framer-motion';

const reviews = [
    {
        quote: "Silence is not empty. It is full of answers.",
        author: "Elena R.",
        location: "Kyoto Retreat"
    },
    {
        quote: "I found a version of myself I thought was lost in the noise of the city.",
        author: "Marcus T.",
        location: "Icelandic Highlands"
    },
    {
        quote: "Not just a journey, but a returning.",
        author: "Sarah J.",
        location: "Namib Sands"
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 md:py-48 px-8 bg-paper text-ink overflow-hidden">
            <div className="max-w-[90vw] mx-auto">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent-color mb-16 block text-center">Voices</span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 opacity-80">"{review.quote}"</p>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-bold uppercase tracking-widest">{review.author}</span>
                                    <span className="text-[10px] uppercase tracking-widest opacity-40">{review.location}</span>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
