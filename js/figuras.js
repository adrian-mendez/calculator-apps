// Codigo del cuadrado
console.group("Cuadrado")

function perimetroCadrado(lado) {
    return lado * 4;
} 
 
function areaCuadrado(lado) {
    return lado * lado;
} 

console.groupEnd();

//Codigo del triángulo
console.group("Triangulo")
 
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
 
console.groupEnd()

//Código del círculo
console.group("Círculo")
//Diámetro

function diametroCirculo(radio) {
    return radio * 2;
} 

//PI
const PI = Math.PI;
console.log(`Pi es: ${PI} cm.`)
//Circunferencia

function perimetroCirculo(radio) {
   const diametro = diametroCirculo(radio)
   return diametro * PI;
}  

//Área


function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd()

//Aquí interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const perimetro = perimetroCadrado(value);
    
    const resultadoCuadrado = document.getElementById("resultadoCuadrado")
    resultadoCuadrado.innerText = `El área del cuadrado es ${perimetro} cm²`
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    
    const resultadoCuadrado = document.getElementById("resultadoCuadrado")
    resultadoCuadrado.innerText = `El área del cuadrado es ${area} cm²`
    
}

// TRIANGULO

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputLado1");
    const value1 = parseInt(input.value);

    const input2 = document.getElementById("inputlado2");
    const value2 = parseInt(input2.value);

    const base = document.getElementById("inputBase");
    const valueBase = parseInt(base.value);

    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    
    const resultPerimetro = document.getElementById("resulTrianguloPerimetro");
    resultPerimetro.innerText = `El perímetro del triangulo es ${perimetro} cm`
}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputBase2");
    const value = parseInt(input.value)

    const input2 = document.getElementById("altura");
    const altura = parseInt(input2.value);

    const area = areaTriangulo(value, altura)
    
    const resultArea = document.getElementById("resulTrianguloArea");
    resultArea.innerText = `El perímetro del triangulo es ${area} cm²`
    
}

// circulo

function calcularCircunferencia() {
    const input = document.getElementById("radio")
    const value = input.value;

    const circunferencia = (value * 2) * PI
   
    const resultCirunferencia = document.getElementById("resultadoCirculo");
    resultCirunferencia.innerText = `La circunferencia del círculo es ${circunferencia} cm` 

}

function calcularArea() {
    const input = document.getElementById("radio")
    const value = input.value;

    const area = (value * value) * PI;
    
    const resultadorArea = document.getElementById("resultadoCirculo");
    resultadorArea.innerText = `El área del circulo es ${area} cm²`
}