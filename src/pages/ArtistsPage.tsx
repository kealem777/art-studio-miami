import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award, Palette, ExternalLink } from 'lucide-react';
import { ARTISTS_DATA } from '../data/mockData';

export const ArtistsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 text-slate-800 pb-24">
      {/* Header */}
      <section className="pt-14 pb-12 px-6 max-w-7xl mx-auto border-b border-sky-100">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Резиденты галереи Miami Art Studio
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Художники студии
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Познакомьтесь с ведущими мастерами современной живописи, чьи работы украшают частные коллекции и пентхаусы в Майами, Нью-Йорке и Европе. Каждый автор обладает уникальным стилем и узнаваемым почерком.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="px-6 max-w-7xl mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTISTS_DATA.map((artist) => (
            <div
              key={artist.id}
              className="group bg-white rounded-3xl overflow-hidden border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cover & Avatar Header */}
              <div>
                <div className="relative h-44 overflow-hidden bg-sky-100">
                  <img
                    src={artist.coverImage}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Works count badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-sky-800 text-xs font-bold shadow-sm">
                    {artist.artworksCount} полотен
                  </span>
                </div>

                <div className="px-6 relative -mt-12 mb-4 flex items-end justify-between">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-sky-50 flex-shrink-0">
                    <img
                      src={artist.avatar}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {artist.instagram && (
                    <span className="text-xs font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                      {artist.instagram}
                    </span>
                  )}
                </div>

                <div className="px-6 space-y-3">
                  <div>
                    <Link
                      to={`/artists/${artist.slug}`}
                      className="font-serif font-bold text-slate-950 text-xl group-hover:text-sky-600 transition-colors inline-block"
                    >
                      {artist.name}
                    </Link>
                    <p className="text-xs text-sky-700 font-semibold">{artist.title}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {artist.bio}
                  </p>

                  {/* Quote preview */}
                  <div className="p-3 rounded-2xl bg-sky-50/50 border border-sky-100/80 text-[11px] text-slate-500 italic">
                    {artist.quote}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-5 mt-4 border-t border-sky-50 flex items-center justify-between">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="truncate max-w-[170px]">{artist.awards[0]}</span>
                </div>

                <Link
                  to={`/artists/${artist.slug}`}
                  className="px-4 py-2 rounded-xl bg-slate-900 group-hover:bg-sky-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Кабинет</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
