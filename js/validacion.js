function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
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

}

if (contrasena !== repetirContrasena) {
    showAlertError("Las contraseñas no coinciden.");
}

    // Validaciones
 if (nombre === "" || email === "" || contrasena === "" || repetirContrasena === "") {
 showAlertError("Todos los campos deben estar completos.");
 return;
}

//Validación de longitud de contraseña//
if (contrasena.lenght < 6){
    showAlertError("La contraseña debe tener al menos 6 caracteres.");
    return;
}

if (!aceptoTerminos){
    showAlertError("Debe aceptar los terminos y condiciones.");
    return;
}

//si pasa todas las validaciones
showAlertSuccess("Datos guardados correctamente.");
