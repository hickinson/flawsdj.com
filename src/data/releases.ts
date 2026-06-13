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
      'FLOAT Records released three FLAWS EPs in 2020 after label boss TWR72 reached out. Individual titles, artwork, track lists and links have not been supplied for this launch version.',
    links: [],
    tracks: [],
  },
];

export const mixes: Release[] = [];

export const mixesEmptyState = 'Approved mixes and live recordings will be added here when supplied.';

export const latestRelease = releases[0];
