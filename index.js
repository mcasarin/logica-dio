console.log("Validando se o herói evoluiu de nível");

let heroi = {
    nome: "Gandalf",
    nivel: 9900,
    classe: "Mago",
    vida: 1000,
    mana: 5000
}

let txtHeroi = "O herói de nome "
let txtNivel = " está no nível de "

switch (true) { // usando para o caso específico do desafio para retornar texto
    case heroi.nivel <= 1000:
        console.log( txtHeroi + heroi.nome + txtNivel +"Ferro.");
        break;
    case heroi.nivel >= 1001 && heroi.nivel <= 2000:
        console.log( txtHeroi + heroi.nome + txtNivel +"Bronze.");
        break;
    case heroi.nivel >= 2001 && heroi.nivel <= 5000:
        console.log( txtHeroi + heroi.nome + txtNivel +"Prata.");
        break;
    case heroi.nivel >= 5001 && heroi.nivel <= 7000:
        console.log( txtHeroi + heroi.nome + txtNivel +"Ouro.");
        break;
    case heroi.nivel >= 7001 && heroi.nivel <= 8000:
        console.log( txtHeroi + heroi.nome + txtNivel +"Platina.");
        break;
    case heroi.nivel >= 8001 && heroi.nivel <= 9000:
        console.log( txtHeroi + heroi.nome + txtNivel +"Ascendente.");
        break;
    case heroi.nivel >= 9001 && heroi.nivel <= 10000:
        console.log( txtHeroi + heroi.nome + txtNivel +"Imortal.");
        break;
    case heroi.nivel >= 10001:
        console.log( txtHeroi + heroi.nome + txtNivel +"Radiante.");
        break;
    default:
        console.log( txtHeroi + heroi.nome + txtNivel +"que eu não consegui calcular!.");
}