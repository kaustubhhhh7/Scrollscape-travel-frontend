import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface MembershipFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const MembershipForm = ({ isOpen, onClose }: MembershipFormProps) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        interest: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            onClose();
            setFormState({ name: '', email: '', interest: '' });
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-ink/90 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        {/* Form Card */}
                        <div className="bg-[#111] border border-white/10 w-full max-w-lg p-12 relative pointer-events-auto shadow-2xl">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-10 text-center">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-accent-color block mb-4">Application</span>
                                <h3 className="text-4xl font-serif text-paper italic">The Circle</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                <div className="group relative">
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-paper outline-none focus:border-accent-color transition-colors"
                                        placeholder=" "
                                    />
                                    <label className={`absolute left-0 top-4 text-white/40 text-sm uppercase tracking-widest pointer-events-none transition-all duration-300
                                        ${formState.name ? '-translate-y-6 text-xs text-accent-color' : 'group-focus-within:-translate-y-6 group-focus-within:text-xs group-focus-within:text-accent-color'}`}>
                                        Full Name
                                    </label>
                                </div>

                                <div className="group relative">
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-paper outline-none focus:border-accent-color transition-colors"
                                        placeholder=" "
                                    />
                                    <label className={`absolute left-0 top-4 text-white/40 text-sm uppercase tracking-widest pointer-events-none transition-all duration-300
                                        ${formState.email ? '-translate-y-6 text-xs text-accent-color' : 'group-focus-within:-translate-y-6 group-focus-within:text-xs group-focus-within:text-accent-color'}`}>
                                        Email Address
                                    </label>
                                </div>

                                <div className="group relative">
                                    <select
                                        value={formState.interest}
                                        onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-paper outline-none focus:border-accent-color transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-ink">Select Area of Interest</option>
                                        <option value="expeditions" className="bg-ink">Private Expeditions</option>
                                        <option value="estates" className="bg-ink">Global Estates</option>
                                        <option value="aviation" className="bg-ink">Aviation Charter</option>
                                        <option value="membership" className="bg-ink">Full Membership</option>
                                    </select>
                                    <div className="absolute right-0 top-4 pointer-events-none text-white/40">↓</div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-8 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-paper py-6 uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-4 group"
                                >
                                    <span>Submit Request</span>
                                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MembershipForm;
