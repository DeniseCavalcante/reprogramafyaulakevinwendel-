var audio = document.querySelector("audio");
var botaoPlay = document.querySelector(".botao-play");
var tocado = document.querySelector(".tocado")
var tocado = document.querySelector(".tocado");


botaoPlay.onclick = function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

audio.onplay = function () {
    console.log("DEU PLAY!!!!!");
}

audio.onpause = function () {
    console.log("DEU PAUSE!!!!!");
}


audio.ontimeupdate = function () {
    var porcentagem = (audio.currentTime / audio.duration) * 100
    tocado.style.width = porcentagem + "%";

    var duracaoAtual = Math.round(audio.currentTime);
    var spanTempoAtual = document.querySelector(".tempo-atual");
    spanTempoAtual.innerText = duracaoAtual;

var data= new Date (2017, 0, 1);
data.setSeconds(duracaoAtual);

//span tempoAtual.innerText = duracaoAtual, transforma o texto do 00:00 na duracao atual
spanTempoAtual.innerText= data.getMinutes().toString().padStart(2,"0") + ":" + data.getSeconds().toString().padStart(2,"0");




}

