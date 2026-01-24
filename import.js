// Rezept-Daten
let rezeptData = {
    titel: '',
    kategorie: '',
    beschreibung: '',
    fleischsorten: [],
    zutaten: [],
    gewuerze: [],
    schritte: []
};

// Bekannte Fleischsorten
const fleischsorten = [
    'nacken', 'bauch', 'krustenbraten', 'schulter', 'schwein', 'rind',
    'kalb', 'speck', 'schwarte', 'leber', 'zunge', 'herz', 'kopffleisch',
    'backe', 'wade', 'haxe', 'schinken'
];

// Bekannte Gewürze
const gewuerze = [
    'salz', 'pfeffer', 'pökelsalz', 'nitritpökelsalz', 'paprika', 'knoblauch',
    'zwiebel', 'majoran', 'thymian', 'kümmel', 'koriander', 'muskat', 'piment',
    'ingwer', 'chili', 'curry', 'senf', 'zucker', 'dextrose', 'ascorbinsäure'
];

// Text analysieren
function analysiereText() {
    const text = document.getElementById('rezeptText').value;

    if (!text.trim()) {
        showStatus('analysisStatus', 'Bitte Text eingeben!', 'error');
        return;
    }

    // Reset
    rezeptData = {
        titel: '',
        kategorie: '',
        beschreibung: '',
        fleischsorten: [],
        zutaten: [],
        gewuerze: [],
        schritte: []
    };

    // Titel erkennen (erste Zeile oder größte Schrift)
    const lines = text.split('\n').filter(l => l.trim());
    if (lines.length > 0) {
        rezeptData.titel = lines[0].trim();
        document.getElementById('titel').value = rezeptData.titel;
    }

    // Fleischsorten & Mengen extrahieren
    extrahiereFleisch(text);

    // Zutaten extrahieren
    extrahiereZutaten(text);

    // Kategorie erraten
    errateKategorie(text);

    // UI aktualisieren
    updateFleischList();
    updateZutatList();

    showStatus('analysisStatus', `✅ ${rezeptData.fleischsorten.length} Fleischsorten, ${rezeptData.zutaten.length} Zutaten erkannt!`, 'success');
}

// Fleisch extrahieren
function extrahiereFleisch(text) {
    const lines = text.toLowerCase().split('\n');

    lines.forEach(line => {
        // Suche nach Fleischsorten mit Mengenangaben
        fleischsorten.forEach(fleisch => {
            if (line.includes(fleisch)) {
                // Suche nach Mengenangabe vor oder nach dem Fleisch
                const mengeRegex = /([\d.,]+)\s*(kg|g)\s*(\w+)/gi;
                let match;
                while ((match = mengeRegex.exec(line)) !== null) {
                    if (match[0].toLowerCase().includes(fleisch)) {
                        let menge = parseFloat(match[1].replace(',', '.'));
                        const einheit = match[2].toLowerCase();

                        // Konvertiere alles zu Gramm
                        if (einheit === 'kg') {
                            menge = menge * 1000;
                        }

                        // Prüfe ob schon vorhanden
                        const exists = rezeptData.fleischsorten.find(f =>
                            f.name.toLowerCase().includes(fleisch)
                        );

                        if (!exists) {
                            rezeptData.fleischsorten.push({
                                name: capitalize(fleisch),
                                menge: menge,
                                einheit: 'g'
                            });
                        }
                    }
                }
            }
        });
    });
}

