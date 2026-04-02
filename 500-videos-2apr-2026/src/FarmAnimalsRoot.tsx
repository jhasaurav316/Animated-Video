import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const FarmAnimalsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FarmAnimals1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 1",
          videoId: "farm-animals-1",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 2",
          videoId: "farm-animals-2",
          bgGradient: ["#558B2F","#C5E1A5"] as [string, string],
          accentColor: "#33691E",
          letters: [{"letter":"P","word":"Peacock","emoji":"🦚","bgColor":"#0277BD"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"M","word":"Mule","emoji":"🫏","bgColor":"#795548"},{"letter":"O","word":"Ox","emoji":"🐂","bgColor":"#5D4037"},{"letter":"P","word":"Pony","emoji":"🐴","bgColor":"#A1887F"},{"letter":"B","word":"Buffalo","emoji":"🐃","bgColor":"#37474F"},{"letter":"Y","word":"Yak","emoji":"🐂","bgColor":"#3E2723"},{"letter":"Q","word":"Quail","emoji":"🐦","bgColor":"#8D6E63"},{"letter":"P","word":"Pigeon","emoji":"🕊️","bgColor":"#9E9E9E"},{"letter":"S","word":"Swan","emoji":"🦢","bgColor":"#F5F5F5"},{"letter":"E","word":"Emu","emoji":"🦤","bgColor":"#5D4037"},{"letter":"H","word":"Hen","emoji":"🐔","bgColor":"#FFB74D"},{"letter":"C","word":"Calf","emoji":"🐄","bgColor":"#A1887F"},{"letter":"L","word":"Lamb","emoji":"🐑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 3",
          videoId: "farm-animals-3",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 4",
          videoId: "farm-animals-4",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 5",
          videoId: "farm-animals-5",
          bgGradient: ["#558B2F","#C5E1A5"] as [string, string],
          accentColor: "#33691E",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 6",
          videoId: "farm-animals-6",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 7",
          videoId: "farm-animals-7",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 8",
          videoId: "farm-animals-8",
          bgGradient: ["#558B2F","#C5E1A5"] as [string, string],
          accentColor: "#33691E",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 9",
          videoId: "farm-animals-9",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 10",
          videoId: "farm-animals-10",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 11",
          videoId: "farm-animals-11",
          bgGradient: ["#558B2F","#C5E1A5"] as [string, string],
          accentColor: "#33691E",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 12",
          videoId: "farm-animals-12",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 13",
          videoId: "farm-animals-13",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 14",
          videoId: "farm-animals-14",
          bgGradient: ["#558B2F","#C5E1A5"] as [string, string],
          accentColor: "#33691E",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 15",
          videoId: "farm-animals-15",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 16",
          videoId: "farm-animals-16",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 17",
          videoId: "farm-animals-17",
          bgGradient: ["#558B2F","#C5E1A5"] as [string, string],
          accentColor: "#33691E",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 18",
          videoId: "farm-animals-18",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 19",
          videoId: "farm-animals-19",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 20",
          videoId: "farm-animals-20",
          bgGradient: ["#558B2F","#C5E1A5"] as [string, string],
          accentColor: "#33691E",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 21",
          videoId: "farm-animals-21",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 22",
          videoId: "farm-animals-22",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 23",
          videoId: "farm-animals-23",
          bgGradient: ["#558B2F","#C5E1A5"] as [string, string],
          accentColor: "#33691E",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 24",
          videoId: "farm-animals-24",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FarmAnimals25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals - Part 25",
          videoId: "farm-animals-25",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cow","emoji":"🐄","bgColor":"#5D4037"},{"letter":"H","word":"Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"S","word":"Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"G","word":"Goat","emoji":"🐐","bgColor":"#8D6E63"},{"letter":"C","word":"Chicken","emoji":"🐔","bgColor":"#FFB300"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FBC02D"},{"letter":"T","word":"Turkey","emoji":"🦃","bgColor":"#795548"},{"letter":"R","word":"Rooster","emoji":"🐓","bgColor":"#D32F2F"},{"letter":"D","word":"Donkey","emoji":"🫏","bgColor":"#607D8B"},{"letter":"B","word":"Bull","emoji":"🐂","bgColor":"#5D4037"},{"letter":"R","word":"Rabbit","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"G","word":"Goose","emoji":"🦢","bgColor":"#BDBDBD"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"A","word":"Alpaca","emoji":"🦙","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
