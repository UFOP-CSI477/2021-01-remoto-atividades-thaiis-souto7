function User(name, username, email, tel, cep){
    this.name = name;
    this.username = username;
    this.email = email;
    this.tel = tel;
    this.cep = cep;
}

function exibeDados(){

    const name = window.prompt('Nome: ')
    const username = window.prompt('Usuário: ')
    const email = window.prompt('Email: ')
    const tel = window.prompt('Telefone: ')
    const cep = window.prompt('CEP: ')

    const user = new User(name, username, email, tel, cep)

    document.getElementById("name").innerHTML = user.name;
    document.getElementById("user").innerHTML = user.username;
    document.getElementById("email").innerHTML = user.email;
    document.getElementById("telefone").innerHTML = user.tel;
    document.getElementById("cep").innerHTML = user.cep;
}