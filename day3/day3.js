function ReadFileSync(fileName)
{
	let ar1 = [];
	let ar2 = [];
	const fs= require('node:fs');
	
	try {
	  const data = fs.readFileSync(fileName, 'utf8');
	  return data;
	} catch (err) {
	  console.error(err);
	}
}

function corruptedMemory(memory)
{
	const re = /mul\([0-9]+\,[0-9]+\)/g;
	var found = memory.match(re);
	const mregex = /([0-9]+)/g;
	return found.map( val => 
	{
		var numbers = val.match(mregex);
		return numbers[0] * numbers[1];		
	}).reduce((prev, curr) => prev + curr);
}

var input = ReadFileSync('day3Input.txt');
console.log(corruptedMemory(input));