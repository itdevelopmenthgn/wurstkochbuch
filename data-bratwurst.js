// Kategorie: Bratwurst
const rezepte_bratwurst = [
    {
        "id": 1,
        "titel": "BBC Grillwurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Rauchige Grillwurst mit Liquid Smoke und Bulls-Eye BBQ-Soße",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 4000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter",
                "menge": 3000,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Liquid Smoke",
                "menge": 20,
                "einheit": "cl"
            },
            {
                "name": "Bulls-Eye Dark Beer BBQ-Soße",
                "menge": null,
                "einheit": "nach Bedarf"
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
                "name": "Schwarzer Pfeffer",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika (süß oder scharf)",
                "menge": 10,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Chillipulver",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch (gehackt oder Pulver)",
                "menge": 10,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Lammsaitlinge",
            "kaliber": "24/26",
            "menge": "ca. 8 m für 4 kg"
        },
        "ausgabe": "ca. 50-60 Würste (20 cm)",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten",
                        "inhalt": "Schulter und Bauch in Würfel schneiden, Speck gefroren und Fleisch angefroren halten."
                    },
                    {
                        "titel": "Wolfen",
                        "inhalt": "Fleisch und Speck nacheinander durch grobe Lochscheibe drehen."
                    }
                ]
            },
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Würzen und mischen",
                        "inhalt": "Gewürze und Liquid Smoke zugeben, 8–10 Minuten in der Küchenmaschine auf mittlerer Stufe vermengen bis gute Bindung entsteht. Temperatur im Auge behalten!"
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Darm aufziehen, gleichmäßig befüllen (nicht zu fest). Zu 20 cm Würsten abdrehen."
                    }
                ]
            }
        ],
        "tipps": [
            "Alternativ bei 72°C brühen (ca. 1 Min. pro mm Dicke ≈ 25 Min.)",
            "BBQ-Soße nach Belieben beim Grillen auftragen",
            "Einen Tag im Kühlschrank durchziehen oder vakuumieren und einfrieren"
        ]
    },
    {
        "id": 2,
        "titel": "Bärlauch-Bratwurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Frühlings-Bratwurst mit frischem Bärlauch und Olivenöl",
        "quelle": "BRat und Grillwurst",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweinebauch (ohne Knochen)",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Bärlauch (frisch)",
                "menge": 4,
                "einheit": "EL"
            },
            {
                "name": "Olivenöl",
                "menge": 3,
                "einheit": "EL"
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
                "name": "Weißer Pfeffer",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel (gemahlen)",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 8-10 Würstchen",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten",
                        "inhalt": "Bauchfleisch von Knochen befreien und in Stücke schneiden."
                    },
                    {
                        "titel": "Bärlauchpaste herstellen",
                        "inhalt": "Bärlauch mixen, Salz und Olivenöl zugeben."
                    }
                ]
            },
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Fleisch wolfen, Gewürze und Bärlauchpaste zugeben und gut vermengen."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Masse in Schweinedärme füllen."
                    }
                ]
            }
        ],
        "tipps": [
            "Bärlauch gibt es nur kurz im Frühling – größere Menge machen und einfrieren",
            "Frischer Bärlauch ist deutlich intensiver als Pulver"
        ]
    },
    {
        "id": 4,
        "titel": "Bratwurst Parmesan-Zitrone",
        "kategorie": "Bratwurst",
        "beschreibung": "Italienische Bratwurst mit Parmesan, Petersilie, Riesling und Zitrone",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 4000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter",
                "menge": 2800,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 1200,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Petersilie (frisch)",
                "menge": 300,
                "einheit": "g"
            },
            {
                "name": "Parmesan (gerieben)",
                "menge": 600,
                "einheit": "g"
            },
            {
                "name": "Riesling",
                "menge": 400,
                "einheit": "ml"
            },
            {
                "name": "Bio-Zitrone (Abrieb)",
                "menge": 2,
                "einheit": "Stück"
            }
        ],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 15,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Chiliflocken (gemörsert)",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskatnuss",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "28/30 oder 24/26",
            "menge": "10 m 28/30, 12 m 24/26"
        },
        "ausgabe": "ca. 50-60 Würstchen",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten und wolfen",
                        "inhalt": "Schulter und Bauch würfeln, kühlen, wolfen."
                    },
                    {
                        "titel": "Alles vermengen",
                        "inhalt": "Gewürze, Parmesan, Petersilie, Zitronenabrieb und Riesling zugeben und gründlich verkneten."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedärme füllen und abdrehen."
                    }
                ]
            }
        ],
        "tipps": [
            "Riesling ersetzt Wasser – macht das Brät besonders saftig"
        ]
    },
    {
        "id": 5,
        "titel": "Bratwurst ala´ Pappa",
        "kategorie": "Bratwurst",
        "beschreibung": "Klassisches Familienrezept mit Pökelsalz, Pfeffer und Muskat",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 4000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter",
                "menge": 3000,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [],
        "gewuerze": [
            {
                "name": "Nitrat-Pökelsalz",
                "menge": 15,
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
                "name": "Muskat",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 40-50 Bratwürstchen",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Fleisch durch 4,5 mm Scheibe wolfen."
                    },
                    {
                        "titel": "Würzen und abfüllen",
                        "inhalt": "Pökelsalz, Pfeffer und Muskat einkneten, in Därme füllen."
                    }
                ]
            }
        ],
        "tipps": [
            "Auch für Bratwurst im Glas: Gläser ¾ voll füllen, 1 Stunde bei 90°C einwecken"
        ]
    },
    {
        "id": 6,
        "titel": "Kräuter der Provence Wurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Mediterrane Grillwurst mit Thymian, Rosmarin, Salbei und Wacholder",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 4000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter",
                "menge": 3000,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer",
                "menge": 2,
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
                "name": "Thymian",
                "menge": 7.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Rosmarin",
                "menge": 7.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Salbei",
                "menge": 3.75,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Petersilie",
                "menge": 3.75,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Liebstöckel",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Zitronenabrieb",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Wacholderbeeren (gemörsert)",
                "menge": 0.75,
                "einheit": "Stk.",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "24/26",
            "menge": "ca. 16 m für 4 kg"
        },
        "ausgabe": "ca. 50-60 Würstchen",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Fleisch in Würfel schneiden, kühlen, wolfen."
                    },
                    {
                        "titel": "Würzen und abfüllen",
                        "inhalt": "Alle Kräuter und Gewürze einkneten, in Darm 24/26 füllen."
                    }
                ]
            }
        ],
        "tipps": [
            "Frische Kräuter verwenden: doppelte Menge nehmen",
            "Wacholderbeeren immer frisch mörsern"
        ]
    },
    {
        "id": 7,
        "titel": "Mexikanische Bratwurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Feurige Bratwurst mit Mais, geräucherter Paprika, Habanero und Koriander",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 2000
        },
        "fleischsorten": [
            {
                "name": "Schweinenacken",
                "menge": 1500,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Mais (kleine Dose)",
                "menge": 2,
                "einheit": "Dosen"
            },
            {
                "name": "Geräucherte Paprika (Glas, gar)",
                "menge": 1,
                "einheit": "Glas"
            },
            {
                "name": "Habanero Chili",
                "menge": 1,
                "einheit": "Stück"
            }
        ],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 16,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarze Pfefferkörner",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Chilipulver",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprikapulver edelsüß",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprikapulver geräuchert",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Koriander",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "30/32",
            "menge": "ca. 4 m für 2 kg"
        },
        "ausgabe": "ca. 12-15 Würste (15 cm)",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Fleisch sehr kalt stellen",
                        "inhalt": "Fleisch parieren, zerkleinern, Speck gefroren / Fleisch angefroren halten."
                    },
                    {
                        "titel": "Einlagen vorbereiten",
                        "inhalt": "Habanero fein hacken, Paprika aus dem Glas fein hacken."
                    }
                ]
            },
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Fleisch durch grobe Lochscheibe drehen. Gewürze, Habanero, Mais und Paprika unterheben und gut verkneten."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Darm aufziehen, gleichmäßig befüllen (nicht zu fest). Zu 15 cm Würsten abdrehen."
                    }
                ]
            }
        ],
        "tipps": [
            "Einen Tag im Kühlschrank durchziehen oder vakuumieren und einfrieren",
            "Fleischmasse nie über 5°C steigen lassen"
        ]
    },
    {
        "id": 8,
        "titel": "Paprika-Grillwurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Klassische Paprika-Grillwurst mit frischem Knoblauch",
        "quelle": "BRat und Grillwurst",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Mageres Schweinefleisch",
                "menge": 800,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch (mit Fleisch)",
                "menge": 200,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Knoblauch (frisch)",
                "menge": 5,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 25,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer (gemahlen)",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß (gemahlen)",
                "menge": 11,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweine- oder Schafsdarm",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 5-6 Würstchen (20-25 cm)",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Fleisch, Bauch und Knoblauch gemeinsam durch 4,5 mm Scheibe wolfen."
                    },
                    {
                        "titel": "Würzen und abfüllen",
                        "inhalt": "Gewürze gründlich einarbeiten, luftfrei in Därme füllen, 20–25 cm lang abbinden."
                    }
                ]
            }
        ],
        "tipps": [
            "Sofort grillen oder 3–4 Tage kalt räuchern"
        ]
    },
    {
        "id": 9,
        "titel": "Paprika-Grillwurst (NPS-Version)",
        "kategorie": "Bratwurst",
        "beschreibung": "Paprika-Grillwurst mit Nitritpökelsalz für längere Haltbarkeit und Rauchoption",
        "quelle": "Wurstmachen Mai 2019",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Mageres Schweinefleisch",
                "menge": 800,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 200,
                "einheit": "g"
            }
        ],
        "zutaten": [],
        "gewuerze": [
            {
                "name": "NPS",
                "menge": 25,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer (gemahlen)",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß",
                "menge": 15,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch Granulat",
                "menge": 7,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweine- oder Schafsdarm (Saitlinge)",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 5-6 Würste (20-25 cm)",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Fleisch durch 4,5 mm Scheibe drehen. Gewürze zugeben und mit Küchenmaschine zu guter Bindung vermengen."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Luftfrei in Schweine- oder Schafsdärme füllen, 20–25 cm lang abbinden."
                    }
                ]
            }
        ],
        "tipps": [
            "Nach dem Ablüften 3–4 mal 12 Stunden kalt räuchern für Pfefferbeißer-Charakter"
        ]
    },
    {
        "id": 10,
        "titel": "Salsicca Wurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Italienische Salsicca mit Fenchel, Koriander und Rosenpaprika",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 4000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter",
                "menge": 2800,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 1200,
                "einheit": "g"
            }
        ],
        "zutaten": [],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 17.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Weißer Pfeffer",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Fenchelsaat (geschrotet)",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Koriander (gemahlen)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Rosenpaprika",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskatnuss",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "28/30",
            "menge": "ca. 10 m für 4 kg"
        },
        "ausgabe": "ca. 40-50 Würstchen",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen und würzen",
                        "inhalt": "Fleisch kühlen, wolfen, alle Gewürze einkneten."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedarm 28/30 füllen und abdrehen."
                    }
                ]
            }
        ],
        "tipps": [
            "Fenchelsaat frisch schroten für maximales Aroma"
        ]
    },
    {
        "id": 11,
        "titel": "Tomaten-Mozzarella Wurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Mediterrane Bratwurst mit getrockneten Tomaten, Mozzarella und Oliven",
        "quelle": "Grill u. Bratwurst",
        "basisMenge": {
            "gesamt": 2000
        },
        "fleischsorten": [
            {
                "name": "Schweinenacken",
                "menge": 1500,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Getrocknete Tomaten (in Olivenöl)",
                "menge": 200,
                "einheit": "g"
            },
            {
                "name": "Mozzarella",
                "menge": 125,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Meersalz",
                "menge": 17.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Oregano",
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
                "name": "Paprika edelsüß",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "30/32",
            "menge": "ca. 4 m für 2 kg"
        },
        "ausgabe": "ca. 12-14 Würste (15 cm)",
        "schritte": [
            {
                "gruppe": "Vorbereitung (Vortag)",
                "schritte": [
                    {
                        "titel": "Tomaten einlegen",
                        "inhalt": "Getrocknete Tomaten einen Tag vorher in Olivenöl einlegen und quellen lassen."
                    }
                ]
            },
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten",
                        "inhalt": "Bauch und Nacken sehr kalt stellen (Speck gefroren, Fleisch angefroren)."
                    },
                    {
                        "titel": "Gewürze einarbeiten und wolfen",
                        "inhalt": "Gewürze über das Fleisch geben, vermengen, gemeinsam mit Tomaten durch feine Lochscheibe drehen."
                    },
                    {
                        "titel": "Mozzarella unterheben",
                        "inhalt": "Mozzarellawürfel unter die gewolfte Masse heben, gut verkneten. Temperatur kontrollieren!"
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Gleichmäßig in Darm füllen (nicht zu fest), zu 15 cm Würsten abdrehen."
                    }
                ]
            }
        ],
        "tipps": [
            "Einlagen müssen sehr kalt sein – sonst verschmiert der Mozzarella",
            "Einen Tag im Kühlschrank durchziehen lassen"
        ]
    },
    {
        "id": 12,
        "titel": "Thüringer Rostbratwurst (original)",
        "kategorie": "Bratwurst",
        "beschreibung": "Überliefertes Rezept ohne Zusätze – mit Ei und Milch, wie bei der Hausschlachtung",
        "quelle": "BRat und Grillwurst",
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
                "name": "Schweinebauch (50%)",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Eier",
                "menge": 4,
                "einheit": "Stück"
            },
            {
                "name": "Kalte Milch",
                "menge": 250,
                "einheit": "ml"
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
        "ausgabe": "ca. 8-10 Würstchen",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Fleisch wolfen."
                    },
                    {
                        "titel": "Würzen und binden",
                        "inhalt": "Gewürze, Eier und kalte Milch zugeben und kneten bis das Brät bindet."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedärme füllen und abdrehen."
                    }
                ]
            }
        ],
        "tipps": [
            "Eier und Milch verbinden ohne Zusatzstoffe",
            "Direkt auf dem Rost grillen – kein Fett nötig"
        ]
    },
    {
        "id": 44,
        "titel": "Bärlauchbratwurst (roh, grob)",
        "kategorie": "Bratwurst",
        "beschreibung": "Grobe Bärlauchbratwurst zum Frischverzehr, mit Olivenöl und frischem Bärlauch",
        "quelle": "BRat und Grillwurst",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweinebauch",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Bärlauch frisch",
                "menge": 4,
                "einheit": "EL"
            },
            {
                "name": "Olivenöl",
                "menge": 3,
                "einheit": "EL"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz (Kochsalz)",
                "menge": 20,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer weiß, gemahlen",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel, gemahlen",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "30/32",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Bratwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten",
                        "inhalt": "Bauchfleisch von Knochen lösen, in wolfgerechte Stücke schneiden. Bärlauch mit Mixer pürieren, Salz und Olivenöl zugeben."
                    },
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Fleisch durch 3mm und 5mm Scheibe wolfen. Mit Gewürzen und Bärlauch gut vermengen, abschmecken."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedärme 30/32 füllen. Sofort verbrauchen oder vakuumiert einfrieren."
                    }
                ]
            }
        ],
        "tipps": [
            "Zum sofortigen Verzehr oder vakuumiert einfrieren – kein NPS, daher keine Haltbarkeit"
        ]
    },
    {
        "id": 51,
        "titel": "Chili-Knoblauch Bratwurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Scharfe Bratwurst mit frischem Thai-Chili, Cayenne und reichlich frischem Knoblauch",
        "quelle": "Wursten",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweinefleisch",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Knoblauch frisch",
                "menge": 10,
                "einheit": "g"
            },
            {
                "name": "Thai Chili frisch",
                "menge": 10,
                "einheit": "g"
            },
            {
                "name": "Cayenne Chili frisch",
                "menge": 30,
                "einheit": "g"
            },
            {
                "name": "Petersilie frisch",
                "menge": 10,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Meersalz fein",
                "menge": 18,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "26/28",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Bratwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Vorbereiten",
                        "inhalt": "Knoblauch fein hacken. Chili und Petersilie klein schneiden."
                    },
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Fleisch wolfen (5mm). Salz und alle Zutaten zugeben, gut durchmengen."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedärme 26/28 abfüllen."
                    }
                ]
            }
        ],
        "tipps": [
            "Je mehr Cayenne desto schärfer – nach Geschmack anpassen"
        ]
    },
    {
        "id": 52,
        "titel": "Käse-Paprika Bratwurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Bratwurst mit gewürfeltem Edamer und frischer roter Paprika sowie 7-Kräuter-Mischung",
        "quelle": "Wursten",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweinefleisch",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Rote Paprika (klein gewürfelt)",
                "menge": 1,
                "einheit": "Stück"
            },
            {
                "name": "Edamer (klein gewürfelt)",
                "menge": 300,
                "einheit": "g"
            },
            {
                "name": "7-Kräuter-Mischung gefroren",
                "menge": 1,
                "einheit": "Pak."
            },
            {
                "name": "Knoblauch frisch",
                "menge": 4,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 18,
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
                "name": "Piment",
                "menge": 1,
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
                "name": "Muskat",
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
            "typ": "Schweinedarm",
            "kaliber": "26/28",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Bratwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Vorbereiten",
                        "inhalt": "Paprika klein würfeln. Käse klein würfeln."
                    },
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Fleisch wolfen (5mm). Salz und Gewürze abwiegen. Alle Zutaten gut durchmengen."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedärme 26/28 abfüllen."
                    }
                ]
            }
        ],
        "tipps": [
            "Käse und Paprika unterheben – nicht mit dem Fleisch zusammen wolfen"
        ]
    },
    {
        "id": 53,
        "titel": "Ingwer-Ahornsirup Bratwurst",
        "kategorie": "Bratwurst",
        "beschreibung": "Außergewöhnliche Bratwurst mit frischem Ingwer und Ahornsirup – süß-scharf",
        "quelle": "Wursten",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweinefleisch",
                "menge": 1000,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Frischer Ingwer",
                "menge": 100,
                "einheit": "g"
            },
            {
                "name": "Ahornsirup",
                "menge": 50,
                "einheit": "g"
            },
            {
                "name": "Knoblauch frisch",
                "menge": 10,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 18,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Koriander",
                "menge": 1,
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
                "name": "Kardamom",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Piment",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "26/28",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Bratwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Ingwersaft gewinnen",
                        "inhalt": "Ingwer schälen, durch feinen Fleischwolf lassen. Durch Sieb auspressen und Saft kurz einkochen. Kalt stellen."
                    },
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Fleisch wolfen (5mm). Salz, Gewürze, Ingwersaft und Ahornsirup zugeben, gut durchmengen."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Schweinedärme 26/28 abfüllen."
                    }
                ]
            }
        ],
        "tipps": [
            "Ingwersaft vor Verwendung gut kühlen damit Fleisch nicht zu warm wird"
        ]
    },
    {
        "id": 67,
        "titel": "Bratwurst nach Bauern-Art",
        "kategorie": "Bratwurst",
        "beschreibung": "Rustikale Bratwurst mit Schulter, Bauch und Backenfleisch, gewürzt mit Weißwein und Majoran",
        "quelle": "Bratwurst nach Bauern.pdf",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter",
                "menge": 600,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch (ohne Schwarte)",
                "menge": 200,
                "einheit": "g"
            },
            {
                "name": "Backenfleisch",
                "menge": 200,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Weißwein",
                "menge": 15,
                "einheit": "ml",
                "proKg": true
            },
            {
                "name": "Eisschnee",
                "menge": null,
                "einheit": "etwas"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 18,
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
                "name": "Macis",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Majoran",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "26/28",
            "menge": "passend"
        },
        "ausgabe": "ca. 8-10 Würste",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Fleisch würfeln und durch die 3 mm Scheibe drehen."
                    },
                    {
                        "titel": "Würzen und mischen",
                        "inhalt": "Mit Gewürzen, Weißwein und Eisschnee gut vermengen bis eine spürbare Bindung entsteht."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Im Wurstfüller in Schweinedarm 26/28 füllen und auf gewünschte Länge abdrehen."
                    }
                ]
            }
        ],
        "tipps": [
            "Frisch gegrillt oder gebraten am besten",
            "Temperatur auf dem Grill nicht zu hoch, damit sie nicht aufplatzen"
        ]
    },

    // ── Neue Bratwurst-Rezepte ────────────────────────────────

    {
        id: 106,
        titel: "Bier-Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Saftige Bratwurst mit Stark- oder Bockbier und eingeweichtem Toastbrot – ideal zum Grillen oder Braten.",
        quelle: "Biergriller.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 450, einheit: "g" },
            { name: "Schweineschulter", menge: 300, einheit: "g" },
            { name: "Rindfleisch (schier)", menge: 250, einheit: "g" }
        ],
        zutaten: [
            { name: "Stark- oder Bockbier", menge: 100, einheit: "ml" },
            { name: "Toastbrot ohne Rinde (in Bier getränkt)", menge: 100, einheit: "g" },
            { name: "Eisschnee", menge: null, einheit: "etwas" }
        ],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Piment", menge: 1.5, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Weite Schafsaitlinge oder Schweinedarm", kaliber: null, menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Einweichen", inhalt: "Toastbrot würfeln und mit Bier tränken." },
                    { titel: "Wolfen", inhalt: "Fleisch mit den Gewürzen durch die 3-4 mm Scheibe wolfen." },
                    { titel: "Mengen", inhalt: "Fleisch, getränktes Toastbrot und etwas Eis gründlich vermengen." },
                    { titel: "Füllen", inhalt: "In weite Schafsaitlinge oder Schweinedarm füllen, auf gewünschte Länge abdrehen." }
                ]
            }
        ],
        tipps: [
            "Kurz brühen, frisch grillen oder braten – alles möglich",
            "Selbstgemachte Grillwürste lassen sich sehr gut im Vakuum einfrieren"
        ]
    },

    {
        id: 107,
        titel: "Grillwurst zu meiner Kindheit",
        kategorie: "Bratwurst",
        beschreibung: "Nostalgische Grillwurst mit Schulter, Backe und eiskalter Milch – auch paniert ein Genuss.",
        quelle: "Grillwurst zu meiner Kindheit.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 500, einheit: "g" },
            { name: "Schweinebacke", menge: 350, einheit: "g" }
        ],
        zutaten: [
            { name: "Milch, eiskalt", menge: 150, einheit: "ml" },
            { name: "Eier, frisch", menge: 2, einheit: "Stk." }
        ],
        gewuerze: [
            { name: "Salz", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel, gemahlen", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28", menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen & Mengen", inhalt: "Fleisch mit den Gewürzen gut mischen und durch die 4-5 mm Scheibe wolfen. Frische Eier und sehr kalte Milch zugeben, alles kräftig gut vermengen." },
                    { titel: "Füllen", inhalt: "In 28er Schweinedarm füllen." },
                    { titel: "Garen", inhalt: "Frisch grillen oder kurz brühen." }
                ]
            }
        ],
        tipps: [
            "Auch paniert ein Genuss: in Ei und Paniermehl wenden, langsam braten",
            "Enthält Frischei – kühl lagern und zeitnah verbrauchen"
        ]
    },
    {
        "id": 118,
        "titel": "Bärlauchbratwurst Version 2 (mit Ei)",
        "kategorie": "Bratwurst",
        "beschreibung": "Bärlauchbratwurst mit Bauch und Nacken, Eier und Gewürzen – gebrüht bei 75–80°C",
        "quelle": "Bärlauch - Bratwurst - Version 2.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Schweinebauch (ohne Schwarte)", "menge": 500, "einheit": "g" },
            { "name": "Schweinenacken", "menge": 500, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Eier", "menge": 2, "einheit": "Stück" },
            { "name": "Bärlauch (frisch oder TK)", "menge": 3, "einheit": "g", "proKg": true }
        ],
        "gewuerze": [
            { "name": "Salz", "menge": 18, "einheit": "g", "proKg": true },
            { "name": "Pfeffer", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Koriander", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Muskat", "menge": 2, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Schweinedünndarm", "kaliber": "28/30", "menge": "passend" },
        "ausgabe": "ca. 1 kg Bratwurst",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Wolfen", "inhalt": "Fleisch durch den Wolf lassen (ohne Eier und Gewürze)." },
                    { "titel": "Mischen", "inhalt": "Eier und Gewürze zugeben und solange mischen bis eine Bindung entsteht." },
                    { "titel": "Füllen und garen", "inhalt": "In 28/30er Darm abfüllen. Bei 75–80°C ca. 30 Minuten garen." }
                ]
            }
        ],
        "tipps": ["Enthält Frischei – kühl lagern und zeitnah verbrauchen"]
    },
    {
        "id": 119,
        "titel": "Bärlauch-Grillwurst ala Kajo",
        "kategorie": "Bratwurst",
        "beschreibung": "Feine Brühwurst mit frischem Bärlauch, Kutter und Milch – brühfertige Grillwurst",
        "quelle": "Bärlauch Grillwurst ala Kajo 01.04.2020.docx",
        "basisMenge": { "gesamt": 2100 },
        "fleischsorten": [
            { "name": "Schweineschulter", "menge": 900, "einheit": "g" },
            { "name": "Schweinenacken", "menge": 450, "einheit": "g" },
            { "name": "Schweinebauch", "menge": 450, "einheit": "g" },
            { "name": "Rindfleisch", "menge": 150, "einheit": "g" },
            { "name": "Fetter Speck", "menge": 150, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Bärlauch (frisch)", "menge": 100, "einheit": "g" },
            { "name": "Eiskalte Milch", "menge": 250, "einheit": "ml" },
            { "name": "Eiswasser", "menge": 420, "einheit": "ml" },
            { "name": "Milchpulver", "menge": 2.5, "einheit": "TL" }
        ],
        "gewuerze": [
            { "name": "Salz", "menge": 34, "einheit": "g", "proKg": false },
            { "name": "Pfeffer weiß", "menge": 10, "einheit": "g", "proKg": false },
            { "name": "Majoran", "menge": 4, "einheit": "g", "proKg": false },
            { "name": "Piment", "menge": 2, "einheit": "g", "proKg": false },
            { "name": "Kardamon", "menge": 1, "einheit": "g", "proKg": false },
            { "name": "Muskat", "menge": 2, "einheit": "g", "proKg": false },
            { "name": "Zitronenabrieb", "menge": 1, "einheit": "g", "proKg": false }
        ],
        "darm": { "typ": "Schweinedünndarm", "kaliber": "22/24", "menge": "passend" },
        "ausgabe": "ca. 2,1 kg Grillwurst",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Fleisch vorbereiten", "inhalt": "Fleisch gut kühlen, in Würfel schneiden, durch 2–3 mm Scheibe wolfen." },
                    { "titel": "Kuttern", "inhalt": "Gewürze unterheben und in den Kutter geben. Ankuttern, dann Milch und Eiswasser zugeben und bis 5°C auskuttern." },
                    { "titel": "Füllen und brühen", "inhalt": "Masse in 22/24er Därme füllen. Bei 70–75°C in Salzwasser (17g/L) 30 Minuten ziehen lassen. Abkühlen und vakuumieren." }
                ]
            }
        ],
        "tipps": [
            "Rindfleisch kann weggelassen werden – dann entsprechende Menge Bauch zugeben",
            "Direkt grillen oder einfrieren"
        ]
    },
    {
        "id": 120,
        "titel": "Bratwurst alle Sorten (Grundrezept mit Varianten)",
        "kategorie": "Bratwurst",
        "beschreibung": "Vielseitiges Bratwurstrezept mit Gyros-, Knobi- und Chilivariante – ca. 45–50 Bratwürstchen",
        "quelle": "Bratwurst alle Sorte.pdf",
        "basisMenge": { "gesamt": 4000 },
        "fleischsorten": [
            { "name": "Nackenbraten", "menge": 1000, "einheit": "g" },
            { "name": "Schweinebauch", "menge": 1000, "einheit": "g" },
            { "name": "Krustenbraten", "menge": 2000, "einheit": "g" }
        ],
        "zutaten": [],
        "gewuerze": [
            { "name": "Salz", "menge": 20, "einheit": "g", "proKg": true },
            { "name": "Bunter Pfeffer (frisch gemahlen)", "menge": 4, "einheit": "g", "proKg": true },
            { "name": "Currypulver", "menge": 0.8, "einheit": "g", "proKg": true },
            { "name": "Paprika", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Senfkörner (gemahlen)", "menge": 4, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Schweinedarm", "kaliber": "beliebig", "menge": "passend" },
        "ausgabe": "ca. 45–50 Bratwürstchen",
        "schritte": [
            {
                "gruppe": "Varianten",
                "schritte": [
                    { "titel": "Gyroswurst", "inhalt": "10g Salz weniger, dafür 10g Gyrosgewürz extra pro kg." },
                    { "titel": "Knoblauchbratwurst", "inhalt": "Zusätzlich 1,5g Knoblauchpulver pro kg." },
                    { "titel": "Chiliwurst", "inhalt": "Zusätzlich 0,6g Chili pro kg." }
                ]
            }
        ],
        "tipps": ["Auch als Basis für Rohwurst/Knacker verwendbar: 20g Pökelsalz statt Kochsalz, Chiliflocken und Senfkörner ungemahlen zugeben"]
    },
    {
        "id": 121,
        "titel": "Einfache Grillwurst (Grundrezept)",
        "kategorie": "Bratwurst",
        "beschreibung": "Klassische selbstgemachte Grillwurst aus Schulter und Bauch – einfaches Grundrezept für 10 dicke Bratwürste",
        "quelle": "Grillwurst.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Schweineschulter", "menge": 750, "einheit": "g" },
            { "name": "Fetter Schweinebauch", "menge": 250, "einheit": "g" }
        ],
        "zutaten": [],
        "gewuerze": [
            { "name": "Meersalz", "menge": 19, "einheit": "g", "proKg": true },
            { "name": "Schwarzer Pfeffer", "menge": 4.5, "einheit": "g", "proKg": true },
            { "name": "Muskatnuss oder Macis", "menge": 0.75, "einheit": "g", "proKg": true },
            { "name": "Majoran", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Kümmel", "menge": 1, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Schweinedarm", "kaliber": "beliebig", "menge": "2m je kg" },
        "ausgabe": "10 dicke Bratwürste",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Fleisch anfrieren", "inhalt": "4 Stunden anfrieren – alle Zutaten und Utensilien so kalt wie möglich halten." },
                    { "titel": "Wolfen und mischen", "inhalt": "Fleisch durch den Wolf, mit Gewürzen gut mengen." },
                    { "titel": "Füllen und grillen", "inhalt": "In Schweinedarm füllen. Bei mittlerer direkter Hitze ca. 200°C, 12–15 Minuten grillen bis Kerntemperatur 75°C." }
                ]
            }
        ],
        "tipps": ["Alle Zutaten und Utensilien müssen so kalt wie möglich sein"]
    },
    {
        "id": 122,
        "titel": "Sommerliche Bratwurst à la André Stalder",
        "kategorie": "Bratwurst",
        "beschreibung": "Frische Sommerbratwurst mit Basilikum, Petersilie und Koriander – fruchtig mit Zitronenabrieb",
        "quelle": "Sommer Bratwurst à la André Stalder.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Schweineschulter (70%)", "menge": 700, "einheit": "g" },
            { "name": "Bauchspeck (30%)", "menge": 300, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Basilikum frisch", "menge": 20, "einheit": "g" },
            { "name": "Petersilie frisch", "menge": 10, "einheit": "g" },
            { "name": "Koriander frisch", "menge": 20, "einheit": "g" },
            { "name": "Milch", "menge": 100, "einheit": "ml" },
            { "name": "Abrieb von ½ Zitrone", "menge": 0.5, "einheit": "Stück" },
            { "name": "Backpulver", "menge": 1, "einheit": "g" }
        ],
        "gewuerze": [
            { "name": "Salz", "menge": 18, "einheit": "g", "proKg": true },
            { "name": "Pfeffer", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Muskat", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Ingwerpulver", "menge": 2, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Schweinedünndarm", "kaliber": "28/30", "menge": "passend" },
        "ausgabe": "ca. 1 kg Sommerbratwurst",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Kräuter hacken", "inhalt": "Kräuter fein hacken oder zusammen mit dem Fleisch durch den Wolf lassen." },
                    { "titel": "Wolfen", "inhalt": "Fleisch durch 6mm Scheibe wolfen." },
                    { "titel": "Mischen", "inhalt": "Alles gut vermengen bis es gut bindet. Kühl halten." },
                    { "titel": "Füllen", "inhalt": "Masse in 28/30er Därme füllen." }
                ]
            }
        ],
        "tipps": ["Immer achten dass die Masse schön kühl bleibt"]
    },
    {
        "id": 123,
        "titel": "Thüringer Grillwurst ala Kajo",
        "kategorie": "Bratwurst",
        "beschreibung": "Feine gebrühte Thüringer Grillwurst mit Kutter, Milch und Eiswasser – klassische Rezeptur von Kajo",
        "quelle": "Thüringer Grillwurst ala Kajo 01.04.2020.docx",
        "basisMenge": { "gesamt": 2100 },
        "fleischsorten": [
            { "name": "Schweineschulter (75%)", "menge": 1575, "einheit": "g" },
            { "name": "Schweinebauch (25%)", "menge": 525, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Eiskalte Milch", "menge": 252, "einheit": "ml" },
            { "name": "Eiswasser", "menge": 420, "einheit": "ml" },
            { "name": "Milchpulver", "menge": 1, "einheit": "TL" }
        ],
        "gewuerze": [
            { "name": "Kochsalz", "menge": 24, "einheit": "g", "proKg": true },
            { "name": "Pfeffer", "menge": 5, "einheit": "g", "proKg": true },
            { "name": "Kümmel gestoßen", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Muskat", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Macis", "menge": 0.5, "einheit": "g", "proKg": true },
            { "name": "Kümmel gemahlen", "menge": 1, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Schweinedünndarm", "kaliber": "22/24", "menge": "passend" },
        "ausgabe": "ca. 2,1 kg Grillwurst",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Fleisch vorbereiten", "inhalt": "Fleisch gut kühlen, in Würfel schneiden, durch 2–3 mm Scheibe wolfen." },
                    { "titel": "Kuttern", "inhalt": "Gewürze unterheben und in den Kutter geben. Ankuttern, dann Milch und Eiswasser zugeben und bis 5°C auskuttern." },
                    { "titel": "Füllen und brühen", "inhalt": "Masse in 22/24er Därme füllen. Bei 70–75°C in Salzwasser (16g/L) 30 Minuten ziehen lassen, abkühlen." }
                ]
            }
        ],
        "tipps": [
            "Sofort grillen oder vakuumieren und einfrieren",
            "Milch und Eiswasser immer sehr kalt verwenden"
        ]
    },
    {
        "id": 124,
        "titel": "Thüringer Rostbratwurst (gebrüht, mit Knoblauch)",
        "kategorie": "Bratwurst",
        "beschreibung": "Thüringer Rostbratwurst gebrüht mit Knoblauch, Eier und Milch – kräftige Hausmacher-Variante",
        "quelle": "Thüringer Rostbratwurst, gebrüht.docx",
        "basisMenge": { "gesamt": 3000 },
        "fleischsorten": [
            { "name": "Schweinebauch", "menge": 3000, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Milch", "menge": 300, "einheit": "ml" },
            { "name": "Eier", "menge": 3, "einheit": "Stück" },
            { "name": "Knoblauchzehen", "menge": 6, "einheit": "Stück" }
        ],
        "gewuerze": [
            { "name": "Meersalz", "menge": 18, "einheit": "g", "proKg": true },
            { "name": "Schwarzer Pfeffer", "menge": 5, "einheit": "g", "proKg": true },
            { "name": "Kümmel gemahlen", "menge": 5, "einheit": "g", "proKg": true },
            { "name": "Muskatnuss", "menge": 5, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Schweinedünndarm", "kaliber": "28/30 oder 24/26", "menge": "10–12m" },
        "ausgabe": "ca. 3 kg Bratwurst",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Wolfen und mischen", "inhalt": "Fleisch wolfen. Eier, Milch und Gewürze gut mengen." },
                    { "titel": "Füllen und brühen", "inhalt": "In Darm füllen. Pro mm Dicke 1 Minute bei 72°C brühen (ca. 25 Minuten)." }
                ]
            }
        ],
        "tipps": []
    },
    {
        id: 153,
        titel: "Bier-Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Saftige Bratwurst mit Bockbier und getränktem Toastbrot – als Grillwurst oder frisch gebraten",
        quelle: "Biergriller.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 450, einheit: "g" },
            { name: "Schweineschulter", menge: 300, einheit: "g" },
            { name: "Rindfleisch (mager)", menge: 250, einheit: "g" }
        ],
        zutaten: [
            { name: "Stark- oder Bockbier", menge: 100, einheit: "ml" },
            { name: "Toastbrot ohne Rinde", menge: 100, einheit: "g" },
            { name: "Eisschnee", menge: null, einheit: "etwas" }
        ],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Piment", menge: 1.5, einheit: "g", proKg: true },
            { name: "Kardamom", menge: 0.4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Weiter Schafsaitling oder Schweinedarm", kaliber: "28/32", menge: "passend" },
        ausgabe: "ca. 8-10 Würste",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Brot tränken", inhalt: "Toastbrot würfeln und mit Bier tränken." },
            { titel: "Wolfen und mischen", inhalt: "Fleisch mit Gewürzen und Brot-Bier-Mischung durch 3-4mm Scheibe wolfen. Mit Eis gründlich vermengen. In Darm füllen und abdrehen." }
        ]}],
        tipps: ["Kurz brühen oder frisch grillen/braten", "Zum Einfrieren im Vakuum ziehen"]
    },
    {
        id: 154,
        titel: "Bratwurst nach Bauern-Art",
        kategorie: "Bratwurst",
        beschreibung: "Rustikale Bratwurst mit Backen und Weißwein",
        quelle: "Bratwurst nach Bauern.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 600, einheit: "g" },
            { name: "Schweinebauch (ohne Schwarte)", menge: 200, einheit: "g" },
            { name: "Backenfleisch", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Weißwein", menge: 15, einheit: "ml" },
            { name: "Eisschnee", menge: null, einheit: "etwas" }
        ],
        gewuerze: [
            { name: "Salz", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 2, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "26/28", menge: "passend" },
        ausgabe: "ca. 8-10 Würste",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Fleisch durch 3mm Scheibe wolfen. Mit Gewürzen und Eis vermengen bis Bindung entsteht. In 26/28er Darm füllen." }
        ]}],
        tipps: ["Grilltemperatur nicht zu heiß – frische Grillwürste platzen schnell"]
    },
    {
        id: 155,
        titel: "Grillwurst zu meiner Kindheit",
        kategorie: "Bratwurst",
        beschreibung: "Feine Grillwurst mit Milch, Eiern und Majoran",
        quelle: "Grillwurst zu meiner Kindheit.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 500, einheit: "g" },
            { name: "Schweinebacke", menge: 350, einheit: "g" },
            { name: "Milch (eiskalt)", menge: 150, einheit: "ml" }
        ],
        zutaten: [{ name: "Eier", menge: 2, einheit: "Stück" }],
        gewuerze: [
            { name: "Salz", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28", menge: "passend" },
        ausgabe: "ca. 8-10 Würste",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Fleisch mit Gewürzen mischen, durch 4-5mm Scheibe wolfen. Eier und Milch zugeben, kräftig vermengen. In 28er Darm füllen." }
        ]}],
        tipps: ["Variation: In Ei tauchen, Paniermehl wälzen und langsam braten"]
    },
    {
        id: 156,
        titel: "Bratwurst Parmesan-Zitrone",
        kategorie: "Bratwurst",
        beschreibung: "Italo-Bratwurst mit Parmesan, Petersilie, Chili und Zitronenabrieb im Riesling",
        quelle: "Bratwurst -  Parmesan - Zitrone.docx",
        basisMenge: { gesamt: 4000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 2800, einheit: "g" },
            { name: "Schweinebauch", menge: 1200, einheit: "g" }
        ],
        zutaten: [
            { name: "Petersilie", menge: 300, einheit: "g" },
            { name: "Parmesan (gerieben, z.B. Grand Padano)", menge: 600, einheit: "g" },
            { name: "Riesling Wein", menge: 400, einheit: "ml" },
            { name: "Abrieb von 2 Bio-Zitronen", menge: null, einheit: "" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 15, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Chiliflocken (gemörsert)", menge: 2, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "10m" },
        ausgabe: "ca. 20-25 Würste",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen, mit allen Zutaten gut vermengen. In 28/30er Darm füllen." }
        ]}],
        tipps: []
    },
    {
        id: 157,
        titel: "Bratwurst ala Pappa",
        kategorie: "Bratwurst",
        beschreibung: "Klassische Bratwurst – auch als Wurst im Glas geeignet",
        quelle: "Bratwurst ala Pappa.docx",
        basisMenge: { gesamt: 4000 },
        fleischsorten: [
            { name: "Schweineschulter", menge: 3000, einheit: "g" },
            { name: "Schweinebauch", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 15, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Muskat", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm oder Einmachgläser", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 15-20 Würste",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen", inhalt: "Durch 4,5mm Wolfscheibe drehen, würzen und gut vermengen." },
            { titel: "Wurst im Glas", inhalt: "Variante: In Gläser füllen (nur ¾ voll), 1 Stunde bei 90°C einwecken." }
        ]}],
        tipps: ["Rezept eignet sich auch für Wurst im Glas"]
    },
    {
        id: 158,
        titel: "Salsicca Wurst",
        kategorie: "Bratwurst",
        beschreibung: "Italienische Salsicca mit Fenchelsaat und Rosenpaprika",
        quelle: "Salsicca Wurst.docx",
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
            { name: "Koriander gemahlen", menge: 1, einheit: "g", proKg: true },
            { name: "Rosenpaprika", menge: 1, einheit: "g", proKg: true },
            { name: "Muskatnuss", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "10m" },
        ausgabe: "ca. 20 Würste",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen, mit Gewürzen gut vermengen. In 28/30er Darm füllen." }
        ]}],
        tipps: []
    },
    {
        id: 159,
        titel: "Tomaten-Mozzarella Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Mediterrane Bratwurst mit getrockneten Tomaten, Mozzarella und Oliven",
        quelle: "Tomaten Morzzarella Wurst.docx",
        basisMenge: { gesamt: 2000 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 1500, einheit: "g" },
            { name: "Schweinebauch", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Getrocknete Tomaten", menge: 200, einheit: "g" },
            { name: "Getrocknete Oliven", menge: 50, einheit: "g" },
            { name: "Mozzarella", menge: 125, einheit: "g" },
            { name: "Olivenöl (zum Einlegen)", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 17.5, einheit: "g", proKg: true },
            { name: "Schwarze Pfefferkörner", menge: 2, einheit: "g", proKg: true },
            { name: "Oregano", menge: 2, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "4m" },
        ausgabe: "ca. 12-15 Würste à 15cm",
        schritte: [
            { gruppe: "Vorbereitung", schritte: [
                { titel: "Einlegen", inhalt: "Tomaten und Oliven einen Tag vorher in Olivenöl einlegen und quellen lassen." }
            ]},
            { gruppe: "Zubereitung", schritte: [
                { titel: "Würzen und wolfen", inhalt: "Gewürze über das Fleisch geben. Tomaten und Mozzarella fein würfeln, zugeben. Durch feine Scheibe wolfen. Nochmals gut vermengen." },
                { titel: "Füllen", inhalt: "Luftblasenfrei in 30/32er Darm pressen, 15cm Würste abdrehen." }
            ]}
        ],
        tipps: ["Einen Tag vor dem Grillen im Kühlschrank durchziehen lassen oder vakuumieren"]
    },
    {
        id: 160,
        titel: "Kulen ala Hans Behren",
        kategorie: "Bratwurst",
        beschreibung: "Südosteuropäischer Kulen aus Schwein und Rind mit Paprika – gepresst und luftgetrocknet",
        quelle: "Kuhlen Wurst vo-WPS Office.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 500, einheit: "g" },
            { name: "Mageres Rindfleisch", menge: 500, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Pökelsalz", menge: 28, einheit: "g", proKg: true },
            { name: "Pfeffermischung", menge: 4, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 4, einheit: "g", proKg: true },
            { name: "Rosenpaprika edelsüß", menge: 16, einheit: "g", proKg: true },
            { name: "Koriander (ganz)", menge: 1, einheit: "g", proKg: true },
            { name: "Muskatblüte gemahlen", menge: 1, einheit: "g", proKg: true },
            { name: "Wacholderbeeren (geschrotet)", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm", kaliber: "ca. 10cm Durchmesser, 30cm lang", menge: "passend" },
        ausgabe: "ca. 1 kg Kulen",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und würzen", inhalt: "Fleisch mittelfein wolfen, mit NPS und Gewürzen vermengen." },
            { titel: "Füllen und trocknen", inhalt: "In Kunstdärme füllen. Zum leichteren Trocknen pressen. Alle 2 Wochen kontrollieren." }
        ]}],
        tipps: ["Fleisch von Schweinen mit Schlachtgewicht 130-160 kg empfohlen"]
    },

    {
        id: 194,
        titel: "Kräuter der Provence Wurst",
        kategorie: "Bratwurst",
        beschreibung: "Frische Kräuterwurst mit provenzalischen Kräutern – Thymian, Rosmarin, Salbei und Liebstöckel.",
        quelle: "Sonstiges/Kräuter der Provence Wurst.docx",
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
            { name: "Thymian (getrocknet oder frisch)", menge: 7.5, einheit: "g", proKg: true },
            { name: "Rosmarin (getrocknet oder frisch)", menge: 7.5, einheit: "g", proKg: true },
            { name: "Salbei (getrocknet oder frisch)", menge: 3.75, einheit: "g", proKg: true },
            { name: "Petersilie (getrocknet oder frisch)", menge: 3.75, einheit: "g", proKg: true },
            { name: "Liebstöckel", menge: 4, einheit: "g", proKg: true },
            { name: "Zitronenabrieb", menge: 0.5, einheit: "g", proKg: true },
            { name: "Wacholderbeeren (gemörsert)", menge: 0.75, einheit: "Stück", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "24/26", menge: "16 m" },
        ausgabe: "ca. 4 kg Kräuterwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und würzen", inhalt: "Fleisch wolfgerecht schneiden. Alle Gewürze und Kräuter gut einmischen. Wer mag: frische Kräuter verwenden." },
            { titel: "Füllen", inhalt: "In Schweinedarm 24/26 füllen." }
        ]}],
        tipps: ["Kräuter können durch frische ersetzt werden"]
    },

    {
        id: 195,
        titel: "Bärlauch-Grillwurst",
        kategorie: "Bratwurst",
        beschreibung: "Würzige Grillwurst mit frischem Bärlauch – nur in der Bärlauch-Saison zu machen.",
        quelle: "Sonstiges/Bärlauch.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter oder Nacken", menge: 600, einheit: "g" },
            { name: "Schweinebauch", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Eiskaltes Wasser", menge: 50, einheit: "ml" },
            { name: "Frischer Bärlauch (gehackt)", menge: 20, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 22.5, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz oder bunt frisch gemahlen", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 3, einheit: "g", proKg: true },
            { name: "Magermilchpulver", menge: 2.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 1 kg Bärlauch-Grillwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen", inhalt: "Fleisch durch 3mm Scheibe wolfen." },
            { titel: "Kuttern", inhalt: "Fleisch und Bärlauch zusammen kuttern." },
            { titel: "Füllen", inhalt: "In Schweinedärme 30/32 füllen. Auf keine Luftblasen achten – ggf. mit Nadel einstechen." }
        ]}],
        tipps: [
            "Bärlauch gibt es nur kurz im Frühling – dann gleich mehr machen und einfrieren",
            "1-2 mal kalt räuchern möglich"
        ]
    },

    {
        id: 196,
        titel: "Paprika-Grillwurst",
        kategorie: "Bratwurst",
        beschreibung: "Einfache Paprika-Grillwurst aus Schwein – saftig mit edelsüßem Paprika und frischem Knoblauch.",
        quelle: "Sonstiges/Paprika.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 800, einheit: "g" },
            { name: "Schweinebauch mit Fleisch", menge: 200, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 25, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Paprika edelsüß gemahlen", menge: 11, einheit: "g", proKg: true },
            { name: "Knoblauch frisch", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Dünne Schweine- oder Schafsdärme", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 1 kg Grillwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Vorbereiten", inhalt: "Knoblauch fein hacken. Fleisch und Bauch mit 4,5mm Scheibe wolfen." },
            { titel: "Mengen", inhalt: "Alle Zutaten gründlich mit Rühr- oder Küchenmaschine vermengen." },
            { titel: "Füllen", inhalt: "Brät luftfrei in dünne Schweine- oder Schafsdärme füllen. Würste 20-25 cm lang." }
        ]}],
        tipps: ["Restliche Würste 3-4 Tage kalt räuchern für längere Haltbarkeit"]
    },
    {
        id: 228,
        titel: "Bärlauchbratwurst (einfach)",
        kategorie: "Bratwurst",
        beschreibung: "Einfache Bärlauchbratwurst aus Schweinebauch – rustikal, kräftig und aromatisch.",
        quelle: "Rezepte_Sortiert/Bratwurst",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Schweinebauch (ohne Knochen)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Bärlauch", menge: 4, einheit: "EL" },
            { name: "Olivenöl", menge: 3, einheit: "EL" }
        ],
        gewuerze: [
            { name: "Salz (Kochsalz)", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer weiß gemahlen", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Fleisch vorbereiten", inhalt: "Bauchfleisch von Knochen lösen, in wolfgerechte Stücke schneiden." },
            { titel: "Bärlauch", inhalt: "Bärlauch mit Mixer pürieren, Salz und Olivenöl zugeben." },
            { titel: "Wolfen und mengen", inhalt: "Fleisch wolfen, mit Gewürzen und Bärlauch gut vermengen, abschmecken." },
            { titel: "Füllen", inhalt: "Masse in Schweinedärme füllen." }
        ]}],
        tipps: []
    },
    {
        id: 229,
        titel: "Bärlauch-Grillwurst ala Kajo",
        kategorie: "Bratwurst",
        beschreibung: "Brühwurst-Variante der Bärlauch-Grillwurst von Kajo – fein gekuttert, in 22/24er Darm gebrüht.",
        quelle: "Rezepte_Sortiert/Bratwurst/Bärlauch Grillwurst ala Kajo 01.04.2020.docx",
        basisMenge: 2100,
        fleischsorten: [
            { name: "Schweineschulter", menge: 900, einheit: "g" },
            { name: "Schweinenacken", menge: 450, einheit: "g" },
            { name: "Schweinebauch", menge: 450, einheit: "g" },
            { name: "Rindfleisch (optional)", menge: 150, einheit: "g" },
            { name: "Fetter Speck", menge: 150, einheit: "g" }
        ],
        zutaten: [
            { name: "Bärlauch", menge: 100, einheit: "g" },
            { name: "Milchpulver", menge: 2.5, einheit: "TL" },
            { name: "Eiskalte Milch", menge: 250, einheit: "ml" },
            { name: "Eiswasser", menge: 420, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Salz", menge: 34, einheit: "g", proKg: false },
            { name: "Pfeffer weiß", menge: 10, einheit: "g", proKg: false },
            { name: "Majoran", menge: 4, einheit: "g", proKg: false },
            { name: "Piment", menge: 2, einheit: "g", proKg: false },
            { name: "Kardamom", menge: 1, einheit: "g", proKg: false },
            { name: "Muskat", menge: 2, einheit: "g", proKg: false },
            { name: "Zitronenabrieb", menge: 1, einheit: "g", proKg: false }
        ],
        darm: { typ: "Schweinedarm", kaliber: "22/24", menge: "passend" },
        ausgabe: "ca. 2,1 kg Brühwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Fleisch kühlen und wolfen", inhalt: "Fleisch gut kühlen, würfeln, durch 2-3mm Scheibe wolfen." },
            { titel: "Kuttern", inhalt: "Gewürze unterheben, in den Kutter geben, ankuttern. Dann Milch und Eiswasser zugeben und bis 5°C auskuttern." },
            { titel: "Füllen", inhalt: "Masse in 22/24er Därme füllen." },
            { titel: "Brühen", inhalt: "Bei 70-75°C in Salzwasser (17g Salz/Liter) 30 Minuten ziehen lassen." },
            { titel: "Abkühlen", inhalt: "Abkühlen und vakuumieren." }
        ]}],
        tipps: ["Rindfleisch ist optional – stattdessen diese Menge als Bauch ergänzen"]
    },
    {
        id: 230,
        titel: "Bärlauchbratwurst Version 2",
        kategorie: "Bratwurst",
        beschreibung: "Bärlauchbratwurst aus Bauch und Nacken – mit Ei, gebrüht bei 75-80°C.",
        quelle: "Rezepte_Sortiert/Bratwurst/Bärlauch - Bratwurst - Version 2.pdf",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Schweinebauch (ohne Schwarte)", menge: 500, einheit: "g" },
            { name: "Schweinenacken", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Eier", menge: 2, einheit: "Stk" }
        ],
        gewuerze: [
            { name: "Salz", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Koriander", menge: 2, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Bärlauch frisch oder TK", menge: 3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen", inhalt: "Fleisch und alle Zutaten außer Eier und Gewürze wolfen." },
            { titel: "Mengen", inhalt: "Alle Zutaten mit Eiern und Gewürzen mischen bis eine Bindung entsteht." },
            { titel: "Füllen", inhalt: "In 28/30er Darm abfüllen, auf gewünschte Länge abdrehen." },
            { titel: "Garen", inhalt: "Bei 75-80°C ca. 30 Minuten garen." }
        ]}],
        tipps: []
    },
    {
        id: 231,
        titel: "Thüringer Grillwurst ala Kajo",
        kategorie: "Bratwurst",
        beschreibung: "Thüringer Grillwurst von Kajo – fein gekuttert aus Schulter und Bauch, gebrüht oder vakuumiert.",
        quelle: "Rezepte_Sortiert/Bratwurst/Thüringer Grillwurst ala Kajo 01.04.2020.docx",
        basisMenge: 2100,
        fleischsorten: [
            { name: "Schweineschulter (75%)", menge: 1575, einheit: "g" },
            { name: "Schweinebauch (25%)", menge: 525, einheit: "g" }
        ],
        zutaten: [
            { name: "Milchpulver", menge: 1, einheit: "TL" },
            { name: "Eiskalte Milch", menge: 120, einheit: "ml" },
            { name: "Eiswasser", menge: 200, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel gestoßen", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "22/24", menge: "passend" },
        ausgabe: "ca. 2,1 kg Grillwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Fleisch kühlen und wolfen", inhalt: "Fleisch gut kühlen, würfeln, durch 2-3mm Scheibe wolfen." },
            { titel: "Kuttern", inhalt: "Gewürze unterheben, ankuttern. Milch und Eiswasser zugeben und bis 5°C auskuttern." },
            { titel: "Füllen", inhalt: "Masse in 22/24er Därme füllen." },
            { titel: "Brühen", inhalt: "Bei 70-75°C in Salzwasser (16g Salz/Liter) 30 Minuten ziehen lassen." },
            { titel: "Fertigstellung", inhalt: "Sofort grillen oder vakuumieren und einfrieren." }
        ]}],
        tipps: []
    },
    {
        id: 232,
        titel: "Thüringer Rostbratwurst gebrüht",
        kategorie: "Bratwurst",
        beschreibung: "Thüringer Rostbratwurst mit Knoblauch, gebrüht – saftig durch Milch und Eier.",
        quelle: "Rezepte_Sortiert/Bratwurst/Thüringer Rostbratwurst, gebrüht.docx",
        basisMenge: 3000,
        fleischsorten: [
            { name: "Schweinebauch", menge: 3000, einheit: "g" }
        ],
        zutaten: [
            { name: "Milch", menge: 300, einheit: "ml" },
            { name: "Eier", menge: 3, einheit: "Stk" },
            { name: "Knoblauchzehen", menge: 6, einheit: "Stk" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 54, einheit: "g", proKg: false },
            { name: "Schwarzer Pfeffer", menge: 15, einheit: "g", proKg: false },
            { name: "Kümmel gemahlen", menge: 15, einheit: "g", proKg: false },
            { name: "Muskatnuss", menge: 15, einheit: "g", proKg: false }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "10m" },
        ausgabe: "ca. 3 kg Bratwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen, mit allen Zutaten gut vermengen." },
            { titel: "Füllen", inhalt: "In 28/30er Darm füllen." },
            { titel: "Brühen", inhalt: "Pro mm Dicke 1 Minute brühen bei 72°C (ca. 25 Minuten)." }
        ]}],
        tipps: ["Auch in 24/26er Darm möglich"]
    },
    {
        id: 233,
        titel: "Thüringer Rostbratwurst (Traditionsrezept)",
        kategorie: "Bratwurst",
        beschreibung: "Traditionelles Thüringer Rostbratwurst-Rezept ohne Zusätze – wie bei der Hausschlachtung.",
        quelle: "Rezepte_Sortiert/Bratwurst/Herstellung einer Thüringer Rostbratwurst.docx",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Schweineschulter (50%)", menge: 500, einheit: "g" },
            { name: "Schweinebauch (50%)", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Eier", menge: 4, einheit: "Stk" },
            { name: "Kalte Milch", menge: 250, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Kümmel gestoßen", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen", inhalt: "Fleisch wolfen." },
            { titel: "Mengen", inhalt: "Mit Gewürzen, Eiern und Milch gut vermengen." },
            { titel: "Füllen", inhalt: "In Darm füllen und auf gewünschte Länge abdrehen." },
            { titel: "Braten", inhalt: "Auf dem Rost grillen oder in der Pfanne braten." }
        ]}],
        tipps: ["Ohne Zusätze – reines Traditionsrezept"]
    },
    {
        id: 234,
        titel: "Bratwurst alle Sorten (Grundrezept)",
        kategorie: "Bratwurst",
        beschreibung: "Vielseitiges Bratwurst-Grundrezept aus Nacken, Bauch und Krustenbraten – mit Varianten für Gyros, Knobi und Chili.",
        quelle: "Rezepte_Sortiert/Bratwurst/Bratwurst alle Sorte.pdf",
        basisMenge: 4000,
        fleischsorten: [
            { name: "Schweinenacken", menge: 1000, einheit: "g" },
            { name: "Schweinebauch", menge: 1000, einheit: "g" },
            { name: "Krustenbraten", menge: 2000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer bunt frisch gemahlen", menge: 4, einheit: "g", proKg: true },
            { name: "Currypulver", menge: 0.8, einheit: "g", proKg: true },
            { name: "Paprika", menge: 1, einheit: "g", proKg: true },
            { name: "Senfkörner gemahlen", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 45-50 Bratwürstchen",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen und mit Gewürzen gut vermengen." },
            { titel: "Füllen", inhalt: "In Schweinedarm füllen, abdrehen." }
        ]}],
        tipps: [
            "Gyroswurst: 10g Salz weniger + 10g Gyrosgewürz pro kg",
            "Knobiwurst: +1,5g Knoblauchpulver pro kg",
            "Chiliwurst: +0,6g Chili pro kg",
            "Für Salami/Knacker: NPS statt Salz, +Chiliflocken und Senfkörner"
        ]
    },
    {
        id: 235,
        titel: "Sommerliche Bratwurst à la André Stalder",
        kategorie: "Bratwurst",
        beschreibung: "Frische Sommerwurst mit frischen Kräutern, Zitrone und Milch – leicht und aromatisch.",
        quelle: "Rezepte_Sortiert/Bratwurst/Sommer Bratwurst à la André Stalder.pdf",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Schweineschulter (70%)", menge: 700, einheit: "g" },
            { name: "Bauchspeck (30%)", menge: 300, einheit: "g" }
        ],
        zutaten: [
            { name: "Basilikum frisch", menge: 20, einheit: "g" },
            { name: "Petersilie frisch", menge: 10, einheit: "g" },
            { name: "Koriander frisch", menge: 20, einheit: "g" },
            { name: "Abrieb von Zitrone", menge: 0.5, einheit: "Stk" },
            { name: "Milch", menge: 100, einheit: "ml" },
            { name: "Backpulver", menge: 1, einheit: "g" }
        ],
        gewuerze: [
            { name: "Salz", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Muskat", menge: 2, einheit: "g", proKg: true },
            { name: "Ingwerpulver", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Kräuter vorbereiten", inhalt: "Alle Kräuter fein hacken oder mit dem Fleisch zusammen wolfen." },
            { titel: "Wolfen", inhalt: "Fleisch durch die 6mm Scheibe wolfen." },
            { titel: "Mengen", inhalt: "Alles gut vermengen bis es bindet – Masse immer kühl halten." },
            { titel: "Füllen", inhalt: "In 28/30er Därme füllen." }
        ]}],
        tipps: ["Immer auf kühle Verarbeitung achten – frische Kräuter geben intensives Aroma"]
    },
    {
        id: 259,
        titel: "Thüringer Bratwurst (klassisch)",
        kategorie: "Bratwurst",
        beschreibung: "Klassische Thüringer Bratwurst aus Schulter, Schinken und Speck – einfach und traditionell.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 5000,
        fleischsorten: [
            { name: "Schweineschulter", menge: 3000, einheit: "g" },
            { name: "Schinken schier", menge: 500, einheit: "g" },
            { name: "Speck", menge: 1500, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 24, einheit: "g", proKg: true },
            { name: "Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Majoran", menge: 0.5, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Enge Schweinedärme", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 50 Stück à 100g",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen und würzen", inhalt: "Material in Stücke schneiden, durch feine Scheibe wolfen, mit Gewürzen vermengen." },
            { titel: "Füllen", inhalt: "In enge Schweinedärme füllen, paarweise à 100g abdrehen." },
            { titel: "Garen", inhalt: "Vor dem Verzehr braten oder grillen." }
        ]}],
        tipps: []
    },
    {
        id: 272,
        titel: "Mexikanische Bratwurst",
        kategorie: "Bratwurst",
        beschreibung: "Würzige Bratwurst mit Mais, geräucherter Paprika und Habanero-Chili – saftig und scharf.",
        quelle: "Rezepte_Sortiert/Rohwurst/Mexikanische Bratwurst.docx",
        basisMenge: 2000,
        fleischsorten: [
            { name: "Schweinenacken", menge: 1500, einheit: "g" },
            { name: "Schweinebauch", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Mais (kleine Dosen)", menge: 2, einheit: "Dosen" },
            { name: "Geräucherte gegarte Paprika (Glas)", menge: 1, einheit: "Glas" },
            { name: "Habanero Chili", menge: 1, einheit: "Stk" }
        ],
        gewuerze: [
            { name: "Meersalz", menge: 32, einheit: "g", proKg: false },
            { name: "Schwarze Pfefferkörner", menge: 8, einheit: "g", proKg: false },
            { name: "Chilipulver", menge: 4, einheit: "g", proKg: false },
            { name: "Paprikapulver edelsüß", menge: 4, einheit: "g", proKg: false },
            { name: "Paprikapulver geräuchert", menge: 2, einheit: "g", proKg: false },
            { name: "Koriander", menge: 2, einheit: "g", proKg: false }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "4m" },
        ausgabe: "ca. 2 kg Bratwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Vorbereiten", inhalt: "Fleisch parieren, zerkleinern und anfrieren. Gewürze mischen, Habanero und Paprika fein hacken." },
            { titel: "Wolfen", inhalt: "Gewürztes Fleisch durch grobe Lochscheibe wolfen." },
            { titel: "Mengen", inhalt: "Gewürze, Habanero, Mais und Paprika unter die Masse heben, gut verkneten." },
            { titel: "Füllen", inhalt: "Luftfrei in 30/32er Darm pressen, 15cm Würste abdrehen." },
            { titel: "Ruhen", inhalt: "Einen Tag im Kühlschrank durchziehen lassen oder vakuumieren und einfrieren." }
        ]}],
        tipps: ["Temperatur der Masse immer im Auge behalten"]
    },
    {
        id: 293,
        titel: "Paprika-Grillwurst (Nümmerter Würschtelmacher)",
        kategorie: "Bratwurst",
        beschreibung: "Würzige Paprika-Grillwurst aus magerem Schwein und Bauch – frisch oder kalt geräuchert.",
        quelle: "Wurst im Glas/Wurstmachen Mai 2019.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 800, einheit: "g" },
            { name: "Schweinebauch", menge: 200, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS (Nitritpökelsalz)", menge: 25, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 4, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 15, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 7, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweins- oder Schafssaitling", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 1 kg Grillwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Fleisch durch 4,5mm Scheibe wolfen. Alle Gewürze zugeben und gründlich in Rühr- oder Küchenmaschine vermengen bis gute Bindung entsteht." },
            { titel: "Füllen und abbinden", inhalt: "Brät luftfrei in Schweins- oder Schafsdärme füllen. Würste 20-25cm lang abbinden." },
            { titel: "Frisch oder räuchern", inhalt: "Direkt auf den Grill oder: nach dem Ablüften 3-4× je 12 Stunden kalt räuchern." }
        ]}],
        tipps: ["Für Räuchervariante: die Hälfte in Schweinsdarm, die andere in Saitling zum Räuchern"]
    }
