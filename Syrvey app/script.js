const ul1 = document.querySelector(".option1");
const ul2 = document.querySelector(".option2");
const ul3 = document.querySelector(".option3");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

ul1.addEventListener("click", function(){
    q1.style.display = "none";
    q2.style.display = "block";
});

ul2.addEventListener("click", () => {
    q2.style.display = "none";
    q3.style.display = "block";
});

ul3.addEventListener("click", () => {
    q3.style.display = "none";
    survey.style.display = "none";
    end.style.display = "block";
});