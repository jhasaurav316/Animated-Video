import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const MusicalSoundsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MusicalSounds1"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 1",
          videoId: "musical-sounds-1",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="MusicalSounds2"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 2",
          videoId: "musical-sounds-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Banjo","emoji":"🪕","bgColor":"#FF8F00"},{"letter":"U","word":"Ukulele","emoji":"🎸","bgColor":"#00BCD4"},{"letter":"A","word":"Accordion","emoji":"🪗","bgColor":"#D32F2F"},{"letter":"O","word":"Organ","emoji":"🎹","bgColor":"#795548"},{"letter":"R","word":"Recorder","emoji":"🎵","bgColor":"#4CAF50"},{"letter":"C","word":"Clarinet","emoji":"🎵","bgColor":"#212121"},{"letter":"O","word":"Oboe","emoji":"🎵","bgColor":"#5D4037"},{"letter":"S","word":"Sitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"T","word":"Tabla","emoji":"🥁","bgColor":"#8D6E63"},{"letter":"D","word":"Didgeridoo","emoji":"🎵","bgColor":"#795548"},{"letter":"H","word":"Harmonica","emoji":"🎵","bgColor":"#0288D1"},{"letter":"K","word":"Kazoo","emoji":"🎵","bgColor":"#E91E63"},{"letter":"L","word":"Lute","emoji":"🎸","bgColor":"#A1887F"},{"letter":"M","word":"Mandolin","emoji":"🎸","bgColor":"#FF8F00"},{"letter":"P","word":"Pan Pipes","emoji":"🎵","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="MusicalSounds3"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 3",
          videoId: "musical-sounds-3",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"T","word":"Trombone","emoji":"🎺","bgColor":"#FFB300"},{"letter":"T","word":"Tuba","emoji":"🎺","bgColor":"#607D8B"},{"letter":"S","word":"Snare Drum","emoji":"🥁","bgColor":"#455A64"},{"letter":"B","word":"Bongo","emoji":"🪘","bgColor":"#795548"},{"letter":"C","word":"Congas","emoji":"🪘","bgColor":"#8D6E63"},{"letter":"G","word":"Glockenspiel","emoji":"🎵","bgColor":"#B0BEC5"},{"letter":"C","word":"Castanets","emoji":"🎵","bgColor":"#D32F2F"},{"letter":"Z","word":"Zither","emoji":"🎵","bgColor":"#7B1FA2"},{"letter":"E","word":"Electric Guitar","emoji":"🎸","bgColor":"#1565C0"},{"letter":"B","word":"Bass Guitar","emoji":"🎸","bgColor":"#212121"},{"letter":"F","word":"French Horn","emoji":"📯","bgColor":"#FFB300"},{"letter":"K","word":"Keyboard","emoji":"🎹","bgColor":"#607D8B"},{"letter":"S","word":"Steel Drum","emoji":"🥁","bgColor":"#00BCD4"},{"letter":"N","word":"Note","emoji":"🎵","bgColor":"#E91E63"},{"letter":"M","word":"Music Box","emoji":"🎶","bgColor":"#F48FB1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="MusicalSounds4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 4",
          videoId: "musical-sounds-4",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="MusicalSounds5"
        component={AlphabetLongTemplate}
        durationInFrames={3720}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 5",
          videoId: "musical-sounds-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 124,
        }}
      />
      <Composition
        id="MusicalSounds6"
        component={AlphabetLongTemplate}
        durationInFrames={5040}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 6",
          videoId: "musical-sounds-6",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 168,
        }}
      />
      <Composition
        id="MusicalSounds7"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 7",
          videoId: "musical-sounds-7",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="MusicalSounds8"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 8",
          videoId: "musical-sounds-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="MusicalSounds9"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 9",
          videoId: "musical-sounds-9",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="MusicalSounds10"
        component={AlphabetLongTemplate}
        durationInFrames={5190}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 10",
          videoId: "musical-sounds-10",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 173,
        }}
      />
      <Composition
        id="MusicalSounds11"
        component={AlphabetLongTemplate}
        durationInFrames={3930}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 11",
          videoId: "musical-sounds-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 131,
        }}
      />
      <Composition
        id="MusicalSounds12"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 12",
          videoId: "musical-sounds-12",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="MusicalSounds13"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 13",
          videoId: "musical-sounds-13",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="MusicalSounds14"
        component={AlphabetLongTemplate}
        durationInFrames={2730}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 14",
          videoId: "musical-sounds-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 91,
        }}
      />
      <Composition
        id="MusicalSounds15"
        component={AlphabetLongTemplate}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 15",
          videoId: "musical-sounds-15",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 136,
        }}
      />
      <Composition
        id="MusicalSounds16"
        component={AlphabetLongTemplate}
        durationInFrames={2820}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 16",
          videoId: "musical-sounds-16",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 94,
        }}
      />
      <Composition
        id="MusicalSounds17"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 17",
          videoId: "musical-sounds-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="MusicalSounds18"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 18",
          videoId: "musical-sounds-18",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="MusicalSounds19"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 19",
          videoId: "musical-sounds-19",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
      <Composition
        id="MusicalSounds20"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 20",
          videoId: "musical-sounds-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="MusicalSounds21"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 21",
          videoId: "musical-sounds-21",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="MusicalSounds22"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 22",
          videoId: "musical-sounds-22",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="MusicalSounds23"
        component={AlphabetLongTemplate}
        durationInFrames={4350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 23",
          videoId: "musical-sounds-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 145,
        }}
      />
      <Composition
        id="MusicalSounds24"
        component={AlphabetLongTemplate}
        durationInFrames={3090}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 24",
          videoId: "musical-sounds-24",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 103,
        }}
      />
      <Composition
        id="MusicalSounds25"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 25",
          videoId: "musical-sounds-25",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="MusicalSounds26"
        component={AlphabetLongTemplate}
        durationInFrames={3180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 26",
          videoId: "musical-sounds-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 106,
        }}
      />
      <Composition
        id="MusicalSounds27"
        component={AlphabetLongTemplate}
        durationInFrames={4500}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 27",
          videoId: "musical-sounds-27",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 150,
        }}
      />
      <Composition
        id="MusicalSounds28"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 28",
          videoId: "musical-sounds-28",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="MusicalSounds29"
        component={AlphabetLongTemplate}
        durationInFrames={4560}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 29",
          videoId: "musical-sounds-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 152,
        }}
      />
      <Composition
        id="MusicalSounds30"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Musical Sounds - Part 30",
          videoId: "musical-sounds-30",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Guitar","emoji":"🎸","bgColor":"#FF6F00"},{"letter":"P","word":"Piano","emoji":"🎹","bgColor":"#212121"},{"letter":"D","word":"Drum","emoji":"🥁","bgColor":"#D32F2F"},{"letter":"V","word":"Violin","emoji":"🎻","bgColor":"#795548"},{"letter":"F","word":"Flute","emoji":"🎵","bgColor":"#9E9E9E"},{"letter":"T","word":"Trumpet","emoji":"🎺","bgColor":"#FFB300"},{"letter":"H","word":"Harp","emoji":"🎵","bgColor":"#4527A0"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFD54F"},{"letter":"X","word":"Xylophone","emoji":"🎵","bgColor":"#FF5722"},{"letter":"M","word":"Maracas","emoji":"🪇","bgColor":"#4CAF50"},{"letter":"T","word":"Tambourine","emoji":"🪘","bgColor":"#FF8F00"},{"letter":"C","word":"Cymbal","emoji":"🥁","bgColor":"#FFB300"},{"letter":"W","word":"Whistle","emoji":"📯","bgColor":"#2E7D32"},{"letter":"S","word":"Saxophone","emoji":"🎷","bgColor":"#FFB300"},{"letter":"C","word":"Cello","emoji":"🎻","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 110,
        }}
      />
    </>
  );
};
