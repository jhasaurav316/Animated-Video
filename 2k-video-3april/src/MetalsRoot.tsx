import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const MetalsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Metals1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 1",
          videoId: "metals-1",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 2",
          videoId: "metals-2",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"C","word":"Cobalt","emoji":"💙","bgColor":"#1565C0"},{"letter":"T","word":"Tungsten","emoji":"⚙️","bgColor":"#37474F"},{"letter":"U","word":"Uranium","emoji":"☢️","bgColor":"#4CAF50"},{"letter":"O","word":"Oxygen","emoji":"💨","bgColor":"#42A5F5"},{"letter":"H","word":"Hydrogen","emoji":"💧","bgColor":"#90CAF9"},{"letter":"C","word":"Carbon","emoji":"⚫","bgColor":"#212121"},{"letter":"N","word":"Nitrogen","emoji":"💨","bgColor":"#B0BEC5"},{"letter":"H","word":"Helium","emoji":"🎈","bgColor":"#FF80AB"},{"letter":"A","word":"Argon","emoji":"💨","bgColor":"#9575CD"},{"letter":"S","word":"Silicon","emoji":"🔬","bgColor":"#607D8B"},{"letter":"P","word":"Phosphorus","emoji":"🔥","bgColor":"#FDD835"},{"letter":"S","word":"Sulfur","emoji":"🟡","bgColor":"#FDD835"},{"letter":"C","word":"Calcium","emoji":"🦴","bgColor":"#F5F5F5"},{"letter":"P","word":"Potassium","emoji":"🍌","bgColor":"#FDD835"},{"letter":"M","word":"Magnesium","emoji":"🔥","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 3",
          videoId: "metals-3",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"F","word":"Fluorine","emoji":"💨","bgColor":"#B2EBF2"},{"letter":"R","word":"Radium","emoji":"☢️","bgColor":"#4CAF50"},{"letter":"L","word":"Lithium","emoji":"🔋","bgColor":"#607D8B"},{"letter":"B","word":"Brass","emoji":"🎺","bgColor":"#FFB300"},{"letter":"D","word":"Diamond Carbon","emoji":"💎","bgColor":"#E3F2FD"},{"letter":"E","word":"Electrum","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"W","word":"Wrought Iron","emoji":"⚙️","bgColor":"#37474F"},{"letter":"K","word":"Krypton","emoji":"💨","bgColor":"#4FC3F7"},{"letter":"X","word":"Xenon","emoji":"💡","bgColor":"#9575CD"},{"letter":"V","word":"Vanadium","emoji":"⚙️","bgColor":"#455A64"},{"letter":"Y","word":"Yttrium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"J","word":"Jet Metal","emoji":"⚫","bgColor":"#212121"},{"letter":"G","word":"Gallium","emoji":"🌡️","bgColor":"#B0BEC5"},{"letter":"I","word":"Iridium","emoji":"✨","bgColor":"#9E9E9E"},{"letter":"Q","word":"Quartz Crystal","emoji":"💎","bgColor":"#E0E0E0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 4",
          videoId: "metals-4",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 5",
          videoId: "metals-5",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 6",
          videoId: "metals-6",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 7",
          videoId: "metals-7",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 8",
          videoId: "metals-8",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 9",
          videoId: "metals-9",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 10",
          videoId: "metals-10",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 11",
          videoId: "metals-11",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 12",
          videoId: "metals-12",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 13",
          videoId: "metals-13",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 14",
          videoId: "metals-14",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 15",
          videoId: "metals-15",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 16",
          videoId: "metals-16",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 17",
          videoId: "metals-17",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 18",
          videoId: "metals-18",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 19",
          videoId: "metals-19",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 20",
          videoId: "metals-20",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 21",
          videoId: "metals-21",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 22",
          videoId: "metals-22",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 23",
          videoId: "metals-23",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 24",
          videoId: "metals-24",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 25",
          videoId: "metals-25",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 26",
          videoId: "metals-26",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 27",
          videoId: "metals-27",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 28",
          videoId: "metals-28",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 29",
          videoId: "metals-29",
          bgGradient: ["#FFB300","#FFE082"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Metals30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Metals & Elements - Part 30",
          videoId: "metals-30",
          bgGradient: ["#607D8B","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"I","word":"Iron","emoji":"⚙️","bgColor":"#455A64"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#BF360C"},{"letter":"B","word":"Bronze","emoji":"🥉","bgColor":"#8D6E63"},{"letter":"P","word":"Platinum","emoji":"⚪","bgColor":"#E0E0E0"},{"letter":"A","word":"Aluminum","emoji":"🪙","bgColor":"#B0BEC5"},{"letter":"T","word":"Titanium","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"S","word":"Steel","emoji":"🔩","bgColor":"#455A64"},{"letter":"Z","word":"Zinc","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"T","word":"Tin","emoji":"🥫","bgColor":"#B0BEC5"},{"letter":"L","word":"Lead","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"N","word":"Nickel","emoji":"🪙","bgColor":"#9E9E9E"},{"letter":"C","word":"Chromium","emoji":"⚙️","bgColor":"#B0BEC5"},{"letter":"M","word":"Mercury","emoji":"🌡️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
