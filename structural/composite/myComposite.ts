/*структурный паттерн проектирования, который позволяет
 сгруппировать множество объектов в древовидную структуру,
 а затем работать с ней так, как будто это единичный объект*/

abstract class TreePart {
    protected parent: TreePart;
    public setParent(parent: TreePart) {
        this.parent = parent;
    }
    public getParent(): TreePart {
        return this.parent;
    }
    public add(part: TreePart): void {}
    public isComposite(): boolean {
        return false;
    }
    public abstract grow(): string;
}
class Leaf extends TreePart {
    public grow(): string {
        return '🍁';
    }
}
class Branch extends TreePart {
    protected children: TreePart[] = [];
    public add(part: TreePart): void {
        this.children.push(part);
        part.setParent(this);
    }

    public remove(part: TreePart): void {
        const partIndex = this.children.indexOf(part);
        this.children.splice(partIndex, 1);

        part.setParent(null);
    }
    public isComposite(): boolean {
        return true;
    }
    public grow(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.grow());
        }

        return `ᛘ(${results.join('+')})`;
    }
}

//test
function client(part: TreePart) {
    console.log(part.grow());
}
const tree = new Branch();
const branch1 = new Branch();
const branch2 = new Branch();
const branch3 = new Branch();
branch2.add(branch3);
branch1.add(new Leaf());
branch1.add(new Leaf());
branch1.add(new Leaf());
branch2.add(new Leaf());
branch2.add(new Leaf());
branch3.add(new Leaf());
branch3.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
client(tree);
function client2(part1: TreePart, part2: TreePart) {
    if (part1.isComposite()) {
        part1.add(part2);
    }
    console.log(part1.grow());
}
client2(tree, branch2);
console.log(tree)
