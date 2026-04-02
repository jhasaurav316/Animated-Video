import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const WeatherRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Weather1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 1",
          videoId: "weather-1",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 2",
          videoId: "weather-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sleet","emoji":"🌨️","bgColor":"#90A4AE"},{"letter":"M","word":"Mist","emoji":"🌫️","bgColor":"#CFD8DC"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#B3E5FC"},{"letter":"B","word":"Breeze","emoji":"🍃","bgColor":"#81C784"},{"letter":"H","word":"Humid","emoji":"💧","bgColor":"#4FC3F7"},{"letter":"D","word":"Dew","emoji":"💧","bgColor":"#A5D6A7"},{"letter":"S","word":"Sunshine","emoji":"🌞","bgColor":"#FDD835"},{"letter":"O","word":"Overcast","emoji":"☁️","bgColor":"#78909C"},{"letter":"C","word":"Cyclone","emoji":"🌀","bgColor":"#0288D1"},{"letter":"T","word":"Typhoon","emoji":"🌊","bgColor":"#01579B"},{"letter":"W","word":"Warm","emoji":"🌡️","bgColor":"#FF5722"},{"letter":"C","word":"Cold","emoji":"🥶","bgColor":"#42A5F5"},{"letter":"H","word":"Hot","emoji":"🔥","bgColor":"#D32F2F"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#E3F2FD"},{"letter":"S","word":"Sunny","emoji":"😎","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 3",
          videoId: "weather-3",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"C","word":"Cloudy","emoji":"🌥️","bgColor":"#90A4AE"},{"letter":"R","word":"Rainy","emoji":"☔","bgColor":"#1565C0"},{"letter":"W","word":"Windy","emoji":"🌬️","bgColor":"#607D8B"},{"letter":"S","word":"Snowy","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"M","word":"Monsoon","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"A","word":"Aurora","emoji":"🌌","bgColor":"#7B1FA2"},{"letter":"D","word":"Drought","emoji":"🏜️","bgColor":"#FF8F00"},{"letter":"F","word":"Flood","emoji":"🌊","bgColor":"#1565C0"},{"letter":"E","word":"Eclipse","emoji":"🌑","bgColor":"#212121"},{"letter":"H","word":"Haze","emoji":"🌫️","bgColor":"#BDBDBD"},{"letter":"T","word":"Tempest","emoji":"⛈️","bgColor":"#37474F"},{"letter":"P","word":"Puddle","emoji":"💧","bgColor":"#64B5F6"},{"letter":"U","word":"Umbrella","emoji":"☂️","bgColor":"#7B1FA2"},{"letter":"G","word":"Gust","emoji":"💨","bgColor":"#455A64"},{"letter":"N","word":"Nimbus","emoji":"🌧️","bgColor":"#546E7A"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 4",
          videoId: "weather-4",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 5",
          videoId: "weather-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 6",
          videoId: "weather-6",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 7",
          videoId: "weather-7",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 8",
          videoId: "weather-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 9",
          videoId: "weather-9",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 10",
          videoId: "weather-10",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 11",
          videoId: "weather-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 12",
          videoId: "weather-12",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 13",
          videoId: "weather-13",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 14",
          videoId: "weather-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 15",
          videoId: "weather-15",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 16",
          videoId: "weather-16",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 17",
          videoId: "weather-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 18",
          videoId: "weather-18",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 19",
          videoId: "weather-19",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 20",
          videoId: "weather-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 21",
          videoId: "weather-21",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 22",
          videoId: "weather-22",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 23",
          videoId: "weather-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 24",
          videoId: "weather-24",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 25",
          videoId: "weather-25",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 26",
          videoId: "weather-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 27",
          videoId: "weather-27",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 28",
          videoId: "weather-28",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 29",
          videoId: "weather-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Weather30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather - Part 30",
          videoId: "weather-30",
          bgGradient: ["#78909C","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"R","word":"Rain","emoji":"🌧️","bgColor":"#42A5F5"},{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"W","word":"Wind","emoji":"💨","bgColor":"#607D8B"},{"letter":"C","word":"Cloud","emoji":"☁️","bgColor":"#90A4AE"},{"letter":"T","word":"Thunder","emoji":"⚡","bgColor":"#FDD835"},{"letter":"L","word":"Lightning","emoji":"⚡","bgColor":"#FFD54F"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"F","word":"Fog","emoji":"🌫️","bgColor":"#B0BEC5"},{"letter":"H","word":"Hail","emoji":"🧊","bgColor":"#90CAF9"},{"letter":"T","word":"Tornado","emoji":"🌪️","bgColor":"#455A64"},{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#E0E0E0"},{"letter":"D","word":"Drizzle","emoji":"🌦️","bgColor":"#64B5F6"},{"letter":"S","word":"Storm","emoji":"⛈️","bgColor":"#37474F"},{"letter":"H","word":"Hurricane","emoji":"🌀","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
