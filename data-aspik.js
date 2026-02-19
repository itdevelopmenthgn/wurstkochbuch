// Kategorie: Aspik & Sülze
const rezepte_aspik = [
    {
        "id": 41,
        "titel": "Sülzwurst aus Eisbein",
        "kategorie": "Aspik & Sülze",
        "beschreibung": "Würzige Sülzwurst mit gepökeltem Eisbein, Gelatine und Kochsud – als Wurst oder im Glas",
        "quelle": "Aspik / Wurst im Glas / Root",
        "basisMenge": {
            "gesamt": 1600
        },
        "fleischsorten": [
            {
                "name": "Gepökeltes Eisbein",
                "menge": 2,
                "einheit": "Stück"
            }
        ],
        "zutaten": [
            {
                "name": "Entfetteter Kochsud",
                "menge": 500,
                "einheit": "ml"
            },
            {
                "name": "Gelatinepulver (280 Bloom)",
                "menge": 30,
                "einheit": "g"
            },
            {
                "name": "Zwiebel (für Kochsud)",
                "menge": 1,
                "einheit": "Stück"
            },
            {
                "name": "Lorbeerblätter (für Kochsud)",
                "menge": 4,
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
                "name": "Kümmel (frisch gemahlen)",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Schwarzer Pfeffer (frisch gemahlen)",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Zwiebel (granuliert)",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauch (granuliert)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Muskatnuss (frisch gerieben)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Energiedarm Kaliber 90/50 oder Gläser",
            "kaliber": "90/50",
            "menge": "passend"
        },
        "ausgabe": "ca. 2 kg Sülzwurst",
        "schritte": [
            {
                "gruppe": "Eisbeine kochen",
                "schritte": [
                    {
                        "titel": "Eisbeine garen",
                        "inhalt": "Eisbeine in Wasser mit gespickter Zwiebel (Nelke) und Lorbeerblättern bei 80°C ca. 3 Stunden ziehen lassen bis Fleisch sich vom Knochen löst."
                    },
                    {
                        "titel": "Fleisch auslösen",
                        "inhalt": "Eisbeine herausnehmen, einschneiden und Knochen herauslösen. Fleisch vom Knochen lösen."
                    }
                ]
            },
            {
                "gruppe": "Fleisch vorbereiten",
                "schritte": [
                    {
                        "titel": "Aufteilen",
                        "inhalt": "Magere Muskelstränge als Einlagefleisch (Würfel 1–2 cm). Schwarte, Speck und Fettfleisch durch 3 mm Scheibe wolfen."
                    }
                ]
            },
            {
                "gruppe": "Aspik und Abfüllen",
                "schritte": [
                    {
                        "titel": "Gelatine einrühren",
                        "inhalt": "Sud durch Kaffeefilter filtern, erkalten lassen, Gelatine einrühren und 30 Min. quellen lassen."
                    },
                    {
                        "titel": "Kochen und mischen",
                        "inhalt": "Salz und Gewürze in den Sud, kurz aufkochen, vom Herd nehmen und zum Gewolften geben. Alles vermengen."
                    },
                    {
                        "titel": "Abfüllen und brühen",
                        "inhalt": "In Energiedarm (90 mm) füllen, fest zubinden. 1 Stunde bei 80°C brühen. Hängend erkalten lassen."
                    }
                ]
            }
        ],
        "tipps": [
            "Alternativ in Gläser füllen und 1,5 Stunden bei 100°C einkochen",
            "Bei 200 Bloom Gelatine: 42 g verwenden"
        ]
    },
    {
        "id": 42,
        "titel": "Sülze (klassisch)",
        "kategorie": "Aspik & Sülze",
        "beschreibung": "Klassische Sülzwurst mit gepökelter Schulter, Speck und Schwarten",
        "quelle": "Leberwurst",
        "basisMenge": {
            "gesamt": 5000
        },
        "fleischsorten": [
            {
                "name": "Schweineschulter (gepökelt)",
                "menge": 3500,
                "einheit": "g"
            },
            {
                "name": "Durchwachsener Speck (gekocht)",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Schwarten (mittelweich gekocht)",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Fleischbrühe",
                "menge": 500,
                "einheit": "ml"
            }
        ],
        "gewuerze": [
            {
                "name": "Pfeffer",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmel (ganz)",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Macis",
                "menge": 0.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ingwer",
                "menge": 0.3,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Mittelrinderdarm (Rinderbuttcn)",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 5 kg Sülze",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Fleisch vorbereiten",
                        "inhalt": "Schulter in 2 cm, Speck in 1 cm große Würfel schneiden. Schwarten zweimal durch 2 mm Scheibe wolfen."
                    },
                    {
                        "titel": "Vermengen und abfüllen",
                        "inhalt": "Mit Brühe und Gewürzen gut vermengen, in Rinderbutten füllen und abbinden."
                    },
                    {
                        "titel": "Garen",
                        "inhalt": "Je nach Darmdurchmesser 60–90 Min. bei 80°C garen."
                    },
                    {
                        "titel": "Abkühlen",
                        "inhalt": "Mit heißem Wasser übergießen (entfetten), auf feuchtem Metalltisch auskühlen, 12 Stunden bei max. 25°C kalt räuchern."
                    }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 60,
        "titel": "Schwartenmagen (Preßkopf)",
        "kategorie": "Aspik & Sülze",
        "beschreibung": "Preßkopf nach Carola Müller – mit Bauch, Kopffleisch und Schwarten, im Darm oder Glas",
        "quelle": "Rezepte",
        "basisMenge": {
            "gesamt": 2450
        },
        "fleischsorten": [
            {
                "name": "Bauchfleisch (roh)",
                "menge": 1350,
                "einheit": "g"
            },
            {
                "name": "Kopffleisch (gekocht)",
                "menge": 640,
                "einheit": "g"
            },
            {
                "name": "Schwarte (gekocht)",
                "menge": 460,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln (gedünstet)",
                "menge": 2,
                "einheit": "Stück"
            },
            {
                "name": "Kochsud (1–2 Tassen)",
                "menge": null,
                "einheit": "nach Bedarf"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Nitritpökelsalz)",
                "menge": 12.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kochsalz",
                "menge": 10.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer schwarz",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ingwer frisch gerieben",
                "menge": 1.2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Piment",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kardamom",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Senfmehl",
                "menge": 0.8,
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
                "name": "Nelkenpulver",
                "menge": null,
                "einheit": "Prise"
            },
            {
                "name": "Kümmelpulver",
                "menge": null,
                "einheit": "Prise"
            }
        ],
        "darm": {
            "typ": "Mitteldarm oder Gläser",
            "kaliber": "50/55",
            "menge": "passend"
        },
        "ausgabe": "ca. 2,5 kg Schwartenmagen",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Schwarten kochen",
                        "inhalt": "Schwarten in leicht gesalzenem Wasser weich kochen. Zwiebeln glasig dünsten."
                    },
                    {
                        "titel": "Wolfen",
                        "inhalt": "Roher Bauch und gekochtes Kopffleisch durch 8mm Scheibe. Schwarten mit Zwiebeln 2× durch 2mm Scheibe. 1–2 Tassen Kochsud durchlaufen lassen."
                    },
                    {
                        "titel": "Mischen",
                        "inhalt": "Gewürze darüber verteilen, alles gut vermengen. Nach Geschmack nachwürzen."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Im Darm: 60 Min. bei 84°C garen. Im Glas: 120 Min. bei 90°C einkochen."
                    }
                ]
            }
        ],
        "tipps": [
            "Im Glas ist der Favorit laut Rezept",
            "Kochsud gibt der Masse Feuchtigkeit und Bindung"
        ]
    },
    {
        "id": 61,
        "titel": "Schwartenwurst",
        "kategorie": "Aspik & Sülze",
        "beschreibung": "Deftige Schwartenwurst mit Haxe, Kopffleisch und Zwiebeln – im Darm oder Glas",
        "quelle": "Rezepte",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Haxe gepökelt",
                "menge": 400,
                "einheit": "g"
            },
            {
                "name": "Kopffleisch/Backe",
                "menge": 300,
                "einheit": "g"
            },
            {
                "name": "Schwarten (weich gekocht)",
                "menge": 300,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Kochbrühe",
                "menge": 100,
                "einheit": "ml"
            },
            {
                "name": "Zwiebeln frisch",
                "menge": 70,
                "einheit": "g"
            }
        ],
        "gewuerze": [
            {
                "name": "Kochsalz",
                "menge": 16,
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
                "name": "Majoran",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmelpulver",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchpulver",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kunstdarm oder Gläser",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Schwartenwurst",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Kochen",
                        "inhalt": "Haxe, Schwarten und Backe köcheln. Haxe und Backe herausnehmen, Schwarten bis zum Zerdrücken weiterkochen."
                    },
                    {
                        "titel": "Wolfen",
                        "inhalt": "Haxenfleisch und Kopffleisch durch 8mm Scheibe. Schwarten und Zwiebeln 2× durch 2mm Scheibe wolfen."
                    },
                    {
                        "titel": "Mischen",
                        "inhalt": "Alles mit Kochbrühe und Gewürzen vermengen. Nach Geschmack nachwürzen."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Im Darm: 60 Min. bei 84°C garen. In Gläsern: 120 Min. bei 100°C einkochen."
                    }
                ]
            }
        ],
        "tipps": []
    },
    {
        "id": 80,
        "titel": "Schwartenmagen / Preßkopf (Carola Müller)",
        "kategorie": "Aspik & Sülze",
        "beschreibung": "Würziger Schwartenmagen mit Bauchfleisch, Kopffleisch und Schwarten",
        "quelle": "Schwartenmagen Presskopf nach Carola Mueller.docx",
        "basisMenge": {
            "gesamt": 2450
        },
        "fleischsorten": [
            {
                "name": "Bauchfleisch (roh)",
                "menge": 1350,
                "einheit": "g"
            },
            {
                "name": "Kopffleisch (gekocht)",
                "menge": 640,
                "einheit": "g"
            },
            {
                "name": "Schwarte",
                "menge": 460,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln (gedünstet)",
                "menge": 2,
                "einheit": "Stück"
            },
            {
                "name": "Kochsud",
                "menge": 1,
                "einheit": "Tassen"
            }
        ],
        "gewuerze": [
            {
                "name": "NPS (Nitritpökelsalz)",
                "menge": 12.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kochsalz",
                "menge": 10.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Pfeffer schwarz",
                "menge": 5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Ingwer (frisch gerieben)",
                "menge": 1.2,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Piment",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kardamom",
                "menge": 1.5,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Senfmehl",
                "menge": 0.8,
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
                "name": "Nelkenpulver",
                "menge": null,
                "einheit": "Prise"
            },
            {
                "name": "Kümmelpulver",
                "menge": null,
                "einheit": "Prise"
            }
        ],
        "darm": {
            "typ": "Mitteldarm oder Gläser",
            "kaliber": "50/55",
            "menge": "passend"
        },
        "ausgabe": "ca. 2,5 kg Schwartenmagen",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Schwarten kochen",
                        "inhalt": "Schwarten in leicht gesalzenem Wasser gut weich kochen. Zwiebeln glasig dünsten."
                    },
                    {
                        "titel": "Fleisch wolfen",
                        "inhalt": "Rohen Bauch sowie das gekochte Kopffleisch durch die 8 mm Scheibe drehen. Gewürze darüber verteilen."
                    },
                    {
                        "titel": "Schwarten und Zwiebeln verarbeiten",
                        "inhalt": "Schwarten mit den Zwiebeln 2x durch die 2 mm Scheibe drehen. Am Schluss 1-2 Tassen Kochsud durchlaufen lassen."
                    },
                    {
                        "titel": "Mischen und abfüllen",
                        "inhalt": "Alles zusammenfügen und gut vermengen. Im Darm oder in Gläsern abfüllen."
                    },
                    {
                        "titel": "Garen",
                        "inhalt": "Im Darm: bei 84°C ca. 60 Min. (Mitteldarm 50/55). Im Glas: bei 90°C ca. 120 Min."
                    }
                ]
            }
        ],
        "tipps": [
            "Im Glas ist der Favorit – einfacher und gut haltbar"
        ]
    },
    {
        id: 148,
        titel: "Bauchfleisch in Aspik ala Uwe",
        kategorie: "Aspik & Sülze",
        beschreibung: "Gewürztes Bauchfleisch mit Aspik in Gläsern eingekocht",
        quelle: "Bauch in Aspik.pdf",
        basisMenge: {
            gesamt: 1000
        },
        fleischsorten: [
            {
                name: "Bauchfleisch",
                menge: 1000,
                einheit: "g"
            }
        ],
        zutaten: [
            {
                name: "Aspik",
                menge: 30,
                einheit: "g"
            },
            {
                name: "Zwiebel (klein geschnitten)",
                menge: 1,
                einheit: "mittelgroß"
            },
            {
                name: "Gekörnte Brühe (zum Auffüllen)",
                menge: null,
                einheit: "nach Bedarf"
            }
        ],
        gewuerze: [
            {
                name: "NPS",
                menge: 17,
                einheit: "g",
                proKg: true
            },
            {
                name: "Pfeffer",
                menge: 3,
                einheit: "g",
                proKg: true
            },
            {
                name: "Mazisblüte",
                menge: 1.5,
                einheit: "g",
                proKg: true
            },
            {
                name: "Kümmel",
                menge: null,
                einheit: "1 TL nach Bedarf"
            },
            {
                name: "Majoran",
                menge: 0.3,
                einheit: "g",
                proKg: true
            },
            {
                name: "Koriander (zerstoßen)",
                menge: 0.3,
                einheit: "g",
                proKg: true
            },
            {
                name: "Ingwer",
                menge: 0.3,
                einheit: "g",
                proKg: true
            },
            {
                name: "Dill",
                menge: 0.3,
                einheit: "g",
                proKg: true
            },
            {
                name: "Senfkörner (zerstoßen)",
                menge: 0.3,
                einheit: "g",
                proKg: true
            }
        ],
        darm: {
            typ: "Einmachgläser",
            kaliber: "",
            menge: "passend"
        },
        ausgabe: "ca. 3-4 Gläser",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    {
                        titel: "Fleisch vorbereiten",
                        inhalt: "Bauchfleisch in kleine Stücke schneiden. Mit allen Gewürzen und der Zwiebel vermengen."
                    },
                    {
                        titel: "Einkochen",
                        inhalt: "In Gläser abfüllen, mit etwas gekörnter Brühe auffüllen. 2 Stunden einkochen."
                    },
                    {
                        titel: "Kühl stellen",
                        inhalt: "Abkühlen lassen und 24 Stunden kühl stellen."
                    }
                ]
            }
        ],
        tipps: [
            "NPS-Menge: 15-18g je kg, nach Geschmack anpassen"
        ]
    },
    {
        id: 149,
        titel: "Eisbein im Glas (Sülze)",
        kategorie: "Aspik & Sülze",
        beschreibung: "Weich gekochtes Eisbein mit Sülzenpulver in Gläser eingekocht",
        quelle: "Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: {
            gesamt: 1000
        },
        fleischsorten: [
            {
                name: "Eisbein vom Schwein",
                menge: 1000,
                einheit: "g"
            }
        ],
        zutaten: [
            {
                name: "Sülzenpulver",
                menge: 1,
                einheit: "Päckchen"
            },
            {
                name: "Kochwasser vom Eisbein",
                menge: null,
                einheit: "nach Anleitung"
            }
        ],
        gewuerze: [
            {
                name: "Salz",
                menge: 17,
                einheit: "g",
                proKg: true
            },
            {
                name: "Schwarzer Pfeffer gemahlen",
                menge: 3,
                einheit: "g",
                proKg: true
            }
        ],
        darm: {
            typ: "Stürzgläser 400g",
            kaliber: "",
            menge: "passend"
        },
        ausgabe: "ca. 2-3 Gläser à 400g",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    {
                        titel: "Eisbein kochen",
                        inhalt: "Eisbein in Wasser weich kochen. Wenn sich das Fleisch vom Knochen löst, herausnehmen."
                    },
                    {
                        titel: "Fleisch vorbereiten",
                        inhalt: "In kleine Würfel schneiden und mit Salz und Pfeffer vermengen. Einige Stunden im Kühlschrank ziehen lassen."
                    },
                    {
                        titel: "Sülze zubereiten",
                        inhalt: "Sülze nach Packungsanleitung mit dem abgesiebten Kochwasser zubereiten."
                    },
                    {
                        titel: "Einkochen",
                        inhalt: "Fleischwürfel in 400g Stürzgläser geben, bis ca. 2cm unter den Rand mit Sülze auffüllen. Gläser fest verschließen und 120 Minuten bei 100°C einkochen."
                    }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 150,
        titel: "Vespersülze",
        kategorie: "Aspik & Sülze",
        beschreibung: "Bunte Sülze mit Wurst, Gurken, Eiern und Paprika – gestürzt serviert",
        quelle: "Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: {
            gesamt: 1000
        },
        fleischsorten: [
            {
                name: "Wurst nach Wahl",
                menge: 1000,
                einheit: "g"
            }
        ],
        zutaten: [
            {
                name: "Essiggurken",
                menge: 5,
                einheit: "Stück"
            },
            {
                name: "Hartgekochte Eier",
                menge: 2,
                einheit: "Stück"
            },
            {
                name: "Paprika (Farbe nach Wahl)",
                menge: 1,
                einheit: "Stück"
            },
            {
                name: "Sülzenpulver",
                menge: 1,
                einheit: "Päckchen"
            }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1 Schüssel oder tiefe Teller",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    {
                        titel: "Zutaten schneiden",
                        inhalt: "Wurst, Essiggurken und Paprika in feine Streifen schneiden. Eier in feine Scheiben schneiden."
                    },
                    {
                        titel: "Schichten",
                        inhalt: "Wurst und Gemüse vermischen und in ein passendes Gefäß geben (am besten eine nach unten schmäler werdende Schüssel oder tiefe Teller). Gleichmäßig verteilen."
                    },
                    {
                        titel: "Sülze übergießen",
                        inhalt: "Sülze nach Packungsanleitung herstellen und über die Einlage gießen, bis alles bedeckt ist."
                    },
                    {
                        titel: "Abkühlen und stürzen",
                        inhalt: "Abkühlen lassen, dann die Sülze stürzen."
                    }
                ]
            }
        ],
        tipps: []
    },
    {
        id: 151,
        titel: "Teller-Sülze",
        kategorie: "Aspik & Sülze",
        beschreibung: "Schweinefleisch in Gewürzbrühe gegart mit Gemüse und Eiern in Sülze",
        quelle: "Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: {
            gesamt: 1000
        },
        fleischsorten: [
            {
                name: "Schweinefleisch (nach Wahl)",
                menge: 1000,
                einheit: "g"
            },
            {
                name: "Karotte",
                menge: 300,
                einheit: "g"
            }
        ],
        zutaten: [
            {
                name: "Wasser (zum Garen)",
                menge: null,
                einheit: "nach Bedarf"
            },
            {
                name: "Salz je Liter Wasser (Brühe)",
                menge: 15,
                einheit: "g/L"
            },
            {
                name: "Wacholderbeeren (angedrückt)",
                menge: 2,
                einheit: "g"
            },
            {
                name: "Lorbeerblätter",
                menge: 2,
                einheit: "Stück"
            },
            {
                name: "Nelken",
                menge: 2,
                einheit: "Stück"
            },
            {
                name: "Zwiebel",
                menge: 1,
                einheit: "Stück"
            },
            {
                name: "Essiggurken",
                menge: 4,
                einheit: "Stück"
            },
            {
                name: "Hartgekochte Eier",
                menge: 2,
                einheit: "Stück"
            },
            {
                name: "Paprika",
                menge: 0.5,
                einheit: "Stück"
            },
            {
                name: "Sülzenpulver",
                menge: 1,
                einheit: "Päckchen"
            }
        ],
        gewuerze: [
            {
                name: "Salz",
                menge: 15,
                einheit: "g",
                proKg: true
            },
            {
                name: "Schwarzer Pfeffer gemahlen",
                menge: 2,
                einheit: "g",
                proKg: true
            }
        ],
        darm: null,
        ausgabe: "Tiefe Teller oder Schüsseln",
        schritte: [
            {
                gruppe: "Brühe & Fleisch",
                schritte: [
                    {
                        titel: "Brühe ansetzen",
                        inhalt: "Zwiebel halbieren und mit Nelken und Lorbeerblättern spicken. In heißem Topf dunkelbraun rösten, mit Wasser übergießen (15g Salz je Liter). Karotte, Wacholder und Fleisch zugeben. Aufkochen."
                    },
                    {
                        titel: "Karotten herausnehmen",
                        inhalt: "Nach ca. 10 Minuten, wenn Karotten weich sind, aus der Brühe nehmen."
                    },
                    {
                        titel: "Fleisch garen",
                        inhalt: "Fleisch je nach Dicke 1-1,5 Stunden weich kochen. Herausnehmen und abkühlen lassen."
                    }
                ]
            },
            {
                gruppe: "Sülze",
                schritte: [
                    {
                        titel: "Fleisch würzen",
                        inhalt: "Fleisch in 1,5cm dicke Scheiben schneiden, mit Salz und Pfeffer einreiben. 2-3 Stunden im Kühlschrank ziehen lassen."
                    },
                    {
                        titel: "Anrichten",
                        inhalt: "Je eine Fleischscheibe auf einen tiefen Teller geben. Mit in Scheiben geschnittenem Gemüse, Gurken und Eierscheiben belegen."
                    },
                    {
                        titel: "Sülze übergießen",
                        inhalt: "Brühe durch Haarsieb abgießen und nach Packungsanleitung ohne Salzzugabe eine Sülze herstellen. Flüssige Sülze über das Arrangement gießen. Abkühlen lassen und genießen."
                    }
                ]
            }
        ],
        tipps: [
            "Karotten, Paprika, Eier und Essiggurken in 3mm dicke Scheiben schneiden"
        ]
    },
    {
        id: 152,
        titel: "Sulzwurst aus Kochschinken",
        kategorie: "Aspik & Sülze",
        beschreibung: "Kochschinken und Gemüse in Sülze – gestürzt als Sulzwurst",
        quelle: "Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: {
            gesamt: 1000
        },
        fleischsorten: [
            {
                name: "Kochschinken",
                menge: 1000,
                einheit: "g"
            }
        ],
        zutaten: [
            {
                name: "Essiggurken",
                menge: 5,
                einheit: "Stück"
            },
            {
                name: "Paprika",
                menge: 3,
                einheit: "Stück"
            },
            {
                name: "Sülzenpulver",
                menge: 1,
                einheit: "Päckchen"
            }
        ],
        gewuerze: [],
        darm: {
            typ: "Stürzgläser 400g",
            kaliber: "",
            menge: "passend"
        },
        ausgabe: "ca. 2-3 Gläser à 400g",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    {
                        titel: "Würfeln und mischen",
                        inhalt: "Schinken und Gemüse in ca. 5mm kleine Würfel schneiden und miteinander vermengen."
                    },
                    {
                        titel: "Sülze zubereiten",
                        inhalt: "Sülze mit nur 90% der angegebenen Wassermenge zubereiten, damit die Sülze fester wird."
                    },
                    {
                        titel: "Abfüllen und kühlen",
                        inhalt: "Das Gewürfelte in 400g Stürzgläser geben und mit Sülze übergießen. Abkühlen lassen, dann die Sulzwurst herausnehmen."
                    },
                    {
                        titel: "Servieren",
                        inhalt: "Falls die Wurst am Rand festsitzt, mit einem schmalen Messer am Rand entlangschneiden und stürzen. In dünne Scheiben schneiden."
                    }
                ]
            }
        ],
        tipps: [
            "Sülze mit 90% der Wassermenge ansetzen – so wird sie fester und lässt sich besser stürzen"
        ]
    },
    {
        "id": 81,
        "titel": "Schwartenwurst",
        "kategorie": "Aspik & Sülze",
        "beschreibung": "Deftige Schwartenwurst mit Haxe, Kopffleisch und Schwarten",
        "quelle": "Schwartenwurst(1).docx",
        "basisMenge": {
            "gesamt": 1100
        },
        "fleischsorten": [
            {
                "name": "Haxe (gepökelt)",
                "menge": 400,
                "einheit": "g"
            },
            {
                "name": "Kopffleisch / Backe",
                "menge": 300,
                "einheit": "g"
            },
            {
                "name": "Schwarten",
                "menge": 300,
                "einheit": "g"
            },
            {
                "name": "Kochbrühe",
                "menge": 100,
                "einheit": "ml"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln frisch",
                "menge": 70,
                "einheit": "g",
                "proKg": true
            }
        ],
        "gewuerze": [
            {
                "name": "Kochsalz",
                "menge": 16,
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
                "name": "Majoran",
                "menge": 1,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Kümmelpulver",
                "menge": 3,
                "einheit": "g",
                "proKg": true
            },
            {
                "name": "Knoblauchpulver",
                "menge": 2,
                "einheit": "g",
                "proKg": true
            }
        ],
        "darm": {
            "typ": "Kunstdarm oder Gläser",
            "kaliber": "beliebig",
            "menge": "passend"
        },
        "ausgabe": "ca. 1 kg Schwartenwurst",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Kochen",
                        "inhalt": "Haxe, Schwarten und Backe köcheln. Haxe und Backe herausnehmen wenn gar, Schwarten weiterkochen bis man sie mit Fingern zerdrücken kann."
                    },
                    {
                        "titel": "Wolfen",
                        "inhalt": "Haxenfleisch und Kopffleisch durch die 8 mm Scheibe. Schwarten und Zwiebeln 2x durch die 2 mm Lochscheibe."
                    },
                    {
                        "titel": "Mischen und abfüllen",
                        "inhalt": "Alles gut vermengen, nach eigenem Geschmack nachwürzen. In Kunstdarm oder Gläser abfüllen."
                    },
                    {
                        "titel": "Garen",
                        "inhalt": "Gläser: 120 Min. bei 100°C. Darm: 60 Min. bei 84°C."
                    }
                ]
            }
        ],
        "tipps": [
            "Vor dem Abfüllen gut abschmecken und ggf. nachwürzen"
        ]
    },
    {
        id: 183,
        titel: "Schinkensülze ala Andreas Gries",
        kategorie: "Aspik & Sülze",
        beschreibung: "Feine Schinkensülze aus Schweinelachs und Schwarten mit Gehacktem",
        quelle: "Schinkensülze.pdf",
        basisMenge: { gesamt: 1420 },
        fleischsorten: [
            { name: "Schweinelachs", menge: 600, einheit: "g" },
            { name: "Gekochte Schwarten", menge: 400, einheit: "g" },
            { name: "Gehacktes (gewürzt)", menge: 300, einheit: "g" }
        ],
        zutaten: [
            { name: "Fleischbrühe", menge: 120, einheit: "ml" },
            { name: "Zwiebel", menge: 50, einheit: "g" }
        ],
        gewuerze: [
            { name: "NPS", menge: 23, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer", menge: 5, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 3, einheit: "g", proKg: true },
            { name: "Kümmel gemahlen", menge: 3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Brühwurstdarm oder Gläser", kaliber: "beliebig", menge: "passend" },
        ausgabe: "ca. 1,4 kg Schinkensülze",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Zubereitung", inhalt: "Alle Zutaten vermengen, würzen. In Darm oder Gläser abfüllen und garen." }
        ]}],
        tipps: []
    },

    {
        id: 197,
        titel: "Eisbein-Sülze (einfach)",
        kategorie: "Aspik & Sülze",
        beschreibung: "Einfache Sülze aus gepökelten Eisbeinen mit Gelatine und Gurkenwasser – in Gläser eingekocht.",
        quelle: "Sonstiges/Sülze.docx",
        basisMenge: { gesamt: null },
        fleischsorten: [
            { name: "Gepökelte Eisbeine", menge: null, einheit: "nach Bedarf" }
        ],
        zutaten: [
            { name: "Gelatine (Bloom 260)", menge: 50, einheit: "g", proKg: true },
            { name: "Gurkenwasser", menge: null, einheit: "nach Geschmack" },
            { name: "Cornichons (kleingeschnitten)", menge: null, einheit: "nach Geschmack" },
            { name: "Kochbrühe", menge: 1000, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Lorbeerblätter", menge: null, einheit: "nach Geschmack" },
            { name: "Piment", menge: null, einheit: "nach Geschmack" },
            { name: "Zwiebeln", menge: null, einheit: "nach Geschmack" }
        ],
        darm: { typ: "Einmachglas", kaliber: "–", menge: "passend" },
        ausgabe: "nach Fleischmenge",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Eisbeine kochen", inhalt: "Gepökelte Eisbeine mit Lorbeer, Piment und Zwiebeln kochen bis das Fleisch vom Knochen fällt." },
            { titel: "Fleisch verarbeiten", inhalt: "Fleisch und etwas Schwarte sehr klein schneiden. Mit kleingeschnittenen Cornichons mischen." },
            { titel: "Gläser füllen", inhalt: "Fleischmischung in Gläser füllen." },
            { titel: "Sülze zubereiten", inhalt: "Brühe mit Gurkenwasser nach Geschmack abschmecken. Auf 1 Liter Brühe 50g Gelatine (Bloom 260) auflösen. Gläser damit auffüllen. Ränder säubern, Deckel drauf." },
            { titel: "Einkochen", inhalt: "Bei 100°C 2 Stunden einkochen." }
        ]}],
        tipps: []
    },

    {
        id: 224,
        titel: "Corned Beef ala Evelin Gangl",
        kategorie: "Aspik & Sülze",
        beschreibung: "Selbstgemachtes Corned Beef aus Rindfleisch – gepökelt, gekocht und mit Aspik in Gläser eingekocht.",
        quelle: "Aspik & Sülze/Cornebeef eigens Rezept.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Rindfleisch (in daumendicke Streifen)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Suppengrün", menge: null, einheit: "1 Bund" },
            { name: "Aspik Bloom 200", menge: 40, einheit: "g" },
            { name: "Kochbrühe", menge: 350, einheit: "ml" }
        ],
        gewuerze: [
            { name: "NPS (Pökelsalz)", menge: 25, einheit: "g", proKg: true },
            { name: "Brauner Zucker", menge: 5, einheit: "g", proKg: true },
            { name: "Wacholderbeeren", menge: 1, einheit: "TL" },
            { name: "Pfefferkörner", menge: 0.5, einheit: "TL" },
            { name: "Lorbeerblätter", menge: 3, einheit: "Stück" },
            { name: "Liebstöckelblätter", menge: null, einheit: "einige" },
            { name: "Pimentkörner", menge: 0.5, einheit: "TL" },
            { name: "Salz und Pfeffer", menge: null, einheit: "nach Geschmack" },
            { name: "Muskat", menge: null, einheit: "nach Geschmack" },
            { name: "Petersilie", menge: 3, einheit: "EL" },
            { name: "Paprika", menge: null, einheit: "nach Geschmack" },
            { name: "Maggi", menge: null, einheit: "nach Geschmack" }
        ],
        darm: { typ: "Einmachglas oder Dose", kaliber: "–", menge: "passend" },
        ausgabe: "ca. 1 kg Corned Beef",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Pökeln", inhalt: "Rindfleisch in Streifen schneiden. Mit NPS und Zucker mischen. In Gefrierbeutel 2 Tage umröten lassen." },
            { titel: "Kochen", inhalt: "Wacholder und Pfeffer ohne Fett anrösten. Fleisch waschen. Mit frischem Wasser, Wacholder, Pfeffer, Lorbeer, Liebstöckel und Suppengrün kochen bis weich. Brühe auffangen." },
            { titel: "Fleisch verarbeiten", inhalt: "Hälfte des Fleisches mit zwei Gabeln zerrupfen. Andere Hälfte wolfen." },
            { titel: "Aspik", inhalt: "350ml Brühe abmessen. 100ml ohne Aspik zum Fleisch. 250ml auf 60°C erwärmen, 40g Bloom 200 Aspik einrühren. Portionsweise zum Fleisch geben bis nicht zu flüssig, nicht zu fest. Nach Geschmack würzen." },
            { titel: "Einkochen", inhalt: "Alles in Gläser füllen (nicht ganz bis zum Rand). Im Wasserbad bei 100°C 90 Minuten einkochen. Alternativ einfrieren." }
        ]}],
        tipps: ["Rezept von Evelin Gangl", "Auch einfrieren möglich"]
    },

    {
        id: 225,
        titel: "Corned Beef von Brigitte",
        kategorie: "Aspik & Sülze",
        beschreibung: "Klassisches Corned Beef – halbiert zerrupft und gewolft, mit Aspik-Sud gestürzt.",
        quelle: "Aspik & Sülze/Corned Beef (1).pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Rindfleisch, Bug o.ä. (4cm Würfel)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Aspik Bloom 260", menge: 120, einheit: "g", proKg: true },
            { name: "Kochsud (etwas weniger als Fleischgewicht)", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "NPS", menge: 25, einheit: "g", proKg: true },
            { name: "Muskat", menge: 3, einheit: "g", proKg: true },
            { name: "Brauner Zucker", menge: 5, einheit: "g", proKg: true },
            { name: "Pfeffer schwarz", menge: 4, einheit: "g", proKg: true },
            { name: "Maggi flüssig", menge: 8, einheit: "g", proKg: true },
            { name: "Nelken", menge: 12, einheit: "Stück" },
            { name: "Lorbeerblatt", menge: 1, einheit: "Stück" }
        ],
        darm: { typ: "Form mit Klarsichtfolie oder Gläser", kaliber: "–", menge: "passend" },
        ausgabe: "ca. 1 kg Corned Beef",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Pökeln", inhalt: "Fleisch würfeln, mit NPS einmassieren. Vakuumiert 1 Nacht im Kühlschrank umröten." },
            { titel: "Kochen", inhalt: "Fleisch mit Suppengemüse, Nelken und Lorbeerblatt weich kochen. Fleisch rausnehmen." },
            { titel: "Fleisch zerteilen", inhalt: "Hälfte durch 4mm Scheibe wolfen, Rest mit Gabel zerfransen. Mischen." },
            { titel: "Aspik-Sud", inhalt: "Brühe durch Sieb seihen (Menge etwas weniger als Fleischgewicht). Gewürze zugeben, aufkochen. 120g Aspik 260 Bloom einrühren." },
            { titel: "Füllen", inhalt: "Fleisch in nasse, mit Klarsichtfolie ausgelegte Form geben. Sud langsam einfließen lassen (Gabel einstechen). Alternativ Gläser oder Dosen, einkochen. Oder einfrieren." }
        ]}],
        tipps: ["Rezept von Brigitte", "Durch Klarsichtfolie lässt sich die Form schön stürzen"]
    },

    {
        id: 226,
        titel: "Schwartenwurst",
        kategorie: "Aspik & Sülze",
        beschreibung: "Rustikale Schwartenwurst aus Haxe, Kopffleisch und Schwarten – in Darm oder Gläser.",
        quelle: "Aspik & Sülze/Schwartenwurst(1).docx",
        basisMenge: { gesamt: 1100 },
        fleischsorten: [
            { name: "Haxe gepökelt", menge: 400, einheit: "g" },
            { name: "Kopffleisch (Backe)", menge: 300, einheit: "g" },
            { name: "Schwarten", menge: 300, einheit: "g" }
        ],
        zutaten: [
            { name: "Kochbrühe", menge: 100, einheit: "g" },
            { name: "Zwiebeln frisch", menge: 70, einheit: "g", proKg: true }
        ],
        gewuerze: [
            { name: "Kochsalz", menge: 16, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 7, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmelpulver", menge: 3, einheit: "g", proKg: true },
            { name: "Knoblauchpulver", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Kunstdarm oder Einmachglas", kaliber: "50/55 Mitteldarm", menge: "passend" },
        ausgabe: "ca. 1 kg",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Kochen", inhalt: "Haxe, Schwarten und Backe köcheln. Haxe und Backe herausnehmen. Schwarten weiterk kochen bis sie mit Fingern zerdrückbar sind." },
            { titel: "Wolfen", inhalt: "Haxenfleisch und Kopffleisch durch 8er Scheibe. Schwarten und Zwiebeln 2× durch 2er Scheibe." },
            { titel: "Mengen", inhalt: "Alle Bestandteile gut vermengen, nachwürzen nach Geschmack." },
            { titel: "Abfüllen", inhalt: "In Kunstdarm füllen: 60 Min. bei 84°C. In Gläser: 120 Min. bei 100°C." }
        ]}],
        tipps: []
    },

    {
        id: 227,
        titel: "Schwartenmagen Preßkopf nach Carola Müller",
        kategorie: "Aspik & Sülze",
        beschreibung: "Bayerischer Schwartenmagen mit Bauch, Kopffleisch und Schwarten – fein gewürzt mit Kardamom und Piment.",
        quelle: "Aspik & Sülze/Schwartenmagen Preßkopf Carola Müller.docx",
        basisMenge: { gesamt: 2450 },
        fleischsorten: [
            { name: "Bauchfleisch", menge: 1350, einheit: "g" },
            { name: "Kopffleisch (gekocht)", menge: 640, einheit: "g" },
            { name: "Schwarte (gerne mehr)", menge: 460, einheit: "g" }
        ],
        zutaten: [
            { name: "Zwiebeln (gedünstet)", menge: 2, einheit: "Stück" },
            { name: "Kochsud (1-2 Tassen)", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "NPS", menge: 12.5, einheit: "g", proKg: true },
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
        darm: { typ: "Mitteldarm oder Einmachglas", kaliber: "50/55", menge: "passend" },
        ausgabe: "ca. 2,5 kg Schwartenmagen",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Schwarten kochen", inhalt: "Schwarten in leicht gesalzenem Wasser gut weich kochen. Zwiebeln glasig dünsten." },
            { titel: "Wolfen", inhalt: "Rohen Bauch und gekochtes Kopffleisch durch 8mm Scheibe. Gewürze verteilen. Schwarten + Zwiebeln 2× durch 2er Scheibe. Am Schluss 1-2 Tassen Kochsud durchlaufen lassen." },
            { titel: "Mengen", inhalt: "Alles zusammenfügen und gut vermengen." },
            { titel: "Abfüllen", inhalt: "Darm: ca. 60 Min. bei 84°C (Mitteldarm 50/55). Glas: ca. 120 Min. bei 90°C." }
        ]}],
        tipps: ["Carola Müllers Favorit: im Glas bei 90°C eingekocht"]
    },
    {
        id: 251,
        titel: "Sülzwurst klassisch",
        kategorie: "Aspik & Sülze",
        beschreibung: "Klassische Sülzwurst aus gepökelter Schulter, Speck und Schwarten in Rinderbutten – kalt geräuchert.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 5000,
        fleischsorten: [
            { name: "Magere Schweineschulter, gepökelt", menge: 3500, einheit: "g" },
            { name: "Durchwachsener Speck, gekocht", menge: 500, einheit: "g" },
            { name: "Schwarten, mittelweich gekocht", menge: 500, einheit: "g" }
        ],
        zutaten: [
            { name: "Fleischbrühe", menge: 500, einheit: "g" }
        ],
        gewuerze: [
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Kümmel ganz", menge: 1, einheit: "g", proKg: true },
            { name: "Macis", menge: 0.5, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Mittlere Rinderbutten", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 5 kg Sülzwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Schneiden", inhalt: "Schulter in 2cm Würfel, Speck in 1cm Würfel schneiden. Schwarten zweimal durch 2mm Scheibe wolfen." },
            { titel: "Mengen", inhalt: "Alles mit Fleischbrühe und Gewürzen gut vermengen. In mittlere Rinderbutten füllen." },
            { titel: "Garen", inhalt: "Je nach Darmdurchmesser 60-90 Minuten in 80°C heißem Wasser garen." },
            { titel: "Abkühlen und räuchern", inhalt: "Mit heißem Wasser entfetten, auf angefeuchteter Metallfläche auskühlen. 12 Stunden bei max. 25°C kalt räuchern." }
        ]}],
        tipps: []
    },

    // ── Wurst im Glas / Sülzen-und-Schlachtspezialitäten ─────
    {
        id: 283,
        titel: "Bauchfleisch in Aspik ala Uwe",
        kategorie: "Aspik & Sülze",
        beschreibung: "Schweinebauch in Aspik mit Kümmel, Majoran und Dill – in Gläser eingekocht.",
        quelle: "Wurst im Glas/Bauch in Aspik.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinebauchfleisch", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Aspik", menge: 30, einheit: "g" },
            { name: "Gekörnte Brühe", menge: null, einheit: "nach Bedarf" },
            { name: "Zwiebel (mittelgroß)", menge: 1, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "NPS (Nitritpökelsalz)", menge: 18, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Mazisblüte", menge: 1.5, einheit: "g", proKg: true },
            { name: "Kümmel", menge: 1, einheit: "TL" },
            { name: "Majoran", menge: 0.3, einheit: "g", proKg: true },
            { name: "Koriander", menge: 0.3, einheit: "g", proKg: true },
            { name: "Ingwer", menge: 0.3, einheit: "g", proKg: true },
            { name: "Dill", menge: 0.3, einheit: "g", proKg: true },
            { name: "Senfkörner (zerstoßen)", menge: 0.3, einheit: "g", proKg: true }
        ],
        darm: { typ: "Einmachgläser", kaliber: "–", menge: "passend" },
        ausgabe: "ca. 1 kg Aspikfleisch",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Fleisch schneiden und würzen", inhalt: "Bauchfleisch in kleine Stücke schneiden. Mit allen Gewürzen und der klein geschnittenen Zwiebel vermengen." },
            { titel: "Einkochen", inhalt: "In Gläser abfüllen. Mit etwas gekörnter Brühe auffüllen. 2 Stunden einkochen. Abkühlen lassen und 24 Stunden kühl stellen." }
        ]}],
        tipps: ["Nach dem Einkochen 24 Stunden im Kühlschrank ziehen lassen bevor verzehren"]
    },
    {
        id: 284,
        titel: "Eisbein in Aspik",
        kategorie: "Aspik & Sülze",
        beschreibung: "Klassisches Eisbein in Aspik – eingekocht in Stürzgläser.",
        quelle: "Wurst im Glas/Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Eisbein vom Schwein", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Sülzenpulver (nach Packungsanleitung)", menge: 1, einheit: "Päckchen" }
        ],
        gewuerze: [
            { name: "Salz", menge: 17, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 3, einheit: "g", proKg: true }
        ],
        darm: { typ: "400g Stürzgläser", kaliber: "–", menge: "passend" },
        ausgabe: "ca. 1 kg Aspik",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Eisbein kochen", inhalt: "Eisbein in Wasser weichkochen bis sich das Fleisch vom Knochen löst. Herausnehmen und in kleine Würfel schneiden." },
            { titel: "Würzen und ziehen lassen", inhalt: "Mit Salz und Pfeffer vermengen. Einige Stunden im Kühlschrank ziehen lassen." },
            { titel: "Sülze und einkochen", inhalt: "Sülzenpulver nach Anleitung mit dem abgesiebten Kochwasser zubereiten. Fleischwürfel in 400g Stürzgläser geben, mit Sülze bis 2cm unter Rand auffüllen. 120 Minuten bei 100°C einkochen." }
        ]}],
        tipps: ["Kochwasser vom Eisbein als Sülzenbasis verwenden"]
    },
    {
        id: 285,
        titel: "Vespersülze",
        kategorie: "Aspik & Sülze",
        beschreibung: "Gestürzte Sülze mit Wurst, Essiggurken, Eiern und Paprika – einfach und schnell.",
        quelle: "Wurst im Glas/Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Wurst nach Wahl", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Essiggurken", menge: 5, einheit: "Stück" },
            { name: "Hartgekochte Eier", menge: 2, einheit: "Stück" },
            { name: "Paprika (Farbe nach Wahl)", menge: 1, einheit: "Stück" },
            { name: "Sülzenpulver", menge: 1, einheit: "Päckchen" }
        ],
        gewuerze: [],
        darm: { typ: "Schüssel oder tiefe Teller (stürzbar)", kaliber: "–", menge: "–" },
        ausgabe: "ca. 1 kg Sülze",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Zutaten schneiden", inhalt: "Wurst, Essiggurken und Paprika in feine Streifen schneiden. Eier in feine Scheiben schneiden." },
            { titel: "Schichten", inhalt: "Wurst und Gemüse vermischen, in eine nach unten schmäler werdende Schüssel oder tiefe Teller geben. Gleichmäßig verteilen." },
            { titel: "Sülze gießen und stürzen", inhalt: "Sülzenpulver nach Anleitung zubereiten und über die Einlage gießen bis alles bedeckt ist. Abkühlen lassen und stürzen." }
        ]}],
        tipps: ["Nach unten hin schmäler werdende Schüssel für schönes Stürzen verwenden"]
    },
    {
        id: 286,
        titel: "Teller-Sülze",
        kategorie: "Aspik & Sülze",
        beschreibung: "Klassische Teller-Sülze mit Schweinefleisch, Karotten und Eiern – serviert auf dem Teller.",
        quelle: "Wurst im Glas/Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweinefleisch (nach Wahl)", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Karotten", menge: 300, einheit: "g" },
            { name: "Essiggurken", menge: 4, einheit: "Stück" },
            { name: "Hartgekochte Eier", menge: 2, einheit: "Stück" },
            { name: "Paprika", menge: 0.5, einheit: "Stück" },
            { name: "Wacholderbeeren (angedrückt)", menge: 2, einheit: "g" },
            { name: "Lorbeerblätter", menge: 2, einheit: "Stück" },
            { name: "Nelken", menge: 2, einheit: "Stück" },
            { name: "Zwiebel", menge: 1, einheit: "Stück" },
            { name: "Sülzenpulver", menge: 1, einheit: "Päckchen" }
        ],
        gewuerze: [
            { name: "Salz (für Brühe)", menge: 15, einheit: "g", proKg: true },
            { name: "Salz (für Fleisch)", menge: 15, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer gemahlen", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Tiefe Teller", kaliber: "–", menge: "–" },
        ausgabe: "ca. 4 Portionen",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Brühe kochen", inhalt: "Zwiebel halbieren, mit Nelken und Lorbeerblättern spicken. Im Topf dunkelbraun rösten, mit Wasser aufgießen (15g Salz/Liter). Karotten, Wacholder und Fleisch zugeben, aufkochen." },
            { titel: "Fleisch garen", inhalt: "Fleisch 1-1,5 Stunden weichkochen. Herausnehmen, abkühlen, in 1,5cm Scheiben schneiden. Mit Salz und Pfeffer einreiben, 2-3 Stunden im Kühlschrank ziehen lassen." },
            { titel: "Anrichten und sülzen", inhalt: "Je eine Fleischscheibe auf tiefen Teller. Mit Gemüse- und Eierscheiben belegen. Brühe absieben, Sülze daraus herstellen (ohne Salz), über Teller gießen. Abkühlen lassen." }
        ]}],
        tipps: ["Brühe durch Haarsieb abgießen für klare Sülze"]
    },
    {
        id: 287,
        titel: "Sulzwurst (Kochschinken-Sülze)",
        kategorie: "Aspik & Sülze",
        beschreibung: "Gestürzte Sülzwurst aus Kochschinken und Gemüse – in 400g Stürzgläser eingegossen.",
        quelle: "Wurst im Glas/Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Kochschinken", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Essiggurken", menge: 5, einheit: "Stück" },
            { name: "Paprika", menge: 3, einheit: "Stück" },
            { name: "Sülzenpulver", menge: 1, einheit: "Päckchen" }
        ],
        gewuerze: [],
        darm: { typ: "400g Stürzgläser", kaliber: "–", menge: "passend" },
        ausgabe: "ca. 1 kg Sulzwurst",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Zutaten würfeln", inhalt: "Schinken und Gemüse in ca. 5mm kleine Würfel schneiden und vermengen." },
            { titel: "Sülze und abfüllen", inhalt: "Sülze mit nur 90% der angegebenen Wassermenge zubereiten (wird fester). Gewürfeltes in 400g Stürzgläser geben, mit Sülze übergießen. Abkühlen lassen." },
            { titel: "Stürzen", inhalt: "Stürzgläser stürzen. Wenn am Rand festsitzt, mit schmalem Messer am Rand entlang schneiden. In dünne Scheiben schneiden." }
        ]}],
        tipps: ["90% Wassermenge beim Sülzenpulver verwenden für festere Konsistenz"]
    }
