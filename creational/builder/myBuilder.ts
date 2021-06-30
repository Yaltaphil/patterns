interface Barista {
    addCoffee(): void;
    addTea(): void;
    addWater(): void;
    addMilk(): void;
}

class CoffeeMaker implements Barista {
    private product: Coffee;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Coffee();
    }

    public addCoffee(): void {
        this.product.parts.push('Coffee');
    }

    public addWater(): void {
        this.product.parts.push('Water');
    }

    public addMilk(): void {
        this.product.parts.push('Milk');
    }

    public addTea(): void {}

    public getProduct(): Coffee {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Coffee {
    public parts: string[] = [];
    public listParts(): void {
        console.log(`Made from: ${this.parts.join(' and ')}\n`);
    }
}

class TeaMaker implements Barista {
    private product: Tea;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Tea();
    }

    public addCoffee(): void {}

    public addWater(): void {
        this.product.parts.push('Water');
    }

    public addMilk(): void {
        this.product.parts.push('Milk');
    }

    public addTea(): void {
        this.product.parts.push('Tea');
    }

    public getProduct(): Tea {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Tea {
    public parts: string[] = [];
    public listParts(): void {
        console.log(`Made from: ${this.parts.join(' and ')}\n`);
    }
}

class Director {
    private builder: Barista;

    public setBuilder(builder: Barista): void {
        this.builder = builder;
    }

    public serveEspresso(): void {
        this.builder.addCoffee();
        this.builder.addWater();
    }

    public serveCappuchino(): void {
        this.builder.addCoffee();
        this.builder.addMilk();
    }

    public serveTea(): void {
        this.builder.addTea();
        this.builder.addWater();
    }
}

//test
function client(director: Director) {
    const builder1 = new CoffeeMaker();
    const builder2 = new TeaMaker();

    director.setBuilder(builder1);

    console.log('Espresso:');
    director.serveEspresso();
    builder1.getProduct().listParts();

    console.log('Cappuchino:');
    director.serveCappuchino();
    builder1.getProduct().listParts();

    console.log('\x1b[41m', 'Wrong Tea:', '\x1b[0m');
    director.serveTea();
    builder1.getProduct().listParts();
    console.log('Changing barista ...','\n');

    director.setBuilder(builder2);

    console.log('Tea:');
    director.serveTea();
    builder2.getProduct().listParts();

    console.log('Fired director - let\'s make Latte');
    builder1.addCoffee();
    builder1.addMilk();
    builder1.addMilk();
    builder1.getProduct().listParts();
}

const director = new Director();
client(director);