// Zutaten extrahieren (alles andere mit Mengenangaben)
function extrahiereZutaten(text) {
    const lines = text.toLowerCase().split('\n');

    lines.forEach(line => {
        // Suche nach Mengenangaben
        const mengeRegex = /([\d.,]+)\s*(kg|g|ml|l|tl|el|prise|stück?|st\.?|würfel)/gi;
        let match;

        while ((match = mengeRegex.exec(line)) !== null) {
            // Hole den Text nach der Mengenangabe
            const restText = line.substring(match.index + match[0].length).trim();
            const zutatName = restText.split(/[,.\n]/)[0].trim();

            if (zutatName.length > 2 && zutatName.length < 50) {
                let menge = parseFloat(match[1].replace(',', '.'));
                const einheit = match[2].toLowerCase();

                // Prüfe ob es Gewürz ist
                const istGewuerz = gewuerze.some(g => zutatName.includes(g));

                // Prüfe ob es Fleisch ist (schon in fleischsorten)
                const istFleisch = fleischsorten.some(f => zutatName.includes(f));

                if (!istFleisch && !istGewuerz) {
                    // Konvertiere zu Gramm wenn möglich
                    let mengeInG = menge;
                    if (einheit === 'kg') {
                        mengeInG = menge * 1000;
                    } else if (einheit === 'l') {
                        mengeInG = menge * 1000; // ml
                    }

                    // Prüfe ob schon vorhanden
                    const exists = rezeptData.zutaten.find(z =>
                        z.name.toLowerCase() === zutatName.toLowerCase()
                    );

                    if (!exists && zutatName.length > 0) {
                        rezeptData.zutaten.push({
                            name: capitalize(zutatName),
                            menge: mengeInG > 100 ? Math.round(mengeInG) : menge,
                            einheit: mengeInG > 100 ? 'g' : einheit
                        });
                    }
                }
            }
        }
    });
}

// Kategorie erraten
function errateKategorie(text) {
    const textLower = text.toLowerCase();

    if (textLower.includes('bratwurst') || textLower.includes('grillwurst')) {
        rezeptData.kategorie = 'Bratwurst';
    } else if (textLower.includes('brühwurst') || textLower.includes('bockwurst') || textLower.includes('wiener')) {
        rezeptData.kategorie = 'Brühwurst';
    } else if (textLower.includes('salami') || textLower.includes('mettwurst') || textLower.includes('rohwurst')) {
        rezeptData.kategorie = 'Rohwurst';
    } else if (textLower.includes('fleischkäse') || textLower.includes('leberkäse')) {
        rezeptData.kategorie = 'Fleischkäse';
    } else if (textLower.includes('aspik') || textLower.includes('sülze')) {
        rezeptData.kategorie = 'Aspik';
    } else if (textLower.includes('schinken')) {
        rezeptData.kategorie = 'Schinken';
    } else if (textLower.includes('leberwurst') || textLower.includes('blutwurst')) {
        rezeptData.kategorie = 'Kochwurst';
    }

    if (rezeptData.kategorie) {
        document.getElementById('kategorie').value = rezeptData.kategorie;
    }
}

// Fleisch-Liste anzeigen
function updateFleischList() {
    const list = document.getElementById('fleischList');
    list.innerHTML = '';

    rezeptData.fleischsorten.forEach((fleisch, index) => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `
            <span><strong>${fleisch.name}:</strong> ${fleisch.menge} ${fleisch.einheit}</span>
            <button onclick="removeFleisch(${index})">🗑️ Entfernen</button>
        `;
        list.appendChild(item);
    });

    if (rezeptData.fleischsorten.length === 0) {
        list.innerHTML = '<p style="color: #999; font-style: italic;">Noch keine Fleischsorten erkannt...</p>';
    }
}

// Zutaten-Liste anzeigen
function updateZutatList() {
    const list = document.getElementById('zutatList');
    list.innerHTML = '';

    rezeptData.zutaten.forEach((zutat, index) => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `
            <span><strong>${zutat.name}:</strong> ${zutat.menge} ${zutat.einheit}</span>
            <button onclick="removeZutat(${index})">🗑️ Entfernen</button>
        `;
        list.appendChild(item);
    });

    if (rezeptData.zutaten.length === 0) {
        list.innerHTML = '<p style="color: #999; font-style: italic;">Noch keine Zutaten erkannt...</p>';
    }
}

// Fleisch hinzufügen
function addFleisch() {
    const name = document.getElementById('newFleisch').value.trim();
    const menge = parseFloat(document.getElementById('newFleischMenge').value);

    if (name && menge > 0) {
        rezeptData.fleischsorten.push({
            name: capitalize(name),
            menge: menge,
            einheit: 'g'
        });

        document.getElementById('newFleisch').value = '';
        document.getElementById('newFleischMenge').value = '';

        updateFleischList();
    }
}

// Zutat hinzufügen
function addZutat() {
    const name = document.getElementById('newZutat').value.trim();
    const menge = parseFloat(document.getElementById('newZutatMenge').value);

    if (name && menge > 0) {
        rezeptData.zutaten.push({
            name: capitalize(name),
            menge: menge,
            einheit: 'g'
        });

        document.getElementById('newZutat').value = '';
        document.getElementById('newZutatMenge').value = '';

        updateZutatList();
    }
}

