function generate_maze_two(s) {
	let maze = Array(s);
	for(let i = 0; i < s; i++) {
		maze[i] = Array(s).fill("@");
	}

	console.log(maze);
}

generate_maze_two(((4 * parseInt(process.argv[2])) - 1));