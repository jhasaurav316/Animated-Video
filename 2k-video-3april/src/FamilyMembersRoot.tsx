import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const FamilyMembersRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FamilyMembers1"
        component={AlphabetLongTemplate}
        durationInFrames={4650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 1",
          videoId: "family-members-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 155,
        }}
      />
      <Composition
        id="FamilyMembers2"
        component={AlphabetLongTemplate}
        durationInFrames={3390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 2",
          videoId: "family-members-2",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"D","word":"Daughter","emoji":"👧","bgColor":"#FF80AB"},{"letter":"H","word":"Husband","emoji":"👨","bgColor":"#1565C0"},{"letter":"W","word":"Wife","emoji":"👩","bgColor":"#E91E63"},{"letter":"P","word":"Parent","emoji":"👫","bgColor":"#FF8F00"},{"letter":"C","word":"Child","emoji":"🧒","bgColor":"#4CAF50"},{"letter":"S","word":"Stepmother","emoji":"👩","bgColor":"#7B1FA2"},{"letter":"S","word":"Stepfather","emoji":"👨","bgColor":"#5D4037"},{"letter":"G","word":"Godmother","emoji":"👩","bgColor":"#FFB300"},{"letter":"G","word":"Godfather","emoji":"👨","bgColor":"#212121"},{"letter":"M","word":"Mother-in-law","emoji":"👩","bgColor":"#9C27B0"},{"letter":"F","word":"Father-in-law","emoji":"👨","bgColor":"#795548"},{"letter":"S","word":"Sibling","emoji":"🧑‍🤝‍🧑","bgColor":"#00BCD4"},{"letter":"T","word":"Toddler","emoji":"🧒","bgColor":"#FF6F00"},{"letter":"I","word":"Infant","emoji":"👶","bgColor":"#FF80AB"},{"letter":"E","word":"Elder","emoji":"🧓","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 113,
        }}
      />
      <Composition
        id="FamilyMembers3"
        component={AlphabetLongTemplate}
        durationInFrames={4710}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 3",
          videoId: "family-members-3",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"O","word":"Offspring","emoji":"🧒","bgColor":"#4CAF50"},{"letter":"A","word":"Ancestor","emoji":"🏛️","bgColor":"#795548"},{"letter":"K","word":"Kin","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"F","word":"Foster Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"R","word":"Relative","emoji":"🤝","bgColor":"#FF8F00"},{"letter":"G","word":"Guardian","emoji":"🛡️","bgColor":"#2E7D32"},{"letter":"P","word":"Pet Dog","emoji":"🐕","bgColor":"#795548"},{"letter":"P","word":"Pet Cat","emoji":"🐱","bgColor":"#FF8F00"},{"letter":"N","word":"Nanny","emoji":"👩‍🍼","bgColor":"#9C27B0"},{"letter":"B","word":"Babysitter","emoji":"🧑‍🍼","bgColor":"#00BCD4"},{"letter":"H","word":"Homemaker","emoji":"🏠","bgColor":"#FF6F00"},{"letter":"G","word":"Grandchild","emoji":"🧒","bgColor":"#4CAF50"},{"letter":"M","word":"Matriarch","emoji":"👑","bgColor":"#FFB300"},{"letter":"P","word":"Patriarch","emoji":"👑","bgColor":"#1565C0"},{"letter":"S","word":"Spouse","emoji":"💍","bgColor":"#FFD54F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 157,
        }}
      />
      <Composition
        id="FamilyMembers4"
        component={AlphabetLongTemplate}
        durationInFrames={3450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 4",
          videoId: "family-members-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 115,
        }}
      />
      <Composition
        id="FamilyMembers5"
        component={AlphabetLongTemplate}
        durationInFrames={4770}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 5",
          videoId: "family-members-5",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 159,
        }}
      />
      <Composition
        id="FamilyMembers6"
        component={AlphabetLongTemplate}
        durationInFrames={3540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 6",
          videoId: "family-members-6",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 118,
        }}
      />
      <Composition
        id="FamilyMembers7"
        component={AlphabetLongTemplate}
        durationInFrames={4860}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 7",
          videoId: "family-members-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 162,
        }}
      />
      <Composition
        id="FamilyMembers8"
        component={AlphabetLongTemplate}
        durationInFrames={3600}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 8",
          videoId: "family-members-8",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 120,
        }}
      />
      <Composition
        id="FamilyMembers9"
        component={AlphabetLongTemplate}
        durationInFrames={4920}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 9",
          videoId: "family-members-9",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 164,
        }}
      />
      <Composition
        id="FamilyMembers10"
        component={AlphabetLongTemplate}
        durationInFrames={3660}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 10",
          videoId: "family-members-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 122,
        }}
      />
      <Composition
        id="FamilyMembers11"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 11",
          videoId: "family-members-11",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="FamilyMembers12"
        component={AlphabetLongTemplate}
        durationInFrames={3750}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 12",
          videoId: "family-members-12",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 125,
        }}
      />
      <Composition
        id="FamilyMembers13"
        component={AlphabetLongTemplate}
        durationInFrames={5070}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 13",
          videoId: "family-members-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 169,
        }}
      />
      <Composition
        id="FamilyMembers14"
        component={AlphabetLongTemplate}
        durationInFrames={3810}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 14",
          videoId: "family-members-14",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 127,
        }}
      />
      <Composition
        id="FamilyMembers15"
        component={AlphabetLongTemplate}
        durationInFrames={5130}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 15",
          videoId: "family-members-15",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 171,
        }}
      />
      <Composition
        id="FamilyMembers16"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 16",
          videoId: "family-members-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="FamilyMembers17"
        component={AlphabetLongTemplate}
        durationInFrames={5220}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 17",
          videoId: "family-members-17",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 174,
        }}
      />
      <Composition
        id="FamilyMembers18"
        component={AlphabetLongTemplate}
        durationInFrames={3960}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 18",
          videoId: "family-members-18",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 132,
        }}
      />
      <Composition
        id="FamilyMembers19"
        component={AlphabetLongTemplate}
        durationInFrames={2700}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 19",
          videoId: "family-members-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 90,
        }}
      />
      <Composition
        id="FamilyMembers20"
        component={AlphabetLongTemplate}
        durationInFrames={4020}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 20",
          videoId: "family-members-20",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 134,
        }}
      />
      <Composition
        id="FamilyMembers21"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 21",
          videoId: "family-members-21",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="FamilyMembers22"
        component={AlphabetLongTemplate}
        durationInFrames={4110}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 22",
          videoId: "family-members-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 137,
        }}
      />
      <Composition
        id="FamilyMembers23"
        component={AlphabetLongTemplate}
        durationInFrames={2850}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 23",
          videoId: "family-members-23",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 95,
        }}
      />
      <Composition
        id="FamilyMembers24"
        component={AlphabetLongTemplate}
        durationInFrames={4170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 24",
          videoId: "family-members-24",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 139,
        }}
      />
      <Composition
        id="FamilyMembers25"
        component={AlphabetLongTemplate}
        durationInFrames={2910}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 25",
          videoId: "family-members-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 97,
        }}
      />
      <Composition
        id="FamilyMembers26"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 26",
          videoId: "family-members-26",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="FamilyMembers27"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 27",
          videoId: "family-members-27",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
      <Composition
        id="FamilyMembers28"
        component={AlphabetLongTemplate}
        durationInFrames={4320}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 28",
          videoId: "family-members-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 144,
        }}
      />
      <Composition
        id="FamilyMembers29"
        component={AlphabetLongTemplate}
        durationInFrames={3060}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 29",
          videoId: "family-members-29",
          bgGradient: ["#FF9800","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 102,
        }}
      />
      <Composition
        id="FamilyMembers30"
        component={AlphabetLongTemplate}
        durationInFrames={4380}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Family Members - Part 30",
          videoId: "family-members-30",
          bgGradient: ["#4CAF50","#C8E6C9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"M","word":"Mom","emoji":"👩","bgColor":"#E91E63"},{"letter":"D","word":"Dad","emoji":"👨","bgColor":"#1565C0"},{"letter":"S","word":"Sister","emoji":"👧","bgColor":"#FF80AB"},{"letter":"B","word":"Brother","emoji":"👦","bgColor":"#42A5F5"},{"letter":"G","word":"Grandma","emoji":"👵","bgColor":"#9C27B0"},{"letter":"G","word":"Grandpa","emoji":"👴","bgColor":"#795548"},{"letter":"A","word":"Aunt","emoji":"👩","bgColor":"#E91E63"},{"letter":"U","word":"Uncle","emoji":"👨","bgColor":"#5D4037"},{"letter":"C","word":"Cousin","emoji":"🧑","bgColor":"#FF6F00"},{"letter":"B","word":"Baby","emoji":"👶","bgColor":"#FF80AB"},{"letter":"T","word":"Twin","emoji":"👯","bgColor":"#4CAF50"},{"letter":"F","word":"Family","emoji":"👨‍👩‍👧‍👦","bgColor":"#1565C0"},{"letter":"N","word":"Niece","emoji":"👧","bgColor":"#E91E63"},{"letter":"N","word":"Nephew","emoji":"👦","bgColor":"#0288D1"},{"letter":"S","word":"Son","emoji":"👦","bgColor":"#42A5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 146,
        }}
      />
    </>
  );
};
