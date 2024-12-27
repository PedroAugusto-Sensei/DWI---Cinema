const inputFila = document.getElementById("ReservaFileira");
const inputColuna = document.getElementById("ReservaColuna");
let btnReservar = document.getElementById("btnReservar");
let alerta = document.getElementById("alerta");
const letras = "abcdefgh";
let cont = 0;

function inicializador() {
    for (let i = 0; i < 8; i++) {
        for (let h = 1; h <= 6; h++)
            localStorage.setItem(letras[i] + [h], false)
    }
}

if (localStorage.length == 0) {
    inicializador();
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
            else {
                elementos[cont].style.backgroundColor = "red";
            }
            cont += 1
        }
    }
}

function Reservar() {
    for (let poltrona in reservando) {
        localStorage.setItem(reservando[poltrona], true);
    }
    location.reload();
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        Adicionar();
    };
});

function Adicionar() {
    let poltronaEscolhida = inputFila.value.toLowerCase() + inputColuna.value;
    let conti = 0
    if (poltronaEscolhida === "" || inputFila.value.length > 1 || inputColuna.value === "") {
        alert("Escolha uma poltrona válida")
        return
    }

    else if (JSON.parse(localStorage.getItem(poltronaEscolhida)) === true) {
        alert("POLTRONA OCUPADA, escolha outra")
        return
    }
    btnReservar.style.display = "block";
    reservando.push(poltronaEscolhida);
    for (let i = 0; i < 8; i++) {
        for (let h = 1; h <= 6; h++) {
            if (letras[i] + [h] === poltronaEscolhida) {
                elementos[conti].style.backgroundColor = "rgb(224, 221, 0)";
            }
            conti += 1;
        }
    }
}

pegarPoltronas();