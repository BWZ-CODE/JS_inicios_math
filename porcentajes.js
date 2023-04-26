const calcular = document.querySelector ('.calculo');
const precio_input = document.querySelector ('.descount--price');
const descuento_input = document.querySelector ('.descount--descount');
const Presult = document.querySelector ('.result')

calcular.addEventListener('click', calcular_precio_descuento);

function calcular_precio_descuento (){
    const precio = Number(precio_input.value);
    const descuento = Number(descuento_input.value);

    if( !precio || !descuento){
        Presult.innerText = 'Porfavor llena los campos';
        return;
    }
    if( descuento > 100){
        Presult.innerText = 'Asegurate de que el descuento no sea mayor de 100';
        return;
    }


    const new_price = ((precio*(100-descuento))/100);
    Presult.innerText = 'El nuevo precio con descuento es $' + new_price;
}

///////////////////////////////////////////////////////////

const cupon_precio = document.querySelector('.coupon_descount--price');
const cupon_descount = document.querySelector('.coupon_descount-coupon');
const cupon_boton = document.querySelector('.coupon_descount--button');
const cupon_result = document.querySelector ('.resultado_coupon');

cupon_boton.addEventListener('click', calcular_precio_nuevo);

function calcular_precio_nuevo(){
    const precioC = Number(cupon_precio.value);
    const cuponC = cupon_descount.value;

    const price1=((precioC*(100-25))/100);
    const price2=((precioC*(100-50))/100);
    const price3=((precioC*(100-75))/100);

    if (cuponC == "Con Miguel programo"){
        cupon_result.innerText = 'Felicidades! Tu descuento es del 25%, el nuevo precio de tu producto es de'+ ' ' + '$' + price1;
        return;
    }else if(cuponC == "Aprendo como loco"){
        cupon_result.innerText = 'Felicidades! Tu descuento es del 50%, el nuevo precio de tu producto es de'+ ' ' + '$' + price2;
        return;
    }else if(cuponC == "vamos a ser millonarios"){
        cupon_result.innerText = 'Felicidades! Tu descuento es del 75%, el nuevo precio de tu producto es de' + ' ' + '$' +price3;
        return;
    }else{
        cupon_result.innerText = 'Asegurate de estar escribiendo bien tu cupón'
    }

}