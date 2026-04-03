import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const SpicesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Spices1"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 1",
          videoId: "spices-1",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="Spices2"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 2",
          videoId: "spices-2",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Clove","emoji":"🟤","bgColor":"#3E2723"},{"letter":"S","word":"Saffron","emoji":"🟡","bgColor":"#FFB300"},{"letter":"V","word":"Vanilla","emoji":"🟤","bgColor":"#8D6E63"},{"letter":"D","word":"Dill","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"C","word":"Chili","emoji":"🌶️","bgColor":"#D32F2F"},{"letter":"F","word":"Fennel","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"S","word":"Star Anise","emoji":"⭐","bgColor":"#5D4037"},{"letter":"L","word":"Lavender","emoji":"💜","bgColor":"#7B1FA2"},{"letter":"B","word":"Bay Leaf","emoji":"🍃","bgColor":"#2E7D32"},{"letter":"A","word":"Allspice","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Coriander","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"P","word":"Paprika","emoji":"🌶️","bgColor":"#D32F2F"},{"letter":"M","word":"Mustard Seed","emoji":"🟡","bgColor":"#FDD835"},{"letter":"W","word":"Wasabi","emoji":"🟢","bgColor":"#4CAF50"},{"letter":"T","word":"Tarragon","emoji":"🌿","bgColor":"#558B2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="Spices3"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 3",
          videoId: "spices-3",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sage","emoji":"🌿","bgColor":"#607D8B"},{"letter":"C","word":"Cayenne","emoji":"🌶️","bgColor":"#FF5722"},{"letter":"H","word":"Horseradish","emoji":"🌿","bgColor":"#F5F5F5"},{"letter":"J","word":"Juniper Berry","emoji":"🟤","bgColor":"#311B92"},{"letter":"L","word":"Lemongrass","emoji":"🌿","bgColor":"#CDDC39"},{"letter":"M","word":"Marjoram","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"S","word":"Sumac","emoji":"🔴","bgColor":"#C62828"},{"letter":"Z","word":"Za'atar","emoji":"🌿","bgColor":"#795548"},{"letter":"R","word":"Red Pepper","emoji":"🌶️","bgColor":"#D32F2F"},{"letter":"E","word":"Epazote","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"K","word":"Kaffir Lime","emoji":"🍋","bgColor":"#CDDC39"},{"letter":"U","word":"Umami Powder","emoji":"🟤","bgColor":"#795548"},{"letter":"I","word":"Italian Herbs","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"Y","word":"Yellow Curry","emoji":"🟡","bgColor":"#FFB300"},{"letter":"H","word":"Herb Mix","emoji":"🌿","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="Spices4"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 4",
          videoId: "spices-4",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="Spices5"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 5",
          videoId: "spices-5",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="Spices6"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 6",
          videoId: "spices-6",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="Spices7"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 7",
          videoId: "spices-7",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="Spices8"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 8",
          videoId: "spices-8",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="Spices9"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 9",
          videoId: "spices-9",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="Spices10"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 10",
          videoId: "spices-10",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="Spices11"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 11",
          videoId: "spices-11",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="Spices12"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 12",
          videoId: "spices-12",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="Spices13"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 13",
          videoId: "spices-13",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="Spices14"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 14",
          videoId: "spices-14",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="Spices15"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 15",
          videoId: "spices-15",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="Spices16"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 16",
          videoId: "spices-16",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="Spices17"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 17",
          videoId: "spices-17",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="Spices18"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 18",
          videoId: "spices-18",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="Spices19"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 19",
          videoId: "spices-19",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="Spices20"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 20",
          videoId: "spices-20",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="Spices21"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 21",
          videoId: "spices-21",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="Spices22"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 22",
          videoId: "spices-22",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="Spices23"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 23",
          videoId: "spices-23",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
      <Composition
        id="Spices24"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 24",
          videoId: "spices-24",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 110,
        }}
      />
      <Composition
        id="Spices25"
        component={AlphabetLongTemplate}
        durationInFrames={4620}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 25",
          videoId: "spices-25",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 154,
        }}
      />
      <Composition
        id="Spices26"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 26",
          videoId: "spices-26",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 112,
        }}
      />
      <Composition
        id="Spices27"
        component={AlphabetLongTemplate}
        durationInFrames={4710}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 27",
          videoId: "spices-27",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 157,
        }}
      />
      <Composition
        id="Spices28"
        component={AlphabetLongTemplate}
        durationInFrames={3450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 28",
          videoId: "spices-28",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#8D2C0A",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 115,
        }}
      />
      <Composition
        id="Spices29"
        component={AlphabetLongTemplate}
        durationInFrames={4770}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 29",
          videoId: "spices-29",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 159,
        }}
      />
      <Composition
        id="Spices30"
        component={AlphabetLongTemplate}
        durationInFrames={3510}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 30",
          videoId: "spices-30",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cinnamon","emoji":"🟤","bgColor":"#BF360C"},{"letter":"P","word":"Pepper","emoji":"🌶️","bgColor":"#212121"},{"letter":"S","word":"Salt","emoji":"🧂","bgColor":"#9E9E9E"},{"letter":"T","word":"Turmeric","emoji":"🟡","bgColor":"#FFB300"},{"letter":"G","word":"Ginger","emoji":"🫚","bgColor":"#FF8F00"},{"letter":"G","word":"Garlic","emoji":"🧄","bgColor":"#F5F5F5"},{"letter":"B","word":"Basil","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Oregano","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"R","word":"Rosemary","emoji":"🌿","bgColor":"#1B5E20"},{"letter":"T","word":"Thyme","emoji":"🌿","bgColor":"#558B2F"},{"letter":"P","word":"Parsley","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"M","word":"Mint","emoji":"🌿","bgColor":"#00BCD4"},{"letter":"C","word":"Cumin","emoji":"🟤","bgColor":"#795548"},{"letter":"C","word":"Cardamom","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"N","word":"Nutmeg","emoji":"🟤","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 117,
        }}
      />
    </>
  );
};
