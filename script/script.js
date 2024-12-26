const inputNome = document.getElementById("ReservaNome");
const inputFila = document.getElementById("ReservaFileira");
const inputColuna = document.getElementById("ReservaColuna");
let btnReservar = document.getElementById("btnReservar");
const letras = "abcdefgh"
let cont = 0

function inicializador() {
    for (let i = 0; i < 8; i++) {
        for (let h = 1; h <= 6; h++)
            localStorage.setItem(letras[i] + [h], false)
    }
}

const vars = ["polA1", "polA2", "polA3", "polA4", "polA5", "polA6", "polB1", "polB2", "polB3", "polB4", "polB5", "polB6",
    "polC1", "polC2", "polC3", "polC4", "polC5", "polC6", "polD1", "polD2", "polD3", "polD4", "polD5", "polD6", "polE1",
    "polE2", "polE3", "polE4", "polE5", "polE6", "polF1", "polF2", "polF3", "polF4", "polF5", "polF6", "polG1", "polG2",
    "polG3", "polG4", "polG5", "polG6", "polH1", "polH2", "polH3", "polH4", "polH5", "polH6"
]

const elementos = [];
const reservando = [];

for (let i = 0; i < vars.length; i++) {
    const element = document.getElementById(vars[i])
    elementos.push(element);
}

function pegarPoltronas() {
    for (let i = 0; i < 8; i++) {
        for (let h = 1; h <= 6; h++) {

            if (JSON.parse(localStorage.getItem(letras[i] + [h])) === false) {
                elementos[cont].style.backgroundColor = "green";
            }
            else if (JSON.parse(localStorage.getItem(letras[i] + [h])) === true) {
                elementos[cont].style.backgroundColor = "red";

            }
            else if (JSON.parse(localStorage.getItem(letras[i] + [h])) === null) {
                elementos[cont].style.backgroundColor = "rgb(224, 221, 0)";
            }
            cont += 1
        }
    }
}

function Reservar() {
    localStorage.setItem(inputFila.value + inputColuna.value, true);
    location.reload();
}

function Adicionar() {
    btnReservar.style.display = "block";
    let conti = 0
    reservando.push(inputFila.value + inputColuna.value)
    for (let i = 0; i < 8; i++) {
        for (let h = 1; h <= 6; h++) {
            if (letras[i] + [h] === inputFila.value + inputColuna.value) {
                elementos[conti].style.backgroundColor = "rgb(224, 221, 0)";
            }
            conti += 1;
        }
    }
}
pegarPoltronas();