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


$(document).ready(function() {
  setTimeout(function(){
    $(".alarmimage").addClass("alarm"); 
    $(".snooze").addClass("alarm");
  }, 5000);

  $(".button").click(function() { 
    $(".alarmimage").removeClass("alarm");
    $(".snooze").removeClass("alarm");
  });

});