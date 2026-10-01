/**
 * FoodTales — Recipe Application
 * Interactive recipes, portion calculator, pantry matcher, and step-by-step cooking mode.
 */

// --- Pre-packaged Fallback Recipes (100% offline & instant reliability) ---
const FALLBACK_RECIPES = [
  {
    idMeal: "52857",
    strMeal: "Paneer Butter Masala",
    strCategory: "Vegetarian",
    strArea: "Indian",
    prepMinutes: 25,
    strNutrition: { calories: 380, protein: "18g", carbs: "14g", fat: "28g" },
    strMealThumb: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
    strYoutube: "https://www.youtube.com/watch?v=kY31Wn6mYxM",
    strSource: "",
    strInstructions: "Heat 2 tablespoons of butter and oil in a large pan over medium heat.\r\nAdd cumin seeds, whole cloves, and bay leaf until fragrant. Add finely chopped onions and sauté until golden brown.\r\nAdd ginger-garlic paste and cook for 1 minute until raw aroma dissipates.\r\nPour in tomato puree, red chili powder, turmeric, coriander powder, and garam masala. Cook until oil separates from the masala.\r\nStir in cashew paste and fresh heavy cream, simmering gently to create a velvety, rich curry sauce.\r\nAdd cubed fresh paneer and crushed kasuri methi (fenugreek leaves). Simmer for 4-5 minutes so paneer absorbs the aromatic flavors.\r\nGarnish with fresh cilantro and a swirl of cream. Serve hot with garlic naan or basmati rice.",
    strIngredient1: "Paneer", strMeasure1: "300g",
    strIngredient2: "Butter", strMeasure2: "3 tbsp",
    strIngredient3: "Tomato Puree", strMeasure3: "1.5 cups",
    strIngredient4: "Onion", strMeasure4: "1 large",
    strIngredient5: "Heavy Cream", strMeasure5: "1/4 cup",
    strIngredient6: "Ginger-Garlic Paste", strMeasure6: "1 tbsp",
    strIngredient7: "Garam Masala", strMeasure7: "1 tsp",
    strIngredient8: "Kasuri Methi", strMeasure8: "1 tsp"
  },
  {
    idMeal: "52772",
    strMeal: "Teriyaki Chicken Casserole",
    strCategory: "Chicken",
    strArea: "Japanese",
    prepMinutes: 35,
    strNutrition: { calories: 420, protein: "34g", carbs: "38g", fat: "12g" },
    strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_g",
    strSource: "https://casserolecrissy.com/teriyaki-chicken-casserole/",
    strInstructions: "Preheat oven to 350°F (175°C). In a small bowl, combine cornstarch and water; stir until smooth.\r\nIn a saucepan over medium heat, combine soy sauce, brown sugar, ginger, and garlic powder. Add cornstarch slurry and bring to a simmer until thickened.\r\nPlace chicken breasts in a 9x13 inch baking dish. Pour teriyaki sauce evenly over chicken.\r\nBake in preheated oven for 30 minutes until chicken reaches internal temp of 165°F.\r\nSprinkle sesame seeds and sliced green onions before serving with steamed jasmine rice.",
    strIngredient1: "Chicken Breast", strMeasure1: "400g",
    strIngredient2: "Soy Sauce", strMeasure2: "1/2 cup",
    strIngredient3: "Brown Sugar", strMeasure3: "1/4 cup",
    strIngredient4: "Garlic", strMeasure4: "2 cloves",
    strIngredient5: "Ginger", strMeasure5: "1 tsp",
    strIngredient6: "Cornstarch", strMeasure6: "1 tbsp",
    strIngredient7: "Water", strMeasure7: "2 tbsp",
    strIngredient8: "Green Onions", strMeasure8: "2 chopped",
    strIngredient9: "Sesame Seeds", strMeasure9: "1 tsp"
  },
  {
    idMeal: "52777",
    strMeal: "Mediterranean Pasta Salad",
    strCategory: "Pasta",
    strArea: "Italian",
    prepMinutes: 18,
    strNutrition: { calories: 340, protein: "11g", carbs: "48g", fat: "14g" },
    strMealThumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    strYoutube: "https://www.youtube.com/watch?v=e52IL8zYmaE",
    strSource: "",
    strInstructions: "Bring a large pot of lightly salted water to a boil. Cook rotini pasta according to package directions, rinse under cold water, and drain thoroughly.\r\nIn a large salad bowl, combine cooked pasta, cherry tomatoes, kalamata olives, diced cucumbers, red onion, and crumbled feta cheese.\r\nWhisk olive oil, red wine vinegar, minced garlic, oregano, salt, and pepper in a small mason jar until emulsified.\r\nPour dressing over pasta salad and toss gently to coat evenly.\r\nRefrigerate for at least 1 hour before serving to let flavors meld together.",
    strIngredient1: "Rotini Pasta", strMeasure1: "250g",
    strIngredient2: "Cherry Tomatoes", strMeasure2: "1 cup",
    strIngredient3: "Cucumber", strMeasure3: "1 diced",
    strIngredient4: "Kalamata Olives", strMeasure4: "1/2 cup",
    strIngredient5: "Feta Cheese", strMeasure5: "150g",
    strIngredient6: "Olive Oil", strMeasure6: "1/3 cup",
    strIngredient7: "Red Wine Vinegar", strMeasure7: "3 tbsp",
    strIngredient8: "Dried Oregano", strMeasure8: "1 tsp"
  },
  {
    idMeal: "52959",
    strMeal: "Baked Salmon with Lemon Herb Butter",
    strCategory: "Seafood",
    strArea: "American",
    prepMinutes: 20,
    strNutrition: { calories: 390, protein: "36g", carbs: "2g", fat: "26g" },
    strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    strYoutube: "https://www.youtube.com/watch?v=4p_p6qB89Z0",
    strSource: "",
    strInstructions: "Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.\r\nPat salmon fillets dry with paper towels and season generously with kosher salt, black pepper, and garlic powder.\r\nIn a small bowl, melt unsalted butter and mix with fresh lemon juice, lemon zest, and chopped fresh dill and parsley.\r\nBrush garlic herb butter generously over each fillet.\r\nBake for 12 to 15 minutes, or until the salmon is flaky and opaque in the center.\r\nGarnish with fresh lemon slices and serve warm.",
    strIngredient1: "Salmon Fillets", strMeasure1: "4 portions",
    strIngredient2: "Butter", strMeasure2: "4 tbsp",
    strIngredient3: "Fresh Lemon Juice", strMeasure3: "2 tbsp",
    strIngredient4: "Fresh Dill", strMeasure4: "2 tbsp",
    strIngredient5: "Garlic", strMeasure5: "3 cloves",
    strIngredient6: "Black Pepper", strMeasure6: "1/2 tsp"
  },
  {
    idMeal: "52855",
    strMeal: "Classic Banana Pancakes",
    strCategory: "Breakfast",
    strArea: "American",
    prepMinutes: 15,
    strNutrition: { calories: 290, protein: "8g", carbs: "52g", fat: "6g" },
    strMealThumb: "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
    strYoutube: "https://www.youtube.com/watch?v=kSKpeP_n50U",
    strSource: "",
    strInstructions: "In a medium bowl, peel and thoroughly mash ripe bananas with a fork until smooth.\r\nBeat in eggs, vanilla extract, and milk until well blended.\r\nIn another bowl, whisk together flour, baking powder, and a pinch of cinnamon.\r\nFold dry ingredients into the wet mixture until just combined. Do not overmix.\r\nHeat a lightly greased non-stick skillet over medium-low heat. Pour 1/4 cup batter for each pancake.\r\nCook until bubbles appear on the surface, flip, and cook 1-2 minutes on the other side until golden.\r\nServe stacked with maple syrup and fresh banana slices.",
    strIngredient1: "Ripe Bananas", strMeasure1: "2 medium",
    strIngredient2: "Eggs", strMeasure2: "2 large",
    strIngredient3: "All-purpose Flour", strMeasure3: "1 cup",
    strIngredient4: "Milk", strMeasure4: "1/2 cup",
    strIngredient5: "Baking Powder", strMeasure5: "1 tsp",
    strIngredient6: "Cinnamon", strMeasure6: "1/2 tsp",
    strIngredient7: "Maple Syrup", strMeasure7: "To serve"
  },
  {
    idMeal: "52768",
    strMeal: "Apple Frangipane Tart",
    strCategory: "Dessert",
    strArea: "French",
    prepMinutes: 45,
    strNutrition: { calories: 410, protein: "7g", carbs: "46g", fat: "22g" },
    strMealThumb: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    strYoutube: "https://www.youtube.com/watch?v=xyQn_1v3n_0",
    strSource: "",
    strInstructions: "Roll out sweet shortcrust pastry to line a 9-inch loose-bottomed tart tin. Chill for 20 minutes.\r\nBeat butter and caster sugar until pale and fluffy, then beat in eggs and almond extract.\r\nFold in ground almonds and plain flour to complete the frangipane cream.\r\nSpread frangipane into chilled pastry base. Core, thinly slice dessert apples, and arrange neatly in concentric circles on top.\r\nBake at 375°F (190°C) for 35-40 minutes until golden and set.\r\nBrush warm apricot jam over apples for a gorgeous glaze.",
    strIngredient1: "Sweet Pastry", strMeasure1: "1 sheet",
    strIngredient2: "Butter", strMeasure2: "100g",
    strIngredient3: "Caster Sugar", strMeasure3: "100g",
    strIngredient4: "Ground Almonds", strMeasure4: "100g",
    strIngredient5: "Eggs", strMeasure5: "2 medium",
    strIngredient6: "Apples", strMeasure6: "3 sliced"
  }
];

