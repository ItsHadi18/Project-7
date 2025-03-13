// Digital Clock

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
function updateClock() {
  let time = new Date();
  hr.innerHTML = time.getHours();
  min.innerHTML = time.getMinutes();
  sec.innerHTML = time.getSeconds();
  if ((sec.innerHTML = time.getSeconds() < 10)) {
    sec.innerHTML = "0" + time.getSeconds();
  } else {
    sec.innerHTML = time.getSeconds();
    }
}
setInterval(updateClock, 1000);
