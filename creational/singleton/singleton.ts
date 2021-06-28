// Класс Singleton определяет метод getInstance, который позволяет получить доступ к уникальному экземпляру класса
class Singleton {
    private static _instance: Singleton;

    // Конструктор должен быть всегда  приватным и предотвращать прямой вызов оператором new
    private constructor() {}

    // Статичный метод, который позволяет доступ к экземпляру Singleton'а
    public static getInstance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }

    //Бизнес логика синглтона
    public singletonsLogic() {}
}

function testIt() {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    if (singleton1 === singleton2) {
        console.log('Обе переменные содержат один и тот же экземпляр');
    } else {
        console.log('Провал синглтона');
    }
}

testIt();
