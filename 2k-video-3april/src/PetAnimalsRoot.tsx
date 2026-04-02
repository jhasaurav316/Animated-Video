import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const PetAnimalsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PetAnimals1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 1",
          videoId: "pet-animals-1",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 2",
          videoId: "pet-animals-2",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"F","word":"Ferret","emoji":"🦡","bgColor":"#8D6E63"},{"letter":"L","word":"Lovebird","emoji":"🐦","bgColor":"#4CAF50"},{"letter":"S","word":"Snake","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"G","word":"Gerbil","emoji":"🐭","bgColor":"#A1887F"},{"letter":"C","word":"Chinchilla","emoji":"🐭","bgColor":"#9E9E9E"},{"letter":"P","word":"Pony","emoji":"🐴","bgColor":"#795548"},{"letter":"H","word":"Hermit Crab","emoji":"🦀","bgColor":"#FF5722"},{"letter":"A","word":"Axolotl","emoji":"🦎","bgColor":"#F48FB1"},{"letter":"M","word":"Mouse","emoji":"🐭","bgColor":"#9E9E9E"},{"letter":"D","word":"Dove","emoji":"🕊️","bgColor":"#F5F5F5"},{"letter":"T","word":"Tarantula","emoji":"🕷️","bgColor":"#5D4037"},{"letter":"S","word":"Seahorse","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"C","word":"Cockatiel","emoji":"🐦","bgColor":"#FDD835"},{"letter":"B","word":"Bearded Dragon","emoji":"🦎","bgColor":"#FF8F00"},{"letter":"L","word":"Lizard","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 3",
          videoId: "pet-animals-3",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"P","word":"Parakeet","emoji":"🐦","bgColor":"#4CAF50"},{"letter":"R","word":"Rat","emoji":"🐀","bgColor":"#607D8B"},{"letter":"S","word":"Shrimp","emoji":"🦐","bgColor":"#FF6F00"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#5D4037"},{"letter":"M","word":"Macaw","emoji":"🦜","bgColor":"#D32F2F"},{"letter":"H","word":"Hedgehog","emoji":"🦔","bgColor":"#795548"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"C","word":"Chameleon","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"S","word":"Sugar Glider","emoji":"🐿️","bgColor":"#9E9E9E"},{"letter":"G","word":"Gecko","emoji":"🦎","bgColor":"#AED581"},{"letter":"N","word":"Newt","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 4",
          videoId: "pet-animals-4",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 5",
          videoId: "pet-animals-5",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 6",
          videoId: "pet-animals-6",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 7",
          videoId: "pet-animals-7",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 8",
          videoId: "pet-animals-8",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 9",
          videoId: "pet-animals-9",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 10",
          videoId: "pet-animals-10",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 11",
          videoId: "pet-animals-11",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 12",
          videoId: "pet-animals-12",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 13",
          videoId: "pet-animals-13",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 14",
          videoId: "pet-animals-14",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 15",
          videoId: "pet-animals-15",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 16",
          videoId: "pet-animals-16",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 17",
          videoId: "pet-animals-17",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 18",
          videoId: "pet-animals-18",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 19",
          videoId: "pet-animals-19",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 20",
          videoId: "pet-animals-20",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 21",
          videoId: "pet-animals-21",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 22",
          videoId: "pet-animals-22",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 23",
          videoId: "pet-animals-23",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 24",
          videoId: "pet-animals-24",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 25",
          videoId: "pet-animals-25",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 26",
          videoId: "pet-animals-26",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 27",
          videoId: "pet-animals-27",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 28",
          videoId: "pet-animals-28",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 29",
          videoId: "pet-animals-29",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="PetAnimals30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals - Part 30",
          videoId: "pet-animals-30",
          bgGradient: ["#26C6DA","#B2EBF2"] as [string, string],
          accentColor: "#00838F",
          letters: [{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"H","word":"Hamster","emoji":"🐹","bgColor":"#FFB74D"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrot","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"T","word":"Turtle","emoji":"🐢","bgColor":"#2E7D32"},{"letter":"G","word":"Guinea Pig","emoji":"🐹","bgColor":"#8D6E63"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#1E88E5"},{"letter":"G","word":"Goldfish","emoji":"🐠","bgColor":"#FF8F00"},{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FFB300"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"B","word":"Bunny","emoji":"🐰","bgColor":"#F48FB1"},{"letter":"C","word":"Canary","emoji":"🐤","bgColor":"#FDD835"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
