import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import React from "react";

export const KidsLearningRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KidsAnimalsAustralian1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Australian Animals Part 1",
          videoId: "animals-australian-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Aussie Shepherd",
          "emoji": "🐶",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Bilby",
          "emoji": "🐭",
          "bgColor": "#DEB887"
          },
          {
          "letter": "C",
          "word": "Crocodile",
          "emoji": "🐊",
          "bgColor": "#556B2F"
          },
          {
          "letter": "D",
          "word": "Dingo",
          "emoji": "🐺",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Emu",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Frilled Lizard",
          "emoji": "🦎",
          "bgColor": "#FF6347"
          },
          {
          "letter": "G",
          "word": "Great Barrier Fish",
          "emoji": "🐠",
          "bgColor": "#00CED1"
          },
          {
          "letter": "H",
          "word": "Huntsman Spider",
          "emoji": "🕷️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Irukandji Jellyfish",
          "emoji": "🪼",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "J",
          "word": "Jabiru Stork",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "K",
          "word": "Kangaroo",
          "emoji": "🦘",
          "bgColor": "#DAA520"
          },
          {
          "letter": "L",
          "word": "Lyrebird",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Magpie",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "N",
          "word": "Numbat",
          "emoji": "🐿️",
          "bgColor": "#CD853F"
          },
          {
          "letter": "O",
          "word": "Opossum",
          "emoji": "🐭",
          "bgColor": "#808080"
          },
          {
          "letter": "P",
          "word": "Platypus",
          "emoji": "🦫",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Q",
          "word": "Quokka",
          "emoji": "🐭",
          "bgColor": "#DEB887"
          },
          {
          "letter": "R",
          "word": "Red Kangaroo",
          "emoji": "🦘",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Sugar Glider",
          "emoji": "🐿️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Tasmanian Devil",
          "emoji": "🐾",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "Ulysses Butterfly",
          "emoji": "🦋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Venomous Snake",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Wombat",
          "emoji": "🐻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "Xenopus Frog",
          "emoji": "🐸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "Y",
          "word": "Yellow-footed Wallaby",
          "emoji": "🦘",
          "bgColor": "#DAA520"
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
        id="KidsAnimalsAfrican1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "African Animals Part 1",
          videoId: "animals-african-1",
          bgGradient: ["#EB5757","#F2994A"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "African Elephant",
          "emoji": "🐘",
          "bgColor": "#708090"
          },
          {
          "letter": "B",
          "word": "Baboon",
          "emoji": "🐒",
          "bgColor": "#8B6914"
          },
          {
          "letter": "C",
          "word": "Cape Buffalo",
          "emoji": "🐃",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "D",
          "word": "Dikdik",
          "emoji": "🦌",
          "bgColor": "#DEB887"
          },
          {
          "letter": "E",
          "word": "Egyptian Vulture",
          "emoji": "🦅",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "F",
          "word": "Flamingo",
          "emoji": "🦩",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Gorilla",
          "emoji": "🦍",
          "bgColor": "#2F4F4F"
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
          "word": "Leopard",
          "emoji": "🐆",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mandrill",
          "emoji": "🐵",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Nile Crocodile",
          "emoji": "🐊",
          "bgColor": "#556B2F"
          },
          {
          "letter": "O",
          "word": "Okapi",
          "emoji": "🦒",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Pangolin",
          "emoji": "🐾",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Q",
          "word": "Quelea Bird",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Rhinoceros",
          "emoji": "🦏",
          "bgColor": "#696969"
          },
          {
          "letter": "S",
          "word": "Serval Cat",
          "emoji": "🐆",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Tsetse Fly",
          "emoji": "🪰",
          "bgColor": "#556B2F"
          },
          {
          "letter": "U",
          "word": "Uganda Kob",
          "emoji": "🦌",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vervet Monkey",
          "emoji": "🐒",
          "bgColor": "#808080"
          },
          {
          "letter": "W",
          "word": "Warthog",
          "emoji": "🐗",
          "bgColor": "#6B4226"
          },
          {
          "letter": "X",
          "word": "Xerus Squirrel",
          "emoji": "🐿️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Y",
          "word": "Yellow Baboon",
          "emoji": "🐒",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zebra",
          "emoji": "🦓",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsAquarium1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Aquarium Fish Part 1",
          videoId: "animals-aquarium-1",
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
          "word": "Betta Fish",
          "emoji": "🐟",
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
          "word": "Discus Fish",
          "emoji": "🐟",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Electric Eel",
          "emoji": "🐍",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fancy Goldfish",
          "emoji": "🐠",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Guppy",
          "emoji": "🐟",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Hatchetfish",
          "emoji": "🐟",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "I",
          "word": "Iridescent Shark",
          "emoji": "🦈",
          "bgColor": "#4682B4"
          },
          {
          "letter": "J",
          "word": "Jack Dempsey",
          "emoji": "🐟",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Koi",
          "emoji": "🐟",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Lionfish",
          "emoji": "🐟",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Molly Fish",
          "emoji": "🐟",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "N",
          "word": "Neon Tetra",
          "emoji": "🐟",
          "bgColor": "#00CED1"
          },
          {
          "letter": "O",
          "word": "Oscar Fish",
          "emoji": "🐟",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Platy Fish",
          "emoji": "🐟",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Q",
          "word": "Queen Angelfish",
          "emoji": "🐠",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Rainbow Fish",
          "emoji": "🐟",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Swordtail",
          "emoji": "🐟",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Tetra",
          "emoji": "🐟",
          "bgColor": "#00CED1"
          },
          {
          "letter": "U",
          "word": "Upside-down Catfish",
          "emoji": "🐟",
          "bgColor": "#8B6914"
          },
          {
          "letter": "V",
          "word": "Violet Goby",
          "emoji": "🐟",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "White Cloud Fish",
          "emoji": "🐟",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-ray Tetra",
          "emoji": "🐟",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "Y",
          "word": "Yellow Tang",
          "emoji": "🐟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra Danio",
          "emoji": "🐟",
          "bgColor": "#4682B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsWoodland1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Woodland Creatures Part 1",
          videoId: "animals-woodland-1",
          bgGradient: ["#134E5E","#71B280"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Acorn Woodpecker",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Beaver",
          "emoji": "🦫",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Chipmunk",
          "emoji": "🐿️",
          "bgColor": "#CD853F"
          },
          {
          "letter": "D",
          "word": "Deer Mouse",
          "emoji": "🐭",
          "bgColor": "#DEB887"
          },
          {
          "letter": "E",
          "word": "Ermine",
          "emoji": "🐿️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "F",
          "word": "Flying Squirrel",
          "emoji": "🐿️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "G",
          "word": "Groundhog",
          "emoji": "🐿️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hedgehog",
          "emoji": "🦔",
          "bgColor": "#DEB887"
          },
          {
          "letter": "I",
          "word": "Indian Mongoose",
          "emoji": "🐿️",
          "bgColor": "#8B7355"
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
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#FF0000"
          },
          {
          "letter": "M",
          "word": "Mole",
          "emoji": "🐭",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "N",
          "word": "Nightjar",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Otter",
          "emoji": "🦦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Pine Squirrel",
          "emoji": "🐿️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Raccoon",
          "emoji": "🦝",
          "bgColor": "#696969"
          },
          {
          "letter": "S",
          "word": "Squirrel",
          "emoji": "🐿️",
          "bgColor": "#CD853F"
          },
          {
          "letter": "T",
          "word": "Toad",
          "emoji": "🐸",
          "bgColor": "#556B2F"
          },
          {
          "letter": "U",
          "word": "Underground Mole",
          "emoji": "🐭",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "V",
          "word": "Vole",
          "emoji": "🐭",
          "bgColor": "#8B7355"
          },
          {
          "letter": "W",
          "word": "Weasel",
          "emoji": "🐿️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "X",
          "word": "Xenops",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Y",
          "word": "Yellowhammer",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zigzag Salamander",
          "emoji": "🦎",
          "bgColor": "#FF4500"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsMythical1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mythical & Legendary Creatures Part 1",
          videoId: "animals-mythical-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Angel Fish",
          "emoji": "😇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Basilisk",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Centaur",
          "emoji": "🐴",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dragon",
          "emoji": "🐉",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Eagle Griffin",
          "emoji": "🦅",
          "bgColor": "#DAA520"
          },
          {
          "letter": "F",
          "word": "Firebird",
          "emoji": "🐦",
          "bgColor": "#FF4500"
          },
          {
          "letter": "G",
          "word": "Griffin",
          "emoji": "🦅",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Hydra",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "I",
          "word": "Ice Dragon",
          "emoji": "🐉",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "J",
          "word": "Jade Dragon",
          "emoji": "🐉",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kraken",
          "emoji": "🐙",
          "bgColor": "#191970"
          },
          {
          "letter": "L",
          "word": "Loch Ness Monster",
          "emoji": "🐉",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Mermaid",
          "emoji": "🧜",
          "bgColor": "#00CED1"
          },
          {
          "letter": "N",
          "word": "Naga Serpent",
          "emoji": "🐍",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Oracle Owl",
          "emoji": "🦉",
          "bgColor": "#4B0082"
          },
          {
          "letter": "P",
          "word": "Phoenix",
          "emoji": "🐦",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Q",
          "word": "Qilin",
          "emoji": "🦌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Roc Bird",
          "emoji": "🦅",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Sphinx",
          "emoji": "🦁",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Thunderbird",
          "emoji": "🦅",
          "bgColor": "#4169E1"
          },
          {
          "letter": "U",
          "word": "Unicorn",
          "emoji": "🦄",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "V",
          "word": "Vampire Bat",
          "emoji": "🦇",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "W",
          "word": "Werewolf",
          "emoji": "🐺",
          "bgColor": "#696969"
          },
          {
          "letter": "X",
          "word": "Xiezhi",
          "emoji": "🦌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Y",
          "word": "Yeti",
          "emoji": "🐻‍❄️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Ziz Bird",
          "emoji": "🦅",
          "bgColor": "#4169E1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsSeabirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sea Birds Part 1",
          videoId: "birds-seabirds-1",
          bgGradient: ["#0077B6","#00B4D8"] as [string, string],
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
          "word": "Booby",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Cormorant",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "D",
          "word": "Diving Petrel",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "E",
          "word": "Elder Duck",
          "emoji": "🦆",
          "bgColor": "#556B2F"
          },
          {
          "letter": "F",
          "word": "Frigatebird",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "G",
          "word": "Gannet",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "H",
          "word": "Herring Gull",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "I",
          "word": "Indian Skimmer",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "J",
          "word": "Jaeger",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "K",
          "word": "Kittiwake",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Laughing Gull",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "M",
          "word": "Murre",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "N",
          "word": "Noddy Tern",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Oyster Catcher",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "P",
          "word": "Puffin",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quahog Gull",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "R",
          "word": "Razorbill",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "S",
          "word": "Sooty Tern",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "T",
          "word": "Tropicbird",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "U",
          "word": "Uria Guillemot",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Velvet Scoter",
          "emoji": "🦆",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "W",
          "word": "Wandering Albatross",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xantus Murrelet",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Y",
          "word": "Yellow-nosed Albatross",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
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
        id="KidsBirdsHummingbirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Hummingbirds Part 1",
          videoId: "birds-hummingbirds-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "Anna's Hummingbird",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Bee Hummingbird",
          "emoji": "🐦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "Costa's Hummingbird",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "D",
          "word": "Diamond Firetail",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Emerald Hummingbird",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fiery-throated",
          "emoji": "🐦",
          "bgColor": "#FF4500"
          },
          {
          "letter": "G",
          "word": "Giant Hummingbird",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Heliomaster",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Inca Hummingbird",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Jacobin Hummingbird",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "K",
          "word": "Klamath Hummingbird",
          "emoji": "🐦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "L",
          "word": "Lucifer Hummingbird",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "M",
          "word": "Mango Hummingbird",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Needle-billed",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "O",
          "word": "Oasis Hummingbird",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Purple-throated",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "Q",
          "word": "Quetzal Relative",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "R",
          "word": "Ruby-throated",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Sword-billed",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Topaz Hummingbird",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Ultra Violet Hummer",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "V",
          "word": "Violet-crowned",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "White-eared",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xantus Hummingbird",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Y",
          "word": "Yellow Sapphire",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zigzag Hummingbird",
          "emoji": "🐦",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesVintage1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vintage & Classic Vehicles Part 1",
          videoId: "vehicles-vintage-1",
          bgGradient: ["#8B4513","#DEB887"] as [string, string],
          accentColor: "#8B4513",
          letters: [
          {
          "letter": "A",
          "word": "Ambassador Car",
          "emoji": "🚗",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Beetle (VW)",
          "emoji": "🚗",
          "bgColor": "#4682B4"
          },
          {
          "letter": "C",
          "word": "Chariot",
          "emoji": "🐴",
          "bgColor": "#DAA520"
          },
          {
          "letter": "D",
          "word": "Double Decker Bus",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Essex Coach",
          "emoji": "🚗",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "F",
          "word": "Ford Model T",
          "emoji": "🚗",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "G",
          "word": "Gypsy Cart",
          "emoji": "🐴",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Horse Carriage",
          "emoji": "🐴",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Fiat",
          "emoji": "🚗",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "J",
          "word": "Jeep Willys",
          "emoji": "🚙",
          "bgColor": "#556B2F"
          },
          {
          "letter": "K",
          "word": "Knight's Horse",
          "emoji": "🐴",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "L",
          "word": "Locomotive Steam",
          "emoji": "🚂",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "M",
          "word": "Morris Minor",
          "emoji": "🚗",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Noble Cart",
          "emoji": "🐴",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Old Tram",
          "emoji": "🚃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "P",
          "word": "Padmini Car",
          "emoji": "🚗",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Q",
          "word": "Queen's Carriage",
          "emoji": "🐴",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Rolls Royce Classic",
          "emoji": "🚗",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "S",
          "word": "Steam Engine",
          "emoji": "🚂",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "T",
          "word": "Tonga Cart",
          "emoji": "🐴",
          "bgColor": "#8B4513"
          },
          {
          "letter": "U",
          "word": "Unicycle Penny",
          "emoji": "🚲",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Victorian Buggy",
          "emoji": "🐴",
          "bgColor": "#8B4513"
          },
          {
          "letter": "W",
          "word": "Wagon Wheel Cart",
          "emoji": "🐴",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "X-old Bicycle",
          "emoji": "🚲",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Y",
          "word": "Yesteryear Bus",
          "emoji": "🚌",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zephyr Classic",
          "emoji": "🚗",
          "bgColor": "#4682B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesRacing1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Racing Vehicles Part 1",
          videoId: "vehicles-racing-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Aston Martin",
          "emoji": "🏎️",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Bugatti",
          "emoji": "🏎️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Championship Car",
          "emoji": "🏎️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Drag Racer",
          "emoji": "🏎️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "Electric Race Car",
          "emoji": "🏎️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "F",
          "word": "Formula One Car",
          "emoji": "🏎️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "G",
          "word": "Go Kart",
          "emoji": "🏎️",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Hot Rod",
          "emoji": "🏎️",
          "bgColor": "#FF4500"
          },
          {
          "letter": "I",
          "word": "IndyCar",
          "emoji": "🏎️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Jaguar Racer",
          "emoji": "🏎️",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kart Racing",
          "emoji": "🏎️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lamborghini",
          "emoji": "🏎️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "McLaren",
          "emoji": "🏎️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "NASCAR",
          "emoji": "🏎️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Off-road Rally",
          "emoji": "🏎️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Porsche",
          "emoji": "🏎️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Q",
          "word": "Quick Sprint Car",
          "emoji": "🏎️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Rally Car",
          "emoji": "🏎️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Stock Car",
          "emoji": "🏎️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Turbo Racer",
          "emoji": "🏎️",
          "bgColor": "#FF4500"
          },
          {
          "letter": "U",
          "word": "Ultra-fast Car",
          "emoji": "🏎️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "V8 Supercar",
          "emoji": "🏎️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "WRC Rally Car",
          "emoji": "🏎️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "X-treme Racer",
          "emoji": "🏎️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Yellow Flag Car",
          "emoji": "🏎️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zero to Sixty Car",
          "emoji": "🏎️",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesPublic1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Public Transport Part 1",
          videoId: "vehicles-public-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Airport Shuttle",
          "emoji": "🚌",
          "bgColor": "#4682B4"
          },
          {
          "letter": "B",
          "word": "Bus Rapid Transit",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "City Bus",
          "emoji": "🚌",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Double Decker",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Electric Tram",
          "emoji": "🚃",
          "bgColor": "#32CD32"
          },
          {
          "letter": "F",
          "word": "Ferry Boat",
          "emoji": "⛴️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Green Bus",
          "emoji": "🚌",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Highway Express",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Interstate Coach",
          "emoji": "🚌",
          "bgColor": "#4682B4"
          },
          {
          "letter": "J",
          "word": "Jitney Bus",
          "emoji": "🚌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kerala Bus",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Light Rail",
          "emoji": "🚃",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Metro Rail",
          "emoji": "🚇",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Night Bus",
          "emoji": "🚌",
          "bgColor": "#191970"
          },
          {
          "letter": "O",
          "word": "Orange Line Metro",
          "emoji": "🚇",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pink Line Metro",
          "emoji": "🚇",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Q",
          "word": "Queue Bus",
          "emoji": "🚌",
          "bgColor": "#4682B4"
          },
          {
          "letter": "R",
          "word": "Rapid Metro",
          "emoji": "🚇",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Suburban Train",
          "emoji": "🚃",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Trolleybus",
          "emoji": "🚌",
          "bgColor": "#32CD32"
          },
          {
          "letter": "U",
          "word": "Underground Train",
          "emoji": "🚇",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Volvo Bus",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Water Bus",
          "emoji": "🚤",
          "bgColor": "#4682B4"
          },
          {
          "letter": "X",
          "word": "X-press Bus",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yellow Bus",
          "emoji": "🚌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zone Bus",
          "emoji": "🚌",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsUnderwaterCoral1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Coral Reef Animals Part 1",
          videoId: "animals-underwater-coral-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Anemone",
          "emoji": "🌺",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "B",
          "word": "Barracuda",
          "emoji": "🐟",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "C",
          "word": "Coral",
          "emoji": "🪸",
          "bgColor": "#FF6347"
          },
          {
          "letter": "D",
          "word": "Damselfish",
          "emoji": "🐠",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Eagle Ray",
          "emoji": "🐟",
          "bgColor": "#4682B4"
          },
          {
          "letter": "F",
          "word": "Filefish",
          "emoji": "🐟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Grouper",
          "emoji": "🐟",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hawkfish",
          "emoji": "🐟",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Inca Tern",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "J",
          "word": "Jawfish",
          "emoji": "🐟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Koi Reef Fish",
          "emoji": "🐟",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Lionfish",
          "emoji": "🐟",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Moray Eel",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Nudibranch",
          "emoji": "🐛",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "O",
          "word": "Orange Clownfish",
          "emoji": "🐠",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Parrotfish",
          "emoji": "🐟",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Q",
          "word": "Queen Angelfish",
          "emoji": "🐠",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Reef Shark",
          "emoji": "🦈",
          "bgColor": "#696969"
          },
          {
          "letter": "S",
          "word": "Starfish",
          "emoji": "⭐",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Triggerfish",
          "emoji": "🐟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Urchin",
          "emoji": "🦔",
          "bgColor": "#800080"
          },
          {
          "letter": "V",
          "word": "Violet Sea Slug",
          "emoji": "🐛",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "Wrasse",
          "emoji": "🐟",
          "bgColor": "#32CD32"
          },
          {
          "letter": "X",
          "word": "Xenia Coral",
          "emoji": "🪸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Y",
          "word": "Yellow Tang",
          "emoji": "🐟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zoanthid Coral",
          "emoji": "🪸",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureIndianFlagSymbols1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian National Symbols Part 1",
          videoId: "culture-indian-flag-symbols-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Ashoka Chakra",
          "emoji": "☸️",
          "bgColor": "#000080"
          },
          {
          "letter": "B",
          "word": "Banyan Tree",
          "emoji": "🌳",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Constitution of India",
          "emoji": "📜",
          "bgColor": "#DEB887"
          },
          {
          "letter": "D",
          "word": "Delhi Capital",
          "emoji": "🏛️",
          "bgColor": "#FF9933"
          },
          {
          "letter": "E",
          "word": "Emblem (Lion Capital)",
          "emoji": "🦁",
          "bgColor": "#DAA520"
          },
          {
          "letter": "F",
          "word": "Flag (Tiranga)",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "G",
          "word": "Ganges River",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "H",
          "word": "Hindi Language",
          "emoji": "📖",
          "bgColor": "#FF9933"
          },
          {
          "letter": "I",
          "word": "Indian Rupee",
          "emoji": "💰",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jana Gana Mana",
          "emoji": "🎵",
          "bgColor": "#FF9933"
          },
          {
          "letter": "K",
          "word": "King Cobra",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Lotus (National Flower)",
          "emoji": "🪷",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "M",
          "word": "Mango (National Fruit)",
          "emoji": "🥭",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "National Anthem",
          "emoji": "🎵",
          "bgColor": "#FF9933"
          },
          {
          "letter": "O",
          "word": "Orange (Saffron Flag)",
          "emoji": "🟠",
          "bgColor": "#FF9933"
          },
          {
          "letter": "P",
          "word": "Peacock (National Bird)",
          "emoji": "🦚",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Quit India Movement",
          "emoji": "✊",
          "bgColor": "#FF9933"
          },
          {
          "letter": "R",
          "word": "Republic Day",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "S",
          "word": "Satyameva Jayate",
          "emoji": "🦁",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Tiger (National Animal)",
          "emoji": "🐯",
          "bgColor": "#FF6347"
          },
          {
          "letter": "U",
          "word": "Unity in Diversity",
          "emoji": "🤝",
          "bgColor": "#FF9933"
          },
          {
          "letter": "V",
          "word": "Vande Mataram",
          "emoji": "🎵",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "White (Peace in Flag)",
          "emoji": "⬜",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-cellent Heritage",
          "emoji": "🏛️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Y",
          "word": "Young India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "Z",
          "word": "Zero (Indian Invention)",
          "emoji": "0️⃣",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsPolar1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Polar Animals Part 1",
          videoId: "animals-polar-1",
          bgGradient: ["#E0EAFC","#CFDEF3"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Arctic Hare",
          "emoji": "🐰",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Blue Fox",
          "emoji": "🦊",
          "bgColor": "#87CEEB"
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
          "word": "Grey Wolf",
          "emoji": "🐺",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "H",
          "word": "Harp Seal",
          "emoji": "🦭",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "I",
          "word": "Ice Fish",
          "emoji": "🐟",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "J",
          "word": "Jackrabbit",
          "emoji": "🐰",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "K",
          "word": "Killer Whale",
          "emoji": "🐋",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Leopard Seal",
          "emoji": "🦭",
          "bgColor": "#808080"
          },
          {
          "letter": "M",
          "word": "Musk Ox",
          "emoji": "🐂",
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
          "word": "Puffin",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Queen Penguin",
          "emoji": "🐧",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Ringed Seal",
          "emoji": "🦭",
          "bgColor": "#808080"
          },
          {
          "letter": "S",
          "word": "Snow Goose",
          "emoji": "🪿",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Tundra Swan",
          "emoji": "🦢",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "U",
          "word": "Ural Owl",
          "emoji": "🦉",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vole (Tundra)",
          "emoji": "🐭",
          "bgColor": "#8B7355"
          },
          {
          "letter": "W",
          "word": "Wolverine",
          "emoji": "🐺",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "X",
          "word": "X-tra Furry Bear",
          "emoji": "🐻‍❄️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Y",
          "word": "Yellow Bear",
          "emoji": "🐻",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zodiac Penguin",
          "emoji": "🐧",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsMarineMammals1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Marine Mammals Part 1",
          videoId: "animals-marine-mammals-1",
          bgGradient: ["#0077B6","#00B4D8"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Amazon Dolphin",
          "emoji": "🐬",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "B",
          "word": "Beluga Whale",
          "emoji": "🐋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Common Dolphin",
          "emoji": "🐬",
          "bgColor": "#4682B4"
          },
          {
          "letter": "D",
          "word": "Dugong",
          "emoji": "🐋",
          "bgColor": "#808080"
          },
          {
          "letter": "E",
          "word": "Elephant Seal",
          "emoji": "🦭",
          "bgColor": "#696969"
          },
          {
          "letter": "F",
          "word": "Fin Whale",
          "emoji": "🐋",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Grey Whale",
          "emoji": "🐋",
          "bgColor": "#808080"
          },
          {
          "letter": "H",
          "word": "Humpback Whale",
          "emoji": "🐋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Indo-Pacific Dolphin",
          "emoji": "🐬",
          "bgColor": "#4682B4"
          },
          {
          "letter": "J",
          "word": "Japanese Sea Lion",
          "emoji": "🦭",
          "bgColor": "#8B6914"
          },
          {
          "letter": "K",
          "word": "Killer Whale",
          "emoji": "🐋",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Leopard Seal",
          "emoji": "🦭",
          "bgColor": "#808080"
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
          "word": "Orca",
          "emoji": "🐋",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "P",
          "word": "Pilot Whale",
          "emoji": "🐋",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Q",
          "word": "Queensland Dolphin",
          "emoji": "🐬",
          "bgColor": "#00CED1"
          },
          {
          "letter": "R",
          "word": "Right Whale",
          "emoji": "🐋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Seal",
          "emoji": "🦭",
          "bgColor": "#808080"
          },
          {
          "letter": "T",
          "word": "Tucuxi Dolphin",
          "emoji": "🐬",
          "bgColor": "#4682B4"
          },
          {
          "letter": "U",
          "word": "Upsala Seal",
          "emoji": "🦭",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "V",
          "word": "Vaquita",
          "emoji": "🐬",
          "bgColor": "#4682B4"
          },
          {
          "letter": "W",
          "word": "Walrus",
          "emoji": "🦭",
          "bgColor": "#8B6914"
          },
          {
          "letter": "X",
          "word": "X-tra Large Whale",
          "emoji": "🐋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Y",
          "word": "Yangtze Dolphin",
          "emoji": "🐬",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Z",
          "word": "Ziphius Whale",
          "emoji": "🐋",
          "bgColor": "#4682B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsColorfulWorld1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Most Colorful Birds Part 1",
          videoId: "birds-colorful-world-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Azure Kingfisher",
          "emoji": "🐦",
          "bgColor": "#1E90FF"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "Crimson Rosella",
          "emoji": "🦜",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Diamond Firetail",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Emerald Starling",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Flame Bowerbird",
          "emoji": "🐦",
          "bgColor": "#FF4500"
          },
          {
          "letter": "G",
          "word": "Golden Pheasant",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hyacinth Macaw",
          "emoji": "🦜",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Indian Roller",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "J",
          "word": "Japanese White-eye",
          "emoji": "🐦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "K",
          "word": "Keel-billed Toucan",
          "emoji": "🐦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "L",
          "word": "Lilac-breasted Roller",
          "emoji": "🐦",
          "bgColor": "#E6E6FA"
          },
          {
          "letter": "M",
          "word": "Mandarin Duck",
          "emoji": "🦆",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Nicobar Pigeon",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Oriental Dwarf King",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Painted Bunting",
          "emoji": "🐦",
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
          "word": "Rainbow Lorikeet",
          "emoji": "🦜",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Scarlet Tanager",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Turaco",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Ultramarine Flycatcher",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Violet-backed Starling",
          "emoji": "🐦",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "Wilson's Bird",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "X",
          "word": "Xanthochilus",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Y",
          "word": "Yellow-headed Amazon",
          "emoji": "🦜",
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
        id="KidsFruitsExoticWorld1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Exotic World Fruits Part 1",
          videoId: "fruits-exotic-world-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "Ackee",
          "emoji": "🍈",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Buddha's Hand",
          "emoji": "🍋",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cactus Pear",
          "emoji": "🌵",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Durian",
          "emoji": "🍈",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Egg Fruit",
          "emoji": "🍈",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Feijoa",
          "emoji": "🍈",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Guarana",
          "emoji": "🍈",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Horned Melon",
          "emoji": "🍈",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "Indian Jujube",
          "emoji": "🍈",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jabuticaba",
          "emoji": "🫐",
          "bgColor": "#4B0082"
          },
          {
          "letter": "K",
          "word": "Kaffir Lime",
          "emoji": "🍋",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Longan",
          "emoji": "🍈",
          "bgColor": "#DEB887"
          },
          {
          "letter": "M",
          "word": "Mangosteen",
          "emoji": "🍈",
          "bgColor": "#4B0082"
          },
          {
          "letter": "N",
          "word": "Noni",
          "emoji": "🍈",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Oliveberry",
          "emoji": "🫒",
          "bgColor": "#556B2F"
          },
          {
          "letter": "P",
          "word": "Persimmon",
          "emoji": "🍈",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Q",
          "word": "Quandong",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Rose Apple",
          "emoji": "🍎",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "S",
          "word": "Sapodilla",
          "emoji": "🍈",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tamarillo",
          "emoji": "🍈",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Uva (Grape variety)",
          "emoji": "🍇",
          "bgColor": "#800080"
          },
          {
          "letter": "V",
          "word": "Velvet Apple",
          "emoji": "🍎",
          "bgColor": "#8B0000"
          },
          {
          "letter": "W",
          "word": "Wax Apple",
          "emoji": "🍎",
          "bgColor": "#DC143C"
          },
          {
          "letter": "X",
          "word": "Ximenia",
          "emoji": "🍒",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yangmei",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Z",
          "word": "Zapote",
          "emoji": "🍈",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVegetablesExotic1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Exotic Vegetables Part 1",
          videoId: "vegetables-exotic-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Artichoke",
          "emoji": "🥬",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "B",
          "word": "Bamboo Shoot",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Celeriac",
          "emoji": "🥬",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "D",
          "word": "Dragon Fruit Cactus",
          "emoji": "🌵",
          "bgColor": "#FF1493"
          },
          {
          "letter": "E",
          "word": "Edamame",
          "emoji": "🫘",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fiddlehead Fern",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Galangal",
          "emoji": "🫚",
          "bgColor": "#DEB887"
          },
          {
          "letter": "H",
          "word": "Hearts of Palm",
          "emoji": "🌴",
          "bgColor": "#DEB887"
          },
          {
          "letter": "I",
          "word": "Ice Plant",
          "emoji": "🌿",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "J",
          "word": "Japanese Eggplant",
          "emoji": "🍆",
          "bgColor": "#4B0082"
          },
          {
          "letter": "K",
          "word": "Kai Lan",
          "emoji": "🥬",
          "bgColor": "#006400"
          },
          {
          "letter": "L",
          "word": "Lemongrass",
          "emoji": "🌿",
          "bgColor": "#9ACD32"
          },
          {
          "letter": "M",
          "word": "Maitake Mushroom",
          "emoji": "🍄",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Nori Seaweed",
          "emoji": "🌿",
          "bgColor": "#006400"
          },
          {
          "letter": "O",
          "word": "Oyster Mushroom",
          "emoji": "🍄",
          "bgColor": "#DEB887"
          },
          {
          "letter": "P",
          "word": "Purple Yam",
          "emoji": "🍠",
          "bgColor": "#800080"
          },
          {
          "letter": "Q",
          "word": "Quail Egg Plant",
          "emoji": "🍆",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Romanesco",
          "emoji": "🥦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "S",
          "word": "Saffron Crocus",
          "emoji": "🌸",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Truffle Mushroom",
          "emoji": "🍄",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "Ulluco",
          "emoji": "🥔",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "V",
          "word": "Vanilla Pods",
          "emoji": "🌿",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "W",
          "word": "Wasabi",
          "emoji": "🫚",
          "bgColor": "#32CD32"
          },
          {
          "letter": "X",
          "word": "Ximenia Root",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Y",
          "word": "Yacon Root",
          "emoji": "🥔",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Z",
          "word": "Zucchini Flower",
          "emoji": "🌼",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesMilitary1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Military Vehicles Part 1",
          videoId: "vehicles-military-1",
          bgGradient: ["#2F4F4F","#556B2F"] as [string, string],
          accentColor: "#2F4F4F",
          letters: [
          {
          "letter": "A",
          "word": "Armored Car",
          "emoji": "🚗",
          "bgColor": "#556B2F"
          },
          {
          "letter": "B",
          "word": "Battleship",
          "emoji": "🚢",
          "bgColor": "#708090"
          },
          {
          "letter": "C",
          "word": "Combat Helicopter",
          "emoji": "🚁",
          "bgColor": "#556B2F"
          },
          {
          "letter": "D",
          "word": "Destroyer Ship",
          "emoji": "🚢",
          "bgColor": "#696969"
          },
          {
          "letter": "E",
          "word": "Electronic Warfare Jet",
          "emoji": "✈️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "F",
          "word": "Fighter Aircraft",
          "emoji": "✈️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Gunship",
          "emoji": "🚁",
          "bgColor": "#556B2F"
          },
          {
          "letter": "H",
          "word": "Humvee",
          "emoji": "🚙",
          "bgColor": "#556B2F"
          },
          {
          "letter": "I",
          "word": "Infantry Vehicle",
          "emoji": "🚙",
          "bgColor": "#556B2F"
          },
          {
          "letter": "J",
          "word": "Jeep Military",
          "emoji": "🚙",
          "bgColor": "#556B2F"
          },
          {
          "letter": "K",
          "word": "K-9 Patrol Vehicle",
          "emoji": "🚐",
          "bgColor": "#556B2F"
          },
          {
          "letter": "L",
          "word": "Landing Craft",
          "emoji": "🚢",
          "bgColor": "#708090"
          },
          {
          "letter": "M",
          "word": "Main Battle Tank",
          "emoji": "🔫",
          "bgColor": "#556B2F"
          },
          {
          "letter": "N",
          "word": "Nuclear Submarine",
          "emoji": "🚢",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Osprey Aircraft",
          "emoji": "✈️",
          "bgColor": "#556B2F"
          },
          {
          "letter": "P",
          "word": "Patrol Boat",
          "emoji": "🚤",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quick Reaction Force",
          "emoji": "🚙",
          "bgColor": "#556B2F"
          },
          {
          "letter": "R",
          "word": "Reconnaissance Drone",
          "emoji": "🛸",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "S",
          "word": "Stealth Bomber",
          "emoji": "✈️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "T",
          "word": "Tank",
          "emoji": "🔫",
          "bgColor": "#556B2F"
          },
          {
          "letter": "U",
          "word": "UAV Drone",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Vessel Frigate",
          "emoji": "🚢",
          "bgColor": "#708090"
          },
          {
          "letter": "W",
          "word": "Warplane",
          "emoji": "✈️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "X",
          "word": "X-craft Submarine",
          "emoji": "🚢",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Y",
          "word": "Yak Fighter Jet",
          "emoji": "✈️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Z",
          "word": "Zodiac Assault Boat",
          "emoji": "🚤",
          "bgColor": "#556B2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceBiology1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Biology & Living Things Part 1",
          videoId: "science-biology-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "Amoeba",
          "emoji": "🦠",
          "bgColor": "#32CD32"
          },
          {
          "letter": "B",
          "word": "Bacteria",
          "emoji": "🦠",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Cell",
          "emoji": "🔬",
          "bgColor": "#4169E1"
          },
          {
          "letter": "D",
          "word": "DNA",
          "emoji": "🧬",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Ecosystem",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fungus",
          "emoji": "🍄",
          "bgColor": "#8B4513"
          },
          {
          "letter": "G",
          "word": "Gene",
          "emoji": "🧬",
          "bgColor": "#4169E1"
          },
          {
          "letter": "H",
          "word": "Herbivore",
          "emoji": "🦌",
          "bgColor": "#228B22"
          },
          {
          "letter": "I",
          "word": "Immune System",
          "emoji": "🛡️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Joint (Body)",
          "emoji": "🦴",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "K",
          "word": "Kingdom (Bio)",
          "emoji": "🌍",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Leaf",
          "emoji": "🍃",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Mitosis",
          "emoji": "🔬",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Nucleus",
          "emoji": "⚛️",
          "bgColor": "#4B0082"
          },
          {
          "letter": "O",
          "word": "Organ",
          "emoji": "🫀",
          "bgColor": "#DC143C"
          },
          {
          "letter": "P",
          "word": "Photosynthesis",
          "emoji": "☀️",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Quarantine",
          "emoji": "🏥",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Root (Plant)",
          "emoji": "🌱",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Seed",
          "emoji": "🌱",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tissue",
          "emoji": "🔬",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "U",
          "word": "Unicellular",
          "emoji": "🦠",
          "bgColor": "#32CD32"
          },
          {
          "letter": "V",
          "word": "Virus",
          "emoji": "🦠",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Water Cycle",
          "emoji": "💧",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "Xylem (Plant)",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yeast",
          "emoji": "🦠",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Z",
          "word": "Zoology",
          "emoji": "🐾",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsGymnastics1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Gymnastics Part 1",
          videoId: "sports-gymnastics-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Aerial Flip",
          "emoji": "🤸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "B",
          "word": "Balance Beam",
          "emoji": "🤸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cartwheel",
          "emoji": "🤸",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Double Flip",
          "emoji": "🤸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Exercise Mat",
          "emoji": "🤸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Floor Exercise",
          "emoji": "🤸",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Gold Medal Gymnastics",
          "emoji": "🥇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Handstand",
          "emoji": "🤸",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Indian Gymnastics",
          "emoji": "🤸",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "Jump Split",
          "emoji": "🤸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "K",
          "word": "Kicks",
          "emoji": "🤸",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Landing",
          "emoji": "🤸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "M",
          "word": "Mount",
          "emoji": "🤸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Nadia Comaneci Move",
          "emoji": "🤸",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Olympic Rings",
          "emoji": "🏅",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Parallel Bars",
          "emoji": "🤸",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Q",
          "word": "Quadruple Twist",
          "emoji": "🤸",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Rhythmic Gymnastics",
          "emoji": "🤸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "S",
          "word": "Somersault",
          "emoji": "🤸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "T",
          "word": "Trampoline",
          "emoji": "🤸",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Uneven Bars",
          "emoji": "🤸",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "V",
          "word": "Vault",
          "emoji": "🤸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "W",
          "word": "Walking Beam",
          "emoji": "🤸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "X-treme Gymnastics",
          "emoji": "🤸",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Youth Gymnastics",
          "emoji": "🤸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zigzag Tumble",
          "emoji": "🤸",
          "bgColor": "#DC143C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyIslands1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Islands Part 1",
          videoId: "geography-islands-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Andaman Islands",
          "emoji": "🏝️",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Bali",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "C",
          "word": "Canary Islands",
          "emoji": "🏝️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Diu Island",
          "emoji": "🏝️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Easter Island",
          "emoji": "🗿",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fiji Islands",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "G",
          "word": "Galapagos",
          "emoji": "🐢",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hawaii",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "I",
          "word": "Iceland",
          "emoji": "🏔️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "J",
          "word": "Java Island",
          "emoji": "🏝️",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Key West",
          "emoji": "🏝️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "L",
          "word": "Lakshadweep",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "M",
          "word": "Maldives",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "N",
          "word": "Nicobar Islands",
          "emoji": "🏝️",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Okinawa",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "P",
          "word": "Phuket",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Q",
          "word": "Queensland Islands",
          "emoji": "🏝️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Rhodes Island",
          "emoji": "🏝️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🏝️",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tenerife",
          "emoji": "🏝️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "U",
          "word": "Uluru Region",
          "emoji": "🪨",
          "bgColor": "#DC143C"
          },
          {
          "letter": "V",
          "word": "Vancouver Island",
          "emoji": "🏝️",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Wrangel Island",
          "emoji": "🏝️",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "X",
          "word": "Xisha Islands",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Y",
          "word": "Yakushima Japan",
          "emoji": "🏝️",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zanzibar",
          "emoji": "🏝️",
          "bgColor": "#00CED1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsMusicDance1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dance Music Styles Part 1",
          videoId: "music-dance-1",
          bgGradient: ["#ED4264","#FFEDBC"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "Afrobeat",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bhangra Beat",
          "emoji": "🎵",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "C",
          "word": "Cumbia",
          "emoji": "🎵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Disco",
          "emoji": "🕺",
          "bgColor": "#4B0082"
          },
          {
          "letter": "E",
          "word": "EDM",
          "emoji": "🎵",
          "bgColor": "#00CED1"
          },
          {
          "letter": "F",
          "word": "Funk",
          "emoji": "🎵",
          "bgColor": "#FF4500"
          },
          {
          "letter": "G",
          "word": "Garba Music",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Hip Hop",
          "emoji": "🎵",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "Indian Pop",
          "emoji": "🎵",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "Jazz",
          "emoji": "🎷",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "K-Pop",
          "emoji": "🎵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "L",
          "word": "Latin Music",
          "emoji": "🎵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Merengue",
          "emoji": "🎵",
          "bgColor": "#FF6347"
          },
          {
          "letter": "N",
          "word": "Nonstop Mix",
          "emoji": "🎵",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Opera Dance",
          "emoji": "🎵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "P",
          "word": "Pop Music",
          "emoji": "🎵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Q",
          "word": "Quick Step",
          "emoji": "💃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Reggae",
          "emoji": "🎵",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Salsa",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Tango Music",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Upbeat Dance",
          "emoji": "🕺",
          "bgColor": "#FF4500"
          },
          {
          "letter": "V",
          "word": "Viennese Waltz",
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
          "word": "Yoyo Dance",
          "emoji": "🕺",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zumba Music",
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
        id="KidsProfessionsEducation1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Education Jobs Part 1",
          videoId: "professions-education-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Art Teacher",
          "emoji": "🎨",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Biology Teacher",
          "emoji": "🔬",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Coach",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dean",
          "emoji": "🎓",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "English Teacher",
          "emoji": "📚",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "French Teacher",
          "emoji": "📖",
          "bgColor": "#4169E1"
          },
          {
          "letter": "G",
          "word": "Geography Teacher",
          "emoji": "🌍",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hindi Teacher",
          "emoji": "📖",
          "bgColor": "#FF9933"
          },
          {
          "letter": "I",
          "word": "Instructor",
          "emoji": "👩‍🏫",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Junior Teacher",
          "emoji": "👩‍🏫",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kindergarten Teacher",
          "emoji": "👩‍🏫",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "L",
          "word": "Librarian",
          "emoji": "📚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Math Teacher",
          "emoji": "📐",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Nursery Teacher",
          "emoji": "👩‍🏫",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "O",
          "word": "Online Tutor",
          "emoji": "💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Principal",
          "emoji": "🎓",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quiz Master",
          "emoji": "❓",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Research Scholar",
          "emoji": "🔬",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Science Teacher",
          "emoji": "🔬",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tutor",
          "emoji": "👩‍🏫",
          "bgColor": "#4169E1"
          },
          {
          "letter": "U",
          "word": "University Professor",
          "emoji": "🎓",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "V",
          "word": "Vice Principal",
          "emoji": "🎓",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "W",
          "word": "Workshop Leader",
          "emoji": "👩‍🏫",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "X",
          "word": "X-tra Curriculum Coach",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Youth Mentor",
          "emoji": "👩‍🏫",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zen Yoga Teacher",
          "emoji": "🧘",
          "bgColor": "#FF69B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsProfessionsSports1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sports Careers Part 1",
          videoId: "professions-sports-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Athlete",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Boxer",
          "emoji": "🥊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Cricket Coach",
          "emoji": "🏏",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Diver",
          "emoji": "🤿",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Event Manager",
          "emoji": "🏟️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fitness Trainer",
          "emoji": "🏋️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "G",
          "word": "Gymnast",
          "emoji": "🤸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "H",
          "word": "Hockey Player",
          "emoji": "🏑",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Ice Skater",
          "emoji": "⛸️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "J",
          "word": "Jockey",
          "emoji": "🏇",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kabaddi Player",
          "emoji": "🤼",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Lifeguard",
          "emoji": "🏊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Marathon Runner",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "National Team Coach",
          "emoji": "🏆",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Olympic Medalist",
          "emoji": "🥇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Physical Therapist",
          "emoji": "🧑‍⚕️",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Qualifier Judge",
          "emoji": "🧑‍⚖️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "R",
          "word": "Referee",
          "emoji": "🧑‍⚖️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "S",
          "word": "Sports Commentator",
          "emoji": "🎙️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Tennis Player",
          "emoji": "🎾",
          "bgColor": "#32CD32"
          },
          {
          "letter": "U",
          "word": "Umpire",
          "emoji": "🧑‍⚖️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Volleyball Player",
          "emoji": "🏐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Wrestler",
          "emoji": "🤼",
          "bgColor": "#DAA520"
          },
          {
          "letter": "X",
          "word": "X-Games Athlete",
          "emoji": "🏅",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yoga Champion",
          "emoji": "🧘",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Z",
          "word": "Zumba Instructor",
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
        id="KidsCultureGames1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Traditional Indian Games Part 1",
          videoId: "culture-games-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Aankh Micholi",
          "emoji": "🙈",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bante (Marbles)",
          "emoji": "🔮",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Chaupar",
          "emoji": "🎲",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dog and the Bone",
          "emoji": "🦴",
          "bgColor": "#DEB887"
          },
          {
          "letter": "E",
          "word": "Ekka Dokka",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "F",
          "word": "Flying Disc",
          "emoji": "🥏",
          "bgColor": "#FF6347"
          },
          {
          "letter": "G",
          "word": "Gilli Danda",
          "emoji": "🏏",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hide and Seek",
          "emoji": "🙈",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Ice Pice",
          "emoji": "🏃",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "J",
          "word": "Jump Rope",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Kho Kho",
          "emoji": "🏃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Langdi",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Maram Pitti",
          "emoji": "⚽",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Nondi (Hopscotch)",
          "emoji": "🏃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Odd Even Game",
          "emoji": "🔢",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Pittu Garam",
          "emoji": "🪨",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Q",
          "word": "Quiz Game",
          "emoji": "❓",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Raja Mantri Chor Sipahi",
          "emoji": "🃏",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Stapu (Hopscotch)",
          "emoji": "🏃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tip Tip Top",
          "emoji": "🏃",
          "bgColor": "#FF6347"
          },
          {
          "letter": "U",
          "word": "Undo (Chain Break)",
          "emoji": "🔗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "V",
          "word": "Vish Amrit",
          "emoji": "🏃",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Wall Ball",
          "emoji": "⚽",
          "bgColor": "#DC143C"
          },
          {
          "letter": "X",
          "word": "X Marks Treasure",
          "emoji": "🗺️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Y",
          "word": "Yaksha Prashna",
          "emoji": "❓",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zig Zag Race",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyLakes1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Lakes Part 1",
          videoId: "geography-lakes-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Ashtamudi Lake",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "B",
          "word": "Bhimtal Lake",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Chilika Lake",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "D",
          "word": "Dal Lake",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          },
          {
          "letter": "E",
          "word": "East Lake",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Fateh Sagar Lake",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Gurudongmar Lake",
          "emoji": "🏞️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "H",
          "word": "Hussain Sagar Lake",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Idduki Reservoir",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jal Mahal Lake",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "K",
          "word": "Kodaikanal Lake",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Loktak Lake",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Mansarovar Lake",
          "emoji": "🏞️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "N",
          "word": "Naini Lake",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Ooty Lake",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Pangong Lake",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Quiet Lake",
          "emoji": "🏞️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "R",
          "word": "Renuka Lake",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Sukhna Lake",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Tsomgo Lake",
          "emoji": "🏞️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "U",
          "word": "Upper Lake Bhopal",
          "emoji": "🏞️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vembanad Lake",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Wular Lake",
          "emoji": "🏞️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "X",
          "word": "Xeric Lake",
          "emoji": "🏞️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Y",
          "word": "Yamdrok Lake",
          "emoji": "🏞️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Z",
          "word": "Zuari River Lake",
          "emoji": "🏞️",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyNationalParks1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "National Parks of India Part 1",
          videoId: "geography-national-parks-1",
          bgGradient: ["#134E5E","#71B280"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Anshi National Park",
          "emoji": "🌲",
          "bgColor": "#006400"
          },
          {
          "letter": "B",
          "word": "Bandipur",
          "emoji": "🐯",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Corbett National Park",
          "emoji": "🐯",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Dudhwa National Park",
          "emoji": "🐘",
          "bgColor": "#006400"
          },
          {
          "letter": "E",
          "word": "Eravikulam",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Forest Reserve",
          "emoji": "🌲",
          "bgColor": "#006400"
          },
          {
          "letter": "G",
          "word": "Gir National Park",
          "emoji": "🦁",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Hemis National Park",
          "emoji": "🐆",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "I",
          "word": "Indian Tiger Reserve",
          "emoji": "🐯",
          "bgColor": "#FF6347"
          },
          {
          "letter": "J",
          "word": "Jim Corbett Park",
          "emoji": "🐯",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kaziranga",
          "emoji": "🦏",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Little Rann of Kutch",
          "emoji": "🫏",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mudumalai",
          "emoji": "🐘",
          "bgColor": "#006400"
          },
          {
          "letter": "N",
          "word": "Nagarhole",
          "emoji": "🐘",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Orang National Park",
          "emoji": "🦏",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Periyar Wildlife",
          "emoji": "🐘",
          "bgColor": "#006400"
          },
          {
          "letter": "Q",
          "word": "Quiet Valley Park",
          "emoji": "🌲",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Ranthambore",
          "emoji": "🐯",
          "bgColor": "#DAA520"
          },
          {
          "letter": "S",
          "word": "Sundarbans",
          "emoji": "🐯",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tadoba Tiger Reserve",
          "emoji": "🐯",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Udanti Wildlife",
          "emoji": "🐃",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Valley of Flowers",
          "emoji": "🌸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "W",
          "word": "Wild Ass Sanctuary",
          "emoji": "🫏",
          "bgColor": "#DAA520"
          },
          {
          "letter": "X",
          "word": "Xeric Wildlife",
          "emoji": "🌵",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Y",
          "word": "Yamdrok Park",
          "emoji": "🏔️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "Z",
          "word": "Zanskar Park",
          "emoji": "🏔️",
          "bgColor": "#DEB887"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyBeaches1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Beaches Part 1",
          videoId: "geography-beaches-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Agonda Beach Goa",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Baga Beach Goa",
          "emoji": "🏖️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "C",
          "word": "Calangute Beach",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Digha Beach",
          "emoji": "🏖️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "E",
          "word": "Elliot's Beach",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fort Kochi Beach",
          "emoji": "🏖️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Gokarna Beach",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Havelock Beach",
          "emoji": "🏖️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "I",
          "word": "Indian Ocean Beach",
          "emoji": "🏖️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Juhu Beach Mumbai",
          "emoji": "🏖️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kovalam Beach",
          "emoji": "🏖️",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Lighthouse Beach",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Marina Beach Chennai",
          "emoji": "🏖️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "N",
          "word": "Nagoa Beach Diu",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Om Beach Gokarna",
          "emoji": "🏖️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Palolem Beach Goa",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Q",
          "word": "Quiet Beach",
          "emoji": "🏖️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "R",
          "word": "Radhanagar Beach",
          "emoji": "🏖️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "S",
          "word": "South Goa Beach",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tarkarli Beach",
          "emoji": "🏖️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "U",
          "word": "Uppuveli Beach",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Varkala Beach",
          "emoji": "🏖️",
          "bgColor": "#FF6347"
          },
          {
          "letter": "W",
          "word": "Waikiki Style Beach",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "X",
          "word": "X-otic Beach",
          "emoji": "🏖️",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Y",
          "word": "Yarada Beach",
          "emoji": "🏖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zostel Beach",
          "emoji": "🏖️",
          "bgColor": "#FF8C00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsMusicBollywood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bollywood Music Part 1",
          videoId: "music-bollywood-1",
          bgGradient: ["#ED4264","#FFEDBC"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "AR Rahman",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bollywood Song",
          "emoji": "🎶",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Choreography",
          "emoji": "💃",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "D",
          "word": "Dance Number",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Evergreen Song",
          "emoji": "🎵",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Film Score",
          "emoji": "🎵",
          "bgColor": "#4169E1"
          },
          {
          "letter": "G",
          "word": "Ghazal",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hindi Song",
          "emoji": "🎶",
          "bgColor": "#FF9933"
          },
          {
          "letter": "I",
          "word": "Item Song",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "J",
          "word": "Jugalbandi",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kishore Kumar",
          "emoji": "🎤",
          "bgColor": "#DAA520"
          },
          {
          "letter": "L",
          "word": "Lata Song",
          "emoji": "🎤",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Melody",
          "emoji": "🎵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "N",
          "word": "Naach Song",
          "emoji": "💃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "O",
          "word": "Oscar Song",
          "emoji": "🏆",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Playback Singer",
          "emoji": "🎤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Q",
          "word": "Qawwali",
          "emoji": "🎵",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Remix",
          "emoji": "🎵",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Sufi Song",
          "emoji": "🎵",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Title Track",
          "emoji": "🎬",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "Unplugged Version",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Voice Singing",
          "emoji": "🎤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Wedding Song",
          "emoji": "🎶",
          "bgColor": "#FFD700"
          },
          {
          "letter": "X",
          "word": "X-factor Song",
          "emoji": "🎵",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yash Raj Music",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zara Sa Song",
          "emoji": "🎵",
          "bgColor": "#FF69B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsMusicClassical1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Classical Music Part 1",
          videoId: "music-classical-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Alaap",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bhajan",
          "emoji": "🎵",
          "bgColor": "#FF9933"
          },
          {
          "letter": "C",
          "word": "Carnatic Music",
          "emoji": "🎵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dhrupad",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "E",
          "word": "Evening Raga",
          "emoji": "🎵",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "F",
          "word": "Flute Melody",
          "emoji": "🎵",
          "bgColor": "#DAA520"
          },
          {
          "letter": "G",
          "word": "Gharana",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hindustani Music",
          "emoji": "🎵",
          "bgColor": "#FF9933"
          },
          {
          "letter": "I",
          "word": "Indian Raga",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Jugalbandi",
          "emoji": "🎵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Khyal",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "L",
          "word": "Light Music",
          "emoji": "🎵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "M",
          "word": "Morning Raga",
          "emoji": "🎵",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Nada (Sound)",
          "emoji": "🎵",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Octave (Saptak)",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Pandit Performance",
          "emoji": "🎤",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Q",
          "word": "Quiet Meditation Music",
          "emoji": "🎵",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Raga",
          "emoji": "🎵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Sargam (Sa Re Ga Ma)",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Taal (Rhythm)",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "U",
          "word": "Ustad Performance",
          "emoji": "🎤",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Vocalisation",
          "emoji": "🎤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Winter Raga",
          "emoji": "🎵",
          "bgColor": "#4682B4"
          },
          {
          "letter": "X",
          "word": "X-pressive Raga",
          "emoji": "🎵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Youth Concert",
          "emoji": "🎵",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zen Meditation Music",
          "emoji": "🧘",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureToys1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Toys & Games Part 1",
          videoId: "culture-toys-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Antakshari Game",
          "emoji": "🎤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Board Game",
          "emoji": "🎲",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Carrom Board",
          "emoji": "🎯",
          "bgColor": "#DEB887"
          },
          {
          "letter": "D",
          "word": "Dolls",
          "emoji": "🪆",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "E",
          "word": "Electric Train Set",
          "emoji": "🚂",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Flying Kite",
          "emoji": "🪁",
          "bgColor": "#FF6347"
          },
          {
          "letter": "G",
          "word": "Gilli Danda",
          "emoji": "🏏",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hop Scotch",
          "emoji": "🏃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Indian Chess",
          "emoji": "♟️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "J",
          "word": "Jigsaw Puzzle",
          "emoji": "🧩",
          "bgColor": "#4169E1"
          },
          {
          "letter": "K",
          "word": "Kanche (Marbles)",
          "emoji": "🔮",
          "bgColor": "#4169E1"
          },
          {
          "letter": "L",
          "word": "Ludo",
          "emoji": "🎲",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Mud Kitchen",
          "emoji": "🍳",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Nine Stones Game",
          "emoji": "🪨",
          "bgColor": "#696969"
          },
          {
          "letter": "O",
          "word": "Origami",
          "emoji": "📄",
          "bgColor": "#FF6347"
          },
          {
          "letter": "P",
          "word": "Pithoo Game",
          "emoji": "🪨",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Q",
          "word": "Quiz Cards",
          "emoji": "🃏",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Ring Toss",
          "emoji": "⭕",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Snakes and Ladders",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Top Spinning",
          "emoji": "🪀",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Uno Cards",
          "emoji": "🃏",
          "bgColor": "#DC143C"
          },
          {
          "letter": "V",
          "word": "Video Game",
          "emoji": "🎮",
          "bgColor": "#4B0082"
          },
          {
          "letter": "W",
          "word": "Wooden Blocks",
          "emoji": "🪵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "Xylophone Toy",
          "emoji": "🎵",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "Yo-Yo",
          "emoji": "🪀",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Z",
          "word": "Zip Line Toy",
          "emoji": "🏃",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureFlowers1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Flowers Part 1",
          videoId: "culture-flowers-1",
          bgGradient: ["#ED4264","#FFEDBC"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "Aster",
          "emoji": "🌸",
          "bgColor": "#8B008B"
          },
          {
          "letter": "B",
          "word": "Bougainvillea",
          "emoji": "🌺",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Champa",
          "emoji": "🌼",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Dahlia",
          "emoji": "🌸",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Evening Primrose",
          "emoji": "🌼",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Frangipani",
          "emoji": "🌸",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "G",
          "word": "Gulmohar",
          "emoji": "🌺",
          "bgColor": "#FF4500"
          },
          {
          "letter": "H",
          "word": "Hibiscus",
          "emoji": "🌺",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Indian Rose",
          "emoji": "🌹",
          "bgColor": "#DC143C"
          },
          {
          "letter": "J",
          "word": "Jasmine",
          "emoji": "🌸",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "K",
          "word": "Kamini",
          "emoji": "🌸",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Lotus",
          "emoji": "🪷",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "M",
          "word": "Marigold",
          "emoji": "🌼",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Night Jasmine",
          "emoji": "🌸",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "O",
          "word": "Orchid",
          "emoji": "🌸",
          "bgColor": "#8B008B"
          },
          {
          "letter": "P",
          "word": "Palash (Flame of Forest)",
          "emoji": "🌺",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Q",
          "word": "Queen of Night",
          "emoji": "🌸",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Rose",
          "emoji": "🌹",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Sunflower",
          "emoji": "🌻",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tulip",
          "emoji": "🌷",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Umbrella Plant",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🌸",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "Water Lily",
          "emoji": "🪷",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "X",
          "word": "Xeranthemum",
          "emoji": "🌸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Y",
          "word": "Yellow Rose",
          "emoji": "🌹",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zenith Flower",
          "emoji": "🌸",
          "bgColor": "#FF69B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsProfessionsFood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Food & Hospitality Jobs Part 1",
          videoId: "professions-food-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Artisan Baker",
          "emoji": "🧑‍🍳",
          "bgColor": "#DEB887"
          },
          {
          "letter": "B",
          "word": "Barista",
          "emoji": "☕",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Chef",
          "emoji": "🧑‍🍳",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "D",
          "word": "Delivery Person",
          "emoji": "🛵",
          "bgColor": "#FF6347"
          },
          {
          "letter": "E",
          "word": "Event Planner",
          "emoji": "🎪",
          "bgColor": "#DC143C"
          },
          {
          "letter": "F",
          "word": "Food Critic",
          "emoji": "✍️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Gourmet Chef",
          "emoji": "🧑‍🍳",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hotel Manager",
          "emoji": "🏨",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Ice Cream Maker",
          "emoji": "🍦",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "J",
          "word": "Juice Bar Owner",
          "emoji": "🧃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kitchen Helper",
          "emoji": "🍳",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Line Cook",
          "emoji": "🧑‍🍳",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Mithai Maker",
          "emoji": "🍩",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Nutritionist",
          "emoji": "🥗",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Oven Specialist",
          "emoji": "🍕",
          "bgColor": "#FF4500"
          },
          {
          "letter": "P",
          "word": "Pastry Chef",
          "emoji": "🧁",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Q",
          "word": "Quality Inspector",
          "emoji": "🔍",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Restaurant Owner",
          "emoji": "🍽️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Sous Chef",
          "emoji": "🧑‍🍳",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Tea Taster",
          "emoji": "🍵",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Uthappam Maker",
          "emoji": "🫓",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Vegetable Vendor",
          "emoji": "🥬",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Waiter",
          "emoji": "🍽️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "X",
          "word": "X-press Delivery",
          "emoji": "🛵",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yogurt Maker",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zest Chef",
          "emoji": "🧑‍🍳",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsRainforest1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainforest Animals Part 1",
          videoId: "animals-rainforest-1",
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
          "word": "Blue Morpho Butterfly",
          "emoji": "🦋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Capybara",
          "emoji": "🐹",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dart Frog",
          "emoji": "🐸",
          "bgColor": "#FF4500"
          },
          {
          "letter": "E",
          "word": "Electric Eel",
          "emoji": "🐍",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Flying Fox Bat",
          "emoji": "🦇",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "G",
          "word": "Green Iguana",
          "emoji": "🦎",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Howler Monkey",
          "emoji": "🐒",
          "bgColor": "#8B4513"
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
          "word": "Leaf Insect",
          "emoji": "🍃",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Macaw",
          "emoji": "🦜",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Night Monkey",
          "emoji": "🐵",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Orangutan",
          "emoji": "🦧",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Piranha",
          "emoji": "🐟",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Q",
          "word": "Quetzal Bird",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "R",
          "word": "Red-eyed Tree Frog",
          "emoji": "🐸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "S",
          "word": "Spider Monkey",
          "emoji": "🐒",
          "bgColor": "#8B4513"
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
          "word": "Walking Stick Bug",
          "emoji": "🪲",
          "bgColor": "#228B22"
          },
          {
          "letter": "X",
          "word": "Xenops Bird",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Y",
          "word": "Yellow Tree Frog",
          "emoji": "🐸",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zombie Ant",
          "emoji": "🐜",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsOceanDeep1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Deep Ocean Creatures Part 1",
          videoId: "animals-ocean-deep-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Anglerfish",
          "emoji": "🐟",
          "bgColor": "#191970"
          },
          {
          "letter": "B",
          "word": "Blobfish",
          "emoji": "🐟",
          "bgColor": "#DEB887"
          },
          {
          "letter": "C",
          "word": "Colossal Squid",
          "emoji": "🦑",
          "bgColor": "#8B0000"
          },
          {
          "letter": "D",
          "word": "Dragonfish",
          "emoji": "🐟",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "Electric Ray",
          "emoji": "🐟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fangtooth Fish",
          "emoji": "🐟",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "G",
          "word": "Giant Squid",
          "emoji": "🦑",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Hatchet Fish",
          "emoji": "🐟",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "I",
          "word": "Isopod",
          "emoji": "🦀",
          "bgColor": "#808080"
          },
          {
          "letter": "J",
          "word": "Jellyfish Deep",
          "emoji": "🪼",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "K",
          "word": "King Crab",
          "emoji": "🦀",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lantern Fish",
          "emoji": "🐟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Megamouth Shark",
          "emoji": "🦈",
          "bgColor": "#696969"
          },
          {
          "letter": "N",
          "word": "Nautilus",
          "emoji": "🐚",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "O",
          "word": "Oarfish",
          "emoji": "🐟",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "P",
          "word": "Phantom Jellyfish",
          "emoji": "🪼",
          "bgColor": "#8B008B"
          },
          {
          "letter": "Q",
          "word": "Queen Triggerfish",
          "emoji": "🐠",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Riftia Tube Worm",
          "emoji": "🪱",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Sea Cucumber",
          "emoji": "🐛",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tripod Fish",
          "emoji": "🐟",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "U",
          "word": "Umbrella Octopus",
          "emoji": "🐙",
          "bgColor": "#DC143C"
          },
          {
          "letter": "V",
          "word": "Vampire Squid",
          "emoji": "🦑",
          "bgColor": "#8B0000"
          },
          {
          "letter": "W",
          "word": "Whale Fall",
          "emoji": "🐋",
          "bgColor": "#191970"
          },
          {
          "letter": "X",
          "word": "Xenophyophore",
          "emoji": "🦠",
          "bgColor": "#808080"
          },
          {
          "letter": "Y",
          "word": "Yeti Crab",
          "emoji": "🦀",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zombie Worm",
          "emoji": "🪱",
          "bgColor": "#FF4500"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsWoodpeckers1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Woodpeckers & Tree Birds Part 1",
          videoId: "birds-woodpeckers-1",
          bgGradient: ["#134E5E","#71B280"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Acorn Woodpecker",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Black Woodpecker",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "C",
          "word": "Crimson-crested",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Downy Woodpecker",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "Emerald Toucanet",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Flameback",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Great Spotted",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "H",
          "word": "Hairy Woodpecker",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "Indian Flameback",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Japanese Pygmy",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Knobbed Hornbill",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Lesser Flameback",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Middle Spotted",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Northern Flicker",
          "emoji": "🐦",
          "bgColor": "#DAA520"
          },
          {
          "letter": "O",
          "word": "Okinawa Woodpecker",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "P",
          "word": "Pileated Woodpecker",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Q",
          "word": "Queen Woodpecker",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Red-headed",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Sapsucker",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Three-toed",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "Upland Hornbill",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Vermilion Flycatcher",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "White-backed",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xanthochilus",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Y",
          "word": "Yellow-bellied Sapsucker",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra-backed",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsFruitsWinter1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Fruits Part 1",
          videoId: "fruits-winter-1",
          bgGradient: ["#E0EAFC","#CFDEF3"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Apple",
          "emoji": "🍎",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Blood Orange",
          "emoji": "🍊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Cranberry",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Date",
          "emoji": "🌴",
          "bgColor": "#8B6914"
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
          "word": "Grapefruit",
          "emoji": "🍊",
          "bgColor": "#FF6347"
          },
          {
          "letter": "H",
          "word": "Honeybell Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "Indian Gooseberry",
          "emoji": "🍈",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Japanese Persimmon",
          "emoji": "🍈",
          "bgColor": "#FF6347"
          },
          {
          "letter": "K",
          "word": "Kumquat",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Lime",
          "emoji": "🍋",
          "bgColor": "#32CD32"
          },
          {
          "letter": "M",
          "word": "Mandarin Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Navel Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "O",
          "word": "Olive",
          "emoji": "🫒",
          "bgColor": "#556B2F"
          },
          {
          "letter": "P",
          "word": "Pear",
          "emoji": "🍐",
          "bgColor": "#9ACD32"
          },
          {
          "letter": "Q",
          "word": "Quince",
          "emoji": "🍐",
          "bgColor": "#BDB76B"
          },
          {
          "letter": "R",
          "word": "Red Apple",
          "emoji": "🍎",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Star Fruit",
          "emoji": "⭐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tangerine",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "U",
          "word": "Ugli Fruit",
          "emoji": "🍊",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Valencia Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "W",
          "word": "Winter Melon",
          "emoji": "🍈",
          "bgColor": "#98FB98"
          },
          {
          "letter": "X",
          "word": "Ximenia",
          "emoji": "🍒",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yuzu",
          "emoji": "🍋",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Ziziphus (Ber)",
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
        id="KidsVehiclesLuxury1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Luxury Vehicles Part 1",
          videoId: "vehicles-luxury-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Aston Martin",
          "emoji": "🚗",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Bentley",
          "emoji": "🚗",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "C",
          "word": "Cadillac",
          "emoji": "🚗",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "D",
          "word": "Daimler",
          "emoji": "🚗",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "E",
          "word": "Electric Tesla",
          "emoji": "🚗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "F",
          "word": "Ferrari",
          "emoji": "🚗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "G",
          "word": "G-Wagon Mercedes",
          "emoji": "🚙",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "H",
          "word": "Hummer",
          "emoji": "🚙",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Infiniti",
          "emoji": "🚗",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "J",
          "word": "Jaguar",
          "emoji": "🚗",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Koenigsegg",
          "emoji": "🚗",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "L",
          "word": "Lamborghini",
          "emoji": "🚗",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Maserati",
          "emoji": "🚗",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Nissan GT-R",
          "emoji": "🚗",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "O",
          "word": "Opel GT",
          "emoji": "🚗",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Porsche",
          "emoji": "🚗",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Q",
          "word": "Quattro Audi",
          "emoji": "🚗",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "R",
          "word": "Rolls Royce",
          "emoji": "🚗",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "S",
          "word": "Superyacht",
          "emoji": "🛥️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Toyota Crown",
          "emoji": "🚗",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "Ultra Luxury Sedan",
          "emoji": "🚗",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Volvo S90",
          "emoji": "🚗",
          "bgColor": "#4682B4"
          },
          {
          "letter": "W",
          "word": "White Limousine",
          "emoji": "🚗",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-class Mercedes",
          "emoji": "🚙",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Y",
          "word": "Yacht",
          "emoji": "🛥️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zenvo Sports Car",
          "emoji": "🚗",
          "bgColor": "#DC143C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceSpaceMissions1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Space Missions Part 1",
          videoId: "science-space-missions-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Apollo 11",
          "emoji": "🚀",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "B",
          "word": "Buzz Aldrin",
          "emoji": "🧑‍🚀",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "C",
          "word": "Chandrayaan",
          "emoji": "🚀",
          "bgColor": "#FF9933"
          },
          {
          "letter": "D",
          "word": "Discovery Shuttle",
          "emoji": "🚀",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Explorer Satellite",
          "emoji": "🛰️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "F",
          "word": "First Man on Moon",
          "emoji": "🌕",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "G",
          "word": "Gagarin (First in Space)",
          "emoji": "🧑‍🚀",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Hubble Space Telescope",
          "emoji": "🔭",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "ISRO Missions",
          "emoji": "🚀",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "James Webb Telescope",
          "emoji": "🔭",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kalpana Chawla",
          "emoji": "🧑‍🚀",
          "bgColor": "#4169E1"
          },
          {
          "letter": "L",
          "word": "Lunar Module",
          "emoji": "🚀",
          "bgColor": "#808080"
          },
          {
          "letter": "M",
          "word": "Mars Mission",
          "emoji": "🔴",
          "bgColor": "#B22222"
          },
          {
          "letter": "N",
          "word": "NASA",
          "emoji": "🚀",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Orbital Station",
          "emoji": "🛰️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "P",
          "word": "Perseverance Rover",
          "emoji": "🤖",
          "bgColor": "#B22222"
          },
          {
          "letter": "Q",
          "word": "Quantum Satellite",
          "emoji": "🛰️",
          "bgColor": "#4B0082"
          },
          {
          "letter": "R",
          "word": "Rakesh Sharma",
          "emoji": "🧑‍🚀",
          "bgColor": "#FF9933"
          },
          {
          "letter": "S",
          "word": "Soyuz Capsule",
          "emoji": "🚀",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Titan Probe",
          "emoji": "🛸",
          "bgColor": "#DAA520"
          },
          {
          "letter": "U",
          "word": "Unmanned Mission",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Voyager Probe",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "W",
          "word": "Walking in Space",
          "emoji": "🧑‍🚀",
          "bgColor": "#191970"
          },
          {
          "letter": "X",
          "word": "X-37B Spaceplane",
          "emoji": "🚀",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Y",
          "word": "Yuri Gagarin",
          "emoji": "🧑‍🚀",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Z",
          "word": "Zero-G Training",
          "emoji": "🧑‍🚀",
          "bgColor": "#4682B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsCycling1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cycling & Skating Part 1",
          videoId: "sports-cycling-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "Adventure Cycling",
          "emoji": "🚲",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "BMX Racing",
          "emoji": "🚲",
          "bgColor": "#FF4500"
          },
          {
          "letter": "C",
          "word": "Cross-country Cycling",
          "emoji": "🚲",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Downhill Mountain Bike",
          "emoji": "🚲",
          "bgColor": "#8B4513"
          },
          {
          "letter": "E",
          "word": "Electric Skating",
          "emoji": "🛹",
          "bgColor": "#32CD32"
          },
          {
          "letter": "F",
          "word": "Figure Skating",
          "emoji": "⛸️",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Gravel Cycling",
          "emoji": "🚲",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hill Climb Cycling",
          "emoji": "🚲",
          "bgColor": "#228B22"
          },
          {
          "letter": "I",
          "word": "Indoor Cycling",
          "emoji": "🚲",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Jump Skating",
          "emoji": "🛹",
          "bgColor": "#FF4500"
          },
          {
          "letter": "K",
          "word": "Kick Scooter Racing",
          "emoji": "🛴",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Long Distance Cycling",
          "emoji": "🚲",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Mountain Biking",
          "emoji": "🚲",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "N",
          "word": "Night Cycling",
          "emoji": "🚲",
          "bgColor": "#191970"
          },
          {
          "letter": "O",
          "word": "Olympic Cycling",
          "emoji": "🚲",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Park Skating",
          "emoji": "🛹",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Q",
          "word": "Quick Sprint Cycle",
          "emoji": "🚲",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Road Cycling",
          "emoji": "🚲",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Skateboarding",
          "emoji": "🛹",
          "bgColor": "#FF4500"
          },
          {
          "letter": "T",
          "word": "Track Cycling",
          "emoji": "🚲",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Unicycle Racing",
          "emoji": "🚲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "V",
          "word": "Velodrome Racing",
          "emoji": "🚲",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Wheelie Competition",
          "emoji": "🚲",
          "bgColor": "#DC143C"
          },
          {
          "letter": "X",
          "word": "X-treme BMX",
          "emoji": "🚲",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Youth Cycling",
          "emoji": "🚲",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zigzag Slalom",
          "emoji": "🚲",
          "bgColor": "#DC143C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyContinents1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Continents & Countries Part 1",
          videoId: "geography-continents-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Africa",
          "emoji": "🌍",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Brazil",
          "emoji": "🌎",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🌏",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Denmark",
          "emoji": "🌍",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Europe",
          "emoji": "🌍",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "France",
          "emoji": "🌍",
          "bgColor": "#4169E1"
          },
          {
          "letter": "G",
          "word": "Germany",
          "emoji": "🌍",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "H",
          "word": "Holland",
          "emoji": "🌍",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🌏",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Kenya",
          "emoji": "🌍",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "London (UK)",
          "emoji": "🌍",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Mexico",
          "emoji": "🌎",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "North America",
          "emoji": "🌎",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Oceania",
          "emoji": "🌏",
          "bgColor": "#00CED1"
          },
          {
          "letter": "P",
          "word": "Peru",
          "emoji": "🌎",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Q",
          "word": "Qatar",
          "emoji": "🌍",
          "bgColor": "#8B0000"
          },
          {
          "letter": "R",
          "word": "Russia",
          "emoji": "🌍",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "South America",
          "emoji": "🌎",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Turkey",
          "emoji": "🌍",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "United States",
          "emoji": "🌎",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Venezuela",
          "emoji": "🌎",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "World Map",
          "emoji": "🗺️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "Xi'an China",
          "emoji": "🌏",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yemen",
          "emoji": "🌍",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Z",
          "word": "Zimbabwe",
          "emoji": "🌍",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsMusicRock1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rock & Modern Music Part 1",
          videoId: "music-rock-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Acoustic Guitar",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bass Guitar",
          "emoji": "🎸",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "C",
          "word": "Concert",
          "emoji": "🎤",
          "bgColor": "#DC143C"
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
          "word": "Festival",
          "emoji": "🎪",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Grunge Music",
          "emoji": "🎸",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "H",
          "word": "Heavy Metal",
          "emoji": "🎸",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "Indie Rock",
          "emoji": "🎸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Jam Session",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "K",
          "word": "Karaoke",
          "emoji": "🎤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Live Concert",
          "emoji": "🎤",
          "bgColor": "#FF4500"
          },
          {
          "letter": "M",
          "word": "Microphone",
          "emoji": "🎤",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "N",
          "word": "Neon Lights Show",
          "emoji": "💡",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "O",
          "word": "Orchestra Rock",
          "emoji": "🎸",
          "bgColor": "#4B0082"
          },
          {
          "letter": "P",
          "word": "Pop Rock",
          "emoji": "🎸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Q",
          "word": "Quiet Acoustic",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Rock Band",
          "emoji": "🎸",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Stage Performance",
          "emoji": "🎤",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tour Bus",
          "emoji": "🚌",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "Unplugged Session",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Vocals",
          "emoji": "🎤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Wah Pedal",
          "emoji": "🎸",
          "bgColor": "#FF4500"
          },
          {
          "letter": "X",
          "word": "X-treme Music",
          "emoji": "🎸",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Youth Band",
          "emoji": "🎸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zen Rock",
          "emoji": "🎸",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureSweets1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Sweets Part 1",
          videoId: "culture-sweets-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Agra Petha",
          "emoji": "🍬",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Barfi",
          "emoji": "🍬",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Chamcham",
          "emoji": "🍬",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "D",
          "word": "Doodh Peda",
          "emoji": "🍬",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "E",
          "word": "Ek Rupiya Sweet",
          "emoji": "🍬",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Falooda",
          "emoji": "🍨",
          "bgColor": "#FF69B4"
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
          "word": "Imarti",
          "emoji": "🍩",
          "bgColor": "#FF8C00"
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
          "word": "Ladoo",
          "emoji": "🍬",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mysore Pak",
          "emoji": "🍬",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Nankhatai",
          "emoji": "🍪",
          "bgColor": "#DEB887"
          },
          {
          "letter": "O",
          "word": "Orange Burfi",
          "emoji": "🍬",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Peda",
          "emoji": "🍬",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Q",
          "word": "Quick Rabri",
          "emoji": "🍮",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "R",
          "word": "Rasgulla",
          "emoji": "🍬",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "S",
          "word": "Sandesh",
          "emoji": "🍬",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Til Ladoo",
          "emoji": "🍬",
          "bgColor": "#8B6914"
          },
          {
          "letter": "U",
          "word": "Uttapam Sweet",
          "emoji": "🫓",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Vermicelli Kheer",
          "emoji": "🍮",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "W",
          "word": "White Rasgulla",
          "emoji": "🍬",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-tra Sweet Jalebi",
          "emoji": "🍩",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "Y",
          "word": "Yellow Ladoo",
          "emoji": "🍬",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zarda Sweet Rice",
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
        id="KidsCultureCrafts1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Handicrafts Part 1",
          videoId: "culture-crafts-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Aranmula Mirror",
          "emoji": "🪞",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bidri Craft",
          "emoji": "🏺",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "C",
          "word": "Channapatna Toys",
          "emoji": "🪆",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dhokra Metal Craft",
          "emoji": "🏺",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Embroidery",
          "emoji": "🧵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "F",
          "word": "Filigree Work",
          "emoji": "✨",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "G",
          "word": "Glass Bangle",
          "emoji": "💍",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Handloom Weaving",
          "emoji": "🧵",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "Ivory Carving",
          "emoji": "🏺",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "J",
          "word": "Jute Craft",
          "emoji": "🧵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "K",
          "word": "Kathputli Puppet",
          "emoji": "🪆",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lacquerware",
          "emoji": "🏺",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Marble Inlay",
          "emoji": "🏺",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Naga Shawl",
          "emoji": "🧣",
          "bgColor": "#DC143C"
          },
          {
          "letter": "O",
          "word": "Odisha Pattachitra",
          "emoji": "🎨",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Paper Mache",
          "emoji": "🎭",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Quilting Art",
          "emoji": "🧵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "R",
          "word": "Rogan Art",
          "emoji": "🎨",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Stone Carving",
          "emoji": "🗿",
          "bgColor": "#696969"
          },
          {
          "letter": "T",
          "word": "Terracotta Pottery",
          "emoji": "🏺",
          "bgColor": "#CD853F"
          },
          {
          "letter": "U",
          "word": "Urli Vessel",
          "emoji": "🏺",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Varanasi Silk",
          "emoji": "🧵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Wood Carving",
          "emoji": "🪵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "X-stitch Embroidery",
          "emoji": "🧵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yarn Weaving",
          "emoji": "🧶",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Z",
          "word": "Zardozi Gold Work",
          "emoji": "✨",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsProfessionsAgriculture1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Agriculture & Farming Jobs Part 1",
          videoId: "professions-agriculture-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Agronomist",
          "emoji": "🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Beekeeper",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cattle Farmer",
          "emoji": "🐄",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dairy Farmer",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Extension Officer",
          "emoji": "🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fisherman",
          "emoji": "🎣",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Grain Trader",
          "emoji": "🌾",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Horticulturist",
          "emoji": "🌸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "I",
          "word": "Irrigation Engineer",
          "emoji": "💧",
          "bgColor": "#4682B4"
          },
          {
          "letter": "J",
          "word": "Jute Farmer",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kisan (Farmer)",
          "emoji": "🧑‍🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Livestock Manager",
          "emoji": "🐄",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Mushroom Grower",
          "emoji": "🍄",
          "bgColor": "#DEB887"
          },
          {
          "letter": "N",
          "word": "Nursery Worker",
          "emoji": "🌱",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Organic Farmer",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Poultry Farmer",
          "emoji": "🐔",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Q",
          "word": "Quality Checker",
          "emoji": "🔍",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rice Farmer",
          "emoji": "🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Seed Supplier",
          "emoji": "🌱",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tea Plantation Worker",
          "emoji": "🍵",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Urban Farmer",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Vine Grower",
          "emoji": "🍇",
          "bgColor": "#800080"
          },
          {
          "letter": "W",
          "word": "Wheat Farmer",
          "emoji": "🌾",
          "bgColor": "#DAA520"
          },
          {
          "letter": "X",
          "word": "X-perimental Farmer",
          "emoji": "🧑‍🔬",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yield Specialist",
          "emoji": "📊",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zero-waste Farmer",
          "emoji": "♻️",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceChemistry1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Chemistry & Elements Part 1",
          videoId: "science-chemistry-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Atom",
          "emoji": "⚛️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Beaker",
          "emoji": "🧪",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "C",
          "word": "Carbon",
          "emoji": "⚛️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "D",
          "word": "DNA",
          "emoji": "🧬",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Element",
          "emoji": "⚛️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Flask",
          "emoji": "🧪",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "G",
          "word": "Gold Element",
          "emoji": "🥇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hydrogen",
          "emoji": "💧",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Iron",
          "emoji": "⚙️",
          "bgColor": "#696969"
          },
          {
          "letter": "J",
          "word": "Jar (Lab)",
          "emoji": "🧪",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "K",
          "word": "Krypton Gas",
          "emoji": "💨",
          "bgColor": "#00CED1"
          },
          {
          "letter": "L",
          "word": "Litmus Paper",
          "emoji": "📄",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Molecule",
          "emoji": "⚛️",
          "bgColor": "#32CD32"
          },
          {
          "letter": "N",
          "word": "Nitrogen",
          "emoji": "💨",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "Oxygen",
          "emoji": "💨",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "P",
          "word": "Periodic Table",
          "emoji": "📊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Quartz Crystal",
          "emoji": "💎",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Reaction",
          "emoji": "💥",
          "bgColor": "#FF4500"
          },
          {
          "letter": "S",
          "word": "Silver",
          "emoji": "🥈",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Test Tube",
          "emoji": "🧪",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "U",
          "word": "Uranium",
          "emoji": "☢️",
          "bgColor": "#32CD32"
          },
          {
          "letter": "V",
          "word": "Volcano Experiment",
          "emoji": "🌋",
          "bgColor": "#FF4500"
          },
          {
          "letter": "W",
          "word": "Water (H2O)",
          "emoji": "💧",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "Xenon Gas",
          "emoji": "💨",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Y",
          "word": "Yttrium",
          "emoji": "⚛️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Z",
          "word": "Zinc",
          "emoji": "⚛️",
          "bgColor": "#C0C0C0"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceRobotics1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Robots & AI Part 1",
          videoId: "science-robotics-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "AI Assistant",
          "emoji": "🤖",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Bot",
          "emoji": "🤖",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "C",
          "word": "Chatbot",
          "emoji": "🤖",
          "bgColor": "#32CD32"
          },
          {
          "letter": "D",
          "word": "Drone Robot",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Electric Robot",
          "emoji": "🤖",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Factory Robot",
          "emoji": "🤖",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "GPS Robot",
          "emoji": "🤖",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Humanoid",
          "emoji": "🤖",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "I",
          "word": "Industrial Robot",
          "emoji": "🤖",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "J",
          "word": "Jumping Robot",
          "emoji": "🤖",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Kitchen Robot",
          "emoji": "🤖",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Learning AI",
          "emoji": "🧠",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "M",
          "word": "Mars Rover",
          "emoji": "🤖",
          "bgColor": "#B22222"
          },
          {
          "letter": "N",
          "word": "Nano Robot",
          "emoji": "🤖",
          "bgColor": "#00CED1"
          },
          {
          "letter": "O",
          "word": "Operating Robot",
          "emoji": "🤖",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Pet Robot",
          "emoji": "🤖",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Q",
          "word": "Quantum Robot",
          "emoji": "🤖",
          "bgColor": "#4B0082"
          },
          {
          "letter": "R",
          "word": "Rescue Robot",
          "emoji": "🤖",
          "bgColor": "#FF0000"
          },
          {
          "letter": "S",
          "word": "Sophia Robot",
          "emoji": "🤖",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Transformer Robot",
          "emoji": "🤖",
          "bgColor": "#4169E1"
          },
          {
          "letter": "U",
          "word": "Underwater Robot",
          "emoji": "🤖",
          "bgColor": "#191970"
          },
          {
          "letter": "V",
          "word": "Voice Assistant",
          "emoji": "🔊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "W",
          "word": "Walking Robot",
          "emoji": "🤖",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "X",
          "word": "X-ray Robot",
          "emoji": "🤖",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yellow Robot",
          "emoji": "🤖",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zero-defect Robot",
          "emoji": "🤖",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSciencePhysics1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Physics & Forces Part 1",
          videoId: "science-physics-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Acceleration",
          "emoji": "🏃",
          "bgColor": "#FF4500"
          },
          {
          "letter": "B",
          "word": "Buoyancy",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Centripetal Force",
          "emoji": "🔄",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Density",
          "emoji": "⚖️",
          "bgColor": "#696969"
          },
          {
          "letter": "E",
          "word": "Electricity",
          "emoji": "⚡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Friction",
          "emoji": "🔥",
          "bgColor": "#FF4500"
          },
          {
          "letter": "G",
          "word": "Gravity",
          "emoji": "🍎",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Heat Energy",
          "emoji": "🌡️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "I",
          "word": "Inertia",
          "emoji": "🏋️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "J",
          "word": "Joule (Energy)",
          "emoji": "⚡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kinetic Energy",
          "emoji": "🏃",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Light",
          "emoji": "💡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Magnet",
          "emoji": "🧲",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Newton's Law",
          "emoji": "🍎",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Optics",
          "emoji": "🔍",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "P",
          "word": "Pressure",
          "emoji": "💨",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quantum Physics",
          "emoji": "⚛️",
          "bgColor": "#4B0082"
          },
          {
          "letter": "R",
          "word": "Reflection",
          "emoji": "🪞",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "S",
          "word": "Sound Wave",
          "emoji": "🔊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "T",
          "word": "Thermometer",
          "emoji": "🌡️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "U",
          "word": "Ultraviolet Light",
          "emoji": "☀️",
          "bgColor": "#8B008B"
          },
          {
          "letter": "V",
          "word": "Velocity",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Wave",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "X-ray",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yield Strength",
          "emoji": "💪",
          "bgColor": "#696969"
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
        id="KidsSportsWinter1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Winter Sports Part 1",
          videoId: "sports-winter-1",
          bgGradient: ["#E0EAFC","#CFDEF3"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Alpine Skiing",
          "emoji": "⛷️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Bobsled",
          "emoji": "🛷",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Curling",
          "emoji": "🥌",
          "bgColor": "#4169E1"
          },
          {
          "letter": "D",
          "word": "Downhill Skiing",
          "emoji": "⛷️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Extreme Snowboard",
          "emoji": "🏂",
          "bgColor": "#00CED1"
          },
          {
          "letter": "F",
          "word": "Figure Skating",
          "emoji": "⛸️",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Giant Slalom",
          "emoji": "⛷️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "H",
          "word": "Hockey (Ice)",
          "emoji": "🏒",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "I",
          "word": "Ice Skating",
          "emoji": "⛸️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "J",
          "word": "Jump Skiing",
          "emoji": "⛷️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "K",
          "word": "Knee Boarding",
          "emoji": "🏂",
          "bgColor": "#00CED1"
          },
          {
          "letter": "L",
          "word": "Luge",
          "emoji": "🛷",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Mogul Skiing",
          "emoji": "⛷️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Nordic Skiing",
          "emoji": "⛷️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Olympic Skating",
          "emoji": "⛸️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Para Skiing",
          "emoji": "⛷️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Quick Skating",
          "emoji": "⛸️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Relay Skating",
          "emoji": "⛸️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "S",
          "word": "Snowboarding",
          "emoji": "🏂",
          "bgColor": "#00CED1"
          },
          {
          "letter": "T",
          "word": "Toboggan",
          "emoji": "🛷",
          "bgColor": "#8B4513"
          },
          {
          "letter": "U",
          "word": "Ultra Marathon Ski",
          "emoji": "⛷️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vanilla Ice Show",
          "emoji": "⛸️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "W",
          "word": "Winter Olympics",
          "emoji": "🏅",
          "bgColor": "#FFD700"
          },
          {
          "letter": "X",
          "word": "X-country Skiing",
          "emoji": "⛷️",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Youth Ice Hockey",
          "emoji": "🏒",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zamboni Machine",
          "emoji": "🧊",
          "bgColor": "#4682B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsAthletics1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Athletics & Track Part 1",
          videoId: "sports-athletics-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "100m Sprint",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Baton Relay",
          "emoji": "🏃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cross Country",
          "emoji": "🏃",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Discus Throw",
          "emoji": "🥏",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Endurance Run",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "F",
          "word": "Finish Line",
          "emoji": "🏁",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "G",
          "word": "Gold Medal",
          "emoji": "🥇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "High Jump",
          "emoji": "🏃",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Indian Relay",
          "emoji": "🏃",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "Javelin Throw",
          "emoji": "🎯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kilometer Race",
          "emoji": "🏃",
          "bgColor": "#DC143C"
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
          "word": "National Record",
          "emoji": "🏆",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Olympic Track",
          "emoji": "🏅",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Pole Vault",
          "emoji": "🏃",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Qualifying Heat",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Relay Race",
          "emoji": "🏃",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Shot Put",
          "emoji": "🏋️",
          "bgColor": "#696969"
          },
          {
          "letter": "T",
          "word": "Triple Jump",
          "emoji": "🏃",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Ultra Marathon",
          "emoji": "🏃",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vault Jump",
          "emoji": "🏃",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Walking Race",
          "emoji": "🚶",
          "bgColor": "#228B22"
          },
          {
          "letter": "X",
          "word": "X-country Sprint",
          "emoji": "🏃",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Youth Olympics",
          "emoji": "🏅",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zone Finish",
          "emoji": "🏁",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsDomestic1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Domestic Animals Part 1",
          videoId: "animals-domestic-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Angora Rabbit",
          "emoji": "🐰",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Brahma Chicken",
          "emoji": "🐔",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Cow",
          "emoji": "🐄",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "D",
          "word": "Duck",
          "emoji": "🦆",
          "bgColor": "#228B22"
          },
          {
          "letter": "E",
          "word": "Emu",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Farm Cat",
          "emoji": "🐱",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Goose",
          "emoji": "🪿",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "H",
          "word": "Hen",
          "emoji": "🐔",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Indian Buffalo",
          "emoji": "🐃",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "J",
          "word": "Jersey Cow",
          "emoji": "🐄",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "Koi Fish",
          "emoji": "🐟",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Llama",
          "emoji": "🦙",
          "bgColor": "#DEB887"
          },
          {
          "letter": "M",
          "word": "Mule",
          "emoji": "🫏",
          "bgColor": "#808080"
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
          "word": "Ram",
          "emoji": "🐏",
          "bgColor": "#DEB887"
          },
          {
          "letter": "S",
          "word": "Silkie Chicken",
          "emoji": "🐔",
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
          "word": "Udder Goat",
          "emoji": "🐐",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vietnamese Pig",
          "emoji": "🐷",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "W",
          "word": "White Rabbit",
          "emoji": "🐰",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-breed Dog",
          "emoji": "🐶",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Y",
          "word": "Yak",
          "emoji": "🐂",
          "bgColor": "#4A2C2A"
          },
          {
          "letter": "Z",
          "word": "Zebu Cattle",
          "emoji": "🐄",
          "bgColor": "#DEB887"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsOwls1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Owls & Night Birds Part 1",
          videoId: "birds-owls-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Asian Barred Owlet",
          "emoji": "🦉",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Barn Owl",
          "emoji": "🦉",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "C",
          "word": "Common Nightjar",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "D",
          "word": "Dusky Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#696969"
          },
          {
          "letter": "E",
          "word": "Eurasian Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Forest Owlet",
          "emoji": "🦉",
          "bgColor": "#556B2F"
          },
          {
          "letter": "G",
          "word": "Great Horned Owl",
          "emoji": "🦉",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hawk Owl",
          "emoji": "🦉",
          "bgColor": "#696969"
          },
          {
          "letter": "I",
          "word": "Indian Scops Owl",
          "emoji": "🦉",
          "bgColor": "#8B6914"
          },
          {
          "letter": "J",
          "word": "Jungle Owlet",
          "emoji": "🦉",
          "bgColor": "#556B2F"
          },
          {
          "letter": "K",
          "word": "Koel (Night Singer)",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Long-eared Owl",
          "emoji": "🦉",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Mottled Wood Owl",
          "emoji": "🦉",
          "bgColor": "#8B6914"
          },
          {
          "letter": "N",
          "word": "Night Heron",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Oriental Bay Owl",
          "emoji": "🦉",
          "bgColor": "#DEB887"
          },
          {
          "letter": "P",
          "word": "Pygmy Owl",
          "emoji": "🦉",
          "bgColor": "#556B2F"
          },
          {
          "letter": "Q",
          "word": "Quiet Night Owl",
          "emoji": "🦉",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "R",
          "word": "Rock Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#696969"
          },
          {
          "letter": "S",
          "word": "Snowy Owl",
          "emoji": "🦉",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Tawny Owl",
          "emoji": "🦉",
          "bgColor": "#8B4513"
          },
          {
          "letter": "U",
          "word": "Ural Owl",
          "emoji": "🦉",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Verreaux Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#696969"
          },
          {
          "letter": "W",
          "word": "Whiskered Screech Owl",
          "emoji": "🦉",
          "bgColor": "#8B6914"
          },
          {
          "letter": "X",
          "word": "Xantus Owl",
          "emoji": "🦉",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Y",
          "word": "Yellow Nightjar",
          "emoji": "🐦",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zenith Night Bird",
          "emoji": "🐦",
          "bgColor": "#191970"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsFruitsSummer1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Summer Fruits Part 1",
          videoId: "fruits-summer-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Aam (Mango)",
          "emoji": "🥭",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "B",
          "word": "Banana",
          "emoji": "🍌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cherry",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dragon Fruit",
          "emoji": "🐉",
          "bgColor": "#FF1493"
          },
          {
          "letter": "E",
          "word": "Elephant Apple",
          "emoji": "🍏",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fresh Coconut",
          "emoji": "🥥",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "G",
          "word": "Grapes",
          "emoji": "🍇",
          "bgColor": "#800080"
          },
          {
          "letter": "H",
          "word": "Honeydew Melon",
          "emoji": "🍈",
          "bgColor": "#98FB98"
          },
          {
          "letter": "I",
          "word": "Ice Apple",
          "emoji": "🍈",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "J",
          "word": "Jamun",
          "emoji": "🫐",
          "bgColor": "#191970"
          },
          {
          "letter": "K",
          "word": "Kharbooja (Muskmelon)",
          "emoji": "🍈",
          "bgColor": "#F4A460"
          },
          {
          "letter": "L",
          "word": "Litchi",
          "emoji": "🍒",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Mango",
          "emoji": "🥭",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Nimboo (Lemon)",
          "emoji": "🍋",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Peach",
          "emoji": "🍑",
          "bgColor": "#FFDAB9"
          },
          {
          "letter": "Q",
          "word": "Quenching Watermelon",
          "emoji": "🍉",
          "bgColor": "#FF6347"
          },
          {
          "letter": "R",
          "word": "Rasbhari",
          "emoji": "🍒",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Sugarcane",
          "emoji": "🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tarbuz (Watermelon)",
          "emoji": "🍉",
          "bgColor": "#FF6347"
          },
          {
          "letter": "U",
          "word": "Ugli Fruit",
          "emoji": "🍊",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Vine Melon",
          "emoji": "🍈",
          "bgColor": "#98FB98"
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
          "word": "Yellow Mango",
          "emoji": "🥭",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Ziziphus (Ber)",
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
        id="KidsVehiclesFuture1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Future Vehicles Part 1",
          videoId: "vehicles-future-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Autonomous Car",
          "emoji": "🚗",
          "bgColor": "#00CED1"
          },
          {
          "letter": "B",
          "word": "Bullet Train",
          "emoji": "🚅",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Cybertruck",
          "emoji": "🚙",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "D",
          "word": "Delivery Drone",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Electric Bus",
          "emoji": "🚌",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Flying Car",
          "emoji": "🚗",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "G",
          "word": "Green Hydrogen Car",
          "emoji": "🚗",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Hyperloop",
          "emoji": "🚄",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "I",
          "word": "Invisible Stealth Jet",
          "emoji": "✈️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "J",
          "word": "Jet Pack",
          "emoji": "🚀",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kinetic Scooter",
          "emoji": "🛴",
          "bgColor": "#32CD32"
          },
          {
          "letter": "L",
          "word": "Laser Train",
          "emoji": "🚄",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Maglev Train",
          "emoji": "🚄",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Neon Bike",
          "emoji": "🏍️",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "O",
          "word": "Orbital Shuttle",
          "emoji": "🚀",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "P",
          "word": "Pod Taxi",
          "emoji": "🚕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Q",
          "word": "Quantum Submarine",
          "emoji": "🚢",
          "bgColor": "#4B0082"
          },
          {
          "letter": "R",
          "word": "Robot Taxi",
          "emoji": "🚕",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "S",
          "word": "Solar Airplane",
          "emoji": "✈️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tesla Car",
          "emoji": "🚗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Underwater Drone",
          "emoji": "🛸",
          "bgColor": "#191970"
          },
          {
          "letter": "V",
          "word": "Vacuum Tube Train",
          "emoji": "🚄",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "W",
          "word": "Wind-powered Ship",
          "emoji": "⛵",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "X",
          "word": "X-wing Aircraft",
          "emoji": "✈️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Y",
          "word": "Yacht Electric",
          "emoji": "🛥️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zero Emission Bus",
          "emoji": "🚌",
          "bgColor": "#32CD32"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceMath1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Math & Numbers Part 1",
          videoId: "science-math-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Addition",
          "emoji": "➕",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Bar Graph",
          "emoji": "📊",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "Circle",
          "emoji": "⭕",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Division",
          "emoji": "➗",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "E",
          "word": "Equation",
          "emoji": "🟰",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Fraction",
          "emoji": "🔢",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Geometry",
          "emoji": "📐",
          "bgColor": "#4682B4"
          },
          {
          "letter": "H",
          "word": "Hundred",
          "emoji": "💯",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Infinity",
          "emoji": "♾️",
          "bgColor": "#4B0082"
          },
          {
          "letter": "J",
          "word": "Join (Add)",
          "emoji": "➕",
          "bgColor": "#32CD32"
          },
          {
          "letter": "K",
          "word": "Kilo (1000)",
          "emoji": "🔢",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Less Than",
          "emoji": "◀️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "M",
          "word": "Multiplication",
          "emoji": "✖️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Number Line",
          "emoji": "📏",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "Odd Number",
          "emoji": "🔢",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pi",
          "emoji": "🥧",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Quadrilateral",
          "emoji": "🟦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Ruler",
          "emoji": "📏",
          "bgColor": "#DAA520"
          },
          {
          "letter": "S",
          "word": "Subtraction",
          "emoji": "➖",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Triangle",
          "emoji": "🔺",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Unit",
          "emoji": "1️⃣",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Volume",
          "emoji": "📦",
          "bgColor": "#4682B4"
          },
          {
          "letter": "W",
          "word": "Whole Number",
          "emoji": "🔢",
          "bgColor": "#228B22"
          },
          {
          "letter": "X",
          "word": "X-axis",
          "emoji": "📊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Y",
          "word": "Y-axis",
          "emoji": "📊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Z",
          "word": "Zero",
          "emoji": "0️⃣",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyDeserts1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Deserts of the World Part 1",
          videoId: "geography-deserts-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Arabian Desert",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Badlands",
          "emoji": "🏜️",
          "bgColor": "#8B6914"
          },
          {
          "letter": "C",
          "word": "Chihuahuan Desert",
          "emoji": "🏜️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "D",
          "word": "Dasht-e-Kavir",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Empty Quarter",
          "emoji": "🏜️",
          "bgColor": "#F4A460"
          },
          {
          "letter": "F",
          "word": "Fachi Desert",
          "emoji": "🏜️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "G",
          "word": "Gobi Desert",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Hohokam Desert",
          "emoji": "🏜️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "I",
          "word": "Indian Thar Desert",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "J",
          "word": "Judean Desert",
          "emoji": "🏜️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "K",
          "word": "Kalahari Desert",
          "emoji": "🏜️",
          "bgColor": "#CD853F"
          },
          {
          "letter": "L",
          "word": "Libyan Desert",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Mojave Desert",
          "emoji": "🏜️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "N",
          "word": "Namib Desert",
          "emoji": "🏜️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "O",
          "word": "Ordos Desert",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "P",
          "word": "Patagonian Desert",
          "emoji": "🏜️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Q",
          "word": "Qaidam Desert",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "R",
          "word": "Rub al Khali",
          "emoji": "🏜️",
          "bgColor": "#F4A460"
          },
          {
          "letter": "S",
          "word": "Sahara Desert",
          "emoji": "🏜️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Thar Desert",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "U",
          "word": "Ustyurt Desert",
          "emoji": "🏜️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Victoria Desert",
          "emoji": "🏜️",
          "bgColor": "#CD853F"
          },
          {
          "letter": "W",
          "word": "White Desert Egypt",
          "emoji": "🏜️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xerophytic Desert",
          "emoji": "🌵",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yellow Sand Dunes",
          "emoji": "🏜️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zagros Desert",
          "emoji": "🏜️",
          "bgColor": "#DEB887"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyWaterfalls1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Waterfalls of India Part 1",
          videoId: "geography-waterfalls-1",
          bgGradient: ["#2193B0","#6DD5ED"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Athirappilly Falls",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Bhagsu Falls",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "C",
          "word": "Chitrakote Falls",
          "emoji": "🌊",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "D",
          "word": "Dudhsagar Falls",
          "emoji": "🌊",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Elephant Falls",
          "emoji": "🐘",
          "bgColor": "#708090"
          },
          {
          "letter": "F",
          "word": "Falls of Hogenakkal",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Gokak Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hogenakkal Falls",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Iruppu Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jog Falls",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "K",
          "word": "Kempty Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Lushington Falls",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Meenmutty Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Nohkalikai Falls",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Ooty Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Palaruvi Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Quiet Cascade",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "R",
          "word": "Raneh Falls",
          "emoji": "🌊",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Shivanasamudra Falls",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "T",
          "word": "Thoseghar Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Umbrella Falls",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Vazhachal Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Waterfall of Courtallam",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "X-tra Tall Falls",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yellapur Falls",
          "emoji": "🌊",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zanzari Falls",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsBallGames1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Ball Games Part 1",
          videoId: "sports-ball-games-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "American Football",
          "emoji": "🏈",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Basketball",
          "emoji": "🏀",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "C",
          "word": "Cricket",
          "emoji": "🏏",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Dodgeball",
          "emoji": "🏐",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Eight Ball Pool",
          "emoji": "🎱",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "F",
          "word": "Football",
          "emoji": "⚽",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Golf Ball",
          "emoji": "⛳",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "H",
          "word": "Handball",
          "emoji": "🤾",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Indoor Football",
          "emoji": "⚽",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Jai Alai",
          "emoji": "🏐",
          "bgColor": "#FF6347"
          },
          {
          "letter": "K",
          "word": "Kickball",
          "emoji": "⚽",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lacrosse",
          "emoji": "🥍",
          "bgColor": "#4169E1"
          },
          {
          "letter": "M",
          "word": "Marble Game",
          "emoji": "🔮",
          "bgColor": "#4682B4"
          },
          {
          "letter": "N",
          "word": "Netball",
          "emoji": "🏐",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Olympic Volleyball",
          "emoji": "🏐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Ping Pong",
          "emoji": "🏓",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Q",
          "word": "Quick Tennis",
          "emoji": "🎾",
          "bgColor": "#32CD32"
          },
          {
          "letter": "R",
          "word": "Rugby",
          "emoji": "🏉",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "S",
          "word": "Squash",
          "emoji": "🏸",
          "bgColor": "#4169E1"
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
          "word": "Water Polo Ball",
          "emoji": "🤽",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "X-treme Ball Sport",
          "emoji": "⚽",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Y",
          "word": "Yukigassen (Snowball)",
          "emoji": "❄️",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "Z",
          "word": "Zorb Ball",
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
        id="KidsSportsRacquet1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Racquet Sports Part 1",
          videoId: "sports-racquet-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "Airminton",
          "emoji": "🏸",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "B",
          "word": "Badminton",
          "emoji": "🏸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "Court Tennis",
          "emoji": "🎾",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Doubles Tennis",
          "emoji": "🎾",
          "bgColor": "#32CD32"
          },
          {
          "letter": "E",
          "word": "Exhibition Match",
          "emoji": "🏆",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Frontenis",
          "emoji": "🎾",
          "bgColor": "#4169E1"
          },
          {
          "letter": "G",
          "word": "Grand Slam Tennis",
          "emoji": "🏆",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hard Court Tennis",
          "emoji": "🎾",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Indoor Badminton",
          "emoji": "🏸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Jai Alai",
          "emoji": "🏐",
          "bgColor": "#FF6347"
          },
          {
          "letter": "K",
          "word": "Kids Badminton",
          "emoji": "🏸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "L",
          "word": "Lawn Tennis",
          "emoji": "🎾",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Mixed Doubles",
          "emoji": "🎾",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Net Game",
          "emoji": "🏸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Olympic Badminton",
          "emoji": "🏸",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Padel Tennis",
          "emoji": "🎾",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Quarterfinal Match",
          "emoji": "🏆",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Racquetball",
          "emoji": "🎾",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Squash",
          "emoji": "🏸",
          "bgColor": "#4169E1"
          },
          {
          "letter": "T",
          "word": "Table Tennis",
          "emoji": "🏓",
          "bgColor": "#4169E1"
          },
          {
          "letter": "U",
          "word": "Umpire Decision",
          "emoji": "🧑‍⚖️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Volley Shot",
          "emoji": "🎾",
          "bgColor": "#32CD32"
          },
          {
          "letter": "W",
          "word": "Wimbledon",
          "emoji": "🏆",
          "bgColor": "#228B22"
          },
          {
          "letter": "X",
          "word": "X-tra Set Match",
          "emoji": "🎾",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Youth Championship",
          "emoji": "🏆",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zone Defense",
          "emoji": "🏸",
          "bgColor": "#4169E1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsForest1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Forest Animals Part 1",
          videoId: "animals-forest-1",
          bgGradient: ["#134E5E","#71B280"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Antler Deer",
          "emoji": "🦌",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Badger",
          "emoji": "🦡",
          "bgColor": "#696969"
          },
          {
          "letter": "C",
          "word": "Chipmunk",
          "emoji": "🐿️",
          "bgColor": "#CD853F"
          },
          {
          "letter": "D",
          "word": "Dormouse",
          "emoji": "🐭",
          "bgColor": "#DEB887"
          },
          {
          "letter": "E",
          "word": "Elk",
          "emoji": "🫎",
          "bgColor": "#6B4226"
          },
          {
          "letter": "F",
          "word": "Ferret",
          "emoji": "🐿️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "G",
          "word": "Grizzly Bear",
          "emoji": "🐻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hare",
          "emoji": "🐰",
          "bgColor": "#DEB887"
          },
          {
          "letter": "I",
          "word": "Indian Fox",
          "emoji": "🦊",
          "bgColor": "#D2691E"
          },
          {
          "letter": "J",
          "word": "Jay Bird",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "K",
          "word": "Koala",
          "emoji": "🐨",
          "bgColor": "#808080"
          },
          {
          "letter": "L",
          "word": "Lynx",
          "emoji": "🐱",
          "bgColor": "#DEB887"
          },
          {
          "letter": "M",
          "word": "Moose",
          "emoji": "🫎",
          "bgColor": "#6B4226"
          },
          {
          "letter": "N",
          "word": "Nightingale",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "O",
          "word": "Opossum",
          "emoji": "🐭",
          "bgColor": "#808080"
          },
          {
          "letter": "P",
          "word": "Pine Marten",
          "emoji": "🐿️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Red Squirrel",
          "emoji": "🐿️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Stag",
          "emoji": "🦌",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tree Frog",
          "emoji": "🐸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "U",
          "word": "Ural Owl",
          "emoji": "🦉",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vole",
          "emoji": "🐭",
          "bgColor": "#8B7355"
          },
          {
          "letter": "W",
          "word": "Woodpecker",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "X",
          "word": "Xenops Bird",
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
          "word": "Zorro Fox",
          "emoji": "🦊",
          "bgColor": "#FF4500"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsEagles1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Eagles & Hawks Part 1",
          videoId: "birds-eagles-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "African Fish Eagle",
          "emoji": "🦅",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Brahminy Kite",
          "emoji": "🦅",
          "bgColor": "#B22222"
          },
          {
          "letter": "C",
          "word": "Changeable Hawk-Eagle",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "D",
          "word": "Dark Kite",
          "emoji": "🦅",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "E",
          "word": "Eastern Imperial Eagle",
          "emoji": "🦅",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Fishing Eagle",
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
          "word": "Harrier Hawk",
          "emoji": "🦅",
          "bgColor": "#808080"
          },
          {
          "letter": "I",
          "word": "Indian Black Eagle",
          "emoji": "🦅",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "J",
          "word": "Japanese Hawk",
          "emoji": "🦅",
          "bgColor": "#4682B4"
          },
          {
          "letter": "K",
          "word": "Kite",
          "emoji": "🦅",
          "bgColor": "#CD853F"
          },
          {
          "letter": "L",
          "word": "Lappet-faced Vulture",
          "emoji": "🦅",
          "bgColor": "#696969"
          },
          {
          "letter": "M",
          "word": "Martial Eagle",
          "emoji": "🦅",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "N",
          "word": "Northern Hawk",
          "emoji": "🦅",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "Ornate Hawk-Eagle",
          "emoji": "🦅",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "P",
          "word": "Philippine Eagle",
          "emoji": "🦅",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Q",
          "word": "Queen Hawk",
          "emoji": "🦅",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Red Kite",
          "emoji": "🦅",
          "bgColor": "#B22222"
          },
          {
          "letter": "S",
          "word": "Short-toed Eagle",
          "emoji": "🦅",
          "bgColor": "#DEB887"
          },
          {
          "letter": "T",
          "word": "Tawny Eagle",
          "emoji": "🦅",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "U",
          "word": "Ural Eagle",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "V",
          "word": "Verreaux Eagle",
          "emoji": "🦅",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "W",
          "word": "White-bellied Eagle",
          "emoji": "🦅",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xingu Eagle",
          "emoji": "🦅",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Y",
          "word": "Yellow-billed Kite",
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
        id="KidsFruitsCommon1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Common Everyday Fruits Part 1",
          videoId: "fruits-common-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Apple",
          "emoji": "🍎",
          "bgColor": "#FF0000"
          },
          {
          "letter": "B",
          "word": "Banana",
          "emoji": "🍌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cherry",
          "emoji": "🍒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Date",
          "emoji": "🌴",
          "bgColor": "#8B6914"
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
          "word": "Grapes",
          "emoji": "🍇",
          "bgColor": "#800080"
          },
          {
          "letter": "H",
          "word": "Honeydew",
          "emoji": "🍈",
          "bgColor": "#98FB98"
          },
          {
          "letter": "I",
          "word": "Indian Plum",
          "emoji": "🍑",
          "bgColor": "#DC143C"
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
          "word": "Lemon",
          "emoji": "🍋",
          "bgColor": "#FFD700"
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
          "word": "Pear",
          "emoji": "🍐",
          "bgColor": "#9ACD32"
          },
          {
          "letter": "Q",
          "word": "Quince",
          "emoji": "🍐",
          "bgColor": "#BDB76B"
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
          "word": "Tangerine",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "U",
          "word": "Ugli Fruit",
          "emoji": "🍊",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Vine Grapes",
          "emoji": "🍇",
          "bgColor": "#800080"
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
          "word": "Yellow Apple",
          "emoji": "🍏",
          "bgColor": "#9ACD32"
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
        id="KidsVegetablesSpices1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Spices Part 1",
          videoId: "vegetables-spices-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Ajwain",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Bay Leaf",
          "emoji": "🌿",
          "bgColor": "#006400"
          },
          {
          "letter": "C",
          "word": "Cardamom",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Dalchini (Cinnamon)",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "E",
          "word": "Elaichi (Cardamom)",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fennel Seeds",
          "emoji": "🌿",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "G",
          "word": "Garam Masala",
          "emoji": "🌶️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Haldi (Turmeric)",
          "emoji": "🫚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Indian Saffron",
          "emoji": "🌸",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "J",
          "word": "Jeera (Cumin)",
          "emoji": "🌿",
          "bgColor": "#DEB887"
          },
          {
          "letter": "K",
          "word": "Kalonji",
          "emoji": "🌿",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Laung (Cloves)",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Methi (Fenugreek)",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Nutmeg",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Oregano",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Pepper",
          "emoji": "🌿",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Queen Spice (Saffron)",
          "emoji": "🌸",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "R",
          "word": "Red Chili",
          "emoji": "🌶️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "S",
          "word": "Star Anise",
          "emoji": "⭐",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tamarind",
          "emoji": "🍈",
          "bgColor": "#8B4513"
          },
          {
          "letter": "U",
          "word": "Urad Dal",
          "emoji": "🫘",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "V",
          "word": "Vanilla",
          "emoji": "🌿",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "W",
          "word": "White Pepper",
          "emoji": "🌿",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "X",
          "word": "X-tra Hot Chili",
          "emoji": "🌶️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Yellow Mustard",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zaatar Spice",
          "emoji": "🌿",
          "bgColor": "#556B2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureWeddings1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Wedding Items Part 1",
          videoId: "culture-weddings-1",
          bgGradient: ["#ED4264","#FFEDBC"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "Aarti Thali",
          "emoji": "🪔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Baraat",
          "emoji": "🐴",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Chooda Bangles",
          "emoji": "💍",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dulhan (Bride)",
          "emoji": "👰",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Engagement Ring",
          "emoji": "💍",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fire (Agni)",
          "emoji": "🔥",
          "bgColor": "#FF4500"
          },
          {
          "letter": "G",
          "word": "Garland (Jaimala)",
          "emoji": "💐",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Haldi Ceremony",
          "emoji": "🫚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Invitation Card",
          "emoji": "💌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "J",
          "word": "Jewellery",
          "emoji": "💎",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kalash",
          "emoji": "🏺",
          "bgColor": "#FFD700"
          },
          {
          "letter": "L",
          "word": "Lehenga",
          "emoji": "👗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Mehendi",
          "emoji": "✋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Nath (Nose Ring)",
          "emoji": "💍",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Om Symbol",
          "emoji": "🕉️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pheras (Rounds)",
          "emoji": "🔥",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Q",
          "word": "Queen Bride",
          "emoji": "👸",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Rangoli",
          "emoji": "🎨",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Sindoor",
          "emoji": "🔴",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Toran",
          "emoji": "🌸",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Uttariya",
          "emoji": "🧣",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Vidaai",
          "emoji": "😢",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "W",
          "word": "Wedding Mandap",
          "emoji": "🛕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "X",
          "word": "X-tra Decoration",
          "emoji": "🎊",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "Yellow Saree",
          "emoji": "👗",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zari Dupatta",
          "emoji": "🧣",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsProfessionsNature1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Nature & Environment Jobs Part 1",
          videoId: "professions-nature-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Arborist",
          "emoji": "🌳",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Botanist",
          "emoji": "🌿",
          "bgColor": "#006400"
          },
          {
          "letter": "C",
          "word": "Conservationist",
          "emoji": "🌍",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Diver (Marine)",
          "emoji": "🤿",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Ecologist",
          "emoji": "🌍",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Forest Ranger",
          "emoji": "🌲",
          "bgColor": "#006400"
          },
          {
          "letter": "G",
          "word": "Geologist",
          "emoji": "🪨",
          "bgColor": "#696969"
          },
          {
          "letter": "H",
          "word": "Horticulturist",
          "emoji": "🌸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "I",
          "word": "Insect Scientist",
          "emoji": "🐛",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jungle Guide",
          "emoji": "🌴",
          "bgColor": "#006400"
          },
          {
          "letter": "K",
          "word": "Keeper (Wildlife)",
          "emoji": "🦁",
          "bgColor": "#DAA520"
          },
          {
          "letter": "L",
          "word": "Landscaper",
          "emoji": "🌳",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Marine Biologist",
          "emoji": "🐋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Naturalist",
          "emoji": "🌍",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Oceanographer",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Park Ranger",
          "emoji": "🌲",
          "bgColor": "#006400"
          },
          {
          "letter": "Q",
          "word": "Quality Water Tester",
          "emoji": "💧",
          "bgColor": "#4682B4"
          },
          {
          "letter": "R",
          "word": "Recycling Manager",
          "emoji": "♻️",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Soil Scientist",
          "emoji": "🌍",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tree Planter",
          "emoji": "🌳",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Urban Farmer",
          "emoji": "🧑‍🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Volcanologist",
          "emoji": "🌋",
          "bgColor": "#FF4500"
          },
          {
          "letter": "W",
          "word": "Wildlife Photographer",
          "emoji": "📷",
          "bgColor": "#228B22"
          },
          {
          "letter": "X",
          "word": "Xeriscaper",
          "emoji": "🌵",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Y",
          "word": "Yogi Nature Guide",
          "emoji": "🧘",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zoologist",
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
        id="KidsAnimalsCute1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cute Animals Part 1",
          videoId: "animals-cute-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Alpaca",
          "emoji": "🦙",
          "bgColor": "#DEB887"
          },
          {
          "letter": "B",
          "word": "Bunny",
          "emoji": "🐰",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "C",
          "word": "Chinchilla",
          "emoji": "🐭",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "D",
          "word": "Deer",
          "emoji": "🦌",
          "bgColor": "#DEB887"
          },
          {
          "letter": "E",
          "word": "Ermine",
          "emoji": "🐿️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "F",
          "word": "Fox Cub",
          "emoji": "🦊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Guinea Pig",
          "emoji": "🐹",
          "bgColor": "#DEB887"
          },
          {
          "letter": "H",
          "word": "Hedgehog",
          "emoji": "🦔",
          "bgColor": "#DEB887"
          },
          {
          "letter": "I",
          "word": "Irish Setter Puppy",
          "emoji": "🐶",
          "bgColor": "#B22222"
          },
          {
          "letter": "J",
          "word": "Japanese Chin",
          "emoji": "🐶",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "K",
          "word": "Koala Baby",
          "emoji": "🐨",
          "bgColor": "#808080"
          },
          {
          "letter": "L",
          "word": "Little Penguin",
          "emoji": "🐧",
          "bgColor": "#4169E1"
          },
          {
          "letter": "M",
          "word": "Mini Pony",
          "emoji": "🐴",
          "bgColor": "#DEB887"
          },
          {
          "letter": "N",
          "word": "Nemo Fish",
          "emoji": "🐠",
          "bgColor": "#FF6347"
          },
          {
          "letter": "O",
          "word": "Otter",
          "emoji": "🦦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Panda Baby",
          "emoji": "🐼",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quokka",
          "emoji": "🐭",
          "bgColor": "#DEB887"
          },
          {
          "letter": "R",
          "word": "Red Panda",
          "emoji": "🐼",
          "bgColor": "#B22222"
          },
          {
          "letter": "S",
          "word": "Sea Otter",
          "emoji": "🦦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Teddy Bear Dog",
          "emoji": "🐶",
          "bgColor": "#DEB887"
          },
          {
          "letter": "U",
          "word": "Unicorn Fish",
          "emoji": "🐟",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "V",
          "word": "Very Small Mouse",
          "emoji": "🐭",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "W",
          "word": "White Kitten",
          "emoji": "🐱",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-small Hamster",
          "emoji": "🐹",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Y",
          "word": "Yellow Duckling",
          "emoji": "🐥",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra Baby",
          "emoji": "🦓",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsParrots1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Parrots of the World Part 1",
          videoId: "birds-parrots-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "African Grey Parrot",
          "emoji": "🦜",
          "bgColor": "#808080"
          },
          {
          "letter": "B",
          "word": "Blue-and-Gold Macaw",
          "emoji": "🦜",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Conure",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "D",
          "word": "Double Yellow-head",
          "emoji": "🦜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "E",
          "word": "Eclectus Parrot",
          "emoji": "🦜",
          "bgColor": "#DC143C"
          },
          {
          "letter": "F",
          "word": "Fischer's Lovebird",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "G",
          "word": "Green-winged Macaw",
          "emoji": "🦜",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Hawk-headed Parrot",
          "emoji": "🦜",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Ringneck",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "J",
          "word": "Jardine's Parrot",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kea Parrot",
          "emoji": "🦜",
          "bgColor": "#556B2F"
          },
          {
          "letter": "L",
          "word": "Lorikeet",
          "emoji": "🦜",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Military Macaw",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Nanday Conure",
          "emoji": "🦜",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "O",
          "word": "Orange-bellied Parrot",
          "emoji": "🦜",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Plum-headed Parakeet",
          "emoji": "🦜",
          "bgColor": "#800080"
          },
          {
          "letter": "Q",
          "word": "Quaker Parrot",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rose-ringed Parakeet",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "S",
          "word": "Sun Conure",
          "emoji": "🦜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Turquoise Parrot",
          "emoji": "🦜",
          "bgColor": "#00CED1"
          },
          {
          "letter": "U",
          "word": "Ultramarine Lorikeet",
          "emoji": "🦜",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vernal Hanging Parrot",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "W",
          "word": "White Cockatoo",
          "emoji": "🦜",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xanthogenys Parrot",
          "emoji": "🦜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Y",
          "word": "Yellow-naped Amazon",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zenker's Parrot",
          "emoji": "🦜",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceComputers1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Computers & Technology Part 1",
          videoId: "science-computers-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Algorithm",
          "emoji": "💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Binary Code",
          "emoji": "🔢",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "CPU",
          "emoji": "💻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "D",
          "word": "Database",
          "emoji": "💾",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Email",
          "emoji": "📧",
          "bgColor": "#DC143C"
          },
          {
          "letter": "F",
          "word": "Firewall",
          "emoji": "🔥",
          "bgColor": "#FF4500"
          },
          {
          "letter": "G",
          "word": "Gigabyte",
          "emoji": "💾",
          "bgColor": "#4169E1"
          },
          {
          "letter": "H",
          "word": "Hardware",
          "emoji": "🖥️",
          "bgColor": "#696969"
          },
          {
          "letter": "I",
          "word": "Internet",
          "emoji": "🌐",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "JavaScript",
          "emoji": "📱",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kernel",
          "emoji": "⚙️",
          "bgColor": "#696969"
          },
          {
          "letter": "L",
          "word": "Linux",
          "emoji": "🐧",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "M",
          "word": "Memory (RAM)",
          "emoji": "💾",
          "bgColor": "#32CD32"
          },
          {
          "letter": "N",
          "word": "Network",
          "emoji": "🌐",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "Operating System",
          "emoji": "💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Pixel",
          "emoji": "🟦",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Q",
          "word": "Query",
          "emoji": "🔍",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Router",
          "emoji": "📡",
          "bgColor": "#696969"
          },
          {
          "letter": "S",
          "word": "Software",
          "emoji": "💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "T",
          "word": "Touchscreen",
          "emoji": "📱",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "USB Port",
          "emoji": "🔌",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Virtual Reality",
          "emoji": "🥽",
          "bgColor": "#4B0082"
          },
          {
          "letter": "W",
          "word": "WiFi",
          "emoji": "📶",
          "bgColor": "#4169E1"
          },
          {
          "letter": "X",
          "word": "XML Code",
          "emoji": "💻",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "YouTube",
          "emoji": "📺",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Z",
          "word": "Zip File",
          "emoji": "📦",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyCapitals1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Capitals Part 1",
          videoId: "geography-capitals-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Abu Dhabi",
          "emoji": "🏛️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Berlin",
          "emoji": "🏛️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "C",
          "word": "Canberra",
          "emoji": "🏛️",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Delhi",
          "emoji": "🏛️",
          "bgColor": "#FF9933"
          },
          {
          "letter": "E",
          "word": "Edinburgh",
          "emoji": "🏰",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Frankfurt",
          "emoji": "🏛️",
          "bgColor": "#696969"
          },
          {
          "letter": "G",
          "word": "Geneva",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Hanoi",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Islamabad",
          "emoji": "🏛️",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jakarta",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Kathmandu",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "London",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Moscow",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Nairobi",
          "emoji": "🏛️",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Ottawa",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "P",
          "word": "Paris",
          "emoji": "🗼",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Quito",
          "emoji": "🏛️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Rome",
          "emoji": "🏛️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "S",
          "word": "Seoul",
          "emoji": "🏛️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "T",
          "word": "Tokyo",
          "emoji": "🗼",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Ulaanbaatar",
          "emoji": "🏛️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vienna",
          "emoji": "🏛️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Washington DC",
          "emoji": "🏛️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xi'an (Historic)",
          "emoji": "🏛️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yangon",
          "emoji": "🏛️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zagreb",
          "emoji": "🏛️",
          "bgColor": "#4169E1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureArt1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Art Forms Part 1",
          videoId: "culture-art-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Aipan Art",
          "emoji": "🎨",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Batik Painting",
          "emoji": "🎨",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Cheriyal Painting",
          "emoji": "🎨",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dokra Metal Art",
          "emoji": "🎨",
          "bgColor": "#DAA520"
          },
          {
          "letter": "E",
          "word": "Embroidery",
          "emoji": "🧵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "F",
          "word": "Fresco Painting",
          "emoji": "🎨",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Gond Painting",
          "emoji": "🎨",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Henna Art",
          "emoji": "✋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Miniature",
          "emoji": "🎨",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Jaipur Blue Pottery",
          "emoji": "🏺",
          "bgColor": "#4169E1"
          },
          {
          "letter": "K",
          "word": "Kalamkari",
          "emoji": "🎨",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lippan Art",
          "emoji": "🎨",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Madhubani Painting",
          "emoji": "🎨",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Naga Weaving",
          "emoji": "🧵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "O",
          "word": "Origami Indian",
          "emoji": "📄",
          "bgColor": "#FF6347"
          },
          {
          "letter": "P",
          "word": "Pattachitra",
          "emoji": "🎨",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "Q",
          "word": "Quilting Art",
          "emoji": "🧵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "R",
          "word": "Rangoli",
          "emoji": "🎨",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Sanjhi Paper Cut",
          "emoji": "✂️",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tanjore Painting",
          "emoji": "🎨",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Uruli Decoration",
          "emoji": "🪷",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Varanasi Silk Weave",
          "emoji": "🧵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Warli Painting",
          "emoji": "🎨",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-stitch Craft",
          "emoji": "🧵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yantra Art",
          "emoji": "🔯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zardozi Embroidery",
          "emoji": "✨",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
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
        id="KidsAnimalsDesert1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Desert Animals Part 1",
          videoId: "animals-desert-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Addax",
          "emoji": "🦌",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Bactrian Camel",
          "emoji": "🐫",
          "bgColor": "#DEB887"
          },
          {
          "letter": "C",
          "word": "Camel",
          "emoji": "🐪",
          "bgColor": "#DAA520"
          },
          {
          "letter": "D",
          "word": "Desert Fox",
          "emoji": "🦊",
          "bgColor": "#F4A460"
          },
          {
          "letter": "E",
          "word": "Egyptian Cobra",
          "emoji": "🐍",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Fennec Fox",
          "emoji": "🦊",
          "bgColor": "#FAEBD7"
          },
          {
          "letter": "G",
          "word": "Gila Monster",
          "emoji": "🦎",
          "bgColor": "#FF6347"
          },
          {
          "letter": "H",
          "word": "Horned Viper",
          "emoji": "🐍",
          "bgColor": "#DAA520"
          },
          {
          "letter": "I",
          "word": "Indian Desert Cat",
          "emoji": "🐱",
          "bgColor": "#DEB887"
          },
          {
          "letter": "J",
          "word": "Jerboa",
          "emoji": "🐭",
          "bgColor": "#F4A460"
          },
          {
          "letter": "K",
          "word": "Kit Fox",
          "emoji": "🦊",
          "bgColor": "#DAA520"
          },
          {
          "letter": "L",
          "word": "Lizard",
          "emoji": "🦎",
          "bgColor": "#8B6914"
          },
          {
          "letter": "M",
          "word": "Monitor Lizard",
          "emoji": "🦎",
          "bgColor": "#556B2F"
          },
          {
          "letter": "N",
          "word": "Nightjar",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Oryx",
          "emoji": "🦌",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "P",
          "word": "Pronghorn",
          "emoji": "🦌",
          "bgColor": "#DEB887"
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
          "bgColor": "#DAA520"
          },
          {
          "letter": "S",
          "word": "Scorpion",
          "emoji": "🦂",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "T",
          "word": "Thorny Devil",
          "emoji": "🦎",
          "bgColor": "#CD853F"
          },
          {
          "letter": "U",
          "word": "Uromastyx",
          "emoji": "🦎",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Vulture",
          "emoji": "🦅",
          "bgColor": "#696969"
          },
          {
          "letter": "W",
          "word": "Wild Ass",
          "emoji": "🫏",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "X",
          "word": "Xerus",
          "emoji": "🐿️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Y",
          "word": "Yellow Scorpion",
          "emoji": "🦂",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zebra-tailed Lizard",
          "emoji": "🦎",
          "bgColor": "#DAA520"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsBaby1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Baby Animals Part 1",
          videoId: "animals-baby-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Armadillo Pup",
          "emoji": "🐾",
          "bgColor": "#DEB887"
          },
          {
          "letter": "B",
          "word": "Bear Cub",
          "emoji": "🐻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Calf",
          "emoji": "🐄",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "D",
          "word": "Duckling",
          "emoji": "🐥",
          "bgColor": "#FFD700"
          },
          {
          "letter": "E",
          "word": "Eaglet",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Fawn",
          "emoji": "🦌",
          "bgColor": "#DEB887"
          },
          {
          "letter": "G",
          "word": "Gosling",
          "emoji": "🐣",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hatchling",
          "emoji": "🐣",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Infant Monkey",
          "emoji": "🐒",
          "bgColor": "#8B6914"
          },
          {
          "letter": "J",
          "word": "Joey",
          "emoji": "🦘",
          "bgColor": "#DEB887"
          },
          {
          "letter": "K",
          "word": "Kitten",
          "emoji": "🐱",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "L",
          "word": "Lamb",
          "emoji": "🐑",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Mouse Baby",
          "emoji": "🐭",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "N",
          "word": "Nestling",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "O",
          "word": "Owlet",
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
          "word": "Quail Chick",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "R",
          "word": "Rabbit Kit",
          "emoji": "🐰",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "S",
          "word": "Seal Pup",
          "emoji": "🦭",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Tadpole",
          "emoji": "🐸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "U",
          "word": "Urchin Baby",
          "emoji": "🦔",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vealcalf",
          "emoji": "🐄",
          "bgColor": "#DEB887"
          },
          {
          "letter": "W",
          "word": "Whelp",
          "emoji": "🐶",
          "bgColor": "#F4A460"
          },
          {
          "letter": "X",
          "word": "X-small Puppy",
          "emoji": "🐶",
          "bgColor": "#FFB6C1"
          },
          {
          "letter": "Y",
          "word": "Young Foal",
          "emoji": "🐴",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Z",
          "word": "Zebra Foal",
          "emoji": "🦓",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsNocturnal1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Nocturnal Animals Part 1",
          videoId: "animals-nocturnal-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Aye-Aye",
          "emoji": "🐒",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "B",
          "word": "Bat",
          "emoji": "🦇",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "C",
          "word": "Civet",
          "emoji": "🐱",
          "bgColor": "#696969"
          },
          {
          "letter": "D",
          "word": "Dark Owl",
          "emoji": "🦉",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "E",
          "word": "Eastern Screech Owl",
          "emoji": "🦉",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Flying Fox",
          "emoji": "🦇",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "G",
          "word": "Glow Worm",
          "emoji": "🪱",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Hedgehog",
          "emoji": "🦔",
          "bgColor": "#DEB887"
          },
          {
          "letter": "I",
          "word": "Indian Pangolin",
          "emoji": "🐾",
          "bgColor": "#8B6914"
          },
          {
          "letter": "J",
          "word": "Jackal",
          "emoji": "🐺",
          "bgColor": "#A0522D"
          },
          {
          "letter": "K",
          "word": "Kinkajou",
          "emoji": "🐒",
          "bgColor": "#DAA520"
          },
          {
          "letter": "L",
          "word": "Leopard Cat",
          "emoji": "🐆",
          "bgColor": "#DAA520"
          },
          {
          "letter": "M",
          "word": "Moon Moth",
          "emoji": "🦋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Night Monkey",
          "emoji": "🐵",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Opossum",
          "emoji": "🐭",
          "bgColor": "#808080"
          },
          {
          "letter": "P",
          "word": "Porcupine",
          "emoji": "🦔",
          "bgColor": "#6B4423"
          },
          {
          "letter": "Q",
          "word": "Quoll",
          "emoji": "🐱",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Raccoon",
          "emoji": "🦝",
          "bgColor": "#696969"
          },
          {
          "letter": "S",
          "word": "Slow Loris",
          "emoji": "🐒",
          "bgColor": "#DEB887"
          },
          {
          "letter": "T",
          "word": "Tarsier",
          "emoji": "🐒",
          "bgColor": "#8B4513"
          },
          {
          "letter": "U",
          "word": "Unicorn Moth",
          "emoji": "🦋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "V",
          "word": "Vampire Bat",
          "emoji": "🦇",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "W",
          "word": "Wolf",
          "emoji": "🐺",
          "bgColor": "#696969"
          },
          {
          "letter": "X",
          "word": "Xerus Night",
          "emoji": "🐿️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Y",
          "word": "Yellow Bat",
          "emoji": "🦇",
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
        id="KidsAnimalsEndangered1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Endangered Animals Part 1",
          videoId: "animals-endangered-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Amur Leopard",
          "emoji": "🐆",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Blue Whale",
          "emoji": "🐋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Cross River Gorilla",
          "emoji": "🦍",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "D",
          "word": "Dhole",
          "emoji": "🐺",
          "bgColor": "#B22222"
          },
          {
          "letter": "E",
          "word": "Eastern Gorilla",
          "emoji": "🦍",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "F",
          "word": "Fin Whale",
          "emoji": "🐋",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Giant Panda",
          "emoji": "🐼",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "H",
          "word": "Hawksbill Turtle",
          "emoji": "🐢",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "I",
          "word": "Indian Elephant",
          "emoji": "🐘",
          "bgColor": "#708090"
          },
          {
          "letter": "J",
          "word": "Javan Rhino",
          "emoji": "🦏",
          "bgColor": "#696969"
          },
          {
          "letter": "K",
          "word": "Kakapo",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Leatherback Turtle",
          "emoji": "🐢",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "M",
          "word": "Mountain Gorilla",
          "emoji": "🦍",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "N",
          "word": "Narwhal",
          "emoji": "🐋",
          "bgColor": "#5F9EA0"
          },
          {
          "letter": "O",
          "word": "Orangutan",
          "emoji": "🦧",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pangolin",
          "emoji": "🐾",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Q",
          "word": "Quokka",
          "emoji": "🐭",
          "bgColor": "#DEB887"
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
          "word": "Tiger",
          "emoji": "🐯",
          "bgColor": "#FF6347"
          },
          {
          "letter": "U",
          "word": "Uakari",
          "emoji": "🐒",
          "bgColor": "#DC143C"
          },
          {
          "letter": "V",
          "word": "Vaquita",
          "emoji": "🐬",
          "bgColor": "#4682B4"
          },
          {
          "letter": "W",
          "word": "Whale Shark",
          "emoji": "🦈",
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
          "word": "Yellow-eyed Penguin",
          "emoji": "🐧",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zanzibar Leopard",
          "emoji": "🐆",
          "bgColor": "#DAA520"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsAnimalsMountain1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountain Animals Part 1",
          videoId: "animals-mountain-1",
          bgGradient: ["#E0EAFC","#CFDEF3"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Alpine Ibex",
          "emoji": "🐐",
          "bgColor": "#696969"
          },
          {
          "letter": "B",
          "word": "Bharal",
          "emoji": "🐏",
          "bgColor": "#4682B4"
          },
          {
          "letter": "C",
          "word": "Chamois",
          "emoji": "🐐",
          "bgColor": "#8B6914"
          },
          {
          "letter": "D",
          "word": "Dall Sheep",
          "emoji": "🐏",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Eagle",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Fisher Cat",
          "emoji": "🐱",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "G",
          "word": "Golden Eagle",
          "emoji": "🦅",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Himalayan Bear",
          "emoji": "🐻",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "Ibex",
          "emoji": "🐐",
          "bgColor": "#6B4226"
          },
          {
          "letter": "J",
          "word": "Jackal",
          "emoji": "🐺",
          "bgColor": "#A0522D"
          },
          {
          "letter": "K",
          "word": "Kashmir Stag",
          "emoji": "🦌",
          "bgColor": "#8B4513"
          },
          {
          "letter": "L",
          "word": "Lynx",
          "emoji": "🐱",
          "bgColor": "#DEB887"
          },
          {
          "letter": "M",
          "word": "Markhor",
          "emoji": "🐐",
          "bgColor": "#8B6914"
          },
          {
          "letter": "N",
          "word": "Nayan",
          "emoji": "🐏",
          "bgColor": "#696969"
          },
          {
          "letter": "O",
          "word": "Osprey",
          "emoji": "🦅",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "P",
          "word": "Pika",
          "emoji": "🐹",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Red Fox",
          "emoji": "🦊",
          "bgColor": "#FF4500"
          },
          {
          "letter": "S",
          "word": "Snow Leopard",
          "emoji": "🐆",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Tahr",
          "emoji": "🐐",
          "bgColor": "#8B4513"
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
          "bgColor": "#696969"
          },
          {
          "letter": "W",
          "word": "Wild Goat",
          "emoji": "🐐",
          "bgColor": "#8B6914"
          },
          {
          "letter": "X",
          "word": "Xeric Mouse",
          "emoji": "🐭",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Y",
          "word": "Yellow Marmot",
          "emoji": "🐿️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zokor",
          "emoji": "🐭",
          "bgColor": "#8B7355"
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
        id="KidsBirdsForest1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Forest Birds Part 1",
          videoId: "birds-forest-1",
          bgGradient: ["#134E5E","#71B280"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Asian Koel",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "B",
          "word": "Barbet",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Cuckoo",
          "emoji": "🐦",
          "bgColor": "#556B2F"
          },
          {
          "letter": "D",
          "word": "Drongo",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "Emerald Dove",
          "emoji": "🕊️",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fairy Bluebird",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "G",
          "word": "Great Tit",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hoopoe",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "Indian Pitta",
          "emoji": "🐦",
          "bgColor": "#32CD32"
          },
          {
          "letter": "J",
          "word": "Jungle Fowl",
          "emoji": "🐔",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Kookaburra",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "L",
          "word": "Leafbird",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Minivet",
          "emoji": "🐦",
          "bgColor": "#FF6347"
          },
          {
          "letter": "N",
          "word": "Nuthatch",
          "emoji": "🐦",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "Oriental Pied Hornbill",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "P",
          "word": "Paradise Flycatcher",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Q",
          "word": "Quetzal",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "R",
          "word": "Redstart",
          "emoji": "🐦",
          "bgColor": "#FF4500"
          },
          {
          "letter": "S",
          "word": "Sunbird",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Trogon",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Ultramarine Flycatcher",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Verditer Flycatcher",
          "emoji": "🐦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "W",
          "word": "Woodpecker",
          "emoji": "🐦",
          "bgColor": "#DC143C"
          },
          {
          "letter": "X",
          "word": "Xenops",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "Y",
          "word": "Yellow-billed Babbler",
          "emoji": "🐦",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zebra Wren",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsSinging1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Singing Birds Part 1",
          videoId: "birds-singing-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "American Robin",
          "emoji": "🐦",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Blackbird",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "C",
          "word": "Canary",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Dawn Chorus",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "E",
          "word": "Eastern Bluebird",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Flycatcher",
          "emoji": "🐦",
          "bgColor": "#556B2F"
          },
          {
          "letter": "G",
          "word": "Goldcrest",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "House Wren",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "I",
          "word": "Indian Cuckoo",
          "emoji": "🐦",
          "bgColor": "#556B2F"
          },
          {
          "letter": "J",
          "word": "Java Sparrow",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "K",
          "word": "Koel",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "L",
          "word": "Lark",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "M",
          "word": "Mockingbird",
          "emoji": "🐦",
          "bgColor": "#808080"
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
          "word": "Pied Wagtail",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Reed Warbler",
          "emoji": "🐦",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "S",
          "word": "Song Thrush",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "T",
          "word": "Twite",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "U",
          "word": "Upland Lark",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vireo",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Warbler",
          "emoji": "🐦",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "X",
          "word": "Xanthus Warbler",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Y",
          "word": "Yellowhammer",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zenith Songbird",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsBirdsPet1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Pet Birds Part 1",
          videoId: "birds-pet-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "African Grey",
          "emoji": "🦜",
          "bgColor": "#808080"
          },
          {
          "letter": "B",
          "word": "Budgerigar",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "Cockatiel",
          "emoji": "🦜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Diamond Dove",
          "emoji": "🕊️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "E",
          "word": "Eclectus Parrot",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "F",
          "word": "Finch",
          "emoji": "🐦",
          "bgColor": "#FF6347"
          },
          {
          "letter": "G",
          "word": "Green Parrot",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hill Myna",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "Indian Ringneck",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "J",
          "word": "Java Finch",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "K",
          "word": "King Parrot",
          "emoji": "🦜",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lovebird",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "M",
          "word": "Macaw",
          "emoji": "🦜",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "Nanday Conure",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Orange Canary",
          "emoji": "🐦",
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
          "word": "Quaker Parrot",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rainbow Lorikeet",
          "emoji": "🦜",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Sun Conure",
          "emoji": "🦜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Toucan",
          "emoji": "🐦",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "U",
          "word": "Umbrella Cockatoo",
          "emoji": "🦜",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "V",
          "word": "Violet Lovebird",
          "emoji": "🦜",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "White Dove",
          "emoji": "🕊️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xeno Parakeet",
          "emoji": "🦜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "Y",
          "word": "Yellow Cockatiel",
          "emoji": "🦜",
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
        id="KidsBirdsMigratory1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Migratory Birds Part 1",
          videoId: "birds-migratory-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Arctic Tern",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "B",
          "word": "Bar-headed Goose",
          "emoji": "🪿",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Common Crane",
          "emoji": "🐦",
          "bgColor": "#808080"
          },
          {
          "letter": "D",
          "word": "Demoiselle Crane",
          "emoji": "🐦",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Eurasian Wigeon",
          "emoji": "🦆",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Flamingo",
          "emoji": "🦩",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Greylag Goose",
          "emoji": "🪿",
          "bgColor": "#808080"
          },
          {
          "letter": "H",
          "word": "Houbara Bustard",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "I",
          "word": "Indian Skimmer",
          "emoji": "🐦",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "J",
          "word": "Jack Snipe",
          "emoji": "🐦",
          "bgColor": "#556B2F"
          },
          {
          "letter": "K",
          "word": "Knot",
          "emoji": "🐦",
          "bgColor": "#808080"
          },
          {
          "letter": "L",
          "word": "Long-tailed Duck",
          "emoji": "🦆",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Mallard",
          "emoji": "🦆",
          "bgColor": "#006400"
          },
          {
          "letter": "N",
          "word": "Northern Pintail",
          "emoji": "🦆",
          "bgColor": "#8B6914"
          },
          {
          "letter": "O",
          "word": "Osprey",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "P",
          "word": "Peregrine Falcon",
          "emoji": "🦅",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#BC8F8F"
          },
          {
          "letter": "R",
          "word": "Rosy Starling",
          "emoji": "🐦",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "S",
          "word": "Siberian Crane",
          "emoji": "🐦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Teal",
          "emoji": "🦆",
          "bgColor": "#008080"
          },
          {
          "letter": "U",
          "word": "Upland Sandpiper",
          "emoji": "🐦",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vagrant Shrike",
          "emoji": "🐦",
          "bgColor": "#696969"
          },
          {
          "letter": "W",
          "word": "Wagtail",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "X",
          "word": "Xema Gull",
          "emoji": "🐦",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Y",
          "word": "Yellow Wagtail",
          "emoji": "🐦",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zoothera Thrush",
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
        id="KidsBirdsFlightless1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Flightless Birds Part 1",
          videoId: "birds-flightless-1",
          bgGradient: ["#636363","#A2AB58"] as [string, string],
          accentColor: "#7F8C8D",
          letters: [
          {
          "letter": "A",
          "word": "Adzebill",
          "emoji": "🐦",
          "bgColor": "#556B2F"
          },
          {
          "letter": "B",
          "word": "Brown Kiwi",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cassowary",
          "emoji": "🐦",
          "bgColor": "#191970"
          },
          {
          "letter": "D",
          "word": "Dodo",
          "emoji": "🐦",
          "bgColor": "#696969"
          },
          {
          "letter": "E",
          "word": "Emu",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Flightless Cormorant",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "G",
          "word": "Grebe",
          "emoji": "🐦",
          "bgColor": "#556B2F"
          },
          {
          "letter": "H",
          "word": "Hen",
          "emoji": "🐔",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "Inaccessible Island Rail",
          "emoji": "🐦",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "J",
          "word": "Junglefowl",
          "emoji": "🐔",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Kakapo",
          "emoji": "🦜",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Lesser Rhea",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "M",
          "word": "Magellanic Penguin",
          "emoji": "🐧",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "N",
          "word": "North Island Kiwi",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Ostrich",
          "emoji": "🦤",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "P",
          "word": "Penguin",
          "emoji": "🐧",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Queen Penguin",
          "emoji": "🐧",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Rhea",
          "emoji": "🐦",
          "bgColor": "#8B6914"
          },
          {
          "letter": "S",
          "word": "Steamer Duck",
          "emoji": "🦆",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Takahe",
          "emoji": "🐦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "U",
          "word": "Upland Goose",
          "emoji": "🪿",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "V",
          "word": "Victoria Penguin",
          "emoji": "🐧",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "W",
          "word": "Weka",
          "emoji": "🐦",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "Xenicus",
          "emoji": "🐦",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yellow-eyed Penguin",
          "emoji": "🐧",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zapata Rail",
          "emoji": "🐦",
          "bgColor": "#556B2F"
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
        id="KidsFruitsCitrus1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Citrus Fruits Part 1",
          videoId: "fruits-citrus-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Amla",
          "emoji": "🍈",
          "bgColor": "#32CD32"
          },
          {
          "letter": "B",
          "word": "Blood Orange",
          "emoji": "🍊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Clementine",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "D",
          "word": "Dried Lemon",
          "emoji": "🍋",
          "bgColor": "#FFD700"
          },
          {
          "letter": "E",
          "word": "Etrog",
          "emoji": "🍋",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Finger Lime",
          "emoji": "🍈",
          "bgColor": "#32CD32"
          },
          {
          "letter": "G",
          "word": "Grapefruit",
          "emoji": "🍊",
          "bgColor": "#FF6347"
          },
          {
          "letter": "H",
          "word": "Honey Tangerine",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "I",
          "word": "Indian Lime",
          "emoji": "🍋",
          "bgColor": "#32CD32"
          },
          {
          "letter": "J",
          "word": "Japanese Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kumquat",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "L",
          "word": "Lemon",
          "emoji": "🍋",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mandarin",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Navel Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pomelo",
          "emoji": "🍊",
          "bgColor": "#98FB98"
          },
          {
          "letter": "Q",
          "word": "Quince Lemon",
          "emoji": "🍋",
          "bgColor": "#BDB76B"
          },
          {
          "letter": "R",
          "word": "Rangpur Lime",
          "emoji": "🍋",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Sweet Lime",
          "emoji": "🍈",
          "bgColor": "#32CD32"
          },
          {
          "letter": "T",
          "word": "Tangerine",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "U",
          "word": "Ugli Fruit",
          "emoji": "🍊",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Valencia Orange",
          "emoji": "🍊",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "W",
          "word": "White Grapefruit",
          "emoji": "🍊",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "X",
          "word": "Xigua Citrus",
          "emoji": "🍊",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "Yuzu",
          "emoji": "🍋",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zest Lime",
          "emoji": "🍋",
          "bgColor": "#32CD32"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsFruitsDryfruits1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Dry Fruits & Nuts Part 1",
          videoId: "fruits-dryfruits-1",
          bgGradient: ["#8B4513","#DEB887"] as [string, string],
          accentColor: "#8B4513",
          letters: [
          {
          "letter": "A",
          "word": "Almond",
          "emoji": "🌰",
          "bgColor": "#DEB887"
          },
          {
          "letter": "B",
          "word": "Brazil Nut",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cashew",
          "emoji": "🌰",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "D",
          "word": "Dates",
          "emoji": "🌴",
          "bgColor": "#8B6914"
          },
          {
          "letter": "E",
          "word": "Eldernut",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Fig (Dried)",
          "emoji": "🍈",
          "bgColor": "#800080"
          },
          {
          "letter": "G",
          "word": "Golden Raisin",
          "emoji": "🍇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hazelnut",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Walnut",
          "emoji": "🌰",
          "bgColor": "#6B4226"
          },
          {
          "letter": "J",
          "word": "Jordannut",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "K",
          "word": "Kaju (Cashew)",
          "emoji": "🌰",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "L",
          "word": "Lotus Seed",
          "emoji": "🪷",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Macadamia",
          "emoji": "🌰",
          "bgColor": "#DEB887"
          },
          {
          "letter": "N",
          "word": "Nutmeg",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Olive (Dried)",
          "emoji": "🫒",
          "bgColor": "#556B2F"
          },
          {
          "letter": "P",
          "word": "Pistachio",
          "emoji": "🌰",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Quinoa Seed",
          "emoji": "🌾",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "R",
          "word": "Raisin",
          "emoji": "🍇",
          "bgColor": "#4B0082"
          },
          {
          "letter": "S",
          "word": "Sunflower Seed",
          "emoji": "🌻",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tahini Seed",
          "emoji": "🌾",
          "bgColor": "#DEB887"
          },
          {
          "letter": "U",
          "word": "Unshelled Peanut",
          "emoji": "🥜",
          "bgColor": "#DEB887"
          },
          {
          "letter": "V",
          "word": "Vine Raisin",
          "emoji": "🍇",
          "bgColor": "#4B0082"
          },
          {
          "letter": "W",
          "word": "Walnut",
          "emoji": "🌰",
          "bgColor": "#6B4226"
          },
          {
          "letter": "X",
          "word": "Xerophyte Nut",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Y",
          "word": "Yellow Raisin",
          "emoji": "🍇",
          "bgColor": "#FFD700"
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
        id="KidsVegetablesIndian1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Vegetables Part 1",
          videoId: "vegetables-indian-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Aloo (Potato)",
          "emoji": "🥔",
          "bgColor": "#DEB887"
          },
          {
          "letter": "B",
          "word": "Baingan (Brinjal)",
          "emoji": "🍆",
          "bgColor": "#800080"
          },
          {
          "letter": "C",
          "word": "Capsicum",
          "emoji": "🫑",
          "bgColor": "#FF0000"
          },
          {
          "letter": "D",
          "word": "Drumstick",
          "emoji": "🥬",
          "bgColor": "#228B22"
          },
          {
          "letter": "E",
          "word": "Elephant Yam",
          "emoji": "🥔",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "French Beans",
          "emoji": "🫘",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Gajar (Carrot)",
          "emoji": "🥕",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "H",
          "word": "Hari Mirch (Green Chili)",
          "emoji": "🌶️",
          "bgColor": "#228B22"
          },
          {
          "letter": "I",
          "word": "Ivy Gourd",
          "emoji": "🥒",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jackfruit",
          "emoji": "🍈",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "Karela (Bitter Gourd)",
          "emoji": "🥒",
          "bgColor": "#006400"
          },
          {
          "letter": "L",
          "word": "Lauki (Bottle Gourd)",
          "emoji": "🥒",
          "bgColor": "#98FB98"
          },
          {
          "letter": "M",
          "word": "Methi (Fenugreek)",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Nenua (Ridge Gourd)",
          "emoji": "🥒",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Okra (Bhindi)",
          "emoji": "🥒",
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
          "word": "Quinoa",
          "emoji": "🌾",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "R",
          "word": "Rai (Mustard Greens)",
          "emoji": "🥬",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "S",
          "word": "Shimla Mirch (Bell Pepper)",
          "emoji": "🫑",
          "bgColor": "#FF0000"
          },
          {
          "letter": "T",
          "word": "Tori (Ridge Gourd)",
          "emoji": "🥒",
          "bgColor": "#228B22"
          },
          {
          "letter": "U",
          "word": "Urad Dal Plant",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Valor (Indian Beans)",
          "emoji": "🫘",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Water Chestnut",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "X-tra Hot Chili",
          "emoji": "🌶️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Yellow Pumpkin",
          "emoji": "🎃",
          "bgColor": "#FF8C00"
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
        id="KidsVegetablesGarden1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Vegetables Part 1",
          videoId: "vegetables-garden-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "Asparagus",
          "emoji": "🥒",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Broccoli",
          "emoji": "🥦",
          "bgColor": "#006400"
          },
          {
          "letter": "C",
          "word": "Cauliflower",
          "emoji": "🥦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "D",
          "word": "Daikon",
          "emoji": "🥕",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Eggplant",
          "emoji": "🍆",
          "bgColor": "#800080"
          },
          {
          "letter": "F",
          "word": "Fennel",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Garlic",
          "emoji": "🧄",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "H",
          "word": "Horseradish",
          "emoji": "🥕",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "I",
          "word": "Italian Pepper",
          "emoji": "🫑",
          "bgColor": "#FF0000"
          },
          {
          "letter": "J",
          "word": "Jalapeno",
          "emoji": "🌶️",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kohlrabi",
          "emoji": "🥬",
          "bgColor": "#98FB98"
          },
          {
          "letter": "L",
          "word": "Leek",
          "emoji": "🧅",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Mushroom",
          "emoji": "🍄",
          "bgColor": "#DEB887"
          },
          {
          "letter": "N",
          "word": "Neem Leaves",
          "emoji": "🌿",
          "bgColor": "#006400"
          },
          {
          "letter": "O",
          "word": "Onion",
          "emoji": "🧅",
          "bgColor": "#DAA520"
          },
          {
          "letter": "P",
          "word": "Peas",
          "emoji": "🫛",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Queen Olive",
          "emoji": "🫒",
          "bgColor": "#556B2F"
          },
          {
          "letter": "R",
          "word": "Radish",
          "emoji": "🥕",
          "bgColor": "#FF4500"
          },
          {
          "letter": "S",
          "word": "Squash",
          "emoji": "🎃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Tomato",
          "emoji": "🍅",
          "bgColor": "#FF0000"
          },
          {
          "letter": "U",
          "word": "Upo Squash",
          "emoji": "🥒",
          "bgColor": "#98FB98"
          },
          {
          "letter": "V",
          "word": "Vine Tomato",
          "emoji": "🍅",
          "bgColor": "#FF0000"
          },
          {
          "letter": "W",
          "word": "Watermelon Rind",
          "emoji": "🍉",
          "bgColor": "#2E8B57"
          },
          {
          "letter": "X",
          "word": "Xigua Melon",
          "emoji": "🍉",
          "bgColor": "#FF6347"
          },
          {
          "letter": "Y",
          "word": "Yellow Squash",
          "emoji": "🎃",
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
        id="KidsVegetablesCooking1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cooking Vegetables Part 1",
          videoId: "vegetables-cooking-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Artichoke",
          "emoji": "🥬",
          "bgColor": "#6B8E23"
          },
          {
          "letter": "B",
          "word": "Bell Pepper",
          "emoji": "🫑",
          "bgColor": "#FF0000"
          },
          {
          "letter": "C",
          "word": "Corn",
          "emoji": "🌽",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Drumstick",
          "emoji": "🥬",
          "bgColor": "#228B22"
          },
          {
          "letter": "E",
          "word": "Edamame",
          "emoji": "🫘",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "French Beans",
          "emoji": "🫘",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Green Peas",
          "emoji": "🫛",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hot Pepper",
          "emoji": "🌶️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "I",
          "word": "Indian Corn",
          "emoji": "🌽",
          "bgColor": "#DAA520"
          },
          {
          "letter": "J",
          "word": "Jerusalem Artichoke",
          "emoji": "🥔",
          "bgColor": "#DEB887"
          },
          {
          "letter": "K",
          "word": "Kidney Beans",
          "emoji": "🫘",
          "bgColor": "#8B0000"
          },
          {
          "letter": "L",
          "word": "Lima Beans",
          "emoji": "🫘",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Mint",
          "emoji": "🌿",
          "bgColor": "#006400"
          },
          {
          "letter": "N",
          "word": "Navy Beans",
          "emoji": "🫘",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "O",
          "word": "Okra",
          "emoji": "🥒",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Parsley",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Quinoa",
          "emoji": "🌾",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "R",
          "word": "Red Cabbage",
          "emoji": "🥬",
          "bgColor": "#800080"
          },
          {
          "letter": "S",
          "word": "Spring Onion",
          "emoji": "🧅",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Turnip",
          "emoji": "🥕",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "U",
          "word": "Urad Dal",
          "emoji": "🫘",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "V",
          "word": "Vidalia Onion",
          "emoji": "🧅",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "W",
          "word": "White Beans",
          "emoji": "🫘",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-tra Spicy Pepper",
          "emoji": "🌶️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Yellow Beans",
          "emoji": "🫘",
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
        id="KidsVehiclesEmergency1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Emergency Vehicles Part 1",
          videoId: "vehicles-emergency-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Ambulance",
          "emoji": "🚑",
          "bgColor": "#FF0000"
          },
          {
          "letter": "B",
          "word": "Bomb Squad Van",
          "emoji": "🚐",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "C",
          "word": "Coast Guard Ship",
          "emoji": "🚢",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "D",
          "word": "Disaster Relief Truck",
          "emoji": "🚛",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "E",
          "word": "Emergency Chopper",
          "emoji": "🚁",
          "bgColor": "#FF0000"
          },
          {
          "letter": "F",
          "word": "Fire Engine",
          "emoji": "🚒",
          "bgColor": "#FF0000"
          },
          {
          "letter": "G",
          "word": "Gas Leak Van",
          "emoji": "🚐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hospital Bus",
          "emoji": "🚌",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "I",
          "word": "ICU Ambulance",
          "emoji": "🚑",
          "bgColor": "#FF0000"
          },
          {
          "letter": "J",
          "word": "Jet Rescue",
          "emoji": "✈️",
          "bgColor": "#FF6347"
          },
          {
          "letter": "K",
          "word": "K-9 Unit Van",
          "emoji": "🚐",
          "bgColor": "#000080"
          },
          {
          "letter": "L",
          "word": "Lifeguard Boat",
          "emoji": "🚤",
          "bgColor": "#FF4500"
          },
          {
          "letter": "M",
          "word": "Medical Van",
          "emoji": "🚐",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Navy Rescue Ship",
          "emoji": "🚢",
          "bgColor": "#000080"
          },
          {
          "letter": "O",
          "word": "Oil Spill Cleaner",
          "emoji": "🚢",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Police Car",
          "emoji": "🚓",
          "bgColor": "#000080"
          },
          {
          "letter": "Q",
          "word": "Quick Response Unit",
          "emoji": "🚑",
          "bgColor": "#FF0000"
          },
          {
          "letter": "R",
          "word": "Rescue Helicopter",
          "emoji": "🚁",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Search Drone",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Tow Truck",
          "emoji": "🚛",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Utility Emergency Van",
          "emoji": "🚐",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "V",
          "word": "Volunteer Fire Truck",
          "emoji": "🚒",
          "bgColor": "#FF0000"
          },
          {
          "letter": "W",
          "word": "Water Tanker",
          "emoji": "🚛",
          "bgColor": "#4682B4"
          },
          {
          "letter": "X",
          "word": "X-ray Mobile Unit",
          "emoji": "🚐",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yellow Alert Van",
          "emoji": "🚐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zone Patrol Car",
          "emoji": "🚓",
          "bgColor": "#000080"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesSpace1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Space Vehicles Part 1",
          videoId: "vehicles-space-1",
          bgGradient: ["#0F2027","#2C5364"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Apollo Capsule",
          "emoji": "🚀",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "B",
          "word": "Booster Rocket",
          "emoji": "🚀",
          "bgColor": "#FF4500"
          },
          {
          "letter": "C",
          "word": "Chandrayaan",
          "emoji": "🚀",
          "bgColor": "#FF9933"
          },
          {
          "letter": "D",
          "word": "Deep Space Probe",
          "emoji": "🛸",
          "bgColor": "#191970"
          },
          {
          "letter": "E",
          "word": "Explorer Satellite",
          "emoji": "🛰️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "F",
          "word": "Falcon Rocket",
          "emoji": "🚀",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "G",
          "word": "Gaganyaan",
          "emoji": "🚀",
          "bgColor": "#FF9933"
          },
          {
          "letter": "H",
          "word": "Hubble Telescope",
          "emoji": "🔭",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "ISRO Rocket",
          "emoji": "🚀",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "James Webb Telescope",
          "emoji": "🔭",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kennedy Shuttle",
          "emoji": "🚀",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Lunar Lander",
          "emoji": "🚀",
          "bgColor": "#808080"
          },
          {
          "letter": "M",
          "word": "Mars Rover",
          "emoji": "🤖",
          "bgColor": "#B22222"
          },
          {
          "letter": "N",
          "word": "NASA Shuttle",
          "emoji": "🚀",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "O",
          "word": "Orbital Station",
          "emoji": "🛰️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "P",
          "word": "PSLV Rocket",
          "emoji": "🚀",
          "bgColor": "#FF9933"
          },
          {
          "letter": "Q",
          "word": "Quantum Satellite",
          "emoji": "🛰️",
          "bgColor": "#4B0082"
          },
          {
          "letter": "R",
          "word": "Reusable Rocket",
          "emoji": "🚀",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "S",
          "word": "Space Station",
          "emoji": "🛰️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Titan Probe",
          "emoji": "🛸",
          "bgColor": "#DAA520"
          },
          {
          "letter": "U",
          "word": "Unmanned Probe",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Voyager Probe",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "W",
          "word": "Weather Satellite",
          "emoji": "🛰️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "X",
          "word": "X-37B Spaceplane",
          "emoji": "🚀",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "Y",
          "word": "Yuri Capsule",
          "emoji": "🚀",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Z",
          "word": "Zero-G Aircraft",
          "emoji": "✈️",
          "bgColor": "#87CEEB"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesFarm1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Farm Vehicles Part 1",
          videoId: "vehicles-farm-1",
          bgGradient: ["#56AB2F","#A8E063"] as [string, string],
          accentColor: "#27AE60",
          letters: [
          {
          "letter": "A",
          "word": "ATV",
          "emoji": "🚜",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Baler",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "C",
          "word": "Combine Harvester",
          "emoji": "🚜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Disc Harrow",
          "emoji": "🚜",
          "bgColor": "#8B4513"
          },
          {
          "letter": "E",
          "word": "Electric Tractor",
          "emoji": "🚜",
          "bgColor": "#32CD32"
          },
          {
          "letter": "F",
          "word": "Fertilizer Spreader",
          "emoji": "🚜",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Grain Cart",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Hay Rake",
          "emoji": "🚜",
          "bgColor": "#DEB887"
          },
          {
          "letter": "I",
          "word": "Irrigation Pump",
          "emoji": "💧",
          "bgColor": "#4682B4"
          },
          {
          "letter": "J",
          "word": "John Deere Tractor",
          "emoji": "🚜",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kisan Tractor",
          "emoji": "🚜",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Land Leveler",
          "emoji": "🚜",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Milking Machine",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Nut Harvester",
          "emoji": "🚜",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Ox Cart",
          "emoji": "🐂",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Plough",
          "emoji": "🚜",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Q",
          "word": "Quad Bike",
          "emoji": "🏍️",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rice Transplanter",
          "emoji": "🚜",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Seed Drill",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Tractor",
          "emoji": "🚜",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Utility Vehicle",
          "emoji": "🚙",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Vegetable Picker",
          "emoji": "🚜",
          "bgColor": "#228B22"
          },
          {
          "letter": "W",
          "word": "Water Tanker",
          "emoji": "🚛",
          "bgColor": "#4682B4"
          },
          {
          "letter": "X",
          "word": "X-tra Large Tractor",
          "emoji": "🚜",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yard Truck",
          "emoji": "🚛",
          "bgColor": "#DAA520"
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
        id="KidsVehiclesIndian1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Vehicles Part 1",
          videoId: "vehicles-indian-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Auto Rickshaw",
          "emoji": "🛺",
          "bgColor": "#32CD32"
          },
          {
          "letter": "B",
          "word": "Bullock Cart",
          "emoji": "🐂",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cycle Rickshaw",
          "emoji": "🚲",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Delhi Metro",
          "emoji": "🚇",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Electric Bus",
          "emoji": "🚌",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Freight Train",
          "emoji": "🚂",
          "bgColor": "#696969"
          },
          {
          "letter": "G",
          "word": "Garib Rath Train",
          "emoji": "🚂",
          "bgColor": "#4169E1"
          },
          {
          "letter": "H",
          "word": "Hand Cart",
          "emoji": "🛒",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Railways",
          "emoji": "🚂",
          "bgColor": "#000080"
          },
          {
          "letter": "J",
          "word": "Jugaad Vehicle",
          "emoji": "🚜",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "Kerala Houseboat",
          "emoji": "🚢",
          "bgColor": "#8B4513"
          },
          {
          "letter": "L",
          "word": "Local Train",
          "emoji": "🚃",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Mumbai Taxi",
          "emoji": "🚕",
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
          "word": "Ola Auto",
          "emoji": "🛺",
          "bgColor": "#32CD32"
          },
          {
          "letter": "P",
          "word": "Palkhi (Palanquin)",
          "emoji": "👑",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Q",
          "word": "Quick Metro",
          "emoji": "🚇",
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
          "word": "Shikara Boat",
          "emoji": "🛶",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tempo",
          "emoji": "🚛",
          "bgColor": "#4682B4"
          },
          {
          "letter": "U",
          "word": "Uber Auto",
          "emoji": "🛺",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Vande Bharat Express",
          "emoji": "🚄",
          "bgColor": "#FF9933"
          },
          {
          "letter": "W",
          "word": "Water Taxi",
          "emoji": "🚤",
          "bgColor": "#4682B4"
          },
          {
          "letter": "X",
          "word": "X-press Highway Bus",
          "emoji": "🚌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yellow Ambassador",
          "emoji": "🚕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zoom Car",
          "emoji": "🚗",
          "bgColor": "#4169E1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsVehiclesBicycle1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bicycles & Two Wheelers Part 1",
          videoId: "vehicles-bicycle-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "Adventure Bike",
          "emoji": "🚲",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "BMX Bike",
          "emoji": "🚲",
          "bgColor": "#FF4500"
          },
          {
          "letter": "C",
          "word": "City Cycle",
          "emoji": "🚲",
          "bgColor": "#4682B4"
          },
          {
          "letter": "D",
          "word": "Dirt Bike",
          "emoji": "🏍️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "E",
          "word": "Electric Scooter",
          "emoji": "🛵",
          "bgColor": "#32CD32"
          },
          {
          "letter": "F",
          "word": "Folding Bike",
          "emoji": "🚲",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "Gear Cycle",
          "emoji": "🚲",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Harley Davidson",
          "emoji": "🏍️",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "Indian Bike",
          "emoji": "🏍️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "J",
          "word": "Jawa Motorcycle",
          "emoji": "🏍️",
          "bgColor": "#8B0000"
          },
          {
          "letter": "K",
          "word": "Kids Bicycle",
          "emoji": "🚲",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "L",
          "word": "Luna Moped",
          "emoji": "🛵",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Mountain Bike",
          "emoji": "🚲",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "N",
          "word": "Ninja Bike",
          "emoji": "🏍️",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Off-road Bike",
          "emoji": "🏍️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Pedal Cycle",
          "emoji": "🚲",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quad Cycle",
          "emoji": "🚲",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Racing Bike",
          "emoji": "🏍️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Scooter",
          "emoji": "🛵",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Tricycle",
          "emoji": "🚲",
          "bgColor": "#FF6347"
          },
          {
          "letter": "U",
          "word": "Unicycle",
          "emoji": "🚲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "V",
          "word": "Vespa Scooter",
          "emoji": "🛵",
          "bgColor": "#00CED1"
          },
          {
          "letter": "W",
          "word": "Wheelie Bike",
          "emoji": "🚲",
          "bgColor": "#FF4500"
          },
          {
          "letter": "X",
          "word": "X-treme Bike",
          "emoji": "🏍️",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Yamaha Bike",
          "emoji": "🏍️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zip Scooter",
          "emoji": "🛵",
          "bgColor": "#32CD32"
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
        id="KidsScienceElectronics1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Electronic Devices Part 1",
          videoId: "science-electronics-1",
          bgGradient: ["#4B6CB7","#182848"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Air Conditioner",
          "emoji": "❄️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "B",
          "word": "Bluetooth Speaker",
          "emoji": "🔊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Computer",
          "emoji": "💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "D",
          "word": "Digital Camera",
          "emoji": "📷",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "Electric Fan",
          "emoji": "🌀",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "F",
          "word": "Fridge",
          "emoji": "🧊",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "G",
          "word": "Gaming Console",
          "emoji": "🎮",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "H",
          "word": "Headphones",
          "emoji": "🎧",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "I",
          "word": "iPad",
          "emoji": "📱",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "J",
          "word": "Juicer",
          "emoji": "🧃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kettle",
          "emoji": "🫖",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "L",
          "word": "Laptop",
          "emoji": "💻",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "M",
          "word": "Microwave",
          "emoji": "📡",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "N",
          "word": "Notebook Computer",
          "emoji": "💻",
          "bgColor": "#4169E1"
          },
          {
          "letter": "O",
          "word": "Oven",
          "emoji": "🔥",
          "bgColor": "#FF4500"
          },
          {
          "letter": "P",
          "word": "Printer",
          "emoji": "🖨️",
          "bgColor": "#696969"
          },
          {
          "letter": "Q",
          "word": "QR Scanner",
          "emoji": "📱",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "R",
          "word": "Robot Vacuum",
          "emoji": "🤖",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "S",
          "word": "Smartphone",
          "emoji": "📱",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "T",
          "word": "Television",
          "emoji": "📺",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "USB Drive",
          "emoji": "💾",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Vacuum Cleaner",
          "emoji": "🧹",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Washing Machine",
          "emoji": "🫧",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xbox",
          "emoji": "🎮",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "YouTube Player",
          "emoji": "📱",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Z",
          "word": "Zoom Camera",
          "emoji": "📷",
          "bgColor": "#1C1C1C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceEnergy1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Energy Sources Part 1",
          videoId: "science-energy-1",
          bgGradient: ["#F7971E","#FFD200"] as [string, string],
          accentColor: "#F39C12",
          letters: [
          {
          "letter": "A",
          "word": "Atom Energy",
          "emoji": "⚛️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Biomass",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Coal Power",
          "emoji": "🪨",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "D",
          "word": "Dam Energy",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Electric Grid",
          "emoji": "⚡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fossil Fuel",
          "emoji": "🛢️",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "G",
          "word": "Geothermal",
          "emoji": "🌋",
          "bgColor": "#FF4500"
          },
          {
          "letter": "H",
          "word": "Hydro Power",
          "emoji": "💧",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "ISRO Solar Panel",
          "emoji": "☀️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Jet Fuel",
          "emoji": "✈️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "K",
          "word": "Kinetic Energy",
          "emoji": "🔄",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Lightning",
          "emoji": "⚡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Methane Gas",
          "emoji": "💨",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Nuclear Power",
          "emoji": "☢️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Oil Refinery",
          "emoji": "🏭",
          "bgColor": "#696969"
          },
          {
          "letter": "P",
          "word": "Petrol",
          "emoji": "⛽",
          "bgColor": "#FF4500"
          },
          {
          "letter": "Q",
          "word": "Quantum Energy",
          "emoji": "⚛️",
          "bgColor": "#4B0082"
          },
          {
          "letter": "R",
          "word": "Renewable Energy",
          "emoji": "♻️",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Solar Panel",
          "emoji": "☀️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tidal Energy",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "U",
          "word": "Uranium",
          "emoji": "☢️",
          "bgColor": "#32CD32"
          },
          {
          "letter": "V",
          "word": "Voltage",
          "emoji": "⚡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "W",
          "word": "Wind Turbine",
          "emoji": "💨",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "X",
          "word": "X-ray Energy",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yellow Sun Energy",
          "emoji": "☀️",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zero Carbon",
          "emoji": "🌍",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsScienceColorsShapes1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colors & Shapes Part 1",
          videoId: "science-colors-shapes-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Aqua",
          "emoji": "🟦",
          "bgColor": "#00CED1"
          },
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Circle",
          "emoji": "⭕",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Diamond Shape",
          "emoji": "💎",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "E",
          "word": "Ellipse",
          "emoji": "🟠",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "F",
          "word": "Fuchsia",
          "emoji": "🟣",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "G",
          "word": "Green",
          "emoji": "🟢",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hexagon",
          "emoji": "⬡",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🟣",
          "bgColor": "#4B0082"
          },
          {
          "letter": "J",
          "word": "Jade Green",
          "emoji": "🟢",
          "bgColor": "#00A86B"
          },
          {
          "letter": "K",
          "word": "Khaki",
          "emoji": "🟤",
          "bgColor": "#C3B091"
          },
          {
          "letter": "L",
          "word": "Lavender",
          "emoji": "🟣",
          "bgColor": "#E6E6FA"
          },
          {
          "letter": "M",
          "word": "Magenta",
          "emoji": "🟣",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "N",
          "word": "Navy Blue",
          "emoji": "🔵",
          "bgColor": "#000080"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Pentagon",
          "emoji": "⬟",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Q",
          "word": "Quadrilateral",
          "emoji": "🟦",
          "bgColor": "#4169E1"
          },
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#FF0000"
          },
          {
          "letter": "S",
          "word": "Square",
          "emoji": "🟧",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Triangle",
          "emoji": "🔺",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Ultramarine",
          "emoji": "🔵",
          "bgColor": "#120A8F"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🟣",
          "bgColor": "#8B008B"
          },
          {
          "letter": "W",
          "word": "White",
          "emoji": "⬜",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-shaped Cross",
          "emoji": "❌",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zigzag Shape",
          "emoji": "⚡",
          "bgColor": "#FF6347"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsIndoor1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indoor Sports & Games Part 1",
          videoId: "sports-indoor-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Air Hockey",
          "emoji": "🏒",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Badminton",
          "emoji": "🏸",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "Carrom",
          "emoji": "🎯",
          "bgColor": "#DEB887"
          },
          {
          "letter": "D",
          "word": "Darts",
          "emoji": "🎯",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "E-sports",
          "emoji": "🎮",
          "bgColor": "#4B0082"
          },
          {
          "letter": "F",
          "word": "Foosball",
          "emoji": "⚽",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Gymnastics",
          "emoji": "🤸",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "H",
          "word": "Hide and Seek",
          "emoji": "🙈",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Indoor Cricket",
          "emoji": "🏏",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jigsaw Puzzle",
          "emoji": "🧩",
          "bgColor": "#4169E1"
          },
          {
          "letter": "K",
          "word": "Karate",
          "emoji": "🥋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Ludo",
          "emoji": "🎲",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Musical Chairs",
          "emoji": "🪑",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "N",
          "word": "Nine Pin Bowling",
          "emoji": "🎳",
          "bgColor": "#DEB887"
          },
          {
          "letter": "O",
          "word": "Obstacle Course",
          "emoji": "🏃",
          "bgColor": "#FF6347"
          },
          {
          "letter": "P",
          "word": "Pool (Billiards)",
          "emoji": "🎱",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Quiz Game",
          "emoji": "❓",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Ring Toss",
          "emoji": "⭕",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Snakes & Ladders",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Table Tennis",
          "emoji": "🏓",
          "bgColor": "#4169E1"
          },
          {
          "letter": "U",
          "word": "Uno Card Game",
          "emoji": "🃏",
          "bgColor": "#DC143C"
          },
          {
          "letter": "V",
          "word": "Video Games",
          "emoji": "🎮",
          "bgColor": "#4B0082"
          },
          {
          "letter": "W",
          "word": "Wii Sports",
          "emoji": "🎮",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-box Gaming",
          "emoji": "🎮",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yoga Indoors",
          "emoji": "🧘",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Z",
          "word": "Zen Chess",
          "emoji": "♟️",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsSportsMartial1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Martial Arts Part 1",
          videoId: "sports-martial-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Aikido",
          "emoji": "🥋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Boxing",
          "emoji": "🥊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Capoeira",
          "emoji": "🤸",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Dragon Kung Fu",
          "emoji": "🐉",
          "bgColor": "#FFD700"
          },
          {
          "letter": "E",
          "word": "Eagle Claw",
          "emoji": "🦅",
          "bgColor": "#8B6914"
          },
          {
          "letter": "F",
          "word": "Fencing",
          "emoji": "🤺",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "G",
          "word": "Gatka",
          "emoji": "⚔️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "H",
          "word": "Hapkido",
          "emoji": "🥋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "I",
          "word": "Indian Wrestling",
          "emoji": "🤼",
          "bgColor": "#DAA520"
          },
          {
          "letter": "J",
          "word": "Judo",
          "emoji": "🥋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "K",
          "word": "Karate",
          "emoji": "🥋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Lathi Play",
          "emoji": "🏏",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Muay Thai",
          "emoji": "🥊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Ninjutsu",
          "emoji": "🥷",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "O",
          "word": "Olympic Taekwondo",
          "emoji": "🥋",
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
          "word": "Qigong",
          "emoji": "🧘",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Ring Fighting",
          "emoji": "🥊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "Silambam",
          "emoji": "🤺",
          "bgColor": "#8B0000"
          },
          {
          "letter": "T",
          "word": "Taekwondo",
          "emoji": "🥋",
          "bgColor": "#4169E1"
          },
          {
          "letter": "U",
          "word": "UFC",
          "emoji": "🥊",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "V",
          "word": "Varma Kalai",
          "emoji": "🥋",
          "bgColor": "#8B0000"
          },
          {
          "letter": "W",
          "word": "Wing Chun",
          "emoji": "🥋",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "X",
          "word": "X-treme Fighting",
          "emoji": "🥊",
          "bgColor": "#FF0000"
          },
          {
          "letter": "Y",
          "word": "Yaw-Yan",
          "emoji": "🥊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Z",
          "word": "Zen Martial Art",
          "emoji": "🥋",
          "bgColor": "#F5F5F5"
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
        id="KidsGeographyMountains1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mountains of India Part 1",
          videoId: "geography-mountains-1",
          bgGradient: ["#E0EAFC","#CFDEF3"] as [string, string],
          accentColor: "#2980B9",
          letters: [
          {
          "letter": "A",
          "word": "Aravalli Range",
          "emoji": "🏔️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Blue Mountains (Nilgiris)",
          "emoji": "🏔️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Cardamom Hills",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "D",
          "word": "Dhauladhar Range",
          "emoji": "🏔️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Eastern Ghats",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Foam Valley",
          "emoji": "🏔️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "G",
          "word": "Great Himalayas",
          "emoji": "🏔️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "H",
          "word": "Himalaya Range",
          "emoji": "🏔️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "I",
          "word": "Indo-Gangetic Plains",
          "emoji": "🌾",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jawai Hills",
          "emoji": "🏔️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "Kanchenjunga",
          "emoji": "🏔️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Ladakh Range",
          "emoji": "🏔️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "M",
          "word": "Mount Everest",
          "emoji": "🏔️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Nanda Devi",
          "emoji": "🏔️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "O",
          "word": "Ooty Hills",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Pir Panjal Range",
          "emoji": "🏔️",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "Q",
          "word": "Queen of Hills (Mussoorie)",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rohtang Pass",
          "emoji": "🏔️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "S",
          "word": "Satpura Range",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Thar Desert Hills",
          "emoji": "🏜️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "U",
          "word": "Udayagiri Hills",
          "emoji": "🏔️",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Vindhya Range",
          "emoji": "🏔️",
          "bgColor": "#556B2F"
          },
          {
          "letter": "W",
          "word": "Western Ghats",
          "emoji": "🏔️",
          "bgColor": "#006400"
          },
          {
          "letter": "X",
          "word": "Xeri Pass",
          "emoji": "🏔️",
          "bgColor": "#DEB887"
          },
          {
          "letter": "Y",
          "word": "Yamunotri Peak",
          "emoji": "🏔️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zaskar Range",
          "emoji": "🏔️",
          "bgColor": "#DEB887"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsGeographyOceans1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceans & Seas Part 1",
          videoId: "geography-oceans-1",
          bgGradient: ["#0077B6","#00B4D8"] as [string, string],
          accentColor: "#0077B6",
          letters: [
          {
          "letter": "A",
          "word": "Arabian Sea",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "B",
          "word": "Bay of Bengal",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "C",
          "word": "Caribbean Sea",
          "emoji": "🌊",
          "bgColor": "#00CED1"
          },
          {
          "letter": "D",
          "word": "Dead Sea",
          "emoji": "🌊",
          "bgColor": "#DEB887"
          },
          {
          "letter": "E",
          "word": "East China Sea",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "F",
          "word": "Fiji Sea",
          "emoji": "🌊",
          "bgColor": "#00CED1"
          },
          {
          "letter": "G",
          "word": "Gulf of Mexico",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "H",
          "word": "Hudson Bay",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Indian Ocean",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Java Sea",
          "emoji": "🌊",
          "bgColor": "#00CED1"
          },
          {
          "letter": "K",
          "word": "Kara Sea",
          "emoji": "🌊",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "L",
          "word": "Laccadive Sea",
          "emoji": "🌊",
          "bgColor": "#00CED1"
          },
          {
          "letter": "M",
          "word": "Mediterranean Sea",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "N",
          "word": "North Sea",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "O",
          "word": "Ocean Pacific",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Pacific Ocean",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Q",
          "word": "Qinghai Lake",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "R",
          "word": "Red Sea",
          "emoji": "🌊",
          "bgColor": "#DC143C"
          },
          {
          "letter": "S",
          "word": "South China Sea",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "T",
          "word": "Tasman Sea",
          "emoji": "🌊",
          "bgColor": "#00CED1"
          },
          {
          "letter": "U",
          "word": "Ural Sea",
          "emoji": "🌊",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Vast Atlantic",
          "emoji": "🌊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "W",
          "word": "Weddell Sea",
          "emoji": "🌊",
          "bgColor": "#E0FFFF"
          },
          {
          "letter": "X",
          "word": "Xisha Islands Sea",
          "emoji": "🌊",
          "bgColor": "#00CED1"
          },
          {
          "letter": "Y",
          "word": "Yellow Sea",
          "emoji": "🌊",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Z",
          "word": "Zuari River Estuary",
          "emoji": "🌊",
          "bgColor": "#2E8B57"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsMusicPercussion1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Percussion Instruments Part 1",
          videoId: "music-percussion-1",
          bgGradient: ["#C0392B","#E74C3C"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "Agogo Bells",
          "emoji": "🔔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bongo Drums",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cymbals",
          "emoji": "🥁",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Djembe",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "E",
          "word": "Electric Drums",
          "emoji": "🥁",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Frame Drum",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "G",
          "word": "Gong",
          "emoji": "🔔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hand Drum",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Tabla",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "J",
          "word": "Jingle Bells",
          "emoji": "🔔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kettle Drum",
          "emoji": "🥁",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "L",
          "word": "Log Drum",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Maracas",
          "emoji": "🎵",
          "bgColor": "#DC143C"
          },
          {
          "letter": "N",
          "word": "Nagara",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "O",
          "word": "Ocean Drum",
          "emoji": "🥁",
          "bgColor": "#4682B4"
          },
          {
          "letter": "P",
          "word": "Pakhawaj",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "Q",
          "word": "Quinto Drum",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Rain Stick",
          "emoji": "🎵",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Snare Drum",
          "emoji": "🥁",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "T",
          "word": "Tambourine",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Udu Drum",
          "emoji": "🏺",
          "bgColor": "#CD853F"
          },
          {
          "letter": "V",
          "word": "Vibraphone",
          "emoji": "🎵",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "W",
          "word": "Wood Block",
          "emoji": "🪵",
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
          "word": "Yuka Drum",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Z",
          "word": "Zills (Finger Cymbals)",
          "emoji": "🔔",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsMusicFolk1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Folk Music Instruments Part 1",
          videoId: "music-folk-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Alghoza",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Been (Snake Charmer)",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Chimta",
          "emoji": "🎵",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "D",
          "word": "Damru",
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
          "word": "Folk Flute",
          "emoji": "🎵",
          "bgColor": "#DAA520"
          },
          {
          "letter": "G",
          "word": "Ghungroo",
          "emoji": "🔔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hurdy Gurdy",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "I",
          "word": "Indian Folk Drum",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "J",
          "word": "Jaw Harp",
          "emoji": "🎵",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "K",
          "word": "Khartal",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "L",
          "word": "Lavani Drum",
          "emoji": "🥁",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Morchang",
          "emoji": "🎵",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "N",
          "word": "Nagada",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "O",
          "word": "Ottu",
          "emoji": "🎵",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Pungi",
          "emoji": "🐍",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Qawwali Drum",
          "emoji": "🥁",
          "bgColor": "#DC143C"
          },
          {
          "letter": "R",
          "word": "Ravanhatha",
          "emoji": "🎻",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Shehnai",
          "emoji": "🎺",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tumbi",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "U",
          "word": "Urumi Drum",
          "emoji": "🥁",
          "bgColor": "#CD853F"
          },
          {
          "letter": "V",
          "word": "Village Drum",
          "emoji": "🥁",
          "bgColor": "#8B4513"
          },
          {
          "letter": "W",
          "word": "Whistle Flute",
          "emoji": "🎵",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "X",
          "word": "Xalam",
          "emoji": "🎸",
          "bgColor": "#8B4513"
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
        id="KidsMusicKids1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Kids Music & Sounds Part 1",
          videoId: "music-kids-1",
          bgGradient: ["#FF6B6B","#FFE66D"] as [string, string],
          accentColor: "#E74C3C",
          letters: [
          {
          "letter": "A",
          "word": "ABC Song",
          "emoji": "🎵",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Baby Rattle",
          "emoji": "🎵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "C",
          "word": "Clapping",
          "emoji": "👏",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Drum Set",
          "emoji": "🥁",
          "bgColor": "#DC143C"
          },
          {
          "letter": "E",
          "word": "Echo Sound",
          "emoji": "🔊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Finger Snapping",
          "emoji": "🤌",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Guitar Strum",
          "emoji": "🎸",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Humming",
          "emoji": "🎵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "I",
          "word": "Indian Nursery Rhyme",
          "emoji": "🎶",
          "bgColor": "#FF9933"
          },
          {
          "letter": "J",
          "word": "Jingle",
          "emoji": "🔔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kazoo",
          "emoji": "🎵",
          "bgColor": "#FF6347"
          },
          {
          "letter": "L",
          "word": "Lullaby",
          "emoji": "🎵",
          "bgColor": "#E6E6FA"
          },
          {
          "letter": "M",
          "word": "Music Box",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Nursery Rhyme",
          "emoji": "🎶",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "O",
          "word": "Old MacDonald Song",
          "emoji": "🎵",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Piano Keys",
          "emoji": "🎹",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quiet Music",
          "emoji": "🎵",
          "bgColor": "#E6E6FA"
          },
          {
          "letter": "R",
          "word": "Rain Sound",
          "emoji": "🌧️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "S",
          "word": "Singing",
          "emoji": "🎤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Toy Piano",
          "emoji": "🎹",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "U",
          "word": "Ukulele",
          "emoji": "🪕",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Voice",
          "emoji": "🎤",
          "bgColor": "#FF6347"
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
          "word": "Yelling Sound",
          "emoji": "📢",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zither Sound",
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
        id="KidsProfessionsMedical1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Medical Professions Part 1",
          videoId: "professions-medical-1",
          bgGradient: ["#11998E","#38EF7D"] as [string, string],
          accentColor: "#1ABC9C",
          letters: [
          {
          "letter": "A",
          "word": "Anaesthetist",
          "emoji": "👨‍⚕️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "B",
          "word": "Blood Bank Tech",
          "emoji": "🩸",
          "bgColor": "#DC143C"
          },
          {
          "letter": "C",
          "word": "Cardiologist",
          "emoji": "❤️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dentist",
          "emoji": "🦷",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "ENT Specialist",
          "emoji": "👂",
          "bgColor": "#DEB887"
          },
          {
          "letter": "F",
          "word": "Family Doctor",
          "emoji": "👨‍⚕️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "G",
          "word": "General Surgeon",
          "emoji": "👨‍⚕️",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Heart Surgeon",
          "emoji": "🫀",
          "bgColor": "#DC143C"
          },
          {
          "letter": "I",
          "word": "ICU Nurse",
          "emoji": "👩‍⚕️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "J",
          "word": "Junior Doctor",
          "emoji": "👨‍⚕️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "K",
          "word": "Kidney Specialist",
          "emoji": "👨‍⚕️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lab Technician",
          "emoji": "🔬",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Midwife",
          "emoji": "👩‍⚕️",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "N",
          "word": "Neurologist",
          "emoji": "🧠",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "O",
          "word": "Ophthalmologist",
          "emoji": "👁️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Pharmacist",
          "emoji": "💊",
          "bgColor": "#228B22"
          },
          {
          "letter": "Q",
          "word": "Quality Nurse",
          "emoji": "👩‍⚕️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Radiologist",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "S",
          "word": "Surgeon",
          "emoji": "👨‍⚕️",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Therapist",
          "emoji": "🧑‍⚕️",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "U",
          "word": "Ultrasound Tech",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Veterinarian",
          "emoji": "🧑‍⚕️",
          "bgColor": "#32CD32"
          },
          {
          "letter": "W",
          "word": "Ward Nurse",
          "emoji": "👩‍⚕️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "X-ray Doctor",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yoga Therapist",
          "emoji": "🧘",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Z",
          "word": "Zoologist",
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
        id="KidsProfessionsCreative1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Creative Professions Part 1",
          videoId: "professions-creative-1",
          bgGradient: ["#ED4264","#FFEDBC"] as [string, string],
          accentColor: "#C0392B",
          letters: [
          {
          "letter": "A",
          "word": "Actor",
          "emoji": "🎭",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Book Writer",
          "emoji": "📚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Choreographer",
          "emoji": "💃",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "D",
          "word": "Director",
          "emoji": "🎬",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "E",
          "word": "Editor",
          "emoji": "✍️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Fashion Designer",
          "emoji": "👗",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Graphic Designer",
          "emoji": "🎨",
          "bgColor": "#FF6347"
          },
          {
          "letter": "H",
          "word": "Hair Stylist",
          "emoji": "💇",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "I",
          "word": "Illustrator",
          "emoji": "🖌️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "J",
          "word": "Journalist",
          "emoji": "📰",
          "bgColor": "#696969"
          },
          {
          "letter": "K",
          "word": "Knitter",
          "emoji": "🧶",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Lyricist",
          "emoji": "🎵",
          "bgColor": "#4169E1"
          },
          {
          "letter": "M",
          "word": "Musician",
          "emoji": "🎵",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Novelist",
          "emoji": "📖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Opera Singer",
          "emoji": "🎤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "P",
          "word": "Photographer",
          "emoji": "📷",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "Q",
          "word": "Quilter",
          "emoji": "🧵",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "R",
          "word": "Radio Jockey",
          "emoji": "📻",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Sculptor",
          "emoji": "🗿",
          "bgColor": "#696969"
          },
          {
          "letter": "T",
          "word": "Tattoo Artist",
          "emoji": "🎨",
          "bgColor": "#1C1C1C"
          },
          {
          "letter": "U",
          "word": "UI Artist",
          "emoji": "🎨",
          "bgColor": "#4169E1"
          },
          {
          "letter": "V",
          "word": "Voice Actor",
          "emoji": "🎤",
          "bgColor": "#FF6347"
          },
          {
          "letter": "W",
          "word": "Writer",
          "emoji": "✍️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "Xerigrapher",
          "emoji": "🖼️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Y",
          "word": "Yarn Artist",
          "emoji": "🧶",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "Z",
          "word": "Zen Artist",
          "emoji": "🎨",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsProfessionsDefense1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Defense & Armed Forces Part 1",
          videoId: "professions-defense-1",
          bgGradient: ["#2F4F4F","#556B2F"] as [string, string],
          accentColor: "#2F4F4F",
          letters: [
          {
          "letter": "A",
          "word": "Army Soldier",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "B",
          "word": "Border Guard (BSF)",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "C",
          "word": "Captain",
          "emoji": "⚓",
          "bgColor": "#000080"
          },
          {
          "letter": "D",
          "word": "Defense Scientist",
          "emoji": "🧑‍🔬",
          "bgColor": "#4682B4"
          },
          {
          "letter": "E",
          "word": "Engineer (Military)",
          "emoji": "👷",
          "bgColor": "#556B2F"
          },
          {
          "letter": "F",
          "word": "Fighter Pilot",
          "emoji": "👨‍✈️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "G",
          "word": "General",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "H",
          "word": "Helicopter Pilot",
          "emoji": "🚁",
          "bgColor": "#4682B4"
          },
          {
          "letter": "I",
          "word": "Indian Air Force",
          "emoji": "✈️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "J",
          "word": "Jawan (Soldier)",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "K",
          "word": "K-9 Handler",
          "emoji": "🐕",
          "bgColor": "#556B2F"
          },
          {
          "letter": "L",
          "word": "Lieutenant",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "M",
          "word": "Major",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "N",
          "word": "Navy Officer",
          "emoji": "⚓",
          "bgColor": "#000080"
          },
          {
          "letter": "O",
          "word": "Operations Commander",
          "emoji": "🪖",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "P",
          "word": "Paratrooper",
          "emoji": "🪂",
          "bgColor": "#556B2F"
          },
          {
          "letter": "Q",
          "word": "Quartermaster",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "R",
          "word": "Rifleman",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "S",
          "word": "Submarine Captain",
          "emoji": "⚓",
          "bgColor": "#000080"
          },
          {
          "letter": "T",
          "word": "Tank Commander",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "U",
          "word": "UAV Operator",
          "emoji": "🛸",
          "bgColor": "#4682B4"
          },
          {
          "letter": "V",
          "word": "Vice Admiral",
          "emoji": "⚓",
          "bgColor": "#000080"
          },
          {
          "letter": "W",
          "word": "Wing Commander",
          "emoji": "✈️",
          "bgColor": "#87CEEB"
          },
          {
          "letter": "X",
          "word": "X-ray Analyst",
          "emoji": "🩻",
          "bgColor": "#4682B4"
          },
          {
          "letter": "Y",
          "word": "Yeoman",
          "emoji": "🪖",
          "bgColor": "#556B2F"
          },
          {
          "letter": "Z",
          "word": "Zero Fighter Pilot",
          "emoji": "✈️",
          "bgColor": "#4682B4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureClothing1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Clothing Part 1",
          videoId: "culture-clothing-1",
          bgGradient: ["#654EA3","#EAAFC8"] as [string, string],
          accentColor: "#8E44AD",
          letters: [
          {
          "letter": "A",
          "word": "Anarkali Suit",
          "emoji": "👗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "B",
          "word": "Bandhani",
          "emoji": "👗",
          "bgColor": "#FF6347"
          },
          {
          "letter": "C",
          "word": "Churidar",
          "emoji": "👗",
          "bgColor": "#4169E1"
          },
          {
          "letter": "D",
          "word": "Dhoti",
          "emoji": "👔",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Embroidered Kurta",
          "emoji": "👔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Frock",
          "emoji": "👗",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "G",
          "word": "Ghagra Choli",
          "emoji": "👗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Half Saree",
          "emoji": "👗",
          "bgColor": "#228B22"
          },
          {
          "letter": "I",
          "word": "Indo-Western",
          "emoji": "👔",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Jodhpuri Suit",
          "emoji": "👔",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "Kurta Pajama",
          "emoji": "👔",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Lehenga",
          "emoji": "👗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "M",
          "word": "Mekhela Chador",
          "emoji": "👗",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Nehru Jacket",
          "emoji": "👔",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Odhni",
          "emoji": "🧣",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "P",
          "word": "Pattu Pavadai",
          "emoji": "👗",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Q",
          "word": "Quilted Jacket",
          "emoji": "🧥",
          "bgColor": "#8B0000"
          },
          {
          "letter": "R",
          "word": "Rajasthani Turban",
          "emoji": "👳",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Saree",
          "emoji": "👗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "T",
          "word": "Topi (Cap)",
          "emoji": "🧢",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "U",
          "word": "Uttariya (Stole)",
          "emoji": "🧣",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Vest (Bandi)",
          "emoji": "🦺",
          "bgColor": "#DAA520"
          },
          {
          "letter": "W",
          "word": "Wedding Sherwani",
          "emoji": "👔",
          "bgColor": "#FFD700"
          },
          {
          "letter": "X",
          "word": "X-tra Embroidered",
          "emoji": "👗",
          "bgColor": "#DC143C"
          },
          {
          "letter": "Y",
          "word": "Yellow Silk Saree",
          "emoji": "👗",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zari Work",
          "emoji": "✨",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureLanguages1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Languages Part 1",
          videoId: "culture-languages-1",
          bgGradient: ["#FF9933","#138808"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Assamese",
          "emoji": "🗣️",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Bengali",
          "emoji": "🗣️",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Chhattisgarhi",
          "emoji": "🗣️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "D",
          "word": "Dogri",
          "emoji": "🗣️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "E",
          "word": "English",
          "emoji": "🗣️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "French (Puducherry)",
          "emoji": "🗣️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "G",
          "word": "Gujarati",
          "emoji": "🗣️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "H",
          "word": "Hindi",
          "emoji": "🗣️",
          "bgColor": "#FF9933"
          },
          {
          "letter": "I",
          "word": "Indian Sign Language",
          "emoji": "🤟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "J",
          "word": "Javanese (Spoken)",
          "emoji": "🗣️",
          "bgColor": "#228B22"
          },
          {
          "letter": "K",
          "word": "Kannada",
          "emoji": "🗣️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "L",
          "word": "Ladakhi",
          "emoji": "🗣️",
          "bgColor": "#4682B4"
          },
          {
          "letter": "M",
          "word": "Malayalam",
          "emoji": "🗣️",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Nepali",
          "emoji": "🗣️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "O",
          "word": "Odia",
          "emoji": "🗣️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "P",
          "word": "Punjabi",
          "emoji": "🗣️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "Q",
          "word": "Quechua (Tribal)",
          "emoji": "🗣️",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rajasthani",
          "emoji": "🗣️",
          "bgColor": "#DAA520"
          },
          {
          "letter": "S",
          "word": "Sanskrit",
          "emoji": "🗣️",
          "bgColor": "#FF9933"
          },
          {
          "letter": "T",
          "word": "Tamil",
          "emoji": "🗣️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "U",
          "word": "Urdu",
          "emoji": "🗣️",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Vietnamese (Community)",
          "emoji": "🗣️",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "Written Scripts",
          "emoji": "✍️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "X",
          "word": "Xhosa (Tribal)",
          "emoji": "🗣️",
          "bgColor": "#228B22"
          },
          {
          "letter": "Y",
          "word": "Yiddish (Community)",
          "emoji": "🗣️",
          "bgColor": "#4169E1"
          },
          {
          "letter": "Z",
          "word": "Zou (Tribal)",
          "emoji": "🗣️",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureFreedomFighters1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Freedom Fighters Part 1",
          videoId: "culture-freedom-fighters-1",
          bgGradient: ["#FF9933","#FFFFFF"] as [string, string],
          accentColor: "#FF6600",
          letters: [
          {
          "letter": "A",
          "word": "Ashfaqulla Khan",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "B",
          "word": "Bhagat Singh",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "C",
          "word": "Chandrashekhar Azad",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "D",
          "word": "Dadabhai Naoroji",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "E",
          "word": "Ezhuthachan",
          "emoji": "🇮🇳",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Freedom Movement",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "G",
          "word": "Gandhiji",
          "emoji": "🇮🇳",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "H",
          "word": "Har Dayal",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "I",
          "word": "Indian National Congress",
          "emoji": "🇮🇳",
          "bgColor": "#4169E1"
          },
          {
          "letter": "J",
          "word": "Jawaharlal Nehru",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "K",
          "word": "Kittur Rani Chennamma",
          "emoji": "🇮🇳",
          "bgColor": "#FFD700"
          },
          {
          "letter": "L",
          "word": "Lala Lajpat Rai",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "M",
          "word": "Mangal Pandey",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "N",
          "word": "Netaji Subhas Chandra Bose",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "O",
          "word": "Our Freedom Heroes",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "P",
          "word": "Pandit Nehru",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "Q",
          "word": "Quit India Movement",
          "emoji": "🇮🇳",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rani Lakshmibai",
          "emoji": "🇮🇳",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Sardar Patel",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "T",
          "word": "Tilak",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "U",
          "word": "Unity Leaders",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "V",
          "word": "Veer Savarkar",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "W",
          "word": "Women Freedom Fighters",
          "emoji": "🇮🇳",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "X",
          "word": "X-tra Brave Heroes",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          },
          {
          "letter": "Y",
          "word": "Young India Movement",
          "emoji": "🇮🇳",
          "bgColor": "#228B22"
          },
          {
          "letter": "Z",
          "word": "Zeal for Freedom",
          "emoji": "🇮🇳",
          "bgColor": "#FF9933"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="KidsCultureTemples1"
        component={AlphabetShortsTemplate}
        durationInFrames={2520}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Indian Temples Part 1",
          videoId: "culture-temples-1",
          bgGradient: ["#F2994A","#F2C94C"] as [string, string],
          accentColor: "#E67E22",
          letters: [
          {
          "letter": "A",
          "word": "Akshardham Temple",
          "emoji": "🛕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Badrinath Temple",
          "emoji": "🛕",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Chidambaram Temple",
          "emoji": "🛕",
          "bgColor": "#DAA520"
          },
          {
          "letter": "D",
          "word": "Dwarkadhish Temple",
          "emoji": "🛕",
          "bgColor": "#4169E1"
          },
          {
          "letter": "E",
          "word": "Ekambareswarar Temple",
          "emoji": "🛕",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Famous Somnath",
          "emoji": "🛕",
          "bgColor": "#DAA520"
          },
          {
          "letter": "G",
          "word": "Golden Temple",
          "emoji": "🛕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Hampi Temple",
          "emoji": "🛕",
          "bgColor": "#CD853F"
          },
          {
          "letter": "I",
          "word": "ISKCON Temple",
          "emoji": "🛕",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "J",
          "word": "Jagannath Puri Temple",
          "emoji": "🛕",
          "bgColor": "#DC143C"
          },
          {
          "letter": "K",
          "word": "Kedarnath Temple",
          "emoji": "🛕",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Lingaraj Temple",
          "emoji": "🛕",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Meenakshi Temple",
          "emoji": "🛕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Nataraja Temple",
          "emoji": "🛕",
          "bgColor": "#DAA520"
          },
          {
          "letter": "O",
          "word": "Om Temple",
          "emoji": "🕉️",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Padmanabhaswamy",
          "emoji": "🛕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Q",
          "word": "Quiet Monastery",
          "emoji": "🛕",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Ram Mandir Ayodhya",
          "emoji": "🛕",
          "bgColor": "#FF9933"
          },
          {
          "letter": "S",
          "word": "Sun Temple Konark",
          "emoji": "🛕",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Tirupati Balaji",
          "emoji": "🛕",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Ujjain Mahakal",
          "emoji": "🛕",
          "bgColor": "#DAA520"
          },
          {
          "letter": "V",
          "word": "Vaishno Devi",
          "emoji": "🛕",
          "bgColor": "#DC143C"
          },
          {
          "letter": "W",
          "word": "White Marble Temples",
          "emoji": "🛕",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xavier Church Goa",
          "emoji": "⛪",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Y",
          "word": "Yamunotri Temple",
          "emoji": "🛕",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zen Buddhist Temple",
          "emoji": "🛕",
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
