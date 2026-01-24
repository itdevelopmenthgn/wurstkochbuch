const rezepte = [
    {
        id: 1,
        titel: "Zwiebelwurst",
        kategorie: "Brühwurst",
        beschreibung: "Klassische Zwiebelwurst mit reichlich Zwiebeln und zartem Bauchfleisch",

        // Basis-Fleischmenge (in Gramm) - NUR das echte Fleisch
        basisMenge: {
            gesamt: 500  // nur Bauchfleisch
        },

        fleischsorten: [
            { name: "Bauch", menge: 500, einheit: "g" }
        ],

        zutaten: [
            { name: "Zwiebel (gekocht, abgetropft)", menge: 1000, einheit: "g" }
        ],

        gewuerze: [
            { name: "Salz", menge: "nach Geschmack", einheit: "" },
            { name: "Pfeffer", menge: "nach Geschmack", einheit: "" },
            { name: "Majoran", menge: "nach Geschmack", einheit: "" },
            { name: "Piment", menge: "nach Geschmack", einheit: "" }
        ],

        darm: {
            typ: "Dünndarm",
            kaliber: "",
            menge: "passend zur Fleischmenge"
        },

        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    {
                        titel: "Zwiebel kochen",
                        inhalt: "1 kg Zwiebel am Vortag kochen und auf Sieb abtropfen lassen."
                    },
                    {
                        titel: "Bauchfleisch kochen",
                        inhalt: "0,5 kg Bauchfleisch am nächsten Tag weich kochen."
                    }
                ]
            },
            {
                gruppe: "Zubereitung",
                schritte: [
                    {
                        titel: "Fleisch und Zwiebeln wolfen",
                        inhalt: "Das Bauchfleisch zusammen mit den Zwiebeln durch den Fleischwolf drehen."
                    },
                    {
                        titel: "Würzen",
                        inhalt: "Mit Salz, Pfeffer, Majoran und Piment nach Geschmack abschmecken."
                    },
                    {
                        titel: "Durch Fleischwolf drehen",
                        inhalt: "Die gewürzte Masse nochmals durch den Fleischwolf drehen."
                    },
                    {
                        titel: "Abfüllen",
                        inhalt: "Die Masse entweder in Gläsern bei 100°C 2 Stunden kochen, oder in Dünndarm geben, abbinden und in dem Wasser in dem das Bauchfleisch gekocht wurde 30 min bei 80°C ziehen lassen."
                    }
                ]
            }
        ],

        tipps: [
            "Die Zwiebelwurst kann geräuchert oder ungeräuchert gegessen werden",
            "Wir haben sie immer eingekocht früher, heute mach ich sie in Dosen",
            "Geschmackssache ob geräuchert oder nicht"
        ]
    },
    {
        id: 2,
        titel: "Bratwurst Grundrezept",
        kategorie: "Bratwurst",
        beschreibung: "Vielseitiges Bratwurst-Grundrezept mit Varianten für Gyros, Knoblauch und Chili",

        basisMenge: {
            gesamt: 4000  // 1kg + 1kg + 2kg = 4kg
        },

        fleischsorten: [
            { name: "Nackenbraten", menge: 1000, einheit: "g" },
            { name: "Bauch", menge: 1000, einheit: "g" },
            { name: "Krustenbraten", menge: 2000, einheit: "g" }
        ],

        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer bunt (frisch gemahlen)", menge: 4, einheit: "g", proKg: true },
            { name: "Currypulver", menge: 0.8, einheit: "g", proKg: true },
            { name: "Paprika", menge: 1, einheit: "g", proKg: true },
            { name: "Senfkörner (gemahlen)", menge: 4, einheit: "g", proKg: true }
        ],

        varianten: [
            {
                name: "Gyroswurst",
                aenderungen: "10 g Salz weniger und dafür 10 g Gyrosgewürz extra pro kg"
            },
            {
                name: "Knobiwurst",
                aenderungen: "1,5 g Knobipulver pro kg zusätzlich"
            },
            {
                name: "Chiliwurst",
                aenderungen: "0,6 g Chili pro kg zusätzlich"
            }
        ],

        ausgabe: "ca. 45-50 Bratwürstchen bei 4 kg Fleisch",

        darm: {
            typ: "Schweinedarm",
            kaliber: "28/30",
            menge: "ca. 10 m für 4 kg"
        },

        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    {
                        titel: "Fleisch vorbereiten",
                        inhalt: "1000 g Nackenbraten, 1000 g Bauch und 2000 g Krustenbraten in ca. 3 cm große Würfel schneiden und kalt stellen."
                    },
                    {
                        titel: "Gewürze abwiegen",
                        inhalt: "Pro kg Fleisch: 20 g Salz, 4 g Pfeffer, 0,8 g Curry, 1 g Paprika, 4 g Senfkörner (gemahlen) bereitstellen."
                    }
                ]
            },
            {
                gruppe: "Zubereitung",
                schritte: [
                    {
                        titel: "Fleisch wolfen",
                        inhalt: "Das Fleisch durch den Fleischwolf mit 5 mm Scheibe drehen."
                    },
                    {
                        titel: "Würzen und mischen",
                        inhalt: "Alle Gewürze zum gewolften Fleisch geben und gründlich vermengen. Bei Bedarf etwas eiskaltes Wasser (ca. 50-100 ml pro kg) zugeben für bessere Bindung."
                    },
                    {
                        titel: "Brät kalt stellen",
                        inhalt: "Das Brät für mindestens 2 Stunden, besser über Nacht, im Kühlschrank durchziehen lassen."
                    },
                    {
                        titel: "Abfüllen",
                        inhalt: "Das Brät in Schweinedarm (Kaliber 28/30) füllen und zu Würstchen abdrehen oder abbinden."
                    }
                ]
            }
        ],

        tipps: [
            "Das Fleisch sollte beim Wolfen sehr kalt sein",
            "Für bessere Bindung kann eiskaltes Wasser zugegeben werden",
            "Die Würstchen können direkt gebraten oder eingefroren werden",
            "Für Salami und Knacker: 20 g Pökelsalz statt normalem Salz verwenden"
        ]
    },
    {
        id: 3,
        titel: "Salami und Knacker",
        kategorie: "Rohwurst",
        beschreibung: "Würzige Rohwurst zum Räuchern und Trocknen",

        basisMenge: {
            gesamt: 4000  // wie Bratwurst-Grundrezept
        },

        fleischsorten: [
            { name: "Nackenbraten", menge: 1000, einheit: "g" },
            { name: "Bauch", menge: 1000, einheit: "g" },
            { name: "Krustenbraten", menge: 2000, einheit: "g" }
        ],

        gewuerze: [
            { name: "Pökelsalz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfefferkörner (frisch mahlen)", menge: 4, einheit: "g", proKg: true },
            { name: "Currypulver", menge: 0.8, einheit: "g", proKg: true },
            { name: "Paprika Edelsüß", menge: 1, einheit: "g", proKg: true },
            { name: "Chiliflocken (gemahlen)", menge: 0.3, einheit: "g", proKg: true },
            { name: "Senfkörner gemahlen", menge: 1, einheit: "TL", proKg: true },
            { name: "Senfkörner ungemahlen", menge: 3, einheit: "TL", proKg: true },
            { name: "Brauner Zucker", menge: 1, einheit: "TL", proKg: true }
        ],

        darm: {
            typ: "Rinderdarm oder Kollagen",
            kaliber: "40/43 für Salami, 28/30 für Knacker",
            menge: "ca. 8 m für 4 kg"
        },

        schritte: [
            {
                gruppe: "Vorbereitung",
                schritte: [
                    {
                        titel: "Fleisch vorbereiten",
                        inhalt: "1000 g Nackenbraten, 1000 g Bauch und 2000 g Krustenbraten in ca. 2-3 cm große Würfel schneiden."
                    },
                    {
                        titel: "Gewürze mischen",
                        inhalt: "Pro kg: 20 g Pökelsalz, 4 g Pfefferkörner, 0,8 g Curry, 1 g Paprika, 0,3 g Chili, 1 TL Senfkörner gemahlen, 3 TL Senfkörner ungemahlen, 1 TL brauner Zucker bereitstellen."
                    }
                ]
            },
            {
                gruppe: "Herstellung",
                schritte: [
                    {
                        titel: "Fleisch wolfen",
                        inhalt: "Das Fleisch durch den Wolf mit 3-4 mm Scheibe drehen."
                    },
                    {
                        titel: "Pökeln",
                        inhalt: "Alle Gewürze zum Fleisch geben und sehr gut durchkneten. Masse abgedeckt 24 Stunden im Kühlschrank pökeln lassen."
                    },
                    {
                        titel: "Abfüllen",
                        inhalt: "Das Brät fest in den vorbereiteten Darm füllen. Für Salami dicken Darm (40/43), für Knacker dünneren (28/30) verwenden."
                    },
                    {
                        titel: "Reifen",
                        inhalt: "Die Würste 1-2 Tage bei Raumtemperatur antrocknen lassen, dann kalt räuchern oder im Trockenschrank bei 12-15°C und 75% Luftfeuchtigkeit reifen lassen."
                    }
                ]
            }
        ],

        tipps: [
            "Wichtig: Pökelsalz verwenden, kein normales Salz!",
            "Die Würste müssen langsam trocknen, nicht zu warm!",
            "Schimmelbildung ist normal und kann abgewischt werden",
            "Reifedauer: Knacker 7-14 Tage, Salami 3-6 Wochen",
            "Die ungemahlenen Senfkörner geben den typischen Biss"
        ]
    }
];
