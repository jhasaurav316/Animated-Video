import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const FestivalsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Festivals1"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 1",
          videoId: "festivals-1",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Festivals2"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 2",
          videoId: "festivals-2",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"H","word":"Hanukkah","emoji":"🕎","bgColor":"#1565C0"},{"letter":"R","word":"Ramadan","emoji":"🌙","bgColor":"#2E7D32"},{"letter":"S","word":"Songkran","emoji":"💦","bgColor":"#00BCD4"},{"letter":"D","word":"Day of Dead","emoji":"💀","bgColor":"#FF6F00"},{"letter":"L","word":"Lantern Festival","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"M","word":"Mid-Autumn","emoji":"🌕","bgColor":"#FFB300"},{"letter":"C","word":"Cinco de Mayo","emoji":"🎊","bgColor":"#4CAF50"},{"letter":"P","word":"Pongal","emoji":"🌾","bgColor":"#FF8F00"},{"letter":"N","word":"Navratri","emoji":"💃","bgColor":"#E91E63"},{"letter":"O","word":"Onam","emoji":"🚣","bgColor":"#FFB300"},{"letter":"G","word":"Ganesh Chaturthi","emoji":"🐘","bgColor":"#FF5722"},{"letter":"B","word":"Baisakhi","emoji":"🌾","bgColor":"#FDD835"},{"letter":"T","word":"Tanabata","emoji":"🎋","bgColor":"#7B1FA2"},{"letter":"C","word":"Cherry Blossom Fest","emoji":"🌸","bgColor":"#F48FB1"},{"letter":"K","word":"Kwanzaa","emoji":"🕯️","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="Festivals3"
        component={AlphabetLongTemplate}
        durationInFrames={3330}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 3",
          videoId: "festivals-3",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"I","word":"Independence Day","emoji":"🎆","bgColor":"#1565C0"},{"letter":"F","word":"Fireworks Night","emoji":"🎇","bgColor":"#FF6F00"},{"letter":"D","word":"Dragon Boat","emoji":"🐉","bgColor":"#2E7D32"},{"letter":"S","word":"Sukkot","emoji":"🏠","bgColor":"#4CAF50"},{"letter":"R","word":"Raksha Bandhan","emoji":"🧵","bgColor":"#E91E63"},{"letter":"M","word":"Makar Sankranti","emoji":"🪁","bgColor":"#FF8F00"},{"letter":"L","word":"Lohri","emoji":"🔥","bgColor":"#FF5722"},{"letter":"P","word":"Purim","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"J","word":"Janmashtami","emoji":"🪈","bgColor":"#1565C0"},{"letter":"U","word":"Ugadi","emoji":"🍃","bgColor":"#4CAF50"},{"letter":"V","word":"Vesak","emoji":"🪷","bgColor":"#FFB300"},{"letter":"W","word":"Winter Solstice","emoji":"❄️","bgColor":"#0288D1"},{"letter":"S","word":"Summer Solstice","emoji":"☀️","bgColor":"#FFB300"},{"letter":"A","word":"Advent","emoji":"🕯️","bgColor":"#7B1FA2"},{"letter":"E","word":"Epiphany","emoji":"⭐","bgColor":"#FFD54F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 111,
        }}
      />
      <Composition
        id="Festivals4"
        component={AlphabetLongTemplate}
        durationInFrames={4680}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 4",
          videoId: "festivals-4",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 156,
        }}
      />
      <Composition
        id="Festivals5"
        component={AlphabetLongTemplate}
        durationInFrames={3420}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 5",
          videoId: "festivals-5",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 114,
        }}
      />
      <Composition
        id="Festivals6"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 6",
          videoId: "festivals-6",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="Festivals7"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 7",
          videoId: "festivals-7",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="Festivals8"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 8",
          videoId: "festivals-8",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="Festivals9"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 9",
          videoId: "festivals-9",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="Festivals10"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 10",
          videoId: "festivals-10",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="Festivals11"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 11",
          videoId: "festivals-11",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Festivals12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 12",
          videoId: "festivals-12",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Festivals13"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 13",
          videoId: "festivals-13",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="Festivals14"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 14",
          videoId: "festivals-14",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="Festivals15"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 15",
          videoId: "festivals-15",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="Festivals16"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 16",
          videoId: "festivals-16",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="Festivals17"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 17",
          videoId: "festivals-17",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="Festivals18"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 18",
          videoId: "festivals-18",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="Festivals19"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 19",
          videoId: "festivals-19",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="Festivals20"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 20",
          videoId: "festivals-20",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="Festivals21"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 21",
          videoId: "festivals-21",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="Festivals22"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 22",
          videoId: "festivals-22",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="Festivals23"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 23",
          videoId: "festivals-23",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="Festivals24"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 24",
          videoId: "festivals-24",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="Festivals25"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 25",
          videoId: "festivals-25",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="Festivals26"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 26",
          videoId: "festivals-26",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="Festivals27"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 27",
          videoId: "festivals-27",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="Festivals28"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 28",
          videoId: "festivals-28",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="Festivals29"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 29",
          videoId: "festivals-29",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="Festivals30"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Festivals - Part 30",
          videoId: "festivals-30",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"D","word":"Diwali","emoji":"🪔","bgColor":"#FF8F00"},{"letter":"C","word":"Christmas","emoji":"🎄","bgColor":"#2E7D32"},{"letter":"E","word":"Easter","emoji":"🥚","bgColor":"#E91E63"},{"letter":"H","word":"Holi","emoji":"🎨","bgColor":"#D32F2F"},{"letter":"E","word":"Eid","emoji":"🌙","bgColor":"#4CAF50"},{"letter":"T","word":"Thanksgiving","emoji":"🦃","bgColor":"#FF8F00"},{"letter":"L","word":"Lunar New Year","emoji":"🏮","bgColor":"#D32F2F"},{"letter":"C","word":"Carnival","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"O","word":"Oktoberfest","emoji":"🍺","bgColor":"#FFB300"},{"letter":"S","word":"St. Patrick's Day","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"V","word":"Valentine's Day","emoji":"❤️","bgColor":"#E91E63"},{"letter":"N","word":"New Year","emoji":"🎆","bgColor":"#FFB300"},{"letter":"H","word":"Halloween","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mardi Gras","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"B","word":"Bastille Day","emoji":"🇫🇷","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
    </>
  );
};
