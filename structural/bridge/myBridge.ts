// структурный паттерн проектирования, который разделяет один
// или несколько классов на две отдельные иерархии — абстракцию
// и реализацию, позволяя изменять их независимо друг от друга.

//Abstration
class Device {
    protected printer: Printer;
    constructor(printer: Printer) {
        this.printer = printer;
    }
    public print(): string {
        return `Device - ${this.printer.print()}`;
    }
}
class Toaster extends Device {
    public print(): string {
        return `Toaster - also ${this.printer.print()}`;
    }
}

//Implementation
interface Printer {
    print(): string;
}
class JetPrinter implements Printer {
    public print(): string {
        return 'printing on InkJet Printer';
    }
}
class LaserPrinter implements Printer {
    public print(): string {
        return 'printing on LaserJet Printer';
    }
}

//test
const output1 = new JetPrinter();
const output2 = new LaserPrinter();
const device1 = new Device(output1);
const device2 = new Device(output2);
const toaster1 = new Toaster(output1);
const toaster2 = new Toaster(output2);
console.log(device1.print());
console.log(device2.print());
console.log(toaster1.print());
console.log(toaster2.print());
/* output
Device - printing on InkJet Printer
Device - printing on LaserJet Printer
Toaster - also printing on InkJet Printer
Toaster - also printing on LaserJet Printer 
*/
