import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const MythicalCreaturesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MythicalCreatures1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 1",
          videoId: "mythical-creatures-1",
          bgGradient: ["#311B92","#7C4DFF"] as [string, string],
          accentColor: "#1A0066",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 2",
          videoId: "mythical-creatures-2",
          bgGradient: ["#B71C1C","#FF8A80"] as [string, string],
          accentColor: "#7F0000",
          letters: [{"letter":"G","word":"Genie","emoji":"🧞","bgColor":"#7B1FA2"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"},{"letter":"H","word":"Hydra","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"S","word":"Sphinx","emoji":"🏛️","bgColor":"#FFB300"},{"letter":"C","word":"Cyclops","emoji":"👁️","bgColor":"#607D8B"},{"letter":"N","word":"Nymph","emoji":"🧚","bgColor":"#E91E63"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#388E3C"},{"letter":"B","word":"Banshee","emoji":"👻","bgColor":"#7B1FA2"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#1B5E20"},{"letter":"W","word":"Wizard","emoji":"🧙","bgColor":"#4527A0"},{"letter":"S","word":"Siren","emoji":"🧜","bgColor":"#00838F"},{"letter":"T","word":"Thunderbird","emoji":"⚡","bgColor":"#FBC02D"},{"letter":"C","word":"Chimera","emoji":"🦁","bgColor":"#D32F2F"},{"letter":"G","word":"Gargoyle","emoji":"🗿","bgColor":"#455A64"},{"letter":"M","word":"Medusa","emoji":"🐍","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 3",
          videoId: "mythical-creatures-3",
          bgGradient: ["#004D40","#64FFDA"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 4",
          videoId: "mythical-creatures-4",
          bgGradient: ["#311B92","#7C4DFF"] as [string, string],
          accentColor: "#1A0066",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 5",
          videoId: "mythical-creatures-5",
          bgGradient: ["#B71C1C","#FF8A80"] as [string, string],
          accentColor: "#7F0000",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 6",
          videoId: "mythical-creatures-6",
          bgGradient: ["#004D40","#64FFDA"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 7",
          videoId: "mythical-creatures-7",
          bgGradient: ["#311B92","#7C4DFF"] as [string, string],
          accentColor: "#1A0066",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 8",
          videoId: "mythical-creatures-8",
          bgGradient: ["#B71C1C","#FF8A80"] as [string, string],
          accentColor: "#7F0000",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 9",
          videoId: "mythical-creatures-9",
          bgGradient: ["#004D40","#64FFDA"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 10",
          videoId: "mythical-creatures-10",
          bgGradient: ["#311B92","#7C4DFF"] as [string, string],
          accentColor: "#1A0066",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 11",
          videoId: "mythical-creatures-11",
          bgGradient: ["#B71C1C","#FF8A80"] as [string, string],
          accentColor: "#7F0000",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 12",
          videoId: "mythical-creatures-12",
          bgGradient: ["#004D40","#64FFDA"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 13",
          videoId: "mythical-creatures-13",
          bgGradient: ["#311B92","#7C4DFF"] as [string, string],
          accentColor: "#1A0066",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 14",
          videoId: "mythical-creatures-14",
          bgGradient: ["#B71C1C","#FF8A80"] as [string, string],
          accentColor: "#7F0000",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 15",
          videoId: "mythical-creatures-15",
          bgGradient: ["#004D40","#64FFDA"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 16",
          videoId: "mythical-creatures-16",
          bgGradient: ["#311B92","#7C4DFF"] as [string, string],
          accentColor: "#1A0066",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 17",
          videoId: "mythical-creatures-17",
          bgGradient: ["#B71C1C","#FF8A80"] as [string, string],
          accentColor: "#7F0000",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 18",
          videoId: "mythical-creatures-18",
          bgGradient: ["#004D40","#64FFDA"] as [string, string],
          accentColor: "#00251A",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 19",
          videoId: "mythical-creatures-19",
          bgGradient: ["#311B92","#7C4DFF"] as [string, string],
          accentColor: "#1A0066",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="MythicalCreatures20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical Creatures - Part 20",
          videoId: "mythical-creatures-20",
          bgGradient: ["#B71C1C","#FF8A80"] as [string, string],
          accentColor: "#7F0000",
          letters: [{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#C62828"},{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"M","word":"Mermaid","emoji":"🧜","bgColor":"#00BCD4"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#90CAF9"},{"letter":"K","word":"Kraken","emoji":"🦑","bgColor":"#0D47A1"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#388E3C"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#F48FB1"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#4CAF50"},{"letter":"T","word":"Troll","emoji":"👹","bgColor":"#5D4037"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#455A64"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
