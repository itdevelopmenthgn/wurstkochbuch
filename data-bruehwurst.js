// Kategorie: Brühwurst
const rezepte_bruehwurst = [
    {
        "id": 3,
        "titel": "Bärlauch Grillwurst ala Kajo (gebrüht)",
        "kategorie": "Brühwurst",
        "beschreibung": "Ausgekutterte Brühwurst mit Bärlauch, Milch und Eiswasser – saftig und aromatisch",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 2100
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter",
                "menge": 900,
                "einheit": "g"
            },
            {
                "name": "Schweinenacken",
                "menge": 450,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 450,
                "einheit": "g"
            },
            {
                "name": "Rindfleisch (optional)",
                "menge": 150,
                "einheit": "g"
            },
            {
                "name": "Fetter Speck",
                "menge": 150,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Bärlauch (frisch)",
                "menge": 100,
                "einheit": "g"
            },
            {
                "name": "Eiskalte Milch",
                "menge": 250,
                "einheit": "ml"
            },
            {
                "name": "Eiswasser",
                "menge": 420,
                "einheit": "ml"
            },
            {
                "name": "Milchpulver",
                "menge": 2.5,
                "einheit": "TL"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 16,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Weißer Pfeffer",
                "menge": 4.8,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Majoran",
                "menge": 1.9,
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
                "name": "Kardamom",
                "menge": 0.5,
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
                "name": "Zitronenabrieb",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "22/24",
            "menge": "passend"
        },
        "ausgabe": "ca. 30-35 Würstchen",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Fleisch kühlen und wolfen",
                        "inhalt": "Alle Fleischsorten gut kühlen, in Würfel schneiden, durch 2–3 mm Scheibe wolfen."
                    }
                ]
            },
            {
                "gruppe": "Kutter",
                "schritte": [
                    {
                        "titel": "Ankuttern",
                        "inhalt": "Gewolftes Fleisch mit Gewürzen und Bärlauch in den Kutter geben und ankuttern."
                    },
                    {
                        "titel": "Milch und Eiswasser zugeben",
                        "inhalt": "Eiskalte Milch und Eiswasser nach und nach zugeben. Bis auf 5°C Brättemperatur auskuttern."
                    }
                ]
            },
            {
                "gruppe": "Abfüllen und Brühen",
                "schritte": [
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Masse in Schweinedarm 22/24 füllen."
                    },
                    {
                        "titel": "Brühen",
                        "inhalt": "Bei 70–75°C in Salzwasser (1 L Wasser + 17 g Salz) 30 Min. ziehen lassen."
                    },
                    {
                        "titel": "Abkühlen",
                        "inhalt": "Abkühlen lassen und vakuumieren."
                    }
                ]
            }
        ],
        "tipps": [
            "Brättemperatur beim Kuttern immer kontrollieren – max. 12°C"
        ]
    },
    {
        "id": 13,
        "titel": "Thüringer Rostbratwurst gebrüht",
        "kategorie": "Brühwurst",
        "beschreibung": "Saftige Thüringer Bratwurst mit Milch, Eiern, Kümmel und Knoblauch – gebrüht",
        "quelle": "Wursten",
        "basisMenge": {
            "gesamt": 3000
        },
        "fleischsorten": [
            {
                "name": "Schweinebauch",
                "menge": 3000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Milch",
                "menge": 300,
                "einheit": "ml"
            },
            {
                "name": "Eier",
                "menge": 3,
                "einheit": "Stück"
            },
            {
                "name": "Knoblauchzehen (frisch)",
                "menge": 6,
                "einheit": "Stück"
            }
        ],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 18,
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
                "name": "Kümmel (gemahlen)",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskatnuss",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "28/30 oder 24/26",
            "menge": "10 m 28/30, 12 m 24/26"
        },
        "ausgabe": "ca. 35-40 Würste",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Schweinebauch wolfen."
                    },
                    {
                        "titel": "Mischen",
                        "inhalt": "Alle Gewürze, Milch, Eier und gepressten Knoblauch zugeben und gut verkneten."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Därme füllen und abdrehen."
                    },
                    {
                        "titel": "Brühen",
                        "inhalt": "Bei 72°C brühen: pro mm Dicke 1 Minute (ca. 25 Minuten für 25 mm Darm)."
                    }
                ]
            }
        ],
        "tipps": [
            "Pro mm Dicke 1 Minute bei 72°C brühen"
        ]
    },
    {
        "id": 14,
        "titel": "Thüringer Grillwurst ala Kajo",
        "kategorie": "Brühwurst",
        "beschreibung": "Ausgekutterte Thüringer Grillwurst mit Kümmel, Macis und Milch",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 2100
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter (75%)",
                "menge": 1575,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch (25%)",
                "menge": 525,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Eiskalte Milch",
                "menge": 120,
                "einheit": "ml"
            },
            {
                "name": "Eiswasser",
                "menge": 200,
                "einheit": "ml"
            },
            {
                "name": "Milchpulver",
                "menge": 1,
                "einheit": "TL"
            }
        ],
        "gewuerze": [
            {
                "name": "Kochsalz",
                "menge": 24,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel (gestoßen)",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskat",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Macis (Muskatblüte)",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel (gemahlen)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "22/24",
            "menge": "passend"
        },
        "ausgabe": "ca. 25-30 Würstchen",
        "schritte": [
            {
                "gruppe": "Wolfen und Kutter",
                "schritte": [
                    {
                        "titel": "Kühlen und wolfen",
                        "inhalt": "Fleisch kühlen, in Würfel schneiden, durch 2–3 mm Scheibe wolfen."
                    },
                    {
                        "titel": "Ankuttern und auskuttern",
                        "inhalt": "Mit Gewürzen ankuttern, dann eiskalte Milch und Eiswasser zugeben. Bis auf 5°C Brättemperatur auskuttern."
                    }
                ]
            },
            {
                "gruppe": "Abfüllen und Brühen",
                "schritte": [
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedarm 22/24 füllen."
                    },
                    {
                        "titel": "Brühen",
                        "inhalt": "Bei 70–75°C in Salzwasser (1 L + 16 g Salz) 30 Minuten ziehen lassen."
                    },
                    {
                        "titel": "Abkühlen",
                        "inhalt": "Abkühlen, sofort grillen oder vakuumieren und einfrieren."
                    }
                ]
            }
        ],
        "tipps": [
            "Kümmel gestoßen und gemahlen verwenden – gibt die typische Struktur"
        ]
    },
    {
        "id": 26,
        "titel": "Fleischwurst (klassisch)",
        "kategorie": "Brühwurst",
        "beschreibung": "Kräftige Fleischwurst mit Bauch, Schinken und Rind – heißgeräuchert oder gebrüht",
        "quelle": "Fleischkäse / Wursten",
        "basisMenge": {
            "gesamt": 6000
        },
        "fleischsorten": [
            {
                "name": "Schweinebauch",
                "menge": 3600,
                "einheit": "g"
            },
            {
                "name": "Schweineschinken",
                "menge": 1800,
                "einheit": "g"
            },
            {
                "name": "Rindfleisch (hohe Rippe)",
                "menge": 600,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Eisschnee / Crash-Eis",
                "menge": 2400,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Weißer Pfeffer",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Bunter Pfeffer",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskatnuss",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ingwer",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Zucker",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kardamom",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kunstdarm",
            "kaliber": "40/43",
            "menge": "passend"
        },
        "ausgabe": "ca. 4-5 Würste",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Wolfen und kuttern",
                        "inhalt": "Fleisch würfeln, wolfen. Dann mit Gewürzen kuttern unter Zugabe von Crash-Eis (oder 1–2 mm Wolfscheibe)."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Kunstdarm 40/43 füllen."
                    },
                    {
                        "titel": "Trocknen und räuchern",
                        "inhalt": "Trocknen, dann 1 Stunde bei 80°C heißräuchern. Alternativ 1 Stunde bei 80°C brühen."
                    }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 27,
        "titel": "Fleischwurst Opa Jochen",
        "kategorie": "Brühwurst",
        "beschreibung": "Traditionelle Fleischwurst mit Schulter, Backe und Rückenspeck – heißgeräuchert",
        "quelle": "Wurst",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter (50%)",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Schweinebacke (30%)",
                "menge": 300,
                "einheit": "g"
            },
            {
                "name": "Rückenspeck (20%)",
                "menge": 200,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Schüttung / Eis (20% extra)",
                "menge": 200,
                "einheit": "g"
            },
            {
                "name": "Zwiebel (frisch)",
                "menge": 1,
                "einheit": "Stück"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kutterhilfsmittel (KHM)",
                "menge": 4,
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
                "name": "Ingwer",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kardamom",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskat",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchgranulat",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Speisewürze (optional)",
                "menge": 5,
                "einheit": "g",
                "proKg": false
            }
        ],
        "darm": {
            "typ": "Rinderkranzdarm",
            "kaliber": "40",
            "menge": "passend"
        },
        "ausgabe": "ca. 2 Würste",
        "schritte": [
            {
                "gruppe": "Vorbereitung (Vortag)",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten",
                        "inhalt": "Fleisch am Vortag klein schneiden, wolfen und bei ca. 0°C über Nacht kühlen."
                    }
                ]
            },
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Kuttern",
                        "inhalt": "Erst Schulter, dann Backe/Bauch mit 50% Eis, zuletzt Fett mit restlichem Eis bis auf 11°C kuttern."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Rinderkranzdarm (40er) füllen, eine Nacht bei Zimmertemperatur hängen lassen."
                    },
                    {
                        "titel": "Räuchern und brühen",
                        "inhalt": "Bei 50°C umröten, 2 Stunden bei 80°C heißräuchern, 45 Min. bei 78°C brühen."
                    },
                    {
                        "titel": "Abschrecken",
                        "inhalt": "In sehr kaltem Wasser abschrecken, dann aufhängen zum Auskühlen."
                    }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 28,
        "titel": "Bierschinken mit Pistazien",
        "kategorie": "Brühwurst",
        "beschreibung": "Feiner Bierschinken mit zartem Brät, Schinkenfleisch-Einlage und Pistazien",
        "quelle": "Wurst",
        "basisMenge": {
            "gesamt": 2000
        },
        "fleischsorten": [
            {
                "name": "Schweinehals (Brät)",
                "menge": 600,
                "einheit": "g"
            },
            {
                "name": "Schweinerückenspeck (Brät)",
                "menge": 200,
                "einheit": "g"
            },
            {
                "name": "Schinkenfleisch grob (Einlage)",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Eis (für Brät)",
                "menge": 200,
                "einheit": "g"
            },
            {
                "name": "Pistazien",
                "menge": 50,
                "einheit": "g"
            },
            {
                "name": "Brätfibrisol",
                "menge": 3,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Brät)",
                "menge": 18,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Weißer Pfeffer",
                "menge": 2,
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
                "name": "Macis (Muskatblüte)",
                "menge": 0.6,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Koriander",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Rohzucker",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kunstdarm oder Schinkenfee",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 2-3 Bierschinken",
        "schritte": [
            {
                "gruppe": "Einlage vorbereiten (4 Tage vorher)",
                "schritte": [
                    {
                        "titel": "Einlage einlegen",
                        "inhalt": "Schinkenfleisch in 2–3 cm große Würfel schneiden, mit NPS und Einlagegewürzen einlegen (ohne Pistazien). 4 Tage kühlen."
                    }
                ]
            },
            {
                "gruppe": "Brät herstellen",
                "schritte": [
                    {
                        "titel": "Hals und Speck wolfen",
                        "inhalt": "Schweinehals klein schneiden und wolfen, Speck ebenso. Beide auf ca. 0°C kühlen."
                    },
                    {
                        "titel": "Kuttern",
                        "inhalt": "Hals mit NPS und Brätfibrisol 2 Min. kuttern, Speck und etwas Eis zugeben bis 6°C, dann Gewürze und restliches Eis bis auf 12°C kuttern."
                    }
                ]
            },
            {
                "gruppe": "Zusammenführen und brühen",
                "schritte": [
                    {
                        "titel": "Vermengen",
                        "inhalt": "Brät, Einlage und Pistazien gründlich vermengen."
                    },
                    {
                        "titel": "Abfüllen und brühen",
                        "inhalt": "In Darm oder Schinkenfee füllen. Bei 70°C brühen bis Kerntemperatur 65°C."
                    }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 43,
        "titel": "Käsegriller",
        "kategorie": "Brühwurst",
        "beschreibung": "Feine Grillwurst mit gewürfeltem Käse, gekuttert für eine glatte Bindung",
        "quelle": "BRat und Grillwurst",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Mageres Schweinefleisch",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Rückenspeck vom Schwein",
                "menge": 400,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Schüttung (Kutterhilfsmittel-Mix)",
                "menge": 155,
                "einheit": "g"
            },
            {
                "name": "Kutterhilfsmittel (Phosphat)",
                "menge": 5,
                "einheit": "g"
            },
            {
                "name": "Gouda oder Emmentaler (gewürfelt)",
                "menge": null,
                "einheit": "nach Bedarf"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 15,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskat",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchpulver",
                "menge": 1,
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
                "name": "Ingwer",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Koriander",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Zitronensaft",
                "menge": null,
                "einheit": "Schuss"
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "28/30",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Griller",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Kuttern",
                        "inhalt": "Fleisch und Speck kalt kuttern, Schüttung und Gewürze zugeben. Käse kurz unterheben."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedärme 28/30 abfüllen, drehen oder abbinden."
                    }
                ]
            }
        ],
        "tipps": [
            "Käse erst ganz am Ende kurz unterheben damit er nicht schmilzt"
        ]
    },
    {
        "id": 45,
        "titel": "Fleischwurst (mit Rindfleisch)",
        "kategorie": "Brühwurst",
        "beschreibung": "Klassische Fleischwurst mit Schweinebauch, Schinken und Rindfleisch – heißgeräuchert oder gebrüht",
        "quelle": "Fleischkäse",
        "basisMenge": {
            "gesamt": 6000
        },
        "fleischsorten": [
            {
                "name": "Schweinebauch",
                "menge": 3600,
                "einheit": "g"
            },
            {
                "name": "Schweineschinken",
                "menge": 1800,
                "einheit": "g"
            },
            {
                "name": "Rindfleisch (hohe Rippe)",
                "menge": 600,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Crash-Eis / Eisschnee",
                "menge": 2400,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Weißer Pfeffer",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Bunter Pfeffer",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskatnuss",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ingwer",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Zucker",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kardamom",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kranzdarm",
            "kaliber": "40/43",
            "menge": "ca. 48 Stück"
        },
        "ausgabe": "ca. 6 kg Fleischwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Würfeln und wolfen",
                        "inhalt": "Fleisch würfeln, wolfen (1–2mm Scheibe). Dann mit Crash-Eis kuttern."
                    },
                    {
                        "titel": "Würzen und kuttern",
                        "inhalt": "Gewürze zugeben, bis zur glatten, homogenen Masse kuttern."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Kranzdärme 40/43 füllen (ca. 48 Stück)."
                    },
                    {
                        "titel": "Räuchern oder brühen",
                        "inhalt": "1 Stunde bei 80°C heißräuchern oder 1 Stunde bei 80°C brühen."
                    }
                ]
            }
        ],
        "tipps": [
            "Eis beim Kuttern langsam zugeben damit die Masse nicht zu warm wird"
        ]
    },
    {
        "id": 46,
        "titel": "Bacon-Käse Thüringer Art",
        "kategorie": "Brühwurst",
        "beschreibung": "Thüringer Bratwurst mit altem Bergkäse und geräuchertem Bauch als Einlage",
        "quelle": "Wursten",
        "basisMenge": {
            "gesamt": 3500
        },
        "fleischsorten": [
            {
                "name": "Schweinenacken",
                "menge": 2000,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 1500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Alter Bergkäse (1×1cm Würfel)",
                "menge": 1000,
                "einheit": "g"
            },
            {
                "name": "Geräucherter Bauch (1×1cm Würfel)",
                "menge": 1000,
                "einheit": "g"
            },
            {
                "name": "Eiskalte Milch 1,5%",
                "menge": 250,
                "einheit": "ml"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer",
                "menge": 4.2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel, frisch gemahlen",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Macis",
                "menge": 1,
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
                "name": "Milchpulver",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Dextrose",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch frisch gepresst",
                "menge": 2,
                "einheit": "Zehen"
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "28/30",
            "menge": "passend"
        },
        "ausgabe": "ca. 3,5 kg Bratwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Fleisch wolfen und kuttern",
                        "inhalt": "Nacken und Bauch mit 3mm wolfen. Gewürze und Milch zugeben, fein kuttern bis max. 11°C."
                    },
                    {
                        "titel": "Einlage unterheben",
                        "inhalt": "Käse und geräucherten Bauch in 1×1cm Würfel schneiden, mit dem Kutterbrät gut mischen."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedärme 28/30 füllen. Anschließend bei 72°C ca. 20 Min. brühen oder frisch vakuumieren und einfrieren."
                    }
                ]
            }
        ],
        "tipps": [
            "Käse und Speck als grobe Einlage – nicht kuttern, nur unterheben"
        ]
    },
    {
        "id": 59,
        "titel": "Lyoner",
        "kategorie": "Brühwurst",
        "beschreibung": "Klassische Lyoner (Fleischwurst im Darm) – fein gekuttert, gebrüht oder im Glas eingekocht",
        "quelle": "Leberwurst",
        "basisMenge": {
            "gesamt": 850
        },
        "fleischsorten": [
            {
                "name": "Schweinefleisch",
                "menge": 250,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 250,
                "einheit": "g"
            },
            {
                "name": "Rindfleisch (mager, entfettet)",
                "menge": 200,
                "einheit": "g"
            },
            {
                "name": "Schweinebacke",
                "menge": 150,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Eis (feinst zerstoßen)",
                "menge": 150,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 19,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Weißer Pfeffer gemahlen",
                "menge": 2.2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kardamom gemahlen",
                "menge": 0.2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskatblüte gemahlen",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Koriander gemahlen",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ingwer getrocknet",
                "menge": 0.2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Zwiebelgranulat",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Sterildarm",
            "kaliber": "50 oder 60",
            "menge": "passend"
        },
        "ausgabe": "ca. 850 g Lyoner (oder Gläser)",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Anfrieren und wolfen",
                        "inhalt": "Fleisch, Bauch und Backen anfrieren. Durch 2mm Scheibe wolfen."
                    },
                    {
                        "titel": "Kuttern",
                        "inhalt": "Mit Gewürzen und zerstoßenem Eis vermengen. In Küchenmaschine 10–15 Min. durchmischen bis glatte homogene Masse entsteht."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Luftblasenfrei in Sterildärme Kaliber 50/60 oder Gläser füllen."
                    },
                    {
                        "titel": "Garen",
                        "inhalt": "Im Darm: 60 Min. bei 75–78°C brühen. Im Glas (200g): 90 Min. bei 100°C einkochen (vollständig mit Wasser bedeckt)."
                    },
                    {
                        "titel": "Abkühlen",
                        "inhalt": "Rasch abkühlen lassen. Glasgläser nicht mit kaltem Wasser abschrecken (Zerspringgefahr)."
                    }
                ]
            }
        ],
        "tipps": [
            "Gläser nur bis 1–2cm unter den Rand füllen",
            "Rasch abkühlen, aber keine kalte Abschreckung bei Gläsern"
        ]
    },
    {
        "id": 71,
        "titel": "Pistazienwurst",
        "kategorie": "Brühwurst",
        "beschreibung": "Feine Brühwurst mit Rindfleisch, Schweinebug und Pistazien",
        "quelle": "Pistazienwurst.pdf",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Rinderbug",
                "menge": 100,
                "einheit": "g"
            },
            {
                "name": "Schweinebug",
                "menge": 350,
                "einheit": "g"
            },
            {
                "name": "Speckabschnitte (ohne Schwarte)",
                "menge": 250,
                "einheit": "g"
            },
            {
                "name": "Schweinebacke (ohne Schwarte)",
                "menge": 100,
                "einheit": "g"
            },
            {
                "name": "Eis",
                "menge": 200,
                "einheit": "ml"
            }
        ],
        "zutaten": [
            {
                "name": "Pistazien",
                "menge": 250,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Nitritpökelsalz)",
                "menge": 23,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kutterhilfsmittel (KHM)",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ascorbinsäure",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskatnuss",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Koriander",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ingwer",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kunstdarm oder Naturdarm",
            "kaliber": "passend",
            "menge": "passend"
        },
        "ausgabe": "ca. 1,2 kg Wurst",
        "schritte": [
            {
                "gruppe": "Brät herstellen",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten",
                        "inhalt": "Fleisch und Speck kontrollieren, in Streifen schneiden und ca. 2 Stunden im Tiefkühler anfrieren."
                    },
                    {
                        "titel": "Wolfen",
                        "inhalt": "Angefrostetes Fleisch durch die 3 mm Scheibe wolfen."
                    },
                    {
                        "titel": "Ankuttern",
                        "inhalt": "Gewolftes Fleisch im Kutter mit Salz trocken anlaufen lassen. Ca. die Hälfte des Eises sowie KHM zugeben, im schnellen Gang kuttern."
                    },
                    {
                        "titel": "Auskuttern",
                        "inhalt": "Gewolften Speck/Fett bei hoher Drehzahl mit Gewürzen und nach und nach restlichem Eis zugeben. Auf ca. 10°C hochkuttern. Im langsamen Gang bis 12°C auskuttern."
                    },
                    {
                        "titel": "Pistazien einmischen",
                        "inhalt": "Pistazien per Hand gleichmäßig in das Brät einmischen."
                    }
                ]
            },
            {
                "gruppe": "Abfüllen und Garen",
                "schritte": [
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Masse umgehend in die Därme füllen."
                    },
                    {
                        "titel": "Brühen",
                        "inhalt": "1 Minute pro mm Darmdurchmesser bei 78°C brühen."
                    },
                    {
                        "titel": "Abkühlen",
                        "inhalt": "Nach der Brühzeit sofort im kalten Wasser abkühlen lassen."
                    }
                ]
            }
        ],
        "tipps": [
            "Pistazien erst ganz am Schluss einmischen, nicht im Kutter verarbeiten"
        ]
    },

    // ── Neue Brühwurst-Rezepte ────────────────────────────────

    {
        id: 102,
        titel: "Gelbwurst ala Holger Belzer",
        kategorie: "Brühwurst",
        beschreibung: "Bayerische Gelbwurst (Weißwurst-Variante) nach Holger Belzer – fein, mild gewürzt.",
        quelle: "Gelbwurst Holger Belzer",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch mager (Schulter)", menge: 500, einheit: "g" },
            { name: "Kalbfleisch oder mageres Schwein", menge: 300, einheit: "g" },
            { name: "Rückenspeck", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Eiswasser", menge: 150, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Pökelsalz", menge: 18, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Majoran", menge: 2, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel, gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 1, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28-30", menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Kuttern", inhalt: "Fleisch und Speck anfrieren, dann fein kuttern. Eiswasser und Gewürze zugeben, bis feine Emulsion entsteht." },
                    { titel: "Füllen", inhalt: "In Schweinedärme füllen, in gewünschte Länge abdrehen." },
                    { titel: "Brühen", inhalt: "Bei 78-80°C ca. 20-25 Minuten brühen." }
                ]
            }
        ],
        tipps: ["Klassische bayerische Aufschnittswurst, kalt serviert"]
    },

    {
        id: 103,
        titel: "Frühstücksfleisch von Werner Wurstler1",
        kategorie: "Brühwurst",
        beschreibung: "Geformtes Frühstücksfleisch aus Schweinehack mit Aspikpulver und Kartoffelstärke – gegart im Bratenschlauch.",
        quelle: "Frühstücksfleisch von Werner Wurstler1 (1).pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinehackfleisch", menge: 600, einheit: "g" },
            { name: "Hackfleisch halb & halb", menge: 200, einheit: "g" },
            { name: "Wasser", menge: 200, einheit: "ml" }
        ],
        zutaten: [
            { name: "Aspikpulver (280 Bloom)", menge: 50, einheit: "g" },
            { name: "Kartoffelstärke", menge: 20, einheit: "g" }
        ],
        gewuerze: [
            { name: "Pökelsalz", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer, schwarz", menge: 3, einheit: "g", proKg: true },
            { name: "Piment", menge: 2, einheit: "g", proKg: true },
            { name: "Koriander", menge: 2, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1.5, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 5, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 8, einheit: "g", proKg: true },
            { name: "Dextrose", menge: 2, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 2, einheit: "g", proKg: true }
        ],
        darm: null,
        ausgabe: "1 Form",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Kneten", inhalt: "Hackfleisch mit allen Zutaten in der Küchenmaschine 5 Min. kneten." },
                    { titel: "Formen & Garen", inhalt: "In Form füllen, glatt streichen. In Bratenschlauch mit einer halben Tasse Wasser geben, abbinden. Mit Einstichthermometer kontrollieren. Bei 100°C garen bis 69-70°C Kerntemperatur (ca. 100 Min. bei 1kg)." },
                    { titel: "Fixieren", inhalt: "Das Brät mit Rouladennadeln fixieren damit die feste Masse nicht auf dem Formenboden aufliegt und sich Aspik darunter ansammeln kann." }
                ]
            }
        ],
        tipps: ["Anschneiden am Tag danach für optimales Schnittbild"]
    },

    {
        id: 104,
        titel: "Bauernwurst im Geleemantel (GuBe)",
        kategorie: "Brühwurst",
        beschreibung: "Feine Bauernwurst im Aspikmantel von Günter Bezler – mit Schüttung, Eiswasser und Aspikpulver.",
        quelle: "GuBe_Bauernwurst-im-Gelee.pdf",
        basisMenge: { gesamt: 16000 },
        fleischsorten: [
            { name: "Schweine-Bug/Schlegelzuschnitte mager (S II)", menge: 6000, einheit: "g" },
            { name: "Schweinebauch ohne Schwarte", menge: 6000, einheit: "g" },
            { name: "Bauch-/Rückenschwarten", menge: 1000, einheit: "g" },
            { name: "Eiswasser", menge: 3000, einheit: "ml" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 22, einheit: "g", proKg: true },
            { name: "Aspikpulver", menge: 20, einheit: "g", proKg: true },
            { name: "Mischgewürz (nach Herstellerangabe)", menge: 5, einheit: "g", proKg: true },
            { name: "KHM (Kutterhilfsmittel, nach Herstellerangabe)", menge: 3, einheit: "g", proKg: true },
            { name: "Umrötemittel (nach Herstellerangabe)", menge: 2, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpaste/-pulver", menge: 2, einheit: "g", proKg: true },
            { name: "Maggi + Worcestersoße", menge: null, einheit: "n. B." }
        ],
        darm: { typ: "Topdarm", kaliber: "60/60", menge: null },
        ausgabe: "ca. 16 kg",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorbereiten", inhalt: "Gut gekühltes Fleisch, Bauch und Schwarten in wolfgerechte Stücke schneiden, mit Gewürzen vermengen. Durch Erbsenscheibe wolfen." },
                    { titel: "Kuttern", inhalt: "Masse im Kutter mit Eiswasser im langsamen Gang ein paar Runden laufen lassen." },
                    { titel: "Mengen", inhalt: "In Brätmulde nochmals gut bindig durchmengen." },
                    { titel: "Füllen & Brühen", inhalt: "In Topdärme Kal. 60/60 füllen. Bei 80°C im Kessel ca. 75 Min. auf 75°C Kerntemperatur brühen." },
                    { titel: "Abkühlen", inhalt: "Im kalten Wasserbad abkühlen, im Kühlraum über Nacht durchkühlen." }
                ]
            }
        ],
        tipps: [
            "Für Whiskeyliebhaber: Teil des Eiswassers durch Whiskey ersetzen",
            "Ohne Kutter: alle Zutaten in Brätmulde mengen, durch 5mm Scheibe wolfen, nochmals bindig kneten"
        ]
    },

    {
        id: 105,
        titel: "Lyoner Grundbrät (GuBe)",
        kategorie: "Brühwurst",
        beschreibung: "Professionelles Lyoner-Brät nach Günter Bezler – mit Kutter hergestellt und in Topdärme gefüllt.",
        quelle: "GuBe_Lyoner-Grundbrat.pdf",
        basisMenge: { gesamt: 14000 },
        fleischsorten: [
            { name: "S II (Bug/Schlegelzuschnitte, mager)", menge: 6000, einheit: "g" },
            { name: "Schweinebacken", menge: 3000, einheit: "g" },
            { name: "Schweinesspeck (Bug/Schlegelspeck)", menge: 2000, einheit: "g" },
            { name: "Schüttung (Eiswasser)", menge: 3000, einheit: "ml" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 21, einheit: "g", proKg: true },
            { name: "Mischgewürz (nach Herstellerangabe)", menge: 5, einheit: "g", proKg: true },
            { name: "KHM (Kutterhilfsmittel)", menge: 3, einheit: "g", proKg: true },
            { name: "Umrötemittel", menge: 2, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpaste/-pulver", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Topdarm", kaliber: "60/60", menge: null },
        ausgabe: "ca. 14 kg",
        schritte: [
            {
                gruppe: "Kuttern",
                schritte: [
                    { titel: "Magerfleisch", inhalt: "Gut gekühltes Magerfleisch und Backen/Speck getrennt durch feine Scheibe wolfen. Magerfleisch im Kutter mit Gewürzen im langsamen Gang ein paar Runden laufen lassen." },
                    { titel: "Erste Schüttung", inhalt: "1/3 Schüttung dazugeben, im Schnellgang bis 5°C kuttern." },
                    { titel: "Fettteile", inhalt: "Fettteile dazugeben, paar Runden im langsamen Gang einarbeiten. Weiteres 1/3 Schüttung, im Schnellgang bis 10°C." },
                    { titel: "Fertig", inhalt: "Restliche Schüttung langsam zugeben, bis auf 12°C bindig auskuttern. Paar Runden im langsamen Gang entlüften." },
                    { titel: "Brühen", inhalt: "In Topdärme Kal. 60/60 füllen. Bei 80°C ca. 75 Min. auf 75°C Kerntemperatur brühen. Im kalten Wasserbad abkühlen." }
                ]
            }
        ],
        tipps: ["Zum Lyonerbrät können auch Ei, Brokkoli, Pilze, Paprika usw. eingearbeitet werden"]
    },
    {
        "id": 125,
        "titel": "Frühstücksfleisch ala Evi",
        "kategorie": "Brühwurst",
        "beschreibung": "Gewürztes Frühstücksfleisch aus Schulter und Bauch mit Zwiebeln, in Gläser eingekocht",
        "quelle": "Frühstücksfleis-WPS Office.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Schweineschulter", "menge": 500, "einheit": "g" },
            { "name": "Schweinebauch (ohne Schwarte)", "menge": 500, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Zwiebel (gewürfelt, angedünstet)", "menge": 150, "einheit": "g", "proKg": true }
        ],
        "gewuerze": [
            { "name": "Pökelsalz", "menge": 20, "einheit": "g", "proKg": true },
            { "name": "Pfeffer", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Piment", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Kardamon", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Muskat oder Macis", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Kümmel gemahlen", "menge": 1.5, "einheit": "g", "proKg": true },
            { "name": "Senfsaat gemahlen", "menge": 1, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Gläser", "kaliber": null, "menge": "passend" },
        "ausgabe": "ca. 1 kg Frühstücksfleisch im Glas",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Zwiebeln andünsten", "inhalt": "Zwiebelwürfel in etwas Schweineschmalz andünsten, erkalten lassen." },
                    { "titel": "Mischen", "inhalt": "Erkaltete Zwiebeln mit den Gewürzen zum gewürfelten Fleisch geben." },
                    { "titel": "Wolfen und abfüllen", "inhalt": "Masse durch den Wolf lassen, gut vermengen. In Gläser abfüllen." },
                    { "titel": "Einkochen", "inhalt": "Bei 100°C ca. 2 Stunden einkochen." }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 126,
        "titel": "Geräucherte Schlachtwurst Krakauer Art ala Birgit Edelmann",
        "kategorie": "Brühwurst",
        "beschreibung": "Krakauer Schlachtwurst mit Kalb, Schweineschulter und Speck – getrocknet, geräuchert und gebrüht",
        "quelle": "Geräucherte Schlachtwurst Krakauer Art von Birgit Edelmann.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Kalbfleisch (oder Rindfleisch)", "menge": 300, "einheit": "g" },
            { "name": "Schweineschulter", "menge": 500, "einheit": "g" },
            { "name": "Rückenspeck", "menge": 200, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Gefrorene Milch (Schüttung)", "menge": 100, "einheit": "ml" },
            { "name": "Zwiebel frisch", "menge": 200, "einheit": "g", "proKg": true },
            { "name": "Knoblauchzehen frisch", "menge": 6, "einheit": "Stück", "proKg": true },
            { "name": "Frische Petersilie", "menge": 0, "einheit": "nach Geschmack" },
            { "name": "Zitronensaft", "menge": 10, "einheit": "ml", "proKg": true }
        ],
        "gewuerze": [
            { "name": "Salz", "menge": 20, "einheit": "g", "proKg": true },
            { "name": "Kümmel gemahlen", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Koriander", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Senfmehl", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Weißer Pfeffer", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Piment gemahlen", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Traubenzucker", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Paprika edelsüß", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Ingwer frisch", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Grüner Pfeffer (gehackt)", "menge": 1, "einheit": "EL", "proKg": true }
        ],
        "darm": { "typ": "Schweinedarm", "kaliber": "30/32", "menge": "passend" },
        "ausgabe": "ca. 1 kg Krakauer Schlachtwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    { "titel": "Wolfen", "inhalt": "Gewürztes Fleisch kalt durch die 5mm Scheibe wolfen." },
                    { "titel": "Kneten und füllen", "inhalt": "Brät bei max. 12°C bindig kneten. In 30/32 Darm füllen." },
                    { "titel": "Abhängen und trocknen", "inhalt": "1 Stunde abhängen, dann ohne Rauch bei 60°C trocknen lassen." },
                    { "titel": "Räuchern und brühen", "inhalt": "2–3 Stunden goldig räuchern, dann bei 75–78°C für 40 Minuten brühen." }
                ]
            }
        ],
        "tipps": ["KHM (Kutterhilfsmittel) nach Herstellerangabe kann zugegeben werden", "Passt bestens zu Sauerkraut und Bratkartoffeln"]
    },
    {
        "id": 127,
        "titel": "Heidefrühstück",
        "kategorie": "Brühwurst",
        "beschreibung": "Würziges Heidefrühstück aus Schulter und Bauch mit Gelatine – eingekocht in Dosen oder Gläsern",
        "quelle": "Heidefrühstück.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Schweineschulter", "menge": 600, "einheit": "g" },
            { "name": "Bauchfleisch (ohne Schwarte)", "menge": 400, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Wasser", "menge": 125, "einheit": "ml" },
            { "name": "Gelatine (240 Bloom)", "menge": 60, "einheit": "g" }
        ],
        "gewuerze": [
            { "name": "NPS (Nitritpökelsalz)", "menge": 20, "einheit": "g", "proKg": true },
            { "name": "Pfeffer weiß", "menge": 4, "einheit": "g", "proKg": true },
            { "name": "Macis", "menge": 0.5, "einheit": "g", "proKg": true },
            { "name": "Muskatnuss", "menge": 0.5, "einheit": "g", "proKg": true },
            { "name": "Zwiebelpulver", "menge": 1.5, "einheit": "g", "proKg": true },
            { "name": "Selleriesalz", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Maggi", "menge": 0, "einheit": "nach Geschmack" }
        ],
        "darm": { "typ": "Dosen oder Gläser", "kaliber": null, "menge": "passend" },
        "ausgabe": "ca. 1 kg Heidefrühstück",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Würfeln und würzen", "inhalt": "Fleisch würfeln. Mit Salz und Gewürzen gut vermengen. Durch die 3mm Scheibe wolfen." },
                    { "titel": "Wasser und Gelatine", "inhalt": "Wasser zugeben, alles sehr gut vermengen." },
                    { "titel": "Abfüllen und einkochen", "inhalt": "Masse in Dosen oder Gläser abfüllen. Bei 100°C 2 Stunden einkochen." }
                ]
            }
        ],
        "tipps": ["Kochzeit beginnt erst wenn 100°C erreicht sind"]
    },
    {
        "id": 128,
        "titel": "Jagdwurst ala Andreas Gries",
        "kategorie": "Brühwurst",
        "beschreibung": "Rustikale Jagdwurst mit Schweinefleisch, Rind, Backe und Speck – pikant mit Senfkörnern",
        "quelle": "Jagdwurst von.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Schweinefleisch", "menge": 500, "einheit": "g" },
            { "name": "Rindfleisch", "menge": 100, "einheit": "g" },
            { "name": "Schweinebacke", "menge": 200, "einheit": "g" },
            { "name": "Speck/Fett", "menge": 200, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Eis (Schüttung)", "menge": 120, "einheit": "g" }
        ],
        "gewuerze": [
            { "name": "Pökelsalz", "menge": 19, "einheit": "g", "proKg": true },
            { "name": "Pfeffer", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Paprika", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Knoblauchpulver", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Kümmel", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Senfkörner", "menge": 8, "einheit": "g", "proKg": true },
            { "name": "Ingwer", "menge": 0.3, "einheit": "g", "proKg": true },
            { "name": "Kutterhilfsmittel", "menge": 6, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Kunstdarm", "kaliber": "beliebig", "menge": "passend" },
        "ausgabe": "ca. 1 kg Jagdwurst",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Kuttern", "inhalt": "Fleisch kuttern, Gewürze und Eis schrittweise zugeben bis bindig." },
                    { "titel": "Füllen und brühen", "inhalt": "In Kunstdarm füllen. Brühen bis Kerntemperatur 72°C." }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 129,
        "titel": "Geräucherte Knackwurst",
        "kategorie": "Brühwurst",
        "beschreibung": "Kaltgeräucherte Knackwurst aus Schulter und Bauch – mindestens 3 Räuchergänge für echten Knack",
        "quelle": "Knackwurst-1.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Schweineschulter", "menge": 600, "einheit": "g" },
            { "name": "Schweinebauch", "menge": 400, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Knoblauchzehe (gerieben)", "menge": 1, "einheit": "Stück" },
            { "name": "Prise Zucker", "menge": 0, "einheit": "Prise" }
        ],
        "gewuerze": [
            { "name": "Pökelsalz", "menge": 23, "einheit": "g", "proKg": true },
            { "name": "Koriandersamen", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Piment", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Macis", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Kümmel", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Pfeffer", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Senfkörner", "menge": 2, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Schweinedarm", "kaliber": "28/30", "menge": "passend" },
        "ausgabe": "ca. 1 kg Knackwurst",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    { "titel": "Vorbereiten", "inhalt": "Fleisch von Sehnen, Knorpel und Schwarte befreien, in Stücke schneiden. Gewürze mischen und gut vermengen. 2 Stunden anfrieren." },
                    { "titel": "Wolfen", "inhalt": "Durch 4mm Scheibe wolfen. Brät gut durchkneten bis Bindung entsteht. Luftblasenfrei in Darm füllen. Zu Ringen formen und enden mit Metzgergarn verknoten." }
                ]
            },
            {
                "gruppe": "Reifen und Räuchern",
                "schritte": [
                    { "titel": "Trocknen", "inhalt": "Würste ca. 3 Tage im Keller trocknen lassen." },
                    { "titel": "Räuchern", "inhalt": "Mindestens 3 Räuchergänge à 8 Stunden bei 20°C kalt räuchern." }
                ]
            }
        ],
        "tipps": ["Luftblasen im Darm mit einem spitzen Gegenstand einstechen und herausdrücken"]
    },
    {
        id: 161,
        titel: "Gelbwurst ala Holger Belzer",
        kategorie: "Brühwurst",
        beschreibung: "Feine Gelbwurst aus Kalb, Schwein und Rückenspeck – fein gekuttert",
        quelle: "Gelbwurst ala Holger Belzer.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Kalbfleisch (alternativ: Schweinefleisch)", menge: 250, einheit: "g" },
            { name: "Schweinefleisch", menge: 250, einheit: "g" },
            { name: "Rückenspeck", menge: 250, einheit: "g" },
            { name: "Eis", menge: 250, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebel (klein)", menge: 1, einheit: "Stück/kg" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 18, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.5, einheit: "g", proKg: true },
            { name: "Macis", menge: 2, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.5, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Zitronenabrieb", menge: 3, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel oder Backpulver mit Phosphat", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Brühwurstdarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 1 kg Gelbwurst",
        schritte: [{ gruppe: "Kuttern", schritte: [
            { titel: "Magerfleisch kuttern", inhalt: "Magerfleisch sehr kalt mit Salz und Phosphat einige Runden trocken kuttern, dann Hälfte Eis dazu bis 4°C kuttern." },
            { titel: "Speck zugeben", inhalt: "Bei 4°C Speck (sehr kalt) und Gewürze dazu, restliches Eis zugeben. Bis max. 12–14°C fertig kuttern." }
        ]}],
        tipps: ["Falls kein Kalbfleisch vorhanden, einfach Schweinefleisch verwenden"]
    },
    {
        id: 162,
        titel: "Pistazienwurst",
        kategorie: "Brühwurst",
        beschreibung: "Feine Brühwurst mit Pistazien – gekuttert aus Rind, Schwein und Speck",
        quelle: "Pistazienwurst.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Rinderbug", menge: 100, einheit: "g" },
            { name: "Schweinebug", menge: 350, einheit: "g" },
            { name: "Speckabschnitte (ohne Schwarte)", menge: 250, einheit: "g" },
            { name: "Schweinebacke (ohne Schwarte)", menge: 100, einheit: "g" },
            { name: "Eis", menge: 200, einheit: "ml" }
        ],
        zutaten: [
            { name: "Pistazien", menge: 250, einheit: "g" }
        ],
        gewuerze: [
            { name: "NPS", menge: 23, einheit: "g", proKg: true },
            { name: "KHM (Kutterhilfsmittel)", menge: 5, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1.5, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 1, einheit: "g", proKg: true },
            { name: "Koriander", menge: 1.5, einheit: "g", proKg: true },
            { name: "Paprika", menge: 1, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 1.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Brühwurstdarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 1 kg Pistazienwurst",
        schritte: [{ gruppe: "Kuttern", schritte: [
            { titel: "Fleisch vorbereiten", inhalt: "Fleisch kontrollieren, Sehnen entfernen. In Streifen schneiden und 2h im Tiefkühler anfrieren." },
            { titel: "Wolfen und kuttern", inhalt: "Durch 3mm Scheibe wolfen. Im Kutter mit Salz trocken kuttern. Hälfte Eis + KHM zugeben, schnell kuttern. Speck/Fett mit restlichem Eis bis 12°C kuttern. Pistazien zugeben." }
        ]}],
        tipps: []
    },
    {
        id: 163,
        titel: "Bauernwurst im Geleemantel (GuBe)",
        kategorie: "Brühwurst",
        beschreibung: "Grobe Bauernwurst mit Aspikpulver und Gewürzen – Rezeptur von Günter Bezler",
        quelle: "GuBe_Bauernwurst-im-Gelee.pdf",
        basisMenge: { gesamt: 16000 },
        fleischsorten: [
            { name: "Schweinefleisch S II (Bug/Schlegelzuschnitte, mager)", menge: 6000, einheit: "g" },
            { name: "Schweinebauch (ohne Schwarte)", menge: 6000, einheit: "g" },
            { name: "Bauch-/Rückenschwarten", menge: 1000, einheit: "g" },
            { name: "Eiswasser", menge: 3000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 22, einheit: "g", proKg: true },
            { name: "Aspikpulver", menge: 20, einheit: "g", proKg: true },
            { name: "Mischgewürz (nach Herstellerangabe)", menge: 5, einheit: "g", proKg: true },
            { name: "KHM (nach Herstellerangabe)", menge: 3, einheit: "g", proKg: true },
            { name: "Umrötemittel (nach Herstellerangabe)", menge: 2, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpaste/-pulver", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Brühwurstdarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 16 kg Bauernwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen und kuttern", inhalt: "Gut gekühltes Fleisch, Bauch und Schwarten in wolfgerechte Stücke schneiden und verarbeiten. Mit Gewürzen und Eiswasser vermengen." }
        ]}],
        tipps: ["Etwas Maggi und Worcestersoße nach Geschmack zugeben"]
    },
    {
        id: 164,
        titel: "Lyoner Grundbrät (GuBe)",
        kategorie: "Brühwurst",
        beschreibung: "Lyoner-Grundbrät nach Günter Bezler – feines Kutterbrät aus Schwein und Backen",
        quelle: "GuBe_Lyoner-Grundbrat.pdf",
        basisMenge: { gesamt: 14000 },
        fleischsorten: [
            { name: "Schweinefleisch S II (Bug/Schlegelzuschnitte, mager)", menge: 6000, einheit: "g" },
            { name: "Schweinebacken", menge: 3000, einheit: "g" },
            { name: "Schweinespeck (Bug/Schlegelspeck)", menge: 2000, einheit: "g" },
            { name: "Schüttung (Eis/Wasser)", menge: 3000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 21, einheit: "g", proKg: true },
            { name: "Mischgewürz (nach Herstellerangabe)", menge: 5, einheit: "g", proKg: true },
            { name: "KHM (nach Herstellerangabe)", menge: 3, einheit: "g", proKg: true },
            { name: "Umrötemittel (nach Herstellerangabe)", menge: 2, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpaste/-pulver", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Lyoner-Darm (Kunstdarm)", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 14 kg Lyoner",
        schritte: [{ gruppe: "Kuttern", schritte: [
            { titel: "Wolfen", inhalt: "Magerfleisch und Backen/Speck getrennt durch feine Scheibe wolfen." },
            { titel: "Kuttern", inhalt: "Magerfleisch mit Gewürzen im langsamen Gang kuttern. Schrittweise Schüttung und Speck zugeben bis gewünschte Feinheit erreicht." }
        ]}],
        tipps: []
    },
    {
        id: 165,
        titel: "Fleischwurst",
        kategorie: "Brühwurst",
        beschreibung: "Grobe Fleischwurst aus Schwein und Rind – heißgeräuchert oder gebrüht",
        quelle: "Fleischwurst.docx",
        basisMenge: { gesamt: 6000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 3600, einheit: "g" },
            { name: "Schweineschinken", menge: 1800, einheit: "g" },
            { name: "Rindfleisch (hohe Rippe)", menge: 600, einheit: "g" },
            { name: "Eisschnee/Crash-Eis", menge: 2400, einheit: "g" }
        ],
        zutaten: [],
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
        darm: { typ: "Rinderkranzdarm", kaliber: "40/43", menge: "48cm" },
        ausgabe: "ca. 6 kg Fleischwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und kuttern", inhalt: "Würfeln, wolfen, würzen. Mit Küchenmaschine kuttern unter Zugabe des Crash-Eises." },
            { titel: "Füllen und räuchern/brühen", inhalt: "In 40/43er Rinderkranzdarm füllen. Trocknen, dann 1 Stunde bei 80°C heißräuchern. Alternativ: 1 Stunde bei 80°C brühen." }
        ]}],
        tipps: []
    },
    {
        id: 166,
        titel: "Opa Jochens Fleischwurst",
        kategorie: "Brühwurst",
        beschreibung: "Deftige Fleischwurst von Opa Jochen – geräuchert und gebrüht im 40er Rinderkranzdarm",
        quelle: "Opa Jochen `s Fleischwurst.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 500, einheit: "g" },
            { name: "Schweinebacke", menge: 300, einheit: "g" },
            { name: "Rückenspeck", menge: 200, einheit: "g" },
            { name: "Eis (Schüttung)", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Frische Zwiebel", menge: 1, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "NPS", menge: 20, einheit: "g", proKg: true },
            { name: "KHM (nach Herstellerangabe)", menge: 4, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 2, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 2, einheit: "g", proKg: true },
            { name: "Muskat", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 2, einheit: "g", proKg: true },
            { name: "Speisewürze (nach Geschmack)", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Rinderkranzdarm", kaliber: "40", menge: "passend" },
        ausgabe: "ca. 1 kg Fleischwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Vorbereitung", inhalt: "Am Vortag Fleisch klein schneiden, wolfen, bei 0°C über Nacht kühlen." },
            { titel: "Kuttern", inhalt: "Schulter/Backe dann mit 50% Eis wolfen. Fett mit restlichem Eis bis 11°C kuttern. Homogene Masse in Rinderkranzdarm füllen." },
            { titel: "Umröten und räuchern", inhalt: "Nacht bei Zimmertemperatur hängen. Bei 50°C im Räucherofen umröten. Dann 2 Stunden bei 65°C heißräuchern." },
            { titel: "Brühen", inhalt: "45 Minuten bei 78°C brühen. In kaltem Wasser abschrecken, aushängen und auskühlen." }
        ]}],
        tipps: []
    },

    {
        id: 188,
        titel: "Lyoner mit Oliven (ala Michael Grabowsky)",
        kategorie: "Brühwurst",
        beschreibung: "Feines Lyoner-Brät mit Oliven, Rosmarin und Thymian – in der Küchenmaschine gekuttert.",
        quelle: "Wursten/Lyoner.doc",
        basisMenge: { gesamt: 1260 },
        fleischsorten: [
            { name: "Schweineschulter schier", menge: 600, einheit: "g" },
            { name: "Schweinebauch", menge: 200, einheit: "g" },
            { name: "Schweinebacke", menge: 200, einheit: "g" },
            { name: "Eis (Schüttung)", menge: 260, einheit: "g" }
        ],
        zutaten: [
            { name: "Oliven (eine Handvoll, kleingeschnitten)", menge: null, einheit: "nach Geschmack" },
            { name: "Rosmarin (gemörsert)", menge: null, einheit: "nach Geschmack" },
            { name: "Olivenkraut (gemörsert)", menge: null, einheit: "nach Geschmack" },
            { name: "Thymian (gemörsert)", menge: null, einheit: "nach Geschmack" }
        ],
        gewuerze: [
            { name: "NPS", menge: 20, einheit: "g", proKg: true },
            { name: "Brätfirisol", menge: 4, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Ingwerpulver", menge: 0.5, einheit: "g", proKg: true },
            { name: "Macisblüte", menge: 0.8, einheit: "g", proKg: true },
            { name: "Koriander gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 0.5, einheit: "g", proKg: true },
            { name: "Rohrzucker", menge: 0.6, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm", kaliber: "passend", menge: null },
        ausgabe: "ca. 1,2 kg Lyoner",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen", inhalt: "Schulter 2× durch feine Scheibe wolfen. Bauch und Backe separat 1× wolfen." },
            { titel: "Kuttern", inhalt: "Schulter mit NPS in Küchenmaschine kuttern bis Bindung entsteht. Hälfte des Eises dazugeben, fein kuttern. Dann Bauch, Backe, restliches Eis und Gewürze zugeben, weitere Runden kuttern." },
            { titel: "Einlage mischen", inhalt: "Oliven kleinschneiden, Rosmarin/Olivenkraut/Thymian mörsern und vorsichtig unter das Brät mengen." },
            { titel: "Füllen und brühen", inhalt: "Mit dem Fleischwolf in Kunstdärme füllen. 1 Stunde bei 80°C brühen. Danach ins kalte Wasser." }
        ]}],
        tipps: ["Rezept von Michael Grabowsky"]
    },

    {
        id: 189,
        titel: "Steirische Breinwurst",
        kategorie: "Brühwurst",
        beschreibung: "Regionales Schmankerl aus der Steiermark – Kopffleisch, Buchweizen und Schwarten in Schweinedarm.",
        quelle: "Wursten/Steirische Brein Wurst.doc",
        basisMenge: { gesamt: 3000 },
        fleischsorten: [
            { name: "Kopffleisch, Haxen und magere Fleischabschnitte", menge: 2000, einheit: "g" },
            { name: "Schwarten", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Heidenbrein (Buchweizen, geschrotet)", menge: 500, einheit: "g" },
            { name: "Kochbrühe", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 22, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Thymian", menge: 1, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer geschrotet", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: null, einheit: "nach Geschmack" }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/32", menge: "passend" },
        ausgabe: "ca. 3 kg Breinwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Fleisch kochen", inhalt: "Kopffleisch, Schwarten und magere Abschnitte kernig weichkochen. Durch die mittlere Scheibe des Fleischwolfs faschieren." },
            { titel: "Brein kochen und mischen", inhalt: "Buchweizen (Heidenbrein) weichkochen. Mit der faschierten Fleischmasse und etwas Brühe vermischen. Kräftig mit Majoran, Pfeffer, Knoblauch und Salz würzen." },
            { titel: "Füllen und brühen", inhalt: "In Schweinedärme Kaliber 28-32 füllen, paarweise abbinden. Bei 75°C je nach Größe 40-60 Minuten überbrühen. Über Nacht auskühlen lassen." },
            { titel: "Servieren", inhalt: "In Bratpfanne mit Schweineschmalz im Rohr knusprig braten. Dazu Sauerkraut und Bratkartoffeln." }
        ]}],
        tipps: ["Hans Beren – Kulinarisches aus Brotbackofen, Räucherschrank & Kochtopf"]
    },

    {
        id: 192,
        titel: "Bacon-Käse-Thüringer Art",
        kategorie: "Brühwurst",
        beschreibung: "Würzige Brühwurst mit Bergkäse und geräuchertem Bauch als Einlage – im Schweinedarm 28/30.",
        quelle: "Sonstiges/Bacon Käse Thüringer Art.docx",
        basisMenge: { gesamt: 5500 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 2000, einheit: "g" },
            { name: "Schweinebauch", menge: 1500, einheit: "g" }
        ],
        zutaten: [
            { name: "Alter Bergkäse (Einlage)", menge: 1000, einheit: "g" },
            { name: "Geräucherter Bauch (Einlage, in 1×1cm Würfel)", menge: 1000, einheit: "g" },
            { name: "Eiskalte Milch 1,5%", menge: null, einheit: "200-300 ml" }
        ],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz", menge: 4.2, einheit: "g", proKg: true },
            { name: "Kümmel frisch gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Milchpulver", menge: 5, einheit: "g", proKg: true },
            { name: "Dextrose", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauch frisch gepresst", menge: 2, einheit: "Zehen" }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 5 kg Wurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen", inhalt: "Nacken und Bauch in wolfgerechte Stücke schneiden, mit 3mm Scheibe wolfen." },
            { titel: "Kuttern", inhalt: "Fleisch mit Gewürzen und Milch fein kuttern." },
            { titel: "Einlage", inhalt: "Käse und geräucherten Bauch in 1×1cm Stücke schneiden. Gut mit dem Kutterbrät mischen." },
            { titel: "Füllen und brühen", inhalt: "In 28/30er Därme füllen. Bei 72°C ca. 20 Minuten brühen. Alternativ frisch vakuumieren und einfrieren." }
        ]}],
        tipps: []
    },

    {
        id: 193,
        titel: "Käsegriller",
        kategorie: "Brühwurst",
        beschreibung: "Saftige Grillwurst mit Käse-Einlage – aus Schweinefleisch und Rückenspeck, in 28/30er Schweinedarm.",
        quelle: "Sonstiges/Käsegriller.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 500, einheit: "g" },
            { name: "Schweinerückenspeck", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Schüttung (Eis/Wasser)", menge: 155, einheit: "g" },
            { name: "Gouda oder Emmentaler (kleingewürfelt, kurz unterheben)", menge: null, einheit: "nach Wunsch" },
            { name: "Zitronensaft", menge: null, einheit: "Schuss" }
        ],
        gewuerze: [
            { name: "Salz", menge: 15, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1.5, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 1, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 1.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel (Phosphat-haltiges Backpulver)", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 1 kg",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Kuttern", inhalt: "Brät kuttern. Käse kleinwürfeln und kurz unterheben." },
            { titel: "Füllen", inhalt: "In Schweinedarm 28/30 füllen. Zum Grillen oder als Bratwurst verwenden." }
        ]}],
        tipps: []
    },

    {
        id: 198,
        titel: "Aufschnittgrundbrät (Profi-Rezept)",
        kategorie: "Brühwurst",
        beschreibung: "Professionelles Brühwurst-Grundbrät für Lyoner, Bierschinken, Kaiserjagdwurst – für 100 kg Ansatz.",
        quelle: "Sonstiges/Brühwurst.docx",
        basisMenge: { gesamt: 100000 },
        fleischsorten: [
            { name: "S 3 Schweinefleisch (max. 5% sichtb. Fett)", menge: 40000, einheit: "g" },
            { name: "S 4b Schweinebauch o. Schwarte (max. 50% sichtb. Fett)", menge: 20000, einheit: "g" },
            { name: "S 6 Backen ohne Schwarte", menge: 10000, einheit: "g" },
            { name: "S 9 Speckabschnitte ohne Schwarte", menge: 10000, einheit: "g" },
            { name: "Eisschnee", menge: 20000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 18, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel", menge: 3, einheit: "g", proKg: true },
            { name: "Farbstabilisator", menge: 1, einheit: "g", proKg: true },
            { name: "Pfeffer gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Mazis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.3, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.2, einheit: "g", proKg: true },
            { name: "Paprika", menge: 0.2, einheit: "g", proKg: true },
            { name: "Glutamat", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Halbfabrikat – kein Darm", kaliber: "–", menge: "–" },
        ausgabe: "100 kg Grundbrät",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Kuttern", inhalt: "Gesamtes Material wolfen. In Reihenfolge Magerfleisch → Speck kuttern. Salz und KHM im langsamen Gang beimengen. Eisschnee zugeben. Zu feinst zerkleinertem Brät kuttern." },
            { titel: "Gewürze", inhalt: "Gewürze rechtzeitig zugeben, damit sie sich gut verteilen. Fertige Brattemperatur je nach KHM 12–16°C." },
            { titel: "Lagerung", inhalt: "Bis zur Weiterverwendung bei 12–16°C Raumtemperatur max. 2–3 Stunden lagern." }
        ]}],
        tipps: ["Profi-Formular: Kein Produktionsverlust beim Grundbrät selbst"]
    },

    {
        id: 199,
        titel: "Bierschinken (Profi-Rezept)",
        kategorie: "Brühwurst",
        beschreibung: "Klassischer Bierschinken aus Aufschnittgrundbrät und groben Schweinefleisch-Einlagestücken.",
        quelle: "Sonstiges/Brühwurst.docx",
        basisMenge: { gesamt: 100000 },
        fleischsorten: [
            { name: "Aufschnittgrundbrät", menge: 40000, einheit: "g" },
            { name: "S 1 Schweinefleisch fett- und sehnenfrei", menge: 60000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS (für Schweinefleisch)", menge: 18, einheit: "g", proKg: true },
            { name: "Farbstabilisator", menge: 1, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Mazis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Sterile Kunstdärme braun", kaliber: "90/50", menge: "42 Stück" },
        ausgabe: "ca. 100 kg Bierschinken",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Schweinefleisch vorbereiten", inhalt: "Schweinefleisch in walnussgroße Würfel schneiden. Mit NPS anbeizen. Mit Gewürzen durchkneten bis gut leimig." },
            { titel: "Grundbrät einmengen", inhalt: "Erst dann das Aufschnittgrundbrät dem Schweinefleisch beimenschen." },
            { titel: "Füllen und garen", inhalt: "In sterile Kunstdärme 90/50 füllen. Garzeit: 120 Min. bei 80°C. Produktionsverlust: 2%." }
        ]}],
        tipps: ["Phosphat darf nur dem Grundbrät zugegeben werden, nicht dem Schweinefleisch"]
    },

    {
        id: 200,
        titel: "Kaiserjagdwurst (Profi-Rezept)",
        kategorie: "Brühwurst",
        beschreibung: "Kräftige Brühwurst aus Aufschnittgrundbrät mit Schweinefleisch und Schweinebauch.",
        quelle: "Sonstiges/Brühwurst.docx",
        basisMenge: { gesamt: 100000 },
        fleischsorten: [
            { name: "Aufschnittgrundbrät", menge: 40000, einheit: "g" },
            { name: "S 1 Schweinefleisch fett- und sehnenfrei", menge: 30000, einheit: "g" },
            { name: "S 4b Schweinebauch ohne Schwarte (max. 50% Fett)", menge: 30000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS (für Schweinefleisch und Bauch)", menge: 18, einheit: "g", proKg: true },
            { name: "Farbstabilisator", menge: 1, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Mazis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Sterile Kunstdärme braun", kaliber: "75/50", menge: "60 Stück" },
        ausgabe: "ca. 100 kg Kaiserjagdwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Fleisch vorbereiten", inhalt: "Schweinefleisch und Schweinebäuche vorschneiden, mit Gewürzen und Zutaten vermischen." },
            { titel: "Füllen und garen", inhalt: "Gewürztes Schweinefleisch und Aufschnittgrundbrät gleichmäßig vermengen. In sterile Kunstdärme 75/50 füllen. Garzeit: 90 Min. bei 80°C. Produktionsverlust: 2%." }
        ]}],
        tipps: []
    },

    {
        id: 201,
        titel: "Krakauer (Profi-Rezept)",
        kategorie: "Brühwurst",
        beschreibung: "Typische Krakauer aus Rinderbrät-Grundmasse, Schweinebauch und Schweinefleisch – kalt nachgeräuchert.",
        quelle: "Sonstiges/Brühwurst.docx",
        basisMenge: { gesamt: 100000 },
        fleischsorten: [
            { name: "Rinderbrät-Grundmasse", menge: 50000, einheit: "g" },
            { name: "S 4b Schweinebauch o. Schwarte (max. 50% Fett)", menge: 40000, einheit: "g" },
            { name: "S 2 Schweinefleisch ohne Sehnen (max. 5% Fett)", menge: 10000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS (für Schweinebauch und S2)", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 2, einheit: "g", proKg: true },
            { name: "Rosenpaprika", menge: 0.5, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Knoblauchmasse", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel", menge: 3, einheit: "g", proKg: true },
            { name: "Farbstabilisator", menge: 1, einheit: "g", proKg: true },
            { name: "Glutamat", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kranzdärme", kaliber: "43/46", menge: "75 Meter" },
        ausgabe: "ca. 100 kg Krakauer",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Schweinefleisch schroten", inhalt: "Schweinebauch und Schweinefleisch durch die Erbsenscheibe wolfen. Salz und Gewürze vor oder nach dem Wolfen beigeben." },
            { titel: "Vermengen", inhalt: "Rinderbrät-Grundmasse und grobes Material innig mengen." },
            { titel: "Räuchern und brühen", inhalt: "Füllen. Heiß räuchern 60 Min. bei 60-70°C. Brühen 39 Min. bei 72°C. 5 Min. kaltes Wasser. An der Luft auskühllen." },
            { titel: "Kalt nachräuchern", inhalt: "Ausgetrocknete Würste ca. 6 Stunden kalt nachräuchern. Produktionsverlust: 18%." }
        ]}],
        tipps: []
    },
    {
        id: 236,
        titel: "Frühstücksfleisch ala Evi",
        kategorie: "Brühwurst",
        beschreibung: "Einfaches Frühstücksfleisch aus Schulter und Bauch – in Gläser eingekocht.",
        quelle: "Rezepte_Sortiert/Brühwurst/Frühstücksfleisch.pdf",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Schweineschulter (50%)", menge: 500, einheit: "g" },
            { name: "Schweinebauch ohne Schwarte (50%)", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebel", menge: 150, einheit: "g" },
            { name: "Schweineschmalz (zum Andünsten)", menge: 1, einheit: "EL" }
        ],
        gewuerze: [
            { name: "Pökelsalz (NPS)", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat oder Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 1.5, einheit: "g", proKg: true },
            { name: "Senfsaat gemahlen", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Einmachgläser", kaliber: "-", menge: "passend" },
        ausgabe: "ca. 1 kg",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Zwiebeln vorbereiten", inhalt: "Zwiebeln würfeln und in etwas Schweineschmalz andünsten, auskühlen lassen." },
            { titel: "Wolfen und mengen", inhalt: "Fleisch wolfen, mit abgekühlten Zwiebeln und Gewürzen gut vermengen." },
            { titel: "Einkochen", inhalt: "In Gläser abfüllen, bei 100°C ca. 2 Stunden einkochen." }
        ]}],
        tipps: ["Kochzeit beginnt erst wenn 100°C erreicht sind"]
    },
    {
        id: 237,
        titel: "Geräucherte Schlachtwurst Krakauer Art (Birgit Edelmann)",
        kategorie: "Brühwurst",
        beschreibung: "Krakauer-Variante mit frischem Ingwer, Petersilie und grünem Pfeffer – geräuchert und gebrüht.",
        quelle: "Rezepte_Sortiert/Brühwurst/Geräucherte Schlachtwurst Krakauer Art von Birgit Edelmann.pdf",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Kalbfleisch (oder Rind)", menge: 300, einheit: "g" },
            { name: "Schweineschulter", menge: 500, einheit: "g" },
            { name: "Rückenspeck", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Gefrorene Milch (Schüttung)", menge: 100, einheit: "ml" },
            { name: "Frische Zwiebel", menge: 200, einheit: "g" },
            { name: "Knoblauchzehen frisch", menge: 6, einheit: "Stk" },
            { name: "Frische Petersilie gehackt", menge: 1, einheit: "EL" },
            { name: "Zitronensaft", menge: 10, einheit: "ml" },
            { name: "Grüner Pfeffer gehackt", menge: 1, einheit: "EL" }
        ],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Koriander", menge: 2, einheit: "g", proKg: true },
            { name: "Senfmehl", menge: 3, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Piment gemahlen", menge: 1, einheit: "g", proKg: true },
            { name: "Traubenzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Paprika süß", menge: 3, einheit: "g", proKg: true },
            { name: "Frischer Ingwer", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 1 kg Krakauer",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen", inhalt: "Gewürztes Fleisch kalt durch die 5mm Scheibe wolfen." },
            { titel: "Kneten und füllen", inhalt: "Bei max. 12°C das Brät bindig kneten und in 30/32er Darm füllen." },
            { titel: "Abhängen", inhalt: "1 Stunde abhängen lassen." },
            { titel: "Trocknen und räuchern", inhalt: "Ohne Rauch bei 60°C trocknen, dann 2-3 Stunden goldig räuchern." },
            { titel: "Brühen", inhalt: "Bei 75-78°C für 40 Minuten brühen." }
        ]}],
        tipps: ["Passt bestens zu Sauerkraut und Bratkartoffeln", "KHM nach Herstellerangabe optional"]
    },
    {
        id: 238,
        titel: "Heidefrühstück",
        kategorie: "Brühwurst",
        beschreibung: "Frühstücksfleisch in Dosen oder Gläsern mit Gelatine – saftig und würzig.",
        quelle: "Rezepte_Sortiert/Brühwurst/Heidefrühstück.pdf",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Schweineschulter", menge: 600, einheit: "g" },
            { name: "Bauchfleisch ohne Schwarte", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Gelatine (240 Bloom)", menge: 60, einheit: "g" },
            { name: "Wasser", menge: 125, einheit: "ml" },
            { name: "Maggi", menge: 1, einheit: "Spritzer" }
        ],
        gewuerze: [
            { name: "Pökelsalz (NPS)", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer weiß", menge: 4, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 0.5, einheit: "g", proKg: true },
            { name: "Zwiebelpulver", menge: 1.5, einheit: "g", proKg: true },
            { name: "Selleriesalz", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Dosen oder Einmachgläser", kaliber: "-", menge: "passend" },
        ausgabe: "ca. 1 kg",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen", inhalt: "Fleisch würfeln, mit Salz und Gewürzen gut vermengen, durch die 3mm Scheibe wolfen." },
            { titel: "Mengen", inhalt: "Wasser zugeben und alles sehr gut vermengen." },
            { titel: "Einkochen", inhalt: "In Dosen oder Gläser abfüllen, bei 100°C 2 Stunden einkochen." }
        ]}],
        tipps: ["Kochzeit beginnt erst wenn 100°C erreicht sind"]
    },
    {
        id: 239,
        titel: "Jagdwurst von Andreas Gries",
        kategorie: "Brühwurst",
        beschreibung: "Klassische Jagdwurst mit Schwein, Rind, Backe und Speck – mit Senfkörnern.",
        quelle: "Rezepte_Sortiert/Brühwurst/Jagdwurst von.pdf",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Schweinefleisch", menge: 500, einheit: "g" },
            { name: "Rindfleisch", menge: 100, einheit: "g" },
            { name: "Schweinebacke", menge: 200, einheit: "g" },
            { name: "Speck/Fett", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Eis", menge: 120, einheit: "g" }
        ],
        gewuerze: [
            { name: "Pökelsalz (NPS)", menge: 19, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Paprika", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Kümmel", menge: 1, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 8, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.3, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel", menge: 6, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 1 kg Jagdwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und kuttern", inhalt: "Fleisch wolfen, mit Gewürzen und Eis kuttern bis eine bindige Masse entsteht." },
            { titel: "Füllen und brühen", inhalt: "In Kunstdarm füllen. Bei 72-75°C brühen bis Kerntemperatur erreicht." }
        ]}],
        tipps: []
    },
    {
        id: 240,
        titel: "BBC Wurst",
        kategorie: "Brühwurst",
        beschreibung: "Kräftige BBQ-Wurst mit Paprika, Knoblauch und Liquid Smoke – alternativ gebrüht.",
        quelle: "Rezepte_Sortiert/Brühwurst/BBC Wurst.docx",
        basisMenge: 4000,
        fleischsorten: [
            { name: "Schweineschulter", menge: 3000, einheit: "g" },
            { name: "Schweinebauch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Knoblauch gehackt (alternativ Pulver)", menge: 40, einheit: "g" },
            { name: "Liquid Smoke", menge: 20, einheit: "cl" },
            { name: "Bulls-Eye Dark Beer BBC Soße", menge: 1, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 80, einheit: "g", proKg: false },
            { name: "Schwarzer Pfeffer", menge: 12, einheit: "g", proKg: false },
            { name: "Paprika süß oder scharf", menge: 40, einheit: "g", proKg: false },
            { name: "Chilli Pulver", menge: 2, einheit: "g", proKg: false }
        ],
        darm: { typ: "Schweinedarm", kaliber: "24/26", menge: "16m" },
        ausgabe: "ca. 4 kg Wurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und würzen", inhalt: "Fleisch wolfen, mit allen Gewürzen, Knoblauch, Liquid Smoke und BBC-Soße gut vermengen." },
            { titel: "Füllen", inhalt: "In 24/26er Darm füllen." },
            { titel: "Brühen (optional)", inhalt: "Bei 72°C brühen: pro mm Dicke 1 Minute (ca. 25 Minuten)." }
        ]}],
        tipps: ["Liquid Smoke gibt intensives Raucharoma ohne Räuchern"]
    },
    {
        id: 241,
        titel: "Geräucherte Knackwurst",
        kategorie: "Brühwurst",
        beschreibung: "Klassische geräucherte Knackwurst aus Schulter und Bauch – mit Koriander, Piment und Macis.",
        quelle: "Rezepte_Sortiert/Brühwurst/Knackwurst-1.pdf",
        basisMenge: 1000,
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
            { name: "Knoblauchzehe gerieben", menge: 1, einheit: "Stk" },
            { name: "Zucker", menge: 1, einheit: "Prise" }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28-30", menge: "passend" },
        ausgabe: "ca. 1 kg Knackwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Vorbereiten", inhalt: "Fleisch von Sehnen, Knorpel und Schwarte befreien, in Stücke schneiden. Gewürze einmischen." },
            { titel: "Anfrieren", inhalt: "Fleisch 2 Stunden im Tiefkühler anfrieren. Darm wässern." },
            { titel: "Wolfen", inhalt: "Durch 4mm Scheibe wolfen. Brät gut durchkneten bis Bindung entsteht." },
            { titel: "Füllen und formen", inhalt: "Luftfrei in Darm füllen, zum Ring formen, Enden mit Metzgergarn verknoten." },
            { titel: "Räuchern", inhalt: "Räuchern bis gewünschte Farbe und Aroma erreicht sind." }
        ]}],
        tipps: ["Keine Luft in den Darm lassen – ggf. mit Nadel einstechen"]
    },
    {
        id: 256,
        titel: "Bockwurst",
        kategorie: "Brühwurst",
        beschreibung: "Klassische Bockwurst aus Schweineoberschale und Bauch – heiß geräuchert und gebrüht.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 5000,
        fleischsorten: [
            { name: "Schweineoberschale", menge: 2400, einheit: "g" },
            { name: "Schweinebauch", menge: 1600, einheit: "g" }
        ],
        zutaten: [
            { name: "Eisschnee", menge: 1000, einheit: "g" }
        ],
        gewuerze: [
            { name: "Nitritpökelsalz (NPS)", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Paprikapulver edelsüß", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinesaitlinge", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 50 Stück à 100g",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und kuttern", inhalt: "Material in Stücke schneiden, durch 10mm Scheibe wolfen. Oberschale 2 Runden im langsamen Gang kuttern, Eisschnee zugeben, 2 weitere Runden, dann NPS zugeben. Bauch und Gewürze zugeben und fein kuttern." },
            { titel: "Durchröten", inhalt: "Masse über Nacht in ca. 10°C kühlen Raum zum Durchröten stellen." },
            { titel: "Füllen", inhalt: "Am nächsten Tag kurz durchmengen, in Schweinesaitlinge füllen, paarweise à 100g abdrehen." },
            { titel: "Räuchern und brühen", inhalt: "1 Stunde bei 60°C heiß räuchern, dann 20 Minuten in 70°C heißem Wasser brühen." }
        ]}],
        tipps: []
    },
    {
        id: 257,
        titel: "Weißwurst",
        kategorie: "Brühwurst",
        beschreibung: "Münchner Weißwurst aus Kalbsschulter, Schweineschulter und Speck – mit Petersilie und gedünsteten Zwiebeln.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 5000,
        fleischsorten: [
            { name: "Kalbsschulter", menge: 2300, einheit: "g" },
            { name: "Magere Schweineschulter", menge: 1400, einheit: "g" },
            { name: "Speck", menge: 1300, einheit: "g" }
        ],
        zutaten: [
            { name: "Milch abgekocht und erkaltet", menge: 400, einheit: "ml" },
            { name: "Zwiebeln gedünstet", menge: 10, einheit: "g", proKg: true },
            { name: "Frische Petersilie gehackt", menge: 8, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "Salz", menge: 26, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinssaitlinge", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 50 Stück à 100g",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und kuttern", inhalt: "Kalbs- und Schweinefleisch durch 10mm Scheibe wolfen, mit Milch und Salz auskuttern. Speck durch 3mm Scheibe wolfen, mitkuttern bis feines Brät entsteht." },
            { titel: "Würzen", inhalt: "Restliche Gewürze, Zwiebeln und Petersilie rechtzeitig zugeben um sich gut zu vermengen." },
            { titel: "Füllen und brühen", inhalt: "In Schweinssaitlinge füllen, à 100g abdrehen. Vor dem Verzehr brühen oder braten." }
        ]}],
        tipps: []
    },
    {
        id: 258,
        titel: "Geflügel-Knackwurst",
        kategorie: "Brühwurst",
        beschreibung: "Knackwurst aus Puten- und Hähnchenfleisch mit Schweinespeck – kalt geräuchert.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 5000,
        fleischsorten: [
            { name: "Ausgelöste Putenkeule", menge: 1500, einheit: "g" },
            { name: "Hähnchenfleisch", menge: 1500, einheit: "g" },
            { name: "Schweinespeck", menge: 2000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 26, einheit: "g", proKg: true },
            { name: "Salpeter", menge: 0.3, einheit: "g", proKg: true },
            { name: "Zucker", menge: 2, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Weite Rinderkranzdärme", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 5 kg Knackwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und würzen", inhalt: "Gut gekühltes Material in Stücke schneiden, durch 8mm Scheibe wolfen, würzen und gut vermengen." },
            { titel: "Füllen", inhalt: "In weite Rinderkranzdärme füllen, einzelne Ringe abbinden." },
            { titel: "Umröten", inhalt: "24 Stunden in ca. 15°C kühlem Raum umröten lassen." },
            { titel: "Räuchern", inhalt: "5-6 Tage bei max. 20°C kalt räuchern." }
        ]}],
        tipps: []
    }
