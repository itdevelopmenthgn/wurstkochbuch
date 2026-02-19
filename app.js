// Aktuelle Kategorie
let aktuelleKategorie = 'Alle';
let aktuelleSuche = '';

// Kategorien aus den Rezeptdaten ermitteln (Reihenfolge festlegen)
const kategorienReihenfolge = [
    'Bratwurst',
    'Brühwurst',
    'Fleischkäse',
    'Rohwurst',
    'Leberwurst',
    'Blutwurst',
    'Schinken',
    'Aspik & Sülze',
    'Wurst im Glas',
    'Salami',
    'Wildwurst',
    'Schmalz & Spezialitäten',
    'Sonstiges',
    'Brot'
];

function getVorhandeneKategorien() {
    const kategorien = [...new Set(rezepte.map(r => r.kategorie))];
    // Sortierung nach Reihenfolge, unbekannte Kategorien ans Ende
    return kategorien.sort((a, b) => {
        const ai = kategorienReihenfolge.indexOf(a);
        const bi = kategorienReihenfolge.indexOf(b);
        if (ai === -1 && bi === -1) return a.localeCompare(b);
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
    });
}

// Filter-Navigation dynamisch aufbauen
function bauNavigationAuf() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Vorhandene Buttons entfernen (außer "Alle")
    nav.querySelectorAll('button:not(#showAll)').forEach(btn => btn.remove());

    const kategorien = getVorhandeneKategorien();
    kategorien.forEach(kat => {
        const btn = document.createElement('button');
        btn.id = 'filter_' + kat.replace(/\s|&/g, '_');
        btn.textContent = kat;
        btn.addEventListener('click', () => {
            aktuelleKategorie = kat;
            zeigeRezepte(kat);
            updateActiveButton(btn.id);
        });
        nav.appendChild(btn);
    });
}

function sucheRezepte(query) {
    const q = query.toLowerCase().trim();
    if (!q) return null; // null = kein Filter
    return rezepte.filter(r => {
        if (r.titel.toLowerCase().includes(q)) return true;
        if (r.beschreibung && r.beschreibung.toLowerCase().includes(q)) return true;
        if (r.kategorie.toLowerCase().includes(q)) return true;
        if (r.fleischsorten && r.fleischsorten.some(f => f.name.toLowerCase().includes(q))) return true;
        if (r.zutaten && r.zutaten.some(z => z.name.toLowerCase().includes(q))) return true;
        if (r.gewuerze && r.gewuerze.some(g => g.name.toLowerCase().includes(q))) return true;
        return false;
    });
}

// Rezepte anzeigen
function zeigeRezepte(kategorie = 'Alle') {
    const container = document.getElementById('rezeptListe');
    container.innerHTML = '';
    container.className = 'rezept-grid';

    let gefilterteRezepte;
    if (aktuelleSuche) {
        gefilterteRezepte = sucheRezepte(aktuelleSuche);
        if (kategorie !== 'Alle') {
            gefilterteRezepte = gefilterteRezepte.filter(r => r.kategorie === kategorie);
        }
    } else {
        gefilterteRezepte = kategorie === 'Alle'
            ? rezepte
            : rezepte.filter(r => r.kategorie === kategorie);
    }

    if (gefilterteRezepte.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#6D4C41;padding:2rem;font-size:1.2rem;">Keine Rezepte in dieser Kategorie vorhanden.</p>';
        return;
    }

    gefilterteRezepte.forEach(rezept => {
        const karte = document.createElement('div');
        karte.className = 'rezept-karte';
        karte.onclick = () => {
            window.location.href = `rezept.html?id=${rezept.id}`;
        };

        const gesamtFleisch = rezept.fleischsorten.reduce((sum, f) => sum + (f.menge || 0), 0);
        const fleischText = gesamtFleisch === 0
            ? ''
            : gesamtFleisch >= 1000
                ? `${(gesamtFleisch / 1000).toFixed(1).replace('.', ',')} kg Fleisch`
                : `${gesamtFleisch} g Fleisch`;

        const ausgabeText = rezept.ausgabe ? `📊 ${rezept.ausgabe}` : '';

        karte.innerHTML = `
            <h2>${rezept.titel}</h2>
            <p>${rezept.beschreibung}</p>
            <span class="kategorie">${rezept.kategorie}</span>
            <div class="meta">
                ${fleischText ? `<span>🥩 ${fleischText}</span>` : ''}
                ${ausgabeText ? `<span>${ausgabeText}</span>` : ''}
            </div>
        `;

        container.appendChild(karte);
    });
}

// Aktiven Button markieren
function updateActiveButton(activeId) {
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(activeId)?.classList.add('active');
}

// "Alle Rezepte" Button
document.getElementById('showAll')?.addEventListener('click', () => {
    aktuelleKategorie = 'Alle';
    zeigeRezepte('Alle');
    updateActiveButton('showAll');
});

// Suchfeld
document.getElementById('suchfeld')?.addEventListener('input', (e) => {
    aktuelleSuche = e.target.value;
    if (aktuelleSuche) {
        // Kategorie-Filter aufheben bei Suche
        aktuelleKategorie = 'Alle';
        updateActiveButton('showAll');
    }
    zeigeRezepte(aktuelleKategorie);
});

// Start
bauNavigationAuf();
zeigeRezepte('Alle');
