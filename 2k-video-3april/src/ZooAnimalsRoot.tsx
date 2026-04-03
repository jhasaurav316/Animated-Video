import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ZooAnimalsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ZooAnimals1"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 1",
          videoId: "zoo-animals-1",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="ZooAnimals2"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 2",
          videoId: "zoo-animals-2",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"G","word":"Gorilla","emoji":"🦍","bgColor":"#5D4037"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"S","word":"Snake","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"P","word":"Peacock","emoji":"🦚","bgColor":"#0277BD"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"T","word":"Tortoise","emoji":"🐢","bgColor":"#4E342E"},{"letter":"A","word":"Alligator","emoji":"🐊","bgColor":"#33691E"},{"letter":"C","word":"Camel","emoji":"🐫","bgColor":"#FFB74D"},{"letter":"O","word":"Otter","emoji":"🦦","bgColor":"#795548"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#3E2723"},{"letter":"I","word":"Iguana","emoji":"🦎","bgColor":"#4CAF50"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="ZooAnimals3"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 3",
          videoId: "zoo-animals-3",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"Y","word":"Yak","emoji":"🐂","bgColor":"#3E2723"},{"letter":"D","word":"Deer","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"F","word":"Fox","emoji":"🦊","bgColor":"#FF6F00"},{"letter":"L","word":"Llama","emoji":"🦙","bgColor":"#A1887F"},{"letter":"C","word":"Cobra","emoji":"🐍","bgColor":"#1B5E20"},{"letter":"B","word":"Bison","emoji":"🐂","bgColor":"#5D4037"},{"letter":"M","word":"Meerkat","emoji":"🐿️","bgColor":"#FFB74D"},{"letter":"W","word":"Warthog","emoji":"🐗","bgColor":"#795548"},{"letter":"S","word":"Sloth","emoji":"🦥","bgColor":"#8D6E63"},{"letter":"T","word":"Tapir","emoji":"🐽","bgColor":"#37474F"},{"letter":"H","word":"Hyena","emoji":"🐺","bgColor":"#A1887F"},{"letter":"P","word":"Porcupine","emoji":"🦔","bgColor":"#5D4037"},{"letter":"R","word":"Red Panda","emoji":"🐼","bgColor":"#FF5722"},{"letter":"N","word":"Newt","emoji":"🦎","bgColor":"#FF6F00"},{"letter":"A","word":"Antelope","emoji":"🦌","bgColor":"#8D6E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="ZooAnimals4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 4",
          videoId: "zoo-animals-4",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ZooAnimals5"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 5",
          videoId: "zoo-animals-5",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="ZooAnimals6"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 6",
          videoId: "zoo-animals-6",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="ZooAnimals7"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 7",
          videoId: "zoo-animals-7",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="ZooAnimals8"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 8",
          videoId: "zoo-animals-8",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="ZooAnimals9"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 9",
          videoId: "zoo-animals-9",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="ZooAnimals10"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 10",
          videoId: "zoo-animals-10",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="ZooAnimals11"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 11",
          videoId: "zoo-animals-11",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="ZooAnimals12"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 12",
          videoId: "zoo-animals-12",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="ZooAnimals13"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 13",
          videoId: "zoo-animals-13",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="ZooAnimals14"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 14",
          videoId: "zoo-animals-14",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="ZooAnimals15"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 15",
          videoId: "zoo-animals-15",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="ZooAnimals16"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 16",
          videoId: "zoo-animals-16",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="ZooAnimals17"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 17",
          videoId: "zoo-animals-17",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="ZooAnimals18"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 18",
          videoId: "zoo-animals-18",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="ZooAnimals19"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 19",
          videoId: "zoo-animals-19",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="ZooAnimals20"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 20",
          videoId: "zoo-animals-20",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="ZooAnimals21"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 21",
          videoId: "zoo-animals-21",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="ZooAnimals22"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 22",
          videoId: "zoo-animals-22",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="ZooAnimals23"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 23",
          videoId: "zoo-animals-23",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="ZooAnimals24"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 24",
          videoId: "zoo-animals-24",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="ZooAnimals25"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 25",
          videoId: "zoo-animals-25",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="ZooAnimals26"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 26",
          videoId: "zoo-animals-26",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="ZooAnimals27"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 27",
          videoId: "zoo-animals-27",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="ZooAnimals28"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 28",
          videoId: "zoo-animals-28",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="ZooAnimals29"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 29",
          videoId: "zoo-animals-29",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
      <Composition
        id="ZooAnimals30"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Zoo Animals - Part 30",
          videoId: "zoo-animals-30",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"E","word":"Elephant","emoji":"🐘","bgColor":"#607D8B"},{"letter":"G","word":"Giraffe","emoji":"🦒","bgColor":"#FFB300"},{"letter":"Z","word":"Zebra","emoji":"🦓","bgColor":"#212121"},{"letter":"M","word":"Monkey","emoji":"🐒","bgColor":"#795548"},{"letter":"P","word":"Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hippo","emoji":"🦛","bgColor":"#607D8B"},{"letter":"R","word":"Rhino","emoji":"🦏","bgColor":"#9E9E9E"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"B","word":"Bear","emoji":"🐻","bgColor":"#5D4037"},{"letter":"K","word":"Kangaroo","emoji":"🦘","bgColor":"#FF8F00"},{"letter":"F","word":"Flamingo","emoji":"🦩","bgColor":"#E91E63"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"C","word":"Crocodile","emoji":"🐊","bgColor":"#33691E"},{"letter":"O","word":"Ostrich","emoji":"🐦","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 110,
        }}
      />
    </>
  );
};
