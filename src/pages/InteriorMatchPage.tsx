import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Compass, 
  Upload, 
  RotateCcw, 
  Sliders, 
  ShoppingBag, 
  Sparkles, 
  Eye, 
  Check, 
  Move, 
  Layers,
  Sun,
  Moon,
  Info,
  Maximize2
} from 'lucide-react';
import { ARTWORKS_DATA, INTERIOR_ROOMS } from '../data/mockData';
import { Artwork, InteriorRoom, ArtStyle } from '../types';
import { useCart } from '../context/CartContext';

type FrameType = 'none' | 'thin-black' | 'gold-brass' | 'natural-oak' | 'white-wood';

export const InteriorMatchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialArtId = searchParams.get('artworkId');
  const initialStyle = searchParams.get('style') as ArtStyle | null;

  const { addToCart, showToast } = useCart();

  // Selected Room & Custom Room
  const [selectedRoom, setSelectedRoom] = useState<InteriorRoom>(() => {
    if (initialStyle) {
      const match = INTERIOR_ROOMS.find((r) => r.style === initialStyle);
      if (match) return match;
    }
    return INTERIOR_ROOMS[0];
  });
  const [customRoomImage, setCustomRoomImage] = useState<string | null>(null);

  // Selected Artwork
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork>(() => {
    if (initialArtId) {
      const match = ARTWORKS_DATA.find((a) => a.id === initialArtId);
      if (match) return match;
    }
    return ARTWORKS_DATA[0];
  });

  // Interactive Wall Controls
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 50, y: 38 });
  const [selectedFrame, setSelectedFrame] = useState<FrameType>('none');
  const [lightingMode, setLightingMode] = useState<'daylight' | 'evening'>('daylight');
  const [isDragging, setIsDragging] = useState(false);
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialArtId) {
      const found = ARTWORKS_DATA.find((a) => a.id === initialArtId);
      if (found) setSelectedArtwork(found);
    }
  }, [initialArtId]);

  // Handle Custom Image Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomRoomImage(event.target?.result as string);
        showToast('Ваш интерьер загружен! Теперь перемещайте картину по стене.');
      };
      reader.readAsDataURL(file);
    }
  };

  // Dragging logic
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !wallRef.current) return;
    const rect = wallRef.current.getBoundingClientRect();
    const x = Math.max(15, Math.min(85, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(15, Math.min(85, ((e.clientY - rect.top) / rect.height) * 100));
    setPosition({ x, y });
  };

  const resetPosition = () => {
    setPosition({ x: 50, y: 38 });
    setScale(1);
    setSelectedFrame('none');
    setCustomRoomImage(null);
  };

  // Frame Styles generator
  const getFrameStyle = () => {
    switch (selectedFrame) {
      case 'thin-black':
        return 'border-[6px] border-slate-900 shadow-2xl shadow-black/40';
      case 'gold-brass':
        return 'border-[10px] border-[#c5a059] shadow-2xl shadow-amber-900/30';
      case 'natural-oak':
        return 'border-[8px] border-[#a27b5c] shadow-2xl shadow-amber-950/20';
      case 'white-wood':
        return 'border-[10px] border-white shadow-2xl shadow-slate-900/20';
      default:
        return 'border-0 shadow-2xl shadow-black/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 text-slate-800 pb-20">
      {/* Header section */}
      <section className="pt-12 pb-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sky-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
              <Compass className="w-4 h-4 text-sky-600 animate-spin-slow" />
              Интерактивный 3D-модуль подбора искусства
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-2">
              Виртуальная примерка в интерьере
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Оцените масштаб, гармонию палитры и освещение перед покупкой. Выберите один из 5 стилей интерьера Майами или загрузите фото собственного дома.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetPosition}
              className="px-4 py-2.5 rounded-xl border border-sky-200 hover:bg-sky-50 text-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>Сбросить настройки</span>
            </button>

            <button
              onClick={() => addToCart(selectedArtwork, selectedFrame)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Купить эту картину</span>
            </button>
          </div>
        </div>

        {/* 1. Interior Style Selector (5 Key Styles from TZ) */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-500 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-600" />
              Шаг 1: Выберите стиль интерьера
            </span>

            {/* Custom Room Upload Button */}
            <label className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-sky-700 hover:text-sky-900 font-semibold bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200 transition-colors">
              <Upload className="w-3.5 h-3.5" />
              <span>{customRoomImage ? 'Сменить фото комнаты' : 'Загрузить фото своей комнаты'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {INTERIOR_ROOMS.map((room) => {
              const isSelected = selectedRoom.id === room.id && !customRoomImage;
              return (
                <button
                  key={room.id}
                  onClick={() => {
                    setSelectedRoom(room);
                    setCustomRoomImage(null);
                  }}
                  className={`relative p-2.5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    isSelected
                      ? 'border-sky-500 bg-white shadow-lg shadow-sky-500/15 ring-2 ring-sky-400/40'
                      : 'border-sky-100 bg-white/70 hover:bg-white hover:border-sky-200'
                  }`}
                >
                  <div className="w-full h-24 rounded-xl overflow-hidden mb-2 relative">
                    <img
                      src={room.imageUrl}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="text-xs font-serif font-bold text-slate-900 block truncate">
                      {room.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate">
                      {room.nameRu}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Interactive Room Canvas */}
      <section className="px-6 max-w-7xl mx-auto mb-10">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-200 bg-slate-900 select-none">
          {/* Main Wall Viewport */}
          <div
            ref={wallRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            className={`relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-crosshair ${
              lightingMode === 'evening' ? 'brightness-90 contrast-105' : ''
            }`}
          >
            {/* Room Background Image */}
            <img
              src={customRoomImage || selectedRoom.imageUrl}
              alt="Room view"
              className="w-full h-full object-cover pointer-events-none"
            />

            {/* Evening Gallery Spotlight simulation */}
            {lightingMode === 'evening' && (
              <div
                className="absolute pointer-events-none transition-all duration-300 rounded-full blur-2xl"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  width: `${scale * 300}px`,
                  height: `${scale * 300}px`,
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(254, 240, 138, 0.35) 0%, rgba(0,0,0,0) 70%)',
                }}
              />
            )}

            {/* The Draggable Art Canvas */}
            <div
              className={`absolute transition-transform duration-75 ease-out select-none cursor-move ${getFrameStyle()}`}
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: `translate(-50%, -50%) scale(${scale})`,
              }}
              title="Зажмите и перетаскивайте картину по стене"
            >
              <div className="relative bg-white shadow-2xl">
                <img
                  src={selectedArtwork.imageUrl}
                  alt={selectedArtwork.title}
                  className="max-h-[220px] sm:max-h-[300px] md:max-h-[360px] w-auto object-contain block pointer-events-none"
                />

                {/* Subtle Realistic Canvas Texture & Lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />

                {/* Drag Indicator Tooltip on hover */}
                <div className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white text-[10px] opacity-0 hover:opacity-100 transition-opacity flex items-center gap-1">
                  <Move className="w-3 h-3" />
                  <span>Перетаскивайте</span>
                </div>
              </div>
            </div>

            {/* Floating Quick Action Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-sky-100 flex items-center gap-3 pointer-events-auto">
                <div className="text-xs">
                  <span className="font-serif font-bold text-slate-900 block">
                    {selectedArtwork.title}
                  </span>
                  <span className="text-[11px] text-sky-700 font-medium">
                    {selectedArtwork.artistName} • {selectedArtwork.dimensions}
                  </span>
                </div>
                <div className="h-6 w-px bg-slate-200" />
                <span className="font-serif font-bold text-slate-900 text-sm">
                  ${selectedArtwork.price.toLocaleString()} USD
                </span>
              </div>

              {/* Lighting Mode Switcher */}
              <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-lg border border-sky-100 flex items-center gap-1 pointer-events-auto">
                <button
                  onClick={() => setLightingMode('daylight')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    lightingMode === 'daylight'
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>День</span>
                </button>
                <button
                  onClick={() => setLightingMode('evening')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    lightingMode === 'evening'
                      ? 'bg-slate-900 text-amber-300 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Вечерний свет</span>
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Controls Toolbar below wall */}
          <div className="bg-white p-6 border-t border-sky-100 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Scale Slider */}
            <div className="w-full md:w-1/3 flex items-center gap-4">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-sky-600" />
                Масштаб:
              </span>
              <input
                type="range"
                min="0.6"
                max="1.5"
                step="0.05"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer"
              />
              <span className="text-xs font-semibold text-slate-800 w-10 text-right">
                {Math.round(scale * 100)}%
              </span>
            </div>

            {/* Frame Type Selector */}
            <div className="w-full md:w-auto flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mr-2">
                Багет / Рама:
              </span>

              {[
                { id: 'none', label: 'Без рамы (Холст)' },
                { id: 'thin-black', label: 'Черный металл' },
                { id: 'gold-brass', label: 'Шампань-золото' },
                { id: 'natural-oak', label: 'Дуб' },
                { id: 'white-wood', label: 'Белый багет' },
              ].map((frame) => (
                <button
                  key={frame.id}
                  onClick={() => setSelectedFrame(frame.id as FrameType)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedFrame === frame.id
                      ? 'bg-sky-600 text-white font-semibold shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {frame.label}
                </button>
              ))}
            </div>

            {/* CTA in Controls */}
            <button
              onClick={() => addToCart(selectedArtwork, selectedFrame)}
              className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Заказать это полотно (${selectedArtwork.price.toLocaleString()})</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Artwork Carousel Picker (Step 2) */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Шаг 2: Выберите картину для примерки
            </h3>
            <p className="text-xs text-slate-500">
              Нажмите на любое полотно из каталога, чтобы мгновенно увидеть его на стене комнаты
            </p>
          </div>

          <Link
            to="/gallery"
            className="text-xs font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1"
          >
            <span>Весь каталог (12 полотен)</span>
            <span>→</span>
          </Link>
        </div>

        {/* Horizontal scrollable artwork list */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ARTWORKS_DATA.map((art) => {
            const isCurrent = selectedArtwork.id === art.id;
            return (
              <button
                key={art.id}
                onClick={() => setSelectedArtwork(art)}
                className={`p-2.5 rounded-2xl bg-white border text-left transition-all duration-200 group flex flex-col justify-between ${
                  isCurrent
                    ? 'border-sky-500 shadow-lg shadow-sky-500/15 ring-2 ring-sky-400/50'
                    : 'border-sky-100 hover:border-sky-300 hover:shadow-md'
                }`}
              >
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-2 relative bg-sky-50">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {isCurrent && (
                    <div className="absolute inset-0 bg-sky-600/20 backdrop-blur-[1px] flex items-center justify-center">
                      <span className="px-2 py-1 rounded-full bg-sky-600 text-white text-[10px] font-bold shadow-md">
                        На стене
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h5 className="font-serif font-bold text-slate-900 text-xs truncate">
                    {art.title}
                  </h5>
                  <p className="text-[10px] text-sky-700 truncate">{art.artistName}</p>
                  <p className="text-xs font-bold text-slate-900 mt-1">
                    ${art.price.toLocaleString()}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
