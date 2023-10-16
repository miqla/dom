const tombol = document.getElementById("tombol");

// memberi warna pada begron
// tombol.onclick = function () {
// const body = document.getElementsByTagName("body")[0]; body gaperlu kek gini
// document.body.style.backgroundColor = "lightblue";
//   document.body.classList.toggle("biru-muda");
// };

// Membuat tombol acak warna
const tBaru = document.createElement("button");
const textTBaru = document.createTextNode("Acak Warna");
tBaru.append(textTBaru);
tBaru.setAttribute("type", "button");

tombol.after(tBaru);

tBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// membuat slider warna
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value; //tangkap nilai value nya
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value; //tangkap nilai value nya
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value; //tangkap nilai value nya
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// Warna berubah ketika mouse digerakkan
document.body.addEventListener("mousemove", function () {
  const xPosisi = Math.round((event.clientX / window.innerWidth) * 255);
  const yPosisi = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor =
    "rgb(" + xPosisi + "," + yPosisi + ",0)";
});
