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