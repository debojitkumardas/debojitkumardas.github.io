var canvasDimX = 400;
var canvasDimY = 400;
function setup() {
    createCanvas(canvasDimX, canvasDimY);
}

function draw() {
    // background(255, 255, 255);
    background(255);  // for grayscale one can use just one argument

    let dimX, dimY, centerX, centerY, deltaX, deltaY, iter_N;

    dimX = canvasDimX;
    dimY = canvasDimY;
    centerX = dimX / 2.0;
    centerY = dimY / 2.0;
    iter_N = 40;
    deltaX = centerX / iter_N;
    deltaY = centerY / iter_N;

    for (let i = 0; i < iter_N; ++i) {
        line(centerX + (iter_N - i) * deltaX, centerY, centerX, centerY - i * deltaY);
        line(centerX - i * deltaX, centerY, centerX, centerY - (iter_N - i) * deltaY);
        line(centerX - (iter_N - i) * deltaX, centerY, centerX, centerY + i * deltaY);
        line(centerX + i * deltaX, centerY, centerX, centerY + (iter_N - i) * deltaY);
    }
}
