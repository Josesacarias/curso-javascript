/*let condicion=false;

if(condicion){
console.log("condicion verdadera");
}
else{
console.log("condicion falsa");
}*/

/*let numero=5
;
if(numero ==1){
    console.log("numero uno");
}
else if(numero ==2){
    console.log("numero dos");
}
else if( numero ==3){
    console.log("Numero tres");
}
else if( numero ==4){
    console.log("Numero cuatro");
}
else{
    console.log("numero desconocido");
}*/
//****************************************************************************** */
/*let mes=10;
let estacion;

if( mes ==1 || mes ==2 ||mes==12){
    estacion="invierno";
}
else if(mes ==3 || mes==4 || mes==5){
    estacion="primavera";
}
else if( mes==6 || mes==7 || mes==8){
    estacion="verano";
}
else if( mes == 9 || mes ==10 || mes == 11){
    estacion= "otoño";
}
else{
    estacion="valor incorrecto";
}
console.log(estacion);*/
//**************************************************************************
//PRACTICA DE IF Y ELSE
/*let hora=25;
let horario;
if (hora ==6 || hora ==7 || hora ==8 || hora ==9 || hora == 10 || hora == 11){

    horario="Buenos dias";
}
else if(hora ==12 || hora ==13 || hora ==14 || hora ==15 || hora == 16 || hora == 17 || hora ==18){
    horario="Buenas tardes";
}
else if(hora ==19 || hora ==20 || hora ==21 || hora ==22 || hora == 23 || hora == 24){
    horario="Buenas noches";
}
else if(hora ==0 || hora ==1 || hora ==2 || hora ==3 || hora == 4 || hora == 5){
    horario="Durmiendo";

}
else{
    horario="no aplica";
}
console.log(horario);*/

//************************************************************************************* */
//ESTRUCTURA SWITCH

/*let numero = 3;
let numeroTexto= 'Valor desconocido';

switch( numero){
    case 1:
        numeroTexto='Numero uno';
        break;
    case 2:
        numeroTexto='Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break; 
    case 4:
        numeroTexto= 'Numero cuatro';
    default:    
        numeroTexto= 'caso no encontrado'    
}
console.log(numeroTexto);*/

let mes=5;
let estacion;

switch( mes ){

    case 1: case 2: case 12:
        estacion='invierno';
        break;
    
    case 3: case 4: case 5:
            estacion='primavera';
            break;    
    
    case 6: case 7: case 8:
            estacion='verano';
            break;

    case 9: case 10: case 11:
            estacion='otoño';
            break;
    default:
            estacion = 'valor incorrecto';

}
    console.log(estacion);