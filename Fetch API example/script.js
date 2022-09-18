const catBtn = document.querySelector("#cat_btn");
const dogBtn = document.querySelector("#dog_btn");
const catResult = document.querySelector("#cat_result");
const dogResult = document.querySelector("#dog_result");

catBtn.addEventListener("click", getRandomCat);
dogBtn.addEventListener("click", getRandomDog);

function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      catResult.innerHTML = `<img src=${data.file} alt="cat" />`;
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dogResult.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    });
}
