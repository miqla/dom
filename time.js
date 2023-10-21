// setTimeout(function/panggil function, waktu in milisecond)
// menjalankan perintah setelah menunggu sesuai waktu yg telah ditentukan

const timeout = setTimeout(function () {
  console.log("udah 5 detik");
}, 5000);

const tombolA = document.getElementById("tombolA");
tombolA.addEventListener("click", function () {
  clearTimeout(timeout);
  console.log("ok");
});

// setInterval(function/panggil function, waktu in milisecond)
// menjalankan perintah setelah menunggu sesuai waktu yg telah ditentukan, tapi berulang-ulang

const interval = setInterval(function () {
  console.log("2 detik");
}, 2000);

const tombolB = document.getElementById("tombolB");
tombolB.addEventListener("click", function () {
  clearInterval(interval);
  console.log("interval done");
});

// memberhentikan interval
const berhenti = setTimeout(function () {
  clearInterval(interval);
  console.log("udah 10 detik");
}, 10000);

// Hitung Mundur, getTime biar bentuknya angka
const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const waktuTujuan = new Date("Oct 30, 2023 14:59:59").getTime();
  const selisih = waktuTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24)); // satuannya milisecond
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 1 detik * 60 detik * 60 menit
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const text = document.getElementById("teks");
  text.innerHTML =
    "Sisa waktu anda adalah: " +
    hari +
    " hari " +
    jam +
    " jam " +
    menit +
    " menit " +
    detik +
    " detik lagi";

  if (selisih < 0) {
    clearInterval(hitungMundur);
    text.innerHTML = "Waktu Anda habis";
  }
}, 1000);
