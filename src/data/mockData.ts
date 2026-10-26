import { Artwork, Artist, InteriorRoom, Masterclass } from '../types';

export const ARTISTS_DATA: Artist[] = [
  {
    id: 'artist-1',
    slug: 'natalia-zhuravleva',
    name: 'Natalia Zhuravleva',
    title: 'Founder, Contemporary Master & Ocean Series',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    coverImage: 'covers/cover1.jpg',
    bio: 'Основатель Miami Art Studio, резидент ведущих галерей Майами и Нью-Йорка. Ее работы передают мощь атлантического прибоя, игру солнечных бликов и глубокую текстурную медитацию. Использует сложную многослойную технику с текстурными пастами и 24K сусальным золотом.',
    quote: '«Искусство должно дышать так же свободно, как океан на рассвете в Саут-Бич».',
    exhibitions: [
      'Art Basel Miami Satellite Exhibition (2025)',
      'Wynwood Contemporary Showcase (2024)',
      'New York Soho Solo Exhibition (2023)'
    ],
    awards: [
      'Best Textured Landscape — Miami Art Week 2024',
      'Emerging Collector Choice Award'
    ],
    education: 'Florence Academy of Art, Master of Fine Arts',
    instagram: '@natalia_zhuravleva_art',
    artworksCount: 6
  },
  {
    id: 'artist-2',
    slug: 'marcus-vance',
    name: 'Marcus Vance',
    title: 'Modern Neo-Expressionism & City Energy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    coverImage: 'covers/cover2.jpg',
    bio: 'Уроженец Майами, выросший в эпицентре уличной и галерейной культуры Винвуда. Создает монументальные полотна, соединяющие архитектурный ритм мегаполиса с экспрессивным цветовым жестом.',
    quote: '«Холст — это портал, где урбанистический хаос превращается в чистую эстетическую гармонию».',
    exhibitions: [
      'Wynwood Walls Select Artists (2024)',
      'Design Miami Art Lounge (2025)'
    ],
    awards: ['Urban Art Prize Miami 2024', 'Wynwood Vanguard Fellowship'],
    education: 'Parsons School of Design, New York',
    instagram: '@marcusvance_art',
    artworksCount: 5
  },
  {
    id: 'artist-3',
    slug: 'sophia-bellini',
    name: 'Sophia Bellini',
    title: 'Minimalism, Spatial Harmony & Linen Studies',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    coverImage: 'covers/cover3.jpg',
    bio: 'Создает медитативные работы для элитных частных резиденций и пентхаусов. В основе ее метода — монохромная геометрия, натуральные итальянские пигменты и игра светотени на скульптурных холстах.',
    quote: '«Тишина в картине говорит громче любых слов. Моя цель — подарить пространству воздух».',
    exhibitions: [
      'Venice Biennale Collateral Event (2024)',
      'Miami Luxury Living Design Pavilion (2025)'
    ],
    awards: ['International Minimalist Art Award', 'Architectural Digest Selection 2025'],
    education: 'Brera Academy, Milan',
    instagram: '@bellini_minimal',
    artworksCount: 4
  },
  {
    id: 'artist-4',
    slug: 'david-kael',
    name: 'David Kael',
    title: 'Neo-Classicism & Sculptural Relief Canvas',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    coverImage: 'covers/cover4.jpg',
    bio: 'Мастер рельефного барельефа на холсте и современной неоклассики. Синтезирует античные мотивы, благородный гипс, мраморную пыль и золотую поталь с чистыми линиями хай-тек интерьеров.',
    quote: '«Классика вечна, но в лучах Майами она оживает в абсолютно новой форме».',
    exhibitions: [
      'Brickell City Centre Art Forum (2025)',
      'Palm Beach Modern + Contemporary (2024)'
    ],
    awards: ['Sculptural Art Excellence 2024'],
    education: 'Royal Academy of Arts, London',
    instagram: '@kael_sculpture',
    artworksCount: 5
  },
  {
    id: 'artist-5',
    slug: 'chloe-monet',
    name: 'Chloe Monet',
    title: 'Fluid Epoxy Resin & Gemstone Textures',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    coverImage: 'covers/cover2.jpg',
    bio: 'Художница, завоевавшая признание коллекционеров благодаря технике ювелирной эпоксидной смолы. Ее картины напоминают срезы натурального агата, малахита и бирюзовые глубины Карибского бассейна.',
    quote: '«Каждая капля смолы застывает в уникальный кристальный узор, который невозможно повторить».',
    exhibitions: [
      'Art Wynwood Fair (2025)',
      'Coral Gables Art Walk Gala (2024)'
    ],
    awards: ['Resin Master Gold Medal', 'Best Luxury Accent Design'],
    education: 'École des Beaux-Arts, Paris',
    instagram: '@monet_fluid',
    artworksCount: 4
  },
  {
    id: 'artist-6',
    slug: 'julian-rivera',
    name: 'Julian Rivera',
    title: 'Loft Industrial & Raw Mixed Media',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    coverImage: 'covers/cover3.jpg',
    bio: 'Специалист по брутальным и в то же время изысканным полотнам для интерьеров в стиле лофт. Работает с кортеновской сталью, окисленными пигментами, бетоном и графитом.',
    quote: '«Эстетика необработанного материала хранит в себе честность и несокрушимый характер».',
    exhibitions: [
      'Miami River Industrial Arts (2024)',
      'Chicago Architecture & Art Expo (2023)'
    ],
    awards: ['Industrial Aesthetic Innovation Award'],
    education: 'Pratt Institute, New York',
    instagram: '@rivera_loftart',
    artworksCount: 4
  }
];

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: 'art-1',
    title: 'Miami Ocean Mist',
    titleRu: 'Океанский бриз Майами',
    artistId: 'artist-1',
    artistName: 'Natalia Zhuravleva',
    artistSlug: 'natalia-zhuravleva',
    artistAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    price: 3800,
    dimensions: '140 × 100 cm (55 × 39 in)',
    medium: 'Oil on Canvas',
    style: 'Modern',
    year: 2025,
    imageUrl: 'covers/cover1.jpg',
    detailImages: [
      'covers/cover1.jpg',
      'covers/cover2.jpg',
      'covers/cover3.jpg',
      'covers/cover4.jpg'
    ],
    description: 'Монументальное полотно, запечатлевшее градиент утреннего прибоя в Майами-Бич. Мазки мастихина создают объемную фактуру, а пастельно-бирюзовые и лазурные аккорды наполняют комнату ощущением свежего морского ветра.',
    inStock: true,
    featured: true,
    paletteColors: ['#38bdf8', '#0284c7', '#f0f9ff', '#fcd34d']
  },
  {
    id: 'art-2',
    title: 'South Beach Golden Dawn',
    titleRu: 'Золотой рассвет Саут-Бич',
    artistId: 'artist-1',
    artistName: 'Natalia Zhuravleva',
    artistSlug: 'natalia-zhuravleva',
    artistAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    price: 4500,
    dimensions: '160 × 120 cm (63 × 47 in)',
    medium: 'Acrylic & Texture Paste',
    style: 'Modern',
    year: 2025,
    imageUrl: 'covers/cover2.jpg',
    detailImages: ['covers/cover2.jpg', 'covers/cover1.jpg'],
    description: 'Энергичная абстракция с добавлением 24-каратной золотой потали и выразительной фактуры. Идеальный фокусный центр для просторной гостиной в современном или арт-деко стиле.',
    inStock: true,
    featured: true,
    paletteColors: ['#fbbf24', '#f59e0b', '#f8fafc', '#0284c7']
  },
  {
    id: 'art-3',
    title: 'Silent Horizon in Bianco',
    titleRu: 'Безмолвный горизонт в белом',
    artistId: 'artist-3',
    artistName: 'Sophia Bellini',
    artistSlug: 'sophia-bellini',
    artistAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    price: 3200,
    dimensions: '120 × 120 cm (47 × 47 in)',
    medium: 'Sculptural Canvas',
    style: 'Minimalism',
    year: 2024,
    imageUrl: 'covers/cover3.jpg',
    detailImages: ['covers/cover3.jpg', 'covers/cover4.jpg'],
    description: 'Скульптурный монохромный рельеф из льняного холста и минеральных известковых смесей. Создает гипнотическую игру теней при естественном дневном свете.',
    inStock: true,
    featured: true,
    paletteColors: ['#f8fafc', '#e2e8f0', '#94a3b8', '#0ea5e9']
  },
  {
    id: 'art-4',
    title: 'Brickell Avenue Pulse',
    titleRu: 'Ритм Брикелла',
    artistId: 'artist-2',
    artistName: 'Marcus Vance',
    artistSlug: 'marcus-vance',
    artistAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    price: 5200,
    dimensions: '180 × 130 cm (71 × 51 in)',
    medium: 'Mixed Media on Wood',
    style: 'Loft',
    year: 2025,
    imageUrl: 'covers/cover4.jpg',
    detailImages: ['covers/cover4.jpg', 'covers/cover1.jpg'],
    description: 'Взрывная визуальная симфония финансового района Майами. Сложные графичные наслоения, контраст угольно-черного, бирюзового и неонового заката.',
    inStock: true,
    featured: false,
    paletteColors: ['#0f172a', '#38bdf8', '#f43f5e', '#cbd5e1']
  },
  {
    id: 'art-5',
    title: 'Neoclassical Flora Relievo',
    titleRu: 'Неоклассический рельеф Флора',
    artistId: 'artist-4',
    artistName: 'David Kael',
    artistSlug: 'david-kael',
    artistAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    price: 4900,
    dimensions: '150 × 100 cm (59 × 39 in)',
    medium: 'Sculptural Canvas',
    style: 'Neo-Classicism',
    year: 2024,
    imageUrl: 'covers/cover1.jpg',
    detailImages: ['covers/cover1.jpg', 'covers/cover3.jpg'],
    description: 'Объемный барельеф ручной лепки на холсте с благородным напылением платины и шампань-золота. Превосходно сочетается с молдингами и классической симметрией.',
    inStock: true,
    featured: true,
    paletteColors: ['#f1f5f9', '#d4af37', '#e2e8f0', '#64748b']
  },
  {
    id: 'art-6',
    title: 'Caribbean Abyss & Gold Leaf',
    titleRu: 'Карибская бездна и сусальное золото',
    artistId: 'artist-5',
    artistName: 'Chloe Monet',
    artistSlug: 'chloe-monet',
    artistAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    price: 4100,
    dimensions: '130 × 90 cm (51 × 35 in)',
    medium: 'Epoxy Resin & Gold Leaf',
    style: 'Hi-Tech',
    year: 2025,
    imageUrl: 'covers/cover2.jpg',
    detailImages: ['covers/cover2.jpg', 'covers/cover4.jpg'],
    description: 'Глянцевое эпоксидное полотно с зеркальным блеском. Глубокие переливы сапфирового, лазурного и мерцающих золотых прожилок.',
    inStock: true,
    featured: true,
    paletteColors: ['#0369a1', '#06b6d4', '#eab308', '#ffffff']
  },
  {
    id: 'art-7',
    title: 'Wynwood Steel & Turquoise',
    titleRu: 'Винвуд: Сталь и бирюза',
    artistId: 'artist-6',
    artistName: 'Julian Rivera',
    artistSlug: 'julian-rivera',
    artistAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    price: 3600,
    dimensions: '120 × 90 cm (47 × 35 in)',
    medium: 'Mixed Media on Wood',
    style: 'Loft',
    year: 2024,
    imageUrl: 'covers/cover3.jpg',
    description: 'Смелая текстурная работа с включениями окисленной меди и грубого бетона. Создана для подчеркивания кирпичной кладки, балок и металлических акцентов лофта.',
    inStock: true,
    featured: false,
    paletteColors: ['#334155', '#0d9488', '#f8fafc', '#d97706']
  },
  {
    id: 'art-8',
    title: 'Ethereal Harmony in Blue',
    titleRu: 'Эфирная гармония в голубом',
    artistId: 'artist-1',
    artistName: 'Natalia Zhuravleva',
    artistSlug: 'natalia-zhuravleva',
    artistAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    price: 2900,
    dimensions: '100 × 80 cm (39 × 31 in)',
    medium: 'Watercolor & Gold Leaf',
    style: 'Modern',
    year: 2025,
    imageUrl: 'covers/cover4.jpg',
    description: 'Воздушная работа, наполненная тончайшими градиентами аквамарина и лазури. Дарит комнате ощущение прохлады и бескрайнего флоридского неба.',
    inStock: true,
    featured: false,
    paletteColors: ['#38bdf8', '#bae6fd', '#ffffff', '#e0f2fe']
  }
];

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: 'covers/cover1.jpg',
    titleEn: 'Grand Exhibition Space',
    titleRu: 'Главное выставочное пространство',
    subtitleEn: 'Miami Art Studio by Natalia Zhuravleva • Wynwood Art District',
    subtitleRu: 'Арт-студия Натальи Журавлевой в Майами • Винвуд',
    accent: 'from-amber-400 to-rose-500'
  },
  {
    id: 'slide-2',
    image: 'covers/cover2.jpg',
    titleEn: 'Modern Gallery Atmosphere',
    titleRu: 'Атмосфера современной галереи',
    subtitleEn: 'Curated Textures, 24K Gold Foil & Ocean Palette',
    subtitleRu: 'Фактурная живопись, сусальное золото и морская палитра',
    accent: 'from-sky-400 to-blue-600'
  },
  {
    id: 'slide-3',
    image: 'covers/cover3.jpg',
    titleEn: 'Architectural Scale & Harmony',
    titleRu: 'Архитектурный масштаб и гармония',
    subtitleEn: 'Monumental Canvases Designed for Luxury Residences',
    subtitleRu: 'Монументальные полотна для элитных резиденций Майами',
    accent: 'from-teal-400 to-emerald-600'
  },
  {
    id: 'slide-4',
    image: 'covers/cover4.jpg',
    titleEn: 'Classical Grandeur Reimagined',
    titleRu: 'Классическое величие в новом прочтении',
    subtitleEn: 'Art Deco Elegance Infused with Contemporary Energy',
    subtitleRu: 'Элегантность арт-деко, соединенная с энергией модернизма',
    accent: 'from-purple-400 to-pink-600'
  }
];

