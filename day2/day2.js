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

function isSafe(tab)
{
	var ignoreFlag = 0;
	
	var minDiff = 1;
	var maxDiff = 3;
	
	if(tab.length <= 1) return true;
	
	var type = 'asc';
	if(tab[1] - tab[0] < 0)
		type = 'desc';
	
	for(var i = 0; i< tab.length; i++)
	{
		if(i + 1 >= tab.Length) break;
		
		if(tab[i+1] - tab[i] > 0 && type == 'desc' || 
		tab[i+1] - tab[i] < 0 && type == 'asc') return false;

		var diff = Math.abs(tab[i+1]-tab[i]);
		if(diff < minDiff || diff > maxDiff ) return false;
	}
	return true;
}

function CountSafe(data, parameter)
{
	var counter = 0;
	data = data.split("\r\n");

	for(var i = 0; i< data.length; i++)
	{
		var values = data[i].split(' ');
		if(isSafe(values, parameter))
			counter++;
	}
	
	return counter;
}

var data = ReadFileSync('day2Input.txt');
console.log(CountSafe(data));
