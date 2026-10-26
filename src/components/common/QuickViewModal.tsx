import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  X, 
  ShoppingBag, 
  Heart, 
  Eye, 
  ShieldCheck, 
  Maximize2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import { getAssetUrl } from '../../utils/assets';

export const QuickViewModal: React.FC = () => {
  const { quickViewArtwork, setQuickViewArtwork, addToCart, toggleFavorite, isFavorite } = useCart();
  const navigate = useNavigate();

  if (!quickViewArtwork) return null;

  const handleTryInInterior = () => {
    const artId = quickViewArtwork.id;
    setQuickViewArtwork(null);
    navigate(`/interior-match?artworkId=${artId}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewArtwork(null)}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-sky-100 overflow-hidden z-10 flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewArtwork(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-slate-500 hover:text-slate-900 hover:bg-white shadow-md flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Artwork Image Container */}
        <div className="md:w-1/2 bg-sky-50/50 p-6 flex flex-col items-center justify-center relative group min-h-[360px] md:min-h-[500px]">
          <div className="relative shadow-2xl rounded-xl overflow-hidden border-4 border-white">
            <img
              src={getAssetUrl(quickViewArtwork.imageUrl)}
              alt={quickViewArtwork.title}
              className="max-h-[420px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getAssetUrl('covers/cover1.jpg');
              }}
            />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={handleTryInInterior}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100/80 hover:bg-sky-200 text-sky-800 text-xs font-semibold transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-sky-600" />
              <span>Примерить на стене комнаты</span>
            </button>
          </div>
        </div>

        {/* Details & Action Panel */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200/60">
                {quickViewArtwork.style}
              </span>
              <button
                onClick={() => toggleFavorite(quickViewArtwork.id)}
                className="p-2 rounded-full hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-colors"
                title="Добавить в избранное"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite(quickViewArtwork.id) ? 'text-rose-500 fill-rose-500' : ''
                  }`}
                />
              </button>
            </div>

            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">
              {quickViewArtwork.title}
            </h3>
            <p className="text-sm text-slate-500 italic mb-4">{quickViewArtwork.titleRu}</p>

            {/* Artist link */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-sky-50/60 border border-sky-100 mb-5">
              <img
                src={quickViewArtwork.artistAvatar}
                alt={quickViewArtwork.artistName}
                className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
              />
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Автор полотна</span>
                <Link
                  to={`/artists/${quickViewArtwork.artistSlug}`}
                  onClick={() => setQuickViewArtwork(null)}
                  className="font-serif font-semibold text-slate-900 hover:text-sky-600 text-sm flex items-center gap-1 transition-colors"
                >
                  <span>{quickViewArtwork.artistName}</span>
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                </Link>
              </div>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block mb-0.5">Размеры</span>
                <span className="font-semibold text-slate-800">{quickViewArtwork.dimensions}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block mb-0.5">Техника</span>
                <span className="font-semibold text-slate-800">{quickViewArtwork.medium}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block mb-0.5">Год создания</span>
                <span className="font-semibold text-slate-800">{quickViewArtwork.year} г.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block mb-0.5">Наличие</span>
                <span className="font-semibold text-emerald-600">В наличии в Майами</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {quickViewArtwork.description}
            </p>
          </div>

          {/* Pricing & Call to Actions */}
          <div className="pt-4 border-t border-sky-100">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <span className="text-xs text-slate-400 block">Стоимость оригинала:</span>
                <span className="text-3xl font-serif font-bold text-slate-900">
                  ${quickViewArtwork.price.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 ml-1.5">USD</span>
              </div>
              <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                Сертификат подлинности
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  addToCart(quickViewArtwork);
                  setQuickViewArtwork(null);
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>В корзину</span>
              </button>

              <button
                onClick={handleTryInInterior}
                className="px-4 py-3.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-semibold text-sm transition-colors flex items-center gap-1.5"
                title="Виртуальная примерка"
              >
                <Maximize2 className="w-4 h-4 text-sky-600" />
                <span>Примерить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
