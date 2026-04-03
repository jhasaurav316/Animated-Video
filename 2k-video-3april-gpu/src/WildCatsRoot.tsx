import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const WildCatsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="WildCats1"
        component={AlphabetLongTemplate}
        durationInFrames={2850}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 1",
          videoId: "wild-cats-1",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 95,
        }}
      />
      <Composition
        id="WildCats2"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 2",
          videoId: "wild-cats-2",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"W","word":"Wildcat","emoji":"🐱","bgColor":"#607D8B"},{"letter":"C","word":"Clouded Leopard","emoji":"🐆","bgColor":"#546E7A"},{"letter":"L","word":"Liger","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tigon","emoji":"🐯","bgColor":"#E65100"},{"letter":"S","word":"Siberian Tiger","emoji":"🐯","bgColor":"#B0BEC5"},{"letter":"B","word":"Bengal Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"W","word":"White Tiger","emoji":"🐯","bgColor":"#F5F5F5"},{"letter":"S","word":"Saber Tooth","emoji":"🦷","bgColor":"#795548"},{"letter":"A","word":"Amur Leopard","emoji":"🐆","bgColor":"#FFB300"},{"letter":"F","word":"Fishing Cat","emoji":"🐱","bgColor":"#546E7A"},{"letter":"S","word":"Sand Cat","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"R","word":"Rusty Cat","emoji":"🐱","bgColor":"#BF360C"},{"letter":"J","word":"Jaguarundi","emoji":"🐱","bgColor":"#5D4037"},{"letter":"K","word":"Kodkod","emoji":"🐱","bgColor":"#795548"},{"letter":"M","word":"Mountain Lion","emoji":"🐆","bgColor":"#8D6E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="WildCats3"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 3",
          videoId: "wild-cats-3",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Civet Cat","emoji":"🐱","bgColor":"#607D8B"},{"letter":"G","word":"Golden Cat","emoji":"🐱","bgColor":"#FFB300"},{"letter":"I","word":"Iberian Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"A","word":"Andean Cat","emoji":"🐱","bgColor":"#546E7A"},{"letter":"P","word":"Pallas Cat","emoji":"🐱","bgColor":"#9E9E9E"},{"letter":"B","word":"Bay Cat","emoji":"🐱","bgColor":"#BF360C"},{"letter":"F","word":"Flat Head Cat","emoji":"🐱","bgColor":"#5D4037"},{"letter":"L","word":"Leopard Cat","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"T","word":"Temminck Cat","emoji":"🐱","bgColor":"#795548"},{"letter":"M","word":"Marbled Cat","emoji":"🐱","bgColor":"#8D6E63"},{"letter":"N","word":"Neofelis","emoji":"🐱","bgColor":"#546E7A"},{"letter":"C","word":"Chausie","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"S","word":"Savannah Cat","emoji":"🐱","bgColor":"#FFB300"},{"letter":"E","word":"Egyptian Mau","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"D","word":"Desert Cat","emoji":"🐱","bgColor":"#E65100"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="WildCats4"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 4",
          videoId: "wild-cats-4",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="WildCats5"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 5",
          videoId: "wild-cats-5",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
      <Composition
        id="WildCats6"
        component={AlphabetLongTemplate}
        durationInFrames={4320}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 6",
          videoId: "wild-cats-6",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 144,
        }}
      />
      <Composition
        id="WildCats7"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 7",
          videoId: "wild-cats-7",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="WildCats8"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 8",
          videoId: "wild-cats-8",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="WildCats9"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 9",
          videoId: "wild-cats-9",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="WildCats10"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 10",
          videoId: "wild-cats-10",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="WildCats11"
        component={AlphabetLongTemplate}
        durationInFrames={3210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 11",
          videoId: "wild-cats-11",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 107,
        }}
      />
      <Composition
        id="WildCats12"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 12",
          videoId: "wild-cats-12",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
      <Composition
        id="WildCats13"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 13",
          videoId: "wild-cats-13",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 110,
        }}
      />
      <Composition
        id="WildCats14"
        component={AlphabetLongTemplate}
        durationInFrames={4620}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 14",
          videoId: "wild-cats-14",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 154,
        }}
      />
      <Composition
        id="WildCats15"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 15",
          videoId: "wild-cats-15",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 112,
        }}
      />
      <Composition
        id="WildCats16"
        component={AlphabetLongTemplate}
        durationInFrames={4680}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 16",
          videoId: "wild-cats-16",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 156,
        }}
      />
      <Composition
        id="WildCats17"
        component={AlphabetLongTemplate}
        durationInFrames={3450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 17",
          videoId: "wild-cats-17",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 115,
        }}
      />
      <Composition
        id="WildCats18"
        component={AlphabetLongTemplate}
        durationInFrames={4770}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 18",
          videoId: "wild-cats-18",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 159,
        }}
      />
      <Composition
        id="WildCats19"
        component={AlphabetLongTemplate}
        durationInFrames={3510}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 19",
          videoId: "wild-cats-19",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 117,
        }}
      />
      <Composition
        id="WildCats20"
        component={AlphabetLongTemplate}
        durationInFrames={4830}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 20",
          videoId: "wild-cats-20",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 161,
        }}
      />
      <Composition
        id="WildCats21"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 21",
          videoId: "wild-cats-21",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="WildCats22"
        component={AlphabetLongTemplate}
        durationInFrames={4920}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 22",
          videoId: "wild-cats-22",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 164,
        }}
      />
      <Composition
        id="WildCats23"
        component={AlphabetLongTemplate}
        durationInFrames={3660}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 23",
          videoId: "wild-cats-23",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 122,
        }}
      />
      <Composition
        id="WildCats24"
        component={AlphabetLongTemplate}
        durationInFrames={4980}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 24",
          videoId: "wild-cats-24",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 166,
        }}
      />
      <Composition
        id="WildCats25"
        component={AlphabetLongTemplate}
        durationInFrames={3720}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 25",
          videoId: "wild-cats-25",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 124,
        }}
      />
      <Composition
        id="WildCats26"
        component={AlphabetLongTemplate}
        durationInFrames={5040}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 26",
          videoId: "wild-cats-26",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 168,
        }}
      />
      <Composition
        id="WildCats27"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 27",
          videoId: "wild-cats-27",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="WildCats28"
        component={AlphabetLongTemplate}
        durationInFrames={5130}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 28",
          videoId: "wild-cats-28",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 171,
        }}
      />
      <Composition
        id="WildCats29"
        component={AlphabetLongTemplate}
        durationInFrames={3870}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 29",
          videoId: "wild-cats-29",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 129,
        }}
      />
      <Composition
        id="WildCats30"
        component={AlphabetLongTemplate}
        durationInFrames={5190}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wild Cats & Big Cats - Part 30",
          videoId: "wild-cats-30",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"L","word":"Lion","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"T","word":"Tiger","emoji":"🐯","bgColor":"#FF6F00"},{"letter":"C","word":"Cheetah","emoji":"🐆","bgColor":"#FFB300"},{"letter":"L","word":"Leopard","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"J","word":"Jaguar","emoji":"🐆","bgColor":"#FF8F00"},{"letter":"P","word":"Panther","emoji":"🐆","bgColor":"#212121"},{"letter":"C","word":"Cougar","emoji":"🐆","bgColor":"#8D6E63"},{"letter":"L","word":"Lynx","emoji":"🐱","bgColor":"#A1887F"},{"letter":"B","word":"Bobcat","emoji":"🐱","bgColor":"#795548"},{"letter":"S","word":"Snow Leopard","emoji":"🐆","bgColor":"#B0BEC5"},{"letter":"O","word":"Ocelot","emoji":"🐱","bgColor":"#FFB300"},{"letter":"C","word":"Caracal","emoji":"🐱","bgColor":"#BF360C"},{"letter":"S","word":"Serval","emoji":"🐱","bgColor":"#FFB74D"},{"letter":"P","word":"Puma","emoji":"🐆","bgColor":"#795548"},{"letter":"M","word":"Margay","emoji":"🐱","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 173,
        }}
      />
    </>
  );
};
