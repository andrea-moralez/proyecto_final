
let Open = document.getElementById("datosPersonales_btn");


let DatosContainer = document.getElementById("datos_container");

Open.addEventListener("click", toggleText);

function toggleText(){
    DatosContainer.classList.toggle("show")
}


document.getElementById("domicilioPersonal_btn").onclick = 
function myfunction(){
    var x = document.getElementById("domicilio");
    if (x.style.display === "none") {
      x.style.display = "block", btn_sec.innerHTML = "cerrar domicilio" ;
    } else {
      x.style.display = "none", btn_sec.innerHTML = "abrir domicilio" ;
    }
}

document.getElementById("contacto_btn").onclick = 
function Contacto (){
    var x = document.getElementById("contacto");
    if (x.style.display === "none") {
      x.style.display = "block", btn_sec.innerHTML = "cerrar contacto" ;
    } else {
      x.style.display = "none", btn_sec.innerHTML = "abrir contacto" ;
    }
}
