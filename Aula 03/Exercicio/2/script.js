

let aleatorio = Math.floor(Math.random() * 10);

let tentativas = 10;

while (tentativas > 0) {

    let tentativa = prompt("Digite um número de 0 a 10");

    if (Number(tentativa) == aleatorio) {
        alert("Acertou");
        break;
    } else {
        alert("Errou! Agora você só tem " + (tentativas-1) + " tentativas");
    }
    tentativas--
};