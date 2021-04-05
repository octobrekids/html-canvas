window.addEventListener('load', () => {
	const canvas = document.querySelector('#canvas');
	const context = canvas.getContext('2d');

	//Resizing
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	context.beginPath();
	// start position
	context.moveTo(100, 100);
	context.lineTo(200, 100);
	context.lineTo(200, 150);
	context.closePath();
	context.stroke();
});
