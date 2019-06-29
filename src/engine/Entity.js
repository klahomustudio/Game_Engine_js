import { GameObject } from "./GameObject";

export class Entity extends GameObject{
	constructor() {
        super();
        this.img = new Image();
        this.img.src = "./res/images.png";

		this.dirx = 1;
        this.diry = 1;
        
        this.speed = Math.random() * 10 + 10;
	}

	update(canvas, dt) {
		this.x += this.speed * this.dirx * dt;
		this.y += this.speed * this.diry * dt;

		if (this.x > canvas.width - 128 || this.x < 0) this.dirx *= -1;
		if (this.y > canvas.height - 128 || this.y < 0) this.diry *= -1;
        
        super.update();
    }
    
    draw(ctx) {
        super.draw();
        
        ctx.drawImage(this.img, this.x, this.y, 128, 128);
    }
}
