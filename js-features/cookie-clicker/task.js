const doClick = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickSpeed = document.getElementById("clicker__speed");

const cookieClicker = function () {
  doClick.textContent++;
}

function changeSizeCookieDown () {
  if(cookie.width > 200) {
    cookie.width = 200;
  }
}

function changeSizeCookieUp () {
  cookieClicker();
  cookie.width = 215;
  setInterval(changeSizeCookieDown, 0);
}

cookie.onclick = changeSizeCookieUp;
