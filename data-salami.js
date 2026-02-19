// Kategorie: Salami
const rezepte_salami = [
    {
        "id": 21,
        "titel": "Salami (Reifeschrank-Rezept)",
        "kategorie": "Salami",
        "beschreibung": "Klassische Trockensalami mit Starterkulturen – für den selbstgebauten Reifeschrank",
        "quelle": "Salami",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweinebauch (50%)",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Schweineschulter (50%)",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Starterkulturen (Lay Starter Naturo)",
                "menge": 0.5,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS",
                "menge": 24,
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
                "name": "Paprika edelsüß",
                "menge": 0.5,
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
                "name": "Zitronenschale",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Rohrzucker",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Puderzucker",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchgranulat",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kunstdarm Hukkies",
            "kaliber": "60/40",
            "menge": "passend"
        },
        "ausgabe": "nach Reifegrad",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Wolfen und mischen",
                        "inhalt": "Fleisch wolfen, alle Gewürze und Starterkulturen einkneten."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Kunstdarm 60/40 füllen."
                    }
                ]
            },
            {
                "gruppe": "Reifung (Reifeschrank)",
                "schritte": [
                    {
                        "titel": "Woche 1–2",
                        "inhalt": "Tag 1: 23°C / 95% LF. Täglich Temperatur um 1°C und LF leicht senken bis Tag 12: 16°C / 82% LF."
                    },
                    {
                        "titel": "Woche 2–3",
                        "inhalt": "7 Tage: 12°C / 80% LF."
                    },
                    {
                        "titel": "Woche 3–4",
                        "inhalt": "7 Tage: 12°C / 77% LF."
                    },
                    {
                        "titel": "Lagerung",
                        "inhalt": "12°C / 75% LF."
                    }
                ]
            }
        ],
        "tipps": [
            "Schimmelbildung ist normal und gewünscht – weißer Edelschimmel"
        ]
    },
    {
        "id": 22,
        "titel": "Kochsalami Opa Jochen",
        "kategorie": "Salami",
        "beschreibung": "Gebrühte Kochsalami mit Kümmel und Knoblauch – heißgeräuchert und gebrüht",
        "quelle": "Pfefferbeißer / Wurst",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter (36%)",
                "menge": 360,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch (56%)",
                "menge": 560,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Kaltes Wasser (8%)",
                "menge": 80,
                "einheit": "ml"
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
                "name": "Pfeffer",
                "menge": 4,
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
                "name": "Muskat",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel (gemahlen)",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchpulver",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kutterhilfsmittel (KHM)",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Naturin Därme",
            "kaliber": "43 oder R2 60/30",
            "menge": "passend"
        },
        "ausgabe": "ca. 3-4 Salamis",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Wolfen",
                        "inhalt": "Schulter und Bauch durch 4,5 mm Scheibe wolfen."
                    },
                    {
                        "titel": "Mischen",
                        "inhalt": "Magerfleisch mit Gewürzen in Küchenmaschine auf kleiner Stufe mengen, etwas Wasser zugeben, nach 10 Min. restliches Fleisch dazu."
                    },
                    {
                        "titel": "Abfüllen und umröten",
                        "inhalt": "In Naturin-Därme füllen, 2 Tage bei 20°C umröten."
                    },
                    {
                        "titel": "Räuchern und brühen",
                        "inhalt": "2 Stunden bei 65°C heißräuchern, dann bei 75°C brühen (1 Min. je mm Durchmesser). In kaltem Wasser abschrecken."
                    },
                    {
                        "titel": "Auskühlen",
                        "inhalt": "Ca. 2 Tage bei 19°C auskühlen lassen. Optional weitere Räuchergänge."
                    }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 47,
        "titel": "Brettsalami",
        "kategorie": "Salami",
        "beschreibung": "Rohwurst auf Fichtenbrett vorgeräucht – ohne Darm, wird flachgedrückt und auf dem Brett gereift",
        "quelle": "Wursten",
        "basisMenge": {
            "gesamt": 1500
        },
        "fleischsorten": [
            {
                "name": "Mageres Schweinefleisch (Schnitzel)",
                "menge": 825,
                "einheit": "g"
            },
            {
                "name": "Mageres Rindfleisch (Schnitzel)",
                "menge": 300,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch",
                "menge": 275,
                "einheit": "g"
            },
            {
                "name": "Schweinerückenspeck",
                "menge": 100,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Starterkulturen für Rohwurst",
                "menge": null,
                "einheit": "nach Herstellerangabe"
            }
        ],
        "gewuerze": [
            {
                "name": "Pökelsalz (NPS)",
                "menge": 27,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer, gemahlen",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß",
                "menge": 10,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika scharf",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Traubenzucker (Dextrose)",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch frisch oder gemahlen",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kein Darm – auf Fichtenbrett",
            "kaliber": "–",
            "menge": "3 × 500 g Fladen"
        },
        "ausgabe": "3 Brettsalami à ca. 500 g",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Fleisch vorkühlen und wolfen",
                        "inhalt": "Fleisch 1 Stunde einfrieren. Dann mit 3mm Scheibe wolfen. Gewürze und Starterkulturen zugeben."
                    },
                    {
                        "titel": "Kneten",
                        "inhalt": "5 Minuten auf kleinster Stufe in der Küchenmaschine kneten bis Bindung entsteht."
                    },
                    {
                        "titel": "Fladen formen",
                        "inhalt": "3 Kugeln à 500g formen, flachdrücken und auf unbehandeltes Fichtenbrett legen. 4 Tage bei 22–23°C vorreifen."
                    },
                    {
                        "titel": "Räuchern",
                        "inhalt": "2×12 Stunden kalträuchern mit je 12 Stunden Pause. Nach 1. Durchgang wenden."
                    },
                    {
                        "titel": "Nachreifen",
                        "inhalt": "Nach dem Räuchern wieder auf das Brett, 4–5 weitere Tage bei Raumtemperatur reifen lassen."
                    }
                ]
            }
        ],
        "tipps": [
            "Je länger die Reife, desto fester die Salami",
            "Nach gewünschtem Reifegrad einfrieren"
        ]
    },
    {
        "id": 62,
        "titel": "Csemege Kolbász (Feinkost Kolbász)",
        "kategorie": "Salami",
        "beschreibung": "Traditionell ungarischer Feinkost-Kolbász mit Paprika, Kümmel und Muskat",
        "quelle": "Forums Rezepte",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Gemischtes Schweine- oder Wildschweinfleisch",
                "menge": 850,
                "einheit": "g"
            },
            {
                "name": "Fetter kerniger Speck",
                "menge": 150,
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
                "name": "Paprikapulver edelsüß",
                "menge": 15,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer gemahlen",
                "menge": 2.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Weißer Pfeffer gemahlen",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch frisch",
                "menge": 3,
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
                "name": "Muskatnuss gemahlen",
                "menge": 0.3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Puderzucker",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Schweinedarm",
            "kaliber": "30/32",
            "menge": "passend für Kolbász"
        },
        "ausgabe": "ca. 1 kg Kolbász",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Vorbereiten",
                        "inhalt": "Fleisch und Speck in 2×2cm Würfel schneiden. Mit Gewürzen vermengen. 2–3 Tage im Kühlschrank ziehen lassen, täglich vermengen."
                    },
                    {
                        "titel": "Wolfen und füllen",
                        "inhalt": "Durch 4mm Scheibe wolfen. Fest und blasenfrei in Schweinedärme 30/32 füllen."
                    },
                    {
                        "titel": "Trocknen und räuchern",
                        "inhalt": "1 Tag zum Trocknen aufhängen. Anschließend 1 Woche kalt räuchern."
                    },
                    {
                        "titel": "Reifen",
                        "inhalt": "In Holzasche oder Gips zum Trocknen legen bis zur gewünschten Festigkeit."
                    }
                ]
            }
        ],
        "tipps": [
            "Fleisch von 130–160kg Tieren für besten Geschmack",
            "Traditionell in Holzasche oder Gips nachtrocknen"
        ]
    },
    {
        "id": 70,
        "titel": "Kochsalami (Rinderbrät)",
        "kategorie": "Salami",
        "beschreibung": "Kochsalami mit Rindergrundbrät und Schweinebauch-Einlage, heiß geräuchert und gebrüht",
        "quelle": "Kochsalami.pdf",
        "basisMenge": {
            "gesamt": 1600
        },
        "fleischsorten": [
            {
                "name": "Rindfleischkeule (mager) – Grundbrät",
                "menge": 400,
                "einheit": "g"
            },
            {
                "name": "Rindfleisch (durchwachsen) – Grundbrät",
                "menge": 350,
                "einheit": "g"
            },
            {
                "name": "Eis (Schüttung) – Grundbrät",
                "menge": 250,
                "einheit": "g"
            },
            {
                "name": "Schweinebauch (durchwachsen) – Einlage",
                "menge": 600,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Senfkörner (Einlage)",
                "menge": 7,
                "einheit": "g",
                "proKg": true
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Grundbrät)",
                "menge": 21,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kutterhilfsmittel KHM (Grundbrät)",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ascorbinsäure (Grundbrät)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "NPS (Einlage)",
                "menge": 22,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer (Einlage)",
                "menge": 2.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ascorbinsäure (Einlage)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch (Einlage)",
                "menge": 4.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Koriander (Einlage)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kardamom (Einlage)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Zwiebel (Einlage)",
                "menge": 1,
                "einheit": "Stück"
            },
            {
                "name": "Kümmel gemahlen (Einlage)",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Räucherbarer Hautfaserdarm",
            "kaliber": "80/50",
            "menge": "passend"
        },
        "ausgabe": "ca. 1,5 kg Wurst",
        "schritte": [
            {
                "gruppe": "Vorbereitung",
                "schritte": [
                    {
                        "titel": "Einlage einfrieren",
                        "inhalt": "Schweinebauch in kleine Würfel schneiden und über Nacht einfrieren."
                    },
                    {
                        "titel": "Grundbrät herstellen",
                        "inhalt": "Rindergrundbrät herstellen und bis 12°C hochkuttern."
                    }
                ]
            },
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Einlage einarbeiten",
                        "inhalt": "Gewürze der Einlage (außer Senfkörner) zugeben. Gefrorene Bauchwürfel hinzufügen und bis Stecknadelkopfgröße kuttern. Danach Senfkörner zugeben und noch 2-3 Runden mitlaufen lassen."
                    },
                    {
                        "titel": "Abfüllen und umröten",
                        "inhalt": "In räucherbare Hautfaserdärme Kal. 80/50 füllen. Ca. 24 Stunden bei 16-18°C umröten und trocknen lassen."
                    },
                    {
                        "titel": "Räuchern und brühen",
                        "inhalt": "60-75 Min. bei 75°C heiß räuchern. Anschließend bei 78°C brühen (Länge je nach Darm). Sofort im Eiswasser abkühlen. Nach dem Abkühlen trocknen, dann ca. 12 Stunden kalt räuchern."
                    }
                ]
            }
        ],
        "tipps": [
            "Nach dem letzten Räuchern noch einige Tage reifen lassen für intensiveren Geschmack"
        ]
    },
    {
        "id": 74,
        "titel": "Paprika-Chilly Kolbász (Ungarisch)",
        "kategorie": "Salami",
        "beschreibung": "Ungarische Knoblauch-Paprika-Salami mit Chili, gereift bis 40-45% Gewichtsverlust",
        "quelle": "Paprika-Chilly Kolbasz.pdf",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter (durchwachsen)",
                "menge": 800,
                "einheit": "g"
            },
            {
                "name": "Rückenspeck",
                "menge": 200,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Starterkulturen",
                "menge": null,
                "einheit": "nach Herstellerangaben"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Nitritpökelsalz)",
                "menge": 24,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer schwarz gemahlen",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß",
                "menge": 40,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Chilyflocken",
                "menge": 4,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchgranulat",
                "menge": 8,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Traubenzucker",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel gemahlen",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Räucherbarer Kunstdarm oder Schweinedarm",
            "kaliber": "28/30",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Salami (nach Reifung ca. 550-600 g)",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten",
                        "inhalt": "Fleisch in wolfgerechte Stücke schneiden und anfrieren. Dann würzen und durch die 6 mm Lochscheibe wolfen."
                    },
                    {
                        "titel": "Mischen",
                        "inhalt": "Masse mit Gewürzen gut mischen. Zum Schluss Salz sowie Starterkulturen hinzufügen und weitermischen bis gute Bindung entsteht."
                    },
                    {
                        "titel": "Abfüllen und umröten",
                        "inhalt": "In räucherbare Kunstdärme oder Schweinedarm 28/30 füllen. Bei ca. 17-18°C und 85% Luftfeuchtigkeit ca. 3-4 Tage umröten lassen."
                    },
                    {
                        "titel": "Räuchern",
                        "inhalt": "Über Buchenrauch räuchern. Ca. 3 x 12 Stunden im Rauch, dazwischen luftig und kühl aufhängen."
                    },
                    {
                        "titel": "Reifen",
                        "inhalt": "Bei ca. 15°C und ca. 60-70% Luftfeuchtigkeit reifen lassen bis ca. 40-45% Gewichtsverlust erreicht sind."
                    }
                ]
            }
        ],
        "tipps": [
            "Mit 40-45% Gewichtsverlust hat die Salami eine tolle Festigkeit"
        ]
    },
    {
        "id": 82,
        "titel": "Salami Klassisch (Reifeschrank)",
        "kategorie": "Salami",
        "beschreibung": "Klassische Salami aus Rindfleisch und Rückenspeck mit detailliertem Reifungsprotokoll",
        "quelle": "salami-2-12-19.pdf",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Mageres Rindfleisch",
                "menge": 600,
                "einheit": "g"
            },
            {
                "name": "Rückenspeck",
                "menge": 400,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Knoblauchzehen",
                "menge": 1,
                "einheit": "Zehe"
            }
        ],
        "gewuerze": [
            {
                "name": "Nitritpökelsalz",
                "menge": 26,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Rohrzucker",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer schwarz geschrotet",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer schwarz gemahlen",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika edelsüß",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Paprika scharf",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Naturdarm oder Kunstdarm",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Salami (nach Reifung ca. 550-600 g)",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Einfrieren und Kuttern/Wolfen",
                        "inhalt": "Fleisch und Speck in grobe Würfel schneiden und einfrieren. Dann kuttern und Gewürze (außer NPS) zugeben. Sobald leichte Bindung entsteht, das Salz hinzugeben. Brät darf nicht wärmer als 2°C werden!"
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "In Därme abfüllen. Darauf achten, dass das Brät beim Abfüllen kalt bleibt."
                    }
                ]
            },
            {
                "gruppe": "Reifung",
                "schritte": [
                    {
                        "titel": "Reifungsprotokoll",
                        "inhalt": "Reifen bei ca. 18°C: Tag 1-3: 94-92% Luftfeuchtigkeit. Tag 4-5: 90%. Tag 6-9: 87%. Tag 10-12: 80%. Ab Tag 13: unter 15°C und 70% Luftfeuchtigkeit. Nach Tag 12 zusätzlich 12 Stunden kalt räuchern."
                    }
                ]
            }
        ],
        "tipps": [
            "Täglicher Luftaustausch ist wichtig",
            "Ohne Kutter: gefrorenes Fleisch durch 4,5 mm Scheibe und Speck durch 3 mm wolfen, dann mit Küchenmaschine vermengen"
        ]
    },

    // ── Neue Salami-Rezepte ───────────────────────────────────

    {
        id: 89,
        titel: "Salami ala Doris Stadler",
        kategorie: "Salami",
        beschreibung: "Luftgetrocknete Schweine-Salami mit Schinken, Bauch und Rückenspeck – mit Knoblauch in Rum oder Cognac.",
        quelle: "Salami/Salami ala Doris Stadler.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch vom Schinken", menge: 600, einheit: "g" },
            { name: "Schweinebauch", menge: 200, einheit: "g" },
            { name: "Schweinerückenspeck", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Knoblauch (3 Tage in Rum oder Cognac gezogen)", menge: 1, einheit: "Zehe" }
        ],
        gewuerze: [
            { name: "Pökelsalz", menge: 25, einheit: "g", proKg: true },
            { name: "Traubenzucker", menge: 4, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz, geschrotet", menge: 3, einheit: "g", proKg: true },
            { name: "Paprika geräuchert", menge: 3, einheit: "g", proKg: true },
            { name: "Senfmehl", menge: 2, einheit: "g", proKg: true },
            { name: "Koriander", menge: 1.5, einheit: "g", proKg: true },
            { name: "Kümmelpulver", menge: 1, einheit: "g", proKg: true },
            { name: "Starterkulturen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1.5, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Rinderkranzdarm", kaliber: null, menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Fleisch vorbereiten", inhalt: "Kleingeschnittenes Fleisch mit allen Gewürzen (außer Senfkörnern) vermengen und leicht anfrieren. Dann durch etwas grobere Scheibe wolfen." },
                    { titel: "Füllen", inhalt: "Mit den Senfkörnern kräftig vermengen. In Rinderkranzdärme füllen." },
                    { titel: "Reifen", inhalt: "4-5 Tage bei Raumtemperatur und 90% Luftfeuchtigkeit reifen lassen." },
                    { titel: "Trocknen", inhalt: "Bei 12-15°C und 70-80% Luftfeuchtigkeit trocknen lassen." }
                ]
            }
        ],
        tipps: ["Knoblauch mindestens 3 Tage vor Verwendung in Rum oder Cognac einlegen"]
    },

    {
        id: 90,
        titel: "Salami nach Olaf Schmotzer",
        kategorie: "Salami",
        beschreibung: "Klassische Rohwurst-Salami aus Schinkenfleisch, Rind und Rückenfett mit Rum – mehrfach kalt geräuchert.",
        quelle: "Salami/Salami nach Olaf Schmotzer.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch (Schinken)", menge: 600, einheit: "g" },
            { name: "Rindfleisch", menge: 200, einheit: "g" },
            { name: "Rückenfett", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Rum", menge: 8, einheit: "ml", proKg: true }
        ],
        gewuerze: [
            { name: "NPS", menge: 24, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer, geschrotet", menge: 1.5, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.2, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 0.2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Naturdarm", kaliber: "43", menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorbereiten", inhalt: "Rindfleisch durch 2mm Scheibe wolfen. Alle Fleischsorten kleinschneiden, alles vermischen." },
                    { titel: "Würzen", inhalt: "24g NPS, Pfeffer, 1,5g geschroteten schwarzen Pfeffer, 0,2g Muskat, 0,2g Knoblauchpulver und 8g Rum dazugeben. Durch 6mm Scheibe wolfen und sehr gut vermengen." },
                    { titel: "Füllen", inhalt: "Masse mit Wurstfüller in Naturdärme Kaliber 43 füllen." }
                ]
            },
            {
                gruppe: "Reifen & Räuchern",
                schritte: [
                    { titel: "Reifen", inhalt: "7-10 Tage an kühlem Ort (ca. 13-15°C) zum Reifen aufhängen." },
                    { titel: "Räuchern", inhalt: "12h kalt räuchern, weitere 12h im Räucherofen hängen, nochmals 12h kalt räuchern." },
                    { titel: "Nachreifen", inhalt: "Weitere 1 Woche bei ca. 13-15°C reifen lassen. Minimum 14-15 Tage Gesamtzeit." }
                ]
            }
        ],
        tipps: ["Je länger die Salami hängt, desto fester und intensiver im Geschmack"]
    },

    {
        id: 91,
        titel: "Salami ala Jürgen Walter",
        kategorie: "Salami",
        beschreibung: "Rohwurst-Salami mit Edelschimmel in Rinderbutten gereift – nach ca. 3 Monaten fertig.",
        quelle: "Salami/salami-ala-juergen-walter.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Rindfleisch", menge: 400, einheit: "g" },
            { name: "Schweinefleisch", menge: 350, einheit: "g" },
            { name: "Rückenspeck", menge: 250, einheit: "g" }
        ],
        zutaten: [
            { name: "Rotwein", menge: 4, einheit: "ml", proKg: true },
            { name: "Starterkulturen", menge: null, einheit: "nach Anleitung" }
        ],
        gewuerze: [
            { name: "NPS", menge: 30, einheit: "g", proKg: true },
            { name: "Zuckermischung", menge: 5, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.5, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Piment", menge: 0.4, einheit: "g", proKg: true }
        ],
        darm: { typ: "Rinderbutten", kaliber: "90", menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Wolfen", inhalt: "Alles durch die 4er Scheibe wolfen." },
                    { titel: "Füllen", inhalt: "In 90er Rinderbutten füllen, gut verschnüren und mit Edelschimmel beimpfen." },
                    { titel: "Reifen", inhalt: "Ca. 3 Monate reifen lassen." }
                ]
            }
        ],
        tipps: ["Edelschimmel verleiht der Salami ihr typisches Aroma"]
    },

    {
        id: 92,
        titel: "Salami mit grünem Pfeffer",
        kategorie: "Salami",
        beschreibung: "Fein-würzige Salami aus gemischtem Hack mit ganzen grünen Pfefferkörnern und Rotweinwürze.",
        quelle: "Salami/salami-mit-gruenem-pfeffer.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinehackfleisch", menge: 550, einheit: "g" },
            { name: "Rinderhackfleisch", menge: 450, einheit: "g" }
        ],
        zutaten: [
            { name: "Rotweinwürze (1 Knoblauchzehe + 30ml Rotwein, 2h ziehen, abseihen)", menge: 10, einheit: "ml", proKg: true },
            { name: "Grüne Pfefferkörner, ganz (getrocknet oder eingelegt)", menge: 6, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "Pökelsalz", menge: 23, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 3.5, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz, gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm, räucherbar", kaliber: "55", menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Rotweinwürze", inhalt: "Knoblauchzehe zerstoßen, mit 30ml Rotwein 2 Stunden ziehen lassen, durch feines Sieb schütten." },
                    { titel: "Mengen", inhalt: "Gewürzmischung und Rotweinwürze der Fleischmasse zugeben, gründlich vermengen bis glatte Masse entsteht." },
                    { titel: "Füllen", inhalt: "In räucherbare Kunstdärme von 55mm Durchmesser abfüllen, luftfrei und fest stopfen." }
                ]
            },
            {
                gruppe: "Reifen",
                schritte: [
                    { titel: "Startphase", inhalt: "4 Tage bei ca. 20°C und 90-95% Luftfeuchtigkeit reifen." },
                    { titel: "Hauptreifung", inhalt: "Temperatur auf 16°C reduzieren, Luftfeuchtigkeit auf 85%." },
                    { titel: "Räuchern", inhalt: "Nach weiteren 4 Tagen 2 × 6 Stunden räuchern. Alternativ lufttrocknen." },
                    { titel: "Nachreifen", inhalt: "Mindestens 50 Tage Gesamtreifung." }
                ]
            }
        ],
        tipps: [
            "Alle 2 Tage mit feuchtem Tuch abreiben während der Reifung",
            "Eingelegt: 9g grüner Pfeffer statt 6g getrockneter"
        ]
    },

    {
        id: 93,
        titel: "Kochsalami ala Reinhard Schneider",
        kategorie: "Salami",
        beschreibung: "Schnelle Kochsalami aus Schweine-/Rinderhack – heißgeräuchert und gebrüht, vakuumiert lange haltbar.",
        quelle: "Salami/kochsalami-ala-reinhard-schneider.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweine-/Rinderhackfleisch (gemischt)", menge: 1000, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 18, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel mit Umrötung", menge: 5, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 6, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 4, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 2, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 2, einheit: "g", proKg: true },
            { name: "Paprika", menge: 2, einheit: "g", proKg: true },
            { name: "Koriander, gemahlen", menge: 1, einheit: "g", proKg: true },
            { name: "Selleriesalz", menge: 2.5, einheit: "g", proKg: true },
            { name: "Muskat", menge: 1.5, einheit: "g", proKg: true },
            { name: "Kümmel, gemahlen", menge: 1, einheit: "g", proKg: true },
            { name: "Piment, gemahlen", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm, räucherbar", kaliber: "60-90", menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Mengen", inhalt: "Alle Gewürze zum Hackfleisch geben und bindig kneten." },
                    { titel: "Füllen & Rasten", inhalt: "Brät in Därme füllen, über Nacht im Kühlschrank rasten lassen." },
                    { titel: "Räuchern", inhalt: "Bei 60-80°C 30 Minuten heiß räuchern." },
                    { titel: "Brühen", inhalt: "Gleich im Anschluss in zugeknoteten Gefrierbeutel (oder vakuumiert) bei 80°C 90 Minuten brühen." },
                    { titel: "Abkühlen", inhalt: "Mit kaltem Wasser abwaschen, auskühlen lassen, vakuumieren." }
                ]
            }
        ],
        tipps: [
            "24 Stunden vor Verzehr im Kühlschrank ruhen lassen",
            "Vakuumiert im Kühlschrank mindestens 3 Wochen haltbar oder einfrieren"
        ]
    },

    {
        id: 94,
        titel: "Salami ala Volkmar Scheibner",
        kategorie: "Salami",
        beschreibung: "DDR-Rezept: Rindfleisch, Schweinebauch und Speck – gereift und 3× kalt geräuchert.",
        quelle: "Salami/salami-ala-volkmar-scheibner.pdf",
        basisMenge: { gesamt: 900 },
        fleischsorten: [
            { name: "Rindfleisch, ohne Fett", menge: 300, einheit: "g" },
            { name: "Schweinebauch (max. 50% Fettanteil)", menge: 300, einheit: "g" },
            { name: "Speck (ohne Schwarte)", menge: 300, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS", menge: 25, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer, gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Zucker", menge: 2, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 4, einheit: "g", proKg: true },
            { name: "Mais (Macis)", menge: 0.3, einheit: "g", proKg: true },
            { name: "Kümmel, gemahlen", menge: 0.25, einheit: "g", proKg: true }
        ],
        darm: { typ: "Naturdarm oder Kunstdarm", kaliber: null, menge: null },
        ausgabe: null,
        schritte: [
            {
                gruppe: "Reifen & Räuchern",
                schritte: [
                    { titel: "Startreifung", inhalt: "5 Tage bei 20-25°C und 80-90% Luftfeuchtigkeit." },
                    { titel: "Hauptreifung", inhalt: "10 Tage bei 15-18°C und 60-75% Luftfeuchtigkeit." },
                    { titel: "Räuchern", inhalt: "3 × 12 Stunden kalt räuchern." }
                ]
            }
        ],
        tipps: ["Altes DDR-Rezept mit bewährten Grundzutaten"]
    },
    {
        "id": 136,
        "titel": "Házi Kolbász (Hausmacher Kolbász)",
        "kategorie": "Salami",
        "beschreibung": "Ungarischer Hausmacher Kolbász nach altem überliefertem Rezept – paprikabetont und knoblauchig",
        "quelle": "Alte Ungarische Kolbász und Salamirezepte.docx",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Gemischtes Schweine- oder Wildschweinfleisch", "menge": 900, "einheit": "g" },
            { "name": "Fetter kerniger Speck", "menge": 100, "einheit": "g" }
        ],
        "zutaten": [],
        "gewuerze": [
            { "name": "Salz (od. NPS)", "menge": 27, "einheit": "g", "proKg": true },
            { "name": "Paprikapulver edelsüß", "menge": 17, "einheit": "g", "proKg": true },
            { "name": "Frischer Knoblauch", "menge": 4, "einheit": "g", "proKg": true },
            { "name": "Schwarzer Pfeffer gemahlen", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Weißer Pfeffer gemahlen", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Kümmel gemahlen", "menge": 0.6, "einheit": "g", "proKg": true },
            { "name": "Muskatnuss gemahlen", "menge": 0.2, "einheit": "g", "proKg": true },
            { "name": "Puderzucker", "menge": 2, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Schweinedarm (Kolbász) oder 50er Schweinedarm (Salami)", "kaliber": "30 oder 50", "menge": "passend" },
        "ausgabe": "ca. 1 kg Kolbász",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Schneiden und marinieren", "inhalt": "Fleisch und Speck in ca. 2×2 cm Würfel schneiden. Mit Gewürzen vermengen und 2–3 Tage im Kühlschrank ziehen lassen, täglich gut vermengen." },
                    { "titel": "Wolfen und füllen", "inhalt": "Durch die 4mm Scheibe wolfen. Brät fest und blasenfrei in 30er Schweinedärme füllen." },
                    { "titel": "Trocknen und räuchern", "inhalt": "1 Tag zum Trocknen aufhängen. Dann 1 Woche kalt räuchern. Nach dem Räuchern in Holzasche oder Gips zum Trocknen legen." }
                ]
            }
        ],
        "tipps": [
            "Salpeter kann weggelassen werden – dann statt Salz NPS verwenden",
            "Verzehr erst nach 4 Wochen empfohlen wenn Salpeter verwendet wird"
        ]
    },
    {
        "id": 137,
        "titel": "Csemege Pick Szalámi (Pick Feinkostsalami)",
        "kategorie": "Salami",
        "beschreibung": "Ungarische Pick Feinkostsalami mit Schwein, Rind und Speck – nach altem überliefertem Rezept",
        "quelle": "Alte Ungarische Kolbász und Salamirezepte.docx",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Gemischtes Schweine- oder Wildschweinfleisch", "menge": 450, "einheit": "g" },
            { "name": "Rind- oder Hirschfleisch", "menge": 300, "einheit": "g" },
            { "name": "Fetter kerniger Speck", "menge": 250, "einheit": "g" }
        ],
        "zutaten": [],
        "gewuerze": [
            { "name": "Salz (od. NPS)", "menge": 25, "einheit": "g", "proKg": true },
            { "name": "Paprikapulver edelsüß", "menge": 10, "einheit": "g", "proKg": true },
            { "name": "Schwarzer Pfeffer gemahlen", "menge": 2.5, "einheit": "g", "proKg": true },
            { "name": "Frischer Knoblauch", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Piment gemahlen", "menge": 0.2, "einheit": "g", "proKg": true },
            { "name": "Muskatnuss gemahlen", "menge": 0.3, "einheit": "g", "proKg": true },
            { "name": "Puderzucker", "menge": 2, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Geklebter Schweinedarm", "kaliber": "50", "menge": "passend" },
        "ausgabe": "ca. 1 kg Pick Salami",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    { "titel": "Schneiden und marinieren", "inhalt": "Fleisch und Speck in ca. 2×2 cm Würfel schneiden. Mit Gewürzen vermengen und 2–3 Tage im Kühlschrank ziehen lassen, täglich gut vermengen." },
                    { "titel": "Wolfen und füllen", "inhalt": "Durch die 4mm Scheibe wolfen. Brät fest und blasenfrei in 50er Schweinedärme füllen." },
                    { "titel": "Trocknen und räuchern", "inhalt": "1 Tag zum Trocknen aufhängen. Dann 1 Woche kalt räuchern. Danach in Holzasche oder Gips trocknen lassen." }
                ]
            }
        ],
        "tipps": ["Salpeter kann durch NPS ersetzt werden"]
    },
    {
        "id": 138,
        "titel": "Salami Kolbàsz Art (Marchtrenker Hobbywurstlerei)",
        "kategorie": "Salami",
        "beschreibung": "Pikante Rohwurst im Kolbász-Stil mit Starterkulturen, Rotwein und Rum – im DryAger gereift",
        "quelle": "Salami Kolbàsz Art.pdf",
        "basisMenge": { "gesamt": 3000 },
        "fleischsorten": [
            { "name": "Schwein (Schopf, Bauch, Schulter – mager)", "menge": 1500, "einheit": "g" },
            { "name": "Rind (mager, Schulter, Hochrippe)", "menge": 1000, "einheit": "g" },
            { "name": "Rückenspeck", "menge": 500, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Starterkulturen (Bactoferment)", "menge": 2, "einheit": "g" },
            { "name": "Rotwein trocken", "menge": 6, "einheit": "cl" },
            { "name": "Rum (Jamaica)", "menge": 6, "einheit": "cl" }
        ],
        "gewuerze": [
            { "name": "Nitritpökelsalz", "menge": 11, "einheit": "g", "proKg": true },
            { "name": "Quellsalz", "menge": 11, "einheit": "g", "proKg": true },
            { "name": "Pfeffer schwarz (gemahlen, etwas grober)", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Traubenzucker", "menge": 1.7, "einheit": "g", "proKg": true },
            { "name": "Paprika edelsüß", "menge": 10, "einheit": "g", "proKg": true },
            { "name": "Paprika scharf", "menge": 4, "einheit": "g", "proKg": true },
            { "name": "Knoblauchgranulat", "menge": 3.7, "einheit": "g", "proKg": true },
            { "name": "Kümmel fein gemahlen", "menge": 1, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Geklebter Schweinedarm", "kaliber": "55/30", "menge": "passend" },
        "ausgabe": "ca. 3 kg Salami",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    { "titel": "Wolfen und einfrieren", "inhalt": "Fleisch jedes für sich in wolfgerechte Stücke schneiden und durch die 6mm Scheibe wolfen. Dann einfrieren. Ebenso den Speck." },
                    { "titel": "Kuttern", "inhalt": "Gefrorenes Rindfleisch feinkörnig kuttern unter Beigabe von Rotwein. Starterkulturen zugeben und einkuttern. Schweinefleisch portionsweise zugeben. Gewürze zugeben und einkuttern. Gefrorenen Speck zuletzt kuttern bis gewünschte Körnung." },
                    { "titel": "Salz und füllen", "inhalt": "NPS und Quellsalz erst in den letzten Runden einkuttern. Auf unter 0°C kühlen und in geklebte Schweinsdärme 55/30 füllen." },
                    { "titel": "Reifen", "inhalt": "5 Tage bei 20°C und 90% Luftfeuchtigkeit umröten lassen. Dann bei reduzierter Temperatur weiter reifen." }
                ]
            }
        ],
        "tipps": [
            "Die Salami schwitzt bei der Umrötung – mit lauwarmem Wasser waschen",
            "Reifung im DryAger empfohlen"
        ]
    },
    {
        "id": 139,
        "titel": "Pfeffer-Senf-Salami ala Meindl",
        "kategorie": "Salami",
        "beschreibung": "Aromatische Salami mit Senfkörnern und geschrotetem Pfeffer – mit Starterkulturen gereift",
        "quelle": "Salami ala' Meindl.pdf · Version 1.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Schweineschulter", "menge": 350, "einheit": "g" },
            { "name": "Rinderbug", "menge": 350, "einheit": "g" },
            { "name": "Schweinespeck (Rücken)", "menge": 300, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Starterkulturen", "menge": 0, "einheit": "nach Anweisung" }
        ],
        "gewuerze": [
            { "name": "NPS (Nitritpökelsalz)", "menge": 26, "einheit": "g", "proKg": true },
            { "name": "Senfkörner", "menge": 7, "einheit": "g", "proKg": true },
            { "name": "Weißer Pfeffer", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Pfeffer geschrotet", "menge": 6, "einheit": "g", "proKg": true },
            { "name": "Paprika edelsüß", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Knoblauchgranulat", "menge": 2, "einheit": "g", "proKg": true },
            { "name": "Piment", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Muskat", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Koriander", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Kümmel", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Traubenzucker", "menge": 3, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Nukki-Därme oder beliebig", "kaliber": "beliebig", "menge": "passend" },
        "ausgabe": "ca. 1 kg Salami",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    { "titel": "Wolfen", "inhalt": "Fleisch und Speck anfrosten. Durch die 3mm Scheibe wolfen, nochmals anfrosten. Dann Fleisch durch 2mm Scheibe, Speck durch 5mm Scheibe wolfen." },
                    { "titel": "Mischen", "inhalt": "Fleisch und Speck mit Gewürzen gut durchmischen – mindestens 5 Minuten länger als man denkt fertig zu sein! Perfekte, feste Bindung muss entstehen." },
                    { "titel": "Füllen", "inhalt": "In gewünschte Därme abfüllen." },
                    { "titel": "Reifen", "inhalt": "4 Tage bei ca. 20°C und 90–95% Luftfeuchtigkeit. Dann auf 16°C und 85% reduzieren, alle 2 Tage mit feuchtem Tuch abreiben." },
                    { "titel": "Räuchern", "inhalt": "Nach weiteren 10 Tagen: 3 Räuchergänge à 6 Stunden kalt räuchern." }
                ]
            }
        ],
        "tipps": ["Gründliches Mischen ist entscheidend – perfekte feste Bindung muss entstehen"]
    },
    {
        "id": 140,
        "titel": "Salami (Rind-Speck, mit Reifetabelle)",
        "kategorie": "Salami",
        "beschreibung": "Einfache Rind-Speck-Salami ohne Starterkulturen – genaue Reifesteuerung über 13 Tage",
        "quelle": "salami-2-12-19.pdf",
        "basisMenge": { "gesamt": 1000 },
        "fleischsorten": [
            { "name": "Mageres Rindfleisch", "menge": 600, "einheit": "g" },
            { "name": "Rückenspeck", "menge": 400, "einheit": "g" }
        ],
        "zutaten": [
            { "name": "Knoblauch", "menge": 2, "einheit": "Zehen" }
        ],
        "gewuerze": [
            { "name": "Nitritpökelsalz", "menge": 26, "einheit": "g", "proKg": true },
            { "name": "Rohrzucker", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Schwarzer Pfeffer geschrotet", "menge": 3, "einheit": "g", "proKg": true },
            { "name": "Schwarzer Pfeffer gemahlen", "menge": 1.5, "einheit": "g", "proKg": true },
            { "name": "Paprika edelsüß", "menge": 1, "einheit": "g", "proKg": true },
            { "name": "Paprika scharf", "menge": 2, "einheit": "g", "proKg": true }
        ],
        "darm": { "typ": "Kunstdarm", "kaliber": "55mm", "menge": "passend" },
        "ausgabe": "ca. 1 kg Salami",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    { "titel": "Kuttern", "inhalt": "Fleisch und Speck eingefrieren, kuttern mit Gewürzen (außer NPS) bis leichte Bindung. Dann NPS zugeben. Brät darf nicht wärmer als 2°C werden, sonst nochmals anfrieren." },
                    { "titel": "Füllen", "inhalt": "Luftfrei in 55mm Kunstdarm füllen." }
                ]
            },
            {
                "gruppe": "Reifung (18°C)",
                "schritte": [
                    { "titel": "Tage 1–4", "inhalt": "Tag 1: 94% Luftfeuchtigkeit. Tag 2–3: 92%. Tag 4: 90%." },
                    { "titel": "Tage 5–12", "inhalt": "Tage 5–6: 90%. Tage 7–9: 87%. Tage 10–12: 80%. Nach Tag 12: unter 15°C und 70% Luftfeuchtigkeit." },
                    { "titel": "Räuchern", "inhalt": "Nach Tag 12: 12 Stunden kalt räuchern. Täglich Luftaustausch wichtig!" }
                ]
            }
        ],
        "tipps": [
            "Täglicher Luftaustausch ist wichtig",
            "Falls kein Kutter vorhanden: gefrorenes Fleisch durch 4,5mm Scheibe, Speck durch 3mm wolfen, dann in Küchenmaschine bis leichte Bindung mengen"
        ]
    },
    {
        id: 173,
        titel: "Csemege Kolbász (Feinkost Kolbász)",
        kategorie: "Salami",
        beschreibung: "Altes ungarisches Feinkost-Kolbász-Rezept – 1 Woche kalt räuchern",
        quelle: "Alte Ungarische Kolbász und Salamirezepte.docx",
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
            { name: "Frischer Knoblauch", menge: 3, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 0.5, einheit: "g", proKg: true },
            { name: "Muskatnuss gemahlen", menge: 0.3, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Salpeter (reduziert auf empfohlene Menge)", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30", menge: "passend" },
        ausgabe: "ca. 1 kg Kolbász",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Vorbereitung", inhalt: "Fleisch und Speck in ca. 2×2cm Würfel schneiden. Mit Gewürzen vermengen und 2-3 Tage im Kühlschrank ziehen lassen, täglich einmal gut vermengen." },
            { titel: "Wolfen und füllen", inhalt: "Durch 4mm Scheibe wolfen. Fest und blasenfrei in 30er Schweinedärme füllen." },
            { titel: "Trocknen und räuchern", inhalt: "1 Tag zum Trocknen aufhängen. Anschließend 1 Woche kalt räuchern." },
            { titel: "Trocknen", inhalt: "Nach dem Räuchern in Holzasche oder Gips zum Trocknen legen." }
        ]}],
        tipps: [
            "Salpeter kann durch NPS ersetzt werden – dann entsprechende NPS-Menge anstatt Salz verwenden",
            "Verzehr erst nach 4 Wochen empfohlen wenn Salpeter verwendet"
        ]
    },
    {
        id: 174,
        titel: "Csemege Téli Szalámi (Feinkost Wintersalami)",
        kategorie: "Salami",
        beschreibung: "Altes ungarisches Wintersalami-Rezept",
        quelle: "Alte Ungarische Kolbász und Salamirezepte.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Gemischtes Schweine- oder Wildschweinfleisch", menge: 820, einheit: "g" },
            { name: "Fetter kerniger Speck", menge: 180, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz", menge: 25, einheit: "g", proKg: true },
            { name: "Paprikapulver edelsüß", menge: 10, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 1.7, einheit: "g", proKg: true },
            { name: "Frischer Knoblauch", menge: 2, einheit: "g", proKg: true },
            { name: "Piment gemahlen", menge: 0.3, einheit: "g", proKg: true },
            { name: "Muskatnuss gemahlen", menge: 0.3, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Salpeter (reduziert)", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Geklebter Schweinedarm", kaliber: "50", menge: "passend" },
        ausgabe: "ca. 1 kg Wintersalami",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Zubereitung", inhalt: "Wie Csemege Kolbász: Würfeln, 2-3 Tage marinieren, wolfen, füllen, trocknen, 1 Woche räuchern." }
        ]}],
        tipps: ["Zubereitung identisch mit Csemege Kolbász"]
    },
    {
        id: 175,
        titel: "Brettsalami",
        kategorie: "Salami",
        beschreibung: "Rustikale Salami auf Fichtenholzbrett gereift – ohne Darm, 2× geräuchert",
        quelle: "Brettsalami 1.docx",
        basisMenge: { gesamt: 1500 },
        fleischsorten: [
            { name: "Mageres Schweinefleisch", menge: 825, einheit: "g" },
            { name: "Mageres Rindfleisch", menge: 300, einheit: "g" },
            { name: "Schweinebauchfleisch", menge: 275, einheit: "g" },
            { name: "Schweinerückenspeck", menge: 100, einheit: "g" }
        ],
        zutaten: [
            { name: "Starterkulturen für Rohwurst (nach Herstellerangabe)", menge: null, einheit: "optional" }
        ],
        gewuerze: [
            { name: "NPS (Pökelsalz)", menge: 27, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 5, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 10, einheit: "g", proKg: true },
            { name: "Paprika scharf", menge: 3, einheit: "g", proKg: true },
            { name: "Traubenzucker", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauch frisch oder gemahlen", menge: 5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kein Darm – auf Brett formen", kaliber: "", menge: "" },
        ausgabe: "3 Kugeln à ca. 500g",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Wolfen", inhalt: "Fleisch in Streifen schneiden, 1 Stunde ins Tiefkühlfach. Dann durch 3mm Scheibe wolfen, Gewürze zugeben." },
            { titel: "Kneten", inhalt: "5 Minuten auf kleinster Stufe in Küchenmaschine kneten." },
            { titel: "Brett-Reifung", inhalt: "3 Kugeln à 500g formen, breit drücken. Auf unbehandeltes Fichtenbrett legen. 4 Tage bei 22-23°C voreifen." },
            { titel: "Räuchern", inhalt: "2× je 12 Stunden im Räucherofen, mit je 12 Stunden Pause. Nach dem 1. Durchgang wenden. Anschließend wieder aufs Brett und weitere 4-5 Tage reifen." }
        ]}],
        tipps: ["Starterkulturen oder Natriumascorbat unterstützen Reifung, aber kein Muss"]
    },
    {
        id: 176,
        titel: "Salami mit Reifetabelle",
        kategorie: "Salami",
        beschreibung: "Einfache Salami 50/50 Schwein – mit detaillierter Reifetabelle für Heimreifeschrank",
        quelle: "Salami Rezept.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauch", menge: 500, einheit: "g" },
            { name: "Schweineschulter", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Starterkulturen (Lay Starter Naturo o.ä.)", menge: 0.5, einheit: "g", proKg: true }
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
        darm: { typ: "Kunstdarm (Hukkies)", kaliber: "60/40", menge: "passend" },
        ausgabe: "ca. 1 kg Salami",
        schritte: [{ gruppe: "Reifung", schritte: [
            { titel: "Reifetabelle (Tage 1-7)", inhalt: "Tag 1: 23°C/95%LF. Tag 2: 22°C/93%. Tag 3: 21°C/92%. Tag 4: 20°C/92%. Tag 5: 19°C/90%. Tag 6-7: 19°C/90%. Lüfter täglich 4×10min." }
        ]}],
        tipps: ["Umgebauter Getränkekühlschrank eignet sich als Reifeschrank"]
    },
    {
        id: 177,
        titel: "Kochsalami (Rindgrundbrät mit Schweinbauch-Einlage)",
        kategorie: "Salami",
        beschreibung: "Kochsalami mit Rindergrundbrät und gewürfelter Schweinebauch-Einlage – geräuchert und gebrüht",
        quelle: "Kochsalami.pdf (Rezeptrechner)",
        basisMenge: { gesamt: 1600 },
        fleischsorten: [
            { name: "Rindfleischkeule (mager) – Grundbrät", menge: 400, einheit: "g" },
            { name: "Rindfleisch (gut durchwachsen) – Grundbrät", menge: 350, einheit: "g" },
            { name: "Schüttung (Eis) – Grundbrät", menge: 250, einheit: "g" },
            { name: "Schweinebauch (durchwachsen) – Einlage", menge: 600, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "NPS (Grundbrät)", menge: 21, einheit: "g", proKg: true },
            { name: "KHM (Grundbrät)", menge: 5, einheit: "g", proKg: true },
            { name: "Ascorbinsäure (Grundbrät)", menge: 1, einheit: "g", proKg: true }
        ],
        darm: { typ: "Räucherbarer Hautfaserdarm", kaliber: "80/50", menge: "passend" },
        ausgabe: "ca. 1,6 kg Kochsalami",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Grundbrät", inhalt: "Rindergrundbrät hochkuttern bis 12°C." },
            { titel: "Einlage", inhalt: "Schweinebauch in kleine Würfel schneiden, über Nacht einfrieren. Gewürze der Einlage (außer Senfkörner) zugeben, gefrorene Bauchwürfel bis Stecknadelkopfgröße kuttern. Erst jetzt Senfkörner zugeben (2-3 Runden mitkuttern)." },
            { titel: "Füllen und trocknen", inhalt: "In Hautfaserdärme Kal. 80/50 abfüllen. Ca. 24h bei 18-20°C trocknen." },
            { titel: "Räuchern und brühen", inhalt: "2× kalt räuchern. Dann bei 75°C brühen (1min/mm Kaliber)." }
        ]}],
        tipps: []
    },
    {
        id: 178,
        titel: "Salami mit grünem Pfeffer",
        kategorie: "Salami",
        beschreibung: "Würzige Salami mit grünem Pfeffer und Rotweinwürze – 2× 6h geräuchert, mind. 50 Tage Reifung",
        quelle: "salami-mit-gruenem-pfeffer.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [],
        zutaten: [
            { name: "Rotweinwürze (1 Knoblauchzehe + 30ml Rotwein, 2h ziehen, filtern)", menge: 10, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Pökelsalz", menge: 23, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 3.5, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Grüner Pfeffer getrocknet (oder 9g eingelegt)", menge: 6, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Paprika edelsüß", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.5, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Rohwurstdarm", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 1 kg Salami",
        schritte: [{ gruppe: "Reifung und Räuchern", schritte: [
            { titel: "Vorreife", inhalt: "Nach dem Füllen bei ca. 18°C und 85% Luftfeuchtigkeit 4 Tage reifen." },
            { titel: "Räuchern", inhalt: "2 Räuchergänge à je 6 Stunden." },
            { titel: "Nachreifen", inhalt: "Anschließend mindestens 50 Tage Gesamtreifezeit. Alle 2 Tage mit feuchtem Tuch abreiben." }
        ]}],
        tipps: [
            "Rotweinwürze: Knoblauch zerstoßen + 30ml Rotwein, 2h ziehen, filtern",
            "Lufttrocknen möglich statt Räuchern"
        ]
    },

    {
        id: 187,
        titel: "Kochsalami (Rind-Schulter-Bauch mit Peperoni)",
        kategorie: "Salami",
        beschreibung: "Kochsalami aus Rind, Schweineschulter und Bauch – mit Peperoni, heiß geräuchert und gebrüht.",
        quelle: "Sonstiges/kochsalami.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Rindfleisch (max. 10% Fett)", menge: 230, einheit: "g" },
            { name: "Schweineschulter (max. 5% Fett)", menge: 300, einheit: "g" },
            { name: "Schweinebauch mager (max. 25% Fett)", menge: 400, einheit: "g" }
        ],
        zutaten: [
            { name: "Eiskaltes Mineralwasser", menge: 70, einheit: "ml" },
            { name: "Peperoni aus dem Glas, ohne Kerne, in Streifen", menge: 7, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "NPS (Pökelsalz)", menge: 20, einheit: "g", proKg: true },
            { name: "Pfefferkörner schwarz (2 Tage eingeweicht)", menge: 6, einheit: "g", proKg: true },
            { name: "Koriander", menge: 1, einheit: "g", proKg: true },
            { name: "Muskat", menge: 0.7, einheit: "g", proKg: true },
            { name: "Kümmelpulver", menge: 0.5, einheit: "g", proKg: true },
            { name: "Selleriesalz", menge: 1, einheit: "g", proKg: true },
            { name: "Senfkörner", menge: 7, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 2, einheit: "g", proKg: true },
            { name: "Piment", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ascorbinsäure", menge: 1.5, einheit: "g", proKg: true },
            { name: "Kutterhilfsmittel (KHM)", menge: 6, einheit: "g", proKg: true }
        ],
        darm: { typ: "Naturdarm oder räucherbare Faserhüllen", kaliber: "passend", menge: null },
        ausgabe: "ca. 1 kg Kochsalami",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Pfefferkörner vorbereiten", inhalt: "Pfefferkörner mit wenig Wasser kurz aufkochen und 2 Tage einweichen (mürbe werden lassen)." },
            { titel: "Rinderbrät herstellen", inhalt: "Rindfleisch mit Mineralwasser, anteiligem NPS und KHM 2× wolfen (3er Scheibe). Mineralwasser einarbeiten." },
            { titel: "Gesamtbrät", inhalt: "Rinderbrät mit Schweinefleisch und allen Gewürzen vermengen. Mit 12er oder 14er Scheibe wolfen." },
            { titel: "Füllen und räuchern", inhalt: "In Naturdarm oder räucherbare Faserhüllen füllen. 75 Min. bei 60°C heiß räuchern. Dann bei 80°C brühen (1,5 Min./mm Durchmesser). Im kalten Wasser abkühlen." },
            { titel: "Kalt nachräuchern", inhalt: "Nach Erkalten ca. 20 Stunden kalt nachräuchern." }
        ]}],
        tipps: [
            "Fleisch 2 Tage vorsalzen macht die Wurst noch röter",
            "Pfefferkörner müssen mürbe sein – Mikrowelle beschleunigt das Einweichen"
        ]
    },
    {
        id: 260,
        titel: "Ziegensalami",
        kategorie: "Salami",
        beschreibung: "Rustikale Ziegensalami aus Ziegenkeule und -brust mit Schweinespeck – kalt geräuchert.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 5000,
        fleischsorten: [
            { name: "Ausgelöste Ziegenkeule, tiefgekühlt", menge: 1800, einheit: "g" },
            { name: "Ausgelöste Ziegenbrust, tiefgekühlt", menge: 700, einheit: "g" },
            { name: "Kerniger Schweinespeck, gefroren", menge: 2500, einheit: "g" }
        ],
        zutaten: [
            { name: "Rotwein", menge: 5, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "Nitritpökelsalz (NPS)", menge: 24, einheit: "g", proKg: true },
            { name: "Rohrzucker", menge: 2, einheit: "g", proKg: true },
            { name: "Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true }
        ],
        darm: { typ: "Weite Mitteldärme", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 5 kg Ziegensalami",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Wolfen", inhalt: "Ziegenfleisch durch 5mm Scheibe, Speck durch 3mm Scheibe wolfen." },
            { titel: "Würzen und mengen", inhalt: "Gewürze und Rotwein zugeben, alles gut vermengen." },
            { titel: "Füllen und reifen", inhalt: "In weite Mitteldärme füllen, abbinden. 5 Tage bei ca. 20°C und 85-90% relativer Luftfeuchtigkeit reifen lassen." },
            { titel: "Räuchern", inhalt: "Kalt räuchern bis dunkelrote Farbe erreicht ist (ca. 3 Tage)." }
        ]}],
        tipps: ["Fleisch von schwereren Ziegen verwenden für intensiveren Geschmack"]
    },

    // ── Alte Ungarische Rezepte – Rest ──────────────────────────
    {
        id: 274,
        titel: "Téli Pick Szalámi (Pick Wintersalami)",
        kategorie: "Salami",
        beschreibung: "Altes ungarisches Pick Wintersalami-Rezept mit Schwein, Rind und Speck.",
        quelle: "Alte Ungarische Rezepte.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Gemischtes Schweine- oder Wildschweinfleisch", menge: 620, einheit: "g" },
            { name: "Rind- oder Hirschfleisch", menge: 200, einheit: "g" },
            { name: "Fetter kerniger Speck", menge: 180, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz (od. NPS)", menge: 25, einheit: "g", proKg: true },
            { name: "Paprikapulver edelsüß", menge: 10, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer gemahlen", menge: 1.7, einheit: "g", proKg: true },
            { name: "Frischer Knoblauch", menge: 2, einheit: "g", proKg: true },
            { name: "Piment gemahlen", menge: 0.3, einheit: "g", proKg: true },
            { name: "Salpeter (reduziert)", menge: 0.3, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Geklebter Schweinedarm", kaliber: "50", menge: "passend" },
        ausgabe: "ca. 1 kg Wintersalami",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Zubereitung", inhalt: "Fleisch und Speck in ca. 2×2cm Würfel schneiden. Mit Gewürzen vermengen und 2-3 Tage im Kühlschrank ziehen lassen, täglich vermengen. Durch 4mm Scheibe wolfen. Fest und blasenfrei in 50er Schweinedärme füllen. 1 Tag zum Trocknen aufhängen, dann 1 Woche kalt räuchern. Danach in Holzasche oder Gips trocknen legen." }
        ]}],
        tipps: ["Salpeter kann durch NPS ersetzt werden – dann entsprechende NPS-Menge verwenden"]
    },
    {
        id: 275,
        titel: "Csemege paprikás Pick Szalámi (Pick Feinkost Paprikasalami)",
        kategorie: "Salami",
        beschreibung: "Altes ungarisches Feinkost-Paprikasalami-Rezept mit Schwein, Rind und Speck.",
        quelle: "Alte Ungarische Rezepte.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Gemischtes Schweine- oder Wildschweinfleisch", menge: 450, einheit: "g" },
            { name: "Rind- oder Hirschfleisch", menge: 300, einheit: "g" },
            { name: "Fetter kerniger Speck", menge: 250, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz (od. NPS)", menge: 26, einheit: "g", proKg: true },
            { name: "Paprikapulver edelsüß", menge: 18, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 1.7, einheit: "g", proKg: true },
            { name: "Frischer Knoblauch", menge: 3, einheit: "g", proKg: true },
            { name: "Piment gemahlen", menge: 0.2, einheit: "g", proKg: true },
            { name: "Muskatnuss gemahlen", menge: 0.3, einheit: "g", proKg: true },
            { name: "Salpeter (reduziert)", menge: 0.3, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Geklebter Schweinedarm", kaliber: "50", menge: "passend" },
        ausgabe: "ca. 1 kg Paprikasalami",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Zubereitung", inhalt: "Fleisch und Speck in ca. 2×2cm Würfel schneiden. Mit Gewürzen vermengen und 2-3 Tage im Kühlschrank ziehen lassen, täglich vermengen. Durch 4mm Scheibe wolfen. Fest und blasenfrei in 50er Schweinedärme füllen. 1 Tag zum Trocknen aufhängen, dann 1 Woche kalt räuchern. Danach in Holzasche oder Gips trocknen legen." }
        ]}],
        tipps: ["Salpeter kann durch NPS ersetzt werden"]
    },
    {
        id: 276,
        titel: "Paprikás nyári Pick Szalámi (Pick Sommersalami mit Paprika)",
        kategorie: "Salami",
        beschreibung: "Altes ungarisches Sommersalami-Rezept – paprikabetont mit Schwein und Speck.",
        quelle: "Alte Ungarische Rezepte.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Gemischtes Schweine- oder Wildschweinfleisch", menge: 820, einheit: "g" },
            { name: "Fetter kerniger Speck", menge: 180, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz (od. NPS)", menge: 25, einheit: "g", proKg: true },
            { name: "Paprikapulver edelsüß", menge: 20, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 3.8, einheit: "g", proKg: true },
            { name: "Frischer Knoblauch", menge: 2, einheit: "g", proKg: true },
            { name: "Salpeter (reduziert)", menge: 0.3, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm", kaliber: "30-50", menge: "passend" },
        ausgabe: "ca. 1 kg Sommersalami",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Zubereitung", inhalt: "Fleisch und Speck in ca. 2×2cm Würfel schneiden. Mit Gewürzen vermengen und 2-3 Tage im Kühlschrank ziehen lassen, täglich vermengen. Durch 4mm Scheibe wolfen. Fest und blasenfrei in Schweinedärme füllen. 1 Tag zum Trocknen aufhängen, dann 1 Woche kalt räuchern. Danach in Holzasche oder Gips trocknen legen." }
        ]}],
        tipps: ["Salpeter kann durch NPS ersetzt werden"]
    },
    {
        id: 277,
        titel: "Csemege csípős paprikás Szalámi (Feinkost Paprikasalami scharf)",
        kategorie: "Salami",
        beschreibung: "Altes ungarisches scharfes Paprikasalami-Rezept mit Schwein, Rind und Speck.",
        quelle: "Alte Ungarische Rezepte.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Gemischtes Schweine- oder Wildschweinfleisch", menge: 600, einheit: "g" },
            { name: "Rind- oder Hirschfleisch", menge: 100, einheit: "g" },
            { name: "Fetter kerniger Speck", menge: 300, einheit: "g" }
        ],
        zutaten: [],
        gewuerze: [
            { name: "Salz (od. NPS)", menge: 26, einheit: "g", proKg: true },
            { name: "Paprikapulver scharf", menge: 25, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 3.3, einheit: "g", proKg: true },
            { name: "Salpeter (reduziert)", menge: 0.3, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinedarm oder Kunstdarm", kaliber: "30-50", menge: "passend" },
        ausgabe: "ca. 1 kg scharfe Paprikasalami",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Zubereitung", inhalt: "Fleisch und Speck in ca. 2×2cm Würfel schneiden. Mit Gewürzen vermengen und 2-3 Tage im Kühlschrank ziehen lassen, täglich vermengen. Durch 4mm Scheibe wolfen. Fest und blasenfrei in Därme füllen. 1 Tag zum Trocknen aufhängen, dann 1 Woche kalt räuchern. Danach in Holzasche oder Gips trocknen legen." }
        ]}],
        tipps: ["Salpeter kann durch NPS ersetzt werden", "Sehr scharf – Paprikamenge nach Geschmack anpassen"]
    },
    {
        id: 278,
        titel: "Pick Szalámi (Pick Salami)",
        kategorie: "Salami",
        beschreibung: "Das Original – altes ungarisches Pick Salami-Rezept mit Schwein, Rind und Speck sowie Cognac oder Rum.",
        quelle: "Alte Ungarische Rezepte.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Gemischtes Schweine- oder Wildschweinfleisch", menge: 670, einheit: "g" },
            { name: "Rind- oder Hirschfleisch", menge: 220, einheit: "g" },
            { name: "Fetter kerniger Speck", menge: 110, einheit: "g" }
        ],
        zutaten: [
            { name: "Cognac oder Rum", menge: 2, einheit: "cl" }
        ],
        gewuerze: [
            { name: "Salz (od. NPS)", menge: 24, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer gemahlen", menge: 2.7, einheit: "g", proKg: true },
            { name: "Frischer Knoblauch", menge: 2, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 1.5, einheit: "g", proKg: true },
            { name: "Piment gemahlen", menge: 0.2, einheit: "g", proKg: true },
            { name: "Muskatnuss gemahlen", menge: 2, einheit: "g", proKg: true },
            { name: "Ingwer gemahlen", menge: 0.2, einheit: "g", proKg: true },
            { name: "Salpeter (reduziert)", menge: 0.3, einheit: "g", proKg: true },
            { name: "Puderzucker", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Geklebter Schweinedarm", kaliber: "50", menge: "passend" },
        ausgabe: "ca. 1 kg Pick Salami",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Zubereitung", inhalt: "Fleisch und Speck in ca. 2×2cm Würfel schneiden. Mit Gewürzen und Cognac/Rum vermengen und 2-3 Tage im Kühlschrank ziehen lassen, täglich vermengen. Durch 4mm Scheibe wolfen. Fest und blasenfrei in 50er Schweinedärme füllen. 1 Tag zum Trocknen aufhängen, dann 1 Woche kalt räuchern. Danach in Holzasche oder Gips trocknen legen." }
        ]}],
        tipps: [
            "Salpeter kann durch NPS ersetzt werden – Verzehr erst nach 4 Wochen bei Salpeter",
            "Cognac oder Rum verleihen das typische Pick-Aroma"
        ]
    }
