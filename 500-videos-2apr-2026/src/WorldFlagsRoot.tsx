import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const WorldFlagsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="WorldFlags1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 1",
          videoId: "world-flags-1",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 2",
          videoId: "world-flags-2",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"E","word":"Egypt","emoji":"🇪🇬","bgColor":"#212121"},{"letter":"S","word":"South Africa","emoji":"🇿🇦","bgColor":"#2E7D32"},{"letter":"T","word":"Turkey","emoji":"🇹🇷","bgColor":"#C62828"},{"letter":"G","word":"Greece","emoji":"🇬🇷","bgColor":"#1565C0"},{"letter":"S","word":"Sweden","emoji":"🇸🇪","bgColor":"#1565C0"},{"letter":"N","word":"Norway","emoji":"🇳🇴","bgColor":"#C62828"},{"letter":"S","word":"Switzerland","emoji":"🇨🇭","bgColor":"#C62828"},{"letter":"P","word":"Portugal","emoji":"🇵🇹","bgColor":"#2E7D32"},{"letter":"A","word":"Argentina","emoji":"🇦🇷","bgColor":"#00BCD4"},{"letter":"N","word":"New Zealand","emoji":"🇳🇿","bgColor":"#1565C0"},{"letter":"K","word":"Kenya","emoji":"🇰🇪","bgColor":"#212121"},{"letter":"T","word":"Thailand","emoji":"🇹🇭","bgColor":"#1565C0"},{"letter":"V","word":"Vietnam","emoji":"🇻🇳","bgColor":"#C62828"},{"letter":"I","word":"Indonesia","emoji":"🇮🇩","bgColor":"#C62828"},{"letter":"P","word":"Peru","emoji":"🇵🇪","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 3",
          videoId: "world-flags-3",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 4",
          videoId: "world-flags-4",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 5",
          videoId: "world-flags-5",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 6",
          videoId: "world-flags-6",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 7",
          videoId: "world-flags-7",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 8",
          videoId: "world-flags-8",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 9",
          videoId: "world-flags-9",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 10",
          videoId: "world-flags-10",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 11",
          videoId: "world-flags-11",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 12",
          videoId: "world-flags-12",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 13",
          videoId: "world-flags-13",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 14",
          videoId: "world-flags-14",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WorldFlags15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Flags - Part 15",
          videoId: "world-flags-15",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#0D47A1"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#C62828"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"A","word":"Australia","emoji":"🇦🇺","bgColor":"#0D47A1"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#C62828"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#C62828"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#1565C0"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
