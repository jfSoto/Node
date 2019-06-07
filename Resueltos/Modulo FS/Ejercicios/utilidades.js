exports.calculadora = function (num1, num2, op) 
{
    var devolver = ""

    switch (op) 
    {
        case "suma":
            devolver += (num1 * 1 + num2 * 1)
            break

        case "resta":
            devolver += (num1 - num2)
            break

        case "multiplicacion":
            devolver += (num1 * num2)
            break

        case "division":
            devolver += (num1 / num2)
            break
    }
    
    return devolver
}
