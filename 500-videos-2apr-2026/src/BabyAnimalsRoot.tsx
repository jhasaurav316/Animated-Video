import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const BabyAnimalsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BabyAnimals1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 1",
          videoId: "baby-animals-1",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 2",
          videoId: "baby-animals-2",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eaglet","emoji":"🦅","bgColor":"#3E2723"},{"letter":"G","word":"Gosling","emoji":"🦢","bgColor":"#FBC02D"},{"letter":"C","word":"Caterpillar","emoji":"🐛","bgColor":"#4CAF50"},{"letter":"B","word":"Bunny","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"P","word":"Parrotlet","emoji":"🦜","bgColor":"#4CAF50"},{"letter":"H","word":"Hatchling","emoji":"🐣","bgColor":"#FDD835"},{"letter":"F","word":"Fingerling","emoji":"🐟","bgColor":"#0288D1"},{"letter":"L","word":"Larva","emoji":"🐛","bgColor":"#FF6F00"},{"letter":"N","word":"Nestling","emoji":"🐦","bgColor":"#8D6E63"},{"letter":"W","word":"Whelp","emoji":"🐕","bgColor":"#795548"},{"letter":"S","word":"Smolt","emoji":"🐟","bgColor":"#00BCD4"},{"letter":"C","word":"Cygnet","emoji":"🦢","bgColor":"#E0E0E0"},{"letter":"E","word":"Elver","emoji":"🐍","bgColor":"#607D8B"},{"letter":"P","word":"Poult","emoji":"🦃","bgColor":"#795548"},{"letter":"F","word":"Filly","emoji":"🐴","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 3",
          videoId: "baby-animals-3",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0288D1",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 4",
          videoId: "baby-animals-4",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 5",
          videoId: "baby-animals-5",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 6",
          videoId: "baby-animals-6",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0288D1",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 7",
          videoId: "baby-animals-7",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 8",
          videoId: "baby-animals-8",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 9",
          videoId: "baby-animals-9",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0288D1",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 10",
          videoId: "baby-animals-10",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 11",
          videoId: "baby-animals-11",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 12",
          videoId: "baby-animals-12",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0288D1",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 13",
          videoId: "baby-animals-13",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 14",
          videoId: "baby-animals-14",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 15",
          videoId: "baby-animals-15",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0288D1",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 16",
          videoId: "baby-animals-16",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 17",
          videoId: "baby-animals-17",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 18",
          videoId: "baby-animals-18",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0288D1",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 19",
          videoId: "baby-animals-19",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 20",
          videoId: "baby-animals-20",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 21",
          videoId: "baby-animals-21",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0288D1",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 22",
          videoId: "baby-animals-22",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 23",
          videoId: "baby-animals-23",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 24",
          videoId: "baby-animals-24",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0288D1",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BabyAnimals25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals - Part 25",
          videoId: "baby-animals-25",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"K","word":"Kitten","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"P","word":"Puppy","emoji":"🐶","bgColor":"#795548"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#8D6E63"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"F","word":"Foal","emoji":"🐴","bgColor":"#A1887F"},{"letter":"C","word":"Chick","emoji":"🐥","bgColor":"#FDD835"},{"letter":"D","word":"Duckling","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"P","word":"Piglet","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"K","word":"Kid","emoji":"🐐","bgColor":"#A1887F"},{"letter":"C","word":"Cub","emoji":"🐻","bgColor":"#5D4037"},{"letter":"J","word":"Joey","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"T","word":"Tadpole","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"F","word":"Fawn","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"P","word":"Pup","emoji":"🐕","bgColor":"#795548"},{"letter":"O","word":"Owlet","emoji":"🦉","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
