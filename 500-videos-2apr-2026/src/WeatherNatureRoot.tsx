import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const WeatherNatureRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="WeatherNature1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 1",
          videoId: "weather-nature-1",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 2",
          videoId: "weather-nature-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0D47A1"},{"letter":"M","word":"Monsoon","emoji":"🌧️","bgColor":"#1565C0"},{"letter":"D","word":"Drought","emoji":"🏜️","bgColor":"#FF8F00"},{"letter":"A","word":"Avalanche","emoji":"🏔️","bgColor":"#B0BEC5"},{"letter":"V","word":"Volcano","emoji":"🌋","bgColor":"#C62828"},{"letter":"E","word":"Earthquake","emoji":"🌍","bgColor":"#795548"},{"letter":"T","word":"Tsunami","emoji":"🌊","bgColor":"#01579B"},{"letter":"M","word":"Meteor","emoji":"☄️","bgColor":"#FF6F00"},{"letter":"S","word":"Sunrise","emoji":"🌅","bgColor":"#FF8F00"},{"letter":"S","word":"Sunset","emoji":"🌇","bgColor":"#E65100"},{"letter":"M","word":"Moon","emoji":"🌙","bgColor":"#FFB300"},{"letter":"S","word":"Star","emoji":"⭐","bgColor":"#FDD835"},{"letter":"G","word":"Galaxy","emoji":"🌌","bgColor":"#311B92"},{"letter":"C","word":"Comet","emoji":"☄️","bgColor":"#0288D1"},{"letter":"N","word":"Nebula","emoji":"🌌","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 3",
          videoId: "weather-nature-3",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 4",
          videoId: "weather-nature-4",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 5",
          videoId: "weather-nature-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 6",
          videoId: "weather-nature-6",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 7",
          videoId: "weather-nature-7",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 8",
          videoId: "weather-nature-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 9",
          videoId: "weather-nature-9",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 10",
          videoId: "weather-nature-10",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 11",
          videoId: "weather-nature-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 12",
          videoId: "weather-nature-12",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 13",
          videoId: "weather-nature-13",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 14",
          videoId: "weather-nature-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 15",
          videoId: "weather-nature-15",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 16",
          videoId: "weather-nature-16",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 17",
          videoId: "weather-nature-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 18",
          videoId: "weather-nature-18",
          bgGradient: ["#1B5E20","#A5D6A7"] as [string, string],
          accentColor: "#0D3B0D",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 19",
          videoId: "weather-nature-19",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="WeatherNature20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature - Part 20",
          videoId: "weather-nature-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#0288D1"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#78909C"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#B0BEC5"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"L","word":"Lightning","emoji":"🌩️","bgColor":"#FFEB3B"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#9E9E9E"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#00BCD4"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
