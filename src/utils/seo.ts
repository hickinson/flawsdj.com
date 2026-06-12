import { artistProfile } from '@data/artistProfile';

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
  const imageUrl = image ? new URL(image, artistProfile.siteUrl).toString() : undefined;

  return {
    title: siteTitle,
    description: siteDescription,
    canonicalUrl,
    imageUrl,
    type,
  };
}
