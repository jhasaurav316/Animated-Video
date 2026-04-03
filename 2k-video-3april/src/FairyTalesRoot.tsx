import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const FairyTalesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FairyTales1"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 1",
          videoId: "fairy-tales-1",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="FairyTales2"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 2",
          videoId: "fairy-tales-2",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"P","word":"Pirate","emoji":"🏴‍☠️","bgColor":"#212121"},{"letter":"G","word":"Genie","emoji":"🧞","bgColor":"#7B1FA2"},{"letter":"B","word":"Beauty","emoji":"🌹","bgColor":"#D32F2F"},{"letter":"B","word":"Beast","emoji":"🦁","bgColor":"#5D4037"},{"letter":"C","word":"Cinderella","emoji":"👗","bgColor":"#90CAF9"},{"letter":"R","word":"Rapunzel","emoji":"👸","bgColor":"#FDD835"},{"letter":"S","word":"Sleeping Beauty","emoji":"😴","bgColor":"#E91E63"},{"letter":"H","word":"Hansel","emoji":"🍞","bgColor":"#795548"},{"letter":"G","word":"Gretel","emoji":"🍬","bgColor":"#E91E63"},{"letter":"J","word":"Jack","emoji":"🫘","bgColor":"#4CAF50"},{"letter":"B","word":"Beanstalk","emoji":"🌱","bgColor":"#2E7D32"},{"letter":"W","word":"Wolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"S","word":"Sword","emoji":"⚔️","bgColor":"#455A64"},{"letter":"S","word":"Shield","emoji":"🛡️","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 112,
        }}
      />
      <Composition
        id="FairyTales3"
        component={AlphabetLongTemplate}
        durationInFrames={4680}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 3",
          videoId: "fairy-tales-3",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Potion","emoji":"🧪","bgColor":"#7B1FA2"},{"letter":"S","word":"Spell","emoji":"✨","bgColor":"#FFB300"},{"letter":"T","word":"Throne","emoji":"🪑","bgColor":"#FFD54F"},{"letter":"D","word":"Dwarf","emoji":"⛏️","bgColor":"#795548"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#4CAF50"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"M","word":"Magic Mirror","emoji":"🪞","bgColor":"#9C27B0"},{"letter":"C","word":"Chariot","emoji":"🐴","bgColor":"#FFB300"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"F","word":"Frog Prince","emoji":"🐸","bgColor":"#4CAF50"},{"letter":"G","word":"Glass Slipper","emoji":"👠","bgColor":"#B0BEC5"},{"letter":"R","word":"Rose","emoji":"🌹","bgColor":"#C62828"},{"letter":"S","word":"Stardust","emoji":"✨","bgColor":"#FDD835"},{"letter":"L","word":"Lamp","emoji":"🪔","bgColor":"#FFB300"},{"letter":"E","word":"Enchanted","emoji":"🌟","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 156,
        }}
      />
      <Composition
        id="FairyTales4"
        component={AlphabetLongTemplate}
        durationInFrames={3420}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 4",
          videoId: "fairy-tales-4",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 114,
        }}
      />
      <Composition
        id="FairyTales5"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 5",
          videoId: "fairy-tales-5",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="FairyTales6"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 6",
          videoId: "fairy-tales-6",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="FairyTales7"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 7",
          videoId: "fairy-tales-7",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="FairyTales8"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 8",
          videoId: "fairy-tales-8",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="FairyTales9"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 9",
          videoId: "fairy-tales-9",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="FairyTales10"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 10",
          videoId: "fairy-tales-10",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="FairyTales11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 11",
          videoId: "fairy-tales-11",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyTales12"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 12",
          videoId: "fairy-tales-12",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="FairyTales13"
        component={AlphabetLongTemplate}
        durationInFrames={5040}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 13",
          videoId: "fairy-tales-13",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 168,
        }}
      />
      <Composition
        id="FairyTales14"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 14",
          videoId: "fairy-tales-14",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="FairyTales15"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 15",
          videoId: "fairy-tales-15",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="FairyTales16"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 16",
          videoId: "fairy-tales-16",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="FairyTales17"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 17",
          videoId: "fairy-tales-17",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="FairyTales18"
        component={AlphabetLongTemplate}
        durationInFrames={3930}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 18",
          videoId: "fairy-tales-18",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 131,
        }}
      />
      <Composition
        id="FairyTales19"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 19",
          videoId: "fairy-tales-19",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="FairyTales20"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 20",
          videoId: "fairy-tales-20",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="FairyTales21"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 21",
          videoId: "fairy-tales-21",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="FairyTales22"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 22",
          videoId: "fairy-tales-22",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="FairyTales23"
        component={AlphabetLongTemplate}
        durationInFrames={2820}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 23",
          videoId: "fairy-tales-23",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 94,
        }}
      />
      <Composition
        id="FairyTales24"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 24",
          videoId: "fairy-tales-24",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="FairyTales25"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 25",
          videoId: "fairy-tales-25",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="FairyTales26"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 26",
          videoId: "fairy-tales-26",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="FairyTales27"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 27",
          videoId: "fairy-tales-27",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="FairyTales28"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 28",
          videoId: "fairy-tales-28",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="FairyTales29"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 29",
          videoId: "fairy-tales-29",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="FairyTales30"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Tales - Part 30",
          videoId: "fairy-tales-30",
          bgGradient: ["#FFB300","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [{"letter":"P","word":"Princess","emoji":"👸","bgColor":"#E91E63"},{"letter":"P","word":"Prince","emoji":"🤴","bgColor":"#1565C0"},{"letter":"K","word":"King","emoji":"👑","bgColor":"#FFB300"},{"letter":"Q","word":"Queen","emoji":"👑","bgColor":"#7B1FA2"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"C","word":"Castle","emoji":"🏰","bgColor":"#795548"},{"letter":"K","word":"Knight","emoji":"⚔️","bgColor":"#607D8B"},{"letter":"M","word":"Magic Wand","emoji":"🪄","bgColor":"#FFB300"},{"letter":"T","word":"Treasure","emoji":"💎","bgColor":"#FFD54F"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"},{"letter":"G","word":"Giant","emoji":"🏔️","bgColor":"#795548"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
    </>
  );
};
