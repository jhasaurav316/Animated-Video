import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const OceansRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Oceans1"
        component={AlphabetLongTemplate}
        durationInFrames={4830}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 1",
          videoId: "oceans-1",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 161,
        }}
      />
      <Composition
        id="Oceans2"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 2",
          videoId: "oceans-2",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"A","word":"Arabian Sea","emoji":"🌊","bgColor":"#00695C"},{"letter":"B","word":"Bay of Bengal","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Gulf of Mexico","emoji":"🌊","bgColor":"#0277BD"},{"letter":"T","word":"Tasman Sea","emoji":"🌊","bgColor":"#1565C0"},{"letter":"J","word":"Java Sea","emoji":"🌊","bgColor":"#00BCD4"},{"letter":"P","word":"Persian Gulf","emoji":"🛢️","bgColor":"#5D4037"},{"letter":"W","word":"Weddell Sea","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"E","word":"East China Sea","emoji":"🌊","bgColor":"#0288D1"},{"letter":"S","word":"Sargasso Sea","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"O","word":"Ocean Floor","emoji":"🐚","bgColor":"#5D4037"},{"letter":"T","word":"Tide","emoji":"🌊","bgColor":"#42A5F5"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0277BD"},{"letter":"C","word":"Current","emoji":"🌀","bgColor":"#0288D1"},{"letter":"R","word":"Reef","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"D","word":"Deep Sea","emoji":"🐙","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="Oceans3"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 3",
          videoId: "oceans-3",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"K","word":"Kelp Forest","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"T","word":"Trench","emoji":"🕳️","bgColor":"#212121"},{"letter":"S","word":"Seashore","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"I","word":"Island","emoji":"🏝️","bgColor":"#4CAF50"},{"letter":"L","word":"Lagoon","emoji":"💙","bgColor":"#00BCD4"},{"letter":"A","word":"Atoll","emoji":"🏝️","bgColor":"#2E7D32"},{"letter":"H","word":"Harbor","emoji":"⚓","bgColor":"#455A64"},{"letter":"M","word":"Marina","emoji":"⛵","bgColor":"#0277BD"},{"letter":"F","word":"Fjord","emoji":"🏔️","bgColor":"#0D47A1"},{"letter":"S","word":"Strait","emoji":"🌊","bgColor":"#1565C0"},{"letter":"P","word":"Port","emoji":"🚢","bgColor":"#455A64"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"G","word":"Glacier Sea","emoji":"🧊","bgColor":"#E3F2FD"},{"letter":"U","word":"Underwater","emoji":"🤿","bgColor":"#0277BD"},{"letter":"V","word":"Volcano Sea","emoji":"🌋","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="Oceans4"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 4",
          videoId: "oceans-4",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Oceans5"
        component={AlphabetLongTemplate}
        durationInFrames={4980}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 5",
          videoId: "oceans-5",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 166,
        }}
      />
      <Composition
        id="Oceans6"
        component={AlphabetLongTemplate}
        durationInFrames={3720}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 6",
          videoId: "oceans-6",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 124,
        }}
      />
      <Composition
        id="Oceans7"
        component={AlphabetLongTemplate}
        durationInFrames={5040}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 7",
          videoId: "oceans-7",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 168,
        }}
      />
      <Composition
        id="Oceans8"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 8",
          videoId: "oceans-8",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="Oceans9"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 9",
          videoId: "oceans-9",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="Oceans10"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 10",
          videoId: "oceans-10",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="Oceans11"
        component={AlphabetLongTemplate}
        durationInFrames={5190}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 11",
          videoId: "oceans-11",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 173,
        }}
      />
      <Composition
        id="Oceans12"
        component={AlphabetLongTemplate}
        durationInFrames={3930}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 12",
          videoId: "oceans-12",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 131,
        }}
      />
      <Composition
        id="Oceans13"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 13",
          videoId: "oceans-13",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="Oceans14"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 14",
          videoId: "oceans-14",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="Oceans15"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 15",
          videoId: "oceans-15",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="Oceans16"
        component={AlphabetLongTemplate}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 16",
          videoId: "oceans-16",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 136,
        }}
      />
      <Composition
        id="Oceans17"
        component={AlphabetLongTemplate}
        durationInFrames={2820}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 17",
          videoId: "oceans-17",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 94,
        }}
      />
      <Composition
        id="Oceans18"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 18",
          videoId: "oceans-18",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="Oceans19"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 19",
          videoId: "oceans-19",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="Oceans20"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 20",
          videoId: "oceans-20",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="Oceans21"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 21",
          videoId: "oceans-21",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="Oceans22"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 22",
          videoId: "oceans-22",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="Oceans23"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 23",
          videoId: "oceans-23",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="Oceans24"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 24",
          videoId: "oceans-24",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="Oceans25"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 25",
          videoId: "oceans-25",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="Oceans26"
        component={AlphabetLongTemplate}
        durationInFrames={4440}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 26",
          videoId: "oceans-26",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 148,
        }}
      />
      <Composition
        id="Oceans27"
        component={AlphabetLongTemplate}
        durationInFrames={3180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 27",
          videoId: "oceans-27",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 106,
        }}
      />
      <Composition
        id="Oceans28"
        component={AlphabetLongTemplate}
        durationInFrames={4500}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 28",
          videoId: "oceans-28",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 150,
        }}
      />
      <Composition
        id="Oceans29"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 29",
          videoId: "oceans-29",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="Oceans30"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas - Part 30",
          videoId: "oceans-30",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pacific Ocean","emoji":"🌊","bgColor":"#0277BD"},{"letter":"A","word":"Atlantic Ocean","emoji":"🌊","bgColor":"#1565C0"},{"letter":"I","word":"Indian Ocean","emoji":"🌊","bgColor":"#00838F"},{"letter":"A","word":"Arctic Ocean","emoji":"🧊","bgColor":"#B3E5FC"},{"letter":"S","word":"Southern Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"M","word":"Mediterranean","emoji":"🏛️","bgColor":"#0288D1"},{"letter":"C","word":"Caribbean Sea","emoji":"🏝️","bgColor":"#00BCD4"},{"letter":"R","word":"Red Sea","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Black Sea","emoji":"⚫","bgColor":"#37474F"},{"letter":"C","word":"Caspian Sea","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Dead Sea","emoji":"🧂","bgColor":"#8D6E63"},{"letter":"C","word":"Coral Sea","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"N","word":"North Sea","emoji":"🌊","bgColor":"#455A64"},{"letter":"B","word":"Baltic Sea","emoji":"🌊","bgColor":"#546E7A"},{"letter":"S","word":"South China Sea","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
    </>
  );
};
