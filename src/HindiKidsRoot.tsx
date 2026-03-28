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
    </>
  );
};
