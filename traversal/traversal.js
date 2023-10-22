// cara mainstream utk menghapus objek
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal (penelusuran), ex:parentElement
// const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // e berisi semua informasi dari event yg sedang terjadi, coba consolelog(e)
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// cara lain, el=close[i]
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
// e.preventDefault(); untuk mencegah aksi default dari sebuah element, misal tag a, kalo href nya kosong, defaultnya dy akan kembali ke halaman yg sama/refresh, biar dy ga refresh maka dikasih preventDefault
// e.stopPropagation(); untuk menghentikan event bubble dari parent nya, biar event parentnya ga berjalan di dy
//   });
// });

// DOM Traversal Method: parentNode -> Node, parentElement -> element, nextSibling -> node, nextElementSibling->element, previousSibling -> node, previousElementSibling->element
// kalau mengembalikan node, bearti enter dan spasi juga dianggap
// kalau mengembalikan element, spasi tidak dianggap, langsung fokus ke element selanjutnya

// kasih event di parentnya, biar children nya ikut semua, termasuk children yg ditambahkan secara realtime akan mendapatkan efek bubble
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.className == "close") {
    // jika element container yg di klik memiliki nama class close, maka jalankan perintah dibawah
    e.target.parentElement.style.display = "none";
  }
});
