import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const BeachRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Beach1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 1",
          videoId: "beach-1",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 2",
          videoId: "beach-2",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#9C27B0"},{"letter":"L","word":"Lifeguard","emoji":"🏊","bgColor":"#D32F2F"},{"letter":"S","word":"Snorkel","emoji":"🤿","bgColor":"#00BCD4"},{"letter":"O","word":"Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"S","word":"Sand Dollar","emoji":"🪙","bgColor":"#FFB74D"},{"letter":"C","word":"Coconut","emoji":"🥥","bgColor":"#5D4037"},{"letter":"H","word":"Hammock","emoji":"🏖️","bgColor":"#4CAF50"},{"letter":"T","word":"Tide Pool","emoji":"🪸","bgColor":"#00838F"},{"letter":"S","word":"Sunset","emoji":"🌅","bgColor":"#FF5722"},{"letter":"P","word":"Pier","emoji":"🏗️","bgColor":"#795548"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#D32F2F"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 3",
          videoId: "beach-3",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"A","word":"Anchor","emoji":"⚓","bgColor":"#455A64"},{"letter":"B","word":"Buoy","emoji":"🟡","bgColor":"#FDD835"},{"letter":"C","word":"Coral","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"R","word":"Raft","emoji":"🛟","bgColor":"#FF5722"},{"letter":"S","word":"Scuba Diving","emoji":"🤿","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"N","word":"Nautilus","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"G","word":"Gull","emoji":"🐦","bgColor":"#F5F5F5"},{"letter":"V","word":"Volleyball","emoji":"🏐","bgColor":"#FFB300"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"E","word":"Estuary","emoji":"🌊","bgColor":"#00695C"},{"letter":"D","word":"Driftwood","emoji":"🪵","bgColor":"#795548"},{"letter":"Z","word":"Zen Garden","emoji":"🪨","bgColor":"#607D8B"},{"letter":"Y","word":"Yacht","emoji":"🛥️","bgColor":"#F5F5F5"},{"letter":"X","word":"X Marks Spot","emoji":"❌","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 4",
          videoId: "beach-4",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 5",
          videoId: "beach-5",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 6",
          videoId: "beach-6",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 7",
          videoId: "beach-7",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 8",
          videoId: "beach-8",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 9",
          videoId: "beach-9",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 10",
          videoId: "beach-10",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 11",
          videoId: "beach-11",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 12",
          videoId: "beach-12",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 13",
          videoId: "beach-13",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 14",
          videoId: "beach-14",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 15",
          videoId: "beach-15",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 16",
          videoId: "beach-16",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 17",
          videoId: "beach-17",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 18",
          videoId: "beach-18",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 19",
          videoId: "beach-19",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 20",
          videoId: "beach-20",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 21",
          videoId: "beach-21",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 22",
          videoId: "beach-22",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 23",
          videoId: "beach-23",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 24",
          videoId: "beach-24",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 25",
          videoId: "beach-25",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 26",
          videoId: "beach-26",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 27",
          videoId: "beach-27",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 28",
          videoId: "beach-28",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 29",
          videoId: "beach-29",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Beach30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beach & Seaside - Part 30",
          videoId: "beach-30",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Sand","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#00BCD4"},{"letter":"U","word":"Umbrella","emoji":"⛱️","bgColor":"#D32F2F"},{"letter":"S","word":"Sunglasses","emoji":"😎","bgColor":"#212121"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"P","word":"Palm Tree","emoji":"🌴","bgColor":"#2E7D32"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"B","word":"Beach Ball","emoji":"🏐","bgColor":"#E91E63"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"T","word":"Towel","emoji":"🏖️","bgColor":"#E91E63"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
