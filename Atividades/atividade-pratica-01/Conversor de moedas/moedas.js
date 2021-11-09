function loadingCoins() {
    fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado,tipoMoeda")
        .then(response => response.json())
        .then(data => fillCoins(data.value))
        .catch(error => console.error(error.message));
}

function fillCoins(data) {

    let selectcoin = document.getElementById("selectcoin");
    
    for (let index in data) {

        const { nomeFormatado } = data[index];

        let option = document.createElement("option");
        option.value = nomeFormatado;
        option.innerHTML = nomeFormatado;

        selectcoin.appendChild(option);
    }
}

function loadingCoins2() {
    fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado,tipoMoeda")
        .then(response => response.json())
        .then(data => fillCoins2(data.value))
        .catch(error => console.error(error.message));
}

function fillCoins2(data) {

    let selectcoin = document.getElementById("selectcoin2");
    
    for (let index in data) {

        const { nomeFormatado } = data[index];

        let option = document.createElement("option");
        option.value = nomeFormatado;
        option.innerHTML = nomeFormatado;

        selectcoin.appendChild(option);
    }
}