"use strict"

const daysSpan = $("#days");
const hoursSpan = $("#hours");
const minutesSpan = $("#minutes");
const secondsSpan = $("#seconds");
const charCount = $("#charCount");
const message = $("#message");

$("h3").click(function (e) {
        $(".collapseP").not($(e.target).next()).slideUp(500);
        $(e.target).next().slideToggle(500);
    });

$("#navToggle, #navList").click(function () {
    $("#navList").toggle(500);
});

message.on("input", function () {
    charCount.html(100 - message.val().length);
});

const then = new Date("April 1, 2023").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const duration = then - now;
    
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    
    daysSpan.html(days + " D");
    hoursSpan.html(hours + " H");
    minutesSpan.html(minutes + " M");
    secondsSpan.html(seconds + " S");
}, 1000);

