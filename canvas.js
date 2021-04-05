window.addEventListener('load', () => {
	const canvas = document.querySelector('#canvas');
	const context = canvas.getContext('2d');

	//Resizing
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	//varaibles
	let painting = false;

	function startPosition(e) {
		painting = true;
		draw(e);
	}

	function finishedPosition() {
		painting = false;
		// reset path to not connet with each other
		context.beginPath();
	}

	function draw(e) {
		if (!painting) return;
		context.lineWidth = 10;
		context.lineCap = 'round';
		context.lineTo(e.clientX, e.clientY);
		// dont forget stroke to visualize
		context.stroke();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}

	//EventListeners
	canvas.addEventListener('mousedown', startPosition);
	canvas.addEventListener('mouseup', finishedPosition);
	canvas.addEventListener('mousemove', draw);
});
