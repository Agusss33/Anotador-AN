const score1Element = document.getElementById("score1");
const score2Element = document.getElementById("score2");
const addPointTeam1Button = document.getElementById("btn1");
const addPointTeam2Button = document.getElementById("btn3");
const restPointTeam1Button = document.getElementById("btn2");
const restPointTeam2Button = document.getElementById("btn4");
const resetButton = document.getElementById("reset");

const elements = [];
for (let i = 1; i <= 6; i++) {
  elements.push(document.getElementById(i.toString()));
}
const elements2 = [];
for (let y = 7; y <= 12; y++) {
  elements2.push(document.getElementById(y.toString()));
}
let score1 = 0;
let score2 = 0;

addPointTeam1Button.addEventListener("click", () => {
  score1++;
  score1Element.textContent = score1;
  agregarBordes(score1);
});

restPointTeam1Button.addEventListener("click", () => {
  if (score1 > 0) {
    score1--;
    score1Element.textContent = score1;
    quitarBordes(score1 + 1);
  }
});

addPointTeam2Button.addEventListener("click", () => {
  score2++;
  score2Element.textContent = score2;
  agregarBordes2(score2);
});

restPointTeam2Button.addEventListener("click", () => {
  if (score2 > 0) {
    score2--;
    score2Element.textContent = score2;
    quitarBordes2(score2 + 1);
  }
});

resetButton.addEventListener("click", () => {
  window.location.reload();
});

function agregarBordes(score) {
  if (score <= 30) {
    const elementIndex = Math.ceil(score / 5) - 1;
    const element = elements[elementIndex];
    const classes = ["left", "top", "right", "bottom", "center"];
    const index = (score - 1) % 5;

    if (classes[index] === "center") {
      element.innerHTML = "/";
    }

    element.classList.add(classes[index]);
  } else {
    alert("Ganamos nosotros!!😎");
    score1 = 0;
    score1Element.textContent = score1;
    window.location.reload();
  }
}

function quitarBordes(score) {
  const elementIndex = Math.ceil(score / 5) - 1;
  const element = elements[elementIndex];
  const classes = ["left", "top", "right", "bottom", "center"];
  const index = (score - 1) % 5;

  for (let i = 0; i < classes.length; i++) {
    element.classList.remove(classes[index]);
    element.innerHTML = "";
  }
}

function agregarBordes2(score) {
  if (score <= 30) {
    const elementIndex = Math.ceil(score / 5) - 1;
    const element = elements2[elementIndex];
    const classes = ["left", "top", "right", "bottom", "center"];
    const index = (score - 1) % 5;

    if (classes[index] === "center") {
      element.innerHTML = "/";
    }

    element.classList.add(classes[index]);
  } else {
    alert("Ganaron Ellos!!😭");
    score2 = 0;
    score2Element.textContent = score2;
    window.location.reload();
  }
}

function quitarBordes2(score) {
  const elementIndex = Math.ceil(score / 5) - 1;
  const element = elements2[elementIndex];
  const classes = ["left", "top", "right", "bottom", "center"];
  const index = (score - 1) % 5;

  for (let i = 0; i < classes.length; i++) {
    element.classList.remove(classes[index]);
    element.innerHTML = "";
  }
}
