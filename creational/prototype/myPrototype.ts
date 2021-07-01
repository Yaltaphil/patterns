import * as _ from 'lodash';
import * as v8 from 'v8';


class Shape {
    x: number;
    y: number;
    constructor(x: number = 5, y: number = 5) {
        (this.x = x), (this.y = y);
    }
    public clone(): Shape {
        const clone = _.cloneDeep(this);

        // const clone = { ...this };
        // const clone = Object.create(this) ;
        // const clone = JSON.parse(JSON.stringify(this));

        return clone;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number = 20, height: number = 10) {
        super();
        this.width = width;
        this.height = height;
    }
    someMethod() {
        console.log('method works!');
    }
    clone(): Rectangle {
        // deep 
        const clone = _.cloneDeep(this);
        // const clone = v8.deserialize(v8.serialize(this)); -  не присваивает литералу объекта класс Rectangle

        // shallow:
        // const clone = { ...this };
        // const clone = Object.create(this);
        // const clone = JSON.parse(JSON.stringify(this));

        return clone;
    }
}

function client() {
    const s1 = new Shape();
    const s2 = s1.clone();
    if (s1 !== s2) {
        console.log('Shapes are different!', s1, s2);
    }
    console.log(
        s1 instanceof Shape,
        s2 instanceof Shape,
        Object.getOwnPropertyNames(s1),
        Object.getOwnPropertyNames(s2)
    );

    const r1 = new Rectangle();
    const r2 = r1.clone();
    if (r1 !== r2) {
        console.log('Rectangles are different!', r1, r2);
    }
    console.log(
        r1 instanceof Rectangle,
        r2 instanceof Rectangle,
        Object.getOwnPropertyNames(r1),
        Object.getOwnPropertyNames(r2)
    );
}

client();
