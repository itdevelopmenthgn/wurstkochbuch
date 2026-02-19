const rezept = window.rezepteGeladen ? window.rezepteGeladen[0] : null;

if (rezept) {
    zeigeRezept(rezept);
} 


// Rezept-ID aus URL-Parameter holen (auch für LocalStorage-Keys)
const urlParams = new URLSearchParams(window.location.search);
const rezeptId = parseInt(urlParams.get('id')) || 1;

// Fortschritt aus LocalStorage laden
function ladeSchrittStatus(rezeptId) {
    const gespeichert = localStorage.getItem(`wurst_rezept_v2_${rezeptId}_schritte`);
    return gespeichert ? JSON.parse(gespeichert) : {};
}

// Fortschritt in LocalStorage speichern
function speichereSchrittStatus(rezeptId, schrittStatus) {
    localStorage.setItem(`wurst_rezept_v2_${rezeptId}_schritte`, JSON.stringify(schrittStatus));
}

// Fleischmengen aus LocalStorage laden
function ladeFleischmengen(rezeptId) {
    const gespeichert = localStorage.getItem(`wurst_rezept_v2_${rezeptId}_fleischmengen`);
    return gespeichert ? JSON.parse(gespeichert) : null;
}

// Fleischmengen in LocalStorage speichern
function speichereFleischmengen(rezeptId, mengen) {
    localStorage.setItem(`wurst_rezept_v2_${rezeptId}_fleischmengen`, JSON.stringify(mengen));
}

// Status für Schritte
let schrittStatus = ladeSchrittStatus(rezeptId);

// Aktuelle Fleischmengen - Objekt mit {fleischsorte: menge in gramm}
let aktuelleFleischmengen = {};

// Aktuelle Zutatenmengen - Objekt mit {zutat: menge in gramm}
let aktuelleZutatenmengen = {};

// Rezept finden und anzeigen
// Rezept aus den von rezept.html async geladenen Daten holen
const rezept = window.rezepteGeladen ? window.rezepteGeladen[0] : null;

if (!rezept) {
    document.getElementById('rezeptDetail').innerHTML = '<p>Rezept nicht gefunden</p>';
} else {
    // Fleischmengen initialisieren
    const gespeicherteMengen = ladeFleischmengen(rezeptId);

    // Immer mit Basis-Mengen starten
    rezept.fleischsorten.forEach(f => {
        aktuelleFleischmengen[f.name] = f.menge;
    });
    if (rezept.zutaten) {
        rezept.zutaten.forEach(z => {
            aktuelleZutatenmengen[z.name] = z.menge;
        });
    }

    // Dann gespeicherte Werte überschreiben falls vorhanden
    if (gespeicherteMengen) {
        if (gespeicherteMengen.fleisch) {
            // Prüfe ob alle Fleischsorten vorhanden sind
            let valideSpeicherung = true;
            rezept.fleischsorten.forEach(f => {
                if (gespeicherteMengen.fleisch[f.name] === undefined) {
                    valideSpeicherung = false;
                }
            });

            if (valideSpeicherung) {
                aktuelleFleischmengen = gespeicherteMengen.fleisch;
            }
        }

        if (gespeicherteMengen.zutaten && rezept.zutaten) {
            // Überschreibe nur vorhandene Zutaten
            rezept.zutaten.forEach(z => {
                if (gespeicherteMengen.zutaten[z.name] !== undefined) {
                    aktuelleZutatenmengen[z.name] = gespeicherteMengen.zutaten[z.name];
                }
            });
        }
    }

    zeigeRezept(rezept);
}

