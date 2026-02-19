// Kategorie: Blutwurst
const rezepte_blutwurst = [
    {
        "id": 25,
        "titel": "Blutwurst",
        "kategorie": "Blutwurst",
        "beschreibung": "Klassische Blutwurst mit Bauch, Backen, Schwarten und warmem Blut",
        "quelle": "Leberwurst",
        "basisMenge": {
            "gesamt": 5000
        },
        "fleischsorten": [
            {
                "name": "Magerer Schweinebauch",
                "menge": 3000,
                "einheit": "g"
            },
            {
                "name": "Schweinebacken",
                "menge": 1000,
                "einheit": "g"
            },
            {
                "name": "Schwarten",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Schweineblut",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 26,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer (gemahlen)",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Majoran",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Nelken",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Macis",
                "menge": 0.3,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinskrausedarm",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 5 kg Blutwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Fleisch kochen und schneiden",
                        "inhalt": "Bauch und Backen halbgar kochen, in 1 cm große Würfel schneiden."
                    },
                    {
                        "titel": "Schwarten wolfen",
                        "inhalt": "Schwarten nicht zu weich kochen, zweimal durch 2 mm Scheibe wolfen."
                    },
                    {
                        "titel": "Mischen und abfüllen",
                        "inhalt": "Alles vermengen, warmes Blut und Gewürze zufügen. In Krausedärme füllen und abbinden."
                    },
                    {
                        "titel": "Garen",
                        "inhalt": "Bei 80°C garen: je mm Durchmesser 1 Minute."
                    },
                    {
                        "titel": "Abkühlen",
                        "inhalt": "Mit warmem Wasser abwaschen, auf ebener Fläche abkühlen und mehrfach wenden."
                    },
                    {
                        "titel": "Räuchern",
                        "inhalt": "2–3 Stunden bei max. 25°C kalt anräuchern."
                    }
                ]
            }
        ],
        "tipps": [
            "Blut muss warm zugegeben werden – sofort nach dem Schlachten verarbeiten oder frisch kaufen"
        ]
    },
    {
        "id": 78,
        "titel": "Thüringer Rotwurst ala Thomas Oskar Stockey",
        "kategorie": "Blutwurst",
        "beschreibung": "Traditionelle Thüringer Rotwurst mit Blut, Leber und Schwarten – für Butte oder Gläser",
        "quelle": "thueringer-rotwurst-ala-thomas-oskar-stockey.pdf",
        "basisMenge": {
            "gesamt": 4000
        },
        "fleischsorten": [
            {
                "name": "Schweinebauch",
                "menge": 1650,
                "einheit": "g"
            },
            {
                "name": "Schweinebacke",
                "menge": 750,
                "einheit": "g"
            },
            {
                "name": "Leber",
                "menge": 150,
                "einheit": "g"
            },
            {
                "name": "Schwarten",
                "menge": 300,
                "einheit": "g"
            },
            {
                "name": "Rückenspeck",
                "menge": 600,
                "einheit": "g"
            },
            {
                "name": "Geräucherter fetter Speck",
                "menge": 150,
                "einheit": "g"
            },
            {
                "name": "Schweineblut (aus Trockenmasse, gepökelt)",
                "menge": 400,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln",
                "menge": 4,
                "einheit": "Stück"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Nitritpökelsalz)",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer weiß",
                "menge": 2.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer schwarz",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Majoran gerebelt",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Glutamat",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskat",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Nelken",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Piment",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ingwer",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Thymian gerebelt",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Vanille",
                "menge": 0.3,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinebutte (Blinddarm) oder Gläser",
            "kaliber": "variabel",
            "menge": "passend"
        },
        "ausgabe": "ca. 4 kg Rotwurst",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Blut herstellen",
                        "inhalt": "Trockenblut nach Anweisung herstellen und pökeln."
                    },
                    {
                        "titel": "Fleisch und Schwarten kochen",
                        "inhalt": "Fleisch, Schwarten und Rückenspeck knapp gar kochen. Zwiebeln andünsten."
                    }
                ]
            },
            {
                "gruppe": "Verarbeitung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Zwiebeln, Schwarten und Rückenspeck durch 3 mm Scheibe wolfen. Magerfleisch in 1 cm Würfel schneiden. Geräucherten Speck in 0,5 cm Würfel schneiden."
                    },
                    {
                        "titel": "Mischen und füllen",
                        "inhalt": "Alles sorgfältig vermischen, ggf. etwas Brühe zugeben. Gläser und Butte füllen und binden."
                    },
                    {
                        "titel": "Garen",
                        "inhalt": "Gläser 2 Stunden bei 82°C einkochen. Butte 4 Stunden bei 82°C garen."
                    }
                ]
            }
        ],
        "tipps": [
            "Von der Kesselbrühe gibt's eine kräftige Erbsensuppe",
            "NPS-Menge im Blut beim Gesamtsalz berücksichtigen"
        ]
    },
    {
        "id": 112,
        "titel": "Schinkenrotwurst ala Michael Matschke",
        "kategorie": "Blutwurst",
        "beschreibung": "Deftige Schinkenrotwurst mit gepökeltem Schinkenfleisch, Schwarte, Zwiebeln und Schweineblut – in Sterildärmen gebrüht",
        "quelle": "Schinkenrotwurst.pdf",
        "basisMenge": {
            "gesamt": 4000
        },
        "fleischsorten": [
            {
                "name": "Schinkenfleisch ohne Fett und Schwarte (gepökelt)",
                "menge": 3500,
                "einheit": "g"
            },
            {
                "name": "Schwarte (gebrüht)",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Schweineblut",
                "menge": 400,
                "einheit": "g"
            },
            {
                "name": "Zwiebeln",
                "menge": 3,
                "einheit": "Stück"
            },
            {
                "name": "Brühe",
                "menge": 200,
                "einheit": "ml"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Nitritpökelsalz) – nur für Schwarte, Blut, Brühe",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Piment",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Nelkenpulver",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Thymian",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Majoran",
                "menge": 2.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskat",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Sterildärme",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 4 kg Schinkenrotwurst",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Fleisch pökeln",
                        "inhalt": "Schinkenfleisch am Vortag mit ca. 10% Lake pökeln."
                    },
                    {
                        "titel": "Fleisch kochen",
                        "inhalt": "Fleisch kochen, aber nicht zu lange, damit es nicht trocken wird. Aus dem Topf nehmen und abkühlen lassen. Dann in ca. 0,5 cm Würfel schneiden."
                    },
                    {
                        "titel": "Schwarte brühen und pürieren",
                        "inhalt": "500 g Schwarte brühen. Mit 3 Zwiebeln und Brühe glatt pürieren."
                    }
                ]
            },
            {
                "gruppe": "Verarbeitung",
                "schritte": [
                    {
                        "titel": "Mischen",
                        "inhalt": "Schwartenmus mit Fleischstücken, Gewürzen und ca. 400 g Blut vermischen."
                    },
                    {
                        "titel": "Abfüllen und garen",
                        "inhalt": "In Sterildärme füllen und bei ca. 85–90°C brühen. Richtwert: pro mm Kaliber 1 Minute ab Erreichen der Brühtemperatur."
                    }
                ]
            }
        ],
        "tipps": [
            "Fleisch beim Kochen nicht zu lange garen, damit es saftig bleibt",
            "NPS nur für Schwarte, Blut und ggf. Brühe verwenden"
        ]
    },
    {
        id: 250,
        titel: "Blutwurst klassisch",
        kategorie: "Blutwurst",
        beschreibung: "Klassische Blutwurst aus Bauch, Backen und Schwarten mit Blut – kalt geräuchert.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 5000,
        fleischsorten: [
            { name: "Magerer Schweinebauch", menge: 3000, einheit: "g" },
            { name: "Schweinebacken", menge: 1000, einheit: "g" },
            { name: "Schwarten", menge: 500, einheit: "g" },
            { name: "Schweineblut", menge: 500, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 26, einheit: "g", proKg: true },
            { name: "Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Nelken", menge: 0.5, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinskrausedärme", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 5 kg Blutwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Kochen und würfeln", inhalt: "Schweinebauch und Backen halbgar kochen, in 1cm Würfel schneiden." },
            { titel: "Schwarten", inhalt: "Schwarten nicht zu weich kochen, zweimal durch 2mm Scheibe wolfen." },
            { titel: "Mischen", inhalt: "Schwarten mit Bauch- und Backenwürfeln vermengen. Warmes Blut und Gewürze zufügen, gut vermengen." },
            { titel: "Füllen und garen", inhalt: "In Schweinskrausedärme füllen, einzeln abbinden. In 80°C heißem Wasser garen: je mm Darmdurchmesser 1 Minute." },
            { titel: "Abkühlen", inhalt: "Mit warmem Wasser abwaschen, auf ebener Fläche auskühlen, dabei mehrfach wenden." },
            { titel: "Räuchern", inhalt: "2-3 Stunden bei max. 25°C kalt anräuchern." }
        ]}],
        tipps: ["Beim Abkühlen mehrfach wenden um Ankleben zu verhindern"]
    }
