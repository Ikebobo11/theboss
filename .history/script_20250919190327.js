let hidela = document.querySelector(".hidela")
let hidelb = document.querySelector(".hidelb")
let menudiv = document.querySelector(".menudiv")
function menushow(){
    hidelb.style.display = "block"
    hidela.style.display = "none"
    menudiv.style.display ="block"
}
hidela.addEventListener("click",menushow)

function menuhide(){
    hidelb.style.display = "none"
    hidela.style.display = "block"
    menudiv.style.display ="none"
}
hidelb.addEventListener("click",menuhide)


// services section

let btna = document.querySelector(".btna")
let btnb = document.querySelector(".btnb")
let servicei = document.querySelector(".servicesi")

function scroll_forward(){
  servicei.scrollLeft = servicei.scrollLeft + servicei.clientWidth
}
btnb.addEventListener("click",scroll_forward)


function scroll_backward(){
  servicei.scrollLeft = servicei.scrollLeft - servicei.clientWidth
}
btna.addEventListener("click",scroll_backward)

// animation

let paragraphs = document.querySelectorAll("p,img,h1");

function fadeInOnScroll() {
  let triggerBottom = window.innerHeight * 0.9; // 90% of viewport height

  paragraphs.forEach(function(p) {
    let pTop = p.getBoundingClientRect().top;

    if (pTop < triggerBottom) {
      p.classList.add("active"); // add class to animate
    }
  });
}

// Listen for scroll
window.addEventListener("scroll", fadeInOnScroll);

// Run on page load too
fadeInOnScroll();

testimoni



