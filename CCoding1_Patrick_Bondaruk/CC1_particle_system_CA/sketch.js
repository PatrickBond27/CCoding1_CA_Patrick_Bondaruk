let = stars = [];

for (let i = 0; i < stars.length; i++) {
    console.log(stars[i].posX)
}

function setup() {
    for (let counter = 0; counter < 300; counter++) {
        stars.push(new Star);
    }
    createCanvas(500, 500);
    background(255, 0, 0);
    rectMode(CENTER);
}

function draw() {
    background(40, 40, 180);
    for (let i = 0; i < stars.length; i++) {
    stars[i].step();
    stars[i].render();
    stars[i].opac();
    }
}