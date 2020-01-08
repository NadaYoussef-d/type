import Point from "./point"
export default class Line{
    public get point2(): Point {
        return this._point2;
    }
    public set point2(value: Point) {
        this._point2 = value;
    }
    public get point1(): Point {
        return this._point1;
    }
    public set point1(value: Point) {
        this._point1 = value;
    }
    constructor(private _point1: Point, private _point2: Point){

    }
    Clone():Line{
        return new Line(this.point1 , this.point2);
    }
    Draw(){
        this.point1.Draw();
        this.point2.Draw();
    }
}