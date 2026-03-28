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
    </>
  );
};
