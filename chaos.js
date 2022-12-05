var coordinates;			// Points of main triangle
var lastPoint;				// Last point drawn
var canvas, ctx;
const totalPoints = 500000;		// No of points to be drawn

function init() {
	let h = window.innerHeight;
	let w = window.innerWidth - 20;

	// Set triangle points
	coordinates = [
		{ x: w / 2, y: 0 },
		{ x: 10, y: h - 10 },
		{ x: w - 30, y: h - 10 }
	];

	canvas = document.createElement("canvas");
	canvas.setAttribute("width", w);
	canvas.setAttribute("height", h);
	document.body.appendChild(canvas);
	ctx = canvas.getContext("2d");

	// Plot the triangle points
	coordinates.forEach(p => {
		plotPoint(p);
	});

	// Initial point
	lastPoint = { x: w / 2, y: h / 2 };

	generate();
}

function plotPoint(point) {
	ctx.fillRect(point.x, point.y, 1, 1);
}

function generate() {
	for (let i = 0; i < totalPoints; i++) {
		// Choose random corner of the triangle 
		let p = Math.floor(Math.random() * 3);
		let midPoint = {
			x: (lastPoint.x + coordinates[p].x) / 2,
			y: (lastPoint.y + coordinates[p].y) / 2
		}
		plotPoint(midPoint);

		// Update last point drawn
		lastPoint = midPoint;
	}
}