import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const ProfessionsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Professions1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 1",
          videoId: "professions-1",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 2",
          videoId: "professions-2",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mechanic","emoji":"🔧","bgColor":"#455A64"},{"letter":"B","word":"Baker","emoji":"🍞","bgColor":"#795548"},{"letter":"V","word":"Vet","emoji":"🐾","bgColor":"#2E7D32"},{"letter":"L","word":"Lawyer","emoji":"📜","bgColor":"#37474F"},{"letter":"P","word":"Plumber","emoji":"🔧","bgColor":"#0277BD"},{"letter":"D","word":"Dentist","emoji":"🦷","bgColor":"#00838F"},{"letter":"P","word":"Photographer","emoji":"📷","bgColor":"#4527A0"},{"letter":"M","word":"Musician","emoji":"🎵","bgColor":"#C62828"},{"letter":"A","word":"Architect","emoji":"🏛️","bgColor":"#455A64"},{"letter":"J","word":"Journalist","emoji":"📰","bgColor":"#1565C0"},{"letter":"C","word":"Carpenter","emoji":"🪚","bgColor":"#5D4037"},{"letter":"T","word":"Tailor","emoji":"🧵","bgColor":"#7B1FA2"},{"letter":"F","word":"Fisherman","emoji":"🎣","bgColor":"#0277BD"},{"letter":"P","word":"Postman","emoji":"📮","bgColor":"#D32F2F"},{"letter":"D","word":"Driver","emoji":"🚗","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 3",
          videoId: "professions-3",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"W","word":"Waiter","emoji":"🍽️","bgColor":"#795548"},{"letter":"G","word":"Gardener","emoji":"🌺","bgColor":"#388E3C"},{"letter":"B","word":"Barber","emoji":"💈","bgColor":"#C62828"},{"letter":"C","word":"Cobbler","emoji":"👟","bgColor":"#5D4037"},{"letter":"P","word":"Painter","emoji":"🖌️","bgColor":"#FF6F00"},{"letter":"S","word":"Sailor","emoji":"⛵","bgColor":"#0288D1"},{"letter":"Z","word":"Zookeeper","emoji":"🦁","bgColor":"#FF8F00"},{"letter":"C","word":"Clown","emoji":"🤡","bgColor":"#E91E63"},{"letter":"M","word":"Magician","emoji":"🎩","bgColor":"#4527A0"},{"letter":"R","word":"Reporter","emoji":"🎙️","bgColor":"#1565C0"},{"letter":"S","word":"Surgeon","emoji":"🏥","bgColor":"#C62828"},{"letter":"T","word":"Trainer","emoji":"🏋️","bgColor":"#FF6F00"},{"letter":"L","word":"Librarian","emoji":"📚","bgColor":"#6A1B9A"},{"letter":"E","word":"Electrician","emoji":"⚡","bgColor":"#F9A825"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 4",
          videoId: "professions-4",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 5",
          videoId: "professions-5",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 6",
          videoId: "professions-6",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 7",
          videoId: "professions-7",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 8",
          videoId: "professions-8",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 9",
          videoId: "professions-9",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 10",
          videoId: "professions-10",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 11",
          videoId: "professions-11",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 12",
          videoId: "professions-12",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 13",
          videoId: "professions-13",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 14",
          videoId: "professions-14",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 15",
          videoId: "professions-15",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 16",
          videoId: "professions-16",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 17",
          videoId: "professions-17",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 18",
          videoId: "professions-18",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 19",
          videoId: "professions-19",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 20",
          videoId: "professions-20",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 21",
          videoId: "professions-21",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 22",
          videoId: "professions-22",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 23",
          videoId: "professions-23",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 24",
          videoId: "professions-24",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 25",
          videoId: "professions-25",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 26",
          videoId: "professions-26",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 27",
          videoId: "professions-27",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 28",
          videoId: "professions-28",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 29",
          videoId: "professions-29",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Professions30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Professions - Part 30",
          videoId: "professions-30",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#E53935"},{"letter":"T","word":"Teacher","emoji":"👩‍🏫","bgColor":"#1E88E5"},{"letter":"P","word":"Pilot","emoji":"✈️","bgColor":"#0277BD"},{"letter":"F","word":"Firefighter","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police","emoji":"👮","bgColor":"#1565C0"},{"letter":"C","word":"Chef","emoji":"👨‍🍳","bgColor":"#FF8F00"},{"letter":"E","word":"Engineer","emoji":"👷","bgColor":"#FF6F00"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"F","word":"Farmer","emoji":"👨‍🌾","bgColor":"#2E7D32"},{"letter":"A","word":"Artist","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"S","word":"Scientist","emoji":"🔬","bgColor":"#00838F"},{"letter":"J","word":"Judge","emoji":"⚖️","bgColor":"#37474F"},{"letter":"D","word":"Dancer","emoji":"💃","bgColor":"#AD1457"},{"letter":"S","word":"Singer","emoji":"🎤","bgColor":"#6A1B9A"},{"letter":"A","word":"Astronaut","emoji":"🧑‍🚀","bgColor":"#0D47A1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
