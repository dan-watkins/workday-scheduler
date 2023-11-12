$(function () {
  // Save button puts item in local storage. id is key, text area value as value //
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).siblings(".time-block").attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, description);
  });

  // this compares the current hour to the id of the textarea. Was having problems using the id from the div so just used the textarea //
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    if (blockHour === currentHour) {
      $(this).addClass("present");
    } else if (blockHour < currentHour) {
      $(this).removeClass("present");
      $(this).addClass("past");
    } else {
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

  // for each timeblock grab the id as the key and the description as the value for local storage to display //
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var description = localStorage.getItem(timeBlockId);
    $(this).val(description);
  });

  // date formatter for the header //
  setInterval(function () {
    var today = dayjs().format("YYYY-MM-DD hh:mm:ss");
    $("#currentDay").text(today);
  }, 1000);
});
