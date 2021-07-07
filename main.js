//1

var num = [0, 12, null, undefined, NaN, 45, 67];
var result = num.filter(Boolean);
console.log(result);

//2
//convert boolean
//use !! to convert boolean
console.log(!!"azad");
console.log(!!0);
console.log(!!undefined);

//3
//resizing array
//use (var name).length = number
let nam = ["azad", "tamal", "abid", "saif"];
console.log(nam);
nam.length = 3;
console.log(nam);

//4
//multi dimension array
//use flat()
var num2 = ["azad", ["tamal", "saif"], "rahat"];
console.log(num2.flat());
