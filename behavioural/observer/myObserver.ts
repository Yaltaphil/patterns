//поведенческий паттерн, который позволяет объектам оповещать другие объекты об изменениях своего состояния

class Notifier {
    private subscribers: Subscription[] = [];
    public add(one: Subscription): void {
        if (this.subscribers.indexOf(one) != -1) return;
        this.subscribers.push(one);
    }
    public remove(one: Subscription): void {
        const index = this.subscribers.indexOf(one);
        if (index === -1) return;
        this.subscribers.splice(index, 1);
    }
    public notify(): void {
        console.log('Событие!');
        this.subscribers.forEach((e) => e.update());
    }
    public doSomething(): void {}
}
interface Subscription {
    update(): void;
}
class Subscriber implements Subscription {
    constructor(public name: string) {}
    public update(): void {
        console.log(`${this.name} в курсе.`);
    }
}
//test
const newsMaker = new Notifier();
const reader1 = new Subscriber('Иван');
const reader2 = new Subscriber('Николай');
const reader3 = new Subscriber('Джон');
newsMaker.add(reader1);
newsMaker.add(reader1);
newsMaker.add(reader3);
newsMaker.notify();
newsMaker.add(reader2);
newsMaker.remove(reader3);
newsMaker.remove(reader3);
newsMaker.notify();
/* output
Событие!
Иван в курсе.
Джон в курсе.
Событие!
Иван в курсе.
Николай в курсе.*/
