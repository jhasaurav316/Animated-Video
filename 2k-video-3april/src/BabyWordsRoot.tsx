import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const BabyWordsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BabyWords1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 1",
          videoId: "baby-words-1",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 2",
          videoId: "baby-words-2",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"S","word":"Sleep","emoji":"😴","bgColor":"#311B92"},{"letter":"B","word":"Book","emoji":"📖","bgColor":"#795548"},{"letter":"S","word":"Shoe","emoji":"👟","bgColor":"#E91E63"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"C","word":"Cup","emoji":"🥤","bgColor":"#00BCD4"},{"letter":"B","word":"Bird","emoji":"🐦","bgColor":"#4CAF50"},{"letter":"F","word":"Fish","emoji":"🐟","bgColor":"#0288D1"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Tree","emoji":"🌳","bgColor":"#2E7D32"},{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#FDD835"},{"letter":"F","word":"Flower","emoji":"🌸","bgColor":"#E91E63"},{"letter":"D","word":"Duck","emoji":"🦆","bgColor":"#FDD835"},{"letter":"A","word":"Apple","emoji":"🍎","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 3",
          videoId: "baby-words-3",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"B","word":"Banana","emoji":"🍌","bgColor":"#FDD835"},{"letter":"H","word":"Hug","emoji":"🤗","bgColor":"#FF80AB"},{"letter":"K","word":"Kiss","emoji":"💋","bgColor":"#E91E63"},{"letter":"P","word":"Play","emoji":"🎮","bgColor":"#4CAF50"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#607D8B"},{"letter":"S","word":"Spoon","emoji":"🥄","bgColor":"#9E9E9E"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#FFB74D"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1565C0"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FFB74D"},{"letter":"F","word":"Foot","emoji":"🦶","bgColor":"#8D6E63"},{"letter":"T","word":"Tummy","emoji":"🫃","bgColor":"#FFB300"},{"letter":"D","word":"Door","emoji":"🚪","bgColor":"#795548"},{"letter":"L","word":"Love","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"J","word":"Juice","emoji":"🧃","bgColor":"#FF6F00"},{"letter":"C","word":"Cookie","emoji":"🍪","bgColor":"#8D6E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 4",
          videoId: "baby-words-4",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 5",
          videoId: "baby-words-5",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 6",
          videoId: "baby-words-6",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 7",
          videoId: "baby-words-7",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 8",
          videoId: "baby-words-8",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 9",
          videoId: "baby-words-9",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 10",
          videoId: "baby-words-10",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 11",
          videoId: "baby-words-11",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 12",
          videoId: "baby-words-12",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 13",
          videoId: "baby-words-13",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 14",
          videoId: "baby-words-14",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 15",
          videoId: "baby-words-15",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 16",
          videoId: "baby-words-16",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 17",
          videoId: "baby-words-17",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 18",
          videoId: "baby-words-18",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 19",
          videoId: "baby-words-19",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 20",
          videoId: "baby-words-20",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 21",
          videoId: "baby-words-21",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 22",
          videoId: "baby-words-22",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 23",
          videoId: "baby-words-23",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 24",
          videoId: "baby-words-24",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 25",
          videoId: "baby-words-25",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 26",
          videoId: "baby-words-26",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 27",
          videoId: "baby-words-27",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 28",
          videoId: "baby-words-28",
          bgGradient: ["#FF80AB","#FFD1E8"] as [string, string],
          accentColor: "#C51162",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 29",
          videoId: "baby-words-29",
          bgGradient: ["#81D4FA","#E1F5FE"] as [string, string],
          accentColor: "#0277BD",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BabyWords30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Words - Part 30",
          videoId: "baby-words-30",
          bgGradient: ["#A5D6A7","#E8F5E9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [{"letter":"M","word":"Mama","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dada","emoji":"👨","bgColor":"#1565C0"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"M","word":"Milk","emoji":"🍼","bgColor":"#F5F5F5"},{"letter":"W","word":"Water","emoji":"💧","bgColor":"#42A5F5"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#FF5722"},{"letter":"D","word":"Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"B","word":"Bye","emoji":"👋","bgColor":"#FDD835"},{"letter":"H","word":"Hi","emoji":"🙋","bgColor":"#4CAF50"},{"letter":"N","word":"No","emoji":"🙅","bgColor":"#D32F2F"},{"letter":"Y","word":"Yes","emoji":"✅","bgColor":"#2E7D32"},{"letter":"U","word":"Up","emoji":"⬆️","bgColor":"#1565C0"},{"letter":"M","word":"More","emoji":"➕","bgColor":"#7B1FA2"},{"letter":"E","word":"Eat","emoji":"🍽️","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
