console.log('life');

var pos = { x: 1,  y: 1 }

function setup() {
    createCanvas(500,500);
}

function draw() {
    ellipse(pos.x, pos.y, 50);
    pos.x++;
    pos.y++;
}