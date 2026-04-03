import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const FabricsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Fabrics1"
        component={AlphabetLongTemplate}
        durationInFrames={4170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 1",
          videoId: "fabrics-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 139,
        }}
      />
      <Composition
        id="Fabrics2"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 2",
          videoId: "fabrics-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"T","word":"Tweed","emoji":"🧥","bgColor":"#795548"},{"letter":"C","word":"Corduroy","emoji":"👖","bgColor":"#5D4037"},{"letter":"O","word":"Organza","emoji":"✨","bgColor":"#E1BEE7"},{"letter":"S","word":"Suede","emoji":"🥾","bgColor":"#795548"},{"letter":"L","word":"Leather","emoji":"🧥","bgColor":"#3E2723"},{"letter":"F","word":"Felt","emoji":"🎨","bgColor":"#4CAF50"},{"letter":"C","word":"Canvas","emoji":"🎨","bgColor":"#8D6E63"},{"letter":"B","word":"Burlap","emoji":"🟤","bgColor":"#795548"},{"letter":"G","word":"Gauze","emoji":"🩹","bgColor":"#F5F5F5"},{"letter":"R","word":"Rayon","emoji":"👗","bgColor":"#00BCD4"},{"letter":"M","word":"Muslin","emoji":"👕","bgColor":"#D7CCC8"},{"letter":"T","word":"Taffeta","emoji":"✨","bgColor":"#7B1FA2"},{"letter":"G","word":"Gingham","emoji":"🟥","bgColor":"#D32F2F"},{"letter":"P","word":"Plaid","emoji":"🟩","bgColor":"#2E7D32"},{"letter":"B","word":"Batik","emoji":"🎨","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="Fabrics3"
        component={AlphabetLongTemplate}
        durationInFrames={4230}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 3",
          videoId: "fabrics-3",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"K","word":"Knit Fabric","emoji":"🧶","bgColor":"#E91E63"},{"letter":"S","word":"Spandex","emoji":"🤸","bgColor":"#212121"},{"letter":"C","word":"Chambray","emoji":"👕","bgColor":"#42A5F5"},{"letter":"D","word":"Damask","emoji":"🌸","bgColor":"#C62828"},{"letter":"E","word":"Embroidery","emoji":"🪡","bgColor":"#FFB300"},{"letter":"H","word":"Hemp Fabric","emoji":"🌿","bgColor":"#4CAF50"},{"letter":"I","word":"Ikat","emoji":"🎨","bgColor":"#0288D1"},{"letter":"A","word":"Angora","emoji":"🐰","bgColor":"#F5F5F5"},{"letter":"M","word":"Mohair","emoji":"🐑","bgColor":"#A1887F"},{"letter":"Z","word":"Zephyr Cloth","emoji":"💨","bgColor":"#90CAF9"},{"letter":"Y","word":"Yarn","emoji":"🧶","bgColor":"#FF6F00"},{"letter":"U","word":"Ultrasuede","emoji":"✨","bgColor":"#795548"},{"letter":"X","word":"Xerophyte Fiber","emoji":"🌵","bgColor":"#4CAF50"},{"letter":"Q","word":"Quilted Fabric","emoji":"🛏️","bgColor":"#E91E63"},{"letter":"W","word":"Woven Fabric","emoji":"🪡","bgColor":"#8D6E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 141,
        }}
      />
      <Composition
        id="Fabrics4"
        component={AlphabetLongTemplate}
        durationInFrames={2970}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 4",
          videoId: "fabrics-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 99,
        }}
      />
      <Composition
        id="Fabrics5"
        component={AlphabetLongTemplate}
        durationInFrames={4290}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 5",
          videoId: "fabrics-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 143,
        }}
      />
      <Composition
        id="Fabrics6"
        component={AlphabetLongTemplate}
        durationInFrames={3060}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 6",
          videoId: "fabrics-6",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 102,
        }}
      />
      <Composition
        id="Fabrics7"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 7",
          videoId: "fabrics-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
      <Composition
        id="Fabrics8"
        component={AlphabetLongTemplate}
        durationInFrames={3120}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 8",
          videoId: "fabrics-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 104,
        }}
      />
      <Composition
        id="Fabrics9"
        component={AlphabetLongTemplate}
        durationInFrames={4440}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 9",
          videoId: "fabrics-9",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 148,
        }}
      />
      <Composition
        id="Fabrics10"
        component={AlphabetLongTemplate}
        durationInFrames={3180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 10",
          videoId: "fabrics-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 106,
        }}
      />
      <Composition
        id="Fabrics11"
        component={AlphabetLongTemplate}
        durationInFrames={4530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 11",
          videoId: "fabrics-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 151,
        }}
      />
      <Composition
        id="Fabrics12"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 12",
          videoId: "fabrics-12",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Fabrics13"
        component={AlphabetLongTemplate}
        durationInFrames={4590}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 13",
          videoId: "fabrics-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 153,
        }}
      />
      <Composition
        id="Fabrics14"
        component={AlphabetLongTemplate}
        durationInFrames={3330}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 14",
          videoId: "fabrics-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 111,
        }}
      />
      <Composition
        id="Fabrics15"
        component={AlphabetLongTemplate}
        durationInFrames={4650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 15",
          videoId: "fabrics-15",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 155,
        }}
      />
      <Composition
        id="Fabrics16"
        component={AlphabetLongTemplate}
        durationInFrames={3420}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 16",
          videoId: "fabrics-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 114,
        }}
      />
      <Composition
        id="Fabrics17"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 17",
          videoId: "fabrics-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="Fabrics18"
        component={AlphabetLongTemplate}
        durationInFrames={3480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 18",
          videoId: "fabrics-18",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 116,
        }}
      />
      <Composition
        id="Fabrics19"
        component={AlphabetLongTemplate}
        durationInFrames={4800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 19",
          videoId: "fabrics-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 160,
        }}
      />
      <Composition
        id="Fabrics20"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 20",
          videoId: "fabrics-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="Fabrics21"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 21",
          videoId: "fabrics-21",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="Fabrics22"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 22",
          videoId: "fabrics-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Fabrics23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 23",
          videoId: "fabrics-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Fabrics24"
        component={AlphabetLongTemplate}
        durationInFrames={3690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 24",
          videoId: "fabrics-24",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 123,
        }}
      />
      <Composition
        id="Fabrics25"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 25",
          videoId: "fabrics-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="Fabrics26"
        component={AlphabetLongTemplate}
        durationInFrames={3750}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 26",
          videoId: "fabrics-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 125,
        }}
      />
      <Composition
        id="Fabrics27"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 27",
          videoId: "fabrics-27",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="Fabrics28"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 28",
          videoId: "fabrics-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="Fabrics29"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 29",
          videoId: "fabrics-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="Fabrics30"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Fabrics & Textiles - Part 30",
          videoId: "fabrics-30",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"C","word":"Cotton","emoji":"👕","bgColor":"#F5F5F5"},{"letter":"S","word":"Silk","emoji":"🧣","bgColor":"#E91E63"},{"letter":"W","word":"Wool","emoji":"🧶","bgColor":"#FF8F00"},{"letter":"L","word":"Linen","emoji":"👔","bgColor":"#D7CCC8"},{"letter":"D","word":"Denim","emoji":"👖","bgColor":"#1565C0"},{"letter":"P","word":"Polyester","emoji":"👚","bgColor":"#7B1FA2"},{"letter":"N","word":"Nylon","emoji":"🧦","bgColor":"#607D8B"},{"letter":"V","word":"Velvet","emoji":"🎀","bgColor":"#C62828"},{"letter":"S","word":"Satin","emoji":"✨","bgColor":"#E91E63"},{"letter":"C","word":"Cashmere","emoji":"🧣","bgColor":"#8D6E63"},{"letter":"T","word":"Tulle","emoji":"💃","bgColor":"#F48FB1"},{"letter":"L","word":"Lace","emoji":"🪡","bgColor":"#F5F5F5"},{"letter":"F","word":"Flannel","emoji":"🥋","bgColor":"#D32F2F"},{"letter":"C","word":"Chiffon","emoji":"💨","bgColor":"#E0E0E0"},{"letter":"J","word":"Jersey","emoji":"🏈","bgColor":"#4CAF50"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
    </>
  );
};
