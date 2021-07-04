/*
структурный паттерн проектирования, который позволяет вместить бóльшее количество
объектов в отведённую оперативную память. Легковес экономит память, разделяя общее 
состояние объектов между собой, вместо хранения одинаковых данных в каждом объекте.
*/

//lightweight
class TreeType {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    public info(x: number, y: number) {
        console.log(`tree planted at ${x} ${y}`);
    }
}

class Tree {
    x: number;
    y: number;
    type: TreeType;
    constructor(x: number, y: number, type: TreeType) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    public info() {
        this.type.info(this.x, this.y);
    }
}
class TreeFactory {
    static treeTypes: TreeType[] = [];
    static getTreeType(key: string): TreeType {
        let found = TreeFactory.treeTypes.filter(
            (element) => element.name == key
        );
        if (found.length > 0) return found[0];
        let newTreeType = new TreeType(key);
        TreeFactory.treeTypes.push(newTreeType);
        return newTreeType;
    }
    public showTypes(): void {
        TreeFactory.treeTypes.forEach((element) => {
            console.log(element);
        });
    }
}

class Forest {
    trees: Tree[] = [];
    plantTree(x: number, y: number, name: string) {
        let type = TreeFactory.getTreeType(name);
        let tree = new Tree(x, y, type);
        // tree.info();
        this.trees.push(tree);
    }
    showTrees() {
        this.trees.forEach((element) => console.log(element));
    }
    showTreesQantity() {
        console.log(`Trees generated: ${this.trees.length}`);
    }
}

//test
const plantFactory = new TreeFactory();
const forest = new Forest();
forest.plantTree(3, 3, 'birch');
forest.trees[0].info();
for (let i = 0; i < 100000; i++) forest.plantTree(1, 1, 'oak');
for (let i = 0; i < 499; i++) forest.plantTree(2, 2, 'birch');
plantFactory.showTypes();
forest.showTreesQantity();
/* output
tree planted at 3 3
TreeType { name: 'birch' }
TreeType { name: 'oak' }
Trees generated: 100500
*/