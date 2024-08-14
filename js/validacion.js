function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
if (!aceptoTerminos){
    showAlertError("Debe aceptar los terminos y condiciones.");
    return;
}

//si pasa todas las validaciones
showAlertSuccess("Datos guardados correctamente.");