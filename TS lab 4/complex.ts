export default class Complex {
    constructor(private _real: number, private _imag:number){
    }
    public get real(): number {
        return this._real;
    }
    public set real(value: number) {
        this._real = value;
    }
    public get imag(): number {
        return this._imag;
    }
    public set imag( value : number){
        this._imag = value;
    }
    clone():Complex {
        return new Complex (this.real, this.imag);
    }
}