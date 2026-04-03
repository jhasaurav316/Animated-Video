import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const VehiclesRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Vehicles1"
        component={AlphabetLongTemplate}
        durationInFrames={5010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 1",
          videoId: "vehicles-1",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 167,
        }}
      />
      <Composition
        id="Vehicles2"
        component={AlphabetLongTemplate}
        durationInFrames={3750}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 2",
          videoId: "vehicles-2",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"P","word":"Police Car","emoji":"🚓","bgColor":"#1565C0"},{"letter":"T","word":"Tractor","emoji":"🚜","bgColor":"#4CAF50"},{"letter":"J","word":"Jet","emoji":"✈️","bgColor":"#455A64"},{"letter":"V","word":"Van","emoji":"🚐","bgColor":"#FF8F00"},{"letter":"L","word":"Limousine","emoji":"🚙","bgColor":"#212121"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"C","word":"Canoe","emoji":"🛶","bgColor":"#5D4037"},{"letter":"F","word":"Ferry","emoji":"⛴️","bgColor":"#0288D1"},{"letter":"G","word":"Go-Kart","emoji":"🏎️","bgColor":"#D32F2F"},{"letter":"H","word":"Hot Air Balloon","emoji":"🎈","bgColor":"#FF5722"},{"letter":"S","word":"Sailboat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"D","word":"Dump Truck","emoji":"🚚","bgColor":"#FF8F00"},{"letter":"E","word":"Excavator","emoji":"🏗️","bgColor":"#FDD835"},{"letter":"C","word":"Crane","emoji":"🏗️","bgColor":"#FFB300"},{"letter":"B","word":"Bulldozer","emoji":"🚜","bgColor":"#FF6F00"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 125,
        }}
      />
      <Composition
        id="Vehicles3"
        component={AlphabetLongTemplate}
        durationInFrames={5070}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 3",
          videoId: "vehicles-3",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Spaceship","emoji":"🛸","bgColor":"#7B1FA2"},{"letter":"R","word":"Rickshaw","emoji":"🛺","bgColor":"#4CAF50"},{"letter":"T","word":"Trolley","emoji":"🚃","bgColor":"#D32F2F"},{"letter":"W","word":"Wagon","emoji":"🚗","bgColor":"#795548"},{"letter":"Z","word":"Zeppelin","emoji":"🎈","bgColor":"#607D8B"},{"letter":"S","word":"Snowmobile","emoji":"🛷","bgColor":"#00BCD4"},{"letter":"K","word":"Kayak","emoji":"🛶","bgColor":"#FF6F00"},{"letter":"M","word":"Moped","emoji":"🛵","bgColor":"#E91E63"},{"letter":"P","word":"Paraglider","emoji":"🪂","bgColor":"#4CAF50"},{"letter":"S","word":"Segway","emoji":"🛴","bgColor":"#607D8B"},{"letter":"U","word":"Unicycle","emoji":"🚲","bgColor":"#D32F2F"},{"letter":"H","word":"Hovercraft","emoji":"🚤","bgColor":"#0288D1"},{"letter":"C","word":"Cable Car","emoji":"🚡","bgColor":"#D32F2F"},{"letter":"D","word":"Dogsled","emoji":"🛷","bgColor":"#5D4037"},{"letter":"M","word":"Monorail","emoji":"🚝","bgColor":"#4527A0"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 169,
        }}
      />
      <Composition
        id="Vehicles4"
        component={AlphabetLongTemplate}
        durationInFrames={3840}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 4",
          videoId: "vehicles-4",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 128,
        }}
      />
      <Composition
        id="Vehicles5"
        component={AlphabetLongTemplate}
        durationInFrames={5160}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 5",
          videoId: "vehicles-5",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 172,
        }}
      />
      <Composition
        id="Vehicles6"
        component={AlphabetLongTemplate}
        durationInFrames={3900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 6",
          videoId: "vehicles-6",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 130,
        }}
      />
      <Composition
        id="Vehicles7"
        component={AlphabetLongTemplate}
        durationInFrames={5220}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 7",
          videoId: "vehicles-7",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 174,
        }}
      />
      <Composition
        id="Vehicles8"
        component={AlphabetLongTemplate}
        durationInFrames={3960}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 8",
          videoId: "vehicles-8",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 132,
        }}
      />
      <Composition
        id="Vehicles9"
        component={AlphabetLongTemplate}
        durationInFrames={2700}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 9",
          videoId: "vehicles-9",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 90,
        }}
      />
      <Composition
        id="Vehicles10"
        component={AlphabetLongTemplate}
        durationInFrames={4050}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 10",
          videoId: "vehicles-10",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 135,
        }}
      />
      <Composition
        id="Vehicles11"
        component={AlphabetLongTemplate}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 11",
          videoId: "vehicles-11",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 93,
        }}
      />
      <Composition
        id="Vehicles12"
        component={AlphabetLongTemplate}
        durationInFrames={4110}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 12",
          videoId: "vehicles-12",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 137,
        }}
      />
      <Composition
        id="Vehicles13"
        component={AlphabetLongTemplate}
        durationInFrames={2850}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 13",
          videoId: "vehicles-13",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 95,
        }}
      />
      <Composition
        id="Vehicles14"
        component={AlphabetLongTemplate}
        durationInFrames={4170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 14",
          videoId: "vehicles-14",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 139,
        }}
      />
      <Composition
        id="Vehicles15"
        component={AlphabetLongTemplate}
        durationInFrames={2940}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 15",
          videoId: "vehicles-15",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 98,
        }}
      />
      <Composition
        id="Vehicles16"
        component={AlphabetLongTemplate}
        durationInFrames={4260}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 16",
          videoId: "vehicles-16",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 142,
        }}
      />
      <Composition
        id="Vehicles17"
        component={AlphabetLongTemplate}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 17",
          videoId: "vehicles-17",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 100,
        }}
      />
      <Composition
        id="Vehicles18"
        component={AlphabetLongTemplate}
        durationInFrames={4320}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 18",
          videoId: "vehicles-18",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 144,
        }}
      />
      <Composition
        id="Vehicles19"
        component={AlphabetLongTemplate}
        durationInFrames={3060}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 19",
          videoId: "vehicles-19",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 102,
        }}
      />
      <Composition
        id="Vehicles20"
        component={AlphabetLongTemplate}
        durationInFrames={4410}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 20",
          videoId: "vehicles-20",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 147,
        }}
      />
      <Composition
        id="Vehicles21"
        component={AlphabetLongTemplate}
        durationInFrames={3150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 21",
          videoId: "vehicles-21",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 105,
        }}
      />
      <Composition
        id="Vehicles22"
        component={AlphabetLongTemplate}
        durationInFrames={4470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 22",
          videoId: "vehicles-22",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 149,
        }}
      />
      <Composition
        id="Vehicles23"
        component={AlphabetLongTemplate}
        durationInFrames={3210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 23",
          videoId: "vehicles-23",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 107,
        }}
      />
      <Composition
        id="Vehicles24"
        component={AlphabetLongTemplate}
        durationInFrames={4530}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 24",
          videoId: "vehicles-24",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 151,
        }}
      />
      <Composition
        id="Vehicles25"
        component={AlphabetLongTemplate}
        durationInFrames={3300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 25",
          videoId: "vehicles-25",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 110,
        }}
      />
      <Composition
        id="Vehicles26"
        component={AlphabetLongTemplate}
        durationInFrames={4620}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 26",
          videoId: "vehicles-26",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 154,
        }}
      />
      <Composition
        id="Vehicles27"
        component={AlphabetLongTemplate}
        durationInFrames={3360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 27",
          videoId: "vehicles-27",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 112,
        }}
      />
      <Composition
        id="Vehicles28"
        component={AlphabetLongTemplate}
        durationInFrames={4680}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 28",
          videoId: "vehicles-28",
          bgGradient: ["#1565C0","#90CAF9"] as [string, string],
          accentColor: "#0D47A1",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 156,
        }}
      />
      <Composition
        id="Vehicles29"
        component={AlphabetLongTemplate}
        durationInFrames={3420}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 29",
          videoId: "vehicles-29",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 114,
        }}
      />
      <Composition
        id="Vehicles30"
        component={AlphabetLongTemplate}
        durationInFrames={4770}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vehicles - Part 30",
          videoId: "vehicles-30",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"C","word":"Car","emoji":"🚗","bgColor":"#D32F2F"},{"letter":"B","word":"Bus","emoji":"🚌","bgColor":"#FDD835"},{"letter":"T","word":"Train","emoji":"🚂","bgColor":"#5D4037"},{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"H","word":"Helicopter","emoji":"🚁","bgColor":"#2E7D32"},{"letter":"B","word":"Boat","emoji":"⛵","bgColor":"#1565C0"},{"letter":"S","word":"Ship","emoji":"🚢","bgColor":"#0D47A1"},{"letter":"R","word":"Rocket","emoji":"🚀","bgColor":"#FF5722"},{"letter":"T","word":"Truck","emoji":"🚛","bgColor":"#FF6F00"},{"letter":"M","word":"Motorcycle","emoji":"🏍️","bgColor":"#212121"},{"letter":"B","word":"Bicycle","emoji":"🚲","bgColor":"#4CAF50"},{"letter":"S","word":"Scooter","emoji":"🛴","bgColor":"#00BCD4"},{"letter":"S","word":"Submarine","emoji":"🚇","bgColor":"#37474F"},{"letter":"F","word":"Fire Truck","emoji":"🚒","bgColor":"#D32F2F"},{"letter":"A","word":"Ambulance","emoji":"🚑","bgColor":"#F5F5F5"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 159,
        }}
      />
    </>
  );
};
