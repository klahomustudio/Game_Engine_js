import { Engine } from "./engine/Engine";
import { Entity } from "./engine/Entity";

let entity = new Entity();
let engine = new Engine();
engine.start();

let entitys = [];

document.onclick = function(event) {
    let item = new Entity();

    item.x = event.clientX - 32;
    item.y = event.clientY - 32;
    
    entitys.push(item);
    console.log(entitys)
}

engine.userUpdate = function(dt){
    entitys.forEach(i => {
        i.update(engine.canvas, dt);
    });
}

engine.userDraw = function(ctx) {
    entitys.forEach(i => {
        i.draw(ctx);
    });
};
