// Supabase-Konfiguration – zentrale Datei für alle Seiten
const SUPABASE_URL = 'https://cpsjivtiyxrjmgylymal.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwc2ppdnRpeXhyam1neWx5bWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NzA4NjcsImV4cCI6MjA4NzA0Njg2N30.s1gOewDKUKRKozZWKnKLDyk7hhT_wpqNg39XxUsTFPs';

const sb = {
    // GET: Alle Zeilen einer Tabelle laden (optional: Filter, Order)
    async getAll(tabelle, params = {}) {
        const url = new URL(`${SUPABASE_URL}/rest/v1/${tabelle}`);
        url.searchParams.set('select', '*');
        if (params.order) url.searchParams.set('order', params.order);
        if (params.filter) {
            Object.entries(params.filter).forEach(([k, v]) => url.searchParams.set(k, v));
        }
        const res = await fetch(url, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': 'Bearer ' + SUPABASE_KEY
            }
        });
        if (!res.ok) throw new Error(`Supabase GET ${tabelle}: HTTP ${res.status}`);
        return res.json();
    },

    // GET: Eine Zeile per ID laden
    async getById(tabelle, id) {
        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/${tabelle}?id=eq.${id}&select=*&limit=1`,
            {
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': 'Bearer ' + SUPABASE_KEY
                }
            }
        );
        if (!res.ok) throw new Error(`Supabase GET ${tabelle}/${id}: HTTP ${res.status}`);
        const data = await res.json();
        return data[0] || null;
    },

    // INSERT (upsert): Neue Zeile einfügen, bei doppelter ID überschreiben
    async insert(tabelle, row) {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${tabelle}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_KEY,
                'Authorization': 'Bearer ' + SUPABASE_KEY,
                'Prefer': 'return=representation,resolution=merge-duplicates'
            },
            body: JSON.stringify(row)
        });
        if (!res.ok) {
            const err = await res.text();
            throw new Error(`Supabase INSERT ${tabelle}: HTTP ${res.status} – ${err}`);
        }
        const data = await res.json();
        return Array.isArray(data) ? data[0] : data;
    },

    // UPDATE: Zeile per ID aktualisieren
    async update(tabelle, id, changes) {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${tabelle}?id=eq.${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_KEY,
                'Authorization': 'Bearer ' + SUPABASE_KEY,
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(changes)
        });
        if (!res.ok) {
            const err = await res.text();
            throw new Error(`Supabase UPDATE ${tabelle}/${id}: HTTP ${res.status} – ${err}`);
        }
        const data = await res.json();
        return Array.isArray(data) ? data[0] : data;
    },

    // DELETE: Zeile per ID löschen
    async delete(tabelle, id) {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${tabelle}?id=eq.${id}`, {
            method: 'DELETE',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': 'Bearer ' + SUPABASE_KEY
            }
        });
        if (!res.ok) {
            const err = await res.text();
            throw new Error(`Supabase DELETE ${tabelle}/${id}: HTTP ${res.status} – ${err}`);
        }
    },

    // Nächste freie ID ermitteln (max(id) + 1)
    async naechsteId(tabelle) {
        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/${tabelle}?select=id&order=id.desc&limit=1`,
            {
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': 'Bearer ' + SUPABASE_KEY
                }
            }
        );
        if (!res.ok) return 1;
        const data = await res.json();
        return data.length > 0 ? data[0].id + 1 : 1;
    }
};

// DB-Row zurück in App-Objekt umwandeln (für rezept.js Kompatibilität)
function rowZuRezept(row) {
    return {
        id:             row.id,
        titel:          row.titel,
        kategorie:      row.kategorie,
        beschreibung:   row.beschreibung,
        quelle:         row.quelle,
        basisMenge:     { gesamt: row.basis_gesamt || 0 },
        fleischsorten:  row.fleischsorten || [],
        zutaten:        row.zutaten || [],
        gewuerze:       row.gewuerze || [],
        darm:           row.darm || null,
        ausgabe:        row.ausgabe,
        schritte:       row.schritte || [],
        tipps:          row.tipps || []
    };
}
