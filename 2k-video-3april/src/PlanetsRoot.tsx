import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const PlanetsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Planets1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 1",
          videoId: "planets-1",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 2",
          videoId: "planets-2",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nebula","emoji":"🌌","bgColor":"#E91E63"},{"letter":"B","word":"Black Hole","emoji":"🕳️","bgColor":"#212121"},{"letter":"S","word":"Supernova","emoji":"💥","bgColor":"#FF5722"},{"letter":"C","word":"Constellation","emoji":"✨","bgColor":"#311B92"},{"letter":"M","word":"Meteor","emoji":"☄️","bgColor":"#FF6F00"},{"letter":"S","word":"Satellite","emoji":"🛰️","bgColor":"#607D8B"},{"letter":"S","word":"Space Station","emoji":"🛸","bgColor":"#455A64"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#D32F2F"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#5D4037"},{"letter":"O","word":"Orbit","emoji":"🔄","bgColor":"#0288D1"},{"letter":"E","word":"Eclipse","emoji":"🌑","bgColor":"#212121"},{"letter":"S","word":"Solar System","emoji":"🌞","bgColor":"#FFB300"},{"letter":"M","word":"Milky Way","emoji":"🌌","bgColor":"#9575CD"},{"letter":"D","word":"Dwarf Planet","emoji":"🌑","bgColor":"#795548"},{"letter":"L","word":"Lunar","emoji":"🌕","bgColor":"#E0E0E0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 3",
          videoId: "planets-3",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"S","word":"Shooting Star","emoji":"🌠","bgColor":"#FDD835"},{"letter":"C","word":"Crater","emoji":"🌑","bgColor":"#607D8B"},{"letter":"A","word":"Astronaut","emoji":"👩‍🚀","bgColor":"#F5F5F5"},{"letter":"R","word":"Red Giant","emoji":"🔴","bgColor":"#C62828"},{"letter":"W","word":"White Dwarf","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"P","word":"Pulsar","emoji":"💫","bgColor":"#00BCD4"},{"letter":"Q","word":"Quasar","emoji":"✨","bgColor":"#7B1FA2"},{"letter":"N","word":"North Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"B","word":"Big Bang","emoji":"💥","bgColor":"#FF5722"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#4CAF50"},{"letter":"H","word":"Hubble","emoji":"🔭","bgColor":"#1565C0"},{"letter":"V","word":"Void","emoji":"🕳️","bgColor":"#212121"},{"letter":"C","word":"Cosmos","emoji":"🌌","bgColor":"#311B92"},{"letter":"Z","word":"Zodiac","emoji":"♈","bgColor":"#9C27B0"},{"letter":"I","word":"Io Moon","emoji":"🌕","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 4",
          videoId: "planets-4",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 5",
          videoId: "planets-5",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 6",
          videoId: "planets-6",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 7",
          videoId: "planets-7",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 8",
          videoId: "planets-8",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 9",
          videoId: "planets-9",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 10",
          videoId: "planets-10",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 11",
          videoId: "planets-11",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 12",
          videoId: "planets-12",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 13",
          videoId: "planets-13",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 14",
          videoId: "planets-14",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 15",
          videoId: "planets-15",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 16",
          videoId: "planets-16",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 17",
          videoId: "planets-17",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 18",
          videoId: "planets-18",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 19",
          videoId: "planets-19",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 20",
          videoId: "planets-20",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 21",
          videoId: "planets-21",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 22",
          videoId: "planets-22",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 23",
          videoId: "planets-23",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 24",
          videoId: "planets-24",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 25",
          videoId: "planets-25",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 26",
          videoId: "planets-26",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 27",
          videoId: "planets-27",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 28",
          videoId: "planets-28",
          bgGradient: ["#311B92","#B39DDB"] as [string, string],
          accentColor: "#1A0A5E",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 29",
          videoId: "planets-29",
          bgGradient: ["#0D47A1","#90CAF9"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Planets30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Objects - Part 30",
          videoId: "planets-30",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Mercury","emoji":"☿️","bgColor":"#9E9E9E"},{"letter":"V","word":"Venus","emoji":"🌟","bgColor":"#FFB300"},{"letter":"E","word":"Earth","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Mars","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"J","word":"Jupiter","emoji":"🪐","bgColor":"#FF8F00"},{"letter":"S","word":"Saturn","emoji":"🪐","bgColor":"#FFB74D"},{"letter":"U","word":"Uranus","emoji":"🌐","bgColor":"#00BCD4"},{"letter":"N","word":"Neptune","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Pluto","emoji":"⚫","bgColor":"#607D8B"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FDD835"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#E0E0E0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#42A5F5"},{"letter":"A","word":"Asteroid","emoji":"🪨","bgColor":"#795548"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
