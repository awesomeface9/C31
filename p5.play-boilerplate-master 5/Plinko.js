class Pinko{
    constructor(x, y, r){
        var options = {
            isStatic : true,
            density : 1,
            restitution : 1,
            friction : 0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r =r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipeMode(RADIUS);
        ellipse(0,0,this.r, this.r);
        pop();
    }
}