import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const GardenItemsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GardenItems1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 1",
          videoId: "garden-items-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 2",
          videoId: "garden-items-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sunflower","emoji":"🌻","bgColor":"#FDD835"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#D32F2F"},{"letter":"T","word":"Tulip","emoji":"🌷","bgColor":"#E91E63"},{"letter":"D","word":"Daisy","emoji":"🌼","bgColor":"#FFB300"},{"letter":"L","word":"Lily","emoji":"🌸","bgColor":"#F48FB1"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"L","word":"Ladybug","emoji":"🐞","bgColor":"#D32F2F"},{"letter":"B","word":"Bee","emoji":"🐝","bgColor":"#FDD835"},{"letter":"W","word":"Worm","emoji":"🪱","bgColor":"#795548"},{"letter":"C","word":"Compost","emoji":"🌿","bgColor":"#5D4037"},{"letter":"M","word":"Mulch","emoji":"🍂","bgColor":"#795548"},{"letter":"T","word":"Trellis","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"G","word":"Greenhouse","emoji":"🏠","bgColor":"#4CAF50"},{"letter":"P","word":"Pruner","emoji":"✂️","bgColor":"#2E7D32"},{"letter":"L","word":"Landscape","emoji":"🌿","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 3",
          videoId: "garden-items-3",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"P","word":"Planter","emoji":"🪴","bgColor":"#8D6E63"},{"letter":"A","word":"Arbor","emoji":"🏗️","bgColor":"#5D4037"},{"letter":"V","word":"Vine","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"H","word":"Herb","emoji":"🌿","bgColor":"#388E3C"},{"letter":"C","word":"Caterpillar","emoji":"🐛","bgColor":"#4CAF50"},{"letter":"D","word":"Dragonfly","emoji":"🪰","bgColor":"#00BCD4"},{"letter":"F","word":"Frog","emoji":"🐸","bgColor":"#2E7D32"},{"letter":"S","word":"Stepping Stone","emoji":"🪨","bgColor":"#607D8B"},{"letter":"B","word":"Birdseed","emoji":"🐦","bgColor":"#FFB300"},{"letter":"G","word":"Gazebo","emoji":"🏠","bgColor":"#795548"},{"letter":"N","word":"Nest","emoji":"🪹","bgColor":"#8D6E63"},{"letter":"F","word":"Fountain","emoji":"⛲","bgColor":"#0288D1"},{"letter":"T","word":"Topiary","emoji":"🌳","bgColor":"#2E7D32"},{"letter":"P","word":"Pebble","emoji":"🪨","bgColor":"#9E9E9E"},{"letter":"C","word":"Cactus","emoji":"🌵","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 4",
          videoId: "garden-items-4",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 5",
          videoId: "garden-items-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 6",
          videoId: "garden-items-6",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 7",
          videoId: "garden-items-7",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 8",
          videoId: "garden-items-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 9",
          videoId: "garden-items-9",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 10",
          videoId: "garden-items-10",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 11",
          videoId: "garden-items-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 12",
          videoId: "garden-items-12",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 13",
          videoId: "garden-items-13",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 14",
          videoId: "garden-items-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 15",
          videoId: "garden-items-15",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 16",
          videoId: "garden-items-16",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 17",
          videoId: "garden-items-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 18",
          videoId: "garden-items-18",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 19",
          videoId: "garden-items-19",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 20",
          videoId: "garden-items-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 21",
          videoId: "garden-items-21",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 22",
          videoId: "garden-items-22",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 23",
          videoId: "garden-items-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 24",
          videoId: "garden-items-24",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 25",
          videoId: "garden-items-25",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 26",
          videoId: "garden-items-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 27",
          videoId: "garden-items-27",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 28",
          videoId: "garden-items-28",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 29",
          videoId: "garden-items-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="GardenItems30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Items - Part 30",
          videoId: "garden-items-30",
          bgGradient: ["#F48FB1","#FCE4EC"] as [string, string],
          accentColor: "#AD1457",
          letters: [{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"S","word":"Seed","emoji":"🌱","bgColor":"#4CAF50"},{"letter":"S","word":"Shovel","emoji":"⛏️","bgColor":"#795548"},{"letter":"W","word":"Watering Can","emoji":"🚿","bgColor":"#0288D1"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"P","word":"Pot","emoji":"🏺","bgColor":"#BF360C"},{"letter":"S","word":"Soil","emoji":"🟫","bgColor":"#5D4037"},{"letter":"R","word":"Rake","emoji":"🍂","bgColor":"#FF8F00"},{"letter":"L","word":"Lawn Mower","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"H","word":"Hose","emoji":"🚿","bgColor":"#0288D1"},{"letter":"W","word":"Wheelbarrow","emoji":"🛒","bgColor":"#FF6F00"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"F","word":"Fence","emoji":"🏗️","bgColor":"#795548"},{"letter":"B","word":"Bird Bath","emoji":"🐦","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
