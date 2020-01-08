import Shape from './shape';
export default class Image extends Shape {

    private _img:Shape[];
    constructor (...img:Shape[]){
        super();
        this._img = img;
    }
    public get img(): Shape {
        return this.img;
    }
    public set img (value : Shape){
        this.img = value;
    }
    clone():Image{
        return new Image (...this._img)
    }
    Draw(){
        for (var i:number = 0 ; i < this._img.length ; i++){
            this._img[i].Draw();
        }
    }
}
