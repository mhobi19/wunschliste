// Hier steht deine Wunschliste. Jeder Wunsch ist ein Block zwischen { und }.
// Nach jedem Block steht ein Komma (nach dem letzten ist es egal).
// Texte stehen in Anführungszeichen "...". Preise ohne Anführungszeichen und mit Punkt: 49.90
//
// titel    = Name des Wunsches
// preis    = Preis in Euro, z. B. 49.90 (oder null, wenn unbekannt)
// stand    = Datum, an dem du den Preis geprüft hast
// shop     = Name des Shops
// link     = Adresse der Produktseite
// bild     = Bildadresse (Rechtsklick auf das Bild im Shop, "Bildadresse kopieren") oder ein Dateiname wie "bilder/jacke.jpg"
// notiz    = kurzer Text dazu
// herz     = 1, 2 oder 3 (wie wichtig der Wunsch ist)
// besorgt  = true, wenn schon geschenkt, sonst false
// beispiel = true nur bei Beispielen. Beim Ersetzen die Zeile löschen.

window.WUENSCHE = [
  {
    titel: "Bluetooth-Kopfhörer",
    preis: 79.90,
    stand: "20.11.2026",
    shop: "Beispiel-Shop",
    link: "",
    bild: "",
    notiz: "Mit Geräuschunterdrückung, gern in Schwarz.",
    herz: 3,
    besorgt: false,
    beispiel: true
  },
  {
    titel: "Stirnlampe",
    preis: 29.90,
    stand: "20.11.2026",
    shop: "Beispiel-Shop",
    link: "",
    bild: "",
    notiz: "Aufladbar, für Nachtschichten und zum Wandern.",
    herz: 2,
    besorgt: false,
    beispiel: true
  },
  {
    titel: "Warme Winterjacke",
    preis: 119.00,
    stand: "20.11.2026",
    shop: "Beispiel-Shop",
    link: "",
    bild: "",
    notiz: "Größe frage ich vorher nach.",
    herz: 1,
    besorgt: false,
    beispiel: true
  }
];
