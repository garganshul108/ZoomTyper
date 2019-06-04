//	cell.js


function Cell(i , j){

	this.x = i;
	this.y = j;

	this.walls = [true, true, true, true];
	this.visited = false;

	this.highlight = function(r,g,b){
		var i = this.x * scl;
		var j = this.y * scl;
		fill(r,g,b);
		rect(i,j,scl,scl);
	}

	this.removeWalls = function(next){

		// console.log("removing walls");
		if(this.x - next.x === 1){
			this.walls[0] = false;
			next.walls[2] = false;
			// console.log(this.walls);

		} else if(this.x - next.x === -1) {
			this.walls[2] = false;
			next.walls[0] = false;
		}

		if(this.y - next.y === -1)
		{
			this.walls[1] = false;
			next.walls[3] = false;

		} else if(this.y - next.y === 1) {
			this.walls[3] = false;
			next.walls[1] = false;
		}
	}

	this.index = function(i,j){
		if(i < 0 || i > (rows - 1) || j < 0 || j > (cols - 1) ) return -1;
		else return i * cols + j;
	}

	this.checkNeighbours = function(boolean){
		var neighbours = [];

		var top = grid[this.index(i-1 , j)];
		var right = grid[this.index(i, j+1)];
		var bottom = grid[this.index(i+1, j)];
		var left = grid[this.index(i, j-1)];

		if(top && !(!top.visited ^ boolean)) neighbours.push(top);
		if(right && !(!right.visited ^ boolean)) neighbours.push(right);
		if(bottom && !(!bottom.visited ^ boolean)) neighbours.push(bottom);
		if(left && !(!left.visited ^ boolean)) neighbours.push(left);

		// console.log (neighbours.length);
		if(neighbours.length > 0)
		{
			// if(neighbours.length > 1)
				return neighbours[floor(random(0,neighbours.length))];
			// else
				// return neighbours[neighbours.length-1];
		} else {
			return undefined;
		}
	}



	this.show = function(){

		var i = this.x * scl;
		var j = this.y * scl;


		if(this.visited)
		{
			noStroke();
			noFill();
			rect(i,j,scl,scl);
			 stroke(255);	
		}

		stroke(255);
		// TOP
		if (this.walls[0])
		{
			 stroke(255);
			line(i     ,j       ,i       ,j+scl);
		}
		// RIGHT
		if (this.walls[1])
		{
			 stroke(255);
			line(i     ,j + scl ,i + scl ,j+scl);	
		}
		// BOTTOM
		if (this.walls[2])
		{
			 stroke(255);
			line(i+scl ,j + scl ,i+scl,j);
		}
		// LEFT
		if (this.walls[3])
		{
			 stroke(255);
			line(i     ,j     ,i+scl,j);
		}



	};



}
