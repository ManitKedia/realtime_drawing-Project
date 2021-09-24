function setup()
{
    video = createCapture(VIDEO);
    video.size(600, 550);

    video = createCapture(550, 500);
    video.size(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
}

function modelLoaded()
{
    console.log('PoseNet is Loaded');
}

function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results);
    }
}