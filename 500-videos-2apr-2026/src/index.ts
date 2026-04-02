import { registerRoot } from "remotion";
import { BodyPartsRoot } from "./BodyPartsRoot";
import { ProfessionsRoot } from "./ProfessionsRoot";
import { FamousPlacesRoot } from "./FamousPlacesRoot";
import { DogBreedsRoot } from "./DogBreedsRoot";
import { TreesPlantsRoot } from "./TreesPlantsRoot";
import { EmotionsRoot } from "./EmotionsRoot";
import { ToolsRoot } from "./ToolsRoot";
import { ClothingRoot } from "./ClothingRoot";
import { DessertsRoot } from "./DessertsRoot";
import { GemsMineralsRoot } from "./GemsMineralsRoot";
import { DanceFormsRoot } from "./DanceFormsRoot";
import { ReptilesRoot } from "./ReptilesRoot";
import { FarmAnimalsRoot } from "./FarmAnimalsRoot";
import { KitchenItemsRoot } from "./KitchenItemsRoot";
import { OceanLifeRoot } from "./OceanLifeRoot";
import { BabyAnimalsRoot } from "./BabyAnimalsRoot";
import { MythicalCreaturesRoot } from "./MythicalCreaturesRoot";
import { WeatherNatureRoot } from "./WeatherNatureRoot";
import { WorldFlagsRoot } from "./WorldFlagsRoot";
import React from "react";

// 500 Videos - 19 Categories
const CombinedRoot: React.FC = () => {
  return React.createElement(React.Fragment, null,
    React.createElement(BodyPartsRoot),
    React.createElement(ProfessionsRoot),
    React.createElement(FamousPlacesRoot),
    React.createElement(DogBreedsRoot),
    React.createElement(TreesPlantsRoot),
    React.createElement(EmotionsRoot),
    React.createElement(ToolsRoot),
    React.createElement(ClothingRoot),
    React.createElement(DessertsRoot),
    React.createElement(GemsMineralsRoot),
    React.createElement(DanceFormsRoot),
    React.createElement(ReptilesRoot),
    React.createElement(FarmAnimalsRoot),
    React.createElement(KitchenItemsRoot),
    React.createElement(OceanLifeRoot),
    React.createElement(BabyAnimalsRoot),
    React.createElement(MythicalCreaturesRoot),
    React.createElement(WeatherNatureRoot),
    React.createElement(WorldFlagsRoot)
  );
};

registerRoot(CombinedRoot);
