const AllHeart = document.querySelector(".heart");
const score = document.querySelector(".score");
const firstValue = document.querySelector(".first-value");
const secondValue = document.querySelector(".second-value");
const inputValue = document.querySelector("input");
const reaction = document.querySelector(".reaction");
const submit = document.querySelector(".btn");
const gameOver = document.querySelector(".container2");

// heart Section -------------------------------
let heart = 3;
function myheart() {
    let heartSum = "";
    for (let i = 1; i <= heart; i++) {
        heartSum += "❤️";
    }
    AllHeart.innerText = heartSum;
}
myheart();

// score -----------------------------------------------
let scoreData = 0;
score.innerText = scoreData;

// Value section -----------------------------------------------
let val1;
let val2;
function sum() {
    val1 = Math.floor(Math.random() * 11);
    val2 = Math.floor(Math.random() * 11);
    firstValue.innerText = val1;
    secondValue.innerText = val2;
}
sum();

// clear Meassge section ------------------------------------------
function clear() {
    setTimeout(function () {
        reaction.innerText = "";
    }, 2000);
}

// start Again Section --------------------------------------------------
function startAgain() {
    gameOver.style.visibility = "hidden";
    gameOver.style.transform = "translate(-50%,-50%) scale(0.1)";
    heart=3;
    myheart();
    scoreData = 0;
    score.innerText = scoreData;
    sum();
}

// Check Section -------------------------------
function check() {
    if (inputValue.value.length != 0) {
        if (val1 * val2 == inputValue.value) {
            scoreData++;
            reaction.innerText = `${inputValue.value} is right Answer > Good`;
            inputValue.value = "";
            clear();
            sum();
        } else {
            scoreData--;
            reaction.innerText = `${inputValue.value} is Worng Answer > try Again`;
            inputValue.value = "";
            clear();
            heart--;
            myheart();
            if (heart == 0) {
                gameOver.style.visibility = "visible";
                gameOver.style.transform = "translate(-50%,-50%) scale(1)";
            }

        }
        score.innerText = scoreData;
    } else {
            reaction.innerText = `Please Enter the Answer`;
            clear();
    }
}
