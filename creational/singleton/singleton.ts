// Класс Singleton определяет метод getInstance, который позволяет получить доступ к уникальному экземпляру класса
class Singleton {
    private static instance: Singleton;

    // Конструктор должен быть всегда  приватным и предотвращать прямой вызов оператором new
    private constructor() {}

    // Статичный метод который позволяет доступ к экземпляру Singleton'а
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    //Бизнес логика синглтона
    public singletonsLogic() {}
}

// test
function testIt() {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    if (singleton1 === singleton2) {
        console.log('Обе переменные содердат один и тот же экземпляр');
    } else {
        console.log('Провал синглтона');
    }
}

testIt();
