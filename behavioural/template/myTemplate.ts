//поведенческий паттерн проектирования, который определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы

abstract class Company {
    public templateMethod(): void {
        this.boss();
        this.staff();
        this.frelancer();
    }
    protected boss(): void {
        console.log('Сеньор: я делаю основную часть работы');
    }
    protected abstract staff(): void;
    protected frelancer(): void { }
}

class Middle extends Company {
    protected staff(): void {
        console.log('Мидл я помогаю сеньору');
    }
}

class Frelancer extends Company {
    protected staff(): void {
        console.log('Фрилансер - по необходимости');
    }
    protected frelancer(): void {
        console.log('Учавствую периодически');
    }
}

//test
(new Middle()).templateMethod();
(new Frelancer()).templateMethod();

/* output
Сеньор: я делаю основную часть работы
Мидл я помогаю сеньору
Сеньор: я делаю основную часть работы
Фрилансер - по необходимости
Учавствую периодически*/
