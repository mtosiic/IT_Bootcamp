let datum = new Date();
let godina = datum.getFullYear();
let godinaRodjenja = 2005;

if (godina - godinaRodjenja >= 18) {
  document.write(
    '<img src="https://poklondzija.com/wp-content/uploads/2022/09/19000-13kg.jpg" width=100>'
  );
} else {
  let ostalo = 18 - (godina - godinaRodjenja);
  console.log(`Do punoletstva je ostalo: ${ostalo} godina`);
}

// 2. Zadatak
let temperatura = 0;
let p = document.getElementById("temp");

if (temperatura >= 0) {
  p.innerHTML = "Temperatura je u plusu";
  p.style.color = "red";
} else {
  p.innerHTML = "Temperatura je u minusu";
  p.style.color = "blue";
}

// 4. Zadatak
let sati = datum.getHours();
let minuti = datum.getMinutes();
let trenutnoVreme = sati * 60 + minuti;

if (trenutnoVreme > 12 * 60) {
  console.log(`Popodne`);
} else {
  console.log(`Jutro`);
}

// 5. Zadatak
