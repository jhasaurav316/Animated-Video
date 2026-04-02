import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const RobotsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Robots1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 1",
          videoId: "robots-1",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 2",
          videoId: "robots-2",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Antenna","emoji":"📡","bgColor":"#607D8B"},{"letter":"S","word":"Speaker","emoji":"🔊","bgColor":"#212121"},{"letter":"C","word":"Camera","emoji":"📷","bgColor":"#37474F"},{"letter":"P","word":"Printer","emoji":"🖨️","bgColor":"#607D8B"},{"letter":"S","word":"Scanner","emoji":"🔍","bgColor":"#1565C0"},{"letter":"R","word":"Remote Control","emoji":"🎮","bgColor":"#212121"},{"letter":"J","word":"Joystick","emoji":"🕹️","bgColor":"#D32F2F"},{"letter":"M","word":"Microchip","emoji":"🔬","bgColor":"#2E7D32"},{"letter":"T","word":"Transformer","emoji":"🤖","bgColor":"#1565C0"},{"letter":"H","word":"Humanoid","emoji":"🧑‍🔬","bgColor":"#607D8B"},{"letter":"N","word":"Nano Bot","emoji":"🔬","bgColor":"#4CAF50"},{"letter":"R","word":"Rover","emoji":"🤖","bgColor":"#D32F2F"},{"letter":"S","word":"Satellite Bot","emoji":"🛰️","bgColor":"#0D47A1"},{"letter":"A","word":"AI Brain","emoji":"🧠","bgColor":"#7B1FA2"},{"letter":"F","word":"Factory Bot","emoji":"🏭","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 3",
          videoId: "robots-3",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Claw Machine","emoji":"🦾","bgColor":"#FF6F00"},{"letter":"D","word":"Data Bot","emoji":"💾","bgColor":"#1565C0"},{"letter":"W","word":"Welding Bot","emoji":"🔥","bgColor":"#FF5722"},{"letter":"P","word":"Probe","emoji":"🛸","bgColor":"#455A64"},{"letter":"R","word":"Robotic Arm","emoji":"🦾","bgColor":"#607D8B"},{"letter":"T","word":"Turret","emoji":"🎯","bgColor":"#37474F"},{"letter":"V","word":"Vacuum Bot","emoji":"🧹","bgColor":"#9E9E9E"},{"letter":"K","word":"Kitchen Bot","emoji":"🍳","bgColor":"#FF8F00"},{"letter":"G","word":"Guard Bot","emoji":"🛡️","bgColor":"#455A64"},{"letter":"O","word":"Optimus","emoji":"🤖","bgColor":"#1565C0"},{"letter":"B","word":"Bumble Bot","emoji":"🐝","bgColor":"#FDD835"},{"letter":"U","word":"Utility Bot","emoji":"🔧","bgColor":"#607D8B"},{"letter":"X","word":"X-Ray Machine","emoji":"🔬","bgColor":"#0288D1"},{"letter":"Z","word":"Zero Bot","emoji":"🤖","bgColor":"#212121"},{"letter":"I","word":"Inspector Bot","emoji":"🔎","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 4",
          videoId: "robots-4",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 5",
          videoId: "robots-5",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 6",
          videoId: "robots-6",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 7",
          videoId: "robots-7",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 8",
          videoId: "robots-8",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 9",
          videoId: "robots-9",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 10",
          videoId: "robots-10",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 11",
          videoId: "robots-11",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 12",
          videoId: "robots-12",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 13",
          videoId: "robots-13",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 14",
          videoId: "robots-14",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 15",
          videoId: "robots-15",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 16",
          videoId: "robots-16",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 17",
          videoId: "robots-17",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 18",
          videoId: "robots-18",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 19",
          videoId: "robots-19",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 20",
          videoId: "robots-20",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 21",
          videoId: "robots-21",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 22",
          videoId: "robots-22",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 23",
          videoId: "robots-23",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 24",
          videoId: "robots-24",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 25",
          videoId: "robots-25",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 26",
          videoId: "robots-26",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 27",
          videoId: "robots-27",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 28",
          videoId: "robots-28",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 29",
          videoId: "robots-29",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Robots30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & Machines - Part 30",
          videoId: "robots-30",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Robot","emoji":"🤖","bgColor":"#607D8B"},{"letter":"D","word":"Drone","emoji":"🚁","bgColor":"#455A64"},{"letter":"C","word":"Computer","emoji":"💻","bgColor":"#1565C0"},{"letter":"A","word":"Android","emoji":"🤖","bgColor":"#4CAF50"},{"letter":"C","word":"Cyborg","emoji":"🦾","bgColor":"#37474F"},{"letter":"M","word":"Machine","emoji":"⚙️","bgColor":"#607D8B"},{"letter":"E","word":"Engine","emoji":"🔧","bgColor":"#455A64"},{"letter":"G","word":"Gear","emoji":"⚙️","bgColor":"#9E9E9E"},{"letter":"P","word":"Processor","emoji":"🧠","bgColor":"#1565C0"},{"letter":"S","word":"Sensor","emoji":"📡","bgColor":"#00BCD4"},{"letter":"L","word":"Laser","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"C","word":"Circuit","emoji":"💡","bgColor":"#4CAF50"},{"letter":"B","word":"Battery","emoji":"🔋","bgColor":"#4CAF50"},{"letter":"W","word":"Wire","emoji":"🔌","bgColor":"#FF6F00"},{"letter":"M","word":"Motor","emoji":"⚙️","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
