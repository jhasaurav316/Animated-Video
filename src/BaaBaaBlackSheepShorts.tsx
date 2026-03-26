import React from "react";
import { BaaBaaBlackSheep } from "./BaaBaaBlackSheep";
import { ShortsWrapper } from "./ShortsWrapper";

export const BaaBaaBlackSheepShorts: React.FC = () => {
  return (
    <ShortsWrapper
      title="Baa Baa Black Sheep"
      topColor="#2E7D32"
      bottomColor="#1B5E20"
      titleColor="#fff"
      accentEmoji="🐑🧶🐑"
    >
      <BaaBaaBlackSheep />
    </ShortsWrapper>
  );
};