,

    // ── Sonstiges-Ordner Bratwurst ────────────────────────────
    {
        id: 297,
        titel: "Bacon-Käse Thüringer Art",
        kategorie: "Bratwurst",
        beschreibung: "Würzige Thüringer-Bratwurst mit geräuchertem Bauch und Bergkäse-Einlage – gebrüht oder frisch.",
        quelle: "Sonstiges/Bacon Käse Thüringer Art.docx",
        basisMenge: { gesamt: 5500 },
        fleischsorten: [
            { name: "Schweinenacken", menge: 2000, einheit: "g" },
            { name: "Schweinebauch", menge: 1500, einheit: "g" },
            { name: "Geräucherter Bauch (Einlage)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Alter Bergkäse (Einlage, 1x1cm Würfel)", menge: 1000, einheit: "g" },
            { name: "Eiskalte Milch 1,5%", menge: 200, einheit: "ml", proKg: true }
        ],
        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz", menge: 4.2, einheit: "g", proKg: true },
            { name: "Kümmel frisch gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Milchpulver", menge: 5, einheit: "g", proKg: true },
            { name: "Dextrose", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauch frisch (gepresst)", menge: 2, einheit: "Zehen", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 5,5 kg Würste",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen und kuttern", inhalt: "Fleisch (ohne Einlage) in wolfgerechte Stücke schneiden, durch 3mm wolfen. Mit Gewürzen und Milch fein kuttern." },
            { titel: "Einlage", inhalt: "Käse und geräucherten Bauch in 1x1cm Stücke schneiden. Gut mit dem Kutterbrät mischen." },
            { titel: "Füllen", inhalt: "In 28/30er Därme füllen. Brühen bei 72°C ca. 20 Min., oder frisch vakuumieren und einfrieren." }
        ]}],
        tipps: ["Käse sollte gut gekühlt sein damit er beim Kuttern nicht schmilzt"]
    },
    {
        id: 298,
        titel: "Bärlauch-Grillerbratwurst fein",
        kategorie: "Bratwurst",
        beschreibung: "Feine Bärlauch-Grillwurst mit Milchpulver – gegekuttert aus Schulter/Nacken und Bauch.",
        quelle: "Sonstiges/Bärlauch.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter oder -nacken", menge: 600, einheit: "g" },
            { name: "Schweinebauch", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Frischer Bärlauch (gehackt)", menge: 20, einheit: "g", proKg: true },
            { name: "Eiskaltes Wasser", menge: 50, einheit: "ml", proKg: true }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 22.5, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz oder bunt (frisch gemahlen)", menge: 5, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 3, einheit: "g", proKg: true },
            { name: "Magermilchpulver", menge: 2.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30/32", menge: "passend" },
        ausgabe: "ca. 1 kg Bratwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen und kuttern", inhalt: "Durch 3mm Scheibe wolfen, dann kuttern. Bärlauch zugeben." }
        ]}],
        tipps: ["Bärlauch gibt es nur kurze Zeit – Saison nutzen oder einfrieren"]
    },
    {
        id: 299,
        titel: "Käsegriller",
        kategorie: "Bratwurst",
        beschreibung: "Grillwurst mit Gouda- oder Emmentaler-Würfeln – gecuttert aus Schweinefleisch und Rückenspeck.",
        quelle: "Sonstiges/Käsegriller.docx",
        basisMenge: { gesamt: 1155 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 500, einheit: "g" },
            { name: "Rückenspeck vom Schwein", menge: 400, einheit: "g" },
            { name: "Schüttung (Eis/Wasser)", menge: 155, einheit: "g" }
        ],
        zutaten: [
            { name: "Gouda oder Emmentaler (klein gewürfelt)", menge: null, einheit: "nach Geschmack" },
            { name: "Zitronensaft", menge: null, einheit: "Schuss" },
            { name: "Kutterhilfsmittel (Backpulver mit Phosphat)", menge: 5, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "Salz", menge: 15, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1.5, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 1, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 1.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "28/30", menge: "passend" },
        ausgabe: "ca. 1 kg Grillwurst",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Kuttern", inhalt: "Brät kuttern. Käsewürfel kurz am Ende des Kuttervorgangs unterheben." },
            { titel: "Füllen", inhalt: "In Schweinedarm 28/30 füllen." }
        ]}],
        tipps: []
    },
    {
        id: 300,
        titel: "Kräuter der Provence Wurst",
        kategorie: "Bratwurst",
        beschreibung: "Aromatische Kräuterwurst mit Thymian, Rosmarin, Salbei und Liebstöckel – frisch oder leicht geräuchert.",
        quelle: "Sonstiges/Kräuter der Provence Wurst.docx",
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
            { name: "Wacholderbeeren gemörsert", menge: 3, einheit: "Stück", proKg: true }
        ],
        darm: { typ: "Lammsaitling", kaliber: "24/26", menge: "16m" },
        ausgabe: "ca. 4 kg Würste",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen und mischen", inhalt: "Fleisch wolfen, Gewürze zugeben und gut vermengen. In Lammsaitlinge füllen." }
        ]}],
        tipps: ["Kräuter können durch frische Kräuter ersetzt werden"]
    }
