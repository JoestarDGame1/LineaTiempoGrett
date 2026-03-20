const container = document.getElementById("timeline");

// CREAR EVENTOS
momentos.forEach((m, i) => {
  const div = document.createElement("div");

  div.classList.add("evento");

  if (i % 2 === 0) {
    div.classList.add("left");
  } else {
    div.classList.add("right");
  }

  div.innerHTML = `
    <div class="contenido">
      <h3>${m.fecha}</h3>
      <p>${m.texto}</p>
      <img src="${m.imagen}">
    </div>
  `;

  container.appendChild(div);
});

// ANIMACIÓN AL SCROLL
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
