// DOM Selection
// Diawal perintahnya, kasih nama node root nya
// document.getElemeentById(); -> mengembalikan element
// -----------------Bagian 1--------------------------
// const judul = document.getElementById("judul"); //nama variabel ga harus = id
// judul.innerHTML = "Mila Javascript";
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc"; //cara nulis css yg 2 kata

// // document.getElementsByTagName() -> HTML Collection
// const p = document.getElementsByTagName("p");
// // p[2].style.backgroundColor = "lightblue"; karna HTML Collection mirip array, jadi harus dikasih index nya biar bisa dikasih style
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// // document.getElementsByClassName() -> HTML Collection
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "Teks ini dirubah dari jaascript";
// // ------------Akhir bagian 1--------------------------------

// ---------- Bagian 2 --------------------
// document.querySelector() --> element, konsepnya mirip selector css
// const p5 = document.querySelector("#section2 p");
// p5.style.color = "green";

// const li2 = document.querySelector("#section2 li:nth-child(2)");
// li2.style.backgroundColor = "salmon";

// // document.querySelectorAll() --> NodeList (mirip array)
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// // Mengubah Node Root (document)
const section2 = document.getElementById("section2");
const p4 = section2.getElementsByTagName("p")[0];
p4.style.color = "red";
// -------------------- Akhir Bagian 2 ------------------

// ------------------ Bagian 3 ----------------
const judul = document.getElementById("judul");
judul.setAttribute("name", "mila");
// judul.getAttribute('name');  biar dapet value dari attribute yg kita mention
// judul.removeAttribute('name');  biar hapus attributenya dan valuenya

judul.classList.add("contoh", "satu", "dua");
// judul.classList.remove("satu"); hapus kelas
// judul.classList.toggle('satu'); kalo ada class nya maka hapus ->(false), kalo gada maka tambahkan (true)
// judul.classList.item(2); mau lihat item kelas ke 2, start dari 0
// judul.classList.contains('dua'); cek apakah judul ada kelas dua -> true/false
judul.classList.replace("dua", "empat"); // mengganti kelas yg sudah ada "dari" menjadi "apa"
