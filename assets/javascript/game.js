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


$(document).ready(function () {

    console.log(magicNumber);
    $("#magicNumber").html(magicNumber);



    $("#currScore").html(total);

    for (var i = 0; i < 4; i++) {
        var randNum = Math.floor(Math.random() * 12) + 1;
        console.log(randNum);
        var crystal = $("#crystal" + (i + 1));
        crystal.attr("data-value", randNum); 
    }
    $("button").on("click", function () {
        //alert($(this).data("value"));
        //console.log($(this));
        total += $(this).data("value");
        $("#currScore").html(total);
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
        $("#win").html("Wins: " + win);
        console.log(win);
        randomize();
    } else if (total > magicNumber) {
        loss++;
        $("#loss").html("Losses: " + loss);
        console.log(loss);
        randomize();
    }
}