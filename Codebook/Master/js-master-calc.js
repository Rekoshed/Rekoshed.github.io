function math() {
		var longEl = document.getElementById('long').value; 
		var widthEl = document.getElementById('width').value; 
		var heightEl = document.getElementById('height').value; 
		var stuffEl = document.getElementById('stuff').value;
		 
		var numberInCube = 0;
		var pricePerCube = 0;
		 numberInCube = parseInt(1000000 / (longEl * widthEl * heightEl))
		 pricePerCube = numberInCube * stuffEl;
		document.getElementById("numberInCube").innerHTML = numberInCube
		document.getElementById("pricePerCube").innerHTML = pricePerCube
		
		
		}
		
	function math2() {
	var longEl2 = document.getElementById('long2').value; 
	var widthEl2 = document.getElementById('width2').value; 
	var heightEl2 = document.getElementById('height2').value; 
	var pricePerCube2 = document.getElementById('pricePerCube2').value;
	
	var numberInCube2 = 0;
	
	numberInCube2 = parseInt(1000000 / (longEl2 * widthEl2 * heightEl2));
//	volumeStuff = longEl * widthEl * heightEl;
	pricePerStuff2 = pricePerCube2 / numberInCube2;
	document.getElementById("numberInCube2").innerHTML = numberInCube2;
	document.getElementById("pricePerStuff2").innerHTML = pricePerStuff2;
	
	
	}
	
	function arcLen(){
	var chord = document.getElementById('long3').value;
	var heightArc = document.getElementById('height3').value;
	
	var lenArc = 0;
	var radArc = 0;
	var alfa = 0;
	
	radArc = (heightArc / 2) + (chord * chord / (8 * heightArc));
	alfa = 2 * Math.asin(chord / (2 * radArc));
	lenArc = alfa * radArc;
	
	document.getElementById("arcLenght").innerHTML = lenArc;
	document.getElementById("arcRadius").innerHTML = radArc;
	
//    alpha = 2 * arcsin(c / 2*R)	
	
	}
	
function areaLW(){
var l = document.getElementById('long4').value;
var w = document.getElementById('width4').value;

var area = 0;

area = l * w;

document.getElementById("areaLW").innerHTML = parseInt(area);


}