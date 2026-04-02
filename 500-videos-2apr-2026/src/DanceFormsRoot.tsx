import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const DanceFormsRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DanceForms1"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 1",
          videoId: "dance-forms-1",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms2"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 2",
          videoId: "dance-forms-2",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"M","word":"Modern Dance","emoji":"🕺","bgColor":"#7B1FA2"},{"letter":"T","word":"Tap Dance","emoji":"👞","bgColor":"#37474F"},{"letter":"D","word":"Disco","emoji":"🪩","bgColor":"#FFD54F"},{"letter":"C","word":"Contemporary","emoji":"💃","bgColor":"#00838F"},{"letter":"R","word":"Robot Dance","emoji":"🤖","bgColor":"#607D8B"},{"letter":"O","word":"Odissi","emoji":"💃","bgColor":"#E91E63"},{"letter":"K","word":"Kuchipudi","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Samba","emoji":"💃","bgColor":"#2E7D32"},{"letter":"R","word":"Rumba","emoji":"💃","bgColor":"#C62828"},{"letter":"F","word":"Foxtrot","emoji":"🕺","bgColor":"#455A64"},{"letter":"M","word":"Moonwalk","emoji":"🌙","bgColor":"#212121"},{"letter":"P","word":"Polka","emoji":"💃","bgColor":"#E91E63"},{"letter":"B","word":"Bhangra","emoji":"🕺","bgColor":"#FF8F00"},{"letter":"G","word":"Garba","emoji":"💃","bgColor":"#D32F2F"},{"letter":"L","word":"Lavani","emoji":"💃","bgColor":"#7B1FA2"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms3"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 3",
          videoId: "dance-forms-3",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms4"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 4",
          videoId: "dance-forms-4",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms5"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 5",
          videoId: "dance-forms-5",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms6"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 6",
          videoId: "dance-forms-6",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms7"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 7",
          videoId: "dance-forms-7",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms8"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 8",
          videoId: "dance-forms-8",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms9"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 9",
          videoId: "dance-forms-9",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms10"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 10",
          videoId: "dance-forms-10",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms11"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 11",
          videoId: "dance-forms-11",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms12"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 12",
          videoId: "dance-forms-12",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms13"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 13",
          videoId: "dance-forms-13",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms14"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 14",
          videoId: "dance-forms-14",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms15"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 15",
          videoId: "dance-forms-15",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms16"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 16",
          videoId: "dance-forms-16",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms17"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 17",
          videoId: "dance-forms-17",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms18"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 18",
          videoId: "dance-forms-18",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms19"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 19",
          videoId: "dance-forms-19",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms20"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 20",
          videoId: "dance-forms-20",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms21"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 21",
          videoId: "dance-forms-21",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms22"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 22",
          videoId: "dance-forms-22",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms23"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 23",
          videoId: "dance-forms-23",
          bgGradient: ["#E65100","#FFB74D"] as [string, string],
          accentColor: "#BF360C",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms24"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 24",
          videoId: "dance-forms-24",
          bgGradient: ["#4527A0","#B39DDB"] as [string, string],
          accentColor: "#311B92",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="DanceForms25"
        component={AlphabetShortsTemplate}
        durationInFrames={1530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Forms - Part 25",
          videoId: "dance-forms-25",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"B","word":"Ballet","emoji":"🩰","bgColor":"#F48FB1"},{"letter":"H","word":"Hip Hop","emoji":"🕺","bgColor":"#FF6F00"},{"letter":"S","word":"Salsa","emoji":"💃","bgColor":"#D32F2F"},{"letter":"T","word":"Tango","emoji":"💃","bgColor":"#C62828"},{"letter":"W","word":"Waltz","emoji":"💃","bgColor":"#4527A0"},{"letter":"J","word":"Jazz","emoji":"🎷","bgColor":"#FFB300"},{"letter":"B","word":"Bharatanatyam","emoji":"💃","bgColor":"#FF8F00"},{"letter":"K","word":"Kathak","emoji":"💃","bgColor":"#E91E63"},{"letter":"F","word":"Flamenco","emoji":"💃","bgColor":"#D32F2F"},{"letter":"B","word":"Breakdance","emoji":"🤸","bgColor":"#1565C0"},{"letter":"C","word":"Cha Cha","emoji":"💃","bgColor":"#FF6F00"},{"letter":"S","word":"Swing","emoji":"🕺","bgColor":"#FBC02D"},{"letter":"F","word":"Folk Dance","emoji":"👯","bgColor":"#388E3C"},{"letter":"B","word":"Belly Dance","emoji":"💃","bgColor":"#FF8F00"},{"letter":"L","word":"Line Dance","emoji":"🤠","bgColor":"#795548"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
