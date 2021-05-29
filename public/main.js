import Painter from "./components/painter.js";

const painter = new Painter(50, 50);

window.setup = function () {
    createCanvas(windowWidth, windowHeight);
};

window.draw = function () {
    background(128, 172, 128);
    painter.paintSomething();
};
