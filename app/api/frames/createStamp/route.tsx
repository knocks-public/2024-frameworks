import { Button, createFrames } from 'frames.js/next';
import { StampService } from '../../../service/stampService';
import { StampUrlService } from '../../../service/stampUrlService';

const frames = createFrames({
  basePath: '/api/frames/createStamp',
});

const handleRequest = frames(async (ctx) => {
  const template =
    'スタイルはキティちゃんのようにシンプルで愛らしいキャラクターのLINEスタンプを生成してください。ポーズはセリフに合わせて適切に変化させてください。セリフ：';
  const stampService = new StampService(template);
  const imageUrl = await stampService.generateImageUrl(ctx.message?.inputText);
  const stampUrlService = new StampUrlService();
  const stampUrl = await stampUrlService.createStampUrl(imageUrl);

  return {
    image: imageUrl,
    imageOptions: {
      aspectRatio: '1:1',
    },
    buttons: [
      <Button action="link" target={stampUrl} key="">
        Jump to Stamp URL
      </Button>,
    ],
  };
});

export const POST = handleRequest;
