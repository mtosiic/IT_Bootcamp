// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// i = 1;

// while (i <= 5) {
//   console.log(i++);
// }

// Zadatak 2
// let j = 20;

// while (j > 0) {
//   console.log(j);
//   j--;
// }
// console.log(`----------`);
// // Zadatak 3
// let i = 1;

// while (i <= 20) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// // Zadatak 1a

// let n = 1;
// let niz = [];

// while (n <= 20) {
//   niz.push(n);
//   n++;
// }

// console.log(...niz);

// Zadatak 5
// let n = 10;

// while (n > 0) {
//   if (n % 2 != 0) {
//     document.write(`<img src="computer.jpg" style="border: 4px solid red"/>`);
//   } else {
//     document.write(`<img src="computer.jpg" style="border: 4px dotted red"/>`);
//   }
//   n--;
// }

// Zadatak 4
let n = 7;
let i = 1;
while (i <= n) {
  if (i % 3 == 1) {
    document.body.innerHTML += `<p class="plava">Paragraf broj ${i}</p>`;
  } else if (i % 3 == 2) {
    document.body.innerHTML += `<p class="crvena">Paragraf broj ${i}</p>`;
  } else {
    document.body.innerHTML += `<p class="zelena">Paragraf broj ${i}</p>`;
  }

  i++;
}

// Zadatak 6
i = 1;
let suma = 0;

while (i <= 100) {
  suma += i;
  i++;
}
console.log(suma);

// Zadatak 7
n = 10;
i = 1;
suma = 0;
while (i <= n) {
  suma += i;
  i++;
}
console.log(`Zadatak 7: ${suma}`);

// Zadatak 8
n = 1;
let m = 10;
suma = 0;

while (n <= m) {
  suma += n;
  n++;
}
console.log(`Zadatak 8: ${suma}`);

// Zadatak 9
n = 3;
m = 6;
let proizvod = 1;

while (n <= m) {
  proizvod *= n;
  n++;
}
console.log(`Zadatak 9: ${proizvod}`);

// Zadatak 10
// n = 1;
// m = 10;
// let sumaParnih = 0;
// let sumaNeparnih = 0;

// while (n <= m) {
//   if (n % 2 == 0) {
//     sumaParnih += Math.pow(n, 2);
//   } else {
//     sumaNeparnih += Math.pow(n, 3);
//   }
//   n++;
// }

// console.log(`Zadatak 10: ${sumaParnih}, ${sumaNeparnih}`);

// // Zadatak 11
// let k = 12;
// i = 1;
// let ukupno = 0;

// while (i <= k) {
//   if (k % i == 0) {
//     ukupno++;
//   }
//   i++;
// }
// console.log(`Zadatak 11: ${ukupno}`);

// Zadatak 12
// n = 4;
// let prost;
// i = 2;

// if (n > 1) {
//   prost = true;
// }

// while (i < n) {
//   if (n % i == 0) {
//     prost = false;
//     break;
//   } else {
//     prost = true;
//   }
//   i++;
// }

// if (prost) {
//   console.log(`Broj ${n} je prost`);
// } else {
//   console.log(`Broj ${n} nije prost`);
// }
// Zadatak 10
n = 1;
m = 10;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;

while (n <= 10) {
  if (n % 2 == 0) {
    sumaKvadrataParnih += Math.pow(n, 2);
  } else {
    sumaKubovaNeparnih += Math.pow(n, 3);
  }
  n++;
}

console.log(`Suma kvadrata parnih: ${sumaKvadrataParnih}`);
console.log(`Suma kubova neparnih: ${sumaKubovaNeparnih}`);

//  Zadatak 10
let k = 20;
let brojac = 0;
i = 1;

while (i <= k) {
  if (k % i == 0) {
    brojac++;
  }
  i++;
}
console.log(`Broj ${k} je deljiv sa ${brojac} brojeva`);

// Zadatak 12
n = 20;
i = 2;
let prost = true;

if (n == 1) {
  console.log(`Broj ${n} nije ni prost ni slozen`);
} else if (n > 1) {
  while (i < n) {
    if (n % i == 0) {
      prost = false;
    }
    i++;
  }
  if (prost) {
    console.log(`Broj ${n} je prost broj.`);
  } else {
    console.log(`Broj ${n} nije prost broj`);
  }
} else {
  console.log(`Broj ${n} nije prost broj`);
}

// Zadatak a
n = 123456789;
suma = 0;

while (n > 0) {
  suma += n % 10;
  n = Math.floor(n / 10);
}
console.log(suma);

// Zadatak b
n = 403985;
let brojCifara = 0;
let sumaCifara = 0;
i = n;

while (i > 0) {
  sumaCifara += i % 10;
  brojCifara++;
  i = Math.floor(i / 10);
}

let aSredina = sumaCifara / brojCifara;
console.log(`Aritmeticka sredina broja ${n} je: ${aSredina}`);

// Zadatak c
n = 95423875;
let n_obrnuto = "";
i = n;

while (i > 0) {
  let temp;
  temp = i % 10;
  n_obrnuto += temp;
  i = Math.floor(i / 10);
}

console.log(n_obrnuto);
