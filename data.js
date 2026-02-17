const rezepte = [

    // ═══════════════════════════════════════════
    // BRATWURST & GRILLWURST
    // ═══════════════════════════════════════════

    {
        id: 1,
        titel: "BBC Grillwurst",
        kategorie: "Bratwurst",
        beschreibung: "Rauchige Grillwurst mit Liquid Smoke und Bulls-Eye BBQ-Soße",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 4000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 3000, einheit: "g" },
            { name: "Schweinebauch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Liquid Smoke", menge: 20, einheit: "cl" },
            { name: "Bulls-Eye Dark Beer BBQ-Soße", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 20, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Paprika (süß oder scharf)", menge: 10, einheit: "g", proKg: true },
            { name: "Chillipulver", menge: 0.5, einheit: "g", proKg: true },
            { name: "Knoblauch (gehackt oder Pulver)", menge: 10, einheit: "g", proKg: true }
        ],
        darm: { typ: "Lammsaitlinge", kaliber: "24/26", menge: "ca. 8 m für 4 kg" },
        ausgabe: "ca. 50-60 Würste (20 cm)",
        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    { titel: "Fleisch vorbereiten", inhalt: "Schulter und Bauch in Würfel schneiden, Speck gefroren und Fleisch angefroren halten." },
                    { titel: "Wolfen", inhalt: "Fleisch und Speck nacheinander durch grobe Lochscheibe drehen." }
                ]
            },
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Würzen und mischen", inhalt: "Gewürze und Liquid Smoke zugeben, 8–10 Minuten in der Küchenmaschine auf mittlerer Stufe vermengen bis gute Bindung entsteht. Temperatur im Auge behalten!" },
                    { titel: "Abfüllen", inhalt: "Darm aufziehen, gleichmäßig befüllen (nicht zu fest). Zu 20 cm Würsten abdrehen." }
                ]
            }
        ],
        tipps: [
            "Alternativ bei 72°C brühen (ca. 1 Min. pro mm Dicke ≈ 25 Min.)",
            "BBQ-Soße nach Belieben beim Grillen auftragen",
            "Einen Tag im Kühlschrank durchziehen oder vakuumieren und einfrieren"
        ]
    },
    {
        id: 2,
        titel: "Bärlauch-Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Frühlings-Bratwurst mit frischem Bärlauch und Olivenöl",
        quelle: "BRat und Grillwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauch (ohne Knochen)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Bärlauch (frisch)", menge: 4, einheit: "EL" },
            { name: "Olivenöl", menge: 3, einheit: "EL" }
        ],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel (gemahlen)", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 8-10 Würstchen",
        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    { titel: "Fleisch vorbereiten", inhalt: "Bauchfleisch von Knochen befreien und in Stücke schneiden." },
                    { titel: "Bärlauchpaste herstellen", inhalt: "Bärlauch mixen, Salz und Olivenöl zugeben." }
                ]
            },
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen, Gewürze und Bärlauchpaste zugeben und gut vermengen." },
                    { titel: "Abfüllen", inhalt: "Masse in Schweinedärme füllen." }
                ]
            }
        ],
        tipps: [
            "Bärlauch gibt es nur kurz im Frühling – größere Menge machen und einfrieren",
            "Frischer Bärlauch ist deutlich intensiver als Pulver"
        ]
    },
    {
        id: 3,
        titel: "Bärlauch Grillwurst ala Kajo (gebrüht)",
        kategorie: "Brühwurst",
        beschreibung: "Ausgekutterte Brühwurst mit Bärlauch, Milch und Eiswasser – saftig und aromatisch",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 2100 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 900, einheit: "g" },
            { name: "Schweinenacken", menge: 450, einheit: "g" },
            { name: "Schweinebauch", menge: 450, einheit: "g" },
            { name: "Rindfleisch (optional)", menge: 150, einheit: "g" },
            { name: "Fetter Speck", menge: 150, einheit: "g" }
        ],
        zutaten: [
            { name: "Bärlauch (frisch)", menge: 100, einheit: "g" },
            { name: "Eiskalte Milch", menge: 250, einheit: "ml" },
            { name: "Eiswasser", menge: 420, einheit: "ml" },
            { name: "Milchpulver", menge: 2.5, einheit: "TL" }
        ],
        gewuerze: [
            { name: "Salz", menge: 16, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 4.8, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1.9, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.5, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1, einheit: "g", proKg: true },
            { name: "Zitronenabrieb", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "22/24", menge: "passend" },
        ausgabe: "ca. 30-35 Würstchen",
        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    { titel: "Fleisch kühlen und wolfen", inhalt: "Alle Fleischsorten gut kühlen, in Würfel schneiden, durch 2–3 mm Scheibe wolfen." }
                ]
            },
            {
                gruppe: "Kutter",
                schritte: [
                    { titel: "Ankuttern", inhalt: "Gewolftes Fleisch mit Gewürzen und Bärlauch in den Kutter geben und ankuttern." },
                    { titel: "Milch und Eiswasser zugeben", inhalt: "Eiskalte Milch und Eiswasser nach und nach zugeben. Bis auf 5°C Brättemperatur auskuttern." }
                ]
            },
            {
                gruppe: "Abfüllen und Brühen",
                schritte: [
                    { titel: "Abfüllen", inhalt: "Masse in Schweinedarm 22/24 füllen." },
                    { titel: "Brühen", inhalt: "Bei 70–75°C in Salzwasser (1 L Wasser + 17 g Salz) 30 Min. ziehen lassen." },
                    { titel: "Abkühlen", inhalt: "Abkühlen lassen und vakuumieren." }
                ]
            }
        ],
        tipps: [
            "Brättemperatur beim Kuttern immer kontrollieren – max. 12°C"
        ]
    },
    {
        id: 4,
        titel: "Bratwurst Parmesan-Zitrone",
        kategorie: "Bratwurst",
        beschreibung: "Italienische Bratwurst mit Parmesan, Petersilie, Riesling und Zitrone",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 4000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 2800, einheit: "g" },
            { name: "Schweinebauch", menge: 1200, einheit: "g" }
        ],
        zutaten: [
            { name: "Petersilie (frisch)", menge: 300, einheit: "g" },
            { name: "Parmesan (gerieben)", menge: 600, einheit: "g" },
            { name: "Riesling", menge: 400, einheit: "ml" },
            { name: "Bio-Zitrone (Abrieb)", menge: 2, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 15, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Chiliflocken (gemörsert)", menge: 2, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30 oder 24/26", menge: "10 m 28/30, 12 m 24/26" },
        ausgabe: "ca. 50-60 Würstchen",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Fleisch vorbereiten und wolfen", inhalt: "Schulter und Bauch würfeln, kühlen, wolfen." },
                    { titel: "Alles vermengen", inhalt: "Gewürze, Parmesan, Petersilie, Zitronenabrieb und Riesling zugeben und gründlich verkneten." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme füllen und abdrehen." }
                ]
            }
        ],
        tipps: [
            "Riesling ersetzt Wasser – macht das Brät besonders saftig"
        ]
    },
    {
        id: 5,
        titel: "Bratwurst ala´ Pappa",
        kategorie: "Bratwurst",
        beschreibung: "Klassisches Familienrezept mit Pökelsalz, Pfeffer und Muskat",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 4000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 3000, einheit: "g" },
            { name: "Schweinebauch", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Nitrat-Pökelsalz", menge: 15, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Muskat", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 40-50 Bratwürstchen",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Fleisch durch 4,5 mm Scheibe wolfen." },
                    { titel: "Würzen und abfüllen", inhalt: "Pökelsalz, Pfeffer und Muskat einkneten, in Därme füllen." }
                ]
            }
        ],
        tipps: [
            "Auch für Bratwurst im Glas: Gläser ¾ voll füllen, 1 Stunde bei 90°C einwecken"
        ]
    },
    {
        id: 6,
        titel: "Kräuter der Provence Wurst",
        kategorie: "Bratwurst",
        beschreibung: "Mediterrane Grillwurst mit Thymian, Rosmarin, Salbei und Wacholder",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 4000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 3000, einheit: "g" },
            { name: "Schweinebauch", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Meersalz", menge: 20, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Thymian", menge: 7.5, einheit: "g", proKg: true },
            { name: "Rosmarin", menge: 7.5, einheit: "g", proKg: true },
            { name: "Salbei", menge: 3.75, einheit: "g", proKg: true },
            { name: "Petersilie", menge: 3.75, einheit: "g", proKg: true },
            { name: "Liebstöckel", menge: 4, einheit: "g", proKg: true },
            { name: "Zitronenabrieb", menge: 0.5, einheit: "g", proKg: true },
            { name: "Wacholderbeeren (gemörsert)", menge: 0.75, einheit: "Stk.", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "24/26", menge: "ca. 16 m für 4 kg" },
        ausgabe: "ca. 50-60 Würstchen",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Fleisch in Würfel schneiden, kühlen, wolfen." },
                    { titel: "Würzen und abfüllen", inhalt: "Alle Kräuter und Gewürze einkneten, in Darm 24/26 füllen." }
                ]
            }
        ],
        tipps: [
            "Frische Kräuter verwenden: doppelte Menge nehmen",
            "Wacholderbeeren immer frisch mörsern"
        ]
    },
    {
        id: 7,
        titel: "Mexikanische Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Feurige Bratwurst mit Mais, geräucherter Paprika, Habanero und Koriander",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 2000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 1500, einheit: "g" },
            { name: "Schweinebauch", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Mais (kleine Dose)", menge: 2, einheit: "Dosen" },
            { name: "Geräucherte Paprika (Glas, gar)", menge: 1, einheit: "Glas" },
            { name: "Habanero Chili", menge: 1, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 16, einheit: "g", proKg: true },
            { name: "Schwarze Pfefferkörner", menge: 4, einheit: "g", proKg: true },
            { name: "Chilipulver", menge: 2, einheit: "g", proKg: true },
            { name: "Paprikapulver edelsüß", menge: 2, einheit: "g", proKg: true },
            { name: "Paprikapulver geräuchert", menge: 1, einheit: "g", proKg: true },
            { name: "Koriander", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "ca. 4 m für 2 kg" },
        ausgabe: "ca. 12-15 Würste (15 cm)",
        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    { titel: "Fleisch sehr kalt stellen", inhalt: "Fleisch parieren, zerkleinern, Speck gefroren / Fleisch angefroren halten." },
                    { titel: "Einlagen vorbereiten", inhalt: "Habanero fein hacken, Paprika aus dem Glas fein hacken." }
                ]
            },
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen und mischen", inhalt: "Fleisch durch grobe Lochscheibe drehen. Gewürze, Habanero, Mais und Paprika unterheben und gut verkneten." },
                    { titel: "Abfüllen", inhalt: "Darm aufziehen, gleichmäßig befüllen (nicht zu fest). Zu 15 cm Würsten abdrehen." }
                ]
            }
        ],
        tipps: [
            "Einen Tag im Kühlschrank durchziehen oder vakuumieren und einfrieren",
            "Fleischmasse nie über 5°C steigen lassen"
        ]
    },
    {
        id: 8,
        titel: "Paprika-Grillwurst",
        kategorie: "Bratwurst",
        beschreibung: "Klassische Paprika-Grillwurst mit frischem Knoblauch",
        quelle: "BRat und Grillwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 800, einheit: "g" },
            { name: "Schweinebauch (mit Fleisch)", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Knoblauch (frisch)", menge: 5, einheit: "g" }
        ],
        gewuerze: [
            { name: "Salz", menge: 25, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer (gemahlen)", menge: 3, einheit: "g", proKg: true },
            { name: "Paprika edelsüß (gemahlen)", menge: 11, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweine- oder Schafsdarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 5-6 Würstchen (20-25 cm)",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Fleisch, Bauch und Knoblauch gemeinsam durch 4,5 mm Scheibe wolfen." },
                    { titel: "Würzen und abfüllen", inhalt: "Gewürze gründlich einarbeiten, luftfrei in Därme füllen, 20–25 cm lang abbinden." }
                ]
            }
        ],
        tipps: [
            "Sofort grillen oder 3–4 Tage kalt räuchern"
        ]
    },
    {
        id: 9,
        titel: "Paprika-Grillwurst (NPS-Version)",
        kategorie: "Bratwurst",
        beschreibung: "Paprika-Grillwurst mit Nitritpökelsalz für längere Haltbarkeit und Rauchoption",
        quelle: "Wurstmachen Mai 2019",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 800, einheit: "g" },
            { name: "Schweinebauch", menge: 200, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 25, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer (gemahlen)", menge: 4, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 15, einheit: "g", proKg: true },
            { name: "Knoblauch Granulat", menge: 7, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweine- oder Schafsdarm (Saitlinge)", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 5-6 Würste (20-25 cm)",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen und mischen", inhalt: "Fleisch durch 4,5 mm Scheibe drehen. Gewürze zugeben und mit Küchenmaschine zu guter Bindung vermengen." },
                    { titel: "Abfüllen", inhalt: "Luftfrei in Schweine- oder Schafsdärme füllen, 20–25 cm lang abbinden." }
                ]
            }
        ],
        tipps: [
            "Nach dem Ablüften 3–4 mal 12 Stunden kalt räuchern für Pfefferbeißer-Charakter"
        ]
    },
    {
        id: 10,
        titel: "Salsicca Wurst",
        kategorie: "Bratwurst",
        beschreibung: "Italienische Salsicca mit Fenchel, Koriander und Rosenpaprika",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 4000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 2800, einheit: "g" },
            { name: "Schweinebauch", menge: 1200, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Meersalz", menge: 17.5, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 1, einheit: "g", proKg: true },
            { name: "Fenchelsaat (geschrotet)", menge: 4, einheit: "g", proKg: true },
            { name: "Koriander (gemahlen)", menge: 1, einheit: "g", proKg: true },
            { name: "Rosenpaprika", menge: 1, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "ca. 10 m für 4 kg" },
        ausgabe: "ca. 40-50 Würstchen",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen und würzen", inhalt: "Fleisch kühlen, wolfen, alle Gewürze einkneten." },
                    { titel: "Abfüllen", inhalt: "In Schweinedarm 28/30 füllen und abdrehen." }
                ]
            }
        ],
        tipps: [
            "Fenchelsaat frisch schroten für maximales Aroma"
        ]
    },
    {
        id: 11,
        titel: "Tomaten-Mozzarella Wurst",
        kategorie: "Bratwurst",
        beschreibung: "Mediterrane Bratwurst mit getrockneten Tomaten, Mozzarella und Oliven",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 2000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 1500, einheit: "g" },
            { name: "Schweinebauch", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Getrocknete Tomaten (in Olivenöl)", menge: 200, einheit: "g" },
            { name: "Mozzarella", menge: 125, einheit: "g" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 17.5, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Oregano", menge: 2, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "ca. 4 m für 2 kg" },
        ausgabe: "ca. 12-14 Würste (15 cm)",
        schritte: [
            {
                gruppe: "Vorbereitung (Vortag)",
                schritte: [
                    { titel: "Tomaten einlegen", inhalt: "Getrocknete Tomaten einen Tag vorher in Olivenöl einlegen und quellen lassen." }
                ]
            },
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Fleisch vorbereiten", inhalt: "Bauch und Nacken sehr kalt stellen (Speck gefroren, Fleisch angefroren)." },
                    { titel: "Gewürze einarbeiten und wolfen", inhalt: "Gewürze über das Fleisch geben, vermengen, gemeinsam mit Tomaten durch feine Lochscheibe drehen." },
                    { titel: "Mozzarella unterheben", inhalt: "Mozzarellawürfel unter die gewolfte Masse heben, gut verkneten. Temperatur kontrollieren!" },
                    { titel: "Abfüllen", inhalt: "Gleichmäßig in Darm füllen (nicht zu fest), zu 15 cm Würsten abdrehen." }
                ]
            }
        ],
        tipps: [
            "Einlagen müssen sehr kalt sein – sonst verschmiert der Mozzarella",
            "Einen Tag im Kühlschrank durchziehen lassen"
        ]
    },
    {
        id: 12,
        titel: "Thüringer Rostbratwurst (original)",
        kategorie: "Bratwurst",
        beschreibung: "Überliefertes Rezept ohne Zusätze – mit Ei und Milch, wie bei der Hausschlachtung",
        quelle: "BRat und Grillwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter (50%)", menge: 500, einheit: "g" },
            { name: "Schweinebauch (50%)", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Eier", menge: 4, einheit: "Stück" },
            { name: "Kalte Milch", menge: 250, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Kümmel (gestoßen)", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Kümmel (gemahlen)", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "22/24", menge: "passend" },
        ausgabe: "ca. 8-10 Würstchen",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Fleisch wolfen." },
                    { titel: "Würzen und binden", inhalt: "Gewürze, Eier und kalte Milch zugeben und kneten bis das Brät bindet." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme füllen und abdrehen." }
                ]
            }
        ],
        tipps: [
            "Eier und Milch verbinden ohne Zusatzstoffe",
            "Direkt auf dem Rost grillen – kein Fett nötig"
        ]
    },
    {
        id: 13,
        titel: "Thüringer Rostbratwurst gebrüht",
        kategorie: "Brühwurst",
        beschreibung: "Saftige Thüringer Bratwurst mit Milch, Eiern, Kümmel und Knoblauch – gebrüht",
        quelle: "Wursten",
        basisMenge: { gesamt: 3000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 3000, einheit: "g" }
        ],
        zutaten: [
            { name: "Milch", menge: 300, einheit: "ml" },
            { name: "Eier", menge: 3, einheit: "Stück" },
            { name: "Knoblauchzehen (frisch)", menge: 6, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 18, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel (gemahlen)", menge: 5, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30 oder 24/26", menge: "10 m 28/30, 12 m 24/26" },
        ausgabe: "ca. 35-40 Würste",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Schweinebauch wolfen." },
                    { titel: "Mischen", inhalt: "Alle Gewürze, Milch, Eier und gepressten Knoblauch zugeben und gut verkneten." },
                    { titel: "Abfüllen", inhalt: "In Därme füllen und abdrehen." },
                    { titel: "Brühen", inhalt: "Bei 72°C brühen: pro mm Dicke 1 Minute (ca. 25 Minuten für 25 mm Darm)." }
                ]
            }
        ],
        tipps: [
            "Pro mm Dicke 1 Minute bei 72°C brühen"
        ]
    },
    {
        id: 14,
        titel: "Thüringer Grillwurst ala Kajo",
        kategorie: "Brühwurst",
        beschreibung: "Ausgekutterte Thüringer Grillwurst mit Kümmel, Macis und Milch",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 2100 },
        fleischsorten: [
            { name: "Schweineschulter (75%)", menge: 1575, einheit: "g" },
            { name: "Schweinebauch (25%)", menge: 525, einheit: "g" }
        ],
        zutaten: [
            { name: "Eiskalte Milch", menge: 120, einheit: "ml" },
            { name: "Eiswasser", menge: 200, einheit: "ml" },
            { name: "Milchpulver", menge: 1, einheit: "TL" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel (gestoßen)", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Macis (Muskatblüte)", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel (gemahlen)", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "22/24", menge: "passend" },
        ausgabe: "ca. 25-30 Würstchen",
        schritte: [
            {
                gruppe: "Wolfen und Kutter",
                schritte: [
                    { titel: "Kühlen und wolfen", inhalt: "Fleisch kühlen, in Würfel schneiden, durch 2–3 mm Scheibe wolfen." },
                    { titel: "Ankuttern und auskuttern", inhalt: "Mit Gewürzen ankuttern, dann eiskalte Milch und Eiswasser zugeben. Bis auf 5°C Brättemperatur auskuttern." }
                ]
            },
            {
                gruppe: "Abfüllen und Brühen",
                schritte: [
                    { titel: "Abfüllen", inhalt: "In Schweinedarm 22/24 füllen." },
                    { titel: "Brühen", inhalt: "Bei 70–75°C in Salzwasser (1 L + 16 g Salz) 30 Minuten ziehen lassen." },
                    { titel: "Abkühlen", inhalt: "Abkühlen, sofort grillen oder vakuumieren und einfrieren." }
                ]
            }
        ],
        tipps: [
            "Kümmel gestoßen und gemahlen verwenden – gibt die typische Struktur"
        ]
    },
    {
        id: 15,
        titel: "Red Drust Wurst im Glas",
        kategorie: "Wurst im Glas",
        beschreibung: "Würzige Grillfleisch-Wurst im Glas mit Red Drust Rub und frischem Knoblauch",
        quelle: "Wurstmachen Mai 2019",
        basisMenge: { gesamt: 2500 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 1250, einheit: "g" },
            { name: "Schweinebauch", menge: 1250, einheit: "g" }
        ],
        zutaten: [
            { name: "Knoblauchzehen (frisch gepresst)", menge: 4, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "NPS", menge: 20, einheit: "g", proKg: true },
            { name: "Red Drust Rubb", menge: 8, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Bunte Pfefferkörner (geschrotet)", menge: 1.2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Einmachgläser", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 4-5 Gläser",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Fleisch wolfen und würzen", inhalt: "Fleisch wolfen, alle Gewürze und Knoblauch einkneten." },
                    { titel: "Einkochen", inhalt: "In Gläser füllen (nur ¾ voll), 2 Stunden bei 100°C einkochen." }
                ]
            }
        ],
        tipps: [
            "Gläser nur ¾ füllen – Wurst dehnt sich beim Kochen aus"
        ]
    },

    // ═══════════════════════════════════════════
    // ROHWURST & PFEFFERBEISSER
    // ═══════════════════════════════════════════

    {
        id: 16,
        titel: "Mettwurst geräuchert",
        kategorie: "Rohwurst",
        beschreibung: "Klassische geräucherte Mettwurst mit NPS, Paprika und Ingwer",
        quelle: "Grill u. Bratwurst",
        basisMenge: { gesamt: 2500 },
        fleischsorten: [
            { name: "Schweinenacken oder Schulter", menge: 2000, einheit: "g" },
            { name: "Schweinebauch", menge: 500, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Nitritpökelsalz (NPS)", menge: 18, einheit: "g", proKg: true },
            { name: "Paprika", menge: 2, einheit: "g", proKg: true },
            { name: "Senfpulver", menge: 1.2, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 1.2, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.2, einheit: "g", proKg: true },
            { name: "Macis (Muskatblüte)", menge: 0.2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm oder Kunstdarm", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 5-6 Mettwürste",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen und pökeln", inhalt: "Fleisch wolfen, Gewürze einkneten, 24 h im Kühlschrank pökeln." },
                    { titel: "Abfüllen und räuchern", inhalt: "Fest in Därme füllen, abbinden und kalt räuchern." }
                ]
            }
        ],
        tipps: [
            "NPS verwenden – kein normales Salz!",
            "Kalt räuchern – nicht warm"
        ]
    },
    {
        id: 17,
        titel: "Pfefferbeißer ala Dirk Spanhoff",
        kategorie: "Rohwurst",
        beschreibung: "Kräftiger Pfefferbeißer mit buntem Pfeffer, Paprika scharf und Knoblauch",
        quelle: "Pfefferbeißer",
        basisMenge: { gesamt: 20730 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 6385, einheit: "g" },
            { name: "Schweinebauch", menge: 6265, einheit: "g" },
            { name: "Schweineschulter", menge: 8080, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 35, einheit: "g", proKg: true },
            { name: "Paprika scharf", menge: 8, einheit: "g", proKg: true },
            { name: "Bunter Pfeffer", menge: 9, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 5, einheit: "g", proKg: true },
            { name: "Zwiebelgranulat", menge: 5, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: null, einheit: "nach Geschmack", proKg: false },
            { name: "Ascorbinsäure", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schafssaitlinge oder Naturin R2L-D", kaliber: "16/18–22/24 oder 38", menge: "passend" },
        ausgabe: "ca. 80-100 Pfefferbeißer",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Kaltes Fleisch würfeln, Gewürze drüber streuen, gut vermengen. Durch 8 mm Scheibe wolfen." },
                    { titel: "Kneten", inhalt: "Brät gut kneten (Küchenmaschine) bis gute Bindung entsteht und klebt." },
                    { titel: "Abfüllen", inhalt: "Luftfrei in gewässerten Darm pressen, auf gewünschte Länge abbinden." }
                ]
            },
            {
                gruppe: "Reifung",
                schritte: [
                    { titel: "Umröten und trocknen", inhalt: "2 Tage an kühlem Ort (ca. 12°C) hängen. Naturin-Darm 38: 4–5 Tage." },
                    { titel: "Kalträuchern", inhalt: "3–4 mal 12–16 Stunden kalt räuchern, zwischen den Gängen je 12 Stunden Pause." },
                    { titel: "Nachreife", inhalt: "Falls nötig im Reifeschrank lagern, dann vakuumieren." }
                ]
            }
        ],
        tipps: [
            "Temperatur beim Wolfen und Kneten immer im Auge halten"
        ]
    },
    {
        id: 18,
        titel: "Schinkenpolnische Opa Jochen",
        kategorie: "Rohwurst",
        beschreibung: "Geräucherte Rohwurst im Stil einer Schinkenpolnischen – mit Rum und Kümmel",
        quelle: "Pfefferbeißer",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter oder -keule (50%)", menge: 500, einheit: "g" },
            { name: "Schweinebauch gut durchwachsen (50%)", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Rum", menge: 2, einheit: "cl" }
        ],
        gewuerze: [
            { name: "Nitritpökelsalz", menge: 25, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 2, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel (gemahlen)", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel (gestoßen)", menge: 4, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 4, einheit: "g", proKg: true },
            { name: "Brauner Zucker", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/32", menge: "passend" },
        ausgabe: "ca. 6-8 Würste",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Bauch durch 4,5 mm Scheibe, Schulter durch 8 mm Scheibe wolfen." },
                    { titel: "Würzen", inhalt: "Alle Gewürze und Rum zugeben und gut einkneten." },
                    { titel: "Abfüllen", inhalt: "In Schweinedarm 28/32 füllen und abbinden." },
                    { titel: "Umröten und räuchern", inhalt: "2 Tage umröten, dann bei ca. 20°C 2 Stunden räuchern." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 19,
        titel: "Westfälische Mettwurst im Glas",
        kategorie: "Wurst im Glas",
        beschreibung: "Streichfähige Mettwurst mit Senfkörnern und Piment – eingekocht im Glas",
        quelle: "Wurst im Glas",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 30, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 12, einheit: "g", proKg: true },
            { name: "Nelken", menge: 0.03, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 12, einheit: "g", proKg: true },
            { name: "Piment", menge: 2, einheit: "g", proKg: true },
            { name: "Paprika süß", menge: 18, einheit: "g", proKg: true },
            { name: "Knoblauch", menge: 2.75, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.75, einheit: "g", proKg: true }
        ],
        darm: { typ: "Einmachgläser", kaliber: "", menge: "passend" },
        ausgabe: "ca. 3-4 Gläser (je 200 ml)",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen und kneten", inhalt: "Fleisch schneiden, Gewürze drüber streuen, gut vermengen. Durch 5 mm Scheibe wolfen, dann gut durchkneten bis Bindung entsteht." },
                    { titel: "Umröten", inhalt: "4 Stunden kalt stellen zum Umröten." },
                    { titel: "Einkochen", inhalt: "In Gläser füllen, 2 Stunden bei 100°C einkochen." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 20,
        titel: "Zwiebel-Mettwurst im Glas",
        kategorie: "Wurst im Glas",
        beschreibung: "Würzige Zwiebel-Mettwurst von Kajo – pikant und streichfähig",
        quelle: "Wurst im Glas",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebeln (gewürfelt, geschmort)", menge: 250, einheit: "g" }
        ],
        gewuerze: [
            { name: "NPS", menge: 25, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 2.5, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 2.5, einheit: "g", proKg: true },
            { name: "Paprika scharf", menge: 10, einheit: "g", proKg: true },
            { name: "Traubenzucker", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Einmachgläser", kaliber: "", menge: "passend" },
        ausgabe: "ca. 3-4 Gläser (je 200 ml)",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Zwiebeln schmelzen", inhalt: "Zwiebeln würfeln und in Butter/Fett glasig schmoren." },
                    { titel: "Wolfen und mischen", inhalt: "Fleisch durch 5 mm Scheibe wolfen. Gewürze und Zwiebeln unterheben, gut durchkneten." },
                    { titel: "Umröten und einkochen", inhalt: "4 Stunden kalt stellen, dann in Gläser füllen und 2 Stunden bei 100°C einkochen." }
                ]
            }
        ],
        tipps: []
    },

    // ═══════════════════════════════════════════
    // SALAMI & KOCHSALAMI
    // ═══════════════════════════════════════════

    {
        id: 21,
        titel: "Salami (Reifeschrank-Rezept)",
        kategorie: "Salami",
        beschreibung: "Klassische Trockensalami mit Starterkulturen – für den selbstgebauten Reifeschrank",
        quelle: "Salami",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauch (50%)", menge: 500, einheit: "g" },
            { name: "Schweineschulter (50%)", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Starterkulturen (Lay Starter Naturo)", menge: 0.5, einheit: "g" }
        ],
        gewuerze: [
            { name: "NPS", menge: 24, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 0.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Zitronenschale", menge: 1, einheit: "g", proKg: true },
            { name: "Rohrzucker", menge: 3, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm Hukkies", kaliber: "60/40", menge: "passend" },
        ausgabe: "nach Reifegrad",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen, alle Gewürze und Starterkulturen einkneten." },
                    { titel: "Abfüllen", inhalt: "In Kunstdarm 60/40 füllen." }
                ]
            },
            {
                gruppe: "Reifung (Reifeschrank)",
                schritte: [
                    { titel: "Woche 1–2", inhalt: "Tag 1: 23°C / 95% LF. Täglich Temperatur um 1°C und LF leicht senken bis Tag 12: 16°C / 82% LF." },
                    { titel: "Woche 2–3", inhalt: "7 Tage: 12°C / 80% LF." },
                    { titel: "Woche 3–4", inhalt: "7 Tage: 12°C / 77% LF." },
                    { titel: "Lagerung", inhalt: "12°C / 75% LF." }
                ]
            }
        ],
        tipps: [
            "Schimmelbildung ist normal und gewünscht – weißer Edelschimmel"
        ]
    },
    {
        id: 22,
        titel: "Kochsalami Opa Jochen",
        kategorie: "Salami",
        beschreibung: "Gebrühte Kochsalami mit Kümmel und Knoblauch – heißgeräuchert und gebrüht",
        quelle: "Pfefferbeißer / Wurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter (36%)", menge: 360, einheit: "g" },
            { name: "Schweinebauch (56%)", menge: 560, einheit: "g" }
        ],
        zutaten: [
            { name: "Kaltes Wasser (8%)", menge: 80, einheit: "ml" }
        ],
        gewuerze: [
            { name: "NPS", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Kümmel (gemahlen)", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel (KHM)", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Naturin Därme", kaliber: "43 oder R2 60/30", menge: "passend" },
        ausgabe: "ca. 3-4 Salamis",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Schulter und Bauch durch 4,5 mm Scheibe wolfen." },
                    { titel: "Mischen", inhalt: "Magerfleisch mit Gewürzen in Küchenmaschine auf kleiner Stufe mengen, etwas Wasser zugeben, nach 10 Min. restliches Fleisch dazu." },
                    { titel: "Abfüllen und umröten", inhalt: "In Naturin-Därme füllen, 2 Tage bei 20°C umröten." },
                    { titel: "Räuchern und brühen", inhalt: "2 Stunden bei 65°C heißräuchern, dann bei 75°C brühen (1 Min. je mm Durchmesser). In kaltem Wasser abschrecken." },
                    { titel: "Auskühlen", inhalt: "Ca. 2 Tage bei 19°C auskühlen lassen. Optional weitere Räuchergänge." }
                ]
            }
        ],
        tipps: []
    },

    // ═══════════════════════════════════════════
    // LEBERWURST & BLUTWURST
    // ═══════════════════════════════════════════

    {
        id: 23,
        titel: "Leberwurst (klassisch)",
        kategorie: "Leberwurst",
        beschreibung: "Klassische Leberwurst mit Schulter, Bauch, Leber und Backen – kalt geräuchert",
        quelle: "Leberwurst",
        basisMenge: { gesamt: 5000 },
        fleischsorten: [
            { name: "Schweineschulter (mager, gekocht)", menge: 1500, einheit: "g" },
            { name: "Schweinebauch (fett, vorgekocht)", menge: 1000, einheit: "g" },
            { name: "Schweineleber", menge: 1500, einheit: "g" },
            { name: "Schweinebacken (gekocht)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebeln (geschmort)", menge: 75, einheit: "g" }
        ],
        gewuerze: [
            { name: "Salz", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer (gemahlen)", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Majoran", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kranzdarm (Rind)", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 5 kg Leberwurst",
        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    { titel: "Fleisch kochen", inhalt: "Schulter, Bauch und Backen in Stücke schneiden und kochen." },
                    { titel: "Leber vorbereiten", inhalt: "Leber in dünne Scheiben schneiden, kurz abbrühen, mit Zwiebeln durch 2 mm Scheibe wolfen." }
                ]
            },
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Schulter, Bauch und Backen durch 3 mm Scheibe wolfen." },
                    { titel: "Mischen und abfüllen", inhalt: "Gesamte Masse würzen, gut vermengen, in Kranzdärme füllen, einzeln abbinden." },
                    { titel: "Garen", inhalt: "Ca. 60 Min. in 80°C heißem Wasser garen. Danach von Fett befreien, 10 Min. in 30°C Wasser legen, dann in kaltes Wasser tauchen." },
                    { titel: "Räuchern", inhalt: "Auf Rauchspieße hängen, 2–3 Stunden an der Luft trocknen, dann 8–10 Stunden bei max. 25°C kalt räuchern." }
                ]
            }
        ],
        tipps: [
            "Leber kurz abbrühen – macht sie milder und leichter zu wolfen"
        ]
    },
    {
        id: 24,
        titel: "Thüringer Leberwurst Opa Jochen",
        kategorie: "Leberwurst",
        beschreibung: "Altes Hausschlachtungs-Rezept: Wamme, Speck, Leber und Zwiebeln – ohne Zusätze",
        quelle: "Pfefferbeißer / Wurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Wamme (50%)", menge: 500, einheit: "g" },
            { name: "Speck (25%)", menge: 250, einheit: "g" },
            { name: "Schweineleber (25%)", menge: 250, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebeln", menge: 130, einheit: "g" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Gläser oder Naturdarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 1,2 kg Leberwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Leber aufschlagen", inhalt: "Leber durch 3 mm Scheibe wolfen, Salz zugeben und mit Schneebesen aufschlagen bis gute Bindung entsteht." },
                    { titel: "Rest wolfen", inhalt: "Wamme, Speck und Zwiebeln wolfen." },
                    { titel: "Mischen", inhalt: "Mit Pfeffer und Majoran würzen, Leber zugeben, nochmals mischen. Mit Brühe Garverlust ausgleichen." },
                    { titel: "Einkochen", inhalt: "Bei 100°C 2 Stunden einkochen." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 25,
        titel: "Blutwurst",
        kategorie: "Blutwurst",
        beschreibung: "Klassische Blutwurst mit Bauch, Backen, Schwarten und warmem Blut",
        quelle: "Leberwurst",
        basisMenge: { gesamt: 5000 },
        fleischsorten: [
            { name: "Magerer Schweinebauch", menge: 3000, einheit: "g" },
            { name: "Schweinebacken", menge: 1000, einheit: "g" },
            { name: "Schwarten", menge: 500, einheit: "g" },
            { name: "Schweineblut", menge: 500, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 26, einheit: "g", proKg: true },
            { name: "Pfeffer (gemahlen)", menge: 3, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Nelken", menge: 0.5, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinskrausedarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 5 kg Blutwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Fleisch kochen und schneiden", inhalt: "Bauch und Backen halbgar kochen, in 1 cm große Würfel schneiden." },
                    { titel: "Schwarten wolfen", inhalt: "Schwarten nicht zu weich kochen, zweimal durch 2 mm Scheibe wolfen." },
                    { titel: "Mischen und abfüllen", inhalt: "Alles vermengen, warmes Blut und Gewürze zufügen. In Krausedärme füllen und abbinden." },
                    { titel: "Garen", inhalt: "Bei 80°C garen: je mm Durchmesser 1 Minute." },
                    { titel: "Abkühlen", inhalt: "Mit warmem Wasser abwaschen, auf ebener Fläche abkühlen und mehrfach wenden." },
                    { titel: "Räuchern", inhalt: "2–3 Stunden bei max. 25°C kalt anräuchern." }
                ]
            }
        ],
        tipps: [
            "Blut muss warm zugegeben werden – sofort nach dem Schlachten verarbeiten oder frisch kaufen"
        ]
    },

    // ═══════════════════════════════════════════
    // FLEISCHKÄSE & FLEISCHWURST
    // ═══════════════════════════════════════════

    {
        id: 26,
        titel: "Fleischwurst (klassisch)",
        kategorie: "Brühwurst",
        beschreibung: "Kräftige Fleischwurst mit Bauch, Schinken und Rind – heißgeräuchert oder gebrüht",
        quelle: "Fleischkäse / Wursten",
        basisMenge: { gesamt: 6000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 3600, einheit: "g" },
            { name: "Schweineschinken", menge: 1800, einheit: "g" },
            { name: "Rindfleisch (hohe Rippe)", menge: 600, einheit: "g" }
        ],
        zutaten: [
            { name: "Eisschnee / Crash-Eis", menge: 2400, einheit: "g" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 20, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Bunter Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 2, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 1, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 1, einheit: "g", proKg: true },
            { name: "Zucker", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm", kaliber: "40/43", menge: "passend" },
        ausgabe: "ca. 4-5 Würste",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen und kuttern", inhalt: "Fleisch würfeln, wolfen. Dann mit Gewürzen kuttern unter Zugabe von Crash-Eis (oder 1–2 mm Wolfscheibe)." },
                    { titel: "Abfüllen", inhalt: "In Kunstdarm 40/43 füllen." },
                    { titel: "Trocknen und räuchern", inhalt: "Trocknen, dann 1 Stunde bei 80°C heißräuchern. Alternativ 1 Stunde bei 80°C brühen." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 27,
        titel: "Fleischwurst Opa Jochen",
        kategorie: "Brühwurst",
        beschreibung: "Traditionelle Fleischwurst mit Schulter, Backe und Rückenspeck – heißgeräuchert",
        quelle: "Wurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter (50%)", menge: 500, einheit: "g" },
            { name: "Schweinebacke (30%)", menge: 300, einheit: "g" },
            { name: "Rückenspeck (20%)", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Schüttung / Eis (20% extra)", menge: 200, einheit: "g" },
            { name: "Zwiebel (frisch)", menge: 1, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "NPS", menge: 20, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel (KHM)", menge: 4, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 2, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 2, einheit: "g", proKg: true },
            { name: "Muskat", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 2, einheit: "g", proKg: true },
            { name: "Speisewürze (optional)", menge: 5, einheit: "g", proKg: false }
        ],
        darm: { typ: "Rinderkranzdarm", kaliber: "40", menge: "passend" },
        ausgabe: "ca. 2 Würste",
        schritte: [
            {
                gruppe: "Vorbereitung (Vortag)",
                schritte: [
                    { titel: "Fleisch vorbereiten", inhalt: "Fleisch am Vortag klein schneiden, wolfen und bei ca. 0°C über Nacht kühlen." }
                ]
            },
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Kuttern", inhalt: "Erst Schulter, dann Backe/Bauch mit 50% Eis, zuletzt Fett mit restlichem Eis bis auf 11°C kuttern." },
                    { titel: "Abfüllen", inhalt: "In Rinderkranzdarm (40er) füllen, eine Nacht bei Zimmertemperatur hängen lassen." },
                    { titel: "Räuchern und brühen", inhalt: "Bei 50°C umröten, 2 Stunden bei 80°C heißräuchern, 45 Min. bei 78°C brühen." },
                    { titel: "Abschrecken", inhalt: "In sehr kaltem Wasser abschrecken, dann aufhängen zum Auskühlen." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 28,
        titel: "Bierschinken mit Pistazien",
        kategorie: "Brühwurst",
        beschreibung: "Feiner Bierschinken mit zartem Brät, Schinkenfleisch-Einlage und Pistazien",
        quelle: "Wurst",
        basisMenge: { gesamt: 2000 },
        fleischsorten: [
            { name: "Schweinehals (Brät)", menge: 600, einheit: "g" },
            { name: "Schweinerückenspeck (Brät)", menge: 200, einheit: "g" },
            { name: "Schinkenfleisch grob (Einlage)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Eis (für Brät)", menge: 200, einheit: "g" },
            { name: "Pistazien", menge: 50, einheit: "g" },
            { name: "Brätfibrisol", menge: 3, einheit: "g" }
        ],
        gewuerze: [
            { name: "NPS (Brät)", menge: 18, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.5, einheit: "g", proKg: true },
            { name: "Macis (Muskatblüte)", menge: 0.6, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 0.5, einheit: "g", proKg: true },
            { name: "Rohzucker", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm oder Schinkenfee", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 2-3 Bierschinken",
        schritte: [
            {
                gruppe: "Einlage vorbereiten (4 Tage vorher)",
                schritte: [
                    { titel: "Einlage einlegen", inhalt: "Schinkenfleisch in 2–3 cm große Würfel schneiden, mit NPS und Einlagegewürzen einlegen (ohne Pistazien). 4 Tage kühlen." }
                ]
            },
            {
                gruppe: "Brät herstellen",
                schritte: [
                    { titel: "Hals und Speck wolfen", inhalt: "Schweinehals klein schneiden und wolfen, Speck ebenso. Beide auf ca. 0°C kühlen." },
                    { titel: "Kuttern", inhalt: "Hals mit NPS und Brätfibrisol 2 Min. kuttern, Speck und etwas Eis zugeben bis 6°C, dann Gewürze und restliches Eis bis auf 12°C kuttern." }
                ]
            },
            {
                gruppe: "Zusammenführen und brühen",
                schritte: [
                    { titel: "Vermengen", inhalt: "Brät, Einlage und Pistazien gründlich vermengen." },
                    { titel: "Abfüllen und brühen", inhalt: "In Darm oder Schinkenfee füllen. Bei 70°C brühen bis Kerntemperatur 65°C." }
                ]
            }
        ],
        tipps: []
    },

    // ═══════════════════════════════════════════
    // SCHINKEN & GEPÖKELTES
    // ═══════════════════════════════════════════

    {
        id: 29,
        titel: "Kochschinken (Spritzpökel)",
        kategorie: "Schinken",
        beschreibung: "Klassischer Kochschinken im Spritzpökelverfahren – mit Lake aus Kümmel, Koriander und Wacholderbeeren",
        quelle: "Kochschinken",
        basisMenge: { gesamt: 1200 },
        fleischsorten: [
            { name: "Krustenbraten (Nuss)", menge: 1200, einheit: "g" }
        ],
        zutaten: [
            { name: "Pökellake (fertig, s. Rezept)", menge: 250, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Pökelsalz (NPS) je Liter Lake", menge: 100, einheit: "g", proKg: false },
            { name: "Zucker je Liter Lake", menge: 20, einheit: "g", proKg: false },
            { name: "Kümmel je Liter Lake", menge: 2, einheit: "g", proKg: false },
            { name: "Koriander je Liter Lake", menge: 1.5, einheit: "g", proKg: false },
            { name: "Knoblauchpulver je Liter Lake", menge: 1.5, einheit: "g", proKg: false },
            { name: "Pfefferkörner je Liter Lake", menge: 8, einheit: "Stk.", proKg: false },
            { name: "Wacholderbeeren je Liter Lake", menge: 8, einheit: "Stk.", proKg: false },
            { name: "Lorbeerblatt je Liter Lake", menge: 1, einheit: "Stk.", proKg: false }
        ],
        darm: { typ: "Vakuumbeutel / Schinkennetz", kaliber: "", menge: "passend" },
        ausgabe: "ca. 1 kg Kochschinken",
        schritte: [
            {
                gruppe: "Lake herstellen",
                schritte: [
                    { titel: "Lake kochen", inhalt: "Gewürze ca. 20 Min. in Wasser kochen, abkühlen und durch feines Sieb filtern." }
                ]
            },
            {
                gruppe: "Pökeln",
                schritte: [
                    { titel: "Spritzen", inhalt: "Lake gleichmäßig in das Fleisch spritzen (ca. 1/5 des Fleischgewichts)." },
                    { titel: "Pökeln", inhalt: "Fleisch in Vakuumbeutel, 3–4 Tage im Kühlschrank pökeln." }
                ]
            },
            {
                gruppe: "Garen",
                schritte: [
                    { titel: "Brühen", inhalt: "Bei 72–75°C garen bis Kerntemperatur 68–70°C (ca. 1 Stunde pro kg). Abkühlen lassen." },
                    { titel: "Optional räuchern", inhalt: "Ca. 6 Stunden kalt räuchern für extra Aroma." }
                ]
            }
        ],
        tipps: [
            "Nach einem Tag Ruhe ist der Schinken verzehrbereit"
        ]
    },
    {
        id: 30,
        titel: "Rotwein Kochschinken Kajo",
        kategorie: "Schinken",
        beschreibung: "Aromatischer Kochschinken in Rotwein-Lake mit Piment und Lorbeer",
        quelle: "Rezepte Wurst / Root",
        basisMenge: { gesamt: 1700 },
        fleischsorten: [
            { name: "Oberschale Schwein", menge: 1700, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS je 2 L Lake", menge: 250, einheit: "g", proKg: false },
            { name: "Rauchsalz je 2 L Lake", menge: 10, einheit: "g", proKg: false },
            { name: "Zucker je 2 L Lake", menge: 40, einheit: "g", proKg: false },
            { name: "Wasser je Lake", menge: 1300, einheit: "ml", proKg: false },
            { name: "Rotwein je Lake", menge: 700, einheit: "ml", proKg: false },
            { name: "Pfefferkörner je 2 L", menge: 20, einheit: "Stk.", proKg: false },
            { name: "Wacholderbeeren je 2 L", menge: 10, einheit: "Stk.", proKg: false },
            { name: "Lorbeerblätter je 2 L", menge: 6, einheit: "Stk.", proKg: false },
            { name: "Pimentkörner je 2 L", menge: 20, einheit: "Stk.", proKg: false }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 1,5 kg Schinken",
        schritte: [
            {
                gruppe: "Lake und Pökeln",
                schritte: [
                    { titel: "Lake kochen", inhalt: "Alle Lake-Zutaten 25 Min. köcheln, kalt werden lassen." },
                    { titel: "Spritzen und pökeln", inhalt: "Fleisch mit ca. 250 ml Lake impfen, Rest mit Fleisch in Vakuumbeutel, 5 Tage im Kühlschrank pökeln." }
                ]
            },
            {
                gruppe: "Garen",
                schritte: [
                    { titel: "Garen", inhalt: "In Schinkenfee oder Vakuumbeutel bei 83°C garen bis Kerntemperatur 71°C." },
                    { titel: "Abkühlen", inhalt: "In kaltes Wasser stellen, dann bei 6°C kühlen." },
                    { titel: "Räuchern", inhalt: "Am nächsten Tag einen Kaltrauchgang von 20 Stunden." }
                ]
            }
        ],
        tipps: [
            "Ursprungsrezept von Reibi – von Kajo abgewandelt"
        ]
    },
    {
        id: 31,
        titel: "Winzerschinken",
        kategorie: "Schinken",
        beschreibung: "Feiner Schinken in Weißwein-Lake mit Wacholderbeeren – geräuchert und gebrüht",
        quelle: "Kochschinken / Root",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch (beliebig)", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS je Liter Lake", menge: 120, einheit: "g", proKg: false },
            { name: "Zucker je Liter Lake", menge: 20, einheit: "g", proKg: false },
            { name: "Kümmel je Liter Lake", menge: 2, einheit: "g", proKg: false },
            { name: "Koriander je Liter Lake", menge: 3, einheit: "g", proKg: false },
            { name: "Knoblauchpulver je Liter Lake", menge: 1.5, einheit: "g", proKg: false },
            { name: "Pfefferkörner je Liter Lake", menge: 8, einheit: "Stk.", proKg: false },
            { name: "Wacholderbeeren je Liter Lake", menge: 8, einheit: "Stk.", proKg: false },
            { name: "Lorbeerblatt je Liter Lake", menge: 1, einheit: "Stk.", proKg: false }
        ],
        darm: { typ: "Vakuumbeutel / Schinkenfee", kaliber: "", menge: "passend" },
        ausgabe: "ca. 900 g Schinken",
        schritte: [
            {
                gruppe: "Lake und Pökeln",
                schritte: [
                    { titel: "Lake kochen", inhalt: "Lake aus 50% Wasser und 50% Weißwein mit Gewürzen 20 Min. kochen, auskühlen, abseihen und spritzen. Je kg Fleisch 200 ml Lake." },
                    { titel: "Pökeln", inhalt: "Fleisch mit restlicher Lake in Gefriersack, 3 Tage im Kühlschrank pökeln." }
                ]
            },
            {
                gruppe: "Garen",
                schritte: [
                    { titel: "Trocknen und räuchern", inhalt: "Abtrocknen und 40 Min. bei 70°C räuchern." },
                    { titel: "Glasieren", inhalt: "Mit Mischung aus 50 ml Wein und 12 g Rohrzucker bestreichen, in Folie wickeln, 12 Stunden kalt stellen." },
                    { titel: "Garen", inhalt: "In Schinkenfee bis 70°C Kerntemperatur, oder ca. 1 Stunde pro kg bei 80°C Wassertemperatur." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 32,
        titel: "Wachholderschinken",
        kategorie: "Schinken",
        beschreibung: "Rustikaler Trockenschinken mit Wacholderbeeren und buntem Pfeffer – kalt geräuchert",
        quelle: "Root",
        basisMenge: { gesamt: 1200 },
        fleischsorten: [
            { name: "Schweinefleisch (beliebig)", menge: 1200, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 37.5, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 5, einheit: "g", proKg: false },
            { name: "Bunter Pfeffer", menge: 2.5, einheit: "TL", proKg: false },
            { name: "Traubenzucker", menge: 1.25, einheit: "TL", proKg: false },
            { name: "Brauner Zucker", menge: 1.67, einheit: "TL", proKg: false },
            { name: "Wacholderbeeren", menge: 35, einheit: "Stk.", proKg: false },
            { name: "Ascorbinsäure", menge: 1.5, einheit: "g", proKg: false }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 1 kg Schinken",
        schritte: [
            {
                gruppe: "Pökeln",
                schritte: [
                    { titel: "Einreiben", inhalt: "Wacholderbeeren und Pfeffer mörsern, alle Gewürze mischen, Fleisch kräftig damit einreiben und vakuumieren." },
                    { titel: "Pökelzeit", inhalt: "Je cm Fleischdicke 2 Tage + 2 Tage Sicherheit im Kühlschrank. Täglich wenden und kneten." }
                ]
            },
            {
                gruppe: "Durchbrennen und Räuchern",
                schritte: [
                    { titel: "Durchbrennen", inhalt: "Gleich lange durchbrennen wie der Pökelschlaf dauerte." },
                    { titel: "Trocknen", inhalt: "Zwei Tage trocknen." },
                    { titel: "Räuchern", inhalt: "3–5 mal 8–10 Stunden kalt räuchern. Zwischen Gängen je 12 Stunden Pause." },
                    { titel: "Reifen", inhalt: "Im Reifeschrank bis zur gewünschten Festigkeit abhängen lassen." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 33,
        titel: "Kajo's Espresso-Schinken",
        kategorie: "Schinken",
        beschreibung: "Außergewöhnlicher Schinken mit Espressopulver, buntem Pfeffer und Rohrzucker",
        quelle: "Schinken",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 35, einheit: "g", proKg: true },
            { name: "Bio Rohrzucker", menge: 5, einheit: "g", proKg: true },
            { name: "Traubenzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1, einheit: "g", proKg: true },
            { name: "Bunter Pfeffer (geschrotet)", menge: 10, einheit: "g", proKg: true },
            { name: "Jacobs Espressopulver", menge: 10, einheit: "g", proKg: true }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 900 g Schinken",
        schritte: [
            {
                gruppe: "Pökeln und Räuchern",
                schritte: [
                    { titel: "Einreiben und vakuumieren", inhalt: "Alle Gewürze mischen, Fleisch gut einmassieren, vakuumieren und pökeln (2 Tage je cm + 2 Tage Sicherheit)." },
                    { titel: "Durchbrennen, trocknen und räuchern", inhalt: "Durchbrennen, im Trockenschrank trocknen, 3–5 mal 12 Stunden kalt räuchern (je 12 Stunden Pause)." }
                ]
            }
        ],
        tipps: [
            "Nach dem Räuchern nochmals vakuumieren und Wochen ziehen lassen – intensiviert das Aroma enorm"
        ]
    },
    {
        id: 34,
        titel: "Kajo's Paprika-Schinken",
        kategorie: "Schinken",
        beschreibung: "Würziger Schinken mit Paprika edelsüß, Knoblauch und buntem Pfeffer",
        quelle: "Schinken",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 35, einheit: "g", proKg: true },
            { name: "Bio Rohrzucker", menge: 5, einheit: "g", proKg: true },
            { name: "Traubenzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1, einheit: "g", proKg: true },
            { name: "Bunter Pfeffer (geschrotet)", menge: 10, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 12, einheit: "g", proKg: true },
            { name: "Knoblauch", menge: 10, einheit: "g", proKg: true },
            { name: "Zwiebel", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 900 g Schinken",
        schritte: [
            {
                gruppe: "Pökeln und Räuchern",
                schritte: [
                    { titel: "Einreiben und vakuumieren", inhalt: "Alle Gewürze mischen, Fleisch gut einmassieren, vakuumieren. 2 Tage je cm + 2 Tage Sicherheit pökeln." },
                    { titel: "Durchbrennen, trocknen und räuchern", inhalt: "Durchbrennen, trocknen bis rauchfertig, 3–5 mal 12 Stunden kalt räuchern." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 35,
        titel: "Kajo's Amaretto-Marzipan-Chilli-Schinken",
        kategorie: "Schinken",
        beschreibung: "Ausgefallener Schinken mit flüssigem Marzipan in Amaretto und scharfem Chilli",
        quelle: "Schinken",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Marzipan Rohmasse", menge: 100, einheit: "g" },
            { name: "Amaretto", menge: 70, einheit: "ml" }
        ],
        gewuerze: [
            { name: "NPS", menge: 35, einheit: "g", proKg: true },
            { name: "Chilli (selbst gemahlen)", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 900 g Schinken",
        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    { titel: "Marzipanmasse kochen", inhalt: "Marzipan in Amaretto im Topf erhitzen bis es sich verflüssigt. Erkalten lassen." }
                ]
            },
            {
                gruppe: "Pökeln und Räuchern",
                schritte: [
                    { titel: "Einmassieren", inhalt: "NPS und Chilli ins Fleisch einmassieren, in Vakuumbeutel legen, Marzipanmasse zugeben, vakuumieren." },
                    { titel: "Pökeln", inhalt: "2 Tage je cm + 2 Tage Sicherheit im Kühlschrank, täglich wenden." },
                    { titel: "Durchbrennen und räuchern", inhalt: "8 Tage durchbrennen, trocknen, 3–5 mal 12 Stunden kalt räuchern." }
                ]
            }
        ],
        tipps: [
            "Schinken danach vakuumieren und Wochen ruhen lassen"
        ]
    },
    {
        id: 36,
        titel: "Sardischer Bauchspeck",
        kategorie: "Schinken",
        beschreibung: "Kräftiger Bauchspeck mit Fenchel, Rosmarin, Kümmel und Wacholder",
        quelle: "Schinken",
        basisMenge: { gesamt: 1600 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 1600, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 50, einheit: "g", proKg: false },
            { name: "Knoblauch", menge: 16, einheit: "g", proKg: false },
            { name: "Schwarzer Pfeffer", menge: 16, einheit: "g", proKg: false },
            { name: "Wacholderbeeren", menge: 16, einheit: "Stk.", proKg: false },
            { name: "Kümmel", menge: 11.2, einheit: "g", proKg: false },
            { name: "Rosmarin", menge: 16, einheit: "g", proKg: false },
            { name: "Salbei", menge: 8.8, einheit: "g", proKg: false },
            { name: "Fenchel", menge: 9.6, einheit: "g", proKg: false }
        ],
        darm: { typ: "Vakuumbeutel / Netz", kaliber: "", menge: "passend" },
        ausgabe: "ca. 1,3 kg Speck",
        schritte: [
            {
                gruppe: "Pökeln und Reifen",
                schritte: [
                    { titel: "Einreiben und pökeln", inhalt: "Alle Gewürze mischen, Bauch gut damit einreiben und vakuumieren. Pökeln und reiben bis fertig." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 37,
        titel: "Scharfer Nümmi Schinken",
        kategorie: "Schinken",
        beschreibung: "Pikanter Schinken mit Chilli, zweifach Paprika und Knoblauch",
        quelle: "Schinken",
        basisMenge: { gesamt: 1820 },
        fleischsorten: [
            { name: "Schweinefleisch", menge: 1820, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 82, einheit: "g", proKg: false },
            { name: "Knoblauch", menge: 12, einheit: "g", proKg: false },
            { name: "Schwarzer Pfeffer", menge: 10, einheit: "g", proKg: false },
            { name: "Chilli", menge: 5, einheit: "g", proKg: false },
            { name: "Paprika scharf", menge: 12, einheit: "g", proKg: false },
            { name: "Paprika süß", menge: 8, einheit: "g", proKg: false },
            { name: "Ingwer", menge: 3, einheit: "g", proKg: false },
            { name: "Senfmehl", menge: 3, einheit: "g", proKg: false }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 1,5 kg Schinken",
        schritte: [
            {
                gruppe: "Pökeln und Räuchern",
                schritte: [
                    { titel: "Einreiben und vakuumieren", inhalt: "Alle Gewürze mischen, gut einmassieren, vakuumieren und pökeln." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 38,
        titel: "Schweine-Lachsschinken",
        kategorie: "Schinken",
        beschreibung: "Zarter Lachsschinken mit Paprika, Knoblauch, Wacholder und Kokosblütenzucker",
        quelle: "Schinken",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinelachs (Lende)", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 30, einheit: "g", proKg: true },
            { name: "Paprika süß", menge: 9, einheit: "g", proKg: true },
            { name: "Paprika scharf", menge: 9, einheit: "g", proKg: true },
            { name: "Knoblauch", menge: 9, einheit: "g", proKg: true },
            { name: "Bunter Pfeffer (frisch gemahlen)", menge: 9, einheit: "g", proKg: true },
            { name: "Wacholderbeeren", menge: 20, einheit: "Stk.", proKg: true },
            { name: "Kardamom", menge: 0.5, einheit: "g", proKg: true },
            { name: "Traubenzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Kokosblütenzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 900 g Schinken",
        schritte: [
            {
                gruppe: "Pökeln und Räuchern",
                schritte: [
                    { titel: "Einreiben und vakuumieren", inhalt: "Alle Gewürze einmassieren, vakuumieren und pökeln (2 Tage je cm + 2 Tage Sicherheit)." },
                    { titel: "Durchbrennen und räuchern", inhalt: "Durchbrennen lassen, dann kalt räuchern bis zur gewünschten Rauchnote." }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 39,
        titel: "Wildschwein Schinken",
        kategorie: "Schinken",
        beschreibung: "Kräftiger Wildschinken mit Zirbenholzgranulat, Rum-Einreibe und langem Pökelprozess",
        quelle: "Schinken / Root",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Wildschwein (beliebig)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Rum 80% zum Einreiben", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "NPS", menge: 36.5, einheit: "g", proKg: true },
            { name: "Bio Rohrzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1, einheit: "g", proKg: true },
            { name: "Bunter Pfeffer (geschrotet)", menge: 8, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Wacholderbeeren (geschrotet)", menge: 3, einheit: "g", proKg: true },
            { name: "Nelkenpulver", menge: 0.5, einheit: "g", proKg: true },
            { name: "Rosmarin", menge: 2, einheit: "g", proKg: true },
            { name: "Zirbengranulat (optional)", menge: 3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 900 g Schinken",
        schritte: [
            {
                gruppe: "Pökeln",
                schritte: [
                    { titel: "Rum einreiben", inhalt: "Schinken zuerst mit Rum einreiben, dann Gewürze gleichmäßig verteilen und einmassieren. In Vakuumbeutel vakuumieren." },
                    { titel: "Pökelzeit", inhalt: "Mindestens 3 Wochen pökeln lassen. Täglich kurz durchkneten." }
                ]
            },
            {
                gruppe: "Durchbrennen und Räuchern",
                schritte: [
                    { titel: "Durchbrennen", inhalt: "10 Tage im Kühlschrank bei 5–7°C durchbrennen und umröten, täglich lüften." },
                    { titel: "Trocknen", inhalt: "Bei 12–16°C zwei Tage trocknen lassen." },
                    { titel: "Räuchern", inhalt: "3–5 mal 16–20 Stunden kalt räuchern. Zwischen Gängen mindestens 12 Stunden Pause." },
                    { titel: "Reifen", inhalt: "Mindestens zwei weitere Tage ablüften. Dann essen, weiter lufttrocknen oder vakuumieren und reifen lassen." }
                ]
            }
        ],
        tipps: [
            "Zirbengranulat verleiht dem Wildfleisch eine besondere alpine Note"
        ]
    },
    {
        id: 40,
        titel: "Wurzelspeck nach Kuni",
        kategorie: "Schinken",
        beschreibung: "Traditioneller Wurzelspeck mit Kümmel, Macis, Lorbeer und Knoblauch",
        quelle: "Schinken (aus Räucherwiki)",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauch oder Nacken", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 35, einheit: "g", proKg: true },
            { name: "Rohrzucker", menge: 5, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Rosmarin", menge: 2, einheit: "g", proKg: true },
            { name: "Thymian", menge: 1, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel", menge: 1, einheit: "g", proKg: true },
            { name: "Lorbeerblätter", menge: 4, einheit: "Stk.", proKg: false },
            { name: "Wacholderbeeren", menge: 5, einheit: "Stk.", proKg: false },
            { name: "Knoblauchzehen (oder 10g Granulat)", menge: 10, einheit: "Stk.", proKg: false }
        ],
        darm: { typ: "Vakuumbeutel", kaliber: "", menge: "passend" },
        ausgabe: "ca. 900 g Speck",
        schritte: [
            {
                gruppe: "Pökeln und Räuchern",
                schritte: [
                    { titel: "Einreiben und vakuumieren", inhalt: "Alle Gewürze gut einmassieren, vakuumieren und pökeln. Täglich wenden." },
                    { titel: "Räuchern", inhalt: "Nach Pökelzeit durchbrennen, trocknen und kalt räuchern." }
                ]
            }
        ],
        tipps: []
    },

    // ═══════════════════════════════════════════
    // ASPIK & SÜLZE
    // ═══════════════════════════════════════════

    {
        id: 41,
        titel: "Sülzwurst aus Eisbein",
        kategorie: "Aspik & Sülze",
        beschreibung: "Würzige Sülzwurst mit gepökeltem Eisbein, Gelatine und Kochsud – als Wurst oder im Glas",
        quelle: "Aspik / Wurst im Glas / Root",
        basisMenge: { gesamt: 1600 },
        fleischsorten: [
            { name: "Gepökeltes Eisbein", menge: 2, einheit: "Stück" }
        ],
        zutaten: [
            { name: "Entfetteter Kochsud", menge: 500, einheit: "ml" },
            { name: "Gelatinepulver (280 Bloom)", menge: 30, einheit: "g" },
            { name: "Zwiebel (für Kochsud)", menge: 1, einheit: "Stück" },
            { name: "Lorbeerblätter (für Kochsud)", menge: 4, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 15, einheit: "g", proKg: true },
            { name: "Kümmel (frisch gemahlen)", menge: 3, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer (frisch gemahlen)", menge: 3, einheit: "g", proKg: true },
            { name: "Zwiebel (granuliert)", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauch (granuliert)", menge: 1, einheit: "g", proKg: true },
            { name: "Muskatnuss (frisch gerieben)", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Energiedarm Kaliber 90/50 oder Gläser", kaliber: "90/50", menge: "passend" },
        ausgabe: "ca. 2 kg Sülzwurst",
        schritte: [
            {
                gruppe: "Eisbeine kochen",
                schritte: [
                    { titel: "Eisbeine garen", inhalt: "Eisbeine in Wasser mit gespickter Zwiebel (Nelke) und Lorbeerblättern bei 80°C ca. 3 Stunden ziehen lassen bis Fleisch sich vom Knochen löst." },
                    { titel: "Fleisch auslösen", inhalt: "Eisbeine herausnehmen, einschneiden und Knochen herauslösen. Fleisch vom Knochen lösen." }
                ]
            },
            {
                gruppe: "Fleisch vorbereiten",
                schritte: [
                    { titel: "Aufteilen", inhalt: "Magere Muskelstränge als Einlagefleisch (Würfel 1–2 cm). Schwarte, Speck und Fettfleisch durch 3 mm Scheibe wolfen." }
                ]
            },
            {
                gruppe: "Aspik und Abfüllen",
                schritte: [
                    { titel: "Gelatine einrühren", inhalt: "Sud durch Kaffeefilter filtern, erkalten lassen, Gelatine einrühren und 30 Min. quellen lassen." },
                    { titel: "Kochen und mischen", inhalt: "Salz und Gewürze in den Sud, kurz aufkochen, vom Herd nehmen und zum Gewolften geben. Alles vermengen." },
                    { titel: "Abfüllen und brühen", inhalt: "In Energiedarm (90 mm) füllen, fest zubinden. 1 Stunde bei 80°C brühen. Hängend erkalten lassen." }
                ]
            }
        ],
        tipps: [
            "Alternativ in Gläser füllen und 1,5 Stunden bei 100°C einkochen",
            "Bei 200 Bloom Gelatine: 42 g verwenden"
        ]
    },
    {
        id: 42,
        titel: "Sülze (klassisch)",
        kategorie: "Aspik & Sülze",
        beschreibung: "Klassische Sülzwurst mit gepökelter Schulter, Speck und Schwarten",
        quelle: "Leberwurst",
        basisMenge: { gesamt: 5000 },
        fleischsorten: [
            { name: "Schweineschulter (gepökelt)", menge: 3500, einheit: "g" },
            { name: "Durchwachsener Speck (gekocht)", menge: 500, einheit: "g" },
            { name: "Schwarten (mittelweich gekocht)", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Fleischbrühe", menge: 500, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Kümmel (ganz)", menge: 1, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Mittelrinderdarm (Rinderbuttcn)", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 5 kg Sülze",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Fleisch vorbereiten", inhalt: "Schulter in 2 cm, Speck in 1 cm große Würfel schneiden. Schwarten zweimal durch 2 mm Scheibe wolfen." },
                    { titel: "Vermengen und abfüllen", inhalt: "Mit Brühe und Gewürzen gut vermengen, in Rinderbutten füllen und abbinden." },
                    { titel: "Garen", inhalt: "Je nach Darmdurchmesser 60–90 Min. bei 80°C garen." },
                    { titel: "Abkühlen", inhalt: "Mit heißem Wasser übergießen (entfetten), auf feuchtem Metalltisch auskühlen, 12 Stunden bei max. 25°C kalt räuchern." }
                ]
            }
        ],
        tipps: []
    },

    // ===== NEUE REZEPTE =====

    {
        id: 43,
        titel: "Käsegriller",
        kategorie: "Brühwurst",
        beschreibung: "Feine Grillwurst mit gewürfeltem Käse, gekuttert für eine glatte Bindung",
        quelle: "BRat und Grillwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 500, einheit: "g" },
            { name: "Rückenspeck vom Schwein", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Schüttung (Kutterhilfsmittel-Mix)", menge: 155, einheit: "g" },
            { name: "Kutterhilfsmittel (Phosphat)", menge: 5, einheit: "g" },
            { name: "Gouda oder Emmentaler (gewürfelt)", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Salz", menge: 15, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1.5, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 1, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 1.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Zitronensaft", menge: null, einheit: "Schuss" }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 1 kg Griller",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Kuttern", inhalt: "Fleisch und Speck kalt kuttern, Schüttung und Gewürze zugeben. Käse kurz unterheben." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme 28/30 abfüllen, drehen oder abbinden." }
                ]
            }
        ],
        tipps: ["Käse erst ganz am Ende kurz unterheben damit er nicht schmilzt"]
    },

    {
        id: 44,
        titel: "Bärlauchbratwurst (roh, grob)",
        kategorie: "Bratwurst",
        beschreibung: "Grobe Bärlauchbratwurst zum Frischverzehr, mit Olivenöl und frischem Bärlauch",
        quelle: "BRat und Grillwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Bärlauch frisch", menge: 4, einheit: "EL" },
            { name: "Olivenöl", menge: 3, einheit: "EL" }
        ],
        gewuerze: [
            { name: "Salz (Kochsalz)", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer weiß, gemahlen", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel, gemahlen", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Fleisch vorbereiten", inhalt: "Bauchfleisch von Knochen lösen, in wolfgerechte Stücke schneiden. Bärlauch mit Mixer pürieren, Salz und Olivenöl zugeben." },
                    { titel: "Wolfen und mischen", inhalt: "Fleisch durch 3mm und 5mm Scheibe wolfen. Mit Gewürzen und Bärlauch gut vermengen, abschmecken." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme 30/32 füllen. Sofort verbrauchen oder vakuumiert einfrieren." }
                ]
            }
        ],
        tipps: ["Zum sofortigen Verzehr oder vakuumiert einfrieren – kein NPS, daher keine Haltbarkeit"]
    },

    {
        id: 45,
        titel: "Fleischwurst (mit Rindfleisch)",
        kategorie: "Brühwurst",
        beschreibung: "Klassische Fleischwurst mit Schweinebauch, Schinken und Rindfleisch – heißgeräuchert oder gebrüht",
        quelle: "Fleischkäse",
        basisMenge: { gesamt: 6000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 3600, einheit: "g" },
            { name: "Schweineschinken", menge: 1800, einheit: "g" },
            { name: "Rindfleisch (hohe Rippe)", menge: 600, einheit: "g" }
        ],
        zutaten: [
            { name: "Crash-Eis / Eisschnee", menge: 2400, einheit: "g" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 20, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Bunter Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 2, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 1, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 1, einheit: "g", proKg: true },
            { name: "Zucker", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kranzdarm", kaliber: "40/43", menge: "ca. 48 Stück" },
        ausgabe: "ca. 6 kg Fleischwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Würfeln und wolfen", inhalt: "Fleisch würfeln, wolfen (1–2mm Scheibe). Dann mit Crash-Eis kuttern." },
                    { titel: "Würzen und kuttern", inhalt: "Gewürze zugeben, bis zur glatten, homogenen Masse kuttern." },
                    { titel: "Abfüllen", inhalt: "In Kranzdärme 40/43 füllen (ca. 48 Stück)." },
                    { titel: "Räuchern oder brühen", inhalt: "1 Stunde bei 80°C heißräuchern oder 1 Stunde bei 80°C brühen." }
                ]
            }
        ],
        tipps: ["Eis beim Kuttern langsam zugeben damit die Masse nicht zu warm wird"]
    },

    {
        id: 46,
        titel: "Bacon-Käse Thüringer Art",
        kategorie: "Brühwurst",
        beschreibung: "Thüringer Bratwurst mit altem Bergkäse und geräuchertem Bauch als Einlage",
        quelle: "Wursten",
        basisMenge: { gesamt: 3500 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 2000, einheit: "g" },
            { name: "Schweinebauch", menge: 1500, einheit: "g" }
        ],
        zutaten: [
            { name: "Alter Bergkäse (1×1cm Würfel)", menge: 1000, einheit: "g" },
            { name: "Geräucherter Bauch (1×1cm Würfel)", menge: 1000, einheit: "g" },
            { name: "Eiskalte Milch 1,5%", menge: 250, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 4.2, einheit: "g", proKg: true },
            { name: "Kümmel, frisch gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Milchpulver", menge: 5, einheit: "g", proKg: true },
            { name: "Dextrose", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauch frisch gepresst", menge: 2, einheit: "Zehen" }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 3,5 kg Bratwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Fleisch wolfen und kuttern", inhalt: "Nacken und Bauch mit 3mm wolfen. Gewürze und Milch zugeben, fein kuttern bis max. 11°C." },
                    { titel: "Einlage unterheben", inhalt: "Käse und geräucherten Bauch in 1×1cm Würfel schneiden, mit dem Kutterbrät gut mischen." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme 28/30 füllen. Anschließend bei 72°C ca. 20 Min. brühen oder frisch vakuumieren und einfrieren." }
                ]
            }
        ],
        tipps: ["Käse und Speck als grobe Einlage – nicht kuttern, nur unterheben"]
    },

    {
        id: 47,
        titel: "Brettsalami",
        kategorie: "Salami",
        beschreibung: "Rohwurst auf Fichtenbrett vorgeräucht – ohne Darm, wird flachgedrückt und auf dem Brett gereift",
        quelle: "Wursten",
        basisMenge: { gesamt: 1500 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch (Schnitzel)", menge: 825, einheit: "g" },
            { name: "Mageres Rindfleisch (Schnitzel)", menge: 300, einheit: "g" },
            { name: "Schweinebauch", menge: 275, einheit: "g" },
            { name: "Schweinerückenspeck", menge: 100, einheit: "g" }
        ],
        zutaten: [
            { name: "Starterkulturen für Rohwurst", menge: null, einheit: "nach Herstellerangabe" }
        ],
        gewuerze: [
            { name: "Pökelsalz (NPS)", menge: 27, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer, gemahlen", menge: 5, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 10, einheit: "g", proKg: true },
            { name: "Paprika scharf", menge: 3, einheit: "g", proKg: true },
            { name: "Traubenzucker (Dextrose)", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauch frisch oder gemahlen", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kein Darm – auf Fichtenbrett", kaliber: "–", menge: "3 × 500 g Fladen" },
        ausgabe: "3 Brettsalami à ca. 500 g",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Fleisch vorkühlen und wolfen", inhalt: "Fleisch 1 Stunde einfrieren. Dann mit 3mm Scheibe wolfen. Gewürze und Starterkulturen zugeben." },
                    { titel: "Kneten", inhalt: "5 Minuten auf kleinster Stufe in der Küchenmaschine kneten bis Bindung entsteht." },
                    { titel: "Fladen formen", inhalt: "3 Kugeln à 500g formen, flachdrücken und auf unbehandeltes Fichtenbrett legen. 4 Tage bei 22–23°C vorreifen." },
                    { titel: "Räuchern", inhalt: "2×12 Stunden kalträuchern mit je 12 Stunden Pause. Nach 1. Durchgang wenden." },
                    { titel: "Nachreifen", inhalt: "Nach dem Räuchern wieder auf das Brett, 4–5 weitere Tage bei Raumtemperatur reifen lassen." }
                ]
            }
        ],
        tipps: ["Je länger die Reife, desto fester die Salami", "Nach gewünschtem Reifegrad einfrieren"]
    },

    {
        id: 48,
        titel: "Pfefferbeißer ala Kajo",
        kategorie: "Rohwurst",
        beschreibung: "Kajo's Version des Pfefferbeißers mit buntem Pfeffer, Paprika und Rum – auch als Chilibeißer",
        quelle: "Wursten",
        basisMenge: { gesamt: 20730 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 6385, einheit: "g" },
            { name: "Schweinebauch", menge: 6265, einheit: "g" },
            { name: "Schweineschulter", menge: 8080, einheit: "g" }
        ],
        zutaten: [
            { name: "Senfkörner", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "NPS (Nitritpökelsalz)", menge: 35, einheit: "g", proKg: true },
            { name: "Paprika scharf", menge: 8, einheit: "g", proKg: true },
            { name: "Bunter Pfeffer", menge: 9, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 5, einheit: "g", proKg: true },
            { name: "Zwiebelgranulat", menge: 5, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schafs-Saitling", kaliber: "16/18 oder 20/22", menge: "passend" },
        ausgabe: "ca. 20 kg Pfefferbeißer",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Vorbereiten", inhalt: "Kaltes Fleisch in Würfel schneiden, Gewürze darüberstreuen und gut vermengen." },
                    { titel: "Wolfen", inhalt: "Die Hälfte des Fleisches mit 5mm, die andere Hälfte mit 8mm Scheibe wolfen." },
                    { titel: "Kneten", inhalt: "Brät von Hand oder Küchenmaschine kneten bis Bindung entsteht und Brät klebt. Temperatur unter 11°C halten." },
                    { titel: "Abfüllen", inhalt: "Saitlinge wässern, Brät luftfrei einpressen und auf gewünschte Länge abbinden." },
                    { titel: "Trocknen und umröten", inhalt: "2 Tage bei ca. 12°C hängen lassen zum Trocknen und Umröten." },
                    { titel: "Kalträuchern", inhalt: "3–4 Mal 12–16 Stunden kalträuchern mit je 12 Stunden Pause dazwischen." },
                    { titel: "Nachreifen", inhalt: "Falls noch nicht gewünschte Festigkeit: einige Tage im Reifeschrank. Dann vakuumieren." }
                ]
            }
        ],
        tipps: ["Für Chilibeißer: 4g Paprika scharf + 4g Chilipulver statt 8g Paprika scharf", "Je kälter das Fleisch beim Verarbeiten, desto bessere Bindung"]
    },

    {
        id: 49,
        titel: "Kuhlen Wurst (Kulen)",
        kategorie: "Rohwurst",
        beschreibung: "Traditionelle ungarisch-balkanische Rohwurst mit Paprika und Wacholderbeeren – gepresst und langgereift",
        quelle: "Wursten",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 500, einheit: "g" },
            { name: "Mageres Rindfleisch", menge: 500, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Pökelsalz (NPS)", menge: 28, einheit: "g", proKg: true },
            { name: "Schwarzes Gold (Pfeffermischung)", menge: 4, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 4, einheit: "g", proKg: true },
            { name: "Rosenpaprika edelsüß (oder scharf)", menge: 16, einheit: "g", proKg: true },
            { name: "Koriander ganz", menge: 1, einheit: "g", proKg: true },
            { name: "Muskatblüte gemahlen", menge: 1, einheit: "g", proKg: true },
            { name: "Wacholderbeeren geschrotet", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm", kaliber: "ca. 100mm Durchmesser", menge: "ca. 30cm Länge" },
        ausgabe: "ca. 1 kg Kulen (1 kg pro Stück)",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Vorbereiten und wolfen", inhalt: "Fleisch von schwereren Schweinen und älterem Rind (130–160kg Schlachtgewicht) in wolfgerechte Stücke schneiden. Mittelfein wolfen." },
                    { titel: "Würzen", inhalt: "Mit NPS und Gewürzen pikant-scharf würzen. Paprika gibt Farbe und Schärfe." },
                    { titel: "Abfüllen und pressen", inhalt: "In große Kunstdärme (ca. 10cm Durchmesser, 30cm Länge) füllen. Zum schnelleren Trocknen pressen." },
                    { titel: "Reifen", inhalt: "Mehrere Monate bei kontrollierten Bedingungen reifen lassen. Alle 2 Wochen riechen, prüfen und kontrollieren." }
                ]
            }
        ],
        tipps: ["Fleisch von schwereren, ausgewachsenen Tieren für besten Geschmack", "Traditionell mit Gips oder Holzasche zum Trocknen bedeckt"]
    },

    {
        id: 50,
        titel: "Chorizo",
        kategorie: "Rohwurst",
        beschreibung: "Spanische Chorizo mit geräuchertem Paprika und Rotwein – über Nacht mariniert",
        quelle: "Wursten",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Spanischer Rotwein herb", menge: 50, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 18, einheit: "g", proKg: true },
            { name: "Paprika scharf geräuchert (spanisch)", menge: 10, einheit: "g", proKg: true },
            { name: "Paprika edelsüß geräuchert (spanisch)", menge: 10, einheit: "g", proKg: true },
            { name: "Knoblauch frisch", menge: 2, einheit: "Zehen" }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 1 kg Chorizo",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Marinieren", inhalt: "Fleisch klein schneiden, mit Rotwein über Nacht im Kühlschrank einlegen." },
                    { titel: "Wolfen und würzen", inhalt: "Fleisch wolfen (5mm). Salz, Knoblauch und Gewürze zugeben, alles gut durchmengen." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme 30/32 füllen." }
                ]
            }
        ],
        tipps: ["Spanischen geräucherten Paprika (Pimentón de la Vera) verwenden für authentischen Geschmack"]
    },

    {
        id: 51,
        titel: "Chili-Knoblauch Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Scharfe Bratwurst mit frischem Thai-Chili, Cayenne und reichlich frischem Knoblauch",
        quelle: "Wursten",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Knoblauch frisch", menge: 10, einheit: "g" },
            { name: "Thai Chili frisch", menge: 10, einheit: "g" },
            { name: "Cayenne Chili frisch", menge: 30, einheit: "g" },
            { name: "Petersilie frisch", menge: 10, einheit: "g" }
        ],
        gewuerze: [
            { name: "Meersalz fein", menge: 18, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "26/28", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Vorbereiten", inhalt: "Knoblauch fein hacken. Chili und Petersilie klein schneiden." },
                    { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen (5mm). Salz und alle Zutaten zugeben, gut durchmengen." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme 26/28 abfüllen." }
                ]
            }
        ],
        tipps: ["Je mehr Cayenne desto schärfer – nach Geschmack anpassen"]
    },

    {
        id: 52,
        titel: "Käse-Paprika Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Bratwurst mit gewürfeltem Edamer und frischer roter Paprika sowie 7-Kräuter-Mischung",
        quelle: "Wursten",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Rote Paprika (klein gewürfelt)", menge: 1, einheit: "Stück" },
            { name: "Edamer (klein gewürfelt)", menge: 300, einheit: "g" },
            { name: "7-Kräuter-Mischung gefroren", menge: 1, einheit: "Pak." },
            { name: "Knoblauch frisch", menge: 4, einheit: "g" }
        ],
        gewuerze: [
            { name: "Salz", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer weiß", menge: 2.5, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "26/28", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Vorbereiten", inhalt: "Paprika klein würfeln. Käse klein würfeln." },
                    { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen (5mm). Salz und Gewürze abwiegen. Alle Zutaten gut durchmengen." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme 26/28 abfüllen." }
                ]
            }
        ],
        tipps: ["Käse und Paprika unterheben – nicht mit dem Fleisch zusammen wolfen"]
    },

    {
        id: 53,
        titel: "Ingwer-Ahornsirup Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Außergewöhnliche Bratwurst mit frischem Ingwer und Ahornsirup – süß-scharf",
        quelle: "Wursten",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Frischer Ingwer", menge: 100, einheit: "g" },
            { name: "Ahornsirup", menge: 50, einheit: "g" },
            { name: "Knoblauch frisch", menge: 10, einheit: "g" }
        ],
        gewuerze: [
            { name: "Salz", menge: 18, einheit: "g", proKg: true },
            { name: "Koriander", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 1, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "26/28", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Ingwersaft gewinnen", inhalt: "Ingwer schälen, durch feinen Fleischwolf lassen. Durch Sieb auspressen und Saft kurz einkochen. Kalt stellen." },
                    { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen (5mm). Salz, Gewürze, Ingwersaft und Ahornsirup zugeben, gut durchmengen." },
                    { titel: "Abfüllen", inhalt: "In Schweinedärme 26/28 abfüllen." }
                ]
            }
        ],
        tipps: ["Ingwersaft vor Verwendung gut kühlen damit Fleisch nicht zu warm wird"]
    },

    {
        id: 54,
        titel: "Rheinische Mettwurst",
        kategorie: "Rohwurst",
        beschreibung: "Klassische rheinische Streichmettwurst mit Rum und frischem Knoblauch",
        quelle: "Mettwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 600, einheit: "g" },
            { name: "Schweineschulter", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Rum", menge: 1, einheit: "cl" }
        ],
        gewuerze: [
            { name: "Nitritpökelsalz (NPS)", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 1, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauch frisch", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Rinderkranzdarm", kaliber: "37/40", menge: "passend" },
        ausgabe: "ca. 1 kg Mettwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen und mischen", inhalt: "Fleisch mit feiner Scheibe wolfen, mit allen Gewürzen und Rum gut vermengen." },
                    { titel: "Abfüllen", inhalt: "In Rinderkranzdärme 37/40 füllen und abbinden." },
                    { titel: "Reifen", inhalt: "Kühl lagern und zeitnah verzehren, da keine Umrötung ohne Starterkulturen." }
                ]
            }
        ],
        tipps: ["Optional: 3g Kümmel zugeben", "Für Salamicharakter: weniger Zucker und Starterkulturen verwenden"]
    },

    {
        id: 55,
        titel: "Berliner Mettwurst",
        kategorie: "Rohwurst",
        beschreibung: "Berliner Streichmettwurst mit Kümmel und Senfkörnern",
        quelle: "Mettwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 400, einheit: "g" },
            { name: "Schweinebauch", menge: 600, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Nitritpökelsalz (NPS)", menge: 25, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel gestoßen", menge: 2, einheit: "g", proKg: true },
            { name: "Dextrose", menge: 4, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Rinderkranzdarm", kaliber: "37/40", menge: "passend" },
        ausgabe: "ca. 1 kg Mettwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen, alle Gewürze zugeben und gut vermengen." },
                    { titel: "Abfüllen und reifen", inhalt: "In Därme füllen. Kühl zum Reifen aufhängen." }
                ]
            }
        ],
        tipps: []
    },

    {
        id: 56,
        titel: "Geräucherte Knackwurst",
        kategorie: "Rohwurst",
        beschreibung: "Klassische geräucherte Knackwurst mit Koriander und Kümmel – kaltgeräuchert und gereift",
        quelle: "Mettwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 600, einheit: "g" },
            { name: "Schweinebauch", menge: 400, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Pökelsalz (NPS)", menge: 23, einheit: "g", proKg: true },
            { name: "Koriandersamen", menge: 1, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Macis", menge: 2, einheit: "g", proKg: true },
            { name: "Kümmel", menge: 3, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchzehe gerieben", menge: 1, einheit: "Zehe" },
            { name: "Zucker", menge: 1, einheit: "Prise" }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 1 kg Knackwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Vorbereiten", inhalt: "Fleisch von Sehnen, Knorpel und Schwarte befreien. Gewürze mischen und mit Fleisch vermengen. 2 Stunden einfrieren." },
                    { titel: "Wolfen", inhalt: "Mit 4mm Scheibe wolfen. Brät kräftig durchkneten bis Bindung entsteht." },
                    { titel: "Abfüllen", inhalt: "Luftfrei in Schweinedärme 28/30 füllen. Zu Ringen formen und mit Metzgergarn verknoten." },
                    { titel: "Trocknen", inhalt: "3 Tage im Keller trocknen lassen." },
                    { titel: "Kalträuchern", inhalt: "Mind. 3 Räuchergänge à 8 Stunden bei 20°C mit Buche, je 8 Stunden Pause dazwischen." },
                    { titel: "Nachreifen", inhalt: "Mindestens 1 Woche reifen lassen. Dann einfrieren um weitere Aushärtung zu stoppen." }
                ]
            }
        ],
        tipps: ["Buche als Räucherholz bevorzugt", "Je nach gewünschter Festigkeit länger reifen lassen"]
    },

    {
        id: 57,
        titel: "Schinkenpolnische (Mettwurst-Art)",
        kategorie: "Rohwurst",
        beschreibung: "Schinkenpolnische mit Rum und braunem Zucker – geräuchert oder gebrüht",
        quelle: "Mettwurst",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter oder Keule (mager)", menge: 500, einheit: "g" },
            { name: "Schweinebauch", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Rum", menge: 2, einheit: "cl" }
        ],
        gewuerze: [
            { name: "Nitritpökelsalz (NPS)", menge: 25, einheit: "g", proKg: true },
            { name: "Pfeffer weiß", menge: 5, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 2, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel gestoßen", menge: 4, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 4, einheit: "g", proKg: true },
            { name: "Brauner Zucker", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 1 kg Polnische",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen und würzen", inhalt: "Fleisch wolfen, mit Gewürzen und Rum gut vermengen." },
                    { titel: "Abfüllen und umröten", inhalt: "In Schweinedärme füllen. 1–2 Tage zum Umröten hängen." },
                    { titel: "Räuchern", inhalt: "Kalträuchern bis zur gewünschten Farbe und Festigkeit." }
                ]
            }
        ],
        tipps: []
    },

    {
        id: 58,
        titel: "Geräucherte Mettenden ala Kajo",
        kategorie: "Rohwurst",
        beschreibung: "Kajo's Mettenden – fein gewolft, mit Rum und Senfkörnern, kaltgeräuchert",
        quelle: "Mettenden",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter oder Nacken", menge: 600, einheit: "g" },
            { name: "Schweinebauch (durchwachsen)", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Rum", menge: 1, einheit: "cl" },
            { name: "Senfkörner", menge: null, einheit: "nach Geschmack" }
        ],
        gewuerze: [
            { name: "NPS (Nitritpökelsalz)", menge: 22, einheit: "g", proKg: true },
            { name: "Pfeffer weiß oder bunt", menge: 5, einheit: "g", proKg: true },
            { name: "Dextrose", menge: 2, einheit: "g", proKg: true },
            { name: "Brauner Zucker", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel", menge: 1, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 2, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Saitling", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 1 kg Mettenden",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Fleisch mit 8mm oder 8+5mm Scheibe wolfen." },
                    { titel: "Würzen und mischen", inhalt: "Alle Gewürze und Rum zugeben, gut vermengen." },
                    { titel: "Abfüllen", inhalt: "In Saitlinge 30/32 abfüllen." },
                    { titel: "Trocknen und umröten", inhalt: "2 Tage bei Raumtemperatur hängen lassen zum Trocknen und Umröten." },
                    { titel: "Räuchern", inhalt: "Kalträuchern bis zur gewollten Farbe." }
                ]
            }
        ],
        tipps: ["Alternativ: 5g Paprika edelsüß oder 3g edelsüß + 2g scharf zugeben"]
    },

    {
        id: 59,
        titel: "Lyoner",
        kategorie: "Brühwurst",
        beschreibung: "Klassische Lyoner (Fleischwurst im Darm) – fein gekuttert, gebrüht oder im Glas eingekocht",
        quelle: "Leberwurst",
        basisMenge: { gesamt: 850 },
        fleischsorten: [
            { name: "Schweinefleisch", menge: 250, einheit: "g" },
            { name: "Schweinebauch", menge: 250, einheit: "g" },
            { name: "Rindfleisch (mager, entfettet)", menge: 200, einheit: "g" },
            { name: "Schweinebacke", menge: 150, einheit: "g" }
        ],
        zutaten: [
            { name: "Eis (feinst zerstoßen)", menge: 150, einheit: "g" }
        ],
        gewuerze: [
            { name: "Salz", menge: 19, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer gemahlen", menge: 2.2, einheit: "g", proKg: true },
            { name: "Kardamom gemahlen", menge: 0.2, einheit: "g", proKg: true },
            { name: "Muskatblüte gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Koriander gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ingwer getrocknet", menge: 0.2, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 0.5, einheit: "g", proKg: true },
            { name: "Zwiebelgranulat", menge: 3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Sterildarm", kaliber: "50 oder 60", menge: "passend" },
        ausgabe: "ca. 850 g Lyoner (oder Gläser)",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Anfrieren und wolfen", inhalt: "Fleisch, Bauch und Backen anfrieren. Durch 2mm Scheibe wolfen." },
                    { titel: "Kuttern", inhalt: "Mit Gewürzen und zerstoßenem Eis vermengen. In Küchenmaschine 10–15 Min. durchmischen bis glatte homogene Masse entsteht." },
                    { titel: "Abfüllen", inhalt: "Luftblasenfrei in Sterildärme Kaliber 50/60 oder Gläser füllen." },
                    { titel: "Garen", inhalt: "Im Darm: 60 Min. bei 75–78°C brühen. Im Glas (200g): 90 Min. bei 100°C einkochen (vollständig mit Wasser bedeckt)." },
                    { titel: "Abkühlen", inhalt: "Rasch abkühlen lassen. Glasgläser nicht mit kaltem Wasser abschrecken (Zerspringgefahr)." }
                ]
            }
        ],
        tipps: ["Gläser nur bis 1–2cm unter den Rand füllen", "Rasch abkühlen, aber keine kalte Abschreckung bei Gläsern"]
    },

    {
        id: 60,
        titel: "Schwartenmagen (Preßkopf)",
        kategorie: "Aspik & Sülze",
        beschreibung: "Preßkopf nach Carola Müller – mit Bauch, Kopffleisch und Schwarten, im Darm oder Glas",
        quelle: "Rezepte",
        basisMenge: { gesamt: 2450 },
        fleischsorten: [
            { name: "Bauchfleisch (roh)", menge: 1350, einheit: "g" },
            { name: "Kopffleisch (gekocht)", menge: 640, einheit: "g" },
            { name: "Schwarte (gekocht)", menge: 460, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebeln (gedünstet)", menge: 2, einheit: "Stück" },
            { name: "Kochsud (1–2 Tassen)", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "NPS (Nitritpökelsalz)", menge: 12.5, einheit: "g", proKg: true },
            { name: "Kochsalz", menge: 10.5, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz", menge: 5, einheit: "g", proKg: true },
            { name: "Ingwer frisch gerieben", menge: 1.2, einheit: "g", proKg: true },
            { name: "Piment", menge: 1.5, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 1.5, einheit: "g", proKg: true },
            { name: "Senfmehl", menge: 0.8, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1, einheit: "g", proKg: true },
            { name: "Nelkenpulver", menge: null, einheit: "Prise" },
            { name: "Kümmelpulver", menge: null, einheit: "Prise" }
        ],
        darm: { typ: "Mitteldarm oder Gläser", kaliber: "50/55", menge: "passend" },
        ausgabe: "ca. 2,5 kg Schwartenmagen",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Schwarten kochen", inhalt: "Schwarten in leicht gesalzenem Wasser weich kochen. Zwiebeln glasig dünsten." },
                    { titel: "Wolfen", inhalt: "Roher Bauch und gekochtes Kopffleisch durch 8mm Scheibe. Schwarten mit Zwiebeln 2× durch 2mm Scheibe. 1–2 Tassen Kochsud durchlaufen lassen." },
                    { titel: "Mischen", inhalt: "Gewürze darüber verteilen, alles gut vermengen. Nach Geschmack nachwürzen." },
                    { titel: "Abfüllen", inhalt: "Im Darm: 60 Min. bei 84°C garen. Im Glas: 120 Min. bei 90°C einkochen." }
                ]
            }
        ],
        tipps: ["Im Glas ist der Favorit laut Rezept", "Kochsud gibt der Masse Feuchtigkeit und Bindung"]
    },

    {
        id: 61,
        titel: "Schwartenwurst",
        kategorie: "Aspik & Sülze",
        beschreibung: "Deftige Schwartenwurst mit Haxe, Kopffleisch und Zwiebeln – im Darm oder Glas",
        quelle: "Rezepte",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Haxe gepökelt", menge: 400, einheit: "g" },
            { name: "Kopffleisch/Backe", menge: 300, einheit: "g" },
            { name: "Schwarten (weich gekocht)", menge: 300, einheit: "g" }
        ],
        zutaten: [
            { name: "Kochbrühe", menge: 100, einheit: "ml" },
            { name: "Zwiebeln frisch", menge: 70, einheit: "g" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 16, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 7, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmelpulver", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm oder Gläser", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 1 kg Schwartenwurst",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Kochen", inhalt: "Haxe, Schwarten und Backe köcheln. Haxe und Backe herausnehmen, Schwarten bis zum Zerdrücken weiterkochen." },
                    { titel: "Wolfen", inhalt: "Haxenfleisch und Kopffleisch durch 8mm Scheibe. Schwarten und Zwiebeln 2× durch 2mm Scheibe wolfen." },
                    { titel: "Mischen", inhalt: "Alles mit Kochbrühe und Gewürzen vermengen. Nach Geschmack nachwürzen." },
                    { titel: "Abfüllen", inhalt: "Im Darm: 60 Min. bei 84°C garen. In Gläsern: 120 Min. bei 100°C einkochen." }
                ]
            }
        ],
        tipps: []
    },

    {
        id: 62,
        titel: "Csemege Kolbász (Feinkost Kolbász)",
        kategorie: "Salami",
        beschreibung: "Traditionell ungarischer Feinkost-Kolbász mit Paprika, Kümmel und Muskat",
        quelle: "Forums Rezepte",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Gemischtes Schweine- oder Wildschweinfleisch", menge: 850, einheit: "g" },
            { name: "Fetter kerniger Speck", menge: 150, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 26, einheit: "g", proKg: true },
            { name: "Paprikapulver edelsüß", menge: 15, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 2.5, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauch frisch", menge: 3, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Muskatnuss gemahlen", menge: 0.3, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "passend für Kolbász" },
        ausgabe: "ca. 1 kg Kolbász",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Vorbereiten", inhalt: "Fleisch und Speck in 2×2cm Würfel schneiden. Mit Gewürzen vermengen. 2–3 Tage im Kühlschrank ziehen lassen, täglich vermengen." },
                    { titel: "Wolfen und füllen", inhalt: "Durch 4mm Scheibe wolfen. Fest und blasenfrei in Schweinedärme 30/32 füllen." },
                    { titel: "Trocknen und räuchern", inhalt: "1 Tag zum Trocknen aufhängen. Anschließend 1 Woche kalt räuchern." },
                    { titel: "Reifen", inhalt: "In Holzasche oder Gips zum Trocknen legen bis zur gewünschten Festigkeit." }
                ]
            }
        ],
        tipps: ["Fleisch von 130–160kg Tieren für besten Geschmack", "Traditionell in Holzasche oder Gips nachtrocknen"]
    },

    {
        id: 63,
        titel: "Pfeffer-/Chilibeißer (Bucher Rezept)",
        kategorie: "Rohwurst",
        beschreibung: "Das Bucher Würschtelmacher-Rezept für Pfefferbeißer und Chilibeißer von Kajo Monjean",
        quelle: "Bucher Wurst Manufaktur",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 500, einheit: "g" },
            { name: "Schweinebauch", menge: 400, einheit: "g" },
            { name: "Fetter Speck", menge: 100, einheit: "g" }
        ],
        zutaten: [
            { name: "Brauner Rum (alternativ Obstler)", menge: 30, einheit: "ml" },
            { name: "Senfkörner", menge: null, einheit: "nach Belieben" }
        ],
        gewuerze: [
            { name: "NPS (Nitritpökelsalz)", menge: 25, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1, einheit: "g", proKg: true },
            { name: "Traubenzucker", menge: 1.5, einheit: "g", proKg: true },
            { name: "Brauner Zucker", menge: 1.5, einheit: "g", proKg: true },
            { name: "Koriander gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat oder Macis", menge: 1.5, einheit: "g", proKg: true },
            { name: "Paprika süß oder scharf", menge: 6, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer frisch gemörsert", menge: 9, einheit: "g", proKg: true },
            { name: "Knoblauch granuliert", menge: 7, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schafs-Saitling", kaliber: "16/19 oder 18/20", menge: "passend" },
        ausgabe: "ca. 1 kg Beißer",
        schritte: [
            {
                gruppe: "Herstellung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Fleisch mit 5mm oder 5+3mm Scheibe wolfen." },
                    { titel: "Würzen und mischen", inhalt: "Alle Gewürze und Rum zugeben, gut vermengen und verkneten." },
                    { titel: "Abfüllen", inhalt: "In Saitlinge 16/19 oder 18/20 füllen." },
                    { titel: "Trocknen und räuchern", inhalt: "2 Tage bei ca. 12°C trocknen und umröten lassen. Dann mehrfach kalträuchern." }
                ]
            }
        ],
        tipps: ["Für Chilibeißer: 4g Chili scharf zugeben", "Alternativ Willi, Marille oder Obstler statt Rum"]
    }
];
