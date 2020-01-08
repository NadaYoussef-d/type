import Point from "./point"
import Line from "./line"
import Rect from "./rect"
import Image from "./IMG"
var p = new Point (3,6);
var p2 = new Point (4,6);
var p3 = new Point (5,6);
var p4 = new Point (6,6);
var img = new Image(p,p2,p3,p4);
p.Draw();
var line = new Line(p , p2);
line.Draw();
var rect = new Rect( p , p2 ,p3 ,p4);
rect.Draw();
img.Draw();

