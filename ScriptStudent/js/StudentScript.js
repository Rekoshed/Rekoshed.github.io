alert ("StudentScript.js");

function toolbar(main, back){// toolbar для контентовых и тестовых  страниц сайта
document.write("<div class='toolbar'><a href='" + main + "'>Главная</a><a href='" + back + "'>Назад</a><a href='#'>Контакты</a><a href='#'>О сайте</a></div>");
}
function head(){//  шапка сайта
document.write("<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width'><title>JS test</title> <link  href='../../Design/script.css' rel='stylesheet'><link  href='../../Design/toolbar.css' rel='stylesheet'> </head><body><div class='content'><br>")
}
function footer(){// закрыввющие теги страницы. футер
document.write("</div></body></html>")
}

/* --------------- river ---------------- */

function getFactorial(){

head();
toolbar('../ScriptMain.html', 'River.html');

	var digit = prompt("Введите число", 4);
function factori(n){

if (n === 1){
	return 1;
	}
	else{
	
	 return  n * factori(n - 1);
	}
	}
	var factorial = factori(digit);
	document.write("<h2>Факториал от числа: " + digit + " равен: " + factorial + " </h2>");	
	
	footer();
}

// число фибоначи
function fiba(){

head();
toolbar('../ScriptMain.html', 'River.html');

	var digit = prompt("Введите число", 4);

	function getFibonachi(n)
	{
	if (n == 0){
	return 0;
	}
	if (n == 1){
	return 1;
	}
	else{
	return getFibonachi(n - 1) + getFibonachi(n - 2);
	}
	}
	var result = getFibonachi(digit); //21 
		document.write("<h2>Число Фибаначи от числа : " + digit + " равно: " + result + " </h2>");	
	footer();
	}

// -----+------------------

function promtProcent(){
	var strSum = prompt("Введите сумму вклада", 1000);
	var strPercent = prompt("Введите процентную ставку", 10);
	var sum = parseInt(strSum);
	var procent = parseInt(strPercent);
	sum = sum + sum * procent / 100;
	alert("После начисления процентов сумма вклада составит: " + sum);
}

// -------------- Типы данных

function typeOfOut() {
alert ("Результат кода отображён в консоли");
 var name = "Tom";
 console.log(typeof name); // string
 
 var income = 45.8;
 console.log(typeof income); // number
 
 var isEnabled = true;
 console.log(typeof isEnabled); // boolean
 
 var undefVariable;
 console.log(typeof undefVariable); // undefined

	}
	
function getDigit()	{

head();
toolbar('../ScriptMain.html', 'TypeOf.html');

var num1 = prompt("Укажите числовой ряд:", 110);
var sys = prompt("Укажите начальную систему исчисления")
 var num2 = parseInt(num1, sys);
 document.write("<h2>Взятое число : " + num1 +'<br> Система исчисления: ' + sys + " <br> Переведено в десятеричную систему: " + num2 + " </h2>");	
 
 footer();
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

/*---------------+--++ Циклы        */

function forout() {

head();
toolbar('../ScriptMain.html', 'Loop.html');


var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = 0; i<people.length; i++){
	
	console.log(people[i]);
}
footer();
}


/* функции */


function display(){
head();
toolbar('../ScriptMain.html', 'Func.html');
document.write("<p>функция в JavaScript</p>");
footer();

}

function display1(){
head();
toolbar('../ScriptMain.html', 'Func.html');

var display = function(){  // определение функции

	document.write("анонимная функция в JavaScript");
}
display();
footer();
}


function display2(){
head();
toolbar('../ScriptMain.html', 'Func.html');

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
footer();
}

function display3(){
head();
toolbar('../ScriptMain.html', 'Func.html');

function display(x){  // определение функции

	var z = x * x;
    document.write(x + " в квадрате равно " + z);
}

display(5); // вызов функции
footer();
}

function display4(){
head();
toolbar('../ScriptMain.html', 'Func.html');


function sum(a, b, c){
	var d = a + b + c;
	document.write(d);
}
document.write("<br><p> Значение переданные в функцию напрямую:<p/><br>")
sum(1, 2, 3);
var nums = [4, 5, 6];
document.write("<br><p> Значение переданные в функцию из массива:<p/><br>")
sum(...nums);
footer();
}


function display8(){
head();
toolbar('../ScriptMain.html', 'Func.html');

function display(season, ...temps){
	document.write(season);
	for(index in temps){
		document.write(temps[index]);
	}
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);
}

function display10() {
function sum(x, y){
	return x + y;
}

function subtract(x, y){
	return x - y;
}

function operation(x, y, func){
 
	var result = func(x, y);
	console.log(result);
}

console.log("Sum");
operation(10, 6, sum);	// 16

console.log("Subtract");
operation(10, 6, subtract);	// 4
}
	
	
function display11(){
function menu(n){
 
	if(n==1) return function(x, y){ return x+y;}
	else if(n==2) return function(x, y){ return x - y;}
	else if(n==3) return function(x, y){ return x * y;}
	return undefined;
}

for(var i=1; i < 5; i++){
	var action = menu(i);
	if(action!==undefined){
		var result = action(5, 4);
		console.log(result);
	}
}
}
	