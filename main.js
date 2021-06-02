lipX = 0;
lipY = 0;

function preload(){
    lip = loadImage("https://i.postimg.cc/YSh0DB1d/lip.png");
}

function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lipX = results[0].pose.lip.x;
        lipY = results[0].pose.lip.y;

        console.log("nose x =" + results[0].pose.lip.x);
        console.log("nose y =" + results[0].pose.lip.y);

        lipX = lipX - 25;
        lipY = lipY - 25;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(lip,lipX, lipY, 50, 50);
}

function take_Snapshot(){
    save("FilteredImage.png");
}