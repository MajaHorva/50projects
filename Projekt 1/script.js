const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", function () {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

//My solution
for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", function () {
    removeActiveClasses();
    panels[i].classList.add("active");
  });
}

function removeActiveClasses() {
  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.remove("active");
  }
}

//Dino solution
// let activeIndex = 0;
// for (let i = 0; i < panels.length; i++) {
//   panels[i].addEventListener("click", function () {
//     if (activeIndex === i) {
//       return;
//     }
//     panels[i].classList.add("active");
//     panels[activeIndex].classList.remove("active");
//     activeIndex = i;
//   });
// }