,

    // ── Wurst-Ordner ──────────────────────────────────────────
    {
        id: 294,
        titel: "Lyoner mit Oliven (ala Michael Grabowsky)",
        kategorie: "Brühwurst",
        beschreibung: "Feine Lyoner mit Oliven, Rosmarin und Thymian – in der Küchenmaschine gekuttert und gebrüht.",
        quelle: "Wurst/Lyoner .doc",
        basisMenge: { gesamt: 1260 },
        fleischsorten: [
            { name: "Schweineschulter (schier)", menge: 600, einheit: "g" },
            { name: "Schweinebauch", menge: 200, einheit: "g" },
            { name: "Schweinebacke", menge: 200, einheit: "g" },
            { name: "Eis", menge: 260, einheit: "g" }
        ],
        zutaten: [
            { name: "Oliven (klein geschnitten)", menge: null, einheit: "handvoll" },
            { name: "Rosmarin, Olivenkraut, Thymian (gemörsert)", menge: null, einheit: "nach Geschmack" }
        ],
        gewuerze: [
            { name: "NPS", menge: 20, einheit: "g", proKg: true },
            { name: "Brätfirisol", menge: 4, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Ingwerpulver", menge: 0.5, einheit: "g", proKg: true },
            { name: "Macisblüte", menge: 0.8, einheit: "g", proKg: true },
            { name: "Koriander gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 0.5, einheit: "g", proKg: true },
            { name: "Rohrzucker", menge: 0.6, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 1,2 kg Lyoner",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Vorwolfen", inhalt: "Schulter 2× durch feine Scheibe wolfen. Bauch und Backe extra 1× wolfen." },
            { titel: "Kuttern", inhalt: "Schulter mit NPS kuttern bis Bindung entsteht. Halbes Eis zugeben, fein kuttern. Bauch, Backe, restliches Eis und Gewürze zugeben. Paar Runden kuttern." },
            { titel: "Oliven unterheben", inhalt: "Klein geschnittene Oliven und gemörserte Kräuter vorsichtig unterheben." },
            { titel: "Füllen und brühen", inhalt: "Brät in Kunstdärme füllen. 1 Stunde bei 80°C brühen. Danach ins kalte Wasser." }
        ]}],
        tipps: []
    },
    {
        id: 295,
        titel: "Steirische Breinwurst",
        kategorie: "Brühwurst",
        beschreibung: "Regionales steirisches Schmankerl – Kopffleisch mit Buchweizen in Schweinsdarm, gebrüht und dann gebraten.",
        quelle: "Wurst/Steirische Brein Wurst.doc",
        basisMenge: { gesamt: 2000 },
        fleischsorten: [
            { name: "Schweinekopffleisch, Haxen, magere Fleischabschnitte", menge: 2000, einheit: "g" },
            { name: "Schwarten", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Heidenbrein (Buchweizen geschrotet, weichgekocht)", menge: 500, einheit: "g" },
            { name: "Kochbrühe", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 22, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Thymian", menge: 1, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer geschrotet", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: null, einheit: "nach Geschmack" }
        ],
        darm: { typ: "Schweinsdarm", kaliber: "28–32", menge: "paarweise abbinden" },
        ausgabe: "ca. 2,5 kg Breinwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Fleisch kochen", inhalt: "Kopffleisch, Schwarten und Fleischabschnitte kernig weichkochen. Durch mittlere Scheibe faschieren." },
            { titel: "Mischen", inhalt: "Buchweizen weichkochen, mit Fleischmasse und etwas Suppe vermischen. Kräftig würzen." },
            { titel: "Füllen und brühen", inhalt: "In Schweinsdärme Kaliber 28-32 füllen, paarweise abbinden. Bei 75°C 40-60 Min. brühen. Über Nacht auskühlen." },
            { titel: "Servieren", inhalt: "In Bratpfanne mit Schweineschmalz knusprig braten." }
        ]}],
        tipps: ["Dazu passt Sauerkraut und Bratkartoffeln"]
    }
