let calculoButton = document.getElementById("calcular-button");

let resultado = document.getElementById("result");

let calcular = () => {
    let valorInvestido = Number(document.getElementById("investido").value);

    let juros = Number(document.getElementById("juros").value);

    let tempo = Number(document.getElementById("tempo").value);

    let duracao = document.getElementById("duracao").value;

let jurosSimples = duracao == "anual" ? (valorInvestido*juros*tempo) / 100 :
 (valorInvestido*juros*tempo) / 1200;

let valorFinal = valorInvestido + jurosSimples;

result.innerHTML = `<div>Montante principal: <span>$${valorInvestido.toFixed(2)}</span></div>
<div>Juros Simples: <span>$${jurosSimples.toFixed(2)}</span></div>
<div>Montante Total: <span>$${valorFinal.toFixed(2)}</span></div>`

}

calculoButton.addEventListener("click", calcular);

window.addEventListener("load", calcular);