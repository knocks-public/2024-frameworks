import {
  FrameContainer,
  FrameImage,
  FrameReducer,
  NextServerPageProps,
  getPreviousFrame,
  useFramesReducer,
} from 'frames.js/next/server';
import { currentURL } from '../utils';

type State = {};
const initialState = {};

const reducer: FrameReducer<State> = (state, action) => {
  return {};
};

export default async function ShowStamp({ searchParams }: NextServerPageProps) {
  const url = currentURL('/');
  const previousFrame = getPreviousFrame<State>(searchParams);
  const [state, dispatch] = useFramesReducer<State>(
    reducer,
    initialState,
    previousFrame
  );

  const imageUrl = Array.isArray(searchParams?.url)
    ? searchParams?.url[0]
    : searchParams?.url || '';

  return (
    <div className="p-4">
      You can use this image as a stamp. Please copy this page URL and paste it
      into the Warpcast app.
      <img src={imageUrl || ''} />
      <FrameContainer
        postUrl="/frames"
        pathname="/"
        state={state}
        previousFrame={previousFrame}
      >
        <FrameImage aspectRatio="1:1" src={imageUrl || ''} />
      </FrameContainer>
    </div>
  );
}