// Popular Category List (Beef excluded, Vegan active)
const POPULAR_CATEGORIES = [
  { name: "All", icon: "fa-border-all" },
  { name: "Chicken", icon: "fa-drumstick-bite" },
  { name: "Vegetarian", icon: "fa-seedling" },
  { name: "Vegan", icon: "fa-leaf" },
  { name: "Pasta", icon: "fa-bowl-food" },
  { name: "Seafood", icon: "fa-fish" },
  { name: "Dessert", icon: "fa-ice-cream" },
  { name: "Breakfast", icon: "fa-egg" }
];

// --- Web Audio Synthesizer (Zero Dependencies) ---
class SoundFX {
  constructor() {
    this.ctx = null;
    const stored = localStorage.getItem("foodtales_sound") ?? localStorage.getItem("flavorcraft_sound");
    this.enabled = stored !== "off";
  }

  initContext() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(650, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  playHeart() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;
    const notes = [523.25, 659.25]; // C5, E5
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.15);
    });
  }

  playSuccess() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;
    const chord = [523.25, 659.25, 783.99, 1046.50]; // C - E - G - C
    chord.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime + i * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.09 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.09);
      osc.stop(this.ctx.currentTime + i * 0.09 + 0.35);
    });
  }

  playTimerBeep() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;
    for (let i = 0; i < 3; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime + i * 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.25 + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.25);
      osc.stop(this.ctx.currentTime + i * 0.25 + 0.12);
    }
  }
}

