
var scl = 20;
var cols,rows; 

var current,current2;
var next,next2;
var grid = [];

var stk = [];
var stk2 = [];

function setup(){
	// console.log("setting up");
	createCanvas(500,500);
	cols =  floor(width  / scl);
	rows = 	floor(height / scl);
	// frameRate(1);
	for(var i = 0; i < rows; i++)
		for(var j = 0; j < cols; j++)
			grid.push(new Cell(i,j));
	
	img = loadImage("back.jpg");

	// console.log("grid set");

	current = grid[floor(random(0,grid.length-2)+1)];
	
}

function draw(){
	// frameRate(5);
	//image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  	//image(img, 0, height/2, img.width/2, img.height/2);
	background(211,12,200);
	for (i = 0; i < grid.length; i++)
	{
		grid[i].show();
	}	
	var prev = 0;
	prev = stk.length;
	current.visited = true;
	current.highlight(101, 222 , 201);
	next = current.checkNeighbours(true);

	if (next) {
		// console.log("next found");
		current.removeWalls(next);
		// console.log("removed walls");
		next.visited = true;
		// console.log("visited next");
		stk.push(current);
		current = next;
	} else if(stk.length > 0) {
		// console.log("trapped");
		// console.log("tracking back");
		current = stk.pop();
	}
	// console.log("prev "+prev);
	// console.log("stk "+stk.length);
	if(prev < stk.length) {
		console.log("gain");

	} else if (prev > stk.length) {
		console.log("loss");

	} else if (prev == stk.length) {
		console.log("stagnent");

	}
}
