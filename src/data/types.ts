export type LinkItem = {
  label: string;
  href: string;
  note?: string;
  download?: boolean | string;
  isPlaceholder?: boolean;
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
  links: LinkItem[];
  tracks: string[];
  isPlaceholder?: boolean;
};

export type Show = {
  date: string;
  title: string;
  city: string;
  venue: string;
  status: string;
  ticketUrl?: string;
  isPast?: boolean;
  isPlaceholder?: boolean;
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
