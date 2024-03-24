// stampService.test.js
import { StampRepository } from '../app/repository/stampRepository';
import { StampService } from '../app/service/stampService';

describe('StampService', () => {
  let service: StampService;
  const template = 'Template: ';
  const mockImageUrl = 'https://example.com/image.png';

  beforeEach(() => {
    jest.clearAllMocks();
    service = new StampService(template, StampRepository.prototype);

    jest
      .spyOn(StampRepository.prototype, 'generateImage')
      .mockImplementation((prompt) => {
        return Promise.resolve(mockImageUrl);
      });
  });

  it('should generate an image URL using the provided template and input', async () => {
    const input = 'test input';
    const result = await service.generateImageUrl(input);

    const expectedPrompt = template + input;
    expect(StampRepository.prototype.generateImage).toHaveBeenCalledWith(
      expectedPrompt
    );
    expect(result).toBe(mockImageUrl);
  });
});
