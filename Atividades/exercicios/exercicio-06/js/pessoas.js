function User(nome, cpf, email, telefone, cep){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.cep = cep;
}

function dadosForm(){
    const nome = document.frmDados.nome;
    const cpf = document.frmDados.cpf;
    const email = document.frmDados.email;
    const telefone = document.frmDados.telefone;
    const cep = document.frmDados.cep;

    if (Validar(nome) && Validar(cpf) && Validar(email) && Validar(telefone) && Validar(cep)){

        const user = new User(nome, cpf, email, telefone, cep)

        window.alert(`Dados carregados com sucesso! 
    
            Nome: ${nome.value}; 
            CPF: ${cpf.value}; 
            Email ${email.value}; 
            Tel: ${telefone.value}; 
            CEP: ${cep.value}
        `)
    }
    
}

function Validar(campo){

    let n = campo.value;

    if( n.length == "" || n.length == 0 ){
        window.alert("Valor Incorreto!")
        campo.value = ""
        campo.focus()
        return false;
    }

    return true
}
