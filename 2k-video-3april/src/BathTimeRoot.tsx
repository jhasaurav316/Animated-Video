import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const BathTimeRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BathTime1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 1",
          videoId: "bath-time-1",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 2",
          videoId: "bath-time-2",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shower","emoji":"🚿","bgColor":"#0288D1"},{"letter":"F","word":"Faucet","emoji":"🚰","bgColor":"#9E9E9E"},{"letter":"S","word":"Sink","emoji":"🚰","bgColor":"#B0BEC5"},{"letter":"S","word":"Slippers","emoji":"🩴","bgColor":"#E91E63"},{"letter":"R","word":"Robe","emoji":"🧥","bgColor":"#F5F5F5"},{"letter":"C","word":"Conditioner","emoji":"🧴","bgColor":"#4CAF50"},{"letter":"N","word":"Nail Clipper","emoji":"✂️","bgColor":"#607D8B"},{"letter":"C","word":"Cotton Ball","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"B","word":"Bath Bomb","emoji":"💣","bgColor":"#E91E63"},{"letter":"L","word":"Lavender","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"S","word":"Steam","emoji":"♨️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#D32F2F"},{"letter":"W","word":"Washcloth","emoji":"🧻","bgColor":"#00BCD4"},{"letter":"S","word":"Scale","emoji":"⚖️","bgColor":"#607D8B"},{"letter":"P","word":"Perfume","emoji":"🌸","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 3",
          videoId: "bath-time-3",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"D","word":"Deodorant","emoji":"🧴","bgColor":"#0288D1"},{"letter":"F","word":"Floss","emoji":"🧵","bgColor":"#00BCD4"},{"letter":"M","word":"Mouthwash","emoji":"🧴","bgColor":"#4CAF50"},{"letter":"H","word":"Hand Soap","emoji":"🧼","bgColor":"#FF8F00"},{"letter":"R","word":"Razor","emoji":"🪒","bgColor":"#607D8B"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"B","word":"Body Wash","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Tissue","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"Q","word":"Q-tip","emoji":"🪥","bgColor":"#F5F5F5"},{"letter":"P","word":"Plunger","emoji":"🪠","bgColor":"#D32F2F"},{"letter":"S","word":"Scrub","emoji":"🧽","bgColor":"#00BCD4"},{"letter":"B","word":"Bath Mat","emoji":"🟫","bgColor":"#795548"},{"letter":"H","word":"Hamper","emoji":"🧺","bgColor":"#8D6E63"},{"letter":"C","word":"Candle","emoji":"🕯️","bgColor":"#FFB300"},{"letter":"M","word":"Music","emoji":"🎵","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 4",
          videoId: "bath-time-4",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 5",
          videoId: "bath-time-5",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 6",
          videoId: "bath-time-6",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 7",
          videoId: "bath-time-7",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 8",
          videoId: "bath-time-8",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 9",
          videoId: "bath-time-9",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 10",
          videoId: "bath-time-10",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 11",
          videoId: "bath-time-11",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 12",
          videoId: "bath-time-12",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 13",
          videoId: "bath-time-13",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 14",
          videoId: "bath-time-14",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 15",
          videoId: "bath-time-15",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 16",
          videoId: "bath-time-16",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 17",
          videoId: "bath-time-17",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 18",
          videoId: "bath-time-18",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 19",
          videoId: "bath-time-19",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 20",
          videoId: "bath-time-20",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 21",
          videoId: "bath-time-21",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 22",
          videoId: "bath-time-22",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 23",
          videoId: "bath-time-23",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 24",
          videoId: "bath-time-24",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 25",
          videoId: "bath-time-25",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 26",
          videoId: "bath-time-26",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 27",
          videoId: "bath-time-27",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 28",
          videoId: "bath-time-28",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 29",
          videoId: "bath-time-29",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BathTime30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bath Time - Part 30",
          videoId: "bath-time-30",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Bathtub","emoji":"🛁","bgColor":"#0288D1"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#F48FB1"},{"letter":"S","word":"Shampoo","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#FF8F00"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Brush","emoji":"🪥","bgColor":"#4CAF50"},{"letter":"T","word":"Toothbrush","emoji":"🪥","bgColor":"#1565C0"},{"letter":"T","word":"Toothpaste","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Comb","emoji":"🪮","bgColor":"#212121"},{"letter":"H","word":"Hair Dryer","emoji":"💨","bgColor":"#E91E63"},{"letter":"L","word":"Lotion","emoji":"🧴","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
