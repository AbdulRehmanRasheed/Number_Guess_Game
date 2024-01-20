"use strict";

let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secertNumber;

document.querySelector(".btn-check").addEventListener("click", function () {
    const onevalue = Number(document.querySelector('.Guess').value);
    console.log(onevalue, typeof onevalue);


    if (!onevalue) {
        document.querySelector('.massage').textContent = "😧 No Number..";
    }
    // when player wins
    else if (onevalue === secertNumber) {

        document.querySelector('.massage').textContent = "🎉 Correct Number..";

        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '10rem';
        document.querySelector('.number').textContent = secertNumber;
        // document.querySelector('.highscore').textContent = score;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        //when guess is high or low
    } else if (onevalue !== secertNumber) {
        if (score > 1) {
            document.querySelector('.massage').textContent = onevalue > secertNumber ? "📈 High Number.." : "📉 Low Number..";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }/*
    else if (onevalue > secertNumber) {
        if (onevalue > 1) {
            document.querySelector(".massage").textContent = "📈 High Number..";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.massage').textContent = "☹You lost the game..";
        }
    } else if (onevalue < secertNumber) {
        if (onevalue > 1) {
            document.querySelector(".massage").textContent = "📉 Low Number..";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.massage').textContent = "☹You lost the game..";
        }
    }*/
});


//Again button
document.querySelector('.top-left').addEventListener("click", function () {
    score = 20;
    secertNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.massage').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.Guess').value = ' ';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = "#222";
});