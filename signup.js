const nombre = document.getElementById("name");
const email = document.getElementById("email");
const password=document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit",e=>{
    e.preventDefault()
    var warnings ="";
    var registrado="Registrado";
    var entrar =false;
    parrafo.innerHTML="";
    var regexEmail =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if(nombre.value.length<6){
        warnings += '(El nombre debe ser mayor a 6 caracteres) <br>'
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += '(El email no es valido) <br>'
        entrar = true;
    }
    if(password.value.length<8){
        warnings += '(La contraseña debe ser mayor a 8 caracteres) <br>'
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML= warnings;
    }else{
        parrafo.innerHTML= "Registrado :D <br> Bienvenido "+nombre.value;    
    }
})