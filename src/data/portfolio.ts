import { CategoryKey, FilterKey, Work } from '../types';

export const CATEGORIES: Record<CategoryKey, string> = {
  botanico: 'Murais botânicos',
  infantil: 'Arte infantil',
  personagens: 'Personagens e ilustrações',
  abstrato: 'Arte abstrata e decorativa',
  comercial: 'Projetos comerciais',
};

export const FILTER_LABELS: Record<FilterKey, string> = {
  todos: 'Todos',
  ...CATEGORIES,
};

export const FILTER_KEYS: FilterKey[] = [
  'todos',
  'botanico',
  'infantil',
  'personagens',
  'abstrato',
  'comercial',
];

export const ASPECT_CLASSES: Record<Work['aspect'], string> = {
  tall: 'aspect-[3/4]',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
};

export const WORKS: Work[] = [
  {
    id: 'botanico-araras',
    title: 'Mural botânico com araras',
    category: 'botanico',
    aspect: 'tall',
    tone: 'foliage',
    image: '/images/mural-01.jpg',
  },
  {
    id: 'botanico-flores',
    title: 'Folhagens e flores em sala de estar',
    category: 'botanico',
    aspect: 'landscape',
    tone: 'olive',
    image: '/images/mural-02.jpg',
  },
  {
    id: 'infantil-cenario',
    title: 'Quarto infantil com cenário lúdico',
    category: 'infantil',
    aspect: 'landscape',
    tone: 'mustard',
    image: '/images/mural-03.jpg',
  },
  {
    id: 'infantil-animais',
    title: 'Animais e cenário para quarto de criança',
    category: 'infantil',
    aspect: 'square',
    tone: 'rose',
    image: '/images/mural-04.jpg',
  },
  {
    id: 'personagens-animais',
    title: 'Ilustração de animais delicados',
    category: 'personagens',
    aspect: 'portrait',
    tone: 'sky',
    image: '/images/mural-05.jpg',
  },
  {
    id: 'personagens-corredor',
    title: 'Personagens ilustrados em corredor',
    category: 'personagens',
    aspect: 'tall',
    tone: 'terracotta',
    image: '/images/mural-06.jpg',
  },
  {
    id: 'abstrato-tracos',
    title: 'Composição abstrata com traços autorais',
    category: 'abstrato',
    aspect: 'landscape',
    tone: 'terracotta',
    image: '/images/mural-07.jpg',
  },
  {
    id: 'abstrato-formas',
    title: 'Formas geométricas expressivas',
    category: 'abstrato',
    aspect: 'square',
    tone: 'olive',
    image: '/images/mural-08.jpg',
  },
  {
    id: 'comercial-identidade',
    title: 'Identidade artística para espaço comercial',
    category: 'comercial',
    aspect: 'portrait',
    tone: 'foliage',
    image: '/images/mural-09.jpg',
  },
];
