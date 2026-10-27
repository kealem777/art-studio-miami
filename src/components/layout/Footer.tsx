import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  MapPin, 
  Phone, 
  Mail, 
  Camera, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  return (
    <footer className="bg-gradient-to-b from-sky-50/70 via-slate-900 to-slate-950 text-slate-300 pt-20 pb-12 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter & Collectors Club Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 p-8 md:p-12 mb-16 shadow-2xl border border-sky-500/20 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {t('collectorsClubTag')}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                {t('collectorsClubTitle')}
              </h3>
              <p className="text-sm text-sky-100/80">
                {t('collectorsClubDesc')}
              </p>
            </div>

            <div className="w-full lg:w-auto flex-1 max-w-md">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(t('clubSuccessAlert'));
                }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder={t('emailPlaceholder')}
                  className="px-4 py-3.5 rounded-xl bg-white/10 border border-sky-300/30 text-white placeholder-sky-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <span>{t('joinClubBtn')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="text-[11px] text-sky-200/60 mt-2 text-center lg:text-left">
                {t('noSpamNotice')}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Columns Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif tracking-[0.16em] text-lg font-black text-white uppercase block">
                  {t('brandName')}
                </span>
                <span className="text-xs font-serif italic text-amber-300 font-bold block">
                  {t('authorSignature')}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-sky-400 uppercase font-bold">
                  {t('galleryMarketplace')}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              {t('footerAboutText')}
            </p>

            {/* Guarantees */}
            <div className="flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>{t('certGuaranteed')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-sky-400" />
                <span>{t('crateShipping')}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm tracking-wider uppercase mb-4 border-l-2 border-sky-400 pl-2.5">
              {t('footerNavTitle')}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/gallery" className="hover:text-sky-400 transition-colors">
                  {t('navCatalog')}
                </Link>
              </li>
              <li>
                <Link to="/interior-match" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span>{t('navFitting')}</span>
                  <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.2 rounded font-semibold">
                    3D
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/artists" className="hover:text-sky-400 transition-colors">
                  {t('navArtists')}
                </Link>
              </li>
              <li>
                <Link to="/masterclasses" className="hover:text-sky-400 transition-colors">
                  {t('navMasterclasses')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">
                  {t('navAbout')}
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-sky-400 transition-colors">
                  {t('navContacts')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Interior Styles */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm tracking-wider uppercase mb-4 border-l-2 border-sky-400 pl-2.5">
              {t('footerStylesTitle')}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/interior-match?style=Modern" className="hover:text-sky-400 transition-colors">
                  Modern / Contemporary
                </Link>
              </li>
              <li>
                <Link to="/interior-match?style=Minimalism" className="hover:text-sky-400 transition-colors">
                  Minimalism
                </Link>
              </li>
              <li>
                <Link to="/interior-match?style=Loft" className="hover:text-sky-400 transition-colors">
                  Loft & Industrial
                </Link>
              </li>
              <li>
                <Link to="/interior-match?style=Hi-Tech" className="hover:text-sky-400 transition-colors">
                  Hi-Tech Smart Villa
                </Link>
              </li>
              <li>
                <Link to="/interior-match?style=Neo-Classicism" className="hover:text-sky-400 transition-colors">
                  Neo-Classicism
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contacts */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm tracking-wider uppercase mb-4 border-l-2 border-sky-400 pl-2.5">
              {t('footerLocationTitle')}
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 mt-1 flex-shrink-0" />
                <span>250 NW 24th St, Wynwood Art District, Miami, FL 33127</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{t('footerHoursVal')}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+13055552787" className="hover:text-sky-400">
                  +1 (305) 555-ARTS
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@miamiartstudio.com" className="hover:text-sky-400">
                  info@miamiartstudio.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-sky-300 hover:text-white hover:bg-sky-600 transition-colors text-xs font-medium"
                >
                  <Camera className="w-4 h-4" />
                  <span>@miami_art_studio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Miami Art Studio & Gallery. {t('allRightsReserved')}
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">{t('privacyPolicy')}</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">{t('termsOfSale')}</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">{t('stripeVerified')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
