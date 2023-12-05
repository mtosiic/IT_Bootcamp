// // Zadatak 1
// let sati = 23;
// let minuti = 0;

// let odPonoci = sati * 60 + minuti;

// console.log(odPonoci);

// // Zadatak 1.1
// let doPonoci = 24 * 60 - odPonoci;
// console.log(doPonoci);

// Zadatak 2
let minutiOdPonoci = 275;

let sati = Math.floor(minutiOdPonoci / 60);
let minuti = minutiOdPonoci % 60;

console.log(`Sati: ${sati} Minuti: ${minuti}`);

// Zadatak 3
let cena = 1352;
let novcanica = 2000;

let kusur = novcanica - cena;
console.log(`Kusur: ${kusur}`);

// Zadatak 6
let ukupnoEUR = 100;
let ukupnoDIN = 1160;
let kurs = 117.21;

console.log(`EUR u DIN: ${ukupnoEUR * kurs} DIN u EUR: ${ukupnoDIN / 116}`);

// Zadatak 7.1 (eur -> dol w/ din)
// let brojEur = 100;
let kursDol = 106.79;

// let brojDol = (brojEur * kurs) / kursDol;
// console.log(brojDol);

// Zadatak 7.2 (dol -> eur w/ din)
let brojDol = 100;
let brojEur = (brojDol * kursDol) / kurs;
console.log(`Broj eur ${brojEur}`);

// Zadatak 8.1 (C -> F)
let cels = 30;
let far = cels * 1.8 + 32;
console.log(`C u F: ${far}`);

// Zadatak 8.2 (F -> C)
let far2 = 86;
let cels2 = (far2 - 32) / 1.8;
console.log(`F u C: ${cels2}`);

// Zadatak 9.1 (C -> K)
let cels3 = 30;
let kelv = cels3 + 273.15;
console.log(`C u K: ${kelv}`);

// Zadatak 9.2 (K -> C);
let kelv2 = 303.15;
let cels4 = kelv2 - 273.15;
console.log(`K u C: ${cels4}`);

// Date

let datum = new Date();
console.log(
  `${datum.getFullYear()}.${datum.getMonth() + 1}.${datum.getDate()}`
);
