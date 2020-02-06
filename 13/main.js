
function mostraTabuada(){
    var input= document.getElementById('input').value;
    for (i=0; i<=9; i++){
        var resultado = parseInt(i)*parseInt(input);
        var valor = document.createElement('li');
        valor.innerHTML = resultado;
        document.querySelector('ul').appendChild(valor);

    }
}
