let d = document;
let b = d.body;
let BurGerBtn = d.getElementById("menu-bar");
let mb = d.getElementById("menu-bar");

function menuOnClick() {
  d.getElementById("menu-bar").classList.toggle("change");
  d.getElementById("nav").classList.toggle("change");
  d.getElementById("menu-bg").classList.toggle("change-bg");
}

BurGerBtn.onclick = () => {
  menuOnClick();
  b.style.overflow = "hidden";
};

