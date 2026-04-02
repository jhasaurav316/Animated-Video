import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const CleaningItemsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CleaningItems1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 1",
          videoId: "cleaning-items-1",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 2",
          videoId: "cleaning-items-2",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Dish Soap","emoji":"🧴","bgColor":"#2E7D32"},{"letter":"S","word":"Scrub Brush","emoji":"🪥","bgColor":"#FF6F00"},{"letter":"C","word":"Cloth","emoji":"🧣","bgColor":"#E91E63"},{"letter":"F","word":"Feather Duster","emoji":"🪶","bgColor":"#FFB300"},{"letter":"P","word":"Plunger","emoji":"🪠","bgColor":"#D32F2F"},{"letter":"L","word":"Lint Roller","emoji":"🧻","bgColor":"#607D8B"},{"letter":"H","word":"Hand Sanitizer","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"A","word":"Air Freshener","emoji":"🌸","bgColor":"#E91E63"},{"letter":"I","word":"Iron","emoji":"♨️","bgColor":"#455A64"},{"letter":"W","word":"Washing Machine","emoji":"🫧","bgColor":"#42A5F5"},{"letter":"D","word":"Dryer","emoji":"💨","bgColor":"#F5F5F5"},{"letter":"C","word":"Clothesline","emoji":"👕","bgColor":"#4CAF50"},{"letter":"S","word":"Stain Remover","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"P","word":"Polish","emoji":"✨","bgColor":"#FFB300"},{"letter":"R","word":"Rag","emoji":"🧣","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 3",
          videoId: "cleaning-items-3",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mop Bucket","emoji":"🪣","bgColor":"#0288D1"},{"letter":"S","word":"Squeegee","emoji":"🪟","bgColor":"#42A5F5"},{"letter":"T","word":"Toilet Brush","emoji":"🪥","bgColor":"#2E7D32"},{"letter":"D","word":"Dustpan","emoji":"🧹","bgColor":"#607D8B"},{"letter":"F","word":"Floor Cleaner","emoji":"🧴","bgColor":"#0288D1"},{"letter":"C","word":"Carpet Cleaner","emoji":"🧴","bgColor":"#7B1FA2"},{"letter":"N","word":"Napkin","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"O","word":"Odor Remover","emoji":"💨","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser Sponge","emoji":"🧽","bgColor":"#F5F5F5"},{"letter":"K","word":"Kitchen Cleaner","emoji":"🧴","bgColor":"#4CAF50"},{"letter":"G","word":"Glass Cleaner","emoji":"🪟","bgColor":"#42A5F5"},{"letter":"U","word":"Upholstery Clean","emoji":"🛋️","bgColor":"#795548"},{"letter":"J","word":"Janitor Cart","emoji":"🛒","bgColor":"#607D8B"},{"letter":"Z","word":"Zip Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"Y","word":"Yard Rake","emoji":"🍂","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 4",
          videoId: "cleaning-items-4",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 5",
          videoId: "cleaning-items-5",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 6",
          videoId: "cleaning-items-6",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 7",
          videoId: "cleaning-items-7",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 8",
          videoId: "cleaning-items-8",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 9",
          videoId: "cleaning-items-9",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 10",
          videoId: "cleaning-items-10",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 11",
          videoId: "cleaning-items-11",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 12",
          videoId: "cleaning-items-12",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 13",
          videoId: "cleaning-items-13",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 14",
          videoId: "cleaning-items-14",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 15",
          videoId: "cleaning-items-15",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 16",
          videoId: "cleaning-items-16",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 17",
          videoId: "cleaning-items-17",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 18",
          videoId: "cleaning-items-18",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 19",
          videoId: "cleaning-items-19",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 20",
          videoId: "cleaning-items-20",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 21",
          videoId: "cleaning-items-21",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 22",
          videoId: "cleaning-items-22",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 23",
          videoId: "cleaning-items-23",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 24",
          videoId: "cleaning-items-24",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 25",
          videoId: "cleaning-items-25",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 26",
          videoId: "cleaning-items-26",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 27",
          videoId: "cleaning-items-27",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 28",
          videoId: "cleaning-items-28",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 29",
          videoId: "cleaning-items-29",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="CleaningItems30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cleaning Items - Part 30",
          videoId: "cleaning-items-30",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"B","word":"Broom","emoji":"🧹","bgColor":"#795548"},{"letter":"M","word":"Mop","emoji":"🧹","bgColor":"#0288D1"},{"letter":"S","word":"Sponge","emoji":"🧽","bgColor":"#FDD835"},{"letter":"S","word":"Soap","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"B","word":"Bucket","emoji":"🪣","bgColor":"#0277BD"},{"letter":"D","word":"Duster","emoji":"🪶","bgColor":"#FF8F00"},{"letter":"V","word":"Vacuum","emoji":"🧹","bgColor":"#D32F2F"},{"letter":"T","word":"Towel","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#FDD835"},{"letter":"B","word":"Bleach","emoji":"🧴","bgColor":"#F5F5F5"},{"letter":"D","word":"Detergent","emoji":"🧴","bgColor":"#42A5F5"},{"letter":"S","word":"Spray Bottle","emoji":"💦","bgColor":"#4CAF50"},{"letter":"W","word":"Wipes","emoji":"🧻","bgColor":"#F5F5F5"},{"letter":"T","word":"Trash Bag","emoji":"🗑️","bgColor":"#212121"},{"letter":"R","word":"Recycling Bin","emoji":"♻️","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
