import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const FurnitureRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Furniture1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 1",
          videoId: "furniture-1",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 2",
          videoId: "furniture-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Bookcase","emoji":"📚","bgColor":"#3E2723"},{"letter":"S","word":"Stool","emoji":"🪑","bgColor":"#FF8F00"},{"letter":"B","word":"Bench","emoji":"🪑","bgColor":"#4CAF50"},{"letter":"C","word":"Couch","emoji":"🛋️","bgColor":"#7B1FA2"},{"letter":"R","word":"Rocking Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"H","word":"Hammock","emoji":"🏖️","bgColor":"#00BCD4"},{"letter":"V","word":"Vase","emoji":"🏺","bgColor":"#E91E63"},{"letter":"P","word":"Pillow","emoji":"🛌","bgColor":"#90CAF9"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#FF6F00"},{"letter":"F","word":"Fan","emoji":"🌀","bgColor":"#0288D1"},{"letter":"T","word":"TV Stand","emoji":"📺","bgColor":"#37474F"},{"letter":"N","word":"Nightstand","emoji":"🛏️","bgColor":"#5D4037"},{"letter":"F","word":"Footrest","emoji":"🦶","bgColor":"#8D6E63"},{"letter":"C","word":"Chandelier","emoji":"💡","bgColor":"#FFB300"},{"letter":"D","word":"Dressing Table","emoji":"🪞","bgColor":"#F48FB1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 3",
          videoId: "furniture-3",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"A","word":"Armchair","emoji":"🪑","bgColor":"#795548"},{"letter":"B","word":"Bunk Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"C","word":"Cradle","emoji":"🛏️","bgColor":"#F48FB1"},{"letter":"D","word":"Dining Table","emoji":"🍽️","bgColor":"#5D4037"},{"letter":"E","word":"End Table","emoji":"🪑","bgColor":"#8D6E63"},{"letter":"F","word":"Futon","emoji":"🛋️","bgColor":"#4CAF50"},{"letter":"G","word":"Grandfather Clock","emoji":"🕰️","bgColor":"#3E2723"},{"letter":"H","word":"Hutch","emoji":"🗄️","bgColor":"#795548"},{"letter":"I","word":"Iron Board","emoji":"👔","bgColor":"#607D8B"},{"letter":"K","word":"Kitchen Island","emoji":"🍳","bgColor":"#FF8F00"},{"letter":"L","word":"Loveseat","emoji":"🛋️","bgColor":"#E91E63"},{"letter":"M","word":"Mattress","emoji":"🛏️","bgColor":"#90CAF9"},{"letter":"P","word":"Picture Frame","emoji":"🖼️","bgColor":"#FFB300"},{"letter":"Q","word":"Quilt","emoji":"🧵","bgColor":"#7B1FA2"},{"letter":"R","word":"Recliner","emoji":"🪑","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 4",
          videoId: "furniture-4",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 5",
          videoId: "furniture-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 6",
          videoId: "furniture-6",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 7",
          videoId: "furniture-7",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 8",
          videoId: "furniture-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 9",
          videoId: "furniture-9",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 10",
          videoId: "furniture-10",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 11",
          videoId: "furniture-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 12",
          videoId: "furniture-12",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 13",
          videoId: "furniture-13",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 14",
          videoId: "furniture-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 15",
          videoId: "furniture-15",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 16",
          videoId: "furniture-16",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 17",
          videoId: "furniture-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 18",
          videoId: "furniture-18",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 19",
          videoId: "furniture-19",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 20",
          videoId: "furniture-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 21",
          videoId: "furniture-21",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 22",
          videoId: "furniture-22",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 23",
          videoId: "furniture-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 24",
          videoId: "furniture-24",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 25",
          videoId: "furniture-25",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 26",
          videoId: "furniture-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 27",
          videoId: "furniture-27",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 28",
          videoId: "furniture-28",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 29",
          videoId: "furniture-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Furniture30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Furniture - Part 30",
          videoId: "furniture-30",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#795548"},{"letter":"T","word":"Table","emoji":"🪑","bgColor":"#5D4037"},{"letter":"B","word":"Bed","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"S","word":"Sofa","emoji":"🛋️","bgColor":"#8D6E63"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"W","word":"Wardrobe","emoji":"🚪","bgColor":"#5D4037"},{"letter":"S","word":"Shelf","emoji":"📚","bgColor":"#FFB300"},{"letter":"L","word":"Lamp","emoji":"💡","bgColor":"#FDD835"},{"letter":"M","word":"Mirror","emoji":"🪞","bgColor":"#B0BEC5"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#607D8B"},{"letter":"R","word":"Rug","emoji":"🟫","bgColor":"#8D6E63"},{"letter":"C","word":"Curtain","emoji":"🪟","bgColor":"#E91E63"},{"letter":"D","word":"Drawer","emoji":"🗄️","bgColor":"#795548"},{"letter":"C","word":"Cabinet","emoji":"🗄️","bgColor":"#5D4037"},{"letter":"O","word":"Ottoman","emoji":"🛋️","bgColor":"#BF360C"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
