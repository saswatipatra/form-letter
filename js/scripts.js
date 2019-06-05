$(document).ready(function() {
  $("#name-form").submit(function(event) {
    var inputName = $("input#name").val();

    $(".name").text(inputName);

    $("#letter").show();

    event.preventDefault();
  });
});
