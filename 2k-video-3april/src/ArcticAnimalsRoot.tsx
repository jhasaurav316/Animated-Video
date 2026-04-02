import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ArcticAnimalsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ArcticAnimals1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 1",
          videoId: "arctic-animals-1",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 2",
          videoId: "arctic-animals-2",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Puffin","emoji":"🐦","bgColor":"#212121"},{"letter":"H","word":"Harp Seal","emoji":"🦭","bgColor":"#B0BEC5"},{"letter":"M","word":"Musk Ox","emoji":"🐂","bgColor":"#5D4037"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"C","word":"Caribou","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"A","word":"Albatross","emoji":"🐦","bgColor":"#F5F5F5"},{"letter":"K","word":"King Crab","emoji":"🦀","bgColor":"#D32F2F"},{"letter":"W","word":"Wolverine","emoji":"🐺","bgColor":"#5D4037"},{"letter":"S","word":"Sea Lion","emoji":"🦭","bgColor":"#795548"},{"letter":"F","word":"Fur Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"I","word":"Ice Fish","emoji":"🐟","bgColor":"#90CAF9"},{"letter":"Y","word":"Yak","emoji":"🐂","bgColor":"#3E2723"},{"letter":"B","word":"Blue Whale","emoji":"🐋","bgColor":"#0D47A1"},{"letter":"T","word":"Tundra Swan","emoji":"🦢","bgColor":"#F5F5F5"},{"letter":"G","word":"Grey Wolf","emoji":"🐺","bgColor":"#9E9E9E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 3",
          videoId: "arctic-animals-3",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Husky","emoji":"🐕","bgColor":"#B0BEC5"},{"letter":"S","word":"Stoat","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"D","word":"Dall Sheep","emoji":"🐑","bgColor":"#F5F5F5"},{"letter":"C","word":"Chinook Salmon","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"R","word":"Ringed Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"E","word":"Emperor Penguin","emoji":"🐧","bgColor":"#FFB300"},{"letter":"S","word":"Snowy Fox","emoji":"🦊","bgColor":"#FAFAFA"},{"letter":"A","word":"Arctic Tern","emoji":"🐦","bgColor":"#B0BEC5"},{"letter":"M","word":"Mountain Goat","emoji":"🐐","bgColor":"#F5F5F5"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"P","word":"Ptarmigan","emoji":"🐦","bgColor":"#FAFAFA"},{"letter":"N","word":"Norse Horse","emoji":"🐴","bgColor":"#5D4037"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#3E2723"},{"letter":"F","word":"Fjord Horse","emoji":"🐴","bgColor":"#795548"},{"letter":"G","word":"Greenland Shark","emoji":"🦈","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 4",
          videoId: "arctic-animals-4",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 5",
          videoId: "arctic-animals-5",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 6",
          videoId: "arctic-animals-6",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 7",
          videoId: "arctic-animals-7",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 8",
          videoId: "arctic-animals-8",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 9",
          videoId: "arctic-animals-9",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 10",
          videoId: "arctic-animals-10",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 11",
          videoId: "arctic-animals-11",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 12",
          videoId: "arctic-animals-12",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 13",
          videoId: "arctic-animals-13",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 14",
          videoId: "arctic-animals-14",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 15",
          videoId: "arctic-animals-15",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 16",
          videoId: "arctic-animals-16",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 17",
          videoId: "arctic-animals-17",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 18",
          videoId: "arctic-animals-18",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 19",
          videoId: "arctic-animals-19",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 20",
          videoId: "arctic-animals-20",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 21",
          videoId: "arctic-animals-21",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 22",
          videoId: "arctic-animals-22",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 23",
          videoId: "arctic-animals-23",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 24",
          videoId: "arctic-animals-24",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 25",
          videoId: "arctic-animals-25",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 26",
          videoId: "arctic-animals-26",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 27",
          videoId: "arctic-animals-27",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 28",
          videoId: "arctic-animals-28",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 29",
          videoId: "arctic-animals-29",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="ArcticAnimals30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals - Part 30",
          videoId: "arctic-animals-30",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"P","word":"Polar Bear","emoji":"🐻‍❄️","bgColor":"#F5F5F5"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"S","word":"Seal","emoji":"🦭","bgColor":"#607D8B"},{"letter":"W","word":"Walrus","emoji":"🦭","bgColor":"#795548"},{"letter":"A","word":"Arctic Fox","emoji":"🦊","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#FAFAFA"},{"letter":"N","word":"Narwhal","emoji":"🦄","bgColor":"#90CAF9"},{"letter":"B","word":"Beluga Whale","emoji":"🐋","bgColor":"#F5F5F5"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"O","word":"Orca","emoji":"🐋","bgColor":"#212121"},{"letter":"A","word":"Arctic Hare","emoji":"🐇","bgColor":"#F5F5F5"},{"letter":"M","word":"Moose","emoji":"🫎","bgColor":"#5D4037"},{"letter":"E","word":"Ermine","emoji":"🐿️","bgColor":"#FAFAFA"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"L","word":"Lemming","emoji":"🐹","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
