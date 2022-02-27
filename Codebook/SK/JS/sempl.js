

function contrPoint(){ 
ttva_Point_acx = ttva.ax + control_h(ttva_cutY,data.s_ttva) *scale;
ttva_Point_acy = ttva.ay + control_bb(ttva_cutY,data.s_ttva)*scale;

ttva_Point_bcx = ttva.bx - control_bb(ttva_cutX,data.s_ttva) *scale;
ttva_Point_bcy = ttva.by - control_h(ttva_cutX,data.s_ttva)*scale;
}


function vis_ttva(){//  отображение тетевы
 test_work ("visTtvaTest",0) 
count_vis_size(); //переключатель видимости
visual_VAR="count_vis_ttva";
math(2);
 test_work ("visTtvaTest",1)
  test_work ("visTtvaTest.2",visual_VAR+": "+count_vis_ttva)
}; // end function vis_ttva

function vis_ksur() {//  отображение  косоура
test_work ("visKsurTest",0) 
count_vis_size(); //переключатель видимости
visual_VAR="count_vis_ksur";
math(2);
test_work ("visKsurTest",1)
 test_work ("visKsurTest.2",visual_VAR+": "+count_vis_ttva)

}; // end function vis_ksur

function vis_stair_step() {//  отображение  ступеней
test_work ("visStairStepTest",0) 
count_vis_size(); //переключатель видимости
visual_VAR="count_vis_stair_step";
math(2);
test_work ("visStairStepTest",1)
 test_work ("visStairStepTest.2",visual_VAR+": "+count_vis_stair_step)

}; // end function vis_stair_step
function vis_front(){
navGNum=0;// инициализация навигации
navVNum=0;
navSize=0;
count_vis_back = 0 ;
count_vis_front = count_vis_front + 1;
if (count_vis_front == 3) {
 navSize=0;
 navGNum= data.lenght * data.number*scale; // инициализация навигации
 navVNum= ((data.width+data.height)*data.number) *scale + data.width*scale;

 };
if (count_vis_front == 4) {count_vis_front = 0 };
math(2);
} // end vis_front

function vis_back(){
count_math_fun = count_math_fun + 1;
if (count_math_fun > 2) {count_math_fun = 1 };
math(2);
}//end vis_back
function visual_sizeElem(){//Исходное положение размерного режима.Используется в функциях vis_....переключатели кнопок sizeElem
test_vis()
document.getElementById("sizeStairStep").style["background"] = '#00a6a0';
document.getElementById("sizettva").style["background"] = '#00a6a0';
document.getElementById("sizeksur").style["background"] = '#00a6a0';
visual_ttva=1// отображение элемента лестницы.
visual_stair_step=1 // отображение элемента лестницы.
visual_ksur=1// отображение элемента лестницы
}

function count_vis_size(){ //Используется в функциях vis_....переключатели кнопок sizeElem

count_vis_ttva = count_vis_ttva + 1;
if (count_vis_ttva == 3) {count_vis_ttva = 1 };

count_vis_ksur = count_vis_ksur + 1;
if (count_vis_ksur == 3) {count_vis_ksur = 1 };

count_vis_stair_step = count_vis_stair_step + 1;
if (count_vis_stair_step == 3) {count_vis_stair_step = 1 };
}//end function count_vis_size()


function display_visible(display){
test_display_main++
document.getElementById("test1").innerHTML = " ❌   ";
document.getElementById("test1.1").innerHTML = 'запуск:'+ test_display_main ;
switch(display){
  case 'main': // видимость элементов при старте
document.getElementById("test").style["display"] = 'none';
document.getElementById("tabl").style["display"] = 'none';
document.getElementById("navElem").style["display"] = 'none';
document.getElementById("sizeElem").style["display"] = 'none';
 document.getElementById("setting").style["display"] = "none" 
  break;
  case 'tabl':
// переключатель видимости списка
 count_tabl = count_tabl + 1;
 if (count_tabl == 3) {count_tabl = 1 };
 if (count_tabl == 1) {document.getElementById("tabl").style["display"] = "none" };
 if (count_tabl == 2) {document.getElementById("tabl").style["display"] = "inline"};

  break;
  
  case 'test':
// переключатель видимости теста
count_test = count_test + 1;
if (count_test == 3) {count_test = 1 };
if (count_test == 1) {
dataCtrl = 1;
document.getElementById("test").style["display"] = "none" };
if (count_test == 2) {
dataCtrl = 0;
document.getElementById("test").style["display"] = "inline"
math_control_ttva()
};
  break;
  
  case 'setting':
count_setting = count_setting + 1;
if (count_setting > 2) {count_setting = 1 };
if (count_setting == 1) { document.getElementById("setting").style["display"] = "none" };
if (count_setting == 2) {
document.getElementById("setting").style["display"] = "inline"
}
  break;
  
  case 'hand':
  count_hand = count_hand + 1;
  if (count_hand == 3) {count_hand = 1 };
  break;
  
  
  } // end switch display
document.getElementById("test1").innerHTML = " ✅  ";
document.getElementById("test1.1").innerHTML = display + ' ; '+ test_display_main ;
 } // end function display_visible()

