function calcular(id1, id2, respid, operador){
    var num1 = parseFloat(document.getElementById(id1).value)   
    var num2 = parseFloat(document.getElementById(id2).value)
    var resultado

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
     document.getElementById(respid).textContent = formatNumber(resultado)
}

    function formatNumber(x){
        if(Number.isInteger(x)){
            return x
        }else if (x !=="Erro divisao por 0"){
            return x.Tofixed(2)
        }else{
            return x
        }
    }