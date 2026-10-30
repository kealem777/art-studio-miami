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
  dimensions: string; // e.g., "140 × 100 cm (55 × 39 in)"
  dimensionsRu?: string;
  medium: ArtMedium;
  mediumRu?: string;
  style: ArtStyle;
  year: number;
  imageUrl: string;
  detailImages?: string[];
  description: string;
  descriptionRu?: string;
  inStock: boolean;
  featured?: boolean;
  paletteColors?: string[]; // hex codes for palette match
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  nameRu?: string;
  title: string;
  titleRu?: string;
  avatar: string;
  coverImage: string;
  bio: string;
  bioRu?: string;
  quote: string;
  quoteRu?: string;
  exhibitions: string[];
  exhibitionsRu?: string[];
  awards: string[];
  awardsRu?: string[];
  education: string;
  educationRu?: string;
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
  descriptionRu?: string;
  wallColor: string;
  defaultPosition: { x: number; y: number; scale: number };
}

export interface Masterclass {
  id: string;
  title: string;
  titleRu?: string;
  subtitle: string;
  subtitleRu?: string;
  category: 'painting' | 'resin' | 'wine-party' | 'individual' | 'texture';
  duration: string;
  durationRu?: string;
  price: number; // USD
  capacity: string;
  capacityRu?: string;
  includes: string[];
  includesRu?: string[];
  schedule: string;
  scheduleRu?: string;
  imageUrl: string;
  description: string;
  descriptionRu?: string;
  level: 'Beginner' | 'All Levels' | 'Advanced';
  levelRu?: string;
}

export interface CartItem {
  artwork: Artwork;
  frame?: 'none' | 'thin-black' | 'gold-brass' | 'natural-oak' | 'white-wood';
  quantity: number;
}
