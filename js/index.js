//ingreso usuario
let usuario = prompt ( 'Bienvenido a la calculadora de consumo energético de Rissol. Por favor ingrese nombre para iniciar!')
while (usuario === ''){
    alert ('No ha ingresado su nombre.')
    usuario = prompt ( 'Por favor ingrese su nombre:')
}
alert ('Bienvenido/a ' + usuario)

//calculo consumo
let metrosCuadrados
let alturaTecho
let tipoCerramientos
let indiceMadera
let indicePvc
let indiceAluminio
let indice
let consumoEnergetico

function calcularConsumo () {
    metrosCuadrados = parseFloat(prompt("Ingrese cuántos metros cuadrados tiene su hogar:"));
    alturaTecho = parseFloat(prompt("Ingrese la altura aproximada del techo en metros:"));
    tipoCerramientos = prompt("Ingrese 1- si posee cerramientos en madera, 2- si sus cerramientos son en aluminio o 3- si sus cerramientos son en PVC:");
    
    function calcularIndice () {
        if (tipoCerramientos == "1") {
            indice = 0.05
        }
        else if (tipoCerramientos == "2"){
            indice = 0.04
        }
        else if (tipoCerramientos == "3") {
            indice = 0.03
        }
        else {
            alert ("Por favor ingrese una opción")
            tipoCerramientos
        }
    }
    calcularIndice ();
    console.log (calcularIndice)
    
    consumoEnergetico = metrosCuadrados * alturaTecho * indice
    
    console.log (consumoEnergetico)
    alert ("El consumo aproximado de su hogar es de " + consumoEnergetico+ " kw.")
    }
    calcularConsumo();
    




//producto aconsejado

