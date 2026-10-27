import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider, useCart } from './context/CartContext';
import { getAssetUrl } from './utils/assets';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { QuickViewModal } from './components/common/QuickViewModal';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { ArtworkDetailPage } from './pages/ArtworkDetailPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { ArtistDetailPage } from './pages/ArtistDetailPage';
import { InteriorMatchPage } from './pages/InteriorMatchPage';
import { MasterclassesPage } from './pages/MasterclassesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { Check } from 'lucide-react';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Toast notification banner
const GlobalToast = () => {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="px-4 py-3 rounded-2xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold shadow-2xl border border-sky-400/40 flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center flex-shrink-0">
          <Check className="w-3 h-3 stroke-[3]" />
        </div>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

export function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <CartProvider>
          <ScrollToTop />
          {/* Fixed Ambient Artistic Palette Background with Breathing Animation */}
          <div className="palette-ambient-container" aria-hidden="true">
            <div
              className="palette-ambient-image"
              style={{
                backgroundImage: `url(${getAssetUrl('art-palette-bg.jpg')})`,
              }}
            />
            <div className="palette-ambient-overlay" />
          </div>

          <div className="min-h-screen flex flex-col text-slate-900 relative z-10">
            <Header />

            {/* Main Viewport */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/gallery/:id" element={<ArtworkDetailPage />} />
                <Route path="/artists" element={<ArtistsPage />} />
                <Route path="/artists/:slug" element={<ArtistDetailPage />} />
                <Route path="/interior-match" element={<InteriorMatchPage />} />
                <Route path="/masterclasses" element={<MasterclassesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />

            {/* Modals & Global Drawer */}
            <CartDrawer />
            <QuickViewModal />
            <GlobalToast />
          </div>
        </CartProvider>
      </LanguageProvider>
    </HashRouter>
  );
}

export default App;
