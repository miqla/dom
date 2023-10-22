const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(jumbo.getAttribute("src"));
  // jumbo.setAttribute("src", e.target.getAttribute("src"));

  // cek apakah y diklik adalah thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      // if (thumb.classList.contains("active")) {
      //   thumb.classList.remove("active");
      // }
      thumb.className = "thumb"; // apapun nama kelas yg ada, akan di replace dengan thumb
    });

    e.target.classList.add("active");
  }
});