// Fleisch entfernen
function removeFleisch(index) {
    rezeptData.fleischsorten.splice(index, 1);
    updateFleischList();
}

// Zutat entfernen
function removeZutat(index) {
    rezeptData.zutaten.splice(index, 1);
    updateZutatList();
}

// JSON generieren
function generiereJSON() {
    // Formular-Daten holen
    rezeptData.titel = document.getElementById('titel').value.trim();
    rezeptData.kategorie = document.getElementById('kategorie').value;
    rezeptData.beschreibung = document.getElementById('beschreibung').value.trim();

    if (!rezeptData.titel || !rezeptData.kategorie) {
        showStatus('generateStatus', '❌ Titel und Kategorie sind Pflichtfelder!', 'error');
        return;
    }

    if (rezeptData.fleischsorten.length === 0) {
        showStatus('generateStatus', '❌ Mindestens eine Fleischsorte erforderlich!', 'error');
        return;
    }

    // Berechne nächste ID
    const nextId = Math.max(0, ...window.rezepte?.map(r => r.id) || [0]) + 1;

    // Berechne Basis-Fleischmenge
    const gesamtFleisch = rezeptData.fleischsorten.reduce((sum, f) => sum + f.menge, 0);

    // JSON-Objekt erstellen
    const jsonObj = {
        id: nextId,
        titel: rezeptData.titel,
        kategorie: rezeptData.kategorie,
        beschreibung: rezeptData.beschreibung || `${rezeptData.titel} Rezept`,

        basisMenge: {
            gesamt: gesamtFleisch
        },

        fleischsorten: rezeptData.fleischsorten,

        ...(rezeptData.zutaten.length > 0 && { zutaten: rezeptData.zutaten }),

        gewuerze: [
            { name: "Salz", menge: 20, einheit: "g", proKg: true },
            { name: "Pfeffer", menge: 4, einheit: "g", proKg: true }
        ],

        darm: {
            typ: "Naturdarm",
            kaliber: "",
            menge: "passend zur Fleischmenge"
        },

        schritte: [
            {
                gruppe: "Zubereitung",
                schritte: [
                    {
                        titel: "Fleisch vorbereiten",
                        inhalt: "Fleisch in Würfel schneiden und kalt stellen."
                    },
                    {
                        titel: "Würzen",
                        inhalt: "Alle Gewürze hinzufügen und gut vermengen."
                    }
                ]
            }
        ],

        tipps: [
            "Fleisch sollte beim Verarbeiten kalt sein"
        ]
    };

    // JSON formatieren
    const jsonString = JSON.stringify(jsonObj, null, 4);

    // In Preview anzeigen
    document.getElementById('jsonPreview').textContent = `,\n${jsonString}`;

    showStatus('generateStatus', '✅ JSON erfolgreich generiert! Kopiere den Code und füge ihn in data.js ein.', 'success');
}

// JSON kopieren
function copyJSON() {
    const preview = document.getElementById('jsonPreview');
    const text = preview.textContent;

    if (text.includes('"id"')) {
        navigator.clipboard.writeText(text).then(() => {
            showStatus('generateStatus', '📋 JSON in Zwischenablage kopiert!', 'success');
        });
    } else {
        showStatus('generateStatus', '❌ Bitte erst JSON generieren!', 'error');
    }
}

// Text zurücksetzen
function clearText() {
    document.getElementById('rezeptText').value = '';
    document.getElementById('titel').value = '';
    document.getElementById('kategorie').value = '';
    document.getElementById('beschreibung').value = '';
    document.getElementById('jsonPreview').textContent = '// Hier erscheint der generierte JSON-Code...';
    document.getElementById('analysisStatus').innerHTML = '';
    document.getElementById('generateStatus').innerHTML = '';

    rezeptData = {
        titel: '',
        kategorie: '',
        beschreibung: '',
        fleischsorten: [],
        zutaten: [],
        gewuerze: [],
        schritte: []
    };

    updateFleischList();
    updateZutatList();
}

// Status anzeigen
function showStatus(elementId, message, type) {
    const element = document.getElementById(elementId);
    element.innerHTML = `<div class="status ${type}">${message}</div>`;
}

// Capitalize
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialisierung
updateFleischList();
updateZutatList();
