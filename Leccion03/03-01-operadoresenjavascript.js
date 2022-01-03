/*let a =3, b =2;
let z =a+b;
/*console.log("resultado de la suma. " +z)

z=a-b;

console.log("el resultado de la resta" +z);

z= a*b;
console.log("resultado de la multi :" +z);

z= a/b;
console.log("resultado de la division es : " +z);

a= a % b;
console.log("el residuo es : " +z);*/

//Incremento
//pre-incremento (el operador ++ antes de la variable)
//z=b++;
//console.log(z)
/*let a =3, b=2, c=1, d=4;
let z=a*b+c/d;
console.log(z);
z=c+a*b/d;
console.log(z)
z=(c+a)*b/c;
console.log(z);
*/

//operadores de asignacion
/*let=a=1;
a +=3; //a=a+3
console.log(a);
a-=2; //a=a-2
console.log(a);
/*
*=
/=
%=
**=
*/
//OPERADORES DE COMPARACION
/*let a =3, b=2, c= "3";
let z= a == b; 
console.log(z);
z= a === c; //revisa los valores son iguales pero tambien los tipos
console.log(z);*/
//let a =3, b=3, c= "3";
/*let z=3!=c;
console.log(z);*/
/*let z=a<b;
console.log(z);
z=a<= b;
console.log(z);
z=a>b;
console.log(z);
z=a >=b;
console.log(z);
*/
/*let a = 9;
if(a%2==0){
console.log("Es un numero par");
}
else{
    console.log("Es un numero impar");
}
let edad=20, adulto=18;
if( edad >=adulto ){
    console.log("es un adulto");
}
else{
    console.log("es menor de edad");
}*/
//EJEMPLO OPERADOR LOGICO AND LOS DOS DEBEN DE SER VERDADEROS
/*let a = 5;
let  valMin = 0, valMax =10;

if(a >=valMin &&  a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("no esta dentro del rango");
}
//EJEMPLO OPERADOR OR ||, SI CUALQUIERA ES VERDADERO ES TRUE
let vacaciones = false, diaDescanso = true;
if(vacaciones || diaDescanso){
    console.log("padre puede asistir al juego del hijo");

}else{
    console.log("El padre esta ocupado");
}*/
//OPERADOR TERNARIO
/*let resultado = (5>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 10;
resultado = ( numero % 2 ==0) ? "Numero para" : "Numero Impar";
console.log( resultado );
*/

//CONVERTIR STRING A NUMERO
/*let miNumero = "18";

let resultado= (miNumero >= 18) ? "puede votar" : "Muy joven para votar";
console.log(resultado);
*/

let x=5;
let y = 10;
let z= ++x + y--;
console.log(x);
console.log(y);
console.log(z); 

let resultado = 4 + 5 * 6 / 3;
console.log(resultado);

resultado = (4+5)* 6 /3;
console.log(resultado);
