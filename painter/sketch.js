
let video;
let vScale = 8
let buffers
let particles = [];
let sound_particles = []

let loaded = false

function preload(){
   buffers = loadJSON("http://localhost:3001/samples");
}


function setup() {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    createCanvas(640, 480);
    pixelDensity(1)
    video = createCapture(VIDEO)
    video.size(width/vScale, height/vScale)
    for(let i = 0; i < 1; i++){
        sound_particles.push(new SoundParticle(random(0, width), random(0, height), i))
    }
    for(let i = 0; i < 100; i++){
        particles.push(new Particle(random(0, width), random(0, height)))
    }
};

function draw(){
    video.loadPixels();
    // sound_particle.show()
    // sound_particle.update()
    // for(let i = 0; i < particles.length; i++){
    //     particles[i].update();
    //     particles[i].show();
    // }
    for(let i = 0; i < sound_particles.length; i++){
        sound_particles[i].update();
        sound_particles[i].show();
    }


    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
};