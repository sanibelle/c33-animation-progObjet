let mousePosX= 0;
let mousePosY = 0;

window.addEventListener("load", () => {
	document.getElementById("main").onmousemove = event => {
		mousePosX = event.pageX;
		mousePosY = event.pageY;
		console.log(mousePosX, mousePosY);
	}
});

