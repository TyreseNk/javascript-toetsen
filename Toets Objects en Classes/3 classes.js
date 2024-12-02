class Voertuig {
    constructor(type,merk){
        this._type = type;
        this._merk = merk;
    }

    get type(){
        return this._type;
    }
    set type(type){
        this._type = type;
    }
    get merk(){
        return this._merk;
    }
    set merk(merk){
        this._merk = merk;
    }
    toString(){
        return `Dit is een ${this._type} van het merk ${this._merk}`;
    }
}
class Auto extends Voertuig{
    constructor(type,merk,model){
        super(type,merk);
        this._model = model;
    }
}
