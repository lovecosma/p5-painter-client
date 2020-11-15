function SoundParticle(x, y, i){
    this.x = x;
    this.y = y;
    this.i = i;
    this.loaded = false
    this.grainVol = 0
    this.grainOverlap = 0.1
    this.grainSize = 2
    this.grainPlaybackRate = 1
    this.grainDetune = 50
    this.grain = new Tone.GrainPlayer({
        "url": buffers[this.i].url,
        "mute": false,
        "volume": this.grainVol,
        "overlap": this.grainOverlap,
        "grainSize": this.grainSize,
        "playbackRate": this.grainPlaybackRate,
        "detune": this.grainDetune,
        "loop": true,
        "loopStart": 0,
        "loopEnd": 0,
        "reverse": false
    })
    this.grain.toDestination().start()
    this.update = function(){
        this.x += random(-10, 10);
        this.y += random(-10, 10);
        if(this.x > windowWidth){
            this.x = 0
        } else if(this.x < 0){
            this.x = 640
        }
        if(this.y > windowHeight){
            this.y = 0
        } else if(this.y < 0){
           this.y = 420
        }
    }

    this.show = function(){
        noStroke();
        let px = floor(this.x / vScale)
        let py = floor(this.y / vScale)
        let col = video.get(px, py)
        console.log(col);
        fill(col[0], col[1], col[2])
        ellipse(this.x, this.y, 24, 24);
    }

    
}