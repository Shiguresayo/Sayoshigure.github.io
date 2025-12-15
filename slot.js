const images = ["pamo1.jpg", "pamo2.jpg", "pamo3.jpg"];
const reels = document.querySelectorAll(".reel");
const start = document.getElementById("start");
const result = document.getElementById("result");

let timers = [];
let spinning = false;

function spinReel(reel, speed) {
  let index = 0;
  return setInterval(() => {
    index = Math.floor(Math.random() * images.length);
    reel.src = images[index];
  }, speed);
}

start.addEventListener("click", () => {
  if (spinning) return;

  spinning = true;
  start.disabled = true;
  start.textContent = "STOP";
  result.textContent = "";

  // 回転開始
  reels.forEach((reel, i) => {
    timers[i] = spinReel(reel, 80 + i * 40);
  });

  // 2秒後に停止
  setTimeout(() => {
    timers.forEach(clearInterval);
    start.textContent = "START";
    start.disabled = false;
    spinning = false;

    // 判定
 const values = [...reels].map(r =>
  r.src.split("/").pop()
);

if (values.every(v => v === values[0])) {
  result.textContent = "🎉 当たり！ 🎉";
} else {
  result.textContent = "はずれ";
}

  }, 2000);
});
