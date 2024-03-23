import { generateImage } from '../repository/stampRepository';

export async function generateImageUrl(input: string): Promise<string> {
  const template =
    'スタイルはキティちゃんのようにシンプルで愛らしいキャラクターのLINEスタンプを生成してください。ポーズはセリフに合わせて適切に変化させてください。セリフ：';

  const prompt = template + input;

  const imageUrl = await generateImage(prompt);

  return imageUrl;
}
