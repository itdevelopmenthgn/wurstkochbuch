// =====================
// Globale Variablen
// =====================
let schrittStatus = {};
let aktuelleFleischmengen = {};
let aktuelleZutatenmengen = {};
let rezeptId = parseInt(new URLSearchParams(window.location.search).get('id')) || 1;

// =====================
// LocalStorage Helfer
// =====================
function ladeSchrittStatus(rezeptId) {
    const gespeichert = localStorage.getItem(`wurst_rezept_v2_${rezeptId}_schritte`);
    return gespeichert ? JSON.parse(gespeichert) : {};
}

function speichereSchrittStatus(rezeptId, schrittStatus) {
    localStorage.setItem(`wurst_rezept_v2_${rezeptId}_schritte`, JSON.stringify(schrittStatus));
}

function ladeFleischmengen(rezeptId) {
    const gespeichert = localStorage.getItem(`wurst_rezept_v2_${rezeptId}_fleischmengen`);
    return gespeichert ? JSON.parse(gespeichert) : null;
}

function speichereFleischmengen(rezeptId, mengen) {
    localStorage.setItem(`wurst_rezept_v2_${rezeptId}_fleischmengen`, JSON.stringify(mengen));
}

// =====================
// Rezept initialisieren
// =====================
function initRezept() {
    const rezept = window.rezepteGeladen ? window.rezepteGeladen[0] : null;
    if (!rezept) {
        document.getElementById('rezeptDetail').innerHTML = '<p>Rezept nicht gefunden</p>';
        return;
    }

    // Status und Mengen initialisieren
    schrittStatus = ladeSchrittStatus(rezeptId);
    aktuelleFleischmengen = {};
    aktuelleZutatenmengen = {};

    // Basis-Mengen setzen
    rezept.fleischsorten.forEach(f => aktuelleFleischmengen[f.name] = f.menge);
    if (rezept.zutaten) {
        rezept.zutaten.forEach(z => aktuelleZutatenmengen[z.name] = z.menge);
    }

    // Gespeicherte LocalStorage-Werte überschreiben
    const gespeicherteMengen = ladeFleischmengen(rezeptId);
    if (gespeicherteMengen) {
        if (gespeicherteMengen.fleisch) {
            let valide = true;
            rezept.fleischsorten.forEach(f => {
                if (gespeicherteMengen.fleisch[f.name] === undefined) valide = false;
            });
            if (valide) aktuelleFleischmengen = gespeicherteMengen.fleisch;
        }

        if (gespeicherteMengen.zutaten && rezept.zutaten) {
            rezept.zutaten.forEach(z => {
                if (gespeicherteMengen.zutaten[z.name] !== undefined) {
                    aktuelleZutatenmengen[z.name] = gespeicherteMengen.zutaten[z.name];
                }
            });
        }
    }

    zeigeRezept(rezept);
}

// initRezept wird von rezept.html via s.onload aufgerufen, nachdem die Daten geladen wurden.

