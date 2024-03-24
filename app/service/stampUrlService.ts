import {
  getCompressedString,
  getDecompressedString,
  vercelURL,
} from '../utils';

export class StampUrlService {
  private baseUrl: string = vercelURL() || 'http://localhost:3000';
  private showStampPath: string = '/api/frames/showStamp';

  async createStampUrl(imageUrl: string): Promise<string> {
    const compressedImageUrl = getCompressedString(imageUrl);
    return this.convertStampUrl(compressedImageUrl);
  }

  private convertStampUrl(imageUrl: string): string {
    return this.baseUrl + this.showStampPath + '?url=' + imageUrl;
  }

  async extractImageUrl(stampUrl: string): Promise<string> {
    const compressedImageUrl = this.extractCompressedImageUrl(stampUrl);
    return getDecompressedString(compressedImageUrl);
  }

  private extractCompressedImageUrl(stampUrl: string): string {
    const url = new URL(stampUrl);
    return url.searchParams.get('url') || '';
  }
}
