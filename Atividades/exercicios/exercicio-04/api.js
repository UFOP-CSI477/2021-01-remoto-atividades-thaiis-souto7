function clear(campo){
    while (campo.length > 1 ) {
        campo.remove(1);
    }
}

function fillCities(data){
    let cidades = document.getElementById("cidades");
    clear(cidades);

    for(let i in data){
        const { id, nome} = data[i];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        cidades.appendChild(option); 
    }
}

function fillStates(data){
    let estados = document.getElementById("estados");
    clear(estados);

    for(let i in data){
        const { id, nome, sigla } = data[i];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = `${sigla} - ${nome}`;

        estados.appendChild(option); 
    }
}

function loadCities(){

    const estados = document.getElementById("estados");
    const estado_index = estados.selectedIndex;
    const estado_id = estados.options[estado_index].value;
    const cidades = document.getElementById("cidades");
    clear(cidades);

    if( estado_id == ""){
        return;
    }

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`;

    fetch(url)
        .then(response => response.json())
        .then(data => fillCities(data))
        .catch(erroe => console.error(error.message))
}

function loadStates(){

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => response.json())
        .then(data => fillStates(data))
        .catch(erroe => console.error(error.message))

}