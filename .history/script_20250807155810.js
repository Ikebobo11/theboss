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

let sm = document.querySelectorAll(".sm");
sm.forEach(function() {
    sm.style.display ="none"
})
let bh = document.querySelector(".b")

// main partners
let ah = document.querySelector("ah")




