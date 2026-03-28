import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import React from "react";

export const HindiKidsRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HindiKidsHindiSwarFruits"
        component={AlphabetShortsTemplate}
        durationInFrames={1650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी स्वर - फल",
          videoId: "hindi-swar-fruits",
          bgGradient: ["#FF9933","#FFD700"] as [string, string],
          accentColor: "#FF6600",
          connectorWord: "से",
          subtitleText: "आओ सीखें!",
          letters: [{"letter":"अ","word":"अनार","emoji":"🍎","bgColor":"#DC143C"},{"letter":"आ","word":"आम","emoji":"🥭","bgColor":"#FF8C00"},{"letter":"इ","word":"इमली","emoji":"🍋","bgColor":"#8B4513"},{"letter":"ई","word":"ईख","emoji":"🌸","bgColor":"#228B22"},{"letter":"उ","word":"उल्लू","emoji":"🦉","bgColor":"#8B4513"},{"letter":"ऊ","word":"ऊन","emoji":"🎵","bgColor":"#4169E1"},{"letter":"ए","word":"एकतारा","emoji":"🎸","bgColor":"#8B4513"},{"letter":"ऐ","word":"ऐनक","emoji":"👓","bgColor":"#2F4F4F"},{"letter":"ओ","word":"ओस","emoji":"💧","bgColor":"#4682B4"},{"letter":"औ","word":"औरत","emoji":"💊","bgColor":"#DC143C"},{"letter":"अं","word":"अंगूर","emoji":"🍇","bgColor":"#800080"},{"letter":"अः","word":"अः (विसर्ग)","emoji":"💫","bgColor":"#FFD700"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiVyanjan1"
        component={AlphabetShortsTemplate}
        durationInFrames={2010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी व्यंजन - भाग 1",
          videoId: "hindi-vyanjan-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          connectorWord: "से",
          subtitleText: "आओ सीखें!",
          letters: [{"letter":"क","word":"कबूतर","emoji":"🐦","bgColor":"#808080"},{"letter":"ख","word":"खरगोश","emoji":"🐰","bgColor":"#F5F5F5"},{"letter":"ग","word":"गाय","emoji":"🐄","bgColor":"#F5DEB3"},{"letter":"घ","word":"घड़ी","emoji":"⌚","bgColor":"#C0C0C0"},{"letter":"ङ","word":"ङ (अंग)","emoji":"💫","bgColor":"#FFD700"},{"letter":"च","word":"चम्मच","emoji":"🪤","bgColor":"#DEB887"},{"letter":"छ","word":"छतरी","emoji":"☂️","bgColor":"#4169E1"},{"letter":"ज","word":"जहाज़","emoji":"✈️","bgColor":"#4682B4"},{"letter":"झ","word":"झरना","emoji":"🌊","bgColor":"#00CED1"},{"letter":"ञ","word":"ञान","emoji":"📚","bgColor":"#8B4513"},{"letter":"ट","word":"टमाटर","emoji":"🍅","bgColor":"#FF0000"},{"letter":"ठ","word":"ठेला","emoji":"🚎","bgColor":"#4682B4"},{"letter":"ड","word":"डमरू","emoji":"🥁","bgColor":"#8B4513"},{"letter":"ढ","word":"ढोलक","emoji":"🥁","bgColor":"#CD853F"},{"letter":"ण","word":"ण (मूर्धन्य)","emoji":"💫","bgColor":"#FFD700"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiVyanjan2"
        component={AlphabetShortsTemplate}
        durationInFrames={1890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी व्यंजन - भाग 2",
          videoId: "hindi-vyanjan-2",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          connectorWord: "से",
          subtitleText: "आओ सीखें!",
          letters: [{"letter":"त","word":"तोता","emoji":"🦜","bgColor":"#32CD32"},{"letter":"थ","word":"थैली","emoji":"👜","bgColor":"#FF69B4"},{"letter":"द","word":"दरवाज़ा","emoji":"🚪","bgColor":"#8B4513"},{"letter":"ध","word":"धनुष","emoji":"🏹","bgColor":"#DAA520"},{"letter":"न","word":"नल","emoji":"🚰","bgColor":"#4682B4"},{"letter":"प","word":"पतंग","emoji":"🪁","bgColor":"#FF6347"},{"letter":"फ","word":"फूल","emoji":"🌺","bgColor":"#FF69B4"},{"letter":"ब","word":"बंदर","emoji":"🐒","bgColor":"#8B4513"},{"letter":"भ","word":"भालू","emoji":"🐻","bgColor":"#8B4513"},{"letter":"म","word":"मोर","emoji":"🦚","bgColor":"#228B22"},{"letter":"य","word":"याक","emoji":"🐂","bgColor":"#4A2C2A"},{"letter":"र","word":"राजा","emoji":"🤴","bgColor":"#FFD700"},{"letter":"ल","word":"लड्डू","emoji":"🍬","bgColor":"#FFD700"},{"letter":"व","word":"वायुयान","emoji":"✈️","bgColor":"#87CEEB"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiVyanjan3"
        component={AlphabetShortsTemplate}
        durationInFrames={1170}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी व्यंजन - भाग 3",
          videoId: "hindi-vyanjan-3",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          connectorWord: "से",
          subtitleText: "आओ सीखें!",
          letters: [{"letter":"श","word":"शेर","emoji":"🦁","bgColor":"#FF8C00"},{"letter":"ष","word":"षट्कोण","emoji":"⬡","bgColor":"#4169E1"},{"letter":"स","word":"सेब","emoji":"🍎","bgColor":"#DC143C"},{"letter":"ह","word":"हाथी","emoji":"🐘","bgColor":"#708090"},{"letter":"क्ष","word":"क्षत्रिय","emoji":"⚔️","bgColor":"#C0C0C0"},{"letter":"त्र","word":"त्रिशूल","emoji":"🔱","bgColor":"#4169E1"},{"letter":"ज्ञ","word":"ज्ञान","emoji":"📚","bgColor":"#8B4513"},{"letter":"श्र","word":"श्रीमान","emoji":"🙏","bgColor":"#FFD700"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiFruits1"
        component={AlphabetShortsTemplate}
        durationInFrames={2130}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी फलों के नाम",
          videoId: "hindi-fruits-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          connectorWord: "से",
          subtitleText: "फल सीखो!",
          letters: [{"letter":"अ","word":"अनार","emoji":"🍎","bgColor":"#DC143C"},{"letter":"आ","word":"आम","emoji":"🥭","bgColor":"#FF8C00"},{"letter":"इ","word":"इमली","emoji":"🍋","bgColor":"#8B4513"},{"letter":"क","word":"केला","emoji":"🍌","bgColor":"#FFD700"},{"letter":"ख","word":"खरबूजा","emoji":"🍈","bgColor":"#F4A460"},{"letter":"ग","word":"गन्ना","emoji":"🌶️","bgColor":"#228B22"},{"letter":"च","word":"चीकू","emoji":"🍈","bgColor":"#8B4513"},{"letter":"ज","word":"जामुन","emoji":"🫐","bgColor":"#191970"},{"letter":"त","word":"तरबूज़","emoji":"🍉","bgColor":"#FF6347"},{"letter":"न","word":"नारियल","emoji":"🍊","bgColor":"#FF8C00"},{"letter":"प","word":"पपीता","emoji":"🍈","bgColor":"#FF6347"},{"letter":"ब","word":"बेर","emoji":"🍒","bgColor":"#8B0000"},{"letter":"म","word":"मौसमी","emoji":"🍈","bgColor":"#F4A460"},{"letter":"ल","word":"लीची","emoji":"🍒","bgColor":"#FF6347"},{"letter":"स","word":"संतरा","emoji":"🍊","bgColor":"#FF8C00"},{"letter":"अं","word":"अंगूर","emoji":"🍇","bgColor":"#800080"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiAnimals1"
        component={AlphabetShortsTemplate}
        durationInFrames={2010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी जानवरों के नाम",
          videoId: "hindi-animals-1",
          bgGradient: ["#134E5E","#71B280"] as [string, string],
          accentColor: "#1B5E20",
          connectorWord: "से",
          subtitleText: "जानवर सीखो!",
          letters: [{"letter":"क","word":"कुत्ता","emoji":"🐶","bgColor":"#DAA520"},{"letter":"ख","word":"खरगोश","emoji":"🐰","bgColor":"#F5F5F5"},{"letter":"ग","word":"गाय","emoji":"🐄","bgColor":"#F5DEB3"},{"letter":"घ","word":"घोड़ा","emoji":"🐎","bgColor":"#8B4513"},{"letter":"च","word":"चीता","emoji":"🦌","bgColor":"#CD853F"},{"letter":"ज","word":"जिराफ़","emoji":"🦒","bgColor":"#F4A460"},{"letter":"त","word":"तोता","emoji":"🦜","bgColor":"#32CD32"},{"letter":"ब","word":"बिल्ली","emoji":"🐱","bgColor":"#FF8C00"},{"letter":"भ","word":"भालू","emoji":"🐻","bgColor":"#8B4513"},{"letter":"म","word":"मोर","emoji":"🦚","bgColor":"#006400"},{"letter":"श","word":"शेर","emoji":"🦁","bgColor":"#FF8C00"},{"letter":"स","word":"साँप","emoji":"🐍","bgColor":"#228B22"},{"letter":"ह","word":"हाथी","emoji":"🐘","bgColor":"#708090"},{"letter":"बं","word":"बंदर","emoji":"🐒","bgColor":"#8B6914"},{"letter":"मो","word":"मोरगी","emoji":"🐔","bgColor":"#DC143C"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiVegetables1"
        component={AlphabetShortsTemplate}
        durationInFrames={2010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी सब्जियों के नाम",
          videoId: "hindi-vegetables-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          connectorWord: "से",
          subtitleText: "सब्ज़ी सीखो!",
          letters: [{"letter":"आ","word":"आलू","emoji":"🥔","bgColor":"#DEB887"},{"letter":"ब","word":"बैंगन","emoji":"🍆","bgColor":"#800080"},{"letter":"ग","word":"गाजर","emoji":"🥕","bgColor":"#FF8C00"},{"letter":"घ","word":"घीया","emoji":"🧈","bgColor":"#DAA520"},{"letter":"ट","word":"टमाटर","emoji":"🍅","bgColor":"#FF0000"},{"letter":"प","word":"पालक","emoji":"🥬","bgColor":"#006400"},{"letter":"फ","word":"फूलगोभी","emoji":"🥦","bgColor":"#F5F5F5"},{"letter":"भ","word":"भिंडी","emoji":"🥒","bgColor":"#228B22"},{"letter":"म","word":"मटर","emoji":"🫑","bgColor":"#228B22"},{"letter":"ल","word":"लौकी","emoji":"🥒","bgColor":"#98FB98"},{"letter":"श","word":"शलगम","emoji":"🥒","bgColor":"#228B22"},{"letter":"स","word":"सेम","emoji":"🍏","bgColor":"#228B22"},{"letter":"क","word":"कद्दू","emoji":"🎃","bgColor":"#FF8C00"},{"letter":"च","word":"चुकंदर","emoji":"🥕","bgColor":"#DEB887"},{"letter":"मू","word":"मूली","emoji":"🥕","bgColor":"#F5F5F5"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={1890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी पक्षियों के नाम",
          videoId: "hindi-birds-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#0077B6",
          connectorWord: "से",
          subtitleText: "पक्षी सीखो!",
          letters: [{"letter":"क","word":"कौआ","emoji":"🐦","bgColor":"#1C1C1C"},{"letter":"ग","word":"गौरैया","emoji":"🐦","bgColor":"#808080"},{"letter":"च","word":"चक्रवाक","emoji":"🪶","bgColor":"#8B4513"},{"letter":"त","word":"तोता","emoji":"🦜","bgColor":"#32CD32"},{"letter":"म","word":"मोर","emoji":"🦚","bgColor":"#006400"},{"letter":"ब","word":"बुलबुल","emoji":"🐦","bgColor":"#8B6914"},{"letter":"को","word":"कोयल","emoji":"🐦","bgColor":"#1C1C1C"},{"letter":"गि","word":"गिद्ध","emoji":"🦅","bgColor":"#8B6914"},{"letter":"ह","word":"हंस","emoji":"🦢","bgColor":"#F5F5F5"},{"letter":"उ","word":"उल्लू","emoji":"🦉","bgColor":"#8B4513"},{"letter":"बट","word":"बटेर","emoji":"🪶","bgColor":"#DEB887"},{"letter":"ती","word":"तीतर","emoji":"🐦","bgColor":"#DC143C"},{"letter":"मै","word":"मैना","emoji":"🐦","bgColor":"#8B6914"},{"letter":"सा","word":"सारस","emoji":"🦩","bgColor":"#FF69B4"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiColors1"
        component={AlphabetShortsTemplate}
        durationInFrames={1650}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी रंगों के नाम",
          videoId: "hindi-colors-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          connectorWord: "से",
          subtitleText: "रंग सीखो!",
          letters: [{"letter":"ला","word":"लाल","emoji":"🔴","bgColor":"#FF0000"},{"letter":"नी","word":"नीला","emoji":"🔵","bgColor":"#4169E1"},{"letter":"ह","word":"हरा","emoji":"🟢","bgColor":"#228B22"},{"letter":"पी","word":"पीला","emoji":"🟡","bgColor":"#FFD700"},{"letter":"सफ","word":"सफेद","emoji":"⬜","bgColor":"#F5F5F5"},{"letter":"का","word":"काला","emoji":"⬛","bgColor":"#1C1C1C"},{"letter":"ना","word":"नारंगी","emoji":"🟠","bgColor":"#FF8C00"},{"letter":"गु","word":"गुलाबी","emoji":"🟣","bgColor":"#FF69B4"},{"letter":"बै","word":"बैंगनी","emoji":"🟣","bgColor":"#800080"},{"letter":"भू","word":"भूरा","emoji":"🟤","bgColor":"#808080"},{"letter":"सु","word":"सुनहरा","emoji":"🟡","bgColor":"#FFD700"},{"letter":"आस","word":"आसमानी","emoji":"🔵","bgColor":"#87CEEB"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiBody1"
        component={AlphabetShortsTemplate}
        durationInFrames={1890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी शरीर के अंग",
          videoId: "hindi-body-1",
          bgGradient: ["#E44D26","#F16529"] as [string, string],
          accentColor: "#E74C3C",
          connectorWord: "से",
          subtitleText: "शरीर सीखो!",
          letters: [{"letter":"आँ","word":"आँख","emoji":"👁️","bgColor":"#4169E1"},{"letter":"क","word":"कान","emoji":"👂","bgColor":"#DEB887"},{"letter":"ग","word":"गर्दन","emoji":"🧑","bgColor":"#DEB887"},{"letter":"न","word":"नाक","emoji":"👃","bgColor":"#DEB887"},{"letter":"मु","word":"मुँह","emoji":"👄","bgColor":"#DC143C"},{"letter":"ह","word":"हाथ","emoji":"✋","bgColor":"#DEB887"},{"letter":"पै","word":"पैर","emoji":"🦶","bgColor":"#DEB887"},{"letter":"सि","word":"सिर","emoji":"😀","bgColor":"#FFD700"},{"letter":"पे","word":"पेट","emoji":"🪴","bgColor":"#FF6347"},{"letter":"दाँ","word":"दाँत","emoji":"🦷","bgColor":"#F5F5F5"},{"letter":"उं","word":"उंगली","emoji":"☝️","bgColor":"#DEB887"},{"letter":"घु","word":"घुटना","emoji":"🧎","bgColor":"#DEB887"},{"letter":"कं","word":"कंधा","emoji":"🦴","bgColor":"#DEB887"},{"letter":"छा","word":"छाती","emoji":"🫸","bgColor":"#DEB887"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiNumbers1"
        component={AlphabetShortsTemplate}
        durationInFrames={2130}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी गिनती 1-20",
          videoId: "hindi-numbers-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          connectorWord: "-",
          subtitleText: "गिनती सीखो!",
          letters: [{"letter":"१","word":"एक","emoji":"1️⃣","bgColor":"#DC143C"},{"letter":"२","word":"दो","emoji":"2️⃣","bgColor":"#FF8C00"},{"letter":"३","word":"तीन","emoji":"3️⃣","bgColor":"#FFD700"},{"letter":"४","word":"चार","emoji":"4️⃣","bgColor":"#228B22"},{"letter":"५","word":"पाँच","emoji":"5️⃣","bgColor":"#4169E1"},{"letter":"६","word":"छः","emoji":"6️⃣","bgColor":"#8B008B"},{"letter":"७","word":"सात","emoji":"7️⃣","bgColor":"#FF69B4"},{"letter":"८","word":"आठ","emoji":"8️⃣","bgColor":"#00CED1"},{"letter":"९","word":"नौ","emoji":"9️⃣","bgColor":"#FF4500"},{"letter":"१०","word":"दस","emoji":"🔟","bgColor":"#DAA520"},{"letter":"११","word":"ग्यारह","emoji":"🎯","bgColor":"#DC143C"},{"letter":"१२","word":"बारह","emoji":"🌟","bgColor":"#FFD700"},{"letter":"१३","word":"तेरह","emoji":"🔢","bgColor":"#4169E1"},{"letter":"१४","word":"चौदह","emoji":"🔢","bgColor":"#228B22"},{"letter":"१५","word":"पंद्रह","emoji":"🔢","bgColor":"#8B008B"},{"letter":"२०","word":"बीस","emoji":"🔢","bgColor":"#FF8C00"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiVehicles1"
        component={AlphabetShortsTemplate}
        durationInFrames={2010}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी वाहनों के नाम",
          videoId: "hindi-vehicles-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          connectorWord: "से",
          subtitleText: "वाहन सीखो!",
          letters: [{"letter":"क","word":"कार","emoji":"🚗","bgColor":"#DC143C"},{"letter":"ब","word":"बस","emoji":"🚌","bgColor":"#FFD700"},{"letter":"र","word":"रिक्शा","emoji":"🛺","bgColor":"#32CD32"},{"letter":"ट्र","word":"ट्रेन","emoji":"🚂","bgColor":"#4682B4"},{"letter":"ह","word":"हवाई जहाज़","emoji":"✈️","bgColor":"#87CEEB"},{"letter":"सा","word":"साइकिल","emoji":"🚲","bgColor":"#4169E1"},{"letter":"मो","word":"मोटरसाइकिल","emoji":"🏍️","bgColor":"#1C1C1C"},{"letter":"ज","word":"जहाज़","emoji":"🚢","bgColor":"#4682B4"},{"letter":"ना","word":"नाव","emoji":"⛵","bgColor":"#4169E1"},{"letter":"रॉ","word":"रॉकेट","emoji":"🚀","bgColor":"#FF4500"},{"letter":"ट्रक","word":"ट्रक","emoji":"🚛","bgColor":"#DAA520"},{"letter":"हे","word":"हेलिकॉप्टर","emoji":"🚁","bgColor":"#4682B4"},{"letter":"स्कू","word":"स्कूटर","emoji":"🛵","bgColor":"#4682B4"},{"letter":"टै","word":"टैक्सी","emoji":"🚕","bgColor":"#FFD700"},{"letter":"मे","word":"मेट्रो","emoji":"🚇","bgColor":"#4169E1"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiFlowers1"
        component={AlphabetShortsTemplate}
        durationInFrames={1890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी फूलों के नाम",
          videoId: "hindi-flowers-1",
          bgGradient: ["#ED4264","#FFEDBC"] as [string, string],
          accentColor: "#C0392B",
          connectorWord: "से",
          subtitleText: "फूल सीखो!",
          letters: [{"letter":"गु","word":"गुलाब","emoji":"🌹","bgColor":"#DC143C"},{"letter":"क","word":"कमल","emoji":"🪷","bgColor":"#FF69B4"},{"letter":"गे","word":"गेंदा","emoji":"🌼","bgColor":"#FF8C00"},{"letter":"चम","word":"चमेली","emoji":"🌼","bgColor":"#FFD700"},{"letter":"जू","word":"जूही","emoji":"🌻","bgColor":"#FFD700"},{"letter":"चं","word":"चंपा","emoji":"🌼","bgColor":"#F5F5F5"},{"letter":"गुल","word":"गुलमोहर","emoji":"🌺","bgColor":"#FF4500"},{"letter":"रज","word":"रजनीगंधा","emoji":"🌸","bgColor":"#FF69B4"},{"letter":"पा","word":"पारिजात","emoji":"🌸","bgColor":"#8B008B"},{"letter":"चा","word":"चाँदनी","emoji":"🌼","bgColor":"#F5F5F5"},{"letter":"गुड","word":"गुडहल","emoji":"🌺","bgColor":"#DC143C"},{"letter":"पल","word":"पलाश","emoji":"🌺","bgColor":"#FF4500"},{"letter":"सू","word":"सूरजमुखी","emoji":"🌻","bgColor":"#FFD700"},{"letter":"गुला","word":"गुलाबजामुन","emoji":"🌺","bgColor":"#DC143C"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiFamily1"
        component={AlphabetShortsTemplate}
        durationInFrames={1890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी परिवार के सदस्य",
          videoId: "hindi-family-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          connectorWord: "से",
          subtitleText: "परिवार सीखो!",
          letters: [{"letter":"माँ","word":"माँ (Mother)","emoji":"👩","bgColor":"#FF69B4"},{"letter":"पापा","word":"पापा (Father)","emoji":"👨","bgColor":"#4169E1"},{"letter":"दादी","word":"दादी (Grandpa)","emoji":"👴","bgColor":"#DAA520"},{"letter":"दादी","word":"दादी (Grandma)","emoji":"👵","bgColor":"#DEB887"},{"letter":"भाई","word":"भाई (Brother)","emoji":"👦","bgColor":"#4169E1"},{"letter":"बहन","word":"बहन (Sister)","emoji":"👧","bgColor":"#FF69B4"},{"letter":"चाचा","word":"चाचा (Uncle)","emoji":"👨","bgColor":"#228B22"},{"letter":"चाची","word":"चाची (Aunt)","emoji":"👩","bgColor":"#DC143C"},{"letter":"मामा","word":"मामा (Uncle)","emoji":"👨","bgColor":"#FF8C00"},{"letter":"मामी","word":"मामी (Aunt)","emoji":"👩","bgColor":"#8B008B"},{"letter":"बेटा","word":"बेटा (Son)","emoji":"👦","bgColor":"#32CD32"},{"letter":"बेटी","word":"बेटी (Daughter)","emoji":"👧","bgColor":"#FF69B4"},{"letter":"नाना","word":"नाना (Grandpa)","emoji":"👴","bgColor":"#DAA520"},{"letter":"नानी","word":"नानी (Grandma)","emoji":"👵","bgColor":"#DEB887"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
      <Composition
        id="HindiKidsHindiFestivals1"
        component={AlphabetShortsTemplate}
        durationInFrames={1890}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "हिंदी त्योहार",
          videoId: "hindi-festivals-1",
          bgGradient: ["#FF9933","#FFD700"] as [string, string],
          accentColor: "#FF6600",
          connectorWord: "से",
          subtitleText: "त्योहार सीखो!",
          letters: [{"letter":"दी","word":"दीवाली","emoji":"🪤","bgColor":"#FFD700"},{"letter":"हो","word":"होली","emoji":"🎨","bgColor":"#FF1493"},{"letter":"रक","word":"रक्षाबंधन","emoji":"🎀","bgColor":"#FF69B4"},{"letter":"नव","word":"नवरात्रि","emoji":"💃","bgColor":"#DC143C"},{"letter":"मक","word":"मकर संक्रांति","emoji":"🪁","bgColor":"#FFD700"},{"letter":"जन","word":"जन्माष्टमी","emoji":"🩈","bgColor":"#4169E1"},{"letter":"गण","word":"गणेश चतुर्थी","emoji":"🐘","bgColor":"#FF8C00"},{"letter":"लो","word":"लोहरी","emoji":"🔥","bgColor":"#FF4500"},{"letter":"ईद","word":"ईद","emoji":"🌙","bgColor":"#228B22"},{"letter":"पो","word":"पोंगल","emoji":"🍚","bgColor":"#FF8C00"},{"letter":"ओण","word":"ओणम","emoji":"🌸","bgColor":"#FFD700"},{"letter":"दु","word":"दुर्गा पूजा","emoji":"🙏","bgColor":"#DC143C"},{"letter":"छठ","word":"छठ पूजा","emoji":"🌅","bgColor":"#FF6347"},{"letter":"बै","word":"बैसाखी","emoji":"🌾","bgColor":"#FF8C00"}],
          letterDuration: 4,
          introDuration: 4,
          outroDuration: 3,
        }}
      />
    </>
  );
};
