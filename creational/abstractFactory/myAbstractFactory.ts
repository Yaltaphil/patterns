interface PrepareMeal {
    createProductA(): FirstCourse;
    createProductB(): Drink;
}

class ItalianKitchen implements PrepareMeal {
    public createProductA(): FirstCourse {
        return new Pizza();
    }
    public createProductB(): Drink {
        return new Vine();
    }
}

class JapanKitchen implements PrepareMeal {
    public createProductA(): FirstCourse {
        return new Sushi();
    }
    public createProductB(): Drink {
        return new Sake();
    }
}

// Добавим русскую кухню
class RussianKitchen implements PrepareMeal {
    public createProductA(): FirstCourse{
        return new Pelmeni();
    }
    public createProductB(): Drink{
        return new Vodka();
    }

}


interface FirstCourse {
    prepareFirstCourse(): string;
}

class Pizza implements FirstCourse {
    public prepareFirstCourse(): string {
        return 'приготовили пиццу.';
    }
}
class Sushi implements FirstCourse {
    public prepareFirstCourse(): string {
        return 'приготовили суши.';
    }
}
// Добавим пельмени
class Pelmeni implements FirstCourse {
    public prepareFirstCourse(): string {
        return 'приготовили пельмени.'
    }
}



interface Drink {
    prepareDrink(): string;

    prepareCorrectFirstCourse(collaborator: FirstCourse): string;
}

class Vine implements Drink {
    public prepareDrink(): string {
        return 'принесли вино.';
    }
    public prepareCorrectFirstCourse(collaborator: FirstCourse): string {
        const result = collaborator.prepareFirstCourse();
        return `К вину ${result}`;
    }
}

class Sake implements Drink {
    public prepareDrink(): string {
        return 'принесли сакэ.';
    }
    public prepareCorrectFirstCourse(collaborator: FirstCourse): string {
        const result = collaborator.prepareFirstCourse();
        return `К сакэ ${result}`;
    }
}

//добавим водку
class Vodka implements Drink {
    public prepareDrink(): string {
        return 'принесли водку';
    }
    public prepareCorrectFirstCourse(collaborator: FirstCourse): string {
        return `к водке ${collaborator.prepareFirstCourse()}`;
    }
}


function clientCode(factory: PrepareMeal) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.prepareDrink());
    console.log(productB.prepareCorrectFirstCourse(productA));
}

console.log('Заказали пиццу и вино...');
clientCode(new ItalianKitchen());
console.log('');

console.log('Заказали суши и сакэ...');
clientCode(new JapanKitchen());
console.log('');

//добавим заказ русской кухни
console.log('Заказали пельмени и водку...');
clientCode(new RussianKitchen());