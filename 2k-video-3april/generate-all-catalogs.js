#!/usr/bin/env node
// ============================================================================
// Generate 1020 Video Catalogs - 3rd April 2026 Batch
// ============================================================================
// Creates catalog.json for 34 categories = 1020 total videos
// Each video: ~15 items, ~2:45 (165 seconds) long-form format
//
// Usage: node 1k-video-3april/generate-all-catalogs.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const BASE_DIR = __dirname;

// ============================================================================
// CATEGORY DATA - 34 categories x 30 videos each = 1020 videos
// ============================================================================

const CATEGORIES = {
  "toys": {
    name: "Toys",
    videosCount: 30,
    gradients: [
      [["#FF5722", "#FFAB91"], "#BF360C"],
      [["#E91E63", "#F48FB1"], "#880E4F"],
      [["#2196F3", "#90CAF9"], "#0D47A1"],
    ],
    words: [
      ["T", "Teddy Bear", "🧸", "#FF5722"], ["B", "Ball", "⚽", "#1E88E5"], ["D", "Doll", "🪆", "#E91E63"],
      ["C", "Car", "🚗", "#D32F2F"], ["T", "Train", "🚂", "#5D4037"], ["P", "Puzzle", "🧩", "#4CAF50"],
      ["K", "Kite", "🪁", "#FF9800"], ["L", "Lego", "🧱", "#FDD835"], ["R", "Robot", "🤖", "#607D8B"],
      ["Y", "Yo-Yo", "🪀", "#9C27B0"], ["D", "Drum", "🥁", "#795548"], ["T", "Top", "🪅", "#E91E63"],
      ["S", "Slinky", "🌀", "#00BCD4"], ["B", "Blocks", "🧱", "#FF5722"], ["F", "Frisbee", "🥏", "#4CAF50"],
      ["M", "Marbles", "🔮", "#1565C0"], ["S", "Skateboard", "🛹", "#FF6F00"], ["J", "Jack-in-Box", "🤡", "#E91E63"],
      ["P", "Playdough", "🎨", "#FF9800"], ["W", "Whistle", "📯", "#FFB300"], ["H", "Hula Hoop", "⭕", "#E91E63"],
      ["R", "Rattle", "🎵", "#F48FB1"], ["X", "Xylophone", "🎵", "#FF5722"], ["S", "Stuffed Animal", "🐻", "#795548"],
      ["B", "Bubbles", "🫧", "#90CAF9"], ["T", "Toy Soldier", "🧑‍✈️", "#2E7D32"], ["A", "Action Figure", "🦸", "#1565C0"],
      ["N", "Nerf Gun", "🔫", "#FF6F00"], ["C", "Clay", "🏺", "#8D6E63"], ["G", "Game Board", "🎲", "#4527A0"],
      ["U", "Unicycle", "🚲", "#D32F2F"], ["P", "Puppet", "🎭", "#7B1FA2"], ["R", "Rubik Cube", "🟥", "#FF5722"],
      ["S", "Scooter", "🛴", "#00BCD4"], ["K", "Kaleidoscope", "🔭", "#E91E63"], ["W", "Water Gun", "🔫", "#2196F3"],
      ["D", "Dinosaur Toy", "🦕", "#4CAF50"], ["B", "Balloon", "🎈", "#F44336"], ["C", "Crayon", "🖍️", "#FF9800"],
      ["T", "Tricycle", "🚲", "#E91E63"], ["L", "Lincoln Logs", "🪵", "#795548"], ["H", "Helicopter Toy", "🚁", "#0288D1"],
      ["M", "Model Kit", "✈️", "#455A64"], ["F", "Finger Paint", "🎨", "#E91E63"], ["S", "Sand Castle", "🏰", "#FFB300"],
      ["J", "Jigsaw", "🧩", "#4CAF50"],
    ],
  },
  "superheroes": {
    name: "Superheroes",
    videosCount: 30,
    gradients: [
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#C62828", "#EF9A9A"], "#B71C1C"],
      [["#4527A0", "#B39DDB"], "#311B92"],
    ],
    words: [
      ["S", "Superman", "🦸‍♂️", "#0D47A1"], ["B", "Batman", "🦇", "#212121"], ["S", "Spider-Man", "🕷️", "#D32F2F"],
      ["W", "Wonder Woman", "⭐", "#FFB300"], ["I", "Iron Man", "🤖", "#C62828"], ["C", "Captain America", "🛡️", "#1565C0"],
      ["T", "Thor", "⚡", "#FDD835"], ["H", "Hulk", "💪", "#2E7D32"], ["F", "Flash", "⚡", "#D32F2F"],
      ["A", "Aquaman", "🔱", "#00838F"], ["G", "Green Lantern", "💚", "#388E3C"], ["B", "Black Panther", "🐆", "#212121"],
      ["S", "Supergirl", "🦸‍♀️", "#E91E63"], ["R", "Robin", "🐦", "#D32F2F"], ["H", "Hawkeye", "🏹", "#7B1FA2"],
      ["D", "Deadpool", "🗡️", "#C62828"], ["W", "Wolverine", "🐺", "#FBC02D"], ["S", "Storm", "⛈️", "#0288D1"],
      ["C", "Cyclops", "👁️", "#D32F2F"], ["G", "Groot", "🌳", "#5D4037"], ["R", "Rocket", "🚀", "#455A64"],
      ["A", "Ant-Man", "🐜", "#C62828"], ["V", "Vision", "💎", "#7B1FA2"], ["N", "Nightwing", "🦅", "#1565C0"],
      ["B", "Batgirl", "🦇", "#4527A0"], ["S", "Shazam", "⚡", "#FFB300"], ["D", "Doctor Strange", "🔮", "#311B92"],
      ["P", "Power Ranger", "🦸", "#E91E63"], ["L", "Loki", "🐍", "#1B5E20"], ["T", "Thanos", "🫰", "#7B1FA2"],
      ["M", "Magneto", "🧲", "#C62828"], ["J", "Jean Grey", "🔥", "#D32F2F"], ["P", "Professor X", "🧠", "#1565C0"],
      ["S", "Silver Surfer", "🏄", "#9E9E9E"], ["G", "Gamora", "🗡️", "#2E7D32"], ["H", "Harley Quinn", "🃏", "#E91E63"],
      ["K", "King Kong", "🦍", "#5D4037"], ["Z", "Zatanna", "🎩", "#311B92"], ["F", "Falcon", "🦅", "#C62828"],
      ["C", "Catwoman", "🐱", "#212121"], ["O", "Optimus Prime", "🤖", "#1565C0"], ["M", "Mystique", "💙", "#0D47A1"],
      ["R", "Rogue", "🧤", "#2E7D32"], ["N", "Nebula", "🌌", "#7B1FA2"], ["W", "Wasp", "🐝", "#FDD835"],
    ],
  },
  "cartoon-characters": {
    name: "Cartoon Characters",
    videosCount: 30,
    gradients: [
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#00BCD4", "#B2EBF2"], "#006064"],
    ],
    words: [
      ["M", "Mickey Mouse", "🐭", "#212121"], ["D", "Donald Duck", "🦆", "#1565C0"], ["G", "Goofy", "🐶", "#FF8F00"],
      ["T", "Tom", "🐱", "#607D8B"], ["J", "Jerry", "🐭", "#8D6E63"], ["S", "SpongeBob", "🧽", "#FDD835"],
      ["B", "Bugs Bunny", "🐰", "#9E9E9E"], ["D", "Dora", "🎒", "#E91E63"], ["P", "Peppa Pig", "🐷", "#F48FB1"],
      ["E", "Elsa", "❄️", "#90CAF9"], ["S", "Shrek", "🟢", "#4CAF50"], ["N", "Nemo", "🐠", "#FF6F00"],
      ["W", "Winnie Pooh", "🍯", "#FFB300"], ["P", "Pikachu", "⚡", "#FDD835"], ["S", "Simba", "🦁", "#FF8F00"],
      ["C", "Cinderella", "👗", "#90CAF9"], ["A", "Aladdin", "🧞", "#7B1FA2"], ["R", "Rapunzel", "👸", "#FBC02D"],
      ["O", "Olaf", "⛄", "#90CAF9"], ["M", "Moana", "🌊", "#00BCD4"], ["B", "Bambi", "🦌", "#8D6E63"],
      ["D", "Dumbo", "🐘", "#9E9E9E"], ["P", "Pluto", "🐕", "#FF8F00"], ["G", "Garfield", "🐱", "#FF6F00"],
      ["T", "Tweety", "🐦", "#FDD835"], ["S", "Scooby-Doo", "🐕", "#795548"], ["P", "Patrick Star", "⭐", "#F48FB1"],
      ["F", "Frozen Anna", "❄️", "#2E7D32"], ["W", "Woody", "🤠", "#795548"], ["B", "Buzz Lightyear", "🚀", "#4CAF50"],
      ["L", "Lightning McQueen", "🏎️", "#D32F2F"], ["M", "Mario", "🍄", "#D32F2F"], ["L", "Luigi", "🍄", "#4CAF50"],
      ["S", "Sonic", "🦔", "#1565C0"], ["D", "Doraemon", "🐱", "#0288D1"], ["K", "Kung Fu Panda", "🐼", "#212121"],
      ["H", "Hello Kitty", "🐱", "#E91E63"], ["P", "Popeye", "💪", "#2E7D32"], ["C", "Charlie Brown", "🐕", "#FFB300"],
      ["R", "Road Runner", "🐦", "#0288D1"], ["Z", "Zootopia Judy", "🐰", "#607D8B"], ["I", "Ice Age Sid", "🦥", "#795548"],
      ["T", "Tarzan", "🌿", "#2E7D32"], ["M", "Mulan", "⚔️", "#C62828"], ["A", "Ariel", "🧜‍♀️", "#00BCD4"],
    ],
  },
  "wild-cats": {
    name: "Wild Cats & Big Cats",
    videosCount: 30,
    gradients: [
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#5D4037", "#BCAAA4"], "#3E2723"],
      [["#1B5E20", "#A5D6A7"], "#0D3B0D"],
    ],
    words: [
      ["L", "Lion", "🦁", "#FF8F00"], ["T", "Tiger", "🐯", "#FF6F00"], ["C", "Cheetah", "🐆", "#FFB300"],
      ["L", "Leopard", "🐆", "#8D6E63"], ["J", "Jaguar", "🐆", "#FF8F00"], ["P", "Panther", "🐆", "#212121"],
      ["C", "Cougar", "🐆", "#8D6E63"], ["L", "Lynx", "🐱", "#A1887F"], ["B", "Bobcat", "🐱", "#795548"],
      ["S", "Snow Leopard", "🐆", "#B0BEC5"], ["O", "Ocelot", "🐱", "#FFB300"], ["C", "Caracal", "🐱", "#BF360C"],
      ["S", "Serval", "🐱", "#FFB74D"], ["P", "Puma", "🐆", "#795548"], ["M", "Margay", "🐱", "#5D4037"],
      ["W", "Wildcat", "🐱", "#607D8B"], ["C", "Clouded Leopard", "🐆", "#546E7A"], ["L", "Liger", "🦁", "#FF8F00"],
      ["T", "Tigon", "🐯", "#E65100"], ["S", "Siberian Tiger", "🐯", "#B0BEC5"], ["B", "Bengal Tiger", "🐯", "#FF6F00"],
      ["W", "White Tiger", "🐯", "#F5F5F5"], ["S", "Saber Tooth", "🦷", "#795548"], ["A", "Amur Leopard", "🐆", "#FFB300"],
      ["F", "Fishing Cat", "🐱", "#546E7A"], ["S", "Sand Cat", "🐱", "#FFB74D"], ["R", "Rusty Cat", "🐱", "#BF360C"],
      ["J", "Jaguarundi", "🐱", "#5D4037"], ["K", "Kodkod", "🐱", "#795548"], ["M", "Mountain Lion", "🐆", "#8D6E63"],
      ["C", "Civet Cat", "🐱", "#607D8B"], ["G", "Golden Cat", "🐱", "#FFB300"], ["I", "Iberian Lynx", "🐱", "#A1887F"],
      ["A", "Andean Cat", "🐱", "#546E7A"], ["P", "Pallas Cat", "🐱", "#9E9E9E"], ["B", "Bay Cat", "🐱", "#BF360C"],
      ["F", "Flat Head Cat", "🐱", "#5D4037"], ["L", "Leopard Cat", "🐱", "#FFB74D"], ["T", "Temminck Cat", "🐱", "#795548"],
      ["M", "Marbled Cat", "🐱", "#8D6E63"], ["N", "Neofelis", "🐱", "#546E7A"], ["C", "Chausie", "🐱", "#FF8F00"],
      ["S", "Savannah Cat", "🐱", "#FFB300"], ["E", "Egyptian Mau", "🐱", "#FFB74D"], ["D", "Desert Cat", "🐱", "#E65100"],
    ],
  },
  "pet-animals": {
    name: "Pet Animals",
    videosCount: 30,
    gradients: [
      [["#FF7043", "#FFAB91"], "#BF360C"],
      [["#AB47BC", "#CE93D8"], "#6A1B9A"],
      [["#26C6DA", "#B2EBF2"], "#00838F"],
    ],
    words: [
      ["D", "Dog", "🐕", "#795548"], ["C", "Cat", "🐱", "#FF8F00"], ["F", "Fish", "🐟", "#0288D1"],
      ["H", "Hamster", "🐹", "#FFB74D"], ["R", "Rabbit", "🐇", "#F5F5F5"], ["P", "Parrot", "🦜", "#4CAF50"],
      ["T", "Turtle", "🐢", "#2E7D32"], ["G", "Guinea Pig", "🐹", "#8D6E63"], ["B", "Bird", "🐦", "#1E88E5"],
      ["G", "Goldfish", "🐠", "#FF8F00"], ["K", "Kitten", "🐱", "#FFB300"], ["P", "Puppy", "🐶", "#795548"],
      ["B", "Bunny", "🐰", "#F48FB1"], ["C", "Canary", "🐤", "#FDD835"], ["I", "Iguana", "🦎", "#4CAF50"],
      ["F", "Ferret", "🦡", "#8D6E63"], ["L", "Lovebird", "🐦", "#4CAF50"], ["S", "Snake", "🐍", "#2E7D32"],
      ["G", "Gerbil", "🐭", "#A1887F"], ["C", "Chinchilla", "🐭", "#9E9E9E"], ["P", "Pony", "🐴", "#795548"],
      ["H", "Hermit Crab", "🦀", "#FF5722"], ["A", "Axolotl", "🦎", "#F48FB1"], ["M", "Mouse", "🐭", "#9E9E9E"],
      ["D", "Dove", "🕊️", "#F5F5F5"], ["T", "Tarantula", "🕷️", "#5D4037"], ["S", "Seahorse", "🐟", "#FF6F00"],
      ["C", "Cockatiel", "🐦", "#FDD835"], ["B", "Bearded Dragon", "🦎", "#FF8F00"], ["L", "Lizard", "🦎", "#4CAF50"],
      ["P", "Parakeet", "🐦", "#4CAF50"], ["R", "Rat", "🐀", "#607D8B"], ["S", "Shrimp", "🦐", "#FF6F00"],
      ["T", "Tortoise", "🐢", "#5D4037"], ["M", "Macaw", "🦜", "#D32F2F"], ["H", "Hedgehog", "🦔", "#795548"],
      ["F", "Frog", "🐸", "#4CAF50"], ["C", "Chameleon", "🦎", "#FF6F00"], ["S", "Sugar Glider", "🐿️", "#9E9E9E"],
      ["G", "Gecko", "🦎", "#AED581"], ["N", "Newt", "🦎", "#FF6F00"], ["P", "Pig", "🐷", "#F48FB1"],
      ["D", "Donkey", "🫏", "#607D8B"], ["A", "Alpaca", "🦙", "#F5F5F5"], ["L", "Llama", "🦙", "#A1887F"],
    ],
  },
  "jungle-animals": {
    name: "Jungle Animals",
    videosCount: 30,
    gradients: [
      [["#1B5E20", "#A5D6A7"], "#0D3B0D"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#4E342E", "#BCAAA4"], "#3E2723"],
    ],
    words: [
      ["G", "Gorilla", "🦍", "#5D4037"], ["M", "Monkey", "🐒", "#795548"], ["E", "Elephant", "🐘", "#607D8B"],
      ["T", "Toucan", "🦜", "#FF8F00"], ["P", "Parrot", "🦜", "#4CAF50"], ["J", "Jaguar", "🐆", "#FFB300"],
      ["S", "Sloth", "🦥", "#8D6E63"], ["C", "Crocodile", "🐊", "#33691E"], ["O", "Orangutan", "🦧", "#FF6F00"],
      ["C", "Chameleon", "🦎", "#4CAF50"], ["F", "Frog", "🐸", "#2E7D32"], ["A", "Anaconda", "🐍", "#1B5E20"],
      ["P", "Panther", "🐆", "#212121"], ["T", "Tiger", "🐯", "#FF6F00"], ["M", "Macaw", "🦜", "#D32F2F"],
      ["H", "Hippo", "🦛", "#607D8B"], ["R", "Rhino", "🦏", "#9E9E9E"], ["L", "Lemur", "🐒", "#5D4037"],
      ["I", "Iguana", "🦎", "#4CAF50"], ["B", "Boa", "🐍", "#5D4037"], ["K", "Koala", "🐨", "#9E9E9E"],
      ["C", "Chimpanzee", "🐒", "#795548"], ["T", "Tapir", "🐽", "#37474F"], ["O", "Okapi", "🦓", "#5D4037"],
      ["S", "Spider Monkey", "🕷️", "#3E2723"], ["B", "Baboon", "🐒", "#795548"], ["C", "Capybara", "🐹", "#8D6E63"],
      ["V", "Vulture", "🦅", "#3E2723"], ["P", "Python", "🐍", "#5D4037"], ["A", "Ant Eater", "🐜", "#607D8B"],
      ["W", "Warthog", "🐗", "#795548"], ["G", "Gecko", "🦎", "#AED581"], ["H", "Hornbill", "🐦", "#FF8F00"],
      ["T", "Tree Frog", "🐸", "#4CAF50"], ["M", "Mandrill", "🐒", "#1565C0"], ["O", "Ocelot", "🐱", "#FFB300"],
      ["K", "Kinkajou", "🐻", "#FF8F00"], ["N", "Numbat", "🐿️", "#BF360C"], ["C", "Caiman", "🐊", "#33691E"],
      ["J", "Jabiru", "🐦", "#F5F5F5"], ["S", "Sun Bear", "🐻", "#212121"], ["F", "Flying Fox", "🦇", "#3E2723"],
      ["D", "Dragonfly", "🪰", "#00BCD4"], ["L", "Leaf Insect", "🍃", "#4CAF50"], ["R", "Red Panda", "🐼", "#FF5722"],
    ],
  },
  "arctic-animals": {
    name: "Arctic Animals",
    videosCount: 30,
    gradients: [
      [["#0288D1", "#B3E5FC"], "#01579B"],
      [["#546E7A", "#CFD8DC"], "#37474F"],
      [["#4527A0", "#B39DDB"], "#311B92"],
    ],
    words: [
      ["P", "Polar Bear", "🐻‍❄️", "#F5F5F5"], ["P", "Penguin", "🐧", "#212121"], ["S", "Seal", "🦭", "#607D8B"],
      ["W", "Walrus", "🦭", "#795548"], ["A", "Arctic Fox", "🦊", "#F5F5F5"], ["S", "Snowy Owl", "🦉", "#FAFAFA"],
      ["N", "Narwhal", "🦄", "#90CAF9"], ["B", "Beluga Whale", "🐋", "#F5F5F5"], ["R", "Reindeer", "🦌", "#795548"],
      ["O", "Orca", "🐋", "#212121"], ["A", "Arctic Hare", "🐇", "#F5F5F5"], ["M", "Moose", "🫎", "#5D4037"],
      ["E", "Ermine", "🐿️", "#FAFAFA"], ["W", "Wolf", "🐺", "#607D8B"], ["L", "Lemming", "🐹", "#A1887F"],
      ["P", "Puffin", "🐦", "#212121"], ["H", "Harp Seal", "🦭", "#B0BEC5"], ["M", "Musk Ox", "🐂", "#5D4037"],
      ["S", "Snow Leopard", "🐆", "#B0BEC5"], ["C", "Caribou", "🦌", "#8D6E63"], ["A", "Albatross", "🐦", "#F5F5F5"],
      ["K", "King Crab", "🦀", "#D32F2F"], ["W", "Wolverine", "🐺", "#5D4037"], ["S", "Sea Lion", "🦭", "#795548"],
      ["F", "Fur Seal", "🦭", "#607D8B"], ["I", "Ice Fish", "🐟", "#90CAF9"], ["Y", "Yak", "🐂", "#3E2723"],
      ["B", "Blue Whale", "🐋", "#0D47A1"], ["T", "Tundra Swan", "🦢", "#F5F5F5"], ["G", "Grey Wolf", "🐺", "#9E9E9E"],
      ["H", "Husky", "🐕", "#B0BEC5"], ["S", "Stoat", "🐿️", "#FAFAFA"], ["D", "Dall Sheep", "🐑", "#F5F5F5"],
      ["C", "Chinook Salmon", "🐟", "#FF6F00"], ["R", "Ringed Seal", "🦭", "#607D8B"], ["E", "Emperor Penguin", "🐧", "#FFB300"],
      ["S", "Snowy Fox", "🦊", "#FAFAFA"], ["A", "Arctic Tern", "🐦", "#B0BEC5"], ["M", "Mountain Goat", "🐐", "#F5F5F5"],
      ["L", "Lynx", "🐱", "#A1887F"], ["P", "Ptarmigan", "🐦", "#FAFAFA"], ["N", "Norse Horse", "🐴", "#5D4037"],
      ["O", "Osprey", "🦅", "#3E2723"], ["F", "Fjord Horse", "🐴", "#795548"], ["G", "Greenland Shark", "🦈", "#455A64"],
    ],
  },
  "shapes": {
    name: "Shapes",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#2196F3", "#BBDEFB"], "#0D47A1"],
      [["#FF9800", "#FFE0B2"], "#E65100"],
    ],
    words: [
      ["C", "Circle", "⭕", "#E91E63"], ["S", "Square", "🟧", "#FF9800"], ["T", "Triangle", "🔺", "#D32F2F"],
      ["R", "Rectangle", "🟦", "#1565C0"], ["S", "Star", "⭐", "#FDD835"], ["H", "Heart", "❤️", "#E91E63"],
      ["D", "Diamond", "💎", "#00BCD4"], ["O", "Oval", "🥚", "#FFB300"], ["P", "Pentagon", "⬠", "#4CAF50"],
      ["H", "Hexagon", "⬡", "#7B1FA2"], ["O", "Octagon", "🛑", "#D32F2F"], ["A", "Arrow", "➡️", "#1565C0"],
      ["C", "Crescent", "🌙", "#FDD835"], ["C", "Cross", "✝️", "#D32F2F"], ["C", "Cube", "🧊", "#0288D1"],
      ["S", "Sphere", "🔵", "#2196F3"], ["C", "Cylinder", "🥫", "#FF6F00"], ["C", "Cone", "🍦", "#FFB300"],
      ["P", "Pyramid", "🔺", "#FF8F00"], ["S", "Spiral", "🌀", "#7B1FA2"], ["R", "Ring", "💍", "#FFD54F"],
      ["T", "Trapezoid", "🔶", "#FF6F00"], ["P", "Parallelogram", "▱", "#4CAF50"], ["R", "Rhombus", "🔷", "#1565C0"],
      ["S", "Semicircle", "🌗", "#607D8B"], ["K", "Kite Shape", "🪁", "#FF9800"], ["Z", "Zigzag", "⚡", "#FBC02D"],
      ["W", "Wave", "🌊", "#0288D1"], ["D", "Dot", "⚫", "#212121"], ["L", "Line", "➖", "#607D8B"],
      ["H", "Heptagon", "⬡", "#4CAF50"], ["N", "Nonagon", "⬡", "#E91E63"], ["D", "Decagon", "⬡", "#FF6F00"],
      ["E", "Ellipse", "⭕", "#9C27B0"], ["P", "Prism", "🔺", "#00BCD4"], ["T", "Torus", "🍩", "#FF5722"],
      ["A", "Arc", "🌈", "#E91E63"], ["C", "Chord", "🎵", "#1565C0"], ["R", "Radius", "📏", "#4CAF50"],
      ["S", "Sector", "🥧", "#FF8F00"], ["C", "Compass Rose", "🧭", "#0277BD"], ["I", "Infinity", "♾️", "#7B1FA2"],
      ["F", "Four Leaf", "🍀", "#4CAF50"], ["M", "Moon Shape", "🌙", "#FDD835"], ["B", "Bowtie", "🎀", "#E91E63"],
    ],
  },
  "numbers": {
    name: "Numbers",
    videosCount: 30,
    gradients: [
      [["#FF5722", "#FFAB91"], "#BF360C"],
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
      [["#9C27B0", "#E1BEE7"], "#6A1B9A"],
    ],
    words: [
      ["O", "One", "1️⃣", "#D32F2F"], ["T", "Two", "2️⃣", "#1565C0"], ["T", "Three", "3️⃣", "#2E7D32"],
      ["F", "Four", "4️⃣", "#FF8F00"], ["F", "Five", "5️⃣", "#7B1FA2"], ["S", "Six", "6️⃣", "#00838F"],
      ["S", "Seven", "7️⃣", "#E91E63"], ["E", "Eight", "8️⃣", "#FF6F00"], ["N", "Nine", "9️⃣", "#4527A0"],
      ["T", "Ten", "🔟", "#D32F2F"], ["E", "Eleven", "1️⃣", "#388E3C"], ["T", "Twelve", "1️⃣", "#0288D1"],
      ["T", "Thirteen", "1️⃣", "#FF5722"], ["F", "Fourteen", "1️⃣", "#7B1FA2"], ["F", "Fifteen", "1️⃣", "#00838F"],
      ["S", "Sixteen", "1️⃣", "#C62828"], ["S", "Seventeen", "1️⃣", "#2E7D32"], ["E", "Eighteen", "1️⃣", "#FF6F00"],
      ["N", "Nineteen", "1️⃣", "#311B92"], ["T", "Twenty", "2️⃣", "#D32F2F"], ["Z", "Zero", "0️⃣", "#607D8B"],
      ["H", "Hundred", "💯", "#FFB300"], ["T", "Thousand", "🔢", "#1565C0"], ["M", "Million", "🔢", "#4CAF50"],
      ["D", "Dozen", "📦", "#795548"], ["P", "Pair", "👯", "#E91E63"], ["T", "Triple", "🔱", "#00BCD4"],
      ["H", "Half", "½", "#FF8F00"], ["Q", "Quarter", "¼", "#7B1FA2"], ["D", "Double", "✌️", "#D32F2F"],
      ["S", "Score", "📊", "#1565C0"], ["F", "First", "🥇", "#FFB300"], ["S", "Second", "🥈", "#9E9E9E"],
      ["T", "Third", "🥉", "#795548"], ["F", "Fifth", "5️⃣", "#4CAF50"], ["T", "Tenth", "🔟", "#FF5722"],
      ["P", "Plus", "➕", "#2E7D32"], ["M", "Minus", "➖", "#D32F2F"], ["E", "Equals", "🟰", "#1565C0"],
      ["I", "Infinity", "♾️", "#7B1FA2"], ["P", "Pi", "🥧", "#FF6F00"], ["C", "Count", "🔢", "#00838F"],
      ["A", "Add", "➕", "#4CAF50"], ["S", "Sum", "📊", "#FF8F00"], ["N", "Number", "🔢", "#1565C0"],
    ],
  },
  "colors": {
    name: "Colors",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#2196F3", "#BBDEFB"], "#0D47A1"],
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
    ],
    words: [
      ["R", "Red", "🔴", "#D32F2F"], ["B", "Blue", "🔵", "#1565C0"], ["G", "Green", "🟢", "#2E7D32"],
      ["Y", "Yellow", "🟡", "#FDD835"], ["O", "Orange", "🟠", "#FF6F00"], ["P", "Purple", "🟣", "#7B1FA2"],
      ["P", "Pink", "💗", "#E91E63"], ["W", "White", "⚪", "#F5F5F5"], ["B", "Black", "⚫", "#212121"],
      ["B", "Brown", "🟤", "#795548"], ["G", "Gold", "🥇", "#FFB300"], ["S", "Silver", "🥈", "#9E9E9E"],
      ["C", "Cyan", "💙", "#00BCD4"], ["M", "Magenta", "💜", "#E91E63"], ["T", "Teal", "💎", "#00838F"],
      ["I", "Indigo", "💙", "#311B92"], ["V", "Violet", "🟣", "#7B1FA2"], ["C", "Coral", "🪸", "#FF6F00"],
      ["C", "Crimson", "❤️", "#C62828"], ["L", "Lavender", "💜", "#9575CD"], ["M", "Maroon", "🔴", "#6D4C41"],
      ["N", "Navy", "💙", "#0D47A1"], ["O", "Olive", "🫒", "#558B2F"], ["P", "Peach", "🍑", "#FFB74D"],
      ["R", "Rose", "🌹", "#E91E63"], ["S", "Scarlet", "🔴", "#D32F2F"], ["T", "Turquoise", "💎", "#00BCD4"],
      ["B", "Beige", "🟤", "#D7CCC8"], ["C", "Chartreuse", "🟢", "#CDDC39"], ["E", "Emerald", "💚", "#2E7D32"],
      ["F", "Fuchsia", "💗", "#E91E63"], ["H", "Hot Pink", "💗", "#FF1493"], ["I", "Ivory", "⚪", "#FFFFF0"],
      ["K", "Khaki", "🟤", "#F0E68C"], ["L", "Lime", "🟢", "#CDDC39"], ["M", "Mint", "🟢", "#98FF98"],
      ["P", "Plum", "🟣", "#8E24AA"], ["R", "Ruby", "❤️", "#D32F2F"], ["S", "Sapphire", "💙", "#1565C0"],
      ["T", "Tan", "🟤", "#D2B48C"], ["A", "Amber", "🟠", "#FFBF00"], ["C", "Copper", "🟤", "#B87333"],
      ["J", "Jade", "💚", "#00A86B"], ["M", "Mauve", "💜", "#E0B0FF"], ["P", "Periwinkle", "💙", "#CCCCFF"],
    ],
  },
  "vehicles": {
    name: "Vehicles",
    videosCount: 30,
    gradients: [
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#D32F2F", "#EF9A9A"], "#B71C1C"],
      [["#FF8F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["C", "Car", "🚗", "#D32F2F"], ["B", "Bus", "🚌", "#FDD835"], ["T", "Train", "🚂", "#5D4037"],
      ["A", "Airplane", "✈️", "#0288D1"], ["H", "Helicopter", "🚁", "#2E7D32"], ["B", "Boat", "⛵", "#1565C0"],
      ["S", "Ship", "🚢", "#0D47A1"], ["R", "Rocket", "🚀", "#FF5722"], ["T", "Truck", "🚛", "#FF6F00"],
      ["M", "Motorcycle", "🏍️", "#212121"], ["B", "Bicycle", "🚲", "#4CAF50"], ["S", "Scooter", "🛴", "#00BCD4"],
      ["S", "Submarine", "🚇", "#37474F"], ["F", "Fire Truck", "🚒", "#D32F2F"], ["A", "Ambulance", "🚑", "#F5F5F5"],
      ["P", "Police Car", "🚓", "#1565C0"], ["T", "Tractor", "🚜", "#4CAF50"], ["J", "Jet", "✈️", "#455A64"],
      ["V", "Van", "🚐", "#FF8F00"], ["L", "Limousine", "🚙", "#212121"], ["T", "Taxi", "🚕", "#FDD835"],
      ["C", "Canoe", "🛶", "#5D4037"], ["F", "Ferry", "⛴️", "#0288D1"], ["G", "Go-Kart", "🏎️", "#D32F2F"],
      ["H", "Hot Air Balloon", "🎈", "#FF5722"], ["S", "Sailboat", "⛵", "#1565C0"], ["D", "Dump Truck", "🚚", "#FF8F00"],
      ["E", "Excavator", "🏗️", "#FDD835"], ["C", "Crane", "🏗️", "#FFB300"], ["B", "Bulldozer", "🚜", "#FF6F00"],
      ["S", "Spaceship", "🛸", "#7B1FA2"], ["R", "Rickshaw", "🛺", "#4CAF50"], ["T", "Trolley", "🚃", "#D32F2F"],
      ["W", "Wagon", "🚗", "#795548"], ["Z", "Zeppelin", "🎈", "#607D8B"], ["S", "Snowmobile", "🛷", "#00BCD4"],
      ["K", "Kayak", "🛶", "#FF6F00"], ["M", "Moped", "🛵", "#E91E63"], ["P", "Paraglider", "🪂", "#4CAF50"],
      ["S", "Segway", "🛴", "#607D8B"], ["U", "Unicycle", "🚲", "#D32F2F"], ["H", "Hovercraft", "🚤", "#0288D1"],
      ["C", "Cable Car", "🚡", "#D32F2F"], ["D", "Dogsled", "🛷", "#5D4037"], ["M", "Monorail", "🚝", "#4527A0"],
    ],
  },
  "buildings": {
    name: "Buildings",
    videosCount: 30,
    gradients: [
      [["#455A64", "#B0BEC5"], "#263238"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
    ],
    words: [
      ["H", "House", "🏠", "#FF8F00"], ["S", "School", "🏫", "#D32F2F"], ["H", "Hospital", "🏥", "#E91E63"],
      ["C", "Church", "⛪", "#F5F5F5"], ["M", "Mosque", "🕌", "#00838F"], ["T", "Temple", "🛕", "#FF8F00"],
      ["C", "Castle", "🏰", "#795548"], ["P", "Palace", "🏛️", "#FFB300"], ["L", "Lighthouse", "🏗️", "#FDD835"],
      ["B", "Bridge", "🌉", "#455A64"], ["T", "Tower", "🗼", "#607D8B"], ["S", "Skyscraper", "🏢", "#0D47A1"],
      ["F", "Factory", "🏭", "#37474F"], ["B", "Barn", "🏚️", "#D32F2F"], ["G", "Garage", "🏗️", "#607D8B"],
      ["L", "Library", "📚", "#795548"], ["M", "Museum", "🏛️", "#4527A0"], ["S", "Stadium", "🏟️", "#2E7D32"],
      ["A", "Airport", "✈️", "#0288D1"], ["P", "Post Office", "📮", "#D32F2F"], ["B", "Bank", "🏦", "#1565C0"],
      ["R", "Restaurant", "🍽️", "#FF6F00"], ["H", "Hotel", "🏨", "#4527A0"], ["S", "Store", "🏪", "#4CAF50"],
      ["W", "Warehouse", "📦", "#795548"], ["P", "Prison", "🏚️", "#37474F"], ["M", "Mall", "🏬", "#E91E63"],
      ["C", "Cottage", "🏡", "#8D6E63"], ["I", "Igloo", "🏠", "#B0BEC5"], ["T", "Tent", "⛺", "#4CAF50"],
      ["P", "Pagoda", "🏯", "#C62828"], ["W", "Windmill", "🏗️", "#4CAF50"], ["S", "Silo", "🏗️", "#FF8F00"],
      ["D", "Dam", "🏗️", "#0288D1"], ["C", "Cinema", "🎬", "#7B1FA2"], ["G", "Gym", "🏋️", "#FF6F00"],
      ["H", "Hut", "🛖", "#795548"], ["F", "Fort", "🏰", "#5D4037"], ["C", "Cabin", "🏠", "#8D6E63"],
      ["T", "Theater", "🎭", "#C62828"], ["A", "Arena", "🏟️", "#1565C0"], ["O", "Observatory", "🔭", "#311B92"],
      ["D", "Dome", "🏛️", "#9E9E9E"], ["P", "Pyramid", "🏛️", "#FFB300"], ["R", "Ruins", "🏚️", "#795548"],
    ],
  },
  "furniture": {
    name: "Furniture",
    videosCount: 30,
    gradients: [
      [["#5D4037", "#BCAAA4"], "#3E2723"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#00695C", "#80CBC4"], "#004D40"],
    ],
    words: [
      ["C", "Chair", "🪑", "#795548"], ["T", "Table", "🪑", "#5D4037"], ["B", "Bed", "🛏️", "#1565C0"],
      ["S", "Sofa", "🛋️", "#8D6E63"], ["D", "Desk", "🪑", "#795548"], ["W", "Wardrobe", "🚪", "#5D4037"],
      ["S", "Shelf", "📚", "#FFB300"], ["L", "Lamp", "💡", "#FDD835"], ["M", "Mirror", "🪞", "#B0BEC5"],
      ["C", "Clock", "🕐", "#607D8B"], ["R", "Rug", "🟫", "#8D6E63"], ["C", "Curtain", "🪟", "#E91E63"],
      ["D", "Drawer", "🗄️", "#795548"], ["C", "Cabinet", "🗄️", "#5D4037"], ["O", "Ottoman", "🛋️", "#BF360C"],
      ["B", "Bookcase", "📚", "#3E2723"], ["S", "Stool", "🪑", "#FF8F00"], ["B", "Bench", "🪑", "#4CAF50"],
      ["C", "Couch", "🛋️", "#7B1FA2"], ["R", "Rocking Chair", "🪑", "#795548"], ["H", "Hammock", "🏖️", "#00BCD4"],
      ["V", "Vase", "🏺", "#E91E63"], ["P", "Pillow", "🛌", "#90CAF9"], ["B", "Blanket", "🧣", "#FF6F00"],
      ["F", "Fan", "🌀", "#0288D1"], ["T", "TV Stand", "📺", "#37474F"], ["N", "Nightstand", "🛏️", "#5D4037"],
      ["F", "Footrest", "🦶", "#8D6E63"], ["C", "Chandelier", "💡", "#FFB300"], ["D", "Dressing Table", "🪞", "#F48FB1"],
      ["A", "Armchair", "🪑", "#795548"], ["B", "Bunk Bed", "🛏️", "#1565C0"], ["C", "Cradle", "🛏️", "#F48FB1"],
      ["D", "Dining Table", "🍽️", "#5D4037"], ["E", "End Table", "🪑", "#8D6E63"], ["F", "Futon", "🛋️", "#4CAF50"],
      ["G", "Grandfather Clock", "🕰️", "#3E2723"], ["H", "Hutch", "🗄️", "#795548"], ["I", "Iron Board", "👔", "#607D8B"],
      ["K", "Kitchen Island", "🍳", "#FF8F00"], ["L", "Loveseat", "🛋️", "#E91E63"], ["M", "Mattress", "🛏️", "#90CAF9"],
      ["P", "Picture Frame", "🖼️", "#FFB300"], ["Q", "Quilt", "🧵", "#7B1FA2"], ["R", "Recliner", "🪑", "#5D4037"],
    ],
  },
  "school-items": {
    name: "School Items",
    videosCount: 30,
    gradients: [
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#FF6F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["P", "Pencil", "✏️", "#FDD835"], ["B", "Book", "📚", "#1565C0"], ["R", "Ruler", "📏", "#4CAF50"],
      ["E", "Eraser", "🧹", "#F48FB1"], ["S", "Scissors", "✂️", "#D32F2F"], ["G", "Glue", "🧴", "#FF6F00"],
      ["C", "Crayon", "🖍️", "#E91E63"], ["P", "Pen", "🖊️", "#212121"], ["N", "Notebook", "📓", "#4527A0"],
      ["B", "Backpack", "🎒", "#D32F2F"], ["C", "Calculator", "🧮", "#607D8B"], ["C", "Compass", "🧭", "#0277BD"],
      ["G", "Globe", "🌍", "#2E7D32"], ["M", "Map", "🗺️", "#FFB300"], ["C", "Chalk", "🖍️", "#F5F5F5"],
      ["B", "Blackboard", "📋", "#212121"], ["L", "Lunchbox", "🍱", "#FF8F00"], ["W", "Water Bottle", "💧", "#0288D1"],
      ["U", "Uniform", "👔", "#1565C0"], ["T", "Textbook", "📖", "#795548"], ["P", "Protractor", "📐", "#FF6F00"],
      ["S", "Stapler", "📎", "#607D8B"], ["H", "Highlighter", "🖍️", "#FDD835"], ["M", "Marker", "🖊️", "#D32F2F"],
      ["F", "Folder", "📁", "#4CAF50"], ["D", "Dictionary", "📘", "#0D47A1"], ["A", "Atlas", "🗺️", "#2E7D32"],
      ["T", "Tape", "📎", "#FFB300"], ["P", "Pencil Case", "🧰", "#E91E63"], ["S", "Sharpener", "✏️", "#FF8F00"],
      ["L", "Laptop", "💻", "#607D8B"], ["T", "Tablet", "📱", "#212121"], ["I", "Ink", "🖋️", "#0D47A1"],
      ["C", "Clock", "🕐", "#FF5722"], ["B", "Bell", "🔔", "#FFB300"], ["D", "Desk", "🪑", "#795548"],
      ["C", "Chair", "🪑", "#5D4037"], ["W", "Whiteboard", "📋", "#F5F5F5"], ["M", "Microscope", "🔬", "#00838F"],
      ["T", "Test Tube", "🧪", "#4CAF50"], ["L", "Library Card", "📚", "#7B1FA2"], ["P", "Paint Set", "🎨", "#E91E63"],
      ["S", "Science Kit", "🔬", "#00838F"], ["R", "Report Card", "📝", "#FFB300"], ["A", "Abacus", "🧮", "#FF5722"],
    ],
  },
  "playground": {
    name: "Playground",
    videosCount: 30,
    gradients: [
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
      [["#FF9800", "#FFE0B2"], "#E65100"],
      [["#2196F3", "#BBDEFB"], "#0D47A1"],
    ],
    words: [
      ["S", "Swing", "🎠", "#4CAF50"], ["S", "Slide", "🛝", "#FF5722"], ["S", "Seesaw", "⚖️", "#FDD835"],
      ["M", "Monkey Bars", "🐒", "#FF8F00"], ["S", "Sandbox", "🏖️", "#FFB300"], ["J", "Jungle Gym", "🏗️", "#4CAF50"],
      ["T", "Trampoline", "🤸", "#E91E63"], ["C", "Climbing Wall", "🧗", "#795548"], ["M", "Merry-Go-Round", "🎠", "#D32F2F"],
      ["R", "Rope Ladder", "🪜", "#FF6F00"], ["B", "Balance Beam", "🤸", "#00BCD4"], ["T", "Tire Swing", "🛞", "#212121"],
      ["H", "Hopscotch", "🎯", "#E91E63"], ["J", "Jump Rope", "🤸", "#4CAF50"], ["B", "Ball Pit", "⚽", "#D32F2F"],
      ["T", "Tunnel", "🚇", "#607D8B"], ["W", "Water Fountain", "⛲", "#0288D1"], ["P", "Picnic Table", "🪑", "#795548"],
      ["K", "Kite", "🪁", "#FF9800"], ["F", "Frisbee", "🥏", "#4CAF50"], ["S", "Spinner", "🌀", "#7B1FA2"],
      ["B", "Bench", "🪑", "#5D4037"], ["G", "Grass Field", "🌱", "#2E7D32"], ["P", "Playground", "🎪", "#FF5722"],
      ["R", "Roller Skates", "🛼", "#E91E63"], ["S", "Scooter", "🛴", "#00BCD4"], ["B", "Bicycle", "🚲", "#4CAF50"],
      ["H", "Hula Hoop", "⭕", "#FF6F00"], ["C", "Chalk Drawing", "🖍️", "#FDD835"], ["T", "Tag Game", "🏃", "#D32F2F"],
      ["D", "Dodgeball", "🏐", "#FF5722"], ["C", "Catch", "🧤", "#1565C0"], ["H", "Hide and Seek", "🙈", "#FF8F00"],
      ["L", "Ladder", "🪜", "#FF6F00"], ["P", "Pole", "🏗️", "#607D8B"], ["R", "Rings", "⭕", "#FFB300"],
      ["S", "Sprinkler", "💦", "#0288D1"], ["T", "Tetherball", "🏐", "#D32F2F"], ["W", "Wagon", "🚗", "#4CAF50"],
      ["Z", "Zipline", "🏗️", "#FF6F00"], ["Y", "Yard", "🌿", "#2E7D32"], ["G", "Gazebo", "🏠", "#795548"],
      ["F", "Fort", "🏰", "#5D4037"], ["A", "Adventure", "🏕️", "#FF8F00"], ["N", "Nature Trail", "🌲", "#1B5E20"],
    ],
  },
  "musical-sounds": {
    name: "Musical Sounds",
    videosCount: 30,
    gradients: [
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
    ],
    words: [
      ["G", "Guitar", "🎸", "#FF6F00"], ["P", "Piano", "🎹", "#212121"], ["D", "Drum", "🥁", "#D32F2F"],
      ["V", "Violin", "🎻", "#795548"], ["F", "Flute", "🎵", "#9E9E9E"], ["T", "Trumpet", "🎺", "#FFB300"],
      ["H", "Harp", "🎵", "#4527A0"], ["B", "Bell", "🔔", "#FFD54F"], ["X", "Xylophone", "🎵", "#FF5722"],
      ["M", "Maracas", "🪇", "#4CAF50"], ["T", "Tambourine", "🪘", "#FF8F00"], ["C", "Cymbal", "🥁", "#FFB300"],
      ["W", "Whistle", "📯", "#2E7D32"], ["S", "Saxophone", "🎷", "#FFB300"], ["C", "Cello", "🎻", "#5D4037"],
      ["B", "Banjo", "🪕", "#FF8F00"], ["U", "Ukulele", "🎸", "#00BCD4"], ["A", "Accordion", "🪗", "#D32F2F"],
      ["O", "Organ", "🎹", "#795548"], ["R", "Recorder", "🎵", "#4CAF50"], ["C", "Clarinet", "🎵", "#212121"],
      ["O", "Oboe", "🎵", "#5D4037"], ["S", "Sitar", "🎸", "#FF6F00"], ["T", "Tabla", "🥁", "#8D6E63"],
      ["D", "Didgeridoo", "🎵", "#795548"], ["H", "Harmonica", "🎵", "#0288D1"], ["K", "Kazoo", "🎵", "#E91E63"],
      ["L", "Lute", "🎸", "#A1887F"], ["M", "Mandolin", "🎸", "#FF8F00"], ["P", "Pan Pipes", "🎵", "#4CAF50"],
      ["T", "Trombone", "🎺", "#FFB300"], ["T", "Tuba", "🎺", "#607D8B"], ["S", "Snare Drum", "🥁", "#455A64"],
      ["B", "Bongo", "🪘", "#795548"], ["C", "Congas", "🪘", "#8D6E63"], ["G", "Glockenspiel", "🎵", "#B0BEC5"],
      ["C", "Castanets", "🎵", "#D32F2F"], ["Z", "Zither", "🎵", "#7B1FA2"], ["E", "Electric Guitar", "🎸", "#1565C0"],
      ["B", "Bass Guitar", "🎸", "#212121"], ["F", "French Horn", "📯", "#FFB300"], ["K", "Keyboard", "🎹", "#607D8B"],
      ["S", "Steel Drum", "🥁", "#00BCD4"], ["N", "Note", "🎵", "#E91E63"], ["M", "Music Box", "🎶", "#F48FB1"],
    ],
  },
  "fairy-tales": {
    name: "Fairy Tales",
    videosCount: 30,
    gradients: [
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#FFB300", "#FFF3E0"], "#FF6F00"],
    ],
    words: [
      ["P", "Princess", "👸", "#E91E63"], ["P", "Prince", "🤴", "#1565C0"], ["K", "King", "👑", "#FFB300"],
      ["Q", "Queen", "👑", "#7B1FA2"], ["D", "Dragon", "🐉", "#D32F2F"], ["U", "Unicorn", "🦄", "#E91E63"],
      ["F", "Fairy", "🧚", "#F48FB1"], ["W", "Wizard", "🧙", "#4527A0"], ["C", "Castle", "🏰", "#795548"],
      ["K", "Knight", "⚔️", "#607D8B"], ["M", "Magic Wand", "🪄", "#FFB300"], ["T", "Treasure", "💎", "#FFD54F"],
      ["C", "Crown", "👑", "#FFB300"], ["G", "Giant", "🏔️", "#795548"], ["E", "Elf", "🧝", "#4CAF50"],
      ["M", "Mermaid", "🧜", "#00BCD4"], ["P", "Pirate", "🏴‍☠️", "#212121"], ["G", "Genie", "🧞", "#7B1FA2"],
      ["B", "Beauty", "🌹", "#D32F2F"], ["B", "Beast", "🦁", "#5D4037"], ["C", "Cinderella", "👗", "#90CAF9"],
      ["R", "Rapunzel", "👸", "#FDD835"], ["S", "Sleeping Beauty", "😴", "#E91E63"], ["H", "Hansel", "🍞", "#795548"],
      ["G", "Gretel", "🍬", "#E91E63"], ["J", "Jack", "🫘", "#4CAF50"], ["B", "Beanstalk", "🌱", "#2E7D32"],
      ["W", "Wolf", "🐺", "#607D8B"], ["S", "Sword", "⚔️", "#455A64"], ["S", "Shield", "🛡️", "#1565C0"],
      ["P", "Potion", "🧪", "#7B1FA2"], ["S", "Spell", "✨", "#FFB300"], ["T", "Throne", "🪑", "#FFD54F"],
      ["D", "Dwarf", "⛏️", "#795548"], ["T", "Troll", "👹", "#4CAF50"], ["W", "Witch", "🧙‍♀️", "#1B5E20"],
      ["M", "Magic Mirror", "🪞", "#9C27B0"], ["C", "Chariot", "🐴", "#FFB300"], ["P", "Pegasus", "🐴", "#90CAF9"],
      ["F", "Frog Prince", "🐸", "#4CAF50"], ["G", "Glass Slipper", "👠", "#B0BEC5"], ["R", "Rose", "🌹", "#C62828"],
      ["S", "Stardust", "✨", "#FDD835"], ["L", "Lamp", "🪔", "#FFB300"], ["E", "Enchanted", "🌟", "#7B1FA2"],
    ],
  },
  "science-words": {
    name: "Science Words",
    videosCount: 30,
    gradients: [
      [["#00838F", "#80DEEA"], "#006064"],
      [["#4527A0", "#B39DDB"], "#311B92"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
    ],
    words: [
      ["A", "Atom", "⚛️", "#0288D1"], ["M", "Molecule", "🧬", "#4CAF50"], ["E", "Energy", "⚡", "#FDD835"],
      ["G", "Gravity", "🍎", "#D32F2F"], ["M", "Magnet", "🧲", "#D32F2F"], ["L", "Light", "💡", "#FDD835"],
      ["S", "Sound", "🔊", "#1565C0"], ["R", "Robot", "🤖", "#607D8B"], ["T", "Telescope", "🔭", "#311B92"],
      ["M", "Microscope", "🔬", "#00838F"], ["B", "Beaker", "🧪", "#4CAF50"], ["T", "Test Tube", "🧪", "#7B1FA2"],
      ["D", "DNA", "🧬", "#0288D1"], ["C", "Cell", "🔬", "#2E7D32"], ["P", "Planet", "🪐", "#FF8F00"],
      ["S", "Star", "⭐", "#FDD835"], ["G", "Galaxy", "🌌", "#311B92"], ["C", "Comet", "☄️", "#0288D1"],
      ["V", "Volcano", "🌋", "#D32F2F"], ["F", "Fossil", "🦴", "#795548"], ["E", "Earthquake", "🌍", "#5D4037"],
      ["R", "Rainbow", "🌈", "#E91E63"], ["C", "Crystal", "💎", "#00BCD4"], ["E", "Electricity", "⚡", "#FBC02D"],
      ["B", "Battery", "🔋", "#4CAF50"], ["O", "Oxygen", "💨", "#90CAF9"], ["H", "Hydrogen", "💧", "#0288D1"],
      ["N", "Newton", "🍎", "#2E7D32"], ["E", "Einstein", "🧠", "#607D8B"], ["L", "Laboratory", "🔬", "#00838F"],
      ["P", "Prism", "🔺", "#7B1FA2"], ["W", "Wave", "🌊", "#0288D1"], ["F", "Force", "💪", "#FF6F00"],
      ["S", "Speed", "🏎️", "#D32F2F"], ["T", "Temperature", "🌡️", "#FF5722"], ["P", "Pressure", "⬇️", "#455A64"],
      ["C", "Chemical", "🧪", "#4CAF50"], ["R", "Reaction", "💥", "#FF5722"], ["G", "Gene", "🧬", "#7B1FA2"],
      ["E", "Evolution", "🐒", "#795548"], ["S", "Solar", "☀️", "#FFB300"], ["N", "Nucleus", "⚛️", "#D32F2F"],
      ["P", "Photon", "💡", "#FDD835"], ["Q", "Quantum", "⚛️", "#311B92"], ["I", "Invention", "💡", "#FF8F00"],
    ],
  },
  "winter-words": {
    name: "Winter Words",
    videosCount: 30,
    gradients: [
      [["#0288D1", "#B3E5FC"], "#01579B"],
      [["#546E7A", "#CFD8DC"], "#37474F"],
      [["#4527A0", "#B39DDB"], "#311B92"],
    ],
    words: [
      ["S", "Snow", "❄️", "#90CAF9"], ["I", "Ice", "🧊", "#B0BEC5"], ["S", "Snowman", "⛄", "#F5F5F5"],
      ["S", "Snowflake", "❄️", "#E3F2FD"], ["S", "Sled", "🛷", "#D32F2F"], ["S", "Skiing", "⛷️", "#0288D1"],
      ["S", "Skating", "⛸️", "#00BCD4"], ["M", "Mittens", "🧤", "#E91E63"], ["S", "Scarf", "🧣", "#D32F2F"],
      ["H", "Hot Cocoa", "☕", "#5D4037"], ["F", "Fireplace", "🔥", "#FF5722"], ["B", "Blanket", "🧣", "#7B1FA2"],
      ["I", "Icicle", "🧊", "#B0BEC5"], ["W", "Winter", "❄️", "#0288D1"], ["F", "Frost", "🥶", "#90CAF9"],
      ["C", "Cold", "🥶", "#0D47A1"], ["B", "Boots", "👢", "#5D4037"], ["J", "Jacket", "🧥", "#37474F"],
      ["H", "Hat", "🧢", "#D32F2F"], ["G", "Gloves", "🧤", "#1565C0"], ["E", "Earmuffs", "🎧", "#E91E63"],
      ["C", "Chimney", "🏠", "#795548"], ["H", "Hibernate", "🐻", "#5D4037"], ["P", "Pine Tree", "🌲", "#1B5E20"],
      ["C", "Cabin", "🏠", "#8D6E63"], ["S", "Snowball", "⚪", "#F5F5F5"], ["S", "Snow Angel", "👼", "#E3F2FD"],
      ["T", "Toboggan", "🛷", "#FF6F00"], ["I", "Igloo", "🏠", "#B0BEC5"], ["F", "Frozen", "🧊", "#90CAF9"],
      ["B", "Blizzard", "🌨️", "#607D8B"], ["S", "Snowplow", "🚜", "#FDD835"], ["W", "Wool", "🧶", "#795548"],
      ["H", "Heater", "🔥", "#FF5722"], ["T", "Thermometer", "🌡️", "#D32F2F"], ["C", "Cozy", "🛋️", "#FF8F00"],
      ["R", "Reindeer", "🦌", "#795548"], ["S", "Soup", "🍲", "#FF6F00"], ["P", "Penguin", "🐧", "#212121"],
      ["N", "North Pole", "🧭", "#0D47A1"], ["A", "Aurora", "🌌", "#00E676"], ["F", "Flurry", "🌨️", "#B0BEC5"],
      ["M", "Marshmallow", "☁️", "#F5F5F5"], ["S", "Snowshoe", "🥾", "#5D4037"], ["W", "Windchill", "💨", "#607D8B"],
    ],
  },
  "summer-words": {
    name: "Summer Words",
    videosCount: 30,
    gradients: [
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#00BCD4", "#B2EBF2"], "#006064"],
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
    ],
    words: [
      ["S", "Sun", "☀️", "#FFB300"], ["B", "Beach", "🏖️", "#FFB74D"], ["S", "Swim", "🏊", "#0288D1"],
      ["I", "Ice Cream", "🍦", "#F48FB1"], ["S", "Sunglasses", "🕶️", "#212121"], ["S", "Sunscreen", "🧴", "#FDD835"],
      ["S", "Sandcastle", "🏰", "#FFB300"], ["F", "Flip Flops", "🩴", "#FF6F00"], ["W", "Watermelon", "🍉", "#4CAF50"],
      ["P", "Pool", "🏊", "#00BCD4"], ["S", "Surfing", "🏄", "#0288D1"], ["L", "Lemonade", "🍋", "#FDD835"],
      ["P", "Popsicle", "🍧", "#E91E63"], ["B", "Barbecue", "🍖", "#D32F2F"], ["C", "Camping", "🏕️", "#2E7D32"],
      ["H", "Hammock", "🏖️", "#FF8F00"], ["K", "Kayak", "🛶", "#FF6F00"], ["F", "Fireworks", "🎆", "#7B1FA2"],
      ["V", "Vacation", "✈️", "#0288D1"], ["S", "Seashell", "🐚", "#FFB74D"], ["D", "Diving", "🤿", "#0288D1"],
      ["S", "Starfish", "⭐", "#FFB300"], ["J", "Jet Ski", "🚤", "#00BCD4"], ["T", "Tan", "☀️", "#FFB74D"],
      ["P", "Picnic", "🧺", "#4CAF50"], ["W", "Wave", "🌊", "#0288D1"], ["C", "Coconut", "🥥", "#5D4037"],
      ["S", "Snorkel", "🤿", "#00BCD4"], ["M", "Mango", "🥭", "#FF8F00"], ["T", "Tropical", "🌴", "#4CAF50"],
      ["H", "Heat", "🌡️", "#FF5722"], ["S", "Shade", "🌳", "#2E7D32"], ["B", "Butterfly", "🦋", "#E91E63"],
      ["F", "Fan", "🌀", "#0288D1"], ["G", "Garden", "🌻", "#4CAF50"], ["R", "Rainbow", "🌈", "#E91E63"],
      ["L", "Lightning Bug", "🐛", "#FDD835"], ["C", "Cricket", "🦗", "#2E7D32"], ["S", "Sprinkler", "💦", "#00BCD4"],
      ["H", "Hike", "🥾", "#795548"], ["P", "Parasol", "☂️", "#E91E63"], ["B", "Boardwalk", "🎡", "#FF8F00"],
      ["O", "Ocean", "🌊", "#0D47A1"], ["T", "Tide Pool", "🦀", "#00838F"], ["S", "Sunset", "🌇", "#FF6F00"],
    ],
  },
  "halloween": {
    name: "Halloween",
    videosCount: 30,
    gradients: [
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#4A148C", "#CE93D8"], "#311B92"],
      [["#212121", "#757575"], "#000000"],
    ],
    words: [
      ["P", "Pumpkin", "🎃", "#FF6F00"], ["G", "Ghost", "👻", "#F5F5F5"], ["W", "Witch", "🧙‍♀️", "#1B5E20"],
      ["V", "Vampire", "🧛", "#D32F2F"], ["Z", "Zombie", "🧟", "#4CAF50"], ["S", "Skeleton", "💀", "#F5F5F5"],
      ["B", "Bat", "🦇", "#212121"], ["S", "Spider", "🕷️", "#37474F"], ["W", "Werewolf", "🐺", "#795548"],
      ["C", "Candy", "🍬", "#D32F2F"], ["M", "Mummy", "🧟", "#FFB74D"], ["F", "Frankenstein", "🧟‍♂️", "#4CAF50"],
      ["C", "Costume", "🎭", "#7B1FA2"], ["T", "Trick", "👻", "#FF6F00"], ["T", "Treat", "🍫", "#795548"],
      ["H", "Haunted House", "🏚️", "#37474F"], ["C", "Cauldron", "🧪", "#2E7D32"], ["B", "Broomstick", "🧹", "#795548"],
      ["O", "Owl", "🦉", "#5D4037"], ["S", "Scarecrow", "🌾", "#FF8F00"], ["M", "Mask", "🎭", "#E91E63"],
      ["C", "Cobweb", "🕸️", "#9E9E9E"], ["J", "Jack-o-Lantern", "🎃", "#FF6F00"], ["P", "Potion", "🧪", "#7B1FA2"],
      ["F", "Full Moon", "🌕", "#FDD835"], ["D", "Dracula", "🧛‍♂️", "#C62828"], ["G", "Goblin", "👺", "#4CAF50"],
      ["C", "Cat", "🐱", "#212121"], ["W", "Wand", "🪄", "#FFB300"], ["L", "Lantern", "🏮", "#FF5722"],
      ["H", "Howl", "🐺", "#607D8B"], ["E", "Eerie", "👁️", "#311B92"], ["N", "Nightmare", "😱", "#4A148C"],
      ["R", "Raven", "🐦‍⬛", "#212121"], ["T", "Tombstone", "🪦", "#607D8B"], ["S", "Spell", "✨", "#7B1FA2"],
      ["C", "Cloak", "🧥", "#212121"], ["F", "Fang", "🦷", "#F5F5F5"], ["G", "Grave", "🪦", "#455A64"],
      ["H", "Horror", "😱", "#C62828"], ["M", "Moonlight", "🌙", "#FDD835"], ["C", "Creepy", "🕷️", "#4A148C"],
      ["W", "Wicked", "🧙", "#1B5E20"], ["S", "Spooky", "👻", "#FF6F00"], ["B", "Bones", "🦴", "#E0E0E0"],
    ],
  },
  "christmas": {
    name: "Christmas",
    videosCount: 30,
    gradients: [
      [["#C62828", "#EF9A9A"], "#B71C1C"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#FFB300", "#FFF3E0"], "#FF6F00"],
    ],
    words: [
      ["S", "Santa", "🎅", "#D32F2F"], ["R", "Reindeer", "🦌", "#795548"], ["S", "Snowman", "⛄", "#F5F5F5"],
      ["C", "Christmas Tree", "🎄", "#2E7D32"], ["S", "Star", "⭐", "#FFD54F"], ["G", "Gift", "🎁", "#D32F2F"],
      ["B", "Bell", "🔔", "#FFB300"], ["C", "Candy Cane", "🍬", "#D32F2F"], ["S", "Stocking", "🧦", "#D32F2F"],
      ["A", "Angel", "👼", "#F5F5F5"], ["E", "Elf", "🧝", "#4CAF50"], ["G", "Gingerbread", "🍪", "#795548"],
      ["W", "Wreath", "🎄", "#2E7D32"], ["S", "Sleigh", "🛷", "#D32F2F"], ["N", "Nutcracker", "🪖", "#C62828"],
      ["R", "Rudolph", "🦌", "#D32F2F"], ["H", "Holly", "🍃", "#2E7D32"], ["J", "Jingle Bells", "🔔", "#FFB300"],
      ["S", "Snow Globe", "🔮", "#90CAF9"], ["C", "Caroling", "🎶", "#4CAF50"], ["M", "Mistletoe", "🌿", "#2E7D32"],
      ["P", "Presents", "🎁", "#FF5722"], ["C", "Chimney", "🏠", "#795548"], ["T", "Tinsel", "✨", "#B0BEC5"],
      ["O", "Ornament", "🎄", "#D32F2F"], ["F", "Fireplace", "🔥", "#FF5722"], ["E", "Eggnog", "🥛", "#FFB300"],
      ["C", "Cookie", "🍪", "#FF8F00"], ["G", "Garland", "🎀", "#2E7D32"], ["R", "Ribbon", "🎀", "#E91E63"],
      ["L", "Lights", "💡", "#FDD835"], ["N", "North Pole", "🧭", "#0D47A1"], ["I", "Ice Skating", "⛸️", "#00BCD4"],
      ["S", "Snowflake", "❄️", "#E3F2FD"], ["P", "Poinsettia", "🌺", "#D32F2F"], ["Y", "Yule Log", "🪵", "#795548"],
      ["C", "Cocoa", "☕", "#5D4037"], ["W", "Winter", "❄️", "#0288D1"], ["T", "Toy Shop", "🏪", "#4CAF50"],
      ["D", "December", "📅", "#D32F2F"], ["F", "Family", "👨‍👩‍👧‍👦", "#FF8F00"], ["H", "Happiness", "😊", "#FFB300"],
      ["J", "Joy", "🎉", "#E91E63"], ["P", "Peace", "☮️", "#0288D1"], ["L", "Love", "❤️", "#D32F2F"],
    ],
  },
  "garden-items": {
    name: "Garden Items",
    videosCount: 30,
    gradients: [
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#F48FB1", "#FCE4EC"], "#AD1457"],
    ],
    words: [
      ["F", "Flower", "🌸", "#E91E63"], ["S", "Seed", "🌱", "#4CAF50"], ["S", "Shovel", "⛏️", "#795548"],
      ["W", "Watering Can", "🚿", "#0288D1"], ["G", "Gloves", "🧤", "#4CAF50"], ["P", "Pot", "🏺", "#BF360C"],
      ["S", "Soil", "🟫", "#5D4037"], ["R", "Rake", "🍂", "#FF8F00"], ["L", "Lawn Mower", "🏗️", "#4CAF50"],
      ["H", "Hose", "🚿", "#0288D1"], ["W", "Wheelbarrow", "🛒", "#FF6F00"], ["S", "Sprinkler", "💦", "#00BCD4"],
      ["F", "Fence", "🏗️", "#795548"], ["B", "Bird Bath", "🐦", "#607D8B"], ["G", "Gnome", "🧙", "#D32F2F"],
      ["S", "Sunflower", "🌻", "#FDD835"], ["R", "Rose", "🌹", "#D32F2F"], ["T", "Tulip", "🌷", "#E91E63"],
      ["D", "Daisy", "🌼", "#FFB300"], ["L", "Lily", "🌸", "#F48FB1"], ["B", "Butterfly", "🦋", "#E91E63"],
      ["L", "Ladybug", "🐞", "#D32F2F"], ["B", "Bee", "🐝", "#FDD835"], ["W", "Worm", "🪱", "#795548"],
      ["C", "Compost", "🌿", "#5D4037"], ["M", "Mulch", "🍂", "#795548"], ["T", "Trellis", "🏗️", "#4CAF50"],
      ["G", "Greenhouse", "🏠", "#4CAF50"], ["P", "Pruner", "✂️", "#2E7D32"], ["L", "Landscape", "🌿", "#1B5E20"],
      ["P", "Planter", "🪴", "#8D6E63"], ["A", "Arbor", "🏗️", "#5D4037"], ["V", "Vine", "🌿", "#2E7D32"],
      ["H", "Herb", "🌿", "#388E3C"], ["C", "Caterpillar", "🐛", "#4CAF50"], ["D", "Dragonfly", "🪰", "#00BCD4"],
      ["F", "Frog", "🐸", "#2E7D32"], ["S", "Stepping Stone", "🪨", "#607D8B"], ["B", "Birdseed", "🐦", "#FFB300"],
      ["G", "Gazebo", "🏠", "#795548"], ["N", "Nest", "🪹", "#8D6E63"], ["F", "Fountain", "⛲", "#0288D1"],
      ["T", "Topiary", "🌳", "#2E7D32"], ["P", "Pebble", "🪨", "#9E9E9E"], ["C", "Cactus", "🌵", "#4CAF50"],
    ],
  },
  "bath-time": {
    name: "Bath Time",
    videosCount: 30,
    gradients: [
      [["#0288D1", "#B3E5FC"], "#01579B"],
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#FFB300", "#FFF3E0"], "#FF6F00"],
    ],
    words: [
      ["B", "Bathtub", "🛁", "#0288D1"], ["S", "Soap", "🧼", "#F48FB1"], ["S", "Shampoo", "🧴", "#7B1FA2"],
      ["T", "Towel", "🧻", "#FF8F00"], ["B", "Bubbles", "🫧", "#90CAF9"], ["D", "Duck", "🦆", "#FDD835"],
      ["W", "Water", "💧", "#0288D1"], ["S", "Sponge", "🧽", "#FDD835"], ["B", "Brush", "🪥", "#4CAF50"],
      ["T", "Toothbrush", "🪥", "#1565C0"], ["T", "Toothpaste", "🧴", "#F5F5F5"], ["M", "Mirror", "🪞", "#B0BEC5"],
      ["C", "Comb", "🪮", "#212121"], ["H", "Hair Dryer", "💨", "#E91E63"], ["L", "Lotion", "🧴", "#FFB74D"],
      ["S", "Shower", "🚿", "#0288D1"], ["F", "Faucet", "🚰", "#9E9E9E"], ["S", "Sink", "🚰", "#B0BEC5"],
      ["S", "Slippers", "🩴", "#E91E63"], ["R", "Robe", "🧥", "#F5F5F5"], ["C", "Conditioner", "🧴", "#4CAF50"],
      ["N", "Nail Clipper", "✂️", "#607D8B"], ["C", "Cotton Ball", "☁️", "#F5F5F5"], ["B", "Bath Bomb", "💣", "#E91E63"],
      ["L", "Lavender", "💜", "#7B1FA2"], ["S", "Steam", "♨️", "#B0BEC5"], ["T", "Thermometer", "🌡️", "#D32F2F"],
      ["W", "Washcloth", "🧻", "#00BCD4"], ["S", "Scale", "⚖️", "#607D8B"], ["P", "Perfume", "🌸", "#E91E63"],
      ["D", "Deodorant", "🧴", "#0288D1"], ["F", "Floss", "🧵", "#00BCD4"], ["M", "Mouthwash", "🧴", "#4CAF50"],
      ["H", "Hand Soap", "🧼", "#FF8F00"], ["R", "Razor", "🪒", "#607D8B"], ["S", "Sunscreen", "🧴", "#FDD835"],
      ["B", "Body Wash", "🧴", "#7B1FA2"], ["T", "Tissue", "🧻", "#F5F5F5"], ["Q", "Q-tip", "🪥", "#F5F5F5"],
      ["P", "Plunger", "🪠", "#D32F2F"], ["S", "Scrub", "🧽", "#00BCD4"], ["B", "Bath Mat", "🟫", "#795548"],
      ["H", "Hamper", "🧺", "#8D6E63"], ["C", "Candle", "🕯️", "#FFB300"], ["M", "Music", "🎵", "#E91E63"],
    ],
  },
  "breakfast-foods": {
    name: "Breakfast Foods",
    videosCount: 30,
    gradients: [
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#F48FB1", "#FCE4EC"], "#AD1457"],
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
    ],
    words: [
      ["P", "Pancake", "🥞", "#FFB74D"], ["W", "Waffle", "🧇", "#FF8F00"], ["E", "Egg", "🥚", "#FDD835"],
      ["T", "Toast", "🍞", "#8D6E63"], ["C", "Cereal", "🥣", "#FF8F00"], ["M", "Milk", "🥛", "#F5F5F5"],
      ["J", "Juice", "🧃", "#FF6F00"], ["B", "Bacon", "🥓", "#D32F2F"], ["S", "Sausage", "🌭", "#795548"],
      ["O", "Oatmeal", "🥣", "#A1887F"], ["F", "French Toast", "🍞", "#FFB300"], ["B", "Banana", "🍌", "#FDD835"],
      ["A", "Apple", "🍎", "#D32F2F"], ["G", "Grapes", "🍇", "#7B1FA2"], ["S", "Strawberry", "🍓", "#E91E63"],
      ["B", "Blueberry", "🫐", "#1565C0"], ["Y", "Yogurt", "🥛", "#F48FB1"], ["H", "Honey", "🍯", "#FFB300"],
      ["J", "Jam", "🍓", "#D32F2F"], ["B", "Butter", "🧈", "#FFD54F"], ["C", "Croissant", "🥐", "#FFB74D"],
      ["D", "Donut", "🍩", "#E91E63"], ["M", "Muffin", "🧁", "#795548"], ["B", "Bagel", "🥯", "#A1887F"],
      ["G", "Granola", "🥣", "#8D6E63"], ["S", "Smoothie", "🥤", "#4CAF50"], ["C", "Coffee", "☕", "#5D4037"],
      ["T", "Tea", "🍵", "#4CAF50"], ["O", "Omelet", "🍳", "#FDD835"], ["H", "Hash Brown", "🥔", "#FFB300"],
      ["A", "Avocado Toast", "🥑", "#4CAF50"], ["C", "Cheese", "🧀", "#FDD835"], ["F", "Fruit Salad", "🍎", "#E91E63"],
      ["P", "Porridge", "🥣", "#A1887F"], ["R", "Raisin", "🍇", "#5D4037"], ["N", "Nut", "🥜", "#8D6E63"],
      ["S", "Scone", "🧁", "#FFB74D"], ["C", "Cornflakes", "🌽", "#FDD835"], ["M", "Maple Syrup", "🍁", "#FF8F00"],
      ["P", "Pastry", "🥐", "#A1887F"], ["W", "Wrap", "🌯", "#4CAF50"], ["C", "Cocoa", "☕", "#5D4037"],
      ["L", "Latte", "☕", "#A1887F"], ["P", "Peanut Butter", "🥜", "#FF8F00"], ["F", "Fried Egg", "🍳", "#FDD835"],
    ],
  },
  "snacks": {
    name: "Snacks",
    videosCount: 30,
    gradients: [
      [["#FF5722", "#FFAB91"], "#BF360C"],
      [["#FDD835", "#FFF9C4"], "#F9A825"],
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
    ],
    words: [
      ["C", "Chips", "🍟", "#FFB300"], ["P", "Popcorn", "🍿", "#FDD835"], ["P", "Pretzel", "🥨", "#795548"],
      ["N", "Nachos", "🧀", "#FF8F00"], ["C", "Crackers", "🍘", "#FFB74D"], ["C", "Cookies", "🍪", "#795548"],
      ["G", "Granola Bar", "🥜", "#8D6E63"], ["T", "Trail Mix", "🥜", "#5D4037"], ["F", "Fruit Snack", "🍇", "#7B1FA2"],
      ["C", "Cheese Stick", "🧀", "#FDD835"], ["J", "Jerky", "🥩", "#795548"], ["R", "Rice Cake", "🍘", "#F5F5F5"],
      ["P", "Peanuts", "🥜", "#FF8F00"], ["A", "Almonds", "🥜", "#8D6E63"], ["C", "Cashews", "🥜", "#FFB300"],
      ["W", "Walnuts", "🥜", "#5D4037"], ["S", "Sunflower Seeds", "🌻", "#FDD835"], ["R", "Raisins", "🍇", "#5D4037"],
      ["M", "Muffin", "🧁", "#FF8F00"], ["B", "Brownie", "🍫", "#3E2723"], ["C", "Cupcake", "🧁", "#E91E63"],
      ["D", "Donut", "🍩", "#FF6F00"], ["I", "Ice Cream", "🍦", "#F48FB1"], ["Y", "Yogurt Cup", "🥛", "#F48FB1"],
      ["H", "Hummus", "🥙", "#FFB300"], ["C", "Celery Sticks", "🥬", "#4CAF50"], ["C", "Carrot Sticks", "🥕", "#FF6F00"],
      ["A", "Apple Slices", "🍎", "#D32F2F"], ["B", "Banana", "🍌", "#FDD835"], ["G", "Grapes", "🍇", "#7B1FA2"],
      ["E", "Energy Bar", "🍫", "#FF8F00"], ["S", "S'mores", "🍫", "#5D4037"], ["O", "Onion Rings", "🧅", "#FFB300"],
      ["F", "French Fries", "🍟", "#FDD835"], ["T", "Taco", "🌮", "#FF6F00"], ["P", "Pizza Roll", "🍕", "#D32F2F"],
      ["M", "Mini Muffin", "🧁", "#795548"], ["C", "Corn Dog", "🌭", "#FFB300"], ["S", "Samosa", "🥟", "#FF8F00"],
      ["W", "Wafer", "🍪", "#FFB74D"], ["B", "Biscuit", "🍪", "#8D6E63"], ["C", "Churro", "🥖", "#FF8F00"],
      ["G", "Goldfish", "🐟", "#FF6F00"], ["L", "Licorice", "🍬", "#212121"], ["P", "Pistachio", "🥜", "#4CAF50"],
    ],
  },
  "drinks": {
    name: "Drinks",
    videosCount: 30,
    gradients: [
      [["#0288D1", "#B3E5FC"], "#01579B"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#E91E63", "#F8BBD0"], "#880E4F"],
    ],
    words: [
      ["W", "Water", "💧", "#0288D1"], ["J", "Juice", "🧃", "#FF6F00"], ["M", "Milk", "🥛", "#F5F5F5"],
      ["L", "Lemonade", "🍋", "#FDD835"], ["S", "Smoothie", "🥤", "#4CAF50"], ["H", "Hot Chocolate", "☕", "#5D4037"],
      ["T", "Tea", "🍵", "#4CAF50"], ["C", "Coffee", "☕", "#795548"], ["S", "Soda", "🥤", "#D32F2F"],
      ["M", "Milkshake", "🥤", "#E91E63"], ["O", "Orange Juice", "🍊", "#FF6F00"], ["A", "Apple Juice", "🍎", "#D32F2F"],
      ["G", "Grape Juice", "🍇", "#7B1FA2"], ["C", "Coconut Water", "🥥", "#4E342E"], ["L", "Lassi", "🥛", "#FFB300"],
      ["L", "Latte", "☕", "#A1887F"], ["C", "Cappuccino", "☕", "#795548"], ["E", "Espresso", "☕", "#3E2723"],
      ["I", "Iced Tea", "🧊", "#00BCD4"], ["M", "Mocha", "☕", "#5D4037"], ["S", "Sparkling Water", "🫧", "#90CAF9"],
      ["C", "Cranberry Juice", "🍒", "#D32F2F"], ["P", "Punch", "🍹", "#E91E63"], ["L", "Lime Soda", "🍋", "#4CAF50"],
      ["M", "Mango Lassi", "🥭", "#FF8F00"], ["S", "Strawberry Milk", "🍓", "#E91E63"], ["B", "Banana Shake", "🍌", "#FDD835"],
      ["C", "Chocolate Milk", "🍫", "#5D4037"], ["H", "Herbal Tea", "🌿", "#4CAF50"], ["G", "Ginger Ale", "🫚", "#FDD835"],
      ["R", "Root Beer", "🍺", "#5D4037"], ["T", "Tropical Punch", "🍹", "#FF5722"], ["K", "Kefir", "🥛", "#F5F5F5"],
      ["P", "Peach Nectar", "🍑", "#FFB74D"], ["V", "Vanilla Shake", "🍦", "#FFB300"], ["C", "Cherry Soda", "🍒", "#D32F2F"],
      ["B", "Bubble Tea", "🧋", "#795548"], ["F", "Fruit Punch", "🍹", "#FF6F00"], ["W", "Watermelon Juice", "🍉", "#4CAF50"],
      ["A", "Almond Milk", "🥛", "#A1887F"], ["S", "Soy Milk", "🥛", "#FFB74D"], ["O", "Oat Milk", "🥛", "#D7CCC8"],
      ["P", "Pineapple Juice", "🍍", "#FDD835"], ["C", "Chai", "☕", "#FF8F00"], ["Y", "Yogurt Drink", "🥛", "#F48FB1"],
    ],
  },
  "candy": {
    name: "Candy & Sweets",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
    ],
    words: [
      ["L", "Lollipop", "🍭", "#4CAF50"], ["G", "Gummy Bear", "🐻", "#FF6F00"], ["C", "Chocolate", "🍫", "#5D4037"],
      ["C", "Candy Cane", "🍬", "#D32F2F"], ["J", "Jelly Bean", "🫘", "#E91E63"], ["C", "Cotton Candy", "🍡", "#F48FB1"],
      ["T", "Toffee", "🍬", "#BF360C"], ["C", "Caramel", "🍯", "#FF8F00"], ["M", "Marshmallow", "☁️", "#F5F5F5"],
      ["F", "Fudge", "🍫", "#3E2723"], ["G", "Gumdrop", "🟢", "#4CAF50"], ["P", "Peppermint", "🍬", "#D32F2F"],
      ["B", "Butterscotch", "🍬", "#FFB300"], ["N", "Nougat", "🍫", "#A1887F"], ["S", "Sour Candy", "🍋", "#FDD835"],
      ["T", "Taffy", "🍬", "#E91E63"], ["H", "Hard Candy", "🍬", "#00BCD4"], ["L", "Licorice", "🍬", "#212121"],
      ["R", "Rock Candy", "💎", "#90CAF9"], ["C", "Chewing Gum", "🫧", "#F48FB1"], ["S", "Skittles", "🌈", "#D32F2F"],
      ["J", "Jawbreaker", "🔵", "#1565C0"], ["G", "Gumball", "⚫", "#E91E63"], ["W", "Wafer", "🍪", "#FFB74D"],
      ["M", "Mints", "🍬", "#4CAF50"], ["C", "Candy Bar", "🍫", "#795548"], ["P", "Praline", "🥜", "#8D6E63"],
      ["T", "Truffle", "🍫", "#3E2723"], ["S", "Sugar Plum", "🟣", "#7B1FA2"], ["B", "Bonbon", "🍬", "#E91E63"],
      ["D", "Dark Chocolate", "🍫", "#212121"], ["W", "White Chocolate", "🍫", "#F5F5F5"], ["M", "Milk Chocolate", "🍫", "#795548"],
      ["H", "Honey Drop", "🍯", "#FFB300"], ["A", "Almond Joy", "🥜", "#5D4037"], ["C", "Candy Corn", "🌽", "#FF8F00"],
      ["P", "Pop Rocks", "💥", "#D32F2F"], ["Z", "Zotz", "🍬", "#7B1FA2"], ["S", "Smarties", "🍬", "#FF6F00"],
      ["R", "Red Hots", "🔴", "#C62828"], ["K", "Kit Kat", "🍫", "#D32F2F"], ["M", "M&Ms", "🍬", "#FDD835"],
      ["T", "Twizzler", "🍬", "#D32F2F"], ["S", "Starburst", "⭐", "#FF6F00"], ["J", "Jolly Rancher", "🍬", "#4CAF50"],
    ],
  },
  "zoo-animals": {
    name: "Zoo Animals",
    videosCount: 30,
    gradients: [
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#0288D1", "#B3E5FC"], "#01579B"],
    ],
    words: [
      ["L", "Lion", "🦁", "#FF8F00"], ["E", "Elephant", "🐘", "#607D8B"], ["G", "Giraffe", "🦒", "#FFB300"],
      ["Z", "Zebra", "🦓", "#212121"], ["M", "Monkey", "🐒", "#795548"], ["P", "Panda", "🐼", "#212121"],
      ["H", "Hippo", "🦛", "#607D8B"], ["R", "Rhino", "🦏", "#9E9E9E"], ["T", "Tiger", "🐯", "#FF6F00"],
      ["B", "Bear", "🐻", "#5D4037"], ["K", "Kangaroo", "🦘", "#FF8F00"], ["F", "Flamingo", "🦩", "#E91E63"],
      ["P", "Penguin", "🐧", "#212121"], ["C", "Crocodile", "🐊", "#33691E"], ["O", "Ostrich", "🐦", "#607D8B"],
      ["G", "Gorilla", "🦍", "#5D4037"], ["C", "Cheetah", "🐆", "#FFB300"], ["S", "Snake", "🐍", "#2E7D32"],
      ["P", "Peacock", "🦚", "#0277BD"], ["W", "Wolf", "🐺", "#607D8B"], ["L", "Leopard", "🐆", "#8D6E63"],
      ["T", "Tortoise", "🐢", "#4E342E"], ["A", "Alligator", "🐊", "#33691E"], ["C", "Camel", "🐫", "#FFB74D"],
      ["O", "Otter", "🦦", "#795548"], ["S", "Seal", "🦭", "#607D8B"], ["E", "Eagle", "🦅", "#3E2723"],
      ["I", "Iguana", "🦎", "#4CAF50"], ["J", "Jaguar", "🐆", "#FF8F00"], ["V", "Vulture", "🦅", "#37474F"],
      ["Y", "Yak", "🐂", "#3E2723"], ["D", "Deer", "🦌", "#8D6E63"], ["F", "Fox", "🦊", "#FF6F00"],
      ["L", "Llama", "🦙", "#A1887F"], ["C", "Cobra", "🐍", "#1B5E20"], ["B", "Bison", "🐂", "#5D4037"],
      ["M", "Meerkat", "🐿️", "#FFB74D"], ["W", "Warthog", "🐗", "#795548"], ["S", "Sloth", "🦥", "#8D6E63"],
      ["T", "Tapir", "🐽", "#37474F"], ["H", "Hyena", "🐺", "#A1887F"], ["P", "Porcupine", "🦔", "#5D4037"],
      ["R", "Red Panda", "🐼", "#FF5722"], ["N", "Newt", "🦎", "#FF6F00"], ["A", "Antelope", "🦌", "#8D6E63"],
    ],
  },
  "underwater": {
    name: "Underwater World",
    videosCount: 30,
    gradients: [
      [["#0277BD", "#4FC3F7"], "#01579B"],
      [["#00695C", "#80CBC4"], "#004D40"],
      [["#1A237E", "#7986CB"], "#0D1257"],
    ],
    words: [
      ["D", "Dolphin", "🐬", "#0288D1"], ["W", "Whale", "🐋", "#0D47A1"], ["S", "Shark", "🦈", "#455A64"],
      ["O", "Octopus", "🐙", "#7B1FA2"], ["J", "Jellyfish", "🪼", "#F48FB1"], ["T", "Turtle", "🐢", "#2E7D32"],
      ["S", "Seahorse", "🐟", "#FF6F00"], ["C", "Clownfish", "🐠", "#FF8F00"], ["S", "Starfish", "⭐", "#FFB300"],
      ["C", "Crab", "🦀", "#D32F2F"], ["L", "Lobster", "🦞", "#C62828"], ["S", "Squid", "🦑", "#E91E63"],
      ["R", "Ray", "🐟", "#607D8B"], ["E", "Eel", "🐍", "#37474F"], ["P", "Pufferfish", "🐡", "#FBC02D"],
      ["C", "Coral", "🪸", "#FF6F00"], ["A", "Anemone", "🌺", "#E91E63"], ["K", "Kelp", "🌿", "#2E7D32"],
      ["S", "Shrimp", "🦐", "#FF6F00"], ["N", "Narwhal", "🦄", "#90CAF9"], ["S", "Swordfish", "🐟", "#0277BD"],
      ["M", "Manatee", "🐋", "#607D8B"], ["O", "Orca", "🐋", "#212121"], ["H", "Hammerhead", "🦈", "#455A64"],
      ["M", "Manta Ray", "🐟", "#37474F"], ["B", "Blue Whale", "🐋", "#0D47A1"], ["S", "Sea Urchin", "🦔", "#37474F"],
      ["C", "Clam", "🐚", "#9E9E9E"], ["O", "Oyster", "🦪", "#BDBDBD"], ["P", "Pearl", "⚪", "#F5F5F5"],
      ["S", "Sea Lion", "🦭", "#795548"], ["A", "Angelfish", "🐠", "#FFB300"], ["B", "Barracuda", "🐟", "#455A64"],
      ["G", "Grouper", "🐟", "#5D4037"], ["T", "Triggerfish", "🐠", "#FF6F00"], ["W", "Whale Shark", "🦈", "#0D47A1"],
      ["D", "Dugong", "🐋", "#607D8B"], ["F", "Flounder", "🐟", "#A1887F"], ["S", "Stingray", "🐟", "#607D8B"],
      ["M", "Moray Eel", "🐍", "#2E7D32"], ["P", "Plankton", "🦠", "#4CAF50"], ["S", "Sea Cucumber", "🥒", "#5D4037"],
      ["H", "Horseshoe Crab", "🦀", "#795548"], ["L", "Lionfish", "🐟", "#D32F2F"], ["T", "Tuna", "🐟", "#0288D1"],
    ],
  },
  "rainforest": {
    name: "Rainforest",
    videosCount: 30,
    gradients: [
      [["#1B5E20", "#A5D6A7"], "#0D3B0D"],
      [["#33691E", "#AED581"], "#1B5E20"],
      [["#004D40", "#80CBC4"], "#00251A"],
    ],
    words: [
      ["T", "Toucan", "🦜", "#FF8F00"], ["J", "Jaguar", "🐆", "#FFB300"], ["G", "Gorilla", "🦍", "#5D4037"],
      ["P", "Parrot", "🦜", "#4CAF50"], ["S", "Sloth", "🦥", "#8D6E63"], ["M", "Monkey", "🐒", "#795548"],
      ["B", "Butterfly", "🦋", "#E91E63"], ["F", "Frog", "🐸", "#2E7D32"], ["A", "Anaconda", "🐍", "#1B5E20"],
      ["C", "Chameleon", "🦎", "#4CAF50"], ["O", "Orangutan", "🦧", "#FF6F00"], ["C", "Cocoa Tree", "🌳", "#5D4037"],
      ["B", "Bamboo", "🎋", "#2E7D32"], ["V", "Vine", "🌿", "#1B5E20"], ["R", "River", "🌊", "#0288D1"],
      ["W", "Waterfall", "💧", "#0288D1"], ["O", "Orchid", "🌺", "#E91E63"], ["F", "Fern", "🌿", "#2E7D32"],
      ["M", "Moss", "🌿", "#1B5E20"], ["T", "Tree Frog", "🐸", "#4CAF50"], ["I", "Iguana", "🦎", "#4CAF50"],
      ["P", "Piranha", "🐟", "#D32F2F"], ["C", "Caiman", "🐊", "#33691E"], ["M", "Macaw", "🦜", "#D32F2F"],
      ["T", "Tarantula", "🕷️", "#5D4037"], ["A", "Ant Eater", "🐜", "#607D8B"], ["H", "Howler Monkey", "🐒", "#3E2723"],
      ["K", "Kapok Tree", "🌳", "#1B5E20"], ["L", "Leaf Cutter Ant", "🐜", "#4CAF50"], ["B", "Bromeliad", "🌺", "#E91E63"],
      ["C", "Canopy", "🌳", "#33691E"], ["S", "Spider Monkey", "🐒", "#3E2723"], ["E", "Emerald Boa", "🐍", "#2E7D32"],
      ["R", "Rubber Tree", "🌳", "#5D4037"], ["T", "Tapir", "🐽", "#37474F"], ["H", "Hummingbird", "🐦", "#4CAF50"],
      ["P", "Poison Dart Frog", "🐸", "#FDD835"], ["D", "Dragonfly", "🪰", "#00BCD4"], ["N", "Nutmeg Tree", "🌳", "#8D6E63"],
      ["L", "Lemur", "🐒", "#607D8B"], ["C", "Capybara", "🐹", "#8D6E63"], ["F", "Fig Tree", "🌳", "#4CAF50"],
      ["S", "Strangler Fig", "🌳", "#33691E"], ["O", "Ocelot", "🐱", "#FFB300"], ["M", "Mandrill", "🐒", "#1565C0"],
    ],
  },
  "transportation": {
    name: "Transportation",
    videosCount: 30,
    gradients: [
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
    ],
    words: [
      ["A", "Airplane", "✈️", "#0288D1"], ["T", "Train", "🚂", "#5D4037"], ["B", "Bus", "🚌", "#FDD835"],
      ["C", "Car", "🚗", "#D32F2F"], ["B", "Bicycle", "🚲", "#4CAF50"], ["S", "Ship", "🚢", "#0D47A1"],
      ["H", "Helicopter", "🚁", "#2E7D32"], ["R", "Rocket", "🚀", "#FF5722"], ["S", "Submarine", "🚇", "#37474F"],
      ["M", "Motorcycle", "🏍️", "#212121"], ["T", "Taxi", "🚕", "#FDD835"], ["T", "Tram", "🚃", "#D32F2F"],
      ["F", "Ferry", "⛴️", "#0288D1"], ["C", "Cable Car", "🚡", "#D32F2F"], ["M", "Metro", "🚇", "#455A64"],
      ["R", "Rickshaw", "🛺", "#4CAF50"], ["S", "Sailboat", "⛵", "#1565C0"], ["C", "Canoe", "🛶", "#5D4037"],
      ["S", "Scooter", "🛴", "#00BCD4"], ["S", "Skateboard", "🛹", "#FF6F00"], ["W", "Wagon", "🚗", "#795548"],
      ["J", "Jet", "✈️", "#455A64"], ["G", "Glider", "🪂", "#00BCD4"], ["H", "Hot Air Balloon", "🎈", "#FF5722"],
      ["T", "Truck", "🚛", "#FF6F00"], ["V", "Van", "🚐", "#FF8F00"], ["A", "Ambulance", "🚑", "#F5F5F5"],
      ["F", "Fire Engine", "🚒", "#D32F2F"], ["P", "Police Car", "🚓", "#1565C0"], ["D", "Dump Truck", "🚚", "#FF8F00"],
      ["B", "Bulldozer", "🚜", "#FF6F00"], ["C", "Crane", "🏗️", "#FFB300"], ["E", "Excavator", "🏗️", "#FDD835"],
      ["L", "Limousine", "🚙", "#212121"], ["K", "Kayak", "🛶", "#FF6F00"], ["S", "Segway", "🛴", "#607D8B"],
      ["Z", "Zeppelin", "🎈", "#607D8B"], ["U", "Unicycle", "🚲", "#D32F2F"], ["P", "Paraglider", "🪂", "#4CAF50"],
      ["H", "Hovercraft", "🚤", "#0288D1"], ["M", "Monorail", "🚝", "#4527A0"], ["S", "Speedboat", "🚤", "#1565C0"],
      ["T", "Trolley", "🚃", "#D32F2F"], ["G", "Go-Kart", "🏎️", "#D32F2F"], ["D", "Dogsled", "🛷", "#5D4037"],
    ],
  },
  "festivals": {
    name: "World Festivals",
    videosCount: 30,
    gradients: [
      [["#FF5722", "#FFAB91"], "#BF360C"],
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
      [["#FDD835", "#FFF9C4"], "#F9A825"],
    ],
    words: [
      ["D", "Diwali", "🪔", "#FF8F00"], ["C", "Christmas", "🎄", "#2E7D32"], ["E", "Easter", "🥚", "#E91E63"],
      ["H", "Holi", "🎨", "#D32F2F"], ["E", "Eid", "🌙", "#4CAF50"], ["T", "Thanksgiving", "🦃", "#FF8F00"],
      ["L", "Lunar New Year", "🏮", "#D32F2F"], ["C", "Carnival", "🎭", "#7B1FA2"], ["O", "Oktoberfest", "🍺", "#FFB300"],
      ["S", "St. Patrick's Day", "🍀", "#4CAF50"], ["V", "Valentine's Day", "❤️", "#E91E63"], ["N", "New Year", "🎆", "#FFB300"],
      ["H", "Halloween", "🎃", "#FF6F00"], ["M", "Mardi Gras", "🎭", "#7B1FA2"], ["B", "Bastille Day", "🇫🇷", "#1565C0"],
      ["H", "Hanukkah", "🕎", "#1565C0"], ["R", "Ramadan", "🌙", "#2E7D32"], ["S", "Songkran", "💦", "#00BCD4"],
      ["D", "Day of Dead", "💀", "#FF6F00"], ["L", "Lantern Festival", "🏮", "#D32F2F"], ["M", "Mid-Autumn", "🌕", "#FFB300"],
      ["C", "Cinco de Mayo", "🎊", "#4CAF50"], ["P", "Pongal", "🌾", "#FF8F00"], ["N", "Navratri", "💃", "#E91E63"],
      ["O", "Onam", "🚣", "#FFB300"], ["G", "Ganesh Chaturthi", "🐘", "#FF5722"], ["B", "Baisakhi", "🌾", "#FDD835"],
      ["T", "Tanabata", "🎋", "#7B1FA2"], ["C", "Cherry Blossom Fest", "🌸", "#F48FB1"], ["K", "Kwanzaa", "🕯️", "#D32F2F"],
      ["I", "Independence Day", "🎆", "#1565C0"], ["F", "Fireworks Night", "🎇", "#FF6F00"], ["D", "Dragon Boat", "🐉", "#2E7D32"],
      ["S", "Sukkot", "🏠", "#4CAF50"], ["R", "Raksha Bandhan", "🧵", "#E91E63"], ["M", "Makar Sankranti", "🪁", "#FF8F00"],
      ["L", "Lohri", "🔥", "#FF5722"], ["P", "Purim", "🎭", "#7B1FA2"], ["J", "Janmashtami", "🪈", "#1565C0"],
      ["U", "Ugadi", "🍃", "#4CAF50"], ["V", "Vesak", "🪷", "#FFB300"], ["W", "Winter Solstice", "❄️", "#0288D1"],
      ["S", "Summer Solstice", "☀️", "#FFB300"], ["A", "Advent", "🕯️", "#7B1FA2"], ["E", "Epiphany", "⭐", "#FFD54F"],
    ],
  },
  "sports-equipment": {
    name: "Sports Equipment",
    videosCount: 30,
    gradients: [
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
    ],
    words: [
      ["B", "Ball", "⚽", "#1E88E5"], ["B", "Bat", "🏏", "#795548"], ["R", "Racket", "🏸", "#4CAF50"],
      ["H", "Helmet", "⛑️", "#D32F2F"], ["G", "Gloves", "🥊", "#D32F2F"], ["S", "Shuttlecock", "🏸", "#F5F5F5"],
      ["N", "Net", "🥅", "#607D8B"], ["H", "Hoop", "🏀", "#FF6F00"], ["W", "Whistle", "📯", "#FFB300"],
      ["S", "Skateboard", "🛹", "#FF6F00"], ["S", "Surfboard", "🏄", "#0288D1"], ["S", "Snowboard", "🏂", "#00BCD4"],
      ["S", "Ski", "⛷️", "#0288D1"], ["P", "Puck", "🏒", "#212121"], ["S", "Stick", "🏒", "#795548"],
      ["D", "Dumbbell", "🏋️", "#455A64"], ["J", "Jersey", "👕", "#D32F2F"], ["T", "Trophy", "🏆", "#FFB300"],
      ["M", "Medal", "🥇", "#FFD54F"], ["S", "Stopwatch", "⏱️", "#607D8B"], ["C", "Cleats", "👟", "#212121"],
      ["G", "Goal Post", "🥅", "#F5F5F5"], ["T", "Tennis Ball", "🎾", "#CDDC39"], ["B", "Basketball", "🏀", "#FF6F00"],
      ["F", "Football", "🏈", "#795548"], ["S", "Soccer Ball", "⚽", "#F5F5F5"], ["V", "Volleyball", "🏐", "#FDD835"],
      ["C", "Cricket Ball", "🏏", "#D32F2F"], ["B", "Baseball", "⚾", "#F5F5F5"], ["G", "Golf Ball", "⛳", "#F5F5F5"],
      ["P", "Paddle", "🏓", "#D32F2F"], ["B", "Boxing Glove", "🥊", "#C62828"], ["A", "Archery Bow", "🏹", "#795548"],
      ["F", "Fencing Sword", "🤺", "#607D8B"], ["K", "Knee Pad", "🛡️", "#212121"], ["S", "Shin Guard", "🦵", "#1565C0"],
      ["R", "Roller Skate", "🛼", "#E91E63"], ["I", "Ice Skate", "⛸️", "#00BCD4"], ["W", "Water Polo Ball", "🤽", "#FDD835"],
      ["Y", "Yoga Mat", "🧘", "#7B1FA2"], ["J", "Javelin", "🏹", "#795548"], ["D", "Discus", "🥏", "#607D8B"],
      ["L", "Lacrosse Stick", "🥍", "#FF6F00"], ["T", "Trampoline", "🤸", "#E91E63"], ["C", "Climbing Rope", "🧗", "#795548"],
    ],
  },
};

// ============================================================================
// GENERATE CATALOGS
// ============================================================================

function generateCatalog(categoryKey, category) {
  const dir = path.join(BASE_DIR, categoryKey);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const words = category.words;
  const itemsPerVideo = 15;
  const videosCount = category.videosCount;
  const gradients = category.gradients;

  const videos = [];
  let wordIdx = 0;

  for (let v = 0; v < videosCount; v++) {
    const gradientSet = gradients[v % gradients.length];
    const partNum = v + 1;

    const items = [];
    for (let i = 0; i < itemsPerVideo && wordIdx < words.length; i++) {
      const w = words[wordIdx % words.length];
      items.push({
        letter: w[0],
        word: w[1],
        emoji: w[2],
        bgColor: w[3],
      });
      wordIdx++;
    }

    // If we run out of words, cycle back
    if (items.length < itemsPerVideo) {
      while (items.length < itemsPerVideo) {
        const w = words[items.length % words.length];
        items.push({
          letter: w[0],
          word: w[1],
          emoji: w[2],
          bgColor: w[3],
        });
      }
    }

    videos.push({
      id: `${categoryKey}-${partNum}`,
      title: `${category.name} - Part ${partNum}`,
      bgGradient: gradientSet[0],
      accentColor: gradientSet[1],
      items,
      letterDuration: 3,
      introDuration: 3,
      outroDuration: 3,
      targetDuration: 165,
    });
  }

  fs.writeFileSync(path.join(dir, "catalog.json"), JSON.stringify(videos, null, 2));
  return videos.length;
}

// ============================================================================
// GENERATE REGISTER-COMPOSITIONS.JS FOR EACH CATEGORY
// ============================================================================

function generateRegisterScript(categoryKey, category) {
  const dir = path.join(BASE_DIR, categoryKey);
  const rootName = categoryKey
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

  const script = `#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CATALOG = path.join(__dirname, "catalog.json");
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const FPS = 30;
const TARGET_DURATION = 165;
const TOTAL_FRAMES = Math.round(TARGET_DURATION * FPS);

function toPascalCase(str) {
  return str.split(/[-_\\s]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("");
}

const catalog = JSON.parse(fs.readFileSync(CATALOG, "utf-8"));
const videos = Array.isArray(catalog) ? catalog : catalog.videos || [];

let content = 'import "./index.css";\\n';
content += 'import { Composition } from "remotion";\\n';
content += 'import { AlphabetLongTemplate } from "./AlphabetLongTemplate";\\n';
content += 'import type { AlphabetLongProps } from "./AlphabetLongTemplate";\\n';
content += 'import React from "react";\\n\\n';
content += 'export const ${rootName}Root: React.FC = () => {\\n';
content += '  return (\\n';
content += '    <>\\n';

for (const video of videos) {
  const compId = toPascalCase(video.id);
  const items = video.items || video.letters || [];
  const letterDur = video.letterDuration || 3;
  const introDur = video.introDuration || 3;
  const outroDur = video.outroDuration || 3;
  const targetDur = video.targetDuration || 165;

  content += '      <Composition\\n';
  content += '        id="' + compId + '"\\n';
  content += '        component={AlphabetLongTemplate}\\n';
  content += '        durationInFrames={' + TOTAL_FRAMES + '}\\n';
  content += '        fps={' + FPS + '}\\n';
  content += '        width={1080}\\n';
  content += '        height={1920}\\n';
  content += '        defaultProps={{\\n';
  content += '          title: ' + JSON.stringify(video.title) + ',\\n';
  content += '          videoId: ' + JSON.stringify(video.id) + ',\\n';
  content += '          bgGradient: ' + JSON.stringify(video.bgGradient) + ' as [string, string],\\n';
  content += '          accentColor: ' + JSON.stringify(video.accentColor) + ',\\n';
  content += '          letters: ' + JSON.stringify(items) + ',\\n';
  content += '          letterDuration: ' + letterDur + ',\\n';
  content += '          introDuration: ' + introDur + ',\\n';
  content += '          outroDuration: ' + outroDur + ',\\n';
  content += '          targetDuration: ' + targetDur + ',\\n';
  content += '        }}\\n';
  content += '      />\\n';
}

content += '    </>\\n';
content += '  );\\n';
content += '};\\n';

const outPath = path.join(SRC_DIR, "${rootName}Root.tsx");
fs.writeFileSync(outPath, content);
console.log("  Generated " + outPath + " (" + videos.length + " compositions)");
`;

  fs.writeFileSync(path.join(dir, "register-compositions.js"), script);
}

// ============================================================================
// MAIN
// ============================================================================

console.log("============================================");
console.log("  1020 Videos Catalog Generator");
console.log("  Date: 3rd April 2026");
console.log("============================================\n");

let totalVideos = 0;
const categorySummary = [];

for (const [key, cat] of Object.entries(CATEGORIES)) {
  const count = generateCatalog(key, cat);
  generateRegisterScript(key, cat);
  totalVideos += count;
  categorySummary.push({ category: cat.name, key, count });
  console.log(`  ${cat.name}: ${count} videos`);
}

console.log(`\n  TOTAL: ${totalVideos} videos across ${Object.keys(CATEGORIES).length} categories`);

// Generate summary JSON
const summary = {
  batchName: "1k-video-3april",
  date: "2026-04-03",
  totalVideos,
  categories: categorySummary,
};
fs.writeFileSync(path.join(BASE_DIR, "summary.json"), JSON.stringify(summary, null, 2));

console.log("\n  Summary saved to summary.json");
console.log("\nDone!");
