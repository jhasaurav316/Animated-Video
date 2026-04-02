import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const DinosaurTypesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DinosaurTypes1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 1",
          videoId: "dinosaur-types-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 2",
          videoId: "dinosaur-types-2",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"A","word":"Apatosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"G","word":"Gallimimus","emoji":"🦖","bgColor":"#FF8F00"},{"letter":"C","word":"Compsognathus","emoji":"🦖","bgColor":"#8D6E63"},{"letter":"D","word":"Dilophosaurus","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"O","word":"Oviraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"H","word":"Hadrosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"E","word":"Edmontosaurus","emoji":"🦕","bgColor":"#607D8B"},{"letter":"M","word":"Megalosaurus","emoji":"🦖","bgColor":"#5D4037"},{"letter":"B","word":"Baryonyx","emoji":"🦖","bgColor":"#0277BD"},{"letter":"S","word":"Sauropod","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"R","word":"Raptor","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"P","word":"Pachycephalosaurus","emoji":"🦕","bgColor":"#795548"},{"letter":"T","word":"Therizinosaurus","emoji":"🦖","bgColor":"#4CAF50"},{"letter":"N","word":"Nodosaurus","emoji":"🦕","bgColor":"#607D8B"},{"letter":"C","word":"Ceratosaurus","emoji":"🦖","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 3",
          videoId: "dinosaur-types-3",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"K","word":"Kentrosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"L","word":"Lambeosaurus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"U","word":"Utahraptor","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Microraptor","emoji":"🦖","bgColor":"#0288D1"},{"letter":"G","word":"Giganotosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"A","word":"Archaeopteryx","emoji":"🐦","bgColor":"#FFB300"},{"letter":"D","word":"Deinonychus","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"X","word":"Xiaosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"W","word":"Wuerhosaurus","emoji":"🦕","bgColor":"#607D8B"},{"letter":"Z","word":"Zuniceratops","emoji":"🦕","bgColor":"#5D4037"},{"letter":"F","word":"Fukuiraptor","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"J","word":"Jobaria","emoji":"🦕","bgColor":"#795548"},{"letter":"Y","word":"Yangchuanosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"Q","word":"Quetzalcoatlus","emoji":"🦅","bgColor":"#0288D1"},{"letter":"S","word":"Suchomimus","emoji":"🦖","bgColor":"#0277BD"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 4",
          videoId: "dinosaur-types-4",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 5",
          videoId: "dinosaur-types-5",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 6",
          videoId: "dinosaur-types-6",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 7",
          videoId: "dinosaur-types-7",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 8",
          videoId: "dinosaur-types-8",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 9",
          videoId: "dinosaur-types-9",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 10",
          videoId: "dinosaur-types-10",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 11",
          videoId: "dinosaur-types-11",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 12",
          videoId: "dinosaur-types-12",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 13",
          videoId: "dinosaur-types-13",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 14",
          videoId: "dinosaur-types-14",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 15",
          videoId: "dinosaur-types-15",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 16",
          videoId: "dinosaur-types-16",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 17",
          videoId: "dinosaur-types-17",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 18",
          videoId: "dinosaur-types-18",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 19",
          videoId: "dinosaur-types-19",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 20",
          videoId: "dinosaur-types-20",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 21",
          videoId: "dinosaur-types-21",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 22",
          videoId: "dinosaur-types-22",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 23",
          videoId: "dinosaur-types-23",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 24",
          videoId: "dinosaur-types-24",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 25",
          videoId: "dinosaur-types-25",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 26",
          videoId: "dinosaur-types-26",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 27",
          videoId: "dinosaur-types-27",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 28",
          videoId: "dinosaur-types-28",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 29",
          videoId: "dinosaur-types-29",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DinosaurTypes30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaur Types - Part 30",
          videoId: "dinosaur-types-30",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"T-Rex","emoji":"🦖","bgColor":"#2E7D32"},{"letter":"T","word":"Triceratops","emoji":"🦕","bgColor":"#607D8B"},{"letter":"S","word":"Stegosaurus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"V","word":"Velociraptor","emoji":"🦖","bgColor":"#FF6F00"},{"letter":"B","word":"Brachiosaurus","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"P","word":"Pteranodon","emoji":"🦅","bgColor":"#607D8B"},{"letter":"A","word":"Ankylosaurus","emoji":"🦕","bgColor":"#5D4037"},{"letter":"S","word":"Spinosaurus","emoji":"🦖","bgColor":"#0277BD"},{"letter":"D","word":"Diplodocus","emoji":"🦕","bgColor":"#4CAF50"},{"letter":"P","word":"Parasaurolophus","emoji":"🦕","bgColor":"#FF8F00"},{"letter":"I","word":"Iguanodon","emoji":"🦕","bgColor":"#2E7D32"},{"letter":"A","word":"Allosaurus","emoji":"🦖","bgColor":"#D32F2F"},{"letter":"C","word":"Carnotaurus","emoji":"🦖","bgColor":"#C62828"},{"letter":"M","word":"Mosasaurus","emoji":"🦕","bgColor":"#0D47A1"},{"letter":"P","word":"Plesiosaur","emoji":"🦕","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
