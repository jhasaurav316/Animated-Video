import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const CampingRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Camping1"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 1",
          videoId: "camping-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="Camping2"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 2",
          videoId: "camping-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lantern","emoji":"🏮","bgColor":"#FFB300"},{"letter":"M","word":"Marshmallow","emoji":"🫧","bgColor":"#F5F5F5"},{"letter":"S","word":"S'mores","emoji":"🍫","bgColor":"#8D6E63"},{"letter":"H","word":"Hammock","emoji":"🏖️","bgColor":"#00BCD4"},{"letter":"T","word":"Trail Mix","emoji":"🥜","bgColor":"#8D6E63"},{"letter":"C","word":"Cooler","emoji":"🧊","bgColor":"#42A5F5"},{"letter":"G","word":"Grill","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"A","word":"Axe","emoji":"🪓","bgColor":"#795548"},{"letter":"F","word":"First Aid Kit","emoji":"🩹","bgColor":"#D32F2F"},{"letter":"S","word":"Sunscreen","emoji":"☀️","bgColor":"#FFB300"},{"letter":"I","word":"Insect Spray","emoji":"🐛","bgColor":"#4CAF50"},{"letter":"W","word":"Walking Stick","emoji":"🥢","bgColor":"#5D4037"},{"letter":"B","word":"Bear Spray","emoji":"🐻","bgColor":"#FF5722"},{"letter":"P","word":"Picnic Blanket","emoji":"🧺","bgColor":"#E91E63"},{"letter":"C","word":"Camp Chair","emoji":"🪑","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="Camping3"
        component={AlphabetLongTemplate}
        durationInFrames={4230}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 3",
          videoId: "camping-3",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"N","word":"Nature Trail","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"O","word":"Outdoor Stove","emoji":"🍳","bgColor":"#FF8F00"},{"letter":"D","word":"Dry Bag","emoji":"🎒","bgColor":"#0288D1"},{"letter":"R","word":"Rain Jacket","emoji":"🧥","bgColor":"#FDD835"},{"letter":"E","word":"Ember","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"U","word":"UV Hat","emoji":"🧢","bgColor":"#FFB300"},{"letter":"V","word":"Vest","emoji":"🦺","bgColor":"#FF5722"},{"letter":"J","word":"Journal","emoji":"📓","bgColor":"#795548"},{"letter":"Z","word":"Ziplock Bag","emoji":"🟦","bgColor":"#42A5F5"},{"letter":"Y","word":"Yurt","emoji":"⛺","bgColor":"#8D6E63"},{"letter":"X","word":"Xtra Batteries","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"P","word":"Poncho","emoji":"🧥","bgColor":"#FDD835"},{"letter":"L","word":"Log Cabin","emoji":"🏠","bgColor":"#5D4037"},{"letter":"T","word":"Trekking Pole","emoji":"🥢","bgColor":"#607D8B"},{"letter":"G","word":"Gear Bag","emoji":"🎒","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 141,
        }}
      />
      <Composition
        id="Camping4"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 4",
          videoId: "camping-4",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="Camping5"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 5",
          videoId: "camping-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="Camping6"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 6",
          videoId: "camping-6",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="Camping7"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 7",
          videoId: "camping-7",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
      <Composition
        id="Camping8"
        component={AlphabetLongTemplate}
        durationInFrames={3120}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 8",
          videoId: "camping-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 104,
        }}
      />
      <Composition
        id="Camping9"
        component={AlphabetLongTemplate}
        durationInFrames={4440}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 9",
          videoId: "camping-9",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 148,
        }}
      />
      <Composition
        id="Camping10"
        component={AlphabetLongTemplate}
        durationInFrames={3180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 10",
          videoId: "camping-10",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 106,
        }}
      />
      <Composition
        id="Camping11"
        component={AlphabetLongTemplate}
        durationInFrames={4500}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 11",
          videoId: "camping-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 150,
        }}
      />
      <Composition
        id="Camping12"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 12",
          videoId: "camping-12",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Camping13"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 13",
          videoId: "camping-13",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="Camping14"
        component={AlphabetLongTemplate}
        durationInFrames={3330}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 14",
          videoId: "camping-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 111,
        }}
      />
      <Composition
        id="Camping15"
        component={AlphabetLongTemplate}
        durationInFrames={4650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 15",
          videoId: "camping-15",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 155,
        }}
      />
      <Composition
        id="Camping16"
        component={AlphabetLongTemplate}
        durationInFrames={3390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 16",
          videoId: "camping-16",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 113,
        }}
      />
      <Composition
        id="Camping17"
        component={AlphabetLongTemplate}
        durationInFrames={4710}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 17",
          videoId: "camping-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 157,
        }}
      />
      <Composition
        id="Camping18"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 18",
          videoId: "camping-18",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="Camping19"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 19",
          videoId: "camping-19",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="Camping20"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 20",
          videoId: "camping-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="Camping21"
        component={AlphabetLongTemplate}
        durationInFrames={4860}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 21",
          videoId: "camping-21",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 162,
        }}
      />
      <Composition
        id="Camping22"
        component={AlphabetLongTemplate}
        durationInFrames={3600}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 22",
          videoId: "camping-22",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 120,
        }}
      />
      <Composition
        id="Camping23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 23",
          videoId: "camping-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Camping24"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 24",
          videoId: "camping-24",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="Camping25"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 25",
          videoId: "camping-25",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="Camping26"
        component={AlphabetLongTemplate}
        durationInFrames={3750}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 26",
          videoId: "camping-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 125,
        }}
      />
      <Composition
        id="Camping27"
        component={AlphabetLongTemplate}
        durationInFrames={5070}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 27",
          videoId: "camping-27",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 169,
        }}
      />
      <Composition
        id="Camping28"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 28",
          videoId: "camping-28",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="Camping29"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 29",
          videoId: "camping-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="Camping30"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Camping & Outdoors - Part 30",
          videoId: "camping-30",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"Tent","emoji":"⛺","bgColor":"#2E7D32"},{"letter":"C","word":"Campfire","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"S","word":"Sleeping Bag","emoji":"🛏️","bgColor":"#1565C0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#FF8F00"},{"letter":"F","word":"Flashlight","emoji":"🔦","bgColor":"#FDD835"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#D32F2F"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"W","word":"Water Bottle","emoji":"🫗","bgColor":"#42A5F5"},{"letter":"H","word":"Hiking Boots","emoji":"🥾","bgColor":"#795548"},{"letter":"B","word":"Binoculars","emoji":"🔭","bgColor":"#607D8B"},{"letter":"F","word":"Fishing Rod","emoji":"🎣","bgColor":"#0288D1"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Swiss Knife","emoji":"🔪","bgColor":"#D32F2F"},{"letter":"R","word":"Rope","emoji":"🪢","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
    </>
  );
};
