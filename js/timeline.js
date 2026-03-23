const container = document.getElementById("timeline");

function esVideo(ruta) {
  return ruta.toLowerCase().endsWith(".mp4");
}

momentos.forEach((m, i) => {
  const div = document.createElement("div");

  div.classList.add("evento");

  if (i % 2 === 0) {
    div.classList.add("left");
  } else {
    div.classList.add("right");
  }

  let media;

  if (esVideo(m.imagen)) {
    media = `
      <video class="media" autoplay muted loop playsinline>
        <source src="${m.imagen}" type="video/mp4">
        Tu navegador no soporta video
      </video>
    `;
  } else {
    media = `<img class="media" src="${m.imagen}">`;
  }

  div.innerHTML = `
    <div class="contenido">
      <h3>${m.fecha}</h3>
      <p>${m.texto}</p>
      ${media}
    </div>
  `;

  container.appendChild(div);
});

const elementos = document.querySelectorAll(".evento, .final");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));