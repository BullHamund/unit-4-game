// psuedo code
// a game with 4 crystals and random result
// every crystal needs random number from 1-12
// a new random number should be generated every single time the game starts
// when clicking any crystal it should add to previoujs score to 
// until it equals the total score which is also randomly generated
// if it is greater than random magic number player loses and we start over
// if it is not equal we lose and increment loss counter
// if it is equal we increment a win counter

var loss = 0;
var win = 0;
var total = 0;
var magicNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
//var crystal = 


$(document).ready(function () {

    console.log(magicNumber);
    updateHtml();
    //$("#magicNumber").html(magicNumber);
    updateHtml();
   // $("#currScore").html(total);

    for (var i = 0; i < 4; i++) {
        var randNum = Math.floor(Math.random() * 12) + 1;
        
        var crystal = $("#crystal" + (i + 1));
        crystal.attr("data-value", randNum);
    }
    $("button").on("click", function () {
        //alert($(this).data("value"));
        //console.log($(this));
        //total += $(this).data("value");
        total += parseInt($(this).attr("data-value"));
        updateHtml();
        //$("#currScore").html(total);
        checkScore();
    })

});

function randomize() {
    for (var i = 0; i < 4; i++) {
        var randNum = Math.floor(Math.random() * 12) + 1;
        console.log(randNum);
        var crystal = $("#crystal" + (i + 1));
        crystal.attr("data-value", randNum);
    }
    magicNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
}

function checkScore() {
    console.log(total, magicNumber);
    if (total === magicNumber) {
        win++;
        updateHtml();
        //$("#win").html("Wins: " + win);
        console.log(win);
        //randomize();
        resetGame();
    } else if (total > magicNumber) {
        loss++;
        updateHtml();
        //$("#loss").html("Losses: " + loss);
        console.log(loss);
        //randomize();
        resetGame();

    }
}

function updateHtml() {
    $("#magicNumber").html(magicNumber);
    $("#currScore").html(total);
    $("#win").html("Wins: " + win);
    $("#loss").html("Losses: " + loss);

}

function resetGame() {
    total = 0;
    randomize();
    updateHtml();
    
}
