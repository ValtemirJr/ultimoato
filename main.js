// Set the date we're counting down to
var countDownDate = new Date("July 21, 2023 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = zeroLeft(Math.floor(distance / (1000 * 60 * 60 * 24)));
  var hours = zeroLeft(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = zeroLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = zeroLeft(Math.floor((distance % (1000 * 60)) / 1000));

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

const zeroLeft = (n) =>
  Math.floor(n).toString().padStart(2, '0');