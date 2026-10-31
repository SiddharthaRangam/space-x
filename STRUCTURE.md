# 📂 Project Folder Structure Guide

## Clean Organization Overview

```
SPACE X (@latest)/
│
├── 📄 README.md                 ← Project documentation
├── 📄 package.json              ← Dependencies
├── 📄 vite.config.js            ← Build configuration
├── 📄 eslint.config.js          ← Linting rules
├── 📄 .gitignore                ← Git ignore file
│
├── 📁 public/                   ← Static assets
│   └── d-din/                   ← Custom fonts
│
├── 📁 src/                      ← Source code (organized!)
│   │
│   ├── 📁 components/           ← All React Components
│   │   ├── App.jsx              ← Root component with router
│   │   │
│   │   ├── 📁 layout/           ← Layout components
│   │   │   ├── Layout.jsx       ← Page wrapper
│   │   │   └── NavBar.jsx       ← Navigation header
│   │   │
│   │   └── 📁 pages/            ← Page components (routes)
│   │       ├── Home.jsx         ← Landing page
│   │       ├── StarShip.jsx     ← Starship carousel
│   │       └── StarSheild.jsx   ← StarShield info page
│   │
│   ├── 📁 config/               ← Configuration files
│   │   └── constants.js         ← All constants & data
│   │
│   ├── 📁 hooks/                ← Custom React hooks
│   │   └── useCountdown.js      ← Countdown timer hook
│   │
│   ├── 📁 styles/               ← Global styling
│   │   └── index.css            ← Global styles + Tailwind
│   │
│   ├── main.jsx                 ← React entry point
│   ├── index.html               ← HTML template
│
└── 📁 node_modules/             ← Dependencies (ignored)
```

---

## 📍 File Locations & Purposes

### 🧩 Components (`src/components/`)
**Purpose:** All React components organized by type

- **`App.jsx`** - Root component that sets up routing
  - Imports: Layout, Home, StarShip, StarSheild
  - Exports: RouterProvider setup

- **`layout/Layout.jsx`** - Main page wrapper
  - Imports: NavBar, Outlet (from React Router)
  - Renders: NavBar + page content

- **`layout/NavBar.jsx`** - Navigation & header
  - Imports: useCountdown hook, NAV_MENU_ITEMS
  - Renders: Logo, menus, countdown timer

- **`pages/Home.jsx`** - Landing page
  - Imports: BUTTON_STYLES
  - Renders: Hero sections, mission info

- **`pages/StarShip.jsx`** - Starship carousel page
  - Imports: STARSHIP_SLIDES
  - State: current slide index
  - Renders: Interactive carousel with slides

- **`pages/StarSheild.jsx`** - StarShield info page
  - Static content: Security info, features
  - Renders: Multiple sections with images & text

### ⚙️ Config (`src/config/`)
**Purpose:** Centralized application configuration & data

- **`constants.js`** - All constants and data
  - `BUTTON_STYLES` - Button CSS classes
  - `NAV_MENU_ITEMS` - Navigation menu structure
  - `STARSHIP_SLIDES` - Carousel slide data

### 🪝 Hooks (`src/hooks/`)
**Purpose:** Reusable React logic

- **`useCountdown.js`** - Countdown timer
  - Returns: { days, hours, minutes, seconds }
  - Usage: Updates every second automatically

### 🎨 Styles (`src/styles/`)
**Purpose:** Global styling

- **`index.css`** - Global CSS
  - Imports: Tailwind CSS
  - Custom fonts: D-DIN

### 📍 Root Files (`src/`)
- **`main.jsx`** - React app entry point
  - Imports: ReactDOM, App, index.css
  - Renders: App into #root element

---

## 🗺️ How to Navigate

### Finding a Component
1. **Page components** → Look in `components/pages/`
2. **Layout components** → Look in `components/layout/`
3. **Root component** → `components/App.jsx`

### Finding Configuration
1. **Constants/data** → `config/constants.js`
2. **Custom hooks** → `hooks/useCountdown.js`
3. **Styles** → `styles/index.css`

### Adding a New File
1. **New page?** → Add to `components/pages/`
2. **New layout component?** → Add to `components/layout/`
3. **New constant?** → Add to `config/constants.js`
4. **New hook?** → Add to `hooks/`
5. **New utility?** → Create `utils/` folder

---

## 📊 Organization Benefits

| Before | After |
|--------|-------|
| 😕 Files mixed at root | ✅ Organized by type |
| 😕 Hard to find files | ✅ Logical folder structure |
| 😕 Duplicate imports | ✅ Centralized data in config/ |
| 😕 Confusing relationships | ✅ Clear component hierarchy |
| 😕 Difficult to scale | ✅ Easy to add new features |

---

## 🚀 Development Tips

### Import Best Practices
```javascript
// ✅ Good - From within same folder
import Layout from './Layout'

// ✅ Good - From parent folders with relative paths
import { BUTTON_STYLES } from '../../config/constants'

// ❌ Avoid - Absolute imports (unless configured)
import App from '/src/components/App'
```

### When to Create New Folders
- When you have 3+ files of the same type → Create folder
- Example: After adding multiple utility functions → Create `utils/`
- Example: After adding multiple custom hooks → Create more hook files

### File Naming Conventions
- **Components:** PascalCase (Home.jsx, NavBar.jsx)
- **Utilities/Hooks:** camelCase (useCountdown.js)
- **Constants:** UPPER_SNAKE_CASE (BUTTON_STYLES)

---

**Last Updated:** 2026-06-24  
**Structure Version:** 1.0 (Organized & Clean)
