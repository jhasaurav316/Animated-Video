import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const BoardGamesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BoardGames1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 1",
          videoId: "board-games-1",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 2",
          videoId: "board-games-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Go","emoji":"⚫","bgColor":"#212121"},{"letter":"M","word":"Mancala","emoji":"🟤","bgColor":"#8D6E63"},{"letter":"C","word":"Candy Land","emoji":"🍬","bgColor":"#E91E63"},{"letter":"C","word":"Chutes Ladders","emoji":"🪜","bgColor":"#4CAF50"},{"letter":"J","word":"Jenga","emoji":"🧱","bgColor":"#FFB300"},{"letter":"P","word":"Pictionary","emoji":"🎨","bgColor":"#0288D1"},{"letter":"C","word":"Cranium","emoji":"🧠","bgColor":"#7B1FA2"},{"letter":"T","word":"Twister","emoji":"🌀","bgColor":"#4CAF50"},{"letter":"U","word":"Uno Cards","emoji":"🃏","bgColor":"#D32F2F"},{"letter":"S","word":"Stratego","emoji":"⚔️","bgColor":"#C62828"},{"letter":"K","word":"Kerplunk","emoji":"🔴","bgColor":"#4CAF50"},{"letter":"H","word":"Hungry Hippos","emoji":"🦛","bgColor":"#2E7D32"},{"letter":"M","word":"Mouse Trap","emoji":"🐭","bgColor":"#FDD835"},{"letter":"G","word":"Guess Who","emoji":"🤔","bgColor":"#1565C0"},{"letter":"B","word":"Boggle","emoji":"🔤","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 3",
          videoId: "board-games-3",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"L","word":"Ludo","emoji":"🎲","bgColor":"#D32F2F"},{"letter":"P","word":"Parcheesi","emoji":"🎲","bgColor":"#1565C0"},{"letter":"S","word":"Snakes Ladders","emoji":"🐍","bgColor":"#4CAF50"},{"letter":"C","word":"Catan","emoji":"🏝️","bgColor":"#FF6F00"},{"letter":"T","word":"Ticket to Ride","emoji":"🚂","bgColor":"#0277BD"},{"letter":"P","word":"Pandemic","emoji":"🦠","bgColor":"#2E7D32"},{"letter":"A","word":"Azul","emoji":"🟦","bgColor":"#0288D1"},{"letter":"W","word":"Wingspan","emoji":"🐦","bgColor":"#E91E63"},{"letter":"D","word":"Dixit","emoji":"🎨","bgColor":"#7B1FA2"},{"letter":"R","word":"Root","emoji":"🦊","bgColor":"#FF6F00"},{"letter":"E","word":"Everdell","emoji":"🐿️","bgColor":"#4CAF50"},{"letter":"S","word":"Splendor","emoji":"💎","bgColor":"#311B92"},{"letter":"G","word":"Gloomhaven","emoji":"⚔️","bgColor":"#455A64"},{"letter":"Z","word":"Zombicide","emoji":"🧟","bgColor":"#2E7D32"},{"letter":"N","word":"Nemesis","emoji":"👽","bgColor":"#37474F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 4",
          videoId: "board-games-4",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 5",
          videoId: "board-games-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 6",
          videoId: "board-games-6",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 7",
          videoId: "board-games-7",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 8",
          videoId: "board-games-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 9",
          videoId: "board-games-9",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 10",
          videoId: "board-games-10",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 11",
          videoId: "board-games-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 12",
          videoId: "board-games-12",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 13",
          videoId: "board-games-13",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 14",
          videoId: "board-games-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 15",
          videoId: "board-games-15",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 16",
          videoId: "board-games-16",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 17",
          videoId: "board-games-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 18",
          videoId: "board-games-18",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 19",
          videoId: "board-games-19",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 20",
          videoId: "board-games-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 21",
          videoId: "board-games-21",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 22",
          videoId: "board-games-22",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 23",
          videoId: "board-games-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 24",
          videoId: "board-games-24",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 25",
          videoId: "board-games-25",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 26",
          videoId: "board-games-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 27",
          videoId: "board-games-27",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 28",
          videoId: "board-games-28",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 29",
          videoId: "board-games-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="BoardGames30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Board Games - Part 30",
          videoId: "board-games-30",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"C","word":"Chess","emoji":"♟️","bgColor":"#37474F"},{"letter":"C","word":"Checkers","emoji":"🔴","bgColor":"#D32F2F"},{"letter":"M","word":"Monopoly","emoji":"🏠","bgColor":"#2E7D32"},{"letter":"S","word":"Scrabble","emoji":"🔤","bgColor":"#C62828"},{"letter":"R","word":"Risk","emoji":"🗺️","bgColor":"#1565C0"},{"letter":"C","word":"Clue","emoji":"🔎","bgColor":"#7B1FA2"},{"letter":"L","word":"Life Game","emoji":"🎯","bgColor":"#FF6F00"},{"letter":"S","word":"Sorry","emoji":"😅","bgColor":"#E91E63"},{"letter":"C","word":"Connect Four","emoji":"🔵","bgColor":"#1565C0"},{"letter":"B","word":"Battleship","emoji":"🚢","bgColor":"#455A64"},{"letter":"O","word":"Operation","emoji":"🩺","bgColor":"#D32F2F"},{"letter":"Y","word":"Yahtzee","emoji":"🎲","bgColor":"#4CAF50"},{"letter":"T","word":"Trivial Pursuit","emoji":"🧠","bgColor":"#FF8F00"},{"letter":"D","word":"Dominoes","emoji":"🁢","bgColor":"#212121"},{"letter":"B","word":"Backgammon","emoji":"🎲","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
