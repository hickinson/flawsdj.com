import { artistProfile } from '@data/artistProfile';
import { publicAssetExists } from './assets';

export type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  type?: 'website' | 'article' | 'profile';
};

export function buildSeo({ title, description, image, pathname = '/', type = 'website' }: SeoProps = {}) {
  const siteTitle = title ? `${title} | ${artistProfile.name}` : artistProfile.seo.defaultTitle;
  const siteDescription = description ?? artistProfile.seo.defaultDescription;
  const canonicalPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const canonicalUrl = new URL(canonicalPath, artistProfile.siteUrl).toString();
  const requestedImage = image ?? artistProfile.heroImage;
  const hasUsableImage = Boolean(
    requestedImage &&
      (requestedImage.startsWith('https://') || requestedImage.startsWith('http://') || publicAssetExists(requestedImage)),
  );
  const imageUrl = requestedImage && hasUsableImage ? new URL(requestedImage, artistProfile.siteUrl).toString() : undefined;

  return {
    title: siteTitle,
    description: siteDescription,
    canonicalUrl,
    imageUrl,
    type,
  };
}
