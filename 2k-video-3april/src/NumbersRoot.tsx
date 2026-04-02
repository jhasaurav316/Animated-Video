import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const NumbersRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Numbers1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 1",
          videoId: "numbers-1",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 2",
          videoId: "numbers-2",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sixteen","emoji":"1️⃣","bgColor":"#C62828"},{"letter":"S","word":"Seventeen","emoji":"1️⃣","bgColor":"#2E7D32"},{"letter":"E","word":"Eighteen","emoji":"1️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nineteen","emoji":"1️⃣","bgColor":"#311B92"},{"letter":"T","word":"Twenty","emoji":"2️⃣","bgColor":"#D32F2F"},{"letter":"Z","word":"Zero","emoji":"0️⃣","bgColor":"#607D8B"},{"letter":"H","word":"Hundred","emoji":"💯","bgColor":"#FFB300"},{"letter":"T","word":"Thousand","emoji":"🔢","bgColor":"#1565C0"},{"letter":"M","word":"Million","emoji":"🔢","bgColor":"#4CAF50"},{"letter":"D","word":"Dozen","emoji":"📦","bgColor":"#795548"},{"letter":"P","word":"Pair","emoji":"👯","bgColor":"#E91E63"},{"letter":"T","word":"Triple","emoji":"🔱","bgColor":"#00BCD4"},{"letter":"H","word":"Half","emoji":"½","bgColor":"#FF8F00"},{"letter":"Q","word":"Quarter","emoji":"¼","bgColor":"#7B1FA2"},{"letter":"D","word":"Double","emoji":"✌️","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 3",
          videoId: "numbers-3",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"S","word":"Score","emoji":"📊","bgColor":"#1565C0"},{"letter":"F","word":"First","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Second","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"T","word":"Third","emoji":"🥉","bgColor":"#795548"},{"letter":"F","word":"Fifth","emoji":"5️⃣","bgColor":"#4CAF50"},{"letter":"T","word":"Tenth","emoji":"🔟","bgColor":"#FF5722"},{"letter":"P","word":"Plus","emoji":"➕","bgColor":"#2E7D32"},{"letter":"M","word":"Minus","emoji":"➖","bgColor":"#D32F2F"},{"letter":"E","word":"Equals","emoji":"🟰","bgColor":"#1565C0"},{"letter":"I","word":"Infinity","emoji":"♾️","bgColor":"#7B1FA2"},{"letter":"P","word":"Pi","emoji":"🥧","bgColor":"#FF6F00"},{"letter":"C","word":"Count","emoji":"🔢","bgColor":"#00838F"},{"letter":"A","word":"Add","emoji":"➕","bgColor":"#4CAF50"},{"letter":"S","word":"Sum","emoji":"📊","bgColor":"#FF8F00"},{"letter":"N","word":"Number","emoji":"🔢","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 4",
          videoId: "numbers-4",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 5",
          videoId: "numbers-5",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 6",
          videoId: "numbers-6",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 7",
          videoId: "numbers-7",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 8",
          videoId: "numbers-8",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 9",
          videoId: "numbers-9",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 10",
          videoId: "numbers-10",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 11",
          videoId: "numbers-11",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 12",
          videoId: "numbers-12",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 13",
          videoId: "numbers-13",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 14",
          videoId: "numbers-14",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 15",
          videoId: "numbers-15",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 16",
          videoId: "numbers-16",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 17",
          videoId: "numbers-17",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 18",
          videoId: "numbers-18",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 19",
          videoId: "numbers-19",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 20",
          videoId: "numbers-20",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 21",
          videoId: "numbers-21",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 22",
          videoId: "numbers-22",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 23",
          videoId: "numbers-23",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 24",
          videoId: "numbers-24",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 25",
          videoId: "numbers-25",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 26",
          videoId: "numbers-26",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 27",
          videoId: "numbers-27",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 28",
          videoId: "numbers-28",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 29",
          videoId: "numbers-29",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Numbers30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Numbers - Part 30",
          videoId: "numbers-30",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"O","word":"One","emoji":"1️⃣","bgColor":"#D32F2F"},{"letter":"T","word":"Two","emoji":"2️⃣","bgColor":"#1565C0"},{"letter":"T","word":"Three","emoji":"3️⃣","bgColor":"#2E7D32"},{"letter":"F","word":"Four","emoji":"4️⃣","bgColor":"#FF8F00"},{"letter":"F","word":"Five","emoji":"5️⃣","bgColor":"#7B1FA2"},{"letter":"S","word":"Six","emoji":"6️⃣","bgColor":"#00838F"},{"letter":"S","word":"Seven","emoji":"7️⃣","bgColor":"#E91E63"},{"letter":"E","word":"Eight","emoji":"8️⃣","bgColor":"#FF6F00"},{"letter":"N","word":"Nine","emoji":"9️⃣","bgColor":"#4527A0"},{"letter":"T","word":"Ten","emoji":"🔟","bgColor":"#D32F2F"},{"letter":"E","word":"Eleven","emoji":"1️⃣","bgColor":"#388E3C"},{"letter":"T","word":"Twelve","emoji":"1️⃣","bgColor":"#0288D1"},{"letter":"T","word":"Thirteen","emoji":"1️⃣","bgColor":"#FF5722"},{"letter":"F","word":"Fourteen","emoji":"1️⃣","bgColor":"#7B1FA2"},{"letter":"F","word":"Fifteen","emoji":"1️⃣","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
