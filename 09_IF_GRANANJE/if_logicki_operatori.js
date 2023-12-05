// 15. Zadatak
let temp = -16;

if (temp < -15 || temp > 40) {
  console.log(`Ekstremna temperatura`);
} else {
  console.log(`Nije ekstremna temperatura`);
}

if (temp >= -15 && temp <= 40) {
  console.log(`Nije ekstremna temperatura`);
} else {
  console.log(`Ekstremna temperatura`);
}

// 16. Zadatak
let datum = new Date();
let god = datum.getFullYear();

if ((god % 4 == 0 && god % 100 != 0) || god % 400 == 0) {
  console.log(`Godina je prestupna`);
} else {
  console.log(`Godina nije prestupna`);
}

// 17. Zadatak
let hours = datum.getHours();
let minutes = datum.getMinutes();
let time = hours * 60 + minutes;
let day = datum.getDay();

if ((day == 0 || day == 6) && time >= 10 * 60 && time < 18 * 60) {
  console.log(`Otvoreno`);
  document.write('<img src="./images/door_open.jpg" />');
} else if (day >= 1 && day <= 5 && time >= 9 * 60 && time < 20 * 60) {
  console.log(`Otvoreno`);
  document.write('<img src="./images/door_open.jpg" />');
} else {
  console.log(`Zatvoreno`);
  document.write('<img src="./images/door_closed.jpg" />');
}

//  18. Zadatak

// 1. nacin
let p = document.getElementById("paragraf");
let a = 10;
let b = 20;
let c = 15;
let najveci = a;

if (b > najveci) {
  najveci = b;
}
if (c > najveci) {
  najveci = c;
}

p.innerHTML = najveci;

// 3. Nacin
let p2 = document.getElementById("paragraf2");
let br1 = 35;
let br2 = 20;
let br3 = 10;

let najveci2 = br1;

if (br2 > najveci2) {
  if (br2 > br3) {
    najveci2 = br2;
  } else if (br3 > br1) {
    najveci2 = br3;
  }
} else if (br3 > najveci2) {
  if (br3 > br2) {
    najveci2 = br3;
  }
}

p2.innerHTML = najveci2;

// 2. nacin
let a1 = 0;
let b1 = 6;
let c1 = 6;
let maks;

if (a1 > b1) {
  maks = a1;
} else {
  maks = b1;
}

if (c1 > maks) {
  maks = c1;
}

console.log(maks);

// if (br1>br2) {
//     if (br1>br3) {
//         console.log(`Najveci je ${br1}`)
//     } else {
//         console.log(`Najveci je ${br3}`)
//     }
// } else if (br2 >br3)
