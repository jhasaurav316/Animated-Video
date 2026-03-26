import "./index.css";
import { Composition, Folder } from "remotion";
import { MyComposition } from "./Composition";
import { ABCRhyme } from "./ABCRhyme";
import { TwinkleTwinkle } from "./TwinkleTwinkle";
import { TwinkleTwinkleShorts } from "./TwinkleTwinkleShorts";
import { BaaBaaBlackSheep } from "./BaaBaaBlackSheep";
import { BaaBaaBlackSheepShorts } from "./BaaBaaBlackSheepShorts";

// ABC video: 5s intro + 26 letters × 3.5s + 4s outro = 100s
const ABC_DURATION_SECONDS = 5 + 26 * 3.5 + 4; // 100 seconds

// Twinkle Twinkle: 5s intro + 6 verses × 5s + 5s outro = 40s
const TWINKLE_DURATION_SECONDS = 5 + 6 * 5 + 5; // 40 seconds

// Baa Baa: 5s intro + 16 lines × 4s + 5s outro = 74s
const BAABAA_DURATION_SECONDS = 5 + 16 * 4 + 5; // 74 seconds

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SudharMapIntro"
        component={MyComposition}
        durationInFrames={46 * 30}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ABCRhyme"
        component={ABCRhyme}
        durationInFrames={Math.round(ABC_DURATION_SECONDS * 30)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Folder name="Nursery-Rhymes">
        <Folder name="Twinkle-Twinkle">
          <Composition
            id="TwinkleTwinkle"
            component={TwinkleTwinkle}
            durationInFrames={Math.round(TWINKLE_DURATION_SECONDS * 30)}
            fps={30}
            width={1920}
            height={1080}
          />
          <Composition
            id="TwinkleTwinkleShorts"
            component={TwinkleTwinkleShorts}
            durationInFrames={Math.round(TWINKLE_DURATION_SECONDS * 30)}
            fps={30}
            width={1080}
            height={1920}
          />
        </Folder>
        <Folder name="Baa-Baa-Black-Sheep">
          <Composition
            id="BaaBaaBlackSheep"
            component={BaaBaaBlackSheep}
            durationInFrames={Math.round(BAABAA_DURATION_SECONDS * 30)}
            fps={30}
            width={1920}
            height={1080}
          />
          <Composition
            id="BaaBaaBlackSheepShorts"
            component={BaaBaaBlackSheepShorts}
            durationInFrames={Math.round(BAABAA_DURATION_SECONDS * 30)}
            fps={30}
            width={1080}
            height={1920}
          />
        </Folder>
      </Folder>
    </>
  );
};
