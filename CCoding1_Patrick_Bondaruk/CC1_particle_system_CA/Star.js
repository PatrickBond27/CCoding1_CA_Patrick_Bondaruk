class Star {
    constructor() {
        this.posX = Math.round(Math.random()*500);
        this.posY = Math.round(Math.random()*500);
        this.pos = createVector(Math.round(Math.random()*500), Math.round(Math.random()*500));
        this.speed = createVector(Math.round(Math.random()*4 - 2), Math.round(Math.random()*4 - 2));
        this.radius = Math.round(Math.random()*8 + 4);
        this.xSpeed = Math.random()*1 - 1;
        this.ySpeed = Math.random()*1 - 1;
        this.lifetime = Math.random()*5 + 255;
    }

    render() {
        let myAngle = this.speed.heading();
        push();
        translate(this.posX, this.posY);
        rotate(myAngle);
        fill(255, this.lifetime);
        rect(0, 0, this.radius, this.radius);
        pop();
    }

    step() {
        this.posX = this.posX + this.xSpeed;
        this.posY = this.posY + this.ySpeed;

        if (this.posX > 500) {
            this.posX = 0;
        }
        if (this.posX < 0) {
            this.posX = 500;
        }
        if (this.posY > 500) {
            this.posY = 0;
        }
        if (this.posY < 0) {
            this.posY = 500;
        }
    }

    opac() {
        this.lifetime -= 1;

        if (this.lifetime < 40) {
            this.lifetime += 1;
        }
    }
}