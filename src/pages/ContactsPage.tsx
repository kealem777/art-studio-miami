import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Car
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ContactsPage: React.FC = () => {
  const { showToast } = useCart();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast('Ваше сообщение отправлено! Арт-куратор свяжется с вами в течение часа.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 text-slate-800 pb-24">
      {/* Header */}
      <section className="pt-14 pb-12 px-6 max-w-7xl mx-auto border-b border-sky-100">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Галерея & Творческое пространство в Майами
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Контакты & Визит в галерею
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Мы всегда рады гостям, коллекционерам и дизайнерам. Приходите на индивидуальный просмотр картин с бокалом шампанского в сердце арт-района Wynwood.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="px-6 max-w-7xl mx-auto pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Direct Contacts & Map simulation */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-slate-900 text-xl">
                Miami Art Studio & Gallery
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Адрес в Майами:</strong>
                    <span className="text-slate-600">250 NW 24th St, Wynwood Art District, Miami, FL 33127</span>
                    <span className="text-xs text-sky-600 block mt-0.5">Рядом с Wynwood Walls и Design District</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Часы работы:</strong>
                    <span className="text-slate-600">Ежедневно с 10:00 до 22:00</span>
                    <span className="text-xs text-slate-400 block mt-0.5">Индивидуальные закрытые показы — круглосуточно по предварительной записи</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/20">
                    <Phone className="w-6 h-6 stroke-[2.5] text-white animate-phone-ring" />
                  </div>
                  <div className="flex-1">
                    <strong className="block text-slate-900 font-bold text-base">Телефон & Арт-Консьерж:</strong>
                    <a href="tel:+13055552787" className="text-lg font-serif font-black text-slate-950 hover:text-sky-600 transition-colors block">
                      +1 (305) 555-ARTS (2787)
                    </a>
                    <span className="text-xs text-slate-500 block mb-3">Звонки по США и международные консультации</span>

                    {/* Bright WhatsApp Action Button */}
                    <a
                      href="https://wa.me/13055552787?text=Hello!%20I%20am%20interested%20in%20Miami%20Art%20Studio"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-md shadow-[#25D366]/30 animate-whatsapp-pulse"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.587 1.954.918 3.208.918 3.181 0 5.767-2.586 5.768-5.766.001-3.187-2.575-5.771-5.77-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.079-1.897-.442-1.615-.668-2.651-2.315-2.732-2.423-.081-.108-.654-.871-.654-1.661 0-.79.414-1.179.561-1.341.144-.162.316-.203.421-.203.106 0 .211.002.302.007.098.005.231-.037.36.274.133.32.454 1.108.495 1.189.041.081.069.176.014.284-.055.108-.083.176-.164.271-.081.095-.171.212-.245.284-.083.082-.169.17-.073.336.096.166.427.705.916 1.141.629.56 1.161.733 1.326.815.166.082.263.072.36-.041.097-.113.414-.482.525-.648.111-.166.222-.138.373-.082.152.056.969.457 1.135.54.166.082.277.123.318.192.041.068.041.399-.103.804z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.662 1.447 5.178L2 22l4.981-1.398A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.611 0-3.125-.461-4.417-1.258l-.317-.193-2.946.825.834-2.868-.211-.334A8.026 8.026 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8.063-8 8.063z" />
                      </svg>
                      <span>Чат в WhatsApp с куратором</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email для предложений:</strong>
                    <a href="mailto:curator@miamiartstudio.com" className="text-sky-700 hover:text-sky-900 font-medium">
                      curator@miamiartstudio.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Valet Parking Info */}
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-center gap-3 text-xs text-slate-700">
                <Car className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span>Бесплатный Valet Parking для гостей галереи у главного входа.</span>
              </div>
            </div>

            {/* Interactive Map Card Preview */}
            <div className="rounded-3xl overflow-hidden border border-sky-100 shadow-sm relative h-64 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1200&q=80"
                alt="Miami Wynwood Map Area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center p-6 text-center">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs text-slate-900">
                  <MapPin className="w-6 h-6 text-sky-600 mx-auto mb-1 animate-bounce" />
                  <strong className="font-serif font-bold text-sm block">Wynwood Art District</strong>
                  <span className="text-[11px] text-slate-500 block mb-3">Miami, Florida 33127</span>
                  <a
                    href="https://maps.google.com/?q=Wynwood+Miami"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-colors"
                  >
                    Открыть в Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Consultation Form */}
          <div>
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-sky-100 shadow-sm">
              {formSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                    Благодарим за обращение!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mb-6">
                    Наш старший арт-куратор свяжется с вами по указанному телефону или почте в ближайшее время.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                  >
                    Отправить еще одно сообщение
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-sky-600 block mb-1">
                      Обратная связь
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                      Записаться на просмотр или консультацию
                    </h3>
                    <p className="text-xs text-slate-500">
                      Заполните форму, и мы подготовим экспозицию под ваши предпочтения к вашему приезду.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1 uppercase tracking-wider">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Виктория Романова"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="viktoria@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1 uppercase tracking-wider">
                        Телефон (WhatsApp)
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (305) ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1 uppercase tracking-wider">
                      Цель обращения
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-sky-50/50 border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    >
                      <option value="consultation">Подбор картины под дизайн проект интерьера</option>
                      <option value="visit">Визит и закрытый показ в галерее Wynwood</option>
                      <option value="commission">Индивидуальный заказ картины у резидента</option>
                      <option value="designer-partnership">Сотрудничество для дизайнеров и архитекторов</option>
                      <option value="masterclass">Корпоративный или частный мастер-класс</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1 uppercase tracking-wider">
                      Комментарий или пожелания
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Укажите стиль интерьера, желаемые размеры или название понравившейся картины..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-sky-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Отправить запрос арт-куратору</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center">
                    Конфиденциальность гарантируется. Ваши контакты не передаются третьим лицам.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
