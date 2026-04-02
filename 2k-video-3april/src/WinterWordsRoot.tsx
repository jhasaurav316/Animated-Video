import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const WinterWordsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="WinterWords1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 1",
          videoId: "winter-words-1",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 2",
          videoId: "winter-words-2",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"C","word":"Cold","emoji":"🥶","bgColor":"#0D47A1"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"H","word":"Hat","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#1565C0"},{"letter":"E","word":"Earmuffs","emoji":"🎧","bgColor":"#E91E63"},{"letter":"C","word":"Chimney","emoji":"🏠","bgColor":"#795548"},{"letter":"H","word":"Hibernate","emoji":"🐻","bgColor":"#5D4037"},{"letter":"P","word":"Pine Tree","emoji":"🌲","bgColor":"#1B5E20"},{"letter":"C","word":"Cabin","emoji":"🏠","bgColor":"#8D6E63"},{"letter":"S","word":"Snowball","emoji":"⚪","bgColor":"#F5F5F5"},{"letter":"S","word":"Snow Angel","emoji":"👼","bgColor":"#E3F2FD"},{"letter":"T","word":"Toboggan","emoji":"🛷","bgColor":"#FF6F00"},{"letter":"I","word":"Igloo","emoji":"🏠","bgColor":"#B0BEC5"},{"letter":"F","word":"Frozen","emoji":"🧊","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 3",
          videoId: "winter-words-3",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Blizzard","emoji":"🌨️","bgColor":"#607D8B"},{"letter":"S","word":"Snowplow","emoji":"🚜","bgColor":"#FDD835"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#795548"},{"letter":"H","word":"Heater","emoji":"🔥","bgColor":"#FF5722"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#D32F2F"},{"letter":"C","word":"Cozy","emoji":"🛋️","bgColor":"#FF8F00"},{"letter":"R","word":"Reindeer","emoji":"🦌","bgColor":"#795548"},{"letter":"S","word":"Soup","emoji":"🍲","bgColor":"#FF6F00"},{"letter":"P","word":"Penguin","emoji":"🐧","bgColor":"#212121"},{"letter":"N","word":"North Pole","emoji":"🧭","bgColor":"#0D47A1"},{"letter":"A","word":"Aurora","emoji":"🌌","bgColor":"#00E676"},{"letter":"F","word":"Flurry","emoji":"🌨️","bgColor":"#B0BEC5"},{"letter":"M","word":"Marshmallow","emoji":"☁️","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowshoe","emoji":"🥾","bgColor":"#5D4037"},{"letter":"W","word":"Windchill","emoji":"💨","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 4",
          videoId: "winter-words-4",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 5",
          videoId: "winter-words-5",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 6",
          videoId: "winter-words-6",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 7",
          videoId: "winter-words-7",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 8",
          videoId: "winter-words-8",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 9",
          videoId: "winter-words-9",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 10",
          videoId: "winter-words-10",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 11",
          videoId: "winter-words-11",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 12",
          videoId: "winter-words-12",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 13",
          videoId: "winter-words-13",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 14",
          videoId: "winter-words-14",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 15",
          videoId: "winter-words-15",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 16",
          videoId: "winter-words-16",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 17",
          videoId: "winter-words-17",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 18",
          videoId: "winter-words-18",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 19",
          videoId: "winter-words-19",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 20",
          videoId: "winter-words-20",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 21",
          videoId: "winter-words-21",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 22",
          videoId: "winter-words-22",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 23",
          videoId: "winter-words-23",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 24",
          videoId: "winter-words-24",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 25",
          videoId: "winter-words-25",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 26",
          videoId: "winter-words-26",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 27",
          videoId: "winter-words-27",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 28",
          videoId: "winter-words-28",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 29",
          videoId: "winter-words-29",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="WinterWords30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Words - Part 30",
          videoId: "winter-words-30",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Snow","emoji":"❄️","bgColor":"#90CAF9"},{"letter":"I","word":"Ice","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"S","word":"Snowman","emoji":"⛄","bgColor":"#F5F5F5"},{"letter":"S","word":"Snowflake","emoji":"❄️","bgColor":"#E3F2FD"},{"letter":"S","word":"Sled","emoji":"🛷","bgColor":"#D32F2F"},{"letter":"S","word":"Skiing","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"S","word":"Skating","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"M","word":"Mittens","emoji":"🧤","bgColor":"#E91E63"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Cocoa","emoji":"☕","bgColor":"#5D4037"},{"letter":"F","word":"Fireplace","emoji":"🔥","bgColor":"#FF5722"},{"letter":"B","word":"Blanket","emoji":"🧣","bgColor":"#7B1FA2"},{"letter":"I","word":"Icicle","emoji":"🧊","bgColor":"#B0BEC5"},{"letter":"W","word":"Winter","emoji":"❄️","bgColor":"#0288D1"},{"letter":"F","word":"Frost","emoji":"🥶","bgColor":"#90CAF9"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
