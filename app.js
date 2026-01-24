// Aktuelle Kategorie
let aktuelleKategorie = 'Alle';

// Rezepte anzeigen
function zeigeRezepte(kategorie = 'Alle') {
    const container = document.getElementById('rezeptListe');
    container.innerHTML = '';
    container.className = 'rezept-grid';

    // Filtern nach Kategorie
    const gefilterteRezepte = kategorie === 'Alle'
        ? rezepte
        : rezepte.filter(r => r.kategorie === kategorie);

    if (gefilterteRezepte.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6D4C41; padding: 2rem; font-size: 1.2rem;">Keine Rezepte in dieser Kategorie vorhanden.</p>';
        return;
    }

    gefilterteRezepte.forEach(rezept => {
        const karte = document.createElement('div');
        karte.className = 'rezept-karte';
        karte.onclick = () => {
            window.location.href = `rezept.html?id=${rezept.id}`;
        };

        // Gesamt-Fleischmenge berechnen (nur echtes Fleisch)
        const gesamtFleisch = rezept.fleischsorten.reduce((sum, f) => sum + f.menge, 0);
        const fleischText = gesamtFleisch >= 1000
            ? `${(gesamtFleisch / 1000).toFixed(1).replace('.', ',')} kg Fleisch`
            : `${gesamtFleisch} g Fleisch`;

        // Ausgabe-Info wenn vorhanden
        const ausgabeText = rezept.ausgabe ? `📊 ${rezept.ausgabe}` : '';

        karte.innerHTML = `
            <h2>${rezept.titel}</h2>
            <p>${rezept.beschreibung}</p>
            <span class="kategorie">${rezept.kategorie}</span>
            <div class="meta">
                <span>🥩 ${fleischText}</span>
                ${ausgabeText ? `<span>${ausgabeText}</span>` : ''}
            </div>
        `;

        container.appendChild(karte);
    });
}

// Filter-Buttons
document.getElementById('showAll')?.addEventListener('click', () => {
    aktuelleKategorie = 'Alle';
    zeigeRezepte('Alle');
    updateActiveButton('showAll');
});

document.getElementById('filterBratwurst')?.addEventListener('click', () => {
    aktuelleKategorie = 'Bratwurst';
    zeigeRezepte('Bratwurst');
    updateActiveButton('filterBratwurst');
});

document.getElementById('filterBruehwurst')?.addEventListener('click', () => {
    aktuelleKategorie = 'Brühwurst';
    zeigeRezepte('Brühwurst');
    updateActiveButton('filterBruehwurst');
});

document.getElementById('filterFleischkaese')?.addEventListener('click', () => {
    aktuelleKategorie = 'Fleischkäse';
    zeigeRezepte('Fleischkäse');
    updateActiveButton('filterFleischkaese');
});

document.getElementById('filterRohwurst')?.addEventListener('click', () => {
    aktuelleKategorie = 'Rohwurst';
    zeigeRezepte('Rohwurst');
    updateActiveButton('filterRohwurst');
});

document.getElementById('filterAspik')?.addEventListener('click', () => {
    aktuelleKategorie = 'Aspik';
    zeigeRezepte('Aspik');
    updateActiveButton('filterAspik');
});

// Aktiven Button markieren
function updateActiveButton(activeId) {
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(activeId)?.classList.add('active');
}

// Initial alle Rezepte anzeigen
zeigeRezepte('Alle');
