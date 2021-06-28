// Класс Singleton определяет метод getInstance, который позволяет получить доступ к уникальному экземпляру класса
var Singleton = /** @class */ (function () {
    // Конструктор должен быть всегда  приватным и предотвращать прямой вызов оператором new
    function Singleton() {
    }
    // Статичный метод, который позволяет доступ к экземпляру Singleton'а
    Singleton.getInstance = function () {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    };
    //Бизнес логика синглтона
    Singleton.prototype.singletonsLogic = function () { };
    return Singleton;
}());
function testIt() {
    var singleton1 = Singleton.getInstance();
    var singleton2 = Singleton.getInstance();
    if (singleton1 === singleton2) {
        console.log('Обе переменные содержат один и тот же экземпляр');
    }
    else {
        console.log('Провал синглтона');
    }
}
testIt();
