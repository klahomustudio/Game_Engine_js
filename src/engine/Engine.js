export class Engine {
	constructor() {
		document.body.style.padding = "0px";
		document.body.style.margin = "0px";
		document.body.style.overflow = "hidden";

		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext("2d");

		document.body.appendChild(this.canvas);
	}

	start() {
		this.lastTime = new Date().getTime();

		window.requestAnimationFrame(this.loop.bind(this));
	}

	loop() {
		let time = new Date().getTime();
	    let deltaT = (time - this.lastTime) / 100;

		// Update
		if (this.userUpdate) this.userUpdate(deltaT);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
		// Draw
		if (this.userDraw) this.userDraw(this.ctx);

        this.lastTime = time;
		window.requestAnimationFrame(this.loop.bind(this));
	}
}
