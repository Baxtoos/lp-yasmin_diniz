export type Tone = 'foliage' | 'olive' | 'rose' | 'mustard' | 'sky' | 'terracotta';

export type CategoryKey = 'botanico' | 'infantil' | 'personagens' | 'abstrato' | 'comercial';

export type FilterKey = 'todos' | CategoryKey;

export interface Work {
  id: string;
  title: string;
  category: CategoryKey;
  aspect: 'tall' | 'portrait' | 'landscape' | 'square';
  tone: Tone;
  image?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tone: Tone;
  alt: string;
  image?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface InstagramItem {
  tone: Tone;
  alt: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
