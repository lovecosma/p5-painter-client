function SoundParticle(x, y, i){
    this.x = x;
    this.y = y;
    this.i = i;
    this.loaded = false
    this.grainVol = 0
    this.grainOverlap = 0.05
    this.grainSize = 0.01
    this.grainPlaybackRate = 1
    this.grainDetune = 50
    this.grain = new Tone.GrainPlayer({
        "url": buffers[this.i].url,
        "mute": false,
        "volume": this.grainVol,
        "overlap": this.grainOverlap,
        "grainSize": this.grainSize,
        "playbackRate": 0.5,
        "detune": this.grainDetune,
        "loop": true,
        "loopStart": 0.5,
        "loopEnd": 1,
        "reverse": false
    })
    this.grain.toDestination().start()
    this.update = function(){
        this.x += random(-10, 10);
        this.y += random(-10, 10);
        if(this.x > 640){
            this.x = 0
            this.grain.reverse = !this.grain.reverse
        } else if(this.x < 0){
            this.x = 640
            this.grain.reverse = !this.grain.reverse
            this.grain.mute = !this.grain.mute
        }
        if(this.y > 420){
            this.y = 0
            this.grain.playbackRate = this.grain.playbackRate * 2

        } else if(this.y < 0){
           this.y = 420
           this.grain.playbackRate = this.grain.playbackRate * 0.5
        }
    }

    this.show = function(){
        noStroke();
        let px = floor(this.x / vScale)
        let py = floor(this.y / vScale)
        let col = video.get(px, py)
        let avg = ((col[0]+col[1]+col[2])/3)
        this.grainOverlap = map(col[2], 0, 255, 0.1, 0.9)
        this.grain.grainSize = map(col[1], 0, 255, 0.1, 0.9)
        this.grain.detune = map(col[0], 0, 255, -1200, 1200)
        if(round(this.x % 3) == 0){
            this.grain.mute =true
        } else {
            this.grain.mute =false
        }
        console.log(round(this.x % 3) == 0);
        let volume = map(col[2], 0, 255, -1, 10)
        this.grain.volume.value = volume
        fill(col[0], col[1], col[2])
        ellipse(this.x, this.y, 24, 24);
    }

    
}