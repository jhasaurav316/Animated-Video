import "./index.css";
import { Composition, Folder } from "remotion";
import { EnglishStoryTemplate } from "./EnglishStoryTemplate";
import type { EnglishStoryProps, StoryTheme } from "./EnglishStoryTemplate";
import React from "react";

export const EnglishStoryRoot: React.FC = () => {
  return (
    <>
      <Folder name="Story-City-Life">
        <Composition
          id="StoryThreeLittlePigs"
          component={EnglishStoryTemplate}
          durationInFrames={4740}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "The Three Little Pigs",
            storyId: "three-little-pigs",
            theme: "city" as StoryTheme,
            scenes: [
          {
          "line": "Once there were three little pigs.",
          "emoji": "🐷"
          },
          {
          "line": "They left home to build their own houses.",
          "emoji": "🏠"
          },
          {
          "line": "The first pig was lazy.",
          "emoji": "😴"
          },
          {
          "line": "He built his house with straw. Quick and easy!",
          "emoji": "🌾"
          },
          {
          "line": "The second pig built a house of sticks.",
          "emoji": "🪵"
          },
          {
          "line": "It was a bit better, but still not strong.",
          "emoji": "🏚️"
          },
          {
          "line": "The third pig worked very hard.",
          "emoji": "💪"
          },
          {
          "line": "He built his house with strong bricks.",
          "emoji": "🧱"
          },
          {
          "line": "It took a long time, but it was solid.",
          "emoji": "🏰"
          },
          {
          "line": "Then one day, a big bad wolf came!",
          "emoji": "🐺"
          },
          {
          "line": "He went to the straw house first.",
          "emoji": "🌾"
          },
          {
          "line": "Little pig, little pig, let me in!",
          "emoji": "🐺"
          },
          {
          "line": "Not by the hair on my chinny chin chin!",
          "emoji": "🐷"
          },
          {
          "line": "The wolf huffed and puffed and blew it down!",
          "emoji": "💨"
          },
          {
          "line": "The first pig ran to the stick house.",
          "emoji": "🏃"
          },
          {
          "line": "The wolf huffed and puffed again.",
          "emoji": "💨"
          },
          {
          "line": "The stick house fell apart too!",
          "emoji": "💥"
          },
          {
          "line": "Both pigs ran to the brick house.",
          "emoji": "🏃"
          },
          {
          "line": "The wolf huffed and puffed with all his might.",
          "emoji": "🐺"
          },
          {
          "line": "But the brick house did not move at all!",
          "emoji": "🧱"
          },
          {
          "line": "He puffed and puffed until he was exhausted.",
          "emoji": "😵"
          },
          {
          "line": "The wolf gave up and ran away.",
          "emoji": "🏃"
          },
          {
          "line": "The three pigs danced and celebrated!",
          "emoji": "🎉"
          },
          {
          "line": "They all lived happily in the strong brick house.",
          "emoji": "🏠"
          }
          ],
            moral: "Hard work pays off. Take time to do things right and build a strong foundation!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
      </Folder>
      <Folder name="Story-Farm-Animals">
        <Composition
          id="StoryBoyWhoCriedWolf"
          component={EnglishStoryTemplate}
          durationInFrames={4560}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "The Boy Who Cried Wolf",
            storyId: "boy-who-cried-wolf",
            theme: "farm" as StoryTheme,
            scenes: [
          {
          "line": "A shepherd boy watched over his sheep.",
          "emoji": "🧑"
          },
          {
          "line": "Every day he sat on the hill alone.",
          "emoji": "⛰️"
          },
          {
          "line": "He got very bored with nothing to do.",
          "emoji": "😒"
          },
          {
          "line": "One day he had a naughty idea.",
          "emoji": "😈"
          },
          {
          "line": "Wolf! Wolf! he shouted loudly.",
          "emoji": "🐺"
          },
          {
          "line": "The villagers ran up the hill to help.",
          "emoji": "🏃"
          },
          {
          "line": "But there was no wolf at all!",
          "emoji": "😂"
          },
          {
          "line": "The boy laughed at the worried villagers.",
          "emoji": "🤣"
          },
          {
          "line": "The villagers went back, feeling foolish.",
          "emoji": "😤"
          },
          {
          "line": "A few days later, the boy did it again.",
          "emoji": "😈"
          },
          {
          "line": "Wolf! Wolf! A big bad wolf!",
          "emoji": "🐺"
          },
          {
          "line": "The villagers rushed up the hill once more.",
          "emoji": "🏃"
          },
          {
          "line": "Again, there was no wolf anywhere.",
          "emoji": "❌"
          },
          {
          "line": "The boy was rolling on the ground laughing.",
          "emoji": "🤣"
          },
          {
          "line": "The villagers were very angry this time.",
          "emoji": "😡"
          },
          {
          "line": "Then one evening, a real wolf appeared!",
          "emoji": "🐺"
          },
          {
          "line": "The wolf started chasing the sheep.",
          "emoji": "🐑"
          },
          {
          "line": "Wolf! Wolf! Please help me!",
          "emoji": "😱"
          },
          {
          "line": "But nobody came this time.",
          "emoji": "😔"
          },
          {
          "line": "The villagers thought he was lying again.",
          "emoji": "🙄"
          },
          {
          "line": "The wolf scared away all his sheep.",
          "emoji": "🐑"
          },
          {
          "line": "The boy sat alone and cried.",
          "emoji": "😢"
          },
          {
          "line": "He learned that liars are never believed.",
          "emoji": "📖"
          }
          ],
            moral: "Nobody believes a liar, even when they tell the truth. Always be honest!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
      </Folder>
      <Folder name="Story-Forest-Friends">
        <Composition
          id="StoryThirstyCrow"
          component={EnglishStoryTemplate}
          durationInFrames={4380}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "The Thirsty Crow",
            storyId: "thirsty-crow",
            theme: "forest" as StoryTheme,
            scenes: [
          {
          "line": "Once upon a time, a crow was flying over the land.",
          "emoji": "🐦"
          },
          {
          "line": "It was a very hot summer day.",
          "emoji": "☀️"
          },
          {
          "line": "The crow was very, very thirsty.",
          "emoji": "😫"
          },
          {
          "line": "He searched everywhere for water.",
          "emoji": "🔍"
          },
          {
          "line": "The rivers were all dried up.",
          "emoji": "🏜️"
          },
          {
          "line": "The ponds had no water left.",
          "emoji": "💧"
          },
          {
          "line": "Then he saw a pot near a house!",
          "emoji": "🏺"
          },
          {
          "line": "He flew down quickly to drink.",
          "emoji": "🐦"
          },
          {
          "line": "But the water was at the very bottom.",
          "emoji": "😟"
          },
          {
          "line": "His beak could not reach the water.",
          "emoji": "😢"
          },
          {
          "line": "He tried and tried but it was too deep.",
          "emoji": "😤"
          },
          {
          "line": "Then he had a brilliant idea!",
          "emoji": "💡"
          },
          {
          "line": "He saw small stones lying nearby.",
          "emoji": "🪨"
          },
          {
          "line": "He picked up a stone with his beak.",
          "emoji": "🐦"
          },
          {
          "line": "He dropped the stone into the pot.",
          "emoji": "🏺"
          },
          {
          "line": "The water level rose a tiny bit!",
          "emoji": "📈"
          },
          {
          "line": "He dropped another stone, and another.",
          "emoji": "🪨"
          },
          {
          "line": "One by one, the stones went in.",
          "emoji": "✨"
          },
          {
          "line": "Slowly, the water came up higher.",
          "emoji": "💧"
          },
          {
          "line": "At last, the water reached the top!",
          "emoji": "🎉"
          },
          {
          "line": "The happy crow drank the cool water.",
          "emoji": "😊"
          },
          {
          "line": "He was no longer thirsty!",
          "emoji": "🥳"
          }
          ],
            moral: "Where there is a will, there is a way. Hard work and clever thinking can solve any problem!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
        <Composition
          id="StoryLionAndMouse"
          component={EnglishStoryTemplate}
          durationInFrames={4560}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "The Lion and the Mouse",
            storyId: "lion-and-mouse",
            theme: "forest" as StoryTheme,
            scenes: [
          {
          "line": "Deep in the jungle lived a mighty lion.",
          "emoji": "🦁"
          },
          {
          "line": "He was the king of all the animals.",
          "emoji": "👑"
          },
          {
          "line": "One afternoon, the lion was sleeping.",
          "emoji": "😴"
          },
          {
          "line": "A tiny mouse ran across his paw.",
          "emoji": "🐭"
          },
          {
          "line": "The lion woke up with a ROAR!",
          "emoji": "🦁"
          },
          {
          "line": "He caught the little mouse in his paw.",
          "emoji": "😰"
          },
          {
          "line": "Please let me go, the mouse begged.",
          "emoji": "🙏"
          },
          {
          "line": "Someday I will help you too!",
          "emoji": "🐭"
          },
          {
          "line": "The lion laughed. You? Help me?",
          "emoji": "😂"
          },
          {
          "line": "But he was kind and let the mouse go.",
          "emoji": "💛"
          },
          {
          "line": "Many days later, hunters came to the jungle.",
          "emoji": "🏹"
          },
          {
          "line": "They set a big net to catch the lion.",
          "emoji": "🪤"
          },
          {
          "line": "The lion got trapped in the strong net!",
          "emoji": "😱"
          },
          {
          "line": "He roared and roared but could not escape.",
          "emoji": "🦁"
          },
          {
          "line": "The little mouse heard his cries.",
          "emoji": "🐭"
          },
          {
          "line": "He ran to the lion as fast as he could.",
          "emoji": "🏃"
          },
          {
          "line": "Do not worry, I will save you!",
          "emoji": "💪"
          },
          {
          "line": "The mouse began to chew the ropes.",
          "emoji": "🐭"
          },
          {
          "line": "He chewed and chewed with his tiny teeth.",
          "emoji": "✂️"
          },
          {
          "line": "One by one, the ropes broke apart.",
          "emoji": "💥"
          },
          {
          "line": "The lion was free at last!",
          "emoji": "🎉"
          },
          {
          "line": "Thank you, little friend! said the lion.",
          "emoji": "🤗"
          },
          {
          "line": "The lion and mouse became best friends.",
          "emoji": "❤️"
          }
          ],
            moral: "Even the smallest friends can be the greatest helpers. Be kind to everyone!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
        <Composition
          id="StoryGoldilocksThreeBears"
          component={EnglishStoryTemplate}
          durationInFrames={4920}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "Goldilocks and the Three Bears",
            storyId: "goldilocks-three-bears",
            theme: "forest" as StoryTheme,
            scenes: [
          {
          "line": "In a cozy cottage in the woods lived three bears.",
          "emoji": "🐻"
          },
          {
          "line": "There was Papa Bear, Mama Bear, and Baby Bear.",
          "emoji": "🐻"
          },
          {
          "line": "One morning, they went for a walk.",
          "emoji": "🚶"
          },
          {
          "line": "Their porridge was too hot to eat.",
          "emoji": "🥣"
          },
          {
          "line": "A girl named Goldilocks wandered by.",
          "emoji": "👧"
          },
          {
          "line": "She saw the empty cottage and went inside.",
          "emoji": "🏠"
          },
          {
          "line": "She tasted Papa Bear's porridge. Too hot!",
          "emoji": "🔥"
          },
          {
          "line": "She tasted Mama Bear's porridge. Too cold!",
          "emoji": "🥶"
          },
          {
          "line": "She tasted Baby Bear's porridge. Just right!",
          "emoji": "😋"
          },
          {
          "line": "She ate it all up!",
          "emoji": "🥣"
          },
          {
          "line": "Then she tried Papa Bear's chair. Too hard!",
          "emoji": "🪑"
          },
          {
          "line": "She tried Mama Bear's chair. Too soft!",
          "emoji": "🛋️"
          },
          {
          "line": "She sat in Baby Bear's chair. Just right!",
          "emoji": "😊"
          },
          {
          "line": "But the chair broke into pieces!",
          "emoji": "💥"
          },
          {
          "line": "Upstairs, she tried Papa Bear's bed. Too hard!",
          "emoji": "🛏️"
          },
          {
          "line": "Mama Bear's bed was too soft!",
          "emoji": "🛏️"
          },
          {
          "line": "Baby Bear's bed was just right!",
          "emoji": "😴"
          },
          {
          "line": "She fell fast asleep.",
          "emoji": "💤"
          },
          {
          "line": "The three bears came home.",
          "emoji": "🐻"
          },
          {
          "line": "Someone ate my porridge! said Baby Bear.",
          "emoji": "😢"
          },
          {
          "line": "Someone broke my chair! he cried.",
          "emoji": "😭"
          },
          {
          "line": "Someone is sleeping in my bed!",
          "emoji": "😱"
          },
          {
          "line": "Goldilocks woke up and saw the bears!",
          "emoji": "😨"
          },
          {
          "line": "She jumped out the window and ran home!",
          "emoji": "🏃"
          },
          {
          "line": "She never went into someone's house again!",
          "emoji": "📖"
          }
          ],
            moral: "Always respect other people's things. Do not take what is not yours!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
        <Composition
          id="StoryFoxAndGrapes"
          component={EnglishStoryTemplate}
          durationInFrames={4020}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "The Fox and the Grapes",
            storyId: "fox-and-grapes",
            theme: "forest" as StoryTheme,
            scenes: [
          {
          "line": "A hungry fox was walking through the forest.",
          "emoji": "🦊"
          },
          {
          "line": "He had not eaten anything all day.",
          "emoji": "😫"
          },
          {
          "line": "His tummy was growling loudly.",
          "emoji": "🤤"
          },
          {
          "line": "Then he saw a tall grapevine.",
          "emoji": "🍇"
          },
          {
          "line": "Beautiful purple grapes hung from it!",
          "emoji": "🍇"
          },
          {
          "line": "They looked so juicy and delicious!",
          "emoji": "😋"
          },
          {
          "line": "The fox jumped as high as he could.",
          "emoji": "🦊"
          },
          {
          "line": "But the grapes were too high to reach!",
          "emoji": "⬆️"
          },
          {
          "line": "He tried again, jumping even higher.",
          "emoji": "🦘"
          },
          {
          "line": "Still too high! He could not reach them.",
          "emoji": "😤"
          },
          {
          "line": "He took a running start and leaped!",
          "emoji": "🏃"
          },
          {
          "line": "His paws almost touched them, but not quite.",
          "emoji": "😫"
          },
          {
          "line": "Again and again he jumped.",
          "emoji": "🦊"
          },
          {
          "line": "He was getting tired and frustrated.",
          "emoji": "😡"
          },
          {
          "line": "Finally, the fox gave up.",
          "emoji": "🤷"
          },
          {
          "line": "He walked away with his nose in the air.",
          "emoji": "😤"
          },
          {
          "line": "Those grapes are probably sour anyway!",
          "emoji": "🍇"
          },
          {
          "line": "I did not want them in the first place!",
          "emoji": "😏"
          },
          {
          "line": "A bird sitting on the vine giggled.",
          "emoji": "🐦"
          },
          {
          "line": "She knew the grapes were perfectly sweet!",
          "emoji": "😊"
          }
          ],
            moral: "It is easy to hate what you cannot have. Accept failures gracefully!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
        <Composition
          id="StoryLittleRedRidingHood"
          component={EnglishStoryTemplate}
          durationInFrames={4740}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "Little Red Riding Hood",
            storyId: "little-red-riding-hood",
            theme: "forest" as StoryTheme,
            scenes: [
          {
          "line": "A sweet girl wore a red riding hood.",
          "emoji": "👧"
          },
          {
          "line": "Everyone called her Little Red Riding Hood.",
          "emoji": "🔴"
          },
          {
          "line": "One day, her mother gave her a basket.",
          "emoji": "🧺"
          },
          {
          "line": "Take this to Grandma. She is not feeling well.",
          "emoji": "👵"
          },
          {
          "line": "And do not talk to strangers!",
          "emoji": "☝️"
          },
          {
          "line": "Red Riding Hood walked through the forest.",
          "emoji": "🌲"
          },
          {
          "line": "She picked pretty flowers along the way.",
          "emoji": "🌸"
          },
          {
          "line": "A big wolf saw her and smiled slyly.",
          "emoji": "🐺"
          },
          {
          "line": "Where are you going, little girl?",
          "emoji": "🐺"
          },
          {
          "line": "To my Grandma's house, she said.",
          "emoji": "👧"
          },
          {
          "line": "The wolf ran ahead to Grandma's house.",
          "emoji": "🏃"
          },
          {
          "line": "He tricked Grandma and hid in her bed.",
          "emoji": "🛏️"
          },
          {
          "line": "Red Riding Hood arrived at the cottage.",
          "emoji": "🏠"
          },
          {
          "line": "Grandma, what big eyes you have!",
          "emoji": "👀"
          },
          {
          "line": "All the better to see you, my dear!",
          "emoji": "🐺"
          },
          {
          "line": "Grandma, what big ears you have!",
          "emoji": "👂"
          },
          {
          "line": "All the better to hear you, my dear!",
          "emoji": "🐺"
          },
          {
          "line": "Grandma, what big teeth you have!",
          "emoji": "😬"
          },
          {
          "line": "All the better to... but just then!",
          "emoji": "⚡"
          },
          {
          "line": "A brave woodcutter heard the noise!",
          "emoji": "🪓"
          },
          {
          "line": "He rushed in and chased the wolf away!",
          "emoji": "🏃"
          },
          {
          "line": "Grandma was safe and sound!",
          "emoji": "👵"
          },
          {
          "line": "Red Riding Hood hugged her Grandma.",
          "emoji": "🤗"
          },
          {
          "line": "She promised to always listen to her mother.",
          "emoji": "❤️"
          }
          ],
            moral: "Listen to your parents and do not talk to strangers. Stay safe!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
      </Folder>
      <Folder name="Story-Garden-Nature">
        <Composition
          id="StoryTortoiseAndHare"
          component={EnglishStoryTemplate}
          durationInFrames={4920}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "The Tortoise and the Hare",
            storyId: "tortoise-and-hare",
            theme: "garden" as StoryTheme,
            scenes: [
          {
          "line": "In a green meadow lived a hare and a tortoise.",
          "emoji": "🐇"
          },
          {
          "line": "The hare was the fastest animal around.",
          "emoji": "💨"
          },
          {
          "line": "He loved to boast about his speed.",
          "emoji": "😏"
          },
          {
          "line": "One day he laughed at the slow tortoise.",
          "emoji": "🐢"
          },
          {
          "line": "You are so slow! You can never beat me!",
          "emoji": "😂"
          },
          {
          "line": "The tortoise smiled and said, Let us race!",
          "emoji": "🐢"
          },
          {
          "line": "All the animals gathered to watch.",
          "emoji": "🦊"
          },
          {
          "line": "Ready, set, GO! The race began!",
          "emoji": "🏁"
          },
          {
          "line": "The hare zoomed ahead in seconds.",
          "emoji": "🐇"
          },
          {
          "line": "The tortoise walked slowly but steadily.",
          "emoji": "🐢"
          },
          {
          "line": "The hare was so far ahead, he got bored.",
          "emoji": "🥱"
          },
          {
          "line": "I have plenty of time, let me rest here.",
          "emoji": "😴"
          },
          {
          "line": "The hare fell fast asleep under a tree.",
          "emoji": "🌳"
          },
          {
          "line": "Meanwhile, the tortoise kept walking.",
          "emoji": "🐢"
          },
          {
          "line": "Step by step, he moved forward.",
          "emoji": "👣"
          },
          {
          "line": "He passed the sleeping hare quietly.",
          "emoji": "🤫"
          },
          {
          "line": "The hare woke up and stretched.",
          "emoji": "😳"
          },
          {
          "line": "Where is the tortoise? he wondered.",
          "emoji": "🤔"
          },
          {
          "line": "He looked ahead and saw the finish line!",
          "emoji": "👀"
          },
          {
          "line": "The tortoise was almost there!",
          "emoji": "🐢"
          },
          {
          "line": "The hare ran as fast as he could!",
          "emoji": "🐇"
          },
          {
          "line": "But it was too late!",
          "emoji": "⏰"
          },
          {
          "line": "The tortoise crossed the finish line first!",
          "emoji": "🏆"
          },
          {
          "line": "All the animals cheered for the tortoise!",
          "emoji": "🎉"
          },
          {
          "line": "The hare learned to never be overconfident.",
          "emoji": "😊"
          }
          ],
            moral: "Slow and steady wins the race. Never underestimate others!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
        <Composition
          id="StoryAntAndGrasshopper"
          component={EnglishStoryTemplate}
          durationInFrames={4380}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "The Ant and the Grasshopper",
            storyId: "ant-and-grasshopper",
            theme: "garden" as StoryTheme,
            scenes: [
          {
          "line": "In a beautiful meadow lived an ant and a grasshopper.",
          "emoji": "🐜"
          },
          {
          "line": "It was a warm and sunny summer.",
          "emoji": "☀️"
          },
          {
          "line": "The ant worked hard every single day.",
          "emoji": "🐜"
          },
          {
          "line": "She carried food to store for winter.",
          "emoji": "🍎"
          },
          {
          "line": "Grain by grain, she filled her home.",
          "emoji": "🌾"
          },
          {
          "line": "The grasshopper just sang and danced.",
          "emoji": "🦗"
          },
          {
          "line": "Why do you work so hard? he asked.",
          "emoji": "😎"
          },
          {
          "line": "Come sing and play with me instead!",
          "emoji": "🎵"
          },
          {
          "line": "I must save food for winter, said the ant.",
          "emoji": "🐜"
          },
          {
          "line": "You should do the same!",
          "emoji": "☝️"
          },
          {
          "line": "The grasshopper laughed. Winter is far away!",
          "emoji": "😂"
          },
          {
          "line": "Summer passed, and autumn came.",
          "emoji": "🍂"
          },
          {
          "line": "The leaves turned orange and fell.",
          "emoji": "🍁"
          },
          {
          "line": "Then cold winter arrived with snow.",
          "emoji": "❄️"
          },
          {
          "line": "The ant was warm in her cozy home.",
          "emoji": "🏠"
          },
          {
          "line": "She had plenty of food to eat.",
          "emoji": "🍽️"
          },
          {
          "line": "The grasshopper was cold and hungry.",
          "emoji": "🥶"
          },
          {
          "line": "He had no food and no shelter.",
          "emoji": "😢"
          },
          {
          "line": "Please help me, dear ant! he begged.",
          "emoji": "🙏"
          },
          {
          "line": "The kind ant shared her food with him.",
          "emoji": "❤️"
          },
          {
          "line": "The grasshopper thanked her from his heart.",
          "emoji": "🤗"
          },
          {
          "line": "He promised to work hard next summer.",
          "emoji": "💪"
          }
          ],
            moral: "Work today for a better tomorrow. Prepare for hard times while you can!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
      </Folder>
      <Folder name="Story-Ocean-Adventures">
        <Composition
          id="StoryUglyDuckling"
          component={EnglishStoryTemplate}
          durationInFrames={4560}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            title: "The Ugly Duckling",
            storyId: "ugly-duckling",
            theme: "ocean" as StoryTheme,
            scenes: [
          {
          "line": "On a sunny farm, a mother duck sat on her eggs.",
          "emoji": "🦆"
          },
          {
          "line": "One by one, cute little ducklings hatched.",
          "emoji": "🐣"
          },
          {
          "line": "But the last egg was much bigger.",
          "emoji": "🥚"
          },
          {
          "line": "Out came a duckling who looked different.",
          "emoji": "🐥"
          },
          {
          "line": "He was bigger and grey, not yellow.",
          "emoji": "😟"
          },
          {
          "line": "The other ducklings made fun of him.",
          "emoji": "😢"
          },
          {
          "line": "You are so ugly! they teased.",
          "emoji": "😭"
          },
          {
          "line": "Even the farm animals were unkind.",
          "emoji": "😔"
          },
          {
          "line": "The sad duckling ran away from home.",
          "emoji": "🏃"
          },
          {
          "line": "He wandered alone through the cold winter.",
          "emoji": "❄️"
          },
          {
          "line": "He was lonely and very sad.",
          "emoji": "😢"
          },
          {
          "line": "Nobody wanted to be his friend.",
          "emoji": "💔"
          },
          {
          "line": "Days turned into weeks, weeks into months.",
          "emoji": "📅"
          },
          {
          "line": "Spring arrived with warm sunshine.",
          "emoji": "🌸"
          },
          {
          "line": "The duckling saw beautiful swans on a lake.",
          "emoji": "🦢"
          },
          {
          "line": "He wished he could be as beautiful as them.",
          "emoji": "✨"
          },
          {
          "line": "He looked down at his reflection in the water.",
          "emoji": "💧"
          },
          {
          "line": "He could not believe his eyes!",
          "emoji": "😲"
          },
          {
          "line": "He had grown into a beautiful white swan!",
          "emoji": "🦢"
          },
          {
          "line": "The other swans welcomed him happily.",
          "emoji": "🤗"
          },
          {
          "line": "Children on the shore said, Look at that beautiful swan!",
          "emoji": "👧"
          },
          {
          "line": "The once ugly duckling was the most beautiful of all!",
          "emoji": "🦢"
          },
          {
          "line": "He finally found where he truly belonged.",
          "emoji": "❤️"
          }
          ],
            moral: "Never judge anyone by how they look. Everyone is beautiful in their own way!",
            sceneDuration: 6,
            introDuration: 6,
            outroDuration: 8,
          }}
        />
      </Folder>
    </>
  );
};
