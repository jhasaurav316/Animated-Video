import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ChristmasRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Christmas1"
        component={AlphabetLongTemplate}
        durationInFrames={2760}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 1",
          videoId: "christmas-1",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 92,
        }}
      />
      <Composition
        id="Christmas2"
        component={AlphabetLongTemplate}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 2",
          videoId: "christmas-2",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Rudolph","emoji":"🦌","bgColor":"#D32F2F"},{"letter":"H","word":"Holly","emoji":"🍃","bgColor":"#2E7D32"},{"letter":"J","word":"Jingle Bells","emoji":"🔔","bgColor":"#FFB300"},{"letter":"S","word":"Snow Globe","emoji":"🔮","bgColor":"#90CAF9"},{"letter":"C","word":"Caroling","emoji":"🎶","bgColor":"#4CAF50"},{"letter":"M","word":"Mistletoe","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"P","word":"Presents","emoji":"🎁","bgColor":"#FF5722"},{"letter":"C","word":"Chimney","emoji":"🏠","bgColor":"#795548"},{"letter":"T","word":"Tinsel","emoji":"✨","bgColor":"#B0BEC5"},{"letter":"O","word":"Ornament","emoji":"🎄","bgColor":"#D32F2F"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"E","word":"Eggnog","emoji":"🥛","bgColor":"#FFB300"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#FF8F00"},{"letter":"G","word":"Garland","emoji":"🎀","bgColor":"#2E7D32"},{"letter":"R","word":"Ribbon","emoji":"🎀","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 136,
        }}
      />
      <Composition
        id="Christmas3"
        component={AlphabetLongTemplate}
        durationInFrames={2820}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 3",
          videoId: "christmas-3",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"L","word":"Lights","emoji":"💡","bgColor":"#FDD835"},{"letter":"N","word":"North Pole","emoji":"🧭","bgColor":"#0D47A1"},{"letter":"I","word":"Ice Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"P","word":"Poinsettia","emoji":"🌺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yule Log","emoji":"🪵","bgColor":"#795548"},{"letter":"C","word":"Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"T","word":"Toy Shop","emoji":"🏪","bgColor":"#4CAF50"},{"letter":"D","word":"December","emoji":"📅","bgColor":"#D32F2F"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#FF8F00"},{"letter":"H","word":"Happiness","emoji":"😊","bgColor":"#FFB300"},{"letter":"J","word":"Joy","emoji":"🎉","bgColor":"#E91E63"},{"letter":"P","word":"Peace","emoji":"☮️","bgColor":"#0288D1"},{"letter":"L","word":"Love","emoji":"❤️","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 94,
        }}
      />
      <Composition
        id="Christmas4"
        component={AlphabetLongTemplate}
        durationInFrames={4170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 4",
          videoId: "christmas-4",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 139,
        }}
      />
      <Composition
        id="Christmas5"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 5",
          videoId: "christmas-5",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="Christmas6"
        component={AlphabetLongTemplate}
        durationInFrames={4230}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 6",
          videoId: "christmas-6",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 141,
        }}
      />
      <Composition
        id="Christmas7"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 7",
          videoId: "christmas-7",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="Christmas8"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 8",
          videoId: "christmas-8",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="Christmas9"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 9",
          videoId: "christmas-9",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="Christmas10"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 10",
          videoId: "christmas-10",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
      <Composition
        id="Christmas11"
        component={AlphabetLongTemplate}
        durationInFrames={3120}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 11",
          videoId: "christmas-11",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 104,
        }}
      />
      <Composition
        id="Christmas12"
        component={AlphabetLongTemplate}
        durationInFrames={4440}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 12",
          videoId: "christmas-12",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 148,
        }}
      />
      <Composition
        id="Christmas13"
        component={AlphabetLongTemplate}
        durationInFrames={3180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 13",
          videoId: "christmas-13",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 106,
        }}
      />
      <Composition
        id="Christmas14"
        component={AlphabetLongTemplate}
        durationInFrames={4500}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 14",
          videoId: "christmas-14",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 150,
        }}
      />
      <Composition
        id="Christmas15"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 15",
          videoId: "christmas-15",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Christmas16"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 16",
          videoId: "christmas-16",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="Christmas17"
        component={AlphabetLongTemplate}
        durationInFrames={3330}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 17",
          videoId: "christmas-17",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 111,
        }}
      />
      <Composition
        id="Christmas18"
        component={AlphabetLongTemplate}
        durationInFrames={4650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 18",
          videoId: "christmas-18",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 155,
        }}
      />
      <Composition
        id="Christmas19"
        component={AlphabetLongTemplate}
        durationInFrames={3390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 19",
          videoId: "christmas-19",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 113,
        }}
      />
      <Composition
        id="Christmas20"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 20",
          videoId: "christmas-20",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="Christmas21"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 21",
          videoId: "christmas-21",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="Christmas22"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 22",
          videoId: "christmas-22",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="Christmas23"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 23",
          videoId: "christmas-23",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="Christmas24"
        component={AlphabetLongTemplate}
        durationInFrames={4860}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 24",
          videoId: "christmas-24",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 162,
        }}
      />
      <Composition
        id="Christmas25"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 25",
          videoId: "christmas-25",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Christmas26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 26",
          videoId: "christmas-26",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Christmas27"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 27",
          videoId: "christmas-27",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="Christmas28"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 28",
          videoId: "christmas-28",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="Christmas29"
        component={AlphabetLongTemplate}
        durationInFrames={3750}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 29",
          videoId: "christmas-29",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 125,
        }}
      />
      <Composition
        id="Christmas30"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Christmas - Part 30",
          videoId: "christmas-30",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"S","word":"Santa","emoji":"🎅","bgColor":"#D32F2F"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"C","word":"Christmas Tree","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FFD54F"},{"letter":"G","word":"Gift","emoji":"🎁","bgColor":"#D32F2F"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Stocking","emoji":"🧦","bgColor":"#D32F2F"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#F5F5F5"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"G","word":"Gingerbread","emoji":"🍪","bgColor":"#795548"},{"letter":"W","word":"Wreath","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"S","word":"Sleigh","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"N","word":"Nutcracker","emoji":"🪖","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
    </>
  );
};
