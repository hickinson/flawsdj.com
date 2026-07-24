export type LinkItem = {
  label: string;
  href: string;
  note?: string;
  download?: boolean | string;
  isPlaceholder?: boolean;
};

export type SoundCloudDestination = {
  label: string;
  href: string;
  description: string;
  playerTitle: string;
  kind: 'profile' | 'playlist';
};

export type ReleaseArtwork = {
  src: string;
  alt: string;
};

export type Release = {
  slug: string;
  title: string;
  type: 'EP' | 'Single' | 'Mix' | 'Live Set';
  year: string;
  status: string;
  label?: string;
  summary: string;
  artwork?: string;
  artworkAlt?: string;
  artworks?: ReleaseArtwork[];
  links: LinkItem[];
  tracks: string[];
  isPlaceholder?: boolean;
};

export type ShowSource = 'resident-advisor' | 'official' | 'promoter' | 'manual';

export type ShowStatus = 'scheduled' | 'sold-out' | 'cancelled' | 'postponed';

export type Show = {
  id: string;
  startDate: string;
  endDate?: string;
  title: string;
  city: string;
  venue: string;
  country?: string;
  status?: ShowStatus;
  eventUrl?: string;
  ticketUrl?: string;
  raUrl?: string;
  source?: ShowSource;
};

export type Video = {
  title: string;
  description: string;
  thumbnail?: string;
  href?: string;
  type: 'Mix' | 'Live Set' | 'Video';
  isPlaceholder?: boolean;
};

export type PressQuote = {
  quote: string;
  source: string;
  isPlaceholder?: boolean;
};

export type MediaAsset = {
  label: string;
  href?: string;
  alt: string;
  note: string;
  orientation?: 'portrait' | 'landscape';
  isPlaceholder?: boolean;
};
