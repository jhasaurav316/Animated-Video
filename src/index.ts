import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";
import { HindiRemotionRoot } from "./HindiRoot";
import { HindiStoryRemotionRoot } from "./HindiStoryRoot";
import { AlphabetRemotionRoot } from "./AlphabetRoot";
import { AbcAlphabetRemotionRoot } from "./AbcAlphabetRoot";
import React from "react";

const CombinedRoot: React.FC = () => {
  return React.createElement(React.Fragment, null,
    React.createElement(RemotionRoot),
    React.createElement(HindiRemotionRoot),
    React.createElement(HindiStoryRemotionRoot),
    React.createElement(AlphabetRemotionRoot),
    React.createElement(AbcAlphabetRemotionRoot)
  );
};

registerRoot(CombinedRoot);
