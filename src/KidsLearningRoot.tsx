import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import React from "react";

export const KidsLearningRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KidsAnimalsSafari1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Safari Animals Part 1",
          videoId: "animals-safari-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Antelope",
          "emoji": "🦌",
          "bgColor": "#E67E22"
          },
          {
          "letter": "B",
          "word": "Buffalo",
          "emoji": "🐃",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cheetah",
          "emoji": "🐆",
          "bgColor": "#DAA520"
          },
          {
          "letter": "D",
          "word": "Deer",
          "emoji": "🦌",
          "bgColor": "#CD853F"
          },
          {
          "letter": "E",
          "word": "Elephant",
          "emoji": "🐘",
          "bgColor": "#708090"
          },
          {
          "letter": "F",
          "word": "Fox",
          "emoji": "🦊",
          "bgColor": "#D2691E"
          },
          {
          "letter": "G",
          "word": "Giraffe",
          "emoji": "🦒",
          "bgColor": "#F4A460"
          },
          {
          "letter": "H",
          "word": "Hippo",
          "emoji": "🦛",
          "bgColor": "#778899"
          },
          {
          "letter": "I",
          "word": "Impala",
          "emoji": "🦌",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "J",
          "word": "Jackal",
          "emoji": "🐺",
          "bgColor": "#A0522D"
          },
          {
          "letter": "K",
          "word": "Kudu",
          "emoji": "🦌",
          "bgColor": "#8B7355"
          },
          {
          "letter": "L",
          "word": "Lion",
          "emoji": "🦁",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "M",
          "word": "Meerkat",
          "emoji": "🐿️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "N",
          "word": "Nyala",
          "emoji": "🦌",
          "bgColor": "#A67B5B"
          },
          {
          "letter": "O",
          "word": "Ostrich",
          "emoji": "🦤",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "P",
          "word": "Panther",
          "emoji": "🐆",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quagga",
          "emoji": "🦓",
          "bgColor": "#C4A882"
          },
          {
          "letter": "R",
          "word": "Rhino",
          "emoji": "🦏",
          "bgColor": "#696969"
          },
          {
          "letter": "S",
          "word": "Springbok",
          "emoji": "🦌",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "T",
          "word": "Tiger",
          "emoji": "🐯",
          "bgColor": "#FF6347"
          },
          {
          "letter": "U",
          "word": "Urial",
          "emoji": "🐏",
          "bgColor": "#B8860B"
          },
          {
          "letter": "V",
          "word": "Vulture",
          "emoji": "🦅",
          "bgColor": "#556B2F"
          },
          {
          "letter": "W",
          "word": "Warthog",
          "emoji": "🐗",
          "bgColor": "#6B4226"
          },
          {
          "letter": "X",
          "word": "Xerus",
          "emoji": "🐿️",
          "bgColor": "#C19A6B"
          },
          {
          "letter": "Y",
          "word": "Yak",
          "emoji": "🐂",
          "bgColor": "#4A2C2A"
          },
          {
          "letter": "Z",
          "word": "Zebra",
          "emoji": "🦓",
          "bgColor": "#36454F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsSafari2"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Safari Animals Part 2",
          videoId: "animals-safari-2",
          bgGradient: ["#EB5757","#F2994A"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "Aardvark",
          "emoji": "🐽",
          "bgColor": "#C49A6C"
          },
          {
          "letter": "B",
          "word": "Baboon",
          "emoji": "🐒",
          "bgColor": "#8B6914"
          },
          {
          "letter": "C",
          "word": "Caracal",
          "emoji": "🐱",
          "bgColor": "#C4976D"
          },
          {
          "letter": "D",
          "word": "Dik-Dik",
          "emoji": "🦌",
          "bgColor": "#A67B5B"
          },
          {
          "letter": "E",
          "word": "Eland",
          "emoji": "🦌",
          "bgColor": "#8B7765"
          },
          {
          "letter": "F",
          "word": "Flamingo",
          "emoji": "🦩",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Gazelle",
          "emoji": "🦌",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Hyena",
          "emoji": "🐺",
          "bgColor": "#8B8378"
          },
          {
          "letter": "I",
          "word": "Ibex",
          "emoji": "🐐",
          "bgColor": "#6B4226"
          },
          {
          "letter": "J",
          "word": "Jaguar",
          "emoji": "🐆",
          "bgColor": "#E8A317"
          },
          {
          "letter": "K",
          "word": "Kingfisher",
          "emoji": "🐦",
          "bgColor": "#1E90FF"
          },
          {
          "letter": "L",
          "word": "Leopard",
          "emoji": "🐆",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mongoose",
          "emoji": "🐿️",
          "bgColor": "#8B7355"
          },
          {
          "letter": "N",
          "word": "Nilgai",
          "emoji": "🦌",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "Oryx",
          "emoji": "🦌",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "P",
          "word": "Porcupine",
          "emoji": "🦔",
          "bgColor": "#6B4423"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Rattlesnake",
          "emoji": "🐍",
          "bgColor": "#8B6914"
          },
          {
          "letter": "S",
          "word": "Scorpion",
          "emoji": "🦂",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "T",
          "word": "Tortoise",
          "emoji": "🐢",
          "bgColor": "#556B2F"
          },
          {
          "letter": "U",
          "word": "Umbrella Bird",
          "emoji": "🐦",
          "bgColor": "#191970"
          },
          {
          "letter": "V",
          "word": "Viper",
          "emoji": "🐍",
          "bgColor": "#006400"
          },
          {
          "letter": "W",
          "word": "Wildebeest",
          "emoji": "🐃",
          "bgColor": "#696969"
          },
          {
          "letter": "X",
          "word": "X-ray Fish",
          "emoji": "🐟",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "Y",
          "word": "Yellow Mongoose",
          "emoji": "🐿️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zorilla",
          "emoji": "🦨",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsOcean1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Ocean Animals Part 1",
          videoId: "animals-ocean-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Angelfish",
          "emoji": "🐠",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Blue Whale",
          "emoji": "🐋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Clownfish",
          "emoji": "🐠",
          "bgColor": "#FF6347"
          },
          {
          "letter": "D",
          "word": "Dolphin",
          "emoji": "🐬",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Eel",
          "emoji": "🐍",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "F",
          "word": "Flying Fish",
          "emoji": "🐟",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "G",
          "word": "Grouper",
          "emoji": "🐟",
          "bgColor": "#808000"
          },
          {
          "letter": "H",
          "word": "Hammerhead",
          "emoji": "🦈",
          "bgColor": "#708090"
          },
          {
          "letter": "I",
          "word": "Iguana",
          "emoji": "🦎",
          "bgColor": "#32CD32"
          },
          {
          "letter": "J",
          "word": "Jellyfish",
          "emoji": "🪼",
          "bgColor": "#DDA0DD"
          },
          {
          "letter": "K",
          "word": "Killer Whale",
          "emoji": "🐋",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Lobster",
          "emoji": "🦞",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Manatee",
          "emoji": "🐋",
          "bgColor": "#708090"
          },
          {
          "letter": "N",
          "word": "Narwhal",
          "emoji": "🐋",
          "bgColor": "#5F9EA0"
          },
          {
          "letter": "O",
          "word": "Octopus",
          "emoji": "🐙",
          "bgColor": "#8B008B"
          },
          {
          "letter": "P",
          "word": "Pufferfish",
          "emoji": "🐡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Q",
          "word": "Queen Conch",
          "emoji": "🐚",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "R",
          "word": "Ray",
          "emoji": "🐟",
          "bgColor": "#4682B4"
          },
          {
          "letter": "S",
          "word": "Seahorse",
          "emoji": "🐟",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Turtle",
          "emoji": "🐢",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "U",
          "word": "Urchin",
          "emoji": "🦔",
          "bgColor": "#800080"
          },
          {
          "letter": "V",
          "word": "Viperfish",
          "emoji": "🐟",
          "bgColor": "#191970"
          },
          {
          "letter": "W",
          "word": "Walrus",
          "emoji": "🦭",
          "bgColor": "#8B7355"
          },
          {
          "letter": "X",
          "word": "X-ray Tetra",
          "emoji": "🐟",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "Y",
          "word": "Yellowfin Tuna",
          "emoji": "🐟",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zooplankton",
          "emoji": "🦠",
          "bgColor": "#00CED1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsFarm1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Animals Part 1",
          videoId: "animals-farm-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Alpaca",
          "emoji": "🦙",
          "bgColor": "#DEB887"
          },
          {
          "letter": "B",
          "word": "Bull",
          "emoji": "🐂",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cow",
          "emoji": "🐄",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "D",
          "word": "Donkey",
          "emoji": "🫏",
          "bgColor": "#808080"
          },
          {
          "letter": "E",
          "word": "Ewe",
          "emoji": "🐑",
          "bgColor": "#FFFAF0"
          },
          {
          "letter": "F",
          "word": "Foal",
          "emoji": "🐴",
          "bgColor": "#8B6914"
          },
          {
          "letter": "G",
          "word": "Goat",
          "emoji": "🐐",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "H",
          "word": "Horse",
          "emoji": "🐴",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Cow",
          "emoji": "🐄",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "J",
          "word": "Jersey Cow",
          "emoji": "🐄",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "Kid Goat",
          "emoji": "🐐",
          "bgColor": "#FAEBD7"
          },
          {
          "letter": "L",
          "word": "Lamb",
          "emoji": "🐑",
          "bgColor": "#FFFAF0"
          },
          {
          "letter": "M",
          "word": "Mare",
          "emoji": "🐴",
          "bgColor": "#A0522D"
          },
          {
          "letter": "N",
          "word": "Nanny Goat",
          "emoji": "🐐",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "O",
          "word": "Ox",
          "emoji": "🐂",
          "bgColor": "#8B6914"
          },
          {
          "letter": "P",
          "word": "Pig",
          "emoji": "🐷",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Rooster",
          "emoji": "🐓",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Sheep",
          "emoji": "🐑",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Turkey",
          "emoji": "🦃",
          "bgColor": "#8B4513"
          },
          {
          "letter": "U",
          "word": "Udder Cow",
          "emoji": "🐄",
          "bgColor": "#FAEBD7"
          },
          {
          "letter": "V",
          "word": "Veal Calf",
          "emoji": "🐄",
          "bgColor": "#DEB887"
          },
          {
          "letter": "W",
          "word": "Water Buffalo",
          "emoji": "🐃",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "X",
          "word": "Cross-breed Hen",
          "emoji": "🐔",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Y",
          "word": "Yorkshire Pig",
          "emoji": "🐷",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "Z",
          "word": "Zebu",
          "emoji": "🐂",
          "bgColor": "#8B7355"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsPets1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Animals Part 1",
          videoId: "animals-pets-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Angora Cat",
          "emoji": "🐱",
          "bgColor": "#FAEBD7"
          },
          {
          "letter": "B",
          "word": "Budgie",
          "emoji": "🐦",
          "bgColor": "#7CFC00"
          },
          {
          "letter": "C",
          "word": "Cat",
          "emoji": "🐱",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "D",
          "word": "Dog",
          "emoji": "🐶",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "English Bulldog",
          "emoji": "🐕",
          "bgColor": "#DEB887"
          },
          {
          "letter": "F",
          "word": "Fish",
          "emoji": "🐟",
          "bgColor": "#FF6347"
          },
          {
          "letter": "G",
          "word": "Goldfish",
          "emoji": "🐠",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hamster",
          "emoji": "🐹",
          "bgColor": "#F4A460"
          },
          {
          "letter": "I",
          "word": "Indian Parrot",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "J",
          "word": "Jack Russell",
          "emoji": "🐕",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "K",
          "word": "Kitten",
          "emoji": "🐱",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "L",
          "word": "Labrador",
          "emoji": "🐕",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mouse",
          "emoji": "🐭",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "N",
          "word": "Nightingale",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "O",
          "word": "Owl",
          "emoji": "🦉",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Puppy",
          "emoji": "🐶",
          "bgColor": "#F4A460"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Rabbit",
          "emoji": "🐰",
          "bgColor": "#FFFAF0"
          },
          {
          "letter": "S",
          "word": "Squirrel",
          "emoji": "🐿️",
          "bgColor": "#CD853F"
          },
          {
          "letter": "T",
          "word": "Turtle",
          "emoji": "🐢",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "U",
          "word": "Uromastyx",
          "emoji": "🦎",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Veil-tail Fish",
          "emoji": "🐠",
          "bgColor": "#FF4500"
          },
          {
          "letter": "W",
          "word": "White Mouse",
          "emoji": "🐭",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xolo Dog",
          "emoji": "🐕",
          "bgColor": "#696969"
          },
          {
          "letter": "Y",
          "word": "Yorkshire Terrier",
          "emoji": "🐕",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "Z",
          "word": "Zebra Finch",
          "emoji": "🐦",
          "bgColor": "#FF6347"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsJungle1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Jungle Animals Part 1",
          videoId: "animals-jungle-1",
          bgGradient: ["#134E5E","#71B280"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Anaconda",
          "emoji": "🐍",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "B",
          "word": "Bear",
          "emoji": "🐻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Chameleon",
          "emoji": "🦎",
          "bgColor": "#32CD32"
          },
          {
          "letter": "D",
          "word": "Dart Frog",
          "emoji": "🐸",
          "bgColor": "#FF4500"
          },
          {
          "letter": "E",
          "word": "Eagle",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Flying Squirrel",
          "emoji": "🐿️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "G",
          "word": "Gorilla",
          "emoji": "🦍",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "H",
          "word": "Hornbill",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "Indian Python",
          "emoji": "🐍",
          "bgColor": "#556B2F"
          },
          {
          "letter": "J",
          "word": "Jaguar",
          "emoji": "🐆",
          "bgColor": "#E8A317"
          },
          {
          "letter": "K",
          "word": "King Cobra",
          "emoji": "🐍",
          "bgColor": "#006400"
          },
          {
          "letter": "L",
          "word": "Lemur",
          "emoji": "🐒",
          "bgColor": "#696969"
          },
          {
          "letter": "M",
          "word": "Monkey",
          "emoji": "🐵",
          "bgColor": "#8B6914"
          },
          {
          "letter": "N",
          "word": "Newt",
          "emoji": "🦎",
          "bgColor": "#FF6347"
          },
          {
          "letter": "O",
          "word": "Ocelot",
          "emoji": "🐆",
          "bgColor": "#DAA520"
          },
          {
          "letter": "P",
          "word": "Panther",
          "emoji": "🐆",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quetzal",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "R",
          "word": "Red Panda",
          "emoji": "🐼",
          "bgColor": "#B22222"
          },
          {
          "letter": "S",
          "word": "Sloth",
          "emoji": "🦥",
          "bgColor": "#8B7355"
          },
          {
          "letter": "T",
          "word": "Toucan",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "U",
          "word": "Umbrella Bird",
          "emoji": "🐦",
          "bgColor": "#191970"
          },
          {
          "letter": "V",
          "word": "Vine Snake",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Wild Boar",
          "emoji": "🐗",
          "bgColor": "#6B4226"
          },
          {
          "letter": "X",
          "word": "Xenops",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Y",
          "word": "Yellow Frog",
          "emoji": "🐸",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra Snake",
          "emoji": "🐍",
          "bgColor": "#2F4F4F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsArctic1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Arctic Animals Part 1",
          videoId: "animals-arctic-1",
          bgGradient: ["#E0EAFC","#CFDEF3"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Arctic Fox",
          "emoji": "🦊",
          "bgColor": "#F0F8FF"
          },
          {
          "letter": "B",
          "word": "Beluga Whale",
          "emoji": "🐋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Caribou",
          "emoji": "🦌",
          "bgColor": "#8B7355"
          },
          {
          "letter": "D",
          "word": "Dall Sheep",
          "emoji": "🐏",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Emperor Penguin",
          "emoji": "🐧",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "F",
          "word": "Fur Seal",
          "emoji": "🦭",
          "bgColor": "#696969"
          },
          {
          "letter": "G",
          "word": "Grey Whale",
          "emoji": "🐋",
          "bgColor": "#708090"
          },
          {
          "letter": "H",
          "word": "Harp Seal",
          "emoji": "🦭",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "I",
          "word": "Ice Bear",
          "emoji": "🐻‍❄️",
          "bgColor": "#F0FFFF"
          },
          {
          "letter": "J",
          "word": "Jackrabbit",
          "emoji": "🐰",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "K",
          "word": "King Penguin",
          "emoji": "🐧",
          "bgColor": "#FFD700"
          },
          {
          "letter": "L",
          "word": "Lemming",
          "emoji": "🐹",
          "bgColor": "#8B7355"
          },
          {
          "letter": "M",
          "word": "Moose",
          "emoji": "🫎",
          "bgColor": "#6B4226"
          },
          {
          "letter": "N",
          "word": "Narwhal",
          "emoji": "🐋",
          "bgColor": "#5F9EA0"
          },
          {
          "letter": "O",
          "word": "Orca",
          "emoji": "🐋",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "P",
          "word": "Polar Bear",
          "emoji": "🐻‍❄️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Q",
          "word": "Quahog Clam",
          "emoji": "🐚",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "R",
          "word": "Reindeer",
          "emoji": "🦌",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Snowy Owl",
          "emoji": "🦉",
          "bgColor": "#FFFAF0"
          },
          {
          "letter": "T",
          "word": "Tundra Wolf",
          "emoji": "🐺",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "U",
          "word": "Unicorn Fish",
          "emoji": "🐟",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Vole",
          "emoji": "🐭",
          "bgColor": "#8B7355"
          },
          {
          "letter": "W",
          "word": "Walrus",
          "emoji": "🦭",
          "bgColor": "#8B6914"
          },
          {
          "letter": "X",
          "word": "Xiphias Whale",
          "emoji": "🐋",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yellow Bear",
          "emoji": "🐻",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zander Fish",
          "emoji": "🐟",
          "bgColor": "#708090"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsIndian1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Animals Part 1",
          videoId: "animals-indian-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Asiatic Lion",
          "emoji": "🦁",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "B",
          "word": "Bengal Tiger",
          "emoji": "🐯",
          "bgColor": "#FF6347"
          },
          {
          "letter": "C",
          "word": "Chital Deer",
          "emoji": "🦌",
          "bgColor": "#CD853F"
          },
          {
          "letter": "D",
          "word": "Dhole",
          "emoji": "🐺",
          "bgColor": "#B22222"
          },
          {
          "letter": "E",
          "word": "Indian Elephant",
          "emoji": "🐘",
          "bgColor": "#708090"
          },
          {
          "letter": "F",
          "word": "Flying Fox",
          "emoji": "🦇",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "G",
          "word": "Gaur",
          "emoji": "🐂",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "H",
          "word": "Hangul Deer",
          "emoji": "🦌",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Rhino",
          "emoji": "🦏",
          "bgColor": "#696969"
          },
          {
          "letter": "J",
          "word": "Jungle Cat",
          "emoji": "🐱",
          "bgColor": "#8B6914"
          },
          {
          "letter": "K",
          "word": "King Cobra",
          "emoji": "🐍",
          "bgColor": "#006400"
          },
          {
          "letter": "L",
          "word": "Langur",
          "emoji": "🐒",
          "bgColor": "#808080"
          },
          {
          "letter": "M",
          "word": "Malabar Squirrel",
          "emoji": "🐿️",
          "bgColor": "#8B0000"
          },
          {
          "letter": "N",
          "word": "Nilgai",
          "emoji": "🦌",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "One-Horned Rhino",
          "emoji": "🦏",
          "bgColor": "#696969"
          },
          {
          "letter": "P",
          "word": "Peacock",
          "emoji": "🦚",
          "bgColor": "#006400"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Red Panda",
          "emoji": "🐼",
          "bgColor": "#B22222"
          },
          {
          "letter": "S",
          "word": "Snow Leopard",
          "emoji": "🐆",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Turtle",
          "emoji": "🐢",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "U",
          "word": "Urial Sheep",
          "emoji": "🐏",
          "bgColor": "#B8860B"
          },
          {
          "letter": "V",
          "word": "Vulture",
          "emoji": "🦅",
          "bgColor": "#556B2F"
          },
          {
          "letter": "W",
          "word": "Wild Ass",
          "emoji": "🫏",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "X",
          "word": "Xenops",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Y",
          "word": "Yellow Throat",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zeren",
          "emoji": "🦌",
          "bgColor": "#DAA520"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsReptiles1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Reptiles & Amphibians Part 1",
          videoId: "animals-reptiles-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "Alligator",
          "emoji": "🐊",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "B",
          "word": "Boa",
          "emoji": "🐍",
          "bgColor": "#8B6914"
          },
          {
          "letter": "C",
          "word": "Crocodile",
          "emoji": "🐊",
          "bgColor": "#556B2F"
          },
          {
          "letter": "D",
          "word": "Dragon Lizard",
          "emoji": "🦎",
          "bgColor": "#FF6347"
          },
          {
          "letter": "E",
          "word": "Eastern Newt",
          "emoji": "🦎",
          "bgColor": "#FF4500"
          },
          {
          "letter": "F",
          "word": "Frog",
          "emoji": "🐸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "G",
          "word": "Gecko",
          "emoji": "🦎",
          "bgColor": "#9ACD32"
          },
          {
          "letter": "H",
          "word": "Horned Toad",
          "emoji": "🐸",
          "bgColor": "#8B6914"
          },
          {
          "letter": "I",
          "word": "Iguana",
          "emoji": "🦎",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jackson Chameleon",
          "emoji": "🦎",
          "bgColor": "#00CED1"
          },
          {
          "letter": "K",
          "word": "Komodo Dragon",
          "emoji": "🦎",
          "bgColor": "#556B2F"
          },
          {
          "letter": "L",
          "word": "Lizard",
          "emoji": "🦎",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "M",
          "word": "Monitor Lizard",
          "emoji": "🦎",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "N",
          "word": "Newt",
          "emoji": "🦎",
          "bgColor": "#FF6347"
          },
          {
          "letter": "O",
          "word": "Olive Python",
          "emoji": "🐍",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "P",
          "word": "Python",
          "emoji": "🐍",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Q",
          "word": "Queen Snake",
          "emoji": "🐍",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "R",
          "word": "Rattlesnake",
          "emoji": "🐍",
          "bgColor": "#DAA520"
          },
          {
          "letter": "S",
          "word": "Salamander",
          "emoji": "🦎",
          "bgColor": "#FF4500"
          },
          {
          "letter": "T",
          "word": "Tortoise",
          "emoji": "🐢",
          "bgColor": "#556B2F"
          },
          {
          "letter": "U",
          "word": "Urutu Viper",
          "emoji": "🐍",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Viper",
          "emoji": "🐍",
          "bgColor": "#006400"
          },
          {
          "letter": "W",
          "word": "Water Snake",
          "emoji": "🐍",
          "bgColor": "#4682B4"
          },
          {
          "letter": "X",
          "word": "Xenopus Frog",
          "emoji": "🐸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "Y",
          "word": "Yellow Turtle",
          "emoji": "🐢",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra Snake",
          "emoji": "🐍",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsInsects1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Insects & Bugs Part 1",
          videoId: "animals-insects-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#8B0000"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "C",
          "word": "Caterpillar",
          "emoji": "🐛",
          "bgColor": "#32CD32"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Earthworm",
          "emoji": "🪱",
          "bgColor": "#CD853F"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#9ACD32"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#32CD32"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#FF0000"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#696969"
          },
          {
          "letter": "N",
          "word": "Nymph Bug",
          "emoji": "🪲",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "O",
          "word": "Orange Beetle",
          "emoji": "🪲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Queen Ant",
          "emoji": "🐜",
          "bgColor": "#8B0000"
          },
          {
          "letter": "R",
          "word": "Rhinoceros Beetle",
          "emoji": "🪲",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🐜",
          "bgColor": "#DEB887"
          },
          {
          "letter": "U",
          "word": "Ulysses Butterfly",
          "emoji": "🦋",
          "bgColor": "#1E90FF"
          },
          {
          "letter": "V",
          "word": "Velvet Ant",
          "emoji": "🐜",
          "bgColor": "#FF4500"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "X",
          "word": "Xerces Blue",
          "emoji": "🦋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Y",
          "word": "Yellow Jacket",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsGarden1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Birds Part 1",
          videoId: "birds-garden-1",
          bgGradient: ["#A8E063","#56AB2F"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Avocet",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Bulbul",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "C",
          "word": "Cardinal",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dove",
          "emoji": "🕊️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Egret",
          "emoji": "🐦",
          "bgColor": "#FFFAF0"
          },
          {
          "letter": "F",
          "word": "Finch",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Goldfinch",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hummingbird",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "I",
          "word": "Indian Robin",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "J",
          "word": "Jay",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "K",
          "word": "Kingfisher",
          "emoji": "🐦",
          "bgColor": "#1E90FF"
          },
          {
          "letter": "L",
          "word": "Lark",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "M",
          "word": "Magpie",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "N",
          "word": "Nightingale",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "O",
          "word": "Oriole",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pigeon",
          "emoji": "🐦",
          "bgColor": "#808080"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Robin",
          "emoji": "🐦",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Sparrow",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "T",
          "word": "Thrush",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "U",
          "word": "Upupa",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "V",
          "word": "Violet Cuckoo",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "Wagtail",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "X",
          "word": "Xenops",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Y",
          "word": "Yellow Warbler",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra Finch",
          "emoji": "🐦",
          "bgColor": "#FF6347"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsTropical1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Birds Part 1",
          videoId: "birds-tropical-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Ara Macaw",
          "emoji": "🦜",
          "bgColor": "#FF0000"
          },
          {
          "letter": "B",
          "word": "Bird of Paradise",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "C",
          "word": "Cockatoo",
          "emoji": "🦜",
          "bgColor": "#FFFAF0"
          },
          {
          "letter": "D",
          "word": "Drongo",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "Emerald Toucan",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "F",
          "word": "Flamingo",
          "emoji": "🦩",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Green Parrot",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Hornbill",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "Ibis",
          "emoji": "🐦",
          "bgColor": "#FF4500"
          },
          {
          "letter": "J",
          "word": "Jacamar",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Keel-billed Toucan",
          "emoji": "🐦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "L",
          "word": "Lorikeet",
          "emoji": "🦜",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Macaw",
          "emoji": "🦜",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Nicobar Pigeon",
          "emoji": "🐦",
          "bgColor": "#006400"
          },
          {
          "letter": "O",
          "word": "Orange Bellied Parrot",
          "emoji": "🦜",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Parakeet",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "Q",
          "word": "Quetzal",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "R",
          "word": "Resplendent Bird",
          "emoji": "🐦",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Scarlet Macaw",
          "emoji": "🦜",
          "bgColor": "#FF0000"
          },
          {
          "letter": "T",
          "word": "Toucan",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "U",
          "word": "Umbrella Bird",
          "emoji": "🐦",
          "bgColor": "#191970"
          },
          {
          "letter": "V",
          "word": "Violet Sabrewing",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "White Cockatoo",
          "emoji": "🦜",
          "bgColor": "#FFFAF0"
          },
          {
          "letter": "X",
          "word": "Xantus Hummingbird",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Y",
          "word": "Yellow Canary",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra Dove",
          "emoji": "🕊️",
          "bgColor": "#C0C0C0"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsWater1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Water Birds Part 1",
          videoId: "birds-water-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Albatross",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Blue Heron",
          "emoji": "🐦",
          "bgColor": "#4682B4"
          },
          {
          "letter": "C",
          "word": "Crane",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "D",
          "word": "Duck",
          "emoji": "🦆",
          "bgColor": "#228B22"
          },
          {
          "letter": "E",
          "word": "Egret",
          "emoji": "🐦",
          "bgColor": "#FFFAF0"
          },
          {
          "letter": "F",
          "word": "Flamingo",
          "emoji": "🦩",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Goose",
          "emoji": "🪿",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "H",
          "word": "Heron",
          "emoji": "🐦",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Indian Cormorant",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "J",
          "word": "Jacana",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "K",
          "word": "Kingfisher",
          "emoji": "🐦",
          "bgColor": "#1E90FF"
          },
          {
          "letter": "L",
          "word": "Loon",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "M",
          "word": "Mallard",
          "emoji": "🦆",
          "bgColor": "#006400"
          },
          {
          "letter": "N",
          "word": "Night Heron",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Osprey",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "P",
          "word": "Pelican",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Q",
          "word": "Queen Duck",
          "emoji": "🦆",
          "bgColor": "#8B6914"
          },
          {
          "letter": "R",
          "word": "Rail Bird",
          "emoji": "🐦",
          "bgColor": "#556B2F"
          },
          {
          "letter": "S",
          "word": "Swan",
          "emoji": "🦢",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Tern",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "U",
          "word": "Upland Goose",
          "emoji": "🪿",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "V",
          "word": "Violet Heron",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "White Stork",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xema Gull",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Y",
          "word": "Yellow Bittern",
          "emoji": "🐦",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zigzag Heron",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsIndian1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Birds Part 1",
          videoId: "birds-indian-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Alexandrine Parakeet",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "B",
          "word": "Black Drongo",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "C",
          "word": "Common Myna",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "D",
          "word": "Darter",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "E",
          "word": "Eastern Reef Egret",
          "emoji": "🐦",
          "bgColor": "#4682B4"
          },
          {
          "letter": "F",
          "word": "Flameback",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Great Hornbill",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "H",
          "word": "House Crow",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "Indian Peafowl",
          "emoji": "🦚",
          "bgColor": "#006400"
          },
          {
          "letter": "J",
          "word": "Jungle Babbler",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "K",
          "word": "Koel",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Lapwing",
          "emoji": "🐦",
          "bgColor": "#556B2F"
          },
          {
          "letter": "M",
          "word": "Malabar Trogon",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Nilgiri Flycatcher",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Oriental Magpie",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "P",
          "word": "Peacock",
          "emoji": "🦚",
          "bgColor": "#006400"
          },
          {
          "letter": "Q",
          "word": "Quaker Parakeet",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "R",
          "word": "Rose-ringed Parakeet",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "S",
          "word": "Sarus Crane",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Tailorbird",
          "emoji": "🐦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "U",
          "word": "Upland Pipit",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Verditer Flycatcher",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "W",
          "word": "White-breasted Waterhen",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xanthochilus Weaver",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Y",
          "word": "Yellow-footed Pigeon",
          "emoji": "🐦",
          "bgColor": "#808080"
          },
          {
          "letter": "Z",
          "word": "Zitting Cisticola",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsPrey1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey Part 1",
          videoId: "birds-prey-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "African Hawk",
          "emoji": "🦅",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bald Eagle",
          "emoji": "🦅",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Condor",
          "emoji": "🦅",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "D",
          "word": "Dark Kite",
          "emoji": "🦅",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "E",
          "word": "Eagle",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Falcon",
          "emoji": "🦅",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Golden Eagle",
          "emoji": "🦅",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Harpy Eagle",
          "emoji": "🦅",
          "bgColor": "#696969"
          },
          {
          "letter": "I",
          "word": "Imperial Eagle",
          "emoji": "🦅",
          "bgColor": "#8B4513"
          },
          {
          "letter": "J",
          "word": "Jaeger",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "K",
          "word": "Kestrel",
          "emoji": "🦅",
          "bgColor": "#CD853F"
          },
          {
          "letter": "L",
          "word": "Lammergeier",
          "emoji": "🦅",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "M",
          "word": "Merlin",
          "emoji": "🦅",
          "bgColor": "#4682B4"
          },
          {
          "letter": "N",
          "word": "Northern Goshawk",
          "emoji": "🦅",
          "bgColor": "#808080"
          },
          {
          "letter": "O",
          "word": "Osprey",
          "emoji": "🦅",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "P",
          "word": "Peregrine Falcon",
          "emoji": "🦅",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quelea Hawk",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "R",
          "word": "Red-tailed Hawk",
          "emoji": "🦅",
          "bgColor": "#B22222"
          },
          {
          "letter": "S",
          "word": "Sparrowhawk",
          "emoji": "🦅",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Tawny Eagle",
          "emoji": "🦅",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "U",
          "word": "Ural Owl",
          "emoji": "🦉",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vulture",
          "emoji": "🦅",
          "bgColor": "#696969"
          },
          {
          "letter": "W",
          "word": "White Hawk",
          "emoji": "🦅",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xingu Eagle",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Y",
          "word": "Yellow Kite",
          "emoji": "🦅",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zone-tailed Hawk",
          "emoji": "🦅",
          "bgColor": "#2F4F4F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsFruitsTropical1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Fruits Part 1",
          videoId: "fruits-tropical-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Avocado",
          "emoji": "🥑",
          "bgColor": "#556B2F"
          },
          {
          "letter": "B",
          "word": "Banana",
          "emoji": "🍌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Coconut",
          "emoji": "🥥",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dragon Fruit",
          "emoji": "🐉",
          "bgColor": "#FF1493"
          },
          {
          "letter": "E",
          "word": "Elderberry",
          "emoji": "🫐",
          "bgColor": "#4B0082"
          },
          {
          "letter": "F",
          "word": "Fig",
          "emoji": "🍈",
          "bgColor": "#800080"
          },
          {
          "letter": "G",
          "word": "Guava",
          "emoji": "🍈",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Honeydew",
          "emoji": "🍈",
          "bgColor": "#98FB98"
          },
          {
          "letter": "I",
          "word": "Indian Mango",
          "emoji": "🥭",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "J",
          "word": "Jackfruit",
          "emoji": "🍈",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "Kiwi",
          "emoji": "🥝",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "L",
          "word": "Lychee",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Mango",
          "emoji": "🥭",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Nectarine",
          "emoji": "🍑",
          "bgColor": "#FF6347"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Papaya",
          "emoji": "🍈",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Q",
          "word": "Quince",
          "emoji": "🍐",
          "bgColor": "#BDB76B"
          },
          {
          "letter": "R",
          "word": "Rambutan",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Starfruit",
          "emoji": "⭐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tamarind",
          "emoji": "🍈",
          "bgColor": "#8B4513"
          },
          {
          "letter": "U",
          "word": "Ugli Fruit",
          "emoji": "🍊",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Vanilla Bean",
          "emoji": "🌿",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "W",
          "word": "Watermelon",
          "emoji": "🍉",
          "bgColor": "#FF6347"
          },
          {
          "letter": "X",
          "word": "Ximenia",
          "emoji": "🍒",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yellow Passion Fruit",
          "emoji": "🍈",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zucchini",
          "emoji": "🥒",
          "bgColor": "#2E8B57"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsFruitsIndian1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Fruits Part 1",
          videoId: "fruits-indian-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Amla",
          "emoji": "🍈",
          "bgColor": "#32CD32"
          },
          {
          "letter": "B",
          "word": "Ber",
          "emoji": "🍒",
          "bgColor": "#8B0000"
          },
          {
          "letter": "C",
          "word": "Chikoo",
          "emoji": "🍈",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dates",
          "emoji": "🌴",
          "bgColor": "#8B6914"
          },
          {
          "letter": "E",
          "word": "Elephant Apple",
          "emoji": "🍏",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Falsa",
          "emoji": "🫐",
          "bgColor": "#4B0082"
          },
          {
          "letter": "G",
          "word": "Grapes",
          "emoji": "🍇",
          "bgColor": "#800080"
          },
          {
          "letter": "H",
          "word": "Hog Plum",
          "emoji": "🍈",
          "bgColor": "#DAA520"
          },
          {
          "letter": "I",
          "word": "Imli",
          "emoji": "🍈",
          "bgColor": "#8B4513"
          },
          {
          "letter": "J",
          "word": "Jamun",
          "emoji": "🫐",
          "bgColor": "#191970"
          },
          {
          "letter": "K",
          "word": "Karonda",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Litchi",
          "emoji": "🍒",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Muskmelon",
          "emoji": "🍈",
          "bgColor": "#F4A460"
          },
          {
          "letter": "N",
          "word": "Naseberry",
          "emoji": "🍈",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pomegranate",
          "emoji": "🍎",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Q",
          "word": "Quince",
          "emoji": "🍐",
          "bgColor": "#BDB76B"
          },
          {
          "letter": "R",
          "word": "Rose Apple",
          "emoji": "🍎",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "S",
          "word": "Sitaphal",
          "emoji": "🍈",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tender Coconut",
          "emoji": "🥥",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "U",
          "word": "Uttapam Fig",
          "emoji": "🍈",
          "bgColor": "#800080"
          },
          {
          "letter": "V",
          "word": "Vilayati Imli",
          "emoji": "🍈",
          "bgColor": "#8B4513"
          },
          {
          "letter": "W",
          "word": "Wood Apple",
          "emoji": "🍈",
          "bgColor": "#6B4226"
          },
          {
          "letter": "X",
          "word": "Xigua Melon",
          "emoji": "🍉",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "Yellow Mango",
          "emoji": "🥭",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Ziziphus",
          "emoji": "🍒",
          "bgColor": "#8B0000"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsFruitsBerries1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Berry Fruits Part 1",
          videoId: "fruits-berries-1",
          bgGradient: ["#ED4264","#FFEDBC"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "Acai Berry",
          "emoji": "🫐",
          "bgColor": "#4B0082"
          },
          {
          "letter": "B",
          "word": "Blueberry",
          "emoji": "🫐",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Cranberry",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dewberry",
          "emoji": "🫐",
          "bgColor": "#191970"
          },
          {
          "letter": "E",
          "word": "Elderberry",
          "emoji": "🫐",
          "bgColor": "#4B0082"
          },
          {
          "letter": "F",
          "word": "Falsa Berry",
          "emoji": "🫐",
          "bgColor": "#800080"
          },
          {
          "letter": "G",
          "word": "Gooseberry",
          "emoji": "🍈",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Huckleberry",
          "emoji": "🫐",
          "bgColor": "#191970"
          },
          {
          "letter": "I",
          "word": "Indian Gooseberry",
          "emoji": "🍈",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Juniper Berry",
          "emoji": "🫐",
          "bgColor": "#006400"
          },
          {
          "letter": "K",
          "word": "Kiwi Berry",
          "emoji": "🥝",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "L",
          "word": "Loganberry",
          "emoji": "🍒",
          "bgColor": "#8B0000"
          },
          {
          "letter": "M",
          "word": "Mulberry",
          "emoji": "🫐",
          "bgColor": "#4B0082"
          },
          {
          "letter": "N",
          "word": "Noni Berry",
          "emoji": "🍈",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Olallieberry",
          "emoji": "🫐",
          "bgColor": "#191970"
          },
          {
          "letter": "P",
          "word": "Phalsa",
          "emoji": "🫐",
          "bgColor": "#800080"
          },
          {
          "letter": "Q",
          "word": "Quandong",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Raspberry",
          "emoji": "🍒",
          "bgColor": "#FF1493"
          },
          {
          "letter": "S",
          "word": "Strawberry",
          "emoji": "🍓",
          "bgColor": "#FF0000"
          },
          {
          "letter": "T",
          "word": "Tayberry",
          "emoji": "🍒",
          "bgColor": "#8B0000"
          },
          {
          "letter": "U",
          "word": "Ugni Berry",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "V",
          "word": "Vine Berry",
          "emoji": "🍇",
          "bgColor": "#800080"
          },
          {
          "letter": "W",
          "word": "Wild Strawberry",
          "emoji": "🍓",
          "bgColor": "#FF6347"
          },
          {
          "letter": "X",
          "word": "Xigua Berry",
          "emoji": "🍉",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "Y",
          "word": "Youngberry",
          "emoji": "🫐",
          "bgColor": "#4B0082"
          },
          {
          "letter": "Z",
          "word": "Zante Currant",
          "emoji": "🍇",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVegetablesLeafy1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Leafy Vegetables Part 1",
          videoId: "vegetables-leafy-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Amaranth",
          "emoji": "🥬",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Basil",
          "emoji": "🌿",
          "bgColor": "#006400"
          },
          {
          "letter": "C",
          "word": "Cabbage",
          "emoji": "🥬",
          "bgColor": "#32CD32"
          },
          {
          "letter": "D",
          "word": "Dill",
          "emoji": "🌿",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "E",
          "word": "Endive",
          "emoji": "🥬",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "F",
          "word": "Fenugreek",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Green Onion",
          "emoji": "🧅",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Herbs",
          "emoji": "🌿",
          "bgColor": "#006400"
          },
          {
          "letter": "I",
          "word": "Iceberg Lettuce",
          "emoji": "🥬",
          "bgColor": "#98FB98"
          },
          {
          "letter": "J",
          "word": "Jute Leaves",
          "emoji": "🌿",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "K",
          "word": "Kale",
          "emoji": "🥬",
          "bgColor": "#006400"
          },
          {
          "letter": "L",
          "word": "Lettuce",
          "emoji": "🥬",
          "bgColor": "#32CD32"
          },
          {
          "letter": "M",
          "word": "Mustard Greens",
          "emoji": "🥬",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "N",
          "word": "Napa Cabbage",
          "emoji": "🥬",
          "bgColor": "#98FB98"
          },
          {
          "letter": "O",
          "word": "Oregano",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Palak (Spinach)",
          "emoji": "🥬",
          "bgColor": "#006400"
          },
          {
          "letter": "Q",
          "word": "Quinoa Greens",
          "emoji": "🌿",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "R",
          "word": "Rosemary",
          "emoji": "🌿",
          "bgColor": "#556B2F"
          },
          {
          "letter": "S",
          "word": "Spinach",
          "emoji": "🥬",
          "bgColor": "#006400"
          },
          {
          "letter": "T",
          "word": "Thyme",
          "emoji": "🌿",
          "bgColor": "#556B2F"
          },
          {
          "letter": "U",
          "word": "Upland Cress",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Vine Leaves",
          "emoji": "🌿",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "W",
          "word": "Watercress",
          "emoji": "🌿",
          "bgColor": "#006400"
          },
          {
          "letter": "X",
          "word": "Xiang Cai (Coriander)",
          "emoji": "🌿",
          "bgColor": "#32CD32"
          },
          {
          "letter": "Y",
          "word": "Yam Leaves",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zucchini Leaves",
          "emoji": "🌿",
          "bgColor": "#6B8E23"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVegetablesRoot1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Root Vegetables Part 1",
          videoId: "vegetables-root-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Arbi (Taro)",
          "emoji": "🥔",
          "bgColor": "#8B7355"
          },
          {
          "letter": "B",
          "word": "Beetroot",
          "emoji": "🟣",
          "bgColor": "#8B0000"
          },
          {
          "letter": "C",
          "word": "Carrot",
          "emoji": "🥕",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "D",
          "word": "Daikon Radish",
          "emoji": "🥕",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Elephant Yam",
          "emoji": "🥔",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Fennel Root",
          "emoji": "🧅",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "G",
          "word": "Ginger",
          "emoji": "🫚",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Horseradish",
          "emoji": "🥕",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "I",
          "word": "Indian Turnip",
          "emoji": "🥕",
          "bgColor": "#DEB887"
          },
          {
          "letter": "J",
          "word": "Jicama",
          "emoji": "🥔",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "K",
          "word": "Kohlrabi",
          "emoji": "🥬",
          "bgColor": "#98FB98"
          },
          {
          "letter": "L",
          "word": "Lotus Root",
          "emoji": "🪷",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "M",
          "word": "Mooli (Radish)",
          "emoji": "🥕",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Nutmeg Root",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Onion",
          "emoji": "🧅",
          "bgColor": "#DAA520"
          },
          {
          "letter": "P",
          "word": "Potato",
          "emoji": "🥔",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Q",
          "word": "Queen Yam",
          "emoji": "🥔",
          "bgColor": "#8B6914"
          },
          {
          "letter": "R",
          "word": "Radish",
          "emoji": "🥕",
          "bgColor": "#FF4500"
          },
          {
          "letter": "S",
          "word": "Sweet Potato",
          "emoji": "🍠",
          "bgColor": "#FF6347"
          },
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🫚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Ulluco",
          "emoji": "🥔",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "V",
          "word": "Vidalia Onion",
          "emoji": "🧅",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "W",
          "word": "Wasabi Root",
          "emoji": "🫚",
          "bgColor": "#32CD32"
          },
          {
          "letter": "X",
          "word": "Xerophyte Yam",
          "emoji": "🥔",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Y",
          "word": "Yam",
          "emoji": "🍠",
          "bgColor": "#CD853F"
          },
          {
          "letter": "Z",
          "word": "Zingiber (Ginger)",
          "emoji": "🫚",
          "bgColor": "#DAA520"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesRoad1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Road Vehicles Part 1",
          videoId: "vehicles-road-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Ambulance",
          "emoji": "🚑",
          "bgColor": "#FF0000"
          },
          {
          "letter": "B",
          "word": "Bus",
          "emoji": "🚌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Car",
          "emoji": "🚗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dump Truck",
          "emoji": "🚛",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Electric Car",
          "emoji": "🚙",
          "bgColor": "#00CED1"
          },
          {
          "letter": "F",
          "word": "Fire Truck",
          "emoji": "🚒",
          "bgColor": "#FF0000"
          },
          {
          "letter": "G",
          "word": "Garbage Truck",
          "emoji": "🚛",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hatchback",
          "emoji": "🚗",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Ice Cream Van",
          "emoji": "🚐",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "J",
          "word": "Jeep",
          "emoji": "🚙",
          "bgColor": "#556B2F"
          },
          {
          "letter": "K",
          "word": "Kick Scooter",
          "emoji": "🛴",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Lorry",
          "emoji": "🚛",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Motorcycle",
          "emoji": "🏍️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "N",
          "word": "Nano Car",
          "emoji": "🚗",
          "bgColor": "#DAA520"
          },
          {
          "letter": "O",
          "word": "Off-road Vehicle",
          "emoji": "🚙",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Police Car",
          "emoji": "🚓",
          "bgColor": "#000080"
          },
          {
          "letter": "Q",
          "word": "Quad Bike",
          "emoji": "🏍️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "R",
          "word": "Rickshaw",
          "emoji": "🛺",
          "bgColor": "#32CD32"
          },
          {
          "letter": "S",
          "word": "School Bus",
          "emoji": "🚌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Taxi",
          "emoji": "🚕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Utility Van",
          "emoji": "🚐",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "V",
          "word": "Van",
          "emoji": "🚐",
          "bgColor": "#4682B4"
          },
          {
          "letter": "W",
          "word": "Wagon",
          "emoji": "🚗",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "X-press Bus",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yellow Cab",
          "emoji": "🚕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zero Emission Car",
          "emoji": "🚗",
          "bgColor": "#00CED1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesAir1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Air Vehicles Part 1",
          videoId: "vehicles-air-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#3498DB",
          letters: [
          {
          "letter": "A",
          "word": "Airplane",
          "emoji": "✈️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "B",
          "word": "Biplane",
          "emoji": "✈️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "C",
          "word": "Cargo Plane",
          "emoji": "✈️",
          "bgColor": "#708090"
          },
          {
          "letter": "D",
          "word": "Drone",
          "emoji": "🛸",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "Emergency Chopper",
          "emoji": "🚁",
          "bgColor": "#FF0000"
          },
          {
          "letter": "F",
          "word": "Fighter Jet",
          "emoji": "✈️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "G",
          "word": "Glider",
          "emoji": "✈️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "H",
          "word": "Helicopter",
          "emoji": "🚁",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Indian Air Force Jet",
          "emoji": "✈️",
          "bgColor": "#000080"
          },
          {
          "letter": "J",
          "word": "Jet Plane",
          "emoji": "✈️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "K",
          "word": "Kite Plane",
          "emoji": "🪁",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Light Aircraft",
          "emoji": "✈️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Military Helicopter",
          "emoji": "🚁",
          "bgColor": "#556B2F"
          },
          {
          "letter": "N",
          "word": "Navy Chopper",
          "emoji": "🚁",
          "bgColor": "#000080"
          },
          {
          "letter": "O",
          "word": "Ornithopter",
          "emoji": "✈️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "P",
          "word": "Paraglider",
          "emoji": "🪂",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "Q",
          "word": "Quadcopter",
          "emoji": "🛸",
          "bgColor": "#696969"
          },
          {
          "letter": "R",
          "word": "Rocket",
          "emoji": "🚀",
          "bgColor": "#FF4500"
          },
          {
          "letter": "S",
          "word": "Space Shuttle",
          "emoji": "🚀",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Turboprop",
          "emoji": "✈️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "U",
          "word": "Ultralight",
          "emoji": "✈️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "VTOL Aircraft",
          "emoji": "✈️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "W",
          "word": "Wing Suit",
          "emoji": "🪂",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "X-wing Drone",
          "emoji": "🛸",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Y",
          "word": "Yellow Biplane",
          "emoji": "✈️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zeppelin",
          "emoji": "🎈",
          "bgColor": "#C0C0C0"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesWater1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Water Vehicles Part 1",
          videoId: "vehicles-water-1",
          bgGradient: ["#0077B6","#00B4D8"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Aircraft Carrier",
          "emoji": "🚢",
          "bgColor": "#708090"
          },
          {
          "letter": "B",
          "word": "Boat",
          "emoji": "⛵",
          "bgColor": "#4682B4"
          },
          {
          "letter": "C",
          "word": "Canoe",
          "emoji": "🛶",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dinghy",
          "emoji": "⛵",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Electric Boat",
          "emoji": "🚤",
          "bgColor": "#00CED1"
          },
          {
          "letter": "F",
          "word": "Ferry",
          "emoji": "⛴️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "G",
          "word": "Gondola",
          "emoji": "🛶",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "H",
          "word": "Houseboat",
          "emoji": "🚢",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Navy Ship",
          "emoji": "🚢",
          "bgColor": "#000080"
          },
          {
          "letter": "J",
          "word": "Jet Ski",
          "emoji": "🚤",
          "bgColor": "#FF6347"
          },
          {
          "letter": "K",
          "word": "Kayak",
          "emoji": "🛶",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Lifeboat",
          "emoji": "🚤",
          "bgColor": "#FF4500"
          },
          {
          "letter": "M",
          "word": "Motorboat",
          "emoji": "🚤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Navy Destroyer",
          "emoji": "🚢",
          "bgColor": "#708090"
          },
          {
          "letter": "O",
          "word": "Oil Tanker",
          "emoji": "🚢",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "P",
          "word": "Paddle Boat",
          "emoji": "🚣",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Queen Ship",
          "emoji": "🚢",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Raft",
          "emoji": "🛶",
          "bgColor": "#DEB887"
          },
          {
          "letter": "S",
          "word": "Submarine",
          "emoji": "🚢",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "T",
          "word": "Tugboat",
          "emoji": "🚤",
          "bgColor": "#4682B4"
          },
          {
          "letter": "U",
          "word": "U-boat",
          "emoji": "🚢",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Viking Ship",
          "emoji": "⛵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "W",
          "word": "Warship",
          "emoji": "🚢",
          "bgColor": "#708090"
          },
          {
          "letter": "X",
          "word": "X-craft Sub",
          "emoji": "🚢",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Y",
          "word": "Yacht",
          "emoji": "🛥️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zodiac Boat",
          "emoji": "🚤",
          "bgColor": "#696969"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesTrain1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Trains & Railways Part 1",
          videoId: "vehicles-train-1",
          bgGradient: ["#636363","#A2AB58"] as [string, string],
          accentColor: "#7F8C8D",
          letters: [
          {
          "letter": "A",
          "word": "Acela Express",
          "emoji": "🚄",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "B",
          "word": "Bullet Train",
          "emoji": "🚅",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Coal Train",
          "emoji": "🚂",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "D",
          "word": "Diesel Engine",
          "emoji": "🚂",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Electric Train",
          "emoji": "🚃",
          "bgColor": "#4682B4"
          },
          {
          "letter": "F",
          "word": "Freight Train",
          "emoji": "🚂",
          "bgColor": "#8B4513"
          },
          {
          "letter": "G",
          "word": "Goods Wagon",
          "emoji": "🚃",
          "bgColor": "#A0522D"
          },
          {
          "letter": "H",
          "word": "High-speed Rail",
          "emoji": "🚄",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "I",
          "word": "Indian Railways",
          "emoji": "🚂",
          "bgColor": "#000080"
          },
          {
          "letter": "J",
          "word": "Junction Train",
          "emoji": "🚂",
          "bgColor": "#696969"
          },
          {
          "letter": "K",
          "word": "Konkan Railway",
          "emoji": "🚂",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Local Train",
          "emoji": "🚃",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Metro Train",
          "emoji": "🚇",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Narrow Gauge",
          "emoji": "🚂",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Orient Express",
          "emoji": "🚂",
          "bgColor": "#DAA520"
          },
          {
          "letter": "P",
          "word": "Passenger Train",
          "emoji": "🚃",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quick Express",
          "emoji": "🚄",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Rajdhani Express",
          "emoji": "🚂",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Shatabdi Express",
          "emoji": "🚄",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Toy Train",
          "emoji": "🚂",
          "bgColor": "#FF6347"
          },
          {
          "letter": "U",
          "word": "Underground Metro",
          "emoji": "🚇",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vande Bharat",
          "emoji": "🚄",
          "bgColor": "#FF9933"
          },
          {
          "letter": "W",
          "word": "Wagon",
          "emoji": "🚃",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "X-press Train",
          "emoji": "🚄",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yellow Line Metro",
          "emoji": "🚇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zoom Train",
          "emoji": "🚄",
          "bgColor": "#00CED1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesConstruction1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Construction Vehicles Part 1",
          videoId: "vehicles-construction-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Asphalt Paver",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Bulldozer",
          "emoji": "🚜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Crane",
          "emoji": "🏗️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "D",
          "word": "Digger",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Excavator",
          "emoji": "🚜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Forklift",
          "emoji": "🚜",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Grader",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Hydraulic Drill",
          "emoji": "🔧",
          "bgColor": "#696969"
          },
          {
          "letter": "I",
          "word": "Industrial Loader",
          "emoji": "🚜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "JCB Machine",
          "emoji": "🚜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Knuckle Boom",
          "emoji": "🏗️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Loader",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mixer Truck",
          "emoji": "🚛",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "N",
          "word": "Nail Gun",
          "emoji": "🔧",
          "bgColor": "#FF4500"
          },
          {
          "letter": "O",
          "word": "Overhead Crane",
          "emoji": "🏗️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pile Driver",
          "emoji": "🏗️",
          "bgColor": "#696969"
          },
          {
          "letter": "Q",
          "word": "Quarry Truck",
          "emoji": "🚛",
          "bgColor": "#8B6914"
          },
          {
          "letter": "R",
          "word": "Road Roller",
          "emoji": "🚜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Skid Steer",
          "emoji": "🚜",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Tower Crane",
          "emoji": "🏗️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "U",
          "word": "Utility Truck",
          "emoji": "🚛",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Vibratory Roller",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "W",
          "word": "Wrecking Ball",
          "emoji": "🏗️",
          "bgColor": "#696969"
          },
          {
          "letter": "X",
          "word": "X-large Excavator",
          "emoji": "🚜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Y",
          "word": "Yellow Excavator",
          "emoji": "🚜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zero-turn Mower",
          "emoji": "🚜",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSpacePlanets1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Space Part 1",
          videoId: "space-planets-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Asteroid",
          "emoji": "☄️",
          "bgColor": "#696969"
          },
          {
          "letter": "B",
          "word": "Black Hole",
          "emoji": "🕳️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "C",
          "word": "Comet",
          "emoji": "☄️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "D",
          "word": "Dwarf Planet",
          "emoji": "🪐",
          "bgColor": "#8B6914"
          },
          {
          "letter": "E",
          "word": "Earth",
          "emoji": "🌍",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Full Moon",
          "emoji": "🌕",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "G",
          "word": "Galaxy",
          "emoji": "🌌",
          "bgColor": "#4B0082"
          },
          {
          "letter": "H",
          "word": "Hubble Telescope",
          "emoji": "🔭",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "I",
          "word": "International Space Station",
          "emoji": "🛸",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "J",
          "word": "Jupiter",
          "emoji": "🪐",
          "bgColor": "#CD853F"
          },
          {
          "letter": "K",
          "word": "Kuiper Belt",
          "emoji": "💫",
          "bgColor": "#4682B4"
          },
          {
          "letter": "L",
          "word": "Lunar Eclipse",
          "emoji": "🌑",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "M",
          "word": "Mars",
          "emoji": "🔴",
          "bgColor": "#B22222"
          },
          {
          "letter": "N",
          "word": "Nebula",
          "emoji": "🌌",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "O",
          "word": "Orbit",
          "emoji": "🪐",
          "bgColor": "#4682B4"
          },
          {
          "letter": "P",
          "word": "Pluto",
          "emoji": "🪐",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Q",
          "word": "Quasar",
          "emoji": "💫",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Rocket",
          "emoji": "🚀",
          "bgColor": "#FF4500"
          },
          {
          "letter": "S",
          "word": "Saturn",
          "emoji": "🪐",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Telescope",
          "emoji": "🔭",
          "bgColor": "#4682B4"
          },
          {
          "letter": "U",
          "word": "Uranus",
          "emoji": "🪐",
          "bgColor": "#00CED1"
          },
          {
          "letter": "V",
          "word": "Venus",
          "emoji": "🪐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "White Dwarf",
          "emoji": "⭐",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-ray Star",
          "emoji": "⭐",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Y",
          "word": "Yellow Sun",
          "emoji": "☀️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zero Gravity",
          "emoji": "🧑‍🚀",
          "bgColor": "#191970"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceBody1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Human Body Parts Part 1",
          videoId: "science-body-1",
          bgGradient: ["#E44D26","#F16529"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Arm",
          "emoji": "💪",
          "bgColor": "#DEB887"
          },
          {
          "letter": "B",
          "word": "Brain",
          "emoji": "🧠",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "C",
          "word": "Chest",
          "emoji": "🫁",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dental (Teeth)",
          "emoji": "🦷",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Eye",
          "emoji": "👁️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Finger",
          "emoji": "👆",
          "bgColor": "#DEB887"
          },
          {
          "letter": "G",
          "word": "Gums",
          "emoji": "😁",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "H",
          "word": "Heart",
          "emoji": "❤️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Intestine",
          "emoji": "🫁",
          "bgColor": "#FF6347"
          },
          {
          "letter": "J",
          "word": "Jaw",
          "emoji": "😬",
          "bgColor": "#DEB887"
          },
          {
          "letter": "K",
          "word": "Knee",
          "emoji": "🦵",
          "bgColor": "#DEB887"
          },
          {
          "letter": "L",
          "word": "Lung",
          "emoji": "🫁",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "M",
          "word": "Muscle",
          "emoji": "💪",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Nose",
          "emoji": "👃",
          "bgColor": "#DEB887"
          },
          {
          "letter": "O",
          "word": "Organ",
          "emoji": "🫀",
          "bgColor": "#DC143C"
          },
          {
          "letter": "P",
          "word": "Palm",
          "emoji": "🤚",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Q",
          "word": "Quadriceps",
          "emoji": "🦵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Rib",
          "emoji": "🦴",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "S",
          "word": "Skull",
          "emoji": "💀",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "T",
          "word": "Tongue",
          "emoji": "👅",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "U",
          "word": "Ulna Bone",
          "emoji": "🦴",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "V",
          "word": "Vein",
          "emoji": "🩸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "W",
          "word": "Wrist",
          "emoji": "🤚",
          "bgColor": "#DEB887"
          },
          {
          "letter": "X",
          "word": "X-ray",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yawn (Mouth)",
          "emoji": "🥱",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Z",
          "word": "Zygomatic Bone",
          "emoji": "💀",
          "bgColor": "#F5F5DC"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceDinosaurs1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dinosaurs Part 1",
          videoId: "science-dinosaurs-1",
          bgGradient: ["#134E5E","#71B280"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Allosaurus",
          "emoji": "🦕",
          "bgColor": "#556B2F"
          },
          {
          "letter": "B",
          "word": "Brachiosaurus",
          "emoji": "🦕",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "C",
          "word": "Carnotaurus",
          "emoji": "🦖",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Diplodocus",
          "emoji": "🦕",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "E",
          "word": "Edmontosaurus",
          "emoji": "🦕",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fossil",
          "emoji": "🦴",
          "bgColor": "#DEB887"
          },
          {
          "letter": "G",
          "word": "Giganotosaurus",
          "emoji": "🦖",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "H",
          "word": "Hadrosaurus",
          "emoji": "🦕",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "I",
          "word": "Iguanodon",
          "emoji": "🦕",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jurassic Era",
          "emoji": "🦖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "K",
          "word": "Kentrosaurus",
          "emoji": "🦕",
          "bgColor": "#8B6914"
          },
          {
          "letter": "L",
          "word": "Lambeosaurus",
          "emoji": "🦕",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "M",
          "word": "Megalosaurus",
          "emoji": "🦖",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "N",
          "word": "Nodosaurus",
          "emoji": "🦕",
          "bgColor": "#696969"
          },
          {
          "letter": "O",
          "word": "Oviraptor",
          "emoji": "🦖",
          "bgColor": "#8B6914"
          },
          {
          "letter": "P",
          "word": "Pterodactyl",
          "emoji": "🦖",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quetzalcoatlus",
          "emoji": "🦖",
          "bgColor": "#DAA520"
          },
          {
          "letter": "R",
          "word": "Raptor",
          "emoji": "🦖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Stegosaurus",
          "emoji": "🦕",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "T-Rex",
          "emoji": "🦖",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "U",
          "word": "Utahraptor",
          "emoji": "🦖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Velociraptor",
          "emoji": "🦖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "W",
          "word": "Woolly Mammoth",
          "emoji": "🦣",
          "bgColor": "#8B6914"
          },
          {
          "letter": "X",
          "word": "Xiaosaurus",
          "emoji": "🦕",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yangchuanosaurus",
          "emoji": "🦖",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Z",
          "word": "Zuniceratops",
          "emoji": "🦕",
          "bgColor": "#6B8E23"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceWeather1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Weather & Nature Part 1",
          videoId: "science-weather-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#3498DB",
          letters: [
          {
          "letter": "A",
          "word": "Aurora",
          "emoji": "🌌",
          "bgColor": "#006400"
          },
          {
          "letter": "B",
          "word": "Blizzard",
          "emoji": "🌨️",
          "bgColor": "#F0F8FF"
          },
          {
          "letter": "C",
          "word": "Cloud",
          "emoji": "☁️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "D",
          "word": "Drizzle",
          "emoji": "🌧️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Earthquake",
          "emoji": "🌍",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Flood",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "G",
          "word": "Glacier",
          "emoji": "🏔️",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "H",
          "word": "Hailstorm",
          "emoji": "🌨️",
          "bgColor": "#B0C4DE"
          },
          {
          "letter": "I",
          "word": "Ice",
          "emoji": "🧊",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "J",
          "word": "Jet Stream",
          "emoji": "💨",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "K",
          "word": "Kelvin (Temp)",
          "emoji": "🌡️",
          "bgColor": "#FF4500"
          },
          {
          "letter": "L",
          "word": "Lightning",
          "emoji": "⚡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Monsoon",
          "emoji": "🌧️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "N",
          "word": "Northern Lights",
          "emoji": "🌌",
          "bgColor": "#006400"
          },
          {
          "letter": "O",
          "word": "Overcast",
          "emoji": "☁️",
          "bgColor": "#808080"
          },
          {
          "letter": "P",
          "word": "Precipitation",
          "emoji": "🌧️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quake",
          "emoji": "🌍",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Rainbow",
          "emoji": "🌈",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Sunshine",
          "emoji": "☀️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Thunder",
          "emoji": "⛈️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "U",
          "word": "Ultraviolet",
          "emoji": "☀️",
          "bgColor": "#8B008B"
          },
          {
          "letter": "V",
          "word": "Volcano",
          "emoji": "🌋",
          "bgColor": "#FF4500"
          },
          {
          "letter": "W",
          "word": "Wind",
          "emoji": "💨",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "X",
          "word": "X-treme Heat",
          "emoji": "🌡️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Yellow Sky",
          "emoji": "🌅",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zephyr (Breeze)",
          "emoji": "💨",
          "bgColor": "#87CEEB"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceInventions1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Great Inventions Part 1",
          videoId: "science-inventions-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Airplane",
          "emoji": "✈️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "B",
          "word": "Bulb",
          "emoji": "💡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Computer",
          "emoji": "💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "D",
          "word": "Dynamite",
          "emoji": "🧨",
          "bgColor": "#FF0000"
          },
          {
          "letter": "E",
          "word": "Electricity",
          "emoji": "⚡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fridge",
          "emoji": "🧊",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "G",
          "word": "GPS",
          "emoji": "📡",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Helicopter",
          "emoji": "🚁",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Internet",
          "emoji": "🌐",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Jet Engine",
          "emoji": "✈️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "K",
          "word": "Keyboard",
          "emoji": "⌨️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Laser",
          "emoji": "🔴",
          "bgColor": "#FF0000"
          },
          {
          "letter": "M",
          "word": "Microscope",
          "emoji": "🔬",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "N",
          "word": "Nuclear Energy",
          "emoji": "☢️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Oven",
          "emoji": "🔥",
          "bgColor": "#FF4500"
          },
          {
          "letter": "P",
          "word": "Printing Press",
          "emoji": "🖨️",
          "bgColor": "#696969"
          },
          {
          "letter": "Q",
          "word": "Quantum Computer",
          "emoji": "💻",
          "bgColor": "#4B0082"
          },
          {
          "letter": "R",
          "word": "Robot",
          "emoji": "🤖",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "S",
          "word": "Satellite",
          "emoji": "🛰️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Telephone",
          "emoji": "📞",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Umbrella",
          "emoji": "☂️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vaccine",
          "emoji": "💉",
          "bgColor": "#00CED1"
          },
          {
          "letter": "W",
          "word": "Wheel",
          "emoji": "☸️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "X-ray Machine",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yarn Spinner",
          "emoji": "🧶",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Z",
          "word": "Zipper",
          "emoji": "🔗",
          "bgColor": "#C0C0C0"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsOutdoor1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Outdoor Sports Part 1",
          videoId: "sports-outdoor-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Archery",
          "emoji": "🏹",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Baseball",
          "emoji": "⚾",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Cricket",
          "emoji": "🏏",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Discus Throw",
          "emoji": "🥏",
          "bgColor": "#FFD700"
          },
          {
          "letter": "E",
          "word": "Equestrian",
          "emoji": "🏇",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Football",
          "emoji": "⚽",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Golf",
          "emoji": "⛳",
          "bgColor": "#006400"
          },
          {
          "letter": "H",
          "word": "Hockey",
          "emoji": "🏑",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Ice Hockey",
          "emoji": "🏒",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "J",
          "word": "Javelin",
          "emoji": "🎯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kabaddi",
          "emoji": "🤼",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Long Jump",
          "emoji": "🏃",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Marathon",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Netball",
          "emoji": "🏐",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Olympics",
          "emoji": "🏅",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Polo",
          "emoji": "🏇",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Quidditch",
          "emoji": "🧹",
          "bgColor": "#8B0000"
          },
          {
          "letter": "R",
          "word": "Rugby",
          "emoji": "🏉",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "S",
          "word": "Soccer",
          "emoji": "⚽",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tennis",
          "emoji": "🎾",
          "bgColor": "#32CD32"
          },
          {
          "letter": "U",
          "word": "Ultimate Frisbee",
          "emoji": "🥏",
          "bgColor": "#FF6347"
          },
          {
          "letter": "V",
          "word": "Volleyball",
          "emoji": "🏐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Wrestling",
          "emoji": "🤼",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "X Games",
          "emoji": "🏅",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yoga",
          "emoji": "🧘",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Z",
          "word": "Zorbing",
          "emoji": "⚽",
          "bgColor": "#00CED1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsWater1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Water Sports Part 1",
          videoId: "sports-water-1",
          bgGradient: ["#0077B6","#00B4D8"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Aquatics",
          "emoji": "🏊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Body Surfing",
          "emoji": "🏄",
          "bgColor": "#00CED1"
          },
          {
          "letter": "C",
          "word": "Canoeing",
          "emoji": "🛶",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Diving",
          "emoji": "🤿",
          "bgColor": "#191970"
          },
          {
          "letter": "E",
          "word": "Extreme Surfing",
          "emoji": "🏄",
          "bgColor": "#00CED1"
          },
          {
          "letter": "F",
          "word": "Fishing",
          "emoji": "🎣",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Gondola Racing",
          "emoji": "🛶",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "H",
          "word": "Hydroplane",
          "emoji": "🚤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Ice Swimming",
          "emoji": "🏊",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "J",
          "word": "Jet Skiing",
          "emoji": "🚤",
          "bgColor": "#FF6347"
          },
          {
          "letter": "K",
          "word": "Kayaking",
          "emoji": "🛶",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Lap Swimming",
          "emoji": "🏊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "M",
          "word": "Motor Boating",
          "emoji": "🚤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Naval Race",
          "emoji": "⛵",
          "bgColor": "#000080"
          },
          {
          "letter": "O",
          "word": "Open Water Swim",
          "emoji": "🏊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "P",
          "word": "Paddle Board",
          "emoji": "🏄",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Q",
          "word": "Quick Sailing",
          "emoji": "⛵",
          "bgColor": "#4682B4"
          },
          {
          "letter": "R",
          "word": "Rowing",
          "emoji": "🚣",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Surfing",
          "emoji": "🏄",
          "bgColor": "#00CED1"
          },
          {
          "letter": "T",
          "word": "Tubing",
          "emoji": "🛟",
          "bgColor": "#FF6347"
          },
          {
          "letter": "U",
          "word": "Underwater Hockey",
          "emoji": "🤿",
          "bgColor": "#191970"
          },
          {
          "letter": "V",
          "word": "Volleyball Beach",
          "emoji": "🏐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Water Polo",
          "emoji": "🤽",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "X-treme Rafting",
          "emoji": "🛶",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yachting",
          "emoji": "⛵",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zip Line Water",
          "emoji": "🏄",
          "bgColor": "#32CD32"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsIndian1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Sports Part 1",
          videoId: "sports-indian-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Atya Patya",
          "emoji": "🏃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "B",
          "word": "Badminton",
          "emoji": "🏸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "Cricket",
          "emoji": "🏏",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Dahi Handi",
          "emoji": "🏺",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Elephant Polo",
          "emoji": "🐘",
          "bgColor": "#708090"
          },
          {
          "letter": "F",
          "word": "Field Hockey",
          "emoji": "🏑",
          "bgColor": "#4169E1"
          },
          {
          "letter": "G",
          "word": "Gilli Danda",
          "emoji": "🏏",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Horse Racing",
          "emoji": "🏇",
          "bgColor": "#228B22"
          },
          {
          "letter": "I",
          "word": "IPL Cricket",
          "emoji": "🏏",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Jallikattu",
          "emoji": "🐂",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Kabaddi",
          "emoji": "🤼",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Lagori",
          "emoji": "🎯",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Mallakhamb",
          "emoji": "🤸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Nine Pin Bowling",
          "emoji": "🎳",
          "bgColor": "#DEB887"
          },
          {
          "letter": "O",
          "word": "Olympic Wrestling",
          "emoji": "🤼",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Pehlwani",
          "emoji": "🤼",
          "bgColor": "#CD853F"
          },
          {
          "letter": "Q",
          "word": "Quick Cricket",
          "emoji": "🏏",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Ratha Race",
          "emoji": "🏇",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Silambam",
          "emoji": "🤺",
          "bgColor": "#8B0000"
          },
          {
          "letter": "T",
          "word": "Table Tennis",
          "emoji": "🏓",
          "bgColor": "#4169E1"
          },
          {
          "letter": "U",
          "word": "Umpiring",
          "emoji": "🧑‍⚖️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Vallamkali Boat Race",
          "emoji": "🚣",
          "bgColor": "#4682B4"
          },
          {
          "letter": "W",
          "word": "Wrestling",
          "emoji": "🤼",
          "bgColor": "#DAA520"
          },
          {
          "letter": "X",
          "word": "X-country Running",
          "emoji": "🏃",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yoga",
          "emoji": "🧘",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Z",
          "word": "Zumba",
          "emoji": "💃",
          "bgColor": "#FF1493"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyRiversIndia1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rivers of India Part 1",
          videoId: "geography-rivers-india-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Alaknanda",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "B",
          "word": "Brahmaputra",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Cauvery",
          "emoji": "🏞️",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "D",
          "word": "Damodar",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "East Flowing Rivers",
          "emoji": "🌊",
          "bgColor": "#00CED1"
          },
          {
          "letter": "F",
          "word": "Tons (Tributary)",
          "emoji": "🏞️",
          "bgColor": "#5F9EA0"
          },
          {
          "letter": "G",
          "word": "Ganga",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "H",
          "word": "Hooghly",
          "emoji": "🏞️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "I",
          "word": "Indus",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "J",
          "word": "Jhelum",
          "emoji": "🏞️",
          "bgColor": "#5F9EA0"
          },
          {
          "letter": "K",
          "word": "Krishna",
          "emoji": "🏞️",
          "bgColor": "#006400"
          },
          {
          "letter": "L",
          "word": "Luni",
          "emoji": "🏞️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mahanadi",
          "emoji": "🏞️",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "N",
          "word": "Narmada",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Ozar (Stream)",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "P",
          "word": "Periyar",
          "emoji": "🏞️",
          "bgColor": "#006400"
          },
          {
          "letter": "Q",
          "word": "Quilon River",
          "emoji": "🏞️",
          "bgColor": "#5F9EA0"
          },
          {
          "letter": "R",
          "word": "Ravi",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Sutlej",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Tapti",
          "emoji": "🏞️",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "U",
          "word": "Upper Ganges",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vaigai",
          "emoji": "🏞️",
          "bgColor": "#5F9EA0"
          },
          {
          "letter": "W",
          "word": "Wardha",
          "emoji": "🏞️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "X",
          "word": "Xuvi (Stream)",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yamuna",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zuari",
          "emoji": "🏞️",
          "bgColor": "#2E8B57"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyStatesIndia1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian States Part 1",
          videoId: "geography-states-india-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Andhra Pradesh",
          "emoji": "🏛️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bihar",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Chhattisgarh",
          "emoji": "🏛️",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Delhi",
          "emoji": "🏛️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "E",
          "word": "East India",
          "emoji": "🗺️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Five Rivers (Punjab)",
          "emoji": "🏛️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Gujarat",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Haryana",
          "emoji": "🏛️",
          "bgColor": "#228B22"
          },
          {
          "letter": "I",
          "word": "Indian Flag",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "Jharkhand",
          "emoji": "🏛️",
          "bgColor": "#006400"
          },
          {
          "letter": "K",
          "word": "Karnataka",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Ladakh",
          "emoji": "🏔️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Maharashtra",
          "emoji": "🏛️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Nagaland",
          "emoji": "🏛️",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Odisha",
          "emoji": "🏛️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Punjab",
          "emoji": "🏛️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "Q",
          "word": "Queen City (Jaipur)",
          "emoji": "🏰",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "R",
          "word": "Rajasthan",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "S",
          "word": "Sikkim",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tamil Nadu",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Uttar Pradesh",
          "emoji": "🏛️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Varanasi City",
          "emoji": "🏛️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "W",
          "word": "West Bengal",
          "emoji": "🏛️",
          "bgColor": "#228B22"
          },
          {
          "letter": "X",
          "word": "X-plore India",
          "emoji": "🗺️",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "Yellow River Region",
          "emoji": "🏞️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zanskar Valley",
          "emoji": "🏔️",
          "bgColor": "#4682B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyMonuments1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Monuments Part 1",
          videoId: "geography-monuments-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Agra Fort",
          "emoji": "🏰",
          "bgColor": "#CD853F"
          },
          {
          "letter": "B",
          "word": "Brihadeeswara Temple",
          "emoji": "🛕",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Charminar",
          "emoji": "🏛️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "D",
          "word": "Dalhousie Hills",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "E",
          "word": "Ellora Caves",
          "emoji": "🏛️",
          "bgColor": "#696969"
          },
          {
          "letter": "F",
          "word": "Fatehpur Sikri",
          "emoji": "🏰",
          "bgColor": "#CD853F"
          },
          {
          "letter": "G",
          "word": "Gateway of India",
          "emoji": "🏛️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Hawa Mahal",
          "emoji": "🏰",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "I",
          "word": "India Gate",
          "emoji": "🏛️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "J",
          "word": "Jaipur Palace",
          "emoji": "🏰",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "K",
          "word": "Konark Sun Temple",
          "emoji": "🛕",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Lotus Temple",
          "emoji": "🪷",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Mysore Palace",
          "emoji": "🏰",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Nalanda University",
          "emoji": "🏛️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Old Fort Delhi",
          "emoji": "🏰",
          "bgColor": "#CD853F"
          },
          {
          "letter": "P",
          "word": "Parliament House",
          "emoji": "🏛️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Q",
          "word": "Qutub Minar",
          "emoji": "🏛️",
          "bgColor": "#CD853F"
          },
          {
          "letter": "R",
          "word": "Red Fort",
          "emoji": "🏰",
          "bgColor": "#B22222"
          },
          {
          "letter": "S",
          "word": "Sanchi Stupa",
          "emoji": "🛕",
          "bgColor": "#DEB887"
          },
          {
          "letter": "T",
          "word": "Taj Mahal",
          "emoji": "🕌",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "U",
          "word": "Udaipur City Palace",
          "emoji": "🏰",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "V",
          "word": "Victoria Memorial",
          "emoji": "🏛️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "W",
          "word": "Wagah Border",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "X",
          "word": "Xavier Church Goa",
          "emoji": "⛪",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Y",
          "word": "Yamuna Ghat",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zoological Garden",
          "emoji": "🦁",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsMusicIndianInstruments1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Musical Instruments Part 1",
          videoId: "music-indian-instruments-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Algoza",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bansuri",
          "emoji": "🎶",
          "bgColor": "#DAA520"
          },
          {
          "letter": "C",
          "word": "Chenda",
          "emoji": "🥁",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dholak",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "E",
          "word": "Ektara",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Flute",
          "emoji": "🎵",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "G",
          "word": "Ghatam",
          "emoji": "🏺",
          "bgColor": "#CD853F"
          },
          {
          "letter": "H",
          "word": "Harmonium",
          "emoji": "🎹",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Drum",
          "emoji": "🥁",
          "bgColor": "#DAA520"
          },
          {
          "letter": "J",
          "word": "Jaltarang",
          "emoji": "🎵",
          "bgColor": "#4682B4"
          },
          {
          "letter": "K",
          "word": "Khol",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "L",
          "word": "Lute",
          "emoji": "🎸",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mridangam",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "N",
          "word": "Nadaswaram",
          "emoji": "🎺",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Ottu",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Pakhawaj",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "Q",
          "word": "Qawwali Drum",
          "emoji": "🥁",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Ravanahatha",
          "emoji": "🎻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Sitar",
          "emoji": "🎸",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Tabla",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "U",
          "word": "Udukai",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Veena",
          "emoji": "🎸",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Wooden Flute",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "Xylophone",
          "emoji": "🎵",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "Yazh",
          "emoji": "🎸",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zither",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsMusicWesternInstruments1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Western Musical Instruments Part 1",
          videoId: "music-western-instruments-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Accordion",
          "emoji": "🪗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Banjo",
          "emoji": "🪕",
          "bgColor": "#DAA520"
          },
          {
          "letter": "C",
          "word": "Cello",
          "emoji": "🎻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Drums",
          "emoji": "🥁",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Electric Guitar",
          "emoji": "🎸",
          "bgColor": "#FF4500"
          },
          {
          "letter": "F",
          "word": "French Horn",
          "emoji": "🎺",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Guitar",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Harp",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Irish Fiddle",
          "emoji": "🎻",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jazz Saxophone",
          "emoji": "🎷",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Keyboard",
          "emoji": "🎹",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Lyre",
          "emoji": "🎵",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mandolin",
          "emoji": "🪕",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Nylon Guitar",
          "emoji": "🎸",
          "bgColor": "#DEB887"
          },
          {
          "letter": "O",
          "word": "Oboe",
          "emoji": "🎵",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "P",
          "word": "Piano",
          "emoji": "🎹",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quartet Violin",
          "emoji": "🎻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Recorder",
          "emoji": "🎵",
          "bgColor": "#DEB887"
          },
          {
          "letter": "S",
          "word": "Saxophone",
          "emoji": "🎷",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Trumpet",
          "emoji": "🎺",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Ukulele",
          "emoji": "🪕",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Violin",
          "emoji": "🎻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "W",
          "word": "Whistle",
          "emoji": "🎵",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "X",
          "word": "Xylophone",
          "emoji": "🎵",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "Yodel Horn",
          "emoji": "📯",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zither",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureFestivals1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Festivals Part 1",
          videoId: "culture-festivals-1",
          bgGradient: ["#FF9933","#FFD700"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Akshaya Tritiya",
          "emoji": "🪔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Baisakhi",
          "emoji": "🌾",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "C",
          "word": "Chhath Puja",
          "emoji": "🌅",
          "bgColor": "#FF6347"
          },
          {
          "letter": "D",
          "word": "Diwali",
          "emoji": "🪔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "E",
          "word": "Eid",
          "emoji": "🌙",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Flower Festival",
          "emoji": "🌸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Ganesh Chaturthi",
          "emoji": "🐘",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "H",
          "word": "Holi",
          "emoji": "🎨",
          "bgColor": "#FF1493"
          },
          {
          "letter": "I",
          "word": "Independence Day",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "Janmashtami",
          "emoji": "🪈",
          "bgColor": "#4169E1"
          },
          {
          "letter": "K",
          "word": "Kite Festival",
          "emoji": "🪁",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Lohri",
          "emoji": "🔥",
          "bgColor": "#FF4500"
          },
          {
          "letter": "M",
          "word": "Makar Sankranti",
          "emoji": "🪁",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Navratri",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "O",
          "word": "Onam",
          "emoji": "🌸",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Pongal",
          "emoji": "🍚",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "Q",
          "word": "Qawwali Night",
          "emoji": "🎶",
          "bgColor": "#191970"
          },
          {
          "letter": "R",
          "word": "Raksha Bandhan",
          "emoji": "🎀",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "S",
          "word": "Shivratri",
          "emoji": "🔱",
          "bgColor": "#4169E1"
          },
          {
          "letter": "T",
          "word": "Teej",
          "emoji": "🌸",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Ugadi",
          "emoji": "🌺",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Vasant Panchami",
          "emoji": "🌼",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Winter Solstice",
          "emoji": "❄️",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "X",
          "word": "X-mas (Christmas)",
          "emoji": "🎄",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yoga Day",
          "emoji": "🧘",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Z",
          "word": "Zest of Colors (Holi)",
          "emoji": "🎨",
          "bgColor": "#FF1493"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureDances1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Dances Part 1",
          videoId: "culture-dances-1",
          bgGradient: ["#ED4264","#FFEDBC"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "Apsara Dance",
          "emoji": "💃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bharatanatyam",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Chhau Dance",
          "emoji": "💃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "D",
          "word": "Dandiya",
          "emoji": "💃",
          "bgColor": "#FF6347"
          },
          {
          "letter": "E",
          "word": "Eastern Folk Dance",
          "emoji": "💃",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Folk Dance",
          "emoji": "💃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Garba",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Hip Hop",
          "emoji": "🕺",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "Indian Classical",
          "emoji": "💃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Jhumar",
          "emoji": "💃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kathak",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lavani",
          "emoji": "💃",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Mohiniyattam",
          "emoji": "💃",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Nautanki",
          "emoji": "🎭",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "O",
          "word": "Odissi",
          "emoji": "💃",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Punjabi Bhangra",
          "emoji": "🕺",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "Q",
          "word": "Quick Step Dance",
          "emoji": "🕺",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Raas Leela",
          "emoji": "💃",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Sattriya",
          "emoji": "💃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tango",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Urban Dance",
          "emoji": "🕺",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Vilasini Natyam",
          "emoji": "💃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Waltz",
          "emoji": "💃",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "X-press Dance",
          "emoji": "🕺",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yakshagana",
          "emoji": "🎭",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zumba",
          "emoji": "💃",
          "bgColor": "#FF1493"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureFood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Food Part 1",
          videoId: "culture-food-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Aloo Paratha",
          "emoji": "🫓",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Biryani",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Chole Bhature",
          "emoji": "🍛",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "D",
          "word": "Dosa",
          "emoji": "🫓",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Egg Curry",
          "emoji": "🍛",
          "bgColor": "#FF6347"
          },
          {
          "letter": "F",
          "word": "Fish Curry",
          "emoji": "🐟",
          "bgColor": "#FF4500"
          },
          {
          "letter": "G",
          "word": "Gulab Jamun",
          "emoji": "🍩",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Halwa",
          "emoji": "🍮",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "Idli",
          "emoji": "🫓",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "J",
          "word": "Jalebi",
          "emoji": "🍩",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kheer",
          "emoji": "🍮",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "L",
          "word": "Lassi",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Masala Chai",
          "emoji": "🍵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Naan",
          "emoji": "🫓",
          "bgColor": "#DEB887"
          },
          {
          "letter": "O",
          "word": "Omelette",
          "emoji": "🍳",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Paneer Tikka",
          "emoji": "🍢",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Q",
          "word": "Qorma",
          "emoji": "🍛",
          "bgColor": "#DAA520"
          },
          {
          "letter": "R",
          "word": "Rajma Chawal",
          "emoji": "🍚",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Samosa",
          "emoji": "🥟",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Tandoori Chicken",
          "emoji": "🍗",
          "bgColor": "#FF4500"
          },
          {
          "letter": "U",
          "word": "Upma",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Vada Pav",
          "emoji": "🍔",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "W",
          "word": "Wada",
          "emoji": "🍩",
          "bgColor": "#DAA520"
          },
          {
          "letter": "X",
          "word": "X-tra Spicy Curry",
          "emoji": "🌶️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Yogurt Raita",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zarda Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsProfessionsHelpers1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Community Helpers Part 1",
          videoId: "professions-helpers-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Astronaut",
          "emoji": "🧑‍🚀",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Baker",
          "emoji": "🧑‍🍳",
          "bgColor": "#DEB887"
          },
          {
          "letter": "C",
          "word": "Carpenter",
          "emoji": "🪚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Doctor",
          "emoji": "👨‍⚕️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Engineer",
          "emoji": "👷",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Firefighter",
          "emoji": "🧑‍🚒",
          "bgColor": "#FF0000"
          },
          {
          "letter": "G",
          "word": "Gardener",
          "emoji": "🧑‍🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hospital Nurse",
          "emoji": "👩‍⚕️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "I",
          "word": "IT Engineer",
          "emoji": "👨‍💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Judge",
          "emoji": "⚖️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "K",
          "word": "Kisan (Farmer)",
          "emoji": "🧑‍🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Lawyer",
          "emoji": "⚖️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "M",
          "word": "Mechanic",
          "emoji": "🔧",
          "bgColor": "#4682B4"
          },
          {
          "letter": "N",
          "word": "Nurse",
          "emoji": "👩‍⚕️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "O",
          "word": "Officer",
          "emoji": "👮",
          "bgColor": "#000080"
          },
          {
          "letter": "P",
          "word": "Pilot",
          "emoji": "👨‍✈️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quality Inspector",
          "emoji": "🔍",
          "bgColor": "#696969"
          },
          {
          "letter": "R",
          "word": "Railway Driver",
          "emoji": "🚂",
          "bgColor": "#4682B4"
          },
          {
          "letter": "S",
          "word": "Scientist",
          "emoji": "🧑‍🔬",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Teacher",
          "emoji": "👩‍🏫",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Umpire",
          "emoji": "🧑‍⚖️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Veterinarian",
          "emoji": "🧑‍⚕️",
          "bgColor": "#32CD32"
          },
          {
          "letter": "W",
          "word": "Welder",
          "emoji": "🔧",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "X",
          "word": "X-ray Technician",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yoga Instructor",
          "emoji": "🧘",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Z",
          "word": "Zookeeper",
          "emoji": "🧑‍🔬",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsProfessionsTech1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Technology Jobs Part 1",
          videoId: "professions-tech-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "App Developer",
          "emoji": "📱",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Blockchain Dev",
          "emoji": "⛓️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cloud Engineer",
          "emoji": "☁️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "D",
          "word": "Data Scientist",
          "emoji": "📊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Ethical Hacker",
          "emoji": "🖥️",
          "bgColor": "#32CD32"
          },
          {
          "letter": "F",
          "word": "Frontend Dev",
          "emoji": "💻",
          "bgColor": "#FF6347"
          },
          {
          "letter": "G",
          "word": "Game Developer",
          "emoji": "🎮",
          "bgColor": "#8B008B"
          },
          {
          "letter": "H",
          "word": "Hardware Engineer",
          "emoji": "🔧",
          "bgColor": "#696969"
          },
          {
          "letter": "I",
          "word": "IoT Engineer",
          "emoji": "📡",
          "bgColor": "#00CED1"
          },
          {
          "letter": "J",
          "word": "Java Developer",
          "emoji": "☕",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kubernetes Expert",
          "emoji": "⚙️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "L",
          "word": "Linux Admin",
          "emoji": "🐧",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "M",
          "word": "ML Engineer",
          "emoji": "🤖",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "N",
          "word": "Network Engineer",
          "emoji": "🌐",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "Operations Manager",
          "emoji": "📋",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "P",
          "word": "Product Manager",
          "emoji": "📱",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Q",
          "word": "QA Tester",
          "emoji": "🔍",
          "bgColor": "#32CD32"
          },
          {
          "letter": "R",
          "word": "Robotics Engineer",
          "emoji": "🤖",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "S",
          "word": "Software Engineer",
          "emoji": "💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "T",
          "word": "Tech Lead",
          "emoji": "👨‍💻",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "U",
          "word": "UX Designer",
          "emoji": "🎨",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "V",
          "word": "VR Developer",
          "emoji": "🥽",
          "bgColor": "#4B0082"
          },
          {
          "letter": "W",
          "word": "Web Developer",
          "emoji": "🌐",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "XR Engineer",
          "emoji": "🥽",
          "bgColor": "#8B008B"
          },
          {
          "letter": "Y",
          "word": "YouTube Creator",
          "emoji": "🎥",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Z",
          "word": "Zero-day Analyst",
          "emoji": "🔒",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
