import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const EmotionsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Emotions1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 1",
          videoId: "emotions-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 2",
          videoId: "emotions-2",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"L","word":"Lonely","emoji":"😔","bgColor":"#546E7A"},{"letter":"C","word":"Calm","emoji":"😌","bgColor":"#00838F"},{"letter":"W","word":"Worried","emoji":"😟","bgColor":"#F57F17"},{"letter":"B","word":"Bored","emoji":"🥱","bgColor":"#9E9E9E"},{"letter":"K","word":"Kind","emoji":"🤗","bgColor":"#E91E63"},{"letter":"C","word":"Curious","emoji":"🤔","bgColor":"#FF6F00"},{"letter":"H","word":"Hopeful","emoji":"🌟","bgColor":"#FDD835"},{"letter":"F","word":"Friendly","emoji":"🤝","bgColor":"#1E88E5"},{"letter":"P","word":"Peaceful","emoji":"☮️","bgColor":"#4CAF50"},{"letter":"G","word":"Grumpy","emoji":"😤","bgColor":"#795548"},{"letter":"S","word":"Silly","emoji":"🤪","bgColor":"#FF6F00"},{"letter":"T","word":"Thankful","emoji":"💝","bgColor":"#E91E63"},{"letter":"A","word":"Amazed","emoji":"🤯","bgColor":"#7B1FA2"},{"letter":"D","word":"Disappointed","emoji":"😞","bgColor":"#546E7A"},{"letter":"C","word":"Cheerful","emoji":"😄","bgColor":"#FDD835"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 3",
          videoId: "emotions-3",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"R","word":"Relaxed","emoji":"😎","bgColor":"#00BCD4"},{"letter":"F","word":"Frustrated","emoji":"😤","bgColor":"#C62828"},{"letter":"I","word":"Inspired","emoji":"💡","bgColor":"#FFB300"},{"letter":"M","word":"Mischievous","emoji":"😈","bgColor":"#7B1FA2"},{"letter":"E","word":"Embarrassed","emoji":"😳","bgColor":"#E91E63"},{"letter":"J","word":"Joyful","emoji":"🥳","bgColor":"#FF6F00"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 4",
          videoId: "emotions-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 5",
          videoId: "emotions-5",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 6",
          videoId: "emotions-6",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 7",
          videoId: "emotions-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 8",
          videoId: "emotions-8",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 9",
          videoId: "emotions-9",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 10",
          videoId: "emotions-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 11",
          videoId: "emotions-11",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 12",
          videoId: "emotions-12",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 13",
          videoId: "emotions-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 14",
          videoId: "emotions-14",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 15",
          videoId: "emotions-15",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 16",
          videoId: "emotions-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 17",
          videoId: "emotions-17",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 18",
          videoId: "emotions-18",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 19",
          videoId: "emotions-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 20",
          videoId: "emotions-20",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 21",
          videoId: "emotions-21",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 22",
          videoId: "emotions-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 23",
          videoId: "emotions-23",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 24",
          videoId: "emotions-24",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 25",
          videoId: "emotions-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 26",
          videoId: "emotions-26",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 27",
          videoId: "emotions-27",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 28",
          videoId: "emotions-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 29",
          videoId: "emotions-29",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Emotions30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emotions & Feelings - Part 30",
          videoId: "emotions-30",
          bgGradient: ["#673AB7","#D1C4E9"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"H","word":"Happy","emoji":"😊","bgColor":"#FDD835"},{"letter":"S","word":"Sad","emoji":"😢","bgColor":"#1565C0"},{"letter":"A","word":"Angry","emoji":"😠","bgColor":"#D32F2F"},{"letter":"S","word":"Scared","emoji":"😨","bgColor":"#7B1FA2"},{"letter":"E","word":"Excited","emoji":"🤩","bgColor":"#FF6F00"},{"letter":"S","word":"Surprised","emoji":"😲","bgColor":"#00BCD4"},{"letter":"L","word":"Love","emoji":"😍","bgColor":"#E91E63"},{"letter":"T","word":"Tired","emoji":"😴","bgColor":"#607D8B"},{"letter":"B","word":"Brave","emoji":"💪","bgColor":"#2E7D32"},{"letter":"S","word":"Shy","emoji":"🙈","bgColor":"#F48FB1"},{"letter":"P","word":"Proud","emoji":"😤","bgColor":"#FF8F00"},{"letter":"C","word":"Confused","emoji":"😕","bgColor":"#FBC02D"},{"letter":"J","word":"Jealous","emoji":"😒","bgColor":"#388E3C"},{"letter":"N","word":"Nervous","emoji":"😰","bgColor":"#AB47BC"},{"letter":"G","word":"Grateful","emoji":"🙏","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