// --- Confetti Celebration Engine ---
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.particles = [];
    this.animating = false;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  burst() {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    const colors = ["#ff6b00", "#ea580c", "#f59e0b", "#fbbf24", "#f43f5e", "#10b981"];
    this.particles = [];
    for (let i = 0; i < 70; i++) {
      this.particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2 - 50,
        r: Math.random() * 6 + 4,
        d: Math.random() * 70,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        tiltAngle: 0,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        gravity: 0.35,
        opacity: 1
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.render();
    }
  }

  render() {
    if (!this.animating) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let activeParticles = 0;
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.tiltAngle += p.tiltAngleIncremental;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        activeParticles++;
        this.ctx.beginPath();
        this.ctx.lineWidth = p.r;
        this.ctx.strokeStyle = p.color;
        this.ctx.globalAlpha = Math.max(p.opacity, 0);
        this.ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        this.ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        this.ctx.stroke();
      }
    }
    this.ctx.globalAlpha = 1;

    if (activeParticles > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// --- Main Recipe Studio Controller ---
class RecipeApp {
  constructor() {
    this.currentRecipes = [];
    this.allLoadedRecipes = [];
    this.activeCategory = "All";
    this.activeCuisine = "all";
    this.activeDuration = "all";
    this.selectedPantry = new Set();
    this.favorites = this.loadFavorites();
    this.activeRecipe = null;
    this.searchDebounceTimer = null;
    this.currentServings = 2;
    this.activeSpotlight = null;

    // Fullscreen Kitchen Cook Mode state
    this.cookModeSteps = [];
    this.currentCookStepIndex = 0;

    // Kitchen Timer state
    this.timerInterval = null;
    this.timerSecondsLeft = 0;
    this.timerIsRunning = false;

    // Audio & Confetti
    this.sound = new SoundFX();
    this.confetti = new ConfettiEngine("confetti-canvas");

    // DOM References
    this.recipeGrid = document.getElementById("recipe-grid");
    this.resultsHeading = document.getElementById("results-heading");
    this.resultsCount = document.getElementById("results-count");
    this.categoryPillsContainer = document.getElementById("category-pills-container");
    this.searchInput = document.getElementById("search-input");
    this.searchForm = document.getElementById("search-form");
    this.clearSearchBtn = document.getElementById("clear-search-btn");
    this.sortSelect = document.getElementById("sort-select");
    this.cuisineSelect = document.getElementById("cuisine-select");
    this.viewGridBtn = document.getElementById("view-grid-btn");
    this.viewListBtn = document.getElementById("view-list-btn");
    this.emptyState = document.getElementById("empty-state");
    this.errorState = document.getElementById("error-state");
    this.resetSearchBtn = document.getElementById("reset-search-btn");
    this.retryBtn = document.getElementById("retry-btn");
    this.backToTopBtn = document.getElementById("back-to-top-btn");

    // Palette & Sound
    this.paletteBtn = document.getElementById("palette-btn");
    this.paletteDropdownWrap = document.querySelector(".palette-dropdown-wrap");
    this.soundToggleBtn = document.getElementById("sound-toggle-btn");

    // Spotlight Elements
    this.spotlightSection = document.getElementById("spotlight-section");
    this.spotlightTitle = document.getElementById("spotlight-title");
    this.spotlightDesc = document.getElementById("spotlight-desc");
    this.spotlightImg = document.getElementById("spotlight-img");
    this.spotlightCategory = document.getElementById("spotlight-category");
    this.spotlightArea = document.getElementById("spotlight-area");
    this.spotlightCookBtn = document.getElementById("spotlight-cook-btn");
    this.spotlightShuffleBtn = document.getElementById("spotlight-shuffle-btn");

    // Pantry Matcher Elements
    this.pantrySection = document.getElementById("pantry-section");
    this.pantryTagsContainer = document.getElementById("pantry-tags-container");
    this.pantryStatus = document.getElementById("pantry-status");
    this.pantryFindBtn = document.getElementById("pantry-find-btn");
    this.resetPantryBtn = document.getElementById("reset-pantry-btn");

    // Modal & Cook Mode
    this.recipeModal = document.getElementById("recipe-modal");
    this.modalContent = document.getElementById("modal-content");
    this.modalCloseBtn = document.getElementById("modal-close-btn");
    this.cookModeOverlay = document.getElementById("cook-mode-overlay");
    this.cookModeTitle = document.getElementById("cook-mode-recipe-title");
    this.cookModeStepIndicator = document.getElementById("cook-mode-step-indicator");
    this.cookModeStepText = document.getElementById("cook-mode-step-text");
    this.cookModeProgressFill = document.getElementById("cook-mode-progress-fill");
    this.cookModePrevBtn = document.getElementById("cook-mode-prev-btn");
    this.cookModeNextBtn = document.getElementById("cook-mode-next-btn");
    this.cookModeCheckBtn = document.getElementById("cook-mode-check-btn");
    this.cookModeExitBtn = document.getElementById("cook-mode-exit-btn");
    this.cookModeSpeechBtn = document.getElementById("cook-mode-speech-btn");

    // Favorites Drawer
    this.favoritesDrawer = document.getElementById("favorites-drawer");
    this.drawerOverlay = document.getElementById("drawer-overlay");
    this.closeDrawerBtn = document.getElementById("close-drawer-btn");
    this.favoritesList = document.getElementById("favorites-list");
    this.favoritesEmptyState = document.getElementById("favorites-empty-state");
    this.favoritesCountBadge = document.getElementById("favorites-count-badge");
    this.clearAllFavsBtn = document.getElementById("clear-all-favs-btn");

    // Navigation & Actions
    this.navExploreBtn = document.getElementById("nav-explore-btn");
    this.navPantryBtn = document.getElementById("nav-pantry-btn");
    this.navSpotlightBtn = document.getElementById("nav-spotlight-btn");
    this.navFavoritesBtn = document.getElementById("nav-favorites-btn");
    this.navSurpriseBtn = document.getElementById("nav-surprise-btn");
    this.brandHomeBtn = document.getElementById("brand-home-btn");
    this.themeToggleBtn = document.getElementById("theme-toggle-btn");
    this.mobileMenuBtn = document.getElementById("mobile-menu-btn");
    this.mainNav = document.getElementById("main-nav");
    this.toast = document.getElementById("toast");
    this.toastMessage = document.getElementById("toast-message");

    this.init();
  }

  init() {
    this.initTheme();
    this.initPalette();
    this.initSoundToggle();
    this.initLayoutMode();
    this.renderCategoryPills();
    this.attachEventListeners();
    this.updateFavoritesBadge();
    this.initSpotlight();
    
    // Initial fetch
    this.fetchRecipesByQuery("chicken");
  }

  // --- Palette & Theme Controller ---
  initTheme() {
    const savedTheme = localStorage.getItem("foodtales_theme") || localStorage.getItem("flavorcraft_theme") || "light";
    this.setTheme(savedTheme);
  }

  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("foodtales_theme", theme);
    const icon = this.themeToggleBtn.querySelector("i");
    if (theme === "dark") {
      icon.className = "fa-solid fa-sun";
      this.themeToggleBtn.setAttribute("title", "Switch to Light Theme");
    } else {
      icon.className = "fa-solid fa-moon";
      this.themeToggleBtn.setAttribute("title", "Switch to Dark Theme");
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    this.setTheme(currentTheme === "dark" ? "light" : "dark");
    this.sound.playPop();
  }

  initPalette() {
    let savedPalette = localStorage.getItem("foodtales_palette") || localStorage.getItem("flavorcraft_palette") || "orange";
    if (savedPalette === "sunset" || savedPalette === "honey" || savedPalette === "emerald") {
      savedPalette = "orange";
    }
    this.setPalette(savedPalette);
  }

  setPalette(palette) {
    document.documentElement.setAttribute("data-palette", palette);
    localStorage.setItem("foodtales_palette", palette);
    document.querySelectorAll(".color-option-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-palette") === palette);
    });
  }

  initSoundToggle() {
    this.updateSoundButtonUI();
    this.soundToggleBtn.addEventListener("click", () => {
      this.sound.enabled = !this.sound.enabled;
      localStorage.setItem("foodtales_sound", this.sound.enabled ? "on" : "off");
      this.updateSoundButtonUI();
      if (this.sound.enabled) {
        this.sound.playPop();
        this.showToast("Sound effects: Enabled", "success");
      } else {
        this.showToast("Sound effects: Muted", "info");
      }
    });
  }

  updateSoundButtonUI() {
    const icon = this.soundToggleBtn.querySelector("i");
    if (this.sound.enabled) {
      icon.className = "fa-solid fa-volume-high";
      this.soundToggleBtn.setAttribute("title", "Sound Effects: ON");
      this.soundToggleBtn.style.color = "var(--primary)";
    } else {
      icon.className = "fa-solid fa-volume-xmark";
      this.soundToggleBtn.setAttribute("title", "Sound Effects: MUTED");
      this.soundToggleBtn.style.color = "var(--text-muted)";
    }
  }

  initLayoutMode() {
    const savedMode = localStorage.getItem("foodtales_layout") || localStorage.getItem("flavorcraft_layout") || "grid";
    this.setLayoutMode(savedMode);
  }

  setLayoutMode(mode) {
    localStorage.setItem("foodtales_layout", mode);
    if (mode === "list") {
      this.recipeGrid.classList.remove("view-mode-grid");
      this.recipeGrid.classList.add("view-mode-list");
      this.viewListBtn.classList.add("active");
      this.viewGridBtn.classList.remove("active");
    } else {
      this.recipeGrid.classList.remove("view-mode-list");
      this.recipeGrid.classList.add("view-mode-grid");
      this.viewGridBtn.classList.add("active");
      this.viewListBtn.classList.remove("active");
    }
    this.sound.playPop();
  }

  // Strictly exclude beef dishes
  isExcludedRecipe(recipe) {
    if (!recipe) return true;
    const cat = (recipe.strCategory || "").toLowerCase();
    const title = (recipe.strMeal || "").toLowerCase();
    return cat.includes("beef") || title.includes("beef");
  }

  renderCategoryPills() {
    this.categoryPillsContainer.innerHTML = POPULAR_CATEGORIES.map(cat => `
      <button class="category-pill ${cat.name === this.activeCategory ? 'active' : ''}" 
              data-category="${cat.name}" 
              role="tab" 
              aria-selected="${cat.name === this.activeCategory}">
        <i class="fa-solid ${cat.icon}"></i> ${cat.name}
      </button>
    `).join("");
  }

  // --- Chef's Spotlight Showcase ---
  initSpotlight() {
    const defaultSpotlight = FALLBACK_RECIPES[0];
    this.setSpotlightRecipe(defaultSpotlight);
  }

  setSpotlightRecipe(recipe) {
    this.activeSpotlight = recipe;
    this.spotlightTitle.textContent = recipe.strMeal;
    this.spotlightImg.src = recipe.strMealThumb;
    this.spotlightImg.alt = recipe.strMeal;
    this.spotlightCategory.innerHTML = `<i class="fa-solid fa-seedling"></i> ${recipe.strCategory || 'Specialty'}`;
    this.spotlightArea.innerHTML = `<i class="fa-solid fa-earth-americas"></i> ${recipe.strArea || 'Global'}`;
    
    if (recipe.strInstructions) {
      const firstSentence = recipe.strInstructions.split(".")[0];
      this.spotlightDesc.textContent = `${firstSentence}. Hand-crafted recipe prepared with balanced flavors and aromatic herbs.`;
    }
  }

  async shuffleSpotlight() {
    this.sound.playPop();
    this.showToast("Shuffling Chef's Signature Spotlight...", "info");
    try {
      for (let i = 0; i < 5; i++) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        if (data.meals && data.meals[0] && !this.isExcludedRecipe(data.meals[0])) {
          this.setSpotlightRecipe(data.meals[0]);
          return;
        }
      }
    } catch (e) {}
    const filtered = FALLBACK_RECIPES.filter(m => !this.isExcludedRecipe(m));
    const randomPick = filtered[Math.floor(Math.random() * filtered.length)];
    this.setSpotlightRecipe(randomPick);
  }

  // --- Fridge Pantry Matcher Logic ---
  togglePantryIngredient(ing, btn) {
    if (this.selectedPantry.has(ing)) {
      this.selectedPantry.delete(ing);
      btn.classList.remove("selected");
      btn.querySelector("i").className = "fa-solid fa-plus";
    } else {
      this.selectedPantry.add(ing);
      btn.classList.add("selected");
      btn.querySelector("i").className = "fa-solid fa-check";
    }
    this.sound.playPop();
    this.updatePantryStatus();
  }

  updatePantryStatus() {
    if (this.selectedPantry.size === 0) {
      this.pantryStatus.innerHTML = `Selected: <strong>None</strong>`;
    } else {
      const list = Array.from(this.selectedPantry).join(", ");
      this.pantryStatus.innerHTML = `Selected (${this.selectedPantry.size}): <strong>${list}</strong>`;
    }
  }

  resetPantry() {
    this.selectedPantry.clear();
    this.pantryTagsContainer.querySelectorAll(".pantry-tag").forEach(tag => {
      tag.classList.remove("selected");
      tag.querySelector("i").className = "fa-solid fa-plus";
    });
    this.updatePantryStatus();
    this.sound.playPop();
  }

  async matchFridgeRecipes() {
    if (this.selectedPantry.size === 0) {
      this.showToast("Please tap at least 1 ingredient from your fridge!", "info");
      return;
    }

    this.sound.playPop();
    const primaryIngredient = Array.from(this.selectedPantry)[0];
    this.showToast(`Matching recipes with ${Array.from(this.selectedPantry).join(", ")}...`, "info");
    
    // Search with the first ingredient
    await this.fetchRecipesByQuery(primaryIngredient);
    document.getElementById("recipes-section").scrollIntoView({ behavior: "smooth" });
  }

  // --- Duration Filter ---
  setDurationFilter(time) {
    this.activeDuration = time;
    document.querySelectorAll(".duration-chip").forEach(chip => {
      chip.classList.toggle("active", chip.getAttribute("data-time") === time);
    });
    this.sound.playPop();
    this.filterAndRender();
  }

  // --- Favorites Persistence ---
  loadFavorites() {
    try {
      const stored = localStorage.getItem("foodtales_favorites") || localStorage.getItem("flavorcraft_favorites");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem("foodtales_favorites", JSON.stringify(this.favorites));
      this.updateFavoritesBadge();
    } catch (e) {}
  }

  isFavorite(idMeal) {
    return this.favorites.some(fav => fav.idMeal === idMeal);
  }

  toggleFavorite(recipe) {
    const exists = this.isFavorite(recipe.idMeal);
    if (exists) {
      this.favorites = this.favorites.filter(fav => fav.idMeal !== recipe.idMeal);
      this.showToast(`Removed "${recipe.strMeal}" from favorites`, "info");
      this.sound.playPop();
    } else {
      this.favorites.push({
        idMeal: recipe.idMeal,
        strMeal: recipe.strMeal,
        strCategory: recipe.strCategory || "Recipe",
        strArea: recipe.strArea || "Global",
        strMealThumb: recipe.strMealThumb
      });
      this.showToast(`Saved "${recipe.strMeal}" to favorites!`, "success");
      this.sound.playHeart();
      this.confetti.burst();
    }

    this.saveFavorites();
    this.updateCardFavoriteButtons(recipe.idMeal);
    if (this.activeRecipe && this.activeRecipe.idMeal === recipe.idMeal) {
      this.updateModalFavoriteButton();
    }
    this.renderFavoritesDrawer();
  }

  clearAllFavorites() {
    if (this.favorites.length === 0) return;
    if (confirm("Are you sure you want to remove all saved recipes?")) {
      this.favorites = [];
      this.saveFavorites();
      this.renderFavoritesDrawer();
      this.renderRecipeGrid(this.currentRecipes);
      this.showToast("All saved favorites cleared", "info");
      this.sound.playPop();
    }
  }

  updateFavoritesBadge() {
    const count = this.favorites.length;
    this.favoritesCountBadge.textContent = count;
    this.favoritesCountBadge.style.display = count > 0 ? "inline-flex" : "none";
  }

  updateCardFavoriteButtons(idMeal) {
    const isFav = this.isFavorite(idMeal);
    const buttons = document.querySelectorAll(`.card-favorite-btn[data-id="${idMeal}"]`);
    buttons.forEach(btn => {
      btn.classList.toggle("favorited", isFav);
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
      }
    });
  }

  // --- API Integrations & Fetching ---
  showLoadingSkeletons() {
    this.emptyState.style.display = "none";
    this.errorState.style.display = "none";
    this.recipeGrid.innerHTML = Array(6).fill(0).map(() => `
      <div class="skeleton-card" aria-hidden="true">
        <div class="skeleton-media"></div>
        <div class="skeleton-content">
          <div class="skeleton-line short"></div>
          <div class="skeleton-line long"></div>
          <div class="skeleton-line medium"></div>
        </div>
      </div>
    `).join("");
  }

  // Assign deterministic realistic cooking time & nutrition to recipes
  enrichRecipe(m) {
    const idNum = parseInt(m.idMeal || "52857", 10);
    const times = [15, 20, 25, 30, 35, 45, 50];
    const time = m.prepMinutes || times[idNum % times.length];
    const cals = m.strNutrition ? m.strNutrition.calories : (280 + (idNum % 24) * 10);
    const prot = m.strNutrition ? m.strNutrition.protein : `${12 + (idNum % 20)}g`;
    const carb = m.strNutrition ? m.strNutrition.carbs : `${25 + (idNum % 30)}g`;
    const fat = m.strNutrition ? m.strNutrition.fat : `${8 + (idNum % 16)}g`;

    return {
      ...m,
      prepMinutes: time,
      nutrition: { calories: cals, protein: prot, carbs: carb, fat: fat }
    };
  }

  async fetchRecipesByQuery(query) {
    this.showLoadingSkeletons();
    this.resultsHeading.textContent = query ? `Results for "${query}"` : "Featured Recipes";
    this.resultsCount.textContent = "Searching culinary database...";

    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();

      if (data.meals && data.meals.length > 0) {
        this.allLoadedRecipes = data.meals
          .filter(m => !this.isExcludedRecipe(m))
          .map(m => this.enrichRecipe(m));
        this.filterAndRender();
      } else {
        const localMatches = FALLBACK_RECIPES.filter(m => 
          !this.isExcludedRecipe(m) &&
          (m.strMeal.toLowerCase().includes(query.toLowerCase()) || 
          m.strCategory.toLowerCase().includes(query.toLowerCase()))
        ).map(m => this.enrichRecipe(m));

        if (localMatches.length > 0) {
          this.allLoadedRecipes = localMatches;
          this.filterAndRender();
        } else {
          this.currentRecipes = [];
          this.showEmptyState(`No recipes found matching "${query}". Try searching for pasta, cake, or chicken!`);
        }
      }
    } catch (err) {
      console.warn("API query failed, falling back to local dataset:", err);
      const localMatches = FALLBACK_RECIPES.filter(m => 
        !this.isExcludedRecipe(m) &&
        (!query || m.strMeal.toLowerCase().includes(query.toLowerCase()) || 
        m.strCategory.toLowerCase().includes(query.toLowerCase()))
      ).map(m => this.enrichRecipe(m));
      this.allLoadedRecipes = localMatches.length > 0 ? localMatches : FALLBACK_RECIPES.map(m => this.enrichRecipe(m));
      this.filterAndRender();
    }
  }

  async fetchRecipesByCategory(category) {
    if (category.toLowerCase() === "beef") {
      this.showEmptyState("Beef recipes have been excluded from this application.");
      return;
    }

    if (category === "All") {
      this.fetchRecipesByQuery("");
      return;
    }

    this.showLoadingSkeletons();
    this.resultsHeading.textContent = `${category} Recipes`;
    this.resultsCount.textContent = "Loading dishes...";

    try {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Category filter network error");
      const data = await res.json();

      if (data.meals && data.meals.length > 0) {
        this.allLoadedRecipes = data.meals
          .filter(m => !this.isExcludedRecipe(m))
          .map(m => this.enrichRecipe({
            ...m,
            strCategory: category,
            strArea: "Specialty"
          }));
        this.filterAndRender();
      } else {
        const localCategory = FALLBACK_RECIPES
          .filter(m => !this.isExcludedRecipe(m) && m.strCategory.toLowerCase() === category.toLowerCase())
          .map(m => this.enrichRecipe(m));
        if (localCategory.length > 0) {
          this.allLoadedRecipes = localCategory;
          this.filterAndRender();
        } else {
          this.showEmptyState(`No recipes found in the "${category}" category.`);
        }
      }
    } catch (err) {
      const localCategory = FALLBACK_RECIPES
        .filter(m => !this.isExcludedRecipe(m) && m.strCategory.toLowerCase() === category.toLowerCase())
        .map(m => this.enrichRecipe(m));
      this.allLoadedRecipes = localCategory.length > 0 ? localCategory : FALLBACK_RECIPES.map(m => this.enrichRecipe(m));
      this.filterAndRender();
    }
  }

  async fetchRecipesByCuisine(cuisine) {
    if (cuisine === "all") {
      this.fetchRecipesByQuery("");
      return;
    }

    this.showLoadingSkeletons();
    this.resultsHeading.textContent = `${cuisine} Cuisine`;
    this.resultsCount.textContent = `Fetching authentic ${cuisine} dishes...`;

    try {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(cuisine)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Cuisine filter network error");
      const data = await res.json();

      if (data.meals && data.meals.length > 0) {
        this.allLoadedRecipes = data.meals
          .filter(m => !this.isExcludedRecipe(m))
          .map(m => this.enrichRecipe({
            ...m,
            strArea: cuisine,
            strCategory: "Cuisine"
          }));
        this.filterAndRender();
      } else {
        this.showEmptyState(`No recipes currently found for ${cuisine} cuisine.`);
      }
    } catch (err) {
      const localMatches = FALLBACK_RECIPES
        .filter(m => !this.isExcludedRecipe(m) && m.strArea.toLowerCase() === cuisine.toLowerCase())
        .map(m => this.enrichRecipe(m));
      this.allLoadedRecipes = localMatches.length > 0 ? localMatches : FALLBACK_RECIPES.map(m => this.enrichRecipe(m));
      this.filterAndRender();
    }
  }

  async fetchRecipeById(idMeal) {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to lookup recipe");
      const data = await res.json();
      if (data.meals && data.meals.length > 0 && !this.isExcludedRecipe(data.meals[0])) {
        return this.enrichRecipe(data.meals[0]);
      }
    } catch (e) {}
    const found = FALLBACK_RECIPES.find(m => m.idMeal === idMeal && !this.isExcludedRecipe(m)) || 
                  this.allLoadedRecipes.find(m => m.idMeal === idMeal && !this.isExcludedRecipe(m)) || 
                  null;
    return found ? this.enrichRecipe(found) : null;
  }

  async fetchRandomRecipe() {
    this.sound.playPop();
    this.showToast("Finding an exciting recipe for you...", "info");
    try {
      let foundMeal = null;
      for (let attempts = 0; attempts < 5; attempts++) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        if (!res.ok) throw new Error("Random recipe error");
        const data = await res.json();
        if (data.meals && data.meals.length > 0 && !this.isExcludedRecipe(data.meals[0])) {
          foundMeal = this.enrichRecipe(data.meals[0]);
          break;
        }
      }
      if (foundMeal) {
        this.openRecipeModal(foundMeal);
        return;
      }
    } catch (e) {}

    const validFallbacks = FALLBACK_RECIPES.filter(m => !this.isExcludedRecipe(m)).map(m => this.enrichRecipe(m));
    const randomLocal = validFallbacks[Math.floor(Math.random() * validFallbacks.length)];
    this.openRecipeModal(randomLocal);
  }

  // Filter duration and sorting
  filterAndRender() {
    let filtered = [...this.allLoadedRecipes];

    // Duration filter
    if (this.activeDuration === "quick") {
      filtered = filtered.filter(m => m.prepMinutes <= 20);
    } else if (this.activeDuration === "medium") {
      filtered = filtered.filter(m => m.prepMinutes > 20 && m.prepMinutes <= 40);
    } else if (this.activeDuration === "gourmet") {
      filtered = filtered.filter(m => m.prepMinutes > 40);
    }

    this.currentRecipes = filtered;

    if (this.currentRecipes.length === 0) {
      this.showEmptyState("No recipes match your specific prep time filter. Try 'Any Duration'!");
    } else {
      this.renderRecipeGrid(this.currentRecipes);
    }
  }

  // --- Rendering UI ---
  renderRecipeGrid(recipes) {
    this.emptyState.style.display = "none";
    this.errorState.style.display = "none";

    let sorted = [...recipes];
    const sortVal = this.sortSelect.value;
    if (sortVal === "name-asc") {
      sorted.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
    } else if (sortVal === "name-desc") {
      sorted.sort((a, b) => b.strMeal.localeCompare(a.strMeal));
    }

    this.resultsCount.textContent = `Showing ${sorted.length} delicious ${sorted.length === 1 ? 'recipe' : 'recipes'}`;

    this.recipeGrid.innerHTML = sorted.map(recipe => {
      const isFav = this.isFavorite(recipe.idMeal);
      const isVeg = (recipe.strCategory || "").toLowerCase().includes("veg");
      const isSeafood = (recipe.strCategory || "").toLowerCase().includes("seafood");
      const isDessert = (recipe.strCategory || "").toLowerCase().includes("dessert");

      let categoryClass = "category-tag";
      if (isVeg) categoryClass += " veg-tag";
      else if (isSeafood) categoryClass += " seafood-tag";
      else if (isDessert) categoryClass += " dessert-tag";

      return `
        <article class="recipe-card" data-id="${recipe.idMeal}">
          <div class="card-media-wrapper">
            <img class="card-img" src="${recipe.strMealThumb}" alt="${recipe.strMeal}" loading="lazy">
            <button class="card-favorite-btn ${isFav ? 'favorited' : ''}" 
                    data-id="${recipe.idMeal}" 
                    aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
          <div class="card-body">
            <div class="card-tags">
              ${recipe.strCategory ? `<span class="card-tag ${categoryClass}"><i class="fa-solid fa-tag"></i> ${recipe.strCategory}</span>` : ''}
              ${recipe.strArea ? `<span class="card-tag area-tag"><i class="fa-solid fa-earth-americas"></i> ${recipe.strArea}</span>` : ''}
              <span class="card-tag time-tag"><i class="fa-regular fa-clock"></i> ~${recipe.prepMinutes || 25}m</span>
            </div>
            <h3 class="card-title" title="${recipe.strMeal}">${recipe.strMeal}</h3>
            <div class="card-footer">
              <span class="card-view-btn">
                Cook This Dish <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  showEmptyState(message) {
    this.recipeGrid.innerHTML = "";
    this.resultsCount.textContent = "0 recipes found";
    document.getElementById("empty-state-message").textContent = message;
    this.emptyState.style.display = "block";
  }

  // --- Modal Dialog Controller & Dynamic Servings ---
  async openRecipeModal(recipeSummary) {
    this.sound.playPop();
    let recipe = recipeSummary;
    if (!recipe.strInstructions || !recipe.strIngredient1) {
      this.showToast("Loading cooking instructions...", "info");
      const full = await this.fetchRecipeById(recipe.idMeal);
      if (full) recipe = full;
    }

    this.activeRecipe = recipe;
    this.currentServings = 2;
    this.renderModalContent(recipe);

    if (typeof this.recipeModal.showModal === "function") {
      this.recipeModal.showModal();
    } else {
      this.recipeModal.setAttribute("open", "true");
    }
    document.body.style.overflow = "hidden";
  }

  closeRecipeModal() {
    if (this.recipeModal.open) {
      if (typeof this.recipeModal.close === "function") {
        this.recipeModal.close();
      } else {
        this.recipeModal.removeAttribute("open");
      }
    }
    document.body.style.overflow = "";
    this.activeRecipe = null;
    this.stopKitchenTimer();
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  scaleMeasurement(measureStr, factor) {
    if (!measureStr || factor === 1) return measureStr || "";
    return measureStr.replace(/(\d+(?:\.\d+)?|\d+\/\d+)/g, (match) => {
      let num = 0;
      if (match.includes("/")) {
        const [numVal, denVal] = match.split("/").map(Number);
        num = numVal / denVal;
      } else {
        num = parseFloat(match);
      }
      if (isNaN(num)) return match;
      const scaled = num * factor;
      return Number.isInteger(scaled) ? scaled.toString() : scaled.toFixed(1).replace(/\.0$/, "");
    });
  }

  renderModalContent(recipe) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ingredients.push({
          name: ing.trim(),
          measure: measure ? measure.trim() : ""
        });
      }
    }

    const rawSteps = recipe.strInstructions ? recipe.strInstructions.split(/\r?\n/) : [];
    const formattedSteps = rawSteps
      .map(s => s.trim())
      .filter(s => s.length > 10 && !s.toLowerCase().startsWith("step"));

    this.cookModeSteps = formattedSteps.length > 0 ? formattedSteps : [recipe.strInstructions || "No written instructions provided."];

    let ytEmbedUrl = "";
    if (recipe.strYoutube) {
      const match = recipe.strYoutube.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (match && match[1]) {
        ytEmbedUrl = `https://www.youtube.com/embed/${match[1]}`;
      }
    }

    const isFav = this.isFavorite(recipe.idMeal);
    const savedNotes = localStorage.getItem(`foodtales_notes_${recipe.idMeal}`) || localStorage.getItem(`flavorcraft_notes_${recipe.idMeal}`) || "";
    const nutri = recipe.nutrition || { calories: 380, protein: "18g", carbs: "32g", fat: "14g" };

    this.modalContent.innerHTML = `
      <div class="modal-hero">
        <img class="modal-hero-img" src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        <div class="modal-hero-overlay">
          <div class="modal-tags">
            ${recipe.strCategory ? `<span class="card-tag category-tag"><i class="fa-solid fa-tag"></i> ${recipe.strCategory}</span>` : ''}
            ${recipe.strArea ? `<span class="card-tag area-tag"><i class="fa-solid fa-earth-americas"></i> ${recipe.strArea}</span>` : ''}
            <span class="card-tag time-tag"><i class="fa-regular fa-clock"></i> ~${recipe.prepMinutes || 25} mins prep</span>
          </div>
          <h2 class="modal-title" id="modal-recipe-title">${recipe.strMeal}</h2>
        </div>
      </div>

      <div class="modal-body">
        <!-- Left Column: Servings Stepper, Nutrition & Ingredients Checklist -->
        <aside class="modal-sidebar">
          <div class="modal-actions-bar">
            <button class="secondary-btn cook-mode-launch-btn" id="modal-cook-mode-btn" title="Open Fullscreen Focus Mode">
              <i class="fa-solid fa-expand"></i> <span>Kitchen Focus Mode</span>
            </button>
            <button class="secondary-btn ${isFav ? 'favorited-btn' : ''}" id="modal-fav-toggle-btn">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              <span>${isFav ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
            <button class="secondary-btn" id="modal-print-btn" title="Print recipe">
              <i class="fa-solid fa-print"></i>
            </button>
            <button class="secondary-btn" id="modal-share-btn" title="Share recipe">
              <i class="fa-solid fa-share-nodes"></i>
            </button>
          </div>

          <!-- Dynamic Servings Stepper -->
          <div class="servings-controller">
            <span class="servings-label"><i class="fa-solid fa-users"></i> Portions</span>
            <div class="servings-stepper">
              <button class="stepper-btn" id="servings-decrease-btn" aria-label="Decrease portions">-</button>
              <span class="servings-value" id="servings-display">${this.currentServings}</span>
              <button class="stepper-btn" id="servings-increase-btn" aria-label="Increase portions">+</button>
            </div>
          </div>

          <!-- Nutrition Breakdown -->
          <div class="nutrition-card">
            <div class="nutri-item">
              <span class="nutri-val" id="nutri-cals">${Math.round(nutri.calories * (this.currentServings / 2))}</span>
              <span class="nutri-label">Calories</span>
            </div>
            <div class="nutri-item">
              <span class="nutri-val">${nutri.protein}</span>
              <span class="nutri-label">Protein</span>
            </div>
            <div class="nutri-item">
              <span class="nutri-val">${nutri.carbs}</span>
              <span class="nutri-label">Carbs</span>
            </div>
            <div class="nutri-item">
              <span class="nutri-val">${nutri.fat}</span>
              <span class="nutri-label">Fats</span>
            </div>
          </div>

          <!-- Ingredients Card -->
          <div class="ingredients-card">
            <div class="section-subheading">
              <span><i class="fa-solid fa-clipboard-check"></i> Ingredients</span>
              <small style="font-weight: 700; color: var(--text-muted); font-size: 0.8rem;">Tap to check</small>
            </div>
            <ul class="ingredients-list" id="modal-ingredients-list">
              ${ingredients.map((item, idx) => `
                <li class="ingredient-item" data-measure="${item.measure}">
                  <input type="checkbox" id="ing-${idx}" class="ingredient-checkbox">
                  <label for="ing-${idx}" class="ingredient-text">
                    <span class="ingredient-name">${item.name}</span>
                    <span class="ingredient-measure" id="ing-measure-${idx}">
                      ${this.scaleMeasurement(item.measure, this.currentServings / 2)}
                    </span>
                  </label>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Personal Recipe Notes -->
          <div class="recipe-notes-card">
            <div class="notes-header">
              <i class="fa-solid fa-pen-to-square"></i> My Kitchen Notes
            </div>
            <textarea class="recipe-notes-input" id="recipe-notes-input" placeholder="Add personal tips, spice tweaks, or substitutions here...">${savedNotes}</textarea>
          </div>

          <!-- Mini Kitchen Timer Widget -->
          <div class="kitchen-timer-card">
            <div class="timer-header">
              <span><i class="fa-solid fa-stopwatch"></i> Kitchen Timer</span>
            </div>
            <div class="timer-main">
              <div class="timer-digits" id="timer-digits">00:00</div>
              <div class="timer-presets">
                <button class="preset-btn" data-seconds="60">+1m</button>
                <button class="preset-btn" data-seconds="300">+5m</button>
                <button class="preset-btn" data-seconds="600">+10m</button>
              </div>
              <div class="timer-actions">
                <button class="timer-action-btn start-timer-btn" id="start-timer-btn">
                  <i class="fa-solid fa-play"></i> Start
                </button>
                <button class="timer-action-btn reset-timer-btn" id="reset-timer-btn">
                  <i class="fa-solid fa-rotate-left"></i>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- Right Column: Step-by-Step Instructions & Video -->
        <section class="instructions-wrapper">
          <!-- Step Progress Tracker -->
          <div class="cooking-tracker">
            <div class="cooking-progress-header">
              <span><i class="fa-solid fa-fire"></i> Step-by-Step Directions</span>
              <span id="step-progress-counter">0 / ${formattedSteps.length || 1} Done</span>
            </div>
            <div class="cooking-progress-bar">
              <div class="cooking-progress-fill" id="cooking-progress-fill"></div>
            </div>
          </div>

          <div class="instructions-steps" id="instructions-steps">
            ${formattedSteps.length > 0 ? formattedSteps.map((step, index) => `
              <div class="step-card" data-step="${index + 1}">
                <span class="step-number">${index + 1}</span>
                <p class="step-text">${step}</p>
              </div>
            `).join("") : `
              <p class="step-text">${recipe.strInstructions || 'No written instructions provided for this recipe.'}</p>
            `}
          </div>

          ${ytEmbedUrl ? `
            <div class="video-section">
              <div class="section-subheading">
                <span><i class="fa-brands fa-youtube" style="color: #ef4444;"></i> Video Tutorial</span>
              </div>
              <div class="video-frame-container">
                <iframe src="${ytEmbedUrl}" title="${recipe.strMeal} Video Tutorial" allowfullscreen loading="lazy"></iframe>
              </div>
            </div>
          ` : ''}
        </section>
      </div>
    `;

    this.attachModalEventListeners(recipe, ingredients, formattedSteps.length || 1, nutri);
  }

  updateModalFavoriteButton() {
    const btn = document.getElementById("modal-fav-toggle-btn");
    if (!btn || !this.activeRecipe) return;
    const isFav = this.isFavorite(this.activeRecipe.idMeal);
    btn.classList.toggle("favorited-btn", isFav);
    btn.innerHTML = `
      <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      <span>${isFav ? 'Bookmarked' : 'Bookmark'}</span>
    `;
  }

  attachModalEventListeners(recipe, ingredients, totalSteps, nutri) {
    const favBtn = document.getElementById("modal-fav-toggle-btn");
    if (favBtn) {
      favBtn.addEventListener("click", () => this.toggleFavorite(recipe));
    }

    const printBtn = document.getElementById("modal-print-btn");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        this.sound.playPop();
        window.print();
      });
    }

    const shareBtn = document.getElementById("modal-share-btn");
    if (shareBtn) {
      shareBtn.addEventListener("click", async () => {
        this.sound.playPop();
        if (navigator.share) {
          try {
            await navigator.share({
              title: recipe.strMeal,
              text: `Check out ${recipe.strMeal} on FoodTales!`,
              url: window.location.href
            });
          } catch (err) {}
        } else {
          navigator.clipboard.writeText(window.location.href);
          this.showToast("Recipe link copied to clipboard!", "success");
        }
      });
    }

    // Launch Fullscreen Cook Mode
    const cookModeBtn = document.getElementById("modal-cook-mode-btn");
    if (cookModeBtn) {
      cookModeBtn.addEventListener("click", () => {
        this.openCookMode(recipe);
      });
    }

    // Servings Stepper
    const decreaseBtn = document.getElementById("servings-decrease-btn");
    const increaseBtn = document.getElementById("servings-increase-btn");
    const servingsDisplay = document.getElementById("servings-display");
    const calsDisplay = document.getElementById("nutri-cals");

    const updateIngredientMeasures = () => {
      servingsDisplay.textContent = this.currentServings;
      const factor = this.currentServings / 2;
      if (calsDisplay) {
        calsDisplay.textContent = Math.round(nutri.calories * factor);
      }
      ingredients.forEach((item, idx) => {
        const el = document.getElementById(`ing-measure-${idx}`);
        if (el) {
          el.textContent = this.scaleMeasurement(item.measure, factor);
        }
      });
      this.sound.playPop();
    };

    if (decreaseBtn) {
      decreaseBtn.addEventListener("click", () => {
        if (this.currentServings > 1) {
          this.currentServings -= 1;
          updateIngredientMeasures();
        }
      });
    }

    if (increaseBtn) {
      increaseBtn.addEventListener("click", () => {
        if (this.currentServings < 12) {
          this.currentServings += 1;
          updateIngredientMeasures();
        }
      });
    }

    // Checkbox strikethrough toggle
    const checkboxes = this.modalContent.querySelectorAll(".ingredient-checkbox");
    checkboxes.forEach(cb => {
      cb.addEventListener("change", (e) => {
        this.sound.playPop();
        const item = e.target.closest(".ingredient-item");
        if (item) {
          item.classList.toggle("checked", e.target.checked);
        }
      });
    });

    // Notes autosave
    const notesInput = document.getElementById("recipe-notes-input");
    if (notesInput) {
      notesInput.addEventListener("input", (e) => {
        localStorage.setItem(`foodtales_notes_${recipe.idMeal}`, e.target.value);
      });
    }

    // Step cards click-to-complete tracker
    const stepCards = this.modalContent.querySelectorAll(".step-card");
    const progressFill = document.getElementById("cooking-progress-fill");
    const progressCounter = document.getElementById("step-progress-counter");

    stepCards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("completed");
        const completedCount = this.modalContent.querySelectorAll(".step-card.completed").length;
        const percent = Math.round((completedCount / totalSteps) * 100);
        progressFill.style.width = `${percent}%`;
        progressCounter.textContent = `${completedCount} / ${totalSteps} Done (${percent}%)`;
        
        if (card.classList.contains("completed")) {
          this.sound.playPop();
        }

        if (completedCount === totalSteps) {
          this.sound.playSuccess();
          this.confetti.burst();
          this.showToast("🎉 Spectacular! All steps completed!", "success");
        }
      });
    });

    this.initKitchenTimerInsideModal();
  }

  // --- Fullscreen Kitchen Focus Mode Controller ---
  openCookMode(recipe) {
    this.sound.playPop();
    this.cookModeTitle.textContent = recipe.strMeal;
    this.currentCookStepIndex = 0;
    this.updateCookModeUI();
    this.cookModeOverlay.classList.add("active");
    this.cookModeOverlay.setAttribute("aria-hidden", "false");
  }

  closeCookMode() {
    this.sound.playPop();
    this.cookModeOverlay.classList.remove("active");
    this.cookModeOverlay.setAttribute("aria-hidden", "true");
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  updateCookModeUI() {
    const total = this.cookModeSteps.length;
    const current = this.currentCookStepIndex;
    this.cookModeStepIndicator.textContent = `STEP ${current + 1} OF ${total}`;
    this.cookModeStepText.textContent = this.cookModeSteps[current];

    const percent = Math.round(((current + 1) / total) * 100);
    this.cookModeProgressFill.style.width = `${percent}%`;

    this.cookModePrevBtn.disabled = current === 0;
    this.cookModePrevBtn.style.opacity = current === 0 ? "0.4" : "1";

    if (current === total - 1) {
      this.cookModeNextBtn.innerHTML = `Finish Cooking <i class="fa-solid fa-flag-checkered"></i>`;
    } else {
      this.cookModeNextBtn.innerHTML = `Next Step <i class="fa-solid fa-arrow-right"></i>`;
    }
  }

  readCurrentStepAloud() {
    if (!window.speechSynthesis) {
      this.showToast("Speech synthesis not supported in this browser.", "info");
      return;
    }
    window.speechSynthesis.cancel();
    const text = this.cookModeSteps[this.currentCookStepIndex];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
    this.showToast("🗣️ Reading step aloud...", "info");
  }

  // --- Kitchen Timer Logic ---
  initKitchenTimerInsideModal() {
    const digits = document.getElementById("timer-digits");
    const startBtn = document.getElementById("start-timer-btn");
    const resetBtn = document.getElementById("reset-timer-btn");
    const presetBtns = this.modalContent.querySelectorAll(".preset-btn");

    const updateDigits = () => {
      const mins = Math.floor(this.timerSecondsLeft / 60);
      const secs = this.timerSecondsLeft % 60;
      digits.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    presetBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.sound.playPop();
        const addSecs = parseInt(btn.getAttribute("data-seconds"), 10) || 0;
        this.timerSecondsLeft += addSecs;
        updateDigits();
      });
    });

    if (startBtn) {
      startBtn.addEventListener("click", () => {
        this.sound.playPop();
        if (this.timerIsRunning) {
          this.stopKitchenTimer();
          startBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
          startBtn.className = "timer-action-btn start-timer-btn";
        } else {
          if (this.timerSecondsLeft <= 0) {
            this.timerSecondsLeft = 300; // default 5m
            updateDigits();
          }
          this.timerIsRunning = true;
          startBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
          startBtn.className = "timer-action-btn pause-timer-btn";

          this.timerInterval = setInterval(() => {
            if (this.timerSecondsLeft > 0) {
              this.timerSecondsLeft -= 1;
              updateDigits();
            } else {
              this.stopKitchenTimer();
              startBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
              startBtn.className = "timer-action-btn start-timer-btn";
              this.sound.playTimerBeep();
              this.showToast("⏰ Kitchen Timer finished!", "success");
            }
          }, 1000);
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        this.sound.playPop();
        this.stopKitchenTimer();
        this.timerSecondsLeft = 0;
        updateDigits();
        if (startBtn) {
          startBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
          startBtn.className = "timer-action-btn start-timer-btn";
        }
      });
    }
  }

  stopKitchenTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.timerIsRunning = false;
  }

  // --- Favorites Drawer Controller ---
  openFavoritesDrawer() {
    this.sound.playPop();
    this.renderFavoritesDrawer();
    this.favoritesDrawer.classList.add("open");
    this.favoritesDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  closeFavoritesDrawer() {
    this.sound.playPop();
    this.favoritesDrawer.classList.remove("open");
    this.favoritesDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  renderFavoritesDrawer() {
    if (this.favorites.length === 0) {
      this.favoritesList.innerHTML = "";
      this.favoritesEmptyState.style.display = "block";
      this.clearAllFavsBtn.style.display = "none";
      return;
    }

    this.clearAllFavsBtn.style.display = "inline-flex";
    this.favoritesEmptyState.style.display = "none";
    this.favoritesList.innerHTML = this.favorites.map(fav => `
      <div class="favorite-item" data-id="${fav.idMeal}">
        <img class="fav-item-thumb" src="${fav.strMealThumb}" alt="${fav.strMeal}">
        <div class="fav-item-info">
          <h4 class="fav-item-title">${fav.strMeal}</h4>
          <span class="fav-item-meta">${fav.strCategory || 'Recipe'} • ${fav.strArea || 'Global'}</span>
        </div>
        <button class="fav-remove-btn" data-id="${fav.idMeal}" aria-label="Remove from favorites">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join("");

    this.favoritesList.querySelectorAll(".fav-item-thumb, .fav-item-info").forEach(el => {
      el.addEventListener("click", async (e) => {
        const item = e.target.closest(".favorite-item");
        const id = item.getAttribute("data-id");
        this.closeFavoritesDrawer();
        const fullRecipe = await this.fetchRecipeById(id);
        if (fullRecipe) {
          this.openRecipeModal(fullRecipe);
        }
      });
    });

    this.favoritesList.querySelectorAll(".fav-remove-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        const item = this.favorites.find(f => f.idMeal === id);
        if (item) {
          this.toggleFavorite(item);
        }
      });
    });
  }

  // --- Toast Notifications ---
  showToast(message, type = "info") {
    this.toastMessage.textContent = message;
    const icon = this.toast.querySelector(".toast-icon i");
    if (type === "success") {
      icon.className = "fa-solid fa-circle-check";
      icon.parentElement.style.color = "var(--accent-green)";
    } else if (type === "info") {
      icon.className = "fa-solid fa-circle-info";
      icon.parentElement.style.color = "var(--primary)";
    }

    this.toast.classList.add("show");
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove("show");
    }, 3200);
  }

  // --- Global Event Listeners ---
  attachEventListeners() {
    // Brand Home / Explore
    this.brandHomeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.sound.playPop();
      this.searchInput.value = "";
      this.clearSearchBtn.style.display = "none";
      this.activeCategory = "All";
      this.activeCuisine = "all";
      this.activeDuration = "all";
      this.cuisineSelect.value = "all";
      this.renderCategoryPills();
      this.fetchRecipesByQuery("chicken");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    this.navExploreBtn.addEventListener("click", () => {
      this.sound.playPop();
      this.navExploreBtn.classList.add("active");
      this.navFavoritesBtn.classList.remove("active");
      const section = document.getElementById("recipes-section");
      section.scrollIntoView({ behavior: "smooth" });
    });

    this.navPantryBtn.addEventListener("click", () => {
      this.sound.playPop();
      this.pantrySection.scrollIntoView({ behavior: "smooth" });
    });

    this.navSpotlightBtn.addEventListener("click", () => {
      this.sound.playPop();
      this.spotlightSection.scrollIntoView({ behavior: "smooth" });
    });

    // Spotlight Actions
    this.spotlightCookBtn.addEventListener("click", () => {
      if (this.activeSpotlight) {
        this.openRecipeModal(this.activeSpotlight);
      }
    });

    this.spotlightShuffleBtn.addEventListener("click", () => {
      this.shuffleSpotlight();
    });

    // Palette Dropdown Toggle
    this.paletteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.paletteDropdownWrap.classList.toggle("open");
      this.sound.playPop();
    });

    document.addEventListener("click", (e) => {
      if (!this.paletteDropdownWrap.contains(e.target)) {
        this.paletteDropdownWrap.classList.remove("open");
      }
    });

    document.querySelectorAll(".color-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const pal = btn.getAttribute("data-palette");
        this.setPalette(pal);
        this.paletteDropdownWrap.classList.remove("open");
        this.sound.playPop();
        this.showToast(`Applied ${pal.toUpperCase()} Color Palette!`, "success");
      });
    });

    // Favorites Nav & Drawer
    this.navFavoritesBtn.addEventListener("click", () => this.openFavoritesDrawer());
    this.drawerOverlay.addEventListener("click", () => this.closeFavoritesDrawer());
    this.closeDrawerBtn.addEventListener("click", () => this.closeFavoritesDrawer());
    this.clearAllFavsBtn.addEventListener("click", () => this.clearAllFavorites());

    // Surprise Me
    this.navSurpriseBtn.addEventListener("click", () => this.fetchRandomRecipe());

    // Dark/Light Theme Toggle
    this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());

    // Layout View Switcher (Grid vs List)
    this.viewGridBtn.addEventListener("click", () => this.setLayoutMode("grid"));
    this.viewListBtn.addEventListener("click", () => this.setLayoutMode("list"));

    // Mobile Menu Toggle
    this.mobileMenuBtn.addEventListener("click", () => {
      this.sound.playPop();
      this.mainNav.classList.toggle("mobile-open");
    });

    // Search Form & Input Handling
    this.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.sound.playPop();
      const val = this.searchInput.value.trim();
      if (val) {
        this.fetchRecipesByQuery(val);
      }
    });

    this.searchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      this.clearSearchBtn.style.display = val.length > 0 ? "inline-flex" : "none";

      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = setTimeout(() => {
        this.fetchRecipesByQuery(val.trim());
      }, 400);
    });

    this.clearSearchBtn.addEventListener("click", () => {
      this.sound.playPop();
      this.searchInput.value = "";
      this.clearSearchBtn.style.display = "none";
      this.searchInput.focus();
      this.fetchRecipesByQuery("");
    });

    // Trending Search Chips Delegation
    const trendingChips = document.getElementById("trending-chips");
    if (trendingChips) {
      trendingChips.addEventListener("click", (e) => {
        const chip = e.target.closest(".trend-chip");
        if (!chip) return;
        this.sound.playPop();
        const term = chip.getAttribute("data-search");
        this.searchInput.value = term;
        this.clearSearchBtn.style.display = "inline-flex";
        this.fetchRecipesByQuery(term);
        document.getElementById("recipes-section").scrollIntoView({ behavior: "smooth" });
      });
    }

    // Pantry Ingredient Tag Clicks
    this.pantryTagsContainer.addEventListener("click", (e) => {
      const tag = e.target.closest(".pantry-tag");
      if (!tag) return;
      const ing = tag.getAttribute("data-ing");
      this.togglePantryIngredient(ing, tag);
    });

    this.resetPantryBtn.addEventListener("click", () => this.resetPantry());
    this.pantryFindBtn.addEventListener("click", () => this.matchFridgeRecipes());

    // Category Pills Delegation
    this.categoryPillsContainer.addEventListener("click", (e) => {
      const pill = e.target.closest(".category-pill");
      if (!pill) return;
      this.sound.playPop();
      const category = pill.getAttribute("data-category");
      this.activeCategory = category;
      this.cuisineSelect.value = "all";
      this.renderCategoryPills();
      this.fetchRecipesByCategory(category);
    });

    // Cuisine Select Filter
    this.cuisineSelect.addEventListener("change", (e) => {
      this.sound.playPop();
      const cuisine = e.target.value;
      this.activeCategory = "All";
      this.renderCategoryPills();
      this.fetchRecipesByCuisine(cuisine);
    });

    // Duration Chips
    const durationChips = document.getElementById("duration-chips");
    if (durationChips) {
      durationChips.addEventListener("click", (e) => {
        const chip = e.target.closest(".duration-chip");
        if (!chip) return;
        const time = chip.getAttribute("data-time");
        this.setDurationFilter(time);
      });
    }

    // Sort Dropdown
    this.sortSelect.addEventListener("change", () => {
      this.sound.playPop();
      this.filterAndRender();
    });

    // Back to Top Button
    window.addEventListener("scroll", () => {
      if (window.scrollY > 380) {
        this.backToTopBtn.classList.add("visible");
      } else {
        this.backToTopBtn.classList.remove("visible");
      }
    });

    this.backToTopBtn.addEventListener("click", () => {
      this.sound.playPop();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Grid Recipe Card Clicks
    this.recipeGrid.addEventListener("click", async (e) => {
      const favBtn = e.target.closest(".card-favorite-btn");
      if (favBtn) {
        e.stopPropagation();
        const id = favBtn.getAttribute("data-id");
        const recipe = this.currentRecipes.find(r => r.idMeal === id);
        if (recipe) {
          this.toggleFavorite(recipe);
        }
        return;
      }

      const card = e.target.closest(".recipe-card");
      if (card) {
        const id = card.getAttribute("data-id");
        const recipeSummary = this.currentRecipes.find(r => r.idMeal === id);
        if (recipeSummary) {
          this.openRecipeModal(recipeSummary);
        }
      }
    });

    // Modal Close Button & Backdrop Click
    this.modalCloseBtn.addEventListener("click", () => this.closeRecipeModal());
    this.recipeModal.addEventListener("click", (e) => {
      if (e.target === this.recipeModal) {
        this.closeRecipeModal();
      }
    });

    // Fullscreen Cook Mode Controls
    this.cookModeExitBtn.addEventListener("click", () => this.closeCookMode());
    this.cookModeSpeechBtn.addEventListener("click", () => this.readCurrentStepAloud());

    this.cookModePrevBtn.addEventListener("click", () => {
      if (this.currentCookStepIndex > 0) {
        this.sound.playPop();
        this.currentCookStepIndex -= 1;
        this.updateCookModeUI();
      }
    });

    this.cookModeNextBtn.addEventListener("click", () => {
      if (this.currentCookStepIndex < this.cookModeSteps.length - 1) {
        this.sound.playPop();
        this.currentCookStepIndex += 1;
        this.updateCookModeUI();
      } else {
        this.sound.playSuccess();
        this.confetti.burst();
        this.showToast("🏆 You crushed this recipe! Bon appétit!", "success");
        setTimeout(() => this.closeCookMode(), 1200);
      }
    });

    this.cookModeCheckBtn.addEventListener("click", () => {
      this.sound.playSuccess();
      this.showToast("Step marked done!", "success");
      if (this.currentCookStepIndex < this.cookModeSteps.length - 1) {
        this.currentCookStepIndex += 1;
        this.updateCookModeUI();
      }
    });

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.cookModeOverlay.classList.contains("active")) {
          this.closeCookMode();
        } else if (this.recipeModal.open) {
          this.closeRecipeModal();
        } else if (this.favoritesDrawer.classList.contains("open")) {
          this.closeFavoritesDrawer();
        }
      }

      // Cook mode arrow keys
      if (this.cookModeOverlay.classList.contains("active")) {
        if (e.key === "ArrowRight") {
          this.cookModeNextBtn.click();
        } else if (e.key === "ArrowLeft") {
          this.cookModePrevBtn.click();
        }
      }
    });

    // Reset & Retry Handlers
    this.resetSearchBtn.addEventListener("click", () => {
      this.sound.playPop();
      this.searchInput.value = "";
      this.clearSearchBtn.style.display = "none";
      this.activeCategory = "All";
      this.activeCuisine = "all";
      this.activeDuration = "all";
      this.cuisineSelect.value = "all";
      this.renderCategoryPills();
      document.querySelectorAll(".duration-chip").forEach(c => c.classList.toggle("active", c.getAttribute("data-time") === "all"));
      this.fetchRecipesByQuery("chicken");
    });

    this.retryBtn.addEventListener("click", () => {
      this.fetchRecipesByQuery(this.searchInput.value.trim() || "chicken");
    });
  }
}

// Instantiate App on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.app = new RecipeApp();
});
