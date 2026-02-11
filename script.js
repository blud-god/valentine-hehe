const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");

let messages = [
  "nowp",
  "bleh",
  "niooo",
  "pls",
  "pls nio"
];

let index = 0;

// NO button chaos (fixed)
noBtn.addEventListener("mouseover", () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - 10; // prevent overflow
  const maxY = window.innerHeight - btnHeight - 10;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  noBtn.innerText = messages[index % messages.length];
  index++;
});


// YES button celebration
yesBtn.addEventListener("click", () => {
  // Clear the body and add a container that fills the screen
  document.body.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-color: #ff4d6d; /* pink background */
      color: white; /* text color white */
      font-family: Arial, sans-serif;
      text-align: center;
    ">
      <h1 style="color: white; font-size: 60px;">nyeheyy i love you🥺</h1>
      <img src="valentine.jpeg" 
           alt="Valentine Kitten" 
           style="max-width: 50%; border-radius: 15px; margin-top: 20px;">
    </div>
  `;

  // Flower raining effect
  function createFlower() {
    const flower = document.createElement("div");
    flower.innerText = "🌸";
    flower.style.position = "fixed";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "-50px";
    flower.style.fontSize = Math.random() * 30 + 20 + "px";
    flower.style.pointerEvents = "none";
    flower.style.zIndex = 9999;
    document.body.appendChild(flower);

    let fall = setInterval(() => {
      flower.style.top = parseInt(flower.style.top) + 5 + "px";
      if (parseInt(flower.style.top) > window.innerHeight) {
        clearInterval(fall);
        flower.remove();
      }
    }, 30);
  }

  for (let i = 0; i < 50; i++) {
    setTimeout(createFlower, i * 150);
  }
});

