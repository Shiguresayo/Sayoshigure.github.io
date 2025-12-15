const symbols = ["🍒", "🍋", "🍊", "⭐"];

const reels = [
  document.getElementById("reel1"),
  document.getElementById("reel2"),
  document.getElementById("reel3")
];

const result = document.getElementById("result");
const button = document.getElementById("start");

button.addEventListener("click", () => {
  result.textContent = "";

  const values = reels.map(reel => {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[randomIndex];
    reel.textContent = symbol;
    return symbol;
  });

  if (values[0] === values[1] && values[1] === values[2]) {
    result.textContent = "🎉 当たり！";
  } else {
    result.textContent = "もう一回！";
  }
});
