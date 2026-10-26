import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Maximize2 } from 'lucide-react';
import { Artwork } from '../../types';
import { useCart } from '../../context/CartContext';

interface ArtworkCardProps {
  artwork: Artwork;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const { addToCart, toggleFavorite, isFavorite, setQuickViewArtwork } = useCart();
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

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-sky-100/80 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col">
      {/* Artwork Image Container */}
      <div className="relative aspect-[4/5] bg-gradient-to-b from-sky-50/40 to-slate-100 overflow-hidden cursor-pointer">
        <Link to={`/gallery/${artwork.id}`} className="block w-full h-full">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = './miami-hero-art.svg';
            }}
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-sky-800 text-[10px] uppercase tracking-wider font-bold shadow-sm border border-sky-100 pointer-events-auto">
            {artwork.style}
          </span>

          <button
            onClick={handleToggleFav}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-400 hover:text-rose-500 hover:bg-white flex items-center justify-center shadow-sm transition-all pointer-events-auto"
            title="В избранное"
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
            className="px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 hover:text-sky-600 text-xs font-semibold shadow-lg flex items-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Обзор</span>
          </button>
          <button
            onClick={handleTryInInterior}
            className="px-3 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-500 text-xs font-semibold shadow-lg flex items-center gap-1.5 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Примерить</span>
          </button>
        </div>
      </div>

      {/* Card Info & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Artist link */}
          <Link
            to={`/artists/${artwork.artistSlug}`}
            className="text-xs text-sky-600 hover:text-sky-800 font-medium mb-1 inline-block transition-colors"
          >
            {artwork.artistName}
          </Link>

          {/* Title */}
          <Link to={`/gallery/${artwork.id}`} className="block">
            <h4 className="font-serif font-bold text-slate-900 text-base group-hover:text-sky-600 transition-colors line-clamp-1 mb-1">
              {artwork.title}
            </h4>
          </Link>

          {/* Medium and dimensions */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-3">
            <span>{artwork.medium}</span>
            <span>•</span>
            <span>{artwork.dimensions}</span>
          </div>
        </div>

        {/* Price & Cart button */}
        <div className="pt-3 border-t border-sky-50 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Цена</span>
            <span className="text-lg font-serif font-bold text-slate-900">
              ${artwork.price.toLocaleString()}
            </span>
            <span className="text-[10px] text-slate-500 ml-1">USD</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="p-2.5 rounded-xl bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white transition-all duration-200 border border-sky-200 hover:border-transparent shadow-sm flex items-center gap-1.5 text-xs font-semibold"
            title="Добавить в корзину"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};
