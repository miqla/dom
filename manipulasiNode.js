// DOM Manipulation
// Buat elemen baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("Paragraf Baru");
// masukkan text kedalam tag <p>
pBaru.appendChild(textPBaru);
// masukkan elemen baru ke akhir section1
const section1 = document.getElementById("section1");
section1.appendChild(pBaru);
pBaru.classList.add("p4");

// Buat elemen baru, lalu selipkan sebelum li2
const ul = document.querySelector("#section2 ul"); // tangkep parent nya
const li2 = ul.querySelector("li:nth-child(2)"); // tangkep elemen yg akan di insert before
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Li baru ges");
liBaru.appendChild(textLiBaru);
ul.insertBefore(liBaru, li2); // elemen yg ditambahkan, sebelum elemen apa

// Menghapus elemen
const link = document.getElementsByTagName("a")[0]; // karna ->HTML Collection, harus tulis indexnya
section1.removeChild(link);

// Replace elemen
const section2 = document.getElementById("section2"); // tangkep parent nya
const p5 = section2.querySelector("p"); // tangkap elemen yg akan di replace
const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Mila Forever");
h2Baru.appendChild(textH2Baru);
section2.replaceChild(h2Baru, p5); // node elemen baru, node yg akan di replace

// Manipulasi Node (method baru), silakan dicoba sendiri
// parentNode.append()
// parentNode.prepend()
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()
