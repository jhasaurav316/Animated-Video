import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const ToysRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Toys1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 1",
          videoId: "toys-1",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 2",
          videoId: "toys-2",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Marbles","emoji":"🔮","bgColor":"#1565C0"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"J","word":"Jack-in-Box","emoji":"🤡","bgColor":"#E91E63"},{"letter":"P","word":"Playdough","emoji":"🎨","bgColor":"#FF9800"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"H","word":"Hula Hoop","emoji":"⭕","bgColor":"#E91E63"},{"letter":"R","word":"Rattle","emoji":"🎵","bgColor":"#F48FB1"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"S","word":"Stuffed Animal","emoji":"🐻","bgColor":"#795548"},{"letter":"B","word":"Bubbles","emoji":"🫧","bgColor":"#90CAF9"},{"letter":"T","word":"Toy Soldier","emoji":"🧑‍✈️","bgColor":"#2E7D32"},{"letter":"A","word":"Action Figure","emoji":"🦸","bgColor":"#1565C0"},{"letter":"N","word":"Nerf Gun","emoji":"🔫","bgColor":"#FF6F00"},{"letter":"C","word":"Clay","emoji":"🏺","bgColor":"#8D6E63"},{"letter":"G","word":"Game Board","emoji":"🎲","bgColor":"#4527A0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 3",
          videoId: "toys-3",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"U","word":"Unicycle","emoji":"🚲","bgColor":"#D32F2F"},{"letter":"P","word":"Puppet","emoji":"🎭","bgColor":"#7B1FA2"},{"letter":"R","word":"Rubik Cube","emoji":"🟥","bgColor":"#FF5722"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"K","word":"Kaleidoscope","emoji":"🔭","bgColor":"#E91E63"},{"letter":"W","word":"Water Gun","emoji":"🔫","bgColor":"#2196F3"},{"letter":"D","word":"Dinosaur Toy","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"B","word":"Balloon","emoji":"🎈","bgColor":"#F44336"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#FF9800"},{"letter":"T","word":"Tricycle","emoji":"🚲","bgColor":"#E91E63"},{"letter":"L","word":"Lincoln Logs","emoji":"🪵","bgColor":"#795548"},{"letter":"H","word":"Helicopter Toy","emoji":"🚁","bgColor":"#0288D1"},{"letter":"M","word":"Model Kit","emoji":"✈️","bgColor":"#455A64"},{"letter":"F","word":"Finger Paint","emoji":"🎨","bgColor":"#E91E63"},{"letter":"S","word":"Sand Castle","emoji":"🏰","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 4",
          videoId: "toys-4",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"J","word":"Jigsaw","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 5",
          videoId: "toys-5",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 6",
          videoId: "toys-6",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 7",
          videoId: "toys-7",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 8",
          videoId: "toys-8",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 9",
          videoId: "toys-9",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 10",
          videoId: "toys-10",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 11",
          videoId: "toys-11",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 12",
          videoId: "toys-12",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 13",
          videoId: "toys-13",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 14",
          videoId: "toys-14",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 15",
          videoId: "toys-15",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 16",
          videoId: "toys-16",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 17",
          videoId: "toys-17",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 18",
          videoId: "toys-18",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 19",
          videoId: "toys-19",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 20",
          videoId: "toys-20",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 21",
          videoId: "toys-21",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 22",
          videoId: "toys-22",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 23",
          videoId: "toys-23",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 24",
          videoId: "toys-24",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 25",
          videoId: "toys-25",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 26",
          videoId: "toys-26",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 27",
          videoId: "toys-27",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 28",
          videoId: "toys-28",
          bgGradient: ["#FF5722","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 29",
          videoId: "toys-29",
          bgGradient: ["#E91E63","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Toys30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Toys - Part 30",
          videoId: "toys-30",
          bgGradient: ["#2196F3","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Teddy Bear","emoji":"🧸","bgColor":"#FF5722"},{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"D","word":"Doll","emoji":"🪆","bgColor":"#E91E63"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"P","word":"Puzzle","emoji":"🧩","bgColor":"#4CAF50"},{"letter":"K","word":"Kite","emoji":"🪁","bgColor":"#FF9800"},{"letter":"L","word":"Lego","emoji":"🧱","bgColor":"#FDD835"},{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Y","word":"Yo-Yo","emoji":"🪀","bgColor":"#9C27B0"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#795548"},{"letter":"T","word":"Top","emoji":"🪅","bgColor":"#E91E63"},{"letter":"S","word":"Slinky","emoji":"🌀","bgColor":"#00BCD4"},{"letter":"B","word":"Blocks","emoji":"🧱","bgColor":"#FF5722"},{"letter":"F","word":"Frisbee","emoji":"🥏","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
