document.getElementById("registrationForm").addEventListener("submit", function(event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        alert("Por favor, completa el formulario correctamente.");
    }
});