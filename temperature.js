class Temperature{
    get C() {
        return this._C;
    }

    set C(value) {
        this._C = value;
    }
    constructor(C){
        this._C = C;
    }

    toFarenheit(){
        return this.C * 9 / 5 + 32;
    }
    toKenvin(){
        return this.C + 273.15
    }
}