export type LinkItem = {
  label: string;
  href: string;
  note?: string;
};

export type Release = {
  slug: string;
  title: string;
  type: string;
  year: string;
  status: string;
  summary: string;
  artwork: string;
  links: LinkItem[];
  tracks: string[];
};

export type Show = {
  date: string;
  title: string;
  city: string;
  venue: string;
  status: string;
  ticketUrl?: string;
};

export type Video = {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
};

export type PressQuote = {
  quote: string;
  source: string;
};
