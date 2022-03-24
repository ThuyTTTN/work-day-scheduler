// header date
$("#currentDay").text(moment().format("LLLL"));




    
// !!This works!!  Able to enter text 
//get current text of p element and create a new textarea so user can enter tasks
// $(".list-task").on("click", "p", function(){
//     //get current text of p element
//     var text = $(this)
//     .text()
//     .trim();

//     // create new textarea by replacing 'p'
//     var textInput = $("<textarea>")
//     .addClass("text-box")
//     .val(text);
//     $(this).replaceWith(textInput);
// });

$(document).ready(function() {
    // saveBtn on click  
    $(".saveBtn").on("click", function () {
        // Get values of the description in jQuery
        var text = $(this).siblings(".list-task").val();
        var time = $(this).parent().attr("id");

        // Save text in localStorage
        localStorage.setItem(time, text);
    });
});
 

    // loop over time blocks
    // $(".time-block").each(function() {
    //     var blockTime = parseInt($(this).attr("id").split("hour")[1]);


        // To check the time and add the classes for background indicators
    //     if (blockTime < timeNow) {
    //         $(this).removeClass("future");
    //         $(this).removeClass("present");
    //         $(this).addClass("past");
    //     }
    //     else if (blockTime === timeNow) {
    //         $(this).removeClass("past");
    //         $(this).removeClass("future");
    //         $(this).addClass("present");
    //     }
    //     else {
    //         $(this).removeClass("present");
    //         $(this).removeClass("past");
    //         $(this).addClass("future");
    //     }
    // })










// $(".saveBtn").click(function() {
//     var taskText = $(this).siblings(".list-task").val();
//     saveTasks();
// })
