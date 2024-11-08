// Base de datos simulada de usuarios
const usuarios = [
    { email: "monsert@abog.com", password: "contraseña1" },
    { email: "ed2@abog.com", password: "contraseña2" },
    { email: "victor@abog.com", password: "contraseña3" },
    { email: "isra4@abog.com", password: "contraseña4" }
];

// Función de inicio de sesión
function login(event) {
    event.preventDefault(); // Evita el envío del formulario y recarga de la página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario existe en la base de datos
    const usuarioValido = usuarios.find(user => user.email === email && user.password === password);

    if (usuarioValido) {
        window.location.href = "index.html"; // Redirigir a index.html
    } else {
        alert("Correo electrónico o contraseña incorrectos.");
    }
}
