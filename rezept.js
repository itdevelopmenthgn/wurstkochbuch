// Init-Funktion, die aufgerufen wird, wenn die Daten aus Supabase geladen sind
function initRezept() {
    const rezept = window.rezepteGeladen ? window.rezepteGeladen[0] : null;
    window.zeigeRezept(rezept);
}

// Globale Funktion zum Anzeigen eines Rezepts



window.zeigeRezept = function(rezept) {

    const container = document.getElementById("rezeptDetail");

    if (!rezept) {
        container.innerHTML =
            "<p style='text-align:center;color:#c0392b;padding:3rem;'>Rezept nicht gefunden.</p>";
        return;
    }

    // Skalierungsfaktor
    let faktor = 1;

    function berechneMenge(menge) {
        if (!menge || isNaN(menge)) return "";
        return (menge * faktor).toFixed(1).replace(".0", "");
    }

    function renderListe(arr) {
        if (!arr || arr.length === 0) return "";

        return `
        <ul>
            ${arr.map(item => `
                <li>
                    ${item.name || ""}
                    ${item.menge ? `${berechneMenge(item.menge)} ${item.einheit || ""}` : ""}
                </li>
            `).join("")}
        </ul>`;
    }

    function renderSchritte(schritte) {
        if (!schritte || schritte.length === 0) return "";

        return schritte.map(gruppe => `
            <h3>${gruppe.gruppe}</h3>
            <ol>
                ${(gruppe.schritte || []).map(s => `
                    <li>
                        <strong>${s.titel || ""}</strong><br>
                        ${s.inhalt || ""}
                    </li>
                `).join("")}
            </ol>
        `).join("");
    }

    function renderTipps(tipps) {
        if (!tipps || tipps.length === 0) return "";
        return `<ul>${tipps.map(t => `<li>${t}</li>`).join("")}</ul>`;
    }

    function render() {
        container.innerHTML = `
            <h2>${rezept.titel}</h2>

            <p>${rezept.beschreibung || ""}</p>

            <div style="margin:1rem 0;">
                <label>Portionen-Faktor:</label>
                <input type="number" id="faktorInput" value="1" step="0.1" style="width:80px;">
            </div>

            ${rezept.fleischsorten?.length ? `
                <h3>Fleischsorten</h3>
                ${renderListe(rezept.fleischsorten)}
            ` : ""}

            ${rezept.zutaten?.length ? `
                <h3>Zutaten</h3>
                ${renderListe(rezept.zutaten)}
            ` : ""}

            ${rezept.gewuerze?.length ? `
                <h3>Gewürze</h3>
                ${renderListe(rezept.gewuerze)}
            ` : ""}

            ${rezept.schritte?.length ? `
                <h3>Zubereitung</h3>
                ${renderSchritte(rezept.schritte)}
            ` : ""}

            ${rezept.tipps?.length ? `
                <h3>Tipps</h3>
                ${renderTipps(rezept.tipps)}
            ` : ""}
        `;

        document.getElementById("faktorInput").addEventListener("input", e => {
            faktor = parseFloat(e.target.value) || 1;
            render();
        });
    }

    render();
};
