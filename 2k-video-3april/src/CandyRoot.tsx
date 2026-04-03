import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const CandyRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Candy1"
        component={AlphabetLongTemplate}
        durationInFrames={3960}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 1",
          videoId: "candy-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 132,
        }}
      />
      <Composition
        id="Candy2"
        component={AlphabetLongTemplate}
        durationInFrames={2700}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 2",
          videoId: "candy-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Taffy","emoji":"🍬","bgColor":"#E91E63"},{"letter":"H","word":"Hard Candy","emoji":"🍬","bgColor":"#00BCD4"},{"letter":"L","word":"Licorice","emoji":"🍬","bgColor":"#212121"},{"letter":"R","word":"Rock Candy","emoji":"💎","bgColor":"#90CAF9"},{"letter":"C","word":"Chewing Gum","emoji":"🫧","bgColor":"#F48FB1"},{"letter":"S","word":"Skittles","emoji":"🌈","bgColor":"#D32F2F"},{"letter":"J","word":"Jawbreaker","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Gumball","emoji":"⚫","bgColor":"#E91E63"},{"letter":"W","word":"Wafer","emoji":"🍪","bgColor":"#FFB74D"},{"letter":"M","word":"Mints","emoji":"🍬","bgColor":"#4CAF50"},{"letter":"C","word":"Candy Bar","emoji":"🍫","bgColor":"#795548"},{"letter":"P","word":"Praline","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"T","word":"Truffle","emoji":"🍫","bgColor":"#3E2723"},{"letter":"S","word":"Sugar Plum","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"B","word":"Bonbon","emoji":"🍬","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 90,
        }}
      />
      <Composition
        id="Candy3"
        component={AlphabetLongTemplate}
        durationInFrames={4020}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 3",
          videoId: "candy-3",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Dark Chocolate","emoji":"🍫","bgColor":"#212121"},{"letter":"W","word":"White Chocolate","emoji":"🍫","bgColor":"#F5F5F5"},{"letter":"M","word":"Milk Chocolate","emoji":"🍫","bgColor":"#795548"},{"letter":"H","word":"Honey Drop","emoji":"🍯","bgColor":"#FFB300"},{"letter":"A","word":"Almond Joy","emoji":"🥜","bgColor":"#5D4037"},{"letter":"C","word":"Candy Corn","emoji":"🌽","bgColor":"#FF8F00"},{"letter":"P","word":"Pop Rocks","emoji":"💥","bgColor":"#D32F2F"},{"letter":"Z","word":"Zotz","emoji":"🍬","bgColor":"#7B1FA2"},{"letter":"S","word":"Smarties","emoji":"🍬","bgColor":"#FF6F00"},{"letter":"R","word":"Red Hots","emoji":"🔴","bgColor":"#C62828"},{"letter":"K","word":"Kit Kat","emoji":"🍫","bgColor":"#D32F2F"},{"letter":"M","word":"M&Ms","emoji":"🍬","bgColor":"#FDD835"},{"letter":"T","word":"Twizzler","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"S","word":"Starburst","emoji":"⭐","bgColor":"#FF6F00"},{"letter":"J","word":"Jolly Rancher","emoji":"🍬","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 134,
        }}
      />
      <Composition
        id="Candy4"
        component={AlphabetLongTemplate}
        durationInFrames={2760}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 4",
          videoId: "candy-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 92,
        }}
      />
      <Composition
        id="Candy5"
        component={AlphabetLongTemplate}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 5",
          videoId: "candy-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 136,
        }}
      />
      <Composition
        id="Candy6"
        component={AlphabetLongTemplate}
        durationInFrames={2850}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 6",
          videoId: "candy-6",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 95,
        }}
      />
      <Composition
        id="Candy7"
        component={AlphabetLongTemplate}
        durationInFrames={4170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 7",
          videoId: "candy-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 139,
        }}
      />
      <Composition
        id="Candy8"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 8",
          videoId: "candy-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="Candy9"
        component={AlphabetLongTemplate}
        durationInFrames={4230}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 9",
          videoId: "candy-9",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 141,
        }}
      />
      <Composition
        id="Candy10"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 10",
          videoId: "candy-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="Candy11"
        component={AlphabetLongTemplate}
        durationInFrames={4320}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 11",
          videoId: "candy-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 144,
        }}
      />
      <Composition
        id="Candy12"
        component={AlphabetLongTemplate}
        durationInFrames={3060}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 12",
          videoId: "candy-12",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 102,
        }}
      />
      <Composition
        id="Candy13"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 13",
          videoId: "candy-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
      <Composition
        id="Candy14"
        component={AlphabetLongTemplate}
        durationInFrames={3120}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 14",
          videoId: "candy-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 104,
        }}
      />
      <Composition
        id="Candy15"
        component={AlphabetLongTemplate}
        durationInFrames={4440}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 15",
          videoId: "candy-15",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 148,
        }}
      />
      <Composition
        id="Candy16"
        component={AlphabetLongTemplate}
        durationInFrames={3210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 16",
          videoId: "candy-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 107,
        }}
      />
      <Composition
        id="Candy17"
        component={AlphabetLongTemplate}
        durationInFrames={4530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 17",
          videoId: "candy-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 151,
        }}
      />
      <Composition
        id="Candy18"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 18",
          videoId: "candy-18",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Candy19"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 19",
          videoId: "candy-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="Candy20"
        component={AlphabetLongTemplate}
        durationInFrames={3330}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 20",
          videoId: "candy-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 111,
        }}
      />
      <Composition
        id="Candy21"
        component={AlphabetLongTemplate}
        durationInFrames={4680}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 21",
          videoId: "candy-21",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 156,
        }}
      />
      <Composition
        id="Candy22"
        component={AlphabetLongTemplate}
        durationInFrames={3420}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 22",
          videoId: "candy-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 114,
        }}
      />
      <Composition
        id="Candy23"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 23",
          videoId: "candy-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="Candy24"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 24",
          videoId: "candy-24",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="Candy25"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 25",
          videoId: "candy-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="Candy26"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 26",
          videoId: "candy-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="Candy27"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 27",
          videoId: "candy-27",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="Candy28"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 28",
          videoId: "candy-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Candy29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 29",
          videoId: "candy-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Candy30"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Candy & Sweets - Part 30",
          videoId: "candy-30",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"L","word":"Lollipop","emoji":"🍭","bgColor":"#4CAF50"},{"letter":"G","word":"Gummy Bear","emoji":"🐻","bgColor":"#FF6F00"},{"letter":"C","word":"Chocolate","emoji":"🍫","bgColor":"#5D4037"},{"letter":"C","word":"Candy Cane","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"J","word":"Jelly Bean","emoji":"🫘","bgColor":"#E91E63"},{"letter":"C","word":"Cotton Candy","emoji":"🍡","bgColor":"#F48FB1"},{"letter":"T","word":"Toffee","emoji":"🍬","bgColor":"#BF360C"},{"letter":"C","word":"Caramel","emoji":"🍯","bgColor":"#FF8F00"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"F","word":"Fudge","emoji":"🍫","bgColor":"#3E2723"},{"letter":"G","word":"Gumdrop","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"P","word":"Peppermint","emoji":"🍬","bgColor":"#D32F2F"},{"letter":"B","word":"Butterscotch","emoji":"🍬","bgColor":"#FFB300"},{"letter":"N","word":"Nougat","emoji":"🍫","bgColor":"#A1887F"},{"letter":"S","word":"Sour Candy","emoji":"🍋","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
    </>
  );
};
