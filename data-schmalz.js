// Kategorie: Schmalz & Spezialitäten
const rezepte_schmalz = [
    {
        "id": 65,
        "titel": "Griebenschmalz (nach Oma Speer)",
        "kategorie": "Schmalz & Spezialitäten",
        "beschreibung": "Hausgemachtes Griebenschmalz mit goldgelben knusprigen Grieben",
        "quelle": "Griebenschmalz.pdf",
        "basisMenge": {
            "gesamt": 1000
        },
        "fleischsorten": [
            {
                "name": "Fetter Schweinespeck (ungeräuchert)",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Schweineflomen (od. ausgelassenes Schmalz)",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Wasser",
                "menge": 0.5,
                "einheit": "Tasse je kg Speck"
            },
            {
                "name": "Milch",
                "menge": 1,
                "einheit": "EL je kg Speck"
            }
        ],
        "gewuerze": [],
        "darm": null,
        "ausgabe": "ca. 1 kg Griebenschmalz",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Speck vorbereiten",
                        "inhalt": "Speck und Flomen in kleine Würfel schneiden oder durch die gröbste Scheibe des Fleischwolfes lassen."
                    },
                    {
                        "titel": "Auslassen",
                        "inhalt": "In einen großen Topf etwas Wasser geben (auf 1 kg Speck eine halbe Tasse), kurz aufkochen. Dann Speck zugeben und bei mittlerer Hitze unter Rühren auslassen, bis das Wasser verdampft ist und die Würfel glasig sind. Ca. 1 Stunde."
                    },
                    {
                        "titel": "Bräunen",
                        "inhalt": "Temperatur leicht erhöhen. Immer wieder etwas Fett aus dem Topf schöpfen. Wenn die Grieben goldgelb sind, 1 EL Milch je kg Speck ins heiße Fett geben – Achtung: Fett schäumt stark auf! Topf muss 3-4x größer sein als nötig."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Grieben und Fett in saubere Gläser oder Behälter abfüllen. Kühl lagern."
                    }
                ]
            }
        ],
        "tipps": [
            "Wer das Fett auch zum Kochen verwenden möchte, besser ungewürzt lassen",
            "Durch die Milch werden die Grieben wunderbar braun und kross",
            "Das abgeschöpfte Fett zwischendurch in einem anderen Behälter sammeln, damit es nicht verbrennt"
        ]
    },
    {
        "id": 116,
        "titel": "Griebenschmalz mit Apfel und Zwiebel",
        "kategorie": "Schmalz & Spezialitäten",
        "beschreibung": "Würziges Griebenschmalz mit Rückenspeck, Apfel und Zwiebeln – einfaches Hausrezept für 4 Portionen",
        "quelle": "Griebenschmalz.docx",
        "basisMenge": {
            "gesamt": 700
        },
        "fleischsorten": [
            {
                "name": "Fetter Rückenspeck (ohne Schwarte)",
                "menge": 700,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Zwiebeln",
                "menge": 2,
                "einheit": "Stück"
            },
            {
                "name": "Kleiner Apfel",
                "menge": 1,
                "einheit": "Stück"
            }
        ],
        "gewuerze": [
            {
                "name": "Majoran",
                "menge": 2,
                "einheit": "TL"
            },
            {
                "name": "Salz",
                "menge": 1,
                "einheit": "TL"
            },
            {
                "name": "Pfeffer (frisch gemahlen)",
                "menge": 0,
                "einheit": "nach Geschmack"
            }
        ],
        "darm": null,
        "ausgabe": "ca. 4 Portionen Griebenschmalz",
        "schritte": [
            {
                "gruppe": "Herstellung",
                "schritte": [
                    {
                        "titel": "Speck vorbereiten",
                        "inhalt": "Speck unter lauwarmem Wasser waschen, trocken tupfen und in kleine Würfel schneiden."
                    },
                    {
                        "titel": "Auslassen",
                        "inhalt": "Speck in einem großen Topf bei mittlerer Hitze ca. 15 Minuten garen bis das Fett ausgetreten ist und helle, gebräunte Grieben entstehen. Regelmäßig umrühren. Vorsicht: heißes Fett kann spritzen. Gesamtvorgang kann bis zu 1 Stunde dauern."
                    },
                    {
                        "titel": "Zwiebel und Apfel zugeben",
                        "inhalt": "Zwiebeln und Apfel schälen und sehr fein würfeln. Gemeinsam mit den Gewürzen in den Topf geben. Weiter braten bis Grieben und Zwiebeln hellbraun sind."
                    },
                    {
                        "titel": "Abfüllen",
                        "inhalt": "Heißes Schmalz in Steintöpfchen oder sterilisierte Gläser füllen. Nach 2 Tagen ist das Griebenschmalz vollständig ausgekühlt und fertig."
                    }
                ]
            }
        ],
        "tipps": [
            "Im Kühlschrank hält sich das Griebenschmalz ca. ein halbes Jahr"
        ]
    },
    {
        "id": 117,
        "titel": "Schmalzfleisch ala Christian Kohn",
        "kategorie": "Schmalz & Spezialitäten",
        "beschreibung": "Einfaches Schmalzfleisch aus gewolftem Bauch und Schulter, in Schmalz gemengt und eingekocht",
        "quelle": "Schmalzfleisch.pdf",
        "basisMenge": {
            "gesamt": 1250
        },
        "fleischsorten": [
            {
                "name": "Schweinebauch",
                "menge": 500,
                "einheit": "g"
            },
            {
                "name": "Schweineschulter",
                "menge": 500,
                "einheit": "g"
            }
        ],
        "zutaten": [
            {
                "name": "Schmalz",
                "menge": 250,
                "einheit": "g"
            },
            {
                "name": "Gemüsezwiebel",
                "menge": 1,
                "einheit": "Stück"
            }
        ],
        "gewuerze": [
            {
                "name": "Salz",
                "menge": 0,
                "einheit": "nach Geschmack"
            },
            {
                "name": "Pfeffer",
                "menge": 0,
                "einheit": "nach Geschmack"
            },
            {
                "name": "Muskatblüte",
                "menge": 0,
                "einheit": "nach Geschmack"
            },
            {
                "name": "Knoblauchpulver",
                "menge": 0,
                "einheit": "nach Geschmack"
            },
            {
                "name": "Zwiebelpulver",
                "menge": 0,
                "einheit": "nach Geschmack"
            }
        ],
        "darm": null,
        "ausgabe": "ca. 1,2 kg Schmalzfleisch in Gläsern",
        "schritte": [
            {
                "gruppe": "Zubereitung",
                "schritte": [
                    {
                        "titel": "Fleisch wolfen und Zwiebel hacken",
                        "inhalt": "Fleisch durch den Fleischwolf drehen. Zwiebel hacken."
                    },
                    {
                        "titel": "Zwiebel garen",
                        "inhalt": "Zwiebel im Schmalz garen."
                    },
                    {
                        "titel": "Mischen",
                        "inhalt": "Gewolftes Fleisch nach Geschmack würzen. In der Küchenmaschine rühren und nach und nach den Zwiebelschmalz zugeben bis eine homogene Masse entsteht."
                    },
                    {
                        "titel": "Einkochen",
                        "inhalt": "In saubere Gläser füllen und bei 100°C für 120 Minuten einkochen."
                    }
                ]
            }
        ],
        "tipps": []
    }
];
