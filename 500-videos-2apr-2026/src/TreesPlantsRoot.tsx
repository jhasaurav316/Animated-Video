import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const TreesPlantsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TreesPlants1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 1",
          videoId: "trees-plants-1",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 2",
          videoId: "trees-plants-2",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Aloe Vera","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"J","word":"Jasmine","emoji":"🌸","bgColor":"#FAFAFA"},{"letter":"L","word":"Lavender","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"O","word":"Orchid","emoji":"🌺","bgColor":"#E91E63"},{"letter":"B","word":"Banyan","emoji":"🌳","bgColor":"#33691E"},{"letter":"N","word":"Neem","emoji":"🌿","bgColor":"#388E3C"},{"letter":"E","word":"Eucalyptus","emoji":"🌿","bgColor":"#43A047"},{"letter":"S","word":"Sequoia","emoji":"🌲","bgColor":"#5D4037"},{"letter":"C","word":"Cherry Blossom","emoji":"🌸","bgColor":"#F48FB1"},{"letter":"M","word":"Marigold","emoji":"🌻","bgColor":"#FF8F00"},{"letter":"H","word":"Hibiscus","emoji":"🌺","bgColor":"#D32F2F"},{"letter":"I","word":"Ivy","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"V","word":"Venus Flytrap","emoji":"🪴","bgColor":"#4CAF50"},{"letter":"C","word":"Coconut","emoji":"🥥","bgColor":"#4E342E"},{"letter":"M","word":"Mango Tree","emoji":"🥭","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 3",
          videoId: "trees-plants-3",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"A","word":"Apple Tree","emoji":"🍎","bgColor":"#C62828"},{"letter":"P","word":"Peach Tree","emoji":"🍑","bgColor":"#FF8A65"},{"letter":"G","word":"Grass","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#F9A825"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FBC02D"},{"letter":"R","word":"Redwood","emoji":"🌲","bgColor":"#6D4C41"},{"letter":"B","word":"Bonsai","emoji":"🌳","bgColor":"#33691E"},{"letter":"L","word":"Lotus","emoji":"🪷","bgColor":"#E91E63"},{"letter":"P","word":"Poppy","emoji":"🌺","bgColor":"#D32F2F"},{"letter":"D","word":"Daffodil","emoji":"🌼","bgColor":"#FDD835"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 4",
          videoId: "trees-plants-4",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 5",
          videoId: "trees-plants-5",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 6",
          videoId: "trees-plants-6",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 7",
          videoId: "trees-plants-7",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 8",
          videoId: "trees-plants-8",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 9",
          videoId: "trees-plants-9",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 10",
          videoId: "trees-plants-10",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 11",
          videoId: "trees-plants-11",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 12",
          videoId: "trees-plants-12",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 13",
          videoId: "trees-plants-13",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 14",
          videoId: "trees-plants-14",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 15",
          videoId: "trees-plants-15",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 16",
          videoId: "trees-plants-16",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 17",
          videoId: "trees-plants-17",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 18",
          videoId: "trees-plants-18",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 19",
          videoId: "trees-plants-19",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 20",
          videoId: "trees-plants-20",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 21",
          videoId: "trees-plants-21",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 22",
          videoId: "trees-plants-22",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 23",
          videoId: "trees-plants-23",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 24",
          videoId: "trees-plants-24",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 25",
          videoId: "trees-plants-25",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 26",
          videoId: "trees-plants-26",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 27",
          videoId: "trees-plants-27",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 28",
          videoId: "trees-plants-28",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 29",
          videoId: "trees-plants-29",
          bgGradient: ["#33691E","#AED581"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="TreesPlants30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trees & Plants - Part 30",
          videoId: "trees-plants-30",
          bgGradient: ["#004D40","#80CBC4"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"O","word":"Oak","emoji":"🌳","bgColor":"#5D4037"},{"letter":"P","word":"Pine","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"M","word":"Maple","emoji":"🍁","bgColor":"#D32F2F"},{"letter":"B","word":"Bamboo","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#388E3C"},{"letter":"P","word":"Palm","emoji":"🌴","bgColor":"#4CAF50"},{"letter":"W","word":"Willow","emoji":"🌳","bgColor":"#558B2F"},{"letter":"B","word":"Birch","emoji":"🌳","bgColor":"#F5F5F5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FBC02D"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F8BBD0"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFEB3B"},{"letter":"F","word":"Fern","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
