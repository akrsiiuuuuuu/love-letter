let score = 0;

function start() {
    document.getElementById("welcome").hidden = true;
    document.getElementById("game").hidden = false;

    spawnHearts();
}

function spawnHearts() {

    const container = document.getElementById("hearts");

    for (let i = 0; i < 14; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "💗";
        heart.className = "heart";

        heart.style.left = Math.random() * 90 + "vw";

        heart.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        setTimeout(() => {
            container.appendChild(heart);
        }, i * 500);


        heart.onclick = function () {

            score++;

            document.getElementById("score").innerHTML =
                `Collected Hearts : ${score}/14`;

            heart.remove();

            if (score === 14) {

                document.getElementById("game").hidden = true;
                document.getElementById("loading").hidden = false;

                setTimeout(() => {

                    document.getElementById("loading").hidden = true;
                    document.getElementById("letter").hidden = false;

                }, 3000);

            }

        };

    }

}

function openLetter() {
    document.getElementById("popup").style.display = "block";
}

function closeLetter() {
    document.getElementById("popup").style.display = "none";
}
