import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ru';

interface Translations {
  [key: string]: {
    en: string;
    ru: string;
  };
}

export const translations: Translations = {
  // Brand & Signature
  brandName: { en: 'MIAMI ART STUDIO', ru: 'АРТ-СТУДИЯ МАЙАМИ' },
  authorSignature: { en: 'by Natalia Zhuravleva', ru: 'Натальи Журавлевой' },
  galleryMarketplace: { en: 'GALLERY & MARKETPLACE', ru: 'ГАЛЕРЕЯ & МАРКЕТПЛЕЙС' },

  // Navigation
  home: { en: 'Home', ru: 'Главная' },
  gallery: { en: 'Gallery', ru: 'Галерея' },
  interiorMatch: { en: 'Virtual Room 3D', ru: 'Примерка в интерьере' },
  artists: { en: 'Artists', ru: 'Художники' },
  masterclasses: { en: 'Masterclasses', ru: 'Мастер-классы' },
  about: { en: 'About Studio', ru: 'О студии' },
  contacts: { en: 'Contacts', ru: 'Контакты' },

  // Top Bar & Utility
  locationWynwood: { en: 'Miami, Wynwood Art District • 250 NW 24th St', ru: 'Miami, Wynwood Art District • 250 NW 24th St' },
  callUs: { en: 'Call Gallery', ru: 'Позвонить' },
  whatsappUs: { en: 'WhatsApp Curator', ru: 'Написать в WhatsApp' },
  artSeasonTag: { en: 'Miami Art Season 2025: Exclusive Collection', ru: 'Miami Art Season 2025: Эксклюзивная коллекция' },
  tryIn3DBadge: { en: '3D Try On', ru: 'Примерить 3D' },
  currency: { en: 'USD ($)', ru: 'USD ($)' },

  // Hero Section
  heroWynwoodTag: { en: 'Wynwood Art District • Miami, Florida', ru: 'Арт-квартал Винвуд • Майами, Флорида' },
  heroTitlePre: { en: 'Contemporary Fine Art Infused With', ru: 'Искусство, наполняющее дом светом' },
  heroTitleAccent: { en: 'Miami Light', ru: 'Майами' },
  heroSubtitle: { 
    en: 'Original large-scale museum-grade paintings, textured canvases, and sculptural reliefs crafted for high-end residences, luxury penthouses, and bespoke interiors.', 
    ru: 'Оригинальные крупноформатные картины музейного уровня, фактурная живопись и арт-объекты для элитных резиденций, пентхаусов и дизайнерских интерьеров.' 
  },
  btnExploreGallery: { en: 'Explore Gallery Collection', ru: 'Исследовать галерею' },
  btnVirtualTryOn: { en: 'Virtual 3D Room Matcher', ru: 'Примерить в 3D интерьере' },
  trustCert: { en: '100% Certificate of Authenticity', ru: '100% Сертификат подлинности' },
  trustDelivery: { en: 'White-Glove Shipping Across US & Worldwide', ru: 'Бережная доставка по США и миру' },
  trustArtists: { en: 'Art Basel Miami Satellite Residents', ru: 'Резиденты Art Basel Miami' },

  // Hero Slider
  slide1Title: { en: 'Grand Exhibition Space', ru: 'Главное выставочное пространство' },
  slide1Subtitle: { en: 'Wynwood Gallery Hall • Curated Modern Masterpieces', ru: 'Галерейный зал Винвуд • Экспозиция шедевров' },
  slide2Title: { en: 'Textured Ocean & Gold', ru: 'Фактурный океан и сусальное золото' },
  slide2Subtitle: { en: 'Handcrafted relief canvases with 24K gold foil', ru: 'Авторские рельефные холсты с золотой поталью' },
  slide3Title: { en: 'Architectural Modernism', ru: 'Архитектурный модернизм' },
  slide3Subtitle: { en: 'Bespoke monumental art tailored for luxury interiors', ru: 'Монументальные полотна для элитных апартаментов' },
  slide4Title: { en: 'Classical Grandeur Reborn', ru: 'Величие классики в новом прочтении' },
  slide4Subtitle: { en: 'Neoclassical sculptural works and museum lighting', ru: 'Неоклассические скульптурные работы и музейный свет' },

  // Interior Match Section
  matchSectionTag: { en: 'Bespoke Interior Match', ru: 'Интерьерный подбор' },
  matchSectionTitle: { en: 'Art Selection Across 5 Interior Styles', ru: 'Подбор картин под 5 стилей интерьера' },
  matchSectionDesc: { 
    en: 'Every architectural aesthetic demands harmonized color temperatures, textures, and scale. Choose your interior style to see flawless synergy.', 
    ru: 'Каждое архитектурное направление требует выверенной колористики, масштаба и фактуры. Выберите стиль вашего жилья и оцените сочетания.' 
  },
  launchTryOnBtn: { en: 'Launch 3D Room Fitting', ru: 'Запустить 3D примерку' },

  // Featured Marketplace
  curatorChoiceTag: { en: "Curator's Choice", ru: 'Кураторский выбор' },
  featuredArtworksTitle: { en: 'Featured Artworks of the Season', ru: 'Избранные полотна сезона' },
  featuredArtworksDesc: { 
    en: 'Exclusive signed originals ready for crated white-glove delivery', 
    ru: 'Эксклюзивные авторские оригиналы, готовые к отправке в деревянных кофрах' 
  },
  viewAllCatalog: { en: 'View Full Catalog', ru: 'Смотреть весь каталог' },

  // Artists Showcase
  artistsSectionTag: { en: 'Studio Masters', ru: 'Мастера студии' },
  artistsSectionTitle: { en: 'Resident Artists', ru: 'Художники-резиденты' },
  artistsSectionDesc: { 
    en: "Explore each artist's personal marketplace cabinet to view their complete portfolio and artist statement.", 
    ru: 'Перейдите в персональный маркетплейс-кабинет автора, чтобы ознакомиться с его серией полотен и манифестом.' 
  },
  btnArtistCabinet: { en: 'View Artist Cabinet', ru: 'Кабинет автора' },
  meetAllArtists: { en: 'Meet All 6 Resident Artists', ru: 'Познакомиться со всеми 6 резидентами' },

  // Masterclasses Teaser
  masterclassesTag: { en: 'Creative Studio & Evenings', ru: 'Творческие вечера & Занятия' },
  masterclassesTitle: { en: 'Painting, Resin & Wine Art Evenings in Wynwood', ru: 'Мастер-классы по живописи и эпоксидной смоле в Wynwood' },
  masterclassesDesc: { 
    en: 'Create your own original interior painting under the mentorship of gallery residents. Premium supplies, chilled Prosecco, and pure Miami vibes.', 
    ru: 'Напишите интерьерную картину собственными руками под руководством резидентов галереи. Премиальные материалы, бокал просекко и незабываемая атмосфера.' 
  },
  btnBookMasterclass: { en: 'Explore Classes & Reserve Date', ru: 'Выбрать мастер-класс и дату' },

  // Gallery Page
  galleryTitle: { en: 'Gallery & Marketplace', ru: 'Галерея & Маркетплейс' },
  galleryDesc: { 
    en: 'Authentic museum-grade canvases, textural reliefs, and sculptural art with insured shipping across the USA and worldwide.', 
    ru: 'Авторские живописные полотна, барельефы и арт-объекты музейного качества с доставкой по США и всему миру.' 
  },
  searchPlaceholder: { en: 'Search by artwork title or artist name...', ru: 'Поиск по названию или художнику...' },
  allStyles: { en: 'All Styles', ru: 'Все стили' },
  favoritesFilter: { en: 'Favorites', ru: 'Избранное' },
  filterResident: { en: 'Resident Artist', ru: 'Художник-резидент' },
  filterAllArtists: { en: 'All Studio Artists', ru: 'Все художники студии' },
  filterMedium: { en: 'Technique & Medium', ru: 'Техника & Материалы' },
  filterAllMediums: { en: 'All Techniques', ru: 'Все техники' },
  filterMaxPrice: { en: 'Max Price:', ru: 'Макс. стоимость:' },
  filterReset: { en: 'Reset', ru: 'Сброс' },
  foundArtworks: { en: 'Artworks Found:', ru: 'Найдено произведений:' },
  sortBy: { en: 'Sort by:', ru: 'Сортировка:' },
  sortFeatured: { en: 'Curator Recommended', ru: 'Рекомендуемые куратором' },
  sortPriceAsc: { en: 'Price: Low to High', ru: 'Сначала доступные ($ - $$$)' },
  sortPriceDesc: { en: 'Price: High to Low', ru: 'Сначала премиальные ($$$ - $)' },
  sortNewest: { en: 'Latest 2025 Originals', ru: 'Свежие новинки 2025' },
  btnAddToCart: { en: 'Add to Cart', ru: 'В корзину' },
  btnTryInInterior: { en: '3D Try On', ru: 'Примерить' },
  btnQuickView: { en: 'Quick View', ru: 'Обзор' },

  // Artwork Detail Page
  backToCatalog: { en: 'Back to Catalog', ru: 'Вернуться в каталог' },
  shareArtwork: { en: 'Share', ru: 'Поделиться' },
  originalPrice: { en: 'Original Canvas Price', ru: 'Цена оригинала' },
  inStockMiami: { en: 'In Stock in Miami Studio', ru: 'В наличии в Майами' },
  specsDimensions: { en: 'Canvas Dimensions:', ru: 'Размеры полотна:' },
  specsMedium: { en: 'Medium / Technique:', ru: 'Техника:' },
  specsYear: { en: 'Year Created:', ru: 'Год написания:' },
  specsStretcher: { en: 'Chassis Profile:', ru: 'Подрамник:' },
  specsStretcherVal: { en: 'Museum Profile (4 cm)', ru: 'Музейный профиль (4 см)' },
  frameOption: { en: 'Framing / Floater Frame:', ru: 'Оформление в багет:' },
  frameNone: { en: 'Unframed (Stretched Canvas)', ru: 'Без рамы (Холст)' },
  frameBlack: { en: 'Matte Black Aluminum', ru: 'Черный металл' },
  frameGold: { en: 'Champagne Brass Gold', ru: 'Шампань-золото' },
  frameOak: { en: 'Natural Scandinavian Oak', ru: 'Натуральный дуб' },
  frameWhite: { en: 'White Museum Floater', ru: 'Белый багет' },
  aboutArtworkHeading: { en: 'About This Artwork', ru: 'О произведении' },
  tryIn3DInterior: { en: 'Virtual 3D Room Matcher', ru: 'Виртуальная примерка на стене комнаты (3D)' },
  relatedArtworksHeading: { en: 'Similar Artworks from the Collection', ru: 'Похожие произведения из коллекции' },

  // Interior Match Page
  virtualRoomTitle: { en: 'Virtual 3D Room Matcher', ru: 'Виртуальная примерка в интерьере' },
  virtualRoomDesc: { 
    en: 'Assess scale, color temperature balance, and ambient lighting before acquisition. Choose from 5 iconic Miami architectural styles or upload your own room photograph.', 
    ru: 'Оцените масштаб, гармонию палитры и освещение перед покупкой. Выберите один из 5 стилей интерьера Майами или загрузите фото собственного дома.' 
  },
  resetSettings: { en: 'Reset View', ru: 'Сбросить настройки' },
  buyThisArtwork: { en: 'Order This Canvas', ru: 'Купить эту картину' },
  step1SelectStyle: { en: 'Step 1: Choose Interior Style', ru: 'Шаг 1: Выберите стиль интерьера' },
  uploadOwnRoom: { en: 'Upload Photo of Your Room', ru: 'Загрузить фото своей комнаты' },
  changeOwnRoom: { en: 'Change Room Photo', ru: 'Сменить фото комнаты' },
  daylightMode: { en: 'Daylight', ru: 'День' },
  eveningMode: { en: 'Evening Spotlight', ru: 'Вечерний свет' },
  scaleLabel: { en: 'Scale:', ru: 'Масштаб:' },
  step2SelectArtwork: { en: 'Step 2: Choose Artwork to Fit on the Wall', ru: 'Шаг 2: Выберите картину для примерки' },

  // Footer & Clubs
  collectorsClubTag: { en: 'Miami Private Collectors Circle', ru: 'Закрытый клуб коллекционеров Майами' },
  collectorsClubTitle: { en: 'Receive Private Previews of New Collections', ru: 'Получайте закрытые превью новых коллекций' },
  collectorsClubDesc: { 
    en: 'Early access to exclusive resident releases, private VIP invitations to Art Basel satellite vernissages and private salon evenings.', 
    ru: 'Ранний доступ к эксклюзивным картинам резидентов галереи, персональные приглашения на вернисажи в Wynwood и закрытые арт-вечера.' 
  },
  emailPlaceholder: { en: 'Your e-mail (e.g. collector@luxury.com)', ru: 'Ваш e-mail (например: collector@luxury.com)' },
  joinClubBtn: { en: 'Join Circle', ru: 'Вступить' },
  noSpamNotice: { en: 'No spam. Curatorial releases and private salon invitations only.', ru: 'Без спама. Только высокое искусство и личные приглашения.' },
  clubSuccessAlert: { en: 'Thank you for your interest! You have been included in the Miami Art Studio private collectors circle.', ru: 'Благодарим за интерес! Вы включены в закрытый список коллекционеров Miami Art Studio.' },
  footerAboutText: { 
    en: 'Premier contemporary art gallery and creative sanctuary in the heart of Wynwood Art District, Miami. Museum-grade original canvases, interior art advisory, and collector masterclasses.', 
    ru: 'Премиальная галерея современного искусства и творческое пространство в сердце района Wynwood, Майами. Оригинальные холсты музейного уровня, интерьерный арт-консалтинг и мастер-классы.' 
  },
  certGuaranteed: { en: '100% Certificate of Authenticity signed by the resident master', ru: '100% Сертификат подлинности с подписью автора' },
  crateShipping: { en: 'White-glove custom wooden crate delivery across USA & worldwide', ru: 'Бережная доставка в спецбоксах по США и миру (FedEx / DHL)' },
  footerNavTitle: { en: 'Navigation', ru: 'Навигация' },
  navCatalog: { en: 'Artworks Catalog', ru: 'Каталог картин' },
  navFitting: { en: '3D Virtual Try-On', ru: 'Примерка в интерьере' },
  navArtists: { en: 'Resident Artists', ru: 'Резиденты студии' },
  navMasterclasses: { en: 'Masterclasses & Events', ru: 'Мастер-классы' },
  navAbout: { en: 'About Gallery & Curators', ru: 'О галерее и кураторах' },
  navContacts: { en: 'Location & Contacts', ru: 'Контакты и локация' },
  footerStylesTitle: { en: 'Interior Styles', ru: 'Стили интерьера' },
  footerLocationTitle: { en: 'Miami Gallery & Studio', ru: 'Галерея в Майами' },
  footerHoursLabel: { en: 'Studio Hours:', ru: 'Часы работы:' },
  footerHoursVal: { en: 'Daily from 10:00 AM to 10:00 PM', ru: 'Ежедневно с 10:00 до 22:00' },
  footerPhoneLabel: { en: 'Art Concierge Line:', ru: 'Телефон & Консьерж:' },
  privacyPolicy: { en: 'Privacy Policy', ru: 'Политика конфиденциальности' },
  termsOfSale: { en: 'Collector Terms & Delivery', ru: 'Условия покупки и доставки' },
  stripeVerified: { en: 'Stripe Verified 256-Bit SSL', ru: 'Stripe Verified 256-Bit SSL' },
  allRightsReserved: { en: 'All rights reserved. Registered in Florida, USA.', ru: 'Все права защищены. Зарегистрировано во Флориде, США.' },

  // Cart
  cartTitleHeading: { en: 'Collection Cart', ru: 'Корзина коллекции' },
  itemsSelected: { en: 'artworks selected', ru: 'полотен выбрано' },
  cartEmptyTitle: { en: 'Your Cart is Empty', ru: 'Ваша корзина пуста' },
  cartEmptyDesc: { 
    en: 'Explore our catalog of signed original works or try them virtually on the wall of your home.', 
    ru: 'Исследуйте нашу галерею авторских полотен или примерьте их на стене ваших апартаментов.' 
  },
  orderSuccessTitle: { en: 'Order Placed Successfully!', ru: 'Заказ успешно оформлен!' },
  orderSuccessDesc: { 
    en: 'Stripe payment has been confirmed. Our senior art curator will contact you shortly to coordinate white-glove delivery in Miami or worldwide.', 
    ru: 'Оплата через Stripe подтверждена. Наш арт-куратор свяжется с вами для согласования персональной доставки в Майами или по США.' 
  },
  fastCheckoutTitle: { en: 'Express Checkout & Delivery', ru: 'Быстрое оформление & Доставка' },
  payStripeBtn: { en: 'Pay via Stripe Gateway', ru: 'Оплатить через Stripe' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // English is the primary/default language as requested
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('miami_art_lang');
      return saved === 'ru' ? 'ru' : 'en';
    } catch {
      return 'en';
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
