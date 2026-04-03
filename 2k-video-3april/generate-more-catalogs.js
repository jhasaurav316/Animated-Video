#!/usr/bin/env node
// ============================================================================
// Generate 1020 MORE Video Catalogs - 3rd April 2026 Batch (Part 2)
// ============================================================================
// Creates catalog.json for 34 NEW categories = 1020 additional videos
// Each video: ~15 items, ~2:45 (165 seconds) long-form format
//
// Usage: node 1k-video-3april/generate-more-catalogs.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const BASE_DIR = __dirname;

// ============================================================================
// CATEGORY DATA - 34 NEW categories x 30 videos each = 1020 videos
// ============================================================================

const CATEGORIES = {
  "baby-words": {
    name: "Baby Words",
    videosCount: 30,
    gradients: [
      [["#FF80AB", "#FFD1E8"], "#C51162"],
      [["#81D4FA", "#E1F5FE"], "#0277BD"],
      [["#A5D6A7", "#E8F5E9"], "#2E7D32"],
    ],
    words: [
      ["M", "Mama", "👩", "#E91E63"], ["D", "Dada", "👨", "#1565C0"], ["B", "Baby", "👶", "#FF80AB"],
      ["M", "Milk", "🍼", "#F5F5F5"], ["W", "Water", "💧", "#42A5F5"], ["B", "Ball", "⚽", "#FF5722"],
      ["D", "Dog", "🐕", "#795548"], ["C", "Cat", "🐱", "#FF8F00"], ["B", "Bye", "👋", "#FDD835"],
      ["H", "Hi", "🙋", "#4CAF50"], ["N", "No", "🙅", "#D32F2F"], ["Y", "Yes", "✅", "#2E7D32"],
      ["U", "Up", "⬆️", "#1565C0"], ["M", "More", "➕", "#7B1FA2"], ["E", "Eat", "🍽️", "#FF6F00"],
      ["S", "Sleep", "😴", "#311B92"], ["B", "Book", "📖", "#795548"], ["S", "Shoe", "👟", "#E91E63"],
      ["H", "Hat", "🎩", "#212121"], ["S", "Star", "⭐", "#FDD835"], ["C", "Cup", "🥤", "#00BCD4"],
      ["B", "Bird", "🐦", "#4CAF50"], ["F", "Fish", "🐟", "#0288D1"], ["C", "Car", "🚗", "#D32F2F"],
      ["T", "Tree", "🌳", "#2E7D32"], ["S", "Sun", "☀️", "#FFB300"], ["M", "Moon", "🌙", "#FDD835"],
      ["F", "Flower", "🌸", "#E91E63"], ["D", "Duck", "🦆", "#FDD835"], ["A", "Apple", "🍎", "#D32F2F"],
      ["B", "Banana", "🍌", "#FDD835"], ["H", "Hug", "🤗", "#FF80AB"], ["K", "Kiss", "💋", "#E91E63"],
      ["P", "Play", "🎮", "#4CAF50"], ["R", "Rain", "🌧️", "#607D8B"], ["S", "Spoon", "🥄", "#9E9E9E"],
      ["N", "Nose", "👃", "#FFB74D"], ["E", "Eye", "👁️", "#1565C0"], ["H", "Hand", "✋", "#FFB74D"],
      ["F", "Foot", "🦶", "#8D6E63"], ["T", "Tummy", "🫃", "#FFB300"], ["D", "Door", "🚪", "#795548"],
      ["L", "Love", "❤️", "#D32F2F"], ["J", "Juice", "🧃", "#FF6F00"], ["C", "Cookie", "🍪", "#8D6E63"],
    ],
  },
  "family-members": {
    name: "Family Members",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#FF9800", "#FFE0B2"], "#E65100"],
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
    ],
    words: [
      ["M", "Mom", "👩", "#E91E63"], ["D", "Dad", "👨", "#1565C0"], ["S", "Sister", "👧", "#FF80AB"],
      ["B", "Brother", "👦", "#42A5F5"], ["G", "Grandma", "👵", "#9C27B0"], ["G", "Grandpa", "👴", "#795548"],
      ["A", "Aunt", "👩", "#E91E63"], ["U", "Uncle", "👨", "#5D4037"], ["C", "Cousin", "🧑", "#FF6F00"],
      ["B", "Baby", "👶", "#FF80AB"], ["T", "Twin", "👯", "#4CAF50"], ["F", "Family", "👨‍👩‍👧‍👦", "#1565C0"],
      ["N", "Niece", "👧", "#E91E63"], ["N", "Nephew", "👦", "#0288D1"], ["S", "Son", "👦", "#42A5F5"],
      ["D", "Daughter", "👧", "#FF80AB"], ["H", "Husband", "👨", "#1565C0"], ["W", "Wife", "👩", "#E91E63"],
      ["P", "Parent", "👫", "#FF8F00"], ["C", "Child", "🧒", "#4CAF50"], ["S", "Stepmother", "👩", "#7B1FA2"],
      ["S", "Stepfather", "👨", "#5D4037"], ["G", "Godmother", "👩", "#FFB300"], ["G", "Godfather", "👨", "#212121"],
      ["M", "Mother-in-law", "👩", "#9C27B0"], ["F", "Father-in-law", "👨", "#795548"], ["S", "Sibling", "🧑‍🤝‍🧑", "#00BCD4"],
      ["T", "Toddler", "🧒", "#FF6F00"], ["I", "Infant", "👶", "#FF80AB"], ["E", "Elder", "🧓", "#607D8B"],
      ["O", "Offspring", "🧒", "#4CAF50"], ["A", "Ancestor", "🏛️", "#795548"], ["K", "Kin", "👨‍👩‍👧‍👦", "#1565C0"],
      ["F", "Foster Mom", "👩", "#E91E63"], ["R", "Relative", "🤝", "#FF8F00"], ["G", "Guardian", "🛡️", "#2E7D32"],
      ["P", "Pet Dog", "🐕", "#795548"], ["P", "Pet Cat", "🐱", "#FF8F00"], ["N", "Nanny", "👩‍🍼", "#9C27B0"],
      ["B", "Babysitter", "🧑‍🍼", "#00BCD4"], ["H", "Homemaker", "🏠", "#FF6F00"], ["G", "Grandchild", "🧒", "#4CAF50"],
      ["M", "Matriarch", "👑", "#FFB300"], ["P", "Patriarch", "👑", "#1565C0"], ["S", "Spouse", "💍", "#FFD54F"],
    ],
  },
  "weather": {
    name: "Weather",
    videosCount: 30,
    gradients: [
      [["#42A5F5", "#BBDEFB"], "#0D47A1"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#78909C", "#CFD8DC"], "#37474F"],
    ],
    words: [
      ["S", "Sun", "☀️", "#FFB300"], ["R", "Rain", "🌧️", "#42A5F5"], ["S", "Snow", "❄️", "#B0BEC5"],
      ["W", "Wind", "💨", "#607D8B"], ["C", "Cloud", "☁️", "#90A4AE"], ["T", "Thunder", "⚡", "#FDD835"],
      ["L", "Lightning", "⚡", "#FFD54F"], ["R", "Rainbow", "🌈", "#E91E63"], ["F", "Fog", "🌫️", "#B0BEC5"],
      ["H", "Hail", "🧊", "#90CAF9"], ["T", "Tornado", "🌪️", "#455A64"], ["B", "Blizzard", "🌨️", "#E0E0E0"],
      ["D", "Drizzle", "🌦️", "#64B5F6"], ["S", "Storm", "⛈️", "#37474F"], ["H", "Hurricane", "🌀", "#0277BD"],
      ["S", "Sleet", "🌨️", "#90A4AE"], ["M", "Mist", "🌫️", "#CFD8DC"], ["F", "Frost", "🥶", "#B3E5FC"],
      ["B", "Breeze", "🍃", "#81C784"], ["H", "Humid", "💧", "#4FC3F7"], ["D", "Dew", "💧", "#A5D6A7"],
      ["S", "Sunshine", "🌞", "#FDD835"], ["O", "Overcast", "☁️", "#78909C"], ["C", "Cyclone", "🌀", "#0288D1"],
      ["T", "Typhoon", "🌊", "#01579B"], ["W", "Warm", "🌡️", "#FF5722"], ["C", "Cold", "🥶", "#42A5F5"],
      ["H", "Hot", "🔥", "#D32F2F"], ["I", "Ice", "🧊", "#E3F2FD"], ["S", "Sunny", "😎", "#FFB300"],
      ["C", "Cloudy", "🌥️", "#90A4AE"], ["R", "Rainy", "☔", "#1565C0"], ["W", "Windy", "🌬️", "#607D8B"],
      ["S", "Snowy", "⛄", "#F5F5F5"], ["M", "Monsoon", "🌊", "#0D47A1"], ["A", "Aurora", "🌌", "#7B1FA2"],
      ["D", "Drought", "🏜️", "#FF8F00"], ["F", "Flood", "🌊", "#1565C0"], ["E", "Eclipse", "🌑", "#212121"],
      ["H", "Haze", "🌫️", "#BDBDBD"], ["T", "Tempest", "⛈️", "#37474F"], ["P", "Puddle", "💧", "#64B5F6"],
      ["U", "Umbrella", "☂️", "#7B1FA2"], ["G", "Gust", "💨", "#455A64"], ["N", "Nimbus", "🌧️", "#546E7A"],
    ],
  },
  "planets": {
    name: "Planets & Space Objects",
    videosCount: 30,
    gradients: [
      [["#311B92", "#B39DDB"], "#1A0A5E"],
      [["#0D47A1", "#90CAF9"], "#01579B"],
      [["#E65100", "#FFB74D"], "#BF360C"],
    ],
    words: [
      ["M", "Mercury", "☿️", "#9E9E9E"], ["V", "Venus", "🌟", "#FFB300"], ["E", "Earth", "🌍", "#2E7D32"],
      ["M", "Mars", "🔴", "#D32F2F"], ["J", "Jupiter", "🪐", "#FF8F00"], ["S", "Saturn", "🪐", "#FFB74D"],
      ["U", "Uranus", "🌐", "#00BCD4"], ["N", "Neptune", "🌊", "#1565C0"], ["P", "Pluto", "⚫", "#607D8B"],
      ["S", "Sun", "☀️", "#FDD835"], ["M", "Moon", "🌙", "#E0E0E0"], ["S", "Star", "⭐", "#FFD54F"],
      ["C", "Comet", "☄️", "#42A5F5"], ["A", "Asteroid", "🪨", "#795548"], ["G", "Galaxy", "🌌", "#7B1FA2"],
      ["N", "Nebula", "🌌", "#E91E63"], ["B", "Black Hole", "🕳️", "#212121"], ["S", "Supernova", "💥", "#FF5722"],
      ["C", "Constellation", "✨", "#311B92"], ["M", "Meteor", "☄️", "#FF6F00"], ["S", "Satellite", "🛰️", "#607D8B"],
      ["S", "Space Station", "🛸", "#455A64"], ["R", "Rocket", "🚀", "#D32F2F"], ["T", "Telescope", "🔭", "#5D4037"],
      ["O", "Orbit", "🔄", "#0288D1"], ["E", "Eclipse", "🌑", "#212121"], ["S", "Solar System", "🌞", "#FFB300"],
      ["M", "Milky Way", "🌌", "#9575CD"], ["D", "Dwarf Planet", "🌑", "#795548"], ["L", "Lunar", "🌕", "#E0E0E0"],
      ["S", "Shooting Star", "🌠", "#FDD835"], ["C", "Crater", "🌑", "#607D8B"], ["A", "Astronaut", "👩‍🚀", "#F5F5F5"],
      ["R", "Red Giant", "🔴", "#C62828"], ["W", "White Dwarf", "⚪", "#E0E0E0"], ["P", "Pulsar", "💫", "#00BCD4"],
      ["Q", "Quasar", "✨", "#7B1FA2"], ["N", "North Star", "⭐", "#FFD54F"], ["B", "Big Bang", "💥", "#FF5722"],
      ["G", "Gravity", "🍎", "#4CAF50"], ["H", "Hubble", "🔭", "#1565C0"], ["V", "Void", "🕳️", "#212121"],
      ["C", "Cosmos", "🌌", "#311B92"], ["Z", "Zodiac", "♈", "#9C27B0"], ["I", "Io Moon", "🌕", "#FDD835"],
    ],
  },
  "oceans": {
    name: "Oceans & Seas",
    videosCount: 30,
    gradients: [
      [["#0277BD", "#81D4FA"], "#01579B"],
      [["#00695C", "#80CBC4"], "#004D40"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
    ],
    words: [
      ["P", "Pacific Ocean", "🌊", "#0277BD"], ["A", "Atlantic Ocean", "🌊", "#1565C0"], ["I", "Indian Ocean", "🌊", "#00838F"],
      ["A", "Arctic Ocean", "🧊", "#B3E5FC"], ["S", "Southern Ocean", "🌊", "#0D47A1"], ["M", "Mediterranean", "🏛️", "#0288D1"],
      ["C", "Caribbean Sea", "🏝️", "#00BCD4"], ["R", "Red Sea", "🔴", "#D32F2F"], ["B", "Black Sea", "⚫", "#37474F"],
      ["C", "Caspian Sea", "🌊", "#0277BD"], ["D", "Dead Sea", "🧂", "#8D6E63"], ["C", "Coral Sea", "🪸", "#FF6F00"],
      ["N", "North Sea", "🌊", "#455A64"], ["B", "Baltic Sea", "🌊", "#546E7A"], ["S", "South China Sea", "🌊", "#0288D1"],
      ["A", "Arabian Sea", "🌊", "#00695C"], ["B", "Bay of Bengal", "🌊", "#00838F"], ["G", "Gulf of Mexico", "🌊", "#0277BD"],
      ["T", "Tasman Sea", "🌊", "#1565C0"], ["J", "Java Sea", "🌊", "#00BCD4"], ["P", "Persian Gulf", "🛢️", "#5D4037"],
      ["W", "Weddell Sea", "🧊", "#B3E5FC"], ["E", "East China Sea", "🌊", "#0288D1"], ["S", "Sargasso Sea", "🌿", "#2E7D32"],
      ["O", "Ocean Floor", "🐚", "#5D4037"], ["T", "Tide", "🌊", "#42A5F5"], ["W", "Wave", "🌊", "#0277BD"],
      ["C", "Current", "🌀", "#0288D1"], ["R", "Reef", "🪸", "#FF6F00"], ["D", "Deep Sea", "🐙", "#0D47A1"],
      ["K", "Kelp Forest", "🌿", "#2E7D32"], ["T", "Trench", "🕳️", "#212121"], ["S", "Seashore", "🏖️", "#FFB300"],
      ["I", "Island", "🏝️", "#4CAF50"], ["L", "Lagoon", "💙", "#00BCD4"], ["A", "Atoll", "🏝️", "#2E7D32"],
      ["H", "Harbor", "⚓", "#455A64"], ["M", "Marina", "⛵", "#0277BD"], ["F", "Fjord", "🏔️", "#0D47A1"],
      ["S", "Strait", "🌊", "#1565C0"], ["P", "Port", "🚢", "#455A64"], ["B", "Beach", "🏖️", "#FFB300"],
      ["G", "Glacier Sea", "🧊", "#E3F2FD"], ["U", "Underwater", "🤿", "#0277BD"], ["V", "Volcano Sea", "🌋", "#D32F2F"],
    ],
  },
  "mountains": {
    name: "Mountains & Hills",
    videosCount: 30,
    gradients: [
      [["#5D4037", "#BCAAA4"], "#3E2723"],
      [["#1B5E20", "#A5D6A7"], "#0D3B0D"],
      [["#455A64", "#B0BEC5"], "#263238"],
    ],
    words: [
      ["E", "Everest", "🏔️", "#455A64"], ["K", "K2", "🏔️", "#37474F"], ["K", "Kilimanjaro", "🏔️", "#5D4037"],
      ["M", "Mont Blanc", "🏔️", "#B0BEC5"], ["M", "Matterhorn", "🏔️", "#546E7A"], ["D", "Denali", "🏔️", "#607D8B"],
      ["F", "Fuji", "🗻", "#F5F5F5"], ["A", "Alps", "🏔️", "#00BCD4"], ["R", "Rockies", "🏔️", "#5D4037"],
      ["H", "Himalayas", "🏔️", "#455A64"], ["A", "Andes", "🏔️", "#795548"], ["A", "Appalachian", "🏔️", "#2E7D32"],
      ["V", "Volcano", "🌋", "#D32F2F"], ["P", "Peak", "⛰️", "#607D8B"], ["S", "Summit", "🏔️", "#B0BEC5"],
      ["C", "Canyon", "🏜️", "#FF8F00"], ["V", "Valley", "🌄", "#4CAF50"], ["R", "Ridge", "⛰️", "#795548"],
      ["C", "Cliff", "🧗", "#5D4037"], ["G", "Glacier", "🧊", "#E3F2FD"], ["P", "Plateau", "🏜️", "#A1887F"],
      ["H", "Hill", "⛰️", "#4CAF50"], ["M", "Mesa", "🏜️", "#FF8F00"], ["B", "Butte", "🏜️", "#8D6E63"],
      ["C", "Cascade", "💧", "#42A5F5"], ["L", "Lava", "🌋", "#FF5722"], ["T", "Terrain", "🗺️", "#5D4037"],
      ["S", "Slope", "⛷️", "#607D8B"], ["T", "Trail", "🥾", "#795548"], ["B", "Boulder", "🪨", "#9E9E9E"],
      ["R", "Ravine", "🏔️", "#37474F"], ["C", "Crevasse", "🧊", "#B3E5FC"], ["A", "Altitude", "🏔️", "#455A64"],
      ["S", "Snowcap", "❄️", "#F5F5F5"], ["L", "Landslide", "🪨", "#795548"], ["F", "Foothill", "⛰️", "#4CAF50"],
      ["E", "Erosion", "🌊", "#8D6E63"], ["M", "Moraine", "🪨", "#607D8B"], ["G", "Gorge", "🏔️", "#37474F"],
      ["S", "Sierra", "🏔️", "#5D4037"], ["T", "Tundra", "🥶", "#B0BEC5"], ["W", "Waterfall", "💧", "#0288D1"],
      ["O", "Outcrop", "🪨", "#795548"], ["D", "Dune", "🏜️", "#FFB300"], ["N", "North Face", "🏔️", "#455A64"],
    ],
  },
  "rivers": {
    name: "Rivers & Lakes",
    videosCount: 30,
    gradients: [
      [["#0288D1", "#B3E5FC"], "#01579B"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#00838F", "#B2EBF2"], "#006064"],
    ],
    words: [
      ["N", "Nile", "🌊", "#0288D1"], ["A", "Amazon", "🌊", "#2E7D32"], ["M", "Mississippi", "🌊", "#1565C0"],
      ["Y", "Yangtze", "🌊", "#00838F"], ["G", "Ganges", "🌊", "#FFB300"], ["D", "Danube", "🌊", "#0277BD"],
      ["R", "Rhine", "🌊", "#0D47A1"], ["T", "Thames", "🌊", "#455A64"], ["S", "Seine", "🌊", "#00695C"],
      ["V", "Volga", "🌊", "#546E7A"], ["C", "Colorado", "🌊", "#FF6F00"], ["N", "Niger", "🌊", "#795548"],
      ["M", "Mekong", "🌊", "#00838F"], ["C", "Congo", "🌊", "#2E7D32"], ["Z", "Zambezi", "🌊", "#0288D1"],
      ["L", "Lake Victoria", "🌊", "#0277BD"], ["L", "Lake Superior", "🌊", "#0D47A1"], ["L", "Lake Baikal", "🌊", "#42A5F5"],
      ["G", "Great Lakes", "🌊", "#1565C0"], ["L", "Lake Titicaca", "🌊", "#00BCD4"], ["C", "Caspian", "🌊", "#0288D1"],
      ["P", "Pond", "🌊", "#4CAF50"], ["S", "Stream", "🌊", "#64B5F6"], ["B", "Brook", "🌊", "#81C784"],
      ["C", "Creek", "🌊", "#66BB6A"], ["W", "Waterfall", "💧", "#42A5F5"], ["R", "Rapids", "🌊", "#0277BD"],
      ["D", "Delta", "🌊", "#2E7D32"], ["E", "Estuary", "🌊", "#00695C"], ["F", "Fjord", "🌊", "#0D47A1"],
      ["S", "Spring", "💧", "#4FC3F7"], ["O", "Oasis", "🏝️", "#FFB300"], ["R", "Reservoir", "🌊", "#455A64"],
      ["H", "Harbor", "⚓", "#546E7A"], ["T", "Tributary", "🌊", "#0288D1"], ["M", "Marsh", "🌿", "#2E7D32"],
      ["S", "Swamp", "🌿", "#33691E"], ["B", "Basin", "🌊", "#0277BD"], ["I", "Irrigation", "💧", "#4CAF50"],
      ["L", "Lagoon", "💙", "#00BCD4"], ["K", "Kayak River", "🛶", "#FF6F00"], ["W", "Wetland", "🌿", "#2E7D32"],
      ["A", "Aqueduct", "🏛️", "#795548"], ["R", "Riverbank", "🌳", "#4CAF50"], ["F", "Fountain", "⛲", "#42A5F5"],
    ],
  },
  "languages": {
    name: "World Languages",
    videosCount: 30,
    gradients: [
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#FF6F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["E", "English", "🇬🇧", "#0D47A1"], ["S", "Spanish", "🇪🇸", "#D32F2F"], ["M", "Mandarin", "🇨🇳", "#C62828"],
      ["H", "Hindi", "🇮🇳", "#FF6F00"], ["A", "Arabic", "🇸🇦", "#2E7D32"], ["F", "French", "🇫🇷", "#1565C0"],
      ["P", "Portuguese", "🇧🇷", "#2E7D32"], ["R", "Russian", "🇷🇺", "#0D47A1"], ["J", "Japanese", "🇯🇵", "#D32F2F"],
      ["G", "German", "🇩🇪", "#212121"], ["K", "Korean", "🇰🇷", "#1565C0"], ["I", "Italian", "🇮🇹", "#2E7D32"],
      ["T", "Turkish", "🇹🇷", "#D32F2F"], ["D", "Dutch", "🇳🇱", "#FF6F00"], ["S", "Swedish", "🇸🇪", "#1565C0"],
      ["P", "Polish", "🇵🇱", "#D32F2F"], ["G", "Greek", "🇬🇷", "#0288D1"], ["T", "Thai", "🇹🇭", "#7B1FA2"],
      ["V", "Vietnamese", "🇻🇳", "#D32F2F"], ["I", "Indonesian", "🇮🇩", "#D32F2F"], ["S", "Swahili", "🇰🇪", "#2E7D32"],
      ["H", "Hebrew", "🇮🇱", "#0D47A1"], ["U", "Urdu", "🇵🇰", "#2E7D32"], ["B", "Bengali", "🇧🇩", "#2E7D32"],
      ["T", "Tamil", "🇮🇳", "#FF8F00"], ["M", "Malay", "🇲🇾", "#FFB300"], ["P", "Persian", "🇮🇷", "#2E7D32"],
      ["F", "Finnish", "🇫🇮", "#0D47A1"], ["N", "Norwegian", "🇳🇴", "#D32F2F"], ["D", "Danish", "🇩🇰", "#D32F2F"],
      ["C", "Czech", "🇨🇿", "#0D47A1"], ["R", "Romanian", "🇷🇴", "#1565C0"], ["H", "Hungarian", "🇭🇺", "#2E7D32"],
      ["L", "Latin", "📜", "#795548"], ["S", "Sign Language", "🤟", "#4CAF50"], ["W", "Welsh", "🇬🇧", "#D32F2F"],
      ["C", "Cantonese", "🇭🇰", "#D32F2F"], ["Z", "Zulu", "🇿🇦", "#2E7D32"], ["A", "Amharic", "🇪🇹", "#2E7D32"],
      ["Y", "Yoruba", "🇳🇬", "#2E7D32"], ["E", "Esperanto", "🌍", "#4CAF50"], ["M", "Mongolian", "🇲🇳", "#0D47A1"],
      ["K", "Kazakh", "🇰🇿", "#00BCD4"], ["N", "Nepali", "🇳🇵", "#D32F2F"], ["O", "Odia", "🇮🇳", "#FF6F00"],
    ],
  },
  "continents": {
    name: "Continents & Countries",
    videosCount: 30,
    gradients: [
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#FF8F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["A", "Africa", "🌍", "#FF8F00"], ["A", "Asia", "🌏", "#D32F2F"], ["E", "Europe", "🌍", "#1565C0"],
      ["N", "North America", "🌎", "#2E7D32"], ["S", "South America", "🌎", "#FDD835"], ["A", "Australia", "🌏", "#FF6F00"],
      ["A", "Antarctica", "🧊", "#B3E5FC"], ["U", "USA", "🇺🇸", "#1565C0"], ["C", "Canada", "🇨🇦", "#D32F2F"],
      ["B", "Brazil", "🇧🇷", "#2E7D32"], ["I", "India", "🇮🇳", "#FF6F00"], ["C", "China", "🇨🇳", "#D32F2F"],
      ["J", "Japan", "🇯🇵", "#D32F2F"], ["F", "France", "🇫🇷", "#1565C0"], ["G", "Germany", "🇩🇪", "#212121"],
      ["I", "Italy", "🇮🇹", "#2E7D32"], ["S", "Spain", "🇪🇸", "#D32F2F"], ["U", "UK", "🇬🇧", "#0D47A1"],
      ["R", "Russia", "🇷🇺", "#0D47A1"], ["M", "Mexico", "🇲🇽", "#2E7D32"], ["E", "Egypt", "🇪🇬", "#FFB300"],
      ["K", "Kenya", "🇰🇪", "#2E7D32"], ["N", "Nigeria", "🇳🇬", "#2E7D32"], ["S", "South Africa", "🇿🇦", "#FFB300"],
      ["A", "Argentina", "🇦🇷", "#42A5F5"], ["T", "Thailand", "🇹🇭", "#7B1FA2"], ["S", "South Korea", "🇰🇷", "#1565C0"],
      ["G", "Greece", "🇬🇷", "#0288D1"], ["T", "Turkey", "🇹🇷", "#D32F2F"], ["S", "Sweden", "🇸🇪", "#1565C0"],
      ["N", "Norway", "🇳🇴", "#D32F2F"], ["S", "Switzerland", "🇨🇭", "#D32F2F"], ["P", "Portugal", "🇵🇹", "#2E7D32"],
      ["N", "New Zealand", "🇳🇿", "#1565C0"], ["I", "Iceland", "🇮🇸", "#0288D1"], ["D", "Denmark", "🇩🇰", "#D32F2F"],
      ["P", "Peru", "🇵🇪", "#D32F2F"], ["C", "Colombia", "🇨🇴", "#FDD835"], ["I", "Ireland", "🇮🇪", "#2E7D32"],
      ["V", "Vietnam", "🇻🇳", "#D32F2F"], ["P", "Philippines", "🇵🇭", "#1565C0"], ["M", "Morocco", "🇲🇦", "#D32F2F"],
      ["C", "Chile", "🇨🇱", "#D32F2F"], ["S", "Singapore", "🇸🇬", "#D32F2F"], ["F", "Finland", "🇫🇮", "#0D47A1"],
    ],
  },
  "birds-of-prey": {
    name: "Birds of Prey",
    videosCount: 30,
    gradients: [
      [["#5D4037", "#BCAAA4"], "#3E2723"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#37474F", "#B0BEC5"], "#263238"],
    ],
    words: [
      ["E", "Eagle", "🦅", "#5D4037"], ["H", "Hawk", "🦅", "#795548"], ["F", "Falcon", "🦅", "#607D8B"],
      ["O", "Owl", "🦉", "#8D6E63"], ["V", "Vulture", "🦅", "#37474F"], ["C", "Condor", "🦅", "#212121"],
      ["K", "Kestrel", "🦅", "#FF8F00"], ["O", "Osprey", "🦅", "#455A64"], ["B", "Buzzard", "🦅", "#795548"],
      ["H", "Harrier", "🦅", "#607D8B"], ["K", "Kite Bird", "🦅", "#BF360C"], ["G", "Goshawk", "🦅", "#37474F"],
      ["P", "Peregrine", "🦅", "#546E7A"], ["M", "Merlin", "🦅", "#5D4037"], ["S", "Sparrowhawk", "🦅", "#795548"],
      ["B", "Bald Eagle", "🦅", "#F5F5F5"], ["G", "Golden Eagle", "🦅", "#FFB300"], ["H", "Harpy Eagle", "🦅", "#212121"],
      ["S", "Snowy Owl", "🦉", "#F5F5F5"], ["B", "Barn Owl", "🦉", "#FFB74D"], ["G", "Great Horned Owl", "🦉", "#5D4037"],
      ["R", "Red-tailed Hawk", "🦅", "#D32F2F"], ["C", "Cooper Hawk", "🦅", "#607D8B"], ["S", "Secretary Bird", "🦅", "#37474F"],
      ["C", "Caracara", "🦅", "#FF6F00"], ["T", "Tawny Owl", "🦉", "#8D6E63"], ["E", "Eagle Owl", "🦉", "#FF8F00"],
      ["F", "Fish Eagle", "🦅", "#0288D1"], ["L", "Lammergeier", "🦅", "#BF360C"], ["S", "Steppe Eagle", "🦅", "#A1887F"],
      ["W", "Wedge-tail Eagle", "🦅", "#3E2723"], ["M", "Martial Eagle", "🦅", "#455A64"], ["N", "Northern Goshawk", "🦅", "#546E7A"],
      ["P", "Prairie Falcon", "🦅", "#8D6E63"], ["R", "Rough-legged Hawk", "🦅", "#795548"], ["A", "African Hawk", "🦅", "#5D4037"],
      ["C", "Crowned Eagle", "🦅", "#FFB300"], ["S", "Short-eared Owl", "🦉", "#A1887F"], ["L", "Long-eared Owl", "🦉", "#795548"],
      ["B", "Black Kite", "🦅", "#212121"], ["T", "Turkey Vulture", "🦅", "#D32F2F"], ["H", "Hobby Falcon", "🦅", "#607D8B"],
      ["S", "Saker Falcon", "🦅", "#BF360C"], ["G", "Gyrfalcon", "🦅", "#B0BEC5"], ["A", "Aplomado Falcon", "🦅", "#37474F"],
    ],
  },
  "tropical-fish": {
    name: "Tropical Fish",
    videosCount: 30,
    gradients: [
      [["#00BCD4", "#B2EBF2"], "#006064"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
    ],
    words: [
      ["C", "Clownfish", "🐠", "#FF6F00"], ["A", "Angelfish", "🐟", "#7B1FA2"], ["B", "Betta Fish", "🐟", "#D32F2F"],
      ["G", "Guppy", "🐟", "#4CAF50"], ["N", "Neon Tetra", "🐟", "#00BCD4"], ["D", "Discus", "🐟", "#E91E63"],
      ["T", "Tang Fish", "🐟", "#1565C0"], ["P", "Pufferfish", "🐡", "#FDD835"], ["S", "Seahorse", "🐟", "#FF8F00"],
      ["L", "Lionfish", "🐟", "#D32F2F"], ["M", "Mandarin Fish", "🐟", "#FF6F00"], ["P", "Parrotfish", "🐟", "#4CAF50"],
      ["S", "Swordtail", "🐟", "#FF5722"], ["M", "Molly Fish", "🐟", "#212121"], ["P", "Platy Fish", "🐟", "#FF8F00"],
      ["G", "Goldfish", "🐠", "#FFB300"], ["O", "Oscar Fish", "🐟", "#5D4037"], ["C", "Cichlid", "🐟", "#1565C0"],
      ["R", "Rainbowfish", "🐟", "#E91E63"], ["B", "Butterflyfish", "🐟", "#FDD835"], ["T", "Triggerfish", "🐟", "#0277BD"],
      ["W", "Wrasse", "🐟", "#4CAF50"], ["D", "Damselfish", "🐟", "#42A5F5"], ["G", "Goby Fish", "🐟", "#FFB74D"],
      ["H", "Hawkfish", "🐟", "#D32F2F"], ["J", "Jawfish", "🐟", "#FF6F00"], ["K", "Koi Fish", "🐟", "#FF5722"],
      ["E", "Electric Eel", "⚡", "#FDD835"], ["F", "Flounder", "🐟", "#8D6E63"], ["S", "Starfish", "⭐", "#FF8F00"],
      ["C", "Cardinal Tetra", "🐟", "#D32F2F"], ["Z", "Zebrafish", "🐟", "#212121"], ["B", "Blenny Fish", "🐟", "#4CAF50"],
      ["S", "Surgeonfish", "🐟", "#1565C0"], ["R", "Regal Tang", "🐟", "#0277BD"], ["A", "Arowana", "🐟", "#FFB300"],
      ["C", "Corydoras", "🐟", "#607D8B"], ["I", "Idol Fish", "🐟", "#FDD835"], ["U", "Unicorn Fish", "🐟", "#00BCD4"],
      ["N", "Napoleon Wrasse", "🐟", "#2E7D32"], ["Y", "Yellow Tang", "🐟", "#FDD835"], ["L", "Lyretail", "🐟", "#E91E63"],
      ["F", "Foxface Fish", "🐟", "#FDD835"], ["V", "Violet Goby", "🐟", "#7B1FA2"], ["X", "X-Ray Tetra", "🐟", "#B0BEC5"],
    ],
  },
  "farm-crops": {
    name: "Farm Crops",
    videosCount: 30,
    gradients: [
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#795548", "#D7CCC8"], "#4E342E"],
    ],
    words: [
      ["W", "Wheat", "🌾", "#FFB300"], ["R", "Rice", "🍚", "#F5F5F5"], ["C", "Corn", "🌽", "#FDD835"],
      ["S", "Soybean", "🫘", "#4CAF50"], ["C", "Cotton", "☁️", "#F5F5F5"], ["S", "Sugarcane", "🎋", "#2E7D32"],
      ["P", "Potato", "🥔", "#8D6E63"], ["T", "Tomato", "🍅", "#D32F2F"], ["C", "Carrot", "🥕", "#FF6F00"],
      ["O", "Onion", "🧅", "#FFB74D"], ["L", "Lettuce", "🥬", "#4CAF50"], ["B", "Barley", "🌾", "#A1887F"],
      ["O", "Oats", "🌾", "#D7CCC8"], ["M", "Millet", "🌾", "#FFB300"], ["S", "Sunflower", "🌻", "#FDD835"],
      ["P", "Peanut", "🥜", "#8D6E63"], ["A", "Alfalfa", "🌿", "#2E7D32"], ["H", "Hay", "🌾", "#FFB300"],
      ["F", "Flax", "🌿", "#0288D1"], ["C", "Canola", "🌼", "#FDD835"], ["R", "Rye", "🌾", "#795548"],
      ["B", "Buckwheat", "🌾", "#5D4037"], ["S", "Sorghum", "🌾", "#BF360C"], ["Q", "Quinoa", "🌾", "#A1887F"],
      ["T", "Tobacco", "🍃", "#2E7D32"], ["C", "Cassava", "🥔", "#8D6E63"], ["Y", "Yam", "🍠", "#FF6F00"],
      ["J", "Jute", "🌿", "#795548"], ["C", "Clover", "🍀", "#4CAF50"], ["G", "Grain", "🌾", "#FFB300"],
      ["H", "Hemp", "🌿", "#2E7D32"], ["L", "Lentil", "🫘", "#BF360C"], ["P", "Pea", "🫛", "#4CAF50"],
      ["K", "Kale", "🥬", "#2E7D32"], ["S", "Spinach", "🥬", "#1B5E20"], ["A", "Asparagus", "🌿", "#4CAF50"],
      ["E", "Eggplant", "🍆", "#7B1FA2"], ["Z", "Zucchini", "🥒", "#4CAF50"], ["P", "Pumpkin", "🎃", "#FF6F00"],
      ["M", "Mushroom", "🍄", "#795548"], ["B", "Bean", "🫘", "#5D4037"], ["N", "Nut", "🌰", "#795548"],
      ["D", "Date Palm", "🌴", "#8D6E63"], ["W", "Watermelon", "🍉", "#D32F2F"], ["I", "Indigo Plant", "🌿", "#311B92"],
    ],
  },
  "spices": {
    name: "Spices & Herbs",
    videosCount: 30,
    gradients: [
      [["#BF360C", "#FFAB91"], "#8D2C0A"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#FF8F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["C", "Cinnamon", "🟤", "#BF360C"], ["P", "Pepper", "🌶️", "#212121"], ["S", "Salt", "🧂", "#9E9E9E"],
      ["T", "Turmeric", "🟡", "#FFB300"], ["G", "Ginger", "🫚", "#FF8F00"], ["G", "Garlic", "🧄", "#F5F5F5"],
      ["B", "Basil", "🌿", "#2E7D32"], ["O", "Oregano", "🌿", "#4CAF50"], ["R", "Rosemary", "🌿", "#1B5E20"],
      ["T", "Thyme", "🌿", "#558B2F"], ["P", "Parsley", "🌿", "#4CAF50"], ["M", "Mint", "🌿", "#00BCD4"],
      ["C", "Cumin", "🟤", "#795548"], ["C", "Cardamom", "🟢", "#2E7D32"], ["N", "Nutmeg", "🟤", "#5D4037"],
      ["C", "Clove", "🟤", "#3E2723"], ["S", "Saffron", "🟡", "#FFB300"], ["V", "Vanilla", "🟤", "#8D6E63"],
      ["D", "Dill", "🌿", "#4CAF50"], ["C", "Chili", "🌶️", "#D32F2F"], ["F", "Fennel", "🌿", "#2E7D32"],
      ["S", "Star Anise", "⭐", "#5D4037"], ["L", "Lavender", "💜", "#7B1FA2"], ["B", "Bay Leaf", "🍃", "#2E7D32"],
      ["A", "Allspice", "🟤", "#795548"], ["C", "Coriander", "🌿", "#4CAF50"], ["P", "Paprika", "🌶️", "#D32F2F"],
      ["M", "Mustard Seed", "🟡", "#FDD835"], ["W", "Wasabi", "🟢", "#4CAF50"], ["T", "Tarragon", "🌿", "#558B2F"],
      ["S", "Sage", "🌿", "#607D8B"], ["C", "Cayenne", "🌶️", "#FF5722"], ["H", "Horseradish", "🌿", "#F5F5F5"],
      ["J", "Juniper Berry", "🟤", "#311B92"], ["L", "Lemongrass", "🌿", "#CDDC39"], ["M", "Marjoram", "🌿", "#4CAF50"],
      ["S", "Sumac", "🔴", "#C62828"], ["Z", "Za'atar", "🌿", "#795548"], ["R", "Red Pepper", "🌶️", "#D32F2F"],
      ["E", "Epazote", "🌿", "#2E7D32"], ["K", "Kaffir Lime", "🍋", "#CDDC39"], ["U", "Umami Powder", "🟤", "#795548"],
      ["I", "Italian Herbs", "🌿", "#4CAF50"], ["Y", "Yellow Curry", "🟡", "#FFB300"], ["H", "Herb Mix", "🌿", "#2E7D32"],
    ],
  },
  "breads": {
    name: "Breads of the World",
    videosCount: 30,
    gradients: [
      [["#8D6E63", "#D7CCC8"], "#4E342E"],
      [["#FFB300", "#FFE082"], "#FF6F00"],
      [["#BF360C", "#FFAB91"], "#8D2C0A"],
    ],
    words: [
      ["B", "Baguette", "🥖", "#8D6E63"], ["S", "Sourdough", "🍞", "#A1887F"], ["N", "Naan", "🫓", "#FFB74D"],
      ["P", "Pita", "🫓", "#D7CCC8"], ["T", "Tortilla", "🫓", "#FFB300"], ["C", "Croissant", "🥐", "#FFB74D"],
      ["F", "Focaccia", "🍞", "#8D6E63"], ["B", "Brioche", "🍞", "#FFB300"], ["R", "Rye Bread", "🍞", "#5D4037"],
      ["C", "Ciabatta", "🍞", "#A1887F"], ["P", "Pretzel", "🥨", "#795548"], ["M", "Muffin", "🧁", "#FF8F00"],
      ["B", "Bagel", "🥯", "#8D6E63"], ["C", "Cornbread", "🍞", "#FDD835"], ["S", "Scone", "🍞", "#D7CCC8"],
      ["W", "Waffle", "🧇", "#FFB300"], ["P", "Pancake", "🥞", "#FFB74D"], ["R", "Roll", "🍞", "#A1887F"],
      ["F", "Flatbread", "🫓", "#D7CCC8"], ["C", "Challah", "🍞", "#FFB300"], ["D", "Donut", "🍩", "#E91E63"],
      ["E", "English Muffin", "🍞", "#8D6E63"], ["G", "Garlic Bread", "🧄", "#FFB74D"], ["L", "Lavash", "🫓", "#D7CCC8"],
      ["O", "Olive Bread", "🫒", "#558B2F"], ["P", "Pumpernickel", "🍞", "#3E2723"], ["S", "Sandwich Bread", "🍞", "#A1887F"],
      ["T", "Toast", "🍞", "#8D6E63"], ["W", "Whole Wheat", "🌾", "#795548"], ["Z", "Zopf Bread", "🍞", "#FFB300"],
      ["A", "Arepa", "🫓", "#FFB74D"], ["B", "Banana Bread", "🍌", "#FDD835"], ["H", "Hot Dog Bun", "🌭", "#8D6E63"],
      ["I", "Irish Soda Bread", "🍞", "#2E7D32"], ["K", "Kaiser Roll", "🍞", "#A1887F"], ["M", "Matzo", "🫓", "#D7CCC8"],
      ["N", "Nutbread", "🥜", "#795548"], ["R", "Roti", "🫓", "#FFB74D"], ["C", "Crumpet", "🫓", "#FFB300"],
      ["D", "Damper Bread", "🍞", "#8D6E63"], ["J", "Johnnycake", "🍞", "#FDD835"], ["U", "Unleavened Bread", "🫓", "#D7CCC8"],
      ["V", "Vienna Bread", "🍞", "#A1887F"], ["Y", "Yeast Roll", "🍞", "#FFB74D"], ["X", "Xylopita", "🫓", "#8D6E63"],
    ],
  },
  "pasta": {
    name: "Pasta & Noodles",
    videosCount: 30,
    gradients: [
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#D32F2F", "#EF9A9A"], "#B71C1C"],
      [["#FDD835", "#FFF9C4"], "#F9A825"],
    ],
    words: [
      ["S", "Spaghetti", "🍝", "#FFB300"], ["P", "Penne", "🍝", "#FF8F00"], ["F", "Fusilli", "🍝", "#FDD835"],
      ["L", "Lasagna", "🍝", "#D32F2F"], ["R", "Ravioli", "🥟", "#FF6F00"], ["M", "Macaroni", "🍝", "#FFB300"],
      ["T", "Tagliatelle", "🍝", "#FF8F00"], ["G", "Gnocchi", "🍝", "#F5F5F5"], ["O", "Orzo", "🍝", "#FDD835"],
      ["R", "Rigatoni", "🍝", "#FFB74D"], ["F", "Fettuccine", "🍝", "#FFB300"], ["L", "Linguine", "🍝", "#FDD835"],
      ["C", "Cannelloni", "🍝", "#FF6F00"], ["T", "Tortellini", "🍝", "#FF8F00"], ["V", "Vermicelli", "🍝", "#FFB74D"],
      ["U", "Udon", "🍜", "#F5F5F5"], ["R", "Ramen", "🍜", "#FF8F00"], ["S", "Soba", "🍜", "#5D4037"],
      ["P", "Pho Noodles", "🍜", "#D7CCC8"], ["L", "Lo Mein", "🍜", "#795548"], ["C", "Chow Mein", "🍜", "#FF8F00"],
      ["R", "Rice Noodles", "🍜", "#F5F5F5"], ["G", "Glass Noodles", "🍜", "#E0E0E0"], ["E", "Egg Noodles", "🍜", "#FDD835"],
      ["Z", "Ziti", "🍝", "#FF6F00"], ["D", "Ditalini", "🍝", "#FFB300"], ["B", "Bucatini", "🍝", "#FFB74D"],
      ["A", "Angel Hair", "🍝", "#FDD835"], ["C", "Couscous", "🍝", "#FFB300"], ["P", "Pappardelle", "🍝", "#FF8F00"],
      ["M", "Mostaccioli", "🍝", "#FFB74D"], ["C", "Cavatappi", "🍝", "#FF6F00"], ["F", "Farfalle", "🦋", "#FDD835"],
      ["S", "Shells Pasta", "🐚", "#FFB300"], ["W", "Wonton Noodles", "🥟", "#FFB74D"], ["N", "Noodle Soup", "🍜", "#FF8F00"],
      ["I", "Instant Noodles", "🍜", "#D32F2F"], ["K", "Kluski", "🍜", "#FFB300"], ["H", "Hokkien Noodles", "🍜", "#795548"],
      ["J", "Japchae", "🍜", "#5D4037"], ["Y", "Yakisoba", "🍜", "#FF8F00"], ["S", "Somen", "🍜", "#F5F5F5"],
      ["P", "Pad Thai", "🍜", "#FF6F00"], ["D", "Dan Dan Noodles", "🍜", "#D32F2F"], ["T", "Tofu Noodles", "🍜", "#F5F5F5"],
    ],
  },
  "cheese": {
    name: "Cheese Types",
    videosCount: 30,
    gradients: [
      [["#FFB300", "#FFE082"], "#FF6F00"],
      [["#FDD835", "#FFF9C4"], "#F9A825"],
      [["#8D6E63", "#D7CCC8"], "#4E342E"],
    ],
    words: [
      ["C", "Cheddar", "🧀", "#FF8F00"], ["M", "Mozzarella", "🧀", "#F5F5F5"], ["B", "Brie", "🧀", "#F5F5F5"],
      ["P", "Parmesan", "🧀", "#FFB300"], ["G", "Gouda", "🧀", "#FF8F00"], ["S", "Swiss", "🧀", "#FDD835"],
      ["F", "Feta", "🧀", "#F5F5F5"], ["C", "Camembert", "🧀", "#F5F5F5"], ["R", "Ricotta", "🧀", "#FAFAFA"],
      ["B", "Blue Cheese", "🧀", "#0D47A1"], ["G", "Gruyere", "🧀", "#FFB300"], ["P", "Provolone", "🧀", "#FDD835"],
      ["M", "Manchego", "🧀", "#FFB74D"], ["C", "Cream Cheese", "🧀", "#FAFAFA"], ["C", "Cottage Cheese", "🧀", "#F5F5F5"],
      ["E", "Emmental", "🧀", "#FDD835"], ["H", "Havarti", "🧀", "#FFB300"], ["A", "Asiago", "🧀", "#FF8F00"],
      ["M", "Monterey Jack", "🧀", "#FDD835"], ["C", "Colby", "🧀", "#FF6F00"], ["G", "Goat Cheese", "🐐", "#F5F5F5"],
      ["L", "Limburger", "🧀", "#FFB74D"], ["T", "Taleggio", "🧀", "#FF8F00"], ["R", "Roquefort", "🧀", "#0D47A1"],
      ["S", "Stilton", "🧀", "#0277BD"], ["P", "Pecorino", "🧀", "#FFB300"], ["M", "Muenster", "🧀", "#FF6F00"],
      ["B", "Burrata", "🧀", "#FAFAFA"], ["F", "Fontina", "🧀", "#FFB300"], ["N", "Neufchatel", "🧀", "#F5F5F5"],
      ["W", "Wensleydale", "🧀", "#F5F5F5"], ["J", "Jarlsberg", "🧀", "#FDD835"], ["K", "Kashkaval", "🧀", "#FFB74D"],
      ["O", "Oaxaca Cheese", "🧀", "#F5F5F5"], ["D", "Danblu", "🧀", "#0288D1"], ["V", "Velveeta", "🧀", "#FFB300"],
      ["Z", "Zamorano", "🧀", "#A1887F"], ["I", "Irish Cheddar", "🧀", "#2E7D32"], ["U", "Urgelia", "🧀", "#8D6E63"],
      ["Q", "Queso Fresco", "🧀", "#F5F5F5"], ["Y", "Yarg Cheese", "🧀", "#4CAF50"], ["X", "Xynotyri", "🧀", "#F5F5F5"],
      ["A", "American Cheese", "🧀", "#FDD835"], ["L", "Leicester", "🧀", "#FF6F00"], ["S", "String Cheese", "🧀", "#FFB300"],
    ],
  },
  "dessert-types": {
    name: "Dessert Types",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
    ],
    words: [
      ["C", "Cake", "🎂", "#E91E63"], ["I", "Ice Cream", "🍦", "#FF80AB"], ["P", "Pie", "🥧", "#FF8F00"],
      ["C", "Cookie", "🍪", "#8D6E63"], ["B", "Brownie", "🍫", "#5D4037"], ["D", "Donut", "🍩", "#FF6F00"],
      ["C", "Cupcake", "🧁", "#E91E63"], ["P", "Pudding", "🍮", "#FFB300"], ["J", "Jelly", "🟢", "#4CAF50"],
      ["M", "Macaron", "🟣", "#9C27B0"], ["C", "Cheesecake", "🍰", "#FFB300"], ["T", "Tiramisu", "☕", "#5D4037"],
      ["W", "Waffle", "🧇", "#FFB300"], ["C", "Crepe", "🫓", "#FFB74D"], ["F", "Flan", "🍮", "#FF8F00"],
      ["S", "Sundae", "🍨", "#D32F2F"], ["P", "Panna Cotta", "🍮", "#F5F5F5"], ["E", "Eclair", "🍫", "#5D4037"],
      ["S", "Souffle", "🍮", "#FDD835"], ["M", "Mousse", "🍫", "#3E2723"], ["C", "Creme Brulee", "🍮", "#FFB300"],
      ["G", "Gelato", "🍨", "#00BCD4"], ["S", "Sorbet", "🍧", "#E91E63"], ["T", "Trifle", "🍰", "#D32F2F"],
      ["B", "Baklava", "🍯", "#FF8F00"], ["C", "Cannoli", "🍫", "#8D6E63"], ["R", "Rice Pudding", "🍚", "#F5F5F5"],
      ["K", "Kulfi", "🍦", "#4CAF50"], ["G", "Gulab Jamun", "🟤", "#BF360C"], ["M", "Mochi", "🍡", "#E91E63"],
      ["D", "Danish", "🥐", "#FFB300"], ["A", "Apple Strudel", "🍎", "#D32F2F"], ["L", "Lemon Tart", "🍋", "#FDD835"],
      ["H", "Honey Cake", "🍯", "#FFB300"], ["N", "Nougat", "🍬", "#F5F5F5"], ["O", "Opera Cake", "🎵", "#3E2723"],
      ["P", "Profiterole", "🍫", "#5D4037"], ["V", "Vanilla Cake", "🍰", "#FDD835"], ["Z", "Zabaglione", "🍷", "#FFB300"],
      ["U", "Upside Down Cake", "🎂", "#FF6F00"], ["Y", "Yogurt Parfait", "🍨", "#F5F5F5"], ["S", "Strawberry Tart", "🍓", "#D32F2F"],
      ["F", "Fruit Salad", "🍇", "#7B1FA2"], ["C", "Chocolate Cake", "🍫", "#3E2723"], ["R", "Red Velvet", "❤️", "#C62828"],
    ],
  },
  "dance-styles": {
    name: "Dance Styles",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
    ],
    words: [
      ["B", "Ballet", "🩰", "#E91E63"], ["H", "Hip Hop", "🎤", "#212121"], ["S", "Salsa", "💃", "#D32F2F"],
      ["T", "Tango", "🕺", "#C62828"], ["W", "Waltz", "💃", "#7B1FA2"], ["J", "Jazz", "🎷", "#FFB300"],
      ["B", "Breakdance", "🤸", "#1565C0"], ["F", "Flamenco", "💃", "#D32F2F"], ["S", "Samba", "💃", "#4CAF50"],
      ["C", "Cha Cha", "💃", "#FF6F00"], ["R", "Rumba", "💃", "#E91E63"], ["T", "Tap Dance", "👟", "#607D8B"],
      ["S", "Swing", "🕺", "#FFB300"], ["P", "Polka", "💃", "#E91E63"], ["L", "Line Dance", "🤠", "#795548"],
      ["C", "Contemporary", "💃", "#00BCD4"], ["M", "Modern Dance", "💃", "#7B1FA2"], ["B", "Bollywood", "🎬", "#FF6F00"],
      ["K", "K-Pop Dance", "🎵", "#E91E63"], ["F", "Foxtrot", "🕺", "#455A64"], ["Q", "Quickstep", "🕺", "#1565C0"],
      ["V", "Viennese Waltz", "💃", "#9C27B0"], ["M", "Merengue", "💃", "#FF5722"], ["J", "Jive", "🕺", "#FDD835"],
      ["C", "Capoeira", "🤸", "#2E7D32"], ["B", "Belly Dance", "💃", "#FFB300"], ["I", "Irish Dance", "🍀", "#4CAF50"],
      ["S", "Street Dance", "🎤", "#212121"], ["L", "Lyrical", "💃", "#90CAF9"], ["A", "Afrobeats", "🥁", "#FF6F00"],
      ["D", "Disco", "🪩", "#7B1FA2"], ["E", "Electric Slide", "⚡", "#FDD835"], ["G", "Groove Dance", "🎵", "#4CAF50"],
      ["H", "Highland Dance", "🏴", "#0D47A1"], ["N", "Nightclub Two", "🕺", "#212121"], ["O", "Oriental Dance", "💃", "#FFB300"],
      ["P", "Paso Doble", "🐂", "#D32F2F"], ["R", "Robot Dance", "🤖", "#607D8B"], ["Z", "Zumba", "💃", "#E91E63"],
      ["T", "Twist Dance", "🕺", "#FF6F00"], ["W", "West Coast Swing", "🕺", "#1565C0"], ["Y", "Yoga Dance", "🧘", "#4CAF50"],
      ["U", "Urban Dance", "🎤", "#212121"], ["C", "Cumbia", "💃", "#FFB300"], ["S", "Square Dance", "🤠", "#795548"],
    ],
  },
  "martial-arts": {
    name: "Martial Arts",
    videosCount: 30,
    gradients: [
      [["#D32F2F", "#EF9A9A"], "#B71C1C"],
      [["#212121", "#757575"], "#000000"],
      [["#FF8F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["K", "Karate", "🥋", "#D32F2F"], ["J", "Judo", "🥋", "#1565C0"], ["T", "Taekwondo", "🥋", "#212121"],
      ["K", "Kung Fu", "🥋", "#C62828"], ["A", "Aikido", "🥋", "#607D8B"], ["B", "Boxing", "🥊", "#D32F2F"],
      ["W", "Wrestling", "🤼", "#FF8F00"], ["M", "Muay Thai", "🥊", "#D32F2F"], ["J", "Jiu-Jitsu", "🥋", "#1565C0"],
      ["S", "Sumo", "🤼", "#212121"], ["F", "Fencing", "🤺", "#607D8B"], ["C", "Capoeira", "🤸", "#2E7D32"],
      ["K", "Kendo", "⚔️", "#37474F"], ["N", "Ninjutsu", "🥷", "#212121"], ["T", "Tai Chi", "🧘", "#4CAF50"],
      ["W", "Wing Chun", "🥋", "#FF6F00"], ["H", "Hapkido", "🥋", "#0277BD"], ["S", "Sambo", "🥋", "#D32F2F"],
      ["K", "Kickboxing", "🥊", "#FF5722"], ["C", "Capoeira", "🤸", "#4CAF50"], ["M", "MMA", "🤼", "#212121"],
      ["S", "Shaolin", "🏯", "#C62828"], ["K", "Krav Maga", "🥊", "#37474F"], ["P", "Pencak Silat", "🥋", "#2E7D32"],
      ["I", "Iaido", "⚔️", "#455A64"], ["W", "Wushu", "🥋", "#D32F2F"], ["E", "Escrima", "🥢", "#795548"],
      ["L", "Lethwei", "🥊", "#FF6F00"], ["S", "Savate", "👟", "#1565C0"], ["G", "Gatka", "⚔️", "#FF8F00"],
      ["D", "Dragon Style", "🐉", "#D32F2F"], ["T", "Tiger Style", "🐯", "#FF6F00"], ["C", "Crane Style", "🦢", "#F5F5F5"],
      ["M", "Monkey Style", "🐒", "#795548"], ["S", "Snake Style", "🐍", "#2E7D32"], ["P", "Praying Mantis", "🦗", "#4CAF50"],
      ["B", "Black Belt", "🥋", "#212121"], ["R", "Roundhouse Kick", "🦵", "#D32F2F"], ["U", "Uppercut", "🥊", "#FF5722"],
      ["D", "Dojo", "🏯", "#795548"], ["G", "Gi Uniform", "🥋", "#F5F5F5"], ["N", "Nunchaku", "🥢", "#5D4037"],
      ["S", "Shuriken", "⭐", "#607D8B"], ["K", "Katana", "⚔️", "#455A64"], ["B", "Bo Staff", "🥢", "#795548"],
    ],
  },
  "board-games": {
    name: "Board Games",
    videosCount: 30,
    gradients: [
      [["#4527A0", "#B39DDB"], "#311B92"],
      [["#FF6F00", "#FFE082"], "#E65100"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
    ],
    words: [
      ["C", "Chess", "♟️", "#37474F"], ["C", "Checkers", "🔴", "#D32F2F"], ["M", "Monopoly", "🏠", "#2E7D32"],
      ["S", "Scrabble", "🔤", "#C62828"], ["R", "Risk", "🗺️", "#1565C0"], ["C", "Clue", "🔎", "#7B1FA2"],
      ["L", "Life Game", "🎯", "#FF6F00"], ["S", "Sorry", "😅", "#E91E63"], ["C", "Connect Four", "🔵", "#1565C0"],
      ["B", "Battleship", "🚢", "#455A64"], ["O", "Operation", "🩺", "#D32F2F"], ["Y", "Yahtzee", "🎲", "#4CAF50"],
      ["T", "Trivial Pursuit", "🧠", "#FF8F00"], ["D", "Dominoes", "🁢", "#212121"], ["B", "Backgammon", "🎲", "#795548"],
      ["G", "Go", "⚫", "#212121"], ["M", "Mancala", "🟤", "#8D6E63"], ["C", "Candy Land", "🍬", "#E91E63"],
      ["C", "Chutes Ladders", "🪜", "#4CAF50"], ["J", "Jenga", "🧱", "#FFB300"], ["P", "Pictionary", "🎨", "#0288D1"],
      ["C", "Cranium", "🧠", "#7B1FA2"], ["T", "Twister", "🌀", "#4CAF50"], ["U", "Uno Cards", "🃏", "#D32F2F"],
      ["S", "Stratego", "⚔️", "#C62828"], ["K", "Kerplunk", "🔴", "#4CAF50"], ["H", "Hungry Hippos", "🦛", "#2E7D32"],
      ["M", "Mouse Trap", "🐭", "#FDD835"], ["G", "Guess Who", "🤔", "#1565C0"], ["B", "Boggle", "🔤", "#FF6F00"],
      ["L", "Ludo", "🎲", "#D32F2F"], ["P", "Parcheesi", "🎲", "#1565C0"], ["S", "Snakes Ladders", "🐍", "#4CAF50"],
      ["C", "Catan", "🏝️", "#FF6F00"], ["T", "Ticket to Ride", "🚂", "#0277BD"], ["P", "Pandemic", "🦠", "#2E7D32"],
      ["A", "Azul", "🟦", "#0288D1"], ["W", "Wingspan", "🐦", "#E91E63"], ["D", "Dixit", "🎨", "#7B1FA2"],
      ["R", "Root", "🦊", "#FF6F00"], ["E", "Everdell", "🐿️", "#4CAF50"], ["S", "Splendor", "💎", "#311B92"],
      ["G", "Gloomhaven", "⚔️", "#455A64"], ["Z", "Zombicide", "🧟", "#2E7D32"], ["N", "Nemesis", "👽", "#37474F"],
    ],
  },
  "video-games": {
    name: "Video Games",
    videosCount: 30,
    gradients: [
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
    ],
    words: [
      ["M", "Minecraft", "⛏️", "#4CAF50"], ["F", "Fortnite", "🎮", "#1565C0"], ["R", "Roblox", "🟥", "#D32F2F"],
      ["P", "Pokemon", "⚡", "#FDD835"], ["M", "Mario Bros", "🍄", "#D32F2F"], ["Z", "Zelda", "🗡️", "#2E7D32"],
      ["S", "Sonic", "🦔", "#1565C0"], ["P", "Pac-Man", "🟡", "#FDD835"], ["T", "Tetris", "🟦", "#0288D1"],
      ["A", "Among Us", "🧑‍🚀", "#D32F2F"], ["A", "Animal Crossing", "🏝️", "#4CAF50"], ["K", "Kirby", "🟣", "#E91E63"],
      ["D", "Donkey Kong", "🦍", "#5D4037"], ["L", "Luigi Mansion", "👻", "#2E7D32"], ["Y", "Yoshi", "🦕", "#4CAF50"],
      ["C", "Crash Bandicoot", "🧡", "#FF6F00"], ["S", "Splatoon", "🦑", "#E91E63"], ["S", "Super Smash", "💥", "#D32F2F"],
      ["P", "Pikmin", "🌱", "#4CAF50"], ["M", "Mega Man", "🤖", "#1565C0"], ["R", "Rocket League", "🚗", "#FF6F00"],
      ["F", "Fall Guys", "🏃", "#E91E63"], ["O", "Overwatch", "🎯", "#FF8F00"], ["G", "Gran Turismo", "🏎️", "#0D47A1"],
      ["S", "Street Fighter", "🥊", "#D32F2F"], ["N", "NBA2K", "🏀", "#FF6F00"], ["F", "FIFA Soccer", "⚽", "#2E7D32"],
      ["W", "Wii Sports", "🎾", "#42A5F5"], ["J", "Just Dance", "💃", "#E91E63"], ["H", "Halo", "🎮", "#2E7D32"],
      ["C", "Call of Duty", "🎖️", "#455A64"], ["G", "GTA", "🚗", "#212121"], ["T", "The Sims", "🏠", "#4CAF50"],
      ["L", "LEGO Games", "🧱", "#FDD835"], ["E", "Elder Scrolls", "📜", "#795548"], ["S", "Spiderman Game", "🕷️", "#D32F2F"],
      ["B", "Batman Arkham", "🦇", "#212121"], ["I", "Itch.io Games", "🎮", "#E91E63"], ["U", "Undertale", "❤️", "#D32F2F"],
      ["C", "Cuphead", "☕", "#D32F2F"], ["V", "Valorant", "🎯", "#D32F2F"], ["H", "Hollow Knight", "🦋", "#37474F"],
      ["S", "Stardew Valley", "🌾", "#4CAF50"], ["D", "Dark Souls", "🔥", "#FF6F00"], ["G", "God of War", "⚔️", "#C62828"],
    ],
  },
  "fairy-creatures": {
    name: "Fairy Creatures",
    videosCount: 30,
    gradients: [
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#00BCD4", "#B2EBF2"], "#006064"],
    ],
    words: [
      ["U", "Unicorn", "🦄", "#E91E63"], ["D", "Dragon", "🐉", "#D32F2F"], ["F", "Fairy", "🧚", "#E91E63"],
      ["M", "Mermaid", "🧜‍♀️", "#00BCD4"], ["P", "Phoenix", "🔥", "#FF6F00"], ["G", "Griffin", "🦅", "#FFB300"],
      ["E", "Elf", "🧝", "#2E7D32"], ["T", "Troll", "🧌", "#607D8B"], ["G", "Gnome", "🧙", "#D32F2F"],
      ["C", "Centaur", "🐴", "#795548"], ["P", "Pegasus", "🐴", "#F5F5F5"], ["W", "Wizard", "🧙‍♂️", "#311B92"],
      ["S", "Sphinx", "🦁", "#FFB300"], ["K", "Kraken", "🐙", "#0D47A1"], ["M", "Minotaur", "🐂", "#795548"],
      ["C", "Cyclops", "👁️", "#607D8B"], ["G", "Genie", "🧞", "#7B1FA2"], ["N", "Nymph", "🌿", "#4CAF50"],
      ["L", "Leprechaun", "🍀", "#4CAF50"], ["Y", "Yeti", "❄️", "#B0BEC5"], ["B", "Bigfoot", "🦶", "#5D4037"],
      ["V", "Vampire", "🧛", "#C62828"], ["W", "Werewolf", "🐺", "#607D8B"], ["Z", "Zombie", "🧟", "#2E7D32"],
      ["G", "Ghost", "👻", "#B0BEC5"], ["W", "Witch", "🧙‍♀️", "#7B1FA2"], ["O", "Ogre", "👹", "#4CAF50"],
      ["H", "Hydra", "🐍", "#2E7D32"], ["D", "Dwarf", "⛏️", "#795548"], ["S", "Siren", "🧜‍♀️", "#0288D1"],
      ["R", "Roc Bird", "🦅", "#5D4037"], ["B", "Basilisk", "🐍", "#2E7D32"], ["I", "Imp", "😈", "#D32F2F"],
      ["J", "Jackalope", "🐰", "#8D6E63"], ["T", "Thunderbird", "⚡", "#1565C0"], ["A", "Angel", "👼", "#FFD54F"],
      ["P", "Pixie", "✨", "#E91E63"], ["F", "Fairy Godmother", "🧚‍♀️", "#9C27B0"], ["N", "Nessie", "🦕", "#0277BD"],
      ["K", "Kelpie", "🐴", "#00695C"], ["S", "Selkie", "🦭", "#0288D1"], ["C", "Chimera", "🦁", "#FF6F00"],
      ["M", "Manticore", "🦂", "#C62828"], ["G", "Gargoyle", "🗿", "#607D8B"], ["L", "Loch Ness", "🦕", "#0277BD"],
    ],
  },
  "robots": {
    name: "Robots & Machines",
    videosCount: 30,
    gradients: [
      [["#455A64", "#B0BEC5"], "#263238"],
      [["#1565C0", "#90CAF9"], "#0D47A1"],
      [["#FF6F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["R", "Robot", "🤖", "#607D8B"], ["D", "Drone", "🚁", "#455A64"], ["C", "Computer", "💻", "#1565C0"],
      ["A", "Android", "🤖", "#4CAF50"], ["C", "Cyborg", "🦾", "#37474F"], ["M", "Machine", "⚙️", "#607D8B"],
      ["E", "Engine", "🔧", "#455A64"], ["G", "Gear", "⚙️", "#9E9E9E"], ["P", "Processor", "🧠", "#1565C0"],
      ["S", "Sensor", "📡", "#00BCD4"], ["L", "Laser", "🔴", "#D32F2F"], ["C", "Circuit", "💡", "#4CAF50"],
      ["B", "Battery", "🔋", "#4CAF50"], ["W", "Wire", "🔌", "#FF6F00"], ["M", "Motor", "⚙️", "#455A64"],
      ["A", "Antenna", "📡", "#607D8B"], ["S", "Speaker", "🔊", "#212121"], ["C", "Camera", "📷", "#37474F"],
      ["P", "Printer", "🖨️", "#607D8B"], ["S", "Scanner", "🔍", "#1565C0"], ["R", "Remote Control", "🎮", "#212121"],
      ["J", "Joystick", "🕹️", "#D32F2F"], ["M", "Microchip", "🔬", "#2E7D32"], ["T", "Transformer", "🤖", "#1565C0"],
      ["H", "Humanoid", "🧑‍🔬", "#607D8B"], ["N", "Nano Bot", "🔬", "#4CAF50"], ["R", "Rover", "🤖", "#D32F2F"],
      ["S", "Satellite Bot", "🛰️", "#0D47A1"], ["A", "AI Brain", "🧠", "#7B1FA2"], ["F", "Factory Bot", "🏭", "#FF8F00"],
      ["C", "Claw Machine", "🦾", "#FF6F00"], ["D", "Data Bot", "💾", "#1565C0"], ["W", "Welding Bot", "🔥", "#FF5722"],
      ["P", "Probe", "🛸", "#455A64"], ["R", "Robotic Arm", "🦾", "#607D8B"], ["T", "Turret", "🎯", "#37474F"],
      ["V", "Vacuum Bot", "🧹", "#9E9E9E"], ["K", "Kitchen Bot", "🍳", "#FF8F00"], ["G", "Guard Bot", "🛡️", "#455A64"],
      ["O", "Optimus", "🤖", "#1565C0"], ["B", "Bumble Bot", "🐝", "#FDD835"], ["U", "Utility Bot", "🔧", "#607D8B"],
      ["X", "X-Ray Machine", "🔬", "#0288D1"], ["Z", "Zero Bot", "🤖", "#212121"], ["I", "Inspector Bot", "🔎", "#FF6F00"],
    ],
  },
  "dinosaur-types": {
    name: "Dinosaur Types",
    videosCount: 30,
    gradients: [
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#5D4037", "#BCAAA4"], "#3E2723"],
      [["#FF6F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["T", "T-Rex", "🦖", "#2E7D32"], ["T", "Triceratops", "🦕", "#607D8B"], ["S", "Stegosaurus", "🦕", "#4CAF50"],
      ["V", "Velociraptor", "🦖", "#FF6F00"], ["B", "Brachiosaurus", "🦕", "#2E7D32"], ["P", "Pteranodon", "🦅", "#607D8B"],
      ["A", "Ankylosaurus", "🦕", "#5D4037"], ["S", "Spinosaurus", "🦖", "#0277BD"], ["D", "Diplodocus", "🦕", "#4CAF50"],
      ["P", "Parasaurolophus", "🦕", "#FF8F00"], ["I", "Iguanodon", "🦕", "#2E7D32"], ["A", "Allosaurus", "🦖", "#D32F2F"],
      ["C", "Carnotaurus", "🦖", "#C62828"], ["M", "Mosasaurus", "🦕", "#0D47A1"], ["P", "Plesiosaur", "🦕", "#0288D1"],
      ["A", "Apatosaurus", "🦕", "#4CAF50"], ["G", "Gallimimus", "🦖", "#FF8F00"], ["C", "Compsognathus", "🦖", "#8D6E63"],
      ["D", "Dilophosaurus", "🦖", "#2E7D32"], ["O", "Oviraptor", "🦖", "#FF6F00"], ["H", "Hadrosaurus", "🦕", "#4CAF50"],
      ["E", "Edmontosaurus", "🦕", "#607D8B"], ["M", "Megalosaurus", "🦖", "#5D4037"], ["B", "Baryonyx", "🦖", "#0277BD"],
      ["S", "Sauropod", "🦕", "#2E7D32"], ["R", "Raptor", "🦖", "#D32F2F"], ["P", "Pachycephalosaurus", "🦕", "#795548"],
      ["T", "Therizinosaurus", "🦖", "#4CAF50"], ["N", "Nodosaurus", "🦕", "#607D8B"], ["C", "Ceratosaurus", "🦖", "#D32F2F"],
      ["K", "Kentrosaurus", "🦕", "#5D4037"], ["L", "Lambeosaurus", "🦕", "#FF8F00"], ["U", "Utahraptor", "🦖", "#C62828"],
      ["M", "Microraptor", "🦖", "#0288D1"], ["G", "Giganotosaurus", "🦖", "#D32F2F"], ["A", "Archaeopteryx", "🐦", "#FFB300"],
      ["D", "Deinonychus", "🦖", "#FF6F00"], ["X", "Xiaosaurus", "🦕", "#4CAF50"], ["W", "Wuerhosaurus", "🦕", "#607D8B"],
      ["Z", "Zuniceratops", "🦕", "#5D4037"], ["F", "Fukuiraptor", "🦖", "#2E7D32"], ["J", "Jobaria", "🦕", "#795548"],
      ["Y", "Yangchuanosaurus", "🦖", "#D32F2F"], ["Q", "Quetzalcoatlus", "🦅", "#0288D1"], ["S", "Suchomimus", "🦖", "#0277BD"],
    ],
  },
  "gemstones": {
    name: "Gemstones & Crystals",
    videosCount: 30,
    gradients: [
      [["#7B1FA2", "#CE93D8"], "#4A148C"],
      [["#00BCD4", "#B2EBF2"], "#006064"],
      [["#E91E63", "#F8BBD0"], "#880E4F"],
    ],
    words: [
      ["D", "Diamond", "💎", "#B0BEC5"], ["R", "Ruby", "❤️", "#D32F2F"], ["E", "Emerald", "💚", "#2E7D32"],
      ["S", "Sapphire", "💙", "#1565C0"], ["A", "Amethyst", "💜", "#7B1FA2"], ["O", "Opal", "🌈", "#FF80AB"],
      ["T", "Topaz", "🟡", "#FFB300"], ["P", "Pearl", "⚪", "#F5F5F5"], ["G", "Garnet", "🔴", "#C62828"],
      ["J", "Jade", "💚", "#2E7D32"], ["T", "Turquoise", "💎", "#00BCD4"], ["A", "Aquamarine", "💙", "#4FC3F7"],
      ["C", "Citrine", "🟡", "#FDD835"], ["P", "Peridot", "💚", "#4CAF50"], ["L", "Lapis Lazuli", "💙", "#1565C0"],
      ["M", "Moonstone", "🌙", "#E0E0E0"], ["O", "Onyx", "⚫", "#212121"], ["T", "Tanzanite", "💎", "#311B92"],
      ["S", "Sunstone", "☀️", "#FF6F00"], ["Z", "Zircon", "💎", "#00BCD4"], ["A", "Alexandrite", "💎", "#2E7D32"],
      ["M", "Malachite", "💚", "#1B5E20"], ["R", "Rose Quartz", "💗", "#F48FB1"], ["C", "Crystal", "💎", "#E3F2FD"],
      ["H", "Heliodor", "🟡", "#FFD54F"], ["I", "Iolite", "💙", "#311B92"], ["K", "Kunzite", "💗", "#F48FB1"],
      ["L", "Larimar", "💙", "#4FC3F7"], ["S", "Spinel", "💎", "#D32F2F"], ["B", "Beryl", "💚", "#81C784"],
      ["Q", "Quartz", "💎", "#E0E0E0"], ["F", "Fluorite", "💜", "#7B1FA2"], ["C", "Carnelian", "🟠", "#FF5722"],
      ["J", "Jasper", "🟤", "#8D6E63"], ["A", "Agate", "🟤", "#795548"], ["T", "Tiger Eye", "🐯", "#FF8F00"],
      ["O", "Obsidian", "⚫", "#212121"], ["N", "Nephrite", "💚", "#2E7D32"], ["U", "Unakite", "💚", "#4CAF50"],
      ["W", "Wulfenite", "🟠", "#FF6F00"], ["Y", "Yellow Beryl", "🟡", "#FDD835"], ["V", "Vesuvianite", "💚", "#4CAF50"],
      ["X", "Xenotime", "🟤", "#795548"], ["G", "Goldstone", "✨", "#FFB300"], ["D", "Dumortierite", "💙", "#0D47A1"],
    ],
  },
  "metals": {
    name: "Metals & Elements",
    videosCount: 30,
    gradients: [
      [["#455A64", "#B0BEC5"], "#263238"],
      [["#FFB300", "#FFE082"], "#FF6F00"],
      [["#607D8B", "#CFD8DC"], "#37474F"],
    ],
    words: [
      ["G", "Gold", "🥇", "#FFB300"], ["S", "Silver", "🥈", "#9E9E9E"], ["I", "Iron", "⚙️", "#455A64"],
      ["C", "Copper", "🟤", "#BF360C"], ["B", "Bronze", "🥉", "#8D6E63"], ["P", "Platinum", "⚪", "#E0E0E0"],
      ["A", "Aluminum", "🪙", "#B0BEC5"], ["T", "Titanium", "⚙️", "#607D8B"], ["S", "Steel", "🔩", "#455A64"],
      ["Z", "Zinc", "⚙️", "#9E9E9E"], ["T", "Tin", "🥫", "#B0BEC5"], ["L", "Lead", "⚙️", "#607D8B"],
      ["N", "Nickel", "🪙", "#9E9E9E"], ["C", "Chromium", "⚙️", "#B0BEC5"], ["M", "Mercury", "🌡️", "#455A64"],
      ["C", "Cobalt", "💙", "#1565C0"], ["T", "Tungsten", "⚙️", "#37474F"], ["U", "Uranium", "☢️", "#4CAF50"],
      ["O", "Oxygen", "💨", "#42A5F5"], ["H", "Hydrogen", "💧", "#90CAF9"], ["C", "Carbon", "⚫", "#212121"],
      ["N", "Nitrogen", "💨", "#B0BEC5"], ["H", "Helium", "🎈", "#FF80AB"], ["A", "Argon", "💨", "#9575CD"],
      ["S", "Silicon", "🔬", "#607D8B"], ["P", "Phosphorus", "🔥", "#FDD835"], ["S", "Sulfur", "🟡", "#FDD835"],
      ["C", "Calcium", "🦴", "#F5F5F5"], ["P", "Potassium", "🍌", "#FDD835"], ["M", "Magnesium", "🔥", "#F5F5F5"],
      ["F", "Fluorine", "💨", "#B2EBF2"], ["R", "Radium", "☢️", "#4CAF50"], ["L", "Lithium", "🔋", "#607D8B"],
      ["B", "Brass", "🎺", "#FFB300"], ["D", "Diamond Carbon", "💎", "#E3F2FD"], ["E", "Electrum", "⚡", "#FFD54F"],
      ["W", "Wrought Iron", "⚙️", "#37474F"], ["K", "Krypton", "💨", "#4FC3F7"], ["X", "Xenon", "💡", "#9575CD"],
      ["V", "Vanadium", "⚙️", "#455A64"], ["Y", "Yttrium", "⚙️", "#607D8B"], ["J", "Jet Metal", "⚫", "#212121"],
      ["G", "Gallium", "🌡️", "#B0BEC5"], ["I", "Iridium", "✨", "#9E9E9E"], ["Q", "Quartz Crystal", "💎", "#E0E0E0"],
    ],
  },
  "fabrics": {
    name: "Fabrics & Textiles",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#4527A0", "#B39DDB"], "#311B92"],
    ],
    words: [
      ["C", "Cotton", "👕", "#F5F5F5"], ["S", "Silk", "🧣", "#E91E63"], ["W", "Wool", "🧶", "#FF8F00"],
      ["L", "Linen", "👔", "#D7CCC8"], ["D", "Denim", "👖", "#1565C0"], ["P", "Polyester", "👚", "#7B1FA2"],
      ["N", "Nylon", "🧦", "#607D8B"], ["V", "Velvet", "🎀", "#C62828"], ["S", "Satin", "✨", "#E91E63"],
      ["C", "Cashmere", "🧣", "#8D6E63"], ["T", "Tulle", "💃", "#F48FB1"], ["L", "Lace", "🪡", "#F5F5F5"],
      ["F", "Flannel", "🥋", "#D32F2F"], ["C", "Chiffon", "💨", "#E0E0E0"], ["J", "Jersey", "🏈", "#4CAF50"],
      ["T", "Tweed", "🧥", "#795548"], ["C", "Corduroy", "👖", "#5D4037"], ["O", "Organza", "✨", "#E1BEE7"],
      ["S", "Suede", "🥾", "#795548"], ["L", "Leather", "🧥", "#3E2723"], ["F", "Felt", "🎨", "#4CAF50"],
      ["C", "Canvas", "🎨", "#8D6E63"], ["B", "Burlap", "🟤", "#795548"], ["G", "Gauze", "🩹", "#F5F5F5"],
      ["R", "Rayon", "👗", "#00BCD4"], ["M", "Muslin", "👕", "#D7CCC8"], ["T", "Taffeta", "✨", "#7B1FA2"],
      ["G", "Gingham", "🟥", "#D32F2F"], ["P", "Plaid", "🟩", "#2E7D32"], ["B", "Batik", "🎨", "#FF6F00"],
      ["K", "Knit Fabric", "🧶", "#E91E63"], ["S", "Spandex", "🤸", "#212121"], ["C", "Chambray", "👕", "#42A5F5"],
      ["D", "Damask", "🌸", "#C62828"], ["E", "Embroidery", "🪡", "#FFB300"], ["H", "Hemp Fabric", "🌿", "#4CAF50"],
      ["I", "Ikat", "🎨", "#0288D1"], ["A", "Angora", "🐰", "#F5F5F5"], ["M", "Mohair", "🐑", "#A1887F"],
      ["Z", "Zephyr Cloth", "💨", "#90CAF9"], ["Y", "Yarn", "🧶", "#FF6F00"], ["U", "Ultrasuede", "✨", "#795548"],
      ["X", "Xerophyte Fiber", "🌵", "#4CAF50"], ["Q", "Quilted Fabric", "🛏️", "#E91E63"], ["W", "Woven Fabric", "🪡", "#8D6E63"],
    ],
  },
  "tools-workshop": {
    name: "Workshop Tools",
    videosCount: 30,
    gradients: [
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#455A64", "#B0BEC5"], "#263238"],
      [["#5D4037", "#BCAAA4"], "#3E2723"],
    ],
    words: [
      ["H", "Hammer", "🔨", "#795548"], ["S", "Screwdriver", "🪛", "#FF6F00"], ["W", "Wrench", "🔧", "#607D8B"],
      ["P", "Pliers", "🔧", "#455A64"], ["S", "Saw", "🪚", "#8D6E63"], ["D", "Drill", "🔩", "#FF8F00"],
      ["N", "Nail", "📌", "#9E9E9E"], ["S", "Screw", "🔩", "#607D8B"], ["T", "Tape Measure", "📏", "#FDD835"],
      ["L", "Level", "📐", "#4CAF50"], ["C", "Clamp", "🗜️", "#455A64"], ["S", "Sandpaper", "📄", "#FFB74D"],
      ["P", "Paint Brush", "🖌️", "#1565C0"], ["R", "Roller", "🎨", "#4CAF50"], ["G", "Glue Gun", "🔫", "#FF6F00"],
      ["V", "Vise", "🗜️", "#607D8B"], ["C", "Chisel", "🔪", "#795548"], ["A", "Axe", "🪓", "#D32F2F"],
      ["H", "Hacksaw", "🪚", "#455A64"], ["F", "File", "📂", "#607D8B"], ["W", "Wire Cutter", "✂️", "#D32F2F"],
      ["P", "Power Drill", "🔩", "#FF8F00"], ["S", "Staple Gun", "🔫", "#455A64"], ["L", "Ladder", "🪜", "#FFB300"],
      ["T", "Toolbox", "🧰", "#D32F2F"], ["M", "Mallet", "🔨", "#5D4037"], ["B", "Bolt", "🔩", "#9E9E9E"],
      ["W", "Washer", "⭕", "#B0BEC5"], ["N", "Nut Bolt", "🔩", "#607D8B"], ["R", "Ratchet", "🔧", "#455A64"],
      ["J", "Jigsaw", "🧩", "#FF6F00"], ["C", "Circular Saw", "🪚", "#D32F2F"], ["S", "Socket Set", "🔧", "#607D8B"],
      ["D", "Duct Tape", "🟦", "#607D8B"], ["E", "Electrical Tape", "⚡", "#212121"], ["P", "Plumber Wrench", "🔧", "#1565C0"],
      ["G", "Grinder", "⚙️", "#455A64"], ["I", "Impact Driver", "🔩", "#FF8F00"], ["U", "Utility Knife", "🔪", "#D32F2F"],
      ["K", "Keyhole Saw", "🪚", "#795548"], ["O", "Oil Can", "🛢️", "#5D4037"], ["Z", "Zip Tie", "🟦", "#0288D1"],
      ["X", "X-Acto Knife", "🔪", "#607D8B"], ["Y", "Yard Stick", "📏", "#FFB300"], ["Q", "Quick Clamp", "🗜️", "#455A64"],
    ],
  },
  "camping": {
    name: "Camping & Outdoors",
    videosCount: 30,
    gradients: [
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#5D4037", "#BCAAA4"], "#3E2723"],
    ],
    words: [
      ["T", "Tent", "⛺", "#2E7D32"], ["C", "Campfire", "🔥", "#FF6F00"], ["S", "Sleeping Bag", "🛏️", "#1565C0"],
      ["B", "Backpack", "🎒", "#FF8F00"], ["F", "Flashlight", "🔦", "#FDD835"], ["C", "Compass", "🧭", "#D32F2F"],
      ["M", "Map", "🗺️", "#4CAF50"], ["W", "Water Bottle", "🫗", "#42A5F5"], ["H", "Hiking Boots", "🥾", "#795548"],
      ["B", "Binoculars", "🔭", "#607D8B"], ["F", "Fishing Rod", "🎣", "#0288D1"], ["K", "Kayak", "🛶", "#FF6F00"],
      ["C", "Canoe", "🛶", "#5D4037"], ["S", "Swiss Knife", "🔪", "#D32F2F"], ["R", "Rope", "🪢", "#795548"],
      ["L", "Lantern", "🏮", "#FFB300"], ["M", "Marshmallow", "🫧", "#F5F5F5"], ["S", "S'mores", "🍫", "#8D6E63"],
      ["H", "Hammock", "🏖️", "#00BCD4"], ["T", "Trail Mix", "🥜", "#8D6E63"], ["C", "Cooler", "🧊", "#42A5F5"],
      ["G", "Grill", "🔥", "#D32F2F"], ["A", "Axe", "🪓", "#795548"], ["F", "First Aid Kit", "🩹", "#D32F2F"],
      ["S", "Sunscreen", "☀️", "#FFB300"], ["I", "Insect Spray", "🐛", "#4CAF50"], ["W", "Walking Stick", "🥢", "#5D4037"],
      ["B", "Bear Spray", "🐻", "#FF5722"], ["P", "Picnic Blanket", "🧺", "#E91E63"], ["C", "Camp Chair", "🪑", "#2E7D32"],
      ["N", "Nature Trail", "🌲", "#1B5E20"], ["O", "Outdoor Stove", "🍳", "#FF8F00"], ["D", "Dry Bag", "🎒", "#0288D1"],
      ["R", "Rain Jacket", "🧥", "#FDD835"], ["E", "Ember", "🔥", "#FF6F00"], ["U", "UV Hat", "🧢", "#FFB300"],
      ["V", "Vest", "🦺", "#FF5722"], ["J", "Journal", "📓", "#795548"], ["Z", "Ziplock Bag", "🟦", "#42A5F5"],
      ["Y", "Yurt", "⛺", "#8D6E63"], ["X", "Xtra Batteries", "🔋", "#4CAF50"], ["P", "Poncho", "🧥", "#FDD835"],
      ["L", "Log Cabin", "🏠", "#5D4037"], ["T", "Trekking Pole", "🥢", "#607D8B"], ["G", "Gear Bag", "🎒", "#455A64"],
    ],
  },
  "beach": {
    name: "Beach & Seaside",
    videosCount: 30,
    gradients: [
      [["#FFB300", "#FFE082"], "#FF6F00"],
      [["#00BCD4", "#B2EBF2"], "#006064"],
      [["#FF5722", "#FFAB91"], "#BF360C"],
    ],
    words: [
      ["S", "Sand", "🏖️", "#FFB300"], ["W", "Wave", "🌊", "#0277BD"], ["S", "Surfboard", "🏄", "#00BCD4"],
      ["U", "Umbrella", "⛱️", "#D32F2F"], ["S", "Sunglasses", "😎", "#212121"], ["S", "Seashell", "🐚", "#FFB74D"],
      ["S", "Starfish", "⭐", "#FF6F00"], ["C", "Crab", "🦀", "#D32F2F"], ["D", "Dolphin", "🐬", "#0288D1"],
      ["P", "Palm Tree", "🌴", "#2E7D32"], ["S", "Sandcastle", "🏰", "#FFB300"], ["B", "Beach Ball", "🏐", "#E91E63"],
      ["F", "Flip Flops", "🩴", "#FF6F00"], ["T", "Towel", "🏖️", "#E91E63"], ["S", "Sunscreen", "🧴", "#FFB300"],
      ["I", "Ice Cream", "🍦", "#FF80AB"], ["J", "Jellyfish", "🪼", "#9C27B0"], ["L", "Lifeguard", "🏊", "#D32F2F"],
      ["S", "Snorkel", "🤿", "#00BCD4"], ["O", "Ocean", "🌊", "#0D47A1"], ["B", "Boat", "⛵", "#1565C0"],
      ["K", "Kayak", "🛶", "#FF6F00"], ["S", "Sand Dollar", "🪙", "#FFB74D"], ["C", "Coconut", "🥥", "#5D4037"],
      ["H", "Hammock", "🏖️", "#4CAF50"], ["T", "Tide Pool", "🪸", "#00838F"], ["S", "Sunset", "🌅", "#FF5722"],
      ["P", "Pier", "🏗️", "#795548"], ["L", "Lighthouse", "🏗️", "#D32F2F"], ["M", "Mermaid", "🧜‍♀️", "#E91E63"],
      ["A", "Anchor", "⚓", "#455A64"], ["B", "Buoy", "🟡", "#FDD835"], ["C", "Coral", "🪸", "#FF6F00"],
      ["R", "Raft", "🛟", "#FF5722"], ["S", "Scuba Diving", "🤿", "#0288D1"], ["W", "Whale", "🐋", "#0D47A1"],
      ["N", "Nautilus", "🐚", "#FFB74D"], ["G", "Gull", "🐦", "#F5F5F5"], ["V", "Volleyball", "🏐", "#FFB300"],
      ["F", "Fish", "🐟", "#0288D1"], ["E", "Estuary", "🌊", "#00695C"], ["D", "Driftwood", "🪵", "#795548"],
      ["Z", "Zen Garden", "🪨", "#607D8B"], ["Y", "Yacht", "🛥️", "#F5F5F5"], ["X", "X Marks Spot", "❌", "#D32F2F"],
    ],
  },
  "airport": {
    name: "Airport & Travel",
    videosCount: 30,
    gradients: [
      [["#0288D1", "#B3E5FC"], "#01579B"],
      [["#455A64", "#B0BEC5"], "#263238"],
      [["#FF8F00", "#FFE082"], "#E65100"],
    ],
    words: [
      ["A", "Airplane", "✈️", "#0288D1"], ["P", "Passport", "🛂", "#0D47A1"], ["S", "Suitcase", "🧳", "#795548"],
      ["T", "Ticket", "🎫", "#FF6F00"], ["G", "Gate", "🚪", "#455A64"], ["R", "Runway", "🛫", "#37474F"],
      ["C", "Control Tower", "🗼", "#607D8B"], ["B", "Boarding Pass", "🎟️", "#1565C0"], ["L", "Luggage", "🧳", "#5D4037"],
      ["P", "Pilot", "👨‍✈️", "#212121"], ["F", "Flight Attendant", "🧑‍✈️", "#E91E63"], ["S", "Security", "🛡️", "#D32F2F"],
      ["C", "Customs", "🛃", "#2E7D32"], ["H", "Hangar", "🏗️", "#455A64"], ["J", "Jet Engine", "⚙️", "#607D8B"],
      ["W", "Wing", "🦅", "#B0BEC5"], ["C", "Cockpit", "🎛️", "#212121"], ["T", "Terminal", "🏢", "#455A64"],
      ["D", "Departure", "🛫", "#0288D1"], ["A", "Arrival", "🛬", "#4CAF50"], ["B", "Baggage Claim", "🧳", "#795548"],
      ["D", "Duty Free", "🛍️", "#E91E63"], ["L", "Lounge", "🛋️", "#7B1FA2"], ["M", "Map", "🗺️", "#4CAF50"],
      ["T", "Trolley", "🛒", "#607D8B"], ["I", "Immigration", "🛂", "#0D47A1"], ["V", "Visa", "📄", "#455A64"],
      ["H", "Hotel", "🏨", "#7B1FA2"], ["T", "Taxi", "🚕", "#FDD835"], ["C", "Car Rental", "🚗", "#D32F2F"],
      ["S", "Souvenir", "🎁", "#FF6F00"], ["P", "Postcard", "📮", "#E91E63"], ["C", "Camera", "📷", "#212121"],
      ["F", "First Class", "💺", "#FFB300"], ["E", "Economy Class", "💺", "#607D8B"], ["U", "Upgrade", "⬆️", "#4CAF50"],
      ["N", "Night Flight", "🌙", "#311B92"], ["O", "Overhead Bin", "📦", "#795548"], ["K", "Kiosk", "🖥️", "#455A64"],
      ["R", "Radar", "📡", "#0288D1"], ["Z", "Zone Boarding", "🔢", "#607D8B"], ["W", "Waiting Area", "🪑", "#455A64"],
      ["G", "Globe Trotter", "🌍", "#2E7D32"], ["X", "X-Ray Scanner", "🔬", "#37474F"], ["Y", "Yacht Port", "🛥️", "#0288D1"],
    ],
  },
  "hospital": {
    name: "Hospital & Medical",
    videosCount: 30,
    gradients: [
      [["#E91E63", "#F8BBD0"], "#880E4F"],
      [["#42A5F5", "#BBDEFB"], "#0D47A1"],
      [["#2E7D32", "#A5D6A7"], "#1B5E20"],
    ],
    words: [
      ["D", "Doctor", "👨‍⚕️", "#0288D1"], ["N", "Nurse", "👩‍⚕️", "#E91E63"], ["A", "Ambulance", "🚑", "#D32F2F"],
      ["H", "Hospital", "🏥", "#E91E63"], ["S", "Stethoscope", "🩺", "#212121"], ["B", "Bandage", "🩹", "#FFB74D"],
      ["M", "Medicine", "💊", "#D32F2F"], ["S", "Syringe", "💉", "#42A5F5"], ["T", "Thermometer", "🌡️", "#FF6F00"],
      ["X", "X-Ray", "🔬", "#0D47A1"], ["H", "Heartbeat", "❤️", "#D32F2F"], ["W", "Wheelchair", "🦽", "#607D8B"],
      ["C", "Crutches", "🩼", "#795548"], ["E", "Eye Chart", "👁️", "#1565C0"], ["T", "Tooth", "🦷", "#F5F5F5"],
      ["D", "Dentist", "🪥", "#42A5F5"], ["S", "Surgeon", "🧑‍⚕️", "#2E7D32"], ["O", "Operating Room", "🏥", "#00695C"],
      ["B", "Blood Test", "🩸", "#D32F2F"], ["P", "Prescription", "📋", "#607D8B"], ["H", "Hand Wash", "🧼", "#42A5F5"],
      ["M", "Mask", "😷", "#42A5F5"], ["G", "Gloves", "🧤", "#4CAF50"], ["S", "Stretcher", "🛏️", "#607D8B"],
      ["V", "Vaccine", "💉", "#4CAF50"], ["C", "Cast", "🦴", "#F5F5F5"], ["R", "Recovery Room", "🛏️", "#0288D1"],
      ["L", "Lab Coat", "🥼", "#F5F5F5"], ["P", "Patient", "🤒", "#FF6F00"], ["F", "First Aid", "🩹", "#D32F2F"],
      ["I", "IV Drip", "💧", "#42A5F5"], ["K", "Kidney", "🫘", "#BF360C"], ["U", "Ultrasound", "📡", "#607D8B"],
      ["Z", "Zinc Supplement", "💊", "#9E9E9E"], ["N", "Nebulizer", "💨", "#42A5F5"], ["O", "Oxygen Tank", "🫁", "#0288D1"],
      ["C", "Check Up", "✅", "#4CAF50"], ["B", "Blood Pressure", "🩸", "#D32F2F"], ["J", "Joint", "🦴", "#795548"],
      ["Y", "Yoga Therapy", "🧘", "#7B1FA2"], ["P", "Pharmacy", "💊", "#2E7D32"], ["Q", "Quarantine", "🏠", "#FF6F00"],
      ["R", "Rehab", "🏋️", "#1565C0"], ["S", "Scrubs", "🥼", "#00BCD4"], ["W", "Ward", "🏥", "#E91E63"],
    ],
  },
  "kitchen-appliances": {
    name: "Kitchen Appliances",
    videosCount: 30,
    gradients: [
      [["#FF8F00", "#FFE082"], "#E65100"],
      [["#455A64", "#B0BEC5"], "#263238"],
      [["#D32F2F", "#EF9A9A"], "#B71C1C"],
    ],
    words: [
      ["B", "Blender", "🫙", "#4CAF50"], ["T", "Toaster", "🍞", "#FF8F00"], ["M", "Microwave", "📦", "#455A64"],
      ["O", "Oven", "🔥", "#D32F2F"], ["F", "Fridge", "🧊", "#42A5F5"], ["D", "Dishwasher", "🍽️", "#607D8B"],
      ["K", "Kettle", "🫖", "#FF6F00"], ["C", "Coffee Maker", "☕", "#5D4037"], ["M", "Mixer", "🎂", "#E91E63"],
      ["J", "Juicer", "🍊", "#FF6F00"], ["S", "Stove", "🍳", "#D32F2F"], ["G", "Grill", "🔥", "#795548"],
      ["R", "Rice Cooker", "🍚", "#F5F5F5"], ["P", "Pressure Cooker", "♨️", "#455A64"], ["S", "Slow Cooker", "🥘", "#FF8F00"],
      ["W", "Waffle Iron", "🧇", "#FFB300"], ["F", "Food Processor", "⚙️", "#607D8B"], ["I", "Ice Maker", "🧊", "#42A5F5"],
      ["T", "Tea Pot", "🫖", "#2E7D32"], ["E", "Espresso Machine", "☕", "#3E2723"], ["P", "Popcorn Maker", "🍿", "#FDD835"],
      ["S", "Sandwich Press", "🥪", "#FFB74D"], ["C", "Can Opener", "🥫", "#D32F2F"], ["D", "Deep Fryer", "🍟", "#FF6F00"],
      ["A", "Air Fryer", "🌀", "#455A64"], ["B", "Bread Maker", "🍞", "#8D6E63"], ["H", "Hand Mixer", "🥄", "#E91E63"],
      ["S", "Scale", "⚖️", "#607D8B"], ["T", "Timer", "⏲️", "#FDD835"], ["C", "Chopper", "🔪", "#D32F2F"],
      ["V", "Vacuum Sealer", "📦", "#607D8B"], ["L", "Ladle", "🥄", "#455A64"], ["N", "Nutribullet", "🫙", "#4CAF50"],
      ["W", "Wok", "🥘", "#212121"], ["Z", "Zester", "🍋", "#FDD835"], ["Y", "Yogurt Maker", "🥛", "#F5F5F5"],
      ["X", "Xtra Burner", "🔥", "#FF5722"], ["U", "Utility Tray", "🍽️", "#9E9E9E"], ["Q", "Quick Pot", "♨️", "#455A64"],
      ["R", "Range Hood", "💨", "#607D8B"], ["G", "Garbage Disposal", "🗑️", "#37474F"], ["P", "Pan", "🍳", "#212121"],
      ["S", "Spatula", "🥄", "#FF8F00"], ["C", "Cutting Board", "🪵", "#795548"], ["K", "Knife Set", "🔪", "#455A64"],
    ],
  },
  "cleaning-items": {
    name: "Cleaning Items",
    videosCount: 30,
    gradients: [
      [["#42A5F5", "#BBDEFB"], "#0D47A1"],
      [["#4CAF50", "#C8E6C9"], "#1B5E20"],
      [["#FF80AB", "#FFD1E8"], "#C51162"],
    ],
    words: [
      ["B", "Broom", "🧹", "#795548"], ["M", "Mop", "🧹", "#0288D1"], ["S", "Sponge", "🧽", "#FDD835"],
      ["S", "Soap", "🧼", "#42A5F5"], ["B", "Bucket", "🪣", "#0277BD"], ["D", "Duster", "🪶", "#FF8F00"],
      ["V", "Vacuum", "🧹", "#D32F2F"], ["T", "Towel", "🧻", "#F5F5F5"], ["G", "Gloves", "🧤", "#FDD835"],
      ["B", "Bleach", "🧴", "#F5F5F5"], ["D", "Detergent", "🧴", "#42A5F5"], ["S", "Spray Bottle", "💦", "#4CAF50"],
      ["W", "Wipes", "🧻", "#F5F5F5"], ["T", "Trash Bag", "🗑️", "#212121"], ["R", "Recycling Bin", "♻️", "#4CAF50"],
      ["D", "Dish Soap", "🧴", "#2E7D32"], ["S", "Scrub Brush", "🪥", "#FF6F00"], ["C", "Cloth", "🧣", "#E91E63"],
      ["F", "Feather Duster", "🪶", "#FFB300"], ["P", "Plunger", "🪠", "#D32F2F"], ["L", "Lint Roller", "🧻", "#607D8B"],
      ["H", "Hand Sanitizer", "🧴", "#42A5F5"], ["A", "Air Freshener", "🌸", "#E91E63"], ["I", "Iron", "♨️", "#455A64"],
      ["W", "Washing Machine", "🫧", "#42A5F5"], ["D", "Dryer", "💨", "#F5F5F5"], ["C", "Clothesline", "👕", "#4CAF50"],
      ["S", "Stain Remover", "🧴", "#7B1FA2"], ["P", "Polish", "✨", "#FFB300"], ["R", "Rag", "🧣", "#795548"],
      ["M", "Mop Bucket", "🪣", "#0288D1"], ["S", "Squeegee", "🪟", "#42A5F5"], ["T", "Toilet Brush", "🪥", "#2E7D32"],
      ["D", "Dustpan", "🧹", "#607D8B"], ["F", "Floor Cleaner", "🧴", "#0288D1"], ["C", "Carpet Cleaner", "🧴", "#7B1FA2"],
      ["N", "Napkin", "🧻", "#F5F5F5"], ["O", "Odor Remover", "💨", "#4CAF50"], ["E", "Eraser Sponge", "🧽", "#F5F5F5"],
      ["K", "Kitchen Cleaner", "🧴", "#4CAF50"], ["G", "Glass Cleaner", "🪟", "#42A5F5"], ["U", "Upholstery Clean", "🛋️", "#795548"],
      ["J", "Janitor Cart", "🛒", "#607D8B"], ["Z", "Zip Mop", "🧹", "#0288D1"], ["Y", "Yard Rake", "🍂", "#FF6F00"],
    ],
  },
};

// ============================================================================
// GENERATE CATALOGS
// ============================================================================

function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return (s >>> 0) / 0x7fffffff;
  };
}

function generateCatalog(categoryKey, category) {
  const dir = path.join(BASE_DIR, categoryKey);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const words = category.words;
  const itemsPerVideo = 15;
  const videosCount = category.videosCount;
  const gradients = category.gradients;
  const seed = categoryKey.split("").reduce((a, c) => a + c.charCodeAt(0), 0) * 137;

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
      targetDuration: 90 + Math.floor(seededRandom(seed + v)() * 86), // 90-175 seconds (1:30 - 2:55)
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
  const totalFrames = Math.round(targetDur * FPS);

  content += '      <Composition\\n';
  content += '        id="' + compId + '"\\n';
  content += '        component={AlphabetLongTemplate}\\n';
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
console.log("  1020 MORE Videos Catalog Generator");
console.log("  Date: 3rd April 2026 (Batch 2)");
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
  batchName: "1k-video-3april-batch2",
  date: "2026-04-03",
  totalVideos,
  categories: categorySummary,
};
fs.writeFileSync(path.join(BASE_DIR, "summary-batch2.json"), JSON.stringify(summary, null, 2));

console.log("\n  Summary saved to summary-batch2.json");
console.log("\nDone!");
