var mySnare, snareAmplitude, snarePlay, myKick, kickAmplitude, kickPlay;

function preload() {
    mySnare = loadSound("Assets/snare.mp3");
    myKick = loadSound("Assets/kick.mp3");
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    background(0)

    snareAmplitude = new p5.Amplitude();
    kickAmplitude = new p5.Amplitude();
}


function keyPressed() {
    //SnareButton
    if (keyCode === LEFT_ARROW) {
        snarePlay = true;
        kickPlay = false;
        mySnare.play();
    } else if (keyCode === ENTER) {
        kickPlay = true;
        snarePlay = false;
        myKick.play();
    }

}


function draw() {

    //SnareAmplitude
    if (snarePlay == true) {
        console.log('Snare is true');
        var level = snareAmplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);
        
        fill(col + 10)
        ellipse(300, 400, vol + 100);
        background(col);

        //SnareEllipse
        fill(90, 90, 90);
        ellipse(300, 400, vol / 1.2)
        snareplay = false;
    }

    //KickAmplitude
    if (kickPlay == true) {
        console.log('Kick is true')
        var level = kickAmplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        fill(col + 10)
        ellipse(200, 100, vol + 100);
        background(col);

        //KickEllipse
        fill(90, 90, 90);
        ellipse(200, 100, vol / 1.2);
        kickplay = false;
    }

}