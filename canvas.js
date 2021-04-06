var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var circles = {};
circles.red = {
	x: 100,
	y: 100,
	height: 200,
	width: 200,
	label: 'dog',
	color: 'red',
	visibleDuration: 20 * 1000,
	visibleCountdown: 0,
	start: 5 * 1000,
};
circles.blue = {
	x: 175,
	y: 150,
	height: 300,
	width: 350,
	label: 'cat',
	color: 'blue',
	visibleDuration: 150 * 1000,
	visibleCountdown: 0,
	start: 5 * 1000,
};
let start;
let ratio;

function setupCanvas() {
	window.addEventListener('resize', resize);
	ratio = canvas.width / window.innerWidth;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function animate(currentTime) {
	if (start === undefined) start = currentTime;
	const elapsed = currentTime - start;
	requestAnimationFrame(animate);

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var i in circles) {
		var circle = circles[i];
		circle.start -= 100;
		if (circle.start < 0) {
			circle.visibleCountdown -= elapsed;
			if (circle.visibleCountdown > 0) {
				drawRect(circle);
				drawLabel(circle);
			}
		}
	}
}

requestAnimationFrame(animate);

function drawLabel(incident) {
	// label setting
	let fontBase = 2;
	let fontSize = 1;
	fontSize = fontBase * ratio < 1 ? fontSize : fontBase * ratio;

	ctx.font = `${fontSize}em Arial`;
	let textWidth = ctx.measureText(incident.label).width;

	ctx.fillStyle = 'red';
	const padding = 10;
	ctx.fillRect(
		incident.x * ratio,
		incident.y * ratio - padding * 4,
		textWidth + padding * 2,
		parseInt(ctx.font, 10) + padding * 2 + 5
	);
	ctx.fillStyle = '#000';
	ctx.fillText(
		incident.label,
		incident.x * ratio + padding,
		incident.y * ratio - padding
	);
	ctx.restore();
	s;
}

function drawRect(incident) {
	ctx.strokeStyle = incident.color;
	ctx.strokeRect(
		incident.x * ratio,
		incident.y * ratio,
		incident.width * ratio,
		incident.height * ratio
	);
	ctx.restore();
}

function showCircle(circle) {
	circle.visibleCountdown = circle.visibleDuration;
}

function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
setupCanvas();
showCircle(circles['red']);
showCircle(circles['blue']);
