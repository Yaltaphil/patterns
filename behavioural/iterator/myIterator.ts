/**поведенческий паттерн проектирования, который даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления */

interface IIterator {
    next(): string;
    hasNext(): boolean;
    toStart(): void;
}
class ForwardIterator implements IIterator {
    private position: number = 0;
    constructor(private collection: Words, private reverse: boolean = false) {}
    public toStart(): void {
        this.position = 0;
    }
    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position++;
        return item;
    }
    public hasNext(): boolean {
        return this.position < this.collection.getLength();
    }
}

interface IIterable {
    getIterator(): IIterator;
}
class Words implements IIterable {
    constructor(private items: string[] = []) {}
    public getItems(): string[] {
        return this.items;
    }
    public getLength(): number {
        return this.items.length;
    }
    public getIterator(): IIterator {
        return new ForwardIterator(this);
    }
}

//test
function iterate(i: IIterator) {
    while (i.hasNext()) console.log(i.next());
}
const collection = new Words(['один', 'два', 'три', 'четыре']);
const iterator = collection.getIterator();
iterate(iterator);
iterator.toStart();
iterate(iterator);
/* output
один
два
три
четыре
один
два
три
четыре
*/
