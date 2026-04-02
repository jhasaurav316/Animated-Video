import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const BreakfastFoodsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BreakfastFoods1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 1",
          videoId: "breakfast-foods-1",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 2",
          videoId: "breakfast-foods-2",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"B","word":"Blueberry","emoji":"🫐","bgColor":"#1565C0"},{"letter":"Y","word":"Yogurt","emoji":"🥛","bgColor":"#F48FB1"},{"letter":"H","word":"Honey","emoji":"🍯","bgColor":"#FFB300"},{"letter":"J","word":"Jam","emoji":"🍓","bgColor":"#D32F2F"},{"letter":"B","word":"Butter","emoji":"🧈","bgColor":"#FFD54F"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#E91E63"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"B","word":"Bagel","emoji":"🥯","bgColor":"#A1887F"},{"letter":"G","word":"Granola","emoji":"🥣","bgColor":"#8D6E63"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"O","word":"Omelet","emoji":"🍳","bgColor":"#FDD835"},{"letter":"H","word":"Hash Brown","emoji":"🥔","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 3",
          videoId: "breakfast-foods-3",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Avocado Toast","emoji":"🥑","bgColor":"#4CAF50"},{"letter":"C","word":"Cheese","emoji":"🧀","bgColor":"#FDD835"},{"letter":"F","word":"Fruit Salad","emoji":"🍎","bgColor":"#E91E63"},{"letter":"P","word":"Porridge","emoji":"🥣","bgColor":"#A1887F"},{"letter":"R","word":"Raisin","emoji":"🍇","bgColor":"#5D4037"},{"letter":"N","word":"Nut","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"S","word":"Scone","emoji":"🧁","bgColor":"#FFB74D"},{"letter":"C","word":"Cornflakes","emoji":"🌽","bgColor":"#FDD835"},{"letter":"M","word":"Maple Syrup","emoji":"🍁","bgColor":"#FF8F00"},{"letter":"P","word":"Pastry","emoji":"🥐","bgColor":"#A1887F"},{"letter":"W","word":"Wrap","emoji":"🌯","bgColor":"#4CAF50"},{"letter":"C","word":"Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"L","word":"Latte","emoji":"☕","bgColor":"#A1887F"},{"letter":"P","word":"Peanut Butter","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"F","word":"Fried Egg","emoji":"🍳","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 4",
          videoId: "breakfast-foods-4",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 5",
          videoId: "breakfast-foods-5",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 6",
          videoId: "breakfast-foods-6",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 7",
          videoId: "breakfast-foods-7",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 8",
          videoId: "breakfast-foods-8",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 9",
          videoId: "breakfast-foods-9",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 10",
          videoId: "breakfast-foods-10",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 11",
          videoId: "breakfast-foods-11",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 12",
          videoId: "breakfast-foods-12",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 13",
          videoId: "breakfast-foods-13",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 14",
          videoId: "breakfast-foods-14",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 15",
          videoId: "breakfast-foods-15",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 16",
          videoId: "breakfast-foods-16",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 17",
          videoId: "breakfast-foods-17",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 18",
          videoId: "breakfast-foods-18",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 19",
          videoId: "breakfast-foods-19",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 20",
          videoId: "breakfast-foods-20",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 21",
          videoId: "breakfast-foods-21",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 22",
          videoId: "breakfast-foods-22",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 23",
          videoId: "breakfast-foods-23",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 24",
          videoId: "breakfast-foods-24",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 25",
          videoId: "breakfast-foods-25",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 26",
          videoId: "breakfast-foods-26",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 27",
          videoId: "breakfast-foods-27",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 28",
          videoId: "breakfast-foods-28",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 29",
          videoId: "breakfast-foods-29",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BreakfastFoods30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Foods - Part 30",
          videoId: "breakfast-foods-30",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"E","word":"Egg","emoji":"🥚","bgColor":"#FDD835"},{"letter":"T","word":"Toast","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"C","word":"Cereal","emoji":"🥣","bgColor":"#FF8F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"B","word":"Bacon","emoji":"🥓","bgColor":"#D32F2F"},{"letter":"S","word":"Sausage","emoji":"🌭","bgColor":"#795548"},{"letter":"O","word":"Oatmeal","emoji":"🥣","bgColor":"#A1887F"},{"letter":"F","word":"French Toast","emoji":"🍞","bgColor":"#FFB300"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"S","word":"Strawberry","emoji":"🍓","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
