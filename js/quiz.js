const seleccionadas = preguntas.sort(() => 0.5 - Math.random()).slice(0, 9);

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
    if (puntaje >= 7) {
      window.location.href = "timeline.html";
    } else {
      alert("Casi… inténtalo otra vez 💛");
      location.reload();
    }
  }
}

mostrarPregunta();