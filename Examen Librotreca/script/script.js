function cambiarTexto(titulo){
    let cambiar
    cambiar = document.querySelector('.cambiartitulo');
    cambiar.innerText = titulo.innerText;
}

function rentar(renta){
    renta.innerText = "No disponible";
    renta.style.backgroundColor = "#91191c";
    renta.style.color = "white"
}

function sesion(estado){
    alert("Inicio de Sesion exitoso");
    if(estado.innerText = "Inicio Sesion"){
        estado.innerText = "Cerrar Sesion";
    }
}