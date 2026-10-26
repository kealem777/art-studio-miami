import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Palette, 
  ShoppingBag, 
  Heart, 
  Compass, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Header: React.FC = () => {
  const location = useLocation();
  const { totalCount, favorites, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/gallery', label: 'Галерея' },
    { 
      to: '/interior-match', 
      label: 'Примерка в интерьере', 
      highlight: true 
    },
    { to: '/artists', label: 'Художники' },
    { to: '/masterclasses', label: 'Мастер-классы' },
    { to: '/about', label: 'О студии' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-sky-100 text-xs py-2 px-6 border-b border-sky-700/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-200">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Miami, Wynwood Art District • 250 NW 24th St
            </span>
            <span className="text-sky-400/50">|</span>
            <span className="flex items-center gap-1.5 text-sky-200">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              +1 (305) 555-ARTS (2787)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[11px] font-medium">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Miami Art Week 2025: Эксклюзивная коллекция
            </span>
            <span className="text-sky-300/80 font-medium">USD ($)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md shadow-sky-900/5 border-b border-sky-100/80 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-sky-50 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with Art-Deco & Ocean vibe */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform duration-300">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif tracking-[0.2em] text-lg font-bold text-slate-900 uppercase">
                  Miami Art
                </span>
                <span className="text-[10px] tracking-widest font-semibold px-2 py-0.5 rounded-md bg-sky-100 text-sky-700 uppercase border border-sky-200/80">
                  Studio
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-medium">
                Gallery & Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-sky-700 bg-sky-50 font-semibold'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/60'
                  } ${
                    link.highlight
                      ? 'bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 border border-sky-200/60 shadow-sm'
                      : ''
                  }`}
                >
                  {link.highlight && <Eye className="w-3.5 h-3.5 text-sky-500 animate-pulse" />}
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-sky-500 text-white font-bold">
                      3D
                    </span>
                  )}
                  {isActive && !link.highlight && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Cart, Favorites, Virtual Match CTA */}
          <div className="flex items-center gap-3">
            {/* Virtual Match Quick Button */}
            <Link
              to="/interior-match"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100 transition-colors shadow-sm"
            >
              <Compass className="w-4 h-4 text-sky-600" />
              <span>Примерить</span>
            </Link>

            {/* Favorites Icon */}
            <Link
              to="/gallery?favorites=true"
              className="relative p-2.5 rounded-xl text-slate-600 hover:text-rose-500 hover:bg-rose-50 transition-colors"
              title="Избранные картины"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites.length > 0 ? 'text-rose-500 fill-rose-500' : ''
                }`}
              />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-slate-900 text-white hover:bg-sky-600 transition-colors shadow-md shadow-slate-900/10 flex items-center gap-2"
              title="Открыть корзину"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-sky-400 text-slate-950 text-xs font-bold flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-sky-50 transition-colors"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/40 backdrop-blur-sm flex flex-col justify-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl border-t border-sky-100 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-sky-50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-base">Miami Art Studio</h4>
                  <p className="text-[11px] text-sky-600">Галерея современного искусства</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-sky-50 text-sky-700 font-semibold'
                        : 'text-slate-700 hover:bg-sky-50/50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {link.highlight ? <Sparkles className="w-5 h-5 text-sky-500" /> : null}
                      {link.label}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-sky-50 flex flex-col gap-3">
              <Link
                to="/interior-match"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-center text-sm shadow-md shadow-sky-500/20 flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Виртуальная примерка картины</span>
              </Link>
              <div className="text-center text-xs text-slate-400">
                Miami, Wynwood Art District • Daily 10:00 - 22:00
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
