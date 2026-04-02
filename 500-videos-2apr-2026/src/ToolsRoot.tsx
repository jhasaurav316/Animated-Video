import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const ToolsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Tools1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 1",
          videoId: "tools-1",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 2",
          videoId: "tools-2",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Magnifying Glass","emoji":"🔍","bgColor":"#FFB300"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#C62828"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#1565C0"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FBC02D"},{"letter":"L","word":"Lock","emoji":"🔒","bgColor":"#FFB300"},{"letter":"K","word":"Key","emoji":"🔑","bgColor":"#FF8F00"},{"letter":"C","word":"Chain","emoji":"⛓️","bgColor":"#607D8B"},{"letter":"B","word":"Bolt","emoji":"🔩","bgColor":"#455A64"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"P","word":"Paint Brush","emoji":"🖌️","bgColor":"#E91E63"},{"letter":"M","word":"Measuring Tape","emoji":"📐","bgColor":"#FBC02D"},{"letter":"L","word":"Level","emoji":"📐","bgColor":"#4CAF50"},{"letter":"S","word":"Spanner","emoji":"🔧","bgColor":"#546E7A"},{"letter":"C","word":"Clamp","emoji":"🗜️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 3",
          videoId: "tools-3",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"V","word":"Vice","emoji":"🗜️","bgColor":"#37474F"},{"letter":"F","word":"File","emoji":"📁","bgColor":"#795548"},{"letter":"P","word":"Plunger","emoji":"🪠","bgColor":"#C62828"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0277BD"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#388E3C"},{"letter":"J","word":"Jack","emoji":"🏗️","bgColor":"#FF6F00"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 4",
          videoId: "tools-4",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 5",
          videoId: "tools-5",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 6",
          videoId: "tools-6",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 7",
          videoId: "tools-7",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 8",
          videoId: "tools-8",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 9",
          videoId: "tools-9",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 10",
          videoId: "tools-10",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 11",
          videoId: "tools-11",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 12",
          videoId: "tools-12",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 13",
          videoId: "tools-13",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 14",
          videoId: "tools-14",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 15",
          videoId: "tools-15",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 16",
          videoId: "tools-16",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 17",
          videoId: "tools-17",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 18",
          videoId: "tools-18",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 19",
          videoId: "tools-19",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 20",
          videoId: "tools-20",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 21",
          videoId: "tools-21",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 22",
          videoId: "tools-22",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 23",
          videoId: "tools-23",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 24",
          videoId: "tools-24",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 25",
          videoId: "tools-25",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 26",
          videoId: "tools-26",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 27",
          videoId: "tools-27",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 28",
          videoId: "tools-28",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 29",
          videoId: "tools-29",
          bgGradient: ["#F57F17","#FFF176"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Tools30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tools & Equipment - Part 30",
          videoId: "tools-30",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"H","word":"Hammer","emoji":"🔨","bgColor":"#795548"},{"letter":"S","word":"Screwdriver","emoji":"🪛","bgColor":"#1565C0"},{"letter":"W","word":"Wrench","emoji":"🔧","bgColor":"#607D8B"},{"letter":"S","word":"Saw","emoji":"🪚","bgColor":"#5D4037"},{"letter":"D","word":"Drill","emoji":"🔩","bgColor":"#37474F"},{"letter":"P","word":"Pliers","emoji":"🔧","bgColor":"#455A64"},{"letter":"N","word":"Nail","emoji":"📌","bgColor":"#9E9E9E"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#C62828"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#1565C0"},{"letter":"T","word":"Tape","emoji":"🪡","bgColor":"#FBC02D"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF8F00"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#5D4037"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#8D6E63"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
