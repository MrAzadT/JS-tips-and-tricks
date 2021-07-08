//1
// var num = [0, 12, null, undefined, NaN, 45, 67];
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

//multi level array
//use .flat(infinity)
var num2 = ["azad", ["tamal", ["rajib", "tapu"], "saif"], "rahat"];
console.log(num2.flat(Infinity));

//5
//short conditionals
const captain = "Azad";
if (captain === "Azad") {
  console.log("Name");
}
//we can nse &&
captain === "Azad" && console.log("Name");

// And instead of doing this
if (captain !== "AZad") {
  console.log("not name");
}
//we can nse ||
captain === "AZad" || console.log("not name");

//6
// Replace all occurances of a string
const quote = "React is a JS framework ";

// Replace all occurances of 'framework' with 'library'
console.log(quote.replace(/framework/g, "library"));

//7
// Log values with variable names smartly
const nam1 = "azad";
const nam2 = "tamal";

// Instead of doing this
console.log(`nam1 - ${nam1}`); // library1 - jQuery
console.log(`nam2 - ${nam2}`);

// We can do this
console.log({ nam1 });
console.log({ nam2 });

//8
// Know performance of a task
// We can wrap our task with performance.now()

const startTime = performance.now();

for (let i = 0; i <= 50; i++) {
  console.log(i);
}

const endTime = performance.now();

console.log(`loop took ${endTime - startTime} milliseconds to finish`);
