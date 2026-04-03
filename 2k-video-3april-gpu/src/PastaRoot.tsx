import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const PastaRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Pasta1"
        component={AlphabetLongTemplate}
        durationInFrames={3930}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 1",
          videoId: "pasta-1",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 131,
        }}
      />
      <Composition
        id="Pasta2"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 2",
          videoId: "pasta-2",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"U","word":"Udon","emoji":"🍜","bgColor":"#F5F5F5"},{"letter":"R","word":"Ramen","emoji":"🍜","bgColor":"#FF8F00"},{"letter":"S","word":"Soba","emoji":"🍜","bgColor":"#5D4037"},{"letter":"P","word":"Pho Noodles","emoji":"🍜","bgColor":"#D7CCC8"},{"letter":"L","word":"Lo Mein","emoji":"🍜","bgColor":"#795548"},{"letter":"C","word":"Chow Mein","emoji":"🍜","bgColor":"#FF8F00"},{"letter":"R","word":"Rice Noodles","emoji":"🍜","bgColor":"#F5F5F5"},{"letter":"G","word":"Glass Noodles","emoji":"🍜","bgColor":"#E0E0E0"},{"letter":"E","word":"Egg Noodles","emoji":"🍜","bgColor":"#FDD835"},{"letter":"Z","word":"Ziti","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"D","word":"Ditalini","emoji":"🍝","bgColor":"#FFB300"},{"letter":"B","word":"Bucatini","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"A","word":"Angel Hair","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Couscous","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Pappardelle","emoji":"🍝","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="Pasta3"
        component={AlphabetLongTemplate}
        durationInFrames={4020}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 3",
          videoId: "pasta-3",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"M","word":"Mostaccioli","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"C","word":"Cavatappi","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"F","word":"Farfalle","emoji":"🦋","bgColor":"#FDD835"},{"letter":"S","word":"Shells Pasta","emoji":"🐚","bgColor":"#FFB300"},{"letter":"W","word":"Wonton Noodles","emoji":"🥟","bgColor":"#FFB74D"},{"letter":"N","word":"Noodle Soup","emoji":"🍜","bgColor":"#FF8F00"},{"letter":"I","word":"Instant Noodles","emoji":"🍜","bgColor":"#D32F2F"},{"letter":"K","word":"Kluski","emoji":"🍜","bgColor":"#FFB300"},{"letter":"H","word":"Hokkien Noodles","emoji":"🍜","bgColor":"#795548"},{"letter":"J","word":"Japchae","emoji":"🍜","bgColor":"#5D4037"},{"letter":"Y","word":"Yakisoba","emoji":"🍜","bgColor":"#FF8F00"},{"letter":"S","word":"Somen","emoji":"🍜","bgColor":"#F5F5F5"},{"letter":"P","word":"Pad Thai","emoji":"🍜","bgColor":"#FF6F00"},{"letter":"D","word":"Dan Dan Noodles","emoji":"🍜","bgColor":"#D32F2F"},{"letter":"T","word":"Tofu Noodles","emoji":"🍜","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 134,
        }}
      />
      <Composition
        id="Pasta4"
        component={AlphabetLongTemplate}
        durationInFrames={2760}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 4",
          videoId: "pasta-4",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 92,
        }}
      />
      <Composition
        id="Pasta5"
        component={AlphabetLongTemplate}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 5",
          videoId: "pasta-5",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 136,
        }}
      />
      <Composition
        id="Pasta6"
        component={AlphabetLongTemplate}
        durationInFrames={2820}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 6",
          videoId: "pasta-6",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 94,
        }}
      />
      <Composition
        id="Pasta7"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 7",
          videoId: "pasta-7",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="Pasta8"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 8",
          videoId: "pasta-8",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="Pasta9"
        component={AlphabetLongTemplate}
        durationInFrames={4230}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 9",
          videoId: "pasta-9",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 141,
        }}
      />
      <Composition
        id="Pasta10"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 10",
          videoId: "pasta-10",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="Pasta11"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 11",
          videoId: "pasta-11",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="Pasta12"
        component={AlphabetLongTemplate}
        durationInFrames={3030}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 12",
          videoId: "pasta-12",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 101,
        }}
      />
      <Composition
        id="Pasta13"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 13",
          videoId: "pasta-13",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
      <Composition
        id="Pasta14"
        component={AlphabetLongTemplate}
        durationInFrames={3120}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 14",
          videoId: "pasta-14",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 104,
        }}
      />
      <Composition
        id="Pasta15"
        component={AlphabetLongTemplate}
        durationInFrames={4440}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 15",
          videoId: "pasta-15",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 148,
        }}
      />
      <Composition
        id="Pasta16"
        component={AlphabetLongTemplate}
        durationInFrames={3180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 16",
          videoId: "pasta-16",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 106,
        }}
      />
      <Composition
        id="Pasta17"
        component={AlphabetLongTemplate}
        durationInFrames={4500}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 17",
          videoId: "pasta-17",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 150,
        }}
      />
      <Composition
        id="Pasta18"
        component={AlphabetLongTemplate}
        durationInFrames={3240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 18",
          videoId: "pasta-18",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 108,
        }}
      />
      <Composition
        id="Pasta19"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 19",
          videoId: "pasta-19",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="Pasta20"
        component={AlphabetLongTemplate}
        durationInFrames={3330}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 20",
          videoId: "pasta-20",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 111,
        }}
      />
      <Composition
        id="Pasta21"
        component={AlphabetLongTemplate}
        durationInFrames={4650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 21",
          videoId: "pasta-21",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 155,
        }}
      />
      <Composition
        id="Pasta22"
        component={AlphabetLongTemplate}
        durationInFrames={3390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 22",
          videoId: "pasta-22",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 113,
        }}
      />
      <Composition
        id="Pasta23"
        component={AlphabetLongTemplate}
        durationInFrames={4710}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 23",
          videoId: "pasta-23",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 157,
        }}
      />
      <Composition
        id="Pasta24"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 24",
          videoId: "pasta-24",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="Pasta25"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 25",
          videoId: "pasta-25",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="Pasta26"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 26",
          videoId: "pasta-26",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="Pasta27"
        component={AlphabetLongTemplate}
        durationInFrames={4860}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 27",
          videoId: "pasta-27",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 162,
        }}
      />
      <Composition
        id="Pasta28"
        component={AlphabetLongTemplate}
        durationInFrames={3600}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 28",
          videoId: "pasta-28",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 120,
        }}
      />
      <Composition
        id="Pasta29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 29",
          videoId: "pasta-29",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Pasta30"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pasta & Noodles - Part 30",
          videoId: "pasta-30",
          bgGradient: ["#FDD835","#FFF9C4"] as [string, string],
          accentColor: "#F9A825",
          letters: [{"letter":"S","word":"Spaghetti","emoji":"🍝","bgColor":"#FFB300"},{"letter":"P","word":"Penne","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"F","word":"Fusilli","emoji":"🍝","bgColor":"#FDD835"},{"letter":"L","word":"Lasagna","emoji":"🍝","bgColor":"#D32F2F"},{"letter":"R","word":"Ravioli","emoji":"🥟","bgColor":"#FF6F00"},{"letter":"M","word":"Macaroni","emoji":"🍝","bgColor":"#FFB300"},{"letter":"T","word":"Tagliatelle","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"G","word":"Gnocchi","emoji":"🍝","bgColor":"#F5F5F5"},{"letter":"O","word":"Orzo","emoji":"🍝","bgColor":"#FDD835"},{"letter":"R","word":"Rigatoni","emoji":"🍝","bgColor":"#FFB74D"},{"letter":"F","word":"Fettuccine","emoji":"🍝","bgColor":"#FFB300"},{"letter":"L","word":"Linguine","emoji":"🍝","bgColor":"#FDD835"},{"letter":"C","word":"Cannelloni","emoji":"🍝","bgColor":"#FF6F00"},{"letter":"T","word":"Tortellini","emoji":"🍝","bgColor":"#FF8F00"},{"letter":"V","word":"Vermicelli","emoji":"🍝","bgColor":"#FFB74D"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
    </>
  );
};
