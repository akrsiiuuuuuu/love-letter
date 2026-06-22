let score = 0;
let gameEnded = false;

const target = 100000;

function start(){

    document.getElementById("welcome").hidden = true;
    document.getElementById("game").hidden = false;

    spawnHearts();

}

function spawnHearts(){

    const container = document.getElementById("hearts");

    setInterval(()=>{

        if(gameEnded) return;

        let heart = document.createElement("div");

        heart.innerHTML = "💗";
        heart.className = "heart";

        heart.style.left = Math.random()*95 + "vw";
        heart.style.animationDuration =
        (Math.random()*3+3)+"s";

        container.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);


        heart.onclick = function(){

            if(gameEnded) return;

            score++;

            document.getElementById("score").innerHTML =
            `Collected Hearts : ${score}/${target}`;

            heart.remove();

            if(score >= target){

                gameEnded = true;

                document.getElementById("game").hidden = true;
                document.getElementById("loading").hidden = false;

                setTimeout(()=>{

                    document.getElementById("loading").hidden = true;
                    document.getElementById("letter").hidden = false;

                },3000);

            }

        };

    },300);

}
