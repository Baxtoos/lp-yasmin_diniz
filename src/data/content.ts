import { NavItem, ServiceItem, StepItem, InstagramItem } from '../types';

export const WHATSAPP_URL = 'https://contate.me/comamorayra';
export const INSTAGRAM_URL = 'https://www.instagram.com/_.yasmindiniz/';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#orcamento' },
];

export const ABOUT_PARAGRAPHS = [
  'Sou Yasmin Diniz, artista apaixonada por transformar espaços comuns em lugares cheios de identidade. Cada projeto é uma oportunidade de unir cores, formas e histórias para criar algo que faça sentido para quem vive aquele ambiente.',
  'Acredito que uma parede pode ser muito mais do que um fundo: ela pode despertar sentimentos, contar histórias e transformar a maneira como percebemos um espaço.',
  'Cada criação nasce de uma ideia, ganha vida em cada traço e se torna uma obra feita especialmente para você.',
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Quartos infantis',
    description:
      'Universos lúdicos, personagens e cenários criados para transformar quartos em espaços cheios de imaginação.',
    tone: 'mustard',
    alt: 'Quarto infantil com pintura lúdica',
    image: '/images/service-infantil.jpg',
  },
  {
    title: 'Ambientes residenciais',
    description:
      'Murais exclusivos para salas, quartos, corredores e outros ambientes da sua casa.',
    tone: 'foliage',
    alt: 'Mural botânico em ambiente residencial',
    image: '/images/service-residencial.jpg',
  },
  {
    title: 'Espaços comerciais',
    description:
      'Uma identidade visual artística para lojas, cafés, estúdios e negócios que desejam ser lembrados.',
    tone: 'terracotta',
    alt: 'Pintura artística em espaço comercial',
    image: '/images/service-comercial.jpg',
  },
  {
    title: 'Projetos personalizados',
    description:
      'Uma ideia especial, uma referência ou um desenho que você sempre imaginou. Vamos transformar isso em arte.',
    tone: 'sky',
    alt: 'Projeto de pintura personalizada',
    image: '/images/service-personalizado.jpg',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Vamos conversar',
    description:
      'Você me conta sua ideia, mostra o ambiente e compartilha as referências que gosta.',
  },
  {
    number: '02',
    title: 'Criamos o conceito',
    description:
      'Alinhamos o estilo, as cores e a proposta artística para o seu espaço.',
  },
  {
    number: '03',
    title: 'Planejamos o projeto',
    description:
      'Definimos os detalhes, as dimensões, o orçamento e o cronograma.',
  },
  {
    number: '04',
    title: 'A arte ganha vida',
    description:
      'Com tudo aprovado, é hora de transformar a ideia em uma pintura única.',
  },
];

export const INSTAGRAM_POSTS: InstagramItem[] = [
  {
    tone: 'olive',
    alt: 'Publicação do Instagram de Yasmin Diniz - Pintura artística',
    image: '/images/insta-01.jpg',
  },
  {
    tone: 'rose',
    alt: 'Bastidores do processo criativo de Yasmin Diniz',
    image: '/images/insta-02.jpg',
  },
  {
    tone: 'sky',
    alt: 'Mural finalizado por Yasmin Diniz no Instagram',
    image: '/images/insta-03.jpg',
  },
  {
    tone: 'mustard',
    alt: 'Detalhe de pintura em andamento por Yasmin Diniz',
    image: '/images/insta-04.jpg',
  },
];
