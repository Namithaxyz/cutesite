
function goPage2(listen) {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");

  if (listen) {
    document.getElementById("title2").innerText = "Yayyy 💕";
    document.getElementById("text2").innerHTML =
      "I'm sorry honeyyy 💖<br>Please forgive me 🌸<br>ILOVEYOUUU with my whole heart";
  } else {
    document.getElementById("title2").innerText = "Aww 🥺";
    document.getElementById("text2").innerHTML =
      "Please don't ignore me 😭<br>You are important to me 💗";
  }
}

function goPage3() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
}
let bubbleCount = 0;

const bubbleInterval = setInterval(() => {
  if (bubbleCount >= 35) {   // 👈 more bubbles
    clearInterval(bubbleInterval);
    return;
  }

  const bubble = document.createElement("span");
  const size = Math.random() * 30 + 10;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = (Math.random() * 3 + 5) + "s";

  document.querySelector(".bubbles").appendChild(bubble);

  setTimeout(() => bubble.remove(), 9000);

  bubbleCount++;
}, 200);   // 👈 faster spawn


