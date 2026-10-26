import { Palette, Sparkles, Image as ImageIcon, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-neutral-100 flex flex-col">
      {/* Header / Navigation */}
      <header className="border-b border-neutral-800/80 backdrop-blur-md sticky top-0 z-50 bg-neutral-950/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-violet-600 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                АРТ СТУДИЯ
              </span>
              <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 tracking-wider uppercase">
                Майами
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">О студии</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Галерея</a>
            <a href="#contacts" className="hover:text-amber-400 transition-colors">Контакты</a>
          </nav>

          <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-black font-semibold text-sm transition-all shadow-md hover:shadow-amber-500/25">
            Связаться
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-xs font-medium text-neutral-300 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Пространство современного искусства & творчества
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-none mb-6">
            Творчество без границ в{' '}
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 bg-clip-text text-transparent">
              Майами
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-8">
            Картины на заказ, арт-вечеринки, мастер-классы по живописи, индивидуальное обучение и аренда творческого пространства.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-base transition-all flex items-center gap-2 group shadow-lg">
              <span>Забронировать мастер-класс</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-semibold text-base transition-all">
              Смотреть работы
            </button>
          </div>
        </div>

        {/* Feature Cards Grid Placeholder */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Мастер-классы</h3>
            <p className="text-sm text-neutral-400">
              Живопись акрилом, маслом, эпоксидной смолой и текстурной пастой для любого уровня подготовки.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Арт-вечеринки & Свидания</h3>
            <p className="text-sm text-neutral-400">
              Незабываемые дни рождения, корпоративы и романтические вечера в атмосфере искусства и вина.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Картины на заказ</h3>
            <p className="text-sm text-neutral-400">
              Создание эксклюзивных арт-объектов и интерьерных полотен под ваш дизайн проект.
            </p>
          </div>
        </div>

        {/* Info badges */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-6 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Miami, Wynwood Art District / Downtown</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-rose-400" />
            <span>Ежедневно с 10:00 до 22:00 (по записи)</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-violet-400" />
            <span>+1 (Miami) Art Studio Line</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-850 py-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Арт Студия Майами (Miami Art Studio). Все права защищены. Готовы к загрузке ТЗ.
      </footer>
    </div>
  )
}

export default App
