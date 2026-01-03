import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ScrollManager from './components/ScrollManager';
import Opening from './sections/Opening';
import Narrative from './sections/Narrative';
import Showcase from './sections/Showcase';
import Immersive from './sections/Immersive';
import Signature from './sections/Signature';
import Invitation from './sections/Invitation';
import ArtFooter from './components/ArtFooter';
import PremiumNavigation from './components/PremiumNavigation';
import Heritage from './sections/Heritage';
import Testimonials from './sections/Testimonials';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <ScrollManager />
      <PremiumNavigation />
      <div className="grain-overlay" />

      <main className="relative z-10">
        <Opening />
        <Narrative />
        <Showcase />
        <Heritage />
        <Immersive />
        <Signature />
        <Testimonials />
        <Invitation />
        <ArtFooter />
      </main>
    </>
  );
}

export default App;
