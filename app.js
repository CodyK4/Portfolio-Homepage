console.log("JavaScript APP.JS loaded successfully");

/*
var modalA = document.getElementById("Gipfeln_Modal");
var modalB = document.getElementById("Casino_Modal");     //Old
var modalC = document.getElementById("Contact_Modal");
var modalD = document.getElementById("SC_Modal");
*/

var modal_Dir = document.getElementsByClassName("modal");

/*
var btn = document.getElementById("Gipfeln_Button");
var btnb = document.getElementById("Casino_Button");      //Old 
var btnc = document.getElementById("Contact_Button");
*/

var btn_Contact = document.getElementById("Contact_Button");
var btn_Master = document.getElementsByClassName("Modal_Button");

var close = document.getElementsByClassName("close");

var plaque = document.getElementById("ftright_plaque");
var footer = document.getElementById("SectionFooter");

function Modal_Runner() {
  btn_Contact.onclick = function() {
      modal_Dir[0].style.display = "block";
  }

  btn_Master[0].onclick = function() {
      modal_Dir[1].style.display = "block";
  }

  btn_Master[1].onclick = function() {
      modal_Dir[2].style.display = "block";
  }

  btn_Master[2].onclick = function() {
    modal_Dir[3].style.display = "block";
  }

  for(i in close) {
    close[i].onclick = function() {
      for(m in modal_Dir) {
        modal_Dir[m].style.display = "none";
      }
    }
  }

  window.onclick = function(event) {
    for(i in modal_Dir) {
      if (event.target == modal_Dir[i]) {
        modal_Dir[i].style.display = "none";
      }
    }
  }
}

ftright_plaque.onclick = function() {
   ftright_plaque.style.cssText = "animation: flip 2s; transition: all 1s; box-shadow: inset 0vw 1.6vw red; background-color: gray; color: white;";
   SectionFooter.style.cssText = "background-color: black; transition: all 1s; color: white;";
   };


function snapScrollBtn_Runner() {
    sBtn = document.getElementsByClassName("snap-scroll-buttons");

    sBtn[0].onclick = function snapScrollBtnuppr() {
      //window.scrollBy(0, -window.innerHeight);
      window.scrollBy({
        top: -100,
        behavior: 'smooth',
      });

    }
    sBtn[1].onclick = function snapScrolldwn() {
      //window.scrollBy(0, window.innerHeight);
      window.scrollBy({
        top: 100,
        behavior: 'smooth',
      });
    }
}

/*
function mobile_nav() {
  var navLink = document.getElementsByClassName("nav-link");

  navLink[1].innerHTML = '<span class="link-text">Contact</span><img src="assets/SCProject.png"></img>'
}


var watchMedia = window.matchMedia("(max-width: 600px)")
*/

Modal_Runner()
snapScrollBtn_Runner()


/* MODAL_DIR notes
0 - Contact
1 - Gipfeln
2 - Python Casino
3++
*/