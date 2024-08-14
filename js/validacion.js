function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

if (contrasena !== repetirContrasena) {
    showAlertError("Las contraseñas no coinciden.");
    return;
}