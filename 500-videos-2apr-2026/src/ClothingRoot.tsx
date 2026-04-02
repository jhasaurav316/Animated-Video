import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const ClothingRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Clothing1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 1",
          videoId: "clothing-1",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 2",
          videoId: "clothing-2",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Sweater","emoji":"🧶","bgColor":"#7B1FA2"},{"letter":"J","word":"Jeans","emoji":"👖","bgColor":"#0D47A1"},{"letter":"S","word":"Skirt","emoji":"👗","bgColor":"#E91E63"},{"letter":"V","word":"Vest","emoji":"🦺","bgColor":"#FF6F00"},{"letter":"H","word":"Hoodie","emoji":"🧥","bgColor":"#455A64"},{"letter":"U","word":"Uniform","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pajamas","emoji":"🛌","bgColor":"#90CAF9"},{"letter":"R","word":"Raincoat","emoji":"🧥","bgColor":"#FBC02D"},{"letter":"S","word":"Sunglasses","emoji":"🕶️","bgColor":"#212121"},{"letter":"W","word":"Watch","emoji":"⌚","bgColor":"#FFB300"},{"letter":"R","word":"Ring","emoji":"💍","bgColor":"#FFD54F"},{"letter":"N","word":"Necklace","emoji":"📿","bgColor":"#E91E63"},{"letter":"B","word":"Bracelet","emoji":"📿","bgColor":"#00BCD4"},{"letter":"E","word":"Earrings","emoji":"💎","bgColor":"#7B1FA2"},{"letter":"C","word":"Crown","emoji":"👑","bgColor":"#FFB300"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 3",
          videoId: "clothing-3",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"T","word":"Turban","emoji":"🧕","bgColor":"#FF8F00"},{"letter":"S","word":"Saree","emoji":"👗","bgColor":"#C62828"},{"letter":"K","word":"Kurta","emoji":"👔","bgColor":"#FF6F00"},{"letter":"G","word":"Gown","emoji":"👗","bgColor":"#4527A0"},{"letter":"A","word":"Apron","emoji":"🧑‍🍳","bgColor":"#4CAF50"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 4",
          videoId: "clothing-4",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 5",
          videoId: "clothing-5",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 6",
          videoId: "clothing-6",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 7",
          videoId: "clothing-7",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 8",
          videoId: "clothing-8",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 9",
          videoId: "clothing-9",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 10",
          videoId: "clothing-10",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 11",
          videoId: "clothing-11",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 12",
          videoId: "clothing-12",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 13",
          videoId: "clothing-13",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 14",
          videoId: "clothing-14",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 15",
          videoId: "clothing-15",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 16",
          videoId: "clothing-16",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 17",
          videoId: "clothing-17",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 18",
          videoId: "clothing-18",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 19",
          videoId: "clothing-19",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 20",
          videoId: "clothing-20",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 21",
          videoId: "clothing-21",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 22",
          videoId: "clothing-22",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 23",
          videoId: "clothing-23",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 24",
          videoId: "clothing-24",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 25",
          videoId: "clothing-25",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 26",
          videoId: "clothing-26",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 27",
          videoId: "clothing-27",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 28",
          videoId: "clothing-28",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 29",
          videoId: "clothing-29",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Clothing30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Clothing & Fashion - Part 30",
          videoId: "clothing-30",
          bgGradient: ["#00695C","#80CBC4"] as [string, string],
          accentColor: "#004D40",
          letters: [{"letter":"S","word":"Shirt","emoji":"👔","bgColor":"#1565C0"},{"letter":"P","word":"Pants","emoji":"👖","bgColor":"#0D47A1"},{"letter":"D","word":"Dress","emoji":"👗","bgColor":"#E91E63"},{"letter":"S","word":"Shoes","emoji":"👟","bgColor":"#FF6F00"},{"letter":"H","word":"Hat","emoji":"🎩","bgColor":"#212121"},{"letter":"C","word":"Cap","emoji":"🧢","bgColor":"#D32F2F"},{"letter":"S","word":"Socks","emoji":"🧦","bgColor":"#F5F5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#5D4037"},{"letter":"S","word":"Scarf","emoji":"🧣","bgColor":"#C62828"},{"letter":"J","word":"Jacket","emoji":"🧥","bgColor":"#37474F"},{"letter":"C","word":"Coat","emoji":"🧥","bgColor":"#3E2723"},{"letter":"B","word":"Belt","emoji":"👔","bgColor":"#795548"},{"letter":"T","word":"Tie","emoji":"👔","bgColor":"#D32F2F"},{"letter":"B","word":"Boots","emoji":"👢","bgColor":"#5D4037"},{"letter":"S","word":"Sandals","emoji":"👡","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
