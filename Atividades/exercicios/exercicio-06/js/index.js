let contador = 1;
let id;
let exec = false;

function Processo(){
    document.getElementById("contador").innerHTML = `Contador: ${contador}`;
    contador++;
}

function Iniciar(){

    if(!exec){
        id = setInterval(Processo)
        exec = true
    } 
}

function Parar(){
    clearInterval(id)
    exec = false
}

function Reiniciar(){
    Parar();
    contador = 1;
    document.getElementById("contador").innerHTML = "Contador: ";
}