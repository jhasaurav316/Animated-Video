import React from "react";
import { TwinkleTwinkle } from "./TwinkleTwinkle";
import { ShortsWrapper } from "./ShortsWrapper";

export const TwinkleTwinkleShorts: React.FC = () => {
  return (
    <ShortsWrapper
      title="Twinkle Twinkle Little Star"
      topColor="#1A1A4E"
      bottomColor="#0F0C29"
      titleColor="#FFD700"
      accentEmoji="⭐🌙⭐"
    >
      <TwinkleTwinkle />
    </ShortsWrapper>
  );
};
