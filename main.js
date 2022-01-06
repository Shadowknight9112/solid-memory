//Create a reference for canvas
canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
Icarwidth=75;
Icarheight=100;
Icar_x=5;
Icar_y=255;

background_image = "parkingLot.jpg";
Icar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    
    Icar_imgTag = new Image();
    Icar_imgTag.onload = uploadIcar;
    Icar_imgTag.src = Icar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, mycanvas.width, canvas.height);

}

function uploadIcar() {
	//Define function ‘uploadgreencar’
	ctx.drawImage(Icar_image, Icar_x, Icar_y, Icarwidth, Icarheight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (Icar_y >=0)
    {
        Icar_y = Icar_y - 5;
        console.log("When up arrow is pressed , x = " + Icar_x + " | y = " + Icar_y);
        uploadBackground();
        uploadIcar();
    }
}

function down()
{
	//Define function to move the car downward
	if (Icar_y <=400)
    {
        Icar_y = Icar_y + 5;
        console.log("When down arrow is pressed , x = " + Icar_x + " | y = " + Icar_y);
        uploadBackground();
        uploadIcar();
    }
}

function left()
{
	//Define function to move the car left side
	if (Icar_x >=0)
    {
        Icar_x = Icar_x - 5;
        console.log("When left arrow is pressed , x = " + Icar_x + " | y = " + Icar_y);
        uploadBackground();
        uploadIcar();
    }
}

function right()
{
	//Define function to move the car right side
	if (Icar_x <=800)
    {
        Icar_x = Icar_x + 5;
        console.log("When right arrow is pressed , x = " + Icar_x + " | y = " + Icar_y);
        uploadBackground();
        uploadIcar();
	}
}
