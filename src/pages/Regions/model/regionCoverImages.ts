import { prepareImgproxyImageSlot, type PreparedImageSlot } from 'src/shared/lib';

interface RegionCoverImageSource {
  readonly fileName: string;
  readonly height: number;
  readonly mimeType: string;
  readonly url: string;
  readonly width: number;
}

export function prepareRegionCardCoverImage(
  source: RegionCoverImageSource,
  regionId: string,
  title: string,
): PreparedImageSlot | null {
  return (
    prepareRegionCoverImage(source, title, 520, 292, false) ??
    getFallbackRegionCoverImage(regionId, title, 520, 292, false)
  );
}

export function prepareRegionHeroCoverImage(
  source: RegionCoverImageSource,
  regionId: string,
  title: string,
): PreparedImageSlot | null {
  return (
    prepareRegionCoverImage(source, title, 1200, 420, true) ??
    getFallbackRegionCoverImage(regionId, title, 1200, 420, true)
  );
}

export function getRegionCoverImageMetadata(source: RegionCoverImageSource): Record<string, unknown> {
  return {
    fileName: source.fileName,
    mimeType: source.mimeType,
    width: source.width,
    height: source.height,
  };
}

function prepareRegionCoverImage(
  source: RegionCoverImageSource,
  title: string,
  width: number,
  height: number,
  eager: boolean,
): PreparedImageSlot | null {
  if (!source.mimeType.startsWith('image/')) return null;

  return prepareImgproxyImageSlot({
    alt: `${title} region cover image`,
    eager,
    gravity: 'sm',
    height,
    resizeMode: 'fill',
    sourceUrl: source.url,
    width,
  });
}

const fallbackCoverImages: Record<string, string> = {
  'ashen-wastes': '/images/regions/ashen-wastes.png',
  'ironcrest-mountains': '/images/regions/ironcrest-mountains.png',
  'sundered-coast': '/images/regions/sundered-coast.png',
  'verdant-marches': '/images/regions/verdant-marches.png',
  'whispering-vale': '/images/regions/whispering-vale.png',
};

function getFallbackRegionCoverImage(
  regionId: string,
  title: string,
  width: number,
  height: number,
  eager: boolean,
): PreparedImageSlot | null {
  const src = fallbackCoverImages[regionId];
  if (!src) return null;

  return {
    alt: `${title} region cover image`,
    height,
    loading: eager ? 'eager' : 'lazy',
    src,
    srcSet: '',
    width,
  };
}
