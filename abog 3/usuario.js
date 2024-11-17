// Usuarios predefinidos
const usuarios = [
    { email: "mon@abog.com", password: "password1" },
    { email: "ed@abog.com", password: "password2" },
    { email: "vic@abog.com", password: "password3" },
    { email: "isra@abog.com", password: "password4" }
];

// Función para manejar el inicio de sesión
function login(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener valores del formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificar si los datos coinciden con un usuario existente
    const usuarioValido = usuarios.find(user => user.email === email && user.password === password);

    if (usuarioValido) {
        alert("Inicio de sesión exitoso.");
        // Redirecciona a otra página o realiza alguna acción adicional aquí
        window.location.href = "index.html"; // Redirige a la página de inicio después de iniciar sesión
    } else {
        alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
}
