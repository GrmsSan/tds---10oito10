function calculando(){
    var num1 = parseFloat(document.getElementById("num1").value)   
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado

    var operador = document.getElementById("operador").value

    switch (operador) {
        case "+":
            resultado = num1 + num2
            break;
            case "-":
            resultado = num1 - num2
            break;
            case "*":
            resultado = num1 * num2            
            break;
            case "/":
                if(num2 !== 0){
                    resultado = num1 / num2
                }else{
                    resultado = "Erro nao divisivel por 0"
                }
            break;
        default:"Operador invalido"
            break;
    }
    if(resultado !== "Erro nao divisivel por 0"){
        var a = document.getElementById("resultado")
        a.textContent = format(resultado)
    } else {
        var a = document.getElementById("resultado")
        a.textContent = resultado
    }

}

const format = (num) => Number.isInteger(num) ? num : num.ToFixed(2)