// =====================
// Rezept anzeigen
// =====================
function zeigeRezept(rezept) {
    const container = document.getElementById('rezeptDetail');

    // Fortschritt berechnen
    const gesamtSchritte = rezept.schritte.reduce((sum, gruppe) => sum + gruppe.schritte.length, 0);
    const erledigteSchritte = Object.values(schrittStatus).filter(s => s.completed).length;
    const fortschrittProzent = gesamtSchritte > 0 ? Math.round((erledigteSchritte / gesamtSchritte) * 100) : 0;

    // Skalierungsfaktor für Fleisch
    const originalGesamt = rezept.basisMenge.gesamt;
    const aktuellesGesamt = Object.values(aktuelleFleischmengen).reduce((sum, m) => sum + m, 0);
    const faktor = (originalGesamt > 0 && aktuellesGesamt > 0) ? aktuellesGesamt / originalGesamt : 1;

    // HTML Aufbau
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
            ${rezept.zutaten && rezept.zutaten.length > 0 ? '<h3 style="margin-top:1.5rem;">🧅 Zutaten anpassen</h3>' + erstelleZutatenSteuerung(rezept) : ''}
        </div>

        <!-- Fortschritt -->
        <div class="fortschritt-container">
            <div class="fortschritt-text">Fortschritt: ${erledigteSchritte} von ${gesamtSchritte} Schritten erledigt</div>
            <div class="fortschritt-bar">
                <div class="fortschritt-fill" style="width:${fortschrittProzent}%">${fortschrittProzent}%</div>
            </div>
        </div>

        <p style="font-size:1.1rem;font-style:italic;margin:1rem 0;"><em>${rezept.beschreibung}</em></p>
    `;

    // Fleischsorten anzeigen
    html += '<div class="zutaten-section"><h2>🥩 Fleischsorten</h2><div class="zutaten-kategorie"><ul>';
    rezept.fleischsorten.forEach(fleisch => {
        const aktuelleMenge = aktuelleFleischmengen[fleisch.name] || fleisch.menge;
        html += `<li><strong>${fleisch.name}:</strong> ${formatMengeKg(aktuelleMenge)}</li>`;
    });
    html += '</ul></div></div>';

    // Weitere Zutaten anzeigen
    if (rezept.zutaten && rezept.zutaten.length > 0) {
        html += '<div class="zutaten-section"><h2>🧅 Weitere Zutaten</h2><div class="zutaten-kategorie"><ul>';
        rezept.zutaten.forEach(zutat => {
            const aktuelleMenge = aktuelleZutatenmengen[zutat.name] !== undefined
                ? aktuelleZutatenmengen[zutat.name] : zutat.menge;
            html += `<li><strong>${zutat.name}:</strong> ${formatZutat(zutat, aktuelleMenge)}</li>`;
        });
        html += '</ul></div></div>';
    }

    // Gewürze anzeigen
    if (rezept.gewuerze && rezept.gewuerze.length > 0) {
        html += '<div class="zutaten-section"><h2>🌶️ Gewürze & Zutaten</h2><div class="zutaten-kategorie"><ul>';
        rezept.gewuerze.forEach(gewuerz => {
            html += `<li>${skaliereGewuerz(gewuerz, faktor)}</li>`;
        });
        html += '</ul></div></div>';
    }

    // Darm / Verpackung
    if (rezept.darm && rezept.darm.typ) {
        html += '<div class="zutaten-section"><h2>🔗 Darm / Verpackung</h2><div class="zutaten-kategorie"><ul>';
        html += `<li><strong>Typ:</strong> ${rezept.darm.typ}</li>`;
        if (rezept.darm.kaliber) html += `<li><strong>Kaliber:</strong> ${rezept.darm.kaliber}</li>`;
        html += `<li><strong>Menge:</strong> ${skaliereDarmMenge(rezept.darm.menge, faktor)}</li>`;
        html += '</ul></div></div>';
    }

    // Varianten
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
            const skalierterInhalt = skaliereText(schritt.inhalt, rezept, faktor);

            html += `
                <div class="schritt ${istErledigt ? 'completed' : ''} ${istEingeklappt ? 'collapsed' : ''}" data-schritt-id="${schrittId}">
                    <div class="schritt-header">
                        <div class="checkbox ${istErledigt ? 'checked' : ''}" onclick="toggleSchritt('${schrittId}')"></div>
                        <div class="schritt-titel">${schritt.titel}</div>
                        <div class="toggle-icon" onclick="toggleEinklappen('${schrittId}')">▼</div>
                    </div>
                    <div class="schritt-inhalt">${skalierterInhalt}</div>
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
        rezept.tipps.forEach(tipp => html += `<li>${tipp}</li>`);
        html += '</ul></div>';
    }

    container.innerHTML = html;
}

// =====================
// Fleisch-Steuerung HTML erstellen
// =====================
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

// =====================
// Zutaten-Steuerung HTML erstellen
// =====================
function getZutatenSchritt(zutat) {
    const einheit = zutat.einheit || 'g';
    if (einheit === 'g') return 100;
    if (einheit === 'ml') return 50;
    if (einheit === 'cl') return 5;
    return 1;  // EL, TL, Stück etc.
}

