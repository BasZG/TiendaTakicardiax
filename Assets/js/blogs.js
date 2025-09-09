const blogs = [
  {
    id: 1,
    imagen: "https://via.placeholder.com/300x200?text=Blog+1",
    titulo: "Beneficios de beber Monster con responsabilidad",
    descripcion:
      "Conoce cómo Monster puede darte energía cuando la necesitas y qué cuidados debes tener.",
  },
  {
    id: 2,
    imagen: "https://via.placeholder.com/300x200?text=Blog+2",
    titulo: "¿Cuál es tu sabor favorito? Variedades de Monster explicadas",
    descripcion:
      "Descubre las diferencias entre los sabores y cuál puede ser ideal para ti.",
  },
  {
    id: 3,
    imagen: "https://via.placeholder.com/300x200?text=Blog+3",
    titulo: "Monster y el deporte: ¿cómo aprovechar su energía?",
    descripcion:
      "Consejos para combinar Monster con tu rutina de entrenamiento de forma segura.",
  },
];

// Mostrar lista de blogs
const listaBlogs = document.querySelector(".lista-blogs");
if (listaBlogs) {
  blogs.forEach((blog) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h3>${blog.titulo}</h3>
      <p>${blog.descripcion}</p>
      <a href="/html/detalle-blogs.html?blog=${blog.id}">
        <img src="${blog.imagen}" alt="${blog.titulo}">
      </a>
    `;
    listaBlogs.appendChild(article);
  });
}

// Mostrar detalle de un blog
const detalleBlog = document.getElementById("detalle-blog");
if (detalleBlog) {
  const Params = new URLSearchParams(window.location.search);
  const idBlog = parseInt(Params.get("blog"));
  const blog = blogs.find((b) => b.id === idBlog);

  if (blog) {
    detalleBlog.innerHTML = `
      <h2>${blog.titulo}</h2>
      <img src="${blog.imagen}" alt="${blog.titulo}">
      <p>${blog.descripcion}</p>
    `;
  } else {
    detalleBlog.innerHTML = "<p>Blog no encontrado.</p>";
  }
}
