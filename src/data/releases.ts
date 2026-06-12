import type { Release } from './types';

export const releases: Release[] = [
  {
    slug: 'motion',
    title: 'Motion',
    type: 'EP',
    year: '2019',
    status: 'Released August 2019',
    label: 'Platform 22',
    summary:
      'Debut FLAWS EP released on Platform 22, the label founded by Kai in 2019. Streaming and purchase links should be added only when approved URLs are supplied.',
    links: [],
    tracks: [],
  },
  {
    slug: 'float-records-2020-eps',
    title: 'FLOAT Records EPs',
    type: 'EP',
    year: '2020',
    status: 'Three EPs released in 2020',
    label: 'FLOAT Records',
    summary:
      'A group of three FLAWS EPs released on FLOAT Records in 2020 after label boss TWR72 reached out. Add individual titles, artwork, track lists and links when verified.',
    links: [],
    tracks: [],
  },
];

export const mixes: Release[] = [
  {
    slug: 'mixes-coming-soon',
    title: 'DJ mixes and live sets',
    type: 'Mix',
    year: 'TBC',
    status: 'Links TBC',
    summary:
      'A dedicated space for approved FLAWS mixes and live recordings. No mix links have been supplied for Phase 2.',
    links: [],
    tracks: [],
    isPlaceholder: true,
  },
];

export const latestRelease = releases[0];
