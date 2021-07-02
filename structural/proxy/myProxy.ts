//это объект, который выступает прослойкой между клиентом и реальным сервисным объектом.

interface Manager {
    manageVisitor(): void;
}
class Boss implements Manager {
    public manageVisitor(): void {
        console.log('Boss: you are welcome!');
    }
}
class Secretary implements Manager {
    private boss: Boss;
    constructor(boss: Boss) {
        this.boss = boss;
    }
    public manageVisitor(): void {
        if (this.isBossHere()) {
            console.log('Secretary: The boss is waiting for you, sir!');
            this.boss.manageVisitor();
        }
    }
    private isBossHere(): boolean {
        console.log('Secretary: Checking if the boss is here ... yes');
        return true;
    }
}

//test
function client(manager: Manager) {
    manager.manageVisitor();
}

const boss = new Boss();
const secretary = new Secretary(boss);
client(boss);
client(secretary);
/* output
Boss: you are welcome!
Secretary: Checking if the boss is here ... yes
Secretary: The boss is waiting for you, sir!
Boss: you are welcome! 
*/