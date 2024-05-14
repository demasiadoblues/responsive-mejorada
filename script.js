const buttonMenuToggle = document.querySelector('.button-menu-toggle');
const navLinks = document.querySelector('.nav-links');

buttonMenuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

function showAlert() {
    alert("¡Hola, esta es una alerta de JavaScript!");
}

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);
}

function validateForm() {
    const input = document.getElementById("email");
    const inputValue = input.value;

    if (!validateEmail(inputValue)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return false; // Agregamos un return false para indicar que la validación falló
    } else {
        return true; // Indicamos que la validación fue exitosa
    }
}

const form = document.querySelector("form[name='myForm']");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir la acción por defecto del formulario

    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Enviar el formulario utilizando AJAX
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Correo electrónico enviado correctamente.");
            form.reset(); // Reiniciar el formulario después de enviarlo
        } else {
            alert("Hubo un error al enviar el correo electrónico.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al enviar el correo electrónico.");
    });
});

window.onbeforeunload = () => {
    // Restablecer el formulario al cargar o actualizar la página
    form.reset();
};
