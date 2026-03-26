import "./index.css";
import { Composition, Folder } from "remotion";
import { HindiStoryTemplate } from "./HindiStoryTemplate";
import type { HindiStoryProps, RhymeTheme } from "./HindiStoryTemplate";
import { ShortsWrapper } from "./ShortsWrapper";
import React from "react";

// Wrapper that renders a Hindi story inside the ShortsWrapper for portrait format
const ShortsStory: React.FC<HindiStoryProps & { topColor: string; bottomColor: string; accentEmoji?: string }> = (props) => {
  const { topColor, bottomColor, accentEmoji, ...storyProps } = props;
  return (
    <ShortsWrapper title={storyProps.title} topColor={topColor} bottomColor={bottomColor} accentEmoji={accentEmoji}>
      <HindiStoryTemplate {...storyProps} />
    </ShortsWrapper>
  );
};

// Theme colors for shorts wrapper
const THEME_COLORS: Record<RhymeTheme, { top: string; bottom: string; emoji: string }> = {
  night: { top: "#0A0A2E", bottom: "#2D1B69", emoji: "🌙" },
  farm: { top: "#87CEEB", bottom: "#4CAF50", emoji: "🐑" },
  ocean: { top: "#0077B6", bottom: "#00B4D8", emoji: "🐠" },
  garden: { top: "#F8BBD0", bottom: "#A5D6A7", emoji: "🦋" },
  playground: { top: "#FFF176", bottom: "#FFB74D", emoji: "🎈" },
  space: { top: "#000000", bottom: "#1A0533", emoji: "🚀" },
  forest: { top: "#1B5E20", bottom: "#388E3C", emoji: "🌲" },
  city: { top: "#37474F", bottom: "#5C6BC0", emoji: "🏙️" },
};

