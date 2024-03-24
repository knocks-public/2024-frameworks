import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from 'lz-string';
import { headers } from 'next/headers';

export function currentURL(pathname: string): URL {
  const headersList = headers();
  const host = headersList.get('x-forwarded-host') || headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';

  try {
    return new URL(pathname, `${protocol}://${host}`);
  } catch (error) {
    return new URL('http://localhost:3000');
  }
}

export function vercelURL() {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;
}

export function getCompressedString(original: string): string {
  const compressed = compressToEncodedURIComponent(original);
  return compressed;
}

export function getDecompressedString(compressed: string): string {
  const original = decompressFromEncodedURIComponent(compressed);
  return original;
}
