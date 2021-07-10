// поведенческий паттерн проектирования, который позволяет объектам менять поведение в зависимости от своего состояния

class Door {
    constructor(private state: State) {
        this.openClose(state);
    }
    public openClose(state: State): void {
        this.state = state;
        this.state.setDoor(this);
    }
    public tryToComeIn(): void {
        this.state.enter();
    }
}

abstract class State {
    protected door: Door;
    public setDoor(door: Door): void {
        this.door = door;
    }
    public abstract enter(): void;
}

class OpenedDoor extends State {
    public enter(): void {
        console.log('Дверь открыта. Входим');
    }
}

class ClosedDoor extends State {
    public enter(): void {
        console.log('Дверь закрыта: открываем дверь');
        this.door.openClose(new OpenedDoor());
    }
}

//test
const door = new Door(new ClosedDoor());
door.tryToComeIn();
door.tryToComeIn();
