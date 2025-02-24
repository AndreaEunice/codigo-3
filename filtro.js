// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]; // Se agrega ;

const li = document.querySelector("#lista-de-productos"); // Se sustituyó por query porque son varios elementos y se agrego ;
const $i = document.querySelector(".input"); // Se colocaron las comillas dobles y se agrego la clase en el DOM

// Se agregó la funcion que permita mostrar los productos
function mostrarProductos(productos) {

  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

// Para recorrer el arreglo
for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div") // Se sustituye var por let
  d.classList.add("producto")

  // Se colocaron ; en las 3 lineas
  let ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;
  
  let imagen = document.createElement("img");
  imagen.setAttribute("src", productos[i].img);

  // Se agregaron ; en ambas lineas
  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d);
}
}

mostrarProductos(productos);// Se invoca la funcion


// Se hizo la funcion para el filtrado de productos por texto
const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto.toLowerCase()) || item.color.toLowerCase().includes(texto.toLowerCase())
  );
} 


// Funcion para boton de filtrado
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  const texto = $i.value.trim();
  console.log(texto);


  const productosFiltrados = filtrado(productos, texto);

  mostrarProductos(productosFiltrados);
}
// Se reacomodo el codigo para que se entendieran de mejor manera los paso para las funciones que permitan filtrar por texto y del boton.