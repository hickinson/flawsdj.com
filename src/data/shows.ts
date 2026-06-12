import type { Show } from './types';

export const shows: Show[] = [];

export const pastShowNotes: Show[] = [
  {
    date: 'TBC',
    title: 'Past cities include London, Marrakech, Manchester, Berlin, New York, Detroit and Chicago.',
    city: 'International',
    venue: 'Archive details TBC',
    status: 'Archive to be manually verified',
    isPast: true,
    isPlaceholder: true,
  },
];

export const showsDataNote =
  'Shows are manually maintained for Phase 2. Resident Advisor auto-sync or scraping is not implemented; the RA profile is linked as an external source for promoters and fans.';