function zeigeRezept(rezept) {
    const container = document.getElementById('rezeptDetail');

    // Fortschritt berechnen
    const gesamtSchritte = rezept.schritte.reduce((sum, gruppe) => sum + gruppe.schritte.length, 0);
    const erledigteSchritte = Object.values(schrittStatus).filter(s => s.completed).length;
    const fortschrittProzent = gesamtSchritte > 0 ? Math.round((erledigteSchritte / gesamtSchritte) * 100) : 0;

    // Skalierungsfaktor berechnen (1.0 wenn kein Fleisch vorhanden)
    const originalGesamt = rezept.basisMenge.gesamt;
    const aktuellesGesamt = Object.values(aktuelleFleischmengen).reduce((sum, m) => sum + m, 0);
    const faktor = (originalGesamt > 0 && aktuellesGesamt > 0) ? aktuellesGesamt / originalGesamt : 1;

    let html = `
        <h1>${rezept.titel}</h1>

        <div class="rezept-meta">
            <div><strong>📂 Kategorie:</strong> ${rezept.kategorie}</div>
            ${rezept.ausgabe ? `<div><strong>📊 Ausgabe:</strong> <span id="ausgabe-anzeige">${skaliereAusgabe(rezept.ausgabe, faktor)}</span></div>` : ''}
            ${rezept.quelle ? `<div><strong>📁 Quelle:</strong> ${rezept.quelle}</div>` : ''}
        </div>

        <!-- Fleischmengen-Steuerung -->
        <div class="fleisch-steuerung-container">
            <h3>🥩 Fleischmengen anpassen</h3>
            ${erstelleFleischSteuerung(rezept)}
            ${rezept.zutaten && rezept.zutaten.length > 0 ? '<h3 style="margin-top: 1.5rem;">🧅 Zutaten anpassen</h3>' + erstelleZutatenSteuerung(rezept) : ''}
        </div>

        <div class="fortschritt-container">
            <div class="fortschritt-text">Fortschritt: ${erledigteSchritte} von ${gesamtSchritte} Schritten erledigt</div>
            <div class="fortschritt-bar">
                <div class="fortschritt-fill" style="width: ${fortschrittProzent}%">
                    ${fortschrittProzent}%
                </div>
            </div>
        </div>

        <p style="font-size: 1.1rem; font-style: italic; margin: 1rem 0;"><em>${rezept.beschreibung}</em></p>
    `;

    // Fleischsorten
    html += '<div class="zutaten-section"><h2>🥩 Fleischsorten</h2>';
    html += '<div class="zutaten-kategorie"><ul>';
    rezept.fleischsorten.forEach(fleisch => {
        const aktuelleMenge = aktuelleFleischmengen[fleisch.name] || fleisch.menge;
        html += `<li><strong>${fleisch.name}:</strong> ${formatMengeKg(aktuelleMenge)}</li>`;
    });
    html += '</ul></div></div>';

    // Weitere Zutaten (falls vorhanden)
    if (rezept.zutaten && rezept.zutaten.length > 0) {
        html += '<div class="zutaten-section"><h2>🧅 Weitere Zutaten</h2>';
        html += '<div class="zutaten-kategorie"><ul>';
        rezept.zutaten.forEach(zutat => {
            const aktuelleMenge = aktuelleZutatenmengen[zutat.name] !== undefined
                ? aktuelleZutatenmengen[zutat.name] : zutat.menge;
            html += `<li><strong>${zutat.name}:</strong> ${formatZutat(zutat, aktuelleMenge)}</li>`;
        });
        html += '</ul></div></div>';
    }

    // Gewürze
    if (rezept.gewuerze && rezept.gewuerze.length > 0) {
        html += '<div class="zutaten-section"><h2>🌶️ Gewürze & Zutaten</h2>';
        html += '<div class="zutaten-kategorie"><ul>';
        rezept.gewuerze.forEach(gewuerz => {
            const skaliert = skaliereGewuerz(gewuerz, faktor);
            html += `<li>${skaliert}</li>`;
        });
        html += '</ul></div></div>';
    }

    // Darm-Info
    if (rezept.darm && rezept.darm.typ) {
        html += '<div class="zutaten-section"><h2>🔗 Darm / Verpackung</h2>';
        html += '<div class="zutaten-kategorie"><ul>';
        html += `<li><strong>Typ:</strong> ${rezept.darm.typ}</li>`;
        if (rezept.darm.kaliber) {
            html += `<li><strong>Kaliber:</strong> ${rezept.darm.kaliber}</li>`;
        }
        html += `<li><strong>Menge:</strong> ${skaliereDarmMenge(rezept.darm.menge, faktor)}</li>`;
        html += '</ul></div></div>';
    }

    // Varianten (falls vorhanden)
    if (rezept.varianten && rezept.varianten.length > 0) {
        html += '<div class="tipps-section"><h2>🔄 Varianten</h2><ul>';
        rezept.varianten.forEach(variante => {
            html += `<li><strong>${variante.name}:</strong> ${variante.aenderungen}</li>`;
        });
        html += '</ul></div>';
    }

    // Zubereitungsschritte
    html += '<div class="schritte-section"><h2>👨‍🍳 Zubereitung</h2>';

    let schrittIndex = 0;
    rezept.schritte.forEach(gruppe => {
        html += `<div class="schritt-gruppe"><h3>${gruppe.gruppe}</h3>`;

        gruppe.schritte.forEach(schritt => {
            const schrittId = `schritt_${schrittIndex}`;
            const istErledigt = schrittStatus[schrittId]?.completed || false;
            const istEingeklappt = schrittStatus[schrittId]?.collapsed || false;

            // Mengenangaben in Schritt-Inhalt skalieren
            const skalierterInhalt = skaliereText(schritt.inhalt, rezept, faktor);

            html += `
                <div class="schritt ${istErledigt ? 'completed' : ''} ${istEingeklappt ? 'collapsed' : ''}" data-schritt-id="${schrittId}">
                    <div class="schritt-header">
                        <div class="checkbox ${istErledigt ? 'checked' : ''}" onclick="toggleSchritt('${schrittId}')"></div>
                        <div class="schritt-titel">${schritt.titel}</div>
                        <div class="toggle-icon" onclick="toggleEinklappen('${schrittId}')">▼</div>
                    </div>
                    <div class="schritt-inhalt">
                        ${skalierterInhalt}
                    </div>
                </div>
            `;
            schrittIndex++;
        });

        html += '</div>';
    });
    html += '</div>';

    // Tipps
    if (rezept.tipps && rezept.tipps.length > 0) {
        html += '<div class="tipps-section"><h2>💡 Tipps</h2><ul>';
        rezept.tipps.forEach(tipp => {
            html += `<li>${tipp}</li>`;
        });
        html += '</ul></div>';
    }

    container.innerHTML = html;
}

