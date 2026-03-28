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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "मिट्ठू तोता",
            rhymeId: "mittu-tota",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक लड़के के पास मिट्ठू नाम का तोता था।",
          "emoji": "🦜"
          },
          {
          "line": "मिट्ठू पिंजरे में बंद था।",
          "emoji": "🪶"
          },
          {
          "line": "लड़का मिट्ठू से बहुत प्यार करता था।",
          "emoji": "❤️"
          },
          {
          "line": "लेकिन मिट्ठू उदास रहता था।",
          "emoji": "😢"
          },
          {
          "line": "एक दिन लड़के ने देखा — मिट्ठू खिड़की से बाहर देख रहा है।",
          "emoji": "🪟"
          },
          {
          "line": "बाहर दूसरे तोते आज़ादी से उड़ रहे थे।",
          "emoji": "🐦"
          },
          {
          "line": "लड़के ने समझा — मिट्ठू आज़ाद होना चाहता है।",
          "emoji": "💭"
          },
          {
          "line": "उसने पिंजरे का दरवाज़ा खोल दिया।",
          "emoji": "🚪"
          },
          {
          "line": "मिट्ठू खुशी से उड़ गया लेकिन रोज़ लड़के से मिलने आता था।",
          "emoji": "😊"
          },
          {
          "line": "प्यार बाँधने से नहीं, आज़ादी देने से बढ़ता है।",
          "emoji": "⭐"
          }
          ],
            moral: "सबको आज़ादी प्यारी होती है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryMittuTotaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "मिट्ठू तोता",
            rhymeId: "mittu-tota",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक लड़के के पास मिट्ठू नाम का तोता था।",
          "emoji": "🦜"
          },
          {
          "line": "मिट्ठू पिंजरे में बंद था।",
          "emoji": "🪶"
          },
          {
          "line": "लड़का मिट्ठू से बहुत प्यार करता था।",
          "emoji": "❤️"
          },
          {
          "line": "लेकिन मिट्ठू उदास रहता था।",
          "emoji": "😢"
          },
          {
          "line": "एक दिन लड़के ने देखा — मिट्ठू खिड़की से बाहर देख रहा है।",
          "emoji": "🪟"
          },
          {
          "line": "बाहर दूसरे तोते आज़ादी से उड़ रहे थे।",
          "emoji": "🐦"
          },
          {
          "line": "लड़के ने समझा — मिट्ठू आज़ाद होना चाहता है।",
          "emoji": "💭"
          },
          {
          "line": "उसने पिंजरे का दरवाज़ा खोल दिया।",
          "emoji": "🚪"
          },
          {
          "line": "मिट्ठू खुशी से उड़ गया लेकिन रोज़ लड़के से मिलने आता था।",
          "emoji": "😊"
          },
          {
          "line": "प्यार बाँधने से नहीं, आज़ादी देने से बढ़ता है।",
          "emoji": "⭐"
          }
          ],
            moral: "सबको आज़ादी प्यारी होती है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "बूढ़ी दादी माँ",
            rhymeId: "budhi-dadi-maa",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में बूढ़ी दादी माँ रहती थीं।",
          "emoji": "👵"
          },
          {
          "line": "गाँव के बच्चे उनका मज़ाक उड़ाते थे।",
          "emoji": "😈"
          },
          {
          "line": "एक दिन गाँव में भयंकर तूफ़ान आया।",
          "emoji": "🌪️"
          },
          {
          "line": "कोई नहीं जानता था क्या करना है।",
          "emoji": "😰"
          },
          {
          "line": "दादी माँ ने कहा — सब पहाड़ी गुफा में चलो।",
          "emoji": "🏔️"
          },
          {
          "line": "उन्हें अनुभव से पता था कि वहाँ सुरक्षित है।",
          "emoji": "🧠"
          },
          {
          "line": "सब गाँव वाले गुफा में जाकर बच गए।",
          "emoji": "😊"
          },
          {
          "line": "तूफ़ान निकल गया, गाँव बच गया।",
          "emoji": "🌤️"
          },
          {
          "line": "बच्चों ने दादी माँ से माफ़ी माँगी।",
          "emoji": "🙏"
          },
          {
          "line": "बड़ों का अनुभव अमूल्य होता है, उनका आदर करो।",
          "emoji": "⭐"
          }
          ],
            moral: "बड़ों का आदर करना चाहिए।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryBudhiDadiMaaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "बूढ़ी दादी माँ",
            rhymeId: "budhi-dadi-maa",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में बूढ़ी दादी माँ रहती थीं।",
          "emoji": "👵"
          },
          {
          "line": "गाँव के बच्चे उनका मज़ाक उड़ाते थे।",
          "emoji": "😈"
          },
          {
          "line": "एक दिन गाँव में भयंकर तूफ़ान आया।",
          "emoji": "🌪️"
          },
          {
          "line": "कोई नहीं जानता था क्या करना है।",
          "emoji": "😰"
          },
          {
          "line": "दादी माँ ने कहा — सब पहाड़ी गुफा में चलो।",
          "emoji": "🏔️"
          },
          {
          "line": "उन्हें अनुभव से पता था कि वहाँ सुरक्षित है।",
          "emoji": "🧠"
          },
          {
          "line": "सब गाँव वाले गुफा में जाकर बच गए।",
          "emoji": "😊"
          },
          {
          "line": "तूफ़ान निकल गया, गाँव बच गया।",
          "emoji": "🌤️"
          },
          {
          "line": "बच्चों ने दादी माँ से माफ़ी माँगी।",
          "emoji": "🙏"
          },
          {
          "line": "बड़ों का अनुभव अमूल्य होता है, उनका आदर करो।",
          "emoji": "⭐"
          }
          ],
            moral: "बड़ों का आदर करना चाहिए।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "जादुई घड़ा",
            rhymeId: "jadui-ghada",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक गरीब आदमी को ज़मीन खोदते हुए एक घड़ा मिला।",
          "emoji": "🏺"
          },
          {
          "line": "जो चीज़ घड़े में डालो, दोगुनी हो जाती थी!",
          "emoji": "✨"
          },
          {
          "line": "उसने एक सेब डाला — दो सेब निकले!",
          "emoji": "🍎"
          },
          {
          "line": "उसने सिक्के डाले — दोगुने सिक्के!",
          "emoji": "🪙"
          },
          {
          "line": "वह बहुत खुश हुआ।",
          "emoji": "😊"
          },
          {
          "line": "लालच में उसने और ज़्यादा चीज़ें डालनी शुरू कीं।",
          "emoji": "🤑"
          },
          {
          "line": "उसने खुद झुककर देखा और घड़े में गिर गया!",
          "emoji": "😱"
          },
          {
          "line": "अब दो आदमी हो गए!",
          "emoji": "👬"
          },
          {
          "line": "दोनों एक-दूसरे से लड़ने लगे।",
          "emoji": "😤"
          },
          {
          "line": "लालच करने से सब कुछ बिगड़ जाता है।",
          "emoji": "⭐"
          }
          ],
            moral: "ज़रूरत से ज़्यादा लेना नुकसान देता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryJaduiGhadaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "जादुई घड़ा",
            rhymeId: "jadui-ghada",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक गरीब आदमी को ज़मीन खोदते हुए एक घड़ा मिला।",
          "emoji": "🏺"
          },
          {
          "line": "जो चीज़ घड़े में डालो, दोगुनी हो जाती थी!",
          "emoji": "✨"
          },
          {
          "line": "उसने एक सेब डाला — दो सेब निकले!",
          "emoji": "🍎"
          },
          {
          "line": "उसने सिक्के डाले — दोगुने सिक्के!",
          "emoji": "🪙"
          },
          {
          "line": "वह बहुत खुश हुआ।",
          "emoji": "😊"
          },
          {
          "line": "लालच में उसने और ज़्यादा चीज़ें डालनी शुरू कीं।",
          "emoji": "🤑"
          },
          {
          "line": "उसने खुद झुककर देखा और घड़े में गिर गया!",
          "emoji": "😱"
          },
          {
          "line": "अब दो आदमी हो गए!",
          "emoji": "👬"
          },
          {
          "line": "दोनों एक-दूसरे से लड़ने लगे।",
          "emoji": "😤"
          },
          {
          "line": "लालच करने से सब कुछ बिगड़ जाता है।",
          "emoji": "⭐"
          }
          ],
            moral: "ज़रूरत से ज़्यादा लेना नुकसान देता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "छोटी सी चिड़िया",
            rhymeId: "choti-si-chidiya",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी चिड़िया का घोंसला तूफ़ान में उड़ गया।",
          "emoji": "🐦"
          },
          {
          "line": "उसके छोटे-छोटे बच्चे डर गए।",
          "emoji": "🐥"
          },
          {
          "line": "चिड़िया ने हिम्मत नहीं हारी।",
          "emoji": "💪"
          },
          {
          "line": "उसने तिनके इकट्ठे करना शुरू किया।",
          "emoji": "🌾"
          },
          {
          "line": "बारिश में भी वह काम करती रही।",
          "emoji": "🌧️"
          },
          {
          "line": "दूसरे पक्षियों ने मदद की।",
          "emoji": "🤝"
          },
          {
          "line": "जल्दी ही एक नया मज़बूत घोंसला बन गया।",
          "emoji": "🪺"
          },
          {
          "line": "बच्चे फिर से खुश और सुरक्षित थे।",
          "emoji": "😊"
          },
          {
          "line": "चिड़िया ने साबित किया — हिम्मत सबसे बड़ी ताक़त है।",
          "emoji": "✨"
          },
          {
          "line": "हिम्मत रखो, कभी हार नहीं होगी।",
          "emoji": "⭐"
          }
          ],
            moral: "हिम्मत रखने वालों की हार नहीं होती।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChotiSiChidiyaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "छोटी सी चिड़िया",
            rhymeId: "choti-si-chidiya",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी चिड़िया का घोंसला तूफ़ान में उड़ गया।",
          "emoji": "🐦"
          },
          {
          "line": "उसके छोटे-छोटे बच्चे डर गए।",
          "emoji": "🐥"
          },
          {
          "line": "चिड़िया ने हिम्मत नहीं हारी।",
          "emoji": "💪"
          },
          {
          "line": "उसने तिनके इकट्ठे करना शुरू किया।",
          "emoji": "🌾"
          },
          {
          "line": "बारिश में भी वह काम करती रही।",
          "emoji": "🌧️"
          },
          {
          "line": "दूसरे पक्षियों ने मदद की।",
          "emoji": "🤝"
          },
          {
          "line": "जल्दी ही एक नया मज़बूत घोंसला बन गया।",
          "emoji": "🪺"
          },
          {
          "line": "बच्चे फिर से खुश और सुरक्षित थे।",
          "emoji": "😊"
          },
          {
          "line": "चिड़िया ने साबित किया — हिम्मत सबसे बड़ी ताक़त है।",
          "emoji": "✨"
          },
          {
          "line": "हिम्मत रखो, कभी हार नहीं होगी।",
          "emoji": "⭐"
          }
          ],
            moral: "हिम्मत रखने वालों की हार नहीं होती।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "किसान का खज़ाना",
            rhymeId: "kisan-ka-khazana",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक बूढ़ा किसान बीमार था।",
          "emoji": "🧑‍🌾"
          },
          {
          "line": "उसने अपने आलसी बेटों को बुलाया।",
          "emoji": "👦"
          },
          {
          "line": "किसान ने कहा — खेत में खज़ाना गड़ा है।",
          "emoji": "💰"
          },
          {
          "line": "किसान चल बसा।",
          "emoji": "😢"
          },
          {
          "line": "बेटों ने पूरा खेत खोद डाला।",
          "emoji": "⛏️"
          },
          {
          "line": "लेकिन खज़ाना कहीं नहीं मिला।",
          "emoji": "😕"
          },
          {
          "line": "खेत अच्छी तरह खुद चुका था, उन्होंने बीज बो दिए।",
          "emoji": "🌱"
          },
          {
          "line": "उस साल फ़सल बहुत अच्छी हुई।",
          "emoji": "🌾"
          },
          {
          "line": "बेटे समझ गए — मेहनत ही खज़ाना है!",
          "emoji": "💡"
          },
          {
          "line": "मेहनत से बड़ा कोई खज़ाना नहीं।",
          "emoji": "⭐"
          }
          ],
            moral: "मेहनत ही सबसे बड़ा खज़ाना है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryKisanKaKhazanaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "किसान का खज़ाना",
            rhymeId: "kisan-ka-khazana",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक बूढ़ा किसान बीमार था।",
          "emoji": "🧑‍🌾"
          },
          {
          "line": "उसने अपने आलसी बेटों को बुलाया।",
          "emoji": "👦"
          },
          {
          "line": "किसान ने कहा — खेत में खज़ाना गड़ा है।",
          "emoji": "💰"
          },
          {
          "line": "किसान चल बसा।",
          "emoji": "😢"
          },
          {
          "line": "बेटों ने पूरा खेत खोद डाला।",
          "emoji": "⛏️"
          },
          {
          "line": "लेकिन खज़ाना कहीं नहीं मिला।",
          "emoji": "😕"
          },
          {
          "line": "खेत अच्छी तरह खुद चुका था, उन्होंने बीज बो दिए।",
          "emoji": "🌱"
          },
          {
          "line": "उस साल फ़सल बहुत अच्छी हुई।",
          "emoji": "🌾"
          },
          {
          "line": "बेटे समझ गए — मेहनत ही खज़ाना है!",
          "emoji": "💡"
          },
          {
          "line": "मेहनत से बड़ा कोई खज़ाना नहीं।",
          "emoji": "⭐"
          }
          ],
            moral: "मेहनत ही सबसे बड़ा खज़ाना है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "आँखों देखी",
            rhymeId: "aankho-dekhi",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में सब कहते थे — नदी के पार भूत है!",
          "emoji": "👻"
          },
          {
          "line": "कोई भी नदी पार नहीं करता था।",
          "emoji": "🌊"
          },
          {
          "line": "एक बहादुर लड़का बोला — मैं जाकर देखूँगा।",
          "emoji": "🧑"
          },
          {
          "line": "रात में वह नदी पार कर गया।",
          "emoji": "🌙"
          },
          {
          "line": "उसने देखा — वहाँ एक बूढ़ा पेड़ था।",
          "emoji": "🌳"
          },
          {
          "line": "हवा में पेड़ की शाखाएँ हिलती थीं।",
          "emoji": "🌬️"
          },
          {
          "line": "परछाई भूत जैसी दिखती थी!",
          "emoji": "🫣"
          },
          {
          "line": "लड़का हँसा — यह तो बस एक पेड़ है!",
          "emoji": "😄"
          },
          {
          "line": "उसने गाँव वालों को सच बताया।",
          "emoji": "📢"
          },
          {
          "line": "सुनी-सुनाई बातों पर नहीं, खुद देखकर मानो।",
          "emoji": "⭐"
          }
          ],
            moral: "दूसरों की बात पर नहीं, खुद देखकर विश्वास करो।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryAankhoDekhiShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "आँखों देखी",
            rhymeId: "aankho-dekhi",
            theme: "city" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में सब कहते थे — नदी के पार भूत है!",
          "emoji": "👻"
          },
          {
          "line": "कोई भी नदी पार नहीं करता था।",
          "emoji": "🌊"
          },
          {
          "line": "एक बहादुर लड़का बोला — मैं जाकर देखूँगा।",
          "emoji": "🧑"
          },
          {
          "line": "रात में वह नदी पार कर गया।",
          "emoji": "🌙"
          },
          {
          "line": "उसने देखा — वहाँ एक बूढ़ा पेड़ था।",
          "emoji": "🌳"
          },
          {
          "line": "हवा में पेड़ की शाखाएँ हिलती थीं।",
          "emoji": "🌬️"
          },
          {
          "line": "परछाई भूत जैसी दिखती थी!",
          "emoji": "🫣"
          },
          {
          "line": "लड़का हँसा — यह तो बस एक पेड़ है!",
          "emoji": "😄"
          },
          {
          "line": "उसने गाँव वालों को सच बताया।",
          "emoji": "📢"
          },
          {
          "line": "सुनी-सुनाई बातों पर नहीं, खुद देखकर मानो।",
          "emoji": "⭐"
          }
          ],
            moral: "दूसरों की बात पर नहीं, खुद देखकर विश्वास करो।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "लालची कुत्ता",
            rhymeId: "lalchi-kutta",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक कुत्ते को हड्डी का एक टुकड़ा मिला।",
          "emoji": "🐕"
          },
          {
          "line": "वह खुशी-खुशी हड्डी मुँह में दबाकर चल पड़ा।",
          "emoji": "🦴"
          },
          {
          "line": "रास्ते में एक नदी आई।",
          "emoji": "🌊"
          },
          {
          "line": "कुत्ते ने पानी में अपनी परछाई देखी।",
          "emoji": "🪞"
          },
          {
          "line": "उसे लगा कि दूसरे कुत्ते के पास भी हड्डी है।",
          "emoji": "😲"
          },
          {
          "line": "लालच में उसने भौंककर दूसरी हड्डी छीनना चाहा।",
          "emoji": "😤"
          },
          {
          "line": "मुँह खुलते ही उसकी अपनी हड्डी पानी में गिर गई।",
          "emoji": "💦"
          },
          {
          "line": "अब उसके पास कुछ भी नहीं बचा।",
          "emoji": "😢"
          },
          {
          "line": "कुत्ता बहुत पछताया।",
          "emoji": "😞"
          },
          {
          "line": "लालच करने से अपना भी खो बैठते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "लालच बुरी बला है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryLalchiKuttaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "लालची कुत्ता",
            rhymeId: "lalchi-kutta",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक कुत्ते को हड्डी का एक टुकड़ा मिला।",
          "emoji": "🐕"
          },
          {
          "line": "वह खुशी-खुशी हड्डी मुँह में दबाकर चल पड़ा।",
          "emoji": "🦴"
          },
          {
          "line": "रास्ते में एक नदी आई।",
          "emoji": "🌊"
          },
          {
          "line": "कुत्ते ने पानी में अपनी परछाई देखी।",
          "emoji": "🪞"
          },
          {
          "line": "उसे लगा कि दूसरे कुत्ते के पास भी हड्डी है।",
          "emoji": "😲"
          },
          {
          "line": "लालच में उसने भौंककर दूसरी हड्डी छीनना चाहा।",
          "emoji": "😤"
          },
          {
          "line": "मुँह खुलते ही उसकी अपनी हड्डी पानी में गिर गई।",
          "emoji": "💦"
          },
          {
          "line": "अब उसके पास कुछ भी नहीं बचा।",
          "emoji": "😢"
          },
          {
          "line": "कुत्ता बहुत पछताया।",
          "emoji": "😞"
          },
          {
          "line": "लालच करने से अपना भी खो बैठते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "लालच बुरी बला है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सोने का अंडा",
            rhymeId: "sone-ka-anda",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक किसान के पास एक जादुई मुर्गी थी।",
          "emoji": "🐔"
          },
          {
          "line": "वह हर रोज़ एक सोने का अंडा देती थी।",
          "emoji": "🥚"
          },
          {
          "line": "किसान बहुत खुश था।",
          "emoji": "😊"
          },
          {
          "line": "लेकिन उसे और ज़्यादा सोना चाहिए था।",
          "emoji": "🤑"
          },
          {
          "line": "उसने सोचा — मुर्गी के पेट में बहुत सारे अंडे होंगे।",
          "emoji": "💭"
          },
          {
          "line": "उसने लालच में मुर्गी को काट दिया।",
          "emoji": "😱"
          },
          {
          "line": "लेकिन अंदर एक भी सोने का अंडा नहीं था।",
          "emoji": "😲"
          },
          {
          "line": "अब न मुर्गी रही न सोने का अंडा।",
          "emoji": "😭"
          },
          {
          "line": "किसान बहुत पछताया।",
          "emoji": "😞"
          },
          {
          "line": "लालच करने से सब कुछ खो बैठते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "लालच का फल बुरा होता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySoneKaAndaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सोने का अंडा",
            rhymeId: "sone-ka-anda",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक किसान के पास एक जादुई मुर्गी थी।",
          "emoji": "🐔"
          },
          {
          "line": "वह हर रोज़ एक सोने का अंडा देती थी।",
          "emoji": "🥚"
          },
          {
          "line": "किसान बहुत खुश था।",
          "emoji": "😊"
          },
          {
          "line": "लेकिन उसे और ज़्यादा सोना चाहिए था।",
          "emoji": "🤑"
          },
          {
          "line": "उसने सोचा — मुर्गी के पेट में बहुत सारे अंडे होंगे।",
          "emoji": "💭"
          },
          {
          "line": "उसने लालच में मुर्गी को काट दिया।",
          "emoji": "😱"
          },
          {
          "line": "लेकिन अंदर एक भी सोने का अंडा नहीं था।",
          "emoji": "😲"
          },
          {
          "line": "अब न मुर्गी रही न सोने का अंडा।",
          "emoji": "😭"
          },
          {
          "line": "किसान बहुत पछताया।",
          "emoji": "😞"
          },
          {
          "line": "लालच करने से सब कुछ खो बैठते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "लालच का फल बुरा होता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "मेहनती चींटी",
            rhymeId: "mehanti-chinti",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "गर्मियों में एक चींटी खाना इकट्ठा कर रही थी।",
          "emoji": "🐜"
          },
          {
          "line": "एक टिड्डा गाना गाते हुए मस्ती कर रहा था।",
          "emoji": "🦗"
          },
          {
          "line": "टिड्डे ने कहा — इतनी मेहनत क्यों करती हो?",
          "emoji": "😎"
          },
          {
          "line": "चींटी ने कहा — सर्दी में खाना कहाँ से आएगा?",
          "emoji": "🤔"
          },
          {
          "line": "टिड्डा हँसकर चला गया।",
          "emoji": "😄"
          },
          {
          "line": "सर्दी आ गई, बर्फ़ गिरने लगी।",
          "emoji": "❄️"
          },
          {
          "line": "चींटी अपने गर्म घर में आराम से थी।",
          "emoji": "🏠"
          },
          {
          "line": "टिड्डा भूखा और ठंड में काँप रहा था।",
          "emoji": "🥶"
          },
          {
          "line": "उसने चींटी से मदद माँगी।",
          "emoji": "🙏"
          },
          {
          "line": "मेहनत का फल हमेशा मीठा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "मेहनत का फल मीठा होता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryMehantiChintiShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "मेहनती चींटी",
            rhymeId: "mehanti-chinti",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "गर्मियों में एक चींटी खाना इकट्ठा कर रही थी।",
          "emoji": "🐜"
          },
          {
          "line": "एक टिड्डा गाना गाते हुए मस्ती कर रहा था।",
          "emoji": "🦗"
          },
          {
          "line": "टिड्डे ने कहा — इतनी मेहनत क्यों करती हो?",
          "emoji": "😎"
          },
          {
          "line": "चींटी ने कहा — सर्दी में खाना कहाँ से आएगा?",
          "emoji": "🤔"
          },
          {
          "line": "टिड्डा हँसकर चला गया।",
          "emoji": "😄"
          },
          {
          "line": "सर्दी आ गई, बर्फ़ गिरने लगी।",
          "emoji": "❄️"
          },
          {
          "line": "चींटी अपने गर्म घर में आराम से थी।",
          "emoji": "🏠"
          },
          {
          "line": "टिड्डा भूखा और ठंड में काँप रहा था।",
          "emoji": "🥶"
          },
          {
          "line": "उसने चींटी से मदद माँगी।",
          "emoji": "🙏"
          },
          {
          "line": "मेहनत का फल हमेशा मीठा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "मेहनत का फल मीठा होता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "झूठा गड़रिया",
            rhymeId: "jhoothi-gadariya",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक गड़रिया रोज़ भेड़ें चराने जाता था।",
          "emoji": "🧑‍🌾"
          },
          {
          "line": "एक दिन उसने मज़ाक में चिल्लाया — भेड़िया आया!",
          "emoji": "🗣️"
          },
          {
          "line": "गाँव वाले दौड़कर आए लेकिन भेड़िया नहीं था।",
          "emoji": "🏃"
          },
          {
          "line": "गड़रिया हँसा — मैंने तो मज़ाक किया!",
          "emoji": "😂"
          },
          {
          "line": "दूसरे दिन फिर उसने चिल्लाया — भेड़िया आया!",
          "emoji": "📢"
          },
          {
          "line": "गाँव वाले फिर आए, फिर मज़ाक निकला।",
          "emoji": "😤"
          },
          {
          "line": "तीसरे दिन सचमुच भेड़िया आ गया!",
          "emoji": "🐺"
          },
          {
          "line": "गड़रिये ने चिल्लाया लेकिन कोई नहीं आया।",
          "emoji": "😱"
          },
          {
          "line": "भेड़िये ने कई भेड़ें मार दीं।",
          "emoji": "😭"
          },
          {
          "line": "झूठ बोलने वाले की बात कोई नहीं मानता।",
          "emoji": "⭐"
          }
          ],
            moral: "झूठ बोलने वाले की बात कोई नहीं मानता।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryJhoothiGadariyaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "झूठा गड़रिया",
            rhymeId: "jhoothi-gadariya",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक गड़रिया रोज़ भेड़ें चराने जाता था।",
          "emoji": "🧑‍🌾"
          },
          {
          "line": "एक दिन उसने मज़ाक में चिल्लाया — भेड़िया आया!",
          "emoji": "🗣️"
          },
          {
          "line": "गाँव वाले दौड़कर आए लेकिन भेड़िया नहीं था।",
          "emoji": "🏃"
          },
          {
          "line": "गड़रिया हँसा — मैंने तो मज़ाक किया!",
          "emoji": "😂"
          },
          {
          "line": "दूसरे दिन फिर उसने चिल्लाया — भेड़िया आया!",
          "emoji": "📢"
          },
          {
          "line": "गाँव वाले फिर आए, फिर मज़ाक निकला।",
          "emoji": "😤"
          },
          {
          "line": "तीसरे दिन सचमुच भेड़िया आ गया!",
          "emoji": "🐺"
          },
          {
          "line": "गड़रिये ने चिल्लाया लेकिन कोई नहीं आया।",
          "emoji": "😱"
          },
          {
          "line": "भेड़िये ने कई भेड़ें मार दीं।",
          "emoji": "😭"
          },
          {
          "line": "झूठ बोलने वाले की बात कोई नहीं मानता।",
          "emoji": "⭐"
          }
          ],
            moral: "झूठ बोलने वाले की बात कोई नहीं मानता।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "बंदर और मगरमच्छ",
            rhymeId: "bandar-aur-magarmach",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "नदी किनारे एक जामुन के पेड़ पर बंदर रहता था।",
          "emoji": "🐒"
          },
          {
          "line": "नदी में एक मगरमच्छ रहता था।",
          "emoji": "🐊"
          },
          {
          "line": "बंदर रोज़ मगरमच्छ को मीठे जामुन देता था।",
          "emoji": "🫐"
          },
          {
          "line": "दोनों अच्छे दोस्त बन गए।",
          "emoji": "🤝"
          },
          {
          "line": "मगरमच्छ की पत्नी बोली — मुझे बंदर का दिल चाहिए।",
          "emoji": "😈"
          },
          {
          "line": "मगरमच्छ ने बंदर को अपनी पीठ पर बैठाया।",
          "emoji": "🏊"
          },
          {
          "line": "नदी के बीच में उसने सच बता दिया।",
          "emoji": "😨"
          },
          {
          "line": "बंदर बोला — अरे! मेरा दिल तो पेड़ पर रखा है!",
          "emoji": "🧠"
          },
          {
          "line": "मगरमच्छ वापस ले गया और बंदर कूदकर पेड़ पर चढ़ गया।",
          "emoji": "🌳"
          },
          {
          "line": "सूझ-बूझ से हर खतरे से बचा जा सकता है।",
          "emoji": "⭐"
          }
          ],
            moral: "सूझ-बूझ से हर खतरे से बचा जा सकता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryBandarAurMagarmachShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "बंदर और मगरमच्छ",
            rhymeId: "bandar-aur-magarmach",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "नदी किनारे एक जामुन के पेड़ पर बंदर रहता था।",
          "emoji": "🐒"
          },
          {
          "line": "नदी में एक मगरमच्छ रहता था।",
          "emoji": "🐊"
          },
          {
          "line": "बंदर रोज़ मगरमच्छ को मीठे जामुन देता था।",
          "emoji": "🫐"
          },
          {
          "line": "दोनों अच्छे दोस्त बन गए।",
          "emoji": "🤝"
          },
          {
          "line": "मगरमच्छ की पत्नी बोली — मुझे बंदर का दिल चाहिए।",
          "emoji": "😈"
          },
          {
          "line": "मगरमच्छ ने बंदर को अपनी पीठ पर बैठाया।",
          "emoji": "🏊"
          },
          {
          "line": "नदी के बीच में उसने सच बता दिया।",
          "emoji": "😨"
          },
          {
          "line": "बंदर बोला — अरे! मेरा दिल तो पेड़ पर रखा है!",
          "emoji": "🧠"
          },
          {
          "line": "मगरमच्छ वापस ले गया और बंदर कूदकर पेड़ पर चढ़ गया।",
          "emoji": "🌳"
          },
          {
          "line": "सूझ-बूझ से हर खतरे से बचा जा सकता है।",
          "emoji": "⭐"
          }
          ],
            moral: "सूझ-बूझ से हर खतरे से बचा जा सकता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "हाथी और दर्ज़ी",
            rhymeId: "hathi-aur-darzi",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक हाथी रोज़ तालाब में नहाने जाता था।",
          "emoji": "🐘"
          },
          {
          "line": "रास्ते में एक दर्ज़ी की दुकान थी।",
          "emoji": "🧵"
          },
          {
          "line": "दर्ज़ी रोज़ हाथी को केला खिलाता था।",
          "emoji": "🍌"
          },
          {
          "line": "एक दिन दर्ज़ी ने मज़ाक में हाथी की सूँड में सुई चुभा दी।",
          "emoji": "📌"
          },
          {
          "line": "हाथी को बहुत दर्द हुआ।",
          "emoji": "😣"
          },
          {
          "line": "हाथी चुपचाप तालाब पर चला गया।",
          "emoji": "😠"
          },
          {
          "line": "वापसी में हाथी ने सूँड में गंदा पानी भर लिया।",
          "emoji": "🌊"
          },
          {
          "line": "दर्ज़ी की दुकान पर गंदा पानी फेंक दिया!",
          "emoji": "💦"
          },
          {
          "line": "सारे कपड़े खराब हो गए।",
          "emoji": "😱"
          },
          {
          "line": "किसी को सताने का नतीजा बुरा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "किसी को सताओगे तो बदला मिलेगा।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryHathiAurDarziShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "हाथी और दर्ज़ी",
            rhymeId: "hathi-aur-darzi",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक हाथी रोज़ तालाब में नहाने जाता था।",
          "emoji": "🐘"
          },
          {
          "line": "रास्ते में एक दर्ज़ी की दुकान थी।",
          "emoji": "🧵"
          },
          {
          "line": "दर्ज़ी रोज़ हाथी को केला खिलाता था।",
          "emoji": "🍌"
          },
          {
          "line": "एक दिन दर्ज़ी ने मज़ाक में हाथी की सूँड में सुई चुभा दी।",
          "emoji": "📌"
          },
          {
          "line": "हाथी को बहुत दर्द हुआ।",
          "emoji": "😣"
          },
          {
          "line": "हाथी चुपचाप तालाब पर चला गया।",
          "emoji": "😠"
          },
          {
          "line": "वापसी में हाथी ने सूँड में गंदा पानी भर लिया।",
          "emoji": "🌊"
          },
          {
          "line": "दर्ज़ी की दुकान पर गंदा पानी फेंक दिया!",
          "emoji": "💦"
          },
          {
          "line": "सारे कपड़े खराब हो गए।",
          "emoji": "😱"
          },
          {
          "line": "किसी को सताने का नतीजा बुरा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "किसी को सताओगे तो बदला मिलेगा।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चालाक खरगोश",
            rhymeId: "chalak-khargosh",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "जंगल में एक क्रूर शेर सबको परेशान करता था।",
          "emoji": "🦁"
          },
          {
          "line": "रोज़ एक जानवर शेर का खाना बनता था।",
          "emoji": "😰"
          },
          {
          "line": "एक दिन छोटे खरगोश की बारी आई।",
          "emoji": "🐇"
          },
          {
          "line": "खरगोश ने एक चतुर योजना बनाई।",
          "emoji": "💡"
          },
          {
          "line": "वह देर से शेर के पास पहुँचा।",
          "emoji": "⏰"
          },
          {
          "line": "खरगोश बोला — रास्ते में दूसरे शेर ने रोका था।",
          "emoji": "🗣️"
          },
          {
          "line": "शेर गुस्से में बोला — दिखाओ कहाँ है वो?",
          "emoji": "😡"
          },
          {
          "line": "खरगोश शेर को एक कुएँ के पास ले गया।",
          "emoji": "🕳️"
          },
          {
          "line": "शेर ने कुएँ में अपनी परछाई देखी और कूद गया!",
          "emoji": "💨"
          },
          {
          "line": "बुद्धि बल से हमेशा बड़ी होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "बुद्धि बल से बड़ी होती है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChalakKhargoshShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चालाक खरगोश",
            rhymeId: "chalak-khargosh",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "जंगल में एक क्रूर शेर सबको परेशान करता था।",
          "emoji": "🦁"
          },
          {
          "line": "रोज़ एक जानवर शेर का खाना बनता था।",
          "emoji": "😰"
          },
          {
          "line": "एक दिन छोटे खरगोश की बारी आई।",
          "emoji": "🐇"
          },
          {
          "line": "खरगोश ने एक चतुर योजना बनाई।",
          "emoji": "💡"
          },
          {
          "line": "वह देर से शेर के पास पहुँचा।",
          "emoji": "⏰"
          },
          {
          "line": "खरगोश बोला — रास्ते में दूसरे शेर ने रोका था।",
          "emoji": "🗣️"
          },
          {
          "line": "शेर गुस्से में बोला — दिखाओ कहाँ है वो?",
          "emoji": "😡"
          },
          {
          "line": "खरगोश शेर को एक कुएँ के पास ले गया।",
          "emoji": "🕳️"
          },
          {
          "line": "शेर ने कुएँ में अपनी परछाई देखी और कूद गया!",
          "emoji": "💨"
          },
          {
          "line": "बुद्धि बल से हमेशा बड़ी होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "बुद्धि बल से बड़ी होती है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सुनहरा हिरण",
            rhymeId: "sunhara-hiran",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "राम, सीता और लक्ष्मण वन में रहते थे।",
          "emoji": "🏕️"
          },
          {
          "line": "एक दिन सीता ने एक सुनहरा हिरण देखा।",
          "emoji": "🦌"
          },
          {
          "line": "वह हिरण बहुत सुंदर और चमकदार था।",
          "emoji": "✨"
          },
          {
          "line": "सीता ने कहा — मुझे वह हिरण चाहिए।",
          "emoji": "😍"
          },
          {
          "line": "राम हिरण को पकड़ने गए।",
          "emoji": "🏹"
          },
          {
          "line": "लेकिन वह हिरण असली नहीं, राक्षस मारीच था।",
          "emoji": "👹"
          },
          {
          "line": "यह रावण की चाल थी।",
          "emoji": "😈"
          },
          {
          "line": "सीता अकेली रह गईं और रावण ने उन्हें उठा लिया।",
          "emoji": "😱"
          },
          {
          "line": "सुंदर दिखने वाली चीज़ हमेशा अच्छी नहीं होती।",
          "emoji": "⚠️"
          },
          {
          "line": "हर चमकने वाली चीज़ सोना नहीं होती।",
          "emoji": "⭐"
          }
          ],
            moral: "चमकने वाली हर चीज़ सोना नहीं होती।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySunharaHiranShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सुनहरा हिरण",
            rhymeId: "sunhara-hiran",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "राम, सीता और लक्ष्मण वन में रहते थे।",
          "emoji": "🏕️"
          },
          {
          "line": "एक दिन सीता ने एक सुनहरा हिरण देखा।",
          "emoji": "🦌"
          },
          {
          "line": "वह हिरण बहुत सुंदर और चमकदार था।",
          "emoji": "✨"
          },
          {
          "line": "सीता ने कहा — मुझे वह हिरण चाहिए।",
          "emoji": "😍"
          },
          {
          "line": "राम हिरण को पकड़ने गए।",
          "emoji": "🏹"
          },
          {
          "line": "लेकिन वह हिरण असली नहीं, राक्षस मारीच था।",
          "emoji": "👹"
          },
          {
          "line": "यह रावण की चाल थी।",
          "emoji": "😈"
          },
          {
          "line": "सीता अकेली रह गईं और रावण ने उन्हें उठा लिया।",
          "emoji": "😱"
          },
          {
          "line": "सुंदर दिखने वाली चीज़ हमेशा अच्छी नहीं होती।",
          "emoji": "⚠️"
          },
          {
          "line": "हर चमकने वाली चीज़ सोना नहीं होती।",
          "emoji": "⭐"
          }
          ],
            moral: "चमकने वाली हर चीज़ सोना नहीं होती।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "एकता में बल",
            rhymeId: "ekta-mein-bal",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक बूढ़े किसान के चार बेटे थे।",
          "emoji": "👴"
          },
          {
          "line": "चारों भाई हमेशा लड़ते-झगड़ते रहते थे।",
          "emoji": "😤"
          },
          {
          "line": "किसान बहुत परेशान था।",
          "emoji": "😟"
          },
          {
          "line": "एक दिन उसने चारों को बुलाया।",
          "emoji": "🗣️"
          },
          {
          "line": "उसने एक-एक लकड़ी दी और तोड़ने को कहा।",
          "emoji": "🪵"
          },
          {
          "line": "सबने आसानी से लकड़ी तोड़ दी।",
          "emoji": "💪"
          },
          {
          "line": "फिर उसने चार लकड़ियों का गट्ठा बाँधा।",
          "emoji": "🪢"
          },
          {
          "line": "कोई भी गट्ठा नहीं तोड़ पाया।",
          "emoji": "😯"
          },
          {
          "line": "किसान ने कहा — अकेले कमज़ोर, साथ में मज़बूत।",
          "emoji": "🤝"
          },
          {
          "line": "एकता में बहुत बड़ी ताक़त होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "एकता में बड़ी ताक़त होती है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryEktaMeinBalShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "एकता में बल",
            rhymeId: "ekta-mein-bal",
            theme: "farm" as RhymeTheme,
            verses: [
          {
          "line": "एक बूढ़े किसान के चार बेटे थे।",
          "emoji": "👴"
          },
          {
          "line": "चारों भाई हमेशा लड़ते-झगड़ते रहते थे।",
          "emoji": "😤"
          },
          {
          "line": "किसान बहुत परेशान था।",
          "emoji": "😟"
          },
          {
          "line": "एक दिन उसने चारों को बुलाया।",
          "emoji": "🗣️"
          },
          {
          "line": "उसने एक-एक लकड़ी दी और तोड़ने को कहा।",
          "emoji": "🪵"
          },
          {
          "line": "सबने आसानी से लकड़ी तोड़ दी।",
          "emoji": "💪"
          },
          {
          "line": "फिर उसने चार लकड़ियों का गट्ठा बाँधा।",
          "emoji": "🪢"
          },
          {
          "line": "कोई भी गट्ठा नहीं तोड़ पाया।",
          "emoji": "😯"
          },
          {
          "line": "किसान ने कहा — अकेले कमज़ोर, साथ में मज़बूत।",
          "emoji": "🤝"
          },
          {
          "line": "एकता में बहुत बड़ी ताक़त होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "एकता में बड़ी ताक़त होती है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "प्यासा कौआ",
            rhymeId: "pyasi-kauwa",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "एक कौआ बहुत प्यासा था।",
          "emoji": "🐦"
          },
          {
          "line": "वह पानी की तलाश में इधर-उधर उड़ रहा था।",
          "emoji": "🔍"
          },
          {
          "line": "उसे एक घड़ा दिखाई दिया।",
          "emoji": "🏺"
          },
          {
          "line": "लेकिन घड़े में पानी बहुत कम था।",
          "emoji": "💧"
          },
          {
          "line": "कौए की चोंच पानी तक नहीं पहुँच पाई।",
          "emoji": "😟"
          },
          {
          "line": "उसने एक तरकीब सोची।",
          "emoji": "💡"
          },
          {
          "line": "वह छोटे-छोटे कंकड़ लाकर घड़े में डालने लगा।",
          "emoji": "🪨"
          },
          {
          "line": "धीरे-धीरे पानी ऊपर आ गया।",
          "emoji": "⬆️"
          },
          {
          "line": "कौए ने खुशी-खुशी पानी पी लिया।",
          "emoji": "😊"
          },
          {
          "line": "बुद्धि से हर मुश्किल हल हो सकती है!",
          "emoji": "⭐"
          }
          ],
            moral: "मेहनत और बुद्धि से हर मुश्किल हल हो सकती है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryPyasiKauwaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "प्यासा कौआ",
            rhymeId: "pyasi-kauwa",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "एक कौआ बहुत प्यासा था।",
          "emoji": "🐦"
          },
          {
          "line": "वह पानी की तलाश में इधर-उधर उड़ रहा था।",
          "emoji": "🔍"
          },
          {
          "line": "उसे एक घड़ा दिखाई दिया।",
          "emoji": "🏺"
          },
          {
          "line": "लेकिन घड़े में पानी बहुत कम था।",
          "emoji": "💧"
          },
          {
          "line": "कौए की चोंच पानी तक नहीं पहुँच पाई।",
          "emoji": "😟"
          },
          {
          "line": "उसने एक तरकीब सोची।",
          "emoji": "💡"
          },
          {
          "line": "वह छोटे-छोटे कंकड़ लाकर घड़े में डालने लगा।",
          "emoji": "🪨"
          },
          {
          "line": "धीरे-धीरे पानी ऊपर आ गया।",
          "emoji": "⬆️"
          },
          {
          "line": "कौए ने खुशी-खुशी पानी पी लिया।",
          "emoji": "😊"
          },
          {
          "line": "बुद्धि से हर मुश्किल हल हो सकती है!",
          "emoji": "⭐"
          }
          ],
            moral: "मेहनत और बुद्धि से हर मुश्किल हल हो सकती है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "शेर और चूहा",
            rhymeId: "sher-aur-chuha",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "जंगल में एक बड़ा शेर सो रहा था।",
          "emoji": "🦁"
          },
          {
          "line": "एक नन्हा चूहा उसके ऊपर चढ़ गया।",
          "emoji": "🐭"
          },
          {
          "line": "शेर जाग गया और गुस्से में चूहे को पकड़ लिया।",
          "emoji": "😠"
          },
          {
          "line": "चूहे ने कहा — मुझे छोड़ दो, मैं तुम्हारे काम आऊँगा।",
          "emoji": "🙏"
          },
          {
          "line": "शेर हँसा और चूहे को छोड़ दिया।",
          "emoji": "😄"
          },
          {
          "line": "कुछ दिनों बाद शेर शिकारी के जाल में फँस गया।",
          "emoji": "🪤"
          },
          {
          "line": "शेर ज़ोर-ज़ोर से दहाड़ रहा था।",
          "emoji": "😰"
          },
          {
          "line": "नन्हा चूहा दौड़कर आया।",
          "emoji": "🏃"
          },
          {
          "line": "उसने अपने दाँतों से जाल काट दिया।",
          "emoji": "✂️"
          },
          {
          "line": "शेर आज़ाद हो गया और चूहे को धन्यवाद दिया।",
          "emoji": "🤝"
          }
          ],
            moral: "छोटे से छोटा प्राणी भी बड़े काम आ सकता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySherAurChuhaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "शेर और चूहा",
            rhymeId: "sher-aur-chuha",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "जंगल में एक बड़ा शेर सो रहा था।",
          "emoji": "🦁"
          },
          {
          "line": "एक नन्हा चूहा उसके ऊपर चढ़ गया।",
          "emoji": "🐭"
          },
          {
          "line": "शेर जाग गया और गुस्से में चूहे को पकड़ लिया।",
          "emoji": "😠"
          },
          {
          "line": "चूहे ने कहा — मुझे छोड़ दो, मैं तुम्हारे काम आऊँगा।",
          "emoji": "🙏"
          },
          {
          "line": "शेर हँसा और चूहे को छोड़ दिया।",
          "emoji": "😄"
          },
          {
          "line": "कुछ दिनों बाद शेर शिकारी के जाल में फँस गया।",
          "emoji": "🪤"
          },
          {
          "line": "शेर ज़ोर-ज़ोर से दहाड़ रहा था।",
          "emoji": "😰"
          },
          {
          "line": "नन्हा चूहा दौड़कर आया।",
          "emoji": "🏃"
          },
          {
          "line": "उसने अपने दाँतों से जाल काट दिया।",
          "emoji": "✂️"
          },
          {
          "line": "शेर आज़ाद हो गया और चूहे को धन्यवाद दिया।",
          "emoji": "🤝"
          }
          ],
            moral: "छोटे से छोटा प्राणी भी बड़े काम आ सकता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "कछुआ और खरगोश",
            rhymeId: "kachua-aur-khargosh",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "एक खरगोश बहुत तेज़ दौड़ता था।",
          "emoji": "🐇"
          },
          {
          "line": "वह हमेशा कछुए का मज़ाक उड़ाता था।",
          "emoji": "😏"
          },
          {
          "line": "एक दिन कछुए ने दौड़ की चुनौती दी।",
          "emoji": "🐢"
          },
          {
          "line": "सब जानवर देखने आए।",
          "emoji": "👀"
          },
          {
          "line": "दौड़ शुरू हुई, खरगोश तेज़ी से आगे निकल गया।",
          "emoji": "💨"
          },
          {
          "line": "खरगोश ने सोचा — कछुआ बहुत पीछे है, सो जाता हूँ।",
          "emoji": "😴"
          },
          {
          "line": "कछुआ धीरे-धीरे चलता रहा, रुका नहीं।",
          "emoji": "🚶"
          },
          {
          "line": "जब खरगोश जागा, कछुआ जीत चुका था!",
          "emoji": "🏆"
          },
          {
          "line": "सबने कछुए की जीत पर तालियाँ बजाईं।",
          "emoji": "👏"
          },
          {
          "line": "मेहनत और लगन से कोई भी जीत सकता है!",
          "emoji": "⭐"
          }
          ],
            moral: "धीरे-धीरे चलने वाला भी दौड़ जीत सकता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryKachuaAurKhargoshShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "कछुआ और खरगोश",
            rhymeId: "kachua-aur-khargosh",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "एक खरगोश बहुत तेज़ दौड़ता था।",
          "emoji": "🐇"
          },
          {
          "line": "वह हमेशा कछुए का मज़ाक उड़ाता था।",
          "emoji": "😏"
          },
          {
          "line": "एक दिन कछुए ने दौड़ की चुनौती दी।",
          "emoji": "🐢"
          },
          {
          "line": "सब जानवर देखने आए।",
          "emoji": "👀"
          },
          {
          "line": "दौड़ शुरू हुई, खरगोश तेज़ी से आगे निकल गया।",
          "emoji": "💨"
          },
          {
          "line": "खरगोश ने सोचा — कछुआ बहुत पीछे है, सो जाता हूँ।",
          "emoji": "😴"
          },
          {
          "line": "कछुआ धीरे-धीरे चलता रहा, रुका नहीं।",
          "emoji": "🚶"
          },
          {
          "line": "जब खरगोश जागा, कछुआ जीत चुका था!",
          "emoji": "🏆"
          },
          {
          "line": "सबने कछुए की जीत पर तालियाँ बजाईं।",
          "emoji": "👏"
          },
          {
          "line": "मेहनत और लगन से कोई भी जीत सकता है!",
          "emoji": "⭐"
          }
          ],
            moral: "धीरे-धीरे चलने वाला भी दौड़ जीत सकता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चतुर लोमड़ी और अंगूर",
            rhymeId: "chatur-lomdi",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "एक लोमड़ी को बहुत भूख लगी थी।",
          "emoji": "🦊"
          },
          {
          "line": "उसने एक बाग में अंगूर की बेल देखी।",
          "emoji": "🍇"
          },
          {
          "line": "अंगूर बहुत रसीले और मीठे दिख रहे थे।",
          "emoji": "🤤"
          },
          {
          "line": "लोमड़ी ने ऊँची छलाँग लगाई।",
          "emoji": "⬆️"
          },
          {
          "line": "लेकिन अंगूर तक नहीं पहुँच पाई।",
          "emoji": "😣"
          },
          {
          "line": "उसने बार-बार कोशिश की।",
          "emoji": "💪"
          },
          {
          "line": "फिर भी अंगूर नहीं मिले।",
          "emoji": "😤"
          },
          {
          "line": "लोमड़ी थक गई और बोली।",
          "emoji": "😮‍💨"
          },
          {
          "line": "ये अंगूर तो खट्टे हैं, मुझे नहीं चाहिए!",
          "emoji": "🙅"
          },
          {
          "line": "जो नहीं मिलता उसे बुरा कहना सही नहीं।",
          "emoji": "⭐"
          }
          ],
            moral: "जो नहीं मिलता उसे बुरा कहना ठीक नहीं।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChaturLomdiShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चतुर लोमड़ी और अंगूर",
            rhymeId: "chatur-lomdi",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "एक लोमड़ी को बहुत भूख लगी थी।",
          "emoji": "🦊"
          },
          {
          "line": "उसने एक बाग में अंगूर की बेल देखी।",
          "emoji": "🍇"
          },
          {
          "line": "अंगूर बहुत रसीले और मीठे दिख रहे थे।",
          "emoji": "🤤"
          },
          {
          "line": "लोमड़ी ने ऊँची छलाँग लगाई।",
          "emoji": "⬆️"
          },
          {
          "line": "लेकिन अंगूर तक नहीं पहुँच पाई।",
          "emoji": "😣"
          },
          {
          "line": "उसने बार-बार कोशिश की।",
          "emoji": "💪"
          },
          {
          "line": "फिर भी अंगूर नहीं मिले।",
          "emoji": "😤"
          },
          {
          "line": "लोमड़ी थक गई और बोली।",
          "emoji": "😮‍💨"
          },
          {
          "line": "ये अंगूर तो खट्टे हैं, मुझे नहीं चाहिए!",
          "emoji": "🙅"
          },
          {
          "line": "जो नहीं मिलता उसे बुरा कहना सही नहीं।",
          "emoji": "⭐"
          }
          ],
            moral: "जो नहीं मिलता उसे बुरा कहना ठीक नहीं।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "रंग-बिरंगी तितली",
            rhymeId: "rang-birangi-titli",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी इल्ली पत्ते पर रहती थी।",
          "emoji": "🐛"
          },
          {
          "line": "दूसरे कीड़े उसका मज़ाक उड़ाते थे।",
          "emoji": "😢"
          },
          {
          "line": "इल्ली ने सोचा — मैं भी सुंदर बनूँगी।",
          "emoji": "💭"
          },
          {
          "line": "उसने खूब पत्ते खाए और बड़ी हुई।",
          "emoji": "🌿"
          },
          {
          "line": "फिर उसने अपने चारों ओर एक कोकून बनाया।",
          "emoji": "🫧"
          },
          {
          "line": "कई दिन तक वह कोकून में रही।",
          "emoji": "⏳"
          },
          {
          "line": "एक सुबह कोकून से एक सुंदर तितली निकली!",
          "emoji": "🦋"
          },
          {
          "line": "उसके पंख रंग-बिरंगे और चमकदार थे।",
          "emoji": "🌈"
          },
          {
          "line": "सब कीड़े उसे देखकर हैरान रह गए।",
          "emoji": "😮"
          },
          {
          "line": "बदलाव से कभी डरना नहीं चाहिए!",
          "emoji": "⭐"
          }
          ],
            moral: "बदलाव से डरना नहीं चाहिए, वह सुंदर होता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryRangBirangiTitliShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "रंग-बिरंगी तितली",
            rhymeId: "rang-birangi-titli",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी इल्ली पत्ते पर रहती थी।",
          "emoji": "🐛"
          },
          {
          "line": "दूसरे कीड़े उसका मज़ाक उड़ाते थे।",
          "emoji": "😢"
          },
          {
          "line": "इल्ली ने सोचा — मैं भी सुंदर बनूँगी।",
          "emoji": "💭"
          },
          {
          "line": "उसने खूब पत्ते खाए और बड़ी हुई।",
          "emoji": "🌿"
          },
          {
          "line": "फिर उसने अपने चारों ओर एक कोकून बनाया।",
          "emoji": "🫧"
          },
          {
          "line": "कई दिन तक वह कोकून में रही।",
          "emoji": "⏳"
          },
          {
          "line": "एक सुबह कोकून से एक सुंदर तितली निकली!",
          "emoji": "🦋"
          },
          {
          "line": "उसके पंख रंग-बिरंगे और चमकदार थे।",
          "emoji": "🌈"
          },
          {
          "line": "सब कीड़े उसे देखकर हैरान रह गए।",
          "emoji": "😮"
          },
          {
          "line": "बदलाव से कभी डरना नहीं चाहिए!",
          "emoji": "⭐"
          }
          ],
            moral: "बदलाव से डरना नहीं चाहिए, वह सुंदर होता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "दोस्त का साथ",
            rhymeId: "dost-ka-saath",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "दो दोस्त जंगल से गुज़र रहे थे।",
          "emoji": "👬"
          },
          {
          "line": "अचानक उन्हें एक भालू दिखाई दिया!",
          "emoji": "🐻"
          },
          {
          "line": "एक दोस्त तुरंत पेड़ पर चढ़ गया।",
          "emoji": "🌳"
          },
          {
          "line": "दूसरा दोस्त चढ़ नहीं पाया।",
          "emoji": "😨"
          },
          {
          "line": "उसने ज़मीन पर लेटकर साँस रोक ली।",
          "emoji": "🤫"
          },
          {
          "line": "भालू ने उसे सूँघा और चला गया।",
          "emoji": "🐻"
          },
          {
          "line": "पेड़ वाले दोस्त ने पूछा — भालू ने क्या कहा?",
          "emoji": "🗣️"
          },
          {
          "line": "उसने कहा — भालू ने कहा, ऐसे दोस्त से सावधान!",
          "emoji": "⚠️"
          },
          {
          "line": "जो मुसीबत में साथ छोड़ दे वह सच्चा दोस्त नहीं।",
          "emoji": "💔"
          },
          {
          "line": "सच्चा दोस्त हर हाल में साथ निभाता है।",
          "emoji": "⭐"
          }
          ],
            moral: "सच्चा दोस्त मुसीबत में काम आता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryDostKaSaathShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "दोस्त का साथ",
            rhymeId: "dost-ka-saath",
            theme: "forest" as RhymeTheme,
            verses: [
          {
          "line": "दो दोस्त जंगल से गुज़र रहे थे।",
          "emoji": "👬"
          },
          {
          "line": "अचानक उन्हें एक भालू दिखाई दिया!",
          "emoji": "🐻"
          },
          {
          "line": "एक दोस्त तुरंत पेड़ पर चढ़ गया।",
          "emoji": "🌳"
          },
          {
          "line": "दूसरा दोस्त चढ़ नहीं पाया।",
          "emoji": "😨"
          },
          {
          "line": "उसने ज़मीन पर लेटकर साँस रोक ली।",
          "emoji": "🤫"
          },
          {
          "line": "भालू ने उसे सूँघा और चला गया।",
          "emoji": "🐻"
          },
          {
          "line": "पेड़ वाले दोस्त ने पूछा — भालू ने क्या कहा?",
          "emoji": "🗣️"
          },
          {
          "line": "उसने कहा — भालू ने कहा, ऐसे दोस्त से सावधान!",
          "emoji": "⚠️"
          },
          {
          "line": "जो मुसीबत में साथ छोड़ दे वह सच्चा दोस्त नहीं।",
          "emoji": "💔"
          },
          {
          "line": "सच्चा दोस्त हर हाल में साथ निभाता है।",
          "emoji": "⭐"
          }
          ],
            moral: "सच्चा दोस्त मुसीबत में काम आता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "नन्हा पौधा",
            rhymeId: "nanha-paudha",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी लड़की ने एक बीज बोया।",
          "emoji": "👧"
          },
          {
          "line": "वह रोज़ उसे पानी देती थी।",
          "emoji": "💧"
          },
          {
          "line": "कई दिन बीत गए लेकिन कुछ नहीं दिखा।",
          "emoji": "😕"
          },
          {
          "line": "उसकी माँ ने कहा — धैर्य रखो बेटी।",
          "emoji": "🤗"
          },
          {
          "line": "लड़की ने हार नहीं मानी।",
          "emoji": "💪"
          },
          {
          "line": "एक सुबह ज़मीन से हरा अंकुर निकला!",
          "emoji": "🌱"
          },
          {
          "line": "लड़की बहुत खुश हुई।",
          "emoji": "😊"
          },
          {
          "line": "धीरे-धीरे अंकुर बड़ा पौधा बना।",
          "emoji": "🌿"
          },
          {
          "line": "फिर उसमें सुंदर फूल खिले।",
          "emoji": "🌸"
          },
          {
          "line": "धैर्य और प्यार से सब कुछ बड़ा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "धैर्य और देखभाल से सब कुछ बड़ा होता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryNanhaPaudhaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "नन्हा पौधा",
            rhymeId: "nanha-paudha",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी लड़की ने एक बीज बोया।",
          "emoji": "👧"
          },
          {
          "line": "वह रोज़ उसे पानी देती थी।",
          "emoji": "💧"
          },
          {
          "line": "कई दिन बीत गए लेकिन कुछ नहीं दिखा।",
          "emoji": "😕"
          },
          {
          "line": "उसकी माँ ने कहा — धैर्य रखो बेटी।",
          "emoji": "🤗"
          },
          {
          "line": "लड़की ने हार नहीं मानी।",
          "emoji": "💪"
          },
          {
          "line": "एक सुबह ज़मीन से हरा अंकुर निकला!",
          "emoji": "🌱"
          },
          {
          "line": "लड़की बहुत खुश हुई।",
          "emoji": "😊"
          },
          {
          "line": "धीरे-धीरे अंकुर बड़ा पौधा बना।",
          "emoji": "🌿"
          },
          {
          "line": "फिर उसमें सुंदर फूल खिले।",
          "emoji": "🌸"
          },
          {
          "line": "धैर्य और प्यार से सब कुछ बड़ा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "धैर्य और देखभाल से सब कुछ बड़ा होता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "दो बिल्लियाँ और बंदर",
            rhymeId: "do-billiyan-bandar",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "दो बिल्लियों को एक रोटी मिली।",
          "emoji": "🐱"
          },
          {
          "line": "दोनों अपने हिस्से के लिए लड़ने लगीं।",
          "emoji": "😾"
          },
          {
          "line": "एक चालाक बंदर वहाँ आया।",
          "emoji": "🐒"
          },
          {
          "line": "बंदर बोला — मैं बराबर बाँट देता हूँ।",
          "emoji": "😏"
          },
          {
          "line": "उसने रोटी के दो टुकड़े किए।",
          "emoji": "🫓"
          },
          {
          "line": "एक टुकड़ा बड़ा था तो उसने उसमें से खाया।",
          "emoji": "😋"
          },
          {
          "line": "फिर दूसरा बड़ा हो गया तो उसमें से खाया।",
          "emoji": "🍽️"
          },
          {
          "line": "इस तरह बंदर ने लगभग सारी रोटी खा ली!",
          "emoji": "😲"
          },
          {
          "line": "बिल्लियाँ बस देखती रह गईं।",
          "emoji": "😿"
          },
          {
          "line": "आपस में लड़ोगे तो तीसरा फ़ायदा उठाएगा।",
          "emoji": "⭐"
          }
          ],
            moral: "लड़ाई में तीसरा फ़ायदा उठाता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryDoBilliyanBandarShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "दो बिल्लियाँ और बंदर",
            rhymeId: "do-billiyan-bandar",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "दो बिल्लियों को एक रोटी मिली।",
          "emoji": "🐱"
          },
          {
          "line": "दोनों अपने हिस्से के लिए लड़ने लगीं।",
          "emoji": "😾"
          },
          {
          "line": "एक चालाक बंदर वहाँ आया।",
          "emoji": "🐒"
          },
          {
          "line": "बंदर बोला — मैं बराबर बाँट देता हूँ।",
          "emoji": "😏"
          },
          {
          "line": "उसने रोटी के दो टुकड़े किए।",
          "emoji": "🫓"
          },
          {
          "line": "एक टुकड़ा बड़ा था तो उसने उसमें से खाया।",
          "emoji": "😋"
          },
          {
          "line": "फिर दूसरा बड़ा हो गया तो उसमें से खाया।",
          "emoji": "🍽️"
          },
          {
          "line": "इस तरह बंदर ने लगभग सारी रोटी खा ली!",
          "emoji": "😲"
          },
          {
          "line": "बिल्लियाँ बस देखती रह गईं।",
          "emoji": "😿"
          },
          {
          "line": "आपस में लड़ोगे तो तीसरा फ़ायदा उठाएगा।",
          "emoji": "⭐"
          }
          ],
            moral: "लड़ाई में तीसरा फ़ायदा उठाता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चिड़िया का घर",
            rhymeId: "chidiya-ka-ghar",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक चिड़िया ने सुंदर घोंसला बनाया।",
          "emoji": "🐦"
          },
          {
          "line": "एक बंदर पेड़ पर बैठा देख रहा था।",
          "emoji": "🐒"
          },
          {
          "line": "बारिश का मौसम आने वाला था।",
          "emoji": "🌧️"
          },
          {
          "line": "चिड़िया ने कहा — बंदर भाई, तुम भी घर बना लो।",
          "emoji": "🏠"
          },
          {
          "line": "बंदर ने कहा — बाद में बनाऊँगा, अभी मस्ती करूँगा।",
          "emoji": "😎"
          },
          {
          "line": "बारिश शुरू हो गई।",
          "emoji": "⛈️"
          },
          {
          "line": "चिड़िया अपने गर्म घोंसले में आराम से थी।",
          "emoji": "😊"
          },
          {
          "line": "बंदर बारिश में भीग रहा था।",
          "emoji": "😰"
          },
          {
          "line": "बंदर को अपनी गलती समझ आई।",
          "emoji": "😞"
          },
          {
          "line": "सही समय पर काम करना बहुत ज़रूरी है।",
          "emoji": "⭐"
          }
          ],
            moral: "सही समय पर काम करना ज़रूरी है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChidiyaKaGharShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चिड़िया का घर",
            rhymeId: "chidiya-ka-ghar",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक चिड़िया ने सुंदर घोंसला बनाया।",
          "emoji": "🐦"
          },
          {
          "line": "एक बंदर पेड़ पर बैठा देख रहा था।",
          "emoji": "🐒"
          },
          {
          "line": "बारिश का मौसम आने वाला था।",
          "emoji": "🌧️"
          },
          {
          "line": "चिड़िया ने कहा — बंदर भाई, तुम भी घर बना लो।",
          "emoji": "🏠"
          },
          {
          "line": "बंदर ने कहा — बाद में बनाऊँगा, अभी मस्ती करूँगा।",
          "emoji": "😎"
          },
          {
          "line": "बारिश शुरू हो गई।",
          "emoji": "⛈️"
          },
          {
          "line": "चिड़िया अपने गर्म घोंसले में आराम से थी।",
          "emoji": "😊"
          },
          {
          "line": "बंदर बारिश में भीग रहा था।",
          "emoji": "😰"
          },
          {
          "line": "बंदर को अपनी गलती समझ आई।",
          "emoji": "😞"
          },
          {
          "line": "सही समय पर काम करना बहुत ज़रूरी है।",
          "emoji": "⭐"
          }
          ],
            moral: "सही समय पर काम करना ज़रूरी है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "राजा और बाज़",
            rhymeId: "raja-aur-baja",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक राजा शिकार पर गया था।",
          "emoji": "👑"
          },
          {
          "line": "उसके साथ उसका प्यारा बाज़ था।",
          "emoji": "🦅"
          },
          {
          "line": "राजा को बहुत प्यास लगी।",
          "emoji": "🥵"
          },
          {
          "line": "उसे एक चट्टान से पानी टपकता दिखा।",
          "emoji": "💧"
          },
          {
          "line": "राजा ने प्याले में पानी भरा।",
          "emoji": "🥤"
          },
          {
          "line": "जब पीने लगा, बाज़ ने प्याला गिरा दिया!",
          "emoji": "🦅"
          },
          {
          "line": "राजा ने तीन बार कोशिश की, बाज़ ने हर बार गिराया।",
          "emoji": "😡"
          },
          {
          "line": "गुस्से में राजा ने बाज़ को मार दिया।",
          "emoji": "😱"
          },
          {
          "line": "ऊपर देखा तो पानी में मरा हुआ साँप था — पानी ज़हरीला था!",
          "emoji": "🐍"
          },
          {
          "line": "गुस्से में कभी कोई फ़ैसला नहीं करना चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "गुस्से में कोई काम नहीं करना चाहिए।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryRajaAurBajaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "राजा और बाज़",
            rhymeId: "raja-aur-baja",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक राजा शिकार पर गया था।",
          "emoji": "👑"
          },
          {
          "line": "उसके साथ उसका प्यारा बाज़ था।",
          "emoji": "🦅"
          },
          {
          "line": "राजा को बहुत प्यास लगी।",
          "emoji": "🥵"
          },
          {
          "line": "उसे एक चट्टान से पानी टपकता दिखा।",
          "emoji": "💧"
          },
          {
          "line": "राजा ने प्याले में पानी भरा।",
          "emoji": "🥤"
          },
          {
          "line": "जब पीने लगा, बाज़ ने प्याला गिरा दिया!",
          "emoji": "🦅"
          },
          {
          "line": "राजा ने तीन बार कोशिश की, बाज़ ने हर बार गिराया।",
          "emoji": "😡"
          },
          {
          "line": "गुस्से में राजा ने बाज़ को मार दिया।",
          "emoji": "😱"
          },
          {
          "line": "ऊपर देखा तो पानी में मरा हुआ साँप था — पानी ज़हरीला था!",
          "emoji": "🐍"
          },
          {
          "line": "गुस्से में कभी कोई फ़ैसला नहीं करना चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "गुस्से में कोई काम नहीं करना चाहिए।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सुंदर मोर",
            rhymeId: "sundar-mor",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक मोर अपने सुंदर पंखों पर बहुत घमंड करता था।",
          "emoji": "🦚"
          },
          {
          "line": "वह दूसरे पक्षियों का मज़ाक उड़ाता था।",
          "emoji": "😏"
          },
          {
          "line": "कौए से बोला — तू तो काला है!",
          "emoji": "🐦‍⬛"
          },
          {
          "line": "कोयल से बोला — तू तो उड़ भी नहीं सकती ऊँचा!",
          "emoji": "🕊️"
          },
          {
          "line": "एक दिन बारिश आई और मोर नाचने लगा।",
          "emoji": "🌧️"
          },
          {
          "line": "तभी तेज़ हवा चली और मोर का पंख टूट गया।",
          "emoji": "💨"
          },
          {
          "line": "मोर उड़ नहीं पाया और गिर गया।",
          "emoji": "😣"
          },
          {
          "line": "कौए और कोयल ने मिलकर उसकी मदद की।",
          "emoji": "🤝"
          },
          {
          "line": "मोर को अपनी गलती समझ आई।",
          "emoji": "😔"
          },
          {
          "line": "सुंदरता पर घमंड नहीं करना चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "घमंड नहीं करना चाहिए।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySundarMorShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सुंदर मोर",
            rhymeId: "sundar-mor",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक मोर अपने सुंदर पंखों पर बहुत घमंड करता था।",
          "emoji": "🦚"
          },
          {
          "line": "वह दूसरे पक्षियों का मज़ाक उड़ाता था।",
          "emoji": "😏"
          },
          {
          "line": "कौए से बोला — तू तो काला है!",
          "emoji": "🐦‍⬛"
          },
          {
          "line": "कोयल से बोला — तू तो उड़ भी नहीं सकती ऊँचा!",
          "emoji": "🕊️"
          },
          {
          "line": "एक दिन बारिश आई और मोर नाचने लगा।",
          "emoji": "🌧️"
          },
          {
          "line": "तभी तेज़ हवा चली और मोर का पंख टूट गया।",
          "emoji": "💨"
          },
          {
          "line": "मोर उड़ नहीं पाया और गिर गया।",
          "emoji": "😣"
          },
          {
          "line": "कौए और कोयल ने मिलकर उसकी मदद की।",
          "emoji": "🤝"
          },
          {
          "line": "मोर को अपनी गलती समझ आई।",
          "emoji": "😔"
          },
          {
          "line": "सुंदरता पर घमंड नहीं करना चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "घमंड नहीं करना चाहिए।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सच की ताक़त",
            rhymeId: "sach-ki-takat",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में दो भाई रहते थे।",
          "emoji": "👦"
          },
          {
          "line": "बड़ा भाई हमेशा सच बोलता था।",
          "emoji": "😇"
          },
          {
          "line": "छोटा भाई अक्सर झूठ बोलता था।",
          "emoji": "🤥"
          },
          {
          "line": "एक दिन दोनों को राजा के दरबार में बुलाया गया।",
          "emoji": "👑"
          },
          {
          "line": "राजा ने पूछा — बाग में कौन गया था?",
          "emoji": "🏰"
          },
          {
          "line": "छोटे भाई ने कहा — मैं नहीं गया।",
          "emoji": "🙅"
          },
          {
          "line": "बड़े भाई ने सच बोला — हम दोनों गए थे।",
          "emoji": "🙋"
          },
          {
          "line": "राजा ने बड़े भाई को इनाम दिया।",
          "emoji": "🎁"
          },
          {
          "line": "छोटे भाई को सज़ा मिली।",
          "emoji": "😢"
          },
          {
          "line": "सच बोलने वाला हमेशा जीतता है।",
          "emoji": "⭐"
          }
          ],
            moral: "सच बोलने वाला हमेशा जीतता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySachKiTakatShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सच की ताक़त",
            rhymeId: "sach-ki-takat",
            theme: "garden" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में दो भाई रहते थे।",
          "emoji": "👦"
          },
          {
          "line": "बड़ा भाई हमेशा सच बोलता था।",
          "emoji": "😇"
          },
          {
          "line": "छोटा भाई अक्सर झूठ बोलता था।",
          "emoji": "🤥"
          },
          {
          "line": "एक दिन दोनों को राजा के दरबार में बुलाया गया।",
          "emoji": "👑"
          },
          {
          "line": "राजा ने पूछा — बाग में कौन गया था?",
          "emoji": "🏰"
          },
          {
          "line": "छोटे भाई ने कहा — मैं नहीं गया।",
          "emoji": "🙅"
          },
          {
          "line": "बड़े भाई ने सच बोला — हम दोनों गए थे।",
          "emoji": "🙋"
          },
          {
          "line": "राजा ने बड़े भाई को इनाम दिया।",
          "emoji": "🎁"
          },
          {
          "line": "छोटे भाई को सज़ा मिली।",
          "emoji": "😢"
          },
          {
          "line": "सच बोलने वाला हमेशा जीतता है।",
          "emoji": "⭐"
          }
          ],
            moral: "सच बोलने वाला हमेशा जीतता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "जादुई कपड़ा",
            rhymeId: "jadui-kapda",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "एक गरीब बुनकर बहुत मेहनती था।",
          "emoji": "🧶"
          },
          {
          "line": "एक दिन उसे एक जादुई कपड़ा मिला।",
          "emoji": "✨"
          },
          {
          "line": "कपड़े से जो माँगो वह मिल जाता था।",
          "emoji": "🪄"
          },
          {
          "line": "बुनकर ने एक अच्छा घर माँगा।",
          "emoji": "🏠"
          },
          {
          "line": "फिर उसने ढेर सारा खाना माँगा।",
          "emoji": "🍲"
          },
          {
          "line": "फिर सोना, चाँदी, गहने — सब माँगता गया।",
          "emoji": "💰"
          },
          {
          "line": "वह और ज़्यादा माँगता गया, रुका ही नहीं।",
          "emoji": "🤑"
          },
          {
          "line": "एक दिन जादुई कपड़ा गायब हो गया!",
          "emoji": "💨"
          },
          {
          "line": "सब कुछ वापस चला गया।",
          "emoji": "😢"
          },
          {
          "line": "जो है उसमें संतुष्ट रहना चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "जो है उसमें खुश रहना चाहिए।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryJaduiKapdaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "जादुई कपड़ा",
            rhymeId: "jadui-kapda",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "एक गरीब बुनकर बहुत मेहनती था।",
          "emoji": "🧶"
          },
          {
          "line": "एक दिन उसे एक जादुई कपड़ा मिला।",
          "emoji": "✨"
          },
          {
          "line": "कपड़े से जो माँगो वह मिल जाता था।",
          "emoji": "🪄"
          },
          {
          "line": "बुनकर ने एक अच्छा घर माँगा।",
          "emoji": "🏠"
          },
          {
          "line": "फिर उसने ढेर सारा खाना माँगा।",
          "emoji": "🍲"
          },
          {
          "line": "फिर सोना, चाँदी, गहने — सब माँगता गया।",
          "emoji": "💰"
          },
          {
          "line": "वह और ज़्यादा माँगता गया, रुका ही नहीं।",
          "emoji": "🤑"
          },
          {
          "line": "एक दिन जादुई कपड़ा गायब हो गया!",
          "emoji": "💨"
          },
          {
          "line": "सब कुछ वापस चला गया।",
          "emoji": "😢"
          },
          {
          "line": "जो है उसमें संतुष्ट रहना चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "जो है उसमें खुश रहना चाहिए।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चाँद पर खरगोश",
            rhymeId: "chand-pe-khargosh",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "तीन दोस्त थे — खरगोश, बंदर और लोमड़ी।",
          "emoji": "🐇"
          },
          {
          "line": "एक बूढ़ा भिखारी उनके पास आया।",
          "emoji": "👴"
          },
          {
          "line": "बंदर ने फल दिए।",
          "emoji": "🍎"
          },
          {
          "line": "लोमड़ी ने मछली पकड़कर दी।",
          "emoji": "🐟"
          },
          {
          "line": "खरगोश के पास देने को कुछ नहीं था।",
          "emoji": "😟"
          },
          {
          "line": "खरगोश ने कहा — मैं खुद को अर्पित करता हूँ।",
          "emoji": "🙏"
          },
          {
          "line": "वह भिखारी देवता इंद्र थे।",
          "emoji": "✨"
          },
          {
          "line": "इंद्र खरगोश के त्याग से बहुत प्रसन्न हुए।",
          "emoji": "😊"
          },
          {
          "line": "उन्होंने खरगोश की तस्वीर चाँद पर बना दी।",
          "emoji": "🌕"
          },
          {
          "line": "त्याग करने वाला हमेशा अमर रहता है।",
          "emoji": "⭐"
          }
          ],
            moral: "त्याग करने वाला हमेशा याद किया जाता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChandPeKhargoshShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चाँद पर खरगोश",
            rhymeId: "chand-pe-khargosh",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "तीन दोस्त थे — खरगोश, बंदर और लोमड़ी।",
          "emoji": "🐇"
          },
          {
          "line": "एक बूढ़ा भिखारी उनके पास आया।",
          "emoji": "👴"
          },
          {
          "line": "बंदर ने फल दिए।",
          "emoji": "🍎"
          },
          {
          "line": "लोमड़ी ने मछली पकड़कर दी।",
          "emoji": "🐟"
          },
          {
          "line": "खरगोश के पास देने को कुछ नहीं था।",
          "emoji": "😟"
          },
          {
          "line": "खरगोश ने कहा — मैं खुद को अर्पित करता हूँ।",
          "emoji": "🙏"
          },
          {
          "line": "वह भिखारी देवता इंद्र थे।",
          "emoji": "✨"
          },
          {
          "line": "इंद्र खरगोश के त्याग से बहुत प्रसन्न हुए।",
          "emoji": "😊"
          },
          {
          "line": "उन्होंने खरगोश की तस्वीर चाँद पर बना दी।",
          "emoji": "🌕"
          },
          {
          "line": "त्याग करने वाला हमेशा अमर रहता है।",
          "emoji": "⭐"
          }
          ],
            moral: "त्याग करने वाला हमेशा याद किया जाता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "अंधे आदमी और हाथी",
            rhymeId: "andha-raja",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में छह अंधे आदमी रहते थे।",
          "emoji": "👤"
          },
          {
          "line": "एक दिन गाँव में हाथी आया।",
          "emoji": "🐘"
          },
          {
          "line": "सबने हाथी को छूकर बताने की कोशिश की।",
          "emoji": "🤚"
          },
          {
          "line": "एक ने सूँड छुई — यह साँप जैसा है!",
          "emoji": "🐍"
          },
          {
          "line": "दूसरे ने कान छुआ — यह पंखे जैसा है!",
          "emoji": "🪭"
          },
          {
          "line": "तीसरे ने पैर छुआ — यह खंभे जैसा है!",
          "emoji": "🪵"
          },
          {
          "line": "चौथे ने पेट छुआ — यह दीवार जैसा है!",
          "emoji": "🧱"
          },
          {
          "line": "सब आपस में लड़ने लगे।",
          "emoji": "😤"
          },
          {
          "line": "एक बुद्धिमान आदमी ने कहा — सब सही हो, पर अधूरे।",
          "emoji": "🧠"
          },
          {
          "line": "पूरी बात जाने बिना राय नहीं देनी चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "किसी चीज़ को पूरा जाने बिना राय नहीं देनी चाहिए।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryAndhaRajaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "अंधे आदमी और हाथी",
            rhymeId: "andha-raja",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में छह अंधे आदमी रहते थे।",
          "emoji": "👤"
          },
          {
          "line": "एक दिन गाँव में हाथी आया।",
          "emoji": "🐘"
          },
          {
          "line": "सबने हाथी को छूकर बताने की कोशिश की।",
          "emoji": "🤚"
          },
          {
          "line": "एक ने सूँड छुई — यह साँप जैसा है!",
          "emoji": "🐍"
          },
          {
          "line": "दूसरे ने कान छुआ — यह पंखे जैसा है!",
          "emoji": "🪭"
          },
          {
          "line": "तीसरे ने पैर छुआ — यह खंभे जैसा है!",
          "emoji": "🪵"
          },
          {
          "line": "चौथे ने पेट छुआ — यह दीवार जैसा है!",
          "emoji": "🧱"
          },
          {
          "line": "सब आपस में लड़ने लगे।",
          "emoji": "😤"
          },
          {
          "line": "एक बुद्धिमान आदमी ने कहा — सब सही हो, पर अधूरे।",
          "emoji": "🧠"
          },
          {
          "line": "पूरी बात जाने बिना राय नहीं देनी चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "किसी चीज़ को पूरा जाने बिना राय नहीं देनी चाहिए।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "जादूगर की टोपी",
            rhymeId: "jadugar-ki-topi",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में एक जादूगर आया।",
          "emoji": "🎩"
          },
          {
          "line": "उसके पास एक जादुई टोपी थी।",
          "emoji": "✨"
          },
          {
          "line": "टोपी से जो निकले वह सच हो जाता था।",
          "emoji": "🪄"
          },
          {
          "line": "एक लालची आदमी ने टोपी चुरा ली।",
          "emoji": "😈"
          },
          {
          "line": "उसने कहा — मुझे ढेर सारा सोना चाहिए!",
          "emoji": "🤑"
          },
          {
          "line": "टोपी से पत्थर निकले, सोना नहीं।",
          "emoji": "🪨"
          },
          {
          "line": "एक अच्छे बच्चे ने टोपी वापस जादूगर को दी।",
          "emoji": "👦"
          },
          {
          "line": "जादूगर ने बच्चे से कहा — तू माँग जो चाहे।",
          "emoji": "😊"
          },
          {
          "line": "बच्चे ने कहा — सबको खुशी मिले।",
          "emoji": "🌟"
          },
          {
          "line": "अच्छे दिल वालों की हर इच्छा पूरी होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "अच्छे काम का फल अच्छा ही होता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryJadugarKiTopiShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "जादूगर की टोपी",
            rhymeId: "jadugar-ki-topi",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "एक गाँव में एक जादूगर आया।",
          "emoji": "🎩"
          },
          {
          "line": "उसके पास एक जादुई टोपी थी।",
          "emoji": "✨"
          },
          {
          "line": "टोपी से जो निकले वह सच हो जाता था।",
          "emoji": "🪄"
          },
          {
          "line": "एक लालची आदमी ने टोपी चुरा ली।",
          "emoji": "😈"
          },
          {
          "line": "उसने कहा — मुझे ढेर सारा सोना चाहिए!",
          "emoji": "🤑"
          },
          {
          "line": "टोपी से पत्थर निकले, सोना नहीं।",
          "emoji": "🪨"
          },
          {
          "line": "एक अच्छे बच्चे ने टोपी वापस जादूगर को दी।",
          "emoji": "👦"
          },
          {
          "line": "जादूगर ने बच्चे से कहा — तू माँग जो चाहे।",
          "emoji": "😊"
          },
          {
          "line": "बच्चे ने कहा — सबको खुशी मिले।",
          "emoji": "🌟"
          },
          {
          "line": "अच्छे दिल वालों की हर इच्छा पूरी होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "अच्छे काम का फल अच्छा ही होता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "किसान और साँप",
            rhymeId: "kisaan-aur-saanp",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "सर्दी का मौसम था, एक किसान खेत से लौट रहा था।",
          "emoji": "🧑‍🌾"
          },
          {
          "line": "रास्ते में उसे एक ठंड से अकड़ा हुआ साँप मिला।",
          "emoji": "🐍"
          },
          {
          "line": "किसान को दया आ गई।",
          "emoji": "😢"
          },
          {
          "line": "उसने साँप को उठाकर गोद में रख लिया।",
          "emoji": "🤗"
          },
          {
          "line": "किसान की गर्मी से साँप जाग गया।",
          "emoji": "😮"
          },
          {
          "line": "जागते ही साँप ने किसान को डस लिया!",
          "emoji": "😱"
          },
          {
          "line": "किसान ने कहा — मैंने तुम्हारी जान बचाई!",
          "emoji": "😰"
          },
          {
          "line": "साँप बोला — यह मेरा स्वभाव है।",
          "emoji": "🐍"
          },
          {
          "line": "किसान ने अपनी गलती समझी।",
          "emoji": "😞"
          },
          {
          "line": "बिना सोचे-समझे दया करना खतरनाक हो सकता है।",
          "emoji": "⭐"
          }
          ],
            moral: "दुष्ट पर दया करना खतरनाक हो सकता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryKisaanAurSaanpShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "किसान और साँप",
            rhymeId: "kisaan-aur-saanp",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "सर्दी का मौसम था, एक किसान खेत से लौट रहा था।",
          "emoji": "🧑‍🌾"
          },
          {
          "line": "रास्ते में उसे एक ठंड से अकड़ा हुआ साँप मिला।",
          "emoji": "🐍"
          },
          {
          "line": "किसान को दया आ गई।",
          "emoji": "😢"
          },
          {
          "line": "उसने साँप को उठाकर गोद में रख लिया।",
          "emoji": "🤗"
          },
          {
          "line": "किसान की गर्मी से साँप जाग गया।",
          "emoji": "😮"
          },
          {
          "line": "जागते ही साँप ने किसान को डस लिया!",
          "emoji": "😱"
          },
          {
          "line": "किसान ने कहा — मैंने तुम्हारी जान बचाई!",
          "emoji": "😰"
          },
          {
          "line": "साँप बोला — यह मेरा स्वभाव है।",
          "emoji": "🐍"
          },
          {
          "line": "किसान ने अपनी गलती समझी।",
          "emoji": "😞"
          },
          {
          "line": "बिना सोचे-समझे दया करना खतरनाक हो सकता है।",
          "emoji": "⭐"
          }
          ],
            moral: "दुष्ट पर दया करना खतरनाक हो सकता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "अकबर-बीरबल और चोर",
            rhymeId: "akbar-birbal-chor",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "राजा अकबर के दरबार में चोरी की शिकायत आई।",
          "emoji": "👑"
          },
          {
          "line": "एक व्यापारी का हार चोरी हो गया था।",
          "emoji": "📿"
          },
          {
          "line": "सात नौकरों में से किसी एक ने चोरी की थी।",
          "emoji": "🔍"
          },
          {
          "line": "बीरबल ने एक तरकीब सोची।",
          "emoji": "💡"
          },
          {
          "line": "उसने सबको एक-एक बराबर छड़ी दी।",
          "emoji": "🪵"
          },
          {
          "line": "बीरबल बोला — चोर की छड़ी रात में दो इंच बढ़ जाएगी।",
          "emoji": "🗣️"
          },
          {
          "line": "अगले दिन सबकी छड़ियाँ देखी गईं।",
          "emoji": "👀"
          },
          {
          "line": "एक नौकर की छड़ी दो इंच छोटी थी!",
          "emoji": "📏"
          },
          {
          "line": "उसने डर के मारे रात में दो इंच काट दी थी!",
          "emoji": "😨"
          },
          {
          "line": "बुद्धि से हर समस्या हल हो सकती है।",
          "emoji": "⭐"
          }
          ],
            moral: "बुद्धिमान लोग हर समस्या का हल निकाल लेते हैं।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryAkbarBirbalChorShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "अकबर-बीरबल और चोर",
            rhymeId: "akbar-birbal-chor",
            theme: "night" as RhymeTheme,
            verses: [
          {
          "line": "राजा अकबर के दरबार में चोरी की शिकायत आई।",
          "emoji": "👑"
          },
          {
          "line": "एक व्यापारी का हार चोरी हो गया था।",
          "emoji": "📿"
          },
          {
          "line": "सात नौकरों में से किसी एक ने चोरी की थी।",
          "emoji": "🔍"
          },
          {
          "line": "बीरबल ने एक तरकीब सोची।",
          "emoji": "💡"
          },
          {
          "line": "उसने सबको एक-एक बराबर छड़ी दी।",
          "emoji": "🪵"
          },
          {
          "line": "बीरबल बोला — चोर की छड़ी रात में दो इंच बढ़ जाएगी।",
          "emoji": "🗣️"
          },
          {
          "line": "अगले दिन सबकी छड़ियाँ देखी गईं।",
          "emoji": "👀"
          },
          {
          "line": "एक नौकर की छड़ी दो इंच छोटी थी!",
          "emoji": "📏"
          },
          {
          "line": "उसने डर के मारे रात में दो इंच काट दी थी!",
          "emoji": "😨"
          },
          {
          "line": "बुद्धि से हर समस्या हल हो सकती है।",
          "emoji": "⭐"
          }
          ],
            moral: "बुद्धिमान लोग हर समस्या का हल निकाल लेते हैं।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "समुद्र और छोटी मछली",
            rhymeId: "samundar-aur-machhli",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी मछली समुद्र में रहती थी।",
          "emoji": "🐟"
          },
          {
          "line": "बड़ी मछलियाँ उसका मज़ाक उड़ाती थीं।",
          "emoji": "🐋"
          },
          {
          "line": "तू बहुत छोटी है, कुछ नहीं कर सकती!",
          "emoji": "😏"
          },
          {
          "line": "एक दिन एक बड़ी मछली जाल में फँस गई।",
          "emoji": "🪤"
          },
          {
          "line": "कोई भी उसकी मदद नहीं कर पा रहा था।",
          "emoji": "😰"
          },
          {
          "line": "छोटी मछली ने जाल की गाँठ खोल दी!",
          "emoji": "🐟"
          },
          {
          "line": "वह इतनी छोटी थी कि जाल से निकल सकती थी।",
          "emoji": "✨"
          },
          {
          "line": "बड़ी मछली आज़ाद हो गई।",
          "emoji": "😊"
          },
          {
          "line": "सबने छोटी मछली की बहादुरी की तारीफ़ की।",
          "emoji": "👏"
          },
          {
          "line": "छोटे होकर भी बड़े काम किए जा सकते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "छोटे होकर भी बड़े काम किए जा सकते हैं।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySamundarAurMachhliShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "समुद्र और छोटी मछली",
            rhymeId: "samundar-aur-machhli",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी मछली समुद्र में रहती थी।",
          "emoji": "🐟"
          },
          {
          "line": "बड़ी मछलियाँ उसका मज़ाक उड़ाती थीं।",
          "emoji": "🐋"
          },
          {
          "line": "तू बहुत छोटी है, कुछ नहीं कर सकती!",
          "emoji": "😏"
          },
          {
          "line": "एक दिन एक बड़ी मछली जाल में फँस गई।",
          "emoji": "🪤"
          },
          {
          "line": "कोई भी उसकी मदद नहीं कर पा रहा था।",
          "emoji": "😰"
          },
          {
          "line": "छोटी मछली ने जाल की गाँठ खोल दी!",
          "emoji": "🐟"
          },
          {
          "line": "वह इतनी छोटी थी कि जाल से निकल सकती थी।",
          "emoji": "✨"
          },
          {
          "line": "बड़ी मछली आज़ाद हो गई।",
          "emoji": "😊"
          },
          {
          "line": "सबने छोटी मछली की बहादुरी की तारीफ़ की।",
          "emoji": "👏"
          },
          {
          "line": "छोटे होकर भी बड़े काम किए जा सकते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "छोटे होकर भी बड़े काम किए जा सकते हैं।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "धरती का बोझ",
            rhymeId: "dharti-ka-bojh",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "एक जंगल में बहुत सारे पेड़ थे।",
          "emoji": "🌳"
          },
          {
          "line": "लोगों ने पेड़ काटना शुरू कर दिया।",
          "emoji": "🪓"
          },
          {
          "line": "जानवरों के घर उजड़ गए।",
          "emoji": "😢"
          },
          {
          "line": "बारिश होनी बंद हो गई।",
          "emoji": "🏜️"
          },
          {
          "line": "नदियाँ सूख गईं।",
          "emoji": "💧"
          },
          {
          "line": "एक छोटी चिड़िया ने कहा — हमें पेड़ लगाने होंगे।",
          "emoji": "🐦"
          },
          {
          "line": "सब जानवरों ने मिलकर बीज बोए।",
          "emoji": "🌱"
          },
          {
          "line": "बच्चों ने भी पेड़ लगाए।",
          "emoji": "👧"
          },
          {
          "line": "धीरे-धीरे जंगल फिर से हरा-भरा हो गया।",
          "emoji": "🌿"
          },
          {
          "line": "धरती की रक्षा करना सबका कर्तव्य है।",
          "emoji": "⭐"
          }
          ],
            moral: "धरती की रक्षा करना हम सबका कर्तव्य है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryDhartiKaBojhShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "धरती का बोझ",
            rhymeId: "dharti-ka-bojh",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "एक जंगल में बहुत सारे पेड़ थे।",
          "emoji": "🌳"
          },
          {
          "line": "लोगों ने पेड़ काटना शुरू कर दिया।",
          "emoji": "🪓"
          },
          {
          "line": "जानवरों के घर उजड़ गए।",
          "emoji": "😢"
          },
          {
          "line": "बारिश होनी बंद हो गई।",
          "emoji": "🏜️"
          },
          {
          "line": "नदियाँ सूख गईं।",
          "emoji": "💧"
          },
          {
          "line": "एक छोटी चिड़िया ने कहा — हमें पेड़ लगाने होंगे।",
          "emoji": "🐦"
          },
          {
          "line": "सब जानवरों ने मिलकर बीज बोए।",
          "emoji": "🌱"
          },
          {
          "line": "बच्चों ने भी पेड़ लगाए।",
          "emoji": "👧"
          },
          {
          "line": "धीरे-धीरे जंगल फिर से हरा-भरा हो गया।",
          "emoji": "🌿"
          },
          {
          "line": "धरती की रक्षा करना सबका कर्तव्य है।",
          "emoji": "⭐"
          }
          ],
            moral: "धरती की रक्षा करना हम सबका कर्तव्य है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "चूहे का विवाह",
            rhymeId: "chuha-ka-vivah",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "एक चूहे की बेटी बहुत सुंदर थी।",
          "emoji": "🐭"
          },
          {
          "line": "चूहा चाहता था कि उसकी शादी सबसे ताक़तवर से हो।",
          "emoji": "💍"
          },
          {
          "line": "वह सूरज के पास गया — तुम सबसे ताक़तवर हो!",
          "emoji": "☀️"
          },
          {
          "line": "सूरज बोला — बादल मुझसे ताक़तवर है, मुझे ढक लेता है।",
          "emoji": "☁️"
          },
          {
          "line": "बादल बोला — हवा मुझसे ताक़तवर है, मुझे उड़ा देती है।",
          "emoji": "💨"
          },
          {
          "line": "हवा बोली — पहाड़ मुझसे ताक़तवर है, मुझे रोक लेता है।",
          "emoji": "⛰️"
          },
          {
          "line": "पहाड़ बोला — चूहा मुझसे ताक़तवर है, मुझमें बिल बनाता है!",
          "emoji": "🕳️"
          },
          {
          "line": "चूहा समझ गया कि चूहा ही सबसे अच्छा वर है।",
          "emoji": "😊"
          },
          {
          "line": "बेटी की शादी एक अच्छे चूहे से हो गई।",
          "emoji": "💕"
          },
          {
          "line": "हर कोई अपनी जगह पर सबसे अच्छा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "हर कोई अपनी जगह सबसे अच्छा है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChuhaKaVivahShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "चूहे का विवाह",
            rhymeId: "chuha-ka-vivah",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "एक चूहे की बेटी बहुत सुंदर थी।",
          "emoji": "🐭"
          },
          {
          "line": "चूहा चाहता था कि उसकी शादी सबसे ताक़तवर से हो।",
          "emoji": "💍"
          },
          {
          "line": "वह सूरज के पास गया — तुम सबसे ताक़तवर हो!",
          "emoji": "☀️"
          },
          {
          "line": "सूरज बोला — बादल मुझसे ताक़तवर है, मुझे ढक लेता है।",
          "emoji": "☁️"
          },
          {
          "line": "बादल बोला — हवा मुझसे ताक़तवर है, मुझे उड़ा देती है।",
          "emoji": "💨"
          },
          {
          "line": "हवा बोली — पहाड़ मुझसे ताक़तवर है, मुझे रोक लेता है।",
          "emoji": "⛰️"
          },
          {
          "line": "पहाड़ बोला — चूहा मुझसे ताक़तवर है, मुझमें बिल बनाता है!",
          "emoji": "🕳️"
          },
          {
          "line": "चूहा समझ गया कि चूहा ही सबसे अच्छा वर है।",
          "emoji": "😊"
          },
          {
          "line": "बेटी की शादी एक अच्छे चूहे से हो गई।",
          "emoji": "💕"
          },
          {
          "line": "हर कोई अपनी जगह पर सबसे अच्छा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "हर कोई अपनी जगह सबसे अच्छा है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "ज्ञानी उल्लू",
            rhymeId: "gyani-ullu",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "जंगल में सब जानवर बहुत बोलते थे।",
          "emoji": "🗣️"
          },
          {
          "line": "लेकिन एक उल्लू हमेशा चुपचाप सुनता था।",
          "emoji": "🦉"
          },
          {
          "line": "जानवर उल्लू को बोलते — तुम बोलते क्यों नहीं?",
          "emoji": "🤔"
          },
          {
          "line": "एक दिन जंगल में आग लग गई।",
          "emoji": "🔥"
          },
          {
          "line": "सब जानवर डरकर इधर-उधर भाग रहे थे।",
          "emoji": "😱"
          },
          {
          "line": "उल्लू ने शांत आवाज़ में कहा — नदी की तरफ़ चलो।",
          "emoji": "🦉"
          },
          {
          "line": "सब जानवर उल्लू की बात मानकर नदी गए।",
          "emoji": "🌊"
          },
          {
          "line": "सब सुरक्षित बच गए।",
          "emoji": "😊"
          },
          {
          "line": "सबने उल्लू को धन्यवाद कहा।",
          "emoji": "🙏"
          },
          {
          "line": "कम बोलो, ज़्यादा सुनो — यही असली बुद्धिमानी है।",
          "emoji": "⭐"
          }
          ],
            moral: "ज़्यादा सुनो, कम बोलो — यही बुद्धिमानी है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryGyaniUlluShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "ज्ञानी उल्लू",
            rhymeId: "gyani-ullu",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "जंगल में सब जानवर बहुत बोलते थे।",
          "emoji": "🗣️"
          },
          {
          "line": "लेकिन एक उल्लू हमेशा चुपचाप सुनता था।",
          "emoji": "🦉"
          },
          {
          "line": "जानवर उल्लू को बोलते — तुम बोलते क्यों नहीं?",
          "emoji": "🤔"
          },
          {
          "line": "एक दिन जंगल में आग लग गई।",
          "emoji": "🔥"
          },
          {
          "line": "सब जानवर डरकर इधर-उधर भाग रहे थे।",
          "emoji": "😱"
          },
          {
          "line": "उल्लू ने शांत आवाज़ में कहा — नदी की तरफ़ चलो।",
          "emoji": "🦉"
          },
          {
          "line": "सब जानवर उल्लू की बात मानकर नदी गए।",
          "emoji": "🌊"
          },
          {
          "line": "सब सुरक्षित बच गए।",
          "emoji": "😊"
          },
          {
          "line": "सबने उल्लू को धन्यवाद कहा।",
          "emoji": "🙏"
          },
          {
          "line": "कम बोलो, ज़्यादा सुनो — यही असली बुद्धिमानी है।",
          "emoji": "⭐"
          }
          ],
            moral: "ज़्यादा सुनो, कम बोलो — यही बुद्धिमानी है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "रंगों की दोस्ती",
            rhymeId: "rangon-ki-dosti",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "रंगों की डिब्बी में सब रंग लड़ रहे थे।",
          "emoji": "🎨"
          },
          {
          "line": "लाल बोला — मैं सबसे सुंदर हूँ!",
          "emoji": "🔴"
          },
          {
          "line": "नीला बोला — मैं आसमान जैसा हूँ!",
          "emoji": "🔵"
          },
          {
          "line": "हरा बोला — मैं पेड़ों जैसा हूँ!",
          "emoji": "🟢"
          },
          {
          "line": "पीला बोला — मैं सूरज जैसा हूँ!",
          "emoji": "🟡"
          },
          {
          "line": "एक दिन बारिश हुई और इंद्रधनुष बना।",
          "emoji": "🌈"
          },
          {
          "line": "सब रंग एक साथ चमक रहे थे।",
          "emoji": "✨"
          },
          {
          "line": "अकेले कोई भी इंद्रधनुष नहीं बना सकता था।",
          "emoji": "🤔"
          },
          {
          "line": "सब रंग समझ गए — हम सब मिलकर सुंदर हैं।",
          "emoji": "🤝"
          },
          {
          "line": "सबकी अपनी खूबी है, मिलकर सुंदरता बनती है।",
          "emoji": "⭐"
          }
          ],
            moral: "सबकी अपनी खूबी होती है, मिलकर सुंदरता बनती है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryRangonKiDostiShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "रंगों की दोस्ती",
            rhymeId: "rangon-ki-dosti",
            theme: "ocean" as RhymeTheme,
            verses: [
          {
          "line": "रंगों की डिब्बी में सब रंग लड़ रहे थे।",
          "emoji": "🎨"
          },
          {
          "line": "लाल बोला — मैं सबसे सुंदर हूँ!",
          "emoji": "🔴"
          },
          {
          "line": "नीला बोला — मैं आसमान जैसा हूँ!",
          "emoji": "🔵"
          },
          {
          "line": "हरा बोला — मैं पेड़ों जैसा हूँ!",
          "emoji": "🟢"
          },
          {
          "line": "पीला बोला — मैं सूरज जैसा हूँ!",
          "emoji": "🟡"
          },
          {
          "line": "एक दिन बारिश हुई और इंद्रधनुष बना।",
          "emoji": "🌈"
          },
          {
          "line": "सब रंग एक साथ चमक रहे थे।",
          "emoji": "✨"
          },
          {
          "line": "अकेले कोई भी इंद्रधनुष नहीं बना सकता था।",
          "emoji": "🤔"
          },
          {
          "line": "सब रंग समझ गए — हम सब मिलकर सुंदर हैं।",
          "emoji": "🤝"
          },
          {
          "line": "सबकी अपनी खूबी है, मिलकर सुंदरता बनती है।",
          "emoji": "⭐"
          }
          ],
            moral: "सबकी अपनी खूबी होती है, मिलकर सुंदरता बनती है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "गुड़िया की दोस्ती",
            rhymeId: "gudiya-ki-dosti",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "गुड़िया नई स्कूल में आई थी।",
          "emoji": "👧"
          },
          {
          "line": "सब बच्चे अपने-अपने ग्रुप में खेल रहे थे।",
          "emoji": "👫"
          },
          {
          "line": "गुड़िया अकेली बैठी थी।",
          "emoji": "😢"
          },
          {
          "line": "एक लड़की रिया ने उसे बुलाया — आओ, साथ खेलो!",
          "emoji": "😊"
          },
          {
          "line": "गुड़िया खुश हो गई।",
          "emoji": "😄"
          },
          {
          "line": "धीरे-धीरे गुड़िया सबसे दोस्ती करने लगी।",
          "emoji": "🤝"
          },
          {
          "line": "वह सबके साथ बाँटकर खाती थी।",
          "emoji": "🍱"
          },
          {
          "line": "सबकी मदद करती थी।",
          "emoji": "💕"
          },
          {
          "line": "जल्दी ही गुड़िया सबकी प्यारी दोस्त बन गई।",
          "emoji": "🌟"
          },
          {
          "line": "सबसे प्यार और दोस्ती करनी चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "सबसे दोस्ती करनी चाहिए, भेदभाव नहीं।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryGudiyaKiDostiShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "गुड़िया की दोस्ती",
            rhymeId: "gudiya-ki-dosti",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "गुड़िया नई स्कूल में आई थी।",
          "emoji": "👧"
          },
          {
          "line": "सब बच्चे अपने-अपने ग्रुप में खेल रहे थे।",
          "emoji": "👫"
          },
          {
          "line": "गुड़िया अकेली बैठी थी।",
          "emoji": "😢"
          },
          {
          "line": "एक लड़की रिया ने उसे बुलाया — आओ, साथ खेलो!",
          "emoji": "😊"
          },
          {
          "line": "गुड़िया खुश हो गई।",
          "emoji": "😄"
          },
          {
          "line": "धीरे-धीरे गुड़िया सबसे दोस्ती करने लगी।",
          "emoji": "🤝"
          },
          {
          "line": "वह सबके साथ बाँटकर खाती थी।",
          "emoji": "🍱"
          },
          {
          "line": "सबकी मदद करती थी।",
          "emoji": "💕"
          },
          {
          "line": "जल्दी ही गुड़िया सबकी प्यारी दोस्त बन गई।",
          "emoji": "🌟"
          },
          {
          "line": "सबसे प्यार और दोस्ती करनी चाहिए।",
          "emoji": "⭐"
          }
          ],
            moral: "सबसे दोस्ती करनी चाहिए, भेदभाव नहीं।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सोने की कुल्हाड़ी",
            rhymeId: "sone-ki-kulhadi",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "एक ईमानदार लकड़हारा जंगल में लकड़ी काट रहा था।",
          "emoji": "🪓"
          },
          {
          "line": "उसकी कुल्हाड़ी नदी में गिर गई।",
          "emoji": "🌊"
          },
          {
          "line": "वह बहुत दुखी होकर रोने लगा।",
          "emoji": "😭"
          },
          {
          "line": "नदी के देवता प्रकट हुए।",
          "emoji": "✨"
          },
          {
          "line": "उन्होंने एक सोने की कुल्हाड़ी दिखाई — क्या यह तुम्हारी है?",
          "emoji": "🪙"
          },
          {
          "line": "लकड़हारे ने कहा — नहीं, यह मेरी नहीं है।",
          "emoji": "🙅"
          },
          {
          "line": "फिर चाँदी की कुल्हाड़ी दिखाई — यह?",
          "emoji": "🥈"
          },
          {
          "line": "लकड़हारा बोला — नहीं, मेरी तो लोहे की है।",
          "emoji": "😊"
          },
          {
          "line": "देवता खुश हुए और तीनों कुल्हाड़ियाँ दे दीं!",
          "emoji": "🎁"
          },
          {
          "line": "ईमानदारी का फल हमेशा अच्छा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "ईमानदारी सबसे अच्छी नीति है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySoneKiKulhadiShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सोने की कुल्हाड़ी",
            rhymeId: "sone-ki-kulhadi",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "एक ईमानदार लकड़हारा जंगल में लकड़ी काट रहा था।",
          "emoji": "🪓"
          },
          {
          "line": "उसकी कुल्हाड़ी नदी में गिर गई।",
          "emoji": "🌊"
          },
          {
          "line": "वह बहुत दुखी होकर रोने लगा।",
          "emoji": "😭"
          },
          {
          "line": "नदी के देवता प्रकट हुए।",
          "emoji": "✨"
          },
          {
          "line": "उन्होंने एक सोने की कुल्हाड़ी दिखाई — क्या यह तुम्हारी है?",
          "emoji": "🪙"
          },
          {
          "line": "लकड़हारे ने कहा — नहीं, यह मेरी नहीं है।",
          "emoji": "🙅"
          },
          {
          "line": "फिर चाँदी की कुल्हाड़ी दिखाई — यह?",
          "emoji": "🥈"
          },
          {
          "line": "लकड़हारा बोला — नहीं, मेरी तो लोहे की है।",
          "emoji": "😊"
          },
          {
          "line": "देवता खुश हुए और तीनों कुल्हाड़ियाँ दे दीं!",
          "emoji": "🎁"
          },
          {
          "line": "ईमानदारी का फल हमेशा अच्छा होता है।",
          "emoji": "⭐"
          }
          ],
            moral: "ईमानदारी सबसे अच्छी नीति है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "बिल्ली के गले में घंटी",
            rhymeId: "chuha-billi-ghanti",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "एक घर में बहुत सारे चूहे रहते थे।",
          "emoji": "🐭"
          },
          {
          "line": "एक बिल्ली उन्हें रोज़ पकड़ती थी।",
          "emoji": "🐱"
          },
          {
          "line": "चूहों ने एक सभा बुलाई।",
          "emoji": "🤝"
          },
          {
          "line": "एक चूहा बोला — बिल्ली के गले में घंटी बाँध दो!",
          "emoji": "🔔"
          },
          {
          "line": "सब चूहे खुश हो गए — बहुत अच्छा विचार!",
          "emoji": "👏"
          },
          {
          "line": "घंटी की आवाज़ सुनकर हम भाग जाएँगे।",
          "emoji": "🏃"
          },
          {
          "line": "एक बूढ़ा चूहा बोला — लेकिन घंटी बाँधेगा कौन?",
          "emoji": "🧓"
          },
          {
          "line": "सब चूहे चुप हो गए।",
          "emoji": "😶"
          },
          {
          "line": "कोई भी आगे नहीं आया।",
          "emoji": "😟"
          },
          {
          "line": "बात करना आसान है, करना मुश्किल।",
          "emoji": "⭐"
          }
          ],
            moral: "योजना बनाना आसान है, उसे करना मुश्किल।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryChuhaBilliGhantiShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "बिल्ली के गले में घंटी",
            rhymeId: "chuha-billi-ghanti",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "एक घर में बहुत सारे चूहे रहते थे।",
          "emoji": "🐭"
          },
          {
          "line": "एक बिल्ली उन्हें रोज़ पकड़ती थी।",
          "emoji": "🐱"
          },
          {
          "line": "चूहों ने एक सभा बुलाई।",
          "emoji": "🤝"
          },
          {
          "line": "एक चूहा बोला — बिल्ली के गले में घंटी बाँध दो!",
          "emoji": "🔔"
          },
          {
          "line": "सब चूहे खुश हो गए — बहुत अच्छा विचार!",
          "emoji": "👏"
          },
          {
          "line": "घंटी की आवाज़ सुनकर हम भाग जाएँगे।",
          "emoji": "🏃"
          },
          {
          "line": "एक बूढ़ा चूहा बोला — लेकिन घंटी बाँधेगा कौन?",
          "emoji": "🧓"
          },
          {
          "line": "सब चूहे चुप हो गए।",
          "emoji": "😶"
          },
          {
          "line": "कोई भी आगे नहीं आया।",
          "emoji": "😟"
          },
          {
          "line": "बात करना आसान है, करना मुश्किल।",
          "emoji": "⭐"
          }
          ],
            moral: "योजना बनाना आसान है, उसे करना मुश्किल।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "मीठी बोली",
            rhymeId: "meethi-boli",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "एक लड़का था जो हमेशा चिढ़कर बात करता था।",
          "emoji": "😤"
          },
          {
          "line": "कोई भी उससे दोस्ती नहीं करना चाहता था।",
          "emoji": "😞"
          },
          {
          "line": "एक दिन उसकी दादी ने कहा — बेटा, मीठा बोलो।",
          "emoji": "👵"
          },
          {
          "line": "लड़के ने कोशिश की — सुप्रभात दोस्तो!",
          "emoji": "😊"
          },
          {
          "line": "सबको अच्छा लगा।",
          "emoji": "😃"
          },
          {
          "line": "उसने सबकी तारीफ़ की और मदद की।",
          "emoji": "🤝"
          },
          {
          "line": "धीरे-धीरे सब उसके दोस्त बन गए।",
          "emoji": "👬"
          },
          {
          "line": "लड़का समझ गया — मीठी बोली का जादू।",
          "emoji": "✨"
          },
          {
          "line": "अब वह सबसे प्यार से बात करता था।",
          "emoji": "💕"
          },
          {
          "line": "मीठी बोली से सब अपने हो जाते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "मीठी बोली से सब अपने हो जाते हैं।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryMeethiBoliShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "मीठी बोली",
            rhymeId: "meethi-boli",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "एक लड़का था जो हमेशा चिढ़कर बात करता था।",
          "emoji": "😤"
          },
          {
          "line": "कोई भी उससे दोस्ती नहीं करना चाहता था।",
          "emoji": "😞"
          },
          {
          "line": "एक दिन उसकी दादी ने कहा — बेटा, मीठा बोलो।",
          "emoji": "👵"
          },
          {
          "line": "लड़के ने कोशिश की — सुप्रभात दोस्तो!",
          "emoji": "😊"
          },
          {
          "line": "सबको अच्छा लगा।",
          "emoji": "😃"
          },
          {
          "line": "उसने सबकी तारीफ़ की और मदद की।",
          "emoji": "🤝"
          },
          {
          "line": "धीरे-धीरे सब उसके दोस्त बन गए।",
          "emoji": "👬"
          },
          {
          "line": "लड़का समझ गया — मीठी बोली का जादू।",
          "emoji": "✨"
          },
          {
          "line": "अब वह सबसे प्यार से बात करता था।",
          "emoji": "💕"
          },
          {
          "line": "मीठी बोली से सब अपने हो जाते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "मीठी बोली से सब अपने हो जाते हैं।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "हवा और सूरज",
            rhymeId: "hawa-aur-suraj",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "हवा और सूरज में बहस हो गई — कौन ताक़तवर है?",
          "emoji": "🌬️"
          },
          {
          "line": "उन्होंने एक मुसाफ़िर को देखा जो कोट पहने था।",
          "emoji": "🧥"
          },
          {
          "line": "तय हुआ — जो कोट उतरवा दे वह जीतेगा।",
          "emoji": "🤝"
          },
          {
          "line": "हवा ने ज़ोर-ज़ोर से बहना शुरू किया।",
          "emoji": "💨"
          },
          {
          "line": "मुसाफ़िर ने कोट और कसकर पकड़ लिया।",
          "emoji": "🧣"
          },
          {
          "line": "हवा और तेज़ चली लेकिन कोट नहीं उतरा।",
          "emoji": "😤"
          },
          {
          "line": "अब सूरज की बारी आई।",
          "emoji": "☀️"
          },
          {
          "line": "सूरज ने हल्की-हल्की गर्मी दी।",
          "emoji": "🌤️"
          },
          {
          "line": "मुसाफ़िर ने खुद कोट उतार दिया।",
          "emoji": "😊"
          },
          {
          "line": "प्यार और नम्रता हमेशा जीतती है।",
          "emoji": "⭐"
          }
          ],
            moral: "प्यार और नम्रता ज़ोर-ज़बरदस्ती से बड़ी है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryHawaAurSurajShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "हवा और सूरज",
            rhymeId: "hawa-aur-suraj",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "हवा और सूरज में बहस हो गई — कौन ताक़तवर है?",
          "emoji": "🌬️"
          },
          {
          "line": "उन्होंने एक मुसाफ़िर को देखा जो कोट पहने था।",
          "emoji": "🧥"
          },
          {
          "line": "तय हुआ — जो कोट उतरवा दे वह जीतेगा।",
          "emoji": "🤝"
          },
          {
          "line": "हवा ने ज़ोर-ज़ोर से बहना शुरू किया।",
          "emoji": "💨"
          },
          {
          "line": "मुसाफ़िर ने कोट और कसकर पकड़ लिया।",
          "emoji": "🧣"
          },
          {
          "line": "हवा और तेज़ चली लेकिन कोट नहीं उतरा।",
          "emoji": "😤"
          },
          {
          "line": "अब सूरज की बारी आई।",
          "emoji": "☀️"
          },
          {
          "line": "सूरज ने हल्की-हल्की गर्मी दी।",
          "emoji": "🌤️"
          },
          {
          "line": "मुसाफ़िर ने खुद कोट उतार दिया।",
          "emoji": "😊"
          },
          {
          "line": "प्यार और नम्रता हमेशा जीतती है।",
          "emoji": "⭐"
          }
          ],
            moral: "प्यार और नम्रता ज़ोर-ज़बरदस्ती से बड़ी है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "खुशी का राज़",
            rhymeId: "khushi-ka-raaz",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "एक राजा बहुत अमीर था लेकिन खुश नहीं था।",
          "emoji": "👑"
          },
          {
          "line": "उसने मंत्री से कहा — मुझे खुशी चाहिए।",
          "emoji": "😔"
          },
          {
          "line": "मंत्री ने कहा — किसी खुश आदमी की कमीज़ पहन लो।",
          "emoji": "👕"
          },
          {
          "line": "सिपाही खुश आदमी ढूँढने निकले।",
          "emoji": "🔍"
          },
          {
          "line": "अमीर लोग मिले लेकिन कोई खुश नहीं था।",
          "emoji": "💰"
          },
          {
          "line": "एक खेत में एक किसान गाना गा रहा था।",
          "emoji": "🎵"
          },
          {
          "line": "वह बहुत खुश था।",
          "emoji": "😊"
          },
          {
          "line": "सिपाही ने कहा — तुम्हारी कमीज़ दो, राजा को चाहिए।",
          "emoji": "🗣️"
          },
          {
          "line": "किसान हँसा — मेरे पास तो कमीज़ ही नहीं है!",
          "emoji": "😂"
          },
          {
          "line": "खुशी चीज़ों में नहीं, दिल में होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "खुशी बाहर नहीं, अपने अंदर होती है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryKhushiKaRaazShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "खुशी का राज़",
            rhymeId: "khushi-ka-raaz",
            theme: "playground" as RhymeTheme,
            verses: [
          {
          "line": "एक राजा बहुत अमीर था लेकिन खुश नहीं था।",
          "emoji": "👑"
          },
          {
          "line": "उसने मंत्री से कहा — मुझे खुशी चाहिए।",
          "emoji": "😔"
          },
          {
          "line": "मंत्री ने कहा — किसी खुश आदमी की कमीज़ पहन लो।",
          "emoji": "👕"
          },
          {
          "line": "सिपाही खुश आदमी ढूँढने निकले।",
          "emoji": "🔍"
          },
          {
          "line": "अमीर लोग मिले लेकिन कोई खुश नहीं था।",
          "emoji": "💰"
          },
          {
          "line": "एक खेत में एक किसान गाना गा रहा था।",
          "emoji": "🎵"
          },
          {
          "line": "वह बहुत खुश था।",
          "emoji": "😊"
          },
          {
          "line": "सिपाही ने कहा — तुम्हारी कमीज़ दो, राजा को चाहिए।",
          "emoji": "🗣️"
          },
          {
          "line": "किसान हँसा — मेरे पास तो कमीज़ ही नहीं है!",
          "emoji": "😂"
          },
          {
          "line": "खुशी चीज़ों में नहीं, दिल में होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "खुशी बाहर नहीं, अपने अंदर होती है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "प्यारी बिल्ली",
            rhymeId: "pyari-billi",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी बिल्ली बारिश में भीग रही थी।",
          "emoji": "🐱"
          },
          {
          "line": "सब लोग उसे देखकर आगे बढ़ जाते थे।",
          "emoji": "😟"
          },
          {
          "line": "एक छोटी लड़की ने बिल्ली को उठा लिया।",
          "emoji": "👧"
          },
          {
          "line": "उसने बिल्ली को तौलिए से सुखाया।",
          "emoji": "🧺"
          },
          {
          "line": "गर्म दूध पिलाया।",
          "emoji": "🥛"
          },
          {
          "line": "बिल्ली खुश होकर गुर्राने लगी।",
          "emoji": "😻"
          },
          {
          "line": "माँ ने कहा — बहुत अच्छा किया बेटी।",
          "emoji": "🤗"
          },
          {
          "line": "बिल्ली अब लड़की की सबसे अच्छी दोस्त बन गई।",
          "emoji": "💕"
          },
          {
          "line": "वह रोज़ लड़की के साथ खेलती थी।",
          "emoji": "🎾"
          },
          {
          "line": "जानवरों से प्यार करो, वे सच्चे दोस्त बनते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "जानवरों से भी प्यार करना चाहिए।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryPyariBilliShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "प्यारी बिल्ली",
            rhymeId: "pyari-billi",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी बिल्ली बारिश में भीग रही थी।",
          "emoji": "🐱"
          },
          {
          "line": "सब लोग उसे देखकर आगे बढ़ जाते थे।",
          "emoji": "😟"
          },
          {
          "line": "एक छोटी लड़की ने बिल्ली को उठा लिया।",
          "emoji": "👧"
          },
          {
          "line": "उसने बिल्ली को तौलिए से सुखाया।",
          "emoji": "🧺"
          },
          {
          "line": "गर्म दूध पिलाया।",
          "emoji": "🥛"
          },
          {
          "line": "बिल्ली खुश होकर गुर्राने लगी।",
          "emoji": "😻"
          },
          {
          "line": "माँ ने कहा — बहुत अच्छा किया बेटी।",
          "emoji": "🤗"
          },
          {
          "line": "बिल्ली अब लड़की की सबसे अच्छी दोस्त बन गई।",
          "emoji": "💕"
          },
          {
          "line": "वह रोज़ लड़की के साथ खेलती थी।",
          "emoji": "🎾"
          },
          {
          "line": "जानवरों से प्यार करो, वे सच्चे दोस्त बनते हैं।",
          "emoji": "⭐"
          }
          ],
            moral: "जानवरों से भी प्यार करना चाहिए।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "बात का धनी",
            rhymeId: "baat-ka-dhani",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "राजू ने अपने दोस्त से वादा किया — कल ज़रूर आऊँगा।",
          "emoji": "🤝"
          },
          {
          "line": "अगले दिन बहुत तेज़ बारिश हो रही थी।",
          "emoji": "⛈️"
          },
          {
          "line": "माँ ने कहा — आज मत जाओ।",
          "emoji": "🤷"
          },
          {
          "line": "राजू बोला — मैंने वादा किया है, मुझे जाना होगा।",
          "emoji": "😤"
          },
          {
          "line": "वह छाता लेकर दोस्त के घर पहुँच गया।",
          "emoji": "☂️"
          },
          {
          "line": "दोस्त ने कहा — इतनी बारिश में आए!?",
          "emoji": "😮"
          },
          {
          "line": "राजू बोला — वादा वादा होता है।",
          "emoji": "😊"
          },
          {
          "line": "दोस्त बहुत खुश हुआ।",
          "emoji": "🤗"
          },
          {
          "line": "अब सब राजू पर भरोसा करते थे।",
          "emoji": "💯"
          },
          {
          "line": "वादा करो तो हमेशा निभाओ।",
          "emoji": "⭐"
          }
          ],
            moral: "वादा करो तो निभाओ।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryBaatKaDhaniShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "बात का धनी",
            rhymeId: "baat-ka-dhani",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "राजू ने अपने दोस्त से वादा किया — कल ज़रूर आऊँगा।",
          "emoji": "🤝"
          },
          {
          "line": "अगले दिन बहुत तेज़ बारिश हो रही थी।",
          "emoji": "⛈️"
          },
          {
          "line": "माँ ने कहा — आज मत जाओ।",
          "emoji": "🤷"
          },
          {
          "line": "राजू बोला — मैंने वादा किया है, मुझे जाना होगा।",
          "emoji": "😤"
          },
          {
          "line": "वह छाता लेकर दोस्त के घर पहुँच गया।",
          "emoji": "☂️"
          },
          {
          "line": "दोस्त ने कहा — इतनी बारिश में आए!?",
          "emoji": "😮"
          },
          {
          "line": "राजू बोला — वादा वादा होता है।",
          "emoji": "😊"
          },
          {
          "line": "दोस्त बहुत खुश हुआ।",
          "emoji": "🤗"
          },
          {
          "line": "अब सब राजू पर भरोसा करते थे।",
          "emoji": "💯"
          },
          {
          "line": "वादा करो तो हमेशा निभाओ।",
          "emoji": "⭐"
          }
          ],
            moral: "वादा करो तो निभाओ।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "अनमोल समय",
            rhymeId: "anmol-samay",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक लड़का हमेशा कहता — बाद में करूँगा।",
          "emoji": "😴"
          },
          {
          "line": "पढ़ाई? बाद में। खेल? बाद में।",
          "emoji": "🙄"
          },
          {
          "line": "एक दिन एक बूढ़ा घड़ीसाज़ आया।",
          "emoji": "⏰"
          },
          {
          "line": "उसने लड़के को एक जादुई घड़ी दी।",
          "emoji": "🕰️"
          },
          {
          "line": "जब भी लड़का समय बर्बाद करता, घड़ी तेज़ चलती।",
          "emoji": "⏩"
          },
          {
          "line": "एक दिन में ही लड़का बूढ़ा हो गया!",
          "emoji": "👴"
          },
          {
          "line": "लड़का रोने लगा — मेरा बचपन वापस दो!",
          "emoji": "😭"
          },
          {
          "line": "घड़ीसाज़ ने कहा — यह सपना है, अभी भी समय है।",
          "emoji": "💡"
          },
          {
          "line": "लड़का जागा और उस दिन से समय का सदुपयोग करने लगा।",
          "emoji": "📚"
          },
          {
          "line": "समय अनमोल है, इसे बर्बाद मत करो।",
          "emoji": "⭐"
          }
          ],
            moral: "समय बहुत कीमती है, इसे बर्बाद नहीं करना चाहिए।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryAnmolSamayShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "अनमोल समय",
            rhymeId: "anmol-samay",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक लड़का हमेशा कहता — बाद में करूँगा।",
          "emoji": "😴"
          },
          {
          "line": "पढ़ाई? बाद में। खेल? बाद में।",
          "emoji": "🙄"
          },
          {
          "line": "एक दिन एक बूढ़ा घड़ीसाज़ आया।",
          "emoji": "⏰"
          },
          {
          "line": "उसने लड़के को एक जादुई घड़ी दी।",
          "emoji": "🕰️"
          },
          {
          "line": "जब भी लड़का समय बर्बाद करता, घड़ी तेज़ चलती।",
          "emoji": "⏩"
          },
          {
          "line": "एक दिन में ही लड़का बूढ़ा हो गया!",
          "emoji": "👴"
          },
          {
          "line": "लड़का रोने लगा — मेरा बचपन वापस दो!",
          "emoji": "😭"
          },
          {
          "line": "घड़ीसाज़ ने कहा — यह सपना है, अभी भी समय है।",
          "emoji": "💡"
          },
          {
          "line": "लड़का जागा और उस दिन से समय का सदुपयोग करने लगा।",
          "emoji": "📚"
          },
          {
          "line": "समय अनमोल है, इसे बर्बाद मत करो।",
          "emoji": "⭐"
          }
          ],
            moral: "समय बहुत कीमती है, इसे बर्बाद नहीं करना चाहिए।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "दया का फल",
            rhymeId: "daya-ka-phal",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक राजकुमार जंगल में शिकार पर गया।",
          "emoji": "🤴"
          },
          {
          "line": "उसने एक घायल हिरण का बच्चा देखा।",
          "emoji": "🦌"
          },
          {
          "line": "राजकुमार ने शिकार छोड़कर उसका इलाज किया।",
          "emoji": "🩹"
          },
          {
          "line": "हिरण का बच्चा ठीक होकर जंगल में चला गया।",
          "emoji": "🌿"
          },
          {
          "line": "कुछ दिनों बाद राजकुमार जंगल में खो गया।",
          "emoji": "😰"
          },
          {
          "line": "रात हो गई, राजकुमार डर गया।",
          "emoji": "🌙"
          },
          {
          "line": "वही हिरण का बच्चा आया!",
          "emoji": "🦌"
          },
          {
          "line": "उसने राजकुमार को रास्ता दिखाया।",
          "emoji": "🛤️"
          },
          {
          "line": "राजकुमार सुरक्षित घर पहुँच गया।",
          "emoji": "🏰"
          },
          {
          "line": "दया करो, दया तुम्हारे पास लौटकर आएगी।",
          "emoji": "⭐"
          }
          ],
            moral: "दया करने वाले को हमेशा अच्छा फल मिलता है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryDayaKaPhalShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "दया का फल",
            rhymeId: "daya-ka-phal",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक राजकुमार जंगल में शिकार पर गया।",
          "emoji": "🤴"
          },
          {
          "line": "उसने एक घायल हिरण का बच्चा देखा।",
          "emoji": "🦌"
          },
          {
          "line": "राजकुमार ने शिकार छोड़कर उसका इलाज किया।",
          "emoji": "🩹"
          },
          {
          "line": "हिरण का बच्चा ठीक होकर जंगल में चला गया।",
          "emoji": "🌿"
          },
          {
          "line": "कुछ दिनों बाद राजकुमार जंगल में खो गया।",
          "emoji": "😰"
          },
          {
          "line": "रात हो गई, राजकुमार डर गया।",
          "emoji": "🌙"
          },
          {
          "line": "वही हिरण का बच्चा आया!",
          "emoji": "🦌"
          },
          {
          "line": "उसने राजकुमार को रास्ता दिखाया।",
          "emoji": "🛤️"
          },
          {
          "line": "राजकुमार सुरक्षित घर पहुँच गया।",
          "emoji": "🏰"
          },
          {
          "line": "दया करो, दया तुम्हारे पास लौटकर आएगी।",
          "emoji": "⭐"
          }
          ],
            moral: "दया करने वाले को हमेशा अच्छा फल मिलता है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "तोता और कौआ",
            rhymeId: "tota-aur-kauwa",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक सुंदर तोता अपने रंगों पर इतराता था।",
          "emoji": "🦜"
          },
          {
          "line": "वह कौए से बोला — तू काला और बदसूरत है!",
          "emoji": "😏"
          },
          {
          "line": "कौआ चुपचाप सुनता रहा।",
          "emoji": "🐦‍⬛"
          },
          {
          "line": "एक दिन जंगल में भूकंप आया।",
          "emoji": "🌋"
          },
          {
          "line": "एक बच्चा पेड़ के नीचे फँस गया।",
          "emoji": "😱"
          },
          {
          "line": "तोता डरकर उड़ गया।",
          "emoji": "🦜"
          },
          {
          "line": "कौए ने हिम्मत दिखाई और मदद बुलाई।",
          "emoji": "🐦‍⬛"
          },
          {
          "line": "बच्चा बच गया।",
          "emoji": "😊"
          },
          {
          "line": "सबने कौए की बहादुरी की तारीफ़ की।",
          "emoji": "👏"
          },
          {
          "line": "असली सुंदरता अच्छे गुणों में होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "सुंदरता रंग-रूप में नहीं, अच्छे गुणों में होती है।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StoryTotaAurKauwaShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "तोता और कौआ",
            rhymeId: "tota-aur-kauwa",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक सुंदर तोता अपने रंगों पर इतराता था।",
          "emoji": "🦜"
          },
          {
          "line": "वह कौए से बोला — तू काला और बदसूरत है!",
          "emoji": "😏"
          },
          {
          "line": "कौआ चुपचाप सुनता रहा।",
          "emoji": "🐦‍⬛"
          },
          {
          "line": "एक दिन जंगल में भूकंप आया।",
          "emoji": "🌋"
          },
          {
          "line": "एक बच्चा पेड़ के नीचे फँस गया।",
          "emoji": "😱"
          },
          {
          "line": "तोता डरकर उड़ गया।",
          "emoji": "🦜"
          },
          {
          "line": "कौए ने हिम्मत दिखाई और मदद बुलाई।",
          "emoji": "🐦‍⬛"
          },
          {
          "line": "बच्चा बच गया।",
          "emoji": "😊"
          },
          {
          "line": "सबने कौए की बहादुरी की तारीफ़ की।",
          "emoji": "👏"
          },
          {
          "line": "असली सुंदरता अच्छे गुणों में होती है।",
          "emoji": "⭐"
          }
          ],
            moral: "सुंदरता रंग-रूप में नहीं, अच्छे गुणों में होती है।",
            verseDuration: 6,
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
          durationInFrames={2100}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "सपनों का घर",
            rhymeId: "sapnon-ka-ghar",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी लड़की मिट्टी से घर बनाती थी।",
          "emoji": "👧"
          },
          {
          "line": "सब हँसते थे — मिट्टी का घर असली थोड़ी है!",
          "emoji": "😄"
          },
          {
          "line": "लड़की बोली — एक दिन मैं असली घर बनाऊँगी।",
          "emoji": "💪"
          },
          {
          "line": "वह बड़ी हुई और खूब पढ़ाई की।",
          "emoji": "📚"
          },
          {
          "line": "वह इंजीनियर बनी।",
          "emoji": "👷‍♀️"
          },
          {
          "line": "उसने सचमुच बहुत सुंदर घर बनाए।",
          "emoji": "🏗️"
          },
          {
          "line": "गाँव के लोग हैरान रह गए।",
          "emoji": "😮"
          },
          {
          "line": "उसने गरीबों के लिए भी मुफ़्त घर बनाए।",
          "emoji": "🏠"
          },
          {
          "line": "बचपन का सपना सच हो गया।",
          "emoji": "🌟"
          },
          {
          "line": "सपने देखो और मेहनत से उन्हें सच करो।",
          "emoji": "⭐"
          }
          ],
            moral: "सपने देखो और उन्हें पूरा करने की कोशिश करो।",
            verseDuration: 6,
            introDuration: 5,
            outroDuration: 5,
          }}
        />
        <Composition
          id="StorySapnonKaGharShorts"
          component={ShortsStory}
          durationInFrames={2100}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            title: "सपनों का घर",
            rhymeId: "sapnon-ka-ghar",
            theme: "space" as RhymeTheme,
            verses: [
          {
          "line": "एक छोटी लड़की मिट्टी से घर बनाती थी।",
          "emoji": "👧"
          },
          {
          "line": "सब हँसते थे — मिट्टी का घर असली थोड़ी है!",
          "emoji": "😄"
          },
          {
          "line": "लड़की बोली — एक दिन मैं असली घर बनाऊँगी।",
          "emoji": "💪"
          },
          {
          "line": "वह बड़ी हुई और खूब पढ़ाई की।",
          "emoji": "📚"
          },
          {
          "line": "वह इंजीनियर बनी।",
          "emoji": "👷‍♀️"
          },
          {
          "line": "उसने सचमुच बहुत सुंदर घर बनाए।",
          "emoji": "🏗️"
          },
          {
          "line": "गाँव के लोग हैरान रह गए।",
          "emoji": "😮"
          },
          {
          "line": "उसने गरीबों के लिए भी मुफ़्त घर बनाए।",
          "emoji": "🏠"
          },
          {
          "line": "बचपन का सपना सच हो गया।",
          "emoji": "🌟"
          },
          {
          "line": "सपने देखो और मेहनत से उन्हें सच करो।",
          "emoji": "⭐"
          }
          ],
            moral: "सपने देखो और उन्हें पूरा करने की कोशिश करो।",
            verseDuration: 6,
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
