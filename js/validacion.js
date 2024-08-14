document.getElementById ('registroForm').addEventListener('sumbit', function (event) {
    let nombre = document.getElementById ('nombre').value;
    let email = document.getElementById ('email').value;
    let contrasena = document.getElementById ('contrasena').value;
    let repetirContrasena = document.getElementById('repetirContrasena').value;
    let aceptoTerminos = document.getElementById ('aceptoterminos').checked;
})


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}


function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

    // Validaciones
 if (nombre === "" || email === "" || contrasena === "" || repetirContrasena === "") {
 showAlertError("Todos los campos deben estar completos.");
 return;

}}//Validación de longitud de contraseña//
if (contrasena.lenght < 6){
    showAlertError("La contraseña debe tener al menos 6 caracteres.");
    return;
}