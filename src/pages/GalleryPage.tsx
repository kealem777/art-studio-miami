import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  Search, 
  RotateCcw, 
  SlidersHorizontal, 
  Sparkles,
  Heart,
  Grid,
  List
} from 'lucide-react';
import { ARTWORKS_DATA, ARTISTS_DATA } from '../data/mockData';
import { ArtworkCard } from '../components/common/ArtworkCard';
import { ArtStyle } from '../types';
import { useCart } from '../context/CartContext';

export const GalleryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites } = useCart();

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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Styles List
  const styleOptions = ['all', 'Modern', 'Minimalism', 'Loft', 'Hi-Tech', 'Neo-Classicism'];
  const mediumOptions = [
    'all',
    'Oil on Canvas',
    'Acrylic & Texture Paste',
    'Epoxy Resin & Gold Leaf',
    'Sculptural Canvas',
    'Mixed Media on Wood',
  ];

  // Filtering Logic
  const filteredArtworks = useMemo(() => {
    return ARTWORKS_DATA.filter((art) => {
      // Favorites filter
      if (onlyFavorites && !favorites.includes(art.id)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = art.title.toLowerCase().includes(q) || art.titleRu.toLowerCase().includes(q);
        const matchesArtist = art.artistName.toLowerCase().includes(q);
        if (!matchesTitle && !matchesArtist) return false;
      }

      // Style
      if (selectedStyle !== 'all' && art.style !== selectedStyle) {
        return false;
      }

      // Artist
      if (selectedArtist !== 'all' && art.artistSlug !== selectedArtist && art.artistName !== selectedArtist) {
        return false;
      }

      // Medium
      if (selectedMedium !== 'all' && art.medium !== selectedMedium) {
        return false;
      }

      // Price
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
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 text-slate-800 pb-24">
      {/* Page Header */}
      <section className="pt-12 pb-8 px-6 max-w-7xl mx-auto border-b border-sky-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Эксклюзивный каталог резидентов Майами
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-2">
              Галерея & Маркетплейс
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Авторские живописные полотна, барельефы и арт-объекты музейного качества с доставкой по США и всему миру.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Поиск по названию или художнику..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
            />
          </div>
        </div>

        {/* Quick Style Pills */}
        <div className="flex items-center gap-2 pt-6 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
            Стиль:
          </span>
          {styleOptions.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStyle(st)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedStyle === st
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-white hover:bg-sky-50 text-slate-600 border border-sky-100'
              }`}
            >
              {st === 'all' ? 'Все стили' : st}
            </button>
          ))}

          {/* Only Favorites toggle */}
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ml-auto flex items-center gap-1.5 ${
              onlyFavorites
                ? 'bg-rose-500 text-white shadow-md'
                : 'bg-white hover:bg-rose-50 text-slate-600 border border-sky-100'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-white' : 'text-rose-500'}`} />
            <span>Избранное ({favorites.length})</span>
          </button>
        </div>
      </section>

      {/* Main Content Layout (Sidebar Filters + Artwork Grid) */}
      <section className="px-6 max-w-7xl mx-auto pt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-6 sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-sky-50">
                <span className="font-serif font-bold text-slate-900 text-base flex items-center gap-2">
                  <Filter className="w-4 h-4 text-sky-600" />
                  Фильтры каталога
                </span>
                <button
                  onClick={resetAllFilters}
                  className="text-[11px] text-sky-600 hover:text-sky-800 font-semibold flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Сброс</span>
                </button>
              </div>

              {/* Filter 1: Artist Resident */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                  Художник-резидент
                </label>
                <select
                  value={selectedArtist}
                  onChange={(e) => setSelectedArtist(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-sky-50/50 border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="all">Все художники студии</option>
                  {ARTISTS_DATA.map((artist) => (
                    <option key={artist.id} value={artist.slug}>
                      {artist.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 2: Medium / Technique */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                  Техника & Материалы
                </label>
                <select
                  value={selectedMedium}
                  onChange={(e) => setSelectedMedium(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-sky-50/50 border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="all">Все техники</option>
                  {mediumOptions.filter((m) => m !== 'all').map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 3: Price Slider */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-slate-700 uppercase tracking-wider">
                    Макс. стоимость:
                  </span>
                  <span className="font-bold text-sky-700 font-serif">
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
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>$2,000</span>
                  <span>$6,000+</span>
                </div>
              </div>

              {/* Curated Advice Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 text-xs space-y-2">
                <span className="font-serif font-bold text-sky-900 block">
                  Персональный арт-консьерж
                </span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Ищете картину конкретного размера или диптих под интерьер? Наш куратор подберет 3 варианта за 15 минут.
                </p>
                <a
                  href="tel:+13055552787"
                  className="text-sky-700 hover:text-sky-900 font-bold block pt-1"
                >
                  Запросить подборку →
                </a>
              </div>
            </div>
          </aside>

          {/* Artwork Grid & Toolbar */}
          <main className="flex-1">
            {/* Top Toolbar */}
            <div className="p-4 rounded-2xl bg-white border border-sky-100 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">
                Найдено произведений:{' '}
                <strong className="text-slate-900 font-bold">{filteredArtworks.length}</strong>
              </span>

              {/* Sorting */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Сортировка:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl bg-sky-50/50 border border-sky-200 text-xs text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="featured">Рекомендуемые куратором</option>
                  <option value="price-asc">Сначала доступные ($ - $$$)</option>
                  <option value="price-desc">Сначала премиальные ($$$ - $)</option>
                  <option value="year">Свежие новинки 2025</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredArtworks.length === 0 ? (
              <div className="py-20 text-center rounded-3xl bg-white border border-sky-100 p-8">
                <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  По вашему запросу ничего не найдено
                </h3>
                <p className="text-xs text-slate-500 mb-6 max-w-sm mx-auto">
                  Попробуйте расширить диапазон цен или сбросить фильтр по стилю и автору.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-6 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold shadow-md"
                >
                  Сбросить все фильтры
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtworks.map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};
