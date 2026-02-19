// Kategorie: Wildwurst
const rezepte_wildwurst = [
    {
        "id": 76,
        "titel": "Bratwurst vom Wildschwein",
        "kategorie": "Wildwurst",
        "beschreibung": "Rustikale Wildschwein-Bratwurst mit Hausschweinebauch – muss gebrüht werden",
        "quelle": "Wildbratwurst.pdf",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Wildschweinfleisch",
                "menge": 600,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch (ohne Schwarte)",
                "menge": 400,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Ei",
                "menge": 1,
                "einheit": "Stück",
                "proKg": true
            },
            {
                "name": "Eiswasser",
                "menge": null,
                "einheit": "nach Bedarf"
            }
        ],
        "gewuerze": [
            {
                "name": "Jodsalz",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer",
                "menge": 7,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Majoran gerebelt",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskat",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Rosmarinpulver",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel gemahlen",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchzehe (ausgepresst)",
                "menge": 1,
                "einheit": "Stück",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedünndarm",
            "kaliber": "30",
            "menge": "passend"
        },
        "ausgabe": "ca. 8-10 Würste",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Durch 5 mm Scheibe wolfen. Mit Gewürzen, Ei und etwas Eiswasser gut vermengen. In Schweinedünndarm Kaliber 30 abfüllen."
                    },
                    {
                        "titel": "Brühen (Pflicht!)",
                        "inhalt": "Bei 82°C 30 Minuten brühen – enthält Frischei, deshalb unbedingt brühen!"
                    }
                ]
            }
        ],
        "tipps": [
            "Einfrieren kein Problem",
            "Wegen des Frischeis muss diese Wurst zwingend gebrüht werden"
        ]
    },

    // ── Neue Rezepte aus Wild-Ordner ──────────────────────────

    {
        id: 83,
        titel: "Wildschweinbratwurst ala Helmut Heubacher",
        kategorie: "Wildwurst",
        beschreibung: "Klassische Wildschweinbratwurst mit Schulter und Bauch, fein gewürzt mit Muskat, Koriander und Piment.",
        quelle: "Wild/Wildschwein Bratwurst ala Helmut Heubacher.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Wildschweischulter", menge: 700, einheit: "g" },
            { name: "Wildschweinbauch", menge: 300, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Koriander", menge: 2, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.5, einheit: "g", proKg: true },
            { name: "Wacholder, feingemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Lorbeerblatt, feingemahlen", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28-30", menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Fleisch vorbereiten", inhalt: "Fleisch kleinschneiden, Gewürze durchmengen und einige Stunden einziehen lassen." },
                    { titel: "Wolfen", inhalt: "Gut mengen und durch den Fleischwolf mit 5-6 mm Scheibe drehen." },
                    { titel: "Füllen", inhalt: "Gut mengen und in 28-30er Schweinedarm füllen." }
                ]
            }
        ],
        tipps: ["Die Würste schmecken frisch gegrillt am besten"]
    },

    {
        id: 84,
        titel: "Wildschweinbratwurst ala Alex Kl.",
        kategorie: "Wildwurst",
        beschreibung: "Sommerlich frische Wildschweinbratwurst mit Zitrusabrieb, Koriander und Cayenne-Chilli.",
        quelle: "Wild/Wildschweinbratwurst ala Alex Kl.pdf",
        basisMenge: { gesamt: 5000 },
        fleischsorten: [
            { name: "Wildfleisch", menge: 4000, einheit: "g" },
            { name: "Schweinebauch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Knoblauch, frisch gepresst", menge: 20, einheit: "g", proKg: true },
            { name: "Zitronenschale + Limettenabrieb (1 Zitrone, 2 Limetten)", menge: null, einheit: "Stk." },
            { name: "Cayenne-Chilli, gehackt", menge: 1, einheit: "Stk." },
            { name: "Koriander (Bund), gehackt", menge: 1, einheit: "Bund" }
        ],
        gewuerze: [
            { name: "Salz", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 2.2, einheit: "g", proKg: true },
            { name: "Piment", menge: 0.8, einheit: "g", proKg: true },
            { name: "Majoran", menge: 5, einheit: "TL", proKg: false }
        ],
        darm: { typ: "Schweinedünndarm", kaliber: "26/28", menge: null },
        ausgabe: "ca. 5 kg",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorbereiten", inhalt: "Fleisch würfeln, Chilli und Koriander hacken. Knoblauch pressen, Schalenabrieb reiben." },
                    { titel: "Mengen", inhalt: "Gewürze gleichmäßig über das Fleisch verteilen und alles gut durchmengen." },
                    { titel: "Wolfen", inhalt: "Alles durch die 3er Scheibe wolfen und nochmals gut vermischen." },
                    { titel: "Füllen", inhalt: "Brät in 26/28er Schweinedünndärme füllen. Luftblasen mit Nadel entlüften." }
                ]
            }
        ],
        tipps: ["Sehr sommerlich – ideal für Grillabende"]
    },

    {
        id: 85,
        titel: "Wildschweinbratwurst ala Jörg Eidenschink",
        kategorie: "Wildwurst",
        beschreibung: "Feines Brät aus Wildschweenschulter, Wildschweinnacken und Kutterbauch mit Zitronenschale.",
        quelle: "Wild/Wildschweinbratwurst ala Jörg Eidenschink.pdf",
        basisMenge: { gesamt: 5000 },
        fleischsorten: [
            { name: "Wildschweenschulter", menge: 2000, einheit: "g" },
            { name: "Wildschweinnacken", menge: 1500, einheit: "g" },
            { name: "Schweinebauch / Kutterbauch", menge: 1500, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 25, einheit: "g", proKg: true },
            { name: "Pfeffer, gemahlen", menge: 2.5, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel, gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Zitronenschale, gerieben", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: null, menge: null },
        ausgabe: "ca. 5 kg",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Gesamte Masse in Stücke schneiden und zweimal durch 2mm Scheibe wolfen." },
                    { titel: "Würzen & Mengen", inhalt: "Gewürze zugeben, alles gut bindig vermengen." },
                    { titel: "Füllen", inhalt: "Masse in Darm füllen und in gewünschter Länge abdrehen." }
                ]
            }
        ],
        tipps: ["Perfekt zum Braten oder Grillen"]
    },

    {
        id: 86,
        titel: "Wildschweinleberwurst",
        kategorie: "Wildwurst",
        beschreibung: "Feine Leberwurst aus Wildschweenleber mit Schweineschulter und Speck, eingekocht im Glas.",
        quelle: "Wild/Wildschweinleberwurst.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 500, einheit: "g" },
            { name: "Grüner Speck (Rückenspeck)", menge: 100, einheit: "g" },
            { name: "Bauchspeck", menge: 150, einheit: "g" },
            { name: "Wildschweinleber", menge: 250, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Nitrit-Pökelsalz", menge: 17, einheit: "g", proKg: true },
            { name: "Pfeffer, gemahlen", menge: 1.5, einheit: "g", proKg: true },
            { name: "Wildgewürz", menge: 1, einheit: "g", proKg: true },
            { name: "Macis (Muskatblüte)", menge: 1.5, einheit: "g", proKg: true }
        ],
        darm: null,
        ausgabe: "ca. 4-5 Gläser à 200 ml",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Fleisch brühen", inhalt: "Schulter und Speck in wolfgerechte Stücke schneiden und ca. 2 Std. bei ~80°C brühen (idealerweise im Vakuumbeutel, um die Fleischbrühe aufzufangen)." },
                    { titel: "Fleisch wolfen", inhalt: "Das gekochte Fleisch fein wolfen und mit der Fleischbrühe mengen." },
                    { titel: "Leber kuttern", inhalt: "Die Leber mit den Gewürzen in einem Mixer so lange mixen, bis sie Blasen wirft." },
                    { titel: "Vermengen", inhalt: "Lebermasse mit dem gewolften Brühfleisch vermengen und erneut im Mixer fein kuttern." },
                    { titel: "Abfüllen", inhalt: "In Gläser abfüllen und 120 Minuten bei 100°C einkochen." }
                ]
            }
        ],
        tipps: [
            "Ohne Nitrit-Pökelsalz wird die Leberwurst grau statt rötlich – schadet dem Geschmack nicht",
            "Je länger und feiner kuttern, desto cremiger die Konsistenz"
        ]
    },

    {
        id: 87,
        titel: "Feine Leberwurst vom Wild und Hausschwein",
        kategorie: "Wildwurst",
        beschreibung: "Leberwurst aus Wildschweinkopf, Schweinebacke, Leber und Wamme – mit Sahne und glasig angeschwitzten Zwiebeln.",
        quelle: "Wild/2 Feine Leberwurst vom Wild und Hausschwein.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Wildschweinkopffleisch (Magerfleisch)", menge: 600, einheit: "g" },
            { name: "Schweinebacke / Wamme (Fett)", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Sahne", menge: 20, einheit: "ml", proKg: true },
            { name: "Zwiebeln, glasig angeschwitz in Butterschmalz", menge: 4, einheit: "Stk." }
        ],
        gewuerze: [
            { name: "NPS", menge: 9, einheit: "g", proKg: true },
            { name: "Kochsalz", menge: 9, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Pfeffer (doppelt griffig, schwarz)", menge: 3, einheit: "g", proKg: true },
            { name: "Piment", menge: 0.5, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel, gemahlen", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweine- oder Rinderdarm Kal. 40mm", kaliber: "40", menge: null },
        ausgabe: "5,5 kg Wurstmasse → 25 Gläser à 235 ml + 10 Därme 40mm × 250mm",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Fleisch kochen", inhalt: "Fleisch mit Suppengemüse bissfest köcheln lassen. Aus der Brühe nehmen, etwas abkühlen lassen." },
                    { titel: "Wolfen & Kuttern", inhalt: "Fleisch mit den Zwiebeln durch die 2 mm Scheibe wolfen. Die Hälfte der Masse fein kuttern mit Zugabe der Sahne." },
                    { titel: "Leber", inhalt: "Leber 15 Sekunden in heißes Wasser tauchen, kleinschneiden und im Küchenmaschine mit Salz schaumig kuttern." },
                    { titel: "Vermengen", inhalt: "Alles mit den Gewürzen gut vermengen. Fett von der Brühe abschöpfen und mit Schlachtebrühe zugeben. Mengen bis ein schöner Brei entsteht." },
                    { titel: "Füllen", inhalt: "In Gläser und Därme füllen. Därme pro mm Durchmesser bei 80°C brühen, im kalten Wasser abkühlen. Gläser 2 Stunden bei 100°C einkochen." }
                ]
            }
        ],
        tipps: ["Verhältnis Magerfleisch zu Fett: 60% zu 40%"]
    },

    {
        id: 88,
        titel: "Wildschwein-Nußschinken ala Holger Belzer",
        kategorie: "Wildwurst",
        beschreibung: "Gepökelter und kaltgeräucherter Nußschinken vom Wildschwein – nach tradioneller Methode mit Gewürzlake.",
        quelle: "Wild/Wildschwein-Nußschinken ala Holger Belzer.pdf",
        basisMenge: { gesamt: 3000 },
        fleischsorten: [
            { name: "Wildschweinnüsse (ca. 6 Stück)", menge: 3000, einheit: "g" }
        ],
        zutaten: [
            { name: "Nitritpökelsalz (Trockenpökel)", menge: 700, einheit: "g" },
            { name: "Rohrzucker (Trockenpökel)", menge: 10, einheit: "g" },
            { name: "Wasser (für Lake)", menge: 10, einheit: "L" },
            { name: "Nitritpökelsalz (Lake)", menge: 500, einheit: "g" },
            { name: "Rohrzucker (Lake)", menge: 10, einheit: "g" }
        ],
        gewuerze: [
            { name: "Pfefferkörner", menge: 10, einheit: "g" },
            { name: "Kümmel, gemahlen", menge: 5, einheit: "g" },
            { name: "Wacholderbeeren, zerdrückt", menge: 8, einheit: "Stk." }
        ],
        darm: null,
        ausgabe: "ca. 6 Stück Nußschinken",
        schritte: [
            {
                gruppe: "Pökeln",
                schritte: [
                    { titel: "Trockenpökel", inhalt: "Wildschweinnüsse gut mit der Pökelsalzmischung einreiben, in geeignetes Gefäß legen, einen Tag in ca. 5°C kühlem Raum stellen." },
                    { titel: "Nasspökeln", inhalt: "Gewürzlake kurz aufkochen, erkalten lassen, über das Fleisch gießen. 3 Tage darin pökeln." },
                    { titel: "Wässern", inhalt: "Eine Stunde kalt wässern." }
                ]
            },
            {
                gruppe: "Reifen & Räuchern",
                schritte: [
                    { titel: "Trocknen", inhalt: "2 Tage zum Trocknen in kühlen, gut durchlüfteten aber zugfreien Raum hängen." },
                    { titel: "Räuchern", inhalt: "Kalträuchern bis schöne Farbe entsteht (ca. 5-6 Tage)." }
                ]
            }
        ],
        tipps: [
            "Alternativ 12 Tage im Vakuum pökeln",
            "Die Nuss wird regional auch Kugel oder Maus genannt"
        ]
    },

    {
        id: 191,
        titel: "Wildschwein Pfefferbeißer mit Whiskey",
        kategorie: "Wildwurst",
        beschreibung: "Würzige Pfefferbeißer aus 100% Wildschwein mit Whiskey – kalt geräuchert mit Kirschholz.",
        quelle: "Wursten/Wildschwein Pfefferbeißer.doc",
        basisMenge: { gesamt: 5000 },
        fleischsorten: [
            { name: "Wildschwein (in Würfel geschnitten)", menge: 5000, einheit: "g" }
        ],
        zutaten: [
            { name: "Whiskey (guter Schuss)", menge: null, einheit: "nach Geschmack" }
        ],
        gewuerze: [
            { name: "NPS", menge: 27, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz geschrotet", menge: 5, einheit: "g", proKg: true },
            { name: "Rauchsalz", menge: 1, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 5, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schafssaitling", kaliber: "20/22", menge: "passend" },
        ausgabe: "ca. 5 kg Pfefferbeißer",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Würzen und mischen", inhalt: "Wild in Würfel schneiden. Mit Gewürzen vermengen und mischen. 1 Stunde ruhen lassen." },
            { titel: "Wolfen", inhalt: "Mit der 3mm Scheibe wolfen." },
            { titel: "Ziehen lassen", inhalt: "24 Stunden im Kühlschrank ziehen lassen." },
            { titel: "Füllen", inhalt: "In 20/22 Schafssaitling abfüllen." },
            { titel: "Trocknen und räuchern", inhalt: "24 Stunden trocknen lassen. 5 Stunden kalt räuchern mit Kirschholz. Nochmals 24 Stunden trocknen lassen. Fertig." }
        ]}],
        tipps: ["Kirschholz gibt eine milde, fruchtige Rauchnote zum Wildaroma"]
    },

    {
        id: 216,
        titel: "Bratwurst vom Wildschwein",
        kategorie: "Wildwurst",
        beschreibung: "Klassische Wildschwein-Bratwurst mit Ei – muss gebrüht werden (enthält Frischei).",
        quelle: "01 Kajo/Wild/Wildwurst/Bratwurst vom Wildschwein.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Wildschweinfleisch", menge: 600, einheit: "g" },
            { name: "Schweinebauch ohne Schwarte", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Ei", menge: 1, einheit: "Stück" },
            { name: "Eiswasser nach Bedarf", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Jodsalz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 7, einheit: "g", proKg: true },
            { name: "Majoran gerebelt", menge: 2, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1, einheit: "g", proKg: true },
            { name: "Rosmarinpulver", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Knoblauchzehe frisch gepresst", menge: 1, einheit: "Stück" }
        ],
        darm: { typ: "Schweinedünndarm", kaliber: "30", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Durch 5-mm-Scheibe wolfen. Mit Gewürzen, Ei und etwas Eiswasser gut vermengen." },
            { titel: "Füllen", inhalt: "In Schweinedünndarm Kaliber 30 abfüllen." },
            { titel: "Brühen", inhalt: "Muss bei 82°C 30 Minuten gebrüht werden (enthält Frischei). Einfrieren möglich." }
        ]}],
        tipps: ["WICHTIG: Diese Wurst MUSS gebrüht werden – enthält rohes Ei!"]
    },

    {
        id: 217,
        titel: "Wildschwein-Bratwurst ala Helmut Heubacher",
        kategorie: "Wildwurst",
        beschreibung: "Würzige Wildschwein-Bratwurst mit Koriander, Piment und Kardamom – 70% Schulter, 30% Bauch.",
        quelle: "01 Kajo/Wild/Wildwurst/Wildschwein Bratwurst ala Helmut Heubacher.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Wildschweinsschulter (70%)", menge: 700, einheit: "g" },
            { name: "Wildschweinbauch (30%)", menge: 300, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Koriander", menge: 2, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.5, einheit: "g", proKg: true },
            { name: "Wacholder feingemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Lorbeerblatt feingemahlen", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 1 kg Wildbratwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Vorbereitung", inhalt: "Fleisch kleinschneiden, Gewürze drüber mengen und einige Stunden einziehen lassen." },
            { titel: "Wolfen und füllen", inhalt: "Gut mengen und durch 5-6er Scheibe wolfen. Nochmals gut mengen. In 28-30 Darm füllen." }
        ]}],
        tipps: []
    },

    {
        id: 218,
        titel: "Wildschweinbratwurst ala Alex Kl.",
        kategorie: "Wildwurst",
        beschreibung: "Sommerliche Wildschweinbratwurst mit Koriander, Limette, Chilli und viel Knoblauch.",
        quelle: "01 Kajo/Wild/Wildwurst/Wildschweinbratwurst ala Alex Kl.pdf",
        basisMenge: { gesamt: 5000 },
        fleischsorten: [
            { name: "Wildfleisch (Wildschwein)", menge: 4000, einheit: "g" },
            { name: "Schweinebauch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Frisch gepresster Knoblauch", menge: 20, einheit: "g" },
            { name: "Schalenabrieb einer Zitrone", menge: null, einheit: "1 Stück" },
            { name: "Schalenabrieb von 2 Limetten", menge: null, einheit: "2 Stück" },
            { name: "Gehackte Cayenne-Chilli", menge: null, einheit: "1 Stück" },
            { name: "Ein Bund Koriander (gehackt)", menge: null, einheit: "1 Bund" }
        ],
        gewuerze: [
            { name: "Salz", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 2.2, einheit: "g", proKg: true },
            { name: "Piment", menge: 0.8, einheit: "g", proKg: true },
            { name: "Majoran", menge: null, einheit: "5 TL" }
        ],
        darm: { typ: "Schweinedünndarm", kaliber: "26/28", menge: "passend" },
        ausgabe: "ca. 5 kg Wildbratwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Würzen", inhalt: "Fleisch würfeln. Chilli und Koriander hacken. Alle Gewürze, Knoblauch und Schalenabrieb gleichmäßig über dem Fleisch verteilen, gut durchmengen." },
            { titel: "Wolfen und füllen", inhalt: "Durch 3er Scheibe wolfen. Nochmals gut vermischen. In 26/28er Schweinedünndärme füllen. Luftblasen mit Nadel entlüften." }
        ]}],
        tipps: ["Sehr sommerlich – passt gut zum Grill"]
    },

    {
        id: 219,
        titel: "Wildschweinbratwurst ala Jörg Eidenschink",
        kategorie: "Wildwurst",
        beschreibung: "Feine Wildschwein-Grillbratwurst aus Schulter, Nacken und Bauch – 2× durch 2mm gewolft.",
        quelle: "01 Kajo/Wild/Wildwurst/Wildschweinbratwurst ala Jörg Eidenschink.pdf",
        basisMenge: { gesamt: 5000 },
        fleischsorten: [
            { name: "Wildschweinschulter", menge: 2000, einheit: "g" },
            { name: "Wildschweinnacken", menge: 1500, einheit: "g" },
            { name: "Schweinebauch / Kutterbauch", menge: 1500, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 25, einheit: "g", proKg: true },
            { name: "Pfeffer gemahlen", menge: 2.5, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Zitronenschale gerieben", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Naturdarm (Schweine- oder Schafsdarm)", kaliber: "nach Wunsch", menge: "passend" },
        ausgabe: "ca. 5 kg Bratwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen", inhalt: "Gesamte Masse in Stücke schneiden und 2× durch 2mm Scheibe wolfen." },
            { titel: "Würzen und füllen", inhalt: "Gewürze zugeben, alles gut bindig vermengen. In Darm füllen, in gewünschter Länge abdrehen." }
        ]}],
        tipps: ["Perfekt zum Braten oder Grillen"]
    }
];
