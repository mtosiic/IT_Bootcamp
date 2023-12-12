// // 1. Zadatak
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// // 2. Zadatak
// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }

// // 5. Zadatak
// let suma = 0;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   suma += i;
// }

// console.log(suma);

// 3. Zadatak
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 4. Zadatak
// for (let i = 5; i <= 15; i++) {
//   console.log(i * 2);
// }

// // 6. Zadatak
// let n = 1;
// let m = 10;
// let suma = 0;

// for (let i = n; i <= m; i++) {
//   suma += i;
// }

// console.log(`Suma brojeva od ${n} do ${m} je: ${suma}`);

// // 7. Zadatak
// let proizvod = 1;

// for (let i = n; i <= m; i++) {
//   proizvod *= i;
// }

// console.log(`Proizvod brojeva od ${n} do ${m} je: ${proizvod}`);

// // 8. Zadatak
// let sumaKvadrata = 0;

// for (let i = n; i <= m; i++) {
//   sumaKvadrata += Math.pow(i, 2);
// }

// console.log(`Suma kvadrata brojeva od ${n} do ${m} je: ${sumaKvadrata}`);

// // 9. Zadatak
// for (let i = 1; i <= 3; i++) {
//   // let img = document.createElement("img");
//   // img.src = `./slike/${i}.jpg`;
//   // document.body.appendChild(img);
//   document.write(`<img src="./slike/${i}.jpg" />`);
// }

// // 12. Zadatak
// n = 3;
// m = 6;
// suma = 0;
// let br = 0;

// for (let i = 3; i <= m; i++) {
//   suma += i;
//   br++;
// }

// let aSredina = suma / br;
// console.log(aSredina);

// 10. Zadatak
// let proizvod = 1;
// for (let i = 20; i <= 100; i++) {
//   if (i % 11 == 0) {
//     proizvod *= i;
//   }
// }

// console.log(
//   `Proizvod brojeva od 20 do 100 koji su deljivi sa 11 je: ${proizvod}`
// );
// // 11. Zadatak
// let br = 0;

// for (let i = 5; i <= 150; i++) {
//   if (i % 13 == 0) {
//     br++;
//   }
// }

// console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13`);
// 13. Zadatak

// let n = -4;
// let m = 4;
// let brojPozitivnih = 0;
// let brojNegativnih = 0;

// for (let i = n; i <= m; i++) {
//   if (i < 0) {
//     brojNegativnih++;
//   } else if (i > 0) {
//     brojPozitivnih++;
//   }
// }

// console.log(
//   `U intervalu od ${n} do ${m} ima ${brojNegativnih} negativnih i ${brojPozitivnih} pozitivnih brojeva`
// );

// // 14. Zadatak
// let br = 0;
// for (let i = 5; i <= 50; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     br++;
//   }
// }

// console.log(
//   `U intervalu od 5 do 50 ima ${br} brojeva koji su deljivi sa 3 ili 5`
// );

// // 15. Zadatak
// n = 40;
// m = 78;
// let suma = 0;
// br = 0;

// for (let i = n; i <= m; i++) {
//   if (i % 10 == 4) {
//     suma += i;
//     br++;
//   }
// }

// console.log(
//   `U intervalu od ${n} do ${m} ima ${br} brojeva cija je poslednja cifra 4 i njihova suma je: ${suma} `
// );

// // 17. Zadatak
// n = 10;
// m = 20;
// let a = 2;
// let proizvod = 1;

// for (let i = n; i <= m; i++) {
//   if (i % a == 0) {
//     proizvod *= i;
//   }
// }

// console.log(
//   `Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je: ${proizvod}`
// );

// 18. Zadatak
// let k = 7;
// let br = 0;
// for (let i = 1; i <= k; i++) {
//   if (k % i == 0) {
//     br++;
//   }
// }
// console.log(br);
// if (br == 2) {
//   console.log(`Broj ${k} je prost`);
// } else {
//   console.log(`Broj ${k} nije prost`);
// }
const table = document.createElement("table");
let rows = 6;

for (let i = 1; i <= rows; i++) {
  let row = document.createElement("tr");
  for (let j = 1; j <= 2; j++) {
    let td = document.createElement("td");
    td.innerText = "Tekst";
    row.appendChild(td);
  }
  if (i % 2 == 0) {
    row.classList.add("obojen");
  }
  table.appendChild(row);
}

document.body.appendChild(table);
