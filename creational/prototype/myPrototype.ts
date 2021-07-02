interface Proto {
    clone(): Proto;
}

class Point implements Proto {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public clone(): Point {
        return new Point(this.x, this.y);
    }
}

class ColorPoint extends Point {
    public color: string;
    constructor(x: number, y: number, c: string) {
        super(x, y);
        this.color = c;
    }
    public clone(): ColorPoint {
        return new ColorPoint(this.x, this.y, this.color);
    }
}

//test
const p1 = new Point(10, 20);
const p2 = p1.clone();
p2.x = 100;
console.log(p1, p2);
console.log(p1 instanceof Point, p2 instanceof Point);

const c1 = new ColorPoint(10, 20, 'red');
const c2 = c1.clone();
c2.color = 'green';
const c3 = c2.clone();
console.log(c1, c2, c3);
console.log(
    c1 instanceof ColorPoint,
    c2 instanceof ColorPoint,
    c2 instanceof ColorPoint
);

/* output
Point { x: 10, y: 20 } Point { x: 100, y: 20 }
true true
ColorPoint { x: 10, y: 20, color: 'red' } ColorPoint { x: 10, y: 20, color: 'green' } ColorPoint { x: 10, y: 20, color: 'green' }
true true true
*/