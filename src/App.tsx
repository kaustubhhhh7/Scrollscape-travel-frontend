import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ScrollManager from './components/ScrollManager';
import Opening from './sections/Opening';
import Showcase from './sections/Showcase';
import Immersive from './sections/Immersive';
import Invitation from './sections/Invitation';
import ArtFooter from './components/ArtFooter';
import PremiumNavigation from './components/PremiumNavigation';

import Testimonials from './sections/Testimonials';
import Preloader from './components/Preloader';
import PrestigeServices from './sections/PrestigeServices';
import ExpeditionGrid from './sections/ExpeditionGrid';
import EliteClub from './sections/EliteClub';
import CuratedJourney from './sections/CuratedJourney';
import AestheticCursor from './components/AestheticCursor';




function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <ScrollManager />
      <PremiumNavigation />
      <AestheticCursor />
      <div className="grain-overlay" />


      <main className="relative z-10">
        <Opening />
        <PrestigeServices />
        <Showcase />
        <ExpeditionGrid />
        <Immersive />
        <CuratedJourney />
        <Testimonials />
        <EliteClub />
        <Invitation />
        <ArtFooter />
      </main>

    </>
  );
}

export default App;
