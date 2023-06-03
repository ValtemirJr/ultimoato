export const startTimer = () => {
  let countDownDate = new Date("July 21, 2023 08:00:00").getTime();

  const timer = setInterval(function() {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = zeroLeft(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = zeroLeft(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = zeroLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = zeroLeft(Math.floor((distance % (1000 * 60)) / 1000));

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "AVISA O IML CHEGOU O GRANDE DIA";
    }
  }, 1000);

  const zeroLeft = (n) =>
    Math.floor(n).toString().padStart(2, '0');
};
