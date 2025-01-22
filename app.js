// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Seleccionamos los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Arreglo para almacenar los nombres
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim(); // Eliminamos espacios en blanco

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al arreglo y actualizar la lista visual
    amigos.push(nombreAmigo);
    actualizarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-item");

        // Botón para eliminar un amigo específico
        //const buttonEliminar = document.createElement("button");
        //buttonEliminar.textContent = "X";
        //buttonEliminar.classList.add("button-delete");
        //buttonEliminar.setAttribute("aria-label", `Eliminar a ${amigo}`);
        //buttonEliminar.onclick = () => eliminarAmigo(index);

        //li.appendChild(buttonEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el amigo del arreglo
    actualizarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Selección aleatoria
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSeleccionado}</strong></p>`;

    // Reiniciar el juego después de un breve retraso
    setTimeout(() => {
        reiniciarJuego();
    }, 2000);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    actualizarLista();
}
