import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const KitchenItemsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KitchenItems1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 1",
          videoId: "kitchen-items-1",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 2",
          videoId: "kitchen-items-2",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Rolling Pin","emoji":"🪵","bgColor":"#795548"},{"letter":"C","word":"Cutting Board","emoji":"🪵","bgColor":"#5D4037"},{"letter":"W","word":"Whisk","emoji":"🍳","bgColor":"#FFB300"},{"letter":"S","word":"Spatula","emoji":"🍳","bgColor":"#455A64"},{"letter":"L","word":"Ladle","emoji":"🥄","bgColor":"#607D8B"},{"letter":"A","word":"Apron","emoji":"🧑‍🍳","bgColor":"#F5F5F5"},{"letter":"C","word":"Colander","emoji":"🫙","bgColor":"#9E9E9E"},{"letter":"G","word":"Grater","emoji":"🧀","bgColor":"#BDBDBD"},{"letter":"T","word":"Tongs","emoji":"🦀","bgColor":"#37474F"},{"letter":"M","word":"Mixer","emoji":"🍰","bgColor":"#E91E63"},{"letter":"J","word":"Juicer","emoji":"🍊","bgColor":"#FF6F00"},{"letter":"F","word":"Fridge","emoji":"🧊","bgColor":"#F5F5F5"},{"letter":"S","word":"Sink","emoji":"🚿","bgColor":"#90CAF9"},{"letter":"D","word":"Dish Rack","emoji":"🍽️","bgColor":"#607D8B"},{"letter":"P","word":"Peeler","emoji":"🥔","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 3",
          videoId: "kitchen-items-3",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 4",
          videoId: "kitchen-items-4",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 5",
          videoId: "kitchen-items-5",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 6",
          videoId: "kitchen-items-6",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 7",
          videoId: "kitchen-items-7",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 8",
          videoId: "kitchen-items-8",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 9",
          videoId: "kitchen-items-9",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 10",
          videoId: "kitchen-items-10",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 11",
          videoId: "kitchen-items-11",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 12",
          videoId: "kitchen-items-12",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 13",
          videoId: "kitchen-items-13",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 14",
          videoId: "kitchen-items-14",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 15",
          videoId: "kitchen-items-15",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 16",
          videoId: "kitchen-items-16",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 17",
          videoId: "kitchen-items-17",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 18",
          videoId: "kitchen-items-18",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 19",
          videoId: "kitchen-items-19",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 20",
          videoId: "kitchen-items-20",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 21",
          videoId: "kitchen-items-21",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 22",
          videoId: "kitchen-items-22",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 23",
          videoId: "kitchen-items-23",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 24",
          videoId: "kitchen-items-24",
          bgGradient: ["#4E342E","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KitchenItems25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kitchen Items - Part 25",
          videoId: "kitchen-items-25",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"P","word":"Pan","emoji":"🍳","bgColor":"#37474F"},{"letter":"P","word":"Pot","emoji":"🍲","bgColor":"#455A64"},{"letter":"K","word":"Knife","emoji":"🔪","bgColor":"#616161"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"F","word":"Fork","emoji":"🍴","bgColor":"#BDBDBD"},{"letter":"P","word":"Plate","emoji":"🍽️","bgColor":"#F5F5F5"},{"letter":"C","word":"Cup","emoji":"☕","bgColor":"#795548"},{"letter":"G","word":"Glass","emoji":"🥛","bgColor":"#B0BEC5"},{"letter":"B","word":"Bowl","emoji":"🥣","bgColor":"#1565C0"},{"letter":"O","word":"Oven","emoji":"🔥","bgColor":"#C62828"},{"letter":"S","word":"Stove","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"M","word":"Microwave","emoji":"📦","bgColor":"#37474F"},{"letter":"B","word":"Blender","emoji":"🫙","bgColor":"#4CAF50"},{"letter":"T","word":"Toaster","emoji":"🍞","bgColor":"#FF8F00"},{"letter":"K","word":"Kettle","emoji":"🫖","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
