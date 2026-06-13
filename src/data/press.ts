import type { MediaAsset, PressQuote } from './types';

export const pressQuotes: PressQuote[] = [];

export const pressImages: MediaAsset[] = [
  {
    label: 'Hero photography',
    alt: 'Reserved visual area for approved FLAWS hero photography.',
    note: 'Approved photography has been reviewed but image binaries are not committed in this text-only PR flow.',
  },
  {
    label: 'Portrait photography',
    alt: 'Reserved visual area for approved FLAWS portrait photography.',
    note: 'Add optimized public-safe image files in a future asset-only delivery path when binary uploads are supported.',
  },
  {
    label: 'Live photography',
    alt: 'Reserved visual area for approved FLAWS live photography.',
    note: 'Live and press photography can be connected here once the assets are committed through an approved binary workflow.',
  },
];
