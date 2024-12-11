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

function ArrayToDictionary(arr)
{
	var dict = [];
	
	for(var i = 0; i< arr.length; i++)
	{
		var found = dict.find(e => e.Number == arr[i]);
		if(found != undefined)
		{
			found.Occurences ++;
		}
		else
		{
			dict.push({ "Number": arr[i], "Occurences": 1})
		}
	}
	
	return dict;
}

function findDistance(array1, array2)
{
	array1.sort();
	array2.sort();
	
	let dist = 0;
	
	for(var i = 0; i< array1.length; i++)
	{
		dist += Math.abs(array1[i] - array2[i]);
	}
	
	return dist;
}

function Similarity(dict1, dict2)
{
	var sim = 0;
	for(var i = 0; i<dict1.length; i++)
	{
		var found = dict2.find(e => e.Number === dict1[i].Number);
		if(found != undefined)
		{
			sim += (dict1[i].Number * found.Occurences) * dict1[i].Occurences;
		}
	}
	return sim;
}

var locations1 = [];
var locations2 = [];

var data = ReadFileSync('dayOneInput.txt');
data = data.split("\r\n");

for(var i = 0; i< data.length; i++)
{
	var values = data[i].split('   ');
	locations1.push(values[0]);
	locations2.push(values[1]);
}
console.log(`The distance is: ${findDistance(locations1, locations2)}`);

dict1 = ArrayToDictionary(locations1);
dict2 = ArrayToDictionary(locations2);
console.log(`Similarity is: ${Similarity(dict1, dict2)}`);

