class Database {
    private static _connection: Database;

    private constructor(url: string) {
        console.log(`Подключились к базе - ${url}. `)
    }

    public static connectToDatabase(): Database {
        if (!Database._connection) {
            Database._connection = new Database('MongoDB');
        }
        return Database._connection;
    }

    public useDatabase(operation: string) {
        console.log(operation);
    }
}

function clients() {
    const connectedHere = Database.connectToDatabase();
    connectedHere.useDatabase('Пишем в базу из 1го подключения');

    const connectedThere = Database.connectToDatabase();
    connectedThere.useDatabase('Читаем из базы из 2го подключения');

    if (connectedHere === connectedThere) {
        console.log(
            'Подключились к одной и той же базе из разных частей программы'
        );
    } else {
        console.log('Провал!');
    }
}

clients();
