import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const SuperheroesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Superheroes1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 1",
          videoId: "superheroes-1",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 2",
          videoId: "superheroes-2",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"D","word":"Deadpool","emoji":"🗡️","bgColor":"#C62828"},{"letter":"W","word":"Wolverine","emoji":"🐺","bgColor":"#FBC02D"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#0288D1"},{"letter":"C","word":"Cyclops","emoji":"👁️","bgColor":"#D32F2F"},{"letter":"G","word":"Groot","emoji":"🌳","bgColor":"#5D4037"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#455A64"},{"letter":"A","word":"Ant-Man","emoji":"🐜","bgColor":"#C62828"},{"letter":"V","word":"Vision","emoji":"💎","bgColor":"#7B1FA2"},{"letter":"N","word":"Nightwing","emoji":"🦅","bgColor":"#1565C0"},{"letter":"B","word":"Batgirl","emoji":"🦇","bgColor":"#4527A0"},{"letter":"S","word":"Shazam","emoji":"⚡","bgColor":"#FFB300"},{"letter":"D","word":"Doctor Strange","emoji":"🔮","bgColor":"#311B92"},{"letter":"P","word":"Power Ranger","emoji":"🦸","bgColor":"#E91E63"},{"letter":"L","word":"Loki","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Thanos","emoji":"🫰","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 3",
          videoId: "superheroes-3",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"M","word":"Magneto","emoji":"🧲","bgColor":"#C62828"},{"letter":"J","word":"Jean Grey","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"P","word":"Professor X","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Silver Surfer","emoji":"🏄","bgColor":"#9E9E9E"},{"letter":"G","word":"Gamora","emoji":"🗡️","bgColor":"#2E7D32"},{"letter":"H","word":"Harley Quinn","emoji":"🃏","bgColor":"#E91E63"},{"letter":"K","word":"King Kong","emoji":"🦍","bgColor":"#5D4037"},{"letter":"Z","word":"Zatanna","emoji":"🎩","bgColor":"#311B92"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#C62828"},{"letter":"C","word":"Catwoman","emoji":"🐱","bgColor":"#212121"},{"letter":"O","word":"Optimus Prime","emoji":"🤖","bgColor":"#1565C0"},{"letter":"M","word":"Mystique","emoji":"💙","bgColor":"#0D47A1"},{"letter":"R","word":"Rogue","emoji":"🧤","bgColor":"#2E7D32"},{"letter":"N","word":"Nebula","emoji":"🌌","bgColor":"#7B1FA2"},{"letter":"W","word":"Wasp","emoji":"🐝","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 4",
          videoId: "superheroes-4",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 5",
          videoId: "superheroes-5",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 6",
          videoId: "superheroes-6",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 7",
          videoId: "superheroes-7",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 8",
          videoId: "superheroes-8",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 9",
          videoId: "superheroes-9",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 10",
          videoId: "superheroes-10",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 11",
          videoId: "superheroes-11",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 12",
          videoId: "superheroes-12",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 13",
          videoId: "superheroes-13",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 14",
          videoId: "superheroes-14",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 15",
          videoId: "superheroes-15",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 16",
          videoId: "superheroes-16",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 17",
          videoId: "superheroes-17",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 18",
          videoId: "superheroes-18",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 19",
          videoId: "superheroes-19",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 20",
          videoId: "superheroes-20",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 21",
          videoId: "superheroes-21",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 22",
          videoId: "superheroes-22",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 23",
          videoId: "superheroes-23",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 24",
          videoId: "superheroes-24",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 25",
          videoId: "superheroes-25",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 26",
          videoId: "superheroes-26",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 27",
          videoId: "superheroes-27",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 28",
          videoId: "superheroes-28",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 29",
          videoId: "superheroes-29",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Superheroes30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Superheroes - Part 30",
          videoId: "superheroes-30",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Superman","emoji":"🦸‍♂️","bgColor":"#0D47A1"},{"letter":"B","word":"Batman","emoji":"🦇","bgColor":"#212121"},{"letter":"S","word":"Spider-Man","emoji":"🕷️","bgColor":"#D32F2F"},{"letter":"W","word":"Wonder Woman","emoji":"⭐","bgColor":"#FFB300"},{"letter":"I","word":"Iron Man","emoji":"🤖","bgColor":"#C62828"},{"letter":"C","word":"Captain America","emoji":"🛡️","bgColor":"#1565C0"},{"letter":"T","word":"Thor","emoji":"⚡","bgColor":"#FDD835"},{"letter":"H","word":"Hulk","emoji":"💪","bgColor":"#2E7D32"},{"letter":"F","word":"Flash","emoji":"⚡","bgColor":"#D32F2F"},{"letter":"A","word":"Aquaman","emoji":"🔱","bgColor":"#00838F"},{"letter":"G","word":"Green Lantern","emoji":"💚","bgColor":"#388E3C"},{"letter":"B","word":"Black Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"S","word":"Supergirl","emoji":"🦸‍♀️","bgColor":"#E91E63"},{"letter":"R","word":"Robin","emoji":"🐦","bgColor":"#D32F2F"},{"letter":"H","word":"Hawkeye","emoji":"🏹","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
