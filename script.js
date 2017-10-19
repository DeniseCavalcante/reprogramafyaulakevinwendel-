var botao = document.getElementById("botao");

// var modal = document.getElementById("modal");

var fundo = document.getElementById("fundo");

var close = document.getElementById("close")

botao.onclick = function () {
    // modal.classList.add("visivel");
    fundo.classList.add("visivel");

}

close.onclick = function () {
    //    modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
}


fundo.onclick = function (e) {
    console.log(e)
    if (e.target == fundo) {
        // modal.classList.remove("visivel");
        fundo.classList.remove("visivel");
    }
}

//login 
var email = document.getElementById("email");
var senha = document.getElementById("senha")

var formulario = document.querySelector("form");

formulario.onsubmit = function () {
    if (email.value !== "admin@admin.com" || senha.value !== "admin") {
        alert("email errado");
        modal.classList.add("erro");

        setTimeout(function () {
            modal.classList.remove("erro");
        }, 1000);

        return false;
    }

    localStorage.usuario = email.value;
}    
