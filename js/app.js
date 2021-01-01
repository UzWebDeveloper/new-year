// $.snowfall.start({
//   content: '&#10052',
//   interval: 60
// });
var countDownDate = new Date('Jan 1, 2022 00:00:00').getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60 )) / 1000);
  document.getElementById('dayOutput').innerHTML = days 
  document.getElementById('hoursOutput').innerHTML = hours 
  document.getElementById('minutesOutput').innerHTML = minutes 
  document.getElementById('secondsOutput').innerHTML = seconds 
})