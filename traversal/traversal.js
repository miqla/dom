// cara mainstream utk menghapus objek
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal (penelusuran), ex:parentElement
const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // e berisi semua informasi dari event yg sedang terjadi, coba consolelog(e)
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// cara lain, el=close[i]
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

// DOM Traversal Method: parentNode -> Node, parentElement -> element, nextSibling -> node, nextElementSibling->element, previousSibling -> node, previousElementSibling->element
// kalau mengembalikan node, bearti enter dan spasi juga dianggap
// kalau mengembalikan element, spasi tidak dianggap, langsung fokus ke element selanjutnya