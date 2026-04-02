import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const DogBreedsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DogBreeds1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 1",
          videoId: "dog-breeds-1",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 2",
          videoId: "dog-breeds-2",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Great Dane","emoji":"🐕","bgColor":"#607D8B"},{"letter":"A","word":"Akita","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"P","word":"Pomeranian","emoji":"🐕","bgColor":"#FF6F00"},{"letter":"S","word":"Saint Bernard","emoji":"🐕","bgColor":"#5D4037"},{"letter":"C","word":"Cocker Spaniel","emoji":"🐕","bgColor":"#A1887F"},{"letter":"M","word":"Maltese","emoji":"🐕","bgColor":"#F5F5F5"},{"letter":"B","word":"Border Collie","emoji":"🐕","bgColor":"#212121"},{"letter":"W","word":"Whippet","emoji":"🐕","bgColor":"#9E9E9E"},{"letter":"S","word":"Samoyed","emoji":"🐕","bgColor":"#FAFAFA"},{"letter":"C","word":"Chow Chow","emoji":"🐕","bgColor":"#BF360C"},{"letter":"I","word":"Irish Setter","emoji":"🐕","bgColor":"#C62828"},{"letter":"N","word":"Newfoundland","emoji":"🐕","bgColor":"#212121"},{"letter":"B","word":"Basenji","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"M","word":"Mastiff","emoji":"🐕","bgColor":"#5D4037"},{"letter":"S","word":"Schnauzer","emoji":"🐕","bgColor":"#616161"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 3",
          videoId: "dog-breeds-3",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"W","word":"Weimaraner","emoji":"🐕","bgColor":"#78909C"},{"letter":"V","word":"Vizsla","emoji":"🐕","bgColor":"#BF360C"},{"letter":"T","word":"Terrier","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"L","word":"Lhasa Apso","emoji":"🐕","bgColor":"#A1887F"},{"letter":"K","word":"King Charles","emoji":"🐕","bgColor":"#6D4C41"},{"letter":"S","word":"Shiba Inu","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"J","word":"Jack Russell","emoji":"🐕","bgColor":"#F5F5F5"},{"letter":"R","word":"Rhodesian","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"P","word":"Papillon","emoji":"🐕","bgColor":"#5D4037"},{"letter":"A","word":"Afghan Hound","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 4",
          videoId: "dog-breeds-4",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 5",
          videoId: "dog-breeds-5",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 6",
          videoId: "dog-breeds-6",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 7",
          videoId: "dog-breeds-7",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 8",
          videoId: "dog-breeds-8",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 9",
          videoId: "dog-breeds-9",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 10",
          videoId: "dog-breeds-10",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 11",
          videoId: "dog-breeds-11",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 12",
          videoId: "dog-breeds-12",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 13",
          videoId: "dog-breeds-13",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 14",
          videoId: "dog-breeds-14",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 15",
          videoId: "dog-breeds-15",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 16",
          videoId: "dog-breeds-16",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 17",
          videoId: "dog-breeds-17",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 18",
          videoId: "dog-breeds-18",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 19",
          videoId: "dog-breeds-19",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 20",
          videoId: "dog-breeds-20",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 21",
          videoId: "dog-breeds-21",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 22",
          videoId: "dog-breeds-22",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 23",
          videoId: "dog-breeds-23",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 24",
          videoId: "dog-breeds-24",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 25",
          videoId: "dog-breeds-25",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds26"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 26",
          videoId: "dog-breeds-26",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds27"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 27",
          videoId: "dog-breeds-27",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds28"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 28",
          videoId: "dog-breeds-28",
          bgGradient: ["#5D4037","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds29"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 29",
          videoId: "dog-breeds-29",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DogBreeds30"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dog Breeds - Part 30",
          videoId: "dog-breeds-30",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"G","word":"Golden Retriever","emoji":"🐕","bgColor":"#FFB300"},{"letter":"L","word":"Labrador","emoji":"🐕‍🦺","bgColor":"#F5F5DC"},{"letter":"G","word":"German Shepherd","emoji":"🐕","bgColor":"#5D4037"},{"letter":"B","word":"Bulldog","emoji":"🐶","bgColor":"#795548"},{"letter":"P","word":"Poodle","emoji":"🐩","bgColor":"#F5F5F5"},{"letter":"B","word":"Beagle","emoji":"🐕","bgColor":"#FF8F00"},{"letter":"H","word":"Husky","emoji":"🐺","bgColor":"#B0BEC5"},{"letter":"R","word":"Rottweiler","emoji":"🐕","bgColor":"#212121"},{"letter":"D","word":"Dalmatian","emoji":"🐾","bgColor":"#F5F5F5"},{"letter":"B","word":"Boxer","emoji":"🐕","bgColor":"#8D6E63"},{"letter":"C","word":"Chihuahua","emoji":"🐕","bgColor":"#FFB74D"},{"letter":"D","word":"Doberman","emoji":"🐕","bgColor":"#3E2723"},{"letter":"P","word":"Pug","emoji":"🐶","bgColor":"#FFB300"},{"letter":"S","word":"Shih Tzu","emoji":"🐕","bgColor":"#795548"},{"letter":"C","word":"Corgi","emoji":"🐕","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
