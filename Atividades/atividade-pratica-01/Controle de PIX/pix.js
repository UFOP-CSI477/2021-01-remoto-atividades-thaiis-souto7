function loadingBanks() {
    fetch("https://brasilapi.com.br/api/banks/v1")
        .then(response => response.json())
        .then(data => fillBanks(data))
        .catch(error => console.error(error.message));
}

function fillBanks(data) {

    let selectbank = document.getElementById("keyvaluebank");
    
    for (let index in data) {

        const { name } = data[index];

        let option = document.createElement("option");
        option.value = name;
        option.innerHTML = name;

        selectbank.appendChild(option);
    }
}
