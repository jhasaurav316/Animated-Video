import { registerRoot } from "remotion";
import React from "react";
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

// 2040 Videos - 68 Categories
const CombinedRoot: React.FC = () => {
  return React.createElement(React.Fragment, null,
    // Batch 1
    React.createElement(ToysRoot),
    React.createElement(SuperheroesRoot),
    React.createElement(CartoonCharactersRoot),
    React.createElement(WildCatsRoot),
    React.createElement(PetAnimalsRoot),
    React.createElement(JungleAnimalsRoot),
    React.createElement(ArcticAnimalsRoot),
    React.createElement(ShapesRoot),
    React.createElement(NumbersRoot),
    React.createElement(ColorsRoot),
    React.createElement(VehiclesRoot),
    React.createElement(BuildingsRoot),
    React.createElement(FurnitureRoot),
    React.createElement(SchoolItemsRoot),
    React.createElement(PlaygroundRoot),
    React.createElement(MusicalSoundsRoot),
    React.createElement(FairyTalesRoot),
    React.createElement(ScienceWordsRoot),
    React.createElement(WinterWordsRoot),
    React.createElement(SummerWordsRoot),
    React.createElement(HalloweenRoot),
    React.createElement(ChristmasRoot),
    React.createElement(GardenItemsRoot),
    React.createElement(BathTimeRoot),
    React.createElement(BreakfastFoodsRoot),
    React.createElement(SnacksRoot),
    React.createElement(DrinksRoot),
    React.createElement(CandyRoot),
    React.createElement(ZooAnimalsRoot),
    React.createElement(UnderwaterRoot),
    React.createElement(RainforestRoot),
    React.createElement(TransportationRoot),
    React.createElement(FestivalsRoot),
    React.createElement(SportsEquipmentRoot),
    // Batch 2
    React.createElement(BabyWordsRoot),
    React.createElement(FamilyMembersRoot),
    React.createElement(WeatherRoot),
    React.createElement(PlanetsRoot),
    React.createElement(OceansRoot),
    React.createElement(MountainsRoot),
    React.createElement(RiversRoot),
    React.createElement(LanguagesRoot),
    React.createElement(ContinentsRoot),
    React.createElement(BirdsOfPreyRoot),
    React.createElement(TropicalFishRoot),
    React.createElement(FarmCropsRoot),
    React.createElement(SpicesRoot),
    React.createElement(BreadsRoot),
    React.createElement(PastaRoot),
    React.createElement(CheeseRoot),
    React.createElement(DessertTypesRoot),
    React.createElement(DanceStylesRoot),
    React.createElement(MartialArtsRoot),
    React.createElement(BoardGamesRoot),
    React.createElement(VideoGamesRoot),
    React.createElement(FairyCreaturesRoot),
    React.createElement(RobotsRoot),
    React.createElement(DinosaurTypesRoot),
    React.createElement(GemstonesRoot),
    React.createElement(MetalsRoot),
    React.createElement(FabricsRoot),
    React.createElement(ToolsWorkshopRoot),
    React.createElement(CampingRoot),
    React.createElement(BeachRoot),
    React.createElement(AirportRoot),
    React.createElement(HospitalRoot),
    React.createElement(KitchenAppliancesRoot),
    React.createElement(CleaningItemsRoot),
  );
};

registerRoot(CombinedRoot);
