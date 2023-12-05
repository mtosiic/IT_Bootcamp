let datum = new Date();
let sati = datum.getHours();
if (sati < 9) {
  console.log(`Firma trenutno ne radi`);
} else if (sati >= 17) {
  console.log(`Firma trenutno ne radi`);
} else console.log(`Firma radi`);

// 6. Zadatak
let dan = datum.getDay();
console.log(dan);
if (dan < 6) {
  console.log(`Radni dan`);
} else {
  console.log(`Vikend`);
}

//  7. Zadatak
let vreme = 23;
console.log(vreme);

if (vreme < 12) {
  console.log(`Dobro jutro`);
} else if (vreme < 18) {
  console.log(`Dobar dan`);
} else {
  console.log(`Dobro vece`);
}

// 10. Zadatak
let a = 7;
let b = 3;

if (a < b) {
  console.log(a - 1);
  console.log(b + 1);
}
if (b < a) {
  console.log(a + 1);
  console.log(b - 1);
}

// 11. Zadatak
let c = 21;

if (c % 1 == 0) {
  console.log(`Ceo broj`);
} else {
  console.log(`Nije ceo broj`);
}

// 9. Zadatak
let p1 = 14;
let k1 = 21;
let p2 = 14;
let k2 = 20;

if (p2 >= k1) {
  console.log(`NE`);
} else if (p1 >= k2) {
  console.log(`NE`);
} else {
  console.log(`DA`);
}
