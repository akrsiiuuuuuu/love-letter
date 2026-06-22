let score = 0;
let target = 14;
let rain;

function start() {
    document.getElementById("welcome").hidden = true;
    document.getElementById("game").hidden = false;

    rain = setInterval(createHeart, 200);
}

function createHeart() {

    const hearts = document.getElementById("hearts");

    let heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "-50px";

    hearts.appendChild(heart);

    let y = -50;

    let fall = setInterval(()=>{

        y += 3;

        heart.style.top = y + "px";

        if(y > window.innerHeight){

            clearInterval(fall);
            heart.remove();

        }

    },20);


    heart.onclick = ()=>{

        clearInterval(fall);

        score++;

        document.getElementById("score").innerHTML =
        `Collected Hearts : ${score}/${target}`;

        heart.remove();


        if(score >= target){

            clearInterval(rain);

            document.getElementById("game").hidden = true;
            document.getElementById("loading").hidden = false;

            setTimeout(()=>{

                document.getElementById("loading").hidden = true;
                document.getElementById("letter").hidden = false;

            },3000);

        }

    }

}
