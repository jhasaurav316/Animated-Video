import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const SchoolItemsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SchoolItems1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 1",
          videoId: "school-items-1",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 2",
          videoId: "school-items-2",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Blackboard","emoji":"📋","bgColor":"#212121"},{"letter":"L","word":"Lunchbox","emoji":"🍱","bgColor":"#FF8F00"},{"letter":"W","word":"Water Bottle","emoji":"💧","bgColor":"#0288D1"},{"letter":"U","word":"Uniform","emoji":"👔","bgColor":"#1565C0"},{"letter":"T","word":"Textbook","emoji":"📖","bgColor":"#795548"},{"letter":"P","word":"Protractor","emoji":"📐","bgColor":"#FF6F00"},{"letter":"S","word":"Stapler","emoji":"📎","bgColor":"#607D8B"},{"letter":"H","word":"Highlighter","emoji":"🖍️","bgColor":"#FDD835"},{"letter":"M","word":"Marker","emoji":"🖊️","bgColor":"#D32F2F"},{"letter":"F","word":"Folder","emoji":"📁","bgColor":"#4CAF50"},{"letter":"D","word":"Dictionary","emoji":"📘","bgColor":"#0D47A1"},{"letter":"A","word":"Atlas","emoji":"🗺️","bgColor":"#2E7D32"},{"letter":"T","word":"Tape","emoji":"📎","bgColor":"#FFB300"},{"letter":"P","word":"Pencil Case","emoji":"🧰","bgColor":"#E91E63"},{"letter":"S","word":"Sharpener","emoji":"✏️","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 3",
          videoId: "school-items-3",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Laptop","emoji":"💻","bgColor":"#607D8B"},{"letter":"T","word":"Tablet","emoji":"📱","bgColor":"#212121"},{"letter":"I","word":"Ink","emoji":"🖋️","bgColor":"#0D47A1"},{"letter":"C","word":"Clock","emoji":"🕐","bgColor":"#FF5722"},{"letter":"B","word":"Bell","emoji":"🔔","bgColor":"#FFB300"},{"letter":"D","word":"Desk","emoji":"🪑","bgColor":"#795548"},{"letter":"C","word":"Chair","emoji":"🪑","bgColor":"#5D4037"},{"letter":"W","word":"Whiteboard","emoji":"📋","bgColor":"#F5F5F5"},{"letter":"M","word":"Microscope","emoji":"🔬","bgColor":"#00838F"},{"letter":"T","word":"Test Tube","emoji":"🧪","bgColor":"#4CAF50"},{"letter":"L","word":"Library Card","emoji":"📚","bgColor":"#7B1FA2"},{"letter":"P","word":"Paint Set","emoji":"🎨","bgColor":"#E91E63"},{"letter":"S","word":"Science Kit","emoji":"🔬","bgColor":"#00838F"},{"letter":"R","word":"Report Card","emoji":"📝","bgColor":"#FFB300"},{"letter":"A","word":"Abacus","emoji":"🧮","bgColor":"#FF5722"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 4",
          videoId: "school-items-4",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 5",
          videoId: "school-items-5",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 6",
          videoId: "school-items-6",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 7",
          videoId: "school-items-7",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 8",
          videoId: "school-items-8",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 9",
          videoId: "school-items-9",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 10",
          videoId: "school-items-10",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 11",
          videoId: "school-items-11",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 12",
          videoId: "school-items-12",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 13",
          videoId: "school-items-13",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 14",
          videoId: "school-items-14",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 15",
          videoId: "school-items-15",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 16",
          videoId: "school-items-16",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 17",
          videoId: "school-items-17",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 18",
          videoId: "school-items-18",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 19",
          videoId: "school-items-19",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 20",
          videoId: "school-items-20",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 21",
          videoId: "school-items-21",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 22",
          videoId: "school-items-22",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 23",
          videoId: "school-items-23",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 24",
          videoId: "school-items-24",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 25",
          videoId: "school-items-25",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 26",
          videoId: "school-items-26",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 27",
          videoId: "school-items-27",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 28",
          videoId: "school-items-28",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 29",
          videoId: "school-items-29",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="SchoolItems30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "School Items - Part 30",
          videoId: "school-items-30",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"P","word":"Pencil","emoji":"✏️","bgColor":"#FDD835"},{"letter":"B","word":"Book","emoji":"📚","bgColor":"#1565C0"},{"letter":"R","word":"Ruler","emoji":"📏","bgColor":"#4CAF50"},{"letter":"E","word":"Eraser","emoji":"🧹","bgColor":"#F48FB1"},{"letter":"S","word":"Scissors","emoji":"✂️","bgColor":"#D32F2F"},{"letter":"G","word":"Glue","emoji":"🧴","bgColor":"#FF6F00"},{"letter":"C","word":"Crayon","emoji":"🖍️","bgColor":"#E91E63"},{"letter":"P","word":"Pen","emoji":"🖊️","bgColor":"#212121"},{"letter":"N","word":"Notebook","emoji":"📓","bgColor":"#4527A0"},{"letter":"B","word":"Backpack","emoji":"🎒","bgColor":"#D32F2F"},{"letter":"C","word":"Calculator","emoji":"🧮","bgColor":"#607D8B"},{"letter":"C","word":"Compass","emoji":"🧭","bgColor":"#0277BD"},{"letter":"G","word":"Globe","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#FFB300"},{"letter":"C","word":"Chalk","emoji":"🖍️","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
