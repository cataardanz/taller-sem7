document.getElementById ('registroForm').addEventListener('sumbit', function (event) {
    let name = document.getElementById ('nombre').value;
    let email = document.getElementById ('email').value;
    let password = document.getElementById ('contrasena').value;
    let repeatpassword = document.getElementById('repetirContrasena').value;
    let termsacept = document.getElementById ('aceptoterminos').checked;
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