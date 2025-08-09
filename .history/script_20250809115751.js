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
let servicei = document.querySelector(".servicei")

function scroll_foward(){
  servicei.scrollLeft = servicei.scrollLeft + 200%
}
btnb.addEventListener("click",scroll_foward)




