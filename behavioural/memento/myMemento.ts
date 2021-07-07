//поведенческий паттерн проектирования, который позволяет сохранять и восстанавливать прошлые состояния объектов, не раскрывая подробностей их реализации

class MyText {
    constructor(private state: string) {
        console.log(`Начальный текст: ${state}`);
    }
    public edit(): void {
        this.state = `Это новый текст = ${Math.random() * 1000000}`;
        console.log(`Редактируем. ${this.state}`);
    }
    public save(): IMemento {
        return new Memento(this.state);
    }
    public restore(memento: IMemento): void {
        this.state = memento.getState();
        console.log(`Редактор вернул:  ${this.state}`);
    }
}
interface IMemento {
    getState(): string;
    getInfo(): string;
    getDate(): string;
}
class Memento implements IMemento {
    constructor(
        private state: string,
        private date: string = new Date().toString()
    ) {}
    public getState(): string {
        return this.state;
    }
    public getInfo(): string {
        return `${this.date} / (${this.state}...)`;
    }
    public getDate(): string {
        return this.date;
    }
}
class Editor {
    private mementos: IMemento[] = [];
    constructor(private text: MyText) {}
    public backup(): void {
        console.log('сохранили');
        this.mementos.push(this.text.save());
    }
    public undo(): void {
        if (!this.mementos.length) return;
        const memento = this.mementos.pop();
        console.log(`Восстановили: ${memento.getInfo()}`);
        this.text.restore(memento);
    }
    public showHistory(): void {
        console.log('Список точек восстановления');
        for (const memento of this.mementos) {
            console.log(memento.getInfo());
        }
    }
}
//test
const text = new MyText('это какойто начальный текст');
const editor = new Editor(text);
editor.backup();
text.edit();
editor.backup();
text.edit();
editor.backup();
text.edit();
editor.showHistory();
editor.undo();
editor.undo();
editor.undo();
/* output
Начальный текст: это какойто начальный текст
сохранили
Редактируем. Это новый текст = 511431.29919325124
сохранили
Редактируем. Это новый текст = 676377.1383678217
сохранили
Редактируем. Это новый текст = 381271.6371925788
Список точек восстановления
Wed Jul 07 2021 11:35:25 GMT+0300 (Москва, стандартное время) / (это какойто начальный текст...)
Wed Jul 07 2021 11:35:25 GMT+0300 (Москва, стандартное время) / (Это новый текст = 511431.29919325124...)
Wed Jul 07 2021 11:35:25 GMT+0300 (Москва, стандартное время) / (Это новый текст = 676377.1383678217...)
Восстановили: Wed Jul 07 2021 11:35:25 GMT+0300 (Москва, стандартное время) / (Это новый текст = 676377.1383678217...)
Редактор вернул:  Это новый текст = 676377.1383678217
Восстановили: Wed Jul 07 2021 11:35:25 GMT+0300 (Москва, стандартное время) / (Это новый текст = 511431.29919325124...)
Редактор вернул:  Это новый текст = 511431.29919325124
Восстановили: Wed Jul 07 2021 11:35:25 GMT+0300 (Москва, стандартное время) / (это какойто начальный текст...)
Редактор вернул:  это какойто начальный текст */
