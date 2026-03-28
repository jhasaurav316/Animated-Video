# Bulk YouTube Shorts Plan - 450 Videos in 9 Phases (India Edition)

## Goal
- Upload **10 videos/day** for **45 days (1.5 months)** = **450 videos total**
- Format: **1080x1920 (YouTube Shorts / Instagram Reels)**
- Style: Same as ABC Alphabet Fruits video (700px letter, 400px emoji, vibrant colors, spring animations)
- Target Audience: **Indian kids & families**
- Render on: **Windows 11, i9 10th gen, RTX 4090, 32GB RAM**
- Quality: **High (h264, 30fps, full concurrency)**
- Audio: **Yes — edge-tts (en-IN-NeerjaNeural) auto-generated per phase**
- Repo: **One repo, built phase-wise** (avoids Claude context issues)

---

## India-Focused Content Guidelines

### Content Rules
- All items should be **familiar to Indian audience**
- Animals: Indian animals first (Tiger, Peacock, Cobra, Elephant, Cow, Monkey, Parrot, etc.)
- Birds: Indian birds (Peacock, Kingfisher, Bulbul, Myna, Sparrow, Crow, Pigeon, etc.)
- Fruits: Indian fruits (Mango, Guava, Jamun, Litchi, Amla, Chiku, Papaya, etc.)
- Vegetables: Indian vegetables (Bhindi, Lauki, Karela, Tinda, Arbi, Parwal, etc.)
- Flowers: Indian flowers (Lotus, Marigold, Jasmine, Hibiscus, Champa, etc.)
- Food: Indian food (Samosa, Dosa, Idli, Roti, Biryani, Ladoo, Jalebi, etc.)
- Sports: Cricket, Kabaddi, Kho-Kho, Badminton, Hockey, etc.
- Instruments: Sitar, Tabla, Veena, Harmonium, Dholak, Shehnai, etc.
- Countries: India first, then neighboring & popular countries
- Use English names but Indian-familiar items

### Visual Enhancements
- **Letter size: 700px** (giant, fills screen)
- **Emoji size: 450px** (BIGGER than before — was 400px)
- **Word size: 130px** (bigger — was 120px)
- **"A for" label: 100px** (bigger — was 90px)
- **Side floating emojis: 10 per scene, 90-120px** (more & bigger)

### Audio (Auto-generated)
- Voice: **en-IN-NeerjaNeural** (Indian English female, child-friendly)
- Rate: **-10%** (slightly slow for kids)
- Pitch: **+5Hz** (cheerful)
- BGM: Auto-generated music-box style
- Each phase includes `generate-audio.ps1` script
- Pipeline: **Generate Audio → Register → Render**

---

## 15 Categories × 30 Videos Each = 450 Videos

| # | Category | Folder | Videos | Items/Video |
|---|----------|--------|--------|-------------|
| 1 | Animals | `animal-names/` | 30 | 30 |
| 2 | Birds | `bird-names/` | 30 | 30 |
| 3 | Fruits | `fruit-names/` | 30 | 30 |
| 4 | Vegetables | `vegetable-names/` | 30 | 30 |
| 5 | Flowers | `flower-names/` | 30 | 30 |
| 6 | Sea Creatures | `sea-creature-names/` | 30 | 30 |
| 7 | Insects & Bugs | `insect-names/` | 30 | 30 |
| 8 | Dinosaurs | `dinosaur-names/` | 30 | 30 |
| 9 | Musical Instruments | `instrument-names/` | 30 | 30 |
| 10 | Vehicles & Transport | `vehicle-names/` | 30 | 30 |
| 11 | Countries & Flags | `country-names/` | 30 | 30 |
| 12 | Sports | `sport-names/` | 30 | 30 |
| 13 | Food & Snacks | `food-names/` | 30 | 30 |
| 14 | Colors & Shapes | `color-shape-names/` | 30 | 30 |
| 15 | Space & Planets | `space-names/` | 30 | 30 |

---

## 9 Phases (50 videos each) — Built & Rendered Separately

