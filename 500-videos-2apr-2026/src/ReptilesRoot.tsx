import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const ReptilesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Reptiles1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 1",
          videoId: "reptiles-1",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 2",
          videoId: "reptiles-2",
          bgGradient: ["#827717","#DCE775"] as [string, string],
          accentColor: "#524C00",
          letters: [{"letter":"N","word":"Newt","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"A","word":"Anaconda","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"R","word":"Rattlesnake","emoji":"🐍","bgColor":"#BF360C"},{"letter":"M","word":"Monitor Lizard","emoji":"🦎","bgColor":"#546E7A"},{"letter":"B","word":"Boa","emoji":"🐍","bgColor":"#5D4037"},{"letter":"S","word":"Skink","emoji":"🦎","bgColor":"#827717"},{"letter":"A","word":"Axolotl","emoji":"🦎","bgColor":"#F48FB1"},{"letter":"T","word":"Terrapin","emoji":"🐢","bgColor":"#388E3C"},{"letter":"G","word":"Garter Snake","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"K","word":"King Snake","emoji":"🐍","bgColor":"#212121"},{"letter":"B","word":"Basilisk","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Caiman","emoji":"🐊","bgColor":"#33691E"},{"letter":"T","word":"Tree Frog","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"W","word":"Water Snake","emoji":"🐍","bgColor":"#0277BD"},{"letter":"M","word":"Mamba","emoji":"🐍","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 3",
          videoId: "reptiles-3",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 4",
          videoId: "reptiles-4",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 5",
          videoId: "reptiles-5",
          bgGradient: ["#827717","#DCE775"] as [string, string],
          accentColor: "#524C00",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 6",
          videoId: "reptiles-6",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 7",
          videoId: "reptiles-7",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 8",
          videoId: "reptiles-8",
          bgGradient: ["#827717","#DCE775"] as [string, string],
          accentColor: "#524C00",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 9",
          videoId: "reptiles-9",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 10",
          videoId: "reptiles-10",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 11",
          videoId: "reptiles-11",
          bgGradient: ["#827717","#DCE775"] as [string, string],
          accentColor: "#524C00",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 12",
          videoId: "reptiles-12",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 13",
          videoId: "reptiles-13",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 14",
          videoId: "reptiles-14",
          bgGradient: ["#827717","#DCE775"] as [string, string],
          accentColor: "#524C00",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 15",
          videoId: "reptiles-15",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 16",
          videoId: "reptiles-16",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 17",
          videoId: "reptiles-17",
          bgGradient: ["#827717","#DCE775"] as [string, string],
          accentColor: "#524C00",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 18",
          videoId: "reptiles-18",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 19",
          videoId: "reptiles-19",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 20",
          videoId: "reptiles-20",
          bgGradient: ["#827717","#DCE775"] as [string, string],
          accentColor: "#524C00",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 21",
          videoId: "reptiles-21",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 22",
          videoId: "reptiles-22",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 23",
          videoId: "reptiles-23",
          bgGradient: ["#827717","#DCE775"] as [string, string],
          accentColor: "#524C00",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 24",
          videoId: "reptiles-24",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Reptiles25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians - Part 25",
          videoId: "reptiles-25",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#388E3C"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Salamander","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#388E3C"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"T","word":"Toad","emoji":"🐸","bgColor":"#795548"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"P","word":"Python","emoji":"🐍","bgColor":"#5D4037"},{"letter":"V","word":"Viper","emoji":"🐍","bgColor":"#C62828"},{"letter":"K","word":"Komodo Dragon","emoji":"🦎","bgColor":"#5D4037"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
