function lineStepKsur(x_path, y_path, scale, okno,count,indent,indentLine,ax,ay,bx,by,) { // вынос размера
globalCalk(width, step, width2,height, scale, number,x,y, okno);
	clip(okno);
	var canvas = document.getElementById(okno), 
	context = canvas.getContext("2d");
	
	textAlign = "left"; // позиция текста размера в горизонтали
	textBaseline = "bottom"; // позиция текста размера в вертикали
	x_textPoint = 0; // линия подчёркиваюшая текст от размерной линии
	x_textStep = 5; // x смещение текста от привязки в пикселях
	y_textStep = -2; // y смещение текста от привязки в пикселях	
	textStart = 1.5;// коэффициент смещения привязки (2) к размерной линий для текста
	// позицианирование элементов
	if (x_path == 1){textAlign = "right"; 
			 textBaseline = "top";
			 x_textPoint = 0;
			 x_textStep = -5;
			 }
	 if (y_path == 0) {ax = bx}
	 if (x_path == 0) {by = ay;
	 				   textStart = 6;}
	 if (y_path == 1) {textBaseline = "top";
	 					y_textStep = +6;
	 					}
	// расчёт непосредственного размера между точками
	if (ax > bx){  a = (ax - bx) / scale}
	if (ax < bx){  a = (bx - ax ) / scale}
	if (ax == bx){  a = 0}
	
	if (ay > by){  b = (ay - by) / scale}
	if (ay < by){  b = (by - ay ) / scale}
	if (ay == by){  b = 0}
	
	a = Math.floor(a * 10) / 10;// выравнивание/округление числа
	b = Math.floor(b * 10) / 10;
	c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)); // значение размера
	// округление размера
	if (c > 99) {c = Math.round(c);}
    if (c < 100)  {c = Math.round(c * 10) / 10;} // значение размера
    // Расчёт точек выноски
    count = 1;	
    long_x_ksur = bx_StepKsur[count] - ax_StepKsur[count] ;	// a	 
    long_y_ksur = cy_ksur[count] - by_ksur[count] ;	// b	 
    long_ksur = Math.sqrt( Math.pow(long_x_ksur,2) + Math.pow(long_y_ksur,2));// длинна шага ступени комоура на тетеве	/ c /	 
    h_size = (long_x_ksur * long_y_ksur) / long_ksur; // c
    x_size = triangle_sin (long_y_ksur,long_ksur, h_size) * x_path; //привязка по Х / b /
    y_size = Math.sqrt( Math.pow(x_size,2) + Math.pow(h_size,2)) * y_path;// привязка по Y	/ a /	 
    
	         function indentSize(indentS) {    // определение линий выноски, длинна отступп   
	ax_lineStepKsur = ax - x_size /indentS;
	ay_lineStepKsur = ay + y_size / indentS;
	bx_lineStepKsur = bx - x_size / indentS;
	by_lineStepKsur = by + y_size / indentS;
            	} // end indentSize
	 
	 indentSize(indentLine);
	x_textStepKsur = ax_lineStepKsur + (bx_lineStepKsur - ax_lineStepKsur) / textStart;
	y_textStepKsur = ay_lineStepKsur + (by_lineStepKsur - ay_lineStepKsur) / textStart;	 
	 context.beginPath();	 
	 // размерная линия	 
	 context.moveTo(ax_lineStepKsur, ay_lineStepKsur);
	 context.lineTo(bx_lineStepKsur, by_lineStepKsur);	 
	 // выносные линии _lineStepKsur
	 indentSize(indent);	 
	 context.moveTo(ax, ay);// старт первой выноски
	 context.lineTo(ax_lineStepKsur, ay_lineStepKsur);
	 context.moveTo(bx,by); // старт второй выноски
	 context.lineTo(bx_lineStepKsur, by_lineStepKsur);
	 // положение текста размера
	 context.moveTo(x_textStepKsur, y_textStepKsur);
	 context.lineTo(x_textStepKsur + x_textPoint, y_textStepKsur);
	 context.textAlign = textAlign;
	 context.textBaseline = textBaseline;
	 context.fillText( c , x_textStepKsur + x_textStep, y_textStepKsur + y_textStep)	 
	context.strokeStyle = "grey";
	context.stroke();
	} // end lineStepKsur
	
	
	function size_(ax,ay,bx,by,posX,posY,indent){
	//от A до B координаты,
	//pos-направление линий размера.0-нет смещения,положительное и отрицательное
	//,indent-коэффициент вылета линии. отрицательное значение меняет направление

// переменные для промежуточного расчёта размера
var a=0;
var b=0;
var c=0;
// вычисление смещения координат выносной и размерной линий
var move_x = indent*posX*scale; 
var move_y = triangle_alfa (indent ,data.height+data.width,data.lenght)* posY*scale;
// вычисление относительного смещения координат размерной вдоль выносной линий
var movesize= 5; //еденицы смещения размерной линии
var movesize_x = movesize *posX; 
var movesize_y = triangle_alfa (movesize ,data.height+data.width,data.lenght)* posY;


//коэффициенты выносных линий. Возвращают исходную координаты для прямой размерной линии
var kby=1;
var kay=1;
var kbx=1;
var kax=1;
size_AB = []; //  координаты размерной линии
sizeText = []; // Координаты текста размера
// позиционирование размерной линии вдоль оси координат
if (posX == 0 && posY == 1) {kay=ay/by;
						 	 ay = by};
if (posX == 0 && posY == -1) {kby=by/ay;
							  by = ay};
if (posY == 0 && posX == 1) {kax=ax/bx;
							 ax = bx};
if (posY == 0 && posX == -1) {kbx=bx/ax;
							  bx = ax};
// расчёт непосредственного размера между точками
if (ax > bx){  a = (ax - bx) / scale}
if (ax < bx){  a = (bx - ax ) / scale}
if (ax == bx){  a = 0}

if (ay > by){  b = (ay - by) / scale}
if (ay < by){  b = (by - ay ) / scale}
if (ay == by){  b = 0}

a = Math.floor(a * 10) / 10;// выравнивание/округление числа
b = Math.floor(b * 10) / 10;

size_AB = {//  точки размерной линии🆎
	ax: ax+move_x-movesize_x,
	ay: ay+move_y-movesize_y,
	bx: bx+move_x-movesize_x,
	by: by+move_y-movesize_y,
	l:  Math.sqrt(Math.pow(a,2) + Math.pow(b,2)), // значение размера 
	textX: (ax+move_x- movesize_x ) - (ax+move_x-movesize_x - bx+move_x-movesize_x)/2,
	textY: (ay+move_y-movesize_y) - (ay+move_y-movesize_y - by+move_y-movesize_y)/2,

          };

// округление размера
size_AB.l = Math.floor(size_AB.l * 10) / 10;
//console.log(cc+ " & "+size_AB.l)

canvas = document.getElementById("clip"), 
context = canvas.getContext("2d");
context.beginPath();
context.strokeStyle = "grey";
// размерная линия
context.moveTo( size_AB.ax,size_AB.ay);
context.lineTo( size_AB.bx,size_AB.by);
//выносные линии
context.moveTo(ax*kax,ay*kay);
context.lineTo(ax+move_x,ay+move_y);

context.moveTo(bx*kbx,by*kby);
context.lineTo(bx+move_x,by+move_y);
//текст
context.fillStyle = "red";
context.fillText( size_AB.l ,size_AB.textX+move_x-movesize_x, size_AB.textY+move_y-movesize_y)	 
	
context.stroke();
context.closePath()	

test_work("sizea","a "+a);
test_work("sizeb","b "+b);
test_work("sizeABL","size_AB.l "+size_AB.l);
	}; // end function size_
	
