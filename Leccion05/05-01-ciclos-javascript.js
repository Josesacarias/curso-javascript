//CICLO WHILE
let contador = 0;

/*while ( contador < 3 ){
    console.log(contador);
    contador++;

}*/

//CICLO DO WHILE

/*do{
    console.log(contador);
    contador++;
}while ( contador <3);
console.log("fin ciclo while");
*/
//CICLO FOR
/*for( let contador =0; contador <=3 ; contador++ ){
    console.log(contador);
}
    console.log("fin ciclo for");
    */

//IMPRIMIR LOS NUMERO PARES
/*for( let contador =0; contador <=10; contador++)
if ( contador %2 ==0){
    console.log(contador);
    break; //para terminar el ciclo
}
 console.log("fin del ciclo for"); */
inicio:
 for( let contador =0; contador <=10; contador++)
if ( contador %2 !==0){
    //console.log(contador);
    continue inicio; //ir al siguiente iteracion
}
 console.log(contador);

 
