function generate_maze_one(s) {
	let maze = Array(s);
	for(let i = 0; i < s; i++) {
		maze[i] = Array(s);
	}
	let k = 0;
	let result = "";
	for(let i = 0; i < s; i++) {
		result = "";
		for(let j = 0; j < s; j++) {
			if(j === 0 || j === (s-1)) {
				result += "@";
				maze[i][j] = "@";
			} else {
				if(i % 2 === 0) {
					if(k % 2 === 0) {
						maze[i][j] = (j === 1) ? " " : "@";
						result += (j === 1) ? " " : "@";
					} else {
						maze[i][j] = (j === (s - 2)) ? " " : "@";
						result += (j === (s - 2)) ? " " : "@";
					}
				} else {
					maze[i][j] = " ";
					result += " ";
				}
			}
		}
		if(i % 2 == 0) {
			k++;
		}
		// console.log(result);
	}
	for(let j = 0; j < s; j++) {
		console.log(maze[j].join(""));
	}
}
generate_maze_one(((4 * parseInt(process.argv[2])) - 1));