### Phase 1 — Animals (30) + Birds (20) = 50 videos
| Folder | Videos | Themes |
|--------|--------|--------|
| `animal-names/` | 30 | Safari, Jungle, Arctic, Desert, Forest, Australian, Asian, African, Nocturnal, Baby Animals |
| `bird-names/` | 20 | Tropical, Garden, Birds of Prey, Water Birds, Colorful, Forest, Singing |

**Deliverables:** catalog.json + lyrics.txt for each folder, register script, `render-phase1.ps1`
**Render time:** ~2-3 hours

### Phase 2 — Birds (10) + Fruits (30) + Vegetables (10) = 50 videos
| Folder | Videos | Themes |
|--------|--------|--------|
| `bird-names/` | 10 | Exotic, Night, Flying Champions |
| `fruit-names/` | 30 | Tropical, Berries, Citrus, Exotic, Garden, Summer, Winter, Asian, Dried, Super |
| `vegetable-names/` | 10 | Green, Root, Leafy Greens |

### Phase 3 — Vegetables (20) + Flowers (30) = 50 videos
| Folder | Videos |
|--------|--------|
| `vegetable-names/` | 20 |
| `flower-names/` | 30 |

### Phase 4 — Sea Creatures (30) + Insects (20) = 50 videos
| Folder | Videos |
|--------|--------|
| `sea-creature-names/` | 30 |
| `insect-names/` | 20 |

### Phase 5 — Insects (10) + Dinosaurs (30) + Instruments (10) = 50 videos
| Folder | Videos |
|--------|--------|
| `insect-names/` | 10 |
| `dinosaur-names/` | 30 |
| `instrument-names/` | 10 |

### Phase 6 — Instruments (20) + Vehicles (30) = 50 videos
| Folder | Videos |
|--------|--------|
| `instrument-names/` | 20 |
| `vehicle-names/` | 30 |

### Phase 7 — Countries (30) + Sports (20) = 50 videos
| Folder | Videos |
|--------|--------|
| `country-names/` | 30 |
| `sport-names/` | 20 |

### Phase 8 — Sports (10) + Food (30) + Colors (10) = 50 videos
| Folder | Videos |
|--------|--------|
| `sport-names/` | 10 |
| `food-names/` | 30 |
| `color-shape-names/` | 10 |

### Phase 9 — Colors (20) + Space (30) = 50 videos
| Folder | Videos |
|--------|--------|
| `color-shape-names/` | 20 |
| `space-names/` | 30 |

---

## Implementation Strategy (Phase-wise Repo Build)

Each phase = **one Claude session**. This prevents context overflow.

```
Phase 1 session:
  → Create repo with base setup (template, package.json, config)
  → Create animal-names/ (30 videos) + bird-names/ (20 videos)
  → Create render-phase1.ps1
  → Push to GitHub

Phase 2 session:
  → Pull repo
  → Add bird-names/ remaining (10 videos) + fruit-names/ (30) + vegetable-names/ (10)
  → Create render-phase2.ps1
  → Push

Phase 3-9 sessions:
  → Same pattern: pull, add content, push
```

### On GPU Machine (per phase):
```powershell
git pull
pip install edge-tts                           # first time only
.\generate-audio-phaseN.ps1                    # generate audio (edge-tts)
node {folder}/register-compositions.js         # for each new folder
.\render-phaseN.ps1                            # render 50 videos with audio
```

### Pipeline per phase:
```
1. Claude creates: catalog + lyrics + register + render + audio scripts
2. Push to GitHub
3. GPU machine: git pull
4. GPU machine: generate-audio-phaseN.ps1 (creates public/{id}-audio/ files)
5. GPU machine: register compositions
6. GPU machine: render-phaseN.ps1 (renders with audio)
7. Upload 10/day to YouTube
```

---

## Video Specifications

| Setting | Value |
|---------|-------|
| Resolution | 1080 × 1920 (portrait) |
| FPS | 30 |
| Codec | h264 |
| Duration | ~96 sec (30 items × 3s + 3s intro + 3s outro) |
| Letter size | 700px (giant) |
| Emoji size | **450px** (bigger for mobile) |
| Word size | **130px** |
| "X for" label | **100px** |
| Side emojis | **10 per scene, 90-120px** |
| Template | AlphabetShortsTemplate.tsx (ABC Fruits reference) |
| Audio Voice | **en-IN-NeerjaNeural** (Indian English) |
| Audio BGM | Auto-generated music-box |
| Content | **India-focused** (Indian animals, fruits, etc.) |

