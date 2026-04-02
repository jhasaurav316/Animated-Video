// ============================================================================
// 2040 VIDEOS - 68 Categories × 30 Videos Each
// Each video: 2:45 (165 seconds) with looping letter content
// ============================================================================
//
// BATCH 1 (Phases 1-20): 34 categories = 1020 videos
// BATCH 2 (Phases 21-40): 34 categories = 1020 videos
//
// Phase 1:  30 Toys + 21 Superheroes = 51
// Phase 2:  9 Superheroes + 30 Cartoon Characters + 12 Wild Cats = 51
// Phase 3:  18 Wild Cats + 30 Pet Animals + 3 Jungle Animals = 51
// Phase 4:  27 Jungle Animals + 24 Arctic Animals = 51
// Phase 5:  6 Arctic Animals + 30 Shapes + 15 Numbers = 51
// Phase 6:  15 Numbers + 30 Colors + 6 Vehicles = 51
// Phase 7:  24 Vehicles + 27 Buildings = 51
// Phase 8:  3 Buildings + 30 Furniture + 18 School Items = 51
// Phase 9:  12 School Items + 30 Playground + 9 Musical Sounds = 51
// Phase 10: 21 Musical Sounds + 30 Fairy Tales = 51
// Phase 11: 30 Science Words + 21 Winter Words = 51
// Phase 12: 9 Winter Words + 30 Summer Words + 12 Halloween = 51
// Phase 13: 18 Halloween + 30 Christmas + 3 Garden Items = 51
// Phase 14: 27 Garden Items + 24 Bath Time = 51
// Phase 15: 6 Bath Time + 30 Breakfast Foods + 15 Snacks = 51
// Phase 16: 15 Snacks + 30 Drinks + 6 Candy = 51
// Phase 17: 24 Candy + 27 Zoo Animals = 51
// Phase 18: 3 Zoo Animals + 30 Underwater + 18 Rainforest = 51
// Phase 19: 12 Rainforest + 30 Transportation + 9 Festivals = 51
// Phase 20: 21 Festivals + 30 Sports Equipment = 51
// Phase 21: 30 Baby Words + 21 Family Members = 51
// Phase 22: 9 Family Members + 30 Weather + 12 Planets = 51
// Phase 23: 18 Planets + 30 Oceans + 3 Mountains = 51
// Phase 24: 27 Mountains + 24 Rivers = 51
// Phase 25: 6 Rivers + 30 Languages + 15 Continents = 51
// Phase 26: 15 Continents + 30 Birds of Prey + 6 Tropical Fish = 51
// Phase 27: 24 Tropical Fish + 27 Farm Crops = 51
// Phase 28: 3 Farm Crops + 30 Spices + 18 Breads = 51
// Phase 29: 12 Breads + 30 Pasta + 9 Cheese = 51
// Phase 30: 21 Cheese + 30 Dessert Types = 51
// Phase 31: 30 Dance Styles + 21 Martial Arts = 51
// Phase 32: 9 Martial Arts + 30 Board Games + 12 Video Games = 51
// Phase 33: 18 Video Games + 30 Fairy Creatures + 3 Robots = 51
// Phase 34: 27 Robots + 24 Dinosaur Types = 51
// Phase 35: 6 Dinosaur Types + 30 Gemstones + 15 Metals = 51
// Phase 36: 15 Metals + 30 Fabrics + 6 Workshop Tools = 51
// Phase 37: 24 Workshop Tools + 27 Camping = 51
// Phase 38: 3 Camping + 30 Beach + 18 Airport = 51
// Phase 39: 12 Airport + 30 Hospital + 9 Kitchen Appliances = 51
// Phase 40: 21 Kitchen Appliances + 30 Cleaning Items = 51
// ============================================================================

import "./index.css";

// --- Batch 1 (Phases 1-20) ---
import { ToysRoot } from "./ToysRoot";
import { SuperheroesRoot } from "./SuperheroesRoot";
import { CartoonCharactersRoot } from "./CartoonCharactersRoot";
import { WildCatsRoot } from "./WildCatsRoot";
import { PetAnimalsRoot } from "./PetAnimalsRoot";
import { JungleAnimalsRoot } from "./JungleAnimalsRoot";
import { ArcticAnimalsRoot } from "./ArcticAnimalsRoot";
import { ShapesRoot } from "./ShapesRoot";
import { NumbersRoot } from "./NumbersRoot";
import { ColorsRoot } from "./ColorsRoot";
import { VehiclesRoot } from "./VehiclesRoot";
import { BuildingsRoot } from "./BuildingsRoot";
import { FurnitureRoot } from "./FurnitureRoot";
import { SchoolItemsRoot } from "./SchoolItemsRoot";
import { PlaygroundRoot } from "./PlaygroundRoot";
import { MusicalSoundsRoot } from "./MusicalSoundsRoot";
import { FairyTalesRoot } from "./FairyTalesRoot";
import { ScienceWordsRoot } from "./ScienceWordsRoot";
import { WinterWordsRoot } from "./WinterWordsRoot";
import { SummerWordsRoot } from "./SummerWordsRoot";
import { HalloweenRoot } from "./HalloweenRoot";
import { ChristmasRoot } from "./ChristmasRoot";
import { GardenItemsRoot } from "./GardenItemsRoot";
import { BathTimeRoot } from "./BathTimeRoot";
import { BreakfastFoodsRoot } from "./BreakfastFoodsRoot";
import { SnacksRoot } from "./SnacksRoot";
import { DrinksRoot } from "./DrinksRoot";
import { CandyRoot } from "./CandyRoot";
import { ZooAnimalsRoot } from "./ZooAnimalsRoot";
import { UnderwaterRoot } from "./UnderwaterRoot";
import { RainforestRoot } from "./RainforestRoot";
import { TransportationRoot } from "./TransportationRoot";
import { FestivalsRoot } from "./FestivalsRoot";
import { SportsEquipmentRoot } from "./SportsEquipmentRoot";

