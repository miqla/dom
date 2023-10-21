// setTimeout(function/panggil function, waktu in milisecond)
// setInterval()

const timeout = setTimeout(function () {
  console.log("udah 5 detik");
}, 5000);

const tombol = document.getElementById("tombol");
tombol.addEventListener("click", function () {
  clearTimeout(timeout);
  console.log("ok");
});
