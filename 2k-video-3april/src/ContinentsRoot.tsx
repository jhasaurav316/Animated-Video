import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ContinentsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Continents1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 1",
          videoId: "continents-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 2",
          videoId: "continents-2",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"I","word":"Italy","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"S","word":"Spain","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"U","word":"UK","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"R","word":"Russia","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"M","word":"Mexico","emoji":"🇲🇽","bgColor":"#2E7D32"},{"letter":"E","word":"Egypt","emoji":"🇪🇬","bgColor":"#FFB300"},{"letter":"K","word":"Kenya","emoji":"🇰🇪","bgColor":"#2E7D32"},{"letter":"N","word":"Nigeria","emoji":"🇳🇬","bgColor":"#2E7D32"},{"letter":"S","word":"South Africa","emoji":"🇿🇦","bgColor":"#FFB300"},{"letter":"A","word":"Argentina","emoji":"🇦🇷","bgColor":"#42A5F5"},{"letter":"T","word":"Thailand","emoji":"🇹🇭","bgColor":"#7B1FA2"},{"letter":"S","word":"South Korea","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"G","word":"Greece","emoji":"🇬🇷","bgColor":"#0288D1"},{"letter":"T","word":"Turkey","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"S","word":"Sweden","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 3",
          videoId: "continents-3",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"N","word":"Norway","emoji":"🇳🇴","bgColor":"#D32F2F"},{"letter":"S","word":"Switzerland","emoji":"🇨🇭","bgColor":"#D32F2F"},{"letter":"P","word":"Portugal","emoji":"🇵🇹","bgColor":"#2E7D32"},{"letter":"N","word":"New Zealand","emoji":"🇳🇿","bgColor":"#1565C0"},{"letter":"I","word":"Iceland","emoji":"🇮🇸","bgColor":"#0288D1"},{"letter":"D","word":"Denmark","emoji":"🇩🇰","bgColor":"#D32F2F"},{"letter":"P","word":"Peru","emoji":"🇵🇪","bgColor":"#D32F2F"},{"letter":"C","word":"Colombia","emoji":"🇨🇴","bgColor":"#FDD835"},{"letter":"I","word":"Ireland","emoji":"🇮🇪","bgColor":"#2E7D32"},{"letter":"V","word":"Vietnam","emoji":"🇻🇳","bgColor":"#D32F2F"},{"letter":"P","word":"Philippines","emoji":"🇵🇭","bgColor":"#1565C0"},{"letter":"M","word":"Morocco","emoji":"🇲🇦","bgColor":"#D32F2F"},{"letter":"C","word":"Chile","emoji":"🇨🇱","bgColor":"#D32F2F"},{"letter":"S","word":"Singapore","emoji":"🇸🇬","bgColor":"#D32F2F"},{"letter":"F","word":"Finland","emoji":"🇫🇮","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 4",
          videoId: "continents-4",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 5",
          videoId: "continents-5",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 6",
          videoId: "continents-6",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 7",
          videoId: "continents-7",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 8",
          videoId: "continents-8",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 9",
          videoId: "continents-9",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 10",
          videoId: "continents-10",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 11",
          videoId: "continents-11",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 12",
          videoId: "continents-12",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 13",
          videoId: "continents-13",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 14",
          videoId: "continents-14",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 15",
          videoId: "continents-15",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 16",
          videoId: "continents-16",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 17",
          videoId: "continents-17",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 18",
          videoId: "continents-18",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 19",
          videoId: "continents-19",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 20",
          videoId: "continents-20",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 21",
          videoId: "continents-21",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 22",
          videoId: "continents-22",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 23",
          videoId: "continents-23",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 24",
          videoId: "continents-24",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 25",
          videoId: "continents-25",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 26",
          videoId: "continents-26",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 27",
          videoId: "continents-27",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 28",
          videoId: "continents-28",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 29",
          videoId: "continents-29",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Continents30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries - Part 30",
          videoId: "continents-30",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Africa","emoji":"🌍","bgColor":"#FF8F00"},{"letter":"A","word":"Asia","emoji":"🌏","bgColor":"#D32F2F"},{"letter":"E","word":"Europe","emoji":"🌍","bgColor":"#1565C0"},{"letter":"N","word":"North America","emoji":"🌎","bgColor":"#2E7D32"},{"letter":"S","word":"South America","emoji":"🌎","bgColor":"#FDD835"},{"letter":"A","word":"Australia","emoji":"🌏","bgColor":"#FF6F00"},{"letter":"A","word":"Antarctica","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"U","word":"USA","emoji":"🇺🇸","bgColor":"#1565C0"},{"letter":"C","word":"Canada","emoji":"🇨🇦","bgColor":"#D32F2F"},{"letter":"B","word":"Brazil","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"I","word":"India","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"C","word":"China","emoji":"🇨🇳","bgColor":"#D32F2F"},{"letter":"J","word":"Japan","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"F","word":"France","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"G","word":"Germany","emoji":"🇩🇪","bgColor":"#212121"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
