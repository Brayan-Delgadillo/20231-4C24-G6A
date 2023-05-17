// Agregar evento de envío del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

  // Obtener los valores de email y contraseña ingresados por el usuario
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Realizar la validación del inicio de sesión
  if (email === "tu_email@ejemplo.com" && password === "tu_contraseña") {
    // Inicio de sesión exitoso
    alert("Inicio de sesión exitoso");
    // Aquí puedes redirigir al usuario a otra página o realizar alguna acción adicional
    window.location.href = "dashboard.html"; // redirige con la página de destino
  } else {
    // Credenciales incorrectas
    alert("Credenciales incorrectas. Por favor, intentalo de nuevo.");
  }
});

// Agregar evento de clic al enlace de registro
document.getElementById("registerLink").addEventListener("click", function(event) {
  event.preventDefault(); // Evita que se siga el enlace de forma predeterminada

  // Redirige al usuario a la página de registro
  window.location.href = "registro.html";
});

// Agregar evento de envío del formulario de registro
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

  // Obtener los valores de nombre de usuario, correo electrónico y contraseña ingresados por el usuario
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Realizar la validación del formulario de registro (agrega tu lógica de validación aquí)

  // Registro exitoso
  alert("Registro exitoso");
  // Aquí puedes redirigir al usuario a otra página o realizar alguna acción adicional
  window.location.href = "dashboard.html"; // redirige al panel de control
});

// Agregar evento de clic al enlace de inicio de sesión
document.getElementById("loginLink").addEventListener("click", function(event) {
  event.preventDefault(); // Evita que se siga el enlace de forma predeterminada

  // Redirige al usuario a la página de inicio de sesión
  window.location.href = "index.html";
});
