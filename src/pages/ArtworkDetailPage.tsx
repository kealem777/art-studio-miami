import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Heart, 
  Compass, 
  ShieldCheck, 
  Truck, 
  Maximize2, 
  Sparkles,
  Share2,
  Check,
  Eye
} from 'lucide-react';
import { ARTWORKS_DATA } from '../data/mockData';
import { ArtworkCard } from '../components/common/ArtworkCard';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types';

export const ArtworkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite, showToast } = useCart();

  const artwork = ARTWORKS_DATA.find((a) => a.id === id);

  const [selectedFrame, setSelectedFrame] = useState<CartItem['frame']>('none');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!artwork) {
    return (
      <div className="min-h-screen py-24 text-center px-6">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Картина не найдена</h2>
        <p className="text-sm text-slate-500 mb-6">Возможно, полотно уже перешло в частную коллекцию.</p>
        <Link to="/gallery" className="px-5 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold">
          Вернуться в галерею
        </Link>
      </div>
    );
  }

  const allImages = [artwork.imageUrl, ...(artwork.detailImages || [])];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Ссылка на картину скопирована в буфер обмена');
    }
  };

  // Related artworks
  const relatedArtworks = ARTWORKS_DATA.filter(
    (a) => a.id !== artwork.id && (a.style === artwork.style || a.artistSlug === artwork.artistSlug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 text-slate-800 pb-24">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Вернуться в каталог</span>
          </Link>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl text-slate-500 hover:text-sky-700 hover:bg-sky-50 transition-colors text-xs font-medium flex items-center gap-1.5"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Поделиться</span>
          </button>
        </div>
      </div>

      {/* Main Artwork Detail Layout */}
      <section className="px-6 max-w-7xl mx-auto pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image Showcase & Thumbnails (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-sky-50/50 border border-sky-100 shadow-xl group flex items-center justify-center p-6 md:p-10 min-h-[420px] md:min-h-[560px]">
              <div className="relative shadow-2xl rounded-xl overflow-hidden border-4 border-white max-w-full">
                <img
                  src={allImages[activeImageIndex]}
                  alt={artwork.title}
                  className="max-h-[500px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Fast 3D Try-in-interior button overlay */}
              <button
                onClick={() => navigate(`/interior-match?artworkId=${artwork.id}`)}
                className="absolute bottom-6 right-6 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md text-sky-900 font-semibold text-xs shadow-lg shadow-sky-900/10 hover:bg-sky-600 hover:text-white transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-sky-500" />
                <span>Примерить в 3D интерьере</span>
              </button>
            </div>

            {/* Thumbnails if available */}
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === index
                        ? 'border-sky-600 ring-2 ring-sky-400/40'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Guarantees Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-3xl bg-white border border-sky-100 text-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 font-semibold mb-0.5">
                    Сертификат подлинности
                  </strong>
                  <span className="text-slate-500">
                    Каждая работа сопровождается физическим номерным сертификатом с голограммой и подписью автора.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 font-semibold mb-0.5">
                    Музейная доставка
                  </strong>
                  <span className="text-slate-500">
                    Упаковка в индивидуальный деревянный кофр, страховка 100% стоимости, курьер в белых перчатках.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Specs, Frame Selector, Artist Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-6">
              {/* Style & Favorite header */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs uppercase tracking-wider font-bold border border-sky-200">
                  {artwork.style}
                </span>

                <button
                  onClick={() => toggleFavorite(artwork.id)}
                  className="p-2.5 rounded-full hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-colors"
                  title="В избранное"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite(artwork.id) ? 'text-rose-500 fill-rose-500' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Title & Author */}
              <div>
                <h1 className="text-3xl font-serif font-bold text-slate-950 mb-1">
                  {artwork.title}
                </h1>
                <p className="text-sm text-slate-500 italic mb-3">{artwork.titleRu}</p>

                <Link
                  to={`/artists/${artwork.artistSlug}`}
                  className="inline-flex items-center gap-3 p-2.5 rounded-2xl bg-sky-50/60 hover:bg-sky-100 border border-sky-100 transition-colors"
                >
                  <img
                    src={artwork.artistAvatar}
                    alt={artwork.artistName}
                    className="w-9 h-9 rounded-full object-cover border border-white shadow-sm"
                  />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                      Автор произведения
                    </span>
                    <span className="font-serif font-bold text-slate-900 text-sm">
                      {artwork.artistName}
                    </span>
                  </div>
                </Link>
              </div>

              {/* Price block */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50/70 to-blue-50/50 border border-sky-100 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">
                    Цена оригинала
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-serif font-bold text-slate-950">
                      ${artwork.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold text-slate-600">USD</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  В наличии в Майами
                </span>
              </div>

              {/* Specifications table */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block mb-0.5">Размеры полотна:</span>
                  <strong className="text-slate-800 font-semibold">{artwork.dimensions}</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block mb-0.5">Техника:</span>
                  <strong className="text-slate-800 font-semibold">{artwork.medium}</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block mb-0.5">Год написания:</span>
                  <strong className="text-slate-800 font-semibold">{artwork.year} г.</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block mb-0.5">Подрамник:</span>
                  <strong className="text-slate-800 font-semibold">Музейный профиль (4 см)</strong>
                </div>
              </div>

              {/* Frame selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                  Оформление в багет:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'none', label: 'Без рамы' },
                    { id: 'thin-black', label: 'Черный металл' },
                    { id: 'gold-brass', label: 'Шампань-золото' },
                    { id: 'natural-oak', label: 'Натуральный дуб' },
                    { id: 'white-wood', label: 'Белый багет' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFrame(f.id as any)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                        selectedFrame === f.id
                          ? 'bg-sky-600 text-white shadow-md'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-1 uppercase tracking-wider">
                  О произведении
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4 border-t border-sky-100">
                <button
                  onClick={() => addToCart(artwork, selectedFrame)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Добавить в корзину (${artwork.price.toLocaleString()} USD)</span>
                </button>

                <button
                  onClick={() => navigate(`/interior-match?artworkId=${artwork.id}`)}
                  className="w-full py-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Compass className="w-4 h-4 text-sky-600" />
                  <span>Виртуальная примерка на стене комнаты (3D)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Artworks */}
      {relatedArtworks.length > 0 && (
        <section className="px-6 max-w-7xl mx-auto pt-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-sky-100">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Похожие произведения из коллекции
              </h3>
              <p className="text-xs text-slate-500">Полотна в том же стиле или того же автора</p>
            </div>
            <Link to="/gallery" className="text-xs font-semibold text-sky-600 hover:text-sky-800">
              Смотреть все →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArtworks.map((art) => (
              <ArtworkCard key={art.id} artwork={art} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
