import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const VideoGamesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VideoGames1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 1",
          videoId: "video-games-1",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 2",
          videoId: "video-games-2",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Crash Bandicoot","emoji":"🧡","bgColor":"#FF6F00"},{"letter":"S","word":"Splatoon","emoji":"🦑","bgColor":"#E91E63"},{"letter":"S","word":"Super Smash","emoji":"💥","bgColor":"#D32F2F"},{"letter":"P","word":"Pikmin","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"M","word":"Mega Man","emoji":"🤖","bgColor":"#1565C0"},{"letter":"R","word":"Rocket League","emoji":"🚗","bgColor":"#FF6F00"},{"letter":"F","word":"Fall Guys","emoji":"🏃","bgColor":"#E91E63"},{"letter":"O","word":"Overwatch","emoji":"🎯","bgColor":"#FF8F00"},{"letter":"G","word":"Gran Turismo","emoji":"🏎️","bgColor":"#0D47A1"},{"letter":"S","word":"Street Fighter","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"N","word":"NBA2K","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"F","word":"FIFA Soccer","emoji":"⚽","bgColor":"#2E7D32"},{"letter":"W","word":"Wii Sports","emoji":"🎾","bgColor":"#42A5F5"},{"letter":"J","word":"Just Dance","emoji":"💃","bgColor":"#E91E63"},{"letter":"H","word":"Halo","emoji":"🎮","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 3",
          videoId: "video-games-3",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Call of Duty","emoji":"🎖️","bgColor":"#455A64"},{"letter":"G","word":"GTA","emoji":"🚗","bgColor":"#212121"},{"letter":"T","word":"The Sims","emoji":"🏠","bgColor":"#4CAF50"},{"letter":"L","word":"LEGO Games","emoji":"🧱","bgColor":"#FDD835"},{"letter":"E","word":"Elder Scrolls","emoji":"📜","bgColor":"#795548"},{"letter":"S","word":"Spiderman Game","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"B","word":"Batman Arkham","emoji":"🦇","bgColor":"#212121"},{"letter":"I","word":"Itch.io Games","emoji":"🎮","bgColor":"#E91E63"},{"letter":"U","word":"Undertale","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"C","word":"Cuphead","emoji":"☕","bgColor":"#D32F2F"},{"letter":"V","word":"Valorant","emoji":"🎯","bgColor":"#D32F2F"},{"letter":"H","word":"Hollow Knight","emoji":"🦋","bgColor":"#37474F"},{"letter":"S","word":"Stardew Valley","emoji":"🌾","bgColor":"#4CAF50"},{"letter":"D","word":"Dark Souls","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"God of War","emoji":"⚔️","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 4",
          videoId: "video-games-4",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 5",
          videoId: "video-games-5",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 6",
          videoId: "video-games-6",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 7",
          videoId: "video-games-7",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 8",
          videoId: "video-games-8",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 9",
          videoId: "video-games-9",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 10",
          videoId: "video-games-10",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 11",
          videoId: "video-games-11",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 12",
          videoId: "video-games-12",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 13",
          videoId: "video-games-13",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 14",
          videoId: "video-games-14",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 15",
          videoId: "video-games-15",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 16",
          videoId: "video-games-16",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 17",
          videoId: "video-games-17",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 18",
          videoId: "video-games-18",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 19",
          videoId: "video-games-19",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 20",
          videoId: "video-games-20",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 21",
          videoId: "video-games-21",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 22",
          videoId: "video-games-22",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 23",
          videoId: "video-games-23",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 24",
          videoId: "video-games-24",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 25",
          videoId: "video-games-25",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 26",
          videoId: "video-games-26",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 27",
          videoId: "video-games-27",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 28",
          videoId: "video-games-28",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 29",
          videoId: "video-games-29",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="VideoGames30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Video Games - Part 30",
          videoId: "video-games-30",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Minecraft","emoji":"⛏️","bgColor":"#4CAF50"},{"letter":"F","word":"Fortnite","emoji":"🎮","bgColor":"#1565C0"},{"letter":"R","word":"Roblox","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Pokemon","emoji":"⚡","bgColor":"#FDD835"},{"letter":"M","word":"Mario Bros","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"Z","word":"Zelda","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"P","word":"Pac-Man","emoji":"🟡","bgColor":"#FDD835"},{"letter":"T","word":"Tetris","emoji":"🟦","bgColor":"#0288D1"},{"letter":"A","word":"Among Us","emoji":"🧑‍🚀","bgColor":"#D32F2F"},{"letter":"A","word":"Animal Crossing","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"K","word":"Kirby","emoji":"🟣","bgColor":"#E91E63"},{"letter":"D","word":"Donkey Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"L","word":"Luigi Mansion","emoji":"👻","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoshi","emoji":"🦕","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
