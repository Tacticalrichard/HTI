var startHour = $(".hide1").text($("#inputStart").val());
var endHour = $(".hide2").text($("#inputEnd").val());


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
        $(".container-fluid").load("/weekdays/" + daySelect + ".html", function () {
            $(".container-fluid").animate({
                "left": 0
            }, animSpeed);
        });
    });
});

setDefault();
getWeekProgram();
getProgram(daySelect);
put('weekProgramState', 'week_program_state', 'on');


//Add a switch for selected day (weekplanning.js:daySelect)
function addplus() {
      $(".hide1").text($("#inputStart").val());
      $(".hide2").text($("#inputEnd").val());
      addPeriod(daySelect, $(".hide1").text(), $(".hide2").text());
      //$("").html("<img src='images/sun.png' width='50px' /><img src='images/moon.png' width='50px' onclick=\"remove();\" /> &nbsp;<input type='button' style='font-size:18px;margin-right:20px;font-weight:bold' value='Remove' onclick=\"remove('');\" /><br />");
}



function save() {
    var one = document.getElementById('inputStart').value;
    var two = document.getElementById('inputEnd').value;
    /*add various types of checks here*/
    if (one != "" && two != "") {
        sessionStorage.setItem(one, two);
        display();
        document.getElementById('inputStart').value = "";
        document.getElementById('inputEnd').value = "";
    }
}


function display() {
    var rightbox = document.getElementById('test');
    rightbox.innerHTML = "";
    for (var x = 0; x < sessionStorage.length; x++) {
        var a = sessionStorage.key(x);
        var b = sessionStorage.getItem(a);
        /*add sorting here*/
        rightbox.innerHTML += "<img src='images/sun.png' width='50px' /> " + a + " <img src='images/moon.png' width='50px' onclick=\"remove();\" /> " + b +
            "&nbsp;<input type='button' style='font-size:18px;margin-right:20px;font-weight:bold' value='Remove' onclick=\"remove('" + a + "');\" /><br />";
    }
}