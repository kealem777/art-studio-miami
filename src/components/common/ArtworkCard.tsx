import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Maximize2 } from 'lucide-react';
import { Artwork } from '../../types';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import { getAssetUrl } from '../../utils/assets';

interface ArtworkCardProps {
  artwork: Artwork;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const { addToCart, toggleFavorite, isFavorite, setQuickViewArtwork } = useCart();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const handleTryInInterior = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/interior-match?artworkId=${artwork.id}`);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewArtwork(artwork);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(artwork);
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(artwork.id);
  };

  const displayTitle = language === 'ru' ? (artwork.titleRu || artwork.title) : artwork.title;
  const imageSrc = getAssetUrl(artwork.imageUrl);

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-sky-100 hover:border-sky-400 shadow-md hover:shadow-2xl hover:shadow-sky-500/15 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Artwork Image Container */}
      <div className="relative aspect-[4/5] bg-gradient-to-b from-sky-50/50 to-slate-100 overflow-hidden cursor-pointer">
        <Link to={`/gallery/${artwork.id}`} className="block w-full h-full">
          <img
            src={imageSrc}
            alt={displayTitle}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = getAssetUrl('covers/cover1.jpg');
            }}
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-sky-900 text-[10px] uppercase tracking-wider font-black shadow-md border border-sky-200 pointer-events-auto">
            {artwork.style}
          </span>

          <button
            onClick={handleToggleFav}
            className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-slate-400 hover:text-rose-500 hover:bg-white flex items-center justify-center shadow-md transition-all pointer-events-auto"
            title="Favorite"
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite(artwork.id) ? 'text-rose-500 fill-rose-500' : ''
              }`}
            />
          </button>
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          <button
            onClick={handleQuickView}
            className="px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 hover:text-sky-600 text-xs font-bold shadow-lg flex items-center gap-1.5 transition-colors border border-sky-100"
          >
            <Eye className="w-3.5 h-3.5 text-sky-600" />
            <span>{t('btnQuickView')}</span>
          </button>
          <button
            onClick={handleTryInInterior}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 text-xs font-bold shadow-lg shadow-sky-500/25 flex items-center gap-1.5 transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{t('btnTryInInterior')}</span>
          </button>
        </div>
      </div>

      {/* Card Info & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <Link
            to={`/artists/${artwork.artistSlug}`}
            className="text-xs text-sky-600 hover:text-sky-800 font-bold mb-1 inline-block transition-colors"
          >
            {artwork.artistName}
          </Link>

          <Link to={`/gallery/${artwork.id}`} className="block">
            <h4 className="font-serif font-black text-slate-900 text-base group-hover:text-sky-600 transition-colors line-clamp-1 mb-1">
              {displayTitle}
            </h4>
          </Link>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-3 font-medium">
            <span>{artwork.medium}</span>
            <span>•</span>
            <span>{artwork.dimensions}</span>
          </div>
        </div>

        {/* Price & Cart button */}
        <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-bold">
              {t('originalPrice')}
            </span>
            <span className="text-xl font-serif font-black text-slate-950">
              ${artwork.price.toLocaleString()}
            </span>
            <span className="text-[10px] text-slate-500 ml-1 font-bold">USD</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold transition-all duration-200 shadow-md shadow-sky-500/20 flex items-center gap-1.5 text-xs"
            title="Add to cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t('btnAddToCart')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
