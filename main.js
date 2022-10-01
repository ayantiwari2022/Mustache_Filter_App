noseX=0;
noseY=0;

function preload() {
    img = loadImage("https://i.postimg.cc/zXYCc7wX/mustache-student-math-favorite-for-friday-the-the-1-1.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video =  createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(img, noseX - 23, noseY + 8, 50, 15)
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('poseNet is Initialized!😀');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}