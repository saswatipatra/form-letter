$(document).ready(function() {
  $("#name-form").submit(function(event) {
    var inputName = $("input#name").val();
    var inputAddress1 = $("input#address1").val();
    var inputAddress2 = $("input#address2").val();
    var inputCity = $("input#city").val();
    var inputState = $("input#state").val();
    var inputZip = $("input#zip").val();
    var inputCountry = $("input#country").val();

    $(".name").text(inputName);
    $(".address1").text(inputAddress1);
    $(".address2").text(inputAddress2);
    $(".city").text(inputCity);
    $(".state").text(inputState);
    $(".zip").text(inputZip);
    $(".country").text(inputCountry);

    $("#letter").show();

    event.preventDefault();
  });
});
