//поведенческий паттерн проектирования, который определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс

class Route {
    constructor(private strategy: Strategy) {}
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }
    public go(): void {
        console.log(this.strategy.Algorithm());
    }
}

interface Strategy {
    Algorithm(): string;
}
class ByFeet implements Strategy {
    public Algorithm(): string {
        return `Дошли за 10 мин`;
    }
}
class ByBus implements Strategy {
    public Algorithm(): string {
        return `Доехали за 5 мин`;
    }
}

//test
const way = new Route(new ByFeet());
console.log('Пешком');
way.go();
console.log('На автобусе');
way.setStrategy(new ByBus());
way.go();
/* output
Пешком
Дошли за 10 мин
На автобусе
Доехали за 5 мин
*/
