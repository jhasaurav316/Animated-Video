import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const FarmCropsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FarmCrops1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 1",
          videoId: "farm-crops-1",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 2",
          videoId: "farm-crops-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Peanut","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"A","word":"Alfalfa","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"H","word":"Hay","emoji":"🌾","bgColor":"#FFB300"},{"letter":"F","word":"Flax","emoji":"🌿","bgColor":"#0288D1"},{"letter":"C","word":"Canola","emoji":"🌼","bgColor":"#FDD835"},{"letter":"R","word":"Rye","emoji":"🌾","bgColor":"#795548"},{"letter":"B","word":"Buckwheat","emoji":"🌾","bgColor":"#5D4037"},{"letter":"S","word":"Sorghum","emoji":"🌾","bgColor":"#BF360C"},{"letter":"Q","word":"Quinoa","emoji":"🌾","bgColor":"#A1887F"},{"letter":"T","word":"Tobacco","emoji":"🍃","bgColor":"#2E7D32"},{"letter":"C","word":"Cassava","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"Y","word":"Yam","emoji":"🍠","bgColor":"#FF6F00"},{"letter":"J","word":"Jute","emoji":"🌿","bgColor":"#795548"},{"letter":"C","word":"Clover","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"G","word":"Grain","emoji":"🌾","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 3",
          videoId: "farm-crops-3",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"H","word":"Hemp","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"L","word":"Lentil","emoji":"🫘","bgColor":"#BF360C"},{"letter":"P","word":"Pea","emoji":"🫛","bgColor":"#4CAF50"},{"letter":"K","word":"Kale","emoji":"🥬","bgColor":"#2E7D32"},{"letter":"S","word":"Spinach","emoji":"🥬","bgColor":"#1B5E20"},{"letter":"A","word":"Asparagus","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"E","word":"Eggplant","emoji":"🍆","bgColor":"#7B1FA2"},{"letter":"Z","word":"Zucchini","emoji":"🥒","bgColor":"#4CAF50"},{"letter":"P","word":"Pumpkin","emoji":"🎃","bgColor":"#FF6F00"},{"letter":"M","word":"Mushroom","emoji":"🍄","bgColor":"#795548"},{"letter":"B","word":"Bean","emoji":"🫘","bgColor":"#5D4037"},{"letter":"N","word":"Nut","emoji":"🌰","bgColor":"#795548"},{"letter":"D","word":"Date Palm","emoji":"🌴","bgColor":"#8D6E63"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#D32F2F"},{"letter":"I","word":"Indigo Plant","emoji":"🌿","bgColor":"#311B92"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 4",
          videoId: "farm-crops-4",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 5",
          videoId: "farm-crops-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 6",
          videoId: "farm-crops-6",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 7",
          videoId: "farm-crops-7",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 8",
          videoId: "farm-crops-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 9",
          videoId: "farm-crops-9",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 10",
          videoId: "farm-crops-10",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 11",
          videoId: "farm-crops-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 12",
          videoId: "farm-crops-12",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 13",
          videoId: "farm-crops-13",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 14",
          videoId: "farm-crops-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 15",
          videoId: "farm-crops-15",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 16",
          videoId: "farm-crops-16",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 17",
          videoId: "farm-crops-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 18",
          videoId: "farm-crops-18",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 19",
          videoId: "farm-crops-19",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 20",
          videoId: "farm-crops-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 21",
          videoId: "farm-crops-21",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 22",
          videoId: "farm-crops-22",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 23",
          videoId: "farm-crops-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 24",
          videoId: "farm-crops-24",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 25",
          videoId: "farm-crops-25",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 26",
          videoId: "farm-crops-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 27",
          videoId: "farm-crops-27",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 28",
          videoId: "farm-crops-28",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 29",
          videoId: "farm-crops-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FarmCrops30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Crops - Part 30",
          videoId: "farm-crops-30",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [{"letter":"W","word":"Wheat","emoji":"🌾","bgColor":"#FFB300"},{"letter":"R","word":"Rice","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"C","word":"Corn","emoji":"🌽","bgColor":"#FDD835"},{"letter":"S","word":"Soybean","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"C","word":"Cotton","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Sugarcane","emoji":"🎋","bgColor":"#2E7D32"},{"letter":"P","word":"Potato","emoji":"🥔","bgColor":"#8D6E63"},{"letter":"T","word":"Tomato","emoji":"🍅","bgColor":"#D32F2F"},{"letter":"C","word":"Carrot","emoji":"🥕","bgColor":"#FF6F00"},{"letter":"O","word":"Onion","emoji":"🧅","bgColor":"#FFB74D"},{"letter":"L","word":"Lettuce","emoji":"🥬","bgColor":"#4CAF50"},{"letter":"B","word":"Barley","emoji":"🌾","bgColor":"#A1887F"},{"letter":"O","word":"Oats","emoji":"🌾","bgColor":"#D7CCC8"},{"letter":"M","word":"Millet","emoji":"🌾","bgColor":"#FFB300"},{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