export const INTERIOR_ROOMS: InteriorRoom[] = [
  {
    id: 'room-modern',
    name: 'Modern / Contemporary',
    nameRu: 'Современный стиль (Miami Penthouse)',
    style: 'Modern',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    description: 'Просторный пентхаус в Майами с панорамными окнами на залив Бискейн. Лаконичные формы, мягкая нейтральная палитра и акцент на свет.',
    wallColor: '#f1f5f9',
    defaultPosition: { x: 50, y: 38, scale: 1 }
  },
  {
    id: 'room-minimalism',
    name: 'Minimalism',
    nameRu: 'Минимализм (Biscayne Pure Living)',
    style: 'Minimalism',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    description: 'Идеально чистое белое пространство с мягким рассеянным светом, минимум деталей, акцент на геометрию и текстуру искусства.',
    wallColor: '#ffffff',
    defaultPosition: { x: 50, y: 36, scale: 1.1 }
  },
  {
    id: 'room-loft',
    name: 'Loft',
    nameRu: 'Лофт (Wynwood Industrial Loft)',
    style: 'Loft',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    description: 'Атмосферный лофт в арт-квартале Винвуд с аутентичной кирпичной кладкой, высокими потолками, стальными балками и дизайнерским светом.',
    wallColor: '#e2e8f0',
    defaultPosition: { x: 50, y: 38, scale: 0.95 }
  },
  {
    id: 'room-hitech',
    name: 'Hi-Tech',
    nameRu: 'Хай-тек (Brickell Smart Villa)',
    style: 'Hi-Tech',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
    description: 'Ультрасовременная резиденция в районе Брикелл. Стекло, полированный металл, скрытая LED-подсветка и передовая архитектура.',
    wallColor: '#0f172a',
    defaultPosition: { x: 50, y: 35, scale: 1.05 }
  },
  {
    id: 'room-neoclassic',
    name: 'Neo-Classicism',
    nameRu: 'Неоклассика (Palm Beach Elegance)',
    style: 'Neo-Classicism',
    imageUrl: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1800&q=85',
    description: 'Резиденция в стиле мягкой классики: утонченная гипсовая лепнина, молдинги, паркет елочкой и благородная сдержанная роскошь.',
    wallColor: '#f8fafc',
    defaultPosition: { x: 50, y: 37, scale: 1 }
  }
];

