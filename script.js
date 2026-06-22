let score = 0;
let gameEnded = false;

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


        // Hapus otomatis jika sudah jatuh
        setTimeout(()=>{
            heart.remove();
        },6000);


        heart.onclick = function(){

            if(gameEnded) return;

            score++;

            document.getElementById("score").innerHTML =
            `Collected Hearts : ${score}`;

            heart.remove();


            // Ganti 50 sesuka hati
            if(score >= 50){

                gameEnded = true;

                document.getElementById("game").hidden = true;
                document.getElementById("loading").hidden = false;


                setTimeout(()=>{

                    document.getElementById("loading").hidden = true;
                    document.getElementById("letter").hidden = false;

                },3000);

            }

        }

    },300);

}


function openLetter(){

    document.getElementById("popup").style.display = "block";

}


function closeLetter(){

    document.getElementById("popup").style.display = "none";

}
