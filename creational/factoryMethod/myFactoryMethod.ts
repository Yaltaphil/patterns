abstract class Developer {
    public abstract buildHouse(): House;

    public orderHouse(): string {
        const house = this.buildHouse();
        return `${house.build()}`;
    }
}

class WoodenBuilder extends Developer {
    public buildHouse(): House {
        return new WoodenHouse();
    }
}

class StoneBuilder extends Developer {
    public buildHouse(): House {
        return new StoneHouse();
    }
}

class GlassBuilder extends Developer {
    public buildHouse(): House {
        return new GlassHouse();
    }
}

interface House {
    build(): string;
}

class WoodenHouse implements House {
    public build(): string {
        return 'Построили деревянный дом';
    }
}

class StoneHouse implements House {
    public build(): string {
        return 'Построили каменный дом';
    }
}

class GlassHouse implements House {
    public build(): string {
        return 'Построили стеклянный дом';
    }
}

// test
function clientsOrder(developer: Developer) {
    console.log('Строим дом...');
    console.log(developer.orderHouse());
}

console.log('Хотим деревянный дом');
clientsOrder(new WoodenBuilder());
console.log('');

console.log('Хотим каменный дом');
clientsOrder(new StoneBuilder());
console.log('');

//добавил новый тип дома
console.log('Хотим стеклянный дом');
clientsOrder(new GlassBuilder());
