// StampRepository.test.ts
import OpenAI from 'openai';
import { StampRepository } from '../app/repository/stampRepository';

describe('StampRepository', () => {
  let openAIInstance: OpenAI;
  let stampRepository: StampRepository;
  const mockImageUrl = 'https://example.com/image.png';

  beforeEach(() => {
    openAIInstance = new OpenAI({ apiKey: 'dummy-api-key' });
    stampRepository = new StampRepository(openAIInstance);
  });

  it('should generate an image URL successfully', async () => {
    jest.spyOn(openAIInstance.images, 'generate').mockResolvedValue({
      created: 0,
      data: [{ url: mockImageUrl }],
    });

    const prompt = 'test prompt';
    const imageUrl = await stampRepository.generateImage(prompt);
    expect(imageUrl).toBe(mockImageUrl);
    expect(openAIInstance.images.generate).toHaveBeenCalledWith({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1024x1024',
    });
  });

  it('should throw an error when image generation fails', async () => {
    jest
      .spyOn(openAIInstance.images, 'generate')
      .mockRejectedValue(new Error('API call failed'));

    await expect(stampRepository.generateImage('test prompt')).rejects.toThrow(
      'Image generation failed'
    );
  });
});
