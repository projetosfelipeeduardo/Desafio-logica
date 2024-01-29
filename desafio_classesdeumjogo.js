
const nomeHeroi = prompt("Digite o nome do Heroi:");
const idadeHeroi = parseInt(prompt("Digite a Idade do Heroi:"));
const tipoHeroi = prompt("Digite o Tipo do Heroi");
class dadosdoHeroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nome = nomeHeroi;
        this.idade = idadeHeroi;
        this.tipo = tipoHeroi;
    }
}

const novoHeroi = new dadosdoHeroi(nomeHeroi, idadeHeroi, tipoHeroi);

let ataque;


if (novoHeroi.tipo === 'mago') {
    ataque = 'magia';
} else if (novoHeroi.tipo === 'guerreiro') {
    ataque = 'uma espada';
} else if (novoHeroi.tipo === 'monge') {
    ataque = 'artes marciais';
} else if (novoHeroi.tipo === 'ninja') {
    ataque = 'uma shuriken';
}

console.log(`O ${novoHeroi.nome} atacou usando ${ataque}`);
