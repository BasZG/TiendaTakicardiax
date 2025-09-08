/* Productos */
const productos = [
  {
    id: 1,
    nombre: "Monster Energy Green 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto1.webp",
  },
  {
    id: 2,
    nombre: "Monster Ultra Peachy Keen 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto2.webp",
  },
  {
    id: 3,
    nombre: "Monster Mango Loco 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto3.webp",
  },
  {
    id: 4,
    nombre: "Monster Ultra Paradise 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto4.webp",
  },
  {
    id: 5,
    nombre: "Monster Aussie Lemonade 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto5.webp",
  },
  {
    id: 6,
    nombre: "Monster Ultra sin Calorías 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto6.webp",
  },
  {
    id: 7,
    nombre: "Monster Energy Zero Sugar Green 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto7.webp",
  },
  {
    id: 8,
    nombre: "Monster Energy Ultra Watermelon 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto8.webp",
  },
  {
    id: 9,
    nombre: "Monster Energy Ultra Gold 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto9.webp",
  },
  {
    id: 10,
    nombre: "Monster Ripper Regular 473 ml.",
    precio: 1000,
    imagen: "../Assets/img/producto10.webp",
  },
];

const listaProductos = document.getElementById("lista-productos");

if (listaProductos) {
  const mostrarTodos = listaProductos.classList.contains("todos");
  const limite = mostrarTodos ? productos.length : 4;

  for (let i = 0; i < limite; i++) {
    const producto = productos[i];
    const li = document.createElement("li");
    li.innerHTML = `
        <a href="detalle-productos.html?producto=${producto.id}">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        Ver Detalles</a>
        <p>Precio: $${producto.precio}</p>
        `;
    listaProductos.appendChild(li);
  }
}
