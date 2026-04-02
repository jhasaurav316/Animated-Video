import "./index.css";
import { Composition } from "remotion";
import { AlphabetLongTemplate } from "./AlphabetLongTemplate";
import type { AlphabetLongProps } from "./AlphabetLongTemplate";
import React from "react";

export const AirportRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Airport1"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 1",
          videoId: "airport-1",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport2"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 2",
          videoId: "airport-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"W","word":"Wing","emoji":"🦅","bgColor":"#B0BEC5"},{"letter":"C","word":"Cockpit","emoji":"🎛️","bgColor":"#212121"},{"letter":"T","word":"Terminal","emoji":"🏢","bgColor":"#455A64"},{"letter":"D","word":"Departure","emoji":"🛫","bgColor":"#0288D1"},{"letter":"A","word":"Arrival","emoji":"🛬","bgColor":"#4CAF50"},{"letter":"B","word":"Baggage Claim","emoji":"🧳","bgColor":"#795548"},{"letter":"D","word":"Duty Free","emoji":"🛍️","bgColor":"#E91E63"},{"letter":"L","word":"Lounge","emoji":"🛋️","bgColor":"#7B1FA2"},{"letter":"M","word":"Map","emoji":"🗺️","bgColor":"#4CAF50"},{"letter":"T","word":"Trolley","emoji":"🛒","bgColor":"#607D8B"},{"letter":"I","word":"Immigration","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"V","word":"Visa","emoji":"📄","bgColor":"#455A64"},{"letter":"H","word":"Hotel","emoji":"🏨","bgColor":"#7B1FA2"},{"letter":"T","word":"Taxi","emoji":"🚕","bgColor":"#FDD835"},{"letter":"C","word":"Car Rental","emoji":"🚗","bgColor":"#D32F2F"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport3"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 3",
          videoId: "airport-3",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"S","word":"Souvenir","emoji":"🎁","bgColor":"#FF6F00"},{"letter":"P","word":"Postcard","emoji":"📮","bgColor":"#E91E63"},{"letter":"C","word":"Camera","emoji":"📷","bgColor":"#212121"},{"letter":"F","word":"First Class","emoji":"💺","bgColor":"#FFB300"},{"letter":"E","word":"Economy Class","emoji":"💺","bgColor":"#607D8B"},{"letter":"U","word":"Upgrade","emoji":"⬆️","bgColor":"#4CAF50"},{"letter":"N","word":"Night Flight","emoji":"🌙","bgColor":"#311B92"},{"letter":"O","word":"Overhead Bin","emoji":"📦","bgColor":"#795548"},{"letter":"K","word":"Kiosk","emoji":"🖥️","bgColor":"#455A64"},{"letter":"R","word":"Radar","emoji":"📡","bgColor":"#0288D1"},{"letter":"Z","word":"Zone Boarding","emoji":"🔢","bgColor":"#607D8B"},{"letter":"W","word":"Waiting Area","emoji":"🪑","bgColor":"#455A64"},{"letter":"G","word":"Globe Trotter","emoji":"🌍","bgColor":"#2E7D32"},{"letter":"X","word":"X-Ray Scanner","emoji":"🔬","bgColor":"#37474F"},{"letter":"Y","word":"Yacht Port","emoji":"🛥️","bgColor":"#0288D1"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport4"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 4",
          videoId: "airport-4",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport5"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 5",
          videoId: "airport-5",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport6"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 6",
          videoId: "airport-6",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport7"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 7",
          videoId: "airport-7",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport8"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 8",
          videoId: "airport-8",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport9"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 9",
          videoId: "airport-9",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport10"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 10",
          videoId: "airport-10",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport11"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 11",
          videoId: "airport-11",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport12"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 12",
          videoId: "airport-12",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport13"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 13",
          videoId: "airport-13",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport14"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 14",
          videoId: "airport-14",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport15"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 15",
          videoId: "airport-15",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport16"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 16",
          videoId: "airport-16",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport17"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 17",
          videoId: "airport-17",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport18"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 18",
          videoId: "airport-18",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport19"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 19",
          videoId: "airport-19",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport20"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 20",
          videoId: "airport-20",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport21"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 21",
          videoId: "airport-21",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport22"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 22",
          videoId: "airport-22",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport23"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 23",
          videoId: "airport-23",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport24"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 24",
          videoId: "airport-24",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport25"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 25",
          videoId: "airport-25",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport26"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 26",
          videoId: "airport-26",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport27"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 27",
          videoId: "airport-27",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport28"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 28",
          videoId: "airport-28",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport29"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 29",
          videoId: "airport-29",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#263238",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
      <Composition
        id="Airport30"
        component={AlphabetLongTemplate}
        durationInFrames={4950}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Airport & Travel - Part 30",
          videoId: "airport-30",
          bgGradient: ["#FF8F00","#FFE082"] as [string, string],
          accentColor: "#E65100",
          letters: [{"letter":"A","word":"Airplane","emoji":"✈️","bgColor":"#0288D1"},{"letter":"P","word":"Passport","emoji":"🛂","bgColor":"#0D47A1"},{"letter":"S","word":"Suitcase","emoji":"🧳","bgColor":"#795548"},{"letter":"T","word":"Ticket","emoji":"🎫","bgColor":"#FF6F00"},{"letter":"G","word":"Gate","emoji":"🚪","bgColor":"#455A64"},{"letter":"R","word":"Runway","emoji":"🛫","bgColor":"#37474F"},{"letter":"C","word":"Control Tower","emoji":"🗼","bgColor":"#607D8B"},{"letter":"B","word":"Boarding Pass","emoji":"🎟️","bgColor":"#1565C0"},{"letter":"L","word":"Luggage","emoji":"🧳","bgColor":"#5D4037"},{"letter":"P","word":"Pilot","emoji":"👨‍✈️","bgColor":"#212121"},{"letter":"F","word":"Flight Attendant","emoji":"🧑‍✈️","bgColor":"#E91E63"},{"letter":"S","word":"Security","emoji":"🛡️","bgColor":"#D32F2F"},{"letter":"C","word":"Customs","emoji":"🛃","bgColor":"#2E7D32"},{"letter":"H","word":"Hangar","emoji":"🏗️","bgColor":"#455A64"},{"letter":"J","word":"Jet Engine","emoji":"⚙️","bgColor":"#607D8B"}],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
          targetDuration: 165,
        }}
      />
    </>
  );
};
