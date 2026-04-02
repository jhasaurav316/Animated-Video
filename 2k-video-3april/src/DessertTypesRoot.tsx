import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const DessertTypesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DessertTypes1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 1",
          videoId: "dessert-types-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 2",
          videoId: "dessert-types-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sundae","emoji":"🍨","bgColor":"#D32F2F"},{"letter":"P","word":"Panna Cotta","emoji":"🍮","bgColor":"#F5F5F5"},{"letter":"E","word":"Eclair","emoji":"🍫","bgColor":"#5D4037"},{"letter":"S","word":"Souffle","emoji":"🍮","bgColor":"#FDD835"},{"letter":"M","word":"Mousse","emoji":"🍫","bgColor":"#3E2723"},{"letter":"C","word":"Creme Brulee","emoji":"🍮","bgColor":"#FFB300"},{"letter":"G","word":"Gelato","emoji":"🍨","bgColor":"#00BCD4"},{"letter":"S","word":"Sorbet","emoji":"🍧","bgColor":"#E91E63"},{"letter":"T","word":"Trifle","emoji":"🍰","bgColor":"#D32F2F"},{"letter":"B","word":"Baklava","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"C","word":"Cannoli","emoji":"🍫","bgColor":"#8D6E63"},{"letter":"R","word":"Rice Pudding","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"K","word":"Kulfi","emoji":"🍦","bgColor":"#4CAF50"},{"letter":"G","word":"Gulab Jamun","emoji":"🟤","bgColor":"#BF360C"},{"letter":"M","word":"Mochi","emoji":"🍡","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 3",
          videoId: "dessert-types-3",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Danish","emoji":"🥐","bgColor":"#FFB300"},{"letter":"A","word":"Apple Strudel","emoji":"🍎","bgColor":"#D32F2F"},{"letter":"L","word":"Lemon Tart","emoji":"🍋","bgColor":"#FDD835"},{"letter":"H","word":"Honey Cake","emoji":"🍯","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍬","bgColor":"#F5F5F5"},{"letter":"O","word":"Opera Cake","emoji":"🎵","bgColor":"#3E2723"},{"letter":"P","word":"Profiterole","emoji":"🍫","bgColor":"#5D4037"},{"letter":"V","word":"Vanilla Cake","emoji":"🍰","bgColor":"#FDD835"},{"letter":"Z","word":"Zabaglione","emoji":"🍷","bgColor":"#FFB300"},{"letter":"U","word":"Upside Down Cake","emoji":"🎂","bgColor":"#FF6F00"},{"letter":"Y","word":"Yogurt Parfait","emoji":"🍨","bgColor":"#F5F5F5"},{"letter":"S","word":"Strawberry Tart","emoji":"🍓","bgColor":"#D32F2F"},{"letter":"F","word":"Fruit Salad","emoji":"🍇","bgColor":"#7B1FA2"},{"letter":"C","word":"Chocolate Cake","emoji":"🍫","bgColor":"#3E2723"},{"letter":"R","word":"Red Velvet","emoji":"❤️","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 4",
          videoId: "dessert-types-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 5",
          videoId: "dessert-types-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 6",
          videoId: "dessert-types-6",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 7",
          videoId: "dessert-types-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 8",
          videoId: "dessert-types-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 9",
          videoId: "dessert-types-9",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 10",
          videoId: "dessert-types-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 11",
          videoId: "dessert-types-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 12",
          videoId: "dessert-types-12",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 13",
          videoId: "dessert-types-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 14",
          videoId: "dessert-types-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 15",
          videoId: "dessert-types-15",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 16",
          videoId: "dessert-types-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 17",
          videoId: "dessert-types-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 18",
          videoId: "dessert-types-18",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 19",
          videoId: "dessert-types-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 20",
          videoId: "dessert-types-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 21",
          videoId: "dessert-types-21",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 22",
          videoId: "dessert-types-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 23",
          videoId: "dessert-types-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 24",
          videoId: "dessert-types-24",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 25",
          videoId: "dessert-types-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 26",
          videoId: "dessert-types-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 27",
          videoId: "dessert-types-27",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 28",
          videoId: "dessert-types-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 29",
          videoId: "dessert-types-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DessertTypes30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dessert Types - Part 30",
          videoId: "dessert-types-30",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"C","word":"Cake","emoji":"🎂","bgColor":"#E91E63"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#FF80AB"},{"letter":"P","word":"Pie","emoji":"🥧","bgColor":"#FF8F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"},{"letter":"B","word":"Brownie","emoji":"🍫","bgColor":"#5D4037"},{"letter":"D","word":"Donut","emoji":"🍩","bgColor":"#FF6F00"},{"letter":"C","word":"Cupcake","emoji":"🧁","bgColor":"#E91E63"},{"letter":"P","word":"Pudding","emoji":"🍮","bgColor":"#FFB300"},{"letter":"J","word":"Jelly","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"M","word":"Macaron","emoji":"🟣","bgColor":"#9C27B0"},{"letter":"C","word":"Cheesecake","emoji":"🍰","bgColor":"#FFB300"},{"letter":"T","word":"Tiramisu","emoji":"☕","bgColor":"#5D4037"},{"letter":"W","word":"Waffle","emoji":"🧇","bgColor":"#FFB300"},{"letter":"C","word":"Crepe","emoji":"🫓","bgColor":"#FFB74D"},{"letter":"F","word":"Flan","emoji":"🍮","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
