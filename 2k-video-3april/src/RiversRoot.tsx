import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const RiversRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Rivers1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 1",
          videoId: "rivers-1",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 2",
          videoId: "rivers-2",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Lake Victoria","emoji":"🌊","bgColor":"#0277BD"},{"letter":"L","word":"Lake Superior","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"L","word":"Lake Baikal","emoji":"🌊","bgColor":"#42A5F5"},{"letter":"G","word":"Great Lakes","emoji":"🌊","bgColor":"#1565C0"},{"letter":"L","word":"Lake Titicaca","emoji":"🌊","bgColor":"#00BCD4"},{"letter":"C","word":"Caspian","emoji":"🌊","bgColor":"#0288D1"},{"letter":"P","word":"Pond","emoji":"🌊","bgColor":"#4CAF50"},{"letter":"S","word":"Stream","emoji":"🌊","bgColor":"#64B5F6"},{"letter":"B","word":"Brook","emoji":"🌊","bgColor":"#81C784"},{"letter":"C","word":"Creek","emoji":"🌊","bgColor":"#66BB6A"},{"letter":"W","word":"Waterfall","emoji":"💧","bgColor":"#42A5F5"},{"letter":"R","word":"Rapids","emoji":"🌊","bgColor":"#0277BD"},{"letter":"D","word":"Delta","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"E","word":"Estuary","emoji":"🌊","bgColor":"#00695C"},{"letter":"F","word":"Fjord","emoji":"🌊","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 3",
          videoId: "rivers-3",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Spring","emoji":"💧","bgColor":"#4FC3F7"},{"letter":"O","word":"Oasis","emoji":"🏝️","bgColor":"#FFB300"},{"letter":"R","word":"Reservoir","emoji":"🌊","bgColor":"#455A64"},{"letter":"H","word":"Harbor","emoji":"⚓","bgColor":"#546E7A"},{"letter":"T","word":"Tributary","emoji":"🌊","bgColor":"#0288D1"},{"letter":"M","word":"Marsh","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"S","word":"Swamp","emoji":"🌿","bgColor":"#33691E"},{"letter":"B","word":"Basin","emoji":"🌊","bgColor":"#0277BD"},{"letter":"I","word":"Irrigation","emoji":"💧","bgColor":"#4CAF50"},{"letter":"L","word":"Lagoon","emoji":"💙","bgColor":"#00BCD4"},{"letter":"K","word":"Kayak River","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"W","word":"Wetland","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"A","word":"Aqueduct","emoji":"🏛️","bgColor":"#795548"},{"letter":"R","word":"Riverbank","emoji":"🌳","bgColor":"#4CAF50"},{"letter":"F","word":"Fountain","emoji":"⛲","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 4",
          videoId: "rivers-4",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 5",
          videoId: "rivers-5",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 6",
          videoId: "rivers-6",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 7",
          videoId: "rivers-7",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 8",
          videoId: "rivers-8",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 9",
          videoId: "rivers-9",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 10",
          videoId: "rivers-10",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 11",
          videoId: "rivers-11",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 12",
          videoId: "rivers-12",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 13",
          videoId: "rivers-13",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 14",
          videoId: "rivers-14",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 15",
          videoId: "rivers-15",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 16",
          videoId: "rivers-16",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 17",
          videoId: "rivers-17",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 18",
          videoId: "rivers-18",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 19",
          videoId: "rivers-19",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 20",
          videoId: "rivers-20",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 21",
          videoId: "rivers-21",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 22",
          videoId: "rivers-22",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 23",
          videoId: "rivers-23",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 24",
          videoId: "rivers-24",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 25",
          videoId: "rivers-25",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 26",
          videoId: "rivers-26",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 27",
          videoId: "rivers-27",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 28",
          videoId: "rivers-28",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 29",
          videoId: "rivers-29",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Rivers30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers & Lakes - Part 30",
          videoId: "rivers-30",
          bgGradient: ["#00838F","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"N","word":"Nile","emoji":"🌊","bgColor":"#0288D1"},{"letter":"A","word":"Amazon","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"M","word":"Mississippi","emoji":"🌊","bgColor":"#1565C0"},{"letter":"Y","word":"Yangtze","emoji":"🌊","bgColor":"#00838F"},{"letter":"G","word":"Ganges","emoji":"🌊","bgColor":"#FFB300"},{"letter":"D","word":"Danube","emoji":"🌊","bgColor":"#0277BD"},{"letter":"R","word":"Rhine","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Thames","emoji":"🌊","bgColor":"#455A64"},{"letter":"S","word":"Seine","emoji":"🌊","bgColor":"#00695C"},{"letter":"V","word":"Volga","emoji":"🌊","bgColor":"#546E7A"},{"letter":"C","word":"Colorado","emoji":"🌊","bgColor":"#FF6F00"},{"letter":"N","word":"Niger","emoji":"🌊","bgColor":"#795548"},{"letter":"M","word":"Mekong","emoji":"🌊","bgColor":"#00838F"},{"letter":"C","word":"Congo","emoji":"🌊","bgColor":"#2E7D32"},{"letter":"Z","word":"Zambezi","emoji":"🌊","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
