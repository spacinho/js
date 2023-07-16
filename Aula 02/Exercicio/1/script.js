function myFunction() {
    let numero = document.getElementById("numero").value;
    if (numero > 10) {
        document.getElementById("resposta").innerHTML = "O numero e grande.";
    } else {
        document.getElementById("resposta").innerHTML = "O numero e pequeno.";
    };
};