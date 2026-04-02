import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const RainforestRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Rainforest1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 1",
          videoId: "rainforest-1",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 2",
          videoId: "rainforest-2",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Waterfall","emoji":"💧","bgColor":"#0288D1"},{"letter":"O","word":"Orchid","emoji":"🌺","bgColor":"#E91E63"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Moss","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Tree Frog","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"P","word":"Piranha","emoji":"🐟","bgColor":"#D32F2F"},{"letter":"C","word":"Caiman","emoji":"🐊","bgColor":"#33691E"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"},{"letter":"T","word":"Tarantula","emoji":"🕷️","bgColor":"#5D4037"},{"letter":"A","word":"Ant Eater","emoji":"🐜","bgColor":"#607D8B"},{"letter":"H","word":"Howler Monkey","emoji":"🐒","bgColor":"#3E2723"},{"letter":"K","word":"Kapok Tree","emoji":"🌳","bgColor":"#1B5E20"},{"letter":"L","word":"Leaf Cutter Ant","emoji":"🐜","bgColor":"#4CAF50"},{"letter":"B","word":"Bromeliad","emoji":"🌺","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 3",
          videoId: "rainforest-3",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Canopy","emoji":"🌳","bgColor":"#33691E"},{"letter":"S","word":"Spider Monkey","emoji":"🐒","bgColor":"#3E2723"},{"letter":"E","word":"Emerald Boa","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"R","word":"Rubber Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"T","word":"Tapir","emoji":"🐽","bgColor":"#37474F"},{"letter":"H","word":"Hummingbird","emoji":"🐦","bgColor":"#4CAF50"},{"letter":"P","word":"Poison Dart Frog","emoji":"🐸","bgColor":"#FDD835"},{"letter":"D","word":"Dragonfly","emoji":"🪰","bgColor":"#00BCD4"},{"letter":"N","word":"Nutmeg Tree","emoji":"🌳","bgColor":"#8D6E63"},{"letter":"L","word":"Lemur","emoji":"🐒","bgColor":"#607D8B"},{"letter":"C","word":"Capybara","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"F","word":"Fig Tree","emoji":"🌳","bgColor":"#4CAF50"},{"letter":"S","word":"Strangler Fig","emoji":"🌳","bgColor":"#33691E"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"M","word":"Mandrill","emoji":"🐒","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 4",
          videoId: "rainforest-4",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 5",
          videoId: "rainforest-5",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 6",
          videoId: "rainforest-6",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 7",
          videoId: "rainforest-7",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 8",
          videoId: "rainforest-8",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 9",
          videoId: "rainforest-9",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 10",
          videoId: "rainforest-10",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 11",
          videoId: "rainforest-11",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 12",
          videoId: "rainforest-12",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 13",
          videoId: "rainforest-13",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 14",
          videoId: "rainforest-14",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 15",
          videoId: "rainforest-15",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 16",
          videoId: "rainforest-16",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 17",
          videoId: "rainforest-17",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 18",
          videoId: "rainforest-18",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 19",
          videoId: "rainforest-19",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 20",
          videoId: "rainforest-20",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 21",
          videoId: "rainforest-21",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 22",
          videoId: "rainforest-22",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 23",
          videoId: "rainforest-23",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 24",
          videoId: "rainforest-24",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 25",
          videoId: "rainforest-25",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 26",
          videoId: "rainforest-26",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 27",
          videoId: "rainforest-27",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 28",
          videoId: "rainforest-28",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 29",
          videoId: "rainforest-29",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rainforest30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest - Part 30",
          videoId: "rainforest-30",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Cocoa Tree","emoji":"🌳","bgColor":"#5D4037"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"R","word":"River","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
