alert ('TypeOfOut');
// Здесь размещаются тестируемые скрипты.
function typeOfOut() {
var name = "Tom";
console.log(typeof name); // string

var income = 45.8;
console.log(typeof income); // number
	
var isEnabled = true;
console.log(typeof isEnabled); // boolean

var undefVariable;
console.log(typeof undefVariable); // undefined
}