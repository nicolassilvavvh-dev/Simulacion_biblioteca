console.log("Conexion correcta")

// sirve cambiar la portada del video a otra

const video1 = document.getElementById("comida");


if (video1) {
    video1.addEventListener("mouseover", function () {
        video1.src = "static/images/comida-mexicana2.jpg";
    });

    video1.addEventListener("mouseout", function () {
        video1.src = "static/images/comida-mexicana.jpg";
    });
}

// sirve para añadir una cosa a los libros seleccionados

let boton1 = document.querySelector("#cienañosdesoledad");
let contador1 = document.querySelector("#contador1");

boton1.onclick = function () {
    let cantidad = parseInt(contador1.innerText);
    cantidad++;
    contador1.innerText = cantidad + 0;
};

let boton2 = document.querySelector("#sapiens");
let contador2 = document.querySelector("#contador1");

boton2.onclick = function () {
    let cantidad = parseInt(contador2.innerText);
    cantidad++;
    contador2.innerText = cantidad + 0;
};

let boton3 = document.querySelector("#elprincipito");
let contador3 = document.querySelector("#contador1");

boton3.onclick = function () {
    let cantidad = parseInt(contador3.innerText);
    cantidad++;
    contador3.innerText = cantidad + 0;
};

// cuando coloque un correo mandara un mensaje diciendo bienvenido

const btnLogin = document.getElementById('btnLogin');
const inputEmail = document.getElementById('inputEmail');

btnLogin.addEventListener('click', function() {
    const texto = inputEmail.value.trim();
    if (texto !== '') {
        alert(`Bienvenido\n${texto}`);
    } else {
        alert('Por favor ingresa tu correo.');
    }
});