function size_ttva(visual){
test_work("sizea",0);
test_work("sizeb",0);
test_work("sizeABL",0);
switch(visual){
 case 1:
size_(ttva.ax,ttva.ay,ttva.bx,ttva.by,1,0,data.indent); // высота проекции тетевы
size_(ttva.ax,ttva.ay,ttva.bx,ttva.by,1,-1,indent); // внешняя длинна тетевы
size_(ttva.ax,ttva.ay,ttva.bx,ttva.by,0,-1,indent); // длинна преекции тетевы
size_(ttva_back.cx,ttva_back.cy,ttva_back.dx,ttva_back.dy,-1,1,data.indent); // внутренняя длина тетевы

size_(ttva.ax,ttva.ay,ttva_back.dx,ttva_back.dy,-1,0,data.indent); // верхний срез длинна
size_(ttva.ax,ttva.ay,ttva_Point_acx,ttva_Point_acy,1,-1,data.indent); // верхний срез глубина
l_fase_ttva_v = size_AB.l // срез тетевы вертикальный
size_(ttva_back.cx,ttva_back.cy,ttva.bx,ttva.by,0,-1,data.indent); // нижний срез длинна
size_(ttva.bx,ttva.by,ttva_Point_bcx,ttva_Point_bcy,1,-1,data.indent); // нижний срез глубина
l_fase_ttva_g = size_AB.l // срез тетевы горизонтальный
break;
case 2:

break;
	} // end switch
} // end size_ttva()

