import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Heart, 
  Compass, 
  ShieldCheck, 
  Truck, 
  Share2,
  Check
} from 'lucide-react';
import { ARTWORKS_DATA } from '../data/mockData';
import { ArtworkCard } from '../components/common/ArtworkCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { CartItem } from '../types';
import { getAssetUrl } from '../utils/assets';

export const ArtworkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite, showToast } = useCart();
  const { language, t } = useLanguage();
  const isRu = language === 'ru';

  const artwork = ARTWORKS_DATA.find((a) => a.id === id);

  const [selectedFrame, setSelectedFrame] = useState<CartItem['frame']>('none');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!artwork) {
    return (
      <div className="min-h-screen py-24 text-center px-6">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
          {language === 'ru' ? 'Картина не найдена' : 'Artwork Not Found'}
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          {language === 'ru' ? 'Возможно, полотно уже перешло в частную коллекцию.' : 'This original may have already entered a private collection.'}
        </p>
        <Link to="/gallery" className="px-5 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold">
          {t('backToCatalog')}
        </Link>
      </div>
    );
  }

  const allImages = [artwork.imageUrl, ...(artwork.detailImages || [])];
  const activeImageSrc = getAssetUrl(allImages[activeImageIndex] || artwork.imageUrl);
  const displayTitle = language === 'ru' ? (artwork.titleRu || artwork.title) : artwork.title;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(language === 'ru' ? 'Ссылка на картину скопирована' : 'Artwork link copied to clipboard');
    }
  };

  // Related artworks
  const relatedArtworks = ARTWORKS_DATA.filter(
    (a) => a.id !== artwork.id && (a.style === artwork.style || a.artistSlug === artwork.artistSlug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 text-slate-800 pb-24">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-sky-700 hover:text-sky-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('backToCatalog')}</span>
          </Link>

          <button
            onClick={handleShare}
            className="p-2.5 rounded-xl text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-colors text-xs font-bold flex items-center gap-1.5 border border-sky-100"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">{t('shareArtwork')}</span>
          </button>
        </div>
      </div>

      {/* Main Artwork Detail Layout */}
      <section className="px-6 max-w-7xl mx-auto pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image Showcase & Thumbnails (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-sky-200 shadow-2xl group flex items-center justify-center p-6 md:p-10 min-h-[440px] md:min-h-[580px]">
              <div className="relative shadow-2xl rounded-2xl overflow-hidden border-4 border-white max-w-full bg-slate-100">
                <img
                  key={activeImageSrc}
                  src={activeImageSrc}
                  alt={displayTitle}
                  className="max-h-[520px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getAssetUrl('covers/cover1.jpg');
                  }}
                />
              </div>

              {/* Fast 3D Try-in-interior button overlay */}
              <button
                onClick={() => navigate(`/interior-match?artworkId=${artwork.id}`)}
                className="absolute bottom-6 right-6 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500 text-white font-extrabold text-xs shadow-xl shadow-rose-500/25 hover:opacity-95 transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>{t('tryIn3DInterior')}</span>
              </button>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, index) => {
                  const thumbSrc = getAssetUrl(img);
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 shadow-md ${
                        activeImageIndex === index
                          ? 'border-sky-600 ring-4 ring-sky-400/40 scale-105'
                          : 'border-white opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumbSrc}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = getAssetUrl('covers/cover1.jpg');
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Guarantees Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-3xl bg-white border border-sky-100 text-xs shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5 text-sm">
                    {t('trustCert')}
                  </strong>
                  <span className="text-slate-500 leading-relaxed">
                    {language === 'ru' 
                      ? 'Каждая работа сопровождается физическим номерным сертификатом с голограммой и личной подписью автора.' 
                      : 'Every painting is accompanied by a registered holographic physical certificate signed by the resident master.'}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5 text-sm">
                    {t('trustDelivery')}
                  </strong>
                  <span className="text-slate-500 leading-relaxed">
                    {language === 'ru' 
                      ? 'Упаковка в индивидуальный деревянный кофр, страховка 100% стоимости, курьер в белых перчатках.' 
                      : 'Custom wooden crate packing, 100% insured transit, white-glove courier to your residence.'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Specs, Frame Selector, Artist Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border-2 border-sky-100 shadow-xl space-y-6">
              {/* Style & Favorite header */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs uppercase tracking-wider font-black border border-sky-300">
                  {artwork.style}
                </span>

                <button
                  onClick={() => toggleFavorite(artwork.id)}
                  className="p-2.5 rounded-2xl hover:bg-rose-50 text-slate-400 hover:text-rose-500 border border-sky-100 transition-colors"
                  title="Favorite"
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
                <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-950 mb-1">
                  {displayTitle}
                </h1>
                <p className="text-xs text-sky-700 uppercase tracking-widest font-black mb-4">
                  {isRu && artwork.dimensionsRu ? artwork.dimensionsRu : artwork.dimensions} • {isRu && artwork.mediumRu ? artwork.mediumRu : artwork.medium}
                </p>

                <Link
                  to={`/artists/${artwork.artistSlug}`}
                  className="inline-flex items-center gap-3 p-3 rounded-2xl bg-sky-50/80 hover:bg-sky-100 border border-sky-200 transition-colors w-full"
                >
                  <img
                    src={artwork.artistAvatar}
                    alt={artwork.artistName}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-bold">
                      {language === 'ru' ? 'Автор произведения' : 'Resident Master'}
                    </span>
                    <span className="font-serif font-black text-slate-950 text-sm">
                      {artwork.artistName}
                    </span>
                  </div>
                </Link>
              </div>

              {/* Price block */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50/80 border-2 border-sky-200 flex items-baseline justify-between shadow-sm">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 block">
                    {t('originalPrice')}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-serif font-black text-slate-950">
                      ${artwork.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-bold text-slate-600">USD</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black shadow-sm">
                  {t('inStockMiami')}
                </span>
              </div>

              {/* Specifications table */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block mb-0.5 font-medium">{t('specsDimensions')}</span>
                  <strong className="text-slate-900 font-bold">
                    {isRu && artwork.dimensionsRu ? artwork.dimensionsRu : artwork.dimensions}
                  </strong>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block mb-0.5 font-medium">{t('specsMedium')}</span>
                  <strong className="text-slate-900 font-bold">
                    {isRu && artwork.mediumRu ? artwork.mediumRu : artwork.medium}
                  </strong>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block mb-0.5 font-medium">{t('specsYear')}</span>
                  <strong className="text-slate-900 font-bold">{artwork.year}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block mb-0.5 font-medium">{t('specsStretcher')}</span>
                  <strong className="text-slate-900 font-bold">{t('specsStretcherVal')}</strong>
                </div>
              </div>

              {/* Frame selection */}
              <div>
                <label className="text-xs font-black text-slate-800 block mb-2 uppercase tracking-wider">
                  {t('frameOption')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'none', label: t('frameNone') },
                    { id: 'thin-black', label: t('frameBlack') },
                    { id: 'gold-brass', label: t('frameGold') },
                    { id: 'natural-oak', label: t('frameOak') },
                    { id: 'white-wood', label: t('frameWhite') },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFrame(f.id as any)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                        selectedFrame === f.id
                          ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
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
                <span className="text-xs font-black text-slate-800 block mb-1 uppercase tracking-wider">
                  {t('aboutArtworkHeading')}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {isRu ? (artwork.descriptionRu || artwork.description) : artwork.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4 border-t border-sky-100">
                <button
                  onClick={() => addToCart(artwork, selectedFrame)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm shadow-xl shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{t('btnAddToCart')} (${artwork.price.toLocaleString()} USD)</span>
                </button>

                <button
                  onClick={() => navigate(`/interior-match?artworkId=${artwork.id}`)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-opacity hover:opacity-95 shadow-md shadow-rose-500/20"
                >
                  <Compass className="w-4 h-4" />
                  <span>{t('tryIn3DInterior')}</span>
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
              <h3 className="text-2xl font-serif font-black text-slate-900">
                {t('relatedArtworksHeading')}
              </h3>
            </div>
            <Link to="/gallery" className="text-xs font-bold text-sky-600 hover:text-sky-800 uppercase tracking-wider">
              {t('viewAllCatalog')} →
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