function scale_ (){// масштаб и позиционирование
/*if( count_vis_back ==1){
data.x = data.x - max_x;
data.y = data.y - max_y;
};*/
scale_1 = (350 - (15) - data.x) / (data.lenght * data.number); //индекс масштаба первого холста;
scale=scale_1 + navSize;
 

if( count_vis_front ==1){scale= (scale_1*data.number/2) + navSize}
if( count_vis_front ==3){scale= (scale_1*data.number/2) + navSize}

if( count_vis_back ==1){
scale= (scale_1*data.number/2) + navSize}
 
 
 
 
 x1=data.x - navGNum;
 y1=data.y - navVNum;
 x2=data.x - navGNum;
 y2=data.y - navVNum;
 
}; //end scale
 function clear(okno){
 var canvas = document.getElementById(okno), 
 context = canvas.getContext("2d");
 context.clearRect(0,0,400,650); // очистка фона
 }// end function clear
 

 function navClip(){ // включаем навигацию по окну
  test_work ("navClipTest",0)
 count_navClip = count_navClip + 1;
 if (count_navClip == 3) {count_navClip = 1 };
 if (count_navClip == 2) { document.getElementById("navElem").style["display"] = 'none';};
 if (count_navClip == 1) {document.getElementById("navElem").style["display"] = "block";};
 
 test_work ("navClipTest",1)
 count_navClipTest++
 test_work ("navClipTest.2",'запуск:'+ count_navClipTest );
 
 };// end function
 
 function sizeClip(){ // включаем навигацию по окну
  test_work ("sizeClipTest",0)
 count_sizeClip = count_sizeClip + 1;
 if (count_sizeClip == 3) {count_sizeClip = 1 };
 if (count_sizeClip == 2) { document.getElementById("sizeElem").style["display"] = 'none';};
 if (count_sizeClip == 1) {document.getElementById("sizeElem").style["display"] = "block";};
 
 test_work ("sizeClipTest",1)
 count_sizeClipTest++
 test_work ("sizeClipTest.2",'запуск:'+ count_sizeClipTest );
 
 };// end function
 
 function navLeft() {
navGNum = navGNum + 20
math(2);
 };
 
 function navRight() {
navGNum = navGNum - 20
math(2);
 };
 
 function navUp() {
navVNum = navVNum + 20
math(2);
 };
 
 function navDown() {
navVNum = navVNum - 20
math(2);
 };
 
 function navLarge() {
navSize = navSize + .5
math(2);
 };
 
 function navSmall() {
navSize = navSize - .5
math(2);
 };
 
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
 
 function triangle_alfa (min_a,max_a,max_b) { // (min_a,max_a,max_b)находим сторону min_b
 
 var Alfa = max_a / min_a;
 var min_b = max_b / Alfa;
// console.log("return: " + min_b)
 return min_b;
 }	
 
 function triangle_alfaMax (min_a,max_a,min_b) { // (min_a,max_a,min_b) находим сторону max_b
 
 var Alfa = max_a / min_a;
 var max_b = min_b * Alfa;
 // console.log("return: " + min_b)
 return max_b;
 }	
 
 function C (a,b) {
 	let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
 	return c;
 }
 function katet (c,b){// гипотенуза катет
 	let a = Math.sqrt(Math.pow(c,2) - Math.pow(b,2));
 	return a;
 }
 
 function cut (ax,ay,bx,by,cut_s){ // выдаёт длинну среза по оси
 var cut_a = (bx - ax ) / scale;
 console.log("cut_a: "+cut_a);
 var cut_b = (by - ay ) / scale;
 console.log("cut_a: "+cut_a);
 var cut_l = Math.sqrt(Math.pow(cut_a,2) + Math.pow(cut_b,2));//расстояние между точками
 console.log("cut_l: "+cut_l);
 var cut = cut_l * cut_s;
 return cut;
 }
 
 function cut (ax,ay,bx,by,cut_s,s){ //вводим координаты линии среза, сечение для вычисленя(коэффициент) и производства среза(катет).выдаёт длинну среза по оси
 var cut_a = (bx - ax ) / scale;
 var cut_b = (by - ay ) / scale;
 var cut_l = Math.sqrt(Math.pow(cut_a,2) + Math.pow(cut_b,2));//расстояние между точками
 var cut = (cut_l / cut_s)*s
 return cut;
 }
 
function H(a,b,c){
let h = (a*b)/c;
return h;
}
 
function control_h(c,b){//для контрольной точки среза
	a=katet (c,b)
	//console.log("katet cb:"+a+" c: "+c+" b: "+b)
	h=H(a,b,c)
	return h
}
function control_bb(c,b){
	a=katet(c,b)
	h=H(a,b,c)
	bb= katet(a,h)
	return bb
}

function size_indent_x (indent) {

}