export const MASTERCLASSES_DATA: Masterclass[] = [
  {
    id: 'mc-1',
    title: 'Fluid Art & Эпоксидная смола «Океан Майами»',
    subtitle: 'Создание интерьерной картины с эффектом морской пены и среза камня',
    category: 'resin',
    duration: '3 часа',
    price: 180,
    capacity: 'до 8 человек',
    includes: [
      'Арт-борд премиум 50 см (круг или срез)',
      'Ювелирная эпоксидная смола и пигменты',
      'Кристаллы кварца и золотая поталь',
      'Бокал охлажденного Prosecco и авторские закуски'
    ],
    schedule: 'Каждую субботу и воскресенье в 14:00 и 18:00',
    imageUrl: 'covers/cover2.jpg',
    description: 'Погрузитесь в медитативный мир смолы! Под руководством ведущего художника вы создадите шедевр с океанскими переливами, который украсит вашу спальню или гостиную.',
    level: 'Beginner'
  },
  {
    id: 'mc-2',
    title: 'Фактурная живопись: «Текстура и Золото»',
    subtitle: 'Акрил, рельефная паста и 24K сусальное золото на холсте',
    category: 'texture',
    duration: '3.5 часа',
    price: 210,
    capacity: 'до 6 человек',
    includes: [
      'Холст на подрамнике 60×80 см',
      'Профессиональные мастихины и текстурные пасты',
      'Золотая и платиновая поталь',
      'Индивидуальная консультация куратора'
    ],
    schedule: 'Каждую среду и пятницу в 19:00',
    imageUrl: 'covers/cover3.jpg',
    description: 'Изучите секреты создания объемных минималистичных картин, которые сейчас находятся на пике мировых трендов интерьерного дизайна.',
    level: 'All Levels'
  },
  {
    id: 'mc-3',
    title: 'Арт-вечеринка & Винное свидание в Wynwood',
    subtitle: 'Романтический вечер живописи при свечах для двоих или компании друзей',
    category: 'wine-party',
    duration: '2.5 часа',
    price: 260,
    capacity: 'Парный билет (2 человека)',
    includes: [
      'Два холста 40×50 см (или один общий диптих)',
      'Бутылка отборного вина или шампанского на выбор',
      'Сырная и фруктовая тарелка',
      'Фотосессия от студийного фотографа'
    ],
    schedule: 'Ежедневно по предварительной записи (18:30 или 21:00)',
    imageUrl: 'covers/cover1.jpg',
    description: 'Идеальный выбор для незабываемого свидания, дня рождения или встречи с близкими в закрытой творческой галерее под приятную джазовую музыку.',
    level: 'All Levels'
  },
  {
    id: 'mc-4',
    title: 'VIP Индивидуальное наставничество',
    subtitle: 'Создание крупноформатного полотна под ваш конкретный интерьер',
    category: 'individual',
    duration: '2 дня (по 4 часа)',
    price: 850,
    capacity: '1 на 1 с резидентом студии',
    includes: [
      'Холст музейного уровня до 150×100 см',
      'Предварительный 3D-подбор палитры под ваш интерьер',
      'Полное погружение во все тонкости выбранной техники',
      'Оформление в премиальный багет'
    ],
    schedule: 'Индивидуальный гибкий график',
    imageUrl: 'covers/cover4.jpg',
    description: 'Эксклюзивный формат для тех, кто хочет написать монументальное авторское полотно для своего дома с гарантированным галерейным качеством.',
    level: 'Advanced'
  }
];
