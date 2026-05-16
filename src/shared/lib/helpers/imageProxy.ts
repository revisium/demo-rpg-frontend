export type ImageResizeMode = 'fit' | 'fill' | 'fill-down';
export type ImageGravity = 'ce' | 'sm';

export interface ImageSlotRequest {
  readonly sourceUrl: string;
  readonly width: number;
  readonly height: number;
  readonly resizeMode: ImageResizeMode;
  readonly gravity?: ImageGravity;
  readonly alt: string;
  readonly eager?: boolean;
}

export interface PreparedImageSlot {
  readonly alt: string;
  readonly height: number;
  readonly loading: 'eager' | 'lazy';
  readonly src: string;
  readonly srcSet: string;
  readonly width: number;
}

const IMGPROXY_BASE_URL = 'https://imgproxy.revisium.io/unsafe';
const TRUSTED_IMAGE_HOSTS = new Set(['cloud.revisium.io', 'revisium.io']);

export function prepareImgproxyImageSlot(request: ImageSlotRequest): PreparedImageSlot | null {
  if (!isAbsoluteHttpUrl(request.sourceUrl)) return null;
  if (!isPositiveInteger(request.width) || !isPositiveInteger(request.height)) return null;

  const baseOptions = [
    `rs:${request.resizeMode}:${request.width}:${request.height}`,
    `g:${request.gravity ?? 'ce'}`,
  ];
  const src = buildImgproxyUrl(request.sourceUrl, baseOptions);
  const src2x = buildImgproxyUrl(request.sourceUrl, [...baseOptions, 'dpr:2']);

  return {
    alt: request.alt,
    height: request.height,
    loading: request.eager ? 'eager' : 'lazy',
    src,
    srcSet: `${src} 1x, ${src2x} 2x`,
    width: request.width,
  };
}

function buildImgproxyUrl(sourceUrl: string, options: readonly string[]): string {
  const encodedSourceUrl = encodeURIComponent(sourceUrl);
  return `${IMGPROXY_BASE_URL}/${options.join('/')}/plain/${encodedSourceUrl}@webp`;
}

function isAbsoluteHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
    return TRUSTED_IMAGE_HOSTS.has(parsed.hostname) || parsed.hostname.endsWith('.revisium.io');
  } catch {
    return false;
  }
}

function isPositiveInteger(value: number): boolean {
  return Number.isInteger(value) && value > 0;
}
