import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const FamousPlacesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FamousPlaces1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 1",
          videoId: "famous-places-1",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 2",
          videoId: "famous-places-2",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"G","word":"Grand Canyon","emoji":"🏜️","bgColor":"#BF360C"},{"letter":"V","word":"Victoria Falls","emoji":"💧","bgColor":"#0277BD"},{"letter":"K","word":"Kilimanjaro","emoji":"🌋","bgColor":"#5D4037"},{"letter":"A","word":"Angel Falls","emoji":"🌊","bgColor":"#00838F"},{"letter":"R","word":"Red Fort","emoji":"🏰","bgColor":"#C62828"},{"letter":"H","word":"Hollywood Sign","emoji":"🎬","bgColor":"#F57F17"},{"letter":"S","word":"Stonehenge","emoji":"🪨","bgColor":"#607D8B"},{"letter":"P","word":"Parthenon","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"C","word":"Christ Redeemer","emoji":"✝️","bgColor":"#2E7D32"},{"letter":"B","word":"Burj Khalifa","emoji":"🏢","bgColor":"#0D47A1"},{"letter":"M","word":"Mona Lisa","emoji":"🖼️","bgColor":"#4527A0"},{"letter":"W","word":"White House","emoji":"🏛️","bgColor":"#F5F5F5"},{"letter":"N","word":"Northern Lights","emoji":"🌌","bgColor":"#00E676"},{"letter":"G","word":"Great Barrier Reef","emoji":"🐠","bgColor":"#00BCD4"},{"letter":"D","word":"Dead Sea","emoji":"🌊","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 3",
          videoId: "famous-places-3",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"L","word":"London Bridge","emoji":"🌉","bgColor":"#546E7A"},{"letter":"P","word":"Petra","emoji":"🏛️","bgColor":"#BF360C"},{"letter":"F","word":"Forbidden City","emoji":"🏯","bgColor":"#C62828"},{"letter":"H","word":"Hagia Sophia","emoji":"🕌","bgColor":"#E65100"},{"letter":"T","word":"Tower of London","emoji":"🏰","bgColor":"#795548"},{"letter":"M","word":"Mont Blanc","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"R","word":"Rock of Gibraltar","emoji":"🪨","bgColor":"#5D4037"},{"letter":"V","word":"Venice Canals","emoji":"🚣","bgColor":"#0277BD"},{"letter":"A","word":"Angkor Wat","emoji":"🛕","bgColor":"#4E342E"},{"letter":"M","word":"Mount Fuji","emoji":"🗻","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 4",
          videoId: "famous-places-4",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 5",
          videoId: "famous-places-5",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 6",
          videoId: "famous-places-6",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 7",
          videoId: "famous-places-7",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 8",
          videoId: "famous-places-8",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 9",
          videoId: "famous-places-9",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 10",
          videoId: "famous-places-10",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 11",
          videoId: "famous-places-11",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 12",
          videoId: "famous-places-12",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 13",
          videoId: "famous-places-13",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 14",
          videoId: "famous-places-14",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 15",
          videoId: "famous-places-15",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 16",
          videoId: "famous-places-16",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 17",
          videoId: "famous-places-17",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 18",
          videoId: "famous-places-18",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 19",
          videoId: "famous-places-19",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 20",
          videoId: "famous-places-20",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 21",
          videoId: "famous-places-21",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 22",
          videoId: "famous-places-22",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 23",
          videoId: "famous-places-23",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 24",
          videoId: "famous-places-24",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 25",
          videoId: "famous-places-25",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 26",
          videoId: "famous-places-26",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 27",
          videoId: "famous-places-27",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 28",
          videoId: "famous-places-28",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 29",
          videoId: "famous-places-29",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FamousPlaces30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Places - Part 30",
          videoId: "famous-places-30",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [{"letter":"T","word":"Taj Mahal","emoji":"🕌","bgColor":"#F5F5F5"},{"letter":"E","word":"Eiffel Tower","emoji":"🗼","bgColor":"#455A64"},{"letter":"G","word":"Great Wall","emoji":"🏯","bgColor":"#C62828"},{"letter":"P","word":"Pyramids","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"S","word":"Statue of Liberty","emoji":"🗽","bgColor":"#2E7D32"},{"letter":"C","word":"Colosseum","emoji":"🏟️","bgColor":"#795548"},{"letter":"B","word":"Big Ben","emoji":"🕰️","bgColor":"#1565C0"},{"letter":"M","word":"Machu Picchu","emoji":"⛰️","bgColor":"#2E7D32"},{"letter":"S","word":"Sydney Opera","emoji":"🎭","bgColor":"#0277BD"},{"letter":"L","word":"Leaning Tower","emoji":"🏗️","bgColor":"#F5F5F5"},{"letter":"G","word":"Golden Gate","emoji":"🌉","bgColor":"#D32F2F"},{"letter":"N","word":"Niagara Falls","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Mount Everest","emoji":"🏔️","bgColor":"#546E7A"},{"letter":"A","word":"Amazon River","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"S","word":"Sahara Desert","emoji":"🏜️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
