import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const UnderwaterRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Underwater1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 1",
          videoId: "underwater-1",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 2",
          videoId: "underwater-2",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Coral","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"A","word":"Anemone","emoji":"🌺","bgColor":"#E91E63"},{"letter":"K","word":"Kelp","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"S","word":"Shrimp","emoji":"🦐","bgColor":"#FF6F00"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"S","word":"Swordfish","emoji":"🐟","bgColor":"#0277BD"},{"letter":"M","word":"Manatee","emoji":"🐋","bgColor":"#607D8B"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"H","word":"Hammerhead","emoji":"🦈","bgColor":"#455A64"},{"letter":"M","word":"Manta Ray","emoji":"🐟","bgColor":"#37474F"},{"letter":"B","word":"Blue Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Sea Urchin","emoji":"🦔","bgColor":"#37474F"},{"letter":"C","word":"Clam","emoji":"🐚","bgColor":"#9E9E9E"},{"letter":"O","word":"Oyster","emoji":"🦪","bgColor":"#BDBDBD"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 3",
          videoId: "underwater-3",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"S","word":"Sea Lion","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Angelfish","emoji":"🐠","bgColor":"#FFB300"},{"letter":"B","word":"Barracuda","emoji":"🐟","bgColor":"#455A64"},{"letter":"G","word":"Grouper","emoji":"🐟","bgColor":"#5D4037"},{"letter":"T","word":"Triggerfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Whale Shark","emoji":"🦈","bgColor":"#0D47A1"},{"letter":"D","word":"Dugong","emoji":"🐋","bgColor":"#607D8B"},{"letter":"F","word":"Flounder","emoji":"🐟","bgColor":"#A1887F"},{"letter":"S","word":"Stingray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"M","word":"Moray Eel","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"P","word":"Plankton","emoji":"🦠","bgColor":"#4CAF50"},{"letter":"S","word":"Sea Cucumber","emoji":"🥒","bgColor":"#5D4037"},{"letter":"H","word":"Horseshoe Crab","emoji":"🦀","bgColor":"#795548"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"T","word":"Tuna","emoji":"🐟","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 4",
          videoId: "underwater-4",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 5",
          videoId: "underwater-5",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 6",
          videoId: "underwater-6",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 7",
          videoId: "underwater-7",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 8",
          videoId: "underwater-8",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 9",
          videoId: "underwater-9",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 10",
          videoId: "underwater-10",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 11",
          videoId: "underwater-11",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 12",
          videoId: "underwater-12",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 13",
          videoId: "underwater-13",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 14",
          videoId: "underwater-14",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 15",
          videoId: "underwater-15",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 16",
          videoId: "underwater-16",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 17",
          videoId: "underwater-17",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 18",
          videoId: "underwater-18",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 19",
          videoId: "underwater-19",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 20",
          videoId: "underwater-20",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 21",
          videoId: "underwater-21",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 22",
          videoId: "underwater-22",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 23",
          videoId: "underwater-23",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 24",
          videoId: "underwater-24",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 25",
          videoId: "underwater-25",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 26",
          videoId: "underwater-26",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 27",
          videoId: "underwater-27",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 28",
          videoId: "underwater-28",
          bgGradient: ["#0277BD","#4FC3F7"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 29",
          videoId: "underwater-29",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Underwater30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Underwater World - Part 30",
          videoId: "underwater-30",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D1257",
          letters: [{"letter":"D","word":"Dolphin","emoji":"🐬","bgColor":"#0288D1"},{"letter":"W","word":"Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"S","word":"Shark","emoji":"🦈","bgColor":"#455A64"},{"letter":"O","word":"Octopus","emoji":"🐙","bgColor":"#7B1FA2"},{"letter":"J","word":"Jellyfish","emoji":"🪼","bgColor":"#F48FB1"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"C","word":"Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"L","word":"Lobster","emoji":"🦞","bgColor":"#C62828"},{"letter":"S","word":"Squid","emoji":"🦑","bgColor":"#E91E63"},{"letter":"R","word":"Ray","emoji":"🐟","bgColor":"#607D8B"},{"letter":"E","word":"Eel","emoji":"🐍","bgColor":"#37474F"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FBC02D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