// Fleisch-Steuerung HTML erstellen
function erstelleFleischSteuerung(rezept) {
    let html = '';
    rezept.fleischsorten.forEach(fleisch => {
        const aktuell = aktuelleFleischmengen[fleisch.name] || fleisch.menge;
        html += `
            <div class="fleisch-input-gruppe">
                <label>${fleisch.name}:</label>
                <div class="fleisch-input">
                    <button onclick="aendereFleischmenge('${fleisch.name}', -100)">−</button>
                    <span class="fleisch-anzahl" id="fleisch_${fleisch.name}">${formatMengeKg(aktuell)}</span>
                    <button onclick="aendereFleischmenge('${fleisch.name}', 100)">+</button>
                </div>
            </div>
        `;
    });
    return html;
}

// Schrittgröße je nach Einheit bestimmen
function getZutatenSchritt(zutat) {
    const einheit = zutat.einheit || 'g';
    if (einheit === 'g') return 100;
    if (einheit === 'ml') return 50;
    if (einheit === 'cl') return 5;
    return 1;  // EL, TL, Stück, Dosen, Glas etc.
}

// Zutaten-Steuerung HTML erstellen
function erstelleZutatenSteuerung(rezept) {
    let html = '';
    if (rezept.zutaten) {
        rezept.zutaten.forEach((zutat, index) => {
            // Zutaten ohne Menge (z.B. "nach Bedarf") nicht steuerbar
            if (zutat.menge === null) return;

            const zutatKey = zutat.name;
            const zutatId = `zutat_${index}`;
            const aktuell = aktuelleZutatenmengen[zutatKey] !== undefined
                ? aktuelleZutatenmengen[zutatKey] : zutat.menge;
            const displayName = zutat.name.length > 30 ? zutat.name.substring(0, 30) + '...' : zutat.name;
            const escapedKey = zutatKey.replace(/'/g, "\\'");
            const schritt = getZutatenSchritt(zutat);
            html += `
                <div class="fleisch-input-gruppe">
                    <label title="${zutat.name}">${displayName}:</label>
                    <div class="fleisch-input">
                        <button onclick="aendereZutatenmenge('${escapedKey}', -${schritt})">−</button>
                        <span class="fleisch-anzahl" id="${zutatId}">${formatZutat(zutat, aktuell)}</span>
                        <button onclick="aendereZutatenmenge('${escapedKey}', ${schritt})">+</button>
                    </div>
                </div>
            `;
        });
    }
    return html;
}

// Fleischmenge ändern
function aendereFleischmenge(fleischsorte, delta) {
    const originalMenge = rezept.fleischsorten.find(f => f.name === fleischsorte).menge;
    const alteFleischMenge = Object.values(aktuelleFleischmengen).reduce((sum, m) => sum + m, 0);

    aktuelleFleischmengen[fleischsorte] = Math.max(0, aktuelleFleischmengen[fleischsorte] + delta);

    // Zutaten proportional anpassen
    const neueFleischMenge = Object.values(aktuelleFleischmengen).reduce((sum, m) => sum + m, 0);
    const faktor = alteFleischMenge > 0 ? neueFleischMenge / alteFleischMenge : 1;

    if (rezept.zutaten) {
        rezept.zutaten.forEach(zutat => {
            const aktMenge = aktuelleZutatenmengen[zutat.name] || zutat.menge;
            aktuelleZutatenmengen[zutat.name] = Math.round(aktMenge * faktor);
        });

        // Zutaten-Anzeige in Steuerung aktualisieren
        rezept.zutaten.forEach((zutat, index) => {
            const anzeigeId = `zutat_${index}`;
            const anzeige = document.getElementById(anzeigeId);
            if (anzeige) {
                anzeige.textContent = formatZutat(zutat, aktuelleZutatenmengen[zutat.name]);
            }
        });
    }

    speichereFleischmengen(rezeptId, {
        fleisch: aktuelleFleischmengen,
        zutaten: aktuelleZutatenmengen
    });

    // Anzeige aktualisieren
    const anzeige = document.getElementById(`fleisch_${fleischsorte}`);
    if (anzeige) {
        anzeige.textContent = formatMengeKg(aktuelleFleischmengen[fleischsorte]);
    }

    // Alle abhängigen Werte neu berechnen
    updateAlleWerte();
}

// Zutatenmenge ändern
function aendereZutatenmenge(zutatKey, delta) {
    // Finde die Zutat im Rezept
    const zutat = rezept.zutaten.find(z => z.name === zutatKey);
    if (!zutat) return;

    const zutatIndex = rezept.zutaten.indexOf(zutat);

    // Initialisiere falls noch nicht vorhanden
    if (!aktuelleZutatenmengen[zutatKey]) {
        aktuelleZutatenmengen[zutatKey] = zutat.menge;
    }

    aktuelleZutatenmengen[zutatKey] = Math.max(0, aktuelleZutatenmengen[zutatKey] + delta);

    speichereFleischmengen(rezeptId, {
        fleisch: aktuelleFleischmengen,
        zutaten: aktuelleZutatenmengen
    });

    // Anzeige in Steuerung aktualisieren
    const anzeigeId = `zutat_${zutatIndex}`;
    const anzeige = document.getElementById(anzeigeId);
    if (anzeige) {
        anzeige.textContent = formatZutat(zutat, aktuelleZutatenmengen[zutatKey]);
    }

    // Alle abhängigen Werte neu berechnen (ohne automatische Fleisch-Anpassung)
    updateAlleWerte();
}

// Alle Werte aktualisieren
function updateAlleWerte() {
    const originalGesamt = rezept.basisMenge.gesamt;
    const aktuellesGesamt = Object.values(aktuelleFleischmengen).reduce((sum, m) => sum + m, 0);
    const faktor = (originalGesamt > 0 && aktuellesGesamt > 0) ? aktuellesGesamt / originalGesamt : 1;

    // Fleischsorten-Anzeige aktualisieren
    const fleischContainer = document.querySelectorAll('.zutaten-section')[0];
    if (fleischContainer) {
        const liElements = fleischContainer.querySelectorAll('li');
        rezept.fleischsorten.forEach((fleisch, index) => {
            if (liElements[index]) {
                const aktuelleMenge = aktuelleFleischmengen[fleisch.name] || fleisch.menge;
                liElements[index].innerHTML = `<strong>${fleisch.name}:</strong> ${formatMengeKg(aktuelleMenge)}`;
            }
        });
    }

    // Zutaten-Anzeige aktualisieren
    if (rezept.zutaten && rezept.zutaten.length > 0) {
        const zutatenContainer = document.querySelectorAll('.zutaten-section')[1];
        if (zutatenContainer) {
            const liElements = zutatenContainer.querySelectorAll('li');
            rezept.zutaten.forEach((zutat, index) => {
                if (liElements[index]) {
                    const aktuelleMenge = aktuelleZutatenmengen[zutat.name] !== undefined
                        ? aktuelleZutatenmengen[zutat.name] : zutat.menge;
                    liElements[index].innerHTML = `<strong>${zutat.name}:</strong> ${formatZutat(zutat, aktuelleMenge)}`;
                }
            });
        }
    }

    // Index für Gewürze-Container berechnen (abhängig davon ob Zutaten vorhanden sind)
    const gewuerzeIndex = rezept.zutaten && rezept.zutaten.length > 0 ? 2 : 1;

    // Gewürze aktualisieren
    const gewuerzeContainer = document.querySelectorAll('.zutaten-section')[gewuerzeIndex];
    if (gewuerzeContainer && rezept.gewuerze) {
        const liElements = gewuerzeContainer.querySelectorAll('li');
        rezept.gewuerze.forEach((gewuerz, index) => {
            if (liElements[index]) {
                liElements[index].innerHTML = skaliereGewuerz(gewuerz, faktor);
            }
        });
    }

    // Darm-Info aktualisieren
    if (rezept.darm) {
        const darmIndex = gewuerzeIndex + 1;
        const darmContainer = document.querySelectorAll('.zutaten-section')[darmIndex];
        if (darmContainer) {
            const mengeLi = darmContainer.querySelector('li:last-child');
            if (mengeLi) {
                mengeLi.innerHTML = `<strong>Menge:</strong> ${skaliereDarmMenge(rezept.darm.menge, faktor)}`;
            }
        }
    }

    // Schritte aktualisieren
    updateSchritte(faktor);

    // Ausgabe aktualisieren
    if (rezept.ausgabe) {
        const ausgabeSpan = document.getElementById('ausgabe-anzeige');
        if (ausgabeSpan) {
            ausgabeSpan.textContent = skaliereAusgabe(rezept.ausgabe, faktor);
        }
    }
}

// Schritte aktualisieren
function updateSchritte(faktor) {
    const alleGruppen = document.querySelectorAll('.schritt-gruppe');

    rezept.schritte.forEach((gruppe, gruppenIndex) => {
        const gruppenElement = alleGruppen[gruppenIndex];
        if (!gruppenElement) return;

        const schrittElements = gruppenElement.querySelectorAll('.schritt');

        gruppe.schritte.forEach((schritt, schrittIndex) => {
            const schrittElement = schrittElements[schrittIndex];
            if (!schrittElement) return;

            const inhaltElement = schrittElement.querySelector('.schritt-inhalt');
            if (inhaltElement) {
                inhaltElement.innerHTML = skaliereText(schritt.inhalt, rezept, faktor);
            }
        });
    });
}

// Gewürz skalieren
function skaliereGewuerz(gewuerz, faktor) {
    if (gewuerz.proKg) {
        // Pro kg Angabe
        const aktuellesGesamt = Object.values(aktuelleFleischmengen).reduce((sum, m) => sum + m, 0);
        const kg = aktuellesGesamt / 1000;
        const neueMenge = gewuerz.menge * kg;

        if (typeof gewuerz.menge === 'number') {
            return `<strong>${gewuerz.name}:</strong> ${formatMenge(neueMenge)} ${gewuerz.einheit} (${formatMenge(gewuerz.menge)} ${gewuerz.einheit}/kg)`;
        } else {
            return `<strong>${gewuerz.name}:</strong> ${gewuerz.menge}`;
        }
    } else {
        // Normale Skalierung
        if (typeof gewuerz.menge === 'number') {
            const neueMenge = gewuerz.menge * faktor;
            return `<strong>${gewuerz.name}:</strong> ${formatMenge(neueMenge)} ${gewuerz.einheit}`;
        } else {
            return `<strong>${gewuerz.name}:</strong> ${gewuerz.menge} ${gewuerz.einheit}`;
        }
    }
}

// Text mit Mengenangaben skalieren
function skaliereText(text, rezept, faktor) {
    // Ersetze Fleischmengen
    rezept.fleischsorten.forEach(fleisch => {
        // Suche nach kg und g Angaben
        const regexKg = new RegExp(`(${fleisch.menge / 1000}(?:[.,]\\d+)?)\\s*kg\\s+${fleisch.name}`, 'gi');
        const regexG = new RegExp(`${fleisch.menge}\\s*g\\s+${fleisch.name}`, 'gi');

        const neueMenge = aktuelleFleischmengen[fleisch.name];
        const mengeText = formatMengeKg(neueMenge);

        text = text.replace(regexKg, `${mengeText} ${fleisch.name}`);
        text = text.replace(regexG, `${mengeText} ${fleisch.name}`);
    });

    // Ersetze Zutatenmengen
    if (rezept.zutaten) {
        rezept.zutaten.forEach(zutat => {
            const regexKg = new RegExp(`(${zutat.menge / 1000}(?:[.,]\\d+)?)\\s*kg`, 'gi');
            const regexG = new RegExp(`${zutat.menge}\\s*g`, 'gi');

            const neueMenge = aktuelleZutatenmengen[zutat.name.split('(')[0].trim()]; // Entferne Zusatz wie "(gekocht)"
            if (neueMenge) {
                const mengeText = formatMengeKg(neueMenge);
                // Nur ersetzen wenn es die Zutat betrifft
                const zutatName = zutat.name.split('(')[0].trim();
                const regexMitName = new RegExp(`(\\d+(?:[.,]\\d+)?\\s*(?:kg|g))\\s+${zutatName}`, 'gi');
                text = text.replace(regexMitName, `${mengeText} ${zutatName}`);
            }
        });
    }

    // Ersetze andere Zahlen mit Einheiten (nur Zeit-Angaben, nicht Gewichte)
    const zahlenRegex = /(\d+(?:[.,]\d+)?)\s*(Stunden?|Minuten?|min)\b/gi;
    text = text.replace(zahlenRegex, (match, zahl, einheit) => {
        const zahlWert = parseFloat(zahl.replace(',', '.'));
        const neueZahl = zahlWert; // Zeit wird NICHT skaliert
        return `${neueZahl} ${einheit}`;
    });

    return text;
}

// Darm-Menge skalieren
function skaliereDarmMenge(menge, faktor) {
    if (typeof menge === 'string' && menge.includes('ca.')) {
        // Versuche Zahl zu extrahieren und skalieren
        const match = menge.match(/(\d+(?:[.,]\d+)?)\s*m/i);
        if (match) {
            const meter = parseFloat(match[1].replace(',', '.'));
            const neuesMeter = meter * faktor;
            return `ca. ${formatMenge(neuesMeter)} m`;
        }
    }
    return menge;
}

// Ausgabe skalieren (z.B. "45-50 Würstchen")
function skaliereAusgabe(ausgabe, faktor) {
    const match = ausgabe.match(/(\d+)\s*[-–]\s*(\d+)/);
    if (match) {
        const min = parseInt(match[1]);
        const max = parseInt(match[2]);
        const neuerMin = Math.round(min * faktor);
        const neuerMax = Math.round(max * faktor);
        return ausgabe.replace(/\d+\s*[-–]\s*\d+/, `${neuerMin}-${neuerMax}`);
    }
    return ausgabe;
}

// Menge formatieren (für Gewürze etc. in Gramm)
function formatMenge(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace('.', ',');
    }
    if (num < 1) {
        return num.toFixed(2).replace('.', ',');
    }
    if (num < 10) {
        const gerundet = Math.round(num * 2) / 2;
        return gerundet % 1 === 0 ? gerundet.toString() : gerundet.toString().replace('.', ',');
    }
    return Math.round(num).toString();
}

