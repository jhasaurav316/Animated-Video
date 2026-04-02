import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const DrinksRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Drinks1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 1",
          videoId: "drinks-1",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 2",
          videoId: "drinks-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Latte","emoji":"☕","bgColor":"#A1887F"},{"letter":"C","word":"Cappuccino","emoji":"☕","bgColor":"#795548"},{"letter":"E","word":"Espresso","emoji":"☕","bgColor":"#3E2723"},{"letter":"I","word":"Iced Tea","emoji":"🧊","bgColor":"#00BCD4"},{"letter":"M","word":"Mocha","emoji":"☕","bgColor":"#5D4037"},{"letter":"S","word":"Sparkling Water","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"C","word":"Cranberry Juice","emoji":"🍒","bgColor":"#D32F2F"},{"letter":"P","word":"Punch","emoji":"🍹","bgColor":"#E91E63"},{"letter":"L","word":"Lime Soda","emoji":"🍋","bgColor":"#4CAF50"},{"letter":"M","word":"Mango Lassi","emoji":"🥭","bgColor":"#FF8F00"},{"letter":"S","word":"Strawberry Milk","emoji":"🍓","bgColor":"#E91E63"},{"letter":"B","word":"Banana Shake","emoji":"🍌","bgColor":"#FDD835"},{"letter":"C","word":"Chocolate Milk","emoji":"🍫","bgColor":"#5D4037"},{"letter":"H","word":"Herbal Tea","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"G","word":"Ginger Ale","emoji":"🫚","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 3",
          videoId: "drinks-3",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Root Beer","emoji":"🍺","bgColor":"#5D4037"},{"letter":"T","word":"Tropical Punch","emoji":"🍹","bgColor":"#FF5722"},{"letter":"K","word":"Kefir","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"P","word":"Peach Nectar","emoji":"🍑","bgColor":"#FFB74D"},{"letter":"V","word":"Vanilla Shake","emoji":"🍦","bgColor":"#FFB300"},{"letter":"C","word":"Cherry Soda","emoji":"🍒","bgColor":"#D32F2F"},{"letter":"B","word":"Bubble Tea","emoji":"🧋","bgColor":"#795548"},{"letter":"F","word":"Fruit Punch","emoji":"🍹","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon Juice","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"A","word":"Almond Milk","emoji":"🥛","bgColor":"#A1887F"},{"letter":"S","word":"Soy Milk","emoji":"🥛","bgColor":"#FFB74D"},{"letter":"O","word":"Oat Milk","emoji":"🥛","bgColor":"#D7CCC8"},{"letter":"P","word":"Pineapple Juice","emoji":"🍍","bgColor":"#FDD835"},{"letter":"C","word":"Chai","emoji":"☕","bgColor":"#FF8F00"},{"letter":"Y","word":"Yogurt Drink","emoji":"🥛","bgColor":"#F48FB1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 4",
          videoId: "drinks-4",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 5",
          videoId: "drinks-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 6",
          videoId: "drinks-6",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 7",
          videoId: "drinks-7",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 8",
          videoId: "drinks-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 9",
          videoId: "drinks-9",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 10",
          videoId: "drinks-10",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 11",
          videoId: "drinks-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 12",
          videoId: "drinks-12",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 13",
          videoId: "drinks-13",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 14",
          videoId: "drinks-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 15",
          videoId: "drinks-15",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 16",
          videoId: "drinks-16",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 17",
          videoId: "drinks-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 18",
          videoId: "drinks-18",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 19",
          videoId: "drinks-19",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 20",
          videoId: "drinks-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 21",
          videoId: "drinks-21",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 22",
          videoId: "drinks-22",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 23",
          videoId: "drinks-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 24",
          videoId: "drinks-24",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 25",
          videoId: "drinks-25",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 26",
          videoId: "drinks-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 27",
          videoId: "drinks-27",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 28",
          videoId: "drinks-28",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 29",
          videoId: "drinks-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Drinks30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks - Part 30",
          videoId: "drinks-30",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"W","word":"Water","emoji":"💧","bgColor":"#0288D1"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"M","word":"Milk","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"S","word":"Smoothie","emoji":"🥤","bgColor":"#4CAF50"},{"letter":"H","word":"Hot Chocolate","emoji":"☕","bgColor":"#5D4037"},{"letter":"T","word":"Tea","emoji":"🍵","bgColor":"#4CAF50"},{"letter":"C","word":"Coffee","emoji":"☕","bgColor":"#795548"},{"letter":"S","word":"Soda","emoji":"🥤","bgColor":"#D32F2F"},{"letter":"M","word":"Milkshake","emoji":"🥤","bgColor":"#E91E63"},{"letter":"O","word":"Orange Juice","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Juice","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"G","word":"Grape Juice","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Coconut Water","emoji":"🥥","bgColor":"#4E342E"},{"letter":"L","word":"Lassi","emoji":"🥛","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
