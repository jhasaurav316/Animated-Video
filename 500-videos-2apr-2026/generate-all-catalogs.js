#!/usr/bin/env node
// ============================================================================
// Generate 500 Video Catalogs - 2nd April 2026 Batch
// ============================================================================
// Creates catalog.json for 17 new categories = 500 total videos
// Each video: 12-15 items, ~48-60 seconds (YouTube Shorts format)
//
// Usage: node 500-videos-2apr-2026/generate-all-catalogs.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const BASE_DIR = __dirname;

// ============================================================================
// CATEGORY DATA - 17 categories × ~30 videos each = 500+ videos
// ============================================================================

const CATEGORIES = {
  "body-parts": {
    name: "Body Parts",
    videosCount: 30,
    gradients: [
      [["#FF7043", "#FFAB91"], "#BF360C"],
      [["#AB47BC", "#CE93D8"], "#6A1B9A"],
      [["#42A5F5", "#90CAF9"], "#0D47A1"],
    ],
    words: [
      ["H", "Head", "🗣️", "#E53935"], ["E", "Eye", "👁️", "#1E88E5"], ["N", "Nose", "👃", "#43A047"],
      ["M", "Mouth", "👄", "#D81B60"], ["E", "Ear", "👂", "#FB8C00"], ["T", "Teeth", "🦷", "#FFFFFF"],
      ["H", "Hair", "💇", "#5D4037"], ["F", "Face", "😊", "#FFB300"], ["N", "Neck", "🦒", "#6D4C41"],
      ["S", "Shoulder", "💪", "#1565C0"], ["A", "Arm", "💪", "#2E7D32"], ["E", "Elbow", "🦾", "#F57F17"],
      ["H", "Hand", "✋", "#FF6F00"], ["F", "Finger", "☝️", "#AD1457"], ["T", "Thumb", "👍", "#00838F"],
      ["C", "Chest", "🫁", "#C62828"], ["S", "Stomach", "🤰", "#EF6C00"], ["B", "Back", "🔙", "#4527A0"],
      ["L", "Leg", "🦵", "#2E7D32"], ["K", "Knee", "🦿", "#00695C"], ["F", "Foot", "🦶", "#5D4037"],
      ["T", "Toe", "🦶", "#BF360C"], ["W", "Wrist", "⌚", "#1565C0"], ["A", "Ankle", "🦶", "#4E342E"],
      ["B", "Brain", "🧠", "#E91E63"], ["H", "Heart", "❤️", "#D32F2F"], ["L", "Lung", "🫁", "#F06292"],
      ["K", "Kidney", "🫘", "#8D6E63"], ["B", "Bone", "🦴", "#E0E0E0"], ["S", "Skin", "🤲", "#FFB74D"],
      ["M", "Muscle", "💪", "#C62828"], ["R", "Rib", "🩻", "#BDBDBD"], ["J", "Jaw", "🦷", "#795548"],
      ["C", "Chin", "🤔", "#5D4037"], ["L", "Lip", "💋", "#E91E63"], ["P", "Palm", "🤚", "#FFB300"],
      ["N", "Nail", "💅", "#AB47BC"], ["T", "Tongue", "👅", "#EF5350"], ["V", "Vein", "🩸", "#1565C0"],
      ["S", "Spine", "🦴", "#546E7A"], ["H", "Hip", "🦿", "#6D4C41"], ["C", "Calf", "🦵", "#388E3C"],
      ["E", "Eyebrow", "🤨", "#3E2723"], ["F", "Forehead", "🧐", "#FFB300"], ["S", "Skull", "💀", "#424242"],
    ],
  },
  "professions": {
    name: "Professions",
    videosCount: 30,
    gradients: [
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#E65100", "#FFB74D"], "#BF360C"],
    ],
    words: [
      ["D", "Doctor", "👨‍⚕️", "#E53935"], ["T", "Teacher", "👩‍🏫", "#1E88E5"], ["P", "Pilot", "✈️", "#0277BD"],
      ["F", "Firefighter", "🚒", "#D32F2F"], ["P", "Police", "👮", "#1565C0"], ["C", "Chef", "👨‍🍳", "#FF8F00"],
      ["E", "Engineer", "👷", "#FF6F00"], ["N", "Nurse", "👩‍⚕️", "#E91E63"], ["F", "Farmer", "👨‍🌾", "#2E7D32"],
      ["A", "Artist", "🎨", "#7B1FA2"], ["S", "Scientist", "🔬", "#00838F"], ["J", "Judge", "⚖️", "#37474F"],
      ["D", "Dancer", "💃", "#AD1457"], ["S", "Singer", "🎤", "#6A1B9A"], ["A", "Astronaut", "🧑‍🚀", "#0D47A1"],
      ["M", "Mechanic", "🔧", "#455A64"], ["B", "Baker", "🍞", "#795548"], ["V", "Vet", "🐾", "#2E7D32"],
      ["L", "Lawyer", "📜", "#37474F"], ["P", "Plumber", "🔧", "#0277BD"], ["D", "Dentist", "🦷", "#00838F"],
      ["P", "Photographer", "📷", "#4527A0"], ["M", "Musician", "🎵", "#C62828"], ["A", "Architect", "🏛️", "#455A64"],
      ["J", "Journalist", "📰", "#1565C0"], ["C", "Carpenter", "🪚", "#5D4037"], ["T", "Tailor", "🧵", "#7B1FA2"],
      ["F", "Fisherman", "🎣", "#0277BD"], ["P", "Postman", "📮", "#D32F2F"], ["D", "Driver", "🚗", "#FF6F00"],
      ["W", "Waiter", "🍽️", "#795548"], ["G", "Gardener", "🌺", "#388E3C"], ["B", "Barber", "💈", "#C62828"],
      ["C", "Cobbler", "👟", "#5D4037"], ["P", "Painter", "🖌️", "#FF6F00"], ["S", "Sailor", "⛵", "#0288D1"],
      ["Z", "Zookeeper", "🦁", "#FF8F00"], ["C", "Clown", "🤡", "#E91E63"], ["M", "Magician", "🎩", "#4527A0"],
      ["R", "Reporter", "🎙️", "#1565C0"], ["S", "Surgeon", "🏥", "#C62828"], ["T", "Trainer", "🏋️", "#FF6F00"],
      ["L", "Librarian", "📚", "#6A1B9A"], ["E", "Electrician", "⚡", "#F9A825"],
    ],
  },
  "famous-places": {
    name: "Famous Places",
    videosCount: 30,
    gradients: [
      [["#4527A0", "#B39DDB"], "#311B92"],
      [["#00695C", "#80CBC4"], "#004D40"],
      [["#BF360C", "#FFAB91"], "#D84315"],
    ],
    words: [
      ["T", "Taj Mahal", "🕌", "#F5F5F5"], ["E", "Eiffel Tower", "🗼", "#455A64"], ["G", "Great Wall", "🏯", "#C62828"],
      ["P", "Pyramids", "🏛️", "#FFB300"], ["S", "Statue of Liberty", "🗽", "#2E7D32"], ["C", "Colosseum", "🏟️", "#795548"],
      ["B", "Big Ben", "🕰️", "#1565C0"], ["M", "Machu Picchu", "⛰️", "#2E7D32"], ["S", "Sydney Opera", "🎭", "#0277BD"],
      ["L", "Leaning Tower", "🏗️", "#F5F5F5"], ["G", "Golden Gate", "🌉", "#D32F2F"], ["N", "Niagara Falls", "🌊", "#0288D1"],
      ["M", "Mount Everest", "🏔️", "#546E7A"], ["A", "Amazon River", "🌿", "#1B5E20"], ["S", "Sahara Desert", "🏜️", "#FF8F00"],
      ["G", "Grand Canyon", "🏜️", "#BF360C"], ["V", "Victoria Falls", "💧", "#0277BD"], ["K", "Kilimanjaro", "🌋", "#5D4037"],
      ["A", "Angel Falls", "🌊", "#00838F"], ["R", "Red Fort", "🏰", "#C62828"], ["H", "Hollywood Sign", "🎬", "#F57F17"],
      ["S", "Stonehenge", "🪨", "#607D8B"], ["P", "Parthenon", "🏛️", "#FFB300"], ["C", "Christ Redeemer", "✝️", "#2E7D32"],
      ["B", "Burj Khalifa", "🏢", "#0D47A1"], ["M", "Mona Lisa", "🖼️", "#4527A0"], ["W", "White House", "🏛️", "#F5F5F5"],
      ["N", "Northern Lights", "🌌", "#00E676"], ["G", "Great Barrier Reef", "🐠", "#00BCD4"], ["D", "Dead Sea", "🌊", "#00838F"],
      ["L", "London Bridge", "🌉", "#546E7A"], ["P", "Petra", "🏛️", "#BF360C"], ["F", "Forbidden City", "🏯", "#C62828"],
      ["H", "Hagia Sophia", "🕌", "#E65100"], ["T", "Tower of London", "🏰", "#795548"], ["M", "Mont Blanc", "🏔️", "#B0BEC5"],
      ["R", "Rock of Gibraltar", "🪨", "#5D4037"], ["V", "Venice Canals", "🚣", "#0277BD"], ["A", "Angkor Wat", "🛕", "#4E342E"],
      ["M", "Mount Fuji", "🗻", "#F5F5F5"],
    ],
  },
  "dog-breeds": {
    name: "Dog Breeds",
    videosCount: 30,
    gradients: [
      [["#5D4037", "#BCAAA4"], "#3E2723"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
    ],
    words: [
      ["G", "Golden Retriever", "🐕", "#FFB300"], ["L", "Labrador", "🐕‍🦺", "#F5F5DC"], ["G", "German Shepherd", "🐕", "#5D4037"],
      ["B", "Bulldog", "🐶", "#795548"], ["P", "Poodle", "🐩", "#F5F5F5"], ["B", "Beagle", "🐕", "#FF8F00"],
      ["H", "Husky", "🐺", "#B0BEC5"], ["R", "Rottweiler", "🐕", "#212121"], ["D", "Dalmatian", "🐾", "#F5F5F5"],
      ["B", "Boxer", "🐕", "#8D6E63"], ["C", "Chihuahua", "🐕", "#FFB74D"], ["D", "Doberman", "🐕", "#3E2723"],
      ["P", "Pug", "🐶", "#FFB300"], ["S", "Shih Tzu", "🐕", "#795548"], ["C", "Corgi", "🐕", "#FF8F00"],
      ["G", "Great Dane", "🐕", "#607D8B"], ["A", "Akita", "🐕", "#8D6E63"], ["P", "Pomeranian", "🐕", "#FF6F00"],
      ["S", "Saint Bernard", "🐕", "#5D4037"], ["C", "Cocker Spaniel", "🐕", "#A1887F"], ["M", "Maltese", "🐕", "#F5F5F5"],
      ["B", "Border Collie", "🐕", "#212121"], ["W", "Whippet", "🐕", "#9E9E9E"], ["S", "Samoyed", "🐕", "#FAFAFA"],
      ["C", "Chow Chow", "🐕", "#BF360C"], ["I", "Irish Setter", "🐕", "#C62828"], ["N", "Newfoundland", "🐕", "#212121"],
      ["B", "Basenji", "🐕", "#FF8F00"], ["M", "Mastiff", "🐕", "#5D4037"], ["S", "Schnauzer", "🐕", "#616161"],
      ["W", "Weimaraner", "🐕", "#78909C"], ["V", "Vizsla", "🐕", "#BF360C"], ["T", "Terrier", "🐕", "#8D6E63"],
      ["L", "Lhasa Apso", "🐕", "#A1887F"], ["K", "King Charles", "🐕", "#6D4C41"], ["S", "Shiba Inu", "🐕", "#FF8F00"],
      ["J", "Jack Russell", "🐕", "#F5F5F5"], ["R", "Rhodesian", "🐕", "#8D6E63"], ["P", "Papillon", "🐕", "#5D4037"],
      ["A", "Afghan Hound", "🐕", "#FFB74D"],
    ],
  },
  "trees-plants": {
    name: "Trees & Plants",
    videosCount: 30,
    gradients: [
      [["#1B5E20", "#A5D6A7"], "#0D3B0D"],
      [["#33691E", "#AED581"], "#1B5E20"],
      [["#004D40", "#80CBC4"], "#00251A"],
    ],
    words: [
      ["O", "Oak", "🌳", "#5D4037"], ["P", "Pine", "🌲", "#1B5E20"], ["M", "Maple", "🍁", "#D32F2F"],
      ["B", "Bamboo", "🎋", "#2E7D32"], ["C", "Cactus", "🌵", "#388E3C"], ["P", "Palm", "🌴", "#4CAF50"],
      ["W", "Willow", "🌳", "#558B2F"], ["B", "Birch", "🌳", "#F5F5F5"], ["R", "Rose", "🌹", "#C62828"],
      ["S", "Sunflower", "🌻", "#FBC02D"], ["T", "Tulip", "🌷", "#E91E63"], ["L", "Lily", "🌸", "#F8BBD0"],
      ["D", "Daisy", "🌼", "#FFEB3B"], ["F", "Fern", "🌿", "#2E7D32"], ["M", "Mushroom", "🍄", "#795548"],
      ["A", "Aloe Vera", "🌿", "#4CAF50"], ["J", "Jasmine", "🌸", "#FAFAFA"], ["L", "Lavender", "💜", "#7B1FA2"],
      ["O", "Orchid", "🌺", "#E91E63"], ["B", "Banyan", "🌳", "#33691E"], ["N", "Neem", "🌿", "#388E3C"],
      ["E", "Eucalyptus", "🌿", "#43A047"], ["S", "Sequoia", "🌲", "#5D4037"], ["C", "Cherry Blossom", "🌸", "#F48FB1"],
      ["M", "Marigold", "🌻", "#FF8F00"], ["H", "Hibiscus", "🌺", "#D32F2F"], ["I", "Ivy", "🌿", "#1B5E20"],
      ["V", "Venus Flytrap", "🪴", "#4CAF50"], ["C", "Coconut", "🥥", "#4E342E"], ["M", "Mango Tree", "🥭", "#FF8F00"],
      ["A", "Apple Tree", "🍎", "#C62828"], ["P", "Peach Tree", "🍑", "#FF8A65"], ["G", "Grass", "🌱", "#4CAF50"],
      ["W", "Wheat", "🌾", "#F9A825"], ["C", "Corn", "🌽", "#FBC02D"], ["R", "Redwood", "🌲", "#6D4C41"],
      ["B", "Bonsai", "🌳", "#33691E"], ["L", "Lotus", "🪷", "#E91E63"], ["P", "Poppy", "🌺", "#D32F2F"],
      ["D", "Daffodil", "🌼", "#FDD835"],
    ],
  },
  "emotions": {
    name: "Emotions & Feelings",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#FF9800", "#FFE0B2"], "#E65100"],
      [["#673AB7", "#D1C4E9"], "#311B92"],
    ],
    words: [
      ["H", "Happy", "😊", "#FDD835"], ["S", "Sad", "😢", "#1565C0"], ["A", "Angry", "😠", "#D32F2F"],
      ["S", "Scared", "😨", "#7B1FA2"], ["E", "Excited", "🤩", "#FF6F00"], ["S", "Surprised", "😲", "#00BCD4"],
      ["L", "Love", "😍", "#E91E63"], ["T", "Tired", "😴", "#607D8B"], ["B", "Brave", "💪", "#2E7D32"],
      ["S", "Shy", "🙈", "#F48FB1"], ["P", "Proud", "😤", "#FF8F00"], ["C", "Confused", "😕", "#FBC02D"],
      ["J", "Jealous", "😒", "#388E3C"], ["N", "Nervous", "😰", "#AB47BC"], ["G", "Grateful", "🙏", "#FFB300"],
      ["L", "Lonely", "😔", "#546E7A"], ["C", "Calm", "😌", "#00838F"], ["W", "Worried", "😟", "#F57F17"],
      ["B", "Bored", "🥱", "#9E9E9E"], ["K", "Kind", "🤗", "#E91E63"], ["C", "Curious", "🤔", "#FF6F00"],
      ["H", "Hopeful", "🌟", "#FDD835"], ["F", "Friendly", "🤝", "#1E88E5"], ["P", "Peaceful", "☮️", "#4CAF50"],
      ["G", "Grumpy", "😤", "#795548"], ["S", "Silly", "🤪", "#FF6F00"], ["T", "Thankful", "💝", "#E91E63"],
      ["A", "Amazed", "🤯", "#7B1FA2"], ["D", "Disappointed", "😞", "#546E7A"], ["C", "Cheerful", "😄", "#FDD835"],
      ["R", "Relaxed", "😎", "#00BCD4"], ["F", "Frustrated", "😤", "#C62828"], ["I", "Inspired", "💡", "#FFB300"],
      ["M", "Mischievous", "😈", "#7B1FA2"], ["E", "Embarrassed", "😳", "#E91E63"], ["J", "Joyful", "🥳", "#FF6F00"],
    ],
  },
  "tools": {
    name: "Tools & Equipment",
    videosCount: 30,
    gradients: [
      [["#455A64", "#B0BEC5"], "#263238"],
      [["#F57F17", "#FFF176"], "#E65100"],
      [["#1B5E20", "#A5D6A7"], "#0D3B0D"],
    ],
    words: [
      ["H", "Hammer", "🔨", "#795548"], ["S", "Screwdriver", "🪛", "#1565C0"], ["W", "Wrench", "🔧", "#607D8B"],
      ["S", "Saw", "🪚", "#5D4037"], ["D", "Drill", "🔩", "#37474F"], ["P", "Pliers", "🔧", "#455A64"],
      ["N", "Nail", "📌", "#9E9E9E"], ["S", "Scissors", "✂️", "#C62828"], ["R", "Ruler", "📏", "#1565C0"],
      ["T", "Tape", "🪡", "#FBC02D"], ["L", "Ladder", "🪜", "#FF8F00"], ["A", "Axe", "🪓", "#5D4037"],
      ["S", "Shovel", "⛏️", "#795548"], ["B", "Broom", "🧹", "#8D6E63"], ["K", "Knife", "🔪", "#616161"],
      ["M", "Magnifying Glass", "🔍", "#FFB300"], ["C", "Compass", "🧭", "#0277BD"], ["T", "Thermometer", "🌡️", "#C62828"],
      ["B", "Binoculars", "🔭", "#1565C0"], ["F", "Flashlight", "🔦", "#FBC02D"], ["L", "Lock", "🔒", "#FFB300"],
      ["K", "Key", "🔑", "#FF8F00"], ["C", "Chain", "⛓️", "#607D8B"], ["B", "Bolt", "🔩", "#455A64"],
      ["G", "Glue", "🧴", "#FF6F00"], ["P", "Paint Brush", "🖌️", "#E91E63"], ["M", "Measuring Tape", "📐", "#FBC02D"],
      ["L", "Level", "📐", "#4CAF50"], ["S", "Spanner", "🔧", "#546E7A"], ["C", "Clamp", "🗜️", "#455A64"],
      ["V", "Vice", "🗜️", "#37474F"], ["F", "File", "📁", "#795548"], ["P", "Plunger", "🪠", "#C62828"],
      ["H", "Hose", "🚿", "#0277BD"], ["W", "Wheelbarrow", "🛒", "#388E3C"], ["J", "Jack", "🏗️", "#FF6F00"],
    ],
  },
  "clothing": {
    name: "Clothing & Fashion",
    videosCount: 30,
    gradients: [
      [["#AD1457", "#F48FB1"], "#880E4F"],
      [["#4527A0", "#B39DDB"], "#311B92"],
      [["#00695C", "#80CBC4"], "#004D40"],
    ],
    words: [
      ["S", "Shirt", "👔", "#1565C0"], ["P", "Pants", "👖", "#0D47A1"], ["D", "Dress", "👗", "#E91E63"],
      ["S", "Shoes", "👟", "#FF6F00"], ["H", "Hat", "🎩", "#212121"], ["C", "Cap", "🧢", "#D32F2F"],
      ["S", "Socks", "🧦", "#F5F5F5"], ["G", "Gloves", "🧤", "#5D4037"], ["S", "Scarf", "🧣", "#C62828"],
      ["J", "Jacket", "🧥", "#37474F"], ["C", "Coat", "🧥", "#3E2723"], ["B", "Belt", "👔", "#795548"],
      ["T", "Tie", "👔", "#D32F2F"], ["B", "Boots", "👢", "#5D4037"], ["S", "Sandals", "👡", "#FF8F00"],
      ["S", "Sweater", "🧶", "#7B1FA2"], ["J", "Jeans", "👖", "#0D47A1"], ["S", "Skirt", "👗", "#E91E63"],
      ["V", "Vest", "🦺", "#FF6F00"], ["H", "Hoodie", "🧥", "#455A64"], ["U", "Uniform", "👔", "#1565C0"],
      ["P", "Pajamas", "🛌", "#90CAF9"], ["R", "Raincoat", "🧥", "#FBC02D"], ["S", "Sunglasses", "🕶️", "#212121"],
      ["W", "Watch", "⌚", "#FFB300"], ["R", "Ring", "💍", "#FFD54F"], ["N", "Necklace", "📿", "#E91E63"],
      ["B", "Bracelet", "📿", "#00BCD4"], ["E", "Earrings", "💎", "#7B1FA2"], ["C", "Crown", "👑", "#FFB300"],
      ["T", "Turban", "🧕", "#FF8F00"], ["S", "Saree", "👗", "#C62828"], ["K", "Kurta", "👔", "#FF6F00"],
      ["G", "Gown", "👗", "#4527A0"], ["A", "Apron", "🧑‍🍳", "#4CAF50"],
    ],
  },
  "desserts": {
    name: "Desserts & Sweets",
    videosCount: 30,
    gradients: [
      [["#F48FB1", "#FCE4EC"], "#AD1457"],
      [["#FFB74D", "#FFF3E0"], "#E65100"],
      [["#A1887F", "#D7CCC8"], "#4E342E"],
    ],
    words: [
      ["C", "Cake", "🎂", "#E91E63"], ["I", "Ice Cream", "🍦", "#F48FB1"], ["C", "Cookie", "🍪", "#795548"],
      ["C", "Chocolate", "🍫", "#3E2723"], ["D", "Donut", "🍩", "#FF6F00"], ["P", "Pie", "🥧", "#D32F2F"],
      ["C", "Cupcake", "🧁", "#E91E63"], ["P", "Pudding", "🍮", "#FFB300"], ["B", "Brownie", "🍫", "#5D4037"],
      ["W", "Waffle", "🧇", "#FF8F00"], ["P", "Pancake", "🥞", "#FFB74D"], ["M", "Muffin", "🧁", "#795548"],
      ["C", "Candy", "🍬", "#D32F2F"], ["L", "Lollipop", "🍭", "#4CAF50"], ["G", "Gummy Bear", "🐻", "#FF6F00"],
      ["J", "Jelly", "🍇", "#7B1FA2"], ["M", "Macaron", "🍪", "#F48FB1"], ["T", "Tart", "🍰", "#FBC02D"],
      ["S", "Sundae", "🍨", "#E91E63"], ["F", "Fudge", "🍫", "#3E2723"], ["C", "Cheesecake", "🍰", "#FFB300"],
      ["E", "Eclair", "🥖", "#5D4037"], ["C", "Croissant", "🥐", "#FFB74D"], ["P", "Popsicle", "🍧", "#00BCD4"],
      ["S", "Sorbet", "🍨", "#FF6F00"], ["T", "Tiramisu", "🍰", "#795548"], ["C", "Caramel", "🍯", "#FF8F00"],
      ["M", "Marshmallow", "☁️", "#F5F5F5"], ["C", "Cotton Candy", "🍡", "#F48FB1"], ["H", "Honey", "🍯", "#FFB300"],
      ["S", "S'mores", "🍫", "#5D4037"], ["T", "Toffee", "🍬", "#BF360C"], ["P", "Praline", "🥜", "#795548"],
      ["C", "Churro", "🥖", "#FFB74D"], ["G", "Gelato", "🍨", "#4CAF50"],
    ],
  },
  "gems-minerals": {
    name: "Gems & Minerals",
    videosCount: 25,
    gradients: [
      [["#311B92", "#7C4DFF"], "#1A0066"],
      [["#004D40", "#64FFDA"], "#00251A"],
      [["#B71C1C", "#FF8A80"], "#7F0000"],
    ],
    words: [
      ["D", "Diamond", "💎", "#B0BEC5"], ["R", "Ruby", "❤️", "#D32F2F"], ["E", "Emerald", "💚", "#2E7D32"],
      ["S", "Sapphire", "💙", "#1565C0"], ["A", "Amethyst", "💜", "#7B1FA2"], ["T", "Topaz", "💛", "#FF8F00"],
      ["O", "Opal", "🌈", "#00BCD4"], ["P", "Pearl", "⚪", "#F5F5F5"], ["G", "Garnet", "🔴", "#C62828"],
      ["J", "Jade", "💚", "#388E3C"], ["T", "Turquoise", "💙", "#00838F"], ["L", "Lapis Lazuli", "💙", "#0D47A1"],
      ["C", "Crystal", "💎", "#E0E0E0"], ["Q", "Quartz", "💎", "#F5F5F5"], ["O", "Onyx", "⬛", "#212121"],
      ["A", "Aquamarine", "💙", "#00BCD4"], ["C", "Coral", "🪸", "#E91E63"], ["M", "Moonstone", "🌙", "#B0BEC5"],
      ["A", "Amber", "🟠", "#FF8F00"], ["Z", "Zircon", "💎", "#90CAF9"], ["T", "Tanzanite", "💙", "#311B92"],
      ["M", "Malachite", "💚", "#1B5E20"], ["O", "Obsidian", "⬛", "#37474F"], ["P", "Peridot", "💚", "#689F38"],
      ["C", "Citrine", "💛", "#FBC02D"], ["A", "Alexandrite", "💜", "#6A1B9A"], ["S", "Spinel", "❤️", "#AD1457"],
      ["G", "Gold", "🥇", "#FFD54F"], ["S", "Silver", "🥈", "#BDBDBD"], ["P", "Platinum", "⚪", "#E0E0E0"],
    ],
  },
  "dance-forms": {
    name: "Dance Forms",
    videosCount: 25,
    gradients: [
      [["#AD1457", "#F48FB1"], "#880E4F"],
      [["#E65100", "#FFB74D"], "#BF360C"],
      [["#4527A0", "#B39DDB"], "#311B92"],
    ],
    words: [
      ["B", "Ballet", "🩰", "#F48FB1"], ["H", "Hip Hop", "🕺", "#FF6F00"], ["S", "Salsa", "💃", "#D32F2F"],
      ["T", "Tango", "💃", "#C62828"], ["W", "Waltz", "💃", "#4527A0"], ["J", "Jazz", "🎷", "#FFB300"],
      ["B", "Bharatanatyam", "💃", "#FF8F00"], ["K", "Kathak", "💃", "#E91E63"], ["F", "Flamenco", "💃", "#D32F2F"],
      ["B", "Breakdance", "🤸", "#1565C0"], ["C", "Cha Cha", "💃", "#FF6F00"], ["S", "Swing", "🕺", "#FBC02D"],
      ["F", "Folk Dance", "👯", "#388E3C"], ["B", "Belly Dance", "💃", "#FF8F00"], ["L", "Line Dance", "🤠", "#795548"],
      ["M", "Modern Dance", "🕺", "#7B1FA2"], ["T", "Tap Dance", "👞", "#37474F"], ["D", "Disco", "🪩", "#FFD54F"],
      ["C", "Contemporary", "💃", "#00838F"], ["R", "Robot Dance", "🤖", "#607D8B"], ["O", "Odissi", "💃", "#E91E63"],
      ["K", "Kuchipudi", "💃", "#FF6F00"], ["S", "Samba", "💃", "#2E7D32"], ["R", "Rumba", "💃", "#C62828"],
      ["F", "Foxtrot", "🕺", "#455A64"], ["M", "Moonwalk", "🌙", "#212121"], ["P", "Polka", "💃", "#E91E63"],
      ["B", "Bhangra", "🕺", "#FF8F00"], ["G", "Garba", "💃", "#D32F2F"], ["L", "Lavani", "💃", "#7B1FA2"],
    ],
  },
  "reptiles": {
    name: "Reptiles & Amphibians",
    videosCount: 25,
    gradients: [
      [["#1B5E20", "#A5D6A7"], "#0D3B0D"],
      [["#827717", "#DCE775"], "#524C00"],
      [["#004D40", "#80CBC4"], "#00251A"],
    ],
    words: [
      ["C", "Cobra", "🐍", "#1B5E20"], ["T", "Turtle", "🐢", "#388E3C"], ["C", "Crocodile", "🐊", "#33691E"],
      ["L", "Lizard", "🦎", "#4CAF50"], ["C", "Chameleon", "🦎", "#FF6F00"], ["F", "Frog", "🐸", "#2E7D32"],
      ["S", "Salamander", "🦎", "#FF8F00"], ["I", "Iguana", "🦎", "#388E3C"], ["G", "Gecko", "🦎", "#AED581"],
      ["T", "Toad", "🐸", "#795548"], ["A", "Alligator", "🐊", "#33691E"], ["P", "Python", "🐍", "#5D4037"],
      ["V", "Viper", "🐍", "#C62828"], ["K", "Komodo Dragon", "🦎", "#5D4037"], ["T", "Tortoise", "🐢", "#4E342E"],
      ["N", "Newt", "🦎", "#FF6F00"], ["A", "Anaconda", "🐍", "#1B5E20"], ["R", "Rattlesnake", "🐍", "#BF360C"],
      ["M", "Monitor Lizard", "🦎", "#546E7A"], ["B", "Boa", "🐍", "#5D4037"], ["S", "Skink", "🦎", "#827717"],
      ["A", "Axolotl", "🦎", "#F48FB1"], ["T", "Terrapin", "🐢", "#388E3C"], ["G", "Garter Snake", "🐍", "#2E7D32"],
      ["K", "King Snake", "🐍", "#212121"], ["B", "Basilisk", "🦎", "#4CAF50"], ["C", "Caiman", "🐊", "#33691E"],
      ["T", "Tree Frog", "🐸", "#4CAF50"], ["W", "Water Snake", "🐍", "#0277BD"], ["M", "Mamba", "🐍", "#1B5E20"],
    ],
  },
  "farm-animals": {
    name: "Farm Animals",
    videosCount: 25,
    gradients: [
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#558B2F", "#C5E1A5"], "#33691E"],
      [["#4E342E", "#BCAAA4"], "#3E2723"],
    ],
    words: [
      ["C", "Cow", "🐄", "#5D4037"], ["H", "Horse", "🐴", "#795548"], ["P", "Pig", "🐷", "#F48FB1"],
      ["S", "Sheep", "🐑", "#F5F5F5"], ["G", "Goat", "🐐", "#8D6E63"], ["C", "Chicken", "🐔", "#FFB300"],
      ["D", "Duck", "🦆", "#FBC02D"], ["T", "Turkey", "🦃", "#795548"], ["R", "Rooster", "🐓", "#D32F2F"],
      ["D", "Donkey", "🫏", "#607D8B"], ["B", "Bull", "🐂", "#5D4037"], ["R", "Rabbit", "🐇", "#F5F5F5"],
      ["G", "Goose", "🦢", "#BDBDBD"], ["L", "Llama", "🦙", "#A1887F"], ["A", "Alpaca", "🦙", "#F5F5F5"],
      ["P", "Peacock", "🦚", "#0277BD"], ["C", "Cat", "🐱", "#FF8F00"], ["D", "Dog", "🐕", "#8D6E63"],
      ["M", "Mule", "🫏", "#795548"], ["O", "Ox", "🐂", "#5D4037"], ["P", "Pony", "🐴", "#A1887F"],
      ["B", "Buffalo", "🐃", "#37474F"], ["Y", "Yak", "🐂", "#3E2723"], ["Q", "Quail", "🐦", "#8D6E63"],
      ["P", "Pigeon", "🕊️", "#9E9E9E"], ["S", "Swan", "🦢", "#F5F5F5"], ["E", "Emu", "🦤", "#5D4037"],
      ["H", "Hen", "🐔", "#FFB74D"], ["C", "Calf", "🐄", "#A1887F"], ["L", "Lamb", "🐑", "#F5F5F5"],
    ],
  },
  "kitchen-items": {
    name: "Kitchen Items",
    videosCount: 25,
    gradients: [
      [["#E65100", "#FFB74D"], "#BF360C"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#4E342E", "#BCAAA4"], "#3E2723"],
    ],
    words: [
      ["P", "Pan", "🍳", "#37474F"], ["P", "Pot", "🍲", "#455A64"], ["K", "Knife", "🔪", "#616161"],
      ["S", "Spoon", "🥄", "#9E9E9E"], ["F", "Fork", "🍴", "#BDBDBD"], ["P", "Plate", "🍽️", "#F5F5F5"],
      ["C", "Cup", "☕", "#795548"], ["G", "Glass", "🥛", "#B0BEC5"], ["B", "Bowl", "🥣", "#1565C0"],
      ["O", "Oven", "🔥", "#C62828"], ["S", "Stove", "🔥", "#D32F2F"], ["M", "Microwave", "📦", "#37474F"],
      ["B", "Blender", "🫙", "#4CAF50"], ["T", "Toaster", "🍞", "#FF8F00"], ["K", "Kettle", "🫖", "#607D8B"],
      ["R", "Rolling Pin", "🪵", "#795548"], ["C", "Cutting Board", "🪵", "#5D4037"], ["W", "Whisk", "🍳", "#FFB300"],
      ["S", "Spatula", "🍳", "#455A64"], ["L", "Ladle", "🥄", "#607D8B"], ["A", "Apron", "🧑‍🍳", "#F5F5F5"],
      ["C", "Colander", "🫙", "#9E9E9E"], ["G", "Grater", "🧀", "#BDBDBD"], ["T", "Tongs", "🦀", "#37474F"],
      ["M", "Mixer", "🍰", "#E91E63"], ["J", "Juicer", "🍊", "#FF6F00"], ["F", "Fridge", "🧊", "#F5F5F5"],
      ["S", "Sink", "🚿", "#90CAF9"], ["D", "Dish Rack", "🍽️", "#607D8B"], ["P", "Peeler", "🥔", "#FF8F00"],
    ],
  },
  "ocean-life": {
    name: "Ocean Life",
    videosCount: 25,
    gradients: [
      [["#0277BD", "#4FC3F7"], "#01579B"],
      [["#00695C", "#80CBC4"], "#004D40"],
      [["#1A237E", "#7986CB"], "#0D1257"],
    ],
    words: [
      ["W", "Whale", "🐋", "#0D47A1"], ["D", "Dolphin", "🐬", "#0288D1"], ["S", "Shark", "🦈", "#455A64"],
      ["O", "Octopus", "🐙", "#7B1FA2"], ["J", "Jellyfish", "🪼", "#F48FB1"], ["S", "Seahorse", "🐟", "#FF6F00"],
      ["C", "Clownfish", "🐠", "#FF8F00"], ["S", "Starfish", "⭐", "#FFB300"], ["T", "Turtle", "🐢", "#2E7D32"],
      ["C", "Crab", "🦀", "#D32F2F"], ["L", "Lobster", "🦞", "#C62828"], ["S", "Shrimp", "🦐", "#FF6F00"],
      ["S", "Squid", "🦑", "#E91E63"], ["R", "Ray", "🐟", "#607D8B"], ["E", "Eel", "🐍", "#37474F"],
      ["P", "Pufferfish", "🐡", "#FBC02D"], ["A", "Angelfish", "🐠", "#FFB300"], ["S", "Seal", "🦭", "#546E7A"],
      ["W", "Walrus", "🦭", "#5D4037"], ["P", "Penguin", "🐧", "#212121"], ["M", "Manatee", "🐋", "#607D8B"],
      ["N", "Narwhal", "🦄", "#90CAF9"], ["S", "Swordfish", "🐟", "#0277BD"], ["C", "Coral", "🪸", "#FF6F00"],
      ["A", "Anemone", "🌺", "#E91E63"], ["K", "Kelp", "🌿", "#2E7D32"], ["B", "Barnacle", "🐚", "#9E9E9E"],
      ["O", "Orca", "🐋", "#212121"], ["H", "Hammerhead", "🦈", "#455A64"], ["M", "Manta Ray", "🐟", "#37474F"],
    ],
  },
  "baby-animals": {
    name: "Baby Animals",
    videosCount: 25,
    gradients: [
      [["#F48FB1", "#FCE4EC"], "#AD1457"],
      [["#FFB74D", "#FFF3E0"], "#E65100"],
      [["#81D4FA", "#E1F5FE"], "#0288D1"],
    ],
    words: [
      ["K", "Kitten", "🐱", "#FF8F00"], ["P", "Puppy", "🐶", "#795548"], ["C", "Calf", "🐄", "#8D6E63"],
      ["L", "Lamb", "🐑", "#F5F5F5"], ["F", "Foal", "🐴", "#A1887F"], ["C", "Chick", "🐥", "#FDD835"],
      ["D", "Duckling", "🦆", "#FBC02D"], ["P", "Piglet", "🐷", "#F48FB1"], ["K", "Kid", "🐐", "#A1887F"],
      ["C", "Cub", "🐻", "#5D4037"], ["J", "Joey", "🦘", "#FF8F00"], ["T", "Tadpole", "🐸", "#4CAF50"],
      ["F", "Fawn", "🦌", "#8D6E63"], ["P", "Pup", "🐕", "#795548"], ["O", "Owlet", "🦉", "#5D4037"],
      ["E", "Eaglet", "🦅", "#3E2723"], ["G", "Gosling", "🦢", "#FBC02D"], ["C", "Caterpillar", "🐛", "#4CAF50"],
      ["B", "Bunny", "🐇", "#F5F5F5"], ["P", "Parrotlet", "🦜", "#4CAF50"], ["H", "Hatchling", "🐣", "#FDD835"],
      ["F", "Fingerling", "🐟", "#0288D1"], ["L", "Larva", "🐛", "#FF6F00"], ["N", "Nestling", "🐦", "#8D6E63"],
      ["W", "Whelp", "🐕", "#795548"], ["S", "Smolt", "🐟", "#00BCD4"], ["C", "Cygnet", "🦢", "#E0E0E0"],
      ["E", "Elver", "🐍", "#607D8B"], ["P", "Poult", "🦃", "#795548"], ["F", "Filly", "🐴", "#A1887F"],
    ],
  },
  "mythical-creatures": {
    name: "Mythical Creatures",
    videosCount: 20,
    gradients: [
      [["#311B92", "#7C4DFF"], "#1A0066"],
      [["#B71C1C", "#FF8A80"], "#7F0000"],
      [["#004D40", "#64FFDA"], "#00251A"],
    ],
    words: [
      ["D", "Dragon", "🐉", "#C62828"], ["U", "Unicorn", "🦄", "#E91E63"], ["P", "Phoenix", "🔥", "#FF6F00"],
      ["G", "Griffin", "🦅", "#FFB300"], ["M", "Mermaid", "🧜", "#00BCD4"], ["C", "Centaur", "🐴", "#795548"],
      ["P", "Pegasus", "🐴", "#90CAF9"], ["K", "Kraken", "🦑", "#0D47A1"], ["Y", "Yeti", "❄️", "#B0BEC5"],
      ["L", "Leprechaun", "🍀", "#388E3C"], ["F", "Fairy", "🧚", "#F48FB1"], ["E", "Elf", "🧝", "#4CAF50"],
      ["T", "Troll", "👹", "#5D4037"], ["W", "Werewolf", "🐺", "#455A64"], ["V", "Vampire", "🧛", "#C62828"],
      ["G", "Genie", "🧞", "#7B1FA2"], ["M", "Minotaur", "🐂", "#795548"], ["H", "Hydra", "🐍", "#2E7D32"],
      ["S", "Sphinx", "🏛️", "#FFB300"], ["C", "Cyclops", "👁️", "#607D8B"], ["N", "Nymph", "🧚", "#E91E63"],
      ["G", "Gnome", "🧙", "#388E3C"], ["B", "Banshee", "👻", "#7B1FA2"], ["W", "Witch", "🧙‍♀️", "#1B5E20"],
      ["W", "Wizard", "🧙", "#4527A0"], ["S", "Siren", "🧜", "#00838F"], ["T", "Thunderbird", "⚡", "#FBC02D"],
      ["C", "Chimera", "🦁", "#D32F2F"], ["G", "Gargoyle", "🗿", "#455A64"], ["M", "Medusa", "🐍", "#4CAF50"],
    ],
  },
};

// ============================================================================
// GENERATE CATALOGS
// ============================================================================

// Extra categories to reach 500
const EXTRA_CATEGORIES = {
  "weather-nature": {
    name: "Weather & Nature",
    videosCount: 20,
    gradients: [
      [["#0288D1", "#81D4FA"], "#01579B"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#1B5E20", "#A5D6A7"], "#0D3B0D"],
    ],
    words: [
      ["S", "Sun", "☀️", "#FFB300"], ["R", "Rain", "🌧️", "#0288D1"], ["S", "Snow", "❄️", "#90CAF9"],
      ["W", "Wind", "💨", "#78909C"], ["C", "Cloud", "☁️", "#B0BEC5"], ["T", "Thunder", "⚡", "#FBC02D"],
      ["L", "Lightning", "🌩️", "#FFEB3B"], ["R", "Rainbow", "🌈", "#E91E63"], ["F", "Fog", "🌫️", "#9E9E9E"],
      ["H", "Hail", "🧊", "#B0BEC5"], ["T", "Tornado", "🌪️", "#455A64"], ["S", "Storm", "⛈️", "#37474F"],
      ["D", "Dew", "💧", "#00BCD4"], ["F", "Frost", "🥶", "#90CAF9"], ["B", "Breeze", "🍃", "#4CAF50"],
      ["H", "Hurricane", "🌀", "#0D47A1"], ["M", "Monsoon", "🌧️", "#1565C0"], ["D", "Drought", "🏜️", "#FF8F00"],
      ["A", "Avalanche", "🏔️", "#B0BEC5"], ["V", "Volcano", "🌋", "#C62828"], ["E", "Earthquake", "🌍", "#795548"],
      ["T", "Tsunami", "🌊", "#01579B"], ["M", "Meteor", "☄️", "#FF6F00"], ["S", "Sunrise", "🌅", "#FF8F00"],
      ["S", "Sunset", "🌇", "#E65100"], ["M", "Moon", "🌙", "#FFB300"], ["S", "Star", "⭐", "#FDD835"],
      ["G", "Galaxy", "🌌", "#311B92"], ["C", "Comet", "☄️", "#0288D1"], ["N", "Nebula", "🌌", "#7B1FA2"],
    ],
  },
  "world-flags": {
    name: "World Flags",
    videosCount: 15,
    gradients: [
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#C62828", "#EF9A9A"], "#B71C1C"],
    ],
    words: [
      ["I", "India", "🇮🇳", "#FF8F00"], ["U", "USA", "🇺🇸", "#0D47A1"], ["J", "Japan", "🇯🇵", "#C62828"],
      ["B", "Brazil", "🇧🇷", "#2E7D32"], ["F", "France", "🇫🇷", "#1565C0"], ["G", "Germany", "🇩🇪", "#212121"],
      ["A", "Australia", "🇦🇺", "#0D47A1"], ["C", "Canada", "🇨🇦", "#C62828"], ["U", "UK", "🇬🇧", "#0D47A1"],
      ["I", "Italy", "🇮🇹", "#2E7D32"], ["S", "Spain", "🇪🇸", "#C62828"], ["R", "Russia", "🇷🇺", "#1565C0"],
      ["C", "China", "🇨🇳", "#C62828"], ["S", "South Korea", "🇰🇷", "#0D47A1"], ["M", "Mexico", "🇲🇽", "#1B5E20"],
      ["E", "Egypt", "🇪🇬", "#212121"], ["S", "South Africa", "🇿🇦", "#2E7D32"], ["T", "Turkey", "🇹🇷", "#C62828"],
      ["G", "Greece", "🇬🇷", "#1565C0"], ["S", "Sweden", "🇸🇪", "#1565C0"], ["N", "Norway", "🇳🇴", "#C62828"],
      ["S", "Switzerland", "🇨🇭", "#C62828"], ["P", "Portugal", "🇵🇹", "#2E7D32"], ["A", "Argentina", "🇦🇷", "#00BCD4"],
      ["N", "New Zealand", "🇳🇿", "#1565C0"], ["K", "Kenya", "🇰🇪", "#212121"], ["T", "Thailand", "🇹🇭", "#1565C0"],
      ["V", "Vietnam", "🇻🇳", "#C62828"], ["I", "Indonesia", "🇮🇩", "#C62828"], ["P", "Peru", "🇵🇪", "#C62828"],
    ],
  },
};

// Merge extra categories
Object.assign(CATEGORIES, EXTRA_CATEGORIES);

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

function toPascalCase(str) {
  return str.split(/[-_\\s]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("");
}

const catalog = JSON.parse(fs.readFileSync(CATALOG, "utf-8"));
const videos = Array.isArray(catalog) ? catalog : catalog.videos || [];

let content = 'import "./index.css";\\n';
content += 'import { Composition } from "remotion";\\n';
content += 'import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";\\n';
content += 'import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";\\n';
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
  const totalFrames = Math.round((introDur + items.length * letterDur + outroDur) * FPS);

  content += '      <Composition\\n';
  content += '        id="' + compId + '"\\n';
  content += '        component={AlphabetShortsTemplate}\\n';
  content += '        durationInFrames={' + totalFrames + '}\\n';
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
console.log("  500 Videos Catalog Generator");
console.log("  Date: 2nd April 2026");
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
  batchName: "500-videos-2apr-2026",
  date: "2026-04-02",
  totalVideos,
  categories: categorySummary,
};
fs.writeFileSync(path.join(BASE_DIR, "summary.json"), JSON.stringify(summary, null, 2));

console.log("\n  Summary saved to summary.json");
console.log("\nDone!");
