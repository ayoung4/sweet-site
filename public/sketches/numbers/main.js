var RATIOS = [
    (1 / 2),
    (1 / 3),
    (5 / 13),
    (1 / 5),
    (1 / 9),
    (51 / 101),
    (1 / 11),
    (1 / 13),
    (1 / 23),
    Math.E,
    Math.PI,
    1.61803398875, // golden ratio
    2.685252, // Khinchin’s constant
    0.207879576, // i^i
    Math.pow(Math.PI, Math.E),
    Math.pow(2, Math.sqrt(2)),
    (7 / 33), // starts off very chaotic
    Math.sqrt(3),
    Math.sqrt(2),
    (29 / 113), // ratio of primes, very close to 1 / 4
    1.303577269034, // conway's growth constant
];

var LABELS = [
    '1 / 2 (0.5)',
    '1 / 3 (0.3333...)',
    '5 / 13 (0.3846...)',
    '1 / 5 (0.2)',
    '1 / 9 (0.1111...)',
    '51 / 101 (0.5049...)',
    '1 / 11 (0.5049...)',
    '1 / 13 (0.0769...)',
    '1 / 23 (0.0434...)',
    'e (2.7182...)',
    'pi (3.1415...)',
    'phi (1.61803)',
    'Khinchin’s Constant (2.6852...)',
    'i ^ i (0.2078...)',
    'pi ^ e (22.4591...)',
    '2 ^ sqrt(2) (2.6651...)',
    '7 / 33 (0.2121...)',
    'sqrt(3) (1.7320...)',
    'sqrt(2) (1.4142...)',
    '29 / 113 (0.2566...)',
    'Conway’s Constant (1.3057...)'
];

var WIDTH = 500;
var HEIGHT = 500;

var NUM_SEEDS = 200;
var SEED_SIZE = 25;

var global__step = 0;
var global__i = 0;
var global__color = [];

var ORIGIN = {
    x: WIDTH / 2,
    y: HEIGHT / 2,
};

function randomizeColor() {
    global__color = [
        random(100, 215),
        random(100, 215),
        random(100, 215),
    ];
}

function drawSeed(position, color) {
    stroke(color[0] + 50, color[1] + 50, color[2] + 50, 100)
    fill(color[0], color[1], color[2], 10);
    ellipse(position.x, position.y, SEED_SIZE * 5);
    stroke(color[0] + 50, color[1] + 50, color[2] + 50, 50)
    fill(color[0], color[1], color[2], 5);
    ellipse(position.x, position.y, SEED_SIZE);
}

function degToRad(d) {
    return d * (Math.PI / 180);
}

function findPosition(origin, rotation, distance) {
    var radians = degToRad(rotation);
    var offsetX = Math.cos(radians) * distance;
    var offsetY = Math.sin(radians) * distance;
    return {
        x: origin.x + offsetX,
        y: origin.y + offsetY,
    };
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    frameRate(30);
    randomizeColor();
    background(33);
    textSize(18);
}

function draw() {

    if (global__step < NUM_SEEDS) {

        var angle = 360 * (RATIOS[global__i] * global__step);
        var position = findPosition(ORIGIN, angle, (global__step * 3));
        drawSeed(position, global__color);
        global__step++
        stroke(255);

    } else {

        global__step = 0;
        randomizeColor();
        background(33);

        if (global__i < RATIOS.length - 1) {

            global__i++;

        } else {

            global__i = 0;

        }


    }
    text(LABELS[global__i].split('').join(' '), 35, 50);


}