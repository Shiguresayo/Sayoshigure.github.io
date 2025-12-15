const images = [
  "pamo1.jpg",
  "pamo2.jpg",
  "pamo3.jpg"
];

const reel = document.getElementById("reel");
const start = document.getElementById("btn");
const result = document.getElementById("result");

let index = 0;
let timer = null;
let state = "idle";

btn.addEventListener("click", () => {

  if (state === "idle") {

    
    state = "spinning";
    btn.textContent = "STOP";
    result.textContent = "";

    timer = setInterval(() => {
      index = (index + 1) % images.length;
      reel.src = images[index];
    }, 100);

  } else if (state === "spinning") {

    
    btn.disabled = true;

    setTimeout(() => {
      clearInterval(timer);
      state = "idle";
      btn.textContent = "START";
      btn.disabled = false;


      if (images[index].includes("star")) {
        result.textContent = "✨ 当たり！ ✨";
      } else {
        result.textContent = "はずれ";
      }

    }, 2000);
  }
});
