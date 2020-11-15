function Particle(x, y){
    this.x = x;
    this.y = y;
  

    this.update = function(){
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    }

    this.show = function(){
        noStroke();
        let px = floor(this.x / vScale)
        let py = floor(this.y / vScale)
        let col = video.get(px, py)
        fill(col[0], col[1], col[2])
        ellipse(this.x, this.y, 24, 24);
    }
}