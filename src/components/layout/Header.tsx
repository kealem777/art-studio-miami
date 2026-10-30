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
  Globe
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
    { to: '/', label: t('home'), color: 'from-sky-500 to-blue-600' },
    { to: '/gallery', label: t('gallery'), color: 'from-cyan-500 to-sky-600' },
    { 
      to: '/interior-match', 
      label: t('interiorMatch'), 
      highlight: true,
      color: 'from-amber-400 via-rose-500 to-sky-500' 
    },
    { to: '/artists', label: t('artists'), color: 'from-violet-500 to-purple-600' },
    { to: '/masterclasses', label: t('masterclasses'), color: 'from-rose-500 to-pink-600' },
    { to: '/about', label: t('about'), color: 'from-emerald-500 to-teal-600' },
    { to: '/contacts', label: t('contacts'), color: 'from-blue-600 to-indigo-700' },
  ];

  return (
    <>
      {/* 1. Artistic Rainbow Palette Ribbon at Very Top */}
      <div className="rainbow-gradient-bar h-2 w-full shadow-sm" />

      {/* 2. Top Colorful Utility Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white text-xs py-2.5 px-6 border-b border-sky-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Location & Animated Moving Phone & WhatsApp */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-sky-200 text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 animate-bounce" />
              <span>{t('locationWynwood')}</span>
            </span>

            {/* Moving / Ringing Phone Icon */}
            <a
              href="tel:+13055552787"
              className="group flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/25 to-orange-500/25 hover:from-amber-500/40 hover:to-orange-500/40 border-2 border-amber-400/60 text-amber-300 transition-all shadow-md shadow-amber-400/10"
              title="Call Gallery Directly"
            >
              <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center animate-phone-ring shadow-lg shadow-amber-400/40">
                <PhoneCall className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-extrabold text-xs tracking-wide text-amber-300 group-hover:text-amber-100">
                +1 (305) 555-ARTS
              </span>
            </a>

            {/* Bright WhatsApp Button */}
            <a
              href="https://wa.me/13055552787?text=Hello!%20I%20am%20interested%20in%20Miami%20Art%20Studio%20by%20Natalia%20Zhuravleva"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs transition-all shadow-lg shadow-[#25D366]/40 animate-whatsapp-pulse group"
              title={t('whatsappUs')}
            >
              <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.587 1.954.918 3.208.918 3.181 0 5.767-2.586 5.768-5.766.001-3.187-2.575-5.771-5.77-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.079-1.897-.442-1.615-.668-2.651-2.315-2.732-2.423-.081-.108-.654-.871-.654-1.661 0-.79.414-1.179.561-1.341.144-.162.316-.203.421-.203.106 0 .211.002.302.007.098.005.231-.037.36.274.133.32.454 1.108.495 1.189.041.081.069.176.014.284-.055.108-.083.176-.164.271-.081.095-.171.212-.245.284-.083.082-.169.17-.073.336.096.166.427.705.916 1.141.629.56 1.161.733 1.326.815.166.082.263.072.36-.041.097-.113.414-.482.525-.648.111-.166.222-.138.373-.082.152.056.969.457 1.135.54.166.082.277.123.318.192.041.068.041.399-.103.804z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.662 1.447 5.178L2 22l4.981-1.398A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.611 0-3.125-.461-4.417-1.258l-.317-.193-2.946.825.834-2.868-.211-.334A8.026 8.026 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8.063-8 8.063z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Right: Language Switcher (EN Primary / RU Secondary) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/15 p-1 rounded-xl border border-white/25 backdrop-blur-md shadow-inner">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-black transition-all ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white shadow-md scale-105'
                    : 'text-sky-200 hover:text-white hover:bg-white/10'
                }`}
                title="English (Primary)"
              >
                <span>🇺🇸</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-black transition-all ${
                  language === 'ru'
                    ? 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white shadow-md scale-105'
                    : 'text-sky-200 hover:text-white hover:bg-white/10'
                }`}
                title="Русский язык"
              >
                <span>🇷🇺</span>
                <span>RU</span>
              </button>
            </div>

            <span className="text-amber-400 font-black text-xs bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/30">
              USD ($)
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Header with Palette Vibe */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 palette-art-strip ${
          isScrolled
            ? 'shadow-xl shadow-sky-900/15 border-b border-sky-200/90 py-3.5'
            : 'border-b border-sky-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with Art-Deco & "by Natalia Zhuravleva" / "Натальи Журавлевой" */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-sky-500 via-rose-500 to-amber-500 p-0.5 shadow-xl shadow-rose-500/25 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center relative overflow-hidden p-2.5">
                  <Palette className="w-7 h-7 text-amber-300" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="absolute bottom-1.5 left-2 w-2 h-2 rounded-full bg-rose-500" />
                  <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif tracking-[0.16em] text-xl font-black text-slate-950 uppercase">
                  {t('brandName')}
                </span>
                <span className="text-[10px] tracking-widest font-black px-2 py-0.5 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white uppercase shadow-sm">
                  STUDIO
                </span>
              </div>
              
              {/* Requested Author Signature: "by Natalia Zhuravleva" / "Натальи Журавлевой" */}
              <div className="flex items-center gap-1.5">
                <span className="font-serif italic font-bold text-xs bg-gradient-to-r from-amber-600 via-rose-600 to-sky-700 bg-clip-text text-transparent">
                  {t('authorSignature')}
                </span>
                <span className="text-[10px] text-slate-300">•</span>
                <span className="text-[9px] tracking-[0.2em] text-slate-400 uppercase font-black">
                  {t('galleryMarketplace')}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - 3D COLORFUL FRAMED TABS */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-2.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2.5 rounded-2xl text-xs xl:text-sm font-black tracking-wide transition-all duration-200 flex items-center gap-1.5 border-2 ${
                    isActive
                      ? `text-white bg-gradient-to-r ${link.color} border-transparent shadow-xl shadow-sky-500/30 scale-105 ring-2 ring-sky-300`
                      : 'text-slate-800 bg-white/90 hover:bg-white border-sky-100 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-0.5'
                  } ${
                    link.highlight && !isActive
                      ? 'bg-gradient-to-r from-sky-50 via-rose-50 to-amber-50 text-sky-950 border-2 border-amber-300/80 shadow-md animate-pulse-short'
                      : ''
                  }`}
                  style={{
                    boxShadow: isActive 
                      ? 'inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 16px -4px rgba(2, 132, 199, 0.35)'
                      : 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.04)'
                  }}
                >
                  {link.highlight && <Eye className="w-4 h-4 text-rose-500 animate-bounce" />}
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500 text-white hover:opacity-95 transition-all shadow-lg shadow-rose-500/25 border-2 border-white/80 group"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              <span>{t('tryIn3DBadge')}</span>
            </Link>

            {/* Favorites Icon */}
            <Link
              to="/gallery?favorites=true"
              className="relative p-2.5 rounded-2xl text-slate-700 hover:text-rose-500 bg-white border-2 border-sky-100 hover:border-rose-200 transition-colors shadow-sm"
              title="Favorites"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites.length > 0 ? 'text-rose-500 fill-rose-500' : ''
                }`}
              />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shadow-md">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-2xl bg-slate-950 text-white hover:bg-sky-600 transition-all shadow-lg shadow-slate-900/20 border-2 border-slate-950 flex items-center gap-2"
              title="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 text-xs font-black flex items-center justify-center shadow-md">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl text-slate-800 bg-white border-2 border-sky-200 hover:bg-sky-50 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu - Framed 3D Style */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/60 backdrop-blur-sm flex flex-col justify-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl border-t-4 border-sky-400 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-sky-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 via-rose-500 to-amber-500 p-0.5 shadow-md">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Palette className="w-6 h-6 text-amber-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif font-black text-slate-900 text-lg">{t('brandName')}</h4>
                  <p className="text-xs font-bold text-sky-700">{t('authorSignature')}</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Language Switcher */}
            <div className="py-3 flex items-center justify-between border-b border-sky-50">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                {language === 'ru' ? 'Язык сайта:' : 'Language:'}
              </span>
              <div className="flex items-center bg-sky-50 p-1 rounded-xl border-2 border-sky-200">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                    language === 'en' ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md' : 'text-slate-700'
                  }`}
                >
                  🇺🇸 EN
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                    language === 'ru' ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md' : 'text-slate-700'
                  }`}
                >
                  🇷🇺 RU
                </button>
              </div>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="grid grid-cols-2 gap-2 py-3 border-b border-sky-50">
              <a
                href="tel:+13055552787"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-900 text-xs font-extrabold shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-amber-600 animate-phone-ring" />
                <span>+1 305-555-ARTS</span>
              </a>
              <a
                href="https://wa.me/13055552787"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#25D366] text-white text-xs font-extrabold shadow-md shadow-[#25D366]/30"
              >
                <span>{language === 'ru' ? 'Чат в WhatsApp' : 'WhatsApp Chat'}</span>
              </a>
            </div>

            {/* Mobile Nav Links - Framed 3D items */}
            <nav className="flex flex-col gap-2 py-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-black transition-all border-2 ${
                      isActive
                        ? `bg-gradient-to-r ${link.color} text-white border-transparent shadow-lg`
                        : 'text-slate-800 bg-white border-sky-100 hover:border-sky-300'
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
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500 text-white font-black text-center text-sm shadow-xl shadow-rose-500/25 flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                <span>{t('btnVirtualTryOn')} (3D)</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
