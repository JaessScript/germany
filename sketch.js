let canvas;
// let p1, p2;
let font,
	fontsize = 15;
let x, y;

function preload() {
	// font = loadFont('assets/Fipps-Regular.otf');
	font = loadFont('assets/Pixellari.ttf');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '1');

	// Set text characteristics
	textFont(font);
	// textSize(fontsize);
	textAlign(CENTER, CENTER);

	// p1 = createP('Germany is the 3rd most');
	// p2 = createP('surveilled country worlwide!'); 
	// p1.position(windowWidth / 8, windowHeight / 5);
	// p2.position(windowWidth / 8, (windowHeight / 5) + 70);
	// p1.style('font-size', '2vw');
	// p2.style('font-size', '2em');
	// p1.style('font-family', '"geekyFont"');

	if (windowWidth > 700) {
		x = 300;
		y = 150;
	} else {
		x = 100;
		y = 200;
	}
}

function draw() {
	let s = "GERMANY IS THE 3rd WORLD'S MOST SURVEILLED COUNTRIES WITH 5.2 MILLIONS CCTVs!";
	noStroke();
	rectMode(CENTER);
	fill(255);
	// Maybe instead of windowWidth, make the width and height proportional to the fontsize?
	rect(x, y, windowWidth / 3, (2 * windowHeight) / 5);
	fill(0);
	textSize(fontsize);
	text(s, x, y, windowWidth / 5, windowHeight / 3);
}

function getRandomColor() {
	let red = random(255);
	let green = random(255);
	let blue = random(255);
	let c = color(red, green, blue);

	return c;
}