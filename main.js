
function toggleModal () {
  console.log("hhehhe");
  const modal = document.querySelector(".navbar-modal");
  modal.classList.toggle("visible");
}

const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".menu-close");
hamburgerBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);