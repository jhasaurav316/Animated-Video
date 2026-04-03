import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const BirdsOfPreyRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BirdsOfPrey1"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 1",
          videoId: "birds-of-prey-1",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="BirdsOfPrey2"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 2",
          videoId: "birds-of-prey-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Bald Eagle","emoji":"🦅","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Eagle","emoji":"🦅","bgColor":"#FFB300"},{"letter":"H","word":"Harpy Eagle","emoji":"🦅","bgColor":"#212121"},{"letter":"S","word":"Snowy Owl","emoji":"🦉","bgColor":"#F5F5F5"},{"letter":"B","word":"Barn Owl","emoji":"🦉","bgColor":"#FFB74D"},{"letter":"G","word":"Great Horned Owl","emoji":"🦉","bgColor":"#5D4037"},{"letter":"R","word":"Red-tailed Hawk","emoji":"🦅","bgColor":"#D32F2F"},{"letter":"C","word":"Cooper Hawk","emoji":"🦅","bgColor":"#607D8B"},{"letter":"S","word":"Secretary Bird","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Caracara","emoji":"🦅","bgColor":"#FF6F00"},{"letter":"T","word":"Tawny Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"E","word":"Eagle Owl","emoji":"🦉","bgColor":"#FF8F00"},{"letter":"F","word":"Fish Eagle","emoji":"🦅","bgColor":"#0288D1"},{"letter":"L","word":"Lammergeier","emoji":"🦅","bgColor":"#BF360C"},{"letter":"S","word":"Steppe Eagle","emoji":"🦅","bgColor":"#A1887F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="BirdsOfPrey3"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 3",
          videoId: "birds-of-prey-3",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"W","word":"Wedge-tail Eagle","emoji":"🦅","bgColor":"#3E2723"},{"letter":"M","word":"Martial Eagle","emoji":"🦅","bgColor":"#455A64"},{"letter":"N","word":"Northern Goshawk","emoji":"🦅","bgColor":"#546E7A"},{"letter":"P","word":"Prairie Falcon","emoji":"🦅","bgColor":"#8D6E63"},{"letter":"R","word":"Rough-legged Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"A","word":"African Hawk","emoji":"🦅","bgColor":"#5D4037"},{"letter":"C","word":"Crowned Eagle","emoji":"🦅","bgColor":"#FFB300"},{"letter":"S","word":"Short-eared Owl","emoji":"🦉","bgColor":"#A1887F"},{"letter":"L","word":"Long-eared Owl","emoji":"🦉","bgColor":"#795548"},{"letter":"B","word":"Black Kite","emoji":"🦅","bgColor":"#212121"},{"letter":"T","word":"Turkey Vulture","emoji":"🦅","bgColor":"#D32F2F"},{"letter":"H","word":"Hobby Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"S","word":"Saker Falcon","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Gyrfalcon","emoji":"🦅","bgColor":"#B0BEC5"},{"letter":"A","word":"Aplomado Falcon","emoji":"🦅","bgColor":"#37474F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="BirdsOfPrey4"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 4",
          videoId: "birds-of-prey-4",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="BirdsOfPrey5"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 5",
          videoId: "birds-of-prey-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="BirdsOfPrey6"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 6",
          videoId: "birds-of-prey-6",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="BirdsOfPrey7"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 7",
          videoId: "birds-of-prey-7",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="BirdsOfPrey8"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 8",
          videoId: "birds-of-prey-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="BirdsOfPrey9"
        component={AlphabetLongTemplate}
        durationInFrames={4110}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 9",
          videoId: "birds-of-prey-9",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 137,
        }}
      />
      <Composition
        id="BirdsOfPrey10"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 10",
          videoId: "birds-of-prey-10",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="BirdsOfPrey11"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 11",
          videoId: "birds-of-prey-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="BirdsOfPrey12"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 12",
          videoId: "birds-of-prey-12",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="BirdsOfPrey13"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 13",
          videoId: "birds-of-prey-13",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="BirdsOfPrey14"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 14",
          videoId: "birds-of-prey-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
      <Composition
        id="BirdsOfPrey15"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 15",
          videoId: "birds-of-prey-15",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="BirdsOfPrey16"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 16",
          videoId: "birds-of-prey-16",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="BirdsOfPrey17"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 17",
          videoId: "birds-of-prey-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="BirdsOfPrey18"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 18",
          videoId: "birds-of-prey-18",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="BirdsOfPrey19"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 19",
          videoId: "birds-of-prey-19",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="BirdsOfPrey20"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 20",
          videoId: "birds-of-prey-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="BirdsOfPrey21"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 21",
          videoId: "birds-of-prey-21",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
      <Composition
        id="BirdsOfPrey22"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 22",
          videoId: "birds-of-prey-22",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 110,
        }}
      />
      <Composition
        id="BirdsOfPrey23"
        component={AlphabetLongTemplate}
        durationInFrames={4620}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 23",
          videoId: "birds-of-prey-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 154,
        }}
      />
      <Composition
        id="BirdsOfPrey24"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 24",
          videoId: "birds-of-prey-24",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 112,
        }}
      />
      <Composition
        id="BirdsOfPrey25"
        component={AlphabetLongTemplate}
        durationInFrames={4710}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 25",
          videoId: "birds-of-prey-25",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 157,
        }}
      />
      <Composition
        id="BirdsOfPrey26"
        component={AlphabetLongTemplate}
        durationInFrames={3450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 26",
          videoId: "birds-of-prey-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 115,
        }}
      />
      <Composition
        id="BirdsOfPrey27"
        component={AlphabetLongTemplate}
        durationInFrames={4770}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 27",
          videoId: "birds-of-prey-27",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 159,
        }}
      />
      <Composition
        id="BirdsOfPrey28"
        component={AlphabetLongTemplate}
        durationInFrames={3510}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 28",
          videoId: "birds-of-prey-28",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 117,
        }}
      />
      <Composition
        id="BirdsOfPrey29"
        component={AlphabetLongTemplate}
        durationInFrames={4830}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 29",
          videoId: "birds-of-prey-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 161,
        }}
      />
      <Composition
        id="BirdsOfPrey30"
        component={AlphabetLongTemplate}
        durationInFrames={3600}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 30",
          videoId: "birds-of-prey-30",
          bgGradient: ["#37474F","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Eagle","emoji":"🦅","bgColor":"#5D4037"},{"letter":"H","word":"Hawk","emoji":"🦅","bgColor":"#795548"},{"letter":"F","word":"Falcon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"O","word":"Owl","emoji":"🦉","bgColor":"#8D6E63"},{"letter":"V","word":"Vulture","emoji":"🦅","bgColor":"#37474F"},{"letter":"C","word":"Condor","emoji":"🦅","bgColor":"#212121"},{"letter":"K","word":"Kestrel","emoji":"🦅","bgColor":"#FF8F00"},{"letter":"O","word":"Osprey","emoji":"🦅","bgColor":"#455A64"},{"letter":"B","word":"Buzzard","emoji":"🦅","bgColor":"#795548"},{"letter":"H","word":"Harrier","emoji":"🦅","bgColor":"#607D8B"},{"letter":"K","word":"Kite Bird","emoji":"🦅","bgColor":"#BF360C"},{"letter":"G","word":"Goshawk","emoji":"🦅","bgColor":"#37474F"},{"letter":"P","word":"Peregrine","emoji":"🦅","bgColor":"#546E7A"},{"letter":"M","word":"Merlin","emoji":"🦅","bgColor":"#5D4037"},{"letter":"S","word":"Sparrowhawk","emoji":"🦅","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 120,
        }}
      />
    </>
  );
};
