// структурный паттерн проектирования, который предоставляет 
// простой интерфейс к сложной системе классов, библиотеке или фреймворку

class ExpierencedSecretary {
    protected production: Production;
    protected supply: Supply;
    constructor(production: Production = null, supply: Supply = null) {
        this.production = production || new Production();
        this.supply = supply || new Supply();
    }
    public serveNewOrder(): string {
        let result = 'New order:\n';
        result += this.supply.signContract();
        result += this.production.order();
        result += this.production.make();
        result += this.supply.deliver();
                return result;
    }
}
class Production {
    public order(): string {
        return 'Production - order received\n';
    }
    public make(): string {
        return 'Production - order fulfilled\n';
    }
}
class Supply {
    public signContract(): string {
        return 'Supply - contract signed\n';
    }
   public deliver(): string {
        return 'Supply - product delivered!';
    }
}
//test
function client(facade: ExpierencedSecretary) {
     console.log(facade.serveNewOrder());
}
const facade = new ExpierencedSecretary();
client(facade);
console.log('Organized by expierensed Secretary');
/* output
New order:
Supply - contract signed
Production - order received
Production - order fulfilled
Supply - product delivered!
Organized by expierensed Secretary
*/