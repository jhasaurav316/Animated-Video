import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const CheeseRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Cheese1"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 1",
          videoId: "cheese-1",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="Cheese2"
        component={AlphabetLongTemplate}
        durationInFrames={4110}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 2",
          videoId: "cheese-2",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"E","word":"Emmental","emoji":"🧀","bgColor":"#FDD835"},{"letter":"H","word":"Havarti","emoji":"🧀","bgColor":"#FFB300"},{"letter":"A","word":"Asiago","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Monterey Jack","emoji":"🧀","bgColor":"#FDD835"},{"letter":"C","word":"Colby","emoji":"🧀","bgColor":"#FF6F00"},{"letter":"G","word":"Goat Cheese","emoji":"🐐","bgColor":"#F5F5F5"},{"letter":"L","word":"Limburger","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"T","word":"Taleggio","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"R","word":"Roquefort","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"S","word":"Stilton","emoji":"🧀","bgColor":"#0277BD"},{"letter":"P","word":"Pecorino","emoji":"🧀","bgColor":"#FFB300"},{"letter":"M","word":"Muenster","emoji":"🧀","bgColor":"#FF6F00"},{"letter":"B","word":"Burrata","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"F","word":"Fontina","emoji":"🧀","bgColor":"#FFB300"},{"letter":"N","word":"Neufchatel","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 137,
        }}
      />
      <Composition
        id="Cheese3"
        component={AlphabetLongTemplate}
        durationInFrames={2850}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 3",
          videoId: "cheese-3",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wensleydale","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"J","word":"Jarlsberg","emoji":"🧀","bgColor":"#FDD835"},{"letter":"K","word":"Kashkaval","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"O","word":"Oaxaca Cheese","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"D","word":"Danblu","emoji":"🧀","bgColor":"#0288D1"},{"letter":"V","word":"Velveeta","emoji":"🧀","bgColor":"#FFB300"},{"letter":"Z","word":"Zamorano","emoji":"🧀","bgColor":"#A1887F"},{"letter":"I","word":"Irish Cheddar","emoji":"🧀","bgColor":"#2E7D32"},{"letter":"U","word":"Urgelia","emoji":"🧀","bgColor":"#8D6E63"},{"letter":"Q","word":"Queso Fresco","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"Y","word":"Yarg Cheese","emoji":"🧀","bgColor":"#4CAF50"},{"letter":"X","word":"Xynotyri","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"A","word":"American Cheese","emoji":"🧀","bgColor":"#FDD835"},{"letter":"L","word":"Leicester","emoji":"🧀","bgColor":"#FF6F00"},{"letter":"S","word":"String Cheese","emoji":"🧀","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 95,
        }}
      />
      <Composition
        id="Cheese4"
        component={AlphabetLongTemplate}
        durationInFrames={4170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 4",
          videoId: "cheese-4",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 139,
        }}
      />
      <Composition
        id="Cheese5"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 5",
          videoId: "cheese-5",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="Cheese6"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 6",
          videoId: "cheese-6",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="Cheese7"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 7",
          videoId: "cheese-7",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
      <Composition
        id="Cheese8"
        component={AlphabetLongTemplate}
        durationInFrames={4320}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 8",
          videoId: "cheese-8",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 144,
        }}
      />
      <Composition
        id="Cheese9"
        component={AlphabetLongTemplate}
        durationInFrames={3060}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 9",
          videoId: "cheese-9",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 102,
        }}
      />
      <Composition
        id="Cheese10"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 10",
          videoId: "cheese-10",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
      <Composition
        id="Cheese11"
        component={AlphabetLongTemplate}
        durationInFrames={3120}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 11",
          videoId: "cheese-11",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 104,
        }}
      />
      <Composition
        id="Cheese12"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 12",
          videoId: "cheese-12",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="Cheese13"
        component={AlphabetLongTemplate}
        durationInFrames={3210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 13",
          videoId: "cheese-13",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 107,
        }}
      />
      <Composition
        id="Cheese14"
        component={AlphabetLongTemplate}
        durationInFrames={4530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 14",
          videoId: "cheese-14",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 151,
        }}
      />
      <Composition
        id="Cheese15"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 15",
          videoId: "cheese-15",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Cheese16"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 16",
          videoId: "cheese-16",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="Cheese17"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 17",
          videoId: "cheese-17",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 112,
        }}
      />
      <Composition
        id="Cheese18"
        component={AlphabetLongTemplate}
        durationInFrames={4680}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 18",
          videoId: "cheese-18",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 156,
        }}
      />
      <Composition
        id="Cheese19"
        component={AlphabetLongTemplate}
        durationInFrames={3420}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 19",
          videoId: "cheese-19",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 114,
        }}
      />
      <Composition
        id="Cheese20"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 20",
          videoId: "cheese-20",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="Cheese21"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 21",
          videoId: "cheese-21",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="Cheese22"
        component={AlphabetLongTemplate}
        durationInFrames={4830}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 22",
          videoId: "cheese-22",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 161,
        }}
      />
      <Composition
        id="Cheese23"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 23",
          videoId: "cheese-23",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="Cheese24"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 24",
          videoId: "cheese-24",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="Cheese25"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 25",
          videoId: "cheese-25",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Cheese26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 26",
          videoId: "cheese-26",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Cheese27"
        component={AlphabetLongTemplate}
        durationInFrames={3720}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 27",
          videoId: "cheese-27",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 124,
        }}
      />
      <Composition
        id="Cheese28"
        component={AlphabetLongTemplate}
        durationInFrames={5040}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 28",
          videoId: "cheese-28",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 168,
        }}
      />
      <Composition
        id="Cheese29"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 29",
          videoId: "cheese-29",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="Cheese30"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cheese Types - Part 30",
          videoId: "cheese-30",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cheddar","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"M","word":"Mozzarella","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"B","word":"Brie","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"P","word":"Parmesan","emoji":"🧀","bgColor":"#FFB300"},{"letter":"G","word":"Gouda","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"S","word":"Swiss","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Feta","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"C","word":"Camembert","emoji":"🧀","bgColor":"#F5F5F5"},{"letter":"R","word":"Ricotta","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"B","word":"Blue Cheese","emoji":"🧀","bgColor":"#0D47A1"},{"letter":"G","word":"Gruyere","emoji":"🧀","bgColor":"#FFB300"},{"letter":"P","word":"Provolone","emoji":"🧀","bgColor":"#FDD835"},{"letter":"M","word":"Manchego","emoji":"🧀","bgColor":"#FFB74D"},{"letter":"C","word":"Cream Cheese","emoji":"🧀","bgColor":"#FAFAFA"},{"letter":"C","word":"Cottage Cheese","emoji":"🧀","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
    </>
  );
};
