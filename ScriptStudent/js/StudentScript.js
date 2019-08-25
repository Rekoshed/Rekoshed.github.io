alert ("StudentScript.js");


/* river*/
function Fact(n){
alert ("$$$$$$$");
if (n === 1){
	return 1;
	}
	else{
	
	 fact = n * Fact(n - 1);
	
	}
	alert (fact);
	}
		

function promtProcent(){
	var strSum = prompt("Введите сумму вклада", 1000);
	var strPercent = prompt("Введите процентную ставку", 10);
	var sum = parseInt(strSum);
	var procent = parseInt(strPercent);
	sum = sum + sum * procent / 100;
	alert("После начисления процентов сумма вклада составит: " + sum);
}

// Типы данных
function typeOfOut() {
alert ("???????????");
 var name = "Tom";
 console.log(typeof name); // string
 
 var income = 45.8;
 console.log(typeof income); // number
 
 var isEnabled = true;
 console.log(typeof isEnabled); // boolean
 
 var undefVariable;
 console.log(typeof undefVariable); // undefined

	}
	
	

/*Условные конструкции*/

function ifswich () {

var income = 300;
switch(income){

	case 100 : 
		console.log("Доход равен 100");
		break;
	case 200 : 
		console.log("Доход равен 200");
		break;
	case 300 : 
		console.log("Доход равен 300");
		break;
	default: 
        console.log("Доход неизвестной величины");
        break;
}
}

/* Циклы        */

function forout() {

var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = 0; i<people.length; i++){
	
	console.log(people[i]);
}
}


/* функции */


function display(){
document.write("<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width'><title>JS test</title><link  href='./script.css' rel='stylesheet'></head><body>")
document.write("<div class='toolbar'><a href='./ScriptMain.html'>Главная</a><a href='./Func.html'>Назад</a><a href='#'>Контакты</a><a href='#'>О сайте</a></div><div class='content'><br>" + "<p>функция в JavaScript</p>");
document.write("</div></body></html>")

}

function display1(){
var display = function(){  // определение функции

	document.write("функция в JavaScript");
}
display();
}


function display2(){
function goodMorning(){

	document.write("Доброе утро");
}
function goodEvening(){

	document.write("Добрый вечер");
}
var message = goodMorning;
message(); // Доброе утро
message = goodEvening;
message(); // Добрый вечер
}
function display3(){
function display(x){  // определение функции

	var z = x * x;
    document.write(x + " в квадрате равно " + z);
}

display(5); // вызов функции
}
/*

function display4(){
function sum(a, b, c){
	var d = a + b + c;
	console.log(d);
}
sum(1, 2, 3);
var nums = [4, 5, 6];

sum(...nums);
}

/*
function display5(){
function display(x, y){

	if(y === undefined) y = 5;
	if(x === undefined) x = 8;
    let z = x * y
    console.log(z);
}
display();	// 40
display(6); // 30
display(6, 4) // 24
}

function display5() {
function display(x, y)
{

	if(y === undefined) y = 5;
	if(x === undefined) x = 8;
    let z = x * y;
    console.log(z);
}
display();	// 40
display(6); // 30
display(6, 4) // 24
}
*/

	
	