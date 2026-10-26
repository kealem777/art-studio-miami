import React, { createContext, useContext, useState, useEffect } from 'react';
import { Artwork, CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (artwork: Artwork, frame?: CartItem['frame']) => void;
  removeFromCart: (artworkId: string) => void;
  updateQuantity: (artworkId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalPrice: number;
  totalCount: number;

  // Favorites
  favorites: string[];
  toggleFavorite: (artworkId: string) => void;
  isFavorite: (artworkId: string) => boolean;

  // Quick View Modal
  quickViewArtwork: Artwork | null;
  setQuickViewArtwork: (artwork: Artwork | null) => void;

  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('miami_art_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('miami_art_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewArtwork, setQuickViewArtwork] = useState<Artwork | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('miami_art_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('miami_art_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (artwork: Artwork, frame: CartItem['frame'] = 'none') => {
    setItems((prev) => {
      const existing = prev.find((item) => item.artwork.id === artwork.id && item.frame === frame);
      if (existing) {
        return prev.map((item) =>
          item.artwork.id === artwork.id && item.frame === frame
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { artwork, frame, quantity: 1 }];
    });
    showToast(`«${artwork.title}» добавлена в корзину`);
    setIsCartOpen(true);
  };

  const removeFromCart = (artworkId: string) => {
    setItems((prev) => prev.filter((item) => item.artwork.id !== artworkId));
    showToast('Картина удалена из корзины');
  };

  const updateQuantity = (artworkId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(artworkId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.artwork.id === artworkId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleFavorite = (artworkId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(artworkId);
      if (exists) {
        showToast('Удалено из избранного');
        return prev.filter((id) => id !== artworkId);
      } else {
        showToast('Добавлено в избранное');
        return [...prev, artworkId];
      }
    });
  };

  const isFavorite = (artworkId: string) => favorites.includes(artworkId);

  const totalPrice = items.reduce((sum, item) => sum + item.artwork.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalPrice,
        totalCount,
        favorites,
        toggleFavorite,
        isFavorite,
        quickViewArtwork,
        setQuickViewArtwork,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
