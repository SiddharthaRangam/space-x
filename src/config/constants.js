// Button Styles
export const BUTTON_STYLES = {
  primary: 'pl-5 pr-5 pt-2.5 pb-2.5 border border-gray-200 hover:bg-white hover:text-black font-light tracking-wider text-xs',
  secondary: 'uppercase pl-4 text-xs pr-8 pt-4 pb-4 hover:bg-white hover:text-black bg-black/50 hover:cursor-pointer rounded-xs',
  tertiary: 'uppercase pl-4 text-xs pr-8 pt-4 pb-4 hover:bg-white hover:text-black bg-black/50 hover:cursor-pointer rounded-xs border border-gray-500'
};

// Navigation Menu Items
export const NAV_MENU_ITEMS = {
  vehicles: [
    { label: 'Starship', path: '/starShip' },
    { label: 'Dragon', path: null },
    { label: 'Flacon 9', path: null },
    { label: 'Falcon Heavy', path: null }
  ],
  humanSpaceflight: [
    { label: 'Overview', path: null },
    { label: 'Space Station', path: null },
    { label: 'Earth Orbit 9', path: null },
    { label: 'The Moon', path: null },
    { label: 'Mars & Beyond', path: null }
  ],
  xai: [
    { label: 'Grok', path: null },
    { label: 'Grokipedia', path: null },
    { label: 'X 9', path: null }
  ],
  company: [
    { label: 'Missions', path: null },
    { label: 'Careers', path: null },
    { label: 'Updates', path: null },
    { label: 'Contents', path: null }
  ],
  shop: [
    { label: 'Space X', path: null },
    { label: 'xAi', path: null }
  ]
};

// StarShip Slides Data
export const STARSHIP_SLIDES = [
  {
    title: "Starship Overview",
    video: "https://content.spacex.com/cms-assets/assets/V3_FS_MOBILE.mp4",
    description: "SpaceX's Starship spacecraft and Super Heavy rocket - collectively referred to as Starship - represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship is the world's most powerful launch vehicle ever developed, designed to carry more than 100 metric tonnes to orbit in a fully reusable configuration.",
    height: "124 m / 407 ft",
    diameter: "9 m / 29.5 ft",
    payload: "100+ t"
  },
  {
    title: "Starship",
    video: "https://content.spacex.com/cms-assets/assets/V3_SHIP_MOBILE.mp4",
    description: "Starship is the spacecraft and upper stage of the overall Starship system and is being designed for full reusability. The vehicle is planned to come in several different configurations and is designed to carry crew and cargo to Earth orbit, the Moon, Mars, and beyond. Starship's design could one day enable point-to-point transport on Earth, facilitating travel to anywhere in the world in one hour or less.",
    height: "52 m / 171 ft",
    diameter: "9 m / 29.5 ft",
    propellent_Capacity: "1,600 t /3.5 mlb",
    thrust: "1,614 ft / 3.5mlbf",
    payload: "100+ t"
  },
  {
    title: "Raptor Engine",
    video: "https://content.spacex.com/cms-assets/assets/RAPTOR_VACUUM.mp4",
    description: "The Raptor engine is a reusable methane-oxygen staged-combustion engine that powers the Starship system and has twice the thrust of the Falcon 9 Merlin engine. Starship is powered by six engines, three Raptor engines, and three Raptor Vacuum (RVac) engines, which are designed for use in the vacuum of space. Super Heavy is powered by 33 Raptor engines, with 13 maneuverable engines in the center and the remaining 20 around the perimeter of the booster's aft end.",
    height: "3.1 m",
    diameter: "1.3 m",
    payload: "230 tf"
  },
  {
    title: "Super Heavy",
    video: "https://content.spacex.com/cms-assets/assets/V3_BOOSTER_MOBILE.mp4",
    description: "Super Heavy is the first stage, or booster, of the Starship launch system. Powered by 33 Raptor engines using sub-cooled liquid methane (CH4) and liquid oxygen (LOX), Super Heavy is designed to be fully reusable by returning back to the launch site to be caught by the launch tower and then rapidly reused.",
    height: "71 m",
    diameter: "9 m",
    payload: "33 Raptors"
  }
];
