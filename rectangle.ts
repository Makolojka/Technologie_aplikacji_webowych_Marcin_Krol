class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }
}

class Rectangle {
    private topLeft: Point;
    private topRight: Point;
    private bottomLeft: Point;
    private bottomRight: Point;

    constructor(
        topLeft: Point,
        topRight: Point,
        bottomLeft: Point,
        bottomRight: Point
    ) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }

    move(dx: number, dy: number): void {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }

    getArea(): number {
        const width = this.topLeft.getX() - this.topRight.getX();
        const height = this.topLeft.getY() - this.bottomLeft.getY();
        return Math.abs(width * height);
    }
}

export { Point, Rectangle };
