import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ScienceWordsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ScienceWords1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 1",
          videoId: "science-words-1",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 2",
          videoId: "science-words-2",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#311B92"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#0288D1"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"F","word":"Fossil","emoji":"🦴","bgColor":"#795548"},{"letter":"E","word":"Earthquake","emoji":"🌍","bgColor":"#5D4037"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"C","word":"Crystal","emoji":"💎","bgColor":"#00BCD4"},{"letter":"E","word":"Electricity","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"O","word":"Oxygen","emoji":"💨","bgColor":"#90CAF9"},{"letter":"H","word":"Hydrogen","emoji":"💧","bgColor":"#0288D1"},{"letter":"N","word":"Newton","emoji":"🍎","bgColor":"#2E7D32"},{"letter":"E","word":"Einstein","emoji":"🧠","bgColor":"#607D8B"},{"letter":"L","word":"Laboratory","emoji":"🔬","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 3",
          videoId: "science-words-3",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Prism","emoji":"🔺","bgColor":"#7B1FA2"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0288D1"},{"letter":"F","word":"Force","emoji":"💪","bgColor":"#FF6F00"},{"letter":"S","word":"Speed","emoji":"🏎️","bgColor":"#D32F2F"},{"letter":"T","word":"Temperature","emoji":"🌡️","bgColor":"#FF5722"},{"letter":"P","word":"Pressure","emoji":"⬇️","bgColor":"#455A64"},{"letter":"C","word":"Chemical","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"R","word":"Reaction","emoji":"💥","bgColor":"#FF5722"},{"letter":"G","word":"Gene","emoji":"🧬","bgColor":"#7B1FA2"},{"letter":"E","word":"Evolution","emoji":"🐒","bgColor":"#795548"},{"letter":"S","word":"Solar","emoji":"☀️","bgColor":"#FFB300"},{"letter":"N","word":"Nucleus","emoji":"⚛️","bgColor":"#D32F2F"},{"letter":"P","word":"Photon","emoji":"💡","bgColor":"#FDD835"},{"letter":"Q","word":"Quantum","emoji":"⚛️","bgColor":"#311B92"},{"letter":"I","word":"Invention","emoji":"💡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 4",
          videoId: "science-words-4",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 5",
          videoId: "science-words-5",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 6",
          videoId: "science-words-6",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 7",
          videoId: "science-words-7",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 8",
          videoId: "science-words-8",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 9",
          videoId: "science-words-9",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 10",
          videoId: "science-words-10",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 11",
          videoId: "science-words-11",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 12",
          videoId: "science-words-12",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 13",
          videoId: "science-words-13",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 14",
          videoId: "science-words-14",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 15",
          videoId: "science-words-15",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 16",
          videoId: "science-words-16",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 17",
          videoId: "science-words-17",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 18",
          videoId: "science-words-18",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 19",
          videoId: "science-words-19",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 20",
          videoId: "science-words-20",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 21",
          videoId: "science-words-21",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 22",
          videoId: "science-words-22",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 23",
          videoId: "science-words-23",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 24",
          videoId: "science-words-24",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 25",
          videoId: "science-words-25",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 26",
          videoId: "science-words-26",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 27",
          videoId: "science-words-27",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 28",
          videoId: "science-words-28",
          bgGradient: ["#00838F","#80DEEA"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 29",
          videoId: "science-words-29",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ScienceWords30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Science Words - Part 30",
          videoId: "science-words-30",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Atom","emoji":"⚛️","bgColor":"#0288D1"},{"letter":"M","word":"Molecule","emoji":"🧬","bgColor":"#4CAF50"},{"letter":"E","word":"Energy","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Gravity","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"M","word":"Magnet","emoji":"🧲","bgColor":"#D32F2F"},{"letter":"L","word":"Light","emoji":"💡","bgColor":"#FDD835"},{"letter":"S","word":"Sound","emoji":"🔊","bgColor":"#1565C0"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"T","word":"Telescope","emoji":"🔭","bgColor":"#311B92"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"B","word":"Beaker","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"D","word":"DNA","emoji":"🧬","bgColor":"#0288D1"},{"letter":"C","word":"Cell","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"P","word":"Planet","emoji":"🪐","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
