//flash messages
setTimeout(function () {
  $("#flash-msg").fadeOut("slow");
}, 5000);

setTimeout(function () {
  $("#success").fadeOut("slow");
}, 5000);

setTimeout(function () {
  $("#error").fadeOut("slow");
}, 5000);

$('.carousel').carousel({
  interval: 2000
})

