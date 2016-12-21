document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementById('draw');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.strokeStyle = '#BADA55';
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.lineWidth = 100;

	let isDrawing = false, lastX = 0, lastY = 0, hue = 0, direction = true;

	const draw = e => {
		if(!isDrawing) return;
  	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		ctx.beginPath();
		ctx.moveTo(lastX,lastY);
		ctx.lineTo(e.offsetX,e.offsetY);
		ctx.stroke();
		lastX = e.offsetX;
		lastY = e.offsetY;
		hue = (++hue) % 360;
		if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    	direction = !direction;
  	}
		if(direction) {
    	ctx.lineWidth++;
  	} else {
    	ctx.lineWidth--;
  	}
	}

	canvas.addEventListener('mousedown', (e) => {
		isDrawing = true
		lastX = e.offsetX;
		lastY = e.offsetY;
	});

	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mouseup', () => isDrawing = false);
	canvas.addEventListener('mouseout', () => isDrawing = false);
});
