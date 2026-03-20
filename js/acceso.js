const fechaCorrecta = "2025-09-20";

let intentos = 0;

const input = document.getElementById("fecha");
const btn = document.getElementById("btn");

btn.disabled = true;
btn.style.opacity = "0.5";

input.addEventListener("input", () => {
  btn.disabled = false;
  btn.style.opacity = "1";
});

function verificarFecha() {
  const valor = input.value;
  const mensaje = document.getElementById("mensaje");

  intentos++;

  if (valor === fechaCorrecta) {
    window.location.href = "quiz.html";
  } else {
    if (intentos === 1) {
      mensaje.textContent = "Creo que lo sabes… 💭";
    } else if (intentos === 2) {
      mensaje.textContent = "Es una fecha muy especial 💛";
    } else if (intentos === 3){
      mensaje.textContent = "Pista 1: cambió todo ✨";
    } else {
      mensaje.textContent = "Pista 2: Te regale tus ultimas flores como tu casi algo 🌻";
    }
  }
}