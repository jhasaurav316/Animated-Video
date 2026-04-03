import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const CartoonCharactersRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CartoonCharacters1"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 1",
          videoId: "cartoon-characters-1",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="CartoonCharacters2"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 2",
          videoId: "cartoon-characters-2",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cinderella","emoji":"👗","bgColor":"#90CAF9"},{"letter":"A","word":"Aladdin","emoji":"🧞","bgColor":"#7B1FA2"},{"letter":"R","word":"Rapunzel","emoji":"👸","bgColor":"#FBC02D"},{"letter":"O","word":"Olaf","emoji":"⛄","bgColor":"#90CAF9"},{"letter":"M","word":"Moana","emoji":"🌊","bgColor":"#00BCD4"},{"letter":"B","word":"Bambi","emoji":"🦌","bgColor":"#8D6E63"},{"letter":"D","word":"Dumbo","emoji":"🐘","bgColor":"#9E9E9E"},{"letter":"P","word":"Pluto","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"G","word":"Garfield","emoji":"🐱","bgColor":"#FF6F00"},{"letter":"T","word":"Tweety","emoji":"🐦","bgColor":"#FDD835"},{"letter":"S","word":"Scooby-Doo","emoji":"🐕","bgColor":"#795548"},{"letter":"P","word":"Patrick Star","emoji":"⭐","bgColor":"#F48FB1"},{"letter":"F","word":"Frozen Anna","emoji":"❄️","bgColor":"#2E7D32"},{"letter":"W","word":"Woody","emoji":"🤠","bgColor":"#795548"},{"letter":"B","word":"Buzz Lightyear","emoji":"🚀","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="CartoonCharacters3"
        component={AlphabetLongTemplate}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 3",
          videoId: "cartoon-characters-3",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"L","word":"Lightning McQueen","emoji":"🏎️","bgColor":"#D32F2F"},{"letter":"M","word":"Mario","emoji":"🍄","bgColor":"#D32F2F"},{"letter":"L","word":"Luigi","emoji":"🍄","bgColor":"#4CAF50"},{"letter":"S","word":"Sonic","emoji":"🦔","bgColor":"#1565C0"},{"letter":"D","word":"Doraemon","emoji":"🐱","bgColor":"#0288D1"},{"letter":"K","word":"Kung Fu Panda","emoji":"🐼","bgColor":"#212121"},{"letter":"H","word":"Hello Kitty","emoji":"🐱","bgColor":"#E91E63"},{"letter":"P","word":"Popeye","emoji":"💪","bgColor":"#2E7D32"},{"letter":"C","word":"Charlie Brown","emoji":"🐕","bgColor":"#FFB300"},{"letter":"R","word":"Road Runner","emoji":"🐦","bgColor":"#0288D1"},{"letter":"Z","word":"Zootopia Judy","emoji":"🐰","bgColor":"#607D8B"},{"letter":"I","word":"Ice Age Sid","emoji":"🦥","bgColor":"#795548"},{"letter":"T","word":"Tarzan","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mulan","emoji":"⚔️","bgColor":"#C62828"},{"letter":"A","word":"Ariel","emoji":"🧜‍♀️","bgColor":"#00BCD4"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 136,
        }}
      />
      <Composition
        id="CartoonCharacters4"
        component={AlphabetLongTemplate}
        durationInFrames={2820}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 4",
          videoId: "cartoon-characters-4",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 94,
        }}
      />
      <Composition
        id="CartoonCharacters5"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 5",
          videoId: "cartoon-characters-5",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="CartoonCharacters6"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 6",
          videoId: "cartoon-characters-6",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="CartoonCharacters7"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 7",
          videoId: "cartoon-characters-7",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="CartoonCharacters8"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 8",
          videoId: "cartoon-characters-8",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="CartoonCharacters9"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 9",
          videoId: "cartoon-characters-9",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="CartoonCharacters10"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 10",
          videoId: "cartoon-characters-10",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="CartoonCharacters11"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 11",
          videoId: "cartoon-characters-11",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="CartoonCharacters12"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 12",
          videoId: "cartoon-characters-12",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="CartoonCharacters13"
        component={AlphabetLongTemplate}
        durationInFrames={4440}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 13",
          videoId: "cartoon-characters-13",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 148,
        }}
      />
      <Composition
        id="CartoonCharacters14"
        component={AlphabetLongTemplate}
        durationInFrames={3180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 14",
          videoId: "cartoon-characters-14",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 106,
        }}
      />
      <Composition
        id="CartoonCharacters15"
        component={AlphabetLongTemplate}
        durationInFrames={4500}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 15",
          videoId: "cartoon-characters-15",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 150,
        }}
      />
      <Composition
        id="CartoonCharacters16"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 16",
          videoId: "cartoon-characters-16",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="CartoonCharacters17"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 17",
          videoId: "cartoon-characters-17",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
      <Composition
        id="CartoonCharacters18"
        component={AlphabetLongTemplate}
        durationInFrames={3330}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 18",
          videoId: "cartoon-characters-18",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 111,
        }}
      />
      <Composition
        id="CartoonCharacters19"
        component={AlphabetLongTemplate}
        durationInFrames={4650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 19",
          videoId: "cartoon-characters-19",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 155,
        }}
      />
      <Composition
        id="CartoonCharacters20"
        component={AlphabetLongTemplate}
        durationInFrames={3390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 20",
          videoId: "cartoon-characters-20",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 113,
        }}
      />
      <Composition
        id="CartoonCharacters21"
        component={AlphabetLongTemplate}
        durationInFrames={4710}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 21",
          videoId: "cartoon-characters-21",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 157,
        }}
      />
      <Composition
        id="CartoonCharacters22"
        component={AlphabetLongTemplate}
        durationInFrames={3450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 22",
          videoId: "cartoon-characters-22",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 115,
        }}
      />
      <Composition
        id="CartoonCharacters23"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 23",
          videoId: "cartoon-characters-23",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="CartoonCharacters24"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 24",
          videoId: "cartoon-characters-24",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="CartoonCharacters25"
        component={AlphabetLongTemplate}
        durationInFrames={4860}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 25",
          videoId: "cartoon-characters-25",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 162,
        }}
      />
      <Composition
        id="CartoonCharacters26"
        component={AlphabetLongTemplate}
        durationInFrames={3600}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 26",
          videoId: "cartoon-characters-26",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 120,
        }}
      />
      <Composition
        id="CartoonCharacters27"
        component={AlphabetLongTemplate}
        durationInFrames={4920}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 27",
          videoId: "cartoon-characters-27",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 164,
        }}
      />
      <Composition
        id="CartoonCharacters28"
        component={AlphabetLongTemplate}
        durationInFrames={3660}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 28",
          videoId: "cartoon-characters-28",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 122,
        }}
      />
      <Composition
        id="CartoonCharacters29"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 29",
          videoId: "cartoon-characters-29",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="CartoonCharacters30"
        component={AlphabetLongTemplate}
        durationInFrames={3750}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cartoon Characters - Part 30",
          videoId: "cartoon-characters-30",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"M","word":"Mickey Mouse","emoji":"🐭","bgColor":"#212121"},{"letter":"D","word":"Donald Duck","emoji":"🦆","bgColor":"#1565C0"},{"letter":"G","word":"Goofy","emoji":"🐶","bgColor":"#FF8F00"},{"letter":"T","word":"Tom","emoji":"🐱","bgColor":"#607D8B"},{"letter":"J","word":"Jerry","emoji":"🐭","bgColor":"#8D6E63"},{"letter":"S","word":"SpongeBob","emoji":"🧽","bgColor":"#FDD835"},{"letter":"B","word":"Bugs Bunny","emoji":"🐰","bgColor":"#9E9E9E"},{"letter":"D","word":"Dora","emoji":"🎒","bgColor":"#E91E63"},{"letter":"P","word":"Peppa Pig","emoji":"🐷","bgColor":"#F48FB1"},{"letter":"E","word":"Elsa","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"S","word":"Shrek","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"N","word":"Nemo","emoji":"🐠","bgColor":"#FF6F00"},{"letter":"W","word":"Winnie Pooh","emoji":"🍯","bgColor":"#FFB300"},{"letter":"P","word":"Pikachu","emoji":"⚡","bgColor":"#FDD835"},{"letter":"S","word":"Simba","emoji":"🦁","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 125,
        }}
      />
    </>
  );
};
