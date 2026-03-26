import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";
import { HindiRemotionRoot } from "./HindiRoot";
import { HindiStoryRemotionRoot } from "./HindiStoryRoot";
import React from "react";

const CombinedRoot: React.FC = () => {
  return React.createElement(React.Fragment, null,
    React.createElement(RemotionRoot),
    React.createElement(HindiRemotionRoot),
    React.createElement(HindiStoryRemotionRoot)
  );
};

registerRoot(CombinedRoot);
