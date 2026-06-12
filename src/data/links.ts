import type { LinkItem } from './types';

export const primaryLinks: LinkItem[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/flaws_dj/', note: 'Approved social link' },
  { label: 'Resident Advisor', href: 'https://ra.co/dj/flaws', note: 'Approved profile link' },
  { label: 'Facebook', href: 'https://www.facebook.com/FLAWSDJ', note: 'Approved social link' },
];

export const socialLinks: LinkItem[] = primaryLinks;

export const futureMusicLinks: LinkItem[] = [
  { label: 'Spotify', href: '#', note: 'PLACEHOLDER — add approved artist URL when supplied', isPlaceholder: true },
  { label: 'SoundCloud', href: '#', note: 'PLACEHOLDER — add approved artist URL when supplied', isPlaceholder: true },
  { label: 'Bandcamp', href: '#', note: 'PLACEHOLDER — add approved artist URL when supplied', isPlaceholder: true },
  { label: 'YouTube', href: '#', note: 'PLACEHOLDER — add approved artist URL when supplied', isPlaceholder: true },
  { label: 'Apple Music', href: '#', note: 'PLACEHOLDER — add approved artist URL when supplied', isPlaceholder: true },
  { label: 'Beatport', href: '#', note: 'PLACEHOLDER — add approved artist URL when supplied', isPlaceholder: true },
];
