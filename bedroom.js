status= "";
objects= [];
img= "";
function setup()
{
    canvas= createCanvas(600, 400);
    canvas.center();
    canvas.background("cyan");
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "Status: Bed, chair ";
}
function preload()
{
    img = loadImage('Bedroom_img.jpg');
}
function draw()
{
    image(img, 0 , 0, 600, 400);

    if(status != "")
    {
        for(i= 0; i < objects.length; i++)
        {
            fill('red');
            percent= floor(objects[i].confidence*100);
            text(object[i].label+ ""+ percent+ "%", objects[i].x+15, object[i].y+15 );
            noFill();
            stroke();
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
    fill("red");
    fill("red");
    text("Bed", 40, 115);
    noFill();
    stroke("red");
    rect(30, 100, 400, 250);

    fill("red");
    text("Chair", 435, 120);
    noFill();
    stroke("red");
    rect(415, 90, 200, 260);
}
function modelLoaded()
{
    console.log("Model Loaded");
    status= true;
    objectDetector.detect(img, gotResult)
}
function gotResult()
{
    console.log(results);
    objects= results;
}
