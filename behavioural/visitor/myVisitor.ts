// поведенческий паттерн проектирования, который позволяет добавлять в программу новые операции, не изменяя классы объектов, над которыми эти операции могут выполняться

interface IFigure {
    accept(visitor: IDraw): void;
}
class Circle implements IFigure {
    public drawCircle(): string {
        return 'нарисовать круг';
    }
    public accept(visitor: IDraw): void {
        visitor.addColor(this);
    }
}
class Square implements IFigure {
    public drawSquare(): string {
        return 'нарисовать квадрат';
    }
    public accept(visitor: IDraw): void {
        visitor.addBorder(this);
    }
}

interface IDraw {
    addColor(element: Circle): void;
    addBorder(element: Square): void;
}
class firstPainter implements IDraw {
    public addColor(element: Circle): void {
        console.log(`${element.drawCircle()} + добавить красный цвет`);
    }
    public addBorder(element: Square): void {
        console.log(`${element.drawSquare()} + толстую рамку`);
    }
}
class secondPainter implements IDraw {
    public addColor(element: Circle): void {
        console.log(`${element.drawCircle()} + добавить синий цвет`);
    }
    public addBorder(element: Square): void {
        console.log(`${element.drawSquare()} + тонкую рамку`);
    }
}

//test
const a = new Circle();
const b = new Square();
const visitor1 = new firstPainter();
const visitor2 = new secondPainter();
a.accept(visitor1);
b.accept(visitor1);
a.accept(visitor2);
b.accept(visitor2);
/* output
нарисовать круг + добавить красный цвет
нарисовать квадрат + толстую рамку   
нарисовать круг + добавить синий цвет
нарисовать квадрат + тонкую рамку 
*/
