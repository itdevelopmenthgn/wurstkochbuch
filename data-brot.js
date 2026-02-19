// Brot-Rezepte
// Schema: basisMenge als Objekt { gesamt: 0 } (kein Fleischgewicht),
//         schritte als [{gruppe, schritte:[{titel,inhalt}]}],
//         zutaten als [{name, menge, einheit}],
//         tipps als Array
const rezepte_brot = [
    {
        id: 332,
        titel: "Basis-Brotrezept nach Richmont",
        kategorie: "Brot",
        beschreibung: "Schweizer Basis-Brotrezept mit fermentiertem Vorteig – Grundlage für 12 verschiedene Brotkreationen",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 200, einheit: "g" },
            { name: "Vollkornweizenmehl (Vorteig)", menge: 100, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 200, einheit: "g" },
            { name: "Frische Backhefe (Vorteig)", menge: 5, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 5, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 500, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 300, einheit: "g" },
            { name: "Frische Backhefe (Endteig)", menge: 5, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 10, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1 großer Laib",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen und gut kneten. 1 Stunde zugedeckt bei Raumtemperatur stehen lassen. Dann 12-24 Stunden in den Kühlschrank. Vor Gebrauch 30-60 Minuten auf Raumtemperatur bringen." },
                    { titel: "Endteig", inhalt: "Hefe in etwas Wasser auflösen. Restliches Wasser zum Vorteig geben. Alle Zutaten außer Salz 4 Minuten auf Stufe 1,5 kneten, dann Salz zugeben und 6 Minuten auf Stufe 2 fertigkneten." },
                    { titel: "Gären", inhalt: "Teig zugedeckt 60 Minuten bei Raumtemperatur gehen lassen, nach 30 Minuten einmal falten." },
                    { titel: "Formen und backen", inhalt: "Laib formen, in Gärkörbchen 50 Minuten gehen lassen. Backofen mit Blech auf 230°C vorheizen. Brot einschießen, 15 Minuten backen, auf 200°C reduzieren und fertig backen bis Kerntemperatur 95°C." }
                ]
            }
        ],
        tipps: ["Bei Raumtemperatur unter 18°C: Vorteig komplett bei Raumtemperatur gären lassen (kein Kühlschrank).", "Wasser für Endteig auf 30°C erwärmen.", "Etwas Wasser in den heißen Ofen spritzen für knusprige Kruste."]
    },
    {
        id: 333,
        titel: "Dreikönigskuchen",
        kategorie: "Brot",
        beschreibung: "Traditioneller Schweizer Dreikönigskuchen zum 6. Januar – süßer Hefeteig mit Mandeln, aus Basis-Brotrezept abgeleitet",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 150, einheit: "g" },
            { name: "Milch (Vorteig)", menge: 50, einheit: "g" },
            { name: "Ei (Vorteig)", menge: 1, einheit: "Stk" },
            { name: "Frische Backhefe (Vorteig)", menge: 2, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 2, einheit: "g" },
            { name: "Zucker (Vorteig)", menge: 30, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 300, einheit: "g" },
            { name: "Mandelblättchen", menge: null, einheit: "zum Bestreuen" },
            { name: "Eigelb", menge: null, einheit: "zum Bestreichen" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1-2 Kuchen",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen, gut kneten. Über Nacht im Kühlschrank fermentieren." },
                    { titel: "Endteig", inhalt: "Hefe in etwas Wasser auflösen. Zum Vorteig geben. Alle Zutaten 4 Minuten auf Stufe 1,5, dann 6 Minuten auf Stufe 2 kneten. 60-90 Minuten gehen lassen bis Volumen verdoppelt." },
                    { titel: "Kugeln formen", inhalt: "Teig halbieren, 8 gleichgroße Kugeln formen (für großen Kuchen 10 Kugeln). Kugeln kreisförmig anordnen. 1 Stunde zugedeckt gehen lassen." },
                    { titel: "Backen", inhalt: "Mit Eigelb bestreichen, mit Mandelblättchen bestreuen. Ofen auf 180°C vorheizen. Im unteren Teil 20-25 Minuten (großer Kuchen ca. 30 Minuten) backen. Letzte 7 Minuten ggf. mit Alufolie abdecken." }
                ]
            }
        ],
        tipps: ["Traditionell wird eine kleine Figur (König) in eine der Kugeln eingebacken. Wer sie findet, ist der Dreikönigskönig des Tages!"]
    },
    {
        id: 334,
        titel: "Fastenwähe",
        kategorie: "Brot",
        beschreibung: "Basler Fastenwähe – bretzelähnliches Hefegebäck mit Kümmel, ein Luxusgebäck aus der Schweiz für die Fastenzeit",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 75, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 50, einheit: "g" },
            { name: "Frische Backhefe (Vorteig)", menge: 1.5, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 1.5, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 175, einheit: "g" },
            { name: "Milch (Endteig)", menge: 75, einheit: "g" },
            { name: "Frische Backhefe (Endteig)", menge: 2, einheit: "g" },
            { name: "Kümmel", menge: null, einheit: "großzügig zum Bestreuen" },
            { name: "Eigelb", menge: null, einheit: "zum Bestreichen" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "5 Stück",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen und kneten. 1 Stunde bei Raumtemperatur, dann 12-24 Stunden kühl stellen. 30-60 Minuten vor Verwendung aus dem Kühlschrank nehmen." },
                    { titel: "Endteig", inhalt: "Hefe in etwas Milch auflösen. Restliche Milch zum Vorteig. Alle Zutaten außer Salz 4 Minuten Stufe 1,5, dann mit Salz 6 Minuten Stufe 2 kneten." },
                    { titel: "Formen und gehen lassen", inhalt: "Fünf Teiglinge formen (brezelförmig oder oval). Zugedeckt 45-60 Minuten gehen lassen." },
                    { titel: "Backen", inhalt: "Ofen auf 180°C Umluft vorheizen. Mit Eigelb bestreichen, großzügig mit Kümmel bestreuen. 13-15 Minuten in der Ofenmitte backen. Auf Gitter auskühlen lassen." }
                ]
            }
        ],
        tipps: ["Schmecken frisch am besten! Traditionell in Basel zum Beginn der Fastenzeit.", "Das Kümmel nicht sparen – es ist das Erkennungsmerkmal der Fastenwähe."]
    },
    {
        id: 335,
        titel: "Buttermilch-Toastbrot",
        kategorie: "Brot",
        beschreibung: "Zartes Toastbrot mit Buttermilch und fermentiertem Vorteig – für perfekte Toastscheiben",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 130, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 85, einheit: "g" },
            { name: "Frische Backhefe (Vorteig)", menge: 1.5, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 1.5, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 310, einheit: "g" },
            { name: "Buttermilch", menge: 200, einheit: "g" },
            { name: "Zucker", menge: 20, einheit: "g" },
            { name: "Butter", menge: 20, einheit: "g" },
            { name: "Frische Backhefe (Endteig)", menge: 3, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 8, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1 Toastbrot",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Vorteigzutaten mischen und kneten. 1 Stunde bei Raumtemperatur, dann 12-24 Stunden in den Kühlschrank." },
                    { titel: "Endteig", inhalt: "Hefe in 30g Wasser auflösen. Buttermilch zum Vorteig geben. Alle Zutaten außer Salz und Butter 4 Minuten kneten. Salz und Butter zugeben, 6 Minuten fertigkneten." },
                    { titel: "Gären und formen", inhalt: "60 Minuten gehen lassen. Teig in Toastform geben, zugedeckt 60-70 Minuten gehen lassen bis er den Rand erreicht." },
                    { titel: "Backen", inhalt: "Ofen auf 200°C vorheizen. 30-35 Minuten backen bis goldbraun. Sofort aus der Form nehmen und auskühlen lassen." }
                ]
            }
        ],
        tipps: ["Buttermilch macht das Brot besonders zart und verlängert die Frischhaltung.", "Mit Deckel auf der Toastform für quadratische Scheiben backen."]
    },
    {
        id: 336,
        titel: "Baguette (Brotbuch-Rezept)",
        kategorie: "Brot",
        beschreibung: "Klassisches Baguette mit fermentiertem Vorteig – 2 Stück, knusprige Kruste",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl Type 550 (Vorteig)", menge: 75, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 50, einheit: "g" },
            { name: "Frische Backhefe (Vorteig)", menge: 1.3, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 1.3, einheit: "g" },
            { name: "Weizenmehl Type 550 (Endteig)", menge: 175, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 120, einheit: "g" },
            { name: "Frische Backhefe (Endteig)", menge: 2, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 5, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "2 Baguette",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen und kneten. 1 Stunde bei Raumtemperatur, dann 12-24 Stunden in den Kühlschrank." },
                    { titel: "Endteig", inhalt: "Hefe in etwas Wasser auflösen. Restliches Wasser zum Vorteig. Alle Zutaten außer Salz 4 Minuten auf Stufe 1,5, dann Salz zugeben und 6 Minuten auf Stufe 2 kneten." },
                    { titel: "Formen", inhalt: "Teig in 2 Stücke teilen. Auf ca. 15cm Länge vorrollen, 1 Minute entspannen lassen. Dann zum Baguette auf ca. 40cm ausrollen, Enden spitz formen." },
                    { titel: "Backen", inhalt: "Auf Backpapier legen, 30-40 Minuten gehen lassen. Ofen auf 230°C vorheizen, Wasser einschwaden. Einschießen und 20-25 Minuten backen." }
                ]
            }
        ],
        tipps: ["Type 550 Mehl ist entscheidend!", "Viel Dampf beim Einschießen für die knusprige Kruste.", "Mit Lame oder scharfer Klinge schräg einschneiden."]
    },
    {
        id: 337,
        titel: "Schlumbergerli",
        kategorie: "Brot",
        beschreibung: "Basler Brötchen-Spezialität seit 1872 – mit charakteristischem Aufriss, benannt nach Bankier Schlumberger",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl Type 550 (Vorteig)", menge: 75, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 50, einheit: "g" },
            { name: "Frische Backhefe (Vorteig)", menge: 1.3, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 1.3, einheit: "g" },
            { name: "Weizenmehl Type 550 (Endteig)", menge: 175, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 105, einheit: "g" },
            { name: "Frische Backhefe (Endteig)", menge: 2, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 5, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "4-8 Brötchen",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen und kneten. Über Nacht bei Raumtemperatur gehen lassen." },
                    { titel: "Endteig", inhalt: "Hefe in etwas Wasser auflösen. Wasser zum Vorteig, alle Zutaten außer Salz 4 Minuten kneten. Salz zugeben, 6 Minuten fertigkneten." },
                    { titel: "Formen", inhalt: "Teiglinge rund formen. Oval formen und einritzen (für den charakteristischen Aufriss). Schluss nach oben!" },
                    { titel: "Backen", inhalt: "50 Minuten gehen lassen. Bei 220°C mit Dampf 15-18 Minuten backen." }
                ]
            }
        ],
        tipps: ["Der Schluss (Naht) muss nach oben zeigen für den typischen Aufriss!", "Schlumbergerli gibt es in Basel seit 1872 – eine stadtbekannte Spezialität."]
    },
    {
        id: 338,
        titel: "Tessinerli (Tessinerbrot)",
        kategorie: "Brot",
        beschreibung: "Schweizer Tessinerbrot aus Halbweissmehl – in 6 Stücke geteilt, aneinandergelegt und gemeinsam gebacken",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Halbweissmehl Type 812 (Vorteig)", menge: 150, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 100, einheit: "g" },
            { name: "Trockenhefe (Vorteig)", menge: 1, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 2.5, einheit: "g" },
            { name: "Halbweissmehl Type 812 (Endteig)", menge: 350, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 200, einheit: "g" },
            { name: "Trockenhefe (Endteig)", menge: 2, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 8, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1 Tessinerbrot",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen, kneten. Über Nacht gehen lassen." },
                    { titel: "Endteig", inhalt: "Zum Vorteig geben, 4 Minuten kneten. Salz zugeben, 6 Minuten fertigkneten. 60 Minuten ruhen, nach 30 Minuten 1x falten." },
                    { titel: "Formen", inhalt: "Teig in 6 Stücke teilen, rund formen. 5 Minuten ruhen. Dann oval formen und aneinanderlegen (Stücke berühren sich, aber nicht zu dicht)." },
                    { titel: "Backen", inhalt: "50 Minuten zugedeckt gehen lassen. Im vorgeheizten Ofen (mit Stein) backen bis goldbraun." }
                ]
            }
        ],
        tipps: ["Die 6 Teile wachsen beim Backen zusammen und lassen sich dann einzeln abbrechen – typisch Tessinerli!", "Halbweissmehl Type 812 gibt den nussigen Geschmack."]
    },
    {
        id: 339,
        titel: "Brot mit Hartweizengriess",
        kategorie: "Brot",
        beschreibung: "Besonderes Brot mit Hartweizengriess – gibt einen besonderen Biss, eignet sich ausgezeichnet als Grillbrot",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 100, einheit: "g" },
            { name: "Hartweizengriess (Vorteig)", menge: 50, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 100, einheit: "g" },
            { name: "Trockenhefe (Vorteig)", menge: 1, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 2, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 300, einheit: "g" },
            { name: "Hartweizengriess (Endteig)", menge: 100, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 200, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 8, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1 Brot",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Mehl, Griess, Wasser, Hefe und Salz mischen und kneten. Im Kühlschrank 12-24 Stunden gären lassen." },
                    { titel: "Endteig", inhalt: "Wasser zum Vorteig, alle Zutaten außer Salz 4 Minuten kneten. Salz zugeben, 6 Minuten fertigkneten. 60 Minuten ruhen, 1x falten." },
                    { titel: "Formen und backen", inhalt: "Laib formen, in Gärkörbchen 50 Minuten gehen lassen. Bei 230°C einschießen, 15 Minuten, dann auf 200°C reduzieren." }
                ]
            }
        ],
        tipps: ["Hartweizengriess (Semolina) gibt dem Brot einen leicht nussigen Biss und eine schöne Kruste.", "Ideal als Grillbrot – leicht angetoastet unschlagbar!"]
    },
    {
        id: 340,
        titel: "Kartoffelbrot",
        kategorie: "Brot",
        beschreibung: "Saftiges Kartoffelbrot mit fermentiertem Vorteig – Kartoffeln machen das Brot besonders saftig und haltbar",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 100, einheit: "g" },
            { name: "Vollkornweizenmehl (Vorteig)", menge: 50, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 100, einheit: "g" },
            { name: "Trockenhefe (Vorteig)", menge: 1, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 2, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 325, einheit: "g" },
            { name: "Kartoffeln (gekocht, zerdrückt)", menge: 200, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 150, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 8, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "2 kleine oder 1 mittlerer Laib",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Vorteigzutaten mischen und kneten. Im Kühlschrank 12-24 Stunden fermentieren lassen." },
                    { titel: "Kartoffeln vorbereiten", inhalt: "Kartoffeln kochen und zerdrücken oder reiben. Abkühlen lassen." },
                    { titel: "Endteig", inhalt: "Alle Zutaten außer Salz 4 Minuten kneten. Salz zugeben, 6 Minuten fertigkneten. 60 Minuten ruhen, 1x falten." },
                    { titel: "Formen und backen", inhalt: "Teig halbieren, rund formen. In Gärkörbchen mit Schluss nach unten 50 Minuten gehen lassen. Bei 230°C einschießen, 15 Min., dann auf 200°C – fertig backen." }
                ]
            }
        ],
        tipps: ["Kartoffeln halten das Brot länger frisch und machen es saftig.", "Mehligkochende Kartoffeln eignen sich am besten.", "Auch als Rosmarin-Kartoffelbrot mit frischem Rosmarin köstlich!"]
    },
    {
        id: 341,
        titel: "Mischbrot mit Salatkernenmischung",
        kategorie: "Brot",
        beschreibung: "Großer Laib mit Urdinkelmehl und Salatkernenmischung (Sonnenblumen-, Kürbiskerne, Pinienkerne, Walnüsse)",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 200, einheit: "g" },
            { name: "Urdinkelmehl (Vorteig)", menge: 100, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 200, einheit: "g" },
            { name: "Frische Backhefe (Vorteig)", menge: 5, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 5, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 500, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 300, einheit: "g" },
            { name: "Salatkernenmischung", menge: 150, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 10, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1 großer Laib",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen und kneten. 1 Stunde bei Raumtemperatur, dann 12-24 Stunden in den Kühlschrank." },
                    { titel: "Endteig", inhalt: "Hefe auflösen, Wasser zum Vorteig. Alle Zutaten außer Salz und Kerne 4 Minuten kneten. Salz zugeben, 6 Minuten kneten. Kerne vorsichtig einarbeiten." },
                    { titel: "Gären und formen", inhalt: "60 Minuten gehen lassen, 1x falten. Laib formen." },
                    { titel: "Backen", inhalt: "Im Gärkörbchen 50 Minuten gehen lassen. Bei 230°C einschießen, 15 Minuten, dann auf 200°C." }
                ]
            }
        ],
        tipps: ["Kerne vorher kurz in der Pfanne rösten für intensiveres Aroma.", "Rosinen können auch eingearbeitet werden – nach Geschmack."]
    },
    {
        id: 342,
        titel: "Haferflockenbrot",
        kategorie: "Brot",
        beschreibung: "Rustikales Haferflockenbrot mit Brühstück – die eingeweichten Haferflocken machen das Brot besonders saftig",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 150, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 100, einheit: "g" },
            { name: "Frischhefe (Vorteig)", menge: 2, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 2, einheit: "g" },
            { name: "Haferflocken (Brühstück)", menge: 50, einheit: "g" },
            { name: "Kochendes Wasser (Brühstück)", menge: 150, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 300, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 100, einheit: "g" },
            { name: "Frischhefe (Endteig)", menge: 3, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 8, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1 Laib",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig und Brühstück", inhalt: "Vorteig herstellen. Haferflocken mit kochendem Wasser übergießen, 1 Stunde oder über Nacht quellen lassen." },
                    { titel: "Endteig", inhalt: "Wasser zum Vorteig, alle Zutaten außer Salz 4 Minuten kneten. Salz zugeben, 6 Minuten fertigkneten. Quell-Haferflocken einarbeiten. 60 Minuten ruhen." },
                    { titel: "Formen", inhalt: "Teig rund formen. Kugel mit Schluss nach unten in mit Mehl und Haferflocken ausgestreutes Gärkörbchen legen. 50 Minuten gehen lassen." },
                    { titel: "Backen", inhalt: "Bei 230°C einschießen, 15 Minuten, dann auf 200°C bis fertig." }
                ]
            }
        ],
        tipps: ["Das Brühstück (eingeweichte Haferflocken) ist das Geheimnis der saftigen Krume!", "Kann auch mit Dinkelflocken gemacht werden."]
    },
    {
        id: 343,
        titel: "Bauernbrot",
        kategorie: "Brot",
        beschreibung: "Rustikales Schweizer Bauernbrot aus 88% Weizen- und 12% Roggenmehl – dunkle Kruste, saftige Krume",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 120, einheit: "g" },
            { name: "Roggenvollkornmehl (Vorteig)", menge: 30, einheit: "g" },
            { name: "Wasser (Vorteig)", menge: 100, einheit: "g" },
            { name: "Frischhefe (Vorteig)", menge: 2, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 2, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 290, einheit: "g" },
            { name: "Roggenmehl (Endteig)", menge: 60, einheit: "g" },
            { name: "Wasser (Endteig)", menge: 200, einheit: "g" },
            { name: "Frischhefe (Endteig)", menge: 3, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 10, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "1 Laib",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Weizen- und Roggenmehl mischen, mit Wasser, Hefe und Salz kneten. Bei 16°C über Nacht stehen lassen." },
                    { titel: "Endteig", inhalt: "Hefe in etwas Wasser auflösen. Wasser zum Vorteig. Alle Zutaten außer Salz 4 Minuten auf Stufe 1,5 kneten. Salz zugeben, 6 Minuten auf Stufe 2." },
                    { titel: "Gären und formen", inhalt: "Zugedeckt gehen lassen, 1x falten. Laib formen." },
                    { titel: "Backen", inhalt: "Im Gärkörbchen 50 Minuten gehen lassen. Bei 230°C einschießen, 15 Minuten, dann auf 200°C." }
                ]
            }
        ],
        tipps: ["Bauernbrot wird besonders aromatisch wenn der Vorteig bei etwas kühlerer Temperatur (16°C) über Nacht fermentiert.", "Roggenmischmehl selbst mischen: 88% Weizen + 12% Roggen."]
    },
    {
        id: 344,
        titel: "Petit Pains au Lait (Milchbrötchen)",
        kategorie: "Brot",
        beschreibung: "Luftig-weiche Schweizer Milchbrötchen – perfekt zum Frühstück, auch mit Rosinen oder Schokolade",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl Type 550 (Vorteig)", menge: 75, einheit: "g" },
            { name: "Milch (Vorteig)", menge: 50, einheit: "g" },
            { name: "Frische Backhefe (Vorteig)", menge: 1.3, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 1.3, einheit: "g" },
            { name: "Weizenmehl Type 550 (Endteig)", menge: 175, einheit: "g" },
            { name: "Milch (Endteig)", menge: 90, einheit: "g" },
            { name: "Butter", menge: 25, einheit: "g" },
            { name: "Zucker", menge: 15, einheit: "g" },
            { name: "Ei", menge: 1, einheit: "Stk" },
            { name: "Frische Backhefe (Endteig)", menge: 2, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 5, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "8 Brötchen",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen und kneten. Über Nacht bei ca. 16°C gehen lassen." },
                    { titel: "Endteig", inhalt: "Alle Zutaten außer Salz in die Küchenmaschine, 4 Minuten Stufe 1,5. Salz zugeben, 7 Minuten auf Stufe 2 fertigkneten. 60-70 Minuten gehen lassen, 1x falten." },
                    { titel: "Brötchen formen", inhalt: "Teig in 8 gleichgroße Stücke teilen. Zu runden oder länglichen Brötchen formen. Zugedeckt 45-60 Minuten gehen lassen." },
                    { titel: "Backen", inhalt: "Ofen und Backblech auf 210°C vorheizen. Brötchen mit Ei bestreichen und mit Schere einschneiden. 12-15 Minuten backen bis goldbraun." }
                ]
            }
        ],
        tipps: ["Für Kinder: Rosinen, Schokoladenstückchen oder Marzipan einkneten.", "Mit Schere kreuzförmig einschneiden für das typische Aussehen.", "Frisch am besten!"]
    },
    {
        id: 345,
        titel: "Grittifäts (Grittibänze)",
        kategorie: "Brot",
        beschreibung: "Schweizer Grittibänze (Samichlaus-Figuren) aus Hefeteig – für den 6. Dezember traditionell gebacken",
        quelle: "1basisrezeptkochbuch.pdf (Brotback-Projekt)",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl (Vorteig)", menge: 150, einheit: "g" },
            { name: "Milch (Vorteig)", menge: 50, einheit: "g" },
            { name: "Ei (Vorteig)", menge: 1, einheit: "Stk" },
            { name: "Backhefe (Vorteig)", menge: 2, einheit: "g" },
            { name: "Speisesalz (Vorteig)", menge: 2, einheit: "g" },
            { name: "Zucker (Vorteig)", menge: 30, einheit: "g" },
            { name: "Weizenmehl (Endteig)", menge: 300, einheit: "g" },
            { name: "Milch (Endteig)", menge: 150, einheit: "g" },
            { name: "Butter", menge: 50, einheit: "g" },
            { name: "Speisesalz (Endteig)", menge: 5, einheit: "g" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "4 Grittibänze",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Vorteig", inhalt: "Alle Vorteigzutaten mischen, gut kneten. Über Nacht bei ca. 16°C gehen lassen." },
                    { titel: "Endteig", inhalt: "Alle Zutaten außer Salz 4 Minuten Stufe 1,5 kneten. Salz zugeben, 7 Minuten Stufe 2 fertigkneten. 60-90 Minuten gehen lassen bis Volumen verdoppelt." },
                    { titel: "Figuren formen", inhalt: "Teig in 4 Teile teilen. Jeweils Figur (Körper, Arme, Beine, Kopf) formen. Mit Rosinen, Schokolade oder Mandeln dekorieren (Augen, Knöpfe)." },
                    { titel: "Backen", inhalt: "Mit Eigelb bestreichen. Bei 180°C 20-25 Minuten backen bis goldbraun." }
                ]
            }
        ],
        tipps: ["Grittibänze werden zum Samichlaus-Tag (6. Dezember) gebacken!", "Beim Formen nicht zu detailliert sein – durch das Aufgehen werden die Figuren 'fett' (daher Grittifäts)."]
    },
    {
        id: 330,
        titel: "Bierbrot",
        kategorie: "Brot",
        beschreibung: "Herzhaftes Bierbrot mit Weizen- und Roggenmehl, Kartoffelflocken und Bier – rustikal und kräftig",
        quelle: "Weitere Rezepte / 33_Bierbrot.pdf",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl Type 1050", menge: 700, einheit: "g" },
            { name: "Roggenmehl Type 1150", menge: 300, einheit: "g" },
            { name: "Hefe", menge: 20, einheit: "g" },
            { name: "Salz", menge: 20, einheit: "g" },
            { name: "Kartoffelflocken", menge: 150, einheit: "g" },
            { name: "Natursauerteig (getrocknet)", menge: 20, einheit: "g" },
            { name: "Bier", menge: 500, einheit: "ml" },
            { name: "Wasser", menge: 550, einheit: "ml" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "3 Brote à ca. 750g",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Teig kneten", inhalt: "Alle Zutaten in der Knetmaschine ca. 14 Minuten zu einem homogenen Teig kneten." },
                    { titel: "Gehen lassen", inhalt: "Teig mit Gärfolie abgedeckt 2 Stunden gehen lassen." },
                    { titel: "Formen", inhalt: "In 3 gleichgroße Stücke teilen, zu länglichen Broten formen. Mit bemehlten Händen zu länglichen Laiben ausformen, Enden spitz auslaufen lassen." },
                    { titel: "Ruhen und backen", inhalt: "Brote nochmals 10 Minuten ruhen lassen, umgedreht einschießen. Ca. 40 Minuten backen bis knusprig. Zum Auskühlen herausnehmen." }
                ]
            }
        ],
        tipps: ["Herzhaft und rustikal – passt perfekt zu selbstgemachter Wurst und Käse!", "Im Holzbackofen bei 270°C einschießen."]
    },
    {
        id: 331,
        titel: "Original Französisches Baguette",
        kategorie: "Brot",
        beschreibung: "Knuspriges Baguette nach französischem Rezept mit Weizensauerteig – für Backofen oder Holzbackofen",
        quelle: "Weitere Rezepte / 53_Baguette T65.pdf",
        basisMenge: { gesamt: 0 },
        fleischsorten: [],
        zutaten: [
            { name: "Weizenmehl T65 (oder Type 550)", menge: 1000, einheit: "g" },
            { name: "Weizensauerteig", menge: null, einheit: "nach Rezept" },
            { name: "Wasser", menge: null, einheit: "nach Rezept" },
            { name: "Salz", menge: 19, einheit: "g" },
            { name: "Hefe", menge: null, einheit: "wenig" }
        ],
        gewuerze: [],
        darm: null,
        ausgabe: "3 Baguette à ca. 350g",
        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    { titel: "Teig herstellen", inhalt: "Alle Zutaten zu einem Teig verkneten, ruhen lassen." },
                    { titel: "Portionieren", inhalt: "In 3 Portionen à 420g abwiegen. Teiglinge auf ca. 15cm Länge vorrollen." },
                    { titel: "Formen", inhalt: "Nach kurzer Entspannungszeit (1 Minute) zum Baguette ausrollen (ca. 40cm Länge). Enden leicht spitz ausformen. In Hartweizengrieß wälzen." },
                    { titel: "Backen", inhalt: "Holzbackofen: 270°C, 25-30 Minuten. Elektro-Steinbackofen: Oberhitze 280°C / Unterhitze 180°C, 25-30 Minuten. Haushaltsbackofen: 230°C einschießen, nach 5 Minuten auf 210°C reduzieren, 25-30 Minuten." }
                ]
            }
        ],
        tipps: ["Das T65-Mehl (französisches Mehl) macht den Unterschied!", "Dampf beim Einschießen für knusprige Kruste."]
    }
];
