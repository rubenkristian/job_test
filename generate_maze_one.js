function generate_maze_one(s) {
	let k = 0;
	let result = "";
	for(let i = 0; i < s; i++) {
		result = "";
		for(let j = 0; j < s; j++) {
			if(j === 0 || j === (s-1)) {
				result += "@";
			} else {
				if(i % 2 === 0) {
					if(k % 2 === 0) {
						result += (j === 1) ? " " : "@";
					} else {
						result += (j === (s - 2)) ? " " : "@";
					}
				} else {
					result += " ";
				}
			}
		}
		if(i % 2 == 0) {
			k++;
		}
		console.log(result);
	}
}
generate_maze_one(((4 * parseInt(process.argv[2])) - 1));