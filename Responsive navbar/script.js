// const toggleBtn = document.querySelector(".toggle");
// const item = document.querySelector(".item");

// toggleBtn.addEventListener("click", () => {
//     if(item.classList.contains('active')){
//         item.classList.remove('active');
//     } else {
//         item.classList.add('active');
//     }
// });

const toggle = document.querySelector(".toggle");
const items = document.querySelectorAll(".item");
toggle.addEventListener("click", () => {
  Array.from(items).forEach((item) => {
    item.classList.toggle("active");
  });
});

// const toggle = document.getElementsByClassName("toggle");
// const item = document.querySelectorAll(".item");
// item.forEach((navItem) => {
//   function toggleMenu() {
//     if (navItem.classList.contains("active")) {
//       navItem.classList.remove("active");
//     } else {
//       navItem.classList.add("active");
//     }
//   }
//   document.querySelector(".toggle").addEventListener("click", toggleMenu);
// });

// for (let i = 0; i < item.length; i++) {
//   let eachItem = item[i];
//   function toggleMenu() {
//     if (eachItem.classList.contains("active")) {
//       eachItem.classList.remove("active");
//     } else {
//       eachItem.classList.add("active");
//     }
//   }
//   document.querySelector(".toggle").addEventListener("click", toggleMenu);
// }
