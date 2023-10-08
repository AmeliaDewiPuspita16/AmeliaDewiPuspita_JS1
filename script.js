// CONDITIONAL IF, ELSE, NESTED IF

let BB = parseFloat(prompt("Masukkan berat badan (kg):")); //"parseFloat" untuk mengubah teks menjadi bilangan desimal. Karna, input yang diterima melalui prompt akan berupa teks atau string
let TB = parseFloat(prompt("Masukkan tinggi badan (cm):"));

let TBm = TB / 100; //mengkonversi tinggi badan dari cm ke m

let bmi = BB / (TBm * TBm); //menghitung BMI

if (bmi < 18.5) {
  alert(
    "BMI Anda adalah: " +
      bmi.toFixed(2) + //"toFixed(2)" untuk membulatkan nilai bmi menjadi dua angka desimal setelah titik desimal
      "\nAnda termasuk dalam kategori: Kurus"
  );
} else if (bmi >= 18.5 && bmi <= 25) {
  alert(
    "BMI Anda adalah: " +
      bmi.toFixed(2) +
      "\nAnda termasuk dalam kategori: Langsing/Sehat"
  );
} else if (bmi > 25) {
  alert(
    "BMI Anda adalah: " +
      bmi.toFixed(2) +
      "\nAnda termasuk dalam kategori: Gemuk"
  );
} else {
  alert("Masukkan angka yang valid untuk berat badan dan tinggi badan.");
}

// CONDITIONAL SWITCH CASE

let bulan = "Maret";

switch (bulan) {
  case "Januari":
    console.log("Sekarang adalah Bulan Januari");
    break;
  case "Februari":
    console.log("Sekarang adalah Bulan Februari");
    break;
  case "Maret":
    console.log("Sekarang adalah Bulan Maret");
    break;
  default:
    console.log("Bulan Tidak Terdaftar");
}

// FOR STATEMENT
for (let x = 10; x >= 5; x--) {
  console.log("Iterasi ke-" + x);
}

// WHILE, DO WHILE
let jlhAyamBetina = 6;
let noAyam = 1;

while (jlhAyamBetina >= noAyam) {
  //perulangan while
  console.log("Ayam ke " + noAyam + " adalah ayam betina");
  noAyam++;
}

let n = 4;
do {
  //perulangan Do/While
  console.log("Perulangan ke-" + n);
  n++;
} while (n <= 5);

// FUNCTION
function luassegitiga(a, t) {
  let luasSegitiga = 0.5 * a * t;

  return luasSegitiga;
}
console.log(luassegitiga(5, 10));
