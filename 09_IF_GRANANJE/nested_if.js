// 12. Zadatak

let br1 = 3;
let br2 = 5;

if (br1 > br2) {
  console.log(`Veci broj je ${br1}`);
  if (br1 % 2 == 0) {
    console.log(`Paran`);
  } else {
    console.log(`Nije paran`);
  }
  console.log(`Manji broj je ${br2}`);
  if (br2 % 3 == 0) {
    console.log(`Deljiv je sa 3`);
  } else {
    console.log(`Nije deljiv sa 3`);
  }
} else {
  console.log(`Veci broj je ${br2}`);
  if (br2 % 2 == 0) {
    console.log(`Paran`);
  } else {
    console.log(`Nije paran`);
  }
  console.log(`Manji broj je ${br1}`);
  if (br1 % 3 == 0) {
    console.log(`Deljiv je sa 3`);
  } else {
    console.log(`Nije deljiv sa 3`);
  }
}

// 13. Zadatak
let dan1 = 15;
let mesec1 = 3;
let godina1 = 2023;

let dan2 = 21;
let mesec2 = 10;
let godina2 = 2023;

if (godina1 < godina2) {
  console.log(`${dan1}.${mesec1}.${godina1}`);
} else if (godina1 > godina2) {
  console.log(`${dan2}.${mesec2}.${godina2}`);
} else {
  if (mesec1 < mesec2) {
    console.log(`${dan1}.${mesec1}.${godina1}`);
  } else if (mesec1 > mesec2) {
    console.log(`${dan2}.${mesec2}.${godina2}`);
  } else {
    if (dan1 < dan2) {
      console.log(`${dan1}.${mesec1}.${godina1}`);
    } else if (dan1 > dan2) {
      console.log(`${dan2}.${mesec2}.${godina2}`);
    } else {
      console.log(`Datumi su isti: ${dan1}.${mesec1}.${godina1}`);
    }
  }
}

//  14. Zadatak
let pol = "z";
let god = 18;

if (god >= 18) {
  if (pol == "m") {
    console.log(`Musko, punoletan`);
  } else if (pol == "z") {
    console.log(`Zensko, punoletna `);
  }
} else {
  if (pol == "m") {
    console.log(`Musko, maloletan`);
  } else if (pol == "z") {
    console.log(`Zensko, maloletna`);
  }
}
