class Cliente extends Persona{
    static contadorCliente=0;

    constructor(fechaRegistro){
        this._idCliente = ++Cliente.contadorcliente;
        this._fechaRegistro;

    }
    get(){
        return this._idCliente;
    }

    get(){
        return this._fechaRegistro;
    }

    set (fechaRegistro){
        this._fechaRegistro=fechaRegistro;

    }

    toString(){
        return `${super.toString()}
         ${this._idCliente} 
         ${this._fechaRegistro}`;

    }

}