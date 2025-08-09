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

// // let sm = document.querySelectorAll(".sm");
// // sm.forEach(function() {
// //     sm.style.display ="none"
// // })
// let bh = document.querySelector(".bh")
  // Step 1: Select the scrolling container
  let container = document.querySelector(".servicesi");

  // Step 2: Get all the .sm boxes
  let boxes = document.querySelectorAll(".servicesi .sm");

  // Step 3: Get each button
  let btn1 = document.querySelector(".btna");
  let btn2 = document.querySelector(".btnb");
  let btn3 = document.querySelector(".btnc");
  let btn4 = document.querySelectorAll(".btnd")[0]; // first .btnd
  let btn5 = document.querySelectorAll(".btnd")[1]; // second .btnd
  // Scroll to first box
  btn1.addEventListener("click", function () {
    boxes[0].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });

  // Scroll to second box
  btn2.addEventListener("click", function () {
    boxes[1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });

  // Scroll to third box
  btn3.addEventListener("click", function () {
    boxes[2].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });

  // Scroll to fourth box
  btn4.addEventListener("click", function () {
    boxes[3].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });

  // Scroll to fifth box
  btn5.addEventListener("click", function () {
    boxes[4].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });







  // Step 1: Select everything
  let boxep = document.querySelectorAll(".servicesi .sm");
  let buttons = document.querySelectorAll(".mainbtna button");

  // Step 2: Function to hide all boxes
  function hideAllBoxes() {
    boxep.forEach(function (box) {
      box.style.display = "none";
    });
  }

  // Step 3: Function to show one box and scroll it
  function showBox(index) {
    hideAllBoxes(); // hide all first
    boxep[index].style.display = "block"; // show the one we want
    boxep[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
    buttons[index].focus(); // focus the button
  }

  // Step 4: Attach event to each button
  buttons.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      showBox(index);
    });
  });

  // Step 5: On page load, show the first box and focus its button
  window.addEventListener("DOMContentLoaded", function () {
    showBox(0);
  });


// main partners
let ah = document.querySelector("ah")