function size_ksur(visual){
test_work("sizea",0);
test_work("sizeb",0);
test_work("sizeABL",0);
var end = data.number - 1;
switch(visual){
 case 1:
size_(ksur_v[0].ax,ksur_v[0].ay, ksur_v[0].dx,ksur_v[0].dy, 1,0,data.indent); // b
if(ksur_day > ksur_g[0].dy){ //полноценный угол верхнего косоура
size_( ksur_dax+data.s_ksur*scale, ksur_g[0].dy, ksur_dax+data.s_ksur*scale,ksur_day+fase_ksur_v*scale,1,0,data.indent); // общая высота добавыша
size_( ksur_dax, ksur_g[0].dy, ksur_dax,ksur_day,-1,0,data.indent); // срез высоты добавыша

size_( ksur_dax,ksur_day, ksur_v[0].dx,ksur_v[0].dy,-1,1,data.indent );} // c
if(ksur_day <= ksur_g[0].dy){//срезан угол
size_( ksur_g[0].dx,ksur_g[0].dy, ksur_v[0].ax,ksur_v[0].ay,0,1,data.indent); // a
size_( ksur_g[0].dx,ksur_g[0].dy, ksur_v[0].dx,ksur_v[0].dy,-1,1,data.indent );} //c 


size_( ksur_g[1].ax,ksur_g[1].ay, ksur_g[1].dx,ksur_g[1].dy,-1,1,data.indent ); //L cрез горизонталь косоура
l_fase_ksur_g = size_AB.l //длинна среза косоура горизонтального
size_( ksur_v[0].cx,ksur_v[0].cy, ksur_v[0].dx,ksur_v[0].dy,-1,1,data.indent ); //L cрез вертикаль косоура
l_fase_ksur_v = size_AB.l //длинна среза косоура вертикального


if(ksur_day <= ksur_g[0].cy ){//угол срезан верхнего косоура
 size_( ksur_g[0].dx,ksur_g[0].dy, ksur_dax,ksur_day,-1,1,data.indent ); //L cрез угла верхнего косоура
//console.log('угол'+size_AB.l)
}

 size_( ksur_g[end].bx, ksur_g[end].by , ksur_g[end].cx,max_y,1,0,data.indent ); //высота нижнего  косоура
 size_( ksur_g[end-1].bx, ksur_g[end-1].by , ksur_v[end-1].cx, ksur_v[end-1].cy,1,0,data.indent ); //высота   косоура
 size_( ksur_v[end-1].dx, ksur_v[end-1].dy , ksur_v[end-1].dx, ksur_v[end-1].cy,-1,0,data.indent ); //высота вертикаль среза
 size_( ksur_g[end].ax, ksur_g[end].dy , ksur_g[end].dx,ksur_g[end].dy,0,1,data.indent ); //высота нижнего  косоура

	if(ksur_v[i].dx > ksur_ttva_down){ //ttva.bx. ровный прямоугольник
	 size_( ksur_ttva_down-fase_ksur_g*scale, max_y-data.s_ksur*scale , ksur_v[end].dx,max_y-data.s_ksur*scale,0,-1,data.indent ); //длинна нижнего добавыша
	 size_( ksur_ttva_down, max_y, ksur_v[end].dx,max_y,0,1,data.indent ); //нижний добавыш контрольный размер
	};

	if(ksur_v[i].dx < ksur_ttva_down){ // ttva.bx. отсечённый угол
			 size_(ksur_v[i].ax, max_y,ksur_v[i].dx, max_y-ksur_cutY,-1,0,data.indent ); //нижний скос 
			 size_(ksur_v[i].ax, max_y,ksur_ttva_down, max_y,0,1,data.indent ); //нижний скос 
	};

cut_v= l_fase_ksur_v /data.s_ksur;
cut_g=l_fase_ksur_g/data.s_ksur;


test_work("ksurCut", "cut_v: "+ cut_v );
test_work("ksurCut.2", "cut_g: "+cut_g);
break;
case 2:

break;
	} // swith
} // end size_ksur()