function erstelleZutatenSteuerung(rezept) {
    let html = '';
    if (rezept.zutaten) {
        rezept.zutaten.forEach((zutat, index) => {
            if (zutat.menge === null) return; // nicht steuerbar
            const zutatKey = zutat.name.replace(/'/g, "\\'");
            const aktuell = aktuelleZutatenmengen[zutat.name] !== undefined ? aktuelleZutatenmengen[zutat.name] : zutat.menge;
            const schritt = getZutatenSchritt(zutat);
            const displayName = zutat.name.length > 30 ? zutat.name.substring(0,30) + '...' : zutat.name;
            html += `
                <div class="fleisch-input-gruppe">
                    <label title="${zutat.name}">${displayName}:</label>
                    <div class="fleisch-input">
                        <button onclick="aendereZutatenmenge('${zutatKey}', -${schritt})">−</button>
                        <span class="fleisch-anzahl" id="zutat_${index}">${formatZutat(zutat, aktuell)}</span>
                        <button onclick="aendereZutatenmenge('${zutatKey}', ${schritt})">+</button>
                    </div>
                </div>
            `;
        });
    }
    return html;
}

// =====================
// Fleischmenge ändern
// =====================
function aendereFleischmenge(fleischsorte, delta) {
    const alteFleischMenge = Object.values(aktuelleFleischmengen).reduce((sum,m)=>sum+m,0);
    aktuelleFleischmengen[fleischsorte] = Math.max(0, (aktuelleFleischmengen[fleischsorte] || 0) + delta);
    const neueFleischMenge = Object.values(aktuelleFleischmengen).reduce((sum,m)=>sum+m,0);
    const faktor = alteFleischMenge>0 ? neueFleischMenge/alteFleischMenge : 1;

    // Zutaten proportional anpassen
    if (rezept.zutaten) {
        rezept.zutaten.forEach(zutat => {
            const aktMenge = aktuelleZutatenmengen[zutat.name] || zutat.menge;
            aktuelleZutatenmengen[zutat.name] = Math.round(aktMenge*faktor);
        });
        // Anzeige in Steuerung aktualisieren
        rezept.zutaten.forEach((zutat,index)=>{
            const anzeige = document.getElementById(`zutat_${index}`);
            if(anzeige) anzeige.textContent = formatZutat(zutat, aktuelleZutatenmengen[zutat.name]);
        });
    }

    // Fleisch + Zutaten speichern
    speichereFleischmengen(rezeptId, {fleisch:aktuelleFleischmengen,zutaten:aktuelleZutatenmengen});

    // Anzeige Fleisch aktualisieren
    const anzeige = document.getElementById(`fleisch_${fleischsorte}`);
    if(anzeige) anzeige.textContent = formatMengeKg(aktuelleFleischmengen[fleischsorte]);

    // Alle abhängigen Werte neu berechnen
    updateAlleWerte();
}

// =====================
// Zutatenmenge ändern
// =====================
function aendereZutatenmenge(zutatKey, delta) {
    const zutat = rezept.zutaten.find(z=>z.name===zutatKey);
    if(!zutat) return;
    const index = rezept.zutaten.indexOf(zutat);

    if(!aktuelleZutatenmengen[zutatKey]) aktuelleZutatenmengen[zutatKey]=zutat.menge;
    aktuelleZutatenmengen[zutatKey] = Math.max(0, aktuelleZutatenmengen[zutatKey]+delta);

    speichereFleischmengen(rezeptId, {fleisch:aktuelleFleischmengen,zutaten:aktuelleZutatenmengen});

    // Anzeige aktualisieren
    const anzeige = document.getElementById(`zutat_${index}`);
    if(anzeige) anzeige.textContent = formatZutat(zutat, aktuelleZutatenmengen[zutatKey]);

    // Werte neu berechnen ohne Fleisch-Anpassung
    updateAlleWerte();
}

// =====================
// Alle abhängigen Werte aktualisieren
// =====================
function updateAlleWerte() {
    const originalGesamt = rezept.basisMenge.gesamt;
    const aktuellesGesamt = Object.values(aktuelleFleischmengen).reduce((sum,m)=>sum+m,0);
    const faktor = (originalGesamt>0 && aktuellesGesamt>0) ? aktuellesGesamt/originalGesamt : 1;

    // Fleisch anzeigen aktualisieren
    const fleischContainer = document.querySelectorAll('.zutaten-section')[0];
    if(fleischContainer){
        const liElems = fleischContainer.querySelectorAll('li');
        rezept.fleischsorten.forEach((f,index)=>{
            if(liElems[index]) liElems[index].innerHTML=`<strong>${f.name}:</strong> ${formatMengeKg(aktuelleFleischmengen[f.name])}`;
        });
    }

    // Zutaten anzeigen aktualisieren
    if(rezept.zutaten && rezept.zutaten.length>0){
        const zutatenContainer = document.querySelectorAll('.zutaten-section')[1];
        if(zutatenContainer){
            const liElems = zutatenContainer.querySelectorAll('li');
            rezept.zutaten.forEach((z,index)=>{
                const menge = aktuelleZutatenmengen[z.name]!==undefined?aktuelleZutatenmengen[z.name]:z.menge;
                if(liElems[index]) liElems[index].innerHTML=`<strong>${z.name}:</strong> ${formatZutat(z, menge)}`;
            });
        }
    }

    // Gewürze aktualisieren
    const gewuerzeIndex = rezept.zutaten && rezept.zutaten.length>0 ? 2 : 1;
    const gewuerzeContainer = document.querySelectorAll('.zutaten-section')[gewuerzeIndex];
    if(gewuerzeContainer && rezept.gewuerze){
        const liElems = gewuerzeContainer.querySelectorAll('li');
        rezept.gewuerze.forEach((g,index)=>{
            if(liElems[index]) liElems[index].innerHTML = skaliereGewuerz(g,faktor);
        });
    }

    // Darm aktualisieren
    if(rezept.darm){
        const darmIndex = gewuerzeIndex+1;
        const darmContainer = document.querySelectorAll('.zutaten-section')[darmIndex];
        if(darmContainer){
            const mengeLi = darmContainer.querySelector('li:last-child');
            if(mengeLi) mengeLi.innerHTML = `<strong>Menge:</strong> ${skaliereDarmMenge(rezept.darm.menge,faktor)}`;
        }
    }

    // Schritte aktualisieren
    updateSchritte(faktor);

    // Ausgabe aktualisieren
    if(rezept.ausgabe){
        const ausgabeSpan = document.getElementById('ausgabe-anzeige');
        if(ausgabeSpan) ausgabeSpan.textContent = skaliereAusgabe(rezept.ausgabe,faktor);
    }
}

// =====================
// Schritte aktualisieren
// =====================
function updateSchritte(faktor) {
    const alleGruppen = document.querySelectorAll('.schritt-gruppe');
    rezept.schritte.forEach((gruppe, gruppenIndex)=>{
        const gruppenElem = alleGruppen[gruppenIndex];
        if(!gruppenElem) return;

        const schrittElems = gruppenElem.querySelectorAll('.schritt');
        gruppe.schritte.forEach((schritt, schrittIndex)=>{
            const schrittElem = schrittElems[schrittIndex];
            if(!schrittElem) return;

            const inhaltElem = schrittElem.querySelector('.schritt-inhalt');
            if(inhaltElem) inhaltElem.innerHTML = skaliereText(schritt.inhalt, rezept, faktor);
        });
    });
}

// =====================
// Gewürze skalieren
// =====================
function skaliereGewuerz(gewuerz, faktor) {
    if(gewuerz.proKg){
        const kg = Object.values(aktuelleFleischmengen).reduce((sum,m)=>sum+m,0)/1000;
        const neueMenge = gewuerz.menge*kg;
        if(typeof gewuerz.menge==='number'){
            return `<strong>${gewuerz.name}:</strong> ${formatMenge(neueMenge)} ${gewuerz.einheit} (${formatMenge(gewuerz.menge)} ${gewuerz.einheit}/kg)`;
        } else {
            return `<strong>${gewuerz.name}:</strong> ${gewuerz.menge}`;
        }
    } else {
        if(typeof gewuerz.menge==='number'){
            return `<strong>${gewuerz.name}:</strong> ${formatMenge(gewuerz.menge*faktor)} ${gewuerz.einheit}`;
        } else {
            return `<strong>${gewuerz.name}:</strong> ${gewuerz.menge} ${gewuerz.einheit}`;
        }
    }
}

// =====================
// Text mit Mengen skalieren (Schritte)
// =====================
function skaliereText(text, rezept, faktor){
    // Fleisch ersetzen
    rezept.fleischsorten.forEach(f=>{
        const regexKg = new RegExp(`(${f.menge/1000}(?:[.,]\\d+)?)\\s*kg\\s+${f.name}`,'gi');
        const regexG  = new RegExp(`${f.menge}\\s*g\\s+${f.name}`,'gi');
        const neueMenge = aktuelleFleischmengen[f.name];
        const mengeText = formatMengeKg(neueMenge);
        text = text.replace(regexKg, `${mengeText} ${f.name}`);
        text = text.replace(regexG, `${mengeText} ${f.name}`);
    });

    // Zutaten ersetzen
    if(rezept.zutaten){
        rezept.zutaten.forEach(z=>{
            const zutatName = z.name.split('(')[0].trim();
            const regex = new RegExp(`(\\d+(?:[.,]\\d+)?\\s*(?:kg|g))\\s+${zutatName}`,'gi');
            const neueMenge = aktuelleZutatenmengen[zutatName] || z.menge;
            const mengeText = formatMengeKg(neueMenge);
            text = text.replace(regex, `${mengeText} ${zutatName}`);
        });
    }

    // Zeitangaben (Stunden/Minuten) unverändert lassen
    text = text.replace(/(\d+(?:[.,]\d+)?)\s*(Stunden?|Minuten?|min)\b/gi, (match, zahl, einheit)=>{
        return `${zahl} ${einheit}`;
    });

    return text;
}

// =====================
// Darm-Menge skalieren
// =====================
function skaliereDarmMenge(menge, faktor){
    if(typeof menge==='string' && menge.includes('ca.')){
        const match = menge.match(/(\d+(?:[.,]\d+)?)\s*m/i);
        if(match){
            const meter = parseFloat(match[1].replace(',', '.'));
            return `ca. ${formatMenge(meter*faktor)} m`;
        }
    }
    return menge;
}

// =====================
// Ausgabe skalieren (z.B. "45-50 Würstchen")
// =====================
function skaliereAusgabe(ausgabe,faktor){
    const match = ausgabe.match(/(\d+)\s*[-–]\s*(\d+)/);
    if(match){
        const min = parseInt(match[1]);
        const max = parseInt(match[2]);
        const neuerMin = Math.round(min*faktor);
        const neuerMax = Math.round(max*faktor);
        return ausgabe.replace(/\d+\s*[-–]\s*\d+/, `${neuerMin}-${neuerMax}`);
    }
    return ausgabe;
}

// =====================
// Formatierung Helfer
// =====================
function formatMenge(num){
    if(num>=1000) return (num/1000).toFixed(1).replace('.', ',');
    if(num<1) return num.toFixed(2).replace('.', ',');
    if(num<10){ const g=Math.round(num*2)/2; return g%1===0?g.toString():g.toString().replace('.',','); }
    return Math.round(num).toString();
}

function formatMengeKg(gramm){
    if(gramm===undefined || gramm===null || isNaN(gramm)) return '–';
    gramm = Number(gramm);
    if(gramm>=1000){ const kg=gramm/1000; return kg%1===0?`${kg} kg`:`${kg.toFixed(2).replace('.',',')} kg`; }
    else return `${Math.round(gramm)} g`;
}

function formatZutat(zutat, menge){
    if(menge===null || menge===undefined) return zutat.einheit||'–';
    const einheit = zutat.einheit||'';
    if(einheit==='g') return formatMengeKg(menge);
    if(einheit==='ml') return menge>=1000?`${(menge/1000).toFixed(1).replace('.',',')} l`:`${Math.round(menge)} ml`;
    if(einheit==='cl') return `${formatMenge(menge)} cl`;
    const gerundet = menge<10?(Math.round(menge*2)/2).toString().replace('.',','):Math.round(menge).toString();
    return `${gerundet} ${einheit}`;
}

// =====================
// Schritt als erledigt markieren / demarkieren
// =====================
function toggleSchritt(schrittId) {
    const schrittElem = document.querySelector(`[data-schritt-id="${schrittId}"]`);
    if(!schrittStatus[schrittId]){
        schrittStatus[schrittId] = { completed: false, collapsed: false };
    }

    // Status wechseln
    schrittStatus[schrittId].completed = !schrittStatus[schrittId].completed;

    // Automatisch einklappen, wenn erledigt
    if(schrittStatus[schrittId].completed){
        schrittStatus[schrittId].collapsed = true;
        schrittElem.classList.add('collapsed');
    }

    schrittElem.classList.toggle('completed');
    const checkbox = schrittElem.querySelector('.checkbox');
    if(checkbox) checkbox.classList.toggle('checked');

    // In LocalStorage speichern
    speichereSchrittStatus(rezeptId, schrittStatus);

    // Fortschritt aktualisieren
    updateFortschritt();
}

// =====================
// Schritt ein-/ausklappen
// =====================
function toggleEinklappen(schrittId){
    const schrittElem = document.querySelector(`[data-schritt-id="${schrittId}"]`);
    if(!schrittStatus[schrittId]){
        schrittStatus[schrittId] = { completed: false, collapsed: false };
    }

    schrittStatus[schrittId].collapsed = !schrittStatus[schrittId].collapsed;
    schrittElem.classList.toggle('collapsed');

    speichereSchrittStatus(rezeptId, schrittStatus);
}

// =====================
// Fortschritt aktualisieren (Balken + Text)
// =====================
function updateFortschritt(){
    const gesamtSchritte = rezept.schritte.reduce((sum, gruppe)=>sum+gruppe.schritte.length,0);
    const erledigteSchritte = Object.values(schrittStatus).filter(s=>s.completed).length;
    const fortschrittProzent = gesamtSchritte>0 ? Math.round((erledigteSchritte/gesamtSchritte)*100) : 0;

    const fortschrittText = document.querySelector('.fortschritt-text');
    const fortschrittFill = document.querySelector('.fortschritt-fill');

    if(fortschrittText) fortschrittText.textContent = `Fortschritt: ${erledigteSchritte} von ${gesamtSchritte} Schritten erledigt`;
    if(fortschrittFill){
        fortschrittFill.style.width = `${fortschrittProzent}%`;
        fortschrittFill.textContent = `${fortschrittProzent}%`;
    }
}

// =====================
// LocalStorage Helfer
// =====================
function ladeSchrittStatus(rezeptId){
    const gespeichert = localStorage.getItem(`wurst_rezept_v2_${rezeptId}_schritte`);
    return gespeichert ? JSON.parse(gespeichert) : {};
}

function speichereSchrittStatus(rezeptId, schrittStatus){
    localStorage.setItem(`wurst_rezept_v2_${rezeptId}_schritte`, JSON.stringify(schrittStatus));
}

function ladeFleischmengen(rezeptId){
    const gespeichert = localStorage.getItem(`wurst_rezept_v2_${rezeptId}_fleischmengen`);
    return gespeichert ? JSON.parse(gespeichert) : null;
}

function speichereFleischmengen(rezeptId, mengen){
    localStorage.setItem(`wurst_rezept_v2_${rezeptId}_fleischmengen`, JSON.stringify(mengen));
}

