// header date
$("#currentDay").text(moment().format("LLLL"));

// localStorage the hr id and description text
$(document).ready(function() {
    // saveBtn on click  
    $(".saveBtn").on("click", function () {
        // Get values of the description in jQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in localStorage
        localStorage.setItem(time, text);
    });

    function trackTime() {
        //get current number hours
        var currentTime = moment().hour();
        console.log(currentTime);

        // loop time blocks
        $(".time-block").each(function() {
            var blockHr = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHr, currentTime);

            //check time:  conditional statement
            if (blockHr < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHr === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    trackTime();
})

