# 🍳 FoodTales — Interactive Recipe Application

A clean, responsive meal recipe application built with vanilla **HTML5, CSS3, and JavaScript (ES6+)**. Features step-by-step cooking guides, dynamic portion scaling, kitchen timers, customizable accent themes, interactive audio cues, and a "What's in Your Fridge?" pantry ingredient matcher.

---

## 📌 Tech Stack & Web Technologies

- **Frontend:** HTML5, Modern CSS3 (Custom Properties & Responsive Design), Vanilla JavaScript (ES6+)
- **Recipe Data:** [TheMealDB REST API](https://www.themealdb.com/)
- **Browser APIs Used:**
  - **Web Audio API (`AudioContext`):** Gentle audio cues for buttons, bookmarks, and timer alarms.
  - **Web Speech API (`SpeechSynthesis`):** Hands-free voice reader for cooking instructions.
  - **HTML5 Canvas:** Interactive celebratory confetti when completing a dish.
  - **HTML5 `<dialog>` API:** Accessible modal popups with focus management.
  - **Web Storage API (`localStorage`):** Remembers your saved recipes, theme preference, and personal recipe notes.

---

## ✨ Key Features

1. **🎨 Theme & Accent Customization:**
   - 4 Dynamic Palettes: **Flame Orange** (Default warm culinary accent), **Golden Amber**, **Berry Rose**, and **Fresh Mint**.
   - Default **Light Theme** (Crisp clean white background with slate typography) + instant **Dark Mode** toggle.
   - Clean modern typography pairing: **Outfit** (modern geometric headings) + **Inter** (crisp, highly-legible body text).

2. **🔊 Synthesized Audio Micro-Interactions:**
   - Native audio pop clicks on interactive elements, chime when bookmarked, success fanfare on recipe completion, and digital kitchen timer beeps.
   - 1-click sound mute/unmute toggle in the navbar.

3. **🧊 "What's in Your Fridge?" / Pantry Matcher:**
   - Interactive clickable ingredient tags (Chicken, Paneer, Garlic, Tomato, Cheese, Eggs, Rice, Pasta, etc.).
   - Matches available ingredients in your kitchen directly against the recipe database.

4. **🧑‍🍳 Fullscreen Kitchen Focus Mode:**
   - Large-font, high-contrast distraction-free step-by-step cooking interface.
   - **Voice Narration ("Read Step Aloud"):** Reads instructions clearly so you don't have to touch your screen with messy hands.
   - Keyboard arrow navigation (`ArrowLeft` / `ArrowRight`) and step completion progress bar.

5. **⚖️ Dynamic Portion & Nutrition Calculator:**
   - Real-time portions stepper (`- / +`) that automatically recalculates and scales ingredient measurements.
   - Live estimated nutritional breakdown (Calories, Protein, Carbs, Fats).

6. **⏱️ Interactive Kitchen Timer & Stopwatch:**
   - Built-in timer with quick presets (`+1m`, `+5m`, `+10m`), pause/resume controls, and synthesized finish alarm.

7. **📝 Personal Kitchen Notes Autosave:**
   - Each recipe includes a private notes scratchpad automatically persisted in browser storage.

8. **🎊 Canvas Confetti Celebration:**
   - Confetti particle explosion when saving favorites or completing all recipe steps.

---

## 🚀 Getting Started

No build tools, Node, or npm packages required. Runs natively in any modern web browser.

### Open Directly
Simply open `index.html` in your favorite web browser (Chrome, Edge, Firefox, Safari, Brave).

---

## 📂 Project Structure

```
meal-recipe-app/
├── index.html        # Semantic HTML5, aurora glow orbs, dialog modal, cook mode overlay
├── styles.css        # Multi-palette theme architecture, glassmorphism, responsive queries
├── app.js            # Audio synthesizer, confetti engine, speech reader, pantry matcher, API
├── .gitignore        # Clean git exclusions
└── README.md         # Comprehensive project documentation
```
