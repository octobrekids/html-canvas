window.addEventListener('load', () => {
	const canvas = document.querySelector('#canvas');
	const context = canvas.getContext('2d');

	//Resizing
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	// need to define before use
	context.strokeStyle = 'red';
	context.lineWidth = 5;
	context.strokeRect(50, 50, 200, 200);
	context.strokeStyle = 'blue';
	context.strokeRect(100, 100, 200, 200);
});
