import OpenAI from 'openai';

const openai = new OpenAI();

export async function generateImage(prompt: string) {
  try {
    const imageResponse = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    });
    const imageUrl = imageResponse.data[0]?.url || '';
    return imageUrl;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}
