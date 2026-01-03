import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, MapPin, User, Mail, Home } from 'lucide-react';

const navConfig = [
    {
        id: 'home',
        label: 'Home',
        mood: 'cinematic', // Dark background, Light text
        accent: '#D9C9A6', // Champagne
        icon: Home
    },
    {
        id: 'about',
        label: 'Journal', // "About"
        mood: 'calm', // Light background, Dark text
        accent: '#065F46', // Emerald
        icon: User
    },
    {
        id: 'experiences',
        label: 'Works', // "Experiences"
        mood: 'cinematic',
        accent: '#D4AF37', // Gold
        icon: Compass
    },
    {
        id: 'destinations',
        label: 'Locations', // "Destinations"
        mood: 'vibrant', // Image bg
        accent: '#F9E29B', // Light Gold
        icon: MapPin
    },
    {
        id: 'contact',
        label: 'Connect', // "Contact"
        mood: 'cinematic',
        accent: '#D9C9A6',
        icon: Mail
    },
];

const PremiumNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle Resize to close mobile menu on desktop transition
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    // ... (keep existing useEffects)

    // Scroll Detection for Opacity
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for Section Tracking
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Center focused
            threshold: 0
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        navConfig.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const activeItem = navConfig.find((n) => n.id === activeSection) || navConfig[0];
    const isDarkText = activeItem.mood === 'calm';

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: scrolled ? 0.9 : 1,
                y: 0
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-6 right-6 z-50 flex flex-col items-end"
        >
            {/* Desktop Navigation - Hover-Activated Vertical Cluster */}
            <div
                className="hidden md:flex flex-col items-end gap-2 pointer-events-auto p-4 -mr-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence>
                    {navConfig.map((item) => {
                        const isActive = activeSection === item.id;
                        const isVisible = isActive || isHovered;

                        if (!isVisible) return null;

                        return (
                            <motion.button
                                key={item.id}
                                layout
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onClick={() => scrollToSection(item.id)}
                                className={`h-10 px-4 rounded-full flex items-center justify-end gap-3 transition-colors duration-500 backdrop-blur-md border border-transparent
                                    ${isActive
                                        ? isDarkText ? 'bg-white/90 border-black/5 shadow-sm' : 'bg-black/40 border-white/10 shadow-lg'
                                        : 'hover:bg-black/5 bg-transparent' // Invisible bg for inactive
                                    }
                                `}
                                style={{
                                    color: isActive
                                        ? isDarkText ? '#0A0A0A' : '#F6F5F2'
                                        : isDarkText ? '#0A0A0A99' : '#F6F5F299'
                                }}
                            >
                                <span className="text-xs font-medium tracking-widest uppercase">
                                    {item.label}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="active-dot"
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ backgroundColor: item.accent }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Mobile Navigation - Top Right Expandable Pill */}
            <div className="md:hidden pointer-events-auto flex flex-col items-end gap-2">
                <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-3 p-3 pl-4 rounded-full backdrop-blur-xl border transition-colors duration-700 shadow-xl z-50
                        ${isDarkText
                            ? 'bg-white/90 border-black/5 text-ink'
                            : 'bg-black/60 border-white/10 text-paper'
                        }
                    `}
                >
                    <span
                        className="text-[10px] uppercase tracking-widest font-bold"
                        style={{ color: activeItem.accent }}
                    >
                        {activeItem.label}
                    </span>
                    <activeItem.icon size={16} />
                </motion.button>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-2 items-end z-40"
                        >
                            {navConfig.filter(n => n.id !== activeSection).map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`p-3 rounded-full backdrop-blur-md border shadow-lg flex items-center justify-center
                                        ${isDarkText ? 'bg-white/90 border-black/5 text-ink' : 'bg-black/70 border-white/10 text-paper'}
                                    `}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <item.icon size={16} />
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default PremiumNavigation;
