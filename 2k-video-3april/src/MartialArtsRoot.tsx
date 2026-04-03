import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const MartialArtsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MartialArts1"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 1",
          videoId: "martial-arts-1",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="MartialArts2"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 2",
          videoId: "martial-arts-2",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"W","word":"Wing Chun","emoji":"🥋","bgColor":"#FF6F00"},{"letter":"H","word":"Hapkido","emoji":"🥋","bgColor":"#0277BD"},{"letter":"S","word":"Sambo","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"K","word":"Kickboxing","emoji":"🥊","bgColor":"#FF5722"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"M","word":"MMA","emoji":"🤼","bgColor":"#212121"},{"letter":"S","word":"Shaolin","emoji":"🏯","bgColor":"#C62828"},{"letter":"K","word":"Krav Maga","emoji":"🥊","bgColor":"#37474F"},{"letter":"P","word":"Pencak Silat","emoji":"🥋","bgColor":"#2E7D32"},{"letter":"I","word":"Iaido","emoji":"⚔️","bgColor":"#455A64"},{"letter":"W","word":"Wushu","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"E","word":"Escrima","emoji":"🥢","bgColor":"#795548"},{"letter":"L","word":"Lethwei","emoji":"🥊","bgColor":"#FF6F00"},{"letter":"S","word":"Savate","emoji":"👟","bgColor":"#1565C0"},{"letter":"G","word":"Gatka","emoji":"⚔️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="MartialArts3"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 3",
          videoId: "martial-arts-3",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"D","word":"Dragon Style","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"T","word":"Tiger Style","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Crane Style","emoji":"🦢","bgColor":"#F5F5F5"},{"letter":"M","word":"Monkey Style","emoji":"🐒","bgColor":"#795548"},{"letter":"S","word":"Snake Style","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"P","word":"Praying Mantis","emoji":"🦗","bgColor":"#4CAF50"},{"letter":"B","word":"Black Belt","emoji":"🥋","bgColor":"#212121"},{"letter":"R","word":"Roundhouse Kick","emoji":"🦵","bgColor":"#D32F2F"},{"letter":"U","word":"Uppercut","emoji":"🥊","bgColor":"#FF5722"},{"letter":"D","word":"Dojo","emoji":"🏯","bgColor":"#795548"},{"letter":"G","word":"Gi Uniform","emoji":"🥋","bgColor":"#F5F5F5"},{"letter":"N","word":"Nunchaku","emoji":"🥢","bgColor":"#5D4037"},{"letter":"S","word":"Shuriken","emoji":"⭐","bgColor":"#607D8B"},{"letter":"K","word":"Katana","emoji":"⚔️","bgColor":"#455A64"},{"letter":"B","word":"Bo Staff","emoji":"🥢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="MartialArts4"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 4",
          videoId: "martial-arts-4",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="MartialArts5"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 5",
          videoId: "martial-arts-5",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="MartialArts6"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 6",
          videoId: "martial-arts-6",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="MartialArts7"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 7",
          videoId: "martial-arts-7",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="MartialArts8"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 8",
          videoId: "martial-arts-8",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="MartialArts9"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 9",
          videoId: "martial-arts-9",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="MartialArts10"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 10",
          videoId: "martial-arts-10",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="MartialArts11"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 11",
          videoId: "martial-arts-11",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="MartialArts12"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 12",
          videoId: "martial-arts-12",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="MartialArts13"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 13",
          videoId: "martial-arts-13",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="MartialArts14"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 14",
          videoId: "martial-arts-14",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="MartialArts15"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 15",
          videoId: "martial-arts-15",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="MartialArts16"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 16",
          videoId: "martial-arts-16",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="MartialArts17"
        component={AlphabetLongTemplate}
        durationInFrames={4500}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 17",
          videoId: "martial-arts-17",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 150,
        }}
      />
      <Composition
        id="MartialArts18"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 18",
          videoId: "martial-arts-18",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="MartialArts19"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 19",
          videoId: "martial-arts-19",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
      <Composition
        id="MartialArts20"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 20",
          videoId: "martial-arts-20",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 110,
        }}
      />
      <Composition
        id="MartialArts21"
        component={AlphabetLongTemplate}
        durationInFrames={4620}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 21",
          videoId: "martial-arts-21",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 154,
        }}
      />
      <Composition
        id="MartialArts22"
        component={AlphabetLongTemplate}
        durationInFrames={3390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 22",
          videoId: "martial-arts-22",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 113,
        }}
      />
      <Composition
        id="MartialArts23"
        component={AlphabetLongTemplate}
        durationInFrames={4710}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 23",
          videoId: "martial-arts-23",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 157,
        }}
      />
      <Composition
        id="MartialArts24"
        component={AlphabetLongTemplate}
        durationInFrames={3450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 24",
          videoId: "martial-arts-24",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 115,
        }}
      />
      <Composition
        id="MartialArts25"
        component={AlphabetLongTemplate}
        durationInFrames={4770}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 25",
          videoId: "martial-arts-25",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 159,
        }}
      />
      <Composition
        id="MartialArts26"
        component={AlphabetLongTemplate}
        durationInFrames={3510}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 26",
          videoId: "martial-arts-26",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 117,
        }}
      />
      <Composition
        id="MartialArts27"
        component={AlphabetLongTemplate}
        durationInFrames={4830}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 27",
          videoId: "martial-arts-27",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 161,
        }}
      />
      <Composition
        id="MartialArts28"
        component={AlphabetLongTemplate}
        durationInFrames={3600}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 28",
          videoId: "martial-arts-28",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 120,
        }}
      />
      <Composition
        id="MartialArts29"
        component={AlphabetLongTemplate}
        durationInFrames={4920}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 29",
          videoId: "martial-arts-29",
          bgGradient: ["#212121","#757575"] as [string, string],
          accentColor: "#000000",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 164,
        }}
      />
      <Composition
        id="MartialArts30"
        component={AlphabetLongTemplate}
        durationInFrames={3660}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts - Part 30",
          videoId: "martial-arts-30",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Karate","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"J","word":"Judo","emoji":"🥋","bgColor":"#1565C0"},{"letter":"T","word":"Taekwondo","emoji":"🥋","bgColor":"#212121"},{"letter":"K","word":"Kung Fu","emoji":"🥋","bgColor":"#C62828"},{"letter":"A","word":"Aikido","emoji":"🥋","bgColor":"#607D8B"},{"letter":"B","word":"Boxing","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"W","word":"Wrestling","emoji":"🤼","bgColor":"#FF8F00"},{"letter":"M","word":"Muay Thai","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"J","word":"Jiu-Jitsu","emoji":"🥋","bgColor":"#1565C0"},{"letter":"S","word":"Sumo","emoji":"🤼","bgColor":"#212121"},{"letter":"F","word":"Fencing","emoji":"🤺","bgColor":"#607D8B"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"K","word":"Kendo","emoji":"⚔️","bgColor":"#37474F"},{"letter":"N","word":"Ninjutsu","emoji":"🥷","bgColor":"#212121"},{"letter":"T","word":"Tai Chi","emoji":"🧘","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 122,
        }}
      />
    </>
  );
};
