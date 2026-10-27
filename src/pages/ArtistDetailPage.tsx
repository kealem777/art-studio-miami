import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Award, 
  Sparkles, 
  Calendar, 
  GraduationCap, 
  Camera, 
  Mail, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { ARTISTS_DATA, ARTWORKS_DATA } from '../data/mockData';
import { ArtworkCard } from '../components/common/ArtworkCard';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assets';

export const ArtistDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const isRu = language === 'ru';

  const artist = ARTISTS_DATA.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <div className="min-h-screen py-24 text-center px-6">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
          {isRu ? 'Художник не найден' : 'Artist Not Found'}
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          {isRu ? 'Возможно, ссылка устарела или автор был перемещен.' : 'The requested artist profile was not found.'}
        </p>
        <Link to="/artists" className="px-5 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold">
          {isRu ? 'Вернуться к списку художников' : 'Return to Resident Artists'}
        </Link>
      </div>
    );
  }

  // Filter ONLY this artist's artworks
  const artistArtworks = ARTWORKS_DATA.filter((a) => a.artistSlug === artist.slug || a.artistId === artist.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 text-slate-800 pb-24">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          to="/artists"
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isRu ? 'Все художники студии' : 'All Resident Artists'}</span>
        </Link>
      </div>

      {/* Hero Profile Banner */}
      <section className="pt-6 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-sky-100">
          {/* Cover photo */}
          <div className="h-64 md:h-80 w-full relative">
            <img
              src={getAssetUrl(artist.coverImage)}
              alt={artist.name}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getAssetUrl('covers/cover1.jpg');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          {/* Profile details header */}
          <div className="relative z-10 p-6 md:p-10 -mt-20 md:-mt-24 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-sky-100 flex-shrink-0">
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/30 backdrop-blur-md text-sky-300 text-xs font-semibold mb-2 border border-sky-400/40">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {isRu ? 'Резидент Miami Art Studio' : 'Miami Art Studio Resident'}
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
                  {artist.name}
                </h1>
                <p className="text-sky-200 text-sm md:text-base font-medium mt-1">
                  {artist.title}
                </p>
              </div>
            </div>

            {/* Custom Commission CTA */}
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Link
                to="/contacts"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/25 whitespace-nowrap"
              >
                {isRu ? 'Заказать индивидуальную картину' : 'Commission Bespoke Artwork'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bio, Exhibitions, Statement */}
      <section className="px-6 max-w-7xl mx-auto pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Bio & Statement */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-slate-900 text-xl border-l-3 border-sky-500 pl-3">
                {isRu ? 'Художественный манифест и биография' : 'Artist Statement & Biography'}
              </h3>
              <blockquote className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 text-sky-900 font-serif italic text-base leading-relaxed">
                {artist.quote}
              </blockquote>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-medium">
                {artist.bio}
              </p>
            </div>

            {/* Exhibitions */}
            <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-slate-900 text-xl border-l-3 border-sky-500 pl-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sky-600" />
                {isRu ? 'Избранные выставки & Экспозиции' : 'Selected Exhibitions & Art Fairs'}
              </h3>
              <ul className="space-y-3 pt-2">
                {artist.exhibitions.map((ex, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Key Details */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-4">
              <h4 className="font-serif font-bold text-slate-900 text-base">
                {isRu ? 'Регалии и образование' : 'Credentials & Academy'}
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-sky-50/50 border border-sky-100">
                  <GraduationCap className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block mb-0.5">
                      {isRu ? 'Образование:' : 'Education:'}
                    </span>
                    <span className="font-semibold text-slate-800">{artist.education}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <Award className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-amber-800 font-bold block mb-0.5">
                      {isRu ? 'Награды & Призы:' : 'Honors & Distinctions:'}
                    </span>
                    <ul className="space-y-1 text-slate-700 font-medium">
                      {artist.awards.map((aw, i) => (
                        <li key={i}>• {aw}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {artist.instagram && (
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <Camera className="w-5 h-5 text-pink-600 flex-shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">
                        {isRu ? 'Instagram автора:' : 'Artist Instagram:'}
                      </span>
                      <span className="font-semibold text-slate-800">{artist.instagram}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artworks exclusively by this artist */}
      <section className="px-6 max-w-7xl mx-auto pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-sky-100">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              {isRu ? `Произведения автора: ${artist.name}` : `Originals by ${artist.name}`}
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              {isRu 
                ? `В наличии в галерее (${artistArtworks.length} доступных оригиналов)` 
                : `Available in Wynwood studio (${artistArtworks.length} originals ready for crating)`}
            </p>
          </div>

          <Link
            to={`/interior-match?artist=${artist.slug}`}
            className="text-xs font-semibold text-sky-600 hover:text-sky-800"
          >
            {isRu ? 'Примерить работы в интерьере →' : 'Preview Artworks in 3D Room →'}
          </Link>
        </div>

        {artistArtworks.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white border border-sky-100">
            <p className="text-sm text-slate-500">
              {isRu 
                ? 'Все текущие полотна автора находятся в частных коллекциях. Доступен индивидуальный заказ.' 
                : 'All current originals are in private collections. Bespoke commissions are welcome.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artistArtworks.map((art) => (
              <ArtworkCard key={art.id} artwork={art} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
