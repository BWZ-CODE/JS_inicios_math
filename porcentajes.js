const calcular = document.querySelector ('.calculo');
const precio_input = document.querySelector ('.descount--price');
const descuento_input = document.querySelector ('.descount--descount');
const Presult = document.querySelector ('.result')

calcular.addEventListener('click', calcular_precio_descuento);

function calcular_precio_descuento (){
    const precio = precio_input.value
    const descuento = descuento_input.value

    const new_price = ((precio*(100-descuento))/100);
    Presult.innerText = 'El nuevo precio con descuento es $' + new_price;
}