const base = document.querySelector(".base");
const box = document.querySelectorAll(".case");

base.addEventListener("dragstart", dragStart);
base.addEventListener("dragend", dragEnd);

function dragStart(){
  this.className += " tenu";

  setTimeout(() => {
    this.className = "invisible"
  },0);
};

function dragEnd(){
  this.className = "base"
};