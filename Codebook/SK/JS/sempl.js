

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
switch(count_math_fun){
case 1:
if (count_vis_front == 3) {
navGNum=data.lenght*scale_2* (data.number-2)
navVNum= (data.height + data.width) *scale_2* (data.number-2.5)
// if(max_x>300){navGNum=max_x-300}
// if(max_y>450){navVNum=max_y-450}
console.log( "navGNum="+navGNum,"navVNum="+navVNum, " number="+data.number, "i=" +i);
 
 };
if (count_vis_front == 4) {count_vis_front = 0 };
math(2);
break;
case 2:
if (count_vis_front == 3) {
navGNum=goout_step*scale_2* (data.number-2)
navVNum=(data.height + data.width)*scale_2* (data.number-2.5)
// if(max_x>300){navGNum=max_x-300}
// if(max_y>450){navVNum=max_y-450}
console.log( "navGNum="+navGNum,"navVNum="+navVNum, " number="+data.number, "i=" +i);
 
 };
if (count_vis_front == 4) {count_vis_front = 0 };
math(2);
break;
} // end swith
} // end vis_front

function vis_back(){
count_math_fun =2
/*if (count_math_fun ==1) { 
document.getElementById("long").style["display"] = 'none';
document.getElementById("big").style["display"] = 'none';
};
if (count_math_fun ==2) { */
document.getElementById("long").style["display"] = 'inline';
document.getElementById("big").style["display"] = 'inline';
document.getElementById('s_ttva').value= s_ttva_w;
math(1)
/*};
if (count_math_fun > 2) {count_math_fun = 1 
document.getElementById("long").style["display"] = 'none';
document.getElementById("big").style["display"] = 'none';

};*/
//math(2);
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
  document.getElementById("long").style["display"] = 'none';
  document.getElementById("big").style["display"] = 'none';
  document.getElementById("staircad").style["display"] = 'none';
  document.getElementById("content").style["display"] = 'inline';
  if (count_math_fun ==2) { 
  document.getElementById("long").style["display"] = 'inline';
  document.getElementById("big").style["display"] = 'inline';
  };
document.getElementById("test").style["display"] = 'none';
document.getElementById("tabl").style["display"] = 'none';
document.getElementById("navElem").style["display"] = 'none';
document.getElementById("sizeElem").style["display"] = 'none';
 document.getElementById("setting").style["display"] = "none" 
  test_work("test1",1);
  test_work("test1.1", display + ' ; '+ test_display_main) ;
  break;
  case 'tabl':
// переключатель видимости списка
 count_tabl = count_tabl + 1;
 if (count_tabl == 3) {count_tabl = 1 };
 if (count_tabl == 1) {document.getElementById("tabl").style["display"] = "none" };
 if (count_tabl == 2) {document.getElementById("tabl").style["display"] = "inline"};
test_work("test1",1);
test_work("test1.1", display + ' ; '+ test_display_main) ;
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
math_control_ttva(count_math_fun)
};
test_work("test1",1);

  break;
  
  case 'setting':
count_setting = count_setting + 1;
if (count_setting > 2) {count_setting = 1 };
if (count_setting == 1) { document.getElementById("setting").style["display"] = "none" };
if (count_setting == 2) {
document.getElementById("setting").style["display"] = "inline"
}
test_work("test1",1);
test_work("test1.1", display + ' ; '+ test_display_main) ;
  break;
  
  case 'hand':
  count_hand = count_hand + 1;
  if (count_hand == 3) {count_hand = 1 };
  test_work("test1",1);
  test_work("test1.1", display + ' ; '+ test_display_main) ;
  break;
  
  case 'staircad':
    document.getElementById("staircad").style["display"] = 'inline';
    document.getElementById("content").style["display"] = 'none';
  test_work("test1",1);
  test_work("test1.1", display + ' ; '+ test_display_main) ;
  break;
  
  } // end switch display
  

 } // end function display_visible()

function scale_ (){// масштаб и позиционирование

scale_1 = (350 - (15) - data.x) / (data.lenght * data.number); //индекс масштаба первого холста;
scale_2= (scale_1*data.number/2) 
scale=scale_1 + navSize;
 
if( count_vis_front ==1) {scale= scale_2 + navSize}
if( count_vis_front ==3) {scale= scale_2 + navSize}

 x1=data.x - navGNum;
 y1=data.y - navVNum;
 x2=data.x - navGNum;
 y2=data.y - navVNum;
   test_work("navS", 'navSize <b style="color:LimeGreen">' + (parseInt(navSize*10))/10);
   test_work("navG", 'navGNum <b style="color:LimeGreen">' + (parseInt(navGNum*10))/10);
   test_work("navV", 'navVNum <b style="color:LimeGreen">' + (parseInt(navVNum*10))/10);
   test_work ("navClipTest.2",'scale:<b style="color:DeepPink">'+(parseInt(scale*10))/10 );
   
}; //end scale
 function clear(okno){
 view=okno;
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
  test_work("navV", 'navVNum ' + navVNum);
math(2);
 };
 
 function navRight() {
navGNum = navGNum - 20
  test_work("navG", 'navGNum ' + navGNum);
math(2);
 };
 
 function navUp() {
navVNum = navVNum + 20
  test_work("navV", 'navVNum ' + navVNum);
math(2);
 };
 
 function navDown() {
navVNum = navVNum - 20
  test_work("navV", 'navVNum ' + navVNum);
math(2);
 };
 
 function navLarge() {
navSize = navSize + .2
  test_work("navS", 'navSize ' + navSize);
math(2);
 };
 
 function navSmall() {
navSize = navSize - .2
  test_work("navS", 'navSize ' + navSize);
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
 
 function cut_l (ax,ay,bx,by){ // выдаёт длинну
 var cut_a = (bx - ax ) / scale;
 //console.log("cut_a: "+cut_a);
 var cut_b = (by - ay ) / scale;
// console.log("cut_a: "+cut_a);
 var cut_L = Math.sqrt(Math.pow(cut_a,2) + Math.pow(cut_b,2));//расстояние между точками
 //console.log("cut_l: "+cut_l);
 return cut_L;
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

