import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const SportsEquipmentRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SportsEquipment1"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 1",
          videoId: "sports-equipment-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="SportsEquipment2"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 2",
          videoId: "sports-equipment-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"D","word":"Dumbbell","emoji":"🏋️","bgColor":"#455A64"},{"letter":"J","word":"Jersey","emoji":"👕","bgColor":"#D32F2F"},{"letter":"T","word":"Trophy","emoji":"🏆","bgColor":"#FFB300"},{"letter":"M","word":"Medal","emoji":"🥇","bgColor":"#FFD54F"},{"letter":"S","word":"Stopwatch","emoji":"⏱️","bgColor":"#607D8B"},{"letter":"C","word":"Cleats","emoji":"👟","bgColor":"#212121"},{"letter":"G","word":"Goal Post","emoji":"🥅","bgColor":"#F5F5F5"},{"letter":"T","word":"Tennis Ball","emoji":"🎾","bgColor":"#CDDC39"},{"letter":"B","word":"Basketball","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"F","word":"Football","emoji":"🏈","bgColor":"#795548"},{"letter":"S","word":"Soccer Ball","emoji":"⚽","bgColor":"#F5F5F5"},{"letter":"V","word":"Volleyball","emoji":"🏐","bgColor":"#FDD835"},{"letter":"C","word":"Cricket Ball","emoji":"🏏","bgColor":"#D32F2F"},{"letter":"B","word":"Baseball","emoji":"⚾","bgColor":"#F5F5F5"},{"letter":"G","word":"Golf Ball","emoji":"⛳","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="SportsEquipment3"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 3",
          videoId: "sports-equipment-3",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Paddle","emoji":"🏓","bgColor":"#D32F2F"},{"letter":"B","word":"Boxing Glove","emoji":"🥊","bgColor":"#C62828"},{"letter":"A","word":"Archery Bow","emoji":"🏹","bgColor":"#795548"},{"letter":"F","word":"Fencing Sword","emoji":"🤺","bgColor":"#607D8B"},{"letter":"K","word":"Knee Pad","emoji":"🛡️","bgColor":"#212121"},{"letter":"S","word":"Shin Guard","emoji":"🦵","bgColor":"#1565C0"},{"letter":"R","word":"Roller Skate","emoji":"🛼","bgColor":"#E91E63"},{"letter":"I","word":"Ice Skate","emoji":"⛸️","bgColor":"#00BCD4"},{"letter":"W","word":"Water Polo Ball","emoji":"🤽","bgColor":"#FDD835"},{"letter":"Y","word":"Yoga Mat","emoji":"🧘","bgColor":"#7B1FA2"},{"letter":"J","word":"Javelin","emoji":"🏹","bgColor":"#795548"},{"letter":"D","word":"Discus","emoji":"🥏","bgColor":"#607D8B"},{"letter":"L","word":"Lacrosse Stick","emoji":"🥍","bgColor":"#FF6F00"},{"letter":"T","word":"Trampoline","emoji":"🤸","bgColor":"#E91E63"},{"letter":"C","word":"Climbing Rope","emoji":"🧗","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="SportsEquipment4"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 4",
          videoId: "sports-equipment-4",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="SportsEquipment5"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 5",
          videoId: "sports-equipment-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="SportsEquipment6"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 6",
          videoId: "sports-equipment-6",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="SportsEquipment7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 7",
          videoId: "sports-equipment-7",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SportsEquipment8"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 8",
          videoId: "sports-equipment-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="SportsEquipment9"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 9",
          videoId: "sports-equipment-9",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="SportsEquipment10"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 10",
          videoId: "sports-equipment-10",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="SportsEquipment11"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 11",
          videoId: "sports-equipment-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="SportsEquipment12"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 12",
          videoId: "sports-equipment-12",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="SportsEquipment13"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 13",
          videoId: "sports-equipment-13",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="SportsEquipment14"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 14",
          videoId: "sports-equipment-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="SportsEquipment15"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 15",
          videoId: "sports-equipment-15",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="SportsEquipment16"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 16",
          videoId: "sports-equipment-16",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="SportsEquipment17"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 17",
          videoId: "sports-equipment-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="SportsEquipment18"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 18",
          videoId: "sports-equipment-18",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="SportsEquipment19"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 19",
          videoId: "sports-equipment-19",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="SportsEquipment20"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 20",
          videoId: "sports-equipment-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="SportsEquipment21"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 21",
          videoId: "sports-equipment-21",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="SportsEquipment22"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 22",
          videoId: "sports-equipment-22",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="SportsEquipment23"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 23",
          videoId: "sports-equipment-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="SportsEquipment24"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 24",
          videoId: "sports-equipment-24",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="SportsEquipment25"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 25",
          videoId: "sports-equipment-25",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="SportsEquipment26"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 26",
          videoId: "sports-equipment-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="SportsEquipment27"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 27",
          videoId: "sports-equipment-27",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="SportsEquipment28"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 28",
          videoId: "sports-equipment-28",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="SportsEquipment29"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 29",
          videoId: "sports-equipment-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="SportsEquipment30"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Equipment - Part 30",
          videoId: "sports-equipment-30",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"B","word":"Ball","emoji":"⚽","bgColor":"#1E88E5"},{"letter":"B","word":"Bat","emoji":"🏏","bgColor":"#795548"},{"letter":"R","word":"Racket","emoji":"🏸","bgColor":"#4CAF50"},{"letter":"H","word":"Helmet","emoji":"⛑️","bgColor":"#D32F2F"},{"letter":"G","word":"Gloves","emoji":"🥊","bgColor":"#D32F2F"},{"letter":"S","word":"Shuttlecock","emoji":"🏸","bgColor":"#F5F5F5"},{"letter":"N","word":"Net","emoji":"🥅","bgColor":"#607D8B"},{"letter":"H","word":"Hoop","emoji":"🏀","bgColor":"#FF6F00"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#FFB300"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"S","word":"Surfboard","emoji":"🏄","bgColor":"#0288D1"},{"letter":"S","word":"Snowboard","emoji":"🏂","bgColor":"#00BCD4"},{"letter":"S","word":"Ski","emoji":"⛷️","bgColor":"#0288D1"},{"letter":"P","word":"Puck","emoji":"🏒","bgColor":"#212121"},{"letter":"S","word":"Stick","emoji":"🏒","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
    </>
  );
};
