// Kategorie: Sonstiges
const rezepte_sonstiges = [
    {
        id: 252,
        titel: "Altberliner Erbsensuppe (Feldküche)",
        kategorie: "Sonstiges",
        beschreibung: "Deftige Erbsensuppe für 100 Personen nach Feldküchenrezept – mit Kasseler, Speck und Gemüse.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 100,
        fleischsorten: [
            { name: "Kasselerbauch gewürfelt", menge: 6000, einheit: "g" },
            { name: "Bauchspeck gewürfelt", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Grüne Erbsen geschält", menge: 5000, einheit: "g" },
            { name: "Gelbe Erbsen geschält", menge: 5000, einheit: "g" },
            { name: "Kartoffeln gewürfelt", menge: 5000, einheit: "g" },
            { name: "Sellerie gewürfelt", menge: 1000, einheit: "g" },
            { name: "Möhren gewürfelt", menge: 1000, einheit: "g" },
            { name: "Zwiebeln gewürfelt", menge: 1000, einheit: "g" },
            { name: "Fleischbrühe (Instant)", menge: 25000, einheit: "ml" },
            { name: "Majoran", menge: 80, einheit: "g" },
            { name: "Pimentkörner", menge: 10, einheit: "Stk" },
            { name: "Lorbeerblätter", menge: 8, einheit: "Stk" }
        ],
        gewuerze: [
            { name: "Salz", menge: 1, einheit: "nach Geschmack" },
            { name: "Schwarzer Pfeffer", menge: 1, einheit: "nach Geschmack" }
        ],
        darm: { typ: "-", kaliber: "-", menge: "-" },
        ausgabe: "100 Portionen",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Erbsen einweichen", inhalt: "Grüne und gelbe Erbsen am Vortag einweichen." },
            { titel: "Erbsen kochen", inhalt: "Am Herstellungstag mit Fleischbrühe zum Kochen bringen. Majoran, Lorbeerblätter und Pimentkörner zugeben, 45 Minuten köcheln lassen." },
            { titel: "Fleisch anbraten", inhalt: "Im Bratenkessel Bauch- und Speckwürfel scharf anbraten, dann Zwiebeln, Sellerie und Möhren zugeben und anschwitzen." },
            { titel: "Fertigstellen", inhalt: "Wenn Erbsen weich sind, alles zusammen und Kartoffeln zugeben. Kessel verschließen, weitere 15 Minuten kochen. Mit Salz und Pfeffer abschmecken." }
        ]}],
        tipps: ["Erbsen sind weich wenn sie sich zwischen den Fingern zerdrücken lassen"]
    },
    {
        id: 253,
        titel: "Gefülltes Spanferkel nach bayerischer Art",
        kategorie: "Sonstiges",
        beschreibung: "Klassisches gefülltes Spanferkel mit Brötchen-Bauch-Füllung – mit Salzlake gespritzt und gegrillt.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 1000,
        fleischsorten: [
            { name: "Durchwachsener Schweinebauch klein gewürfelt", menge: 150, einheit: "g" }
        ],
        zutaten: [
            { name: "Milch", menge: 300, einheit: "ml" },
            { name: "Brötchen (älter) klein gewürfelt", menge: 6, einheit: "Stk" },
            { name: "Zwiebeln fein gehackt", menge: 3, einheit: "Stk" },
            { name: "Eier", menge: 2, einheit: "Stk" },
            { name: "Speiseöl zum Bepinseln", menge: 500, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Salz", menge: 2, einheit: "TL" },
            { name: "Weißer Pfeffer gemahlen", menge: 0.5, einheit: "TL" },
            { name: "Kümmel gemahlen", menge: 0.5, einheit: "TL" }
        ],
        darm: { typ: "-", kaliber: "-", menge: "-" },
        ausgabe: "1 kg Füllung (für 1 Spanferkel)",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Spanferkel vorbereiten", inhalt: "Von innen und außen waschen, trocken reiben, mit 7%iger Salzlake spritzen und 48 Stunden kühl stellen." },
            { titel: "Füllung bereiten", inhalt: "Bauchwürfel auslassen, Zwiebeln kurz anschmoren. Mit Brötchen, Eiern, Milch und Gewürzen zu einem Teig verkneten." },
            { titel: "Füllen und grillen", inhalt: "Füllung ins Ferkel stopfen, Bauch zunähen, Pfoten abtrennen. Alle 30 Minuten mit Öl bepinseln. Ca. 60 Minuten vor Fertigstellung Alufolie entfernen." }
        ]}],
        tipps: ["Blasen auf der Haut durch Einstechen mit Nadel beseitigen"]
    },
    {
        id: 254,
        titel: "Currysoße extra scharf",
        kategorie: "Sonstiges",
        beschreibung: "Schnelle scharfe Currysoße für Currywurst – aus Tomatenmark, Ketchup und Cayennepfeffer.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 500,
        fleischsorten: [],
        zutaten: [
            { name: "Tomatenmark", menge: 250, einheit: "ml" },
            { name: "Tomatenketchup", menge: 150, einheit: "ml" },
            { name: "Fleischbrühe (Instant)", menge: 100, einheit: "ml" },
            { name: "Speiseöl", menge: 1, einheit: "EL" }
        ],
        gewuerze: [
            { name: "Currypulver", menge: 1, einheit: "TL" },
            { name: "Cayennepfeffer", menge: 1, einheit: "TL" }
        ],
        darm: { typ: "-", kaliber: "-", menge: "-" },
        ausgabe: "ca. 0,5 Liter Soße",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Kochen", inhalt: "Alle Zutaten in einem Topf gut verrühren, ca. 10 Minuten bei geringer Temperatur köcheln lassen." },
            { titel: "Servieren", inhalt: "Über vorbereitete Currywürste geben und noch etwas Currypulver darüber streuen." }
        ]}],
        tipps: ["Kann in größeren Mengen zubereitet und gekühlt einige Tage aufbewahrt werden"]
    },
    {
        id: 255,
        titel: "Deftiger Specksalat",
        kategorie: "Sonstiges",
        beschreibung: "Warmer Kartoffelsalat mit geräuchertem Speck und Gewürzgurken – deftig und herzhaft.",
        quelle: "Rezepte_Sortiert/Leberwurst/Leberwurst.docx",
        basisMenge: 1250,
        fleischsorten: [
            { name: "Durchwachsener Speck geräuchert", menge: 200, einheit: "g" }
        ],
        zutaten: [
            { name: "Kartoffeln fest kochend", menge: 1000, einheit: "g" },
            { name: "Gewürzgurken geviertelt", menge: 2, einheit: "Stk" },
            { name: "Zwiebeln grob gewürfelt", menge: 2, einheit: "Stk" },
            { name: "Schweineschmalz", menge: 2, einheit: "EL" },
            { name: "Senf mittelscharf", menge: 1, einheit: "EL" },
            { name: "Fleischbrühe (Instant)", menge: 100, einheit: "ml" }
        ],
        gewuerze: [
            { name: "Salz", menge: 1, einheit: "nach Geschmack" },
            { name: "Pfeffer", menge: 1, einheit: "nach Geschmack" }
        ],
        darm: { typ: "-", kaliber: "-", menge: "-" },
        ausgabe: "ca. 1–1,5 kg Salat",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Kartoffeln kochen", inhalt: "Kartoffeln mit Schale gar kochen, pellen, in Scheiben schneiden." },
            { titel: "Speck anbraten", inhalt: "Klein gewürfelten Speck im heißen Schmalz goldbraun anbraten, Zwiebeln kurz mitschmoren." },
            { titel: "Vermengen", inhalt: "Speck, Zwiebeln, Senf und Brühe zu den Kartoffeln geben und gut umrühren." },
            { titel: "Durchziehen lassen", inhalt: "Pikant mit Salz und Pfeffer abschmecken, ca. 6 Stunden im Kühlschrank durchziehen lassen." }
        ]}],
        tipps: ["Bei Bedarf nochmals nachwürzen nach dem Durchziehen"]
    },

    // ── Sülzen und Schlachtspezialitäten ─────────────────────
    {
        id: 288,
        titel: "Schäufele badische Art",
        kategorie: "Sonstiges",
        beschreibung: "Klassisches Schäufele nach badischer Art – im Topf weichgekocht mit Wacholder und Möhren.",
        quelle: "Wurst im Glas/Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: { gesamt: 2000 },
        fleischsorten: [
            { name: "Schäufele mit Knochen und Schwarte", menge: 2000, einheit: "g" }
        ],
        zutaten: [
            { name: "Möhren (in Scheiben)", menge: 300, einheit: "g" },
            { name: "Wacholderbeeren (angedrückt)", menge: 4, einheit: "g" },
            { name: "Schwarze Pfefferkörner", menge: 4, einheit: "g" },
            { name: "Nelken", menge: 4, einheit: "Stück" },
            { name: "Lorbeerblätter", menge: 2, einheit: "Stück" },
            { name: "Zwiebel (groß)", menge: 1, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "Salz", menge: 15, einheit: "g", proLiter: true }
        ],
        darm: { typ: "Kochtopf", kaliber: "–", menge: "–" },
        ausgabe: "ca. 4 Portionen",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Vorbereiten", inhalt: "Zwiebel halbieren, mit Nelken und Lorbeerblättern spicken. In Topf mit Öl kräftig braun rösten." },
            { titel: "Kochen", inhalt: "Mit Wasser ablöschen (15g Salz/Liter). Schäufele mit restlichen Zutaten zugeben, Wasser auffüllen bis alles bedeckt. Kurz aufkochen, dann ca. 1,5 Stunden leicht köcheln bis Fleisch sich vom Knochen löst." }
        ]}],
        tipps: ["Traditionell mit Sauerkraut und Kartoffelbrei servieren"]
    },
    {
        id: 289,
        titel: "Schäufele fränkische Art",
        kategorie: "Sonstiges",
        beschreibung: "Knuspriges Schäufele nach fränkischer Art – im Bräter gegart mit sämiger Soße.",
        quelle: "Wurst im Glas/Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: { gesamt: 1000 },
        fleischsorten: [
            { name: "Schäufele mit Schwarte", menge: 1000, einheit: "g" }
        ],
        zutaten: [
            { name: "Möhren (gewürfelt)", menge: 300, einheit: "g" },
            { name: "Fleischbrühe", menge: 500, einheit: "ml" },
            { name: "Zwiebeln", menge: 2, einheit: "Stück" },
            { name: "Knoblauchzehe", menge: 1, einheit: "Stück" },
            { name: "Öl", menge: null, einheit: "zum Anschwitzen" },
            { name: "Mehl oder Stärke (falls nötig)", menge: null, einheit: "nach Bedarf" }
        ],
        gewuerze: [
            { name: "Salz", menge: null, einheit: "nach Geschmack" },
            { name: "Schwarzer Pfeffer", menge: null, einheit: "nach Geschmack" },
            { name: "Kümmel gemörsert", menge: null, einheit: "nach Geschmack" }
        ],
        darm: { typ: "Bräter, Backofen 190°C", kaliber: "–", menge: "–" },
        ausgabe: "ca. 4 Portionen",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Anbraten", inhalt: "Schwarte rautenförmig einritzen. Fleisch mit Salz, Pfeffer, Kümmel würzen. In Pfanne goldgelb anbraten. Klein geschnittenes Gemüse glasig dünsten. Mit 250ml Brühe übergießen." },
            { titel: "Braten", inhalt: "Alles in Bräter geben. Bei 190°C 75 Min. mit geschlossenem Deckel garen. Deckel öffnen, mit restlicher Brühe übergießen, weitere 75 Min. knusprig braten." },
            { titel: "Soße", inhalt: "Schäufele herausnehmen. Gemüse mit Brühe pürieren. Falls zu dünn: mit Stärke/Mehl andicken. Aufkochen lassen." }
        ]}],
        tipps: []
    },
    {
        id: 290,
        titel: "Kesselfleisch",
        kategorie: "Sonstiges",
        beschreibung: "Klassisches Kesselfleisch – Schweinefleisch mit Suppengrün langsam geköchelt.",
        quelle: "Wurst im Glas/Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: { gesamt: 2000 },
        fleischsorten: [
            { name: "Schweinefleisch (Schweinekopf, Bauch mit Schwarte, Haxe)", menge: 2000, einheit: "g" }
        ],
        zutaten: [
            { name: "Karotten", menge: 400, einheit: "g" },
            { name: "Suppengrün (1 Bund)", menge: null, einheit: "1 Bund" },
            { name: "Wacholderbeeren (angedrückt)", menge: 2, einheit: "g" },
            { name: "Pfefferkörner", menge: 4, einheit: "g" },
            { name: "Nelken", menge: 4, einheit: "Stück" },
            { name: "Lorbeerblätter", menge: 2, einheit: "Stück" },
            { name: "Zwiebel (groß)", menge: 1, einheit: "Stück" }
        ],
        gewuerze: [
            { name: "Salz", menge: 18, einheit: "g", proLiter: true }
        ],
        darm: { typ: "Kochtopf", kaliber: "–", menge: "–" },
        ausgabe: "ca. 4-6 Portionen",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Zwiebel rösten", inhalt: "Zwiebel halbieren, mit Nelken und Lorbeerblättern spicken. Im Topf mit Öl kräftig braun rösten." },
            { titel: "Kochen", inhalt: "Klein geschnittene Karotten zugeben, mit Wasser auffüllen (18g Salz/Liter). Restliche Zutaten und Fleisch zugeben, aufkochen, dann 2 Stunden simmern bis Fleisch weich." }
        ]}],
        tipps: ["Traditionell mit Sauerkraut servieren"]
    },
    {
        id: 291,
        titel: "Schwäbische Schlachtplatte",
        kategorie: "Sonstiges",
        beschreibung: "Traditionelle schwäbische Schlachtplatte mit Sauerkraut, Kassler, Leber- und Blutwurst, Bratwurst und Braten.",
        quelle: "Wurst im Glas/Sülzen-und-Schlachtspezialitäten.pdf",
        basisMenge: { gesamt: 2500 },
        fleischsorten: [
            { name: "Geräucherter Bauchspeck", menge: 400, einheit: "g" },
            { name: "Kassler", menge: 300, einheit: "g" },
            { name: "Fertiger kalter Braten", menge: 300, einheit: "g" }
        ],
        zutaten: [
            { name: "Sauerkraut", menge: 1000, einheit: "g" },
            { name: "Kartoffeln (gerieben)", menge: 200, einheit: "g" },
            { name: "Leberwürste", menge: 4, einheit: "Stück" },
            { name: "Blutwürste", menge: 4, einheit: "Stück" },
            { name: "Bauernbratwürste", menge: 4, einheit: "Stück" },
            { name: "Zwiebeln", menge: 2, einheit: "Stück" },
            { name: "Apfel (gerieben)", menge: 1, einheit: "Stück" },
            { name: "Wasser", menge: 500, einheit: "ml" },
            { name: "Trockener Weißwein", menge: 250, einheit: "ml" },
            { name: "Schmalz", menge: null, einheit: "etwas" }
        ],
        gewuerze: [
            { name: "Kümmel", menge: 4, einheit: "g" },
            { name: "Wacholderbeeren (angedrückt)", menge: 2, einheit: "g" },
            { name: "Lorbeerblätter", menge: 2, einheit: "Stück" },
            { name: "Salz", menge: null, einheit: "nach Geschmack" },
            { name: "Pfeffer", menge: null, einheit: "nach Geschmack" }
        ],
        darm: { typ: "Kochtopf", kaliber: "–", menge: "–" },
        ausgabe: "ca. 6-8 Portionen",
        schritte: [{ gruppe: "Zubereitung", schritte: [
            { titel: "Sauerkraut", inhalt: "Zwiebeln fein hacken, in Schmalz anschwitzen. Sauerkraut zugeben, kurz anschwitzen. Mit Wasser ablöschen, würzen. Geriebene Kartoffel und Apfel zugeben. 45 Min. köcheln." },
            { titel: "Fleisch", inhalt: "Wein, Kassler, Braten und Bauchspeck zugeben. Weitere 45 Min. köcheln." },
            { titel: "Würste", inhalt: "Leber- und Blutwürste in 60°C heißem Wasser 10 Min. erwärmen. Bratwürste in Schmalz goldbraun braten." }
        ]}],
        tipps: ["Mit Kartoffelpüree oder Bratkartoffeln servieren"]
    }
];
