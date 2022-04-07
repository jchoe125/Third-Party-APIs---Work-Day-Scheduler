//TODO use moment to display current date at top of planner

var currentDay = moment();
$("#currentDay").text(moment().format("MMMM Do YYYY"));

// TODO set variables for id elements using jQuery
var textarea9 = $("#9AM");
var textarea10 = $("#10AM");
var textarea11 = $("#11AM");
var textarea12 = $("#12PM");
var textarea13 = $("#1PM");
var textarea14 = $("#2PM");
var textarea15 = $("#3PM");
var textarea16 = $("#4PM");
var textarea17 = $("#5PM");

// TODO set variables using items retrieved from local storage
var textareaVal9 = localStorage.getItem("9AM");
var textareaVal10 = localStorage.getItem("10AM");
var textareaVal11 = localStorage.getItem("11AM");
var textareaVal12 = localStorage.getItem("12PM");
var textareaVal13 = localStorage.getItem("1PM");
var textareaVal14 = localStorage.getItem("2PM");
var textareaVal15 = localStorage.getItem("3PM");
var textareaVal16 = localStorage.getItem("4PM");
var textareaVal17 = localStorage.getItem("5PM");

// display values from local storage into text area
textarea9.val(textareaVal9);
textarea10.val(textareaVal10);
textarea11.val(textareaVal11);
textarea12.val(textareaVal12);
textarea13.val(textareaVal13);
textarea14.val(textareaVal14);
textarea15.val(textareaVal15);
textarea16.val(textareaVal16);
textarea17.val(textareaVal17);


// TODO change color of hour blocks based on current time of day
function timeChecker() {
    var currentTime = moment().hour();

    // using loop function to compare time
    $(".form-control").each(function() {
        var timeBlock = parseInt($(this).attr("id"));
        if (timeBlock < currentTime) {
            $(this).addClass("past")
        } else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

timeChecker();

//TODO add $("button").on("click", function(){} so that entry is saved into local storage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var textarea = $(this).prev();
    var id = textarea.attr("id");
    var value = textarea.val();
    localStorage.setItem(id, value);
});

//TODO add $("button").on("click, function(){} so that schedule is cleared upon clicking clear schedule button")
