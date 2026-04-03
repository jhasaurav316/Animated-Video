import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const HospitalRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Hospital1"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 1",
          videoId: "hospital-1",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="Hospital2"
        component={AlphabetLongTemplate}
        durationInFrames={3210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 2",
          videoId: "hospital-2",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Dentist","emoji":"🪥","bgColor":"#42A5F5"},{"letter":"S","word":"Surgeon","emoji":"🧑‍⚕️","bgColor":"#2E7D32"},{"letter":"O","word":"Operating Room","emoji":"🏥","bgColor":"#00695C"},{"letter":"B","word":"Blood Test","emoji":"🩸","bgColor":"#D32F2F"},{"letter":"P","word":"Prescription","emoji":"📋","bgColor":"#607D8B"},{"letter":"H","word":"Hand Wash","emoji":"🧼","bgColor":"#42A5F5"},{"letter":"M","word":"Mask","emoji":"😷","bgColor":"#42A5F5"},{"letter":"G","word":"Gloves","emoji":"🧤","bgColor":"#4CAF50"},{"letter":"S","word":"Stretcher","emoji":"🛏️","bgColor":"#607D8B"},{"letter":"V","word":"Vaccine","emoji":"💉","bgColor":"#4CAF50"},{"letter":"C","word":"Cast","emoji":"🦴","bgColor":"#F5F5F5"},{"letter":"R","word":"Recovery Room","emoji":"🛏️","bgColor":"#0288D1"},{"letter":"L","word":"Lab Coat","emoji":"🥼","bgColor":"#F5F5F5"},{"letter":"P","word":"Patient","emoji":"🤒","bgColor":"#FF6F00"},{"letter":"F","word":"First Aid","emoji":"🩹","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 107,
        }}
      />
      <Composition
        id="Hospital3"
        component={AlphabetLongTemplate}
        durationInFrames={4530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 3",
          videoId: "hospital-3",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"I","word":"IV Drip","emoji":"💧","bgColor":"#42A5F5"},{"letter":"K","word":"Kidney","emoji":"🫘","bgColor":"#BF360C"},{"letter":"U","word":"Ultrasound","emoji":"📡","bgColor":"#607D8B"},{"letter":"Z","word":"Zinc Supplement","emoji":"💊","bgColor":"#9E9E9E"},{"letter":"N","word":"Nebulizer","emoji":"💨","bgColor":"#42A5F5"},{"letter":"O","word":"Oxygen Tank","emoji":"🫁","bgColor":"#0288D1"},{"letter":"C","word":"Check Up","emoji":"✅","bgColor":"#4CAF50"},{"letter":"B","word":"Blood Pressure","emoji":"🩸","bgColor":"#D32F2F"},{"letter":"J","word":"Joint","emoji":"🦴","bgColor":"#795548"},{"letter":"Y","word":"Yoga Therapy","emoji":"🧘","bgColor":"#7B1FA2"},{"letter":"P","word":"Pharmacy","emoji":"💊","bgColor":"#2E7D32"},{"letter":"Q","word":"Quarantine","emoji":"🏠","bgColor":"#FF6F00"},{"letter":"R","word":"Rehab","emoji":"🏋️","bgColor":"#1565C0"},{"letter":"S","word":"Scrubs","emoji":"🥼","bgColor":"#00BCD4"},{"letter":"W","word":"Ward","emoji":"🏥","bgColor":"#E91E63"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 151,
        }}
      />
      <Composition
        id="Hospital4"
        component={AlphabetLongTemplate}
        durationInFrames={3270}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 4",
          videoId: "hospital-4",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 109,
        }}
      />
      <Composition
        id="Hospital5"
        component={AlphabetLongTemplate}
        durationInFrames={4620}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 5",
          videoId: "hospital-5",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 154,
        }}
      />
      <Composition
        id="Hospital6"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 6",
          videoId: "hospital-6",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 112,
        }}
      />
      <Composition
        id="Hospital7"
        component={AlphabetLongTemplate}
        durationInFrames={4680}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 7",
          videoId: "hospital-7",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 156,
        }}
      />
      <Composition
        id="Hospital8"
        component={AlphabetLongTemplate}
        durationInFrames={3420}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 8",
          videoId: "hospital-8",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 114,
        }}
      />
      <Composition
        id="Hospital9"
        component={AlphabetLongTemplate}
        durationInFrames={4740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 9",
          videoId: "hospital-9",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 158,
        }}
      />
      <Composition
        id="Hospital10"
        component={AlphabetLongTemplate}
        durationInFrames={3510}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 10",
          videoId: "hospital-10",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 117,
        }}
      />
      <Composition
        id="Hospital11"
        component={AlphabetLongTemplate}
        durationInFrames={4830}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 11",
          videoId: "hospital-11",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 161,
        }}
      />
      <Composition
        id="Hospital12"
        component={AlphabetLongTemplate}
        durationInFrames={3570}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 12",
          videoId: "hospital-12",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 119,
        }}
      />
      <Composition
        id="Hospital13"
        component={AlphabetLongTemplate}
        durationInFrames={4890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 13",
          videoId: "hospital-13",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 163,
        }}
      />
      <Composition
        id="Hospital14"
        component={AlphabetLongTemplate}
        durationInFrames={3630}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 14",
          videoId: "hospital-14",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 121,
        }}
      />
      <Composition
        id="Hospital15"
        component={AlphabetLongTemplate}
        durationInFrames={4980}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 15",
          videoId: "hospital-15",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 166,
        }}
      />
      <Composition
        id="Hospital16"
        component={AlphabetLongTemplate}
        durationInFrames={3720}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 16",
          videoId: "hospital-16",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 124,
        }}
      />
      <Composition
        id="Hospital17"
        component={AlphabetLongTemplate}
        durationInFrames={5040}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 17",
          videoId: "hospital-17",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 168,
        }}
      />
      <Composition
        id="Hospital18"
        component={AlphabetLongTemplate}
        durationInFrames={3780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 18",
          videoId: "hospital-18",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 126,
        }}
      />
      <Composition
        id="Hospital19"
        component={AlphabetLongTemplate}
        durationInFrames={5100}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 19",
          videoId: "hospital-19",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 170,
        }}
      />
      <Composition
        id="Hospital20"
        component={AlphabetLongTemplate}
        durationInFrames={3870}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 20",
          videoId: "hospital-20",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 129,
        }}
      />
      <Composition
        id="Hospital21"
        component={AlphabetLongTemplate}
        durationInFrames={5190}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 21",
          videoId: "hospital-21",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 173,
        }}
      />
      <Composition
        id="Hospital22"
        component={AlphabetLongTemplate}
        durationInFrames={3930}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 22",
          videoId: "hospital-22",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 131,
        }}
      />
      <Composition
        id="Hospital23"
        component={AlphabetLongTemplate}
        durationInFrames={5250}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 23",
          videoId: "hospital-23",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 175,
        }}
      />
      <Composition
        id="Hospital24"
        component={AlphabetLongTemplate}
        durationInFrames={3990}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 24",
          videoId: "hospital-24",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 133,
        }}
      />
      <Composition
        id="Hospital25"
        component={AlphabetLongTemplate}
        durationInFrames={2760}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 25",
          videoId: "hospital-25",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 92,
        }}
      />
      <Composition
        id="Hospital26"
        component={AlphabetLongTemplate}
        durationInFrames={4080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 26",
          videoId: "hospital-26",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 136,
        }}
      />
      <Composition
        id="Hospital27"
        component={AlphabetLongTemplate}
        durationInFrames={2820}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 27",
          videoId: "hospital-27",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 94,
        }}
      />
      <Composition
        id="Hospital28"
        component={AlphabetLongTemplate}
        durationInFrames={4140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 28",
          videoId: "hospital-28",
          bgGradient: ["#E91E63","#F8BBD0"] as [string, string],
          accentColor: "#880E4F",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 138,
        }}
      />
      <Composition
        id="Hospital29"
        component={AlphabetLongTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 29",
          videoId: "hospital-29",
          bgGradient: ["#42A5F5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 96,
        }}
      />
      <Composition
        id="Hospital30"
        component={AlphabetLongTemplate}
        durationInFrames={4200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hospital & Medical - Part 30",
          videoId: "hospital-30",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"D","word":"Doctor","emoji":"👨‍⚕️","bgColor":"#0288D1"},{"letter":"N","word":"Nurse","emoji":"👩‍⚕️","bgColor":"#E91E63"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#D32F2F"},{"letter":"H","word":"Hospital","emoji":"🏥","bgColor":"#E91E63"},{"letter":"S","word":"Stethoscope","emoji":"🩺","bgColor":"#212121"},{"letter":"B","word":"Bandage","emoji":"🩹","bgColor":"#FFB74D"},{"letter":"M","word":"Medicine","emoji":"💊","bgColor":"#D32F2F"},{"letter":"S","word":"Syringe","emoji":"💉","bgColor":"#42A5F5"},{"letter":"T","word":"Thermometer","emoji":"🌡️","bgColor":"#FF6F00"},{"letter":"X","word":"X-Ray","emoji":"🔬","bgColor":"#0D47A1"},{"letter":"H","word":"Heartbeat","emoji":"❤️","bgColor":"#D32F2F"},{"letter":"W","word":"Wheelchair","emoji":"🦽","bgColor":"#607D8B"},{"letter":"C","word":"Crutches","emoji":"🩼","bgColor":"#795548"},{"letter":"E","word":"Eye Chart","emoji":"👁️","bgColor":"#1565C0"},{"letter":"T","word":"Tooth","emoji":"🦷","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 140,
        }}
      />
    </>
  );
};
