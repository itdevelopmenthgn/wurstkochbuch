// Anleitungen – Referenztabellen und Hilfsmittel für die Wursterei
// Keine Rezepte, sondern Wissensdokumente

const anleitungen = [
    {
        id: 1,
        titel: "Kerntemperatur-Übersicht",
        kategorie: "Temperaturen",
        beschreibung: "Übersicht der Kerntemperaturen für Braten, Fisch und Fleisch – rosa bis vollgar",
        quelle: "Kerntemperatur-uebersicht-liste.pdf",
        inhalt: [
            {
                gruppe: "Geflügel",
                eintraege: [
                    { name: "Ente", rosa: "-", vollgar: "80 - 90°C" },
                    { name: "Entenbrust", rosa: "62 - 65°C", vollgar: "-" },
                    { name: "Gans", rosa: "75 - 80°C", vollgar: "90 - 92°C" },
                    { name: "Hähnchen / Hühnchen", rosa: "-", vollgar: "80 - 85°C" },
                    { name: "Hähnchenbrust / Hühnerbrust", rosa: "-", vollgar: "72°C" },
                    { name: "Pute / Putenbraten", rosa: "-", vollgar: "70 - 90°C" },
                    { name: "Truthahn", rosa: "-", vollgar: "80 - 85°C" },
                    { name: "Perlhuhnbrust", rosa: "-", vollgar: "70°C" },
                    { name: "Strauss, Filetsteak", rosa: "-", vollgar: "58°C" }
                ]
            },
            {
                gruppe: "Rind",
                eintraege: [
                    { name: "Rinderfilet", rosa: "38 - 55°C (medium: 55 - 58°C)", vollgar: "-" },
                    { name: "Roastbeef", rosa: "53°C (medium: 55 - 60°C)", vollgar: "-" },
                    { name: "Rinderbraten", rosa: "-", vollgar: "70 - 85°C" },
                    { name: "Tafelspitz", rosa: "-", vollgar: "90°C" },
                    { name: "Entrecote", rosa: "-", vollgar: "56°C" },
                    { name: "Beef Brisket", rosa: "-", vollgar: "85°C" },
                    { name: "Rouladen aus Keule", rosa: "-", vollgar: "70°C" },
                    { name: "Pulled Beef (Rinderbrust)", rosa: "-", vollgar: "90 - 95°C" }
                ]
            },
            {
                gruppe: "Wild",
                eintraege: [
                    { name: "Rehbraten", rosa: "-", vollgar: "75 - 80°C" },
                    { name: "Rehrücken", rosa: "50 - 60°C (gespickt: 58 - 60°C)", vollgar: "-" },
                    { name: "Hirschrücken", rosa: "54 - 60°C", vollgar: "-" },
                    { name: "Hirschbraten", rosa: "60°C", vollgar: "-" },
                    { name: "Wildschweinfilet", rosa: "60 - 62°C", vollgar: "-" },
                    { name: "Wildschweinkeule", rosa: "-", vollgar: "75°C" },
                    { name: "Kaninchenkeulen", rosa: "-", vollgar: "65°C" }
                ]
            },
            {
                gruppe: "Schwein",
                eintraege: [
                    { name: "Schweinemedaillons", rosa: "65°C", vollgar: "-" },
                    { name: "Schweinefilet", rosa: "58°C", vollgar: "65°C" },
                    { name: "Schweinerücken", rosa: "65 - 70°C", vollgar: "-" },
                    { name: "Schweinekamm / Nacken", rosa: "-", vollgar: "70 - 75°C" },
                    { name: "Schweineschulter", rosa: "-", vollgar: "75°C" },
                    { name: "Keule / Schlegel", rosa: "65 - 68°C", vollgar: "75°C" },
                    { name: "Haxe (gebraten)", rosa: "-", vollgar: "80 - 85°C" },
                    { name: "Haxe (gepökelt)", rosa: "-", vollgar: "75 - 80°C" },
                    { name: "Eisbein", rosa: "-", vollgar: "80 - 85°C" },
                    { name: "Kochschinken", rosa: "64 - 68°C", vollgar: "-" },
                    { name: "Kassler", rosa: "55 - 62°C", vollgar: "64 - 68°C" },
                    { name: "Leberkäse", rosa: "-", vollgar: "72°C" },
                    { name: "Pulled Pork", rosa: "-", vollgar: "95°C" },
                    { name: "Spare Ribs / Rippchen", rosa: "65°C", vollgar: "85°C" },
                    { name: "Schweinbauch (gefüllt)", rosa: "-", vollgar: "70 - 75°C" },
                    { name: "Schweinsköpfe", rosa: "-", vollgar: "75 - 82°C" },
                    { name: "Spanferkel", rosa: "65°C", vollgar: "-" }
                ]
            },
            {
                gruppe: "Kalb",
                eintraege: [
                    { name: "Kalbsrücken", rosa: "65 - 70°C", vollgar: "-" },
                    { name: "Kalbsfilet", rosa: "60°C", vollgar: "-" },
                    { name: "Kalbsbraten", rosa: "-", vollgar: "70 - 80°C" },
                    { name: "Kalbsbrust (gefüllt)", rosa: "-", vollgar: "75 - 78°C" },
                    { name: "Haxe", rosa: "-", vollgar: "80 - 85°C" }
                ]
            },
            {
                gruppe: "Lamm & Hammel",
                eintraege: [
                    { name: "Lammkeule", rosa: "60°C", vollgar: "70 - 72°C" },
                    { name: "Lammrücken", rosa: "60 - 62°C", vollgar: "68°C" },
                    { name: "Lammkarree", rosa: "55°C", vollgar: "-" },
                    { name: "Hammelkeule", rosa: "75 - 78°C", vollgar: "82 - 85°C" }
                ]
            },
            {
                gruppe: "Fisch",
                eintraege: [
                    { name: "Lachs", rosa: "-", vollgar: "60°C" },
                    { name: "Zander", rosa: "-", vollgar: "62°C" },
                    { name: "Hecht", rosa: "-", vollgar: "63°C" },
                    { name: "Seeteufel", rosa: "55 - 60°C", vollgar: "62°C" },
                    { name: "Thunfisch", rosa: "-", vollgar: "62°C" },
                    { name: "Crevetten", rosa: "-", vollgar: "62°C" }
                ]
            }
        ],
        tipps: "Kerntemperaturen sind Richtwerte. Fleisch nach dem Garen 5-10 Minuten ruhen lassen – die Temperatur steigt dabei noch um 2-4°C an."
    },
    {
        id: 2,
        titel: "Sous-vide Gar-Tabelle",
        kategorie: "Temperaturen",
        beschreibung: "Vollständige Garzeiten und -temperaturen für Sous-vide – Rind, Lamm, Schwein, Geflügel, Wild, Fisch, Gemüse, Obst und Ei",
        quelle: "Gartabelle_DE_neu.pdf",
        inhalt: [
            {
                gruppe: "Rind",
                eintraege: [
                    { name: "Rinderbraten (Brust/Roastbeef)", blue: "–", rare: "–", medium: "56-60°C / 24:00h", welldone: "60-65°C / 32:00h" },
                    { name: "Rinderfilet / Steaks 1,5 cm", blue: "40-45°C / 0:50h", rare: "45-50°C / 0:50h", medium: "54-56°C / 0:50h", welldone: "60-65°C / 0:50h" },
                    { name: "Rinderfilet / Steaks 2,5 cm", blue: "40-45°C / 1:10h", rare: "45-50°C / 1:10h", medium: "54-56°C / 1:10h", welldone: "60-65°C / 1:10h" },
                    { name: "Rinderfilet / Steaks 4 cm", blue: "40-45°C / 2:00h", rare: "45-50°C / 2:00h", medium: "54-56°C / 2:00h", welldone: "60-65°C / 2:00h" },
                    { name: "Rinderfilet / Steaks 5 cm", blue: "40-45°C / 2:45h", rare: "45-50°C / 2:45h", medium: "54-56°C / 2:45h", welldone: "60-65°C / 2:45h" },
                    { name: "Rinderfilet / Steaks 6 cm", blue: "40-45°C / 3:30h", rare: "45-50°C / 3:30h", medium: "54-56°C / 3:30h", welldone: "60-65°C / 3:30h" },
                    { name: "Rinderfilet / Steaks 7 cm", blue: "40-45°C / 4:20h", rare: "45-50°C / 4:20h", medium: "54-56°C / 4:20h", welldone: "60-65°C / 4:20h" }
                ]
            },
            {
                gruppe: "Lamm",
                eintraege: [
                    { name: "Lammfilet 2 cm", blue: "–", rare: "–", medium: "55-60°C / 0:20h", welldone: "–" },
                    { name: "Lammmedaillon 3 cm", blue: "–", rare: "52-55°C / 0:30h", medium: "–", welldone: "–" },
                    { name: "Lammrücken (ganzes Rippenstück)", blue: "–", rare: "–", medium: "55-60°C / 3:00h", welldone: "–" }
                ]
            },
            {
                gruppe: "Schwein",
                eintraege: [
                    { name: "Schweinefilet 4 cm", blue: "–", rare: "–", medium: "55-60°C / 1:00h", welldone: "–" },
                    { name: "Schweinefilet 5 cm", blue: "–", rare: "–", medium: "55-60°C / 1:30h", welldone: "–" },
                    { name: "Spare Ribs am Stück", blue: "–", rare: "–", medium: "60-65°C / 48:00h", welldone: "–" },
                    { name: "Schweinsnierstück 7×15 cm", blue: "–", rare: "–", medium: "55-60°C / 2:50h", welldone: "–" }
                ]
            },
            {
                gruppe: "Geflügel",
                eintraege: [
                    { name: "Entenbrust 2,5 cm", blue: "–", rare: "52-55°C / 2:00h", medium: "60-65°C / 0:55h", welldone: "66°C / 0:30h" },
                    { name: "Hühner-/Putenbrust 0,5 cm", blue: "–", rare: "–", medium: "60-65°C / 0:35h", welldone: "66°C / 0:05h" },
                    { name: "Hühner-/Putenbrust 1 cm", blue: "–", rare: "–", medium: "60-65°C / 0:40h", welldone: "66°C / 0:10h" },
                    { name: "Hühner-/Putenbrust 2 cm", blue: "–", rare: "–", medium: "60-65°C / 0:55h", welldone: "66°C / 0:30h" },
                    { name: "Hühner-/Putenbrust 3 cm", blue: "–", rare: "–", medium: "60-65°C / 1:25h", welldone: "66°C / 0:55h" },
                    { name: "Hühner-/Putenbrust 4 cm", blue: "–", rare: "–", medium: "60-65°C / 2:05h", welldone: "66°C / 1:25h" },
                    { name: "Hühner-/Putenbrust 5 cm", blue: "–", rare: "–", medium: "60-65°C / 2:55h", welldone: "66°C / 2:00h" },
                    { name: "Hühner-/Putenbrust 6 cm", blue: "–", rare: "–", medium: "60-65°C / 3:50h", welldone: "66°C / 2:45h" },
                    { name: "Hühner-/Putenbrust 7 cm", blue: "–", rare: "–", medium: "60-65°C / 4:55h", welldone: "66°C / 3:35h" }
                ]
            },
            {
                gruppe: "Wild",
                eintraege: [
                    { name: "Hirschrücken 2,5 cm", blue: "–", rare: "52-55°C / 0:25h", medium: "55-60°C / 0:25h", welldone: "–" },
                    { name: "Rehfilet 2 cm", blue: "–", rare: "52-55°C / 0:20h", medium: "55-60°C / 0:20h", welldone: "–" },
                    { name: "Rehrücken (ohne Knochen) 5 cm", blue: "–", rare: "52-55°C / 0:30h", medium: "55-60°C / 0:30h", welldone: "–" },
                    { name: "Wildschweinrücken 2,5 cm", blue: "–", rare: "52-55°C / 0:30h", medium: "55-60°C / 0:30h", welldone: "–" }
                ]
            },
            {
                gruppe: "Fisch",
                eintraege: [
                    { name: "Fisch 0,5 cm", blue: "–", rare: "40-47°C / 0:02h", medium: "47-52°C / 0:05h", welldone: "58-61°C / 0:05h" },
                    { name: "Fisch 1 cm", blue: "–", rare: "40-47°C / 0:08h", medium: "47-52°C / 0:10h", welldone: "58-61°C / 0:10h" },
                    { name: "Fisch 2 cm", blue: "–", rare: "40-47°C / 0:30h", medium: "47-52°C / 0:30h", welldone: "58-61°C / 0:35h" },
                    { name: "Fisch 3 cm", blue: "–", rare: "40-47°C / 1:05h", medium: "47-52°C / 1:10h", welldone: "58-61°C / 1:15h" },
                    { name: "Fisch 4 cm", blue: "–", rare: "40-47°C / 1:55h", medium: "47-52°C / 2:00h", welldone: "58-61°C / 2:10h" },
                    { name: "Fisch 5 cm", blue: "–", rare: "40-47°C / 3:00h", medium: "47-52°C / 3:10h", welldone: "58-61°C / 3:20h" },
                    { name: "Jakobsmuscheln 2 cm", blue: "–", rare: "–", medium: "47-52°C / 0:30h", welldone: "–" },
                    { name: "Lachs 0,5 cm", blue: "35-40°C / 0:02h", rare: "40-47°C / 0:02h", medium: "47-52°C / 0:02h", welldone: "–" },
                    { name: "Lachs 1 cm", blue: "35-40°C / 0:07h", rare: "40-47°C / 0:07h", medium: "47-52°C / 0:07h", welldone: "–" },
                    { name: "Lachs 2 cm", blue: "35-40°C / 0:25h", rare: "40-47°C / 0:30h", medium: "47-52°C / 0:30h", welldone: "–" },
                    { name: "Lachs 3 cm", blue: "35-40°C / 1:00h", rare: "40-47°C / 1:00h", medium: "47-52°C / 1:05h", welldone: "–" },
                    { name: "Lachs 4 cm", blue: "35-40°C / 1:45h", rare: "40-47°C / 1:50h", medium: "47-52°C / 1:50h", welldone: "–" },
                    { name: "Lachs 5 cm", blue: "35-40°C / 2:45h", rare: "40-47°C / 2:55h", medium: "47-52°C / 2:55h", welldone: "–" }
                ]
            },
            {
                gruppe: "Gemüse",
                eintraege: [
                    { name: "Champignons", antemp: "–", temp: "85°C", zeit: "0:20h" },
                    { name: "Fenchel", antemp: "–", temp: "85°C", zeit: "0:40h" },
                    { name: "Kartoffeln", antemp: "–", temp: "85°C", zeit: "1:30h" },
                    { name: "Kohlrabi", antemp: "–", temp: "88°C", zeit: "1:00h" },
                    { name: "Kürbis", antemp: "–", temp: "85°C", zeit: "1:00h" },
                    { name: "Möhren", antemp: "–", temp: "85°C", zeit: "0:45h" },
                    { name: "Rhabarber", antemp: "–", temp: "61°C", zeit: "0:15h" },
                    { name: "Rote Beete", antemp: "–", temp: "85°C", zeit: "0:50h" },
                    { name: "Spargel", antemp: "–", temp: "85°C", zeit: "0:25h" },
                    { name: "Zwiebeln", antemp: "–", temp: "85°C", zeit: "0:35h" }
                ]
            },
            {
                gruppe: "Obst",
                eintraege: [
                    { name: "Weiches Obst (Erdbeeren, Heidelbeeren, Bananen)", antemp: "–", temp: "60°C", zeit: "0:20h" },
                    { name: "Steinobst (Pflaumen, Pfirsiche)", antemp: "–", temp: "75°C", zeit: "1:20h" },
                    { name: "Kernobst (Äpfel, Birnen)", antemp: "–", temp: "80°C", zeit: "1:15h" },
                    { name: "Obstpüree", antemp: "–", temp: "85°C", zeit: "0:45h" }
                ]
            },
            {
                gruppe: "Ei",
                eintraege: [
                    { name: "Ei flüssig-klar", antemp: "–", temp: "54°C", zeit: "1:00h" },
                    { name: "Ei flüssig-milchig", antemp: "–", temp: "57°C", zeit: "1:00h" },
                    { name: "Ei flüssig-weiß", antemp: "–", temp: "62°C", zeit: "1:00h" },
                    { name: "Ei flüssig-wachsweich", antemp: "–", temp: "65°C", zeit: "1:00h" },
                    { name: "Ei wachsweich", antemp: "–", temp: "70°C", zeit: "1:00h" },
                    { name: "Ei hart", antemp: "–", temp: "72°C", zeit: "1:00h" }
                ]
            }
        ],
        tipps: "Sous-vide Garmethode: Lebensmittel vakuumversiegeln und bei konstanter Temperatur im Wasserbad garen. Danach kurz bei hoher Hitze anbraten für Farbe und Kruste. Lachs bei niedrigen Temperaturen wird nicht pasteurisiert."
    },
    {
        id: 3,
        titel: "Backtemperaturen Fleisch im Backofen",
        kategorie: "Temperaturen",
        beschreibung: "Temperaturen und Garzeiten für Fleischgerichte aus dem Backofen – Geflügel und klassische Braten",
        quelle: "Backtemperaturen Fleisch im Backes.pdf",
        inhalt: [
            {
                gruppe: "Geflügel",
                eintraege: [
                    { name: "Gänsebraten (4 kg+)", antemp: "300°C", temp: "200°C (OH) / 200°C (UH)", zeit: "180 - 240 Min." },
                    { name: "Gänsekeule (450-550g)", antemp: "230°C", temp: "180°C (OH) / 200°C (UH)", zeit: "60 - 70 Min." },
                    { name: "Entenbraten gefüllt (2,5 kg+)", antemp: "230°C", temp: "180°C (OH) / 200°C (UH)", zeit: "100 Min." },
                    { name: "Entenbrust (250-350g)", antemp: "200°C", temp: "200°C", zeit: "10 - 15 Min." }
                ]
            }
        ],
        tipps: "OH = Oberhitze, UH = Unterhitze. Fleisch immer mit Fleischthermometer auf Kerntemperatur prüfen! Ruhezeit nach dem Garen nicht vergessen."
    },
    {
        id: 4,
        titel: "Lakereifung bei Rohwurst",
        kategorie: "Anleitung",
        beschreibung: "Fachinformation zur Lakereifung bei schnittfester Rohwurst – aus den Materialien für das Ernährungshandwerk",
        quelle: "Lakereifung.pdf (Bundesministerium für Verbraucherschutz – Bundesprogramm Ökologischer Landbau)",
        inhalt: [
            {
                gruppe: "Was ist Lakereifung?",
                text: "Bei der Lakereifung werden Rohwürste nach dem Füllen in eine Salzlake (Reifungslake) eingetaucht oder darin gelagert. Die Lake unterstützt die Umrötung, reguliert die Austrocknung des Darmes und gibt Würze."
            },
            {
                gruppe: "Anwendung",
                text: "Besonders geeignet für schnittfeste Rohwürste wie Mettwurst, Teewurst und ähnliche Sorten. Die Lake besteht typisch aus Wasser, Salz, NPS und ggf. Gewürzen. Temperatur: 10-14°C, Luftfeuchte: 80-85%."
            }
        ],
        tipps: "PDF enthält Bildmaterial und detaillierte Prozessbeschreibungen – original PDF für vollständige Informationen öffnen."
    },
    {
        id: 5,
        titel: "Welcher Darm für welche Wurst?",
        kategorie: "Anleitung",
        beschreibung: "Übersicht der gebräuchlichsten Darmtypen und deren Verwendung in der Wurstherstellung – Naturdarm, Kunstdarm und Kollagendarm",
        quelle: "Welcher Darm für welche Wurst.pdf (wurst mit Liebe gemacht ©) – Bilddokument",
        inhalt: [
            {
                gruppe: "Naturdarm",
                eintraege: [
                    { name: "Schweinedarm (Kaliber 26/28)", temp: "Bratwurst, Wiener, Frankfurter", zeit: "eng, feines Brät" },
                    { name: "Schweinedarm (Kaliber 28/30)", temp: "Bratwurst, Cervelat", zeit: "Standard-Bratwurst" },
                    { name: "Schweinedarm (Kaliber 30/32)", temp: "Bratwurst, grobe Wurst", zeit: "dicke Bratwurst" },
                    { name: "Schafsaitling (Kaliber 18/20)", temp: "Chipolata, Cocktailwürstchen", zeit: "sehr fein" },
                    { name: "Schafsaitling (Kaliber 20/22)", temp: "Wiener, kleine Würstchen", zeit: "fein" },
                    { name: "Schafsaitling (Kaliber 22/24)", temp: "Wiener, Bockwurst", zeit: "standard" },
                    { name: "Rinderdarm (Kaliber 40/43)", temp: "Kochwurst, Leberwurst, Rotwurst", zeit: "mittel-groß" },
                    { name: "Rindermitteldarm (Ø 60-75 mm)", temp: "Salami, Mortadella, Lyoner", zeit: "groß" },
                    { name: "Rinderblinddarm / Butte", temp: "Zungenwurst, Sülzwurst", zeit: "sehr groß" }
                ]
            },
            {
                gruppe: "Kunstdarm (PVDC/Polyamid)",
                eintraege: [
                    { name: "Kunstdarm Ø 40-55 mm", temp: "Lyoner, Fleischkäse, Brühwurst", zeit: "Koch- und Brühwurst" },
                    { name: "Kunstdarm Ø 60-80 mm", temp: "Mortadella, große Brühwurst", zeit: "groß" },
                    { name: "Räucherdarm", temp: "Mettwurst, Rohwurst zum Räuchern", zeit: "gasdurchlässig" }
                ]
            },
            {
                gruppe: "Kollagendarm",
                eintraege: [
                    { name: "Kollagendarm fein (Kaliber 19-26)", temp: "Bratwurst, kleine Würstchen", zeit: "essbar, zart" },
                    { name: "Kollagendarm mittel (Kaliber 26-32)", temp: "Bratwurst, Grillwurst", zeit: "essbar" },
                    { name: "Kollagendarm groß (Ø 40-60 mm)", temp: "Salami, Rohwurst", zeit: "nicht essbar" }
                ]
            },
            {
                gruppe: "Hinweis",
                text: "Das Original-PDF enthält illustrierte Übersichten – bitte Original-PDF für vollständige grafische Darstellung öffnen. Die Tabelle oben fasst die wesentlichen Informationen zusammen."
            }
        ],
        tipps: "Naturdarm gibt den besten Biss und ist für alle Würste die traditionelle Wahl. Kollagendarm ist leichter zu verarbeiten und gleichmäßiger. Kunstdarm eignet sich besonders für Koch- und Brühwurst sowie industrielle Produktion."
    },
    {
        id: 6,
        titel: "Backtemperaturen Süße Köstlichkeiten",
        kategorie: "Temperaturen",
        beschreibung: "Temperaturen und Garzeiten für süße Weihnachts-Köstlichkeiten im Steinbackofen und Holzbackofen – Bratäpfel, Crumble, Löffelbisquit u.a.",
        quelle: "Temperaturen_und_Garzeiten_fuer_suesse_Koestlichkeiten_zu_Weihnachten.pdf (Häussler)",
        inhalt: [
            {
                gruppe: "Süße Köstlichkeiten (Stein- und Holzbackofen)",
                eintraege: [
                    { name: "Bratäpfel", antemp: "230°C OH / 200°C UH", temp: "180°C", zeit: "35 Min." },
                    { name: "Quarkschmarren", antemp: "235°C OH / 160°C UH", temp: "185°C", zeit: "30 Min." },
                    { name: "Crumble", antemp: "230°C OH / 140°C UH", temp: "175°C", zeit: "25 Min." },
                    { name: "Löffelbisquit", antemp: "210°C OH / 160°C UH", temp: "170°C", zeit: "12 Min." }
                ]
            }
        ],
        tipps: "OH = Oberhitze, UH = Unterhitze. Haushaltsbacköfen ohne Stein benötigen oft etwas höhere Temperaturen oder längere Garzeiten. Süßes Gebäck immer im vorgeheizten Ofen backen."
    }
];
