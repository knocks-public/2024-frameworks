import OpenAI from 'openai';

export class StampRepository {
  constructor(private openai = new OpenAI()) {}

  async generateImage(prompt: string): Promise<string> {
    try {
      const imageResponse = await this.openai.images.generate({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1024x1024',
      });
      const imageUrl = imageResponse.data[0]?.url || '';
      return imageUrl;
    } catch (error) {
      console.error('Error generating image:', error);
      throw new Error('Image generation failed');
    }
  }
}