export const HindiStoryRemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Story-City-Life">
        <Composition
          id="StoryMittuTota"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "मिट्ठू तोता",
            rhymeId: "mittu-tota",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "सबको आज़ादी प्यारी होती है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryMittuTotaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "मिट्ठू तोता",
            rhymeId: "mittu-tota",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "सबको आज़ादी प्यारी होती है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["city"].top,
            bottomColor: THEME_COLORS["city"].bottom,
            accentEmoji: THEME_COLORS["city"].emoji,
          }}
        />
        <Composition
          id="StoryBudhiDadiMaa"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "बूढ़ी दादी माँ",
            rhymeId: "budhi-dadi-maa",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "बड़ों का आदर करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryBudhiDadiMaaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "बूढ़ी दादी माँ",
            rhymeId: "budhi-dadi-maa",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "बड़ों का आदर करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["city"].top,
            bottomColor: THEME_COLORS["city"].bottom,
            accentEmoji: THEME_COLORS["city"].emoji,
          }}
        />
        <Composition
          id="StoryJaduiGhada"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "जादुई घड़ा",
            rhymeId: "jadui-ghada",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "ज़रूरत से ज़्यादा लेना नुकसान देता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryJaduiGhadaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "जादुई घड़ा",
            rhymeId: "jadui-ghada",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "ज़रूरत से ज़्यादा लेना नुकसान देता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["city"].top,
            bottomColor: THEME_COLORS["city"].bottom,
            accentEmoji: THEME_COLORS["city"].emoji,
          }}
        />
        <Composition
          id="StoryChotiSiChidiya"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "छोटी सी चिड़िया",
            rhymeId: "choti-si-chidiya",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "हिम्मत रखने वालों की हार नहीं होती।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChotiSiChidiyaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "छोटी सी चिड़िया",
            rhymeId: "choti-si-chidiya",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "हिम्मत रखने वालों की हार नहीं होती।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["city"].top,
            bottomColor: THEME_COLORS["city"].bottom,
            accentEmoji: THEME_COLORS["city"].emoji,
          }}
        />
        <Composition
          id="StoryKisanKaKhazana"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "किसान का खज़ाना",
            rhymeId: "kisan-ka-khazana",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "मेहनत ही सबसे बड़ा खज़ाना है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryKisanKaKhazanaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "किसान का खज़ाना",
            rhymeId: "kisan-ka-khazana",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "मेहनत ही सबसे बड़ा खज़ाना है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["city"].top,
            bottomColor: THEME_COLORS["city"].bottom,
            accentEmoji: THEME_COLORS["city"].emoji,
          }}
        />
        <Composition
          id="StoryAankhoDekhi"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "आँखों देखी",
            rhymeId: "aankho-dekhi",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "दूसरों की बात पर नहीं, खुद देखकर विश्वास करो।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryAankhoDekhiShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "आँखों देखी",
            rhymeId: "aankho-dekhi",
            theme: "city" as RhymeTheme,
            verses: [],
            moral: "दूसरों की बात पर नहीं, खुद देखकर विश्वास करो।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["city"].top,
            bottomColor: THEME_COLORS["city"].bottom,
            accentEmoji: THEME_COLORS["city"].emoji,
          }}
        />
      </Folder>
      <Folder name="Story-Farm-Animals">
        <Composition
          id="StoryLalchiKutta"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "लालची कुत्ता",
            rhymeId: "lalchi-kutta",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "लालच बुरी बला है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryLalchiKuttaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "लालची कुत्ता",
            rhymeId: "lalchi-kutta",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "लालच बुरी बला है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
        <Composition
          id="StorySoneKaAnda"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सोने का अंडा",
            rhymeId: "sone-ka-anda",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "लालच का फल बुरा होता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySoneKaAndaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सोने का अंडा",
            rhymeId: "sone-ka-anda",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "लालच का फल बुरा होता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
        <Composition
          id="StoryMehantiChinti"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "मेहनती चींटी",
            rhymeId: "mehanti-chinti",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "मेहनत का फल मीठा होता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryMehantiChintiShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "मेहनती चींटी",
            rhymeId: "mehanti-chinti",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "मेहनत का फल मीठा होता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
        <Composition
          id="StoryJhoothiGadariya"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "झूठा गड़रिया",
            rhymeId: "jhoothi-gadariya",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "झूठ बोलने वाले की बात कोई नहीं मानता।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryJhoothiGadariyaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "झूठा गड़रिया",
            rhymeId: "jhoothi-gadariya",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "झूठ बोलने वाले की बात कोई नहीं मानता।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
        <Composition
          id="StoryBandarAurMagarmach"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "बंदर और मगरमच्छ",
            rhymeId: "bandar-aur-magarmach",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "सूझ-बूझ से हर खतरे से बचा जा सकता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryBandarAurMagarmachShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "बंदर और मगरमच्छ",
            rhymeId: "bandar-aur-magarmach",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "सूझ-बूझ से हर खतरे से बचा जा सकता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
        <Composition
          id="StoryHathiAurDarzi"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "हाथी और दर्ज़ी",
            rhymeId: "hathi-aur-darzi",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "किसी को सताओगे तो बदला मिलेगा।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryHathiAurDarziShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "हाथी और दर्ज़ी",
            rhymeId: "hathi-aur-darzi",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "किसी को सताओगे तो बदला मिलेगा।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
        <Composition
          id="StoryChalakKhargosh"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चालाक खरगोश",
            rhymeId: "chalak-khargosh",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "बुद्धि बल से बड़ी होती है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChalakKhargoshShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चालाक खरगोश",
            rhymeId: "chalak-khargosh",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "बुद्धि बल से बड़ी होती है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
        <Composition
          id="StorySunharaHiran"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सुनहरा हिरण",
            rhymeId: "sunhara-hiran",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "चमकने वाली हर चीज़ सोना नहीं होती।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySunharaHiranShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सुनहरा हिरण",
            rhymeId: "sunhara-hiran",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "चमकने वाली हर चीज़ सोना नहीं होती।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
        <Composition
          id="StoryEktaMeinBal"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "एकता में बल",
            rhymeId: "ekta-mein-bal",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "एकता में बड़ी ताक़त होती है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryEktaMeinBalShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "एकता में बल",
            rhymeId: "ekta-mein-bal",
            theme: "farm" as RhymeTheme,
            verses: [],
            moral: "एकता में बड़ी ताक़त होती है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["farm"].top,
            bottomColor: THEME_COLORS["farm"].bottom,
            accentEmoji: THEME_COLORS["farm"].emoji,
          }}
        />
      </Folder>
      <Folder name="Story-Forest-Friends">
        <Composition
          id="StoryPyasiKauwa"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "प्यासा कौआ",
            rhymeId: "pyasi-kauwa",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "मेहनत और बुद्धि से हर मुश्किल हल हो सकती है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryPyasiKauwaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "प्यासा कौआ",
            rhymeId: "pyasi-kauwa",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "मेहनत और बुद्धि से हर मुश्किल हल हो सकती है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["forest"].top,
            bottomColor: THEME_COLORS["forest"].bottom,
            accentEmoji: THEME_COLORS["forest"].emoji,
          }}
        />
        <Composition
          id="StorySherAurChuha"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "शेर और चूहा",
            rhymeId: "sher-aur-chuha",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "छोटे से छोटा प्राणी भी बड़े काम आ सकता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySherAurChuhaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "शेर और चूहा",
            rhymeId: "sher-aur-chuha",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "छोटे से छोटा प्राणी भी बड़े काम आ सकता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["forest"].top,
            bottomColor: THEME_COLORS["forest"].bottom,
            accentEmoji: THEME_COLORS["forest"].emoji,
          }}
        />
        <Composition
          id="StoryKachuaAurKhargosh"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "कछुआ और खरगोश",
            rhymeId: "kachua-aur-khargosh",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "धीरे-धीरे चलने वाला भी दौड़ जीत सकता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryKachuaAurKhargoshShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "कछुआ और खरगोश",
            rhymeId: "kachua-aur-khargosh",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "धीरे-धीरे चलने वाला भी दौड़ जीत सकता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["forest"].top,
            bottomColor: THEME_COLORS["forest"].bottom,
            accentEmoji: THEME_COLORS["forest"].emoji,
          }}
        />
        <Composition
          id="StoryChaturLomdi"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चतुर लोमड़ी और अंगूर",
            rhymeId: "chatur-lomdi",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "जो नहीं मिलता उसे बुरा कहना ठीक नहीं।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChaturLomdiShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चतुर लोमड़ी और अंगूर",
            rhymeId: "chatur-lomdi",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "जो नहीं मिलता उसे बुरा कहना ठीक नहीं।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["forest"].top,
            bottomColor: THEME_COLORS["forest"].bottom,
            accentEmoji: THEME_COLORS["forest"].emoji,
          }}
        />
        <Composition
          id="StoryRangBirangiTitli"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "रंग-बिरंगी तितली",
            rhymeId: "rang-birangi-titli",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "बदलाव से डरना नहीं चाहिए, वह सुंदर होता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryRangBirangiTitliShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "रंग-बिरंगी तितली",
            rhymeId: "rang-birangi-titli",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "बदलाव से डरना नहीं चाहिए, वह सुंदर होता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["forest"].top,
            bottomColor: THEME_COLORS["forest"].bottom,
            accentEmoji: THEME_COLORS["forest"].emoji,
          }}
        />
        <Composition
          id="StoryDostKaSaath"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "दोस्त का साथ",
            rhymeId: "dost-ka-saath",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "सच्चा दोस्त मुसीबत में काम आता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryDostKaSaathShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "दोस्त का साथ",
            rhymeId: "dost-ka-saath",
            theme: "forest" as RhymeTheme,
            verses: [],
            moral: "सच्चा दोस्त मुसीबत में काम आता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["forest"].top,
            bottomColor: THEME_COLORS["forest"].bottom,
            accentEmoji: THEME_COLORS["forest"].emoji,
          }}
        />
      </Folder>
      <Folder name="Story-Garden-Nature">
        <Composition
          id="StoryNanhaPaudha"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "नन्हा पौधा",
            rhymeId: "nanha-paudha",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "धैर्य और देखभाल से सब कुछ बड़ा होता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryNanhaPaudhaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "नन्हा पौधा",
            rhymeId: "nanha-paudha",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "धैर्य और देखभाल से सब कुछ बड़ा होता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["garden"].top,
            bottomColor: THEME_COLORS["garden"].bottom,
            accentEmoji: THEME_COLORS["garden"].emoji,
          }}
        />
        <Composition
          id="StoryDoBilliyanBandar"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "दो बिल्लियाँ और बंदर",
            rhymeId: "do-billiyan-bandar",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "लड़ाई में तीसरा फ़ायदा उठाता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryDoBilliyanBandarShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "दो बिल्लियाँ और बंदर",
            rhymeId: "do-billiyan-bandar",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "लड़ाई में तीसरा फ़ायदा उठाता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["garden"].top,
            bottomColor: THEME_COLORS["garden"].bottom,
            accentEmoji: THEME_COLORS["garden"].emoji,
          }}
        />
        <Composition
          id="StoryChidiyaKaGhar"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चिड़िया का घर",
            rhymeId: "chidiya-ka-ghar",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "सही समय पर काम करना ज़रूरी है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChidiyaKaGharShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चिड़िया का घर",
            rhymeId: "chidiya-ka-ghar",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "सही समय पर काम करना ज़रूरी है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["garden"].top,
            bottomColor: THEME_COLORS["garden"].bottom,
            accentEmoji: THEME_COLORS["garden"].emoji,
          }}
        />
        <Composition
          id="StoryRajaAurBaja"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "राजा और बाज़",
            rhymeId: "raja-aur-baja",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "गुस्से में कोई काम नहीं करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryRajaAurBajaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "राजा और बाज़",
            rhymeId: "raja-aur-baja",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "गुस्से में कोई काम नहीं करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["garden"].top,
            bottomColor: THEME_COLORS["garden"].bottom,
            accentEmoji: THEME_COLORS["garden"].emoji,
          }}
        />
        <Composition
          id="StorySundarMor"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सुंदर मोर",
            rhymeId: "sundar-mor",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "घमंड नहीं करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySundarMorShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सुंदर मोर",
            rhymeId: "sundar-mor",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "घमंड नहीं करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["garden"].top,
            bottomColor: THEME_COLORS["garden"].bottom,
            accentEmoji: THEME_COLORS["garden"].emoji,
          }}
        />
        <Composition
          id="StorySachKiTakat"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सच की ताक़त",
            rhymeId: "sach-ki-takat",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "सच बोलने वाला हमेशा जीतता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySachKiTakatShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सच की ताक़त",
            rhymeId: "sach-ki-takat",
            theme: "garden" as RhymeTheme,
            verses: [],
            moral: "सच बोलने वाला हमेशा जीतता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["garden"].top,
            bottomColor: THEME_COLORS["garden"].bottom,
            accentEmoji: THEME_COLORS["garden"].emoji,
          }}
        />
      </Folder>
      <Folder name="Story-Night-Sky">
        <Composition
          id="StoryJaduiKapda"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "जादुई कपड़ा",
            rhymeId: "jadui-kapda",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "जो है उसमें खुश रहना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryJaduiKapdaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "जादुई कपड़ा",
            rhymeId: "jadui-kapda",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "जो है उसमें खुश रहना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["night"].top,
            bottomColor: THEME_COLORS["night"].bottom,
            accentEmoji: THEME_COLORS["night"].emoji,
          }}
        />
        <Composition
          id="StoryChandPeKhargosh"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चाँद पर खरगोश",
            rhymeId: "chand-pe-khargosh",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "त्याग करने वाला हमेशा याद किया जाता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChandPeKhargoshShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चाँद पर खरगोश",
            rhymeId: "chand-pe-khargosh",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "त्याग करने वाला हमेशा याद किया जाता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["night"].top,
            bottomColor: THEME_COLORS["night"].bottom,
            accentEmoji: THEME_COLORS["night"].emoji,
          }}
        />
        <Composition
          id="StoryAndhaRaja"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "अंधे आदमी और हाथी",
            rhymeId: "andha-raja",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "किसी चीज़ को पूरा जाने बिना राय नहीं देनी चाहिए।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryAndhaRajaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "अंधे आदमी और हाथी",
            rhymeId: "andha-raja",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "किसी चीज़ को पूरा जाने बिना राय नहीं देनी चाहिए।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["night"].top,
            bottomColor: THEME_COLORS["night"].bottom,
            accentEmoji: THEME_COLORS["night"].emoji,
          }}
        />
        <Composition
          id="StoryJadugarKiTopi"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "जादूगर की टोपी",
            rhymeId: "jadugar-ki-topi",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "अच्छे काम का फल अच्छा ही होता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryJadugarKiTopiShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "जादूगर की टोपी",
            rhymeId: "jadugar-ki-topi",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "अच्छे काम का फल अच्छा ही होता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["night"].top,
            bottomColor: THEME_COLORS["night"].bottom,
            accentEmoji: THEME_COLORS["night"].emoji,
          }}
        />
        <Composition
          id="StoryKisaanAurSaanp"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "किसान और साँप",
            rhymeId: "kisaan-aur-saanp",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "दुष्ट पर दया करना खतरनाक हो सकता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryKisaanAurSaanpShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "किसान और साँप",
            rhymeId: "kisaan-aur-saanp",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "दुष्ट पर दया करना खतरनाक हो सकता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["night"].top,
            bottomColor: THEME_COLORS["night"].bottom,
            accentEmoji: THEME_COLORS["night"].emoji,
          }}
        />
        <Composition
          id="StoryAkbarBirbalChor"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "अकबर-बीरबल और चोर",
            rhymeId: "akbar-birbal-chor",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "बुद्धिमान लोग हर समस्या का हल निकाल लेते हैं।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryAkbarBirbalChorShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "अकबर-बीरबल और चोर",
            rhymeId: "akbar-birbal-chor",
            theme: "night" as RhymeTheme,
            verses: [],
            moral: "बुद्धिमान लोग हर समस्या का हल निकाल लेते हैं।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["night"].top,
            bottomColor: THEME_COLORS["night"].bottom,
            accentEmoji: THEME_COLORS["night"].emoji,
          }}
        />
      </Folder>
      <Folder name="Story-Ocean-Adventures">
        <Composition
          id="StorySamundarAurMachhli"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "समुद्र और छोटी मछली",
            rhymeId: "samundar-aur-machhli",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "छोटे होकर भी बड़े काम किए जा सकते हैं।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySamundarAurMachhliShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "समुद्र और छोटी मछली",
            rhymeId: "samundar-aur-machhli",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "छोटे होकर भी बड़े काम किए जा सकते हैं।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["ocean"].top,
            bottomColor: THEME_COLORS["ocean"].bottom,
            accentEmoji: THEME_COLORS["ocean"].emoji,
          }}
        />
        <Composition
          id="StoryDhartiKaBojh"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "धरती का बोझ",
            rhymeId: "dharti-ka-bojh",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "धरती की रक्षा करना हम सबका कर्तव्य है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryDhartiKaBojhShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "धरती का बोझ",
            rhymeId: "dharti-ka-bojh",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "धरती की रक्षा करना हम सबका कर्तव्य है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["ocean"].top,
            bottomColor: THEME_COLORS["ocean"].bottom,
            accentEmoji: THEME_COLORS["ocean"].emoji,
          }}
        />
        <Composition
          id="StoryChuhaKaVivah"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चूहे का विवाह",
            rhymeId: "chuha-ka-vivah",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "हर कोई अपनी जगह सबसे अच्छा है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChuhaKaVivahShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चूहे का विवाह",
            rhymeId: "chuha-ka-vivah",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "हर कोई अपनी जगह सबसे अच्छा है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["ocean"].top,
            bottomColor: THEME_COLORS["ocean"].bottom,
            accentEmoji: THEME_COLORS["ocean"].emoji,
          }}
        />
        <Composition
          id="StoryGyaniUllu"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "ज्ञानी उल्लू",
            rhymeId: "gyani-ullu",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "ज़्यादा सुनो, कम बोलो — यही बुद्धिमानी है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryGyaniUlluShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "ज्ञानी उल्लू",
            rhymeId: "gyani-ullu",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "ज़्यादा सुनो, कम बोलो — यही बुद्धिमानी है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["ocean"].top,
            bottomColor: THEME_COLORS["ocean"].bottom,
            accentEmoji: THEME_COLORS["ocean"].emoji,
          }}
        />
        <Composition
          id="StoryRangonKiDosti"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "रंगों की दोस्ती",
            rhymeId: "rangon-ki-dosti",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "सबकी अपनी खूबी होती है, मिलकर सुंदरता बनती है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryRangonKiDostiShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "रंगों की दोस्ती",
            rhymeId: "rangon-ki-dosti",
            theme: "ocean" as RhymeTheme,
            verses: [],
            moral: "सबकी अपनी खूबी होती है, मिलकर सुंदरता बनती है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["ocean"].top,
            bottomColor: THEME_COLORS["ocean"].bottom,
            accentEmoji: THEME_COLORS["ocean"].emoji,
          }}
        />
      </Folder>
      <Folder name="Story-Playground-Fun">
        <Composition
          id="StoryGudiyaKiDosti"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "गुड़िया की दोस्ती",
            rhymeId: "gudiya-ki-dosti",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "सबसे दोस्ती करनी चाहिए, भेदभाव नहीं।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryGudiyaKiDostiShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "गुड़िया की दोस्ती",
            rhymeId: "gudiya-ki-dosti",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "सबसे दोस्ती करनी चाहिए, भेदभाव नहीं।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["playground"].top,
            bottomColor: THEME_COLORS["playground"].bottom,
            accentEmoji: THEME_COLORS["playground"].emoji,
          }}
        />
        <Composition
          id="StorySoneKiKulhadi"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सोने की कुल्हाड़ी",
            rhymeId: "sone-ki-kulhadi",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "ईमानदारी सबसे अच्छी नीति है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySoneKiKulhadiShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सोने की कुल्हाड़ी",
            rhymeId: "sone-ki-kulhadi",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "ईमानदारी सबसे अच्छी नीति है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["playground"].top,
            bottomColor: THEME_COLORS["playground"].bottom,
            accentEmoji: THEME_COLORS["playground"].emoji,
          }}
        />
        <Composition
          id="StoryChuhaBilliGhanti"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "बिल्ली के गले में घंटी",
            rhymeId: "chuha-billi-ghanti",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "योजना बनाना आसान है, उसे करना मुश्किल।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChuhaBilliGhantiShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "बिल्ली के गले में घंटी",
            rhymeId: "chuha-billi-ghanti",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "योजना बनाना आसान है, उसे करना मुश्किल।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["playground"].top,
            bottomColor: THEME_COLORS["playground"].bottom,
            accentEmoji: THEME_COLORS["playground"].emoji,
          }}
        />
        <Composition
          id="StoryMeethiBoli"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "मीठी बोली",
            rhymeId: "meethi-boli",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "मीठी बोली से सब अपने हो जाते हैं।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryMeethiBoliShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "मीठी बोली",
            rhymeId: "meethi-boli",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "मीठी बोली से सब अपने हो जाते हैं।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["playground"].top,
            bottomColor: THEME_COLORS["playground"].bottom,
            accentEmoji: THEME_COLORS["playground"].emoji,
          }}
        />
        <Composition
          id="StoryHawaAurSuraj"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "हवा और सूरज",
            rhymeId: "hawa-aur-suraj",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "प्यार और नम्रता ज़ोर-ज़बरदस्ती से बड़ी है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryHawaAurSurajShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "हवा और सूरज",
            rhymeId: "hawa-aur-suraj",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "प्यार और नम्रता ज़ोर-ज़बरदस्ती से बड़ी है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["playground"].top,
            bottomColor: THEME_COLORS["playground"].bottom,
            accentEmoji: THEME_COLORS["playground"].emoji,
          }}
        />
        <Composition
          id="StoryKhushiKaRaaz"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "खुशी का राज़",
            rhymeId: "khushi-ka-raaz",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "खुशी बाहर नहीं, अपने अंदर होती है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryKhushiKaRaazShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "खुशी का राज़",
            rhymeId: "khushi-ka-raaz",
            theme: "playground" as RhymeTheme,
            verses: [],
            moral: "खुशी बाहर नहीं, अपने अंदर होती है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["playground"].top,
            bottomColor: THEME_COLORS["playground"].bottom,
            accentEmoji: THEME_COLORS["playground"].emoji,
          }}
        />
      </Folder>
      <Folder name="Story-Outer-Space">
        <Composition
          id="StoryPyariBilli"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "प्यारी बिल्ली",
            rhymeId: "pyari-billi",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "जानवरों से भी प्यार करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryPyariBilliShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "प्यारी बिल्ली",
            rhymeId: "pyari-billi",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "जानवरों से भी प्यार करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["space"].top,
            bottomColor: THEME_COLORS["space"].bottom,
            accentEmoji: THEME_COLORS["space"].emoji,
          }}
        />
        <Composition
          id="StoryBaatKaDhani"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "बात का धनी",
            rhymeId: "baat-ka-dhani",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "वादा करो तो निभाओ।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryBaatKaDhaniShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "बात का धनी",
            rhymeId: "baat-ka-dhani",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "वादा करो तो निभाओ।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["space"].top,
            bottomColor: THEME_COLORS["space"].bottom,
            accentEmoji: THEME_COLORS["space"].emoji,
          }}
        />
        <Composition
          id="StoryAnmolSamay"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "अनमोल समय",
            rhymeId: "anmol-samay",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "समय बहुत कीमती है, इसे बर्बाद नहीं करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryAnmolSamayShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "अनमोल समय",
            rhymeId: "anmol-samay",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "समय बहुत कीमती है, इसे बर्बाद नहीं करना चाहिए।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["space"].top,
            bottomColor: THEME_COLORS["space"].bottom,
            accentEmoji: THEME_COLORS["space"].emoji,
          }}
        />
        <Composition
          id="StoryDayaKaPhal"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "दया का फल",
            rhymeId: "daya-ka-phal",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "दया करने वाले को हमेशा अच्छा फल मिलता है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryDayaKaPhalShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "दया का फल",
            rhymeId: "daya-ka-phal",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "दया करने वाले को हमेशा अच्छा फल मिलता है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["space"].top,
            bottomColor: THEME_COLORS["space"].bottom,
            accentEmoji: THEME_COLORS["space"].emoji,
          }}
        />
        <Composition
          id="StoryTotaAurKauwa"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "तोता और कौआ",
            rhymeId: "tota-aur-kauwa",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "सुंदरता रंग-रूप में नहीं, अच्छे गुणों में होती है।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryTotaAurKauwaShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "तोता और कौआ",
            rhymeId: "tota-aur-kauwa",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "सुंदरता रंग-रूप में नहीं, अच्छे गुणों में होती है।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["space"].top,
            bottomColor: THEME_COLORS["space"].bottom,
            accentEmoji: THEME_COLORS["space"].emoji,
          }}
        />
        <Composition
          id="StorySapnonKaGhar"
          component={HindiStoryTemplate}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सपनों का घर",
            rhymeId: "sapnon-ka-ghar",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "सपने देखो और उन्हें पूरा करने की कोशिश करो।",
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySapnonKaGharShorts"
          component={ShortsStory}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सपनों का घर",
            rhymeId: "sapnon-ka-ghar",
            theme: "space" as RhymeTheme,
            verses: [],
            moral: "सपने देखो और उन्हें पूरा करने की कोशिश करो।",
            introDuration: 5,
            outroDuration: 5,
            topColor: THEME_COLORS["space"].top,
            bottomColor: THEME_COLORS["space"].bottom,
            accentEmoji: THEME_COLORS["space"].emoji,
          }}
        />
      </Folder>
    </>
  );
};
