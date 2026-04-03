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
        durationInFrames={4140}
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
          targetDuration: 138,
        }}
      />
      <Composition
        id="Playground2"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
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
          targetDuration: 96,
        }}
      />
      <Composition
        id="Playground3"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
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
          targetDuration: 140,
        }}
      />
      <Composition
        id="Playground4"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
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
          targetDuration: 98,
        }}
      />
      <Composition
        id="Playground5"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
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
          targetDuration: 142,
        }}
      />
      <Composition
        id="Playground6"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
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
          targetDuration: 100,
        }}
      />
      <Composition
        id="Playground7"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
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
          targetDuration: 145,
        }}
      />
      <Composition
        id="Playground8"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
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
          targetDuration: 103,
        }}
      />
      <Composition
        id="Playground9"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
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
          targetDuration: 147,
        }}
      />
      <Composition
        id="Playground10"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
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
          targetDuration: 105,
        }}
      />
      <Composition
        id="Playground11"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
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
          targetDuration: 149,
        }}
      />
      <Composition
        id="Playground12"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
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
          targetDuration: 108,
        }}
      />
      <Composition
        id="Playground13"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
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
          targetDuration: 152,
        }}
      />
      <Composition
        id="Playground14"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
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
          targetDuration: 110,
        }}
      />
      <Composition
        id="Playground15"
        component={AlphabetLongTemplate}
        durationInFrames={4620}
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
          targetDuration: 154,
        }}
      />
      <Composition
        id="Playground16"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
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
          targetDuration: 112,
        }}
      />
      <Composition
        id="Playground17"
        component={AlphabetLongTemplate}
        durationInFrames={4710}
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
          targetDuration: 157,
        }}
      />
      <Composition
        id="Playground18"
        component={AlphabetLongTemplate}
        durationInFrames={3450}
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
          targetDuration: 115,
        }}
      />
      <Composition
        id="Playground19"
        component={AlphabetLongTemplate}
        durationInFrames={4770}
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
          targetDuration: 159,
        }}
      />
      <Composition
        id="Playground20"
        component={AlphabetLongTemplate}
        durationInFrames={3510}
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
          targetDuration: 117,
        }}
      />
      <Composition
        id="Playground21"
        component={AlphabetLongTemplate}
        durationInFrames={4830}
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
          targetDuration: 161,
        }}
      />
      <Composition
        id="Playground22"
        component={AlphabetLongTemplate}
        durationInFrames={3600}
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
          targetDuration: 120,
        }}
      />
      <Composition
        id="Playground23"
        component={AlphabetLongTemplate}
        durationInFrames={4920}
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
          targetDuration: 164,
        }}
      />
      <Composition
        id="Playground24"
        component={AlphabetLongTemplate}
        durationInFrames={3660}
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
          targetDuration: 122,
        }}
      />
      <Composition
        id="Playground25"
        component={AlphabetLongTemplate}
        durationInFrames={4980}
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
          targetDuration: 166,
        }}
      />
      <Composition
        id="Playground26"
        component={AlphabetLongTemplate}
        durationInFrames={3720}
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
          targetDuration: 124,
        }}
      />
      <Composition
        id="Playground27"
        component={AlphabetLongTemplate}
        durationInFrames={5070}
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
          targetDuration: 169,
        }}
      />
      <Composition
        id="Playground28"
        component={AlphabetLongTemplate}
        durationInFrames={3810}
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
          targetDuration: 127,
        }}
      />
      <Composition
        id="Playground29"
        component={AlphabetLongTemplate}
        durationInFrames={5130}
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
          targetDuration: 171,
        }}
      />
      <Composition
        id="Playground30"
        component={AlphabetLongTemplate}
        durationInFrames={3870}
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
          targetDuration: 129,
        }}
      />
    </>
  );
};