,

    {
        id: 302,
        titel: "Erdbeer-Bratwurst (Kindergeburtstag)",
        kategorie: "Bratwurst",
        beschreibung: "Fruchtige Erdbeer-Bratwurst in Pink – ein Spaß für Kindergeburtstage mit echten Erdbeeren und Getränkepulver",
        quelle: "REZEPTSSAMMLUNG.docx (Sonstiges)",
        basisMenge: "1 kg",
        fleischsorten: [
            { name: "Schweinefleisch", menge: "1000g" }
        ],
        zutaten: [
            { name: "Frische Erdbeeren (gewürfelt)", menge: "310g" },
            { name: "Erdbeerpüree (frisch)", menge: "100g" },
            { name: "Getränkepulver Erdbeer-Geschmack", menge: "40g" },
            { name: "Kutterhilfsmittel", menge: "3g" }
        ],
        gewuerze: [
            { name: "Lebensmittelfarbe Rosa/Pink", menge: "ca. 1,5 TL" }
        ],
        darm: "Schweinedärme 26/28",
        ausgabe: "ca. 1,4 kg Rohwurst",
        schritte: [
            { titel: "Erdbeeren vorbereiten", inhalt: "Frische Erdbeeren in kleine Würfel schneiden. Würfel kurz anfrieren damit sie beim Füllen nicht zerfallen." },
            { titel: "Wolfen", inhalt: "Salz mit Getränkepulver, Kutterhilfsmittel und kleingeschnittenem Fleisch durch 5mm Wolfscheibe drehen." },
            { titel: "Mischen", inhalt: "Erdbeerpüree, gefrorene Erdbeerwürfel und Lebensmittelfarbe zugeben, gut durchmengen." },
            { titel: "Füllen", inhalt: "Masse luftfrei in Schweinedärme 26/28 füllen. Kühl halten und bald verarbeiten." }
        ],
        tipps: "Nur für Frischverzehr geeignet – nicht zum Räuchern oder langen Lagern. Die gefrorenen Erdbeerstücke verhindern das Zerdrücken beim Füllen."
    }
];