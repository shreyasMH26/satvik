const app = document.getElementById("app");

const quizQuestions = [
{
    question: "What is Satvik’s best feature?",
    options: ["Smile 😁", "Kind Heart ❤️", "Funny Nature 😂", "All of the Above"],
    answer: 3
},
{
    question: "Satvik v2.0 main update?",
    options: ["More Love", "More Cuteness", "More Patience", "All Upgraded"],
    answer: 3
},
{
    question: "Who is the luckiest person?",
    options: ["Satvik", "The Developer 😌", "Both", "Universe"],
    answer: 2
}
];

let score = 0;
let currentQuestion = 0;

function createStars() {
    for (let i = 0; i < 80; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(star);
    }
}

function bootScreen() {
    createStars();
    app.innerHTML = `
    <div class="center fade">
        <pre>
Booting Satvik_v2.0...
Loading Love Modules...
Installing Happiness Patch...
Upgrade Complete ❤️
        </pre>
    </div>
    `;
    setTimeout(showMainPage, 3000);
}

function showMainPage() {
    app.innerHTML = `
    <div class="center fade glass">
        <h1>🚀 Satvik v2.0 Released</h1>
        <button onclick="startSurprise()">Launch Surprise 🎁</button>
    </div>
    `;
}

function startSurprise() {
    document.getElementById("bgMusic").play();
    floatingHearts();
    launchConfetti();
    showGallery();
}

function showGallery() {
    app.innerHTML = `
    <div class="center fade glass">
        <h1>Happy Birthday Satvik ❤️</h1>
        <img id="slide" src="images/1.jpg">
        <br>
        <button onclick="startQuiz()">Play Mini Quiz 🎮</button>
    </div>
    `;

    const photos = ["images/1.jpg","images/2.jpg","images/3.jpg"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % photos.length;
        document.getElementById("slide").src = photos[index];
    }, 2000);
}

function startQuiz() {
    score = 0;
    currentQuestion = 0;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showResult();
        return;
    }

    let q = quizQuestions[currentQuestion];

    let html = `<div class="center fade glass">
        <h1>Mini Quiz 🎮</h1>
        <p>${q.question}</p>`;

    q.options.forEach((opt, index) => {
        html += `<button class="option" onclick="checkAnswer(${index})">${opt}</button>`;
    });

    html += `</div>`;
    app.innerHTML = html;
}

function checkAnswer(index) {
    if (index === quizQuestions[currentQuestion].answer) score++;
    currentQuestion++;
    showQuestion();
}

function showResult() {
    app.innerHTML = `
    <div class="center fade glass">
        <h1>Quiz Completed 🎉</h1>
        <p>Your Score: ${score} / ${quizQuestions.length}</p>
        <h2>Certified Best Boyfriend 🏆</h2>
        <button onclick="startTypingMessage()">Final Message 💌</button>
    </div>
    `;
}

function startTypingMessage() {
    app.innerHTML = `
    <div class="center fade glass">
        <h1>💖 A Message For You 💖</h1>
        <div id="typingText" class="typing-container"></div>
        <br>
        <button onclick="downloadLetter()">Download Letter 📜</button>
        <button onclick="replay()">Replay Surprise 🔄</button>
    </div>
    `;

    floatingHearts();

    const message = `
Satvik,

You are not just version 2.0...
You are the best update life ever released.

Your smile fixes bad days.
Your presence feels like home.
Your heart? Pure gold.

No patch notes.
No bug fixes.
Just unlimited love.

Happy Birthday ❤️
Forever upgrading with you.
`;

    let i = 0;
    const speed = 35;
    const typingDiv = document.getElementById("typingText");

    function typeWriter() {
        if (i < message.length) {
            typingDiv.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

function downloadLetter() {
    const text = `Happy Birthday Satvik ❤️

You are my favorite human.
You are my best update.
Forever grateful for you.

— With Love`;

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Satvik_Love_Letter.txt";
    link.click();
}

function replay() {
    location.reload();
}

function floatingHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 400);
}

function launchConfetti() {
    let canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");

    let pieces = [];
    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 4
        });
    }

    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#ff4d6d";
        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.y += 2;
            if (p.y > canvas.height) p.y = 0;
        });
    }

    setInterval(draw, 20);
}

document.addEventListener("keydown", function(e) {
    if (e.key === "s" || e.key === "S") {
        alert("Secret Mode Activated 😏💖");
    }
});

bootScreen();