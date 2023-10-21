function getPilihanComputer() {
  const computer = Math.random();
  if (computer < 0.34) return "gajah";
  if (computer < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "seri";
  if (player == "gajah") return comp == "orang" ? "menang" : "kalah";
  if (player == "orang") return comp == "semut" ? "menang" : "kalah";
  if (player == "semut") return comp == "gajah" ? "menang" : "kalah";
}

const acak = function () {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const interval = setInterval(function () {
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
  setTimeout(function () {
    clearInterval(interval);
  }, 1000);
};

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    acak();
    setTimeout(function () {
      const gambarComputer = document.querySelector(".img-computer");
      gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.getElementsByClassName("info")[0];
      info.innerHTML = hasil;
    }, 1000);
  });
});

// Cara dibawah ini work, tapi kurang efektif
// const playerGajah = document.querySelector(".gajah");
// playerGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const gambarComputer = document.querySelector(".img-computer");
//   gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.getElementsByClassName("info")[0];
//   info.innerHTML = hasil;
// });

// const playerOrang = document.querySelector(".orang");
// playerOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const gambarComputer = document.querySelector(".img-computer");
//   gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.getElementsByClassName("info")[0];
//   info.innerHTML = hasil;
// });

// const playerSemut = document.querySelector(".semut");
// playerSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const gambarComputer = document.querySelector(".img-computer");
//   gambarComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.getElementsByClassName("info")[0];
//   info.innerHTML = hasil;
// });
