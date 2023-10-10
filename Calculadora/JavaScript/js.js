function somar() {
    var valorsoma1 = parseInt(document.getElementById('valorsoma1').value);
    var valorsoma2 = parseInt(document.getElementById('valorsoma2').value);
    document.getElementById('resultado1').value = (valorsoma1 + valorsoma2);


}

function subtrair() {
    var valorsub1 = parseInt(document.getElementById('valorsub1').value);
    var valorsub2 = parseInt(document.getElementById('valorsub2').value);
    document.getElementById('resultado2').value = (valorsub1 - valorsub2);

}

function multiplicar() {
    var valormulti1 = parseInt(document.getElementById('valormulti1').value);
    var valormulti2 = parseInt(document.getElementById('valormulti2').value);
    document.getElementById('resultado3').value = (valormulti1 * valormulti2);

}

function dividir() {
    var valordiv1 = parseInt(document.getElementById('valordiv1').value);
    var valordiv2 = parseInt(document.getElementById('valordiv2').value);
    document.getElementById('resultado4').value = (valordiv1 / valordiv2);
}

function limpar1() {
    document.getElementById('resultado1').value = '';
    document.getElementById('valorsoma1').value = '';
    document.getElementById('valorsoma2').value = '';
}

function limpar2() {
    document.getElementById('resultado2').value = '';
    document.getElementById('valorsub1').value = '';
    document.getElementById('valorsub2').value = '';
}

function limpar3() {
    document.getElementById('resultado3').value = '';
    document.getElementById('valormulti1').value = '';
    document.getElementById('valormulti2').value = '';
}

function limpar4() {
    document.getElementById('resultado4').value = '';
    document.getElementById('valordiv1').value = '';
    document.getElementById('valordiv2').value = '';
}