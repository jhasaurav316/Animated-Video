import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ToolsWorkshopRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ToolsWorkshop1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 1",
          videoId: "tools-workshop-1",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 2",
          videoId: "tools-workshop-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"V","word":"Vise","emoji":"🗜️","bgColor":"#607D8B"},{"letter":"C","word":"Chisel","emoji":"🔪","bgColor":"#795548"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#D32F2F"},{"letter":"H","word":"Hacksaw","emoji":"🪚","bgColor":"#455A64"},{"letter":"F","word":"File","emoji":"📂","bgColor":"#607D8B"},{"letter":"W","word":"Wire Cutter","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"P","word":"Power Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"S","word":"Staple Gun","emoji":"🔫","bgColor":"#455A64"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FFB300"},{"letter":"T","word":"Toolbox","emoji":"🧰","bgColor":"#D32F2F"},{"letter":"M","word":"Mallet","emoji":"🔨","bgColor":"#5D4037"},{"letter":"B","word":"Bolt","emoji":"🔩","bgColor":"#9E9E9E"},{"letter":"W","word":"Washer","emoji":"⭕","bgColor":"#B0BEC5"},{"letter":"N","word":"Nut Bolt","emoji":"🔩","bgColor":"#607D8B"},{"letter":"R","word":"Ratchet","emoji":"🔧","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 3",
          videoId: "tools-workshop-3",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"J","word":"Jigsaw","emoji":"🧩","bgColor":"#FF6F00"},{"letter":"C","word":"Circular Saw","emoji":"🪚","bgColor":"#D32F2F"},{"letter":"S","word":"Socket Set","emoji":"🔧","bgColor":"#607D8B"},{"letter":"D","word":"Duct Tape","emoji":"🟦","bgColor":"#607D8B"},{"letter":"E","word":"Electrical Tape","emoji":"⚡","bgColor":"#212121"},{"letter":"P","word":"Plumber Wrench","emoji":"🔧","bgColor":"#1565C0"},{"letter":"G","word":"Grinder","emoji":"⚙️","bgColor":"#455A64"},{"letter":"I","word":"Impact Driver","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"U","word":"Utility Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"K","word":"Keyhole Saw","emoji":"🪚","bgColor":"#795548"},{"letter":"O","word":"Oil Can","emoji":"🛢️","bgColor":"#5D4037"},{"letter":"Z","word":"Zip Tie","emoji":"🟦","bgColor":"#0288D1"},{"letter":"X","word":"X-Acto Knife","emoji":"🔪","bgColor":"#607D8B"},{"letter":"Y","word":"Yard Stick","emoji":"📏","bgColor":"#FFB300"},{"letter":"Q","word":"Quick Clamp","emoji":"🗜️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 4",
          videoId: "tools-workshop-4",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 5",
          videoId: "tools-workshop-5",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 6",
          videoId: "tools-workshop-6",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 7",
          videoId: "tools-workshop-7",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 8",
          videoId: "tools-workshop-8",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 9",
          videoId: "tools-workshop-9",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 10",
          videoId: "tools-workshop-10",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 11",
          videoId: "tools-workshop-11",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 12",
          videoId: "tools-workshop-12",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 13",
          videoId: "tools-workshop-13",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 14",
          videoId: "tools-workshop-14",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 15",
          videoId: "tools-workshop-15",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 16",
          videoId: "tools-workshop-16",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 17",
          videoId: "tools-workshop-17",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 18",
          videoId: "tools-workshop-18",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 19",
          videoId: "tools-workshop-19",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 20",
          videoId: "tools-workshop-20",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 21",
          videoId: "tools-workshop-21",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 22",
          videoId: "tools-workshop-22",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 23",
          videoId: "tools-workshop-23",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 24",
          videoId: "tools-workshop-24",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 25",
          videoId: "tools-workshop-25",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 26",
          videoId: "tools-workshop-26",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 27",
          videoId: "tools-workshop-27",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 28",
          videoId: "tools-workshop-28",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 29",
          videoId: "tools-workshop-29",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ToolsWorkshop30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Workshop Tools - Part 30",
          videoId: "tools-workshop-30",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#FF6F00"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#8D6E63"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#FF8F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Screw","emoji":"🔩","bgColor":"#607D8B"},{"letter":"T","word":"Tape Measure","emoji":"📏","bgColor":"#FDD835"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"},{"letter":"S","word":"Sandpaper","emoji":"📄","bgColor":"#FFB74D"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#1565C0"},{"letter":"R","word":"Roller","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"G","word":"Glue Gun","emoji":"🔫","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
