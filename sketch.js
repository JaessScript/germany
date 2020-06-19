let canvas;
let next;
let bg_trophy;
let paragraphs;
let info;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.position(windowWidth / 2, 5);
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	info = select('#info');
	info.position(windowWidth / 8, windowHeight / 5);
	info.style('text-align', 'center');
	info.style('color', 'black');

	paragraphs = selectAll('.paragraph');
	for (let p of paragraphs) {
		p.style('font-size', '1.5em');
		p.style('font-family', 'courier');
	}
	paragraphs[0].style('position', 'absolute');
	paragraphs[0].style('top', '15%');
	paragraphs[0].style('left', '25%');
	paragraphs[0].style('transform', 'translate(-15%,-25%');
	paragraphs[0].style('background-color', 'rgba(255, 255, 255, 0.7)');
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function draw() {
	clear();
}
