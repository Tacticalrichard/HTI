//Variables
var saver;

//Initializers
getWeekProgram();
getProgram(daySelect);
refresh();
ifSwitch();

$(document).on("click", ".switchadder", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("add.html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});

$(document).on("click", ".switchbox i", function (event) {
    event.preventDefault();
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("weekdays/" + daySelect + ".html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});

//Validates input
function validateSwitch(starter, ender) {
    $(".error1").removeClass("show");
    $(".error2").removeClass("show");
    $(".error3").removeClass("show");
    $(".error4").removeClass("show");
    $(".error5").removeClass("show");

    //Adds input pattern (HH:MM)
    var rege = new RegExp('^([0-1][0-9]|2[0-3]):([0-5][0-9])$');

    //Checks pattern
    if (!(rege.test(starter)) || !(rege.test(ender))) {
        $(".error4").addClass("show");
    } else {
        //both empty
        if (starter == "" && ender == "") {
            $(".error1").addClass("show");
        }
        //starting time empty
        else if (starter == "") {
            $(".firstinput .error1").addClass("show");
        }
        //ending time empty
        else if (ender == "") {
            $(".secondinput .error1").addClass("show");
        }
        //starting time larger than ending time
        else if (starter >= ender) {
            $(".error3").addClass("show");
        }
        //maximum number of switches
        else if (getProgram(daySelect).length === 5) {
            $(".error2").addClass("show");
        }
        else if (starter == '23:59' || ender == '24:00') {
            $(".error5").addClass("show");
        }
        else {
            addSwitch();
        }
    }
}

function ifSwitch() {
    if (getProgram(daySelect).length == 0) {
        $(".list-group").text("You don't have any switches, add them by pressing the button below!");
    }
}

//Add a switch for selected day (weekplanning.js:daySelect)
function addSwitch() {
    saver = get("weekProgramState", "week_program_state");
    $(".hide1").text($("#inputStart").val());
    $(".hide2").text($("#inputEnd").val());
    addPeriod(daySelect, $(".hide1").text(), $(".hide2").text());
    setWeekProgram();
    refresh();
    correctProgram();
    goBack();
}

function goBack() {
    $(".container-fluid").animate({
        "left": $(".container-fluid").width()
    }, animSpeed).promise().done(function () {
        $(".container-fluid").load("weekdays/" + daySelect + ".html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
}

function correctProgram() {
    put("weekProgramState", "week_program_state", saver);
}

function removeSwitch(item) {
    saver = get("weekProgramState", "week_program_state");
    var switchNumber = $(item).parent().attr("id");
    switchNumber = switchNumber.match(/\d+/);
    removePeriod(daySelect, switchNumber);
    refresh();
    ifSwitch();
    correctProgram();
}

function refresh() {
    for (var i = 0; i < 10; i++) {
        $("#item" + i).css("display", "none");
    }

    var dayProgram = getProgram(daySelect);
    var n = 0;
    for (var i = 0; i < dayProgram.length; i++) {
        $("#item" + n).css("display", "block");
        $("#time" + n).text(dayProgram[i]);
        n++
    }
}