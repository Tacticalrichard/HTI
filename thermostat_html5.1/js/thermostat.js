$(document).ready(function () {

    //Variables
    var animSpeed = 300;

    //Wait for window load
    $(window).load(function () {
        //Add loader
        $(".se-pre-con").delay(1000).css("display", "none");
    });

    $(".container-fluid").load("home.html");
    $(window).bind("load", function () {
        $.getScript("js/home.js");
    });

    $(document).on("click", "#openNav", function () {
        $(".sidenav").width(250);
    });
    $(document).on("click", "#closeNav, #home, #weekplanning, #settings", function () {
        $(".sidenav").width(0);
    });

    $(document).on("click", "#thermostat", function (event) {
        event.preventDefault();
        $(".container-fluid").animate({
            "left": $(".container-fluid").width()
        }, animSpeed).promise().done(function () {
            $(".container-fluid").load("home.html", function () {
                $(".container-fluid").animate({
                    "left": 0
                }, animSpeed);
            });
        });
    });

    $(document).on("click", "#weekplanning", function (event) {
        event.preventDefault();
        $(".container-fluid").animate({
            "left": $(".container-fluid").width()
        }, animSpeed).promise().done(function () {
            $(".container-fluid").load("weekplanning.html", function () {
                $(".container-fluid").animate({
                    "left": 0
                }, animSpeed);
            });
        });
    });
});