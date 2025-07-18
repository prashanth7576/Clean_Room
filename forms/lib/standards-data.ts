export const standardsData = {
  headers: {
    EUGMP: "EUGMP",
    WHO: "WHO",
    TGA: "TGA",
    BS5295: "BS 5295",
    GERMANYVD: "GERMANY VD",
    AFNORX44101: "AFNORX44101",
    DEF: "DEF",
    NC: "NC-Non Classified",
  },
  rows: [
    {
      EUGMP: "Grade D (ISO 7 at Rest & ISO 8 in Oper.)",
      WHO: "Asia",
      TGA: "3500 K",
      BS5295: null,
      GERMANYVD: null,
      AFNORX44101: null,
      DEF: "20",
      NC: "20µ",
    },
    {
      EUGMP: "Grade C (ISO 7 at Rest & ISO 7 in Oper.)",
      WHO: "Africa",
      TGA: "350 J",
      BS5295: "J",
      GERMANYVD: "6",
      AFNORX44101: "4000000",
      DEF: "21",
      NC: "15µ",
    },
    {
      EUGMP: "Grade B (ISO 5 at Rest & ISO 7 in Oper.)",
      WHO: "North America",
      TGA: "35 G or H",
      BS5295: "G or H",
      GERMANYVD: "5",
      AFNORX44101: "400000",
      DEF: "22",
      NC: "10µ",
    },
    {
      EUGMP: "Grade A (ISO 5 at Rest & ISO 5 in Oper.)",
      WHO: "South America",
      TGA: "3.5 E or F",
      BS5295: "E or F",
      GERMANYVD: "4",
      AFNORX44101: null,
      DEF: "23",
      NC: "5µ",
    },
    {
      EUGMP: null,
      WHO: "Antarctica",
      TGA: "0.35 D",
      BS5295: "D",
      GERMANYVD: "3",
      AFNORX44101: "4000",
      DEF: "24",
      NC: "1µ",
    },
    {
      EUGMP: null,
      WHO: "France",
      TGA: "0.035 C",
      BS5295: "C",
      GERMANYVD: "2",
      AFNORX44101: null,
      DEF: "25",
      NC: "No-Filtration",
    },
    {
      EUGMP: null,
      WHO: "Australia",
      TGA: null,
      BS5295: null,
      GERMANYVD: "1",
      AFNORX44101: null,
      DEF: "26",
      NC: "Positive Pressure",
    },
    { EUGMP: null, WHO: null, TGA: null, BS5295: null, GERMANYVD: "0", AFNORX44101: null, DEF: null, NC: "Exhaust" },
  ],
}

export const filterOptions = {
  column1: ["20 M Supply", "20 M Exhaust", "10 M Supply", "10 M Exhaust", "5 M Supply", "5 M Exhaust", "1 M Supply"],
  column2: [
    "1 M Exhaust",
    "0.3 M HEPA 95% Supply",
    "0.3 M HEPA 95% Exhaust",
    "0.3 M HEPA 99.97% Supply",
    "0.3 M HEPA 99.97% Exhaust",
    "0.12 M ULPA 99.995% Supply",
    "0.12 M ULPA 99.995% Exhaust",
  ],
}

export const ahuSpecOptions = [
  "25mm Thick Panel & AL Profile",
  "Panels with both side 24G Precoated GI Sheet",
  "Aluminium Profile VCD for Fresh Air- Supply Air & Return Air",
  "Fire Control Damper for Supply & Return Air",
  "Variable Frequency Drive (VFD) - Not Required",
  "Pressure Guage (0-25mm) for 5 Micr Filter Section",
]