,

    {
        id: 303,
        titel: "Kümmelwurst (Schweizer Handbuch)",
        kategorie: "Brühwurst",
        beschreibung: "Traditionelle Schweizer Kümmelwurst aus Kuhfleisch, Lunge und Herz – historisches Profi-Rezept aus dem Handbuch für die Wursterei",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "26 kg",
        fleischsorten: [
            { name: "Kuhfleisch", menge: "1300g" },
            { name: "Flexen und Blassen (gekocht)", menge: "520g" },
            { name: "Kuhfleisch, fette Abschnitte", menge: "390g" },
            { name: "Lunge und Herz", menge: "390g" },
            { name: "Kalbskrös", menge: "260g" },
            { name: "Speck", menge: "520g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: "25g/kg" },
            { name: "Salpeter", menge: "0,5g/kg" },
            { name: "Pfeffer", menge: "2g/kg" },
            { name: "Muscat", menge: "0,5g/kg" },
            { name: "Koriander", menge: "1g/kg" },
            { name: "Kümmel (ganz)", menge: "1,5g/kg" }
        ],
        darm: "Kranzdärme 36/38 mm",
        ausgabe: "ca. 26 kg Brühwurst",
        schritte: [
            { titel: "Kuhfleisch blitzen", inhalt: "Kuhfleisch durch 3mm Scheibe treiben und mit 70% Eiswasser ausblitzen. Flexen und Blassen durch 2mm Scheibe treiben und beigeben." },
            { titel: "Einlagen vorbereiten", inhalt: "Fettes Kuhfleisch, Kalbskrös und Lunge+Herz einzeln durch 3mm Scheibe treiben." },
            { titel: "Vermengen", inhalt: "Alle Fleischsorten mit Speck (durch 12mm), Salz und Gewürzen gut vermengen. Schüttung: 70% Eiswasser." },
            { titel: "Füllen", inhalt: "In Kranzdärme 36/38 mm füllen, abbinden, brühen." }
        ],
        tipps: "Historisches Rezept aus der Schweizer Profi-Fleischerei. Gewürze werden beim Anschaffen beigegeben."
    },
    {
        id: 304,
        titel: "Cervelat (Schweizer Handbuch)",
        kategorie: "Brühwurst",
        beschreibung: "Klassischer Schweizer Cervelat – das Nationalgericht der Schweiz, nach historischem Profi-Rezept mit Kuh- und Rindfleisch",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "17 kg",
        fleischsorten: [
            { name: "Kuh- oder Munifleisch (vorgesalzen)", menge: "1000g" },
            { name: "Rindfleischabschnitte (vorgesalzen)", menge: "250g" },
            { name: "Schwarten (roh, fein gescheffelt)", menge: "375g" },
            { name: "Wurstspeck (grob gescheffelt)", menge: "500g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Nitritsalz", menge: "29g/kg Fleisch", notiz: "oder 28g Salz + 1g Salpeter" },
            { name: "Salz", menge: "20g/kg Speck und Schwarten" },
            { name: "Pfeffer", menge: "1,5g/kg" },
            { name: "Koriander", menge: "1g/kg" },
            { name: "Muscat", menge: "0,5g/kg" },
            { name: "Knoblauch", menge: "2g/kg" }
        ],
        darm: "Kranzdärme 34/36 mm",
        ausgabe: "ca. 17 kg Brühwurst",
        schritte: [
            { titel: "Fleisch blitzen", inhalt: "Kuh- und Rindfleisch durch 3mm Scheibe, in Blitz geben. Speck durch 9mm Scheibe treiben." },
            { titel: "Schüttung", inhalt: "Viertel der Schüttung (80% Eiswasser) beigeben. Sobald Fleisch anzieht, Schwarten und Rest-Schüttung beigeben. Speck und Gewürze zuletzt." },
            { titel: "Füllen und brühen", inhalt: "In Kranzdärme 34/36 mm füllen. Heiss räuchern, dann brühen." }
        ],
        tipps: "Cervelat ist das Nationalwürstchen der Schweiz. Traditionell im Heissrauch geräuchert und dann gebrüht."
    },
    {
        id: 305,
        titel: "Schüblig (Schweizer Handbuch)",
        kategorie: "Brühwurst",
        beschreibung: "Typisch ostschweizer Schüblig – Brühwurst aus Kuhfleisch, Schwarten und Speck mit Zwiebeln",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "17 kg",
        fleischsorten: [
            { name: "Kuh- oder Munifleisch", menge: "1000g" },
            { name: "Rindskopffleisch oder Kalbskopf", menge: "143g" },
            { name: "Schweinefleisch II", menge: "286g" },
            { name: "Schwarten (½ roh, ½ gebrüht)", menge: "429g" },
            { name: "Kinnbackenspeck", menge: "571g" }
        ],
        zutaten: [
            { name: "Zwiebeln", menge: "5g/kg" }
        ],
        gewuerze: [
            { name: "Nitritsalz", menge: "29g/kg" },
            { name: "Pfeffer", menge: "1,5g/kg" },
            { name: "Muscat", menge: "0,5g/kg" },
            { name: "Nelkenpulver", menge: "0,25g/kg" },
            { name: "Koriander", menge: "1g/kg" },
            { name: "Maggi", menge: "5g/kg" }
        ],
        darm: "Schweinskranzdärme 28/30 mm",
        ausgabe: "ca. 17 kg",
        schritte: [
            { titel: "Blitzen", inhalt: "Kuh- und Munifleisch durch 3mm, mit Schwarten (durch 2mm) in Blitz. Mit mindestens 55% Eiswasser ausblitzen." },
            { titel: "Speck und Gewürze", inhalt: "Kinnbackenspeck durch 9mm, nach erfolgter Schüttung beigeben. Gewürze beim Anschaffen zugeben." },
            { titel: "Füllen", inhalt: "In Schweinskranzdärme 28/30 mm füllen. Heiss räuchern und brühen." }
        ],
        tipps: "Der Schüblig ist ein typisches ostschweizer Produkt und Lieblingsessen vieler Schweizer. Zwiebeln geben ihm seinen besonderen Charakter."
    },
    {
        id: 306,
        titel: "Wienerli (Schweizer Handbuch)",
        kategorie: "Brühwurst",
        beschreibung: "Schweizer Version der Wiener Würstchen – fein ausgeblitzt mit Kuhfleisch und feinen Gewürzen, in Saiten gefüllt",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "14 kg",
        fleischsorten: [
            { name: "Kuh- oder Munifleisch", menge: "1000g" },
            { name: "Kalb- oder Schweinefleisch II", menge: "250g" },
            { name: "Speck", menge: "500g" }
        ],
        zutaten: [
            { name: "Zwiebeln", menge: "5g/kg" },
            { name: "Maggi", menge: "5g/kg" }
        ],
        gewuerze: [
            { name: "Nitritsalz", menge: "29g/kg" },
            { name: "Pfeffer (weiß)", menge: "1g/kg" },
            { name: "Paprika", menge: "0,5g/kg" },
            { name: "Macis", menge: "0,5g/kg" },
            { name: "Ingwer", menge: "0,25g/kg" },
            { name: "Kümmel (gemahlen)", menge: "0,25g/kg" }
        ],
        darm: "Saiten (Schafsdarm) Kal. 22/24 mm",
        ausgabe: "ca. 14 kg",
        schritte: [
            { titel: "Blitzen", inhalt: "Kuh- und Schweinefleisch durch 3mm Scheibe, mit 2 Liter Eiswasser in Blitz. Rest der Schüttung schapfenweise beigeben (mindestens 70% Eiswasser)." },
            { titel: "Speck beigeben", inhalt: "Speck durch 3mm Scheibe, erst nach erfolgter Schüttung beigeben. Gewürze gleichzeitig mit Fleisch einarbeiten." },
            { titel: "Füllen und räuchern", inhalt: "In Saiten 22/24 mm füllen. Heiss räuchern, dann in Brühwasser brühen." }
        ],
        tipps: "Beim Wiener Brät darf nur geschüttetes Eis verwendet werden. Für beste Qualität Schüttung schapfenweise beigeben."
    },
    {
        id: 307,
        titel: "St. Galler Kalbsbratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Original St. Galler Kalbsbratwurst nach historischem Schweizer Rezept – mit Milch statt Eiswasser, Macis und geriebener Zitronenschale",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "14 kg",
        fleischsorten: [
            { name: "Kalbfleisch (warm, ausgesehnt)", menge: "1000g" },
            { name: "Rückenspeck (kernig)", menge: "400g" }
        ],
        zutaten: [
            { name: "Milch (statt Eiswasser)", menge: "70% Schüttung" },
            { name: "Zwiebeln", menge: "10g/kg" },
            { name: "Eier", menge: "nach Belieben" }
        ],
        gewuerze: [
            { name: "Salz", menge: "30g/kg Kalbfleisch" },
            { name: "Salz", menge: "20g/kg Speck" },
            { name: "Pfeffer (weiß)", menge: "2g/kg" },
            { name: "Macis", menge: "1g/kg" },
            { name: "Zitronenschale (gerieben)", menge: "0,5g/kg" },
            { name: "Maggi", menge: "1g/kg" }
        ],
        darm: "Schweinskranzdärme 28/30 mm",
        ausgabe: "ca. 14 kg",
        schritte: [
            { titel: "Kalbfleisch blitzen", inhalt: "Kalbfleisch und Speck durch 3mm Scheibe. Im Blitz Salz, Gewürze und Zwiebeln zugeben. Mindestens ¼ der Milch-Schüttung beim Anschaffen beigeben." },
            { titel: "Speck einarbeiten", inhalt: "Speck vor der letzten Schüttung beigeben und fein ausblitzen. Alternativ Speck in Würfel mit dem Kalbfleisch blitzen." },
            { titel: "Füllen", inhalt: "In Schweinskranzdärme 28/30 mm füllen und brühen." }
        ],
        tipps: "Die Besonderheit der St. Galler Kalbsbratwurst: Milch statt Eiswasser als Schüttung! Kalbfleisch sollte schlachtwarm verarbeitet werden."
    },
    {
        id: 308,
        titel: "Saucisse aux Choux (Krautwurst)",
        kategorie: "Brühwurst",
        beschreibung: "Westschweizer Krautwurst mit Kohl und Leber – rustikale Spezialität mit gedämpften Zwiebeln und Kohl",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "17 kg",
        fleischsorten: [
            { name: "Kuhfleisch (warm)", menge: "500g" },
            { name: "Fette Abschnitte", menge: "300g" },
            { name: "Schweinefleisch (Abschnitte)", menge: "200g" },
            { name: "Speck", menge: "200g" },
            { name: "Schwarten (roh)", menge: "200g" },
            { name: "Leber", menge: "100g" }
        ],
        zutaten: [
            { name: "Kohl (gedämpft)", menge: "200g" },
            { name: "Zwiebeln (gedämpft)", menge: "20g/kg" }
        ],
        gewuerze: [
            { name: "Nitritsalz", menge: "28g/kg" },
            { name: "Pfeffer", menge: "1g/kg" },
            { name: "Muscat", menge: "1g/kg" },
            { name: "Kümmel (gemahlen)", menge: "0,5g/kg" },
            { name: "Knoblauch", menge: "0,5g/kg" },
            { name: "Maggi", menge: "5g/kg" }
        ],
        darm: "Kranzdärme 38/40 mm",
        ausgabe: "ca. 17 kg",
        schritte: [
            { titel: "Brät herstellen", inhalt: "Kuhfleisch und Leber zusammen mit 30% Eiswasser ausblitzen. Speck (9mm), Schweinefleisch (5mm), fette Abschnitte (3mm) und feingescheffelte Schwarten beigeben." },
            { titel: "Kohl einarbeiten", inhalt: "Kohl und Zwiebeln durch 3mm Scheibe, dem Brät beigeben. Gut vermengen." },
            { titel: "Füllen", inhalt: "In Kranzdärme 38/40 mm füllen, brühen." }
        ],
        tipps: "Typisches Westschweizer Produkt. Kohl muss vorgedämpft werden. Kann auch als Rohwurst geräuchert werden."
    },
    {
        id: 309,
        titel: "Saucisson (Schweizer Handbuch)",
        kategorie: "Brühwurst",
        beschreibung: "Westschweizer Saucisson – grobe Schweinewurst mit Weißwein, schlachtwarm verarbeitet",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "17 kg",
        fleischsorten: [
            { name: "Schweinefleisch (schlachtwarm)", menge: "1000g" },
            { name: "Nacken- oder Kinnbackenspeck", menge: "294g" }
        ],
        zutaten: [
            { name: "Weißwein", menge: "0,5 dl/kg Masse" }
        ],
        gewuerze: [
            { name: "Salz", menge: "18g/kg" },
            { name: "Salpeter", menge: "0,5g/kg" },
            { name: "Zucker", menge: "1g/kg" },
            { name: "Pfeffer (weiß)", menge: "1g/kg" }
        ],
        darm: "Schweinskrausedärme",
        ausgabe: "ca. 17 kg",
        schritte: [
            { titel: "Fleisch vorbereiten", inhalt: "Schweinefleisch schlachtwarm, entsehnt und entfettet, sofort salzen. Durch 7mm Scheibe wolfen. Speck ebenfalls salzen und durch gleiche Scheibe wolfen." },
            { titel: "Gewürze im Wein", inhalt: "Gewürze im Weißwein auflösen. Fleisch und Speck damit übergießen, vermengen bis es gut bindet." },
            { titel: "Erkalten lassen", inhalt: "Brät bis zum Erkalten in großes Blech flach ausbreiten. Erst dann in Schweinskrausedärme füllen." }
        ],
        tipps: "Schlachtwarm verarbeiten ist der Schlüssel! Saucisson ist das Nationalgericht der Westschweiz – traditionell mit Linsen serviert."
    },
    {
        id: 310,
        titel: "Münchner Weißwurst (Schweizer Handbuch)",
        kategorie: "Bratwurst",
        beschreibung: "Historisches Profi-Rezept der Münchner Weißwurst mit Kalbskopf, Kalbsfüssen, Petersilie und Macis",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "18 kg",
        fleischsorten: [
            { name: "Kalbfleisch (schlachtwarm)", menge: "600g" },
            { name: "Schweinefleisch (schlachtwarm)", menge: "400g" },
            { name: "Nackenspeck", menge: "450g" },
            { name: "Kalbskopf und Kalbsfüsse (weichgekocht)", menge: "150g" },
            { name: "Kalbsbrustspitze (gekocht)", menge: "200g" }
        ],
        zutaten: [
            { name: "Zwiebeln", menge: "15g/kg" },
            { name: "Petersilie (fein gehackt)", menge: "5g/kg" }
        ],
        gewuerze: [
            { name: "Salz", menge: "30g/kg Kalb- und Schweinefleisch" },
            { name: "Salz", menge: "22g/kg Speck, Kalbskopf und Füsse" },
            { name: "Pfeffer (weiß)", menge: "2g/kg" },
            { name: "Macis", menge: "0,5g/kg" },
            { name: "Ingwer", menge: "0,5g/kg" },
            { name: "Zitronenschale (fein gerieben)", menge: "0,5g/kg" }
        ],
        darm: "Saiten 24/26 mm",
        ausgabe: "ca. 18 kg",
        schritte: [
            { titel: "Kalb- und Schweinefleisch blitzen", inhalt: "Kalb- und Schweinefleisch mit 70% Eiswasser ausblitzen. Speck durch 3mm Scheibe, nach der Schüttung beigeben." },
            { titel: "Einlagen vorbereiten", inhalt: "Kalbskopf, Füsse und Brustspitze sind vorgekocht. Durch geeignete Scheibe treiben und zum Brät geben." },
            { titel: "Füllen", inhalt: "In Saiten 24/26 mm füllen. In heißem Wasser ziehen lassen (nicht kochen!)." }
        ],
        tipps: "Original Münchner Weißwurst enthält auch Kalbskopf und -füsse! Immer nur in heißem Wasser ziehen lassen – niemals kochen."
    },
    {
        id: 311,
        titel: "Berner Zungenwurst",
        kategorie: "Brühwurst",
        beschreibung: "Schweizer Berner Zungenwurst – grobe Schweinewurst mit Kuhfleisch und Halsspeck",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "13 kg",
        fleischsorten: [
            { name: "Schweinefleisch (warm, vorgesalzen)", menge: "700g" },
            { name: "Kuh- oder Munifleisch (vorgeblitzt)", menge: "300g" },
            { name: "Halsspeck", menge: "300g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Nitritsalz", menge: "23g/kg" },
            { name: "Pfeffer (weiß)", menge: "1,5g/kg" },
            { name: "Muscat", menge: "0,5g/kg" },
            { name: "Knoblauch", menge: "0,5g/kg" }
        ],
        darm: "Scheibendärme 45/50 mm",
        ausgabe: "ca. 13 kg",
        schritte: [
            { titel: "Fleisch vorbereiten", inhalt: "Kuhfleisch vorblitzen (mit 40% Eiswasser auf das Kuhfleisch berechnet). Schweinefleisch und Speck durch 9mm Scheibe." },
            { titel: "Vermengen", inhalt: "Kuhfleisch, Schweinefleisch, Speck und Gewürze gut durcharbeiten." },
            { titel: "Füllen", inhalt: "In Scheibendärme 45/50 mm füllen, stückweise abbinden, brühen." }
        ],
        tipps: "Berner Spezialität – trotz des Namens enthält das klassische Rezept keine Zunge. Grob und rustikal."
    }
,

    {
        id: 312,
        titel: "Wadtländer Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Rustikale Westschweizer Bratwurst mit Weißwein – ringförmig serviert, aus schlachtwarmen Schweinefleisch",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "6 kg",
        fleischsorten: [
            { name: "Schweinefleisch (schlachtwarm, fettfrei)", menge: "600g" },
            { name: "Halsspeck (frisch geschlachtet)", menge: "300g" }
        ],
        zutaten: [
            { name: "Weißwein", menge: "1 dl auf 5 kg Masse" }
        ],
        gewuerze: [
            { name: "Salz", menge: "20g/kg" },
            { name: "Pfeffer (weiß)", menge: "1g/kg" },
            { name: "Muscat", menge: "0,5g/kg" },
            { name: "Majoran", menge: "1g/kg" },
            { name: "Nelkenpulver", menge: "0,25g/kg" }
        ],
        darm: "Schweinskranzdärme 28/30 mm",
        ausgabe: "ca. 6 kg",
        schritte: [
            { titel: "Fleisch wolfen", inhalt: "Schweinefleisch und Halsspeck durch 7mm Scheibe wolfen." },
            { titel: "Würzen", inhalt: "Salz, Gewürze und Weißwein beigeben. Gut durcharbeiten bis das Brät bindet." },
            { titel: "Füllen", inhalt: "In Schweinskranzdärme 28/30 mm füllen, ringförmig aufwickeln. Per Gewicht verkauft." }
        ],
        tipps: "Westschweizer Spezialität – schlachtfrisches Fleisch ist Pflicht! Traditionell ringförmig auf runder Platte serviert."
    },
    {
        id: 313,
        titel: "Hallauer Schinkenwurst",
        kategorie: "Brühwurst",
        beschreibung: "Würzige Brühwurst mit Kümmel und Rotwein-Knoblauch aus dem Schaffhauser Hallau – historisches Profi-Rezept",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "13 kg",
        fleischsorten: [
            { name: "Schweinefleisch (fett- und sehnenfrei)", menge: "800g" },
            { name: "Kuhfleisch (mit Eiswasser ausgeblitzt)", menge: "200g" },
            { name: "Halsspeck", menge: "300g" }
        ],
        zutaten: [
            { name: "Rotwein", menge: "0,75 dl auf gesamte Masse" }
        ],
        gewuerze: [
            { name: "Nitritsalz", menge: "22g/kg Schweinefleisch" },
            { name: "Nitritsalz", menge: "28g/kg Kuhfleisch" },
            { name: "Salz", menge: "20g/kg Speck" },
            { name: "Pfeffer (weiß)", menge: "1,5g/kg" },
            { name: "Muscat", menge: "0,5g/kg" },
            { name: "Kümmel (ganz)", menge: "1g/kg" },
            { name: "Knoblauch", menge: "3 Zehen im Rotwein aufgelöst" }
        ],
        darm: "Schweinskranzdärme",
        ausgabe: "ca. 13 kg",
        schritte: [
            { titel: "Fleisch vorbereiten", inhalt: "Schweinefleisch und Speck in 1cm × 2-3cm Würfel schneiden. Mit Salz vermengen, über Nacht zum Durchröten bereitstellen." },
            { titel: "Vermengen", inhalt: "Geblitztes Kuhfleisch, Schweinefleisch und Speck mit Gewürzen und Rotwein-Knoblauch gut vermengen." },
            { titel: "Füllen", inhalt: "In Schweinskranzdärme füllen, stückweise abbinden, brühen." }
        ],
        tipps: "Rotwein und Kümmel sind die Geschmacksgeber dieser Hallauer Spezialität. Knoblauch im Wein aufgelöst gibt ein harmonisches Aroma."
    },
    {
        id: 314,
        titel: "Bündner Beinwurst",
        kategorie: "Brühwurst",
        beschreibung: "Graubündner Spezialität – rustikale Wurst mit Knochen und Rotwein, stückweise in Schweinskrausedärmen gefüllt",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "10 kg",
        fleischsorten: [
            { name: "Schweinefleisch Schulter (ausgebeint)", menge: "450g" },
            { name: "Schweinefleisch Hals (wie gewachsen)", menge: "400g" },
            { name: "Gnagi, Schwanz und Bruststücke", menge: "150g" }
        ],
        zutaten: [
            { name: "Rotwein", menge: "1 dl/kg" }
        ],
        gewuerze: [
            { name: "Salz", menge: "20g/kg" },
            { name: "Salpeter", menge: "0,5g/kg" },
            { name: "Pfeffer (schwarz)", menge: "2g/kg" },
            { name: "Muscat", menge: "1g/kg" },
            { name: "Knoblauch", menge: "5g/kg" }
        ],
        darm: "Schweinskrausedärme",
        ausgabe: "ca. 10 kg",
        schritte: [
            { titel: "Fleisch würfeln und marinieren", inhalt: "Fleisch und Gnagi in ca. 2,5cm große Würfel schneiden, Knochen im Fleisch belassen. Salz- und Gewürzgemisch im Wein auflösen. Fleisch 3 Tage einlegen." },
            { titel: "Füllen", inhalt: "Schweinskrausedärme vorbereiten (vorabbinden). Fleischstücke einfüllen." },
            { titel: "Brühen", inhalt: "In heißem Wasser brühen bis gar." }
        ],
        tipps: "Knochen bleiben im Fleisch! Diese rustikale Graubündner Wurst wird traditionell kalt gegessen. Gnagi = Kalbsfüsse/Schweinsfüsse."
    }
];