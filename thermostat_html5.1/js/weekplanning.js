//Variables
var animSpeed = 300;
var daySelect;

//Executables
$(document).on("click", "#monday", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("/thermostat_html5.1/weekdays/monday.html", function () {
            daySelect = "Monday";
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
        $(".container-fluid").load("/thermostat_html5.1/weekdays/tuesday.html", function () {
            daySelect = "Tuesday";
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
        $(".container-fluid").load("/thermostat_html5.1/weekdays/wednesday.html", function () {
            daySelect = "Wednesday";
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
        $(".container-fluid").load("/thermostat_html5.1/weekdays/wednesday.html", function () {
            daySelect = "Thursday";
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
        $(".container-fluid").load("/thermostat_html5.1/weekdays/friday.html", function () {
            daySelect = "Friday";
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
        $(".container-fluid").load("/thermostat_html5.1/weekdays/saturday.html", function () {
            daySelect = "Saturday";
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
        $(".container-fluid").load("/thermostat_html5.1/weekdays/sunday.html", function () {
            daySelect = "Sunday";
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});

var dayItem;
var dayList;
var n = 0;
for (var i = 0; i < 7; i++) {
    dayItem = $("#box" + n).siblings().text();
    dayList = getProgram(dayItem).length;
    $("#box" + n).text("You currently have " + dayList + " switches active");
    n++
}