// Data derived from the user's "Bill of Design" CSV file.
// Default selections are set to produce the correct total of 145.
export const pressureDropData = [
  {
    initialValue: "0",
    code: "d29",
    description: "Pressure Guage (0-25mm) for 10 Micr Filter Section",
    pressureDrop: "5",
    guageSelected: "8 / 0-25",
    selected: false,
  },
  {
    initialValue: "0",
    code: "d30",
    description: "Pressure Guage (0-25mm) for 5 Micr Filter Section",
    pressureDrop: "6",
    guageSelected: "12 / 0-25",
    selected: false,
  },
  {
    initialValue: "12",
    code: "d31",
    description: "Pressure Guage (0-25mm) for 1 Micr Filter Section",
    pressureDrop: "8",
    guageSelected: "18 / 0-25",
    selected: false,
  },
  {
    initialValue: "0",
    code: "d32",
    description: "Pressure Guage (0-100 mm) for 0.3 Mic HEPA Filter Section",
    pressureDrop: "10",
    guageSelected: "20 / 0-25",
    selected: false,
  },
  {
    initialValue: "18",
    code: "d33",
    description: "Pressure Guages For All 10, 5, 1, & 0.3(HEPA) Micr Filter Sections",
    pressureDrop: "18",
    guageSelected: "50 / 0-50",
    selected: false,
  },
  {
    initialValue: "0",
    code: "d34",
    description: "Item",
    pressureDrop: "15",
    guageSelected: "25 / 0-50",
    selected: false,
  },
  {
    initialValue: "20",
    code: "d35",
    description: "Pressure Drop for 20 Micr Filter (150 mm / 100 mm Thick )",
    pressureDrop: "15",
    guageSelected: "25 / 0-50",
    selected: true,
  },
  {
    initialValue: "0",
    code: "e29",
    description: "Pressure Drop for 10 Micr Filter ( 150 mm Thick )",
    pressureDrop: "",
    guageSelected: "",
    selected: false,
  },
  {
    initialValue: "50",
    code: "e30",
    description: "Pressure Drop for 5 Micr Filter ( 300 mm Thick )",
    pressureDrop: "",
    guageSelected: "",
    selected: true,
  },
  {
    initialValue: "0",
    code: "e31",
    description: "Pressure Drop for 1 Micr Filter ( 300 mm Thick )",
    pressureDrop: "",
    guageSelected: "",
    selected: false,
  },
  {
    initialValue: "0",
    code: "e32",
    description: "Pressure Drop for 0.3 Micr Filter 95% Eff ( 300 mm Thick )",
    pressureDrop: "",
    guageSelected: "",
    selected: false,
  },
  {
    initialValue: "0",
    code: "e33",
    description: "Pressure Drop for 0.3 Micr Filter 99.97% Eff (150 mm Thick)",
    pressureDrop: "",
    guageSelected: "",
    selected: false,
  },
  {
    initialValue: "0",
    code: "e34",
    description: "Pressure Drop for 0.12 Micr Filter 99.995% Eff ( 70-150 mm Thick )",
    pressureDrop: "",
    guageSelected: "",
    selected: false,
  },
  {
    initialValue: "0",
    code: "e35",
    description: "Terminal Return Air Filters and suctional pressure drop",
    pressureDrop: "12",
    guageSelected: "25",
    selected: false,
  },
  {
    initialValue: "15",
    code: "j43",
    description: "Pressure Drop for 100' distance in ducting",
    pressureDrop: "",
    guageSelected: "",
    selected: true,
  },
  {
    initialValue: "10",
    code: "j42",
    description: "Cowls, Bends, Elbows, offsets,collars,plenums,Y Branches,grills,etc",
    pressureDrop: "12",
    guageSelected: "25",
    selected: true,
  },
  {
    initialValue: "0",
    code: "j45",
    description: "each one will have a 0.5 mm PD with quantity*0.5 mm approx",
    pressureDrop: "24",
    guageSelected: "50",
    selected: false,
  },
  {
    initialValue: "50",
    code: "j46",
    description: "Total Pressure drop in ducting approximately",
    pressureDrop: "",
    guageSelected: "",
    selected: true,
  },
]