,

    // ── Forums Rezepte ────────────────────────────────────────
    {
        id: 296,
        titel: "Schwartenmagen (Forums-Rezept mit Zunge & Herz)",
        kategorie: "Aspik & Sülze",
        beschreibung: "Klassischer Schwartenmagen aus Schulter, Bauch, Schwarte, Zunge und Herz – gebrüht und kalt geräuchert.",
        quelle: "Forums Rezepte/Schwartenmagen.xlsx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schweineschulter (durchwachsen)", menge: 400, einheit: "g" },
            { name: "Schweinebauch (fett, mit Schwarte)", menge: 250, einheit: "g" },
            { name: "Schwarte", menge: 150, einheit: "g" },
            { name: "Zunge und Herz", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Wasser (Brühsud)", menge: 1000, einheit: "ml", proKg: true },
            { name: "Suppengemüse", menge: 100, einheit: "g", proKg: true },
            { name: "Lorbeerblatt", menge: 1, einheit: "Stück", proKg: true },
            { name: "Kesselbrühe", menge: 150, einheit: "ml", proKg: true }
        ],
        gewuerze: [
            { name: "NPS (für Brühsud)", menge: 8, einheit: "g", proLiter: true },
            { name: "Salz", menge: 19, einheit: "g", proKg: true },
            { name: "Weißer Pfeffer", menge: 3, einheit: "g", proKg: true },
            { name: "Schwarzer Pfeffer grob", menge: 1, einheit: "g", proKg: true },
            { name: "Majoran", menge: 1, einheit: "g", proKg: true },
            { name: "Piment", menge: 1, einheit: "g", proKg: true },
            { name: "Koriander", menge: 1, einheit: "g", proKg: true },
            { name: "Macis", menge: 1, einheit: "g", proKg: true },
            { name: "Kümmelpulver", menge: 1, einheit: "g", proKg: true },
            { name: "Knoblauchgranulat", menge: 2, einheit: "g", proKg: true }
        ],
        darm: { typ: "Schweinemagen, Blasen oder Kranzdärme (gut vorgewässert)", kaliber: "passend", menge: "passend" },
        ausgabe: "ca. 1 kg Schwartenmagen",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Fleisch kochen", inhalt: "Fleisch und Speck in 5cm Streifen schneiden. Pro Kg Fleisch: 1 Liter Wasser mit 8g NPS/Liter, Suppengemüse und Lorbeerblatt aufsetzen. Zunge und Herz 2 Stunden gar ziehen, Rest ca. 1,5 Stunden." },
            { titel: "Zerkleinern", inhalt: "Schwarten und Bauch hälftig durch kleinste Scheibe wolfen. 1/3 des restlichen Fleisches ebenfalls wolfen. Zunge, Herz und übriges Fleisch in ca. 1-1,5cm Würfel schneiden." },
            { titel: "Mischen und füllen", inhalt: "Gewürze einstreuen, alles mischen. Kesselbrühe (150ml/kg) zugießen bis Masse schön geschmeidig ist. Noch warm in Schweinemägen, Blasen oder Kranzdärme füllen. Nicht zu prall füllen." },
            { titel: "Brühen und pressen", inhalt: "Schweinemägen/Blasen 1,5 Stunden brühen, Kranzdärme 1 Stunde. In lauwarmem Wasser auskühlen. Über Nacht mit Brett und Gewicht pressen." },
            { titel: "Räuchern", inhalt: "2-3 × je 8 Stunden kalt räuchern, je nach Geschmack." }
        ]}],
        tipps: ["Masse muss warm eingefüllt werden – dann kühlt sie als kompakter Block aus"]
    }
