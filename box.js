class Box{
    constructor(x,y) {
        super(x,y,20,20)
        
    }

    display(){
        /*var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        fill("white")*/

        if(this.body.speed < 3) {
            fill("blue")
            super.display()
        }
        else{
            World.remove(world,this.body)
            push()
            this.Visibility = this.Visibility - 5
            tint(255,this.Visibility)
            rect(this.x,this.y,20,30)
            pop()
        }
    }
}