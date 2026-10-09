/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HeroSection } from './components/HeroSection';
import { BookIntroduction } from './components/BookIntroduction';
import { TransformationSection } from './components/TransformationSection';
import { BookThemes } from './components/BookThemes';
import { AuthorSection } from './components/AuthorSection';
import { PurchaseSection } from './components/PurchaseSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookReaderModal } from './components/BookReaderModal';
import { ChariowRedirectModal } from './components/ChariowRedirectModal';
import { Preloader } from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [chariowModalOpen, setChariowModalOpen] = useState(false);
  const [readerModalOpen, setReaderModalOpen] = useState(false);

  const handleOpenChariow = () => {
    setChariowModalOpen(true);
  };

  const handleOpenReader = () => {
    setReaderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col font-sans selection:bg-[#FF5500]/30 selection:text-white">
      {/* Initial Entrance Preloader Screen */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Scroll Reading Progress Bar at the very top of the page */}
      <ScrollProgressBar />

      {/* 1. Header with Folioblox white pill CTA */}
      <Header
        onOpenChariow={handleOpenChariow}
        onOpenReader={handleOpenReader}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 2. Hero Section with curved bottom, fiery sunset gradient & Trust strip */}
        <HeroSection
          onOpenChariow={handleOpenChariow}
          onOpenReader={handleOpenReader}
        />

        {/* 3. "Au Cœur de la Méthode" (Matching "Behind the Designs" 3-card layout from reference) */}
        <BookIntroduction
          onOpenReader={handleOpenReader}
          onOpenChariow={handleOpenChariow}
        />

        {/* 4. Le Pivot Stratégique (Avant / Après) */}
        <TransformationSection onOpenChariow={handleOpenChariow} />

        {/* 5. Les 4 Thèmes Stratégiques (# 01, # 02, # 03, # 04) */}
        <BookThemes onOpenChariow={handleOpenChariow} />

        {/* 6. L'Auteur & Vision */}
        <AuthorSection onOpenChariow={handleOpenChariow} />

        {/* 7. Bloc Commercial & Achat Officiel Chariow */}
        <PurchaseSection onOpenChariow={handleOpenChariow} />

        {/* 8. FAQ Interactive */}
        <FAQSection onOpenChariow={handleOpenChariow} />

        {/* 9. Final Panoramic Warm CTA */}
        <FinalCTA
          onOpenChariow={handleOpenChariow}
          onOpenReader={handleOpenReader}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenChariow={handleOpenChariow}
        onOpenReader={handleOpenReader}
      />

      {/* 11. Interactive Book Reader Modal */}
      <BookReaderModal
        isOpen={readerModalOpen}
        onClose={() => setReaderModalOpen(false)}
        onOpenChariow={handleOpenChariow}
      />

      {/* 12. Chariow Checkout Flow Modal */}
      <ChariowRedirectModal
        isOpen={chariowModalOpen}
        onClose={() => setChariowModalOpen(false)}
      />
    </div>
  );
}
