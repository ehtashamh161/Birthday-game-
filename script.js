let startBtn = document.getElementById("startBtn");
let gameArea = document.getElementById("gameArea");
let box = document.getElementById("box");
let msg = document.getElementById("message");
let timerDisplay = document.getElementById("timer");
let character = document.getElementById("character");

// ✅ Set Your Friend's Name Here
let friendName = "Ali"; // ← change to your friend's name

let timeLeft = 10;
let timer;

// Confetti
function confettiBlast() {
    for (let i = 0; i < 50; i++) {
        let conf = document.createElement("div");
        conf.classList.add("confetti");
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.setProperty("--hue", Math.floor(Math.random() * 360));

        conf.style.animationDuration = (1 + Math.random() * 2) + "s";

        document.body.appendChild(conf);

        setTimeout(() => conf.remove(), 3000);
    }
}

// Floating hearts
function floatingHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight - 50 + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

// Start Game
startBtn.onclick = () => {
    document.getElementById("start-screen").classList.add("hidden");
    gameArea.classList.remove("hidden");
    character.classList.remove("hidden");

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            box.style.display = "none";
            msg.innerHTML = `
                ⏳ Time Over!<br>
                But Happy Birthday to ${friendName}! 🎂🎉
            `;
            msg.classList.remove("hidden");
        }
    }, 1000);
};

// Move box
box.addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);

    box.style.top = y + "px";
    box.style.left = x + "px";
});

// Win event
box.addEventListener("click", function () {
    clearInterval(timer);
    box.style.display = "none";

    confettiBlast();
    floatingHearts();

    msg.innerHTML = `
        🎉🎉 Happy Birthday ${friendName}! 🎉🎉 <br><br>
        🥳 You Won The Birthday Challenge! 🎂💖
    `;
    msg.classList.remove("hidden");
});