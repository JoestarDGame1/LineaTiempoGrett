<<<<<<< HEAD
const seleccionadas = preguntas.sort(() => 0.5 - Math.random()).slice(0, 10);

let index = 0;
let puntaje = 0;

function mostrarPregunta() {
  const q = seleccionadas[index];
  const div = document.getElementById("quiz");

  div.innerHTML = `
    <h3>${q.pregunta}</h3>
    ${q.opciones.map((op, i) => `
      <button onclick="responder(${i})">${op}</button>
    `).join("")}
  `;
}

function responder(i) {
  if (i === seleccionadas[index].correcta) {
    puntaje++;
  }
  index++;

  if (index < seleccionadas.length) {
    mostrarPregunta();
  } else {
    if (puntaje >= 8) {
      window.location.href = "timeline.html";
    } else {
      alert("Casi… inténtalo otra vez 💛");
      location.reload();
    }
  }
}

=======
const seleccionadas = preguntas.sort(() => 0.5 - Math.random()).slice(0, 10);

let index = 0;
let puntaje = 0;

function mostrarPregunta() {
  const q = seleccionadas[index];
  const div = document.getElementById("quiz");

  div.innerHTML = `
    <h3>${q.pregunta}</h3>
    ${q.opciones.map((op, i) => `
      <button onclick="responder(${i})">${op}</button>
    `).join("")}
  `;
}

function responder(i) {
  if (i === seleccionadas[index].correcta) {
    puntaje++;
  }
  index++;

  if (index < seleccionadas.length) {
    mostrarPregunta();
  } else {
    if (puntaje >= 8) {
      window.location.href = "timeline.html";
    } else {
      alert("Casi… inténtalo otra vez 💛");
      location.reload();
    }
  }
}

>>>>>>> 6927f25f480e3e1fac3ecbfb849bd618dad22c0f
mostrarPregunta();