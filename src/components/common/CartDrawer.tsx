import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle,
  Eye,
  Tag
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import { ARTISTS_DATA } from '../../data/mockData';
import { getAssetUrl } from '../../utils/assets';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    items, 
    removeFromCart, 
    updateQuantity, 
    totalPrice, 
    clearCart 
  } = useCart();
  const { language, t } = useLanguage();
  const isRu = language === 'ru';

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: 'Brickell Ave, Miami, FL',
    cardNumber: '•••• •••• •••• 4242'
  });

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'MIAMI2025' || promoCode.trim().toUpperCase() === 'ART') {
      setDiscountPercent(10);
      alert(isRu ? 'Промокод применен: Скидка 10% на ваш заказ!' : 'Promo applied: 10% off your collection order!');
    } else {
      alert(isRu ? 'Неверный промокод. Попробуйте промокод MIAMI2025' : 'Invalid code. Try MIAMI2025');
    }
  };

  const finalTotal = Math.round(totalPrice * (1 - discountPercent / 100));

  const handlePayOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      clearCart();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-sky-100">
          {/* Header */}
          <div className="p-6 border-b border-sky-50 flex items-center justify-between bg-gradient-to-r from-sky-50/50 to-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">
                  {t('cartTitleHeading')}
                </h3>
                <p className="text-xs text-sky-600">
                  {items.length} {t('itemsSelected')}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setOrderSuccess(false);
              }}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderSuccess ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  {t('orderSuccessTitle')}
                </h4>
                <p className="text-sm text-slate-600 mb-6 max-w-xs font-medium">
                  {t('orderSuccessDesc')}
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setOrderSuccess(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-sky-600 transition-colors"
                >
                  {isRu ? 'Вернуться в галерею' : 'Return to Gallery'}
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-400 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-serif font-semibold text-slate-900 mb-1">
                  {t('cartEmptyTitle')}
                </h4>
                <p className="text-xs text-slate-500 mb-6 max-w-xs font-medium">
                  {t('cartEmptyDesc')}
                </p>
                <Link
                  to="/gallery"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-md shadow-sky-500/20"
                >
                  {isRu ? 'Перейти в каталог' : 'Browse Originals'}
                </Link>
              </div>
            ) : (
              <>
                {/* List of items */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.artwork.id}
                      className="flex gap-4 p-3 rounded-2xl bg-sky-50/40 border border-sky-100/80 hover:bg-sky-50/70 transition-colors"
                    >
                      <img
                        src={getAssetUrl(item.artwork.imageUrl)}
                        alt={item.artwork.title}
                        className="w-20 h-24 object-cover rounded-xl shadow-sm border border-white flex-shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = getAssetUrl('covers/cover1.jpg');
                        }}
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h5 className="font-serif font-bold text-slate-900 text-sm truncate">
                              {isRu ? (item.artwork.titleRu || item.artwork.title) : item.artwork.title}
                            </h5>
                            <button
                              onClick={() => removeFromCart(item.artwork.id)}
                              className="text-slate-400 hover:text-rose-500 p-1"
                              title={isRu ? 'Удалить' : 'Remove'}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-sky-700 font-medium">
                            {isRu
                              ? (ARTISTS_DATA.find((a) => a.slug === item.artwork.artistSlug)?.nameRu || item.artwork.artistName)
                              : item.artwork.artistName}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {isRu ? (item.artwork.dimensionsRu || item.artwork.dimensions) : item.artwork.dimensions}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-sky-200 rounded-lg bg-white overflow-hidden text-xs">
                            <button
                              onClick={() => updateQuantity(item.artwork.id, item.quantity - 1)}
                              className="px-2 py-0.5 hover:bg-sky-50 text-slate-600 font-bold"
                            >
                              -
                            </button>
                            <span className="px-2 font-semibold text-slate-800">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.artwork.id, item.quantity + 1)}
                              className="px-2 py-0.5 hover:bg-sky-50 text-slate-600 font-bold"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-semibold text-slate-900 text-sm">
                            ${(item.artwork.price * item.quantity).toLocaleString()} USD
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo code form */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder={isRu ? 'Промокод (MIAMI2025)' : 'Promo code (MIAMI2025)'}
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-800 text-xs font-semibold transition-colors"
                  >
                    {isRu ? 'Применить' : 'Apply'}
                  </button>
                </form>

                {/* Fast Virtual Room Try Button */}
                <Link
                  to="/interior-match"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-white border border-sky-200 hover:border-sky-300 text-sky-700 text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Eye className="w-4 h-4 text-sky-500" />
                  <span>{isRu ? 'Примерить выбранные картины на стене' : 'Preview Artworks in Virtual 3D Room'}</span>
                </Link>

                {/* Checkout simulation form */}
                <form onSubmit={handlePayOrder} className="pt-4 border-t border-sky-100 space-y-3">
                  <h5 className="font-serif font-semibold text-sm text-slate-900">
                    {t('fastCheckoutTitle')}
                  </h5>
                  <input
                    type="text"
                    required
                    placeholder={isRu ? 'Имя и Фамилия' : 'Full Name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-sky-100 text-xs text-slate-800 focus:ring-2 focus:ring-sky-300"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-sky-100 text-xs text-slate-800 focus:ring-2 focus:ring-sky-300"
                    />
                    <input
                      type="tel"
                      required
                      placeholder={isRu ? 'Телефон (+1 ...)' : 'Phone (+1 ...)'}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-sky-100 text-xs text-slate-800 focus:ring-2 focus:ring-sky-300"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder={isRu ? 'Адрес доставки в США или мире' : 'Delivery Address (US / Worldwide)'}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-sky-100 text-xs text-slate-800 focus:ring-2 focus:ring-sky-300"
                  />

                  {/* Summary */}
                  <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>{isRu ? 'Сумма полотен:' : 'Artworks Total:'}</span>
                      <span>${totalPrice.toLocaleString()} USD</span>
                    </div>
                    {discountPercent > 0 && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>{isRu ? `Скидка (${discountPercent}%):` : `Promo Discount (${discountPercent}%):`}</span>
                        <span>-${Math.round((totalPrice * discountPercent) / 100).toLocaleString()} USD</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-600">
                      <span>{isRu ? 'Кураторская доставка:' : 'White-Glove Delivery:'}</span>
                      <span className="text-emerald-600 font-medium">
                        {isRu ? 'Бесплатно по Майами & США' : 'Complimentary across Miami & US'}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-sky-200/60 flex justify-between text-slate-900 font-bold text-sm">
                      <span>{isRu ? 'Итого к оплате:' : 'Total Amount:'}</span>
                      <span className="text-sky-700 font-serif text-base">${finalTotal.toLocaleString()} USD</span>
                    </div>
                  </div>

                  {/* Pay button */}
                  <button
                    type="submit"
                    disabled={isCheckingOut}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isCheckingOut ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{isRu ? 'Обработка Stripe Gateway...' : 'Processing Stripe Gateway...'}</span>
                      </div>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>{isRu ? `Оплатить через Stripe ($${finalTotal.toLocaleString()})` : `Pay with Stripe ($${finalTotal.toLocaleString()})`}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t('stripeVerified')}</span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