// Menge in kg formatieren (für Fleisch und Zutaten)
function formatMengeKg(gramm) {
    // Sicherheitscheck
    if (gramm === undefined || gramm === null || isNaN(gramm)) {
        return '–';
    }

    gramm = Number(gramm);

    if (gramm >= 1000) {
        const kg = gramm / 1000;
        return kg % 1 === 0 ? `${kg} kg` : `${kg.toFixed(2).replace('.', ',')} kg`;
    } else {
        return `${Math.round(gramm)} g`;
    }
}

// Zutat mit passender Einheit formatieren
function formatZutat(zutat, menge) {
    if (menge === null || menge === undefined) {
        return zutat.einheit || '–';
    }
    const einheit = zutat.einheit || '';
    // Gewichtseinheiten: g formatieren wie Fleisch
    if (einheit === 'g') {
        return formatMengeKg(menge);
    }
    // ml formatieren
    if (einheit === 'ml') {
        return menge >= 1000
            ? `${(menge / 1000).toFixed(1).replace('.', ',')} l`
            : `${Math.round(menge)} ml`;
    }
    // cl
    if (einheit === 'cl') {
        return `${formatMenge(menge)} cl`;
    }
    // Alle anderen (EL, TL, Stück, Dosen, Glas, etc.) – gerundet
    const gerundet = menge < 10
        ? (Math.round(menge * 2) / 2).toString().replace('.', ',')
        : Math.round(menge).toString();
    return `${gerundet} ${einheit}`;
}

