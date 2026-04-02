import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const TransportationRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Transportation1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 1",
          videoId: "transportation-1",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 2",
          videoId: "transportation-2",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"R","word":"Rickshaw","emoji":"🛺","bgColor":"#4CAF50"},{"letter":"S","word":"Sailboat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Skateboard","emoji":"🛹","bgColor":"#FF6F00"},{"letter":"W","word":"Wagon","emoji":"🚗","bgColor":"#795548"},{"letter":"J","word":"Jet","emoji":"✈️","bgColor":"#455A64"},{"letter":"G","word":"Glider","emoji":"🪂","bgColor":"#00BCD4"},{"letter":"H","word":"Hot Air Balloon","emoji":"🎈","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"V","word":"Van","emoji":"🚐","bgColor":"#FF8F00"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"},{"letter":"F","word":"Fire Engine","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"P","word":"Police Car","emoji":"🚓","bgColor":"#1565C0"},{"letter":"D","word":"Dump Truck","emoji":"🚚","bgColor":"#FF8F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 3",
          videoId: "transportation-3",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"B","word":"Bulldozer","emoji":"🚜","bgColor":"#FF6F00"},{"letter":"C","word":"Crane","emoji":"🏗️","bgColor":"#FFB300"},{"letter":"E","word":"Excavator","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"L","word":"Limousine","emoji":"🚙","bgColor":"#212121"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"S","word":"Segway","emoji":"🛴","bgColor":"#607D8B"},{"letter":"Z","word":"Zeppelin","emoji":"🎈","bgColor":"#607D8B"},{"letter":"U","word":"Unicycle","emoji":"🚲","bgColor":"#D32F2F"},{"letter":"P","word":"Paraglider","emoji":"🪂","bgColor":"#4CAF50"},{"letter":"H","word":"Hovercraft","emoji":"🚤","bgColor":"#0288D1"},{"letter":"M","word":"Monorail","emoji":"🚝","bgColor":"#4527A0"},{"letter":"S","word":"Speedboat","emoji":"🚤","bgColor":"#1565C0"},{"letter":"T","word":"Trolley","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"G","word":"Go-Kart","emoji":"🏎️","bgColor":"#D32F2F"},{"letter":"D","word":"Dogsled","emoji":"🛷","bgColor":"#5D4037"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 4",
          videoId: "transportation-4",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 5",
          videoId: "transportation-5",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 6",
          videoId: "transportation-6",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 7",
          videoId: "transportation-7",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 8",
          videoId: "transportation-8",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 9",
          videoId: "transportation-9",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 10",
          videoId: "transportation-10",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 11",
          videoId: "transportation-11",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 12",
          videoId: "transportation-12",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 13",
          videoId: "transportation-13",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 14",
          videoId: "transportation-14",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 15",
          videoId: "transportation-15",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 16",
          videoId: "transportation-16",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 17",
          videoId: "transportation-17",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 18",
          videoId: "transportation-18",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 19",
          videoId: "transportation-19",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 20",
          videoId: "transportation-20",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 21",
          videoId: "transportation-21",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 22",
          videoId: "transportation-22",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 23",
          videoId: "transportation-23",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 24",
          videoId: "transportation-24",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 25",
          videoId: "transportation-25",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 26",
          videoId: "transportation-26",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 27",
          videoId: "transportation-27",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 28",
          videoId: "transportation-28",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 29",
          videoId: "transportation-29",
          bgGradient: ["#FF6F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Transportation30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Transportation - Part 30",
          videoId: "transportation-30",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"T","word":"Tram","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"M","word":"Metro","emoji":"🚇","bgColor":"#455A64"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
