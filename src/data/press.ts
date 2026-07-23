import type { MediaAsset, PressQuote } from './types';

export const pressQuotes: PressQuote[] = [];

export const pressImages: MediaAsset[] = [
  {
    label: 'Hero portrait',
    href: '/images/hero/flaws-hero-upshot-bw.jpg',
    alt: 'Black and white low-angle portrait of FLAWS standing among tall trees.',
    note: 'Official black-and-white artist portrait.',
    orientation: 'portrait',
  },
  {
    label: 'Colour portrait',
    href: '/images/press/flaws-upshot-colour.jpg',
    alt: 'Colour low-angle portrait of FLAWS standing among tall trees in a black shirt.',
    note: 'Official colour artist portrait.',
    orientation: 'portrait',
  },
  {
    label: 'Press portrait',
    href: '/images/press/flaws-presshead.jpg',
    alt: 'Black and white portrait of FLAWS in a white jacket standing against a tree in woodland.',
    note: 'Official landscape press portrait.',
    orientation: 'landscape',
  },
  {
    label: 'Live photography',
    href: '/images/misc/flaws-live.jpg',
    alt: 'Black and white live photograph of FLAWS performing behind a DJ setup beneath stage lights.',
    note: 'Official live artist photography.',
    orientation: 'portrait',
  },
];
