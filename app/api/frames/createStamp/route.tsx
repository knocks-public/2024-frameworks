import { Button, createFrames } from 'frames.js/next';
import { generateImageUrl } from '../../../service/stampService';

const frames = createFrames({
  basePath: '/api/frames/createStamp',
});

const handleRequest = frames(async (ctx) => {
  const image_url = await generateImageUrl(ctx.message?.inputText);

  return {
    image: image_url,
    imageOptions: {
      aspectRatio: '1:1',
    },
    buttons: [
      <Button action="link" target="https://google.com">
        {ctx.message?.inputText}
      </Button>,
    ],
  };
});

export const POST = handleRequest;
