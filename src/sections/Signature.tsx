
const Signature = () => {
    return (
        <section className="py-40 px-8 bg-paper text-ink">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col gap-32">
                    {[
                        {
                            title: "Private Aviation",
                            desc: "Seamless connectivity from tarmac to terrace.",
                            img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800"
                        },
                        {
                            title: "Culinary Arts",
                            desc: "Flavors curated by the seasons, local and wild.",
                            img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
                        },
                        {
                            title: "Wellness",
                            desc: "Restoration of the self in spaces of absolute quiet.",
                            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 group`}>
                            <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105 transform origin-center"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <span className="text-xs uppercase tracking-[0.3em] opacity-40 mb-4 block">0{idx + 1}</span>
                                <h3 className="text-4xl md:text-6xl font-serif mb-6 group-hover:italic transition-all duration-500">{item.title}</h3>
                                <p className="text-sm md:text-base opacity-60 max-w-xs leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Signature;
