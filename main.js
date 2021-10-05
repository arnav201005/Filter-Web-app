noseX = 0;
noseY = 0;

function preload() 
{
  rpng = loadImage('r.png')  
}

function setup()
{
 canvas = createCanvas(400,400);
 canvas.center();

 video = createCapture(VIDEO);
 video.size(400,400);
 video.hide()
 PN = ml5.poseNet(video, modelLoaded);
 PN.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Postnet is ready");
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw()
{
 image(video, 0, 0, 400, 400);

 image(rpng, noseX-10 , noseY+15, 20, 20);
 //fill(255,0,0);
 //storke(255,0,0);
 //circle(noseX,noseY,25);

 


}

function takesnapshot()
{
save('Dowoload.png')
}