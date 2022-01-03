class Empleado{
    constructor(nombre, sueldo){
    this.nombre=nombre;
    this.sueldo=sueldo;
}

obtenerDetalles(){
    return `Empleado: nombre;${this.nombre}, sueldo: ${this.sueldo}`;
}
}

class Gerente extends Empleado{
    constructor (nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}depto; ${this.departamento}`;
    }

}
function imprimir(tipo){
    tipo.obtenerDetalles(); 
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Empleado){
        console.log("es un empleado");
    }
}

let empleado1 = new Empleado ('juan', 1000);
//console.log(empleado1);

let gerente1 = new Gerente ('Carlos', 5000, 'Siste,as');
//console.log (gerente1);

let gerente2 = new Gerente ('jose', 5000, 'Sistemas');
//console.log (gerente2);

imprimir ( empleado1);
imprimir (gerente1);

