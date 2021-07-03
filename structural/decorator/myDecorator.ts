// структурный паттерн проектирования, который позволяет динамически добавлять
// объектам новую функциональность, оборачивая их

interface Pizzeria {
    getDescription(): string;
}

class Pizza implements Pizzeria {
    getDescription(): string {
        return `Pizza!`;
    }
}

class Decorator implements Pizzeria {
    protected pizza: Pizza;
    constructor(pizza: Pizza) {
        this.pizza = pizza;
    }
    public getDescription(): string {
        return this.pizza.getDescription();
    }
}

class Pepperoni extends Decorator {
    public getDescription(): string {
        return `${super.getDescription()} + pepper`;
    }
}

class SeaPizza extends Decorator {
    public getDescription(): string {
        return `${super.getDescription()} + shrimps`;
    }
}

//test
let pizza1 = new Pizza();
console.log(pizza1.getDescription());
let pizza2 = new SeaPizza(pizza1);
console.log(pizza2.getDescription());
let pizza3 = new Pepperoni(pizza2);
console.log(pizza3.getDescription());
/* output
Pizza!
Pizza! + shrimps
Pizza! + shrimps + pepper
*/
