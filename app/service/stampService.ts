import { StampRepository } from '../repository/stampRepository';

export class StampService {
  private template: string;

  constructor(
    template: string,
    private stampRepository: StampRepository = new StampRepository()
  ) {
    this.template = template;
  }

  async generateImageUrl(input: string): Promise<string> {
    const prompt = this.template + input;
    const imageUrl = await this.stampRepository.generateImage(prompt);
    return imageUrl;
  }
}
