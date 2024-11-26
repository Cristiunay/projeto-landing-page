var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaD = window.document.getElementById("seta-d")
var SetaE = window.document.getElementById("seta-e")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    SetaD.style ="display:none"
    SetaE.style ="display:flex"
}

function RolarParaEsquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    SetaD.style ="display:flex"
    SetaE.style ="display:none"
}