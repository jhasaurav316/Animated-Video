import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const DessertsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Desserts1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 1",
          videoId: "desserts-1",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 2",
          videoId: "desserts-2",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"J","word":"Jelly","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"M","word":"Macaron","emoji":"🍪","bgColor":"#F48FB1"},{"letter":"T","word":"Tart","emoji":"🍰","bgColor":"#FBC02D"},{"letter":"S","word":"Sundae","emoji":"🍨","bgColor":"#E91E63"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"E","word":"Eclair","emoji":"🥖","bgColor":"#5D4037"},{"letter":"C","word":"Croissant","emoji":"🥐","bgColor":"#FFB74D"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#00BCD4"},{"letter":"S","word":"Sorbet","emoji":"🍨","bgColor":"#FF6F00"},{"letter":"T","word":"Tiramisu","emoji":"🍰","bgColor":"#795548"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"H","word":"Honey","emoji":"🍯","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 3",
          videoId: "desserts-3",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"S","word":"S'mores","emoji":"🍫","bgColor":"#5D4037"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"P","word":"Praline","emoji":"🥜","bgColor":"#795548"},{"letter":"C","word":"Churro","emoji":"🥖","bgColor":"#FFB74D"},{"letter":"G","word":"Gelato","emoji":"🍨","bgColor":"#4CAF50"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 4",
          videoId: "desserts-4",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 5",
          videoId: "desserts-5",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 6",
          videoId: "desserts-6",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 7",
          videoId: "desserts-7",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 8",
          videoId: "desserts-8",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 9",
          videoId: "desserts-9",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 10",
          videoId: "desserts-10",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 11",
          videoId: "desserts-11",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 12",
          videoId: "desserts-12",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 13",
          videoId: "desserts-13",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 14",
          videoId: "desserts-14",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 15",
          videoId: "desserts-15",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 16",
          videoId: "desserts-16",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 17",
          videoId: "desserts-17",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 18",
          videoId: "desserts-18",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 19",
          videoId: "desserts-19",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 20",
          videoId: "desserts-20",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 21",
          videoId: "desserts-21",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 22",
          videoId: "desserts-22",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 23",
          videoId: "desserts-23",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 24",
          videoId: "desserts-24",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 25",
          videoId: "desserts-25",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 26",
          videoId: "desserts-26",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 27",
          videoId: "desserts-27",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 28",
          videoId: "desserts-28",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 29",
          videoId: "desserts-29",
          bgGradient: ["#FFB74D","#FFF3E0"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Desserts30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desserts & Sweets - Part 30",
          videoId: "desserts-30",
          bgGradient: ["#A1887F","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#795548"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#3E2723"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#D32F2F"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FF8F00"},{"letter":"P","word":"Pancake","emoji":"🥞","bgColor":"#FFB74D"},{"letter":"M","word":"Muffin","emoji":"🧁","bgColor":"#795548"},{"letter":"C","word":"Candy","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