,

    {
        id: 318,
        titel: "Schweizer Blutwurst (Handbuch)",
        kategorie: "Blutwurst",
        beschreibung: "Schweizer Blutwurst aus frischem Blut, Vollmilch und Schweinefett – historisches Profi-Rezept mit Zimt",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "18 l + 4 kg",
        fleischsorten: [
            { name: "Schweinefett (Borsen und Griffe)", menge: "4000g" }
        ],
        zutaten: [
            { name: "Frisches Schweineblut", menge: "10 Liter" },
            { name: "Vollmilch", menge: "10 Liter" },
            { name: "Brühe", menge: "2 Liter" },
            { name: "Zwiebeln", menge: "2000g" }
        ],
        gewuerze: [
            { name: "Salz", menge: "15g/kg Blut + Milch + Brühe" },
            { name: "Pfeffer", menge: "1g/kg" },
            { name: "Muscat", menge: "1g/kg" },
            { name: "Majoran", menge: "0,5g/kg" },
            { name: "Nelken", menge: "0,5g/kg" },
            { name: "Zimt", menge: "2g/kg" }
        ],
        darm: "Schweinskrausedärme oder Kuhkranzdärme",
        ausgabe: "ca. 24 kg",
        schritte: [
            { titel: "Blut und Milch", inhalt: "Blut in handwarmem Zustand bereitstellen. Salz und Gewürze in 1 Liter Blut auflösen. Warm vorgewärmte Milch unter ständigem Rühren zugeben." },
            { titel: "Fett und Zwiebeln", inhalt: "Schweinefett und Zwiebeln brühen, in gewünschte Stücke schneiden. Zur Blut-Milch-Mischung geben." },
            { titel: "Füllen und brühen", inhalt: "In Schweinskrausedärme füllen. In 70-72°C Wasser ca. 15-45 Minuten brühen je nach Dicke. Ständig umrühren für gleichmäßige Fettverteilung. In kaltem Wasser abkühlen." }
        ],
        tipps: "Schweizer Besonderheit: Vollmilch macht diese Blutwurst besonders zart! Alle Zutaten müssen handwarm sein – zu heiße Milch stockt das Blut vorzeitig. Nur auf Blut berechnet gewürzen."
    },
    {
        id: 319,
        titel: "Zungenblutwurst (Schweizer Handbuch)",
        kategorie: "Blutwurst",
        beschreibung: "Festliche Schweizer Zungenblutwurst mit Schweinezungen-Einlage, Speckwürfeln und Blut-Fäbung",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "18 kg",
        fleischsorten: [
            { name: "Speckwürfel", menge: "600g" },
            { name: "Schwarten (durch 1,5mm getrieben)", menge: "300g" },
            { name: "Schweinezungen (gesalzen)", menge: "6-8 Stück" }
        ],
        zutaten: [
            { name: "Brühe", menge: "200 ml/kg" },
            { name: "Milch (gekocht)", menge: "100 ml/kg" },
            { name: "Schweineblut (vorgesalzen, zur Färbung)", menge: "100 ml/kg" }
        ],
        gewuerze: [
            { name: "Salz", menge: "25g/kg" },
            { name: "Pfeffer", menge: "1g/kg" },
            { name: "Muskatnuss", menge: "0,5g/kg" },
            { name: "Majoran", menge: "1g/kg" },
            { name: "Zimt", menge: "1g/kg" },
            { name: "Nelken", menge: "0,25g/kg" },
            { name: "Thymian", menge: "0,5g/kg" },
            { name: "Zwiebeln", menge: "5g/kg" }
        ],
        darm: "Schweinskrausedärme oder Kunstdärme",
        ausgabe: "ca. 18 kg",
        schritte: [
            { titel: "Schwarten und Zungen kochen", inhalt: "Schwarten nicht ganz weich kochen, noch warm zweimal durch 1,5-2mm Scheibe (Zwiebeln voraus). Schweinezungen ebenfalls nicht ganz weich kochen, abkühlen." },
            { titel: "Masse herstellen", inhalt: "Schwartenmasse mit Brühe, Milch und Blut vermengen. Speckwürfel zugeben, Gewürze einarbeiten." },
            { titel: "Zungen einlegen", inhalt: "Zungen nach Wunsch ganz oder in Stücke einlegen, dabei gut über die gesamte Länge verteilen." },
            { titel: "Füllen und brühen", inhalt: "In Därme füllen, brühen. Abkühlen lassen." }
        ],
        tipps: "Schweizer Festtagswurst! Zungen können ganz oder in Stücke eingelegt werden. Das Schweineblut dient nur zur Färbung – die Konsistenz kommt aus Schwarten und Milch."
    },
    {
        id: 320,
        titel: "Schwartenmagen rot (Schweizer Handbuch)",
        kategorie: "Aspik & Sülze",
        beschreibung: "Schweizer Schwartenmagen mit Blutbeigabe – rustikal mit Gnagi (Schweinsfüsse) und Schulterspeck",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "10,5 kg",
        fleischsorten: [
            { name: "Schulterspeck", menge: "200g" },
            { name: "Gnagi (Ohren, Kinnbacken, Kopfstücke)", menge: "500g" },
            { name: "Schwarten", menge: "300g" }
        ],
        zutaten: [
            { name: "Blut (vorgesalzen)", menge: "150 ml/kg" },
            { name: "Brühe", menge: "100 ml/kg" }
        ],
        gewuerze: [
            { name: "Pfeffer (weiß)", menge: "2g/kg" },
            { name: "Nelkenpulver", menge: "0,25g/kg" },
            { name: "Muscat", menge: "0,5g/kg" },
            { name: "Majoran (gemahlen)", menge: "1g/kg" },
            { name: "Zwiebeln", menge: "10g/kg" }
        ],
        darm: "Schweinemägen oder Kunstdärme",
        ausgabe: "ca. 10,5 kg",
        schritte: [
            { titel: "Alles kochen", inhalt: "Schulterspeck, Gnagi und Schwarten gut vorsalzen, waschen, langsam kochen. Schwarten müssen gut weich sein." },
            { titel: "Kleinschneiden", inhalt: "Gekochten Speck und Gnagi in gleichmäßige Würfel schneiden. Schwarten im heißen Zustand durch 2mm Scheibe wolfen." },
            { titel: "Blut einarbeiten", inhalt: "Schwartenmasse mit Blut und Brühe im Blitz vermengen. Würfel und Gewürze zugeben." },
            { titel: "Füllen", inhalt: "In Schweinemägen oder Kunstdärme füllen. Brühen und pressen." }
        ],
        tipps: "Gnagi = typisch schweizerisch für Kalbsfüsse, Schweinsfüsse und Kopfstücke. Das Blut gibt die rote Farbe und kräftigen Geschmack."
    }
];
