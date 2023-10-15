// Dipanggil dengan event handler -> inner HTML attribute
const p3 = document.querySelector(".p3");
function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}

// dipanggil dengan event handler, element method
function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// dipanggil dengan addEventListener(event, function)
const p4 = document.querySelector("#section2 p");
p4.addEventListener("click", function () {
  const liBaru = document.createElement("li");
  const textLiBaru = document.createTextNode("Item Baru ges");
  liBaru.append(textLiBaru);
  const ul = document.querySelector("#section2 ul");
  ul.append(liBaru);
});

// ketika event handler ada 2, dy nimpa, yg dijalankan event yg kedua, liat baris 8-12
function ubahWarnaP2() {
  p2.style.color = "red";
}

// ketika addEventListener ada 2, dy ga nimpa, dy menambahkan
const p1 = document.getElementsByClassName("p1")[0];
// p1.addEventListener("click", function () {
//   p1.style.backgroundColor = "lightgreen";
// });
// p1.addEventListener("click", function () {
//   p1.style.color = "red";
// });
p1.addEventListener("click", function () {
  p1.style.backgroundColor = "lightgreen";
  p1.style.color = "red";
});

// for more event lists, pls refer to google/mozilla etc
