import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const SnacksRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Snacks1"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 1",
          videoId: "snacks-1",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="Snacks2"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 2",
          videoId: "snacks-2",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"W","word":"Walnuts","emoji":"🥜","bgColor":"#5D4037"},{"letter":"S","word":"Sunflower Seeds","emoji":"🌻","bgColor":"#FDD835"},{"letter":"R","word":"Raisins","emoji":"🍇","bgColor":"#5D4037"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#FF8F00"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#3E2723"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"Y","word":"Yogurt Cup","emoji":"🥛","bgColor":"#F48FB1"},{"letter":"H","word":"Hummus","emoji":"🥙","bgColor":"#FFB300"},{"letter":"C","word":"Celery Sticks","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"C","word":"Carrot Sticks","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"A","word":"Apple Slices","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"G","word":"Grapes","emoji":"🍇","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="Snacks3"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 3",
          videoId: "snacks-3",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"E","word":"Energy Bar","emoji":"🍫","bgColor":"#FF8F00"},{"letter":"S","word":"S'mores","emoji":"🍫","bgColor":"#5D4037"},{"letter":"O","word":"Onion Rings","emoji":"🧅","bgColor":"#FFB300"},{"letter":"F","word":"French Fries","emoji":"🍟","bgColor":"#FDD835"},{"letter":"T","word":"Taco","emoji":"🌮","bgColor":"#FF6F00"},{"letter":"P","word":"Pizza Roll","emoji":"🍕","bgColor":"#D32F2F"},{"letter":"M","word":"Mini Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Corn Dog","emoji":"🌭","bgColor":"#FFB300"},{"letter":"S","word":"Samosa","emoji":"🥟","bgColor":"#FF8F00"},{"letter":"W","word":"Wafer","emoji":"🍪","bgColor":"#FFB74D"},{"letter":"B","word":"Biscuit","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"C","word":"Churro","emoji":"🥖","bgColor":"#FF8F00"},{"letter":"G","word":"Goldfish","emoji":"🐟","bgColor":"#FF6F00"},{"letter":"L","word":"Licorice","emoji":"🍬","bgColor":"#212121"},{"letter":"P","word":"Pistachio","emoji":"🥜","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="Snacks4"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 4",
          videoId: "snacks-4",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Snacks5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 5",
          videoId: "snacks-5",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Snacks6"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 6",
          videoId: "snacks-6",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="Snacks7"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 7",
          videoId: "snacks-7",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="Snacks8"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 8",
          videoId: "snacks-8",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="Snacks9"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 9",
          videoId: "snacks-9",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="Snacks10"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 10",
          videoId: "snacks-10",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="Snacks11"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 11",
          videoId: "snacks-11",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="Snacks12"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 12",
          videoId: "snacks-12",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="Snacks13"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 13",
          videoId: "snacks-13",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="Snacks14"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 14",
          videoId: "snacks-14",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="Snacks15"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 15",
          videoId: "snacks-15",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="Snacks16"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 16",
          videoId: "snacks-16",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="Snacks17"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 17",
          videoId: "snacks-17",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="Snacks18"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 18",
          videoId: "snacks-18",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="Snacks19"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 19",
          videoId: "snacks-19",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="Snacks20"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 20",
          videoId: "snacks-20",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="Snacks21"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 21",
          videoId: "snacks-21",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="Snacks22"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 22",
          videoId: "snacks-22",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="Snacks23"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 23",
          videoId: "snacks-23",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
      <Composition
        id="Snacks24"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 24",
          videoId: "snacks-24",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="Snacks25"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 25",
          videoId: "snacks-25",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="Snacks26"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 26",
          videoId: "snacks-26",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="Snacks27"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 27",
          videoId: "snacks-27",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="Snacks28"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 28",
          videoId: "snacks-28",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="Snacks29"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 29",
          videoId: "snacks-29",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="Snacks30"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks - Part 30",
          videoId: "snacks-30",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chips","emoji":"🍟","bgColor":"#FFB300"},{"letter":"P","word":"Popcorn","emoji":"🍿","bgColor":"#FDD835"},{"letter":"P","word":"Pretzel","emoji":"🥨","bgColor":"#795548"},{"letter":"N","word":"Nachos","emoji":"🧀","bgColor":"#FF8F00"},{"letter":"C","word":"Crackers","emoji":"🍘","bgColor":"#FFB74D"},{"letter":"C","word":"Cookies","emoji":"🍪","bgColor":"#795548"},{"letter":"G","word":"Granola Bar","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#5D4037"},{"letter":"F","word":"Fruit Snack","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Cheese Stick","emoji":"🧀","bgColor":"#FDD835"},{"letter":"J","word":"Jerky","emoji":"🥩","bgColor":"#795548"},{"letter":"R","word":"Rice Cake","emoji":"🍘","bgColor":"#F5F5F5"},{"letter":"P","word":"Peanuts","emoji":"🥜","bgColor":"#FF8F00"},{"letter":"A","word":"Almonds","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cashews","emoji":"🥜","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
    </>
  );
};
