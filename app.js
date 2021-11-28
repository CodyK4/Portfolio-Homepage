console.log("JavaScript loaded successfully")

var modal = document.getElementById("Gipfeln_Modal");
var modalb = document.getElementById("Casino_Modal");
var modalc = document.getElementById("Contact_Modal")

var btn = document.getElementById("Gipfeln_Button");
var btnb = document.getElementById("Casino_Button");
var btnc = document.getElementById("Contact_Button");

var span = document.getElementsByClassName("close")[0];
var spanb = document.getElementsByClassName("closeb")[0];
var spanc = document.getElementsByClassName("closec")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

btnb.onclick = function() {
  modalb.style.display = "block";
}

btnc.onclick = function() {
   modalc.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

spanb.onclick = function() {
  modalb.style.display = "none";
}

spanc.onclick = function() {
   modalc.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == modalb || event.target == modalc) {
    modal.style.display = "none";
    modalb.style.display = "none";
    modalc.style.display = "none";
  }
}

var plaque = document.getElementById("ftright_plaque");

var footer = document.getElementById("SectionFooter");

ftright_plaque.onclick = function() {
   ftright_plaque.style.cssText = "animation: flip 2s; transition: all 1s; box-shadow: inset 0vw 1.6vw red; background-color: gray; color: white;";
   SectionFooter.style.cssText = "background-color: black; transition: all 1s; color: white;";
   };
