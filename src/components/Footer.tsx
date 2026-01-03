import { Compass, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-surface-bg pt-40 pb-20 border-t border-white/5">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-4 mb-14">
                            <Compass className="w-10 h-10 text-sand" />
                            <span className="text-3xl font-display font-medium tracking-[0.5em] text-text-main">
                                LUMINA
                            </span>
                        </div>
                        <p className="text-text-main/20 text-[10px] leading-relaxed mb-14 tracking-[0.5em] max-w-xs uppercase">
                            The definitive standard in island hospitality.
                            Curating tranquility since 2010.
                        </p>
                        <div className="flex space-x-12 text-text-main/10">
                            {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                                <Icon
                                    key={idx}
                                    className="cursor-pointer hover:text-sand transition-all duration-1000 scale-125 hover:scale-150"
                                    size={20}
                                    strokeWidth={1}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-text-main text-[10px] uppercase tracking-[0.8em] mb-14 font-medium">The Resort</h4>
                        <ul className="space-y-8">
                            {['Home', 'Accommodations', 'Amenities', 'Experiences'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-text-main/20 hover:text-sand text-[10px] transition-all duration-1000 uppercase tracking-[0.6em] link-underline inline-block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-text-main text-[10px] uppercase tracking-[0.8em] mb-14 font-medium">Location</h4>
                        <ul className="space-y-10 text-[10px] text-text-main/20 tracking-[0.6em] font-light uppercase">
                            <li>North Atoll, Maldives <br /><span className="text-sand/20 mt-3 block">Private Island</span></li>
                            <li>+960 7946 0123 <br /><span className="text-sand/20 mt-3 block">Concierge Desk</span></li>
                            <li>stays@lumina.resort <br /><span className="text-sand/20 mt-3 block">Reservation Office</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-text-main text-[10px] uppercase tracking-[0.8em] mb-14 font-medium">Newsletter</h4>
                        <p className="text-text-main/20 text-[10px] mb-12 leading-relaxed tracking-[0.5em] uppercase max-w-xs">
                            Join our private circle for seasonal invitations.
                        </p>
                        <div className="flex border-b border-white/5 pb-5 group focus-within:border-sand transition-colors duration-1000">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent border-none text-[9px] text-text-main placeholder:text-text-main/5 focus:ring-0 w-full uppercase tracking-[0.8em]"
                            />
                            <button className="text-sand text-[10px] uppercase tracking-[0.8em] ml-6 hover:scale-105 transition-transform duration-1000">Join</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 gap-16">
                    <p className="text-text-main/[0.05] text-[8px] uppercase tracking-[1em] font-medium">
                        © MMXXVI LUMINA RESORT & SPA. BEYOND HOSPITALITY.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex flex-col items-center space-y-6"
                    >
                        <div className="w-16 h-16 border border-white/5 rounded-full flex items-center justify-center text-text-main/10 group-hover:border-sand group-hover:text-sand transition-all duration-1000 group-hover:-translate-y-3">
                            <ArrowUp size={24} strokeWidth={0.5} />
                        </div>
                        <span className="text-[8px] uppercase tracking-[1em] text-text-main/[0.05] group-hover:text-sand transition-colors duration-1000">Ascend</span>
                    </button>

                    <div className="flex space-x-16 text-text-main/[0.05] text-[8px] uppercase tracking-[0.8em] font-medium">
                        <a href="#" className="hover:text-sand transition-colors duration-1000">Privacy</a>
                        <a href="#" className="hover:text-sand transition-colors duration-1000">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
