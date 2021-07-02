// структурный паттерн проектирования, который позволяет 
// объектам с несовместимыми интерфейсами работать вместе

class Volts220 {
    public use220(): string {
        return 'Receiving 220v';
    }
}
class Volts110 {
    public power110v(): string {
        return 'Power up 110 volts';
    }
}
class Adapter extends Volts220 {
    private current: Volts110;
    constructor(current: Volts110) {
        super();
        this.current = current;
    }
    public use220(): string {
        const result = this.current.power110v();
        return `${result} -> Converting to 220v`;
    }
}

//test
function chargeNotebook(power: Volts220) {
    console.log(power.use220());
}
const power110 = new Volts110();
const power220 = new Volts220();
const adapter = new Adapter(power110);
console.log('Plug Notebook to 220v');
chargeNotebook(power220);
console.log('Plug Notebook to 110v!');
chargeNotebook(adapter);
/* output
Plug Notebook to 220v
Receiving 220v
Plug Notebook to 110v!
Power up 110 volts -> Converting to 220v
*/