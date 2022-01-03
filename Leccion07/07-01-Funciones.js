/*
//DECLARACION DE LA FUNCION
function miFuncion(a, b){
    //console.log("suma: " + (a + b));
    return a+b;
}
//LLAMAR FUNCION
//miFuncion(2,3);
//miFuncion(5,3);
let resultado = miFuncion (2,3);
console.log(resultado);

//FUNCIONES DE TIPO EXPRESION
let x =function(a, b){return a+b};
let restar =function(a,b){return a-b};
resultado  =restar(1,2);
console.log(resultado); 

//FUNCIONES INVOQUED
/*(Function(){
    console.log('ejecutando la funcion');
})(3,4);*/

//METODO TO STRING
/*console.log(typeof miFuncion);
var miFuncionTexto= miFuncion.toString();
console.log(miFuncionTexto);*/

/*
let sumar =function(a, b){return a+b};
resultado=sumar(1,2);
console.log(resultado);*/

//FUNCION FLECHA
/*const sumarFuncionTipoFlecha = (a, b) => a+b;
resultado = sumarFuncionTipoFlecha (3,5)
console.log(resultado);*/

/*let sumar =function (a=4, b=5){
    console.log(arguments[0]);
    consolo.log(arguments[1]);
    return a + b
};
resultado=sumar();
console.log(resultado);*/

//EJERCICIO DE SUMAR TODO
/*let resultado= sumarTodo(5, 4, 13, 10, 9, 10, 11);
console.log( resultado );

function sumarTodo(){
    let suma= 0;
    for (let i= 0; i < arguments.length; i++){
        suma += arguments[i]; //suma = suma + arguments [i]

    }
    return suma;
}*/
//******************************************************************** */
//TIPOS PRIMITIVOS
let x = 10;

function cambiarValor (a){
    a=20;
    
}
//paso por valor
cambiarValor(x);//se le pasa el valor de 10
console.log(x);
//********************************************************************** */

//PASO POR REFERENCIA
const persona = {
    nombre:'juan',
    apellido: 'perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'carlos';
    p1.apellido= 'lara';
}
cambiarValorObjeto( persona );//paso porreferencias
console.log ( persona );


