import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const KitchenAppliancesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KitchenAppliances1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 1",
          videoId: "kitchen-appliances-1",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 2",
          videoId: "kitchen-appliances-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"W","word":"Waffle Iron","emoji":"🧇","bgColor":"#FFB300"},{"letter":"F","word":"Food Processor","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"I","word":"Ice Maker","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"T","word":"Tea Pot","emoji":"🫖","bgColor":"#2E7D32"},{"letter":"E","word":"Espresso Machine","emoji":"☕","bgColor":"#3E2723"},{"letter":"P","word":"Popcorn Maker","emoji":"🍿","bgColor":"#FDD835"},{"letter":"S","word":"Sandwich Press","emoji":"🥪","bgColor":"#FFB74D"},{"letter":"C","word":"Can Opener","emoji":"🥫","bgColor":"#D32F2F"},{"letter":"D","word":"Deep Fryer","emoji":"🍟","bgColor":"#FF6F00"},{"letter":"A","word":"Air Fryer","emoji":"🌀","bgColor":"#455A64"},{"letter":"B","word":"Bread Maker","emoji":"🍞","bgColor":"#8D6E63"},{"letter":"H","word":"Hand Mixer","emoji":"🥄","bgColor":"#E91E63"},{"letter":"S","word":"Scale","emoji":"⚖️","bgColor":"#607D8B"},{"letter":"T","word":"Timer","emoji":"⏲️","bgColor":"#FDD835"},{"letter":"C","word":"Chopper","emoji":"🔪","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 3",
          videoId: "kitchen-appliances-3",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"V","word":"Vacuum Sealer","emoji":"📦","bgColor":"#607D8B"},{"letter":"L","word":"Ladle","emoji":"🥄","bgColor":"#455A64"},{"letter":"N","word":"Nutribullet","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"W","word":"Wok","emoji":"🥘","bgColor":"#212121"},{"letter":"Z","word":"Zester","emoji":"🍋","bgColor":"#FDD835"},{"letter":"Y","word":"Yogurt Maker","emoji":"🥛","bgColor":"#F5F5F5"},{"letter":"X","word":"Xtra Burner","emoji":"🔥","bgColor":"#FF5722"},{"letter":"U","word":"Utility Tray","emoji":"🍽️","bgColor":"#9E9E9E"},{"letter":"Q","word":"Quick Pot","emoji":"♨️","bgColor":"#455A64"},{"letter":"R","word":"Range Hood","emoji":"💨","bgColor":"#607D8B"},{"letter":"G","word":"Garbage Disposal","emoji":"🗑️","bgColor":"#37474F"},{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#212121"},{"letter":"S","word":"Spatula","emoji":"🥄","bgColor":"#FF8F00"},{"letter":"C","word":"Cutting Board","emoji":"🪵","bgColor":"#795548"},{"letter":"K","word":"Knife Set","emoji":"🔪","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 4",
          videoId: "kitchen-appliances-4",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 5",
          videoId: "kitchen-appliances-5",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 6",
          videoId: "kitchen-appliances-6",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 7",
          videoId: "kitchen-appliances-7",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 8",
          videoId: "kitchen-appliances-8",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 9",
          videoId: "kitchen-appliances-9",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 10",
          videoId: "kitchen-appliances-10",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 11",
          videoId: "kitchen-appliances-11",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 12",
          videoId: "kitchen-appliances-12",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 13",
          videoId: "kitchen-appliances-13",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 14",
          videoId: "kitchen-appliances-14",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 15",
          videoId: "kitchen-appliances-15",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 16",
          videoId: "kitchen-appliances-16",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 17",
          videoId: "kitchen-appliances-17",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 18",
          videoId: "kitchen-appliances-18",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 19",
          videoId: "kitchen-appliances-19",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 20",
          videoId: "kitchen-appliances-20",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 21",
          videoId: "kitchen-appliances-21",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 22",
          videoId: "kitchen-appliances-22",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 23",
          videoId: "kitchen-appliances-23",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 24",
          videoId: "kitchen-appliances-24",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 25",
          videoId: "kitchen-appliances-25",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 26",
          videoId: "kitchen-appliances-26",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 27",
          videoId: "kitchen-appliances-27",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 28",
          videoId: "kitchen-appliances-28",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 29",
          videoId: "kitchen-appliances-29",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="KitchenAppliances30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Appliances - Part 30",
          videoId: "kitchen-appliances-30",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#455A64"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"D","word":"Dishwasher","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#FF6F00"},{"letter":"C","word":"Coffee Maker","emoji":"☕","bgColor":"#5D4037"},{"letter":"M","word":"Mixer","emoji":"🎂","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"S","word":"Stove","emoji":"🍳","bgColor":"#D32F2F"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#795548"},{"letter":"R","word":"Rice Cooker","emoji":"🍚","bgColor":"#F5F5F5"},{"letter":"P","word":"Pressure Cooker","emoji":"♨️","bgColor":"#455A64"},{"letter":"S","word":"Slow Cooker","emoji":"🥘","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
