let total = 0
function mostrarMenuyOpcion(){
    let opcion = prompt (`menu disponible
                                1.Milanesa - $200
                                2.Fideos - $150
                                3.Empanadas -$80
                                00. salir
                                Ingrese el numero de la operacion deseada`)

    while (opcion < 0 || opcion > 3){
        alert ("La opcion no es correcta")
        opcion = prompt ("ingrese el numero de la opcion deseada")

    } return opcion
}
let op = mostrarMenuyOpcion()
while (op!=0){
    
if (op == 1){
    let cantidadMilanesas = prompt (`selecciono milanesas 
ingrese la cantidad de milanesas`)
let precio = cantidadMilanesas * 200
alert ( "el precio por " + cantidadMilanesas + " milanesas es de " + precio + " pesos ")
total += precio
}
if (op == 2) {
    let cantidadFideos =prompt (`selecciono fideos   
    ingrese la cantidad de fideos`)
    let precio = cantidadFideos * 150
    alert ( "el precio por" + cantidadFideos + " fideos es de " + precio + " pesos ")
    total += precio
}
if (op == 3) {
    let cantidadEmpanadas =prompt (`selecciono empanadas 
    ingrese la cantidad de empanadas`)
    let precio = cantidadEmpanadas * 80
    alert ( "el precio por" + cantidadEmpanadas + " empanadas es de " + precio + " pesos ")
    total += precio
}
op = mostrarMenuyOpcion()
}
alert (`operacion finalizada 
el precio final es de ` + precio + " pesos ");