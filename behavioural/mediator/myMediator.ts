/**поведенческий паттерн проектирования, который позволяет уменьшить связанность множества классов между собой, благодаря перемещению этих связей в один класс-посредник */

interface IMediator {
    notify(sender: object, event: string): void;
}
class Mediator implements IMediator {
    private button: Button;
    private checkbox: Checkbox;
    constructor(button: Button, checkBox: Checkbox) {
        this.button = button;
        this.button.setMediator(this);
        this.checkbox = checkBox;
        this.checkbox.setMediator(this);
    }
    public notify(sender: object, event: string): void {
        if (event === 'click') {
            this.checkbox.check();
        }
        if (event === 'hover') {
            this.button.changeColor();
        }
    }
}
class Component {
    constructor(protected mediator: IMediator = null) {}
    public setMediator(mediator: IMediator): void {
        this.mediator = mediator;
    }
}
class Button extends Component {
    public click(): void {
        console.log('Button clicked');
        this.mediator.notify(this, 'click');
    }

    public changeColor(): void {
        console.log('Button color changed');
        this.mediator.notify(this, 'colorChanged');
    }
}
class Checkbox extends Component {
    public check(): void {
        console.log('Checkbox checked');
        this.mediator.notify(this, 'checked');
    }

    public hover(): void {
        console.log('Color changed');
        this.mediator.notify(this, 'hover');
    }
}

//test
const b = new Button();
const c = new Checkbox();
const mediator = new Mediator(b, c);
console.log('We click button...');
b.click();
console.log('We hover on checkbox ...');
c.hover();
/* output
We click button...
Button clicked
Checkbox checked
We hover on checkbox ...
Color changed
Button color changed */