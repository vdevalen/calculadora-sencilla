function calcularResta(){
    var num1res= document.getElementById("num1res").value;
    var num2res= document.getElementById("num2res").value;
    num1res= parseFloat(num1res);
    num2res= parseFloat(num2res);
    document.getElementById("resultadoRestar").innerHTML = num1res - num2res;
}

function calcularMultiplicar(){
    var num1multi= document.getElementById("num1multi").value;
    var num2multi= document.getElementById("num2multi").value;
    num1multi= parseFloat(num1multi);
    num2multi= parseFloat(num2multi);
    document.getElementById("resultadoMultiplicar").innerHTML= num1multi * num2multi;
}

function calcularDividir(){
    var num1divi= document.getElementById("num1divi").value;
    var num2divi= document.getElementById("num2divi").value;
    num1divi= parseFloat(num1divi);
    num2dnum1divi= parseFloat(num2dnum1divi);
    document.getElementById("resultadoDividir").innerHTML= num1divi / num2divi;
}