function myFunction() {
    let texto = document.getElementById("texto").value;

    if (texto.length <= 20) {
        document.getElementById("resposta").innerHTML = "O texto é pequeno.";
    } else if (texto.length <= 30) {
        document.getElementById("resposta").innerHTML = "O texto é médio.";
    } else if (texto.length <= 40) {
        document.getElementById("resposta").innerHTML = "O texto é grande.";
    } else {
        document.getElementById("resposta").innerHTML = "Não vou contar o tamanho da frase.";
    };
};