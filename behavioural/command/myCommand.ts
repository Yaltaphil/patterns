/*поведенческий паттерн - превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов*/
interface IOrder {
    take(): void;
}
class Order implements IOrder {
    constructor(private receiver: Shef, private course: string) {}
    public take(): void {
        console.log(`Ваш заказ (${this.course}) принят. Передаю на кухню`);
        this.receiver.prepare(this.course);
    }
}
class Shef {
    public prepare(course: string): void {
        console.log(`Повар: заказ получен - готовлю (${course}.)`);
    }
}
class Waiter {
    private order: Order;
    public writeOrder(order: Order): Waiter {
        this.order = order;
        return this;
    }
    public serveClient(): void {
        this.order.take();
    }
}

//test
const waiter = new Waiter();
const shef = new Shef();
const order = new Order(shef, 'стандартный обед');
waiter.writeOrder(order).serveClient();
/* output
Ваш заказ (стандартный обед) принят. Передаю на кухню
Повар: заказ получен - готовлю (стандартный обед.)
*/
