leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 410);
    canvas.position(560,110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background('#969A97');
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#f9584b");
    text('Aarya',50,400);
}

function modelLoaded()
{
    console.log('PoseNet is Initalized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
