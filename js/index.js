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
