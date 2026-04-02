import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ColorsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Colors1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 1",
          videoId: "colors-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 2",
          videoId: "colors-2",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"I","word":"Indigo","emoji":"💙","bgColor":"#311B92"},{"letter":"V","word":"Violet","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"C","word":"Coral","emoji":"🪸","bgColor":"#FF6F00"},{"letter":"C","word":"Crimson","emoji":"❤️","bgColor":"#C62828"},{"letter":"L","word":"Lavender","emoji":"💜","bgColor":"#9575CD"},{"letter":"M","word":"Maroon","emoji":"🔴","bgColor":"#6D4C41"},{"letter":"N","word":"Navy","emoji":"💙","bgColor":"#0D47A1"},{"letter":"O","word":"Olive","emoji":"🫒","bgColor":"#558B2F"},{"letter":"P","word":"Peach","emoji":"🍑","bgColor":"#FFB74D"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#E91E63"},{"letter":"S","word":"Scarlet","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"T","word":"Turquoise","emoji":"💎","bgColor":"#00BCD4"},{"letter":"B","word":"Beige","emoji":"🟤","bgColor":"#D7CCC8"},{"letter":"C","word":"Chartreuse","emoji":"🟢","bgColor":"#CDDC39"},{"letter":"E","word":"Emerald","emoji":"💚","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 3",
          videoId: "colors-3",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"F","word":"Fuchsia","emoji":"💗","bgColor":"#E91E63"},{"letter":"H","word":"Hot Pink","emoji":"💗","bgColor":"#FF1493"},{"letter":"I","word":"Ivory","emoji":"⚪","bgColor":"#FFFFF0"},{"letter":"K","word":"Khaki","emoji":"🟤","bgColor":"#F0E68C"},{"letter":"L","word":"Lime","emoji":"🟢","bgColor":"#CDDC39"},{"letter":"M","word":"Mint","emoji":"🟢","bgColor":"#98FF98"},{"letter":"P","word":"Plum","emoji":"🟣","bgColor":"#8E24AA"},{"letter":"R","word":"Ruby","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"S","word":"Sapphire","emoji":"💙","bgColor":"#1565C0"},{"letter":"T","word":"Tan","emoji":"🟤","bgColor":"#D2B48C"},{"letter":"A","word":"Amber","emoji":"🟠","bgColor":"#FFBF00"},{"letter":"C","word":"Copper","emoji":"🟤","bgColor":"#B87333"},{"letter":"J","word":"Jade","emoji":"💚","bgColor":"#00A86B"},{"letter":"M","word":"Mauve","emoji":"💜","bgColor":"#E0B0FF"},{"letter":"P","word":"Periwinkle","emoji":"💙","bgColor":"#CCCCFF"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 4",
          videoId: "colors-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 5",
          videoId: "colors-5",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 6",
          videoId: "colors-6",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 7",
          videoId: "colors-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 8",
          videoId: "colors-8",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 9",
          videoId: "colors-9",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 10",
          videoId: "colors-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 11",
          videoId: "colors-11",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 12",
          videoId: "colors-12",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 13",
          videoId: "colors-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 14",
          videoId: "colors-14",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 15",
          videoId: "colors-15",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 16",
          videoId: "colors-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 17",
          videoId: "colors-17",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 18",
          videoId: "colors-18",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 19",
          videoId: "colors-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 20",
          videoId: "colors-20",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 21",
          videoId: "colors-21",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 22",
          videoId: "colors-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 23",
          videoId: "colors-23",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 24",
          videoId: "colors-24",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 25",
          videoId: "colors-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 26",
          videoId: "colors-26",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 27",
          videoId: "colors-27",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 28",
          videoId: "colors-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 29",
          videoId: "colors-29",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Colors30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors - Part 30",
          videoId: "colors-30",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"R","word":"Red","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"B","word":"Blue","emoji":"🔵","bgColor":"#1565C0"},{"letter":"G","word":"Green","emoji":"🟢","bgColor":"#2E7D32"},{"letter":"Y","word":"Yellow","emoji":"🟡","bgColor":"#FDD835"},{"letter":"O","word":"Orange","emoji":"🟠","bgColor":"#FF6F00"},{"letter":"P","word":"Purple","emoji":"🟣","bgColor":"#7B1FA2"},{"letter":"P","word":"Pink","emoji":"💗","bgColor":"#E91E63"},{"letter":"W","word":"White","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"B","word":"Black","emoji":"⚫","bgColor":"#212121"},{"letter":"B","word":"Brown","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gold","emoji":"🥇","bgColor":"#FFB300"},{"letter":"S","word":"Silver","emoji":"🥈","bgColor":"#9E9E9E"},{"letter":"C","word":"Cyan","emoji":"💙","bgColor":"#00BCD4"},{"letter":"M","word":"Magenta","emoji":"💜","bgColor":"#E91E63"},{"letter":"T","word":"Teal","emoji":"💎","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
