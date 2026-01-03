import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative p-2 rounded-full border transition-all duration-500 overflow-hidden group ${theme === 'dark'
                    ? 'border-gold/30 text-gold hover:bg-gold/10'
                    : 'border-sand/40 text-sand hover:bg-sand/10'
                }`}
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === 'dark' ? 0 : 20,
                        opacity: theme === 'dark' ? 1 : 0,
                        rotate: theme === 'dark' ? 0 : 90
                    }}
                    transition={{ duration: 0.5, ease: "backInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon size={18} />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        y: theme === 'light' ? 0 : -20,
                        opacity: theme === 'light' ? 1 : 0,
                        rotate: theme === 'light' ? 0 : -90
                    }}
                    transition={{ duration: 0.5, ease: "backInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun size={18} />
                </motion.div>
            </div>
        </button>
    );
};

export default ThemeToggle;
