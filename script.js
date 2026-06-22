let score = 0;
const target = 14;
let rain = null;
let finished = false;

function start() {

    document.getElementById("welcome").hidden = true;
    document.getElementById("game").hidden = false;

    rain = setInterval(createHeart, 250);
}

function createHeart() {

    if (finished) return;

    const container = document.getElementById("hearts");

    const heart = document.createElement("div");

    heart.innerHTML = "💗";
    heart.className = "heart";

    heart.style.left = Math.random() * 95 + "vw";
    heart.style.top = "-50px";

    container.appendChild(heart);

    let topPos = -50;

    const fall = setInterval(() => {

        topPos += 4;

        heart.style.top = topPos + "px";

        if (topPos > window.innerHeight) {

            clearInterval(fall);
            heart.remove();

        }

    },20);


    heart.onclick = () => {

        clearInterval(fall);

        score++;

        document.getElementById("score").innerHTML =
        `Collected Hearts : ${score}/${target}`;

        heart.remove();

        if(score >= target){

            finished = true;

            clearInterval(rain);

            document.getElementById("game").hidden = true;
            document.getElementById("loading").hidden = false;

            setTimeout(()=>{

                document.getElementById("loading").hidden = true;
                document.getElementById("letter").hidden = false;

            },3000);

        }

    };

}



function openLetter(){

document.getElementById("popup").style.display = "flex";

}



function closeLetter(){

document.getElementById("popup").style.display = "none";

}
