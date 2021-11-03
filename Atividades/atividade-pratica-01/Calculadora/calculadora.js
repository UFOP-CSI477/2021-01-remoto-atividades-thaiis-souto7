

function insertNE(n){
    var number = document.getElementById('counts').innerHTML
    document.getElementById('counts').innerHTML = number + n
}

function clearField(){
    document.getElementById('counts').innerHTML = ""
}

function equal(){
    var result = document.getElementById('counts').innerHTML
    if(result){
        document.getElementById('counts').innerHTML = eval(result)
    }
}
