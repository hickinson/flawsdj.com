import type { Release } from './types';

export const releases: Release[] = [
  {
    slug: 'signal-decay',
    title: 'Signal Decay',
    type: 'EP',
    year: '2026',
    status: 'PLACEHOLDER — forthcoming / date TBC',
    summary:
      'PLACEHOLDER — a compact statement of pressure-system drums, stripped synth lines and acid-green voltage.',
    artwork: '/images/releases/placeholder-signal-decay.jpg',
    links: [
      { label: 'Listen', href: 'https://soundcloud.com/placeholder', note: 'PLACEHOLDER' },
      { label: 'Buy', href: 'https://bandcamp.com/placeholder', note: 'PLACEHOLDER' },
    ],
    tracks: ['PLACEHOLDER — Track 01', 'PLACEHOLDER — Track 02', 'PLACEHOLDER — Track 03'],
  },
  {
    slug: 'basement-index',
    title: 'Basement Index',
    type: 'Single',
    year: '2025',
    status: 'PLACEHOLDER',
    summary:
      'PLACEHOLDER — functional low-light club material with a direct line to late-set momentum.',
    artwork: '/images/releases/placeholder-basement-index.jpg',
    links: [{ label: 'Listen', href: 'https://open.spotify.com/artist/placeholder', note: 'PLACEHOLDER' }],
    tracks: ['PLACEHOLDER — Basement Index'],
  },
  {
    slug: 'afterimage-mix',
    title: 'Afterimage Mix',
    type: 'Mix',
    year: '2025',
    status: 'PLACEHOLDER',
    summary:
      'PLACEHOLDER — a recorded session mapping dub pressure, broken techno and minimal acid fragments.',
    artwork: '/images/releases/placeholder-afterimage-mix.jpg',
    links: [{ label: 'Listen', href: 'https://soundcloud.com/placeholder', note: 'PLACEHOLDER' }],
    tracks: ['PLACEHOLDER — 60 minute mix'],
  },
];

export const latestRelease = releases[0];
