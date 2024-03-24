import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameInput,
  FrameReducer,
  NextServerPageProps,
  getFrameMessage,
  getPreviousFrame,
  useFramesReducer,
} from 'frames.js/next/server';
import Link from 'next/link';
import { DEFAULT_DEBUGGER_HUB_URL, createDebugUrl } from './debug';
import { currentURL } from './utils';

type State = {
  generated: boolean;
};

const initialState = { generated: false };

const reducer: FrameReducer<State> = (state, action) => {
  const buttonIndex = action.postBody?.untrustedData.buttonIndex;
  switch (buttonIndex) {
    case 1:
      return { generated: !state.generated };
    default:
      return state;
  }
};

// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {
  const url = currentURL('/');
  const previousFrame = getPreviousFrame<State>(searchParams);

  const frameMessage = await getFrameMessage(previousFrame.postBody, {
    hubHttpUrl: DEFAULT_DEBUGGER_HUB_URL,
  });

  if (frameMessage && !frameMessage?.isValid) {
    throw new Error('Invalid frame payload');
  }

  const [state, dispatch] = useFramesReducer<State>(
    reducer,
    initialState,
    previousFrame
  );

  // Here: do a server side side effect either sync or async (using await), such as minting an NFT if you want.
  // example: load the users credentials & check they have an NFT

  console.log('info: state is:', state);

  // then, when done, return next frame
  return (
    <div className="p-4">
      frames.js starter kit. The Template Frame is on this page, it&apos;s in
      the html meta tags (inspect source).{' '}
      <Link href={createDebugUrl(url)} className="underline">
        Debug
      </Link>{' '}
      <FrameContainer
        postUrl="/frames"
        pathname="/"
        state={state}
        previousFrame={previousFrame}
      >
        <FrameImage aspectRatio="1:1">
          <div tw="w-full h-full bg-slate-700 text-white justify-center items-center flex flex-col">
            <div tw="flex flex-row">
              {state?.generated ? 'Generated' : 'Not Generated'}
            </div>
          </div>
        </FrameImage>
        <FrameInput text="Please enter a prompt" />
        <FrameButton action="post" target="/api/frames/createStamp">
          generate
        </FrameButton>
      </FrameContainer>
    </div>
  );
}
