// Kategorie: Leberwurst
const rezepte_leberwurst = [
    {
        "id": 23,
        "titel": "Leberwurst (klassisch)",
        "kategorie": "Leberwurst",
        "beschreibung": "Klassische Leberwurst mit Schulter, Bauch, Leber und Backen – kalt geräuchert",
        "quelle": "Leberwurst",
        "basisMenge": {
            "gesamt": 5000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter (mager, gekocht)",
                "menge": 1500,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch (fett, vorgekocht)",
                "menge": 1000,
                "einheit": "g"
            },
            {
                "name": "Schweineleber",
                "menge": 1500,
                "einheit": "g"
            },
            {
                "name": "Schweinebacken (gekocht)",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln (geschmort)",
                "menge": 75,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 24,
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
                "name": "Muskat",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Majoran",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kardamom",
                "menge": 0.3,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kranzdarm (Rind)",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 5 kg Leberwurst",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Fleisch kochen",
                        "inhalt": "Schulter, Bauch und Backen in Stücke schneiden und kochen."
                    },
                    {
                        "titel": "Leber vorbereiten",
                        "inhalt": "Leber in dünne Scheiben schneiden, kurz abbrühen, mit Zwiebeln durch 2 mm Scheibe wolfen."
                    }
                ]
            },
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Schulter, Bauch und Backen durch 3 mm Scheibe wolfen."
                    },
                    {
                        "titel": "Mischen und abfüllen",
                        "inhalt": "Gesamte Masse würzen, gut vermengen, in Kranzdärme füllen, einzeln abbinden."
                    },
                    {
                        "titel": "Garen",
                        "inhalt": "Ca. 60 Min. in 80°C heißem Wasser garen. Danach von Fett befreien, 10 Min. in 30°C Wasser legen, dann in kaltes Wasser tauchen."
                    },
                    {
                        "titel": "Räuchern",
                        "inhalt": "Auf Rauchspieße hängen, 2–3 Stunden an der Luft trocknen, dann 8–10 Stunden bei max. 25°C kalt räuchern."
                    }
                ]
            }
        ],
        "tipps": [
            "Leber kurz abbrühen – macht sie milder und leichter zu wolfen"
        ]
    },
    {
        "id": 24,
        "titel": "Thüringer Leberwurst Opa Jochen",
        "kategorie": "Leberwurst",
        "beschreibung": "Altes Hausschlachtungs-Rezept: Wamme, Speck, Leber und Zwiebeln – ohne Zusätze",
        "quelle": "Pfefferbeißer / Wurst",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Wamme (50%)",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Speck (25%)",
                "menge": 250,
                "einheit": "g"
            },
            {
                "name": "Schweineleber (25%)",
                "menge": 250,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln",
                "menge": 130,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Kochsalz",
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
                "name": "Majoran",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Gläser oder Naturdarm",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 1,2 kg Leberwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Leber aufschlagen",
                        "inhalt": "Leber durch 3 mm Scheibe wolfen, Salz zugeben und mit Schneebesen aufschlagen bis gute Bindung entsteht."
                    },
                    {
                        "titel": "Rest wolfen",
                        "inhalt": "Wamme, Speck und Zwiebeln wolfen."
                    },
                    {
                        "titel": "Mischen",
                        "inhalt": "Mit Pfeffer und Majoran würzen, Leber zugeben, nochmals mischen. Mit Brühe Garverlust ausgleichen."
                    },
                    {
                        "titel": "Einkochen",
                        "inhalt": "Bei 100°C 2 Stunden einkochen."
                    }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 75,
        "titel": "Leberwurst nach Pfälzer Art",
        "kategorie": "Leberwurst",
        "beschreibung": "Kräftige Pfälzer Leberwurst mit Majoran und Piment, wahlweise im Darm oder Glas",
        "quelle": "Leberwurst nach Pfälzer Art, +++.pdf",
        "basisMenge": {
            "gesamt": 1850
        },
        "fleischsorten": [
            {
                "name": "Fetter Rückenspeck",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch (ohne Schwarte)",
                "menge": 1000,
                "einheit": "g"
            },
            {
                "name": "Schweineleber",
                "menge": 350,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln",
                "menge": 170,
                "einheit": "g",
                "proKg": true
            }
        ],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 22,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Majoran",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskat",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Piment",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Rinderkranzdarm oder TO-Gläser",
            "kaliber": "37/40",
            "menge": "passend"
        },
        "ausgabe": "ca. 1,8 kg Leberwurst",
        "schritte": [
            {
                "gruppe": "Kochen",
                "schritte": [
                    {
                        "titel": "Fleisch kochen",
                        "inhalt": "Bauchfleisch ca. 45 Minuten leicht köcheln. Speck ca. 20-30 Minuten mitköcheln lassen."
                    },
                    {
                        "titel": "Leber vorbereiten",
                        "inhalt": "Rohe Leber durch die 3 mm Scheibe wolfen, Salz hinzugeben und mit einem Schneebesen aufschlagen."
                    }
                ]
            },
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Gekochtes Fleisch und Zwiebeln durch den Fleischwolf drehen. Mit aufgeschlagener Leber und Gewürzen gut vermischen. Ca. 20-30% der Kesselbrühe (Fett von oben abschöpfen) zugeben. Masse sollte Konsistenz von Babybrei haben."
                    },
                    {
                        "titel": "Abfüllen und brühen",
                        "inhalt": "Darm befüllen und mit Garn abbinden. Bei 80°C pro mm Durchmesser eine Minute brühen."
                    },
                    {
                        "titel": "Abkühlen und räuchern",
                        "inhalt": "20 Minuten in kaltem Wasser abkühlen, dann zum Trocknen aufhängen. Am nächsten Tag 2 x 6 Stunden räuchern (mit 12 Stunden Pause)."
                    }
                ]
            }
        ],
        "tipps": [
            "Im Glas: 120 Minuten bei 99°C im Einkochautomat einkochen",
            "Im Darm: 1 Minute pro mm Durchmesser bei 80°C brühen"
        ]
    },
    {
        "id": 113,
        "titel": "Delikatess Leberwurst ala Günter Bezler",
        "kategorie": "Leberwurst",
        "beschreibung": "Feine Delikatess-Leberwurst nach GuBe-Rezeptur mit Leber, Bauch, Wamme und Kalbshals – fast flüssig abgefüllt",
        "quelle": "GuBe_Delikates-Leberwurst.pdf",
        "basisMenge": {
            "gesamt": 10000
        },
        "fleischsorten": [
            {
                "name": "Schweineleber",
                "menge": 3000,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 2000,
                "einheit": "g"
            },
            {
                "name": "Wamme",
                "menge": 2000,
                "einheit": "g"
            },
            {
                "name": "Kalbshals",
                "menge": 2000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Kesselbrühe",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Nitritpökelsalz)",
                "menge": 21,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Mischgewürz (nach Herstellerangabe)",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Umrötemittel (nach Herstellerangabe)",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Zwiebel (angedünstet)",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchpaste oder -pulver",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kunstdärme oder Schweinefettenden",
            "kaliber": "40–60",
            "menge": "passend"
        },
        "ausgabe": "ca. 10 kg Leberwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Fleisch kochen",
                        "inhalt": "Bauch, Wamme und Kalbfleisch ca. 45 Minuten im Kessel kochen."
                    },
                    {
                        "titel": "Leber aufschlagen",
                        "inhalt": "Leber ganz fein wolfen, gesamte Salzmenge zugeben und mit dem Schneebesen aufschlagen bis eine schöne Bindung entsteht."
                    },
                    {
                        "titel": "Material wolfen und mischen",
                        "inhalt": "Gekochtes Fleisch und Zwiebeln ganz fein wolfen. Leber und Gewürze zugeben und gut mischen."
                    },
                    {
                        "titel": "Kesselbrühe zugeben",
                        "inhalt": "Kesselbrühe zugeben bis fast flüssige Konsistenz entsteht."
                    },
                    {
                        "titel": "Abfüllen und garen",
                        "inhalt": "In Kunstdärme oder Schweinefettenden füllen. Im Kessel bei 80°C bis 75°C Kerntemperatur ziehen."
                    }
                ]
            }
        ],
        "tipps": [
            "Für grobe Landleberwurst: abgekochte, grob gewolfte Leber und Schweineschulter sowie Majoran zugeben, in Schweinekrausen füllen und nach dem Kochen kalt räuchern",
            "In 40er Schweinsdarm, in Ringe abgebunden, gekocht und nachgeräuchert – ebenfalls sehr lecker"
        ]
    },
    {
        "id": 114,
        "titel": "Adolfs Sahne-Leberwurst",
        "kategorie": "Leberwurst",
        "beschreibung": "Cremige Sahne-Leberwurst mit Kutterwamme, Backen und Schweineleber – fein gekuttert mit Sahne",
        "quelle": "Sahnestreichwurst.pdf · Version 1.pdf",
        "basisMenge": {
            "gesamt": 10000
        },
        "fleischsorten": [
            {
                "name": "Kutterwamme (mit Wamme)",
                "menge": 5000,
                "einheit": "g"
            },
            {
                "name": "Schweinebacken (ohne Schwarte)",
                "menge": 2000,
                "einheit": "g"
            },
            {
                "name": "Schweineleber",
                "menge": 3000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Sahne",
                "menge": 1000,
                "einheit": "g"
            },
            {
                "name": "Lorbeerblätter",
                "menge": 6,
                "einheit": "Stück"
            },
            {
                "name": "Wacholderbeeren",
                "menge": 20,
                "einheit": "Stück"
            },
            {
                "name": "Zwiebeln (groß, geröstete Ringe)",
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
            }
        ],
        "darm": {
            "typ": "Naturdarm",
            "kaliber": "40–43",
            "menge": "passend"
        },
        "ausgabe": "ca. 10 kg Leberwurst",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Fleisch kochen",
                        "inhalt": "Wamme und Backen (Leber bleibt roh) mit Lorbeerblättern, Wacholderbeeren, Pfefferkörnern, Meersalz und halbierten Zwiebeln (nicht klein geschnitten) ca. 1–2 Stunden kochen."
                    },
                    {
                        "titel": "Zwiebeln rösten",
                        "inhalt": "3–4 große Zwiebeln in dicke Ringe schneiden und in einer großen Pfanne mit Fett dunkel anbraten. Diese kommen zum Fleisch."
                    }
                ]
            },
            {
                "gruppe": "Verarbeitung",
                "schritte": [
                    {
                        "titel": "Fleisch wolfen",
                        "inhalt": "Gekochtes Fleisch (noch warm/heiß) und geröstete Zwiebeln durch die kleinste Wolfscheibe drehen. Gewürzmischung zugeben und gut vermischen."
                    },
                    {
                        "titel": "Leber kuttern",
                        "inhalt": "Leber von Sehnen befreien, klein schneiden und im Kutter kuttern bis sie Blasen schlägt. Gesamtes Salz (20g/kg) zugeben."
                    },
                    {
                        "titel": "Masse fertigstellen",
                        "inhalt": "Lebermasse zum gewolften Fleisch geben, gut durchmischen. Warme Brühe (mit Fettschicht von oben, ca. 1–2 Liter) zugeben bis die Masse weich ist. Alles nochmal im Kutter mit Sahne fein kuttern."
                    },
                    {
                        "titel": "Abfüllen und räuchern",
                        "inhalt": "Masse in Naturdärme Kaliber 40–43 füllen. In Gläser alternativ möglich, aber geräucherte Version ist beliebter. Kalt räuchern nach Abkühlung."
                    }
                ]
            }
        ],
        "tipps": [
            "Brühe immer von oben abschöpfen – die Fettschicht gibt mehr Geschmack",
            "Sahnemenge: ca. 5–6 Päckchen à 200g für 10 kg Gesamtmasse"
        ]
    },
    {
        "id": 115,
        "titel": "Leberwurst (einfaches Grundrezept)",
        "kategorie": "Leberwurst",
        "beschreibung": "Einfaches Grundrezept für Leberwurst mit Schweinebauch und Leber – für Gläser oder Darm",
        "quelle": "Leberwurst.pdf · Version 1.pdf",
        "basisMenge": {
            "gesamt": 1250
        },
        "fleischsorten": [
            {
                "name": "Fetter Schweinebauch (ohne Knochen)",
                "menge": 750,
                "einheit": "g"
            },
            {
                "name": "Leber",
                "menge": 250,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln (geröstet)",
                "menge": 150,
                "einheit": "g"
            },
            {
                "name": "Ei",
                "menge": 1,
                "einheit": "Stück"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 22,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch",
                "menge": 1,
                "einheit": "Zehe"
            },
            {
                "name": "Majoran",
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
                "name": "Lorbeerblatt",
                "menge": 1,
                "einheit": "Stück"
            }
        ],
        "darm": {
            "typ": "Gläser oder Darm",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 1,2 kg Leberwurst",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Bauch kochen",
                        "inhalt": "Schweinebauch in Salzwasser (10g Salz/Liter) mit Lorbeerblatt und halber Zwiebel kochen. Kochwasser aufheben!"
                    },
                    {
                        "titel": "Schwarte entfernen und schneiden",
                        "inhalt": "Gekochten Bauch von der Schwarte befreien und in wolfgerechte Stücke schneiden."
                    },
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Bauch, Leber und Zwiebeln durch den Fleischwolf. Mit Gewürzen und Ei gut vermischen. Etwas Kochwasser zugeben für gewünschte Konsistenz."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Im Glas: max. ¾ füllen, Deckel fest aufschrauben. 2 Stunden bei 100°C einkochen (Gläser müssen vollständig mit Wasser bedeckt sein, mit dem Wasser zusammen aufheizen). Langsam erkalten lassen. Im Darm: Bei 85°C, 1 Minute pro mm Durchmesser brühen."
                    }
                ]
            }
        ],
        "tipps": [
            "Das Ei hilft, dass sich Fett nicht so stark an der Oberfläche absetzt",
            "Gläser nicht in kochendes Wasser stellen – mit dem Wasser zusammen aufheizen",
            "Nach dem Abkühlen am nächsten Tag kalt räuchern möglich"
        ]
    },
    {
        id: 184,
        titel: "Leberwurst nach Pfälzer Art",
        kategorie: "Leberwurst",
        beschreibung: "Kräftige Pfälzer Leberwurst mit Majoran und Piment – im Darm oder Glas",
        quelle: "Leberwurst nach Pfälzer Art, +++.pdf",
        basisMenge: { gesamt: 1850 },
        fleischsorten: [
            { name: "Fetter Rückenspeck", menge: 500, einheit: "g" },
            { name: "Schweinebauch (ohne Schwarte)", menge: 1000, einheit: "g" },
            { name: "Schweineleber", menge: 350, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebeln", menge: 170, einheit: "g" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 22, einheit: "g", proKg: true },
            { name: "Majoran", menge: 5, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Muskat", menge: 4, einheit: "g", proKg: true },
            { name: "Piment", menge: 1.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Rinderkranzdarm oder Einmachgläser (TO)", kaliber: "37/40", menge: "passend" },
        ausgabe: "ca. 1,8 kg Leberwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Kochen", inhalt: "Bauchfleisch ca. 45 Min. leicht köcheln, Speck ca. 20-30 Min. mitköcheln." },
            { titel: "Leber aufschlagen", inhalt: "Rohe Leber durch 3mm Scheibe wolfen, Salz zugeben, mit Schneebesen aufschlagen." },
            { titel: "Wolfen und mischen", inhalt: "Gekochtes Fleisch wolfen, mit Leber und Gewürzen vermengen." },
            { titel: "Abfüllen", inhalt: "Im Darm: je mm Durchmesser 1 Minute bei 80°C brühen. In Gläser: 120 Min. bei 99°C." }
        ]}],
        tipps: []
    },
    {
        id: 185,
        titel: "Feine Leberwurst vom Wild und Hausschwein",
        kategorie: "Leberwurst",
        beschreibung: "Feine Leberwurst aus Wildschweinkopf und Hausschwein mit Sahne und Zwiebeln",
        quelle: "Feine Leberwurst vom Wild und Hausschwein.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Wildschweinkopf/Schweinebacke/Wamme (60% Magerfleisch/40% Fett gemischt)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Sahne", menge: 20, einheit: "ml" },
            { name: "Große Zwiebeln (glasig angeschwitzt in Butterschmalz)", menge: 4, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "NPS", menge: 9, einheit: "g", proKg: true },
            { name: "Kochsalz", menge: 9, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Pfeffer (doppelt griffig schwarz)", menge: 3, einheit: "g", proKg: true },
            { name: "Piment", menge: 0.5, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen (optional)", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Leberwurstdarm oder Gläser", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 1 kg Leberwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Kochen", inhalt: "Fleisch mit Suppengemüse bissfest köcheln. Herausnehmen, etwas abkühlen." },
            { titel: "Wolfen und mischen", inhalt: "Fleisch mit Zwiebeln wolfen, Gewürze und Sahne zugeben, gut vermengen." },
            { titel: "Abfüllen", inhalt: "In Darm oder Gläser füllen und garen." }
        ]}],
        tipps: ["Verhältnis Magerfleisch zu Fett: 60:40"]
    },
    {
        id: 186,
        titel: "Wildschweinleberwurst",
        kategorie: "Leberwurst",
        beschreibung: "Feine Wildschweinleberwurst mit Schulter, Speck und Wildschweintleber",
        quelle: "Wildschweinleberwurst.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 500, einheit: "g" },
            { name: "Grüner Speck (fetter weißer Speck)", menge: 100, einheit: "g" },
            { name: "Bauchspeck", menge: 150, einheit: "g" },
            { name: "Wildschweinleber", menge: 250, einheit: "g" }
        ],
        zutaten: [
            { name: "Fleischbrühe (aufgefangen beim Brühen)", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "NPS", menge: 17, einheit: "g", proKg: true },
            { name: "Pfeffer gemahlen", menge: 1.5, einheit: "g", proKg: true },
            { name: "Wildgewürz", menge: 1, einheit: "g", proKg: true },
            { name: "Macis (Muskatblüte)", menge: 1.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Leberwurstdarm oder Gläser", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 1 kg Wildschweinleberwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Brühen", inhalt: "Schulter und Speck in wolfgerechte Stücke schneiden und 2h bei ~80°C brühen (im Vakuumbeutel um Brühe aufzufangen)." },
            { titel: "Leber mixen", inhalt: "Leber mit Gewürzen im Mixer so lange mixen bis sie Blasen wirft." },
            { titel: "Wolfen und mischen", inhalt: "Fleisch fein wolfen, mit Fleischbrühe mengen. Lebermasse unterrühren." },
            { titel: "Abfüllen", inhalt: "In Darm oder Gläser füllen und garen." }
        ]}],
        tipps: ["Brühen im Vakuumbeutel spart Fleischbrühe auf"]
    },
    {
        id: 246,
        titel: "GuBe Delikatess-Leberwurst",
        kategorie: "Leberwurst",
        beschreibung: "Feine Delikatess-Leberwurst von Günter Bezler aus Schweineleber, Bauch, Wamme und Kalbshals – gebrüht oder geräuchert.",
        quelle: "Rezepte_Sortiert/Leberwurst/GuBe_Delikates-Leberwurst.pdf",
        basisMenge: 10000,
        fleischsorten: [
            { name: "Schweineleber", menge: 3000, einheit: "g" },
            { name: "Schweinebauch", menge: 2000, einheit: "g" },
            { name: "Wamme (Schweinebauchspeck)", menge: 2000, einheit: "g" },
            { name: "Kalbshals", menge: 2000, einheit: "g" }
        ],
        zutaten: [
            { name: "Kesselbrühe", menge: 1000, einheit: "g" },
            { name: "Zwiebeln angedünstet", menge: 2, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "Pökelsalz (NPS)", menge: 21, einheit: "g", proKg: true },
            { name: "Mischgewürz (Herstellerangabe)", menge: 5, einheit: "g", proKg: true },
            { name: "Umrötemittel (Herstellerangabe)", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpaste/-pulver", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm oder Schweinefettenden", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 10 kg Leberwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Kochen", inhalt: "Bauch, Wamme und Kalbfleisch im Kessel ca. 45 Minuten kochen." },
            { titel: "Leber aufschlagen", inhalt: "Leber ganz fein wolfen, gesamte Salzmenge zugeben und mit Schneebesen aufschlagen bis schöne Bindung entsteht." },
            { titel: "Wolfen und mischen", inhalt: "Gekochtes Material und Zwiebeln ganz fein wolfen. Leber und Gewürze zugeben, gut mischen. Kesselbrühe zugeben bis fast flüssige Konsistenz." },
            { titel: "Abfüllen und garen", inhalt: "In Kunstdärme oder Schweinefettenden füllen. Bei 80°C bis 75°C Kerntemperatur ziehen lassen." }
        ]}],
        tipps: ["Im 40er Schweinsdarm, in Ringe abgebunden, gekocht und nachgeräuchert sehr lecker", "Für grobe Landleberwurst: abgekochte, grob gewolfte Leber und Schwarten zugeben"]
    },
    {
        id: 247,
        titel: "Leberwurst (Adolfs Sahne-Leberwurst)",
        kategorie: "Leberwurst",
        beschreibung: "Cremige Sahne-Leberwurst von Adolf – mit gerösteten Zwiebeln und frisch gekutterter Leber.",
        quelle: "Rezepte_Sortiert/Leberwurst/Sahnestreichwurst.pdf",
        basisMenge: 10000,
        fleischsorten: [
            { name: "Kutterwammerl mit Wamme", menge: 5000, einheit: "g" },
            { name: "Backen ohne Schwarte", menge: 2000, einheit: "g" },
            { name: "Schweineleber", menge: 3000, einheit: "g" }
        ],
        zutaten: [
            { name: "Metzgerzwiebeln groß (in dicke Ringe geschnitten, dunkel angebraten)", menge: 4, einheit: "Stk" }
        ],
        gewuerze: [
            { name: "Salz (Kochsalz oder NPS)", menge: 20, einheit: "g", proKg: true },
            { name: "Lorbeerblätter (zum Kochen)", menge: 6, einheit: "Stk" },
            { name: "Wacholderbeeren (zum Kochen)", menge: 20, einheit: "Stk" },
            { name: "Pfefferkörner (zum Kochen)", menge: 20, einheit: "Stk" },
            { name: "Gewürzmischung nach Geschmack", menge: 1, einheit: "nach Geschmack" }
        ],
        darm: { typ: "Gläser oder Därme", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 10 kg Leberwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Fleisch kochen", inhalt: "Wamme, Backen und Gewürze (Lorbeer, Wacholder, Pfeffer) sowie Zwiebeln (nicht klein geschnitten) ca. 1-2 Stunden kochen." },
            { titel: "Zwiebeln rösten", inhalt: "3-4 große Zwiebeln in dicke Ringe hobeln, in Fett dunkel anbraten." },
            { titel: "Wolfen", inhalt: "Alles (inkl. Kochzwiebeln und geröstete Zwiebeln) mit kleinster Wolfscheibe wolfen. Fleisch sollte noch warm/heiß sein. Gewürzmischung einmengen." },
            { titel: "Leber kuttern", inhalt: "Leber von Sehnen befreien, klein schneiden, kuttern bis sie Blasen schlägt. Salz zugeben." },
            { titel: "Vermengen und abfüllen", inhalt: "Lebermasse mit Fleischmasse vermengen. In Gläser oder Därme füllen." }
        ]}],
        tipps: ["Der Geruch beim Brühen ist schon genial – Adolf"]
    },
    {
        id: 248,
        titel: "Leberwurst klassisch",
        kategorie: "Leberwurst",
        beschreibung: "Klassische Leberwurst aus Schulter, Bauch, Leber und Backen – in Kranzdärme gefüllt und kalt geräuchert.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 5000,
        fleischsorten: [
            { name: "Magere Schweineschulter, gekocht", menge: 1500, einheit: "g" },
            { name: "Fetter Schweinebauch, vorgekocht", menge: 1000, einheit: "g" },
            { name: "Schweineleber", menge: 1500, einheit: "g" },
            { name: "Schweinebacken, gekocht", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebeln geschmort", menge: 15, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "Salz", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Majoran", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kranzdärme", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 5 kg Leberwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen", inhalt: "Schulter, Bauch und Backen in Stücke schneiden, durch 3mm Scheibe wolfen. Leber in dünne Scheiben schneiden, kurz abbrühen, mit Zwiebeln durch 2mm Scheibe wolfen." },
            { titel: "Würzen und füllen", inhalt: "Gesamte Masse würzen, gut vermengen, in Kranzdärme füllen." },
            { titel: "Garen", inhalt: "Ca. 60 Minuten in 80°C heißem Wasser garen. Von Fett befreien, 10 Minuten in 30°C Wasser legen, dann in kaltes Wasser tauchen." },
            { titel: "Räuchern", inhalt: "2-3 Stunden an der Luft trocknen, dann 8-10 Stunden bei max. 25°C kalt räuchern." }
        ]}],
        tipps: []
    },
    {
        id: 249,
        titel: "Einfache Leberwurst (Glas)",
        kategorie: "Leberwurst",
        beschreibung: "Einfache Leberwurst in Gläsern – mit Ei für bessere Fettbindung.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.pdf",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Fetter Schweinebauch ohne Knochen", menge: 750, einheit: "g" },
            { name: "Leber", menge: 250, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebeln geröstet", menge: 150, einheit: "g" },
            { name: "Ei", menge: 1, einheit: "Stk" },
            { name: "Kochwasser (zum Abstimmen der Konsistenz)", menge: 1, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Salz", menge: 22, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauchzehe", menge: 1, einheit: "Stk" },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat (Messerspitze)", menge: 0.5, einheit: "g", proKg: true },
            { name: "Lorbeerblatt (beim Kochen)", menge: 1, einheit: "Stk" }
        ],
        darm: { typ: "Einmachgläser (max. 3/4 voll)", kaliber: "-", menge: "passend" },
        ausgabe: "ca. 1 kg Leberwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Schweinebauch kochen", inhalt: "Bauch mit Salz, Lorbeerblatt und halber Zwiebel kochen (10g Salz/Liter). Kochwasser aufheben." },
            { titel: "Wolfen", inhalt: "Bauch von Schwarte befreien, in Stücke schneiden, wolfen. Leber optional kurz vorbrühen, dann wolfen." },
            { titel: "Mengen", inhalt: "Masse mit Ei, Gewürzen und Kochwasser zur gewünschten Konsistenz mengen." },
            { titel: "Einkochen", inhalt: "In saubere Gläser füllen (max. 3/4), Ränder sauber, verschließen. Bei 100°C ab Erreichen der Temperatur 2 Stunden einkochen." }
        ]}],
        tipps: ["Ei bindet Fett und verhindert Fettabsatz", "Glasränder müssen absolut sauber sein"]
    }
