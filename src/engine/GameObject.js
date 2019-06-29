export class GameObject {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.parent = null;
        this.children = [];
    }

    addChildren(gameObject) {
        if (gameObject instanceof GameObject) {
            gameObject.parent = this;
            this.children.push(gameObject);
        } else {
            return "You need to put a instance of 'GameObject' as a parameter";
        }
    }

    update(deltaT) {
        this.children.forEach((child, index) => {
            child.update(deltaT);
        });
    }

    draw(ctx) {
        this.children.forEach((child, index) => {
            child.draw(ctx);
        });
    }
}