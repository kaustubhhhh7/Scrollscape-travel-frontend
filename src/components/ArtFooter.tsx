const ArtFooter = () => {
    return (
        <footer className="bg-ink text-paper py-12 px-8 border-t border-paper/5 relative overflow-hidden">
            <div className="grid grid-cols-12 gap-8 max-w-[90vw] mx-auto relative z-10">
                <div className="col-span-12 md:col-span-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] block mb-6 opacity-40">Identity</span>
                    <h3 className="text-2xl font-serif">Æthelard</h3>
                </div>

                <div className="col-span-12 md:col-span-2 md:col-start-7">
                    <span className="text-[10px] uppercase tracking-[0.3em] block mb-6 opacity-40">Connect</span>
                    <ul className="space-y-2 opacity-60 text-xs font-light">
                        <li className="hover:opacity-100 cursor-pointer transition-opacity">Instagram</li>
                        <li className="hover:opacity-100 cursor-pointer transition-opacity">Twitter</li>
                        <li className="hover:opacity-100 cursor-pointer transition-opacity">Email</li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] block mb-6 opacity-40">Legal</span>
                    <ul className="space-y-2 opacity-60 text-xs font-light">
                        <li className="hover:opacity-100 cursor-pointer transition-opacity">Privacy</li>
                        <li className="hover:opacity-100 cursor-pointer transition-opacity">Terms</li>
                        <li className="hover:opacity-100 cursor-pointer transition-opacity">Credits</li>
                    </ul>
                </div>

                <div className="col-span-12 mt-12 flex justify-between items-end opacity-10">
                    <span className="text-8xl md:text-[12vw] leading-[0.8] font-serif -ml-2">2025</span>
                    <span className="text-[10px] uppercase tracking-[0.5em] mb-2">Edition IV</span>
                </div>

                <div className="col-span-12 border-t border-white/5 mt-8 pt-8 flex justify-center text-center opacity-30 hover:opacity-80 transition-opacity duration-500">
                    <span className="text-[10px] uppercase tracking-widest">Designed by CORE3 | Contact: Kaustubh Ghadshi - 8451851439</span>
                </div>
            </div>
        </footer>
    );
};

export default ArtFooter;
