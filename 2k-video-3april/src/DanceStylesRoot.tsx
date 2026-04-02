import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const DanceStylesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DanceStyles1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 1",
          videoId: "dance-styles-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 2",
          videoId: "dance-styles-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Contemporary","emoji":"💃","bgColor":"#00BCD4"},{"letter":"M","word":"Modern Dance","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"B","word":"Bollywood","emoji":"🎬","bgColor":"#FF6F00"},{"letter":"K","word":"K-Pop Dance","emoji":"🎵","bgColor":"#E91E63"},{"letter":"F","word":"Foxtrot","emoji":"🕺","bgColor":"#455A64"},{"letter":"Q","word":"Quickstep","emoji":"🕺","bgColor":"#1565C0"},{"letter":"V","word":"Viennese Waltz","emoji":"💃","bgColor":"#9C27B0"},{"letter":"M","word":"Merengue","emoji":"💃","bgColor":"#FF5722"},{"letter":"J","word":"Jive","emoji":"🕺","bgColor":"#FDD835"},{"letter":"C","word":"Capoeira","emoji":"🤸","bgColor":"#2E7D32"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FFB300"},{"letter":"I","word":"Irish Dance","emoji":"🍀","bgColor":"#4CAF50"},{"letter":"S","word":"Street Dance","emoji":"🎤","bgColor":"#212121"},{"letter":"L","word":"Lyrical","emoji":"💃","bgColor":"#90CAF9"},{"letter":"A","word":"Afrobeats","emoji":"🥁","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 3",
          videoId: "dance-styles-3",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"D","word":"Disco","emoji":"🪩","bgColor":"#7B1FA2"},{"letter":"E","word":"Electric Slide","emoji":"⚡","bgColor":"#FDD835"},{"letter":"G","word":"Groove Dance","emoji":"🎵","bgColor":"#4CAF50"},{"letter":"H","word":"Highland Dance","emoji":"🏴","bgColor":"#0D47A1"},{"letter":"N","word":"Nightclub Two","emoji":"🕺","bgColor":"#212121"},{"letter":"O","word":"Oriental Dance","emoji":"💃","bgColor":"#FFB300"},{"letter":"P","word":"Paso Doble","emoji":"🐂","bgColor":"#D32F2F"},{"letter":"R","word":"Robot Dance","emoji":"🤖","bgColor":"#607D8B"},{"letter":"Z","word":"Zumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Twist Dance","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"W","word":"West Coast Swing","emoji":"🕺","bgColor":"#1565C0"},{"letter":"Y","word":"Yoga Dance","emoji":"🧘","bgColor":"#4CAF50"},{"letter":"U","word":"Urban Dance","emoji":"🎤","bgColor":"#212121"},{"letter":"C","word":"Cumbia","emoji":"💃","bgColor":"#FFB300"},{"letter":"S","word":"Square Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 4",
          videoId: "dance-styles-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 5",
          videoId: "dance-styles-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 6",
          videoId: "dance-styles-6",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 7",
          videoId: "dance-styles-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 8",
          videoId: "dance-styles-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 9",
          videoId: "dance-styles-9",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 10",
          videoId: "dance-styles-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 11",
          videoId: "dance-styles-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 12",
          videoId: "dance-styles-12",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 13",
          videoId: "dance-styles-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 14",
          videoId: "dance-styles-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 15",
          videoId: "dance-styles-15",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 16",
          videoId: "dance-styles-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 17",
          videoId: "dance-styles-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 18",
          videoId: "dance-styles-18",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 19",
          videoId: "dance-styles-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 20",
          videoId: "dance-styles-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 21",
          videoId: "dance-styles-21",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 22",
          videoId: "dance-styles-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 23",
          videoId: "dance-styles-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 24",
          videoId: "dance-styles-24",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 25",
          videoId: "dance-styles-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 26",
          videoId: "dance-styles-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 27",
          videoId: "dance-styles-27",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 28",
          videoId: "dance-styles-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 29",
          videoId: "dance-styles-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="DanceStyles30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Styles - Part 30",
          videoId: "dance-styles-30",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#4A148C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#E91E63"},{"letter":"H","word":"Hip Hop","emoji":"🎤","bgColor":"#212121"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"🕺","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#7B1FA2"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#4CAF50"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#E91E63"},{"letter":"T","word":"Tap Dance","emoji":"👟","bgColor":"#607D8B"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FFB300"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
