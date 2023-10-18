/*Functions for changing the images*/

function changeImage() {
  const image = document.getElementById("myImage");
  if (image.src.match("screen")) {
    image.src = "./images/screen.png";
  } else {
    image.src = "./images/screen.png";
  }
}

function change() {
  const image = document.getElementById("myInfo");
  if (image.src.match("screen-1")) {
    image.src = "./images/screen-1.png";
  } else {
    image.src = "./images/screen-1.png";
  }
}

function change40() {
  const image = document.getElementById("myInner");
  if (image.src.match("screen-2")) {
    image.src = "./images/screen-2.png";
  } else {
    image.src = "./images/screen-2.png";
  }
}

function change41() {
  const image = document.getElementById("myIn");
  if (image.src.match("screen-3")) {
    image.src = "./images/screen-3.png";
  } else {
    image.src = "./images/screen-3.png";
  }
}

function change42() {
  const image = document.getElementById("myInter");
  if (image.src.match("screen-4")) {
    image.src = "./images/screen-4.png";
  } else {
    image.src = "./images/screen-4.png";
  }
}

function change43() {
  const image = document.getElementById("myInters");
  if (image.src.match("screen-5")) {
    image.src = "./images/screen-5.png";
  } else {
    image.src = "./images/screen-5.png";
  }
}

/*Refresh*/
const refreshTimer = document.getElementById("refresh-timer");

let timerInSeconds = 0;

setInterval(() => {
  timerInSeconds += 1;

  refreshTimer.innerHTML = `Refreshing page in: ${timerInSeconds} seconds`;

  if (timerInSeconds >= 3) {
    window.location.reload();
  }
}, 9000);
