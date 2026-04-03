import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const SummerWordsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SummerWords1"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 1",
          videoId: "summer-words-1",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="SummerWords2"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 2",
          videoId: "summer-words-2",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"H","word":"Hammock","emoji":"🏖️","bgColor":"#FF8F00"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"F","word":"Fireworks","emoji":"🎆","bgColor":"#7B1FA2"},{"letter":"V","word":"Vacation","emoji":"✈️","bgColor":"#0288D1"},{"letter":"S","word":"Seashell","emoji":"🐚","bgColor":"#FFB74D"},{"letter":"D","word":"Diving","emoji":"🤿","bgColor":"#0288D1"},{"letter":"S","word":"Starfish","emoji":"⭐","bgColor":"#FFB300"},{"letter":"J","word":"Jet Ski","emoji":"🚤","bgColor":"#00BCD4"},{"letter":"T","word":"Tan","emoji":"☀️","bgColor":"#FFB74D"},{"letter":"P","word":"Picnic","emoji":"🧺","bgColor":"#4CAF50"},{"letter":"W","word":"Wave","emoji":"🌊","bgColor":"#0288D1"},{"letter":"C","word":"Coconut","emoji":"🥥","bgColor":"#5D4037"},{"letter":"S","word":"Snorkel","emoji":"🤿","bgColor":"#00BCD4"},{"letter":"M","word":"Mango","emoji":"🥭","bgColor":"#FF8F00"},{"letter":"T","word":"Tropical","emoji":"🌴","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="SummerWords3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 3",
          videoId: "summer-words-3",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"H","word":"Heat","emoji":"🌡️","bgColor":"#FF5722"},{"letter":"S","word":"Shade","emoji":"🌳","bgColor":"#2E7D32"},{"letter":"B","word":"Butterfly","emoji":"🦋","bgColor":"#E91E63"},{"letter":"F","word":"Fan","emoji":"🌀","bgColor":"#0288D1"},{"letter":"G","word":"Garden","emoji":"🌻","bgColor":"#4CAF50"},{"letter":"R","word":"Rainbow","emoji":"🌈","bgColor":"#E91E63"},{"letter":"L","word":"Lightning Bug","emoji":"🐛","bgColor":"#FDD835"},{"letter":"C","word":"Cricket","emoji":"🦗","bgColor":"#2E7D32"},{"letter":"S","word":"Sprinkler","emoji":"💦","bgColor":"#00BCD4"},{"letter":"H","word":"Hike","emoji":"🥾","bgColor":"#795548"},{"letter":"P","word":"Parasol","emoji":"☂️","bgColor":"#E91E63"},{"letter":"B","word":"Boardwalk","emoji":"🎡","bgColor":"#FF8F00"},{"letter":"O","word":"Ocean","emoji":"🌊","bgColor":"#0D47A1"},{"letter":"T","word":"Tide Pool","emoji":"🦀","bgColor":"#00838F"},{"letter":"S","word":"Sunset","emoji":"🌇","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SummerWords4"
        component={AlphabetLongTemplate}
        durationInFrames={3720}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 4",
          videoId: "summer-words-4",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 124,
        }}
      />
      <Composition
        id="SummerWords5"
        component={AlphabetLongTemplate}
        durationInFrames={5040}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 5",
          videoId: "summer-words-5",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 168,
        }}
      />
      <Composition
        id="SummerWords6"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 6",
          videoId: "summer-words-6",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="SummerWords7"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 7",
          videoId: "summer-words-7",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="SummerWords8"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 8",
          videoId: "summer-words-8",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="SummerWords9"
        component={AlphabetLongTemplate}
        durationInFrames={5190}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 9",
          videoId: "summer-words-9",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 173,
        }}
      />
      <Composition
        id="SummerWords10"
        component={AlphabetLongTemplate}
        durationInFrames={3930}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 10",
          videoId: "summer-words-10",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 131,
        }}
      />
      <Composition
        id="SummerWords11"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 11",
          videoId: "summer-words-11",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="SummerWords12"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 12",
          videoId: "summer-words-12",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="SummerWords13"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 13",
          videoId: "summer-words-13",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="SummerWords14"
        component={AlphabetLongTemplate}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 14",
          videoId: "summer-words-14",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 136,
        }}
      />
      <Composition
        id="SummerWords15"
        component={AlphabetLongTemplate}
        durationInFrames={2820}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 15",
          videoId: "summer-words-15",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 94,
        }}
      />
      <Composition
        id="SummerWords16"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 16",
          videoId: "summer-words-16",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="SummerWords17"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 17",
          videoId: "summer-words-17",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="SummerWords18"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 18",
          videoId: "summer-words-18",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="SummerWords19"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 19",
          videoId: "summer-words-19",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="SummerWords20"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 20",
          videoId: "summer-words-20",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="SummerWords21"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 21",
          videoId: "summer-words-21",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="SummerWords22"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 22",
          videoId: "summer-words-22",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="SummerWords23"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 23",
          videoId: "summer-words-23",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="SummerWords24"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 24",
          videoId: "summer-words-24",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="SummerWords25"
        component={AlphabetLongTemplate}
        durationInFrames={3180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 25",
          videoId: "summer-words-25",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 106,
        }}
      />
      <Composition
        id="SummerWords26"
        component={AlphabetLongTemplate}
        durationInFrames={4500}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 26",
          videoId: "summer-words-26",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 150,
        }}
      />
      <Composition
        id="SummerWords27"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 27",
          videoId: "summer-words-27",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="SummerWords28"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 28",
          videoId: "summer-words-28",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
      <Composition
        id="SummerWords29"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 29",
          videoId: "summer-words-29",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 110,
        }}
      />
      <Composition
        id="SummerWords30"
        component={AlphabetLongTemplate}
        durationInFrames={4650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Words - Part 30",
          videoId: "summer-words-30",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"S","word":"Sun","emoji":"☀️","bgColor":"#FFB300"},{"letter":"B","word":"Beach","emoji":"🏖️","bgColor":"#FFB74D"},{"letter":"S","word":"Swim","emoji":"🏊","bgColor":"#0288D1"},{"letter":"I","word":"Ice Cream","emoji":"🍦","bgColor":"#F48FB1"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"S","word":"Sunscreen","emoji":"🧴","bgColor":"#FDD835"},{"letter":"S","word":"Sandcastle","emoji":"🏰","bgColor":"#FFB300"},{"letter":"F","word":"Flip Flops","emoji":"🩴","bgColor":"#FF6F00"},{"letter":"W","word":"Watermelon","emoji":"🍉","bgColor":"#4CAF50"},{"letter":"P","word":"Pool","emoji":"🏊","bgColor":"#00BCD4"},{"letter":"S","word":"Surfing","emoji":"🏄","bgColor":"#0288D1"},{"letter":"L","word":"Lemonade","emoji":"🍋","bgColor":"#FDD835"},{"letter":"P","word":"Popsicle","emoji":"🍧","bgColor":"#E91E63"},{"letter":"B","word":"Barbecue","emoji":"🍖","bgColor":"#D32F2F"},{"letter":"C","word":"Camping","emoji":"🏕️","bgColor":"#2E7D32"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 155,
        }}
      />
    </>
  );
};