function size_stair_step(visual){
end = data.number - 1;
switch(visual){
 case 1:
test_work("sizea",0);
test_work("sizeb",0);
test_work("sizeABL",0);
size_( step[0].start_x, step[0].start_y+step[0].finish_y, step[0].finish_x+step[0].start_x, step[0].finish_y +step[0].start_y,0,1,data.indent); // ступень
size_( step[1].start_x, step[1].start_y+ step[1].finish_y ,pod_step[1].start_x, pod_step[1].start_y,0,1,data.indent); // до подступёнка ступень
size_(step[0].start_x+ step[0].finish_x ,step[0].start_y,step[0].start_x+ step[0].finish_x,step[1].start_y,1,0,data.indent);//  высота шага
size_(pod_step[1].start_x+pod_step[1].finish_x,pod_step[1].start_y,pod_step[1].start_x+pod_step[1].finish_x,step[2].start_y,1,0,data.indent);//  высота шподступенка
size_( pod_step[end].start_x+pod_step[end].finish_x,pod_step[end].start_y ,pod_step[end].start_x+pod_step[end].finish_x,max_y,1,0,data.indent);//  высота шподступенка end
size_( pod_step[end-1].start_x, pod_step[end-1].start_y ,pod_step[end-1].start_x,pod_step[end-1].start_y+pod_step[end-1].finish_y,-1,0,data.indent);//  высота шподступенка back

size_( pod_step[end-1].start_x+pod_step[end-1].finish_x,pod_step[end-1].start_y, step[end-1].finish_x+step[end-1].start_x, step[end-1].finish_y +step[end-1].start_y,0,1,data.indent); // выпуск

size_( step[0].start_x, max_y, step[end].finish_x+step[end].start_x,max_y,0,1,data.indent); // длинна марша
size_(step[end].start_x+step[end].finish_x,step[0].start_y,step[end].start_x+step[end].finish_x,max_y,1,0,data.indent);//  высота марша
break;
case 2:
end = data.number - 1;
size_( stepw[0].start_x, stepw[0].start_y+stepw[0].finish_y, stepw[0].finish_x+stepw[0].start_x, stepw[0].finish_y +stepw[0].start_y,0,1,data.indent); // ступень
size_( stepw[1].start_x+ stepw[1].finish_x, stepw[0].start_y+ stepw[0].finish_y ,stepw[1].start_x+ stepw[1].finish_x, stepw[1].start_y,1,0,data.indent); // подступень
size_( stepw[0].start_x, stepw[0].start_y, stepw[0].start_x, stepw[data.number].finish_y +stepw[data.number].start_y,0,1,data.indent); // ступень
break;
	
	}// swith
} // end size




function math_test(){
ksur_A = (ksur_v[0].ax-ksur_g[0].dx)/scale ;
ksur_B = (ksur_v[0].dy-ksur_v[0].ay)/scale ;
ksur_C = C(ksur_A,ksur_B) ;



test_work("ksur_A",(parseInt(ksur_A*10))/10);
test_work("ksur_B",(parseInt(ksur_B*10))/10);
test_work("ksur_C",(parseInt(ksur_C*10))/10);


}