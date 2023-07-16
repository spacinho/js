function myFunction() {
    let numero = Number(document.getElementById("numero").value);
    if (numero < 18) {
        alert("Você é menor de idade.");
    } else if (numero == 18) {
        alert("Você acabou de atingir a maioridade.")
    } else if (numero > 18) {
        alert("Você é maior de idade")
    };
};