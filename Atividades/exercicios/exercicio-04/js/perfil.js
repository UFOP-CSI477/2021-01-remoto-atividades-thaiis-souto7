function exibeDados(){

    const name = window.prompt('Nome: ')
    const user = window.prompt('Usuário: ')
    const email = window.prompt('Email: ')
    const tel = window.prompt('Telefone: ')
    const cep = window.prompt('CEP: ')

    document.getElementById("name").innerHTML = name;
    document.getElementById("user").innerHTML = user;
    document.getElementById("email").innerHTML = email;
    document.getElementById("telefone").innerHTML = tel;
    document.getElementById("cep").innerHTML = cep;
}