//Variables
var currentTemp = get('currentTemperature', 'current_temperature');
var targetTemp = get('targetTemperature', 'target_temperature');
var dayTemp = get('dayTemperature', 'day_temperature');
var nightTemp = get('nightTemperature', 'night_temperature');
var wpState = get('weekProgramState', 'week_program_state');


//Error fix
put('weekProgramState', 'week_program_state', 'on');



//Initializes the sliders
$("#slider").roundSlider({
    radius: 105,
    width: 5,
    circleShape: "full",
    startAngle: 90,
    endAngle: 90,
    handleSize: 25,
    handleShape: "round",
    sliderType: "min-range",
    min: 5,
    max: 30,
    step: 0.1,
    value: targetTemp
});

$(".daynightSlider1").bootstrapSlider({
    orientation: 'vertical',
    tooltip_position: 'right',
    precision: 1,
    reversed: true,
    min: 5,
    max: 30,
    step: 0.1,
    value: dayTemp
});
$(".daynightSlider2").bootstrapSlider({
    orientation: 'vertical',
    tooltip_position: 'left',
    precision: 1,
    reversed: true,
    min: 5,
    max: 30,
    step: 0.1,
    value: nightTemp
});

//Reads the day
$("#readDay").text(get('day', 'current_day'));

//Check if week program is turned on or off
if (wpState === "off") {
    $(".toggler").addClass("off");
}

//Button to turn the week program on or off
$(".toggler").click(function (evt) {
    evt.stopImmediatePropagation();
    if ($(".toggler").hasClass("off")) {
        put('weekProgramState', 'week_program_state', 'on');
        $(".toggler").toggleClass("off");

    } else {
        $(".toggler").toggleClass("off");
        put('weekProgramState', 'week_program_state', 'off');
    }
});

//First temperature check
$("#currentbox").text(get('currentTemperature', 'current_temperature'));
$("#sliderVal1").text(get('dayTemperature', 'day_temperature'));
$("#sliderVal2").text(get('nightTemperature', 'night_temperature'));


//Change the values of the sliders according to the slider
$("#slider1").on("slide", function (slideEvt) {
    $("#sliderVal1").text(slideEvt.value);
    dayTemp = slideEvt.value;
});
$("#slider2").on("slide", function (slideEvt) {
    $("#sliderVal2").text(slideEvt.value);
    nightTemp = slideEvt.value;
});


//Copy of the weekplanning at that day


//$("#placeholder").plot([[[0, 0], [1, 1]]], { yaxis: { max: 1 } }).data("plot");



function addTargetTemp(mul) {
    targetTemp = Math.round(parseFloat(targetTemp + mul * 0.1) * 100) / 100;
    $("#slider").roundSlider('setValue', targetTemp);
}
function addDayTemp(mul) {
    dayTemp = Math.round(parseFloat(dayTemp + mul * 0.1) * 100) / 100;
    $(".daynightSlider1").bootstrapSlider('setValue', dayTemp);
    $("#sliderVal1").text(dayTemp);
}
function addNightTemp(mul) {
    nightTemp = Math.round(parseFloat(nightTemp + mul * 0.1) * 100) / 100;
    $(".daynightSlider2").bootstrapSlider('setValue', nightTemp);
    $("#sliderVal2").text(nightTemp);
}

function saveTemp() {
    put('targetTemperature', 'target_temperature', $("#slider .rs-tooltip").html());
    put('dayTemperature', 'day_temperature', dayTemp);
    put('nightTemperature', 'night_temperature', nightTemp);
    $("#currentbox").text(get('currentTemperature', 'current_temperature'));

    clockTemp();
}

function clockTemp() {
    count = 0;
    var x = setInterval(function () {
        $("#currentbox").text(get('currentTemperature', 'current_temperature'));
        if (count > 250) clearInterval(x);
        count++;
    }, 200);
}

function discardTemp() {
    targetemp = get('targetTemperature', 'target_temperature');
    dayTemp = get('dayTemperature', 'day_temperature');
    nightTemp = get('nightTemperature', 'night_temperature');
    $("#slider").roundSlider('setValue', targetTemp);
    $(".daynightSlider1").bootstrapSlider('setValue', dayTemp);
    $(".daynightSlider2").bootstrapSlider('setValue', nightTemp);
    $("#sliderVal1").text(dayTemp);
    $("#sliderVal2").text(nightTemp);
    $("#currentbox").text(get('currentTemperature', 'current_temperature'));
}