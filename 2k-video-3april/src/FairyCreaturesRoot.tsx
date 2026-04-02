import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const FairyCreaturesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FairyCreatures1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 1",
          videoId: "fairy-creatures-1",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 2",
          videoId: "fairy-creatures-2",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cyclops","emoji":"👁️","bgColor":"#607D8B"},{"letter":"G","word":"Genie","emoji":"🧞","bgColor":"#7B1FA2"},{"letter":"N","word":"Nymph","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"L","word":"Leprechaun","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"Y","word":"Yeti","emoji":"❄️","bgColor":"#B0BEC5"},{"letter":"B","word":"Bigfoot","emoji":"🦶","bgColor":"#5D4037"},{"letter":"V","word":"Vampire","emoji":"🧛","bgColor":"#C62828"},{"letter":"W","word":"Werewolf","emoji":"🐺","bgColor":"#607D8B"},{"letter":"Z","word":"Zombie","emoji":"🧟","bgColor":"#2E7D32"},{"letter":"G","word":"Ghost","emoji":"👻","bgColor":"#B0BEC5"},{"letter":"W","word":"Witch","emoji":"🧙‍♀️","bgColor":"#7B1FA2"},{"letter":"O","word":"Ogre","emoji":"👹","bgColor":"#4CAF50"},{"letter":"H","word":"Hydra","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"D","word":"Dwarf","emoji":"⛏️","bgColor":"#795548"},{"letter":"S","word":"Siren","emoji":"🧜‍♀️","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 3",
          videoId: "fairy-creatures-3",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"R","word":"Roc Bird","emoji":"🦅","bgColor":"#5D4037"},{"letter":"B","word":"Basilisk","emoji":"🐍","bgColor":"#2E7D32"},{"letter":"I","word":"Imp","emoji":"😈","bgColor":"#D32F2F"},{"letter":"J","word":"Jackalope","emoji":"🐰","bgColor":"#8D6E63"},{"letter":"T","word":"Thunderbird","emoji":"⚡","bgColor":"#1565C0"},{"letter":"A","word":"Angel","emoji":"👼","bgColor":"#FFD54F"},{"letter":"P","word":"Pixie","emoji":"✨","bgColor":"#E91E63"},{"letter":"F","word":"Fairy Godmother","emoji":"🧚‍♀️","bgColor":"#9C27B0"},{"letter":"N","word":"Nessie","emoji":"🦕","bgColor":"#0277BD"},{"letter":"K","word":"Kelpie","emoji":"🐴","bgColor":"#00695C"},{"letter":"S","word":"Selkie","emoji":"🦭","bgColor":"#0288D1"},{"letter":"C","word":"Chimera","emoji":"🦁","bgColor":"#FF6F00"},{"letter":"M","word":"Manticore","emoji":"🦂","bgColor":"#C62828"},{"letter":"G","word":"Gargoyle","emoji":"🗿","bgColor":"#607D8B"},{"letter":"L","word":"Loch Ness","emoji":"🦕","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 4",
          videoId: "fairy-creatures-4",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 5",
          videoId: "fairy-creatures-5",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 6",
          videoId: "fairy-creatures-6",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 7",
          videoId: "fairy-creatures-7",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 8",
          videoId: "fairy-creatures-8",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 9",
          videoId: "fairy-creatures-9",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 10",
          videoId: "fairy-creatures-10",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 11",
          videoId: "fairy-creatures-11",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 12",
          videoId: "fairy-creatures-12",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 13",
          videoId: "fairy-creatures-13",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 14",
          videoId: "fairy-creatures-14",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 15",
          videoId: "fairy-creatures-15",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 16",
          videoId: "fairy-creatures-16",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 17",
          videoId: "fairy-creatures-17",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 18",
          videoId: "fairy-creatures-18",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 19",
          videoId: "fairy-creatures-19",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 20",
          videoId: "fairy-creatures-20",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 21",
          videoId: "fairy-creatures-21",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 22",
          videoId: "fairy-creatures-22",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 23",
          videoId: "fairy-creatures-23",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 24",
          videoId: "fairy-creatures-24",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 25",
          videoId: "fairy-creatures-25",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 26",
          videoId: "fairy-creatures-26",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 27",
          videoId: "fairy-creatures-27",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 28",
          videoId: "fairy-creatures-28",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 29",
          videoId: "fairy-creatures-29",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="FairyCreatures30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fairy Creatures - Part 30",
          videoId: "fairy-creatures-30",
          bgGradient: ["#00BCD4","#B2EBF2"] as [string, string],
          accentColor: "#006064",
          letters: [{"letter":"U","word":"Unicorn","emoji":"🦄","bgColor":"#E91E63"},{"letter":"D","word":"Dragon","emoji":"🐉","bgColor":"#D32F2F"},{"letter":"F","word":"Fairy","emoji":"🧚","bgColor":"#E91E63"},{"letter":"M","word":"Mermaid","emoji":"🧜‍♀️","bgColor":"#00BCD4"},{"letter":"P","word":"Phoenix","emoji":"🔥","bgColor":"#FF6F00"},{"letter":"G","word":"Griffin","emoji":"🦅","bgColor":"#FFB300"},{"letter":"E","word":"Elf","emoji":"🧝","bgColor":"#2E7D32"},{"letter":"T","word":"Troll","emoji":"🧌","bgColor":"#607D8B"},{"letter":"G","word":"Gnome","emoji":"🧙","bgColor":"#D32F2F"},{"letter":"C","word":"Centaur","emoji":"🐴","bgColor":"#795548"},{"letter":"P","word":"Pegasus","emoji":"🐴","bgColor":"#F5F5F5"},{"letter":"W","word":"Wizard","emoji":"🧙‍♂️","bgColor":"#311B92"},{"letter":"S","word":"Sphinx","emoji":"🦁","bgColor":"#FFB300"},{"letter":"K","word":"Kraken","emoji":"🐙","bgColor":"#0D47A1"},{"letter":"M","word":"Minotaur","emoji":"🐂","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