,

    {
        id: 327,
        titel: "Schweizer Salami (Handbuch)",
        kategorie: "Salami",
        beschreibung: "Historische Schweizer Salami mit Chianti – aus Kuh-, Schweinefleisch und festem Speck, luftgetrocknet",
        quelle: "Handbuch für die Wursterei (Eggenschwiler/Schweizer)",
        basisMenge: "22,5 kg",
        fleischsorten: [
            { name: "Kuhfleisch (fett- und sehnenfrei)", menge: "600g" },
            { name: "Schweinefleisch (Schinken und Schulter)", menge: "1000g" },
            { name: "Nacken- und fester Rückenspeck", menge: "650g" }
        ],
        zutaten: [
            { name: "Chianti", menge: "0,5 dl/kg Gesamtmasse" }
        ],
        gewuerze: [
            { name: "Salz", menge: "28g/kg" },
            { name: "Salpeter", menge: "0,5g/kg" },
            { name: "Rohrzucker", menge: "1,5g/kg" },
            { name: "Pfeffer (schwarz, gemahlen)", menge: "1,5g/kg" },
            { name: "Knoblauch", menge: "0,5g/kg" }
        ],
        darm: "Schweinsdärme (Afterstücke)",
        ausgabe: "ca. 22,5 kg Rohgewicht",
        schritte: [
            { titel: "Fleisch vorbereiten", inhalt: "Kuhfleisch gut durchkühlen, durch 5mm Scheibe. Schweinefleisch in 4cm Würfel. Speck leicht gefrieren, in gewünschte Form schneiden." },
            { titel: "Blitzen", inhalt: "Im Blitz (2 Rundmesser) zuerst den Speck kurz blitzen. Dann Schweinefleisch, dann Kuhfleisch zugeben." },
            { titel: "Vermengen", inhalt: "Alle Zutaten mit Chianti und Gewürzen gut vermengen. In Schweinsdärme füllen." },
            { titel: "Reifen", inhalt: "4-5 Tage durchröten (10-14°C, 80-85% Feuchte). Dann in Trockenraum oder Schwitzraum verbringen. Wöchentlich kontrollieren." }
        ],
        tipps: "Schweizer Salami unterscheidet sich durch Chianti und den Anteil Schweizer Kuhfleisch. Schweinsdärme (Afterstücke) geben das typische gebogene Aussehen."
    }
];
