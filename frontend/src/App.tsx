import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import RomanticModal from './components/RomanticModal';
import ThingsILoveSection from './components/ThingsILoveSection';
import OurFutureSection from './components/OurFutureSection';
import LoveCounterSection from './components/LoveCounterSection';
import SecretMessageSection from './components/SecretMessageSection';
import OurLittleComparisonSection from './components/OurLittleComparisonSection';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Loading screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main content */}
      <div
        className="transition-opacity duration-700"
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        <HeroSection onButtonClick={() => setIsModalOpen(true)} />
        <ThingsILoveSection />
        <OurFutureSection />
        <LoveCounterSection />
        <SecretMessageSection />
        <OurLittleComparisonSection />
        <Footer />
      </div>

      {/* Modal */}
      <RomanticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
