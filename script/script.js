const situacao = {
    "a1": false, "a2": false, "a3": false, "a4": false, "a5": false, "a6": false, "a7": false, "a8": false, "a9": false,
    "b1": false, "b2": false, "b3": false, "b4": false, "b5": false, "b6": false, "b7": false, "b8": false, "b9": false,
    "c1": false, "c2": false, "c3": false, "c4": false, "c5": false, "c6": false, "c7": false, "c8": false, "c9": false,
    "d1": false, "d2": false, "d3": false, "d4": false, "d5": false, "d6": false, "d7": false, "d8": false, "d9": false,
    "e1": false, "e2": false, "e3": false, "e4": false
}


function pegarPoltronas() {
    const vars = ["polA1", "polA2", "polA3", "polA4", "polA5", "polB1", "polB2", "polB3", "polB4", "polB5",
        "polC1", "polC2", "polC3", "polC4", "polC5", "polD1", "polD2", "polD3", "polD4", "polD5", "polE1",
        "polE2", "polE3", "polE4", "polE5", "polF1", "polF2", "polF3", "polF4", "polF5", "polG1", "polG2",
        "polG3", "polG4", "polG5", "polH1", "polH2", "polH3", "polH4", "polH5"
    ]
    const elementos = [];

    for(let i = 0; i < vars.length; i++) {
        const element = document.getElementById(vars[i])
        elementos.push();
      }
    console.log(elementos);
}

pegarPoltronas();
