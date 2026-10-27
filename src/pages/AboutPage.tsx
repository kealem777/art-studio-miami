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
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 text-slate-800 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            {isRu ? 'Философия Miami Art Studio & Gallery' : 'Miami Art Studio & Gallery Philosophy'}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-tight mb-6">
            {isRu ? 'Искусство, рожденное светом и океаном ' : 'Art Born of Sunlight and the Ocean of '}
            <span className="azure-gradient-text">Miami</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            {isRu
              ? 'Мы основали Miami Art Studio на пересечении двух стихий: легендарного стиля арт-деко Саут-Бич и свободной энергии современного арт-квартала Винвуд. Наша миссия — создавать картины, которые преображают архитектурное пространство и наполняют его воздухом.'
              : 'Miami Art Studio was founded at the crossroads of two iconic forces: South Beach Art Deco heritage and the vibrant creative pulse of Wynwood Art District. Our mission is to craft museum-grade works that elevate high-end architectural spaces and infuse them with light.'}
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
              {isRu ? 'Музейное качество' : 'Museum Grade Quality'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {isRu
                ? 'Мы используем холсты из бельгийского льна, итальянские светостойкие пигменты, ювелирную смолу и 24-каратное сусальное золото. Каждая работа рассчитана на десятилетия безупречной сохранности.'
                : 'We utilize fine Belgian linen, lightfast Italian pigments, jewelry-grade resin, and genuine 24K gold leaf. Each piece is crafted for timeless preservation across generations.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-serif font-bold text-xl">
              02
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              {isRu ? 'Связь с архитектурой' : 'Architectural Harmony'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {isRu
                ? 'Наши полотна создаются с учетом геометрии современных пентхаусов и вилл: от минимализма с открытыми панорамными видами до лофтов и неоклассических резиденций Палм-Бич.'
                : 'Our canvases are composed to harmonize with modern penthouses, coastal villas, and high-ceiling residences: from open-plan minimalism to industrial lofts and Palm Beach neoclassicism.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-serif font-bold text-xl">
              03
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              {isRu ? 'Закрытый клуб резидентов' : 'Curated Resident Masters'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {isRu
                ? 'Только проверенные художники с международными выставками, признанные участники Art Basel Miami, чьи произведения обладают коллекционной и инвестиционной ценностью.'
                : 'Acclaimed resident artists with international gallery portfolios and Art Basel Miami satellite presence, delivering verified investment and collector value.'}
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
                  {isRu ? 'Пространство в Wynwood' : 'Wynwood Studio Space'}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  {isRu ? 'Больше, чем галерея. Экосистема творчества.' : 'More Than a Gallery. A Creative Ecosystem.'}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isRu
                    ? 'В нашем пространстве площадью 400 м² вы можете не только приобрести готовые картины из экспозиции, но и увидеть процесс их создания в открытых мастерских резидентов, а также примерить работы в специальных зонах интерьерного моделирования.'
                    : 'Within our 4,300 sq. ft. creative sanctuary, collectors can view curated originals, observe artists at work in resident ateliers, and preview works in dedicated architectural mock-up spaces.'}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-center sm:text-left">
                <div>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-sky-400 block">450+</span>
                  <span className="text-[11px] text-slate-400">
                    {isRu ? 'Полотен в коллекциях' : 'Originals Collected'}
                  </span>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-sky-400 block">6</span>
                  <span className="text-[11px] text-slate-400">
                    {isRu ? 'Художников-резидентов' : 'Resident Masters'}
                  </span>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-sky-400 block">100%</span>
                  <span className="text-[11px] text-slate-400">
                    {isRu ? 'Аутентичность и сертификат' : 'Authenticity Guarantee'}
                  </span>
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
              {isRu ? 'Для дизайнеров интерьеров и архитекторов' : 'For Interior Designers & Architects'}
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              {isRu ? 'Специальная программа партнерства & 3D-модели картин' : 'Trade Partnership Program & High-Res 3D Models'}
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
              {isRu
                ? 'Предоставляем 3D-модели и текстуры высокого разрешения для рендеров в 3ds Max / SketchUp, образцы фактурных выкрасов на объект в Майами, а также персональные условия сотрудничества.'
                : 'We provide 3D files and high-res texture packs for 3ds Max, Blender, and SketchUp renders, physical swatch samples delivered to Miami job sites, and tiered trade pricing.'}
            </p>
          </div>

          <Link
            to="/contacts"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
          >
            {isRu ? 'Стать партнером студии' : 'Join Trade Program'}
          </Link>
        </div>
      </section>
    </div>
  );
};
