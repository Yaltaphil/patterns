interface PrepareMeal {
    makeFirstCourse(): FirstCourse;
    makeDrink(): Drink;
}

class ItalianKitchen implements PrepareMeal {
    public makeFirstCourse(): FirstCourse {
        return new Pizza();
    }
    public makeDrink(): Drink {
        return new Wine();
    }
}

class JapanKitchen implements PrepareMeal {
    public makeFirstCourse(): FirstCourse {
        return new Sushi();
    }
    public makeDrink(): Drink {
        return new Sake();
    }
}

// Добавим русскую кухню
class RussianKitchen implements PrepareMeal {
    public makeFirstCourse(): FirstCourse {
        return new Pelmeni();
    }
    public makeDrink(): Drink {
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
        return 'приготовили пельмени.';
    }
}

interface Drink {
    prepareDrink(): string;

    prepareCorrectFirstCourse(collaborator: FirstCourse): string;
}

class Wine implements Drink {
    public prepareDrink(): string {
        return 'принесли вино.';
    }
    public prepareCorrectFirstCourse(collaborator: FirstCourse): string {
        const result = collaborator.prepareFirstCourse();
        return `к вину ${result}`;
    }
}

class Sake implements Drink {
    public prepareDrink(): string {
        return 'принесли сакэ.';
    }
    public prepareCorrectFirstCourse(collaborator: FirstCourse): string {
        const result = collaborator.prepareFirstCourse();
        return `к сакэ ${result}`;
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

//test
function client(factory: PrepareMeal) {
    const productA = factory.makeFirstCourse();
    const productB = factory.makeDrink();
    console.log(productB.prepareDrink());
    console.log(productB.prepareCorrectFirstCourse(productA));
}

console.log('Заказали пиццу и вино...');
client(new ItalianKitchen());
console.log('');

console.log('Заказали суши и сакэ...');
client(new JapanKitchen());
console.log('');

//добавим заказ русской кухни
console.log('Заказали пельмени и водку...');
client(new RussianKitchen());
