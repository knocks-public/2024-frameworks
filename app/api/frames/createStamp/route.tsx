import { Button, createFrames } from 'frames.js/next';

const frames = createFrames({
  basePath: '/api/frames/createStamp',
});

const handleRequest = frames(async (ctx) => {
  console.log(ctx);

  return {
    image: (
      <div tw="w-full h-full bg-slate-700 text-white justify-center items-center flex flex-col">
        <div tw="flex flex-row">hogehoge</div>
      </div>
    ),
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
