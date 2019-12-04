/* jshint esversion:6 */

// Your code goes here


//nav bar click
document.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", function() {
    a.style.color= "hotpink";
  });
});

//header image
const headerImage = document.querySelector("header > img");

headerImage.addEventListener("mouseenter", () => {
  headerImage.style.transform = "scale(1.2)";
  headerImage.style.transition = "transform 0.3s";
});

//header image resize
headerImage.addEventListener("mouseleave", () => {
  headerImage.style.transform = "scale(1)";
});


//logo red
const logoHeading = document.querySelector("h1");

logoHeading.addEventListener("click", () => {
  logoHeading.style.color = "red";
});

//logo click

logoHeading.addEventListener("dblclick", () => {
  alert("Welcome to Fun Bus!");
});

//change picture
const newPic = document.querySelector(".img-fluid-rounded");

window.addEventListener('resize', () => {
  newPic.src = "img/berlin.jpg";
});

//new header resize
window.addEventListener('resize', () => {
  headerImage.src = "img/nightbus.jpg";
});

//ams
const picMiddle = document.querySelector(".picMiddle");

picMiddle.addEventListener('mousedown', () => {
  picMiddle.src = "img/ams.jpg";
});

//night boat
const boat = document.querySelector(".boat");

boat.addEventListener('mouseover', () => {
  boat.src = "img/nightboat.jpg";
});

//button
const box = document.querySelector('.destination');
box.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});


//stopPropagation
const button = document.querySelector(".btn");

button.addEventListener('mouseup', (event)=>{
  button.style.backgroundColor= "black";
  console.log(event);
  event.stopPropagation();
});


const buttonTwo = document.querySelector(".btn:nth-of-type(2)");

buttonTwo.addEventListener('mouseup', ()=>{
  buttonTwo.style.backgroundColor= "yellow";
});

//prevent default
const stopNav = document.querySelector("a");
stopNav.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped the refresh");
});
