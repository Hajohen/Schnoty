function infoEinblenden(geklickteZeile) {
  // Die nächste Zeile (die info-Zeile) finden
  var infoZeile = geklickteZeile.nextElementSibling;
  
  // Prüfen ob die Info schon offen ist
  if (infoZeile.style.display === "table-row") {
    // Info schließen
    infoZeile.style.display = "none";
  } else {
    // Alle anderen Infos zuerst schließen
    var alleInfos = document.querySelectorAll('.info');
    alleInfos.forEach(function(info) {
      info.style.display = "none";
    });
    
    // Diese Info öffnen
    infoZeile.style.display = "table-row";
  }
}