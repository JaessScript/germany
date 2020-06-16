let canvas;
// let p1, p2;
let font,
	fontsize = 15;

function preload() {
	// font = loadFont('assets/Fipps-Regular.otf');
	font = loadFont('assets/Pixellari.ttf');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '1');

	// textFont(font);
	// textSize(width / 3);
	// textAlign(LEFT, TOP);
	// Set text characteristics
	textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);

	// p1 = createP('Germany is the 3rd most');
	// p2 = createP('surveilled country worlwide!'); 
	// p1.position(windowWidth / 8, windowHeight / 5);
	// p2.position(windowWidth / 8, (windowHeight / 5) + 70);
	// p1.style('font-size', '2em');
	// p2.style('font-size', '2em');
	// p1.style('font-family', '"geekyFont"');
}

function draw() {
	let s = "GERMANY IS THE 3rd WORLD'S MOST SURVEILLED COUNTRIES WITH 5.2 MILLIONS CCTVs!";
	noStroke();
	rectMode(CENTER);
	fill(255);
	rect(100, 150, windowWidth/4, (2*windowHeight)/5);
	fill(0);
	text(s, 100, 150, windowWidth/5, windowHeight/3);
}