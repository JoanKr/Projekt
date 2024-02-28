// main.js

function goToHomePage() {
  window.location.href = 'index.html';
}

function openPage(pageName) {
  window.location.href = pageName + '.html';
}

function openKlasyPage(klasa) {
  openPage('klasa?klasa=' + encodeURIComponent(klasa));
}
