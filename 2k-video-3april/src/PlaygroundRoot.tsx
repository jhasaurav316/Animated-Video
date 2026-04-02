import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const PlaygroundRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Playground1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 1",
          videoId: "playground-1",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 2",
          videoId: "playground-2",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tunnel","emoji":"🚇","bgColor":"#607D8B"},{"letter":"W","word":"Water Fountain","emoji":"⛲","bgColor":"#0288D1"},{"letter":"P","word":"Picnic Table","emoji":"🪑","bgColor":"#795548"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"},{"letter":"S","word":"Spinner","emoji":"🌀","bgColor":"#7B1FA2"},{"letter":"B","word":"Bench","emoji":"🪑","bgColor":"#5D4037"},{"letter":"G","word":"Grass Field","emoji":"🌱","bgColor":"#2E7D32"},{"letter":"P","word":"Playground","emoji":"🎪","bgColor":"#FF5722"},{"letter":"R","word":"Roller Skates","emoji":"🛼","bgColor":"#E91E63"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"H","word":"Hula Hoop","emoji":"⭕","bgColor":"#FF6F00"},{"letter":"C","word":"Chalk Drawing","emoji":"🖍️","bgColor":"#FDD835"},{"letter":"T","word":"Tag Game","emoji":"🏃","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 3",
          videoId: "playground-3",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Dodgeball","emoji":"🏐","bgColor":"#FF5722"},{"letter":"C","word":"Catch","emoji":"🧤","bgColor":"#1565C0"},{"letter":"H","word":"Hide and Seek","emoji":"🙈","bgColor":"#FF8F00"},{"letter":"L","word":"Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"P","word":"Pole","emoji":"🏗️","bgColor":"#607D8B"},{"letter":"R","word":"Rings","emoji":"⭕","bgColor":"#FFB300"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#0288D1"},{"letter":"T","word":"Tetherball","emoji":"🏐","bgColor":"#D32F2F"},{"letter":"W","word":"Wagon","emoji":"🚗","bgColor":"#4CAF50"},{"letter":"Z","word":"Zipline","emoji":"🏗️","bgColor":"#FF6F00"},{"letter":"Y","word":"Yard","emoji":"🌿","bgColor":"#2E7D32"},{"letter":"G","word":"Gazebo","emoji":"🏠","bgColor":"#795548"},{"letter":"F","word":"Fort","emoji":"🏰","bgColor":"#5D4037"},{"letter":"A","word":"Adventure","emoji":"🏕️","bgColor":"#FF8F00"},{"letter":"N","word":"Nature Trail","emoji":"🌲","bgColor":"#1B5E20"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 4",
          videoId: "playground-4",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 5",
          videoId: "playground-5",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 6",
          videoId: "playground-6",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 7",
          videoId: "playground-7",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 8",
          videoId: "playground-8",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 9",
          videoId: "playground-9",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 10",
          videoId: "playground-10",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 11",
          videoId: "playground-11",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 12",
          videoId: "playground-12",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 13",
          videoId: "playground-13",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 14",
          videoId: "playground-14",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 15",
          videoId: "playground-15",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 16",
          videoId: "playground-16",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 17",
          videoId: "playground-17",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 18",
          videoId: "playground-18",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 19",
          videoId: "playground-19",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 20",
          videoId: "playground-20",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 21",
          videoId: "playground-21",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 22",
          videoId: "playground-22",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 23",
          videoId: "playground-23",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 24",
          videoId: "playground-24",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 25",
          videoId: "playground-25",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 26",
          videoId: "playground-26",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 27",
          videoId: "playground-27",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 28",
          videoId: "playground-28",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 29",
          videoId: "playground-29",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Playground30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Playground - Part 30",
          videoId: "playground-30",
          bgGradient: ["#2196F3","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"S","word":"Swing","emoji":"🎠","bgColor":"#4CAF50"},{"letter":"S","word":"Slide","emoji":"🛝","bgColor":"#FF5722"},{"letter":"S","word":"Seesaw","emoji":"⚖️","bgColor":"#FDD835"},{"letter":"M","word":"Monkey Bars","emoji":"🐒","bgColor":"#FF8F00"},{"letter":"S","word":"Sandbox","emoji":"🏖️","bgColor":"#FFB300"},{"letter":"J","word":"Jungle Gym","emoji":"🏗️","bgColor":"#4CAF50"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Wall","emoji":"🧗","bgColor":"#795548"},{"letter":"M","word":"Merry-Go-Round","emoji":"🎠","bgColor":"#D32F2F"},{"letter":"R","word":"Rope Ladder","emoji":"🪜","bgColor":"#FF6F00"},{"letter":"B","word":"Balance Beam","emoji":"🤸","bgColor":"#00BCD4"},{"letter":"T","word":"Tire Swing","emoji":"🛞","bgColor":"#212121"},{"letter":"H","word":"Hopscotch","emoji":"🎯","bgColor":"#E91E63"},{"letter":"J","word":"Jump Rope","emoji":"🤸","bgColor":"#4CAF50"},{"letter":"B","word":"Ball Pit","emoji":"⚽","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
