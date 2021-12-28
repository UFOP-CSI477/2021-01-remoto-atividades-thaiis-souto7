function User(nome, cpf, email, telefone, cep){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.cep = cep;
}

function dadosForm(){
    const nome = document.frmDados.nome.value;
    const cpf = document.frmDados.cpf.value;
    const email = document.frmDados.email.value;
    const telefone = document.frmDados.telefone.value;
    const cep = document.frmDados.cep.value;

    const user = new User(nome, cpf, email, telefone, cep)
    console.log(user)

    window.alert(`Dados carregados com sucesso! 
    
        Nome: ${nome}; 
        CPF: ${cpf}; 
        Email ${email}; 
        Tel: ${telefone}; 
        CEP: ${cep}
    `)
}