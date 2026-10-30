import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, Brush } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getAssetUrl } from '../../utils/assets';

export const WelcomeSplash: React.FC = () => {
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading out after 2.6 seconds, remove from DOM after 3.2 seconds
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2600);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer transition-opacity duration-700 select-none overflow-hidden ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Miami Art Studio Welcome Splash"
    >
      {/* Background: User's Painting Canvas with Palette, Paint & Brush */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url(${getAssetUrl('splash-canvas-bg.jpg')})`,
        }}
      />

      {/* Atmospheric Artistic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/60 to-slate-950/85 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/20 via-transparent to-slate-950/80" />

      {/* Animated Glowing Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-400/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Centerpiece Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Animated Palette Icon Badge with Gold & Azure glow */}
        <div className="relative mb-6 group">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-tr from-sky-400 via-rose-500 to-amber-400 p-1 shadow-2xl shadow-rose-500/30 transform hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center relative overflow-hidden">
              <Palette className="w-12 h-12 md:w-14 md:h-14 text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.6)] animate-pulse" />
              <Brush className="w-5 h-5 text-sky-400 absolute bottom-3 right-3 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span className="absolute top-2.5 right-3 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-300" />
              <span className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm shadow-rose-400" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-[10px] tracking-widest uppercase shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-slate-950" />
            <span>MIAMI</span>
          </div>
        </div>

        {/* Studio Title in Designer Typography with Luxurious Gradient */}
        <div className="space-y-2 mb-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-[0.14em] uppercase text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            {isRu ? 'МАЙАМИ АРТ СТУДИЯ' : 'MIAMI ART STUDIO'}
          </h1>
          
          {/* Author Signature Line */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-amber-400 to-amber-300" />
            <h2 className="font-serif italic text-lg sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300 bg-clip-text text-transparent drop-shadow-md">
              {isRu ? 'Натальи Журавлевой' : 'by Natalia Zhuravleva'}
            </h2>
            <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent via-amber-400 to-amber-300" />
          </div>
        </div>

        {/* Subtitle / Tagline */}
        <p className="text-xs sm:text-sm text-sky-200/90 font-medium tracking-widest uppercase max-w-md mx-auto mb-8 drop-shadow">
          {isRu
            ? 'Галерея современного искусства • Wynwood, Майами'
            : 'Contemporary Fine Art Gallery & Studio • Wynwood, Miami'}
        </p>

        {/* Loading Indicator / Skip Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white/80 text-xs font-semibold transition-all">
          <div className="w-3.5 h-3.5 border-2 border-white/80 border-t-transparent rounded-full animate-spin" />
          <span>{isRu ? 'Вход в галерею...' : 'Entering Gallery...'}</span>
        </div>
      </div>
    </div>
  );
};
