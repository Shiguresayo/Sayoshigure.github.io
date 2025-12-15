const images = ["pamo1.jpg","pamo2.jpg","pamo3.jpg"];
const reelInners = document.querySelectorAll(".reel-inner");
const btn = document.getElementById("startBtn");
const resultDiv = document.getElementById("result");

let positions = [0,0,0];
const imgHeight = 100; // スロット画像の高さ

btn.addEventListener("click", () => {
    btn.disabled = true;
    resultDiv.textContent = "";

    const speed = 20;      // 回転速度
    const spinFrames = 50; // スピン時間
    const stopDelays = [0, 10, 20]; 
    let frame = 0;
    let stopped = [false, false, false];

    function animate() {
        reelInners.forEach((inner, i) => {
            if(!stopped[i]){
                positions[i] += speed;

                // 下まで行ったらリセット
                if(positions[i] >= images.length * imgHeight){
                    positions[i] = 0;
                }

                inner.style.transform = `translateY(-${Math.floor(positions[i])}px)`;
            }
        });

        frame++;

        // 停止判定
        reelInners.forEach((inner, i) => {
            if(!stopped[i] && frame >= spinFrames + stopDelays[i]){
                const finalIndex = Math.floor(Math.random() * images.length);
                positions[i] = finalIndex * imgHeight;
                inner.style.transform = `translateY(-${positions[i]}px)`;
                stopped[i] = true;
            }
        });

        if(stopped.every(v => v)){
            const first = positions[0]/imgHeight;
            const allSame = positions.every(p => p/imgHeight === first);
            resultDiv.textContent = allSame ? "当たり！🎉" : "はずれ";
            btn.disabled = false;
        } else {
            requestAnimationFrame(animate);
        }
    }

    animate();
});
