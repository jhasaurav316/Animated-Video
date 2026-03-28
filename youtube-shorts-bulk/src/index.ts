import { registerRoot } from "remotion";
import { AnimalRemotionRoot } from "./AnimalRoot";
import { BirdRemotionRoot } from "./BirdRoot";
import React from "react";

// Phase 1: Animal Names (30 videos) + Bird Names (20 videos) = 50 videos
// Phase 2 will add: FruitRoot, VegetableRoot, etc.
const CombinedRoot: React.FC = () => {
  return React.createElement(React.Fragment, null,
    React.createElement(AnimalRemotionRoot),
    React.createElement(BirdRemotionRoot)
  );
};

registerRoot(CombinedRoot);