,

    {
        id: 315,
        titel: "Wadtländer Leberwurst (Schweizer Handbuch)",
        kategorie: "Leberwurst",
        beschreibung: "Westschweizer Leberwurst mit Schweinsleber, Kuhfleisch und Gemüse – historisches Profi-Rezept",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "16 kg",
        fleischsorten: [
            { name: "Schweinefleisch (fette Abschnitte)", menge: "500g" },
            { name: "Schweinekopffleisch", menge: "200g" },
            { name: "Lunge und Herz", menge: "200g" },
            { name: "Schweineleber", menge: "200g" },
            { name: "Schwarten (gekocht)", menge: "300g" },
            { name: "Kuhfleisch (durchwachsen)", menge: "200g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: "20g/kg" },
            { name: "Salpeter", menge: "0,5g/kg" },
            { name: "Zucker", menge: "2g/kg" },
            { name: "Pfeffer", menge: "1,5g/kg" },
            { name: "Nelken", menge: "0,25g/kg" },
            { name: "Majoran", menge: "1g/kg" },
            { name: "Koriander (gemahlen)", menge: "0,5g/kg" },
            { name: "Knoblauch (verrieben)", menge: "0,5g/kg" }
        ],
        darm: "Kranzdärme 38/40 mm",
        ausgabe: "ca. 16 kg",
        schritte: [
            { titel: "Vorsalzen", inhalt: "Kuhfleisch, Lunge, Herz und Leber 2-3 Tage vorsalzen. Schweinefleisch und Kopffleisch können frisch verarbeitet werden." },
            { titel: "Kochen und wolfen", inhalt: "Kuhfleisch durch 3mm Scheibe. Schweinefleisch, Kopffleisch sowie Lunge und Herz durch 5mm Scheibe. Leber roh durch 3mm." },
            { titel: "Kochen und mischen", inhalt: "Schwarten gut weichkochen. Alles gut vermengen, Gewürze einarbeiten." },
            { titel: "Füllen", inhalt: "In Kranzdärme 38/40 mm füllen, brühen." }
        ],
        tipps: "Kuhfleisch, Lunge und Herz müssen vorgesalzen werden. Leber wird roh verarbeitet – das gibt einen kräftigen Geschmack."
    },
    {
        id: 316,
        titel: "Streichleberwurst I (Schweizer Handbuch)",
        kategorie: "Leberwurst",
        beschreibung: "Feine Schweizer Streichleberwurst mit Kardamom – gedämpfte Zwiebeln geben Aroma",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "13 kg",
        fleischsorten: [
            { name: "Schweinsbrustabschnitte und Griffe", menge: "800g" },
            { name: "Fetties weisses Krös", menge: "200g" },
            { name: "Schweineleber (hell)", menge: "200g" }
        ],
        zutaten: [
            { name: "Zwiebeln (gedämpft)", menge: "100g auf 1 kg Gesamtmasse" }
        ],
        gewuerze: [
            { name: "Salz", menge: "25g/kg" },
            { name: "Pfeffer", menge: "2g/kg" },
            { name: "Majoran", menge: "1,5g/kg" },
            { name: "Maggi", menge: "2g/kg" },
            { name: "Kardamom", menge: "0,25g/kg" }
        ],
        darm: "Kranzdärme",
        ausgabe: "ca. 13 kg",
        schritte: [
            { titel: "Kochen", inhalt: "Brustabschnitte, Griffe, Krös und Leber gut durchbrühen. Zwiebeln mit Majoran und 250g Schweinefett gelb dünsten." },
            { titel: "Wolfen und blitzen", inhalt: "Gesamte Masse durch 3mm Scheibe wolfen, dann fein ausblitzen." },
            { titel: "Würzen und füllen", inhalt: "Salz und Gewürz erst nach dem Blitzen beigeben. In Kranzdärme füllen, brühen." }
        ],
        tipps: "Salz erst nach dem Blitzen beigeben – sonst werden Streichleberwürste zu fest. Zwiebeln mit Schweinefett dünsten für besseres Aroma."
    },
    {
        id: 317,
        titel: "Kalbs-Streichleberwurst (Schweizer Handbuch)",
        kategorie: "Leberwurst",
        beschreibung: "Feine Kalbfleisch-Streichleberwurst mit Thymian und Kardamom – zarte Variante für feine Aufschnittplatten",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "13 kg",
        fleischsorten: [
            { name: "Kalbfleischabschnitte", menge: "300g" },
            { name: "Fette Schweinsbrustabschnitte", menge: "300g" },
            { name: "Schweineleber", menge: "200g" },
            { name: "Schweinsgriff", menge: "150g" },
            { name: "Rückenspeck", menge: "150g" }
        ],
        zutaten: [
            { name: "Zwiebeln (gedämpft)", menge: "20g/kg" }
        ],
        gewuerze: [
            { name: "Nitritsalz", menge: "20g/kg" },
            { name: "Pfeffer (weiß)", menge: "1,5g/kg" },
            { name: "Muscat", menge: "0,25g/kg" },
            { name: "Thymian", menge: "0,25g/kg" },
            { name: "Kardamom", menge: "0,5g/kg" },
            { name: "Maggi", menge: "5g/kg" }
        ],
        darm: "Enge Schweinsafter, Rindskranzdärme 30/32 mm",
        ausgabe: "ca. 13 kg",
        schritte: [
            { titel: "Kochen", inhalt: "Kalbfleisch, Brustabschnitte, Griffett und Rückenspeck bei 90-95°C gar kochen. Leber wird roh verarbeitet." },
            { titel: "Wolfen und füllen", inhalt: "Alles zusammen durch 3mm Scheibe wolfen. In enge Därme füllen, brühen." }
        ],
        tipps: "Leber bleibt roh – das bewahrt die zarte Farbe und den feinen Geschmack. Kalbsleberwurst ist besonders mild."
    }
];
