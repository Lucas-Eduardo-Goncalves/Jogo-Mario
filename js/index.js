const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const score = document.querySelector(".score");
const maxScore = document.querySelector(".maxScore");

let scorePoints = 0;
let pipeVelocity = 1.5;
const maxPoints = +localStorage.getItem("max-score-mario-lucas-dev") || 0;

maxScore.textContent = maxPoints;

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500)
}

function maior(num1, num2) {
  var maior = num1;
  if (num2 > maior) {
    maior = num2;
  }

  return maior;
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPositions = clouds.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPositions}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./assets/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
    localStorage.setItem("max-score-mario-lucas-dev", maior(maxPoints, scorePoints))
  }

  scorePoints = scorePoints + 1;
  score.textContent = scorePoints;
}, 10)

document.addEventListener("keydown", jump)