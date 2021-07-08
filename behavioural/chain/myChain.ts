/**поведенческий паттерн проектирования, который позволяет передавать запросы последовательно по цепочке обработчиков. Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи */

interface IDrink {
    askNext(drink: IDrink): IDrink;
    ask(question: string): string;
}
abstract class Drink implements IDrink {
    private next: IDrink;
    public askNext(drink: IDrink): IDrink {
        this.next = drink;
        return drink;
    }
    public ask(question: string): string {
        if (this.next) return this.next.ask(question);
        return null;
    }
}
class Beer extends Drink {
    public ask(question: string): string {
        if (question === 'пиво') return `Петя: я буду ${question}.`;
        return super.ask(question);
    }
}
class Cognac extends Drink {
    public ask(question: string): string {
        if (question === 'коньяк') return `Вася:  я буду ${question}.`;
        return super.ask(question);
    }
}
class Wine extends Drink {
    public ask(question: string): string {
        if (question === 'вино') return `Лена:  я буду ${question}.`;
        return super.ask(question);
    }
}

const beer = new Beer();
const cognac = new Cognac();
const wine = new Wine();
wine.askNext(cognac).askNext(beer);
const drinks = ['вино', 'чай', 'пиво', 'коньяк'];
for (const drink of drinks) {
    console.log(`Кто будет ${drink}?`);
    const answer = wine.ask(drink);
    if (answer) {
        console.log(`${answer}`);
    } else {
        console.log(`никто не хочет`);
    }
}
/* output
Кто будет вино?
Лена:  я буду вино.
Кто будет чай?
никто не хочет
Кто будет пиво?
Петя: я буду пиво.
Кто будет коньяк?
Вася:  я буду коньяк.*/
