import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const BreadsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Breads1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 1",
          videoId: "breads-1",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 2",
          videoId: "breads-2",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"R","word":"Roll","emoji":"🍞","bgColor":"#A1887F"},{"letter":"F","word":"Flatbread","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"C","word":"Challah","emoji":"🍞","bgColor":"#FFB300"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#E91E63"},{"letter":"E","word":"English Muffin","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"G","word":"Garlic Bread","emoji":"🧄","bgColor":"#FFB74D"},{"letter":"L","word":"Lavash","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"O","word":"Olive Bread","emoji":"🫒","bgColor":"#558B2F"},{"letter":"P","word":"Pumpernickel","emoji":"🍞","bgColor":"#3E2723"},{"letter":"S","word":"Sandwich Bread","emoji":"🍞","bgColor":"#A1887F"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"W","word":"Whole Wheat","emoji":"🌾","bgColor":"#795548"},{"letter":"Z","word":"Zopf Bread","emoji":"🍞","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 3",
          videoId: "breads-3",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"A","word":"Arepa","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"B","word":"Banana Bread","emoji":"🍌","bgColor":"#FDD835"},{"letter":"H","word":"Hot Dog Bun","emoji":"🌭","bgColor":"#8D6E63"},{"letter":"I","word":"Irish Soda Bread","emoji":"🍞","bgColor":"#2E7D32"},{"letter":"K","word":"Kaiser Roll","emoji":"🍞","bgColor":"#A1887F"},{"letter":"M","word":"Matzo","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"N","word":"Nutbread","emoji":"🥜","bgColor":"#795548"},{"letter":"R","word":"Roti","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"C","word":"Crumpet","emoji":"🫓","bgColor":"#FFB300"},{"letter":"D","word":"Damper Bread","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"J","word":"Johnnycake","emoji":"🍞","bgColor":"#FDD835"},{"letter":"U","word":"Unleavened Bread","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"V","word":"Vienna Bread","emoji":"🍞","bgColor":"#A1887F"},{"letter":"Y","word":"Yeast Roll","emoji":"🍞","bgColor":"#FFB74D"},{"letter":"X","word":"Xylopita","emoji":"🫓","bgColor":"#8D6E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 4",
          videoId: "breads-4",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 5",
          videoId: "breads-5",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 6",
          videoId: "breads-6",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 7",
          videoId: "breads-7",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 8",
          videoId: "breads-8",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 9",
          videoId: "breads-9",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 10",
          videoId: "breads-10",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 11",
          videoId: "breads-11",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 12",
          videoId: "breads-12",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 13",
          videoId: "breads-13",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 14",
          videoId: "breads-14",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 15",
          videoId: "breads-15",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 16",
          videoId: "breads-16",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 17",
          videoId: "breads-17",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 18",
          videoId: "breads-18",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 19",
          videoId: "breads-19",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 20",
          videoId: "breads-20",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 21",
          videoId: "breads-21",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 22",
          videoId: "breads-22",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 23",
          videoId: "breads-23",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 24",
          videoId: "breads-24",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 25",
          videoId: "breads-25",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 26",
          videoId: "breads-26",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 27",
          videoId: "breads-27",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 28",
          videoId: "breads-28",
          bgGradient: ["#8D6E63","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 29",
          videoId: "breads-29",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Breads30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breads of the World - Part 30",
          videoId: "breads-30",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"B","word":"Baguette","emoji":"🥖","bgColor":"#8D6E63"},{"letter":"S","word":"Sourdough","emoji":"🍞","bgColor":"#A1887F"},{"letter":"N","word":"Naan","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"P","word":"Pita","emoji":"🫓","bgColor":"#D7CCC8"},{"letter":"T","word":"Tortilla","emoji":"🫓","bgColor":"#FFB300"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"F","word":"Focaccia","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"B","word":"Brioche","emoji":"🍞","bgColor":"#FFB300"},{"letter":"R","word":"Rye Bread","emoji":"🍞","bgColor":"#5D4037"},{"letter":"C","word":"Ciabatta","emoji":"🍞","bgColor":"#A1887F"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#8D6E63"},{"letter":"C","word":"Cornbread","emoji":"🍞","bgColor":"#FDD835"},{"letter":"S","word":"Scone","emoji":"🍞","bgColor":"#D7CCC8"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
