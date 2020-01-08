export default class Point {
    public get y1(): number {
        return this.y;
    }
    public set y1(value: number) {
        this.y = value;
    }
    public get x1(): number {
        return this.x;
    }
    public set x1(value: number) {
        this.x = value;
    }
  
    constructor (private x: number, private y: number){}

    Clone():Point {
        return new Point(this.x , this.y);
    }
    Draw() {
        console.log('.');
    }
}