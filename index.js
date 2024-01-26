let nome = "jaciara";
let xp = 2000;

switch (true) {
    case xp <= 1000:
        console.log("O Heroi de " + nome.toUpperCase() + " está no nivel de Ferro");
        break;
    
    case xp >= 1001 && xp <= 2000:
        console.log("O Heroi de " + nome.toUpperCase() + " está no nivel de Bronze");
        break;
    case xp >= 2001 && xp <= 5000:
        console.log("O Heroi de " + nome.toUpperCase() + " está no nivel de Prata");
        break;
    case xp >= 5001 && xp <= 7000:
        console.log("O Heroi de " + nome.toUpperCase() + " está no nivel de Ouro");
            break;
    case xp >= 7001 && xp <= 8000:
        console.log("O Heroi de " + nome.toUpperCase() + " está no nivel de Platina");
        break;
    case xp >= 8001 && xp <= 9000:
        console.log("O Heroi de " + nome.toUpperCase() + "está no nivel de Ascendente");
        break;
    case xp >= 9001 && xp <= 10000:
        console.log("O Heroi de " + nome.toUpperCase() + "está no nivel de Imortal");
        break;
    case xp >= 10001:
        console.log("O Heroi de " + nome.toUpperCase() + "está no nivel de Radiante");
        break;
}