---

## Folder Structure

```
youtube-shorts-bulk/
├── package.json
├── remotion.config.ts
├── tsconfig.json
├── src/
│   ├── index.ts                      # Combined root
│   ├── AlphabetShortsTemplate.tsx     # THE template (from ABC Fruits)
│   ├── AnimalRoot.tsx                 # Auto-generated (Phase 1)
│   ├── BirdRoot.tsx                   # Auto-generated (Phase 1+2)
│   ├── FruitRoot.tsx                  # Auto-generated (Phase 2)
│   └── ... (one Root per category)
├── animal-names/                      # Phase 1
│   ├── catalog.json
│   ├── lyrics.txt
│   └── register-compositions.js
├── bird-names/                        # Phase 1+2
│   ├── catalog.json
│   ├── lyrics.txt
│   └── register-compositions.js
├── ... (15 category folders total)
├── render-phase1.ps1                  # Renders 50 videos
├── render-phase2.ps1
├── ...
├── render-phase9.ps1
└── out/                               # Output (gitignored)
    ├── animal-names/*.mp4
    ├── bird-names/*.mp4
    └── ...
```

---

## Render Estimates (RTX 4090 + i9)

| Phase | Videos | Est. Time | Cumulative |
|-------|--------|-----------|------------|
| Phase 1 | 50 | ~2.5 hrs | 2.5 hrs |
| Phase 2 | 50 | ~2.5 hrs | 5 hrs |
| Phase 3 | 50 | ~2.5 hrs | 7.5 hrs |
| Phase 4 | 50 | ~2.5 hrs | 10 hrs |
| Phase 5 | 50 | ~2.5 hrs | 12.5 hrs |
| Phase 6 | 50 | ~2.5 hrs | 15 hrs |
| Phase 7 | 50 | ~2.5 hrs | 17.5 hrs |
| Phase 8 | 50 | ~2.5 hrs | 20 hrs |
| Phase 9 | 50 | ~2.5 hrs | 22.5 hrs |
| **Total** | **450** | **~22.5 hrs** | |

---

## Upload Schedule

| Days | Phase | Category | Videos/Day |
|------|-------|----------|------------|
| Day 1-3 | Phase 1 | Animals | 10/day |
| Day 4-5 | Phase 1 | Birds | 10/day |
| Day 6 | Phase 2 | Birds (remaining) | 10/day |
| Day 7-9 | Phase 2 | Fruits | 10/day |
| Day 10 | Phase 2 | Vegetables | 10/day |
| Day 11-12 | Phase 3 | Vegetables | 10/day |
| Day 13-15 | Phase 3 | Flowers | 10/day |
| Day 16-18 | Phase 4 | Sea Creatures | 10/day |
| Day 19-20 | Phase 4 | Insects | 10/day |
| Day 21 | Phase 5 | Insects | 10/day |
| Day 22-24 | Phase 5 | Dinosaurs | 10/day |
| Day 25 | Phase 5 | Instruments | 10/day |
| Day 26-27 | Phase 6 | Instruments | 10/day |
| Day 28-30 | Phase 6 | Vehicles | 10/day |
| Day 31-33 | Phase 7 | Countries | 10/day |
| Day 34-35 | Phase 7 | Sports | 10/day |
| Day 36 | Phase 8 | Sports | 10/day |
| Day 37-39 | Phase 8 | Food | 10/day |
| Day 40 | Phase 8 | Colors | 10/day |
| Day 41-42 | Phase 9 | Colors | 10/day |
| Day 43-45 | Phase 9 | Space | 10/day |

---

## Approval Checklist

- [ ] 15 categories confirmed?
- [ ] 30 videos per category (450 total) OK?
- [ ] 30 items per video OK?
- [ ] 9 phases (50 each), one Claude session per phase OK?
- [ ] Video style (ABC Fruits reference, BIGGER characters) OK?
- [ ] India-focused content OK?
- [ ] Audio included (edge-tts Indian English voice) OK?
- [ ] Ready to start Phase 1 (Animals 30 + Birds 20)?
