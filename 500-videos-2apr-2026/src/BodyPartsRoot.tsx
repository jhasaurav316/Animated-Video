import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const BodyPartsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BodyParts1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 1",
          videoId: "body-parts-1",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 2",
          videoId: "body-parts-2",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"C","word":"Chest","emoji":"🫁","bgColor":"#C62828"},{"letter":"S","word":"Stomach","emoji":"🤰","bgColor":"#EF6C00"},{"letter":"B","word":"Back","emoji":"🔙","bgColor":"#4527A0"},{"letter":"L","word":"Leg","emoji":"🦵","bgColor":"#2E7D32"},{"letter":"K","word":"Knee","emoji":"🦿","bgColor":"#00695C"},{"letter":"F","word":"Foot","emoji":"🦶","bgColor":"#5D4037"},{"letter":"T","word":"Toe","emoji":"🦶","bgColor":"#BF360C"},{"letter":"W","word":"Wrist","emoji":"⌚","bgColor":"#1565C0"},{"letter":"A","word":"Ankle","emoji":"🦶","bgColor":"#4E342E"},{"letter":"B","word":"Brain","emoji":"🧠","bgColor":"#E91E63"},{"letter":"H","word":"Heart","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"L","word":"Lung","emoji":"🫁","bgColor":"#F06292"},{"letter":"K","word":"Kidney","emoji":"🫘","bgColor":"#8D6E63"},{"letter":"B","word":"Bone","emoji":"🦴","bgColor":"#E0E0E0"},{"letter":"S","word":"Skin","emoji":"🤲","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 3",
          videoId: "body-parts-3",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"M","word":"Muscle","emoji":"💪","bgColor":"#C62828"},{"letter":"R","word":"Rib","emoji":"🩻","bgColor":"#BDBDBD"},{"letter":"J","word":"Jaw","emoji":"🦷","bgColor":"#795548"},{"letter":"C","word":"Chin","emoji":"🤔","bgColor":"#5D4037"},{"letter":"L","word":"Lip","emoji":"💋","bgColor":"#E91E63"},{"letter":"P","word":"Palm","emoji":"🤚","bgColor":"#FFB300"},{"letter":"N","word":"Nail","emoji":"💅","bgColor":"#AB47BC"},{"letter":"T","word":"Tongue","emoji":"👅","bgColor":"#EF5350"},{"letter":"V","word":"Vein","emoji":"🩸","bgColor":"#1565C0"},{"letter":"S","word":"Spine","emoji":"🦴","bgColor":"#546E7A"},{"letter":"H","word":"Hip","emoji":"🦿","bgColor":"#6D4C41"},{"letter":"C","word":"Calf","emoji":"🦵","bgColor":"#388E3C"},{"letter":"E","word":"Eyebrow","emoji":"🤨","bgColor":"#3E2723"},{"letter":"F","word":"Forehead","emoji":"🧐","bgColor":"#FFB300"},{"letter":"S","word":"Skull","emoji":"💀","bgColor":"#424242"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 4",
          videoId: "body-parts-4",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 5",
          videoId: "body-parts-5",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 6",
          videoId: "body-parts-6",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 7",
          videoId: "body-parts-7",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 8",
          videoId: "body-parts-8",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 9",
          videoId: "body-parts-9",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 10",
          videoId: "body-parts-10",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 11",
          videoId: "body-parts-11",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 12",
          videoId: "body-parts-12",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 13",
          videoId: "body-parts-13",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 14",
          videoId: "body-parts-14",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 15",
          videoId: "body-parts-15",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 16",
          videoId: "body-parts-16",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 17",
          videoId: "body-parts-17",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 18",
          videoId: "body-parts-18",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 19",
          videoId: "body-parts-19",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 20",
          videoId: "body-parts-20",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 21",
          videoId: "body-parts-21",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 22",
          videoId: "body-parts-22",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 23",
          videoId: "body-parts-23",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 24",
          videoId: "body-parts-24",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 25",
          videoId: "body-parts-25",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 26",
          videoId: "body-parts-26",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 27",
          videoId: "body-parts-27",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 28",
          videoId: "body-parts-28",
          bgGradient: ["#FF7043","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 29",
          videoId: "body-parts-29",
          bgGradient: ["#AB47BC","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BodyParts30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Body Parts - Part 30",
          videoId: "body-parts-30",
          bgGradient: ["#42A5F5","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"H","word":"Head","emoji":"🗣️","bgColor":"#E53935"},{"letter":"E","word":"Eye","emoji":"👁️","bgColor":"#1E88E5"},{"letter":"N","word":"Nose","emoji":"👃","bgColor":"#43A047"},{"letter":"M","word":"Mouth","emoji":"👄","bgColor":"#D81B60"},{"letter":"E","word":"Ear","emoji":"👂","bgColor":"#FB8C00"},{"letter":"T","word":"Teeth","emoji":"🦷","bgColor":"#FFFFFF"},{"letter":"H","word":"Hair","emoji":"💇","bgColor":"#5D4037"},{"letter":"F","word":"Face","emoji":"😊","bgColor":"#FFB300"},{"letter":"N","word":"Neck","emoji":"🦒","bgColor":"#6D4C41"},{"letter":"S","word":"Shoulder","emoji":"💪","bgColor":"#1565C0"},{"letter":"A","word":"Arm","emoji":"💪","bgColor":"#2E7D32"},{"letter":"E","word":"Elbow","emoji":"🦾","bgColor":"#F57F17"},{"letter":"H","word":"Hand","emoji":"✋","bgColor":"#FF6F00"},{"letter":"F","word":"Finger","emoji":"☝️","bgColor":"#AD1457"},{"letter":"T","word":"Thumb","emoji":"👍","bgColor":"#00838F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
