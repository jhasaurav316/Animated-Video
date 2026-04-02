import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const TropicalFishRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TropicalFish1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 1",
          videoId: "tropical-fish-1",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 2",
          videoId: "tropical-fish-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FFB300"},{"letter":"O","word":"Oscar Fish","emoji":"🐟","bgColor":"#5D4037"},{"letter":"C","word":"Cichlid","emoji":"🐟","bgColor":"#1565C0"},{"letter":"R","word":"Rainbowfish","emoji":"🐟","bgColor":"#E91E63"},{"letter":"B","word":"Butterflyfish","emoji":"🐟","bgColor":"#FDD835"},{"letter":"T","word":"Triggerfish","emoji":"🐟","bgColor":"#0277BD"},{"letter":"W","word":"Wrasse","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"D","word":"Damselfish","emoji":"🐟","bgColor":"#42A5F5"},{"letter":"G","word":"Goby Fish","emoji":"🐟","bgColor":"#FFB74D"},{"letter":"H","word":"Hawkfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"J","word":"Jawfish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"K","word":"Koi Fish","emoji":"🐟","bgColor":"#FF5722"},{"letter":"E","word":"Electric Eel","emoji":"⚡","bgColor":"#FDD835"},{"letter":"F","word":"Flounder","emoji":"🐟","bgColor":"#8D6E63"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 3",
          videoId: "tropical-fish-3",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Cardinal Tetra","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"Z","word":"Zebrafish","emoji":"🐟","bgColor":"#212121"},{"letter":"B","word":"Blenny Fish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Surgeonfish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"R","word":"Regal Tang","emoji":"🐟","bgColor":"#0277BD"},{"letter":"A","word":"Arowana","emoji":"🐟","bgColor":"#FFB300"},{"letter":"C","word":"Corydoras","emoji":"🐟","bgColor":"#607D8B"},{"letter":"I","word":"Idol Fish","emoji":"🐟","bgColor":"#FDD835"},{"letter":"U","word":"Unicorn Fish","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"N","word":"Napoleon Wrasse","emoji":"🐟","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow Tang","emoji":"🐟","bgColor":"#FDD835"},{"letter":"L","word":"Lyretail","emoji":"🐟","bgColor":"#E91E63"},{"letter":"F","word":"Foxface Fish","emoji":"🐟","bgColor":"#FDD835"},{"letter":"V","word":"Violet Goby","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"X","word":"X-Ray Tetra","emoji":"🐟","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 4",
          videoId: "tropical-fish-4",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 5",
          videoId: "tropical-fish-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 6",
          videoId: "tropical-fish-6",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 7",
          videoId: "tropical-fish-7",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 8",
          videoId: "tropical-fish-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 9",
          videoId: "tropical-fish-9",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 10",
          videoId: "tropical-fish-10",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 11",
          videoId: "tropical-fish-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 12",
          videoId: "tropical-fish-12",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 13",
          videoId: "tropical-fish-13",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 14",
          videoId: "tropical-fish-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 15",
          videoId: "tropical-fish-15",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 16",
          videoId: "tropical-fish-16",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 17",
          videoId: "tropical-fish-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 18",
          videoId: "tropical-fish-18",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 19",
          videoId: "tropical-fish-19",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 20",
          videoId: "tropical-fish-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 21",
          videoId: "tropical-fish-21",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 22",
          videoId: "tropical-fish-22",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 23",
          videoId: "tropical-fish-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 24",
          videoId: "tropical-fish-24",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 25",
          videoId: "tropical-fish-25",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 26",
          videoId: "tropical-fish-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 27",
          videoId: "tropical-fish-27",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 28",
          videoId: "tropical-fish-28",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 29",
          videoId: "tropical-fish-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="TropicalFish30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fish - Part 30",
          videoId: "tropical-fish-30",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Clownfish","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"A","word":"Angelfish","emoji":"🐟","bgColor":"#7B1FA2"},{"letter":"B","word":"Betta Fish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"G","word":"Guppy","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"N","word":"Neon Tetra","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"D","word":"Discus","emoji":"🐟","bgColor":"#E91E63"},{"letter":"T","word":"Tang Fish","emoji":"🐟","bgColor":"#1565C0"},{"letter":"P","word":"Pufferfish","emoji":"🐡","bgColor":"#FDD835"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF8F00"},{"letter":"L","word":"Lionfish","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin Fish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"P","word":"Parrotfish","emoji":"🐟","bgColor":"#4CAF50"},{"letter":"S","word":"Swordtail","emoji":"🐟","bgColor":"#FF5722"},{"letter":"M","word":"Molly Fish","emoji":"🐟","bgColor":"#212121"},{"letter":"P","word":"Platy Fish","emoji":"🐟","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
