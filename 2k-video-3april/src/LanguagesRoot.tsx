import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const LanguagesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Languages1"
        component={AlphabetLongTemplate}
        durationInFrames={4860}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 1",
          videoId: "languages-1",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 162,
        }}
      />
      <Composition
        id="Languages2"
        component={AlphabetLongTemplate}
        durationInFrames={3600}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 2",
          videoId: "languages-2",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Polish","emoji":"🇵🇱","bgColor":"#D32F2F"},{"letter":"G","word":"Greek","emoji":"🇬🇷","bgColor":"#0288D1"},{"letter":"T","word":"Thai","emoji":"🇹🇭","bgColor":"#7B1FA2"},{"letter":"V","word":"Vietnamese","emoji":"🇻🇳","bgColor":"#D32F2F"},{"letter":"I","word":"Indonesian","emoji":"🇮🇩","bgColor":"#D32F2F"},{"letter":"S","word":"Swahili","emoji":"🇰🇪","bgColor":"#2E7D32"},{"letter":"H","word":"Hebrew","emoji":"🇮🇱","bgColor":"#0D47A1"},{"letter":"U","word":"Urdu","emoji":"🇵🇰","bgColor":"#2E7D32"},{"letter":"B","word":"Bengali","emoji":"🇧🇩","bgColor":"#2E7D32"},{"letter":"T","word":"Tamil","emoji":"🇮🇳","bgColor":"#FF8F00"},{"letter":"M","word":"Malay","emoji":"🇲🇾","bgColor":"#FFB300"},{"letter":"P","word":"Persian","emoji":"🇮🇷","bgColor":"#2E7D32"},{"letter":"F","word":"Finnish","emoji":"🇫🇮","bgColor":"#0D47A1"},{"letter":"N","word":"Norwegian","emoji":"🇳🇴","bgColor":"#D32F2F"},{"letter":"D","word":"Danish","emoji":"🇩🇰","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 120,
        }}
      />
      <Composition
        id="Languages3"
        component={AlphabetLongTemplate}
        durationInFrames={4920}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 3",
          videoId: "languages-3",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Czech","emoji":"🇨🇿","bgColor":"#0D47A1"},{"letter":"R","word":"Romanian","emoji":"🇷🇴","bgColor":"#1565C0"},{"letter":"H","word":"Hungarian","emoji":"🇭🇺","bgColor":"#2E7D32"},{"letter":"L","word":"Latin","emoji":"📜","bgColor":"#795548"},{"letter":"S","word":"Sign Language","emoji":"🤟","bgColor":"#4CAF50"},{"letter":"W","word":"Welsh","emoji":"🇬🇧","bgColor":"#D32F2F"},{"letter":"C","word":"Cantonese","emoji":"🇭🇰","bgColor":"#D32F2F"},{"letter":"Z","word":"Zulu","emoji":"🇿🇦","bgColor":"#2E7D32"},{"letter":"A","word":"Amharic","emoji":"🇪🇹","bgColor":"#2E7D32"},{"letter":"Y","word":"Yoruba","emoji":"🇳🇬","bgColor":"#2E7D32"},{"letter":"E","word":"Esperanto","emoji":"🌍","bgColor":"#4CAF50"},{"letter":"M","word":"Mongolian","emoji":"🇲🇳","bgColor":"#0D47A1"},{"letter":"K","word":"Kazakh","emoji":"🇰🇿","bgColor":"#00BCD4"},{"letter":"N","word":"Nepali","emoji":"🇳🇵","bgColor":"#D32F2F"},{"letter":"O","word":"Odia","emoji":"🇮🇳","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 164,
        }}
      />
      <Composition
        id="Languages4"
        component={AlphabetLongTemplate}
        durationInFrames={3660}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 4",
          videoId: "languages-4",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 122,
        }}
      />
      <Composition
        id="Languages5"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 5",
          videoId: "languages-5",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="Languages6"
        component={AlphabetLongTemplate}
        durationInFrames={3750}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 6",
          videoId: "languages-6",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 125,
        }}
      />
      <Composition
        id="Languages7"
        component={AlphabetLongTemplate}
        durationInFrames={5070}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 7",
          videoId: "languages-7",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 169,
        }}
      />
      <Composition
        id="Languages8"
        component={AlphabetLongTemplate}
        durationInFrames={3810}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 8",
          videoId: "languages-8",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 127,
        }}
      />
      <Composition
        id="Languages9"
        component={AlphabetLongTemplate}
        durationInFrames={5130}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 9",
          videoId: "languages-9",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 171,
        }}
      />
      <Composition
        id="Languages10"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 10",
          videoId: "languages-10",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="Languages11"
        component={AlphabetLongTemplate}
        durationInFrames={5220}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 11",
          videoId: "languages-11",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 174,
        }}
      />
      <Composition
        id="Languages12"
        component={AlphabetLongTemplate}
        durationInFrames={3960}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 12",
          videoId: "languages-12",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 132,
        }}
      />
      <Composition
        id="Languages13"
        component={AlphabetLongTemplate}
        durationInFrames={2700}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 13",
          videoId: "languages-13",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 90,
        }}
      />
      <Composition
        id="Languages14"
        component={AlphabetLongTemplate}
        durationInFrames={4020}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 14",
          videoId: "languages-14",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 134,
        }}
      />
      <Composition
        id="Languages15"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 15",
          videoId: "languages-15",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="Languages16"
        component={AlphabetLongTemplate}
        durationInFrames={4110}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 16",
          videoId: "languages-16",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 137,
        }}
      />
      <Composition
        id="Languages17"
        component={AlphabetLongTemplate}
        durationInFrames={2850}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 17",
          videoId: "languages-17",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 95,
        }}
      />
      <Composition
        id="Languages18"
        component={AlphabetLongTemplate}
        durationInFrames={4170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 18",
          videoId: "languages-18",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 139,
        }}
      />
      <Composition
        id="Languages19"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 19",
          videoId: "languages-19",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="Languages20"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 20",
          videoId: "languages-20",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="Languages21"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 21",
          videoId: "languages-21",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
      <Composition
        id="Languages22"
        component={AlphabetLongTemplate}
        durationInFrames={4320}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 22",
          videoId: "languages-22",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 144,
        }}
      />
      <Composition
        id="Languages23"
        component={AlphabetLongTemplate}
        durationInFrames={3060}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 23",
          videoId: "languages-23",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 102,
        }}
      />
      <Composition
        id="Languages24"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 24",
          videoId: "languages-24",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
      <Composition
        id="Languages25"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 25",
          videoId: "languages-25",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="Languages26"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 26",
          videoId: "languages-26",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="Languages27"
        component={AlphabetLongTemplate}
        durationInFrames={3210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 27",
          videoId: "languages-27",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 107,
        }}
      />
      <Composition
        id="Languages28"
        component={AlphabetLongTemplate}
        durationInFrames={4530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 28",
          videoId: "languages-28",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 151,
        }}
      />
      <Composition
        id="Languages29"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 29",
          videoId: "languages-29",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Languages30"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Languages - Part 30",
          videoId: "languages-30",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"E","word":"English","emoji":"🇬🇧","bgColor":"#0D47A1"},{"letter":"S","word":"Spanish","emoji":"🇪🇸","bgColor":"#D32F2F"},{"letter":"M","word":"Mandarin","emoji":"🇨🇳","bgColor":"#C62828"},{"letter":"H","word":"Hindi","emoji":"🇮🇳","bgColor":"#FF6F00"},{"letter":"A","word":"Arabic","emoji":"🇸🇦","bgColor":"#2E7D32"},{"letter":"F","word":"French","emoji":"🇫🇷","bgColor":"#1565C0"},{"letter":"P","word":"Portuguese","emoji":"🇧🇷","bgColor":"#2E7D32"},{"letter":"R","word":"Russian","emoji":"🇷🇺","bgColor":"#0D47A1"},{"letter":"J","word":"Japanese","emoji":"🇯🇵","bgColor":"#D32F2F"},{"letter":"G","word":"German","emoji":"🇩🇪","bgColor":"#212121"},{"letter":"K","word":"Korean","emoji":"🇰🇷","bgColor":"#1565C0"},{"letter":"I","word":"Italian","emoji":"🇮🇹","bgColor":"#2E7D32"},{"letter":"T","word":"Turkish","emoji":"🇹🇷","bgColor":"#D32F2F"},{"letter":"D","word":"Dutch","emoji":"🇳🇱","bgColor":"#FF6F00"},{"letter":"S","word":"Swedish","emoji":"🇸🇪","bgColor":"#1565C0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
    </>
  );
};
