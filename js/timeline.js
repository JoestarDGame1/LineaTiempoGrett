const container = document.getElementById("timeline");

let imagenes = [];

momentos.forEach((m, i) => {
  const div = document.createElement("div");
  div.classList.add("evento");

  if (i % 2 === 0) {
    div.classList.add("left");
  } else {
    div.classList.add("right");
  }

  const img = new Image();
  img.src = m.imagen;
  imagenes.push(img);

  div.innerHTML = `
    <div class="contenido">
      <h3>${m.fecha}</h3>
      <p>${m.texto}</p>
      <img src="${m.imagen}">
    </div>
  `;

  container.appendChild(div);
});

let cargadas = 0;
let total = imagenes.length;

// 🔥 seguridad: máximo espera 2 segundos
setTimeout(() => {
  document.querySelector(".timeline").style.opacity = "1";
  document.body.style.opacity = "1";
}, 2000);

imagenes.forEach(img => {
  img.onload = img.onerror = () => {
    cargadas++;

    if (cargadas === total) {
      document.querySelector(".timeline").style.opacity = "1";
      document.body.style.opacity = "1";
    }
  };
});

window.onload = () => {
  document.body.style.opacity = "1";
};
