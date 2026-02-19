// Haupt-Datendatei – kombiniert alle Kategorie-Dateien
// Neue Rezepte bitte in die jeweilige Kategorie-Datei eintragen:
//   data-bratwurst.js       → Bratwurst
//   data-bruehwurst.js      → Brühwurst
//   data-fleischkaese.js    → Fleischkäse
//   data-rohwurst.js        → Rohwurst
//   data-leberwurst.js      → Leberwurst
//   data-blutwurst.js       → Blutwurst
//   data-schinken.js        → Schinken
//   data-aspik.js           → Aspik & Sülze
//   data-wurst-im-glas.js   → Wurst im Glas
//   data-salami.js          → Salami
//   data-wildwurst.js       → Wildwurst
//   data-schmalz.js         → Schmalz & Spezialitäten
//   data-sonstiges.js       → Sonstiges
//   data-brot.js            → Brot

// Wird durch index.html nach allen Kategorie-Dateien geladen.
// Kombiniert alle Teil-Arrays zu einem globalen `rezepte`-Array.
const rezepte = [
    ...rezepte_bratwurst,
    ...rezepte_bruehwurst,
    ...rezepte_fleischkaese,
    ...rezepte_rohwurst,
    ...rezepte_leberwurst,
    ...rezepte_blutwurst,
    ...rezepte_schinken,
    ...rezepte_aspik,
    ...rezepte_wurst_im_glas,
    ...rezepte_salami,
    ...rezepte_wildwurst,
    ...rezepte_schmalz,
    ...rezepte_sonstiges,
    ...rezepte_brot,
];