// --- Batch 2 (Phases 21-40) ---
import { BabyWordsRoot } from "./BabyWordsRoot";
import { FamilyMembersRoot } from "./FamilyMembersRoot";
import { WeatherRoot } from "./WeatherRoot";
import { PlanetsRoot } from "./PlanetsRoot";
import { OceansRoot } from "./OceansRoot";
import { MountainsRoot } from "./MountainsRoot";
import { RiversRoot } from "./RiversRoot";
import { LanguagesRoot } from "./LanguagesRoot";
import { ContinentsRoot } from "./ContinentsRoot";
import { BirdsOfPreyRoot } from "./BirdsOfPreyRoot";
import { TropicalFishRoot } from "./TropicalFishRoot";
import { FarmCropsRoot } from "./FarmCropsRoot";
import { SpicesRoot } from "./SpicesRoot";
import { BreadsRoot } from "./BreadsRoot";
import { PastaRoot } from "./PastaRoot";
import { CheeseRoot } from "./CheeseRoot";
import { DessertTypesRoot } from "./DessertTypesRoot";
import { DanceStylesRoot } from "./DanceStylesRoot";
import { MartialArtsRoot } from "./MartialArtsRoot";
import { BoardGamesRoot } from "./BoardGamesRoot";
import { VideoGamesRoot } from "./VideoGamesRoot";
import { FairyCreaturesRoot } from "./FairyCreaturesRoot";
import { RobotsRoot } from "./RobotsRoot";
import { DinosaurTypesRoot } from "./DinosaurTypesRoot";
import { GemstonesRoot } from "./GemstonesRoot";
import { MetalsRoot } from "./MetalsRoot";
import { FabricsRoot } from "./FabricsRoot";
import { ToolsWorkshopRoot } from "./ToolsWorkshopRoot";
import { CampingRoot } from "./CampingRoot";
import { BeachRoot } from "./BeachRoot";
import { AirportRoot } from "./AirportRoot";
import { HospitalRoot } from "./HospitalRoot";
import { KitchenAppliancesRoot } from "./KitchenAppliancesRoot";
import { CleaningItemsRoot } from "./CleaningItemsRoot";

export {
  // Batch 1
  ToysRoot,
  SuperheroesRoot,
  CartoonCharactersRoot,
  WildCatsRoot,
  PetAnimalsRoot,
  JungleAnimalsRoot,
  ArcticAnimalsRoot,
  ShapesRoot,
  NumbersRoot,
  ColorsRoot,
  VehiclesRoot,
  BuildingsRoot,
  FurnitureRoot,
  SchoolItemsRoot,
  PlaygroundRoot,
  MusicalSoundsRoot,
  FairyTalesRoot,
  ScienceWordsRoot,
  WinterWordsRoot,
  SummerWordsRoot,
  HalloweenRoot,
  ChristmasRoot,
  GardenItemsRoot,
  BathTimeRoot,
  BreakfastFoodsRoot,
  SnacksRoot,
  DrinksRoot,
  CandyRoot,
  ZooAnimalsRoot,
  UnderwaterRoot,
  RainforestRoot,
  TransportationRoot,
  FestivalsRoot,
  SportsEquipmentRoot,
  // Batch 2
  BabyWordsRoot,
  FamilyMembersRoot,
  WeatherRoot,
  PlanetsRoot,
  OceansRoot,
  MountainsRoot,
  RiversRoot,
  LanguagesRoot,
  ContinentsRoot,
  BirdsOfPreyRoot,
  TropicalFishRoot,
  FarmCropsRoot,
  SpicesRoot,
  BreadsRoot,
  PastaRoot,
  CheeseRoot,
  DessertTypesRoot,
  DanceStylesRoot,
  MartialArtsRoot,
  BoardGamesRoot,
  VideoGamesRoot,
  FairyCreaturesRoot,
  RobotsRoot,
  DinosaurTypesRoot,
  GemstonesRoot,
  MetalsRoot,
  FabricsRoot,
  ToolsWorkshopRoot,
  CampingRoot,
  BeachRoot,
  AirportRoot,
  HospitalRoot,
  KitchenAppliancesRoot,
  CleaningItemsRoot,
};
