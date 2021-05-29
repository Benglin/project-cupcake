export default class Painter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    paintSomething() {
        ellipse(this.x, this.y, 80, 80);
    }
}
