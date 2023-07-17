let idade = prompt("Digite a sua idade");

if (idade.length == 0) {
    alert("Digite uma idade válida");
} else if (idade < 18) {
    alert("Você é menor de idade.");
} else if (idade == 18) {
    alert("Você acabou de atingir a maioridade.")
} else if (idade > 18) {
    alert("Você é maior de idade")
};