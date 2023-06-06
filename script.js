

const buttonMenuToggle = document.querySelector('.button-menu-toggle');
const navLinks = document.querySelector('.nav-links');

buttonMenuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});


function showAlert() {
    alert("¡Hola este es un alerta de javascript!")
}

const form = document.getElementById("myForm")

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const input = document.getElementById("email")
    const inputValue = input.value


    if(!validateEmail(inputValue)) {
        alert("Por favor ingrese un correo electronico valido.")
    }   else {
        alert("Correo electronico enviado correctamente.")
    }
} 

form.addEventListener("submit", function(send) {
    send.preventDefault()
    validateForm();
})
