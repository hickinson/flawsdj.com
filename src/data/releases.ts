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
      'Debut FLAWS EP released in August 2019 on Platform 22, the label founded by Kai Hickinson in 2019.',
    artwork: '/images/releases/Motion1.jpg',
    artworkAlt: 'Yellow and olive cover artwork for Motion by FLAWS.',
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
      'FLOAT Records released three FLAWS EPs in 2020 after label boss TWR72 reached out. Individual titles, track lists and release links are not currently available.',
    artworks: [
      {
        src: '/images/releases/Float1.jpg',
        alt: 'Green, pink and brown geometric cover artwork for a FLAWS release on FLOAT Records.',
      },
      {
        src: '/images/releases/Float2.jpg',
        alt: 'Pink and grey geometric cover artwork on a blue background for a FLAWS release on FLOAT Records.',
      },
      {
        src: '/images/releases/Float3.jpg',
        alt: 'Lime, black, grey and brown abstract cover artwork for a FLAWS release on FLOAT Records.',
      },
    ],
    links: [],
    tracks: [],
  },
];

export const mixes: Release[] = [];

export const mixesEmptyState = 'Mixes and live recordings will be published here when available.';

export const featuredRelease = releases[0];