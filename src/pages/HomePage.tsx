import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Palette, 
  Compass, 
  ShieldCheck, 
  Truck, 
  Eye, 
  Award,
  Layers,
  Wine,
  Phone,
  ChevronRight
} from 'lucide-react';
import { ARTWORKS_DATA, ARTISTS_DATA, INTERIOR_ROOMS } from '../data/mockData';
import { ArtworkCard } from '../components/common/ArtworkCard';

export const HomePage: React.FC = () => {
  const [activeRoomStyle, setActiveRoomStyle] = useState(INTERIOR_ROOMS[0]);

  // Top 6 featured artworks
  const featuredArtworks = ARTWORKS_DATA.filter((a) => a.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 text-slate-800 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-6 max-w-7xl mx-auto">
        {/* Soft background ambient gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-sky-300/20 via-sky-100/30 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Block */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200/80 text-sky-800 text-xs font-semibold shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Wynwood Art District • Miami, Florida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-950 tracking-tight leading-[1.08] mb-6">
              Искусство, наполняющее дом светом{' '}
              <span className="azure-gradient-text">Майами</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-normal">
              Оригинальные крупноформатные картины, фактурная живопись и арт-объекты для элитных резиденций, пентхаусов и дизайнерских проектов.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/gallery"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/25 flex items-center gap-2.5 transition-all group"
              >
                <span>Исследовать галерею</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/interior-match"
                className="px-6 py-4 rounded-2xl bg-white hover:bg-sky-50 text-sky-800 border border-sky-200/80 font-semibold text-sm shadow-sm flex items-center gap-2 transition-colors"
              >
                <Compass className="w-4 h-4 text-sky-600" />
                <span>Примерить в 3D интерьере</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                100% Сертификат подлинности
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-sky-600" />
                Бережная доставка по США и миру
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-sky-600" />
                Резиденты Art Basel Miami
              </span>
            </div>
          </div>

          {/* Right Hero Visual: Floating Art & Room Composition */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sky-100 group">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85"
                alt="Miami Ocean Mist Painting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating artwork card overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-sky-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-sky-700 block">
                    Полотно недели
                  </span>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">
                    Miami Ocean Mist (140×100 см)
                  </h4>
                  <p className="text-xs text-slate-500">Elena Rostova • Oil on Canvas</p>
                </div>
                <div className="text-right">
                  <span className="font-serif font-bold text-slate-900 text-sm block">
                    $3,800 USD
                  </span>
                  <Link
                    to="/gallery/art-1"
                    className="text-[11px] text-sky-600 hover:text-sky-800 font-semibold"
                  >
                    Смотреть детали →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick 5 Interior Styles Selector Teaser */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-sky-100">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            Интерьерный подбор
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight mb-3">
            Подбор картин под 5 стилей интерьера
          </h2>
          <p className="text-sm text-slate-600">
            Каждое архитектурное направление требует выверенной колористики и фактуры. Выберите стиль вашего жилья и оцените идеальные сочетания.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {INTERIOR_ROOMS.map((room) => {
            const isCurrent = activeRoomStyle.id === room.id;
            return (
              <button
                key={room.id}
                onClick={() => setActiveRoomStyle(room)}
                className={`p-4 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'border-sky-500 bg-white shadow-xl shadow-sky-500/10 ring-2 ring-sky-400/30'
                    : 'border-sky-100 bg-white/70 hover:bg-white hover:border-sky-200'
                }`}
              >
                <div className="w-full h-36 rounded-2xl overflow-hidden mb-3 relative">
                  <img
                    src={room.imageUrl}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-sky-900 text-[10px] font-bold">
                    {room.style}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm mb-1">
                    {room.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Try CTA banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs text-sky-300 font-semibold tracking-wider uppercase block mb-1">
              Выбран стиль: {activeRoomStyle.name}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">
              Хотите примерить картины на этой стене прямо сейчас?
            </h3>
            <p className="text-xs text-sky-100/70">
              Интерактивный инструмент масштабирования, выбора багета и виртуальной примерки в 3D.
            </p>
          </div>

          <Link
            to={`/interior-match?style=${activeRoomStyle.style}`}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg shadow-sky-500/25 flex items-center gap-2"
          >
            <span>Запустить примерку ({activeRoomStyle.style})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. Featured Artworks Marketplace */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-sky-100">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-semibold mb-3">
              <Palette className="w-3.5 h-3.5 text-sky-600" />
              Кураторский выбор
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              Избранные полотна сезона
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Эксклюзивные авторские оригиналы, готовые к отправке в деревянных кофрах
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider"
          >
            <span>Смотреть весь каталог</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>

      {/* 4. Resident Artists Showcase */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-sky-100">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            Мастера студии
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight mb-3">
            Художники-резиденты
          </h2>
          <p className="text-sm text-slate-600">
            Перейдите в персональный маркетплейс-кабинет автора, чтобы ознакомиться с его серией полотен и манифестом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTISTS_DATA.slice(0, 3).map((artist) => (
            <div
              key={artist.id}
              className="group p-6 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-sky-50">
                  <img
                    src={artist.coverImage}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2.5">
                    <img
                      src={artist.avatar}
                      alt={artist.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="text-white">
                      <span className="font-serif font-bold text-sm block">{artist.name}</span>
                      <span className="text-[10px] text-sky-300">{artist.title}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {artist.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-50 flex items-center justify-between">
                <span className="text-xs text-sky-700 font-semibold">
                  {artist.artworksCount} картин в коллекции
                </span>
                <Link
                  to={`/artists/${artist.slug}`}
                  className="px-4 py-2 rounded-xl bg-slate-900 group-hover:bg-sky-600 text-white text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Кабинет</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/artists"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold shadow-sm transition-colors"
          >
            <span>Познакомиться со всеми 6 резидентами студии</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </Link>
        </div>
      </section>

      {/* 5. Masterclasses Teaser */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-sky-100">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-50 to-blue-50/70 border border-sky-200 p-8 md:p-14 shadow-lg">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-200/60 text-sky-900 text-xs font-semibold">
              <Wine className="w-3.5 h-3.5 text-sky-700" />
              Творческие вечера & Занятия
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-950">
              Мастер-классы по живописи и эпоксидной смоле в Wynwood
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Напишите интерьерную картину собственными руками под руководством резидентов галереи. Премиальные материалы, бокал просекко и незабываемая атмосфера Майами.
            </p>
            <div className="pt-2">
              <Link
                to="/masterclasses"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Выбрать мастер-класс и дату</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
