
function clear(okno){
var canvas = document.getElementById(okno), 
context = canvas.getContext("2d");
context.clearRect(0,0,350,450); // очистка фона
}// end function clear

 function test(q,w,e,r,t,y,u,i,o,p){
 console.log(q+w+e+r+t+y+u+i+o+p)
 }
 
 
 function triangle_cos (a,c,aa) { // находим косинус и гипотенузу.
 
 var Alfa = a / c;
 var cc = aa / Alfa;
  //console.log("cos: " + cc)
 return cc;
 }	
 
 function triangle_sin (b,c,cc) { // находим b = sin(Alfa) * c
 
 var Alfa = b / c;
 var bb = cc * Alfa;
// console.log("sin: " + bb)
 return bb;
 }
 	
 function alfa(b,c)	{
 var alfas = b / c;
 return alfas;
 }
 
 function rot(angle,x0,x,y0,y){   //angle угол поворота

 var angleRadian = angle * Math.PI / 180; //переводим угол в радианты
  xRot = ((x - x0) * Math.cos(angleRadian) - (y - y0) * Math.sin(angleRadian) + x0);
  yRot = ((x - x0) * Math.sin(angleRadian) + (y - y0) * Math.cos(angleRadian) + y0);
 
 }
 
 function inRad(num) {
 return num * Math.PI / 180;
 }
 

 
 function C (a,b) {
 	let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
 	return c;
 }
 		
function navLeft() {
switch(visible){
 case 1:
  navGNum = navGNum + 10
  math(3);
 break;
 case 2:
  navGNum2 = navGNum2 + 10
  math(4);
 break;
 case 3:
  navGNum3 = navGNum3 + 10
  math(5);
 break;
 case 4:
 	navGNum4 = navGNum4 + 5
 	  math(1);
 break;
 case 5:
 	navGNum5 = navGNum5 + 5
 	  math(1);
 break;
 case 6:
 	navGNum6 = navGNum6 + 5
  	  math(1);
}
};

function navRight() {
switch(visible){
 case 1:
	 navGNum = navGNum - 10
	  math(3);
 break;
 case 2:
 	 navGNum2 = navGNum2 - 10
 	  math(4);
 break;
 case 3:
 	 navGNum3 = navGNum3 - 10
 	 math(5);
 break;
 case 4:
 	navGNum4 = navGNum4 - 5
 	  math(1);
 break;
 case 5:
 	navGNum5 = navGNum5 - 5
 	  math(1);
 break;
 case 6:
 	navGNum6 = navGNum6 - 5
  	  math(1);
 }
};

function navUp() {
switch(visible){
 case 1:
	 navVNum = navVNum + 10
 	 math(3);
 break;
 case 2:
 	 navVNum2 = navVNum2 + 10
 	  math(4);
 break;
 case 3:
 	 navVNum3 = navVNum3 + 10
 	 math(5);
 break;
 case 4:
 	navVNum4 = navVNum4 + 5
 	  math(1);
 break;
 case 5:
 	navVNum5 = navVNum5 + 5
 	  math(1);
 break;
 case 6:
 	navVNum6 = navVNum6 + 5
  	  math(1);
 }
};

function navDown() {
switch(visible){
 case 1:
      navVNum = navVNum - 10
       math(3);
 break;
 case 2:
      navVNum2 = navVNum2 - 10
       math(4);
 break;
 case 3:
      navVNum3 = navVNum3 - 10
       math(5);
 break;
 case 4:
 	navVNum4 = navVNum4 - 5
 	  math(1);
 break;
 case 5:
 	navVNum5 = navVNum5 - 5
 	  math(1);
 break;
 case 6:
 	navVNum6 = navVNum6 - 5
   	math(1);
 }
};

function navLarge() {
switch(visible){
 case 1:
	navSize = navSize + .1
	  math(3);
 break;
 case 2:
 	navSize2 = navSize2 + .1
 	  math(4);
 break;
 case 3:
 	navSize3 = navSize3 + .1
   	math(5);
 break;
 case 4:
 	navSize4 = navSize4 + .005
 	  math(1);
 break;
 case 5:
 	navSize5 = navSize5 + .01
 	  math(1);
 break;
 case 6:
 	navSize6 = navSize6 + .01
   	math(1);
 }
};

function navSmall() {
switch(visible){
 case 1:
	navSize = navSize - .1
	  math(3);
 break;
 case 2:
 	navSize2 = navSize2 - .1
 	  math(4);
 break;
 case 3:
 	navSize3 = navSize3 - .1
   	math(5);
 break;
 
 case 4:
 	navSize4 = navSize4 - .005
 	  math(1);
 break;
 case 5:
 	navSize5 = navSize5 - .01
 	  math(1);
 break;
 case 6:
 	navSize6 = navSize6 - .01
   	math(1);
 break;
 }

};

function navClip(){
	visible = 4;
	fcount = fcount + 1;
	if (fcount == 3) {fcount = 1 };
	if (fcount == 2) { document.getElementById("navElem").style["display"] = 'none';
		document.getElementById("clip2").style["display"] = 'inline'
	 	document.getElementById("clip3").style["display"] = 'inline'	 
	 				};
	if (fcount == 1) {document.getElementById("navElem").style["display"] = "block";
	    document.getElementById("clip2").style["display"] = 'none'
    	document.getElementById("clip3").style["display"] = 'none'	
					};
};

function navClip2(){
	visible = 5;
	fcount = fcount + 1;
	if (fcount == 3) {fcount = 1 };
	if (fcount == 2) { document.getElementById("navElem").style["display"] = 'none';
		document.getElementById("clip").style["display"] = 'inline'
	 	document.getElementById("clip3").style["display"] = 'inline'	 
	 				};
	if (fcount == 1) {document.getElementById("navElem").style["display"] = "block";
	    document.getElementById("clip").style["display"] = 'none'
    	document.getElementById("clip3").style["display"] = 'none'	
					};
};

function navClip3(){
	visible = 6;
	fcount = fcount + 1;
	if (fcount == 3) {fcount = 1 };
	if (fcount == 2) { document.getElementById("navElem").style["display"] = 'none';
		document.getElementById("clip").style["display"] = 'inline'
	 	document.getElementById("clip2").style["display"] = 'inline'	 
	 				};
	if (fcount == 1) {document.getElementById("navElem").style["display"] = "block";
	    document.getElementById("clip").style["display"] = 'none'
    	document.getElementById("clip2").style["display"] = 'none'	
					};
};


function navNumber (){
navGNum = 30; //позиция изменяемого положения детали по горизонтали
navVNum = 20; //позиция изменяемого положения детали по вертикали
navSize = 0; //масштаб

navGNum2 = 30; //позиция изменяемого положения детали по горизонтали
navVNum2 = 20; //позиция изменяемого положения детали по вертикали
navSize2 = 0; //масштаб

navGNum3 = 200; 
navVNum3 = 220; 
navSize3 = 0; 
 }
 
 function navNumber2(){
// clip
navGNum4 = 10; 
navVNum4 = 0; 
navSize4 = 0; 

navGNum5 = 20; 
navVNum5 = - 20; 
navSize5 =  - 0.05; 

navGNum6 = 60; 
navVNum6 = 50; 
navSize6 = -0.05; 

}


