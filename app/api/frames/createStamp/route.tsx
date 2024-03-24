import { Button, createFrames } from 'frames.js/next';
import { StampService } from '../../../service/stampService';

const frames = createFrames({
  basePath: '/api/frames/createStamp',
});

const handleRequest = frames(async (ctx) => {
  if (ctx.clientProtocol.id === 'farcaster') {
    const template =
      'スタイルはキティちゃんのようにシンプルで愛らしいキャラクターのLINEスタンプを生成してください。ポーズはセリフに合わせて適切に変化させてください。セリフ：';
    const service = new StampService(template);
    const image_url = await service.generateImageUrl(ctx.message?.inputText);

    return {
      accepts: [
        {
          id: 'farcaster',
          version: 'vNext',
        },
      ],
      image: image_url,
      imageOptions: {
        aspectRatio: '1:1',
      },
      buttons: [
        <Button action="link" target="https://warpcast.com/" key="">
          Share Your Stamp
        </Button>,
      ],
    };
  } else {
    return {
      accepts: [
        {
          id: 'farcaster',
          version: 'vNext',
        },
      ],
      image: '',
    };
  }
});

export const POST = handleRequest;
