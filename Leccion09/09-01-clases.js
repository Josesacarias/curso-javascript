///CLASES EN JAVASCRIPT
//CLASE PADRE
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido =apellido;

    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre( nombre ){
        this._nombre=nombre;
    }
    set apellido ( apellido){
        this._apellido=apellido;
    }
}
//HERENCIA
class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
}
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
}
let empleado1 = new Empleado ('Maria', 'Jimenez', 'sistemas');
console.log(empleado1);





/*let persona1 = new Persona('Juan', 'Perez' );
persona1.nombre= 'juan Carlos';
console.log( persona1.nombre, persona1.apellido);*/

//OBJETOS
/*let persona1 = new Persona('Juan', 'Perez' );
console.log ( persona1);
let persona2 = new Persona('Jose', 'Sacarias');
console.log( persona2);*/

