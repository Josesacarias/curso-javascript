//let autos= new Array('bmw', 'mercedez benz', 'volvo');
//ARREGLOS
const autos = ['bmw', 'mercedez benz', 'volvo'];
console.log(autos);
autos[0];
console.log(autos[0]);
console.log(autos[2]);
for( let i = 0; i < autos.length; i++){
    console.log( i + ' : '+ autos [i]);
}

//MODIFICAR ARREGLOS
autos[1] = 'MercedesBenz';
console.log(autos);

//AGREGAR ELEMENTOS
autos.push('Audi');
console.log(autos);

//OTRAS FORMAS DE AGREGAR ELEMENTOS
console.log(autos.length);
autos[autos.length]='cadillac';
console.log(autos);

autos[5]='porshe';
console.log(autos);
//PREGUNTAR SI ES UN ARREGLO
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log( autos instanceof Array);
