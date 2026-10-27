import React, { useState } from 'react';
import { 
  Palette, 
  Calendar, 
  Clock, 
  Users, 
  Check, 
  Sparkles, 
  Wine, 
  Heart, 
  CheckCircle, 
  X, 
  Phone 
} from 'lucide-react';
import { MASTERCLASSES_DATA } from '../data/mockData';
import { Masterclass } from '../types';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assets';

export const MasterclassesPage: React.FC = () => {
  const { showToast } = useCart();
  const { language } = useLanguage();
  const isRu = language === 'ru';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookingModalClass, setBookingModalClass] = useState<Masterclass | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '2025-11-15',
    time: '14:00',
    guests: '1',
  });

  const categories = [
    { id: 'all', label: isRu ? 'Все занятия' : 'All Classes' },
    { id: 'resin', label: isRu ? 'Эпоксидная смола' : 'Epoxy Art & Geodes' },
    { id: 'texture', label: isRu ? 'Фактурная живопись & Золото' : 'Textured Canvas & Gold Leaf' },
    { id: 'wine-party', label: isRu ? 'Арт-вечеринки & Свидания' : 'Sip & Paint Art Evenings' },
    { id: 'individual', label: isRu ? 'VIP Наставничество' : 'VIP Private Atelier' },
  ];

  const filteredClasses = MASTERCLASSES_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    showToast(isRu 
      ? 'Бронирование подтверждено! Ждем вас в Майами.' 
      : 'Reservation confirmed! Looking forward to welcoming you in Wynwood.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 text-slate-800 pb-24">
      {/* Header */}
      <section className="pt-14 pb-12 px-6 max-w-7xl mx-auto border-b border-sky-100">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            {isRu ? 'Творческое пространство в арт-районе Wynwood' : 'Creative Studio Sanctuary in Wynwood Art District'}
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            {isRu ? 'Мастер-классы & Арт-вечеринки' : 'Masterclasses & Salon Art Evenings'}
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            {isRu
              ? 'Погрузитесь в процесс создания современного искусства в атмосфере легкости, вдохновения и океанского бриза Майами. Все материалы музейного уровня и напитки уже включены в стоимость.'
              : 'Immerse yourself into the creative flow under the mentorship of resident masters. Premium museum-grade materials, chilled Prosecco, and genuine Wynwood energy included.'}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 pt-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-white hover:bg-sky-50 text-slate-700 border border-sky-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Masterclasses */}
      <section className="px-6 max-w-7xl mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative h-64 overflow-hidden bg-sky-100">
                  <img
                    src={getAssetUrl(item.imageUrl)}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getAssetUrl('covers/cover1.jpg');
                    }}
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-sky-800 text-xs font-bold shadow-md">
                      {item.level}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white text-xs font-bold shadow-md">
                      ${item.price} USD
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-sky-700 font-semibold">{item.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">
                      <Clock className="w-4 h-4 text-sky-600" />
                      <span className="text-slate-700 font-medium">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">
                      <Users className="w-4 h-4 text-sky-600" />
                      <span className="text-slate-700 font-medium">{item.capacity}</span>
                    </div>
                  </div>

                  {/* Inclusions list */}
                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2">
                      {isRu ? 'В стоимость входит:' : 'Included in Experience:'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                      {item.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-600 mt-0.5 flex-shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 md:p-8 pt-0 flex items-center justify-between border-t border-sky-50 mt-4">
                <div className="text-xs text-slate-500">
                  <span className="block text-[10px] text-slate-400">
                    {isRu ? 'Ближайшие даты:' : 'Available Dates:'}
                  </span>
                  <span className="font-semibold text-slate-800">{item.schedule}</span>
                </div>

                <button
                  onClick={() => {
                    setBookingModalClass(item);
                    setBookingSuccess(false);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-sky-500/20"
                >
                  {isRu ? 'Забронировать' : 'Reserve Spot'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      {bookingModalClass && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            onClick={() => setBookingModalClass(null)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-sky-100 z-10">
            <button
              onClick={() => setBookingModalClass(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  {isRu ? 'Запись подтверждена!' : 'Booking Confirmed!'}
                </h4>
                <p className="text-xs text-slate-600 mb-6 max-w-xs font-medium">
                  {isRu 
                    ? 'Мы отправили подтверждение на ваш номер. Адрес студии: Wynwood Art District, 250 NW 24th St, Miami.' 
                    : 'We have dispatched confirmation details. Studio address: Wynwood Art District, 250 NW 24th St, Miami.'}
                </p>
                <button
                  onClick={() => setBookingModalClass(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                >
                  {isRu ? 'Отлично' : 'Close'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-sky-700 block mb-1">
                    {isRu ? 'Бронирование занятия' : 'Masterclass Reservation'}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    {bookingModalClass.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {isRu 
                      ? `Стоимость: $${bookingModalClass.price} USD • Все материалы включены` 
                      : `Rate: $${bookingModalClass.price} USD • All materials & drinks included`}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {isRu ? 'Ваше Имя и Фамилия' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isRu ? 'Александр Смирнов' : 'Alexander Smirnov'}
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-sky-200 text-xs text-slate-800 focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {isRu ? 'Телефон (для WhatsApp / SMS)' : 'Phone (WhatsApp / SMS)'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (305) ..."
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-sky-200 text-xs text-slate-800 focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {isRu ? 'Дата' : 'Date'}
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-sky-200 text-xs text-slate-800 focus:ring-2 focus:ring-sky-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {isRu ? 'Время слота' : 'Time Slot'}
                      </label>
                      <select
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-sky-200 text-xs text-slate-800 focus:ring-2 focus:ring-sky-400"
                      >
                        <option value="14:00">14:00 (Afternoon)</option>
                        <option value="17:00">17:00 (Golden Hour)</option>
                        <option value="19:30">19:30 (Evening)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-sky-500/25 transition-all"
                  >
                    {isRu 
                      ? `Подтвердить бронь ($${bookingModalClass.price} USD)` 
                      : `Confirm Reservation ($${bookingModalClass.price} USD)`}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    {isRu 
                      ? 'Оплата возможна на месте или онлайн картой США / мира' 
                      : 'Payment available on-site or online via Stripe'}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
