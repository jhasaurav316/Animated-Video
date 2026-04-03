import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const HalloweenRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Halloween1"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 1",
          videoId: "halloween-1",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="Halloween2"
        component={AlphabetLongTemplate}
        durationInFrames={4110}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 2",
          videoId: "halloween-2",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Haunted House","emoji":"🏚️","bgColor":"#37474F"},{"letter":"C","word":"Cauldron","emoji":"🧪","bgColor":"#2E7D32"},{"letter":"B","word":"Broomstick","emoji":"🧹","bgColor":"#795548"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#5D4037"},{"letter":"S","word":"Scarecrow","emoji":"🌾","bgColor":"#FF8F00"},{"letter":"M","word":"Mask","emoji":"🎭","bgColor":"#E91E63"},{"letter":"C","word":"Cobweb","emoji":"🕸️","bgColor":"#9E9E9E"},{"letter":"J","word":"Jack-o-Lantern","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"P","word":"Potion","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"F","word":"Full Moon","emoji":"🌕","bgColor":"#FDD835"},{"letter":"D","word":"Dracula","emoji":"🧛‍♂️","bgColor":"#C62828"},{"letter":"G","word":"Goblin","emoji":"👺","bgColor":"#4CAF50"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#212121"},{"letter":"W","word":"Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"L","word":"Lantern","emoji":"🏮","bgColor":"#FF5722"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 137,
        }}
      />
      <Composition
        id="Halloween3"
        component={AlphabetLongTemplate}
        durationInFrames={2850}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 3",
          videoId: "halloween-3",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"H","word":"Howl","emoji":"🐺","bgColor":"#607D8B"},{"letter":"E","word":"Eerie","emoji":"👁️","bgColor":"#311B92"},{"letter":"N","word":"Nightmare","emoji":"😱","bgColor":"#4A148C"},{"letter":"R","word":"Raven","emoji":"🐦‍⬛","bgColor":"#212121"},{"letter":"T","word":"Tombstone","emoji":"🪦","bgColor":"#607D8B"},{"letter":"S","word":"Spell","emoji":"✨","bgColor":"#7B1FA2"},{"letter":"C","word":"Cloak","emoji":"🧥","bgColor":"#212121"},{"letter":"F","word":"Fang","emoji":"🦷","bgColor":"#F5F5F5"},{"letter":"G","word":"Grave","emoji":"🪦","bgColor":"#455A64"},{"letter":"H","word":"Horror","emoji":"😱","bgColor":"#C62828"},{"letter":"M","word":"Moonlight","emoji":"🌙","bgColor":"#FDD835"},{"letter":"C","word":"Creepy","emoji":"🕷️","bgColor":"#4A148C"},{"letter":"W","word":"Wicked","emoji":"🧙","bgColor":"#1B5E20"},{"letter":"S","word":"Spooky","emoji":"👻","bgColor":"#FF6F00"},{"letter":"B","word":"Bones","emoji":"🦴","bgColor":"#E0E0E0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 95,
        }}
      />
      <Composition
        id="Halloween4"
        component={AlphabetLongTemplate}
        durationInFrames={4170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 4",
          videoId: "halloween-4",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 139,
        }}
      />
      <Composition
        id="Halloween5"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 5",
          videoId: "halloween-5",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="Halloween6"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 6",
          videoId: "halloween-6",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="Halloween7"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 7",
          videoId: "halloween-7",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
      <Composition
        id="Halloween8"
        component={AlphabetLongTemplate}
        durationInFrames={4320}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 8",
          videoId: "halloween-8",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 144,
        }}
      />
      <Composition
        id="Halloween9"
        component={AlphabetLongTemplate}
        durationInFrames={3060}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 9",
          videoId: "halloween-9",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 102,
        }}
      />
      <Composition
        id="Halloween10"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 10",
          videoId: "halloween-10",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
      <Composition
        id="Halloween11"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 11",
          videoId: "halloween-11",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="Halloween12"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 12",
          videoId: "halloween-12",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="Halloween13"
        component={AlphabetLongTemplate}
        durationInFrames={3210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 13",
          videoId: "halloween-13",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 107,
        }}
      />
      <Composition
        id="Halloween14"
        component={AlphabetLongTemplate}
        durationInFrames={4530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 14",
          videoId: "halloween-14",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 151,
        }}
      />
      <Composition
        id="Halloween15"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 15",
          videoId: "halloween-15",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Halloween16"
        component={AlphabetLongTemplate}
        durationInFrames={4620}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 16",
          videoId: "halloween-16",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 154,
        }}
      />
      <Composition
        id="Halloween17"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 17",
          videoId: "halloween-17",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 112,
        }}
      />
      <Composition
        id="Halloween18"
        component={AlphabetLongTemplate}
        durationInFrames={4680}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 18",
          videoId: "halloween-18",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 156,
        }}
      />
      <Composition
        id="Halloween19"
        component={AlphabetLongTemplate}
        durationInFrames={3420}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 19",
          videoId: "halloween-19",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 114,
        }}
      />
      <Composition
        id="Halloween20"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 20",
          videoId: "halloween-20",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="Halloween21"
        component={AlphabetLongTemplate}
        durationInFrames={3510}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 21",
          videoId: "halloween-21",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 117,
        }}
      />
      <Composition
        id="Halloween22"
        component={AlphabetLongTemplate}
        durationInFrames={4830}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 22",
          videoId: "halloween-22",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 161,
        }}
      />
      <Composition
        id="Halloween23"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 23",
          videoId: "halloween-23",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="Halloween24"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 24",
          videoId: "halloween-24",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="Halloween25"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 25",
          videoId: "halloween-25",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Halloween26"
        component={AlphabetLongTemplate}
        durationInFrames={4980}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 26",
          videoId: "halloween-26",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 166,
        }}
      />
      <Composition
        id="Halloween27"
        component={AlphabetLongTemplate}
        durationInFrames={3720}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 27",
          videoId: "halloween-27",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 124,
        }}
      />
      <Composition
        id="Halloween28"
        component={AlphabetLongTemplate}
        durationInFrames={5040}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 28",
          videoId: "halloween-28",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 168,
        }}
      />
      <Composition
        id="Halloween29"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 29",
          videoId: "halloween-29",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="Halloween30"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Halloween - Part 30",
          videoId: "halloween-30",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#F5F5F5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#D32F2F"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#4CAF50"},{"letter":"S","word":"Skeleton","emoji":"💀","bgColor":"#F5F5F5"},{"letter":"B","word":"Bat","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider","emoji":"🕷️","bgColor":"#37474F"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"M","word":"Mummy","emoji":"🧟","bgColor":"#FFB74D"},{"letter":"F","word":"Frankenstein","emoji":"🧟‍♂️","bgColor":"#4CAF50"},{"letter":"C","word":"Costume","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"T","word":"Trick","emoji":"👻","bgColor":"#FF6F00"},{"letter":"T","word":"Treat","emoji":"🍫","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
    </>
  );
};
