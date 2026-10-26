import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Palette, 
  ShoppingBag, 
  Heart, 
  Compass, 
  PhoneCall, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight,
  Eye,
  Globe,
  MessageCircle
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';

export const Header: React.FC = () => {
  const location = useLocation();
  const { totalCount, favorites, setIsCartOpen } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/gallery', label: t('gallery') },
    { 
      to: '/interior-match', 
      label: t('interiorMatch'), 
      highlight: true 
    },
    { to: '/artists', label: t('artists') },
    { to: '/masterclasses', label: t('masterclasses') },
    { to: '/about', label: t('about') },
    { to: '/contacts', label: t('contacts') },
  ];

  return (
    <>
      {/* 1. Artistic Rainbow Palette Ribbon at Very Top */}
      <div className="rainbow-gradient-bar h-1.5 w-full" />

      {/* 2. Top Colorful Utility Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white text-xs py-2 px-6 border-b border-sky-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Location & Animated Phone & WhatsApp */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-sky-200 text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
              <span>Miami, Wynwood Art District • 250 NW 24th St</span>
            </span>

            {/* Moving / Ringing Phone Icon */}
            <a
              href="tel:+13055552787"
              className="group flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-400/40 text-amber-300 transition-all shadow-sm"
              title="Позвонить в галерею"
            >
              <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center animate-phone-ring shadow-md shadow-amber-400/30">
                <PhoneCall className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="font-bold text-xs tracking-wide group-hover:text-amber-200">
                +1 (305) 555-ARTS (2787)
              </span>
            </a>

            {/* Bright WhatsApp Button */}
            <a
              href="https://wa.me/13055552787?text=Hello!%20I%20am%20interested%20in%20Miami%20Art%20Studio%20paintings"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-all shadow-md shadow-[#25D366]/30 animate-whatsapp-pulse group"
              title="Написать в WhatsApp арт-куратору"
            >
              {/* Official WhatsApp SVG Logo */}
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.587 1.954.918 3.208.918 3.181 0 5.767-2.586 5.768-5.766.001-3.187-2.575-5.771-5.77-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.079-1.897-.442-1.615-.668-2.651-2.315-2.732-2.423-.081-.108-.654-.871-.654-1.661 0-.79.414-1.179.561-1.341.144-.162.316-.203.421-.203.106 0 .211.002.302.007.098.005.231-.037.36.274.133.32.454 1.108.495 1.189.041.081.069.176.014.284-.055.108-.083.176-.164.271-.081.095-.171.212-.245.284-.083.082-.169.17-.073.336.096.166.427.705.916 1.141.629.56 1.161.733 1.326.815.166.082.263.072.36-.041.097-.113.414-.482.525-.648.111-.166.222-.138.373-.082.152.056.969.457 1.135.54.166.082.277.123.318.192.041.068.041.399-.103.804z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.662 1.447 5.178L2 22l4.981-1.398A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.611 0-3.125-.461-4.417-1.258l-.317-.193-2.946.825.834-2.868-.211-.334A8.026 8.026 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8.063-8 8.063z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Right: Language Switcher (RU / EN) & Currency */}
          <div className="flex items-center gap-3">
            {/* Visual Language Switcher Tab */}
            <div className="flex items-center bg-white/10 p-0.5 rounded-xl border border-white/20 backdrop-blur-md shadow-sm">
              <button
                onClick={() => setLanguage('ru')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
                  language === 'ru'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                    : 'text-sky-200 hover:text-white hover:bg-white/10'
                }`}
                title="Русский язык"
              >
                <span>🇷🇺</span>
                <span>RU</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                    : 'text-sky-200 hover:text-white hover:bg-white/10'
                }`}
                title="English language"
              >
                <span>🇺🇸</span>
                <span>EN</span>
              </button>
            </div>

            <span className="text-amber-400 font-bold text-xs bg-amber-400/10 px-2.5 py-0.5 rounded-lg border border-amber-400/30">
              USD ($)
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Header with Palette Vibe */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 palette-art-strip ${
          isScrolled
            ? 'shadow-lg shadow-sky-900/10 border-b border-sky-200/80 py-3.5'
            : 'border-b border-sky-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with Art-Deco & Rich Color Palette Splash */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              {/* Colorful circular palette icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 via-rose-500 to-amber-500 p-0.5 shadow-xl shadow-rose-500/20 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <Palette className="w-6 h-6 text-amber-300" />
                  {/* Paint drops dots */}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="absolute bottom-1.5 left-2 w-2 h-2 rounded-full bg-rose-500" />
                  <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif tracking-[0.18em] text-xl font-black text-slate-950 uppercase">
                  MIAMI ART
                </span>
                <span className="text-[10px] tracking-widest font-black px-2 py-0.5 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white uppercase shadow-sm">
                  STUDIO
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] bg-gradient-to-r from-sky-600 to-rose-600 bg-clip-text text-transparent uppercase font-extrabold">
                GALLERY & MARKETPLACE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - BOLD & NOTICEABLE */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2.5 rounded-2xl text-sm font-extrabold tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/25 scale-105'
                      : 'text-slate-800 hover:text-sky-600 hover:bg-sky-50/80 hover:shadow-sm'
                  } ${
                    link.highlight && !isActive
                      ? 'bg-gradient-to-r from-sky-100/90 via-blue-50 to-indigo-100 text-sky-800 border-2 border-sky-300 shadow-md animate-pulse-short'
                      : ''
                  }`}
                >
                  {link.highlight && <Eye className="w-4 h-4 text-sky-600 animate-bounce" />}
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-rose-500 text-white font-black shadow-sm">
                      3D
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Cart, Favorites, Virtual Match CTA */}
          <div className="flex items-center gap-3">
            {/* Quick 3D Try-on Button */}
            <Link
              to="/interior-match"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500 text-white hover:opacity-90 transition-all shadow-md shadow-rose-500/20 group"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              <span>{t('tryInInteriorBtn')}</span>
            </Link>

            {/* Favorites Icon */}
            <Link
              to="/gallery?favorites=true"
              className="relative p-2.5 rounded-2xl text-slate-700 hover:text-rose-500 hover:bg-rose-50 border border-sky-100 transition-colors shadow-sm"
              title="Избранные картины"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites.length > 0 ? 'text-rose-500 fill-rose-500' : ''
                }`}
              />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[11px] font-black flex items-center justify-center shadow-md">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-2xl bg-slate-950 text-white hover:bg-sky-600 transition-all shadow-lg shadow-slate-900/15 flex items-center gap-2"
              title="Открыть корзину"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 text-xs font-black flex items-center justify-center shadow-sm">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl text-slate-800 bg-white border border-sky-200 hover:bg-sky-50 transition-colors"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/50 backdrop-blur-sm flex flex-col justify-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl border-t-2 border-sky-400 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-sky-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-rose-500 to-amber-500 p-0.5">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Palette className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif font-black text-slate-900 text-lg">Miami Art Studio</h4>
                  <p className="text-xs font-bold text-sky-600">Wynwood Gallery & Marketplace</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Language Switcher */}
            <div className="py-3 flex items-center justify-between border-b border-sky-50">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Язык / Language:</span>
              <div className="flex items-center bg-sky-50 p-1 rounded-xl border border-sky-200">
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === 'ru' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600'
                  }`}
                >
                  🇷🇺 Русский
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === 'en' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600'
                  }`}
                >
                  🇺🇸 English
                </button>
              </div>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="grid grid-cols-2 gap-2 py-3 border-b border-sky-50">
              <a
                href="tel:+13055552787"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold"
              >
                <PhoneCall className="w-4 h-4 text-amber-600 animate-phone-ring" />
                <span>Звонок</span>
              </a>
              <a
                href="https://wa.me/13055552787"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-sm"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Nav Links - BOLD */}
            <nav className="flex flex-col gap-1.5 py-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-black transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                        : 'text-slate-800 hover:bg-sky-50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {link.highlight ? <Sparkles className="w-5 h-5 text-amber-500" /> : null}
                      {link.label}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <Link
                to="/interior-match"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500 text-white font-black text-center text-sm shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Виртуальная примерка картины (3D)</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
