const text = document.getElementById("text");
const container = document.getElementById("container");
const hint = document.getElementById("hint");
const background = document.querySelector(".background");

const scenes = [

`I don’t just love you.`,

`I think about you every second.
When I wake up.
When I sleep.`,

`When you don’t call…
I act normal.
But inside I’m waiting.`,

`I overthink.
I get scared.
What if I lose you?`,

`I replay our moments.
The way you looked at me.
The way you held me.`,

`Sometimes I read our chats again.
Sometimes I just miss you for no reason.`,

`I know I overreact sometimes.
But it’s never because I don’t love you.`,

`It’s because I love you too much.`,

`You make me feel safe.
You make me feel chosen.`,

`And I don’t keep backup plans.
It’s just you.`,

`Even on days I pretend I don’t care…
I choose you.`,

`You are not just my boyfriend.
You are my safest place.`,

`And even when you're busy building your world…`,

`I’m still here.
Not going anywhere.`,

`But before I say anything else…`,

`Close your eyes.`,

`Make a wish.`,

`Tell me when you're done.`
];

let index = 0;
let typing = false;

function typeWriter(content) {
    typing = true;
    text.innerHTML = "";
    let i = 0;

    function type() {
        if (i < content.length) {
            text.innerHTML += content.charAt(i);
            i++;
            setTimeout(type, 25);
        } else {
            typing = false;
        }
    }

    type();
}

function nextScene() {
    if (typing) return;

    index++;

    if (index < scenes.length) {
        container.classList.add("fade");

        setTimeout(() => {
            typeWriter(scenes[index]);
            container.classList.remove("fade");
        }, 500);

        if (scenes[index] === "Tell me when you're done.") {
            hint.innerText = "Tap when you're ready";
        }

    } else {
        showFinal();
    }
}

function showFinal() {
    container.classList.add("fade");

    setTimeout(() => {
        text.innerHTML = `
        I hope it comes true.<br><br>
        Happy Birthday, <span class="glow">Satvik</span>.<br><br>
        I’m proud of you.<br>
        And I’m not going anywhere.<br><br>

        <span class="signature">
    — With love,<br>
    <span class="signature-name">Soni</span>
</span>
        `;

        container.classList.remove("fade");
        hint.style.display = "none";

        background.style.background =
        "linear-gradient(-45deg, #24143b, #3b1f5c, #4c2a7a, #2b1a4d)";

        document.body.style.filter = "brightness(1.15)";

    }, 500);
}

document.body.addEventListener("click", nextScene);

typeWriter(scenes[index]);