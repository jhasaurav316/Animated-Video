import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const JungleAnimalsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="JungleAnimals1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 1",
          videoId: "jungle-animals-1",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 2",
          videoId: "jungle-animals-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"L","word":"Lemur","emoji":"🐒","bgColor":"#5D4037"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"B","word":"Boa","emoji":"🐍","bgColor":"#5D4037"},{"letter":"K","word":"Koala","emoji":"🐨","bgColor":"#9E9E9E"},{"letter":"C","word":"Chimpanzee","emoji":"🐒","bgColor":"#795548"},{"letter":"T","word":"Tapir","emoji":"🐽","bgColor":"#37474F"},{"letter":"O","word":"Okapi","emoji":"🦓","bgColor":"#5D4037"},{"letter":"S","word":"Spider Monkey","emoji":"🕷️","bgColor":"#3E2723"},{"letter":"B","word":"Baboon","emoji":"🐒","bgColor":"#795548"},{"letter":"C","word":"Capybara","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#3E2723"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"A","word":"Ant Eater","emoji":"🐜","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 3",
          videoId: "jungle-animals-3",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"W","word":"Warthog","emoji":"🐗","bgColor":"#795548"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"H","word":"Hornbill","emoji":"🐦","bgColor":"#FF8F00"},{"letter":"T","word":"Tree Frog","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"M","word":"Mandrill","emoji":"🐒","bgColor":"#1565C0"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"K","word":"Kinkajou","emoji":"🐻","bgColor":"#FF8F00"},{"letter":"N","word":"Numbat","emoji":"🐿️","bgColor":"#BF360C"},{"letter":"C","word":"Caiman","emoji":"🐊","bgColor":"#33691E"},{"letter":"J","word":"Jabiru","emoji":"🐦","bgColor":"#F5F5F5"},{"letter":"S","word":"Sun Bear","emoji":"🐻","bgColor":"#212121"},{"letter":"F","word":"Flying Fox","emoji":"🦇","bgColor":"#3E2723"},{"letter":"D","word":"Dragonfly","emoji":"🪰","bgColor":"#00BCD4"},{"letter":"L","word":"Leaf Insect","emoji":"🍃","bgColor":"#4CAF50"},{"letter":"R","word":"Red Panda","emoji":"🐼","bgColor":"#FF5722"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 4",
          videoId: "jungle-animals-4",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 5",
          videoId: "jungle-animals-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 6",
          videoId: "jungle-animals-6",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 7",
          videoId: "jungle-animals-7",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 8",
          videoId: "jungle-animals-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 9",
          videoId: "jungle-animals-9",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 10",
          videoId: "jungle-animals-10",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 11",
          videoId: "jungle-animals-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 12",
          videoId: "jungle-animals-12",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 13",
          videoId: "jungle-animals-13",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 14",
          videoId: "jungle-animals-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 15",
          videoId: "jungle-animals-15",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 16",
          videoId: "jungle-animals-16",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 17",
          videoId: "jungle-animals-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 18",
          videoId: "jungle-animals-18",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 19",
          videoId: "jungle-animals-19",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 20",
          videoId: "jungle-animals-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 21",
          videoId: "jungle-animals-21",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 22",
          videoId: "jungle-animals-22",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 23",
          videoId: "jungle-animals-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 24",
          videoId: "jungle-animals-24",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 25",
          videoId: "jungle-animals-25",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 26",
          videoId: "jungle-animals-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 27",
          videoId: "jungle-animals-27",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 28",
          videoId: "jungle-animals-28",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 29",
          videoId: "jungle-animals-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="JungleAnimals30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals - Part 30",
          videoId: "jungle-animals-30",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"T","word":"Toucan","emoji":"🦜","bgColor":"#FF8F00"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Orangutan","emoji":"🦧","bgColor":"#FF6F00"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
