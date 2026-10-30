import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  Search, 
  RotateCcw, 
  Sparkles,
  Heart
} from 'lucide-react';
import { ARTWORKS_DATA, ARTISTS_DATA } from '../data/mockData';
import { ArtworkCard } from '../components/common/ArtworkCard';
import { ArtStyle } from '../types';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const GalleryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites } = useCart();
  const { language, t } = useLanguage();

  const initialStyle = searchParams.get('style') as ArtStyle | null;
  const initialArtist = searchParams.get('artist') || '';
  const showFavsInitial = searchParams.get('favorites') === 'true';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>(initialStyle || 'all');
  const [selectedArtist, setSelectedArtist] = useState<string>(initialArtist || 'all');
  const [selectedMedium, setSelectedMedium] = useState<string>('all');
  const [priceMax, setPriceMax] = useState<number>(6000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'year'>('featured');
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(showFavsInitial);

  const styleOptions = ['all', 'Modern', 'Minimalism', 'Loft', 'Hi-Tech', 'Neo-Classicism'];
  const styleLabelsRu: Record<string, string> = {
    'Modern': 'Модерн',
    'Minimalism': 'Минимализм',
    'Loft': 'Лофт',
    'Hi-Tech': 'Хай-тек',
    'Neo-Classicism': 'Неоклассика',
  };
  const mediumOptions = [
    'all',
    'Oil on Canvas',
    'Acrylic & Texture Paste',
    'Epoxy Resin & Gold Leaf',
    'Sculptural Canvas',
    'Mixed Media on Wood',
    'Watercolor & Gold Leaf',
  ];
  const mediumLabelsRu: Record<string, string> = {
    'Oil on Canvas': 'Масло на льняном холсте',
    'Acrylic & Texture Paste': 'Акрил и фактурная паста',
    'Epoxy Resin & Gold Leaf': 'Эпоксидная смола и золотая поталь',
    'Sculptural Canvas': 'Скульптурный льняной холст',
    'Mixed Media on Wood': 'Смешанная техника на дереве',
    'Watercolor & Gold Leaf': 'Акварель и сусальное золото',
  };

  const filteredArtworks = useMemo(() => {
    return ARTWORKS_DATA.filter((art) => {
      if (onlyFavorites && !favorites.includes(art.id)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = art.title.toLowerCase().includes(q) || art.titleRu.toLowerCase().includes(q);
        const matchesArtist = art.artistName.toLowerCase().includes(q);
        if (!matchesTitle && !matchesArtist) return false;
      }
      if (selectedStyle !== 'all' && art.style !== selectedStyle) {
        return false;
      }
      if (selectedArtist !== 'all' && art.artistSlug !== selectedArtist && art.artistName !== selectedArtist) {
        return false;
      }
      if (selectedMedium !== 'all' && art.medium !== selectedMedium) {
        return false;
      }
      if (art.price > priceMax) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'year') return b.year - a.year;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedStyle, selectedArtist, selectedMedium, priceMax, sortBy, onlyFavorites, favorites]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedStyle('all');
    setSelectedArtist('all');
    setSelectedMedium('all');
    setPriceMax(6000);
    setSortBy('featured');
    setOnlyFavorites(false);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-800 pb-24">
      {/* Page Header */}
      <section className="pt-12 pb-8 px-6 max-w-7xl mx-auto border-b-2 border-sky-200/70">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-300 text-sky-900 text-xs font-black mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>{t('artSeasonTag')}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-black text-slate-950 tracking-tight mb-2">
              {t('galleryTitle')}
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl font-medium">
              {t('galleryDesc')}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm font-medium"
            />
          </div>
        </div>

        {/* Quick Style Pills */}
        <div className="flex items-center gap-2 pt-6 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-black text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline">
            {language === 'ru' ? 'Стиль:' : 'Style:'}
          </span>
          {styleOptions.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStyle(st)}
              className={`px-4 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all border-2 ${
                selectedStyle === st
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white border-transparent shadow-lg shadow-sky-500/25 scale-105'
                  : 'bg-white/90 hover:bg-white text-slate-700 border-sky-200/80 hover:border-sky-300'
              }`}
            >
              {st === 'all' ? t('allStyles') : (language === 'ru' ? (styleLabelsRu[st] || st) : st)}
            </button>
          ))}

          {/* Only Favorites toggle */}
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-4 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all ml-auto flex items-center gap-1.5 border-2 ${
              onlyFavorites
                ? 'bg-rose-500 text-white border-transparent shadow-md'
                : 'bg-white/90 hover:bg-rose-50 text-slate-700 border-sky-200/80'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-white' : 'text-rose-500'}`} />
            <span>{t('favoritesFilter')} ({favorites.length})</span>
          </button>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-6 max-w-7xl mx-auto pt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
            <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-sky-200/80 shadow-lg space-y-6 sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                <span className="font-serif font-black text-slate-950 text-base flex items-center gap-2">
                  <Filter className="w-4 h-4 text-sky-600" />
                  {language === 'ru' ? 'Фильтры каталога' : 'Filter Works'}
                </span>
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-sky-600 hover:text-sky-800 font-black flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t('filterReset')}</span>
                </button>
              </div>

              {/* Filter 1: Artist Resident */}
              <div>
                <label className="text-xs font-black text-slate-700 block mb-2 uppercase tracking-wider">
                  {t('filterResident')}
                </label>
                <select
                  value={selectedArtist}
                  onChange={(e) => setSelectedArtist(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-sky-50/50 border-2 border-sky-200 text-xs text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="all">{t('filterAllArtists')}</option>
                  {ARTISTS_DATA.map((artist) => (
                    <option key={artist.id} value={artist.slug}>
                      {language === 'ru' ? (artist.nameRu || artist.name) : artist.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 2: Medium / Technique */}
              <div>
                <label className="text-xs font-black text-slate-700 block mb-2 uppercase tracking-wider">
                  {t('filterMedium')}
                </label>
                <select
                  value={selectedMedium}
                  onChange={(e) => setSelectedMedium(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-sky-50/50 border-2 border-sky-200 text-xs text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="all">{t('filterAllMediums')}</option>
                  {mediumOptions.filter((m) => m !== 'all').map((m) => (
                    <option key={m} value={m}>
                      {language === 'ru' ? (mediumLabelsRu[m] || m) : m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 3: Price Slider */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-black text-slate-700 uppercase tracking-wider">
                    {t('filterMaxPrice')}
                  </span>
                  <span className="font-black text-sky-700 font-serif text-sm">
                    ${priceMax.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="6000"
                  step="100"
                  value={priceMax}
                  onChange={(e) => setPriceMax(parseInt(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                  <span>$2,000</span>
                  <span>$6,000+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Artwork Grid & Toolbar */}
          <main className="flex-1">
            <div className="p-4 rounded-2xl bg-white border-2 border-sky-100 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <span className="text-xs text-slate-500 font-bold">
                {t('foundArtworks')}{' '}
                <strong className="text-slate-950 font-black">{filteredArtworks.length}</strong>
              </span>

              {/* Sorting */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-bold">{t('sortBy')}</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl bg-sky-50/50 border-2 border-sky-200 text-xs text-slate-900 font-extrabold focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="featured">{t('sortFeatured')}</option>
                  <option value="price-asc">{t('sortPriceAsc')}</option>
                  <option value="price-desc">{t('sortPriceDesc')}</option>
                  <option value="year">{t('sortNewest')}</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};