,

    {
        id: 301,
        titel: "Eisbein-Sülze mit Cornichons",
        kategorie: "Aspik & Sülze",
        beschreibung: "Einfache Sülze aus gepökelten Eisbeinen mit Cornichons – in Gläser eingekocht.",
        quelle: "Sonstiges/Sülze.docx",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Gepökelte Eisbeine", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Cornichons (klein geschnitten)", menge: null, einheit: "nach Geschmack" },
            { name: "Gurkenwasser", menge: null, einheit: "nach Geschmack" },
            { name: "Gelatine Bloom 260", menge: 50, einheit: "g", proLiter: true },
            { name: "Kochbrühe", menge: 1000, einheit: "ml", proKg: true },
            { name: "Lorbeerblätter, Piment, Zwiebeln", menge: null, einheit: "nach Geschmack" }
        ],
        gewuerze: [],
        darm: { typ: "Einmachgläser", kaliber: "–", menge: "passend" },
        ausgabe: "ca. 1 kg Sülze",
        schritte: [{ gruppe: "Herstellung", schritte: [
            { titel: "Eisbein kochen", inhalt: "Gepökelte Eisbeine mit Lorbeerblättern, Piment und Zwiebeln kochen bis Fleisch vom Knochen fällt." },
            { titel: "Zubereitung", inhalt: "Fleisch und etwas Schwarte sehr klein schneiden. Mit klein geschnittenen Cornichons mischen. In Gläser füllen." },
            { titel: "Sülze und einkochen", inhalt: "Brühe mit Gurkenwasser abschmecken. Pro Liter 50g Gelatine (Bloom 260) zugeben. Gläser auffüllen, Ränder säubern, Deckel drauf. 2 Stunden bei 100°C einkochen." }
        ]}],
        tipps: ["Gurkenwasser gibt der Sülze eine angenehme Säure"]
    }
];