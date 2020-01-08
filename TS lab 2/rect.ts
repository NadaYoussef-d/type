import Point from "./point"
export default class Rect {
    public get point4(): Point {
        return this._point4
    }
    public set point4(value: Point) {
        this._point4 = value
    }
    public get point3(): Point {
        return this._point3
    }
    public set point3(value: Point) {
        this._point3 = value
    }
    public get point2(): Point {
        return this._point2
    }
    public set point2(value: Point) {
        this._point2 = value
    }
    public get point1(): Point {
        return this._point1
    }
    public set point1(value: Point) {
        this._point1 = value
    }
    constructor (private _point1: Point , private _point2: Point,private _point3: Point,private _point4: Point){
    }
    Clone():Rect {
        return new Rect(this.point1 , this.point2, this.point3,this.point4)
    }
    Draw(){
        this.point1.Draw();
        this.point2.Draw();
        this.point3.Draw();
        this.point4.Draw();
    }
    Find(){
        this.point1.Draw();

    }
}