import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Palette, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  Award, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 text-slate-800 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Философия Miami Art Studio & Gallery
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-tight mb-6">
            Искусство, рожденное светом и океаном{' '}
            <span className="azure-gradient-text">Майами</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Мы основали Miami Art Studio на пересечении двух стихий: легендарного стиля арт-деко Саут-Бич и свободной энергии современного арт-квартала Винвуд. Наша миссия — создавать картины, которые преображают архитектурное пространство и наполняют его воздухом.
          </p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-serif font-bold text-xl">
              01
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Музейное качество
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Мы используем холсты из бельгийского льна, итальянские светостойкие пигменты, ювелирную смолу и 24-каратное сусальное золото. Каждая работа рассчитана на десятилетия безупречной сохранности.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-serif font-bold text-xl">
              02
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Связь с архитектурой
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Наши полотна создаются с учетом геометрии современных пентхаусов и вилл: от минимализма с открытыми панорамными видами до лофтов и неоклассических резиденций Палм-Бич.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-serif font-bold text-xl">
              03
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Закрытый клуб резидентов
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Только проверенные художники с международными выставками, признанные участники Art Basel Miami, чьи произведения обладают коллекционной и инвестиционной ценностью.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Visual Showcase Banner */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-14 flex flex-col justify-between text-white space-y-8">
              <div>
                <span className="text-xs text-sky-300 font-semibold tracking-wider uppercase block mb-2">
                  Пространство в Wynwood
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Больше, чем галерея. Экосистема творчества.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  В нашем пространстве площадью 400 м² вы можете не только приобрести готовые картины из экспозиции, но и увидеть процесс их создания в открытых мастерских резидентов, а также примерить работы в специальных зонах интерьерного моделирования.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-center sm:text-left">
                <div>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-sky-400 block">450+</span>
                  <span className="text-[11px] text-slate-400">Полотен в частных коллекциях</span>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-sky-400 block">6</span>
                  <span className="text-[11px] text-slate-400">Художников-резидентов</span>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-sky-400 block">100%</span>
                  <span className="text-[11px] text-slate-400">Аутентичность и сертификат</span>
                </div>
              </div>
            </div>

            <div className="relative h-72 lg:h-auto min-h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
                alt="Studio interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation with Designers */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-sky-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              Для дизайнеров интерьеров и архитекторов
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Специальная программа партнерства & 3D-модели картин
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Предоставляем 3D-модели и текстуры высокого разрешения для рендеров в 3ds Max / SketchUp, образцы фактурных выкрасов на объект в Майами, а также персональные условия сотрудничества.
            </p>
          </div>

          <Link
            to="/contacts"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
          >
            Стать партнером студии
          </Link>
        </div>
      </section>
    </div>
  );
};
