console.group('Cuadradoo')
    console.log ('Escribe "cuadrado()" e ingresa la medida del lado del cuadrado si quieres ver los datos del cuadrado o Escribe "triangulo()" e ingresa los datos solicitados si quieres ver los datos del triangulo')
    function cuadrado (medida_de_alguno_de_los_lados){
        return{
            perimetro: medida_de_alguno_de_los_lados*4,
            area: medida_de_alguno_de_los_lados * medida_de_alguno_de_los_lados,
        };
    }

console.groupEnd('Cuadradoo')


console.group('trianguloo')

    console.log ('Escribe "triangulo()" e ingresa los datos solicitados')
    function triangulo (base, altura, lado1, lado2){
        return{
            perimetro: base + lado1 + lado2,
            area: (base * altura) / 2,
        };
    }
console.groupEnd('trianguloo')

console.group('circle')

const radCirc = 3;
const diamCirc= 2 * radCirc;
const pi = 3.141592;

const circunferencia = diamCirc * pi;
const area = pi * (radCirc**2)

console.log({
    radCirc,
    diamCirc,   
    pi,
    circunferencia,
    area
});


function circle(radio){
    diamentro = radio * 2; 
    return{
        circunf:diamentro * Math.PI,
        areaa: (radio**2) * Math.PI
    }
}

console.groupEnd('circle')

console.group('triangle_isoceles')
const ladoT1 = 2;
const baseT = 3;

const alturaT = Math.sqrt((ladoT1**2)-((baseT**2)/4))

console.log({
    ladoT1,
    baseT,
    alturaT
});

function Triangulo_isoceles(lados, base){
    if (lados==base){
        console.warn('Esto no es un triángulo isosceles')
    }else{
        return{
            alturaT: Math.sqrt((lados**2)-((base**2)/4))
        }
    }
}

console.groupEnd('triangle_isoceles')