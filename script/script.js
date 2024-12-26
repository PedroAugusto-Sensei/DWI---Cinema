let inputNome = document.getElementById("");
let inputFila = document.getElementById("");
let inputColuna = document.getElementById("");

const situacao = {
    "a1": false, "a2": false, "a3": false, "a4": false, "a5": false, "a6": false, "b1": false, "b2": false, "b3": false,
    "b4": false, "b5": false, "b6": false, "c1": false, "c2": false, "c3": false, "c4": false, "c5": false, "c6": false,
    "d1": false, "d2": false, "d3": false, "d4": false, "d5": false, "d6": false, "e1": false, "e2": false, "e3": false,
    "e4": false, "e5": false, "e6": false, "f1": false, "f2": false, "f3": false, "f4": false, "f5": false, "f6": false,
    "f6": false, "g1": false, "g2": false, "g3": false, "g4": false, "g5": false, "g6": false, "h1": false, "h2": false,
    "h3": false, "h4": false, "h5": false, "h6": false
}

function pegarPoltronas() {
    const vars = ["polA1", "polA2", "polA3", "polA4", "polA5", "polA6", "polB1", "polB2", "polB3", "polB4", "polB5", "polB6",
        "polC1", "polC2", "polC3", "polC4", "polC5", "polC6", "polD1", "polD2", "polD3", "polD4", "polD5","polD6", "polE1",
        "polE2", "polE3", "polE4", "polE5", "polE6", "polF1", "polF2", "polF3", "polF4", "polF5", "polF6", "polG1", "polG2",
        "polG3", "polG4", "polG5", "polG6", "polH1", "polH2", "polH3", "polH4", "polH5", "polH6"
    ]
    const elementos = [];

    for (let i = 0; i < vars.length; i++) {
        const element = document.getElementById(vars[i])
        elementos.push(element);
    }
    // console.log(elementos);
    for (let i = 0; i < elementos.length; i++) {
        if (Object.values(situacao)[i] === false) {
            elementos[i].style.backgroundColor = "red";
        }
        else if (Object.values(situacao)[i] === true) {
            elementos[i].style.backgroundColor = "green";
        }
        else {
            elementos[i].style.backgroundColor = "rgb(224, 221, 0)";
        }
    }

}

pegarPoltronas();
