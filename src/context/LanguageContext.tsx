import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ru' | 'en';

interface Translations {
  [key: string]: {
    ru: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { ru: 'Главная', en: 'Home' },
  gallery: { ru: 'Галерея', en: 'Gallery' },
  interiorMatch: { ru: 'Примерка в интерьере', en: 'Virtual Room 3D' },
  artists: { ru: 'Художники', en: 'Artists' },
  masterclasses: { ru: 'Мастер-классы', en: 'Masterclasses' },
  about: { ru: 'О студии', en: 'About Studio' },
  contacts: { ru: 'Контакты', en: 'Contacts' },

  // Header & Utility
  locationWynwood: { ru: 'Miami, Wynwood Art District • 250 NW 24th St', en: 'Miami, Wynwood Art District • 250 NW 24th St' },
  phoneCall: { ru: 'Позвонить', en: 'Call Now' },
  whatsappChat: { ru: 'Написать в WhatsApp', en: 'Chat on WhatsApp' },
  artWeekBanner: { ru: 'Miami Art Season 2025: Эксклюзивная коллекция', en: 'Miami Art Season 2025: Exclusive Collection' },
  tryInInteriorBtn: { ru: 'Примерить 3D', en: '3D Try On' },
  cartTitle: { ru: 'Корзина', en: 'Cart' },

  // Hero
  heroTag: { ru: 'Wynwood Art District • Miami, Florida', en: 'Wynwood Art District • Miami, Florida' },
  heroTitle1: { ru: 'Искусство, наполняющее дом светом', en: 'Art That Fills Your Home With' },
  heroTitleHighlight: { ru: 'Майами', en: 'Miami Light' },
  heroSubtitle: { 
    ru: 'Оригинальные крупноформатные картины, фактурная живопись и арт-объекты для элитных резиденций, пентхаусов и дизайнерских интерьеров.', 
    en: 'Original large-scale paintings, textured canvases and art objects for luxury residences, penthouses, and bespoke interior design projects.' 
  },
  exploreGallery: { ru: 'Исследовать галерею', en: 'Explore Gallery' },
  virtualTryOn: { ru: 'Примерить в 3D интерьере', en: 'Try In 3D Interior' },
  paintingOfWeek: { ru: 'Полотно недели', en: 'Painting of the Week' },
  details: { ru: 'Смотреть детали', en: 'View Details' },

  // Trust Badges
  certAuth: { ru: '100% Сертификат подлинности', en: '100% Certificate of Authenticity' },
  deliveryUS: { ru: 'Бережная доставка по США и миру', en: 'White-Glove Shipping Across USA & Worldwide' },
  artBaselChoice: { ru: 'Резиденты Art Basel Miami', en: 'Art Basel Miami Satellite Residents' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('miami_art_lang');
      return saved === 'en' ? 'en' : 'ru';
    } catch {
      return 'ru';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('miami_art_lang', lang);
    } catch (e) {
      console.error(e);
    }
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
