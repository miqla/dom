// DOM Selection
// Diawal perintahnya, kasih nama node root nya
// document.getElemeentById(); -> mengembalikan element
const judul = document.getElementById("judul"); //nama variabel ga harus = id
judul.innerHTML = "Mila Javascript";
judul.style.color = "red";
judul.style.backgroundColor = "#ccc"; //cara nulis css yg 2 kata

// document.getElementsByTagName() -> HTML Collection
const p = document.getElementsByTagName("p");
// p[2].style.backgroundColor = "lightblue"; karna HTML Collection mirip array, jadi harus dikasih index nya biar bisa dikasih style
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> HTML Collection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Teks ini dirubah dari jaascript";
