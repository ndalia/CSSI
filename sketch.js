let drawConfig = {
    color: 'black',
    weight: 4,
};
let canDraw = true;
var s = function(sketch){
    sketch.setup = function(){
        document.body.style['userSelect'] = 'none';
        let h = document.body.clientHeight;
        let c = sketch.createCanvas(sketch.windowWidth,h);
        c.position(0,0);
        c.style('pointer-events', 'none');
        sketch.clear();
    }
        
    sketch.draw = function(){
        sketch.stroke(drawConfig.color);
        sketch.strokeWeight(drawConfig.weight);
        if(sketch.mouseIsPressed && canDraw){
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    }
}
var myp5 = new p5(s);


// /* global p5 */

// let p = new p5(() => {});



// let priorX, priorY;
// //TODO: Add variable to start a new game.

// p.setup = function() {
//     document.body.style['userSelect'] = 'none';
//     let h = document.body.clientHeight;
//     let c = p.createCanvas(p.windowWidth,h);
//     c.position(0,0);
//     c.style('pointer-events', 'none');
//     p.clear();
//     priorX = 0;
//     priorY = 0;
    
// }

// p.draw = function () {
//     p.stroke(drawConfig.color);
//     p.strokeWeight(drawConfig.weight);
//     if(p.mouseIsPressed){
//         p.line(priorX, priorY, p.mouseX, p.mouseY);
//     }
//     priorX = p.mouseX;
//     priorY = p.mouseY;
// }



