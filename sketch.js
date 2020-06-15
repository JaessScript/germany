let canvas;
let p1, p2;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '1');

	p1 = createP('Germany is the 3rd most');
	p2 = createP('surveilled country worlwide!');
	p1.position(windowWidth / 8, windowHeight / 5);
	p2.position(windowWidth / 8, (windowHeight / 5) + 70);
	p1.style('font-size', '2em');
	p2.style('font-size', '2em');
	p1.style('font-family', '"geekyFont"');
}

function draw() {

}