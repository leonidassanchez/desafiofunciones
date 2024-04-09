//Dentro del script agrega el evento para que al hacer click a cada uno de los divs, este cambie de
//color al color negro. Utiliza addEventListener para agregar el evento.

const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");

function cambiarColorNegro(colornegro) {
  colornegro.target.style.backgroundColor = "black";
}

azul.addEventListener("click", cambiarColorNegro);
rojo.addEventListener("click", cambiarColorNegro); //ver como afecta la función que hice para crear divs
verde.addEventListener("click", cambiarColorNegro);
amarillo.addEventListener("click", cambiarColorNegro);

/*Crea una página junto a un script que guarde dentro de una variable global
un color dependiendo de la letra del teclado presionada.
○ La letra a guardará el color rosado.
○ La letra s guardará el color naranjo.
○ La letra d guardará el color celeste.
○ Para guardar el color revisa el tip al final del enunciado.
○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
color blanco y borde negro.
○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
“key” a rosado, naranjo o celeste respectivamente.*/

let condicion = "";

document.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "A") {
    condicion = "pink";
    document.getElementById("key").style.backgroundColor = "pink";
  } else if (e.key === "s" || e.key === "S") {
    condicion = "orange";
    document.getElementById("key").style.backgroundColor = "orange";
  } else if (e.key === "d" || e.key === "D") {
    condicion = "skyblue";
    document.getElementById("key").style.backgroundColor = "skyblue";
  }
});

const changeColor = (id, newcolor) =>
  (document.querySelector("#" + id).style.backgroundColor = newcolor);

document.addEventListener("click", (e) => changeColor(e.target.id, condicion));
