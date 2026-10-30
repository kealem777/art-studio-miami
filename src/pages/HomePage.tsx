import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Palette, 
  Compass, 
  ShieldCheck, 
  Truck, 
  Award,
  Layers,
  Wine,
  ChevronRight,
  ChevronLeft,
  Eye,
  Maximize2
} from 'lucide-react';
import { ARTWORKS_DATA, ARTISTS_DATA, INTERIOR_ROOMS, HERO_SLIDES } from '../data/mockData';
import { ArtworkCard } from '../components/common/ArtworkCard';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assets';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const isRu = language === 'ru';
  const [activeRoomStyle, setActiveRoomStyle] = useState(INTERIOR_ROOMS[0]);

  // Hero Carousel state (4 user requested covers)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate hero slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeSlide = HERO_SLIDES[currentSlideIndex];
  const slideTitle = isRu ? activeSlide.titleRu : activeSlide.titleEn;
  const slideSubtitle = isRu ? activeSlide.subtitleRu : activeSlide.subtitleEn;

  // Top 6 featured artworks
  const featuredArtworks = ARTWORKS_DATA.filter((a) => a.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-transparent text-slate-800 overflow-hidden">
      {/* 1. Hero Section with 4-Cover Interactive Carousel */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-6 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-300/20 via-rose-200/20 to-amber-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Block */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-sky-300 text-sky-900 text-xs font-black shadow-md mb-6">
              <Sparkles className="w-4 h-4 text-amber-500 animate-bounce" />
              <span>{t('heroWynwoodTag')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-slate-950 tracking-tight leading-[1.08] mb-6">
              {t('heroTitlePre')}{' '}
              <span className="azure-gradient-text drop-shadow-sm">{t('heroTitleAccent')}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/gallery"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-xl shadow-sky-500/30 flex items-center gap-2.5 transition-all group hover:scale-105 border border-white/40"
              >
                <span>{t('btnExploreGallery')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/interior-match"
                className="px-7 py-4 rounded-2xl bg-white hover:bg-sky-50 text-sky-950 border-2 border-sky-200 font-extrabold text-sm shadow-md flex items-center gap-2 transition-all hover:scale-105"
              >
                <Compass className="w-4 h-4 text-rose-500" />
                <span>{t('btnVirtualTryOn')}</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-bold">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {t('trustCert')}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-sky-600" />
                {t('trustDelivery')}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                {t('trustArtists')}
              </span>
            </div>
          </div>

          {/* Right Hero Visual: 4-Slide Auto Carousel */}
          <div 
            className="relative w-full lg:w-1/2 flex flex-col items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Carousel Frame */}
            <div className="relative w-full max-w-md sm:max-w-xl aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
              {/* Image with smooth transition */}
              <img
                key={activeSlide.id}
                src={getAssetUrl(activeSlide.image)}
                alt={slideTitle}
                className="w-full h-full object-cover transition-all duration-700 animate-fadeIn"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getAssetUrl('covers/cover1.jpg');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Prev / Next Chevrons */}
              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous Cover"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next Cover"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Top Slide Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-black border border-white/20">
                  {currentSlideIndex + 1} / {HERO_SLIDES.length}
                </span>
                <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${activeSlide.accent} text-slate-950 text-xs font-black shadow-md`}>
                  Miami Art Studio
                </span>
              </div>

              {/* Slide Caption Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-black text-slate-950 text-base sm:text-lg line-clamp-1">
                    {slideTitle}
                  </h4>
                  <p className="text-xs text-sky-700 font-bold line-clamp-1">
                    {slideSubtitle}
                  </p>
                </div>

                <Link
                  to="/gallery"
                  className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-sky-600 text-white text-xs font-bold transition-colors whitespace-nowrap shadow-md ml-3"
                >
                  {t('details')} →
                </Link>
              </div>
            </div>

            {/* Thumbnail Selectors Below Slider */}
            <div className="flex items-center gap-3 mt-4">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`w-14 sm:w-16 h-10 sm:h-12 rounded-xl overflow-hidden border-2 transition-all shadow-sm ${
                    currentSlideIndex === idx
                      ? 'border-sky-500 ring-2 ring-sky-400 scale-110 shadow-lg'
                      : 'border-white opacity-70 hover:opacity-100'
                  }`}
                  title={`View Cover ${idx + 1}`}
                >
                  <img
                    src={getAssetUrl(slide.image)}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick 5 Interior Styles Selector Teaser */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t-2 border-sky-100">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-black mb-3 border border-sky-200">
            <Layers className="w-4 h-4 text-sky-600" />
            {t('matchSectionTag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950 tracking-tight mb-3">
            {t('matchSectionTitle')}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {t('matchSectionDesc')}
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {INTERIOR_ROOMS.map((room) => {
            const isCurrent = activeRoomStyle.id === room.id;
            return (
              <button
                key={room.id}
                onClick={() => setActiveRoomStyle(room)}
                className={`p-4 rounded-3xl text-left border-2 transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'border-sky-500 bg-white/95 backdrop-blur-md shadow-xl shadow-sky-500/15 ring-2 ring-sky-300 scale-102'
                    : 'border-sky-200/80 bg-white/85 backdrop-blur-md hover:bg-white hover:border-sky-300 hover:shadow-md'
                }`}
              >
                <div className="w-full h-36 rounded-2xl overflow-hidden mb-3 relative">
                  <img
                    src={room.imageUrl}
                    alt={isRu ? room.nameRu : room.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-sky-900 text-[10px] font-black shadow-sm">
                    {room.style}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif font-black text-slate-900 text-sm mb-1">
                    {isRu ? room.nameRu : room.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {isRu ? (room.descriptionRu || room.description) : room.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Try CTA banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-950 via-slate-900 to-sky-900 p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border-2 border-sky-400/30">
          <div>
            <span className="text-xs text-amber-300 font-black tracking-wider uppercase block mb-1">
              {isRu ? `Выбран стиль: ${activeRoomStyle.nameRu}` : `Selected Style: ${activeRoomStyle.name}`}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-black mb-1">
              {isRu 
                ? 'Хотите примерить картины на этой стене прямо сейчас?' 
                : 'Experience art fitting on this wall in live 3D?'}
            </h3>
            <p className="text-xs text-sky-200/70">
              {isRu 
                ? 'Интерактивный инструмент масштабирования, выбора багета и виртуальной примерки в 3D.' 
                : 'Interactive drag & drop canvas, frame selection, and dynamic lighting switcher.'}
            </p>
          </div>

          <Link
            to={`/interior-match?style=${activeRoomStyle.style}`}
            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500 hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-xl shadow-rose-500/25 flex items-center gap-2 border-2 border-white"
          >
            <span>{t('launchTryOnBtn')} ({activeRoomStyle.style})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. Featured Artworks Marketplace */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t-2 border-sky-100">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-black mb-3 border border-sky-200">
              <Palette className="w-4 h-4 text-sky-600" />
              {t('curatorChoiceTag')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950 tracking-tight">
              {t('featuredArtworksTitle')}
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              {t('featuredArtworksDesc')}
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1 text-xs font-black text-sky-700 hover:text-sky-900 transition-colors uppercase tracking-wider bg-white px-4 py-2 rounded-xl border border-sky-200 shadow-sm"
          >
            <span>{t('viewAllCatalog')}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>

      {/* 4. Resident Artists Showcase */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t-2 border-sky-100">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-black mb-3 border border-sky-200">
            <Award className="w-4 h-4 text-amber-500" />
            {t('artistsSectionTag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950 tracking-tight mb-3">
            {t('artistsSectionTitle')}
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            {t('artistsSectionDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTISTS_DATA.slice(0, 3).map((artist) => (
            <div
              key={artist.id}
              className="group p-6 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-sky-200/80 hover:border-sky-400 shadow-lg hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-sky-50 border border-sky-100">
                  <img
                    src={getAssetUrl(artist.coverImage)}
                    alt={isRu ? (artist.nameRu || artist.name) : artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-3">
                    <img
                      src={artist.avatar}
                      alt={isRu ? (artist.nameRu || artist.name) : artist.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="text-white">
                      <span className="font-serif font-black text-sm block">
                        {isRu ? (artist.nameRu || artist.name) : artist.name}
                      </span>
                      <span className="text-[10px] text-sky-300 font-bold">
                        {isRu ? (artist.titleRu || artist.title) : artist.title}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {isRu ? (artist.bioRu || artist.bio) : artist.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-50 flex items-center justify-between">
                <span className="text-xs text-sky-700 font-black">
                  {artist.artworksCount} {isRu ? 'картин в коллекции' : 'collection originals'}
                </span>
                <Link
                  to={`/artists/${artist.slug}`}
                  className="px-4 py-2 rounded-xl bg-slate-900 group-hover:bg-sky-600 text-white text-xs font-black transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span>{t('btnArtistCabinet')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/artists"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-sky-50 text-sky-950 border-2 border-sky-200 text-xs font-black shadow-md transition-all hover:scale-105"
          >
            <span>{t('meetAllArtists')}</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </Link>
        </div>
      </section>

      {/* 5. Masterclasses Teaser */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t-2 border-sky-100">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-100 via-rose-50 to-blue-100 border-2 border-sky-200 p-8 md:p-14 shadow-xl">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 text-sky-950 text-xs font-black border border-sky-300 shadow-sm">
              <Wine className="w-4 h-4 text-rose-600" />
              {t('masterclassesTag')}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-950">
              {t('masterclassesTitle')}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {t('masterclassesDesc')}
            </p>
            <div className="pt-2">
              <Link
                to="/masterclasses"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-slate-950 hover:bg-sky-600 text-white text-xs font-black uppercase tracking-wider transition-all shadow-xl hover:scale-105"
              >
                <span>{t('btnBookMasterclass')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
