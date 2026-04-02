import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const BuildingsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Buildings1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 1",
          videoId: "buildings-1",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 2",
          videoId: "buildings-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Library","emoji":"📚","bgColor":"#795548"},{"letter":"M","word":"Museum","emoji":"🏛️","bgColor":"#4527A0"},{"letter":"S","word":"Stadium","emoji":"🏟️","bgColor":"#2E7D32"},{"letter":"A","word":"Airport","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Post Office","emoji":"📮","bgColor":"#D32F2F"},{"letter":"B","word":"Bank","emoji":"🏦","bgColor":"#1565C0"},{"letter":"R","word":"Restaurant","emoji":"🍽️","bgColor":"#FF6F00"},{"letter":"H","word":"Hotel","emoji":"🏨","bgColor":"#4527A0"},{"letter":"S","word":"Store","emoji":"🏪","bgColor":"#4CAF50"},{"letter":"W","word":"Warehouse","emoji":"📦","bgColor":"#795548"},{"letter":"P","word":"Prison","emoji":"🏚️","bgColor":"#37474F"},{"letter":"M","word":"Mall","emoji":"🏬","bgColor":"#E91E63"},{"letter":"C","word":"Cottage","emoji":"🏡","bgColor":"#8D6E63"},{"letter":"I","word":"Igloo","emoji":"🏠","bgColor":"#B0BEC5"},{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 3",
          videoId: "buildings-3",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pagoda","emoji":"🏯","bgColor":"#C62828"},{"letter":"W","word":"Windmill","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"S","word":"Silo","emoji":"🏗️","bgColor":"#FF8F00"},{"letter":"D","word":"Dam","emoji":"🏗️","bgColor":"#0288D1"},{"letter":"C","word":"Cinema","emoji":"🎬","bgColor":"#7B1FA2"},{"letter":"G","word":"Gym","emoji":"🏋️","bgColor":"#FF6F00"},{"letter":"H","word":"Hut","emoji":"🛖","bgColor":"#795548"},{"letter":"F","word":"Fort","emoji":"🏰","bgColor":"#5D4037"},{"letter":"C","word":"Cabin","emoji":"🏠","bgColor":"#8D6E63"},{"letter":"T","word":"Theater","emoji":"🎭","bgColor":"#C62828"},{"letter":"A","word":"Arena","emoji":"🏟️","bgColor":"#1565C0"},{"letter":"O","word":"Observatory","emoji":"🔭","bgColor":"#311B92"},{"letter":"D","word":"Dome","emoji":"🏛️","bgColor":"#9E9E9E"},{"letter":"P","word":"Pyramid","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"R","word":"Ruins","emoji":"🏚️","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 4",
          videoId: "buildings-4",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 5",
          videoId: "buildings-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 6",
          videoId: "buildings-6",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 7",
          videoId: "buildings-7",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 8",
          videoId: "buildings-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 9",
          videoId: "buildings-9",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 10",
          videoId: "buildings-10",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 11",
          videoId: "buildings-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 12",
          videoId: "buildings-12",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 13",
          videoId: "buildings-13",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 14",
          videoId: "buildings-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 15",
          videoId: "buildings-15",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 16",
          videoId: "buildings-16",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 17",
          videoId: "buildings-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 18",
          videoId: "buildings-18",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 19",
          videoId: "buildings-19",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 20",
          videoId: "buildings-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 21",
          videoId: "buildings-21",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 22",
          videoId: "buildings-22",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 23",
          videoId: "buildings-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 24",
          videoId: "buildings-24",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 25",
          videoId: "buildings-25",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 26",
          videoId: "buildings-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 27",
          videoId: "buildings-27",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 28",
          videoId: "buildings-28",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 29",
          videoId: "buildings-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Buildings30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Buildings - Part 30",
          videoId: "buildings-30",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"House","emoji":"🏠","bgColor":"#FF8F00"},{"letter":"S","word":"School","emoji":"🏫","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"C","word":"Church","emoji":"⛪","bgColor":"#F5F5F5"},{"letter":"M","word":"Mosque","emoji":"🕌","bgColor":"#00838F"},{"letter":"T","word":"Temple","emoji":"🛕","bgColor":"#FF8F00"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"P","word":"Palace","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"L","word":"Lighthouse","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"B","word":"Bridge","emoji":"🌉","bgColor":"#455A64"},{"letter":"T","word":"Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"S","word":"Skyscraper","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"F","word":"Factory","emoji":"🏭","bgColor":"#37474F"},{"letter":"B","word":"Barn","emoji":"🏚️","bgColor":"#D32F2F"},{"letter":"G","word":"Garage","emoji":"🏗️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
