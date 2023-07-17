let numero = prompt("Digite um número");
if (isNaN(numero)) {
    alert("Informe um número correto");
} else {
    for (let i = (Number(numero)); i >= 0; i--) {
        console.log(i);
    };
};