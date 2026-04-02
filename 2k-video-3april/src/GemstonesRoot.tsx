import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const GemstonesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Gemstones1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 1",
          videoId: "gemstones-1",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 2",
          videoId: "gemstones-2",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Moonstone","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"O","word":"Onyx","emoji":"⚫","bgColor":"#212121"},{"letter":"T","word":"Tanzanite","emoji":"💎","bgColor":"#311B92"},{"letter":"S","word":"Sunstone","emoji":"☀️","bgColor":"#FF6F00"},{"letter":"Z","word":"Zircon","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Alexandrite","emoji":"💎","bgColor":"#2E7D32"},{"letter":"M","word":"Malachite","emoji":"💚","bgColor":"#1B5E20"},{"letter":"R","word":"Rose Quartz","emoji":"💗","bgColor":"#F48FB1"},{"letter":"C","word":"Crystal","emoji":"💎","bgColor":"#E3F2FD"},{"letter":"H","word":"Heliodor","emoji":"🟡","bgColor":"#FFD54F"},{"letter":"I","word":"Iolite","emoji":"💙","bgColor":"#311B92"},{"letter":"K","word":"Kunzite","emoji":"💗","bgColor":"#F48FB1"},{"letter":"L","word":"Larimar","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"S","word":"Spinel","emoji":"💎","bgColor":"#D32F2F"},{"letter":"B","word":"Beryl","emoji":"💚","bgColor":"#81C784"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 3",
          videoId: "gemstones-3",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"Q","word":"Quartz","emoji":"💎","bgColor":"#E0E0E0"},{"letter":"F","word":"Fluorite","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"C","word":"Carnelian","emoji":"🟠","bgColor":"#FF5722"},{"letter":"J","word":"Jasper","emoji":"🟤","bgColor":"#8D6E63"},{"letter":"A","word":"Agate","emoji":"🟤","bgColor":"#795548"},{"letter":"T","word":"Tiger Eye","emoji":"🐯","bgColor":"#FF8F00"},{"letter":"O","word":"Obsidian","emoji":"⚫","bgColor":"#212121"},{"letter":"N","word":"Nephrite","emoji":"💚","bgColor":"#2E7D32"},{"letter":"U","word":"Unakite","emoji":"💚","bgColor":"#4CAF50"},{"letter":"W","word":"Wulfenite","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"Y","word":"Yellow Beryl","emoji":"🟡","bgColor":"#FDD835"},{"letter":"V","word":"Vesuvianite","emoji":"💚","bgColor":"#4CAF50"},{"letter":"X","word":"Xenotime","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Goldstone","emoji":"✨","bgColor":"#FFB300"},{"letter":"D","word":"Dumortierite","emoji":"💙","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 4",
          videoId: "gemstones-4",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 5",
          videoId: "gemstones-5",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 6",
          videoId: "gemstones-6",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 7",
          videoId: "gemstones-7",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 8",
          videoId: "gemstones-8",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 9",
          videoId: "gemstones-9",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 10",
          videoId: "gemstones-10",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 11",
          videoId: "gemstones-11",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 12",
          videoId: "gemstones-12",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 13",
          videoId: "gemstones-13",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 14",
          videoId: "gemstones-14",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 15",
          videoId: "gemstones-15",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 16",
          videoId: "gemstones-16",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 17",
          videoId: "gemstones-17",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 18",
          videoId: "gemstones-18",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 19",
          videoId: "gemstones-19",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 20",
          videoId: "gemstones-20",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 21",
          videoId: "gemstones-21",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 22",
          videoId: "gemstones-22",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 23",
          videoId: "gemstones-23",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 24",
          videoId: "gemstones-24",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 25",
          videoId: "gemstones-25",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 26",
          videoId: "gemstones-26",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 27",
          videoId: "gemstones-27",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 28",
          videoId: "gemstones-28",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 29",
          videoId: "gemstones-29",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Gemstones30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gemstones & Crystals - Part 30",
          videoId: "gemstones-30",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#B0BEC5"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"A","word":"Amethyst","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Opal","emoji":"🌈","bgColor":"#FF80AB"},{"letter":"T","word":"Topaz","emoji":"🟡","bgColor":"#FFB300"},{"letter":"P","word":"Pearl","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"G","word":"Garnet","emoji":"🔴","bgColor":"#C62828"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#2E7D32"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"A","word":"Aquamarine","emoji":"💙","bgColor":"#4FC3F7"},{"letter":"C","word":"Citrine","emoji":"🟡","bgColor":"#FDD835"},{"letter":"P","word":"Peridot","emoji":"💚","bgColor":"#4CAF50"},{"letter":"L","word":"Lapis Lazuli","emoji":"💙","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
