export class StampUrlRepository {
  private token: string = process.env.BITLY_TOKEN || '';
  private url: string = 'https://api-ssl.bitly.com/v4/shorten';

  async createShortUrl(longUrl: string): Promise<string> {
    const headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(this.url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ long_url: longUrl }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.link;
  }
}
