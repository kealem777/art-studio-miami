export type ArtStyle = 
  | 'Modern' 
  | 'Minimalism' 
  | 'Loft' 
  | 'Hi-Tech' 
  | 'Neo-Classicism' 
  | 'Abstract' 
  | 'Pop Art';

export type ArtMedium = 
  | 'Oil on Canvas' 
  | 'Acrylic & Texture Paste' 
  | 'Epoxy Resin & Gold Leaf' 
  | 'Mixed Media on Wood' 
  | 'Watercolor & Gold Leaf' 
  | 'Sculptural Canvas';

export interface Artwork {
  id: string;
  title: string;
  titleRu: string;
  artistId: string;
  artistName: string;
  artistSlug: string;
  artistAvatar: string;
  price: number; // in USD
  dimensions: string; // e.g., "120 × 90 cm" (47 × 35 in)
  medium: ArtMedium;
  style: ArtStyle;
  year: number;
  imageUrl: string;
  detailImages?: string[];
  description: string;
  inStock: boolean;
  featured?: boolean;
  paletteColors?: string[]; // hex codes for palette match
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  title: string;
  avatar: string;
  coverImage: string;
  bio: string;
  quote: string;
  exhibitions: string[];
  awards: string[];
  education: string;
  instagram?: string;
  artworksCount: number;
}

export interface InteriorRoom {
  id: string;
  name: string;
  nameRu: string;
  style: ArtStyle;
  imageUrl: string;
  description: string;
  wallColor: string;
  defaultPosition: { x: number; y: number; scale: number };
}

export interface Masterclass {
  id: string;
  title: string;
  subtitle: string;
  category: 'painting' | 'resin' | 'wine-party' | 'individual' | 'texture';
  duration: string;
  price: number; // USD
  capacity: string;
  includes: string[];
  schedule: string;
  imageUrl: string;
  description: string;
  level: 'Beginner' | 'All Levels' | 'Advanced';
}

export interface CartItem {
  artwork: Artwork;
  frame?: 'none' | 'thin-black' | 'gold-brass' | 'natural-oak' | 'white-wood';
  quantity: number;
}
