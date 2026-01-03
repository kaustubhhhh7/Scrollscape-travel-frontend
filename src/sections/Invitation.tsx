
import { useState } from 'react';
import MembershipForm from '../components/MembershipForm';

const Invitation = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <section id="contact" className="h-screen bg-ink text-paper flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAFAFA_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.5em] mb-12 opacity-60">The Invitation</span>

                <h2 className="text-6xl md:text-9xl font-serif mb-12 mix-blend-difference">
                    Become <br /> <span className="italic font-light opacity-80">Rare</span>
                </h2>

                <button
                    onClick={() => setIsFormOpen(true)}
                    className="group relative px-12 py-6 overflow-hidden border border-paper/20 rounded-full hover:border-paper/40 transition-colors duration-500"
                >
                    <span className="relative z-10 text-xs uppercase tracking-[0.3em] group-hover:text-ink transition-colors duration-500">Request Membership</span>
                    <div className="absolute inset-0 bg-paper transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </button>
            </div>

            <MembershipForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </section>
    );
};

export default Invitation;
