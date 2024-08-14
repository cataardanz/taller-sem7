function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

    // Validaciones
 if (nombre === "" || email === "" || contrasena === "" || repetirContrasena === "") {
 showAlertError("Todos los campos deben estar completos.");
 return;

}}s