// Schritt als erledigt markieren/demarkieren
function toggleSchritt(schrittId) {
    const schrittElement = document.querySelector(`[data-schritt-id="${schrittId}"]`);

    if (!schrittStatus[schrittId]) {
        schrittStatus[schrittId] = { completed: false, collapsed: false };
    }

    schrittStatus[schrittId].completed = !schrittStatus[schrittId].completed;

    // Automatisch einklappen wenn erledigt
    if (schrittStatus[schrittId].completed) {
        schrittStatus[schrittId].collapsed = true;
        schrittElement.classList.add('collapsed');
    }

    schrittElement.classList.toggle('completed');

    const checkbox = schrittElement.querySelector('.checkbox');
    checkbox.classList.toggle('checked');

    speichereSchrittStatus(rezeptId, schrittStatus);

    // Fortschritt aktualisieren
    updateFortschritt();
}

// Schritt ein-/ausklappen
function toggleEinklappen(schrittId) {
    const schrittElement = document.querySelector(`[data-schritt-id="${schrittId}"]`);

    if (!schrittStatus[schrittId]) {
        schrittStatus[schrittId] = { completed: false, collapsed: false };
    }

    schrittStatus[schrittId].collapsed = !schrittStatus[schrittId].collapsed;
    schrittElement.classList.toggle('collapsed');

    speichereSchrittStatus(rezeptId, schrittStatus);
}

// Fortschritt aktualisieren
function updateFortschritt() {
    const gesamtSchritte = rezept.schritte.reduce((sum, gruppe) => sum + gruppe.schritte.length, 0);
    const erledigteSchritte = Object.values(schrittStatus).filter(s => s.completed).length;
    const fortschrittProzent = gesamtSchritte > 0 ? Math.round((erledigteSchritte / gesamtSchritte) * 100) : 0;

    const fortschrittText = document.querySelector('.fortschritt-text');
    const fortschrittFill = document.querySelector('.fortschritt-fill');

    if (fortschrittText) {
        fortschrittText.textContent = `Fortschritt: ${erledigteSchritte} von ${gesamtSchritte} Schritten erledigt`;
    }

    if (fortschrittFill) {
        fortschrittFill.style.width = `${fortschrittProzent}%`;
        fortschrittFill.textContent = `${fortschrittProzent}%`;
    }
}
