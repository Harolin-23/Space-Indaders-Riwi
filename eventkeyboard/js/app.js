const caja = document.querySelector(".caja");

let Cordenadas = {
  x: 0,
  y: 0,
  rotacionActual: 0,
};

let juegoEnCurso = true;

function inicio() {
  setTimeout(() => {
    document.addEventListener("keydown", function (event) {
      if (juegoEnCurso) {
        const tecla = event.key.toLowerCase();
        if (tecla === "w") {
          arriba();
        } else if (tecla === "s") {
          abajo();
        } else if (tecla === "a") {
          isquierda();
        } else if (tecla === "d") {
          derecha();
        }
        createParticle();
      }
    });
  }, 4000);
}

inicio();

function derecha() {
  Cordenadas.x += 40;
  move();
}

function isquierda() {
  Cordenadas.x -= 40;

  move();
}

function arriba() {
  Cordenadas.y -= 40;
  move();
  caja.style = `  filter: drop-shadow(16px 16px 10px rgba(0, 0, 0, 0.761));`;
}

function abajo() {
  Cordenadas.y += 40;
  move();
  caja.style = `filter: drop-shadow(16px 2px 1px rgba(0, 0, 0, 0.51))`;
}
moveParticles();

function move() {
  // Limitación en el eje x
  if (Cordenadas.x >= 360) {
    Cordenadas.x = 360;
  } else if (Cordenadas.x <= -360) {
    Cordenadas.x = -360;
  }

  caja.style.transform = `translate(${Cordenadas.x}%, ${Cordenadas.y}%)`;
  requestAnimationFrame(move);
  console.log("cube Eje x:", Cordenadas.x, "cube Eje y:", Cordenadas.y);
}

const container = document.querySelector(".zoneG");

function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  container.appendChild(particle);

  return particle;
}

function moveParticles() {
  const particles = document.querySelectorAll(".particle");
  const cubeRect = caja.getBoundingClientRect();

  particles.forEach((particle) => {
    const particleRect = particle.getBoundingClientRect();

    if (
      particleRect.left < cubeRect.right &&
      particleRect.top < cubeRect.bottom &&
      particleRect.right > cubeRect.left &&
      particleRect.bottom > cubeRect.top
    ) {
      lose();
    }



    const randomX = Math.random() * caja.offsetWidth + cubeRect.left;
    const randomY = Math.random() * caja.offsetHeight + cubeRect.top;

    let deltaX = randomX - particle.offsetLeft;
    let deltaY = randomY - particle.offsetTop;

    const speed = 1;
    particle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    console.log(
      "enemy x:",
      particle.offsetLeft,
      "enemy Y:",
      particle.offsetTop
    );
    cronometro()
  });
}

setInterval(moveParticles, 1000);

function lose() {
  Cordenadas.x = 0; 
  juegoEnCurso = false;

  reloader = document.querySelector(".mesage");
  botRel = document.querySelector(".Reload");

  if (botRel) {
  } else {
    const carga = document.createElement("div");
    carga.classList = "Reload";
    reloader.appendChild(carga);
  }

  adclick = document.querySelector(".Reload");
  adclick.addEventListener("click", () => {
    location.reload();
  });
}

let s = 0
let m = 0;
let h = 0;




const hora = document.querySelector(".horas")
const minutos = document.querySelector(".minutes")
const segundos = document.querySelector(".Segundos")


function cronometro(){

  s ++
  if(s == 60){
    s = 0
    m++
  }
  if(m == 59){
    m = 0
    h++
  }
  segundos.textContent = s
  minutos.textContent = m
  hora.textContent = h
}