import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const MountainsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Mountains1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 1",
          videoId: "mountains-1",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 2",
          videoId: "mountains-2",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"C","word":"Canyon","emoji":"🏜️","bgColor":"#FF8F00"},{"letter":"V","word":"Valley","emoji":"🌄","bgColor":"#4CAF50"},{"letter":"R","word":"Ridge","emoji":"⛰️","bgColor":"#795548"},{"letter":"C","word":"Cliff","emoji":"🧗","bgColor":"#5D4037"},{"letter":"G","word":"Glacier","emoji":"🧊","bgColor":"#E3F2FD"},{"letter":"P","word":"Plateau","emoji":"🏜️","bgColor":"#A1887F"},{"letter":"H","word":"Hill","emoji":"⛰️","bgColor":"#4CAF50"},{"letter":"M","word":"Mesa","emoji":"🏜️","bgColor":"#FF8F00"},{"letter":"B","word":"Butte","emoji":"🏜️","bgColor":"#8D6E63"},{"letter":"C","word":"Cascade","emoji":"💧","bgColor":"#42A5F5"},{"letter":"L","word":"Lava","emoji":"🌋","bgColor":"#FF5722"},{"letter":"T","word":"Terrain","emoji":"🗺️","bgColor":"#5D4037"},{"letter":"S","word":"Slope","emoji":"⛷️","bgColor":"#607D8B"},{"letter":"T","word":"Trail","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Boulder","emoji":"🪨","bgColor":"#9E9E9E"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 3",
          videoId: "mountains-3",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Ravine","emoji":"🏔️","bgColor":"#37474F"},{"letter":"C","word":"Crevasse","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"A","word":"Altitude","emoji":"🏔️","bgColor":"#455A64"},{"letter":"S","word":"Snowcap","emoji":"❄️","bgColor":"#F5F5F5"},{"letter":"L","word":"Landslide","emoji":"🪨","bgColor":"#795548"},{"letter":"F","word":"Foothill","emoji":"⛰️","bgColor":"#4CAF50"},{"letter":"E","word":"Erosion","emoji":"🌊","bgColor":"#8D6E63"},{"letter":"M","word":"Moraine","emoji":"🪨","bgColor":"#607D8B"},{"letter":"G","word":"Gorge","emoji":"🏔️","bgColor":"#37474F"},{"letter":"S","word":"Sierra","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"T","word":"Tundra","emoji":"🥶","bgColor":"#B0BEC5"},{"letter":"W","word":"Waterfall","emoji":"💧","bgColor":"#0288D1"},{"letter":"O","word":"Outcrop","emoji":"🪨","bgColor":"#795548"},{"letter":"D","word":"Dune","emoji":"🏜️","bgColor":"#FFB300"},{"letter":"N","word":"North Face","emoji":"🏔️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 4",
          videoId: "mountains-4",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 5",
          videoId: "mountains-5",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 6",
          videoId: "mountains-6",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 7",
          videoId: "mountains-7",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 8",
          videoId: "mountains-8",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 9",
          videoId: "mountains-9",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 10",
          videoId: "mountains-10",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 11",
          videoId: "mountains-11",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 12",
          videoId: "mountains-12",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 13",
          videoId: "mountains-13",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 14",
          videoId: "mountains-14",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 15",
          videoId: "mountains-15",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 16",
          videoId: "mountains-16",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 17",
          videoId: "mountains-17",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 18",
          videoId: "mountains-18",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 19",
          videoId: "mountains-19",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 20",
          videoId: "mountains-20",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 21",
          videoId: "mountains-21",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 22",
          videoId: "mountains-22",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 23",
          videoId: "mountains-23",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 24",
          videoId: "mountains-24",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 25",
          videoId: "mountains-25",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 26",
          videoId: "mountains-26",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 27",
          videoId: "mountains-27",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 28",
          videoId: "mountains-28",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 29",
          videoId: "mountains-29",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Mountains30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains & Hills - Part 30",
          videoId: "mountains-30",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"E","word":"Everest","emoji":"🏔️","bgColor":"#455A64"},{"letter":"K","word":"K2","emoji":"🏔️","bgColor":"#37474F"},{"letter":"K","word":"Kilimanjaro","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"M","word":"Matterhorn","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"D","word":"Denali","emoji":"🏔️","bgColor":"#607D8B"},{"letter":"F","word":"Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"A","word":"Alps","emoji":"🏔️","bgColor":"#00BCD4"},{"letter":"R","word":"Rockies","emoji":"🏔️","bgColor":"#5D4037"},{"letter":"H","word":"Himalayas","emoji":"🏔️","bgColor":"#455A64"},{"letter":"A","word":"Andes","emoji":"🏔️","bgColor":"#795548"},{"letter":"A","word":"Appalachian","emoji":"🏔️","bgColor":"#2E7D32"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#D32F2F"},{"letter":"P","word":"Peak","emoji":"⛰️","bgColor":"#607D8B"},{"letter":"S","word":"Summit","emoji":"🏔️","bgColor":"#B0BEC5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
