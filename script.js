// use moment to display current date at top of planner
var currentDay = moment();
$("#currentDay").text(moment().format("MMMM Do YYYY"));

// storing user input and time stamp into local storage upon clicking save button
$(".saveBtn").on("click", function() {
    var time = $(this).siblings().attr("id");
    var text = $(this).siblings(".form-control").val();
    localStorage.setItem(time, text);
    console.log(time, text);
});

// loading saved input from localstorage for each hour block
$("#9_TA").val(localStorage.getItem("9_clock"));
$("#10_TA").val(localStorage.getItem("10_clock"));
$("#11_TA").val(localStorage.getItem("11_clock"));
$("#12_TA").val(localStorage.getItem("12_clock"));
$("#13_TA").val(localStorage.getItem("13_clock"));
$("#14_TA").val(localStorage.getItem("14_clock"));
$("#15_TA").val(localStorage.getItem("15_clock"));
$("#16_TA").val(localStorage.getItem("16_clock"));
$("#17_TA").val(localStorage.getItem("17_clock"));


// change color of hour blocks based on current time of day
function timeChecker() {
    var currentTime = moment().hour();
    // using loop function to compare present, past, future time
    $(".timeBlock").each(function() {
        var timeBlock = parseInt($(this).children().attr("id"));
        console.log(timeBlock, currentTime)
        if (timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else if (timeBlock > currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
timeChecker();