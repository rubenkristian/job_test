function generate_maze_two(s) {
	let maze = Array(s);
	for(let i = 0; i < s; i++) {
		maze[i] = Array(s).fill("@");
	}
	let currRow = 0;
	let currCol = 1;
	let lastIndex = Math.floor(s / 2);
	let direction = 0; // 0 down | 1 right | 2 top | 2 left
	let x = 1;
	let y = s - 2;
	while(true) {
		if(currRow === lastIndex && currCol === lastIndex) {
			maze[currRow][currCol] = " ";
			break;
		} else {
			maze[currRow][currCol] = " ";
			if(direction === 0) {
				if((currRow + 1) > y) {
					direction = 1;
				} else {
					currRow++;
				}
			} else if(direction === 1) {
				if((currCol + 1) > y) {
					direction = 2;
					y -= 2;
				} else {
					currCol++;
				}
			} else if(direction === 2) {
				if((currRow - 1) < x) {
					direction = 3;
					x += 2;
				} else {
					currRow--;
				}
			} else if(direction === 3) {
				if((currCol - 1) < x) {
					direction = 0;
				} else {
					currCol--;
				}
			}
		}
	}
	
	for(let j = 0; j < s; j++) {
		console.log(maze[j].join(""));
	}
}

generate_maze_two(((4 * parseInt(process.argv[2])) - 1));