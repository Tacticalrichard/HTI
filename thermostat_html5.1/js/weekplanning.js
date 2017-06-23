//Variables
var animSpeed = 300;

//Executables
$(document).on("click", "#monday", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("/weekdays/monday.html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});

$(document).on("click", "#tuesday", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("/weekdays/tuesday.html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});
$(document).on("click", "#wednesday", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("/weekdays/wednesday.html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});
$(document).on("click", "#thursday", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("/weekdays/wednesday.html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});
$(document).on("click", "#friday", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("/weekdays/friday.html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});
$(document).on("click", "#saturday", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("/weekdays/saturday.html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});
$(document).on("click", "#sunday", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("/weekdays/sunday.html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});