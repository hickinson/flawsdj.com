import type { LinkItem, SoundCloudDestination } from './types';

export const soundCloudProfileLink: LinkItem = {
  label: 'SoundCloud',
  href: 'https://soundcloud.com/flawsdj',
  note: 'Official FLAWS SoundCloud profile.',
};

export const residentAdvisorLink: LinkItem = {
  label: 'Resident Advisor',
  href: 'https://ra.co/dj/flaws',
  note: 'Official Resident Advisor profile.',
};

export const parabelProfileLink: LinkItem = {
  label: 'FLAWS at Parabel',
  href: 'https://www.parabelmusic.se/agency/flaws/',
  note: 'Official booking agency profile.',
};

const instagramLink: LinkItem = {
  label: 'Instagram',
  href: 'https://www.instagram.com/flaws_dj/',
  note: 'Official Instagram profile.',
};

const facebookLink: LinkItem = {
  label: 'Facebook',
  href: 'https://www.facebook.com/FLAWSDJ',
  note: 'Official Facebook profile.',
};

const releasesPlaylistLink: LinkItem = {
  label: 'Releases, labels and collaborations',
  href: 'https://soundcloud.com/flawsdj/sets/releases-labels',
  note: 'Selected releases, label appearances and collaborations on SoundCloud.',
};

const interviewsPlaylistLink: LinkItem = {
  label: 'Podcasts and interviews',
  href: 'https://soundcloud.com/flawsdj/sets/interviews',
  note: 'Podcast appearances and interviews on SoundCloud.',
};

export const pressFeatures: LinkItem[] = [
  {
    label: 'The Beauty of Imperfection: FLAWS',
    href: 'https://open.substack.com/pub/alessandradc/p/the-beauty-of-imperfection-flaws',
    note: 'Feature article published on Substack.',
  },
];

export const socialLinks: LinkItem[] = [
  soundCloudProfileLink,
  instagramLink,
  residentAdvisorLink,
  facebookLink,
];

export const contactLinks: LinkItem[] = [instagramLink, residentAdvisorLink, facebookLink];

export const officialProfileLinks: LinkItem[] = [...socialLinks, parabelProfileLink];

export const musicDestinations: SoundCloudDestination[] = [
  {
    label: 'Listen to FLAWS',
    href: soundCloudProfileLink.href,
    description: 'The main FLAWS SoundCloud profile, bringing together current uploads and artist activity.',
    playerTitle: 'FLAWS SoundCloud profile player',
    kind: 'profile',
  },
  {
    label: releasesPlaylistLink.label,
    href: releasesPlaylistLink.href,
    description: releasesPlaylistLink.note ?? '',
    playerTitle: 'FLAWS releases, labels and collaborations SoundCloud player',
    kind: 'playlist',
  },
  {
    label: interviewsPlaylistLink.label,
    href: interviewsPlaylistLink.href,
    description: interviewsPlaylistLink.note ?? '',
    playerTitle: 'FLAWS podcasts and interviews SoundCloud player',
    kind: 'playlist',
  },
];

export const bookingLinks: LinkItem[] = [parabelProfileLink];

export const epkLinks: LinkItem[] = [
  soundCloudProfileLink,
  releasesPlaylistLink,
  interviewsPlaylistLink,
  pressFeatures[0],
  residentAdvisorLink,
  parabelProfileLink,
];

export const primaryLinks: LinkItem[] = socialLinks;
export const futureMusicLinks: LinkItem[] = [];
