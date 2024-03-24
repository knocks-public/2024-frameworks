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
    let image_url = '';
    if (process.env.NODE_ENV === 'development') {
      image_url = await service.generateImageUrl(ctx.message?.inputText);
    } else {
      image_url =
        'https://github.com/knocks-public/2024-frameworks/assets/11481781/16530595-52af-4e27-84bd-02b1ce7ec62a';
    }

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
