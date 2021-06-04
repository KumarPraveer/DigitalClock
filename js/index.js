function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h < 10 ? (h = "0" + h) : h;
  m < 10 ? (m = "0" + m) : m;
  s < 10 ? (s = "0" + s) : s;

  document.getElementById("digitalClock").innerHTML =
    h + ":" + m + ":" + s + " " + session;
  setTimeout(showTime, 1000);
}
showTime();
