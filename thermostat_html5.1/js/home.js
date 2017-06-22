$("#slider").roundSlider({
    radius: 125,
    width: 0.1,
    circleShape: "full",
    startAngle: 90,
    handleSize: 25,
    handleShape: "round",
    sliderType: "min-range",
    min: 5,
    max: 30,
    step: 0.1,
    value: 21
});

$(".daynightSlider1").slider({
    orientation: 'vertical',
    tooltip_position: 'right',
    precision: 1,
    reversed: true,
    min: 5,
    max: 30,
    step: 0.1,
    value: 23,
});
$(".daynightSlider2").slider({
    orientation: 'vertical',
    tooltip_position: 'left',
    precision: 1,
    reversed: true,
    min: 5,
    max: 30,
    step: 0.1,
    value: 18,
});

$(document).on("slide", "#slider1", function (slideEvt) {
    $("#sliderVal1").text(slideEvt.value + 'C');
});
$(document).on("slide", "#slider2", function (slideEvt) {
    $("#sliderVal2").text(slideEvt.value + 'C');
});
$('.daynightSlider').slider({
    formatter: function (value) {
        return value + 'C';
    }
});

function addDayTemp() {
    var value = value + 0.1;
    //Slider("#slider1").setValue(value)
    $("#slider1").slider("setValue", value)
}




