function updateTimer() {
  future = Date.parse("2021-12-30T00:00:00.000Z");
  now = new Date();
  diff = future - now;
  if (diff < 0) {
    document.querySelector(".mint-button").classList.remove("hidden");
    console.log(document.querySelector(".mint-button"));
    document.querySelector(".timer").classList.add("hidden");
  }
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer").innerHTML =
    "<div>" +
    "<p>" +
    d.toString().padStart(2, "0") +
    "</p>" +
    "<span>days</span></div>" +
    "<div>" +
    "<p>" +
    h.toString().padStart(2, "0") +
    "</p>" +
    "<span>hours</span></div>" +
    "<div>" +
    "<p>" +
    m.toString().padStart(2, "0") +
    "</p>" +
    "<span>minutes</span></div>" +
    "<div>" +
    "<p>" +
    s.toString().padStart(2, "0") +
    "</p>" +
    "<span>seconds</span></div>";
}

setInterval("updateTimer()", 1000);
