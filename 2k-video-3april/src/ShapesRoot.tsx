import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ShapesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Shapes1"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 1",
          videoId: "shapes-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Shapes2"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 2",
          videoId: "shapes-2",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sphere","emoji":"🔵","bgColor":"#2196F3"},{"letter":"C","word":"Cylinder","emoji":"🥫","bgColor":"#FF6F00"},{"letter":"C","word":"Cone","emoji":"🍦","bgColor":"#FFB300"},{"letter":"P","word":"Pyramid","emoji":"🔺","bgColor":"#FF8F00"},{"letter":"S","word":"Spiral","emoji":"🌀","bgColor":"#7B1FA2"},{"letter":"R","word":"Ring","emoji":"💍","bgColor":"#FFD54F"},{"letter":"T","word":"Trapezoid","emoji":"🔶","bgColor":"#FF6F00"},{"letter":"P","word":"Parallelogram","emoji":"▱","bgColor":"#4CAF50"},{"letter":"R","word":"Rhombus","emoji":"🔷","bgColor":"#1565C0"},{"letter":"S","word":"Semicircle","emoji":"🌗","bgColor":"#607D8B"},{"letter":"K","word":"Kite Shape","emoji":"🪁","bgColor":"#FF9800"},{"letter":"Z","word":"Zigzag","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0288D1"},{"letter":"D","word":"Dot","emoji":"⚫","bgColor":"#212121"},{"letter":"L","word":"Line","emoji":"➖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="Shapes3"
        component={AlphabetLongTemplate}
        durationInFrames={3330}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 3",
          videoId: "shapes-3",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Heptagon","emoji":"⬡","bgColor":"#4CAF50"},{"letter":"N","word":"Nonagon","emoji":"⬡","bgColor":"#E91E63"},{"letter":"D","word":"Decagon","emoji":"⬡","bgColor":"#FF6F00"},{"letter":"E","word":"Ellipse","emoji":"⭕","bgColor":"#9C27B0"},{"letter":"P","word":"Prism","emoji":"🔺","bgColor":"#00BCD4"},{"letter":"T","word":"Torus","emoji":"🍩","bgColor":"#FF5722"},{"letter":"A","word":"Arc","emoji":"🌈","bgColor":"#E91E63"},{"letter":"C","word":"Chord","emoji":"🎵","bgColor":"#1565C0"},{"letter":"R","word":"Radius","emoji":"📏","bgColor":"#4CAF50"},{"letter":"S","word":"Sector","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Compass Rose","emoji":"🧭","bgColor":"#0277BD"},{"letter":"I","word":"Infinity","emoji":"♾️","bgColor":"#7B1FA2"},{"letter":"F","word":"Four Leaf","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"M","word":"Moon Shape","emoji":"🌙","bgColor":"#FDD835"},{"letter":"B","word":"Bowtie","emoji":"🎀","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 111,
        }}
      />
      <Composition
        id="Shapes4"
        component={AlphabetLongTemplate}
        durationInFrames={4650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 4",
          videoId: "shapes-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 155,
        }}
      />
      <Composition
        id="Shapes5"
        component={AlphabetLongTemplate}
        durationInFrames={3390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 5",
          videoId: "shapes-5",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 113,
        }}
      />
      <Composition
        id="Shapes6"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 6",
          videoId: "shapes-6",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="Shapes7"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 7",
          videoId: "shapes-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="Shapes8"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 8",
          videoId: "shapes-8",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="Shapes9"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 9",
          videoId: "shapes-9",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="Shapes10"
        component={AlphabetLongTemplate}
        durationInFrames={4860}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 10",
          videoId: "shapes-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 162,
        }}
      />
      <Composition
        id="Shapes11"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 11",
          videoId: "shapes-11",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Shapes12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 12",
          videoId: "shapes-12",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Shapes13"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 13",
          videoId: "shapes-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="Shapes14"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 14",
          videoId: "shapes-14",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="Shapes15"
        component={AlphabetLongTemplate}
        durationInFrames={3750}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 15",
          videoId: "shapes-15",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 125,
        }}
      />
      <Composition
        id="Shapes16"
        component={AlphabetLongTemplate}
        durationInFrames={5070}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 16",
          videoId: "shapes-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 169,
        }}
      />
      <Composition
        id="Shapes17"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 17",
          videoId: "shapes-17",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="Shapes18"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 18",
          videoId: "shapes-18",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="Shapes19"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 19",
          videoId: "shapes-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="Shapes20"
        component={AlphabetLongTemplate}
        durationInFrames={5220}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 20",
          videoId: "shapes-20",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 174,
        }}
      />
      <Composition
        id="Shapes21"
        component={AlphabetLongTemplate}
        durationInFrames={3960}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 21",
          videoId: "shapes-21",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 132,
        }}
      />
      <Composition
        id="Shapes22"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 22",
          videoId: "shapes-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="Shapes23"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 23",
          videoId: "shapes-23",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="Shapes24"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 24",
          videoId: "shapes-24",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="Shapes25"
        component={AlphabetLongTemplate}
        durationInFrames={4110}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 25",
          videoId: "shapes-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 137,
        }}
      />
      <Composition
        id="Shapes26"
        component={AlphabetLongTemplate}
        durationInFrames={2850}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 26",
          videoId: "shapes-26",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 95,
        }}
      />
      <Composition
        id="Shapes27"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 27",
          videoId: "shapes-27",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="Shapes28"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 28",
          videoId: "shapes-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="Shapes29"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 29",
          videoId: "shapes-29",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="Shapes30"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes - Part 30",
          videoId: "shapes-30",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Circle","emoji":"⭕","bgColor":"#E91E63"},{"letter":"S","word":"Square","emoji":"🟧","bgColor":"#FF9800"},{"letter":"T","word":"Triangle","emoji":"🔺","bgColor":"#D32F2F"},{"letter":"R","word":"Rectangle","emoji":"🟦","bgColor":"#1565C0"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#E91E63"},{"letter":"D","word":"Diamond","emoji":"💎","bgColor":"#00BCD4"},{"letter":"O","word":"Oval","emoji":"🥚","bgColor":"#FFB300"},{"letter":"P","word":"Pentagon","emoji":"⬠","bgColor":"#4CAF50"},{"letter":"H","word":"Hexagon","emoji":"⬡","bgColor":"#7B1FA2"},{"letter":"O","word":"Octagon","emoji":"🛑","bgColor":"#D32F2F"},{"letter":"A","word":"Arrow","emoji":"➡️","bgColor":"#1565C0"},{"letter":"C","word":"Crescent","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Cross","emoji":"✝️","bgColor":"#D32F2F"},{"letter":"C","word":"Cube","emoji":"🧊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
    </>
  );
};
