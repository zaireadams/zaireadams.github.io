$(document).ready(function() {
  setInterval(function() {
    var time = new Date();
    var hour = time.getHours() % 12;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    $(".hours").css("background-color", "rgb(40, 180, " + hour*10 + ")");
    $(".minutes").css("background-color", "rgb(40, 180, " + minutes*4 + ")");
    $(".seconds").css("background-color", "rgb(40, 180, " + seconds*4 + ")");
  }, 1000);
});