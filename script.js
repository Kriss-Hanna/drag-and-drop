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

for(const empty of box){

  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);

}

function dragOver(e){
  e.preventDefault();

  console.log("over")
};

function dragEnter(){
  this.className += " hovered"
};

function dragLeave(){
  this.className = "case"
};

function dragDrop(){
  this.className = "case"
  this.append(base);
};
