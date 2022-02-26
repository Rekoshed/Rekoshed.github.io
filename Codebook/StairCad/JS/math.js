
				

	function math(fun) {
let count = 0;
var x = 10;// стартовая координата
var y = 50;// стартовая координата
var width =parseInt( document.getElementById('width').value); //толщина ступени
var width2 =parseInt( document.getElementById('width2').value); //толщина подмтупёнка	
var step = parseInt( document.getElementById('step').value); //ширина ступени		
var height = parseInt( document.getElementById('height').value); //высота подступёнка			
var number = parseInt( document.getElementById('number').value); //количество ступеней			
var s_ttva = parseInt( document.getElementById('s_ttva').value); // сечение профиля тетевы			
var s_ksur = parseInt( document.getElementById('s_ksur').value); // сечение профиля косоура			
var scale = 1;
var	Ls_ttva = "false";
var	angleRadian 
	globalCalk(width, step, width2,height, scale, number,x,y);
	
	document.getElementById("h_stair").innerHTML = h_stair;
	document.getElementById("l_stair").innerHTML = l_stair ;
	document.getElementById("h_step").innerHTML = h_step ;
	
	count = 1;
	lineStepKsur(1,1,scale,"clip2", 1,1.1,1.3, ax_StepKsur[count],ay_StepKsur[count],cx_ksur[count],cy_ksur[count]) // 	lineStepKsur(okno, count,h отступ, положение линии, ax,ay,bx,by,x_size,y_size, text)) // вынос размера  	
	document.getElementById("long_x_ksur").innerHTML = a;
	document.getElementById("long_y_ksur").innerHTML = b;
	document.getElementById("long_ksur").innerHTML = c;

	//______________________________________________	
switch(fun){
	case 1:
	document.getElementById("button_lKsur").style["display"] = 'none';
	document.getElementById("button_hKsur").style["display"] = 'none';
	document.getElementById("button_hDown").style["display"] = 'none';
	document.getElementById("element").style["display"] = 'none';
	document.getElementById("element2").style["display"] = "none";
	document.getElementById("element3").style["display"] = 'none';	
	document.getElementById("clip").style["display"] = 'inline';
	document.getElementById("clip2").style["display"] = 'inline';

	clear("clip");
	ttva("clip", angl(Y_downPoint_stair) );	
	ksur("clip"); 
	

	clear("clip2");
	ksur("clip2"); 
	sizeKsur("clip2")

	
	clear("clip3");	
	ksur("clip3"); 	
	ttva("clip3", angl(Y_downPoint_stair) );
	sizeKsur("clip3");

	break;
	
	case 2:
	case 3: // решаем проблему некоректного отображения размера
	case 4:
	case 5:
	document.getElementById("button_lKsur").style["display"] = 'inline';
	document.getElementById("button_hKsur").style["display"] = 'inline';
	document.getElementById("button_hDown").style["display"] = 'inline';
	document.getElementById("clip").style["display"] = 'none';
	document.getElementById("clip2").style["display"] = 'none';

	
	if (fun == 3) {
	document.getElementById("element").style["display"] = 'inline';
	document.getElementById("element2").style["display"] = 'none';	
	document.getElementById("element3").style["display"] = 'none';	

	ksur("element"); 
	clip("element");
	clear("element");
	//	console.log("наш вызов");	
	stepKsur ("element", 1);		
	sizeElement_Stepksur ("element");
	}
	
	if (fun == 4) {
	document.getElementById("element2").style["display"] = 'inline';
	document.getElementById("element3").style["display"] = 'none';	
	document.getElementById("element").style["display"] = 'none';	
	ksur("element2"); 
	clip("element2");	
	clear("element2");
	h_ksur ("element2", 3);	
	sizeElement_h_ksur ("element2");	
//	console.log('h_ksur ' + ay_ksur[0])
	}
	
	if (fun == 5) {
	document.getElementById("element3").style["display"] = 'inline';
	document.getElementById("element2").style["display"] = 'none';	
	document.getElementById("element").style["display"] = 'none';	

	ttva("element3", angl(Y_downPoint_stair) );	

	//ksur("element3"); 
	//clip("element3");	
	clear("element3");
	h_ksur ("element3", (number));	
	sizeElement_hDown ("element3");	
//	console.log('hDown '+ ay_ksur[3])
	}
	
	ttva("clip3", angl(Y_downPoint_stair) );
	clear("clip3");	
	stair("clip3");
	ksur("clip3"); 	
	ant_stair("clip3");

  } // end switch
  LfrontTtva("clip4")
  clear("clip4");
  ttva("clip4",0);
  sizeTtva("clip4");
	//______________________________________________		

function LfrontTtva(okno){
scale = scale
lineStepKsur(0,-1,scale,okno, 1,3,3.3,
	X(ax_ttva,ay_ttva), Y(ax_ttva,ay_ttva),
	X(bx_ttva,by_ttva), Y(bx_ttva,by_ttva)) //  длинна тетевы
	LfrontTtva = c;
	document.getElementById("LfrontTtva").innerHTML = LfrontTtva;
		
}
	
	function angl(point){
	var ang = -1;
	do{
	var angleRadian = inRad(ang);
	b = Y(bx_ttva, by_ttva);

	ang = ang + 0.1;
		if (ang > 360){
			
			}
		if (ang > 1000){
				console.log("бесконечнвй цикл angl");
				break;
				}
	} while (b < point)
		return ang;
	} // end function angl()
	
	function ttva(okno, angle){
	
	clip(okno);
	var canvas = document.getElementById(okno), 
	context = canvas.getContext("2d");
	globalCalk(width, step, width2,height, scale,number,x,y, okno);

		angleRadian = inRad(angle);
	x0 = ax_ttva;
	y0 = ay_ttva;
	
	// размер нижнего торца тетевы
	var endFase_ttva = triangle_cos (long_y_ttva,long_ttva,s_ttva);
	// размер верхнего торца тетевы
	var startFase_ttva = triangle_cos (long_x_ttva,long_ttva,s_ttva);
	
	//	  by = Y(bx_ttva, by_ttva);
	
	context.save();
	// отрисовка металической тетевы		
	context.beginPath();
	context.moveTo (X(ax_ttva,ay_ttva),Y(ax_ttva,ay_ttva))
	context.lineTo(X(bx_ttva, by_ttva), Y(bx_ttva, by_ttva));	
	context.lineTo(X(cx_ttva, cy_ttva), Y(cx_ttva, cy_ttva));	
	context.lineTo(X(dx_ttva, dy_ttva), Y(dx_ttva, dy_ttva));	
	context.closePath()	
	context.strokeStyle = "black";
	context.stroke();
	context.restore();
	
	// отрисовка границ. Стена и пол.
	context.beginPath();
	context.moveTo(ax_StepKsur[count], ay_StepKsur[count]);
	context.closePath()	
	context.strokeStyle = "green";
	context.stroke();
	} // end function ttva
	
	function stair(okno) {
	clip(okno);
	var canvas = document.getElementById(okno), 
	context = canvas.getContext("2d");
	globalCalk(width, step, width2,height, scale, number,x,y, okno);
	context.beginPath();
	context.moveTo(x + 10, y);
	
	var count = 0;
	
	while (count < number) {// старт цикла отрисовки ступеней
	
	context.strokeStyle = "red";
	context.fillStyle = "blue";
	context.fillRect(x_step [count], y_step [count], xe_step [count],  ye_step [count]);
	context.strokeRect(x_step [count], y_step [count], xe_step [count],  ye_step [count]);
	
	//подсtупёнок
	context.fillStyle = "gray";
	context.fillRect(x_height [count], y_height [count], xe_height [count], ye_height [count]);
	context.strokeRect(x_height [count], y_height [count], xe_height [count], ye_height [count] );
	
	count = count + 1;
	
	}	// end while
	
	}	//end function stair
				
	/// **************** stepKsur			
				
				function stepKsur (okno,countNumber){		// countNumber - счётчик цикла, количество ступеней
				count = 0;
				clip(okno);
				globalCalk(width, step, width2,height, scale, number,x,y, okno);
				var canvas = document.getElementById(okno), 
				context = canvas.getContext("2d");

				while (count < countNumber ) {// старт цикла отрисовки ступеней
				//коcоур ступень
				context.beginPath();
				
				
				context.moveTo(ax_StepKsur[count],ay_StepKsur[count]);
				context.lineTo(bx_StepKsur[count], by_StepKsur[count]);
				context.lineTo(cx_StepKsur[count], cy_StepKsur[count]);
				context.lineTo(dx_StepKsur[count], dy_StepKsur[count]);
				context.lineTo(ax_StepKsur[count], ay_StepKsur[count]);
				count = count + 1;		
				context.strokeStyle = "darkRed";
				context.stroke();
				
				} // end while StеpKsur
				} // end function stepksur
	
	///*/*/**/*/*/ h_ksur
	
				function h_ksur(okno, countNumber){
				clip(okno);
				globalCalk(width, step, width2,height, scale, number,x,y, okno);
				var canvas = document.getElementById(okno), 
				context = canvas.getContext("2d");
		    	context.beginPath();
		
				var count = 0;
				var endLoop = countNumber - 1;
				while (count < countNumber) {// старт цикла отрисовки ступеней
				//коcоур подсtупёнок
				context.fillStyle = "gray";
				context.moveTo(ax_ksur[count], ay_ksur[count]);
				context.lineTo(bx_ksur[count], by_ksur[count]);
				if (count < endLoop){
				context.lineTo(cx_ksur[count], cy_ksur[count]);		
				context.lineTo(dx_ksur[count], dy_ksur[count]);		
				}
				if (count == endLoop){
				if( X(bx_ttva,by_ttva) < ax_ksur[count]){
				context.lineTo(cx_ksur[count], Y_downPoint_stair);
				context.lineTo(dx_ksur[count], Y_downPoint_stair);			
				}
				if( X(bx_ttva,by_ttva) > ax_ksur[count]){
				context.lineTo(cx_ksur[count], Y_downPoint_stair);
					if( X(bx_ttva,by_ttva) < bx_ksur[count]){
						context.lineTo(X(bx_ttva,by_ttva), Y_downPoint_stair);
						}
				context.lineTo(dx_ksur[count], dy_ksur[count]);
				}
				}
				
				context.lineTo(ax_ksur[count], ay_ksur[count]);
				count = count + 1;
				context.strokeStyle = "darkBlue";
				context.stroke();
				context.closePath()	
				
				}	// end while 
	
				}   // end function h_ksur
	
	function ksur(okno){
	globalCalk(width, step, width2,height, scale, number,x,y, okno);	
	count = 0;
	//console.log(scale);	
	h_ksur(okno, number);
	stepKsur (okno, number);		
	} //end function ksur
	
	function globalCalk(width, step, width2,height,scale,number,x,y, okno){
	if (okno == "clip4") {
	real_number = number;
	number = 2;
	}

	x1 = x + width2;
	y1 = y;
	x_step = [];y_step = []; x_height = []; y_height = []; // переменные для хранения координат start
	xe_step = []; ye_step = [];xe_height = [];ye_height = []; // переменные для хранения координат end
	
	ax_ksur = [], bx_ksur = [], cx_ksur = [], cx1_ksur = [], dx_ksur = []; // инициализация координат подступенника косоура
	ay_ksur = [], by_ksur = [], cy_ksur = [], cy1_ksur = [], dy_ksur = []; // инициализация координат подступенника косоура
	
	ax_StepKsur = [], bx_StepKsur = [], cx_StepKsur = [], dx_StepKsur = []; // инициализация координат ступени косоура
	ay_StepKsur = [], by_StepKsur = [], cy_StepKsur = [], dy_StepKsur = []; // инициализация координат ступени косоура
	
	l_stair = step  * number; //длинна марша
	h_stair = (width + height) * number;// высота марша
	h_step = height + width; // подъём шага
	
	diff_index_stair = width * ( step/(height + width ) );// коэффициент сторон.методом деления одной стороны на другую
	downSize =  90/s_ksur;
	/* a */  long_y_ttva = ((height + width ) * number) - width;
	/* b */	 long_x_ttva = (number * step) - diff_index_stair;  
	/* c */	 long_ttva = Math.sqrt( Math.pow(long_x_ttva,2) + Math.pow(long_y_ttva,2));// длинна тетевы
	
	
	
	var count = 0;
	scale1 = (350 - (15) - x) / l_stair; //индекс масштаба первого холста
	scale2 = (350- (30) - x) / (step * 2.5); //индекс масштаба второго холста
	clip(okno);
	width = width * scale;
	step = step * scale; 
	width2 = width2 * scale;
	height = height * scale;  
	
	var p_Fase_ksur = (triangle_cos (step,height+width,s_ksur)) * scale;//срез подступёнка косоура
	var p_Fase_StepKsur = (triangle_cos (height+width,step,s_ksur)) * scale;//срез подступёнка косоура
	var endLoop = number - 1;
	while (count < number) {// старт цикла отрисовки ступеней
	//ступень
	x_step [count] = x1 - width2; 
	y_step [count] = y1;
	xe_step [count] = step + width2;
	ye_step [count] = width;
	x1 = x1 + step;		
	//подсtупёнок
	x_height [count] = x1;
	y_height [count] = y1 + width;
	xe_height [count] = -width2;
	ye_height [count] = height;
	y1 = y1 + width+ height;
	
	/* Размещение координатных точек детали:
	а - верх лево
	b - верх право
	с - низ право
	d - низ лево
	*/
	//height ksur
	
	ax_ksur[count] = - (s_ksur * scale) + x_height [count]+ xe_height [count];
	bx_ksur[count] = x_height [count] + xe_height [count];
	cx_ksur[count] = bx_ksur[count];
	dx_ksur[count] = ax_ksur[count];
	
	ay_ksur[count] = y_height [count];
	by_ksur[count] = y_height [count];
	cy_ksur[count] = by_ksur[count] + ye_height [count] + ye_step[count];
	dy_ksur[count] = y_height [count] + ye_height [count] + ye_step[count] - p_Fase_ksur;
	
	// step ksur
	ax_StepKsur[count] = (x_height [count]+ xe_height [count]) - step;
	bx_StepKsur[count] = - (s_ksur * scale) + x_height [count]+ xe_height [count];
	cx_StepKsur[count] = bx_StepKsur[count]
	dx_StepKsur[count] = ax_StepKsur[count] + p_Fase_StepKsur;
	
	ay_StepKsur[count] = y_height [count];
	by_StepKsur[count] = y_height [count];
	cy_StepKsur[count] = by_StepKsur[count] + (s_ksur * scale);
	dy_StepKsur[count] = cy_StepKsur[count];
	
	count = count + 1;
	
	}	// end while
	
	Y_downPoint_stair = y_height [number-1] + height;
	
	// размер нижнего торца тетевы
	var endFase_ttva = triangle_cos ( height+width , step ,s_ttva);
	// размер верхнего торца тетевы
	var startFase_ttva = triangle_cos (step,height+width,s_ttva);	
	// отрисовка металической тетевы		

	ax_ttva = ax_StepKsur[0];
	ay_ttva = ay_StepKsur[0];
	bx_ttva = ax_StepKsur[0]+long_ttva  * scale;
	by_ttva = ay_ttva;	
	cx_ttva = ax_StepKsur[0] - endFase_ttva * scale + long_ttva * scale;
	cy_ttva = ay_ttva + s_ttva * scale;;// нижнее сечение тетевы
	dx_ttva = ax_StepKsur[0] + startFase_ttva  * scale;
	dy_ttva = ay_StepKsur[0] + s_ttva * scale;;
	
	x0 = ax_ttva;
	y0 = ay_ttva;
	// текст
	var globalCountCalk = 1;
	count = 0;
	}	//end function	globalCalk
	
	function lineStepKsur(x_path, y_path, scale, okno,count,indent,indentLine,ax,ay,bx,by,) { // вынос размера
	/*  x_path,y_path - модуль направления. -1, 0, 1
	indent - высота линий
	indentLine - отступ размерной линии
	*/
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
					textStart = 6;
			//	if (y_path == -1) {	x_textStep = -15;}		
					}
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
	c = C(a,b); // значение размера
	if (Ls_ttva == "true"){c = LfrontTtva}
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
	
	
	function sizeKsur(okno)	{
	
	globalCalk(width, step, width2,height, scale, number,x,y, okno);
	clip(okno)
	switch(okno){
	case "clip2":
	count = 1;
	lineStepKsur(1,1,scale,okno, 1,3,3.8,
	ax_StepKsur[count],ay_StepKsur[count],
	cx_ksur[count],cy_ksur[count]) // 	lineStepKsur(okno, count,h отступ, положение линии, ax,ay,bx,by,x_size,y_size, text)) шаг ступени по косоуру
	lineStepKsur(-1,0,scale,okno, 1,3,4,
	bx_ksur[count],by_ksur[count],
	cx_ksur[count],cy_ksur[count]) // высота ступени косоура	
	count = 0;
	lineStepKsur(1,1,scale,okno, 1,3,3.8, 
	dx_ksur[count],dy_ksur[count],
	cx_ksur[count],cy_ksur[count]) //срез подступёнка косоура	
	lineStepKsur(-1,-1,scale,okno, 1,3,4, 
	bx_ksur[count],by_ksur[count],
	bx_ksur[count + 1],by_ksur[count + 1]) // 	шаг между ступенями
	lineStepKsur(-1,0,scale,okno, 1,3,4, 
	dx_ksur[count],dy_ksur[count],
	cx_ksur[count],cy_ksur[count]) // срез по высоте подступёнка	
	lineStepKsur(0,-1,scale,okno, 1,4,5,
	ax_StepKsur[count],ay_StepKsur[count],
	dx_StepKsur[count],dy_StepKsur[count]) // срез по ступени косоура	
	lineStepKsur(0,-1,scale,okno, 1,1.5,1.9, ax_StepKsur[count],ay_StepKsur[count],bx_StepKsur[count],by_StepKsur[count]) // длинна ступени косоура	
	lineStepKsur(0,-1,scale,okno, 1,4,4.2, 
	ax_ksur[count],ay_ksur[count],
	bx_ksur[count],by_ksur[count]) // толщина подступёнка  косоура	
	count = 2;
	lineStepKsur(1,1,scale,okno, 1,3,3.8, ax_StepKsur[count],ay_StepKsur[count],dx_StepKsur[count],dy_StepKsur[count]) // срез ступени по косоуру
	count = 0;
	case "clip3":
	count = number - 1;
	if (bx_ttva > dx_ksur[count]) { // с подрезом нижнего подступе́нка
	lineStepKsur(1,1,scale,okno, 1,2.5,2.7, 
	dx_ksur[count],dy_ksur[count],
	X(bx_ttva,by_ttva), Y(bx_ttva,by_ttva)) //срез подступёнка косоура	
	lineStepKsur(0,1,scale,okno, 1,3,3.2, 
	X(bx_ttva,by_ttva), Y(bx_ttva,by_ttva),
	cx_ksur[count],cy_ksur[count]) // прямой срез нижнего подступёнка косоура
	
	lineStepKsur(-1,0,scale,okno, 4,downSize,downSize * 1.05,
	ax_ksur[count],ay_ksur[count],
	dx_ksur[count],dy_ksur[count]) // высота до внутренего среза косоура	
	
	lineStepKsur(-1,0,scale,okno, 4,downSize / 0.9,downSize / 0.85 ,
	dx_ksur[count],dy_ksur[count],
	X(bx_ttva,by_ttva), Y(bx_ttva,by_ttva) ) // высота до внутренего среза косоура	
	
	}
	if (bx_ttva < dx_ksur[count]) { // ровный выход
	lineStepKsur(0,1,scale,okno, 1,4,4.2, 
	X(bx_ttva,by_ttva), Y(bx_ttva,by_ttva),
	dx_ksur[count],dy_ksur[count]) // расстояние от тетевы до нижнего подступёнка косоура	
	}
	lineStepKsur(1,1,scale,okno, 1,1.3,1.4, 
	ax_StepKsur[count],ay_StepKsur[count],
	X(bx_ttva,by_ttva), Y(bx_ttva,by_ttva))// шаг нижней ступени на тетиве
	count = count - 1;
	lineStepKsur(0,-1,scale,okno, 1,4,4.7, 
	ax_StepKsur[count],ay_StepKsur[count],
	bx_ksur[count],by_ksur[count]) // толщина подступёнка  косоура	
	
	} // end swith
	
	}	//end sizeKsur
	
	function sizeTtva (okno){
	lineStepKsur(-1,0,scale,okno, 4,-100,-100,
	ax_ttva,ay_ttva,
	dx_ttva,dy_ttva) // толщина	
	
	lineStepKsur(0,1,scale,okno, 4,1.5,1.7,
	X(ax_ttva,ay_ttva), Y(ax_ttva,ay_ttva),
	X(dx_ttva,dy_ttva), Y(dx_ttva,dy_ttva)) //  срез левый	
	
	lineStepKsur(0,1,scale,okno, 4,1.5,1.7,
	X(bx_ttva,by_ttva), Y(bx_ttva,by_ttva),
	X(cx_ttva,cy_ttva), Y(cx_ttva,cy_ttva)) //  срез правый	
	Ls_ttva = "true";
	lineStepKsur(0,-1,scale,okno, 5,3,3.3,
	X(ax_ttva,ay_ttva), Y(ax_ttva,ay_ttva),
	X(bx_ttva,by_ttva), Y(bx_ttva,by_ttva)) //  длинна тетевы
	Ls_ttva = "false";
	}
//------------- sizeElement_Stepksur
	function sizeElement_Stepksur (okno){
	lineStepKsur(0,1,scale,okno, 4,1.5,1.7,
	X(ax_StepKsur[0],ay_StepKsur[0]), Y(ax_StepKsur[0],ay_StepKsur[0]),
	X(dx_StepKsur[0],dy_StepKsur[0]), Y(dx_StepKsur[0],dy_StepKsur[0])) //  отступ среза	
	
	lineStepKsur(-1,-1,scale,okno, 4,9,11,
	X(ax_StepKsur[0],ay_StepKsur[0]), Y(ax_StepKsur[0],ay_StepKsur[0]),
	X(dx_StepKsur[0],dy_StepKsur[0]), Y(dx_StepKsur[0],dy_StepKsur[0])) //  срез 	
	
	lineStepKsur(0,-1,scale,okno, 4,5,6,
	X(ax_StepKsur[0],ay_StepKsur[0]), Y(ax_StepKsur[0],ay_StepKsur[0]),
	X(bx_StepKsur[0],by_StepKsur[0]), Y(bx_StepKsur[0],by_StepKsur[0])) //  длинна	
	
	lineStepKsur( -1,0,scale,okno, 4,5,6,
	X(bx_StepKsur[0],by_StepKsur[0]), Y(bx_StepKsur[0],by_StepKsur[0]),
	X(cx_StepKsur[0],cy_StepKsur[0]), Y(cx_StepKsur[0],cy_StepKsur[0])) //  толщина профиля	
	
	lineStepKsur(0,1,scale,okno, 4,9,11,
	X(cx_StepKsur[0],cy_StepKsur[0]), Y(cx_StepKsur[0],cy_StepKsur[0]),
	X(dx_StepKsur[0],dy_StepKsur[0]), Y(dx_StepKsur[0],dy_StepKsur[0])) //  низ длинна	
	
	} // end function 
	
//////////////// sizeElement_h_ksur
	
	function sizeElement_h_ksur (okno){
	lineStepKsur(1,0,scale,okno, 4,3,3.7,
	X(ax_ksur[0],ay_ksur[0]), Y(ax_ksur[0],ay_ksur[0]),
	X(dx_ksur[0],dy_ksur[0]), Y(dx_ksur[0],dy_ksur[0])) //  длинна внутренняя	
	
	lineStepKsur(1,0,scale,okno, 4,3,3.7,
	X(cx_ksur[0],cy_ksur[0]), Y(cx_ksur[0],cy_ksur[0]),
	X(dx_ksur[0],dy_ksur[0]), Y(dx_ksur[0],dy_ksur[0])) //  отступ среза	
	
	lineStepKsur(1,1,scale,okno, 4,15,20,
	X(cx_ksur[0],cy_ksur[0]), Y(cx_ksur[0],cy_ksur[0]),
	X(dx_ksur[0],dy_ksur[0]), Y(dx_ksur[0],dy_ksur[0])) //  срез	
	
	lineStepKsur(-1,0,scale,okno, 4,3,3.7,
	X(cx_ksur[0],cy_ksur[0]), Y(cx_ksur[0],cy_ksur[0]),
	X(bx_ksur[0],by_ksur[0]), Y(bx_ksur[0],by_ksur[0])) //  длинна внешняя	
	
	lineStepKsur(0,-1,scale,okno, 4,3,3.7,
	X(ax_ksur[0],ay_ksur[0]), Y(ax_ksur[0],ay_ksur[0]),
	X(bx_ksur[0],by_ksur[0]), Y(bx_ksur[0],by_ksur[0])) //  толщина	
	
	} // end function sizeElement_h_ksur
	
	function sizeElement_hDown (okno){
	
	var hDownNumber = 3;
	lineStepKsur(1,0,scale,okno, 4,3,3.7,
	ax_ksur[hDownNumber], ay_ksur[hDownNumber],
	dx_ksur[hDownNumber],dy_ksur[hDownNumber]) //  длинна внутрення
		
	lineStepKsur(0,-1,scale,okno, 4,3,3.7,
	ax_ksur[hDownNumber], ay_ksur[hDownNumber],
	bx_ksur[hDownNumber],by_ksur[hDownNumber]) // толщина
		
	lineStepKsur(-1,0,scale,okno, 4,3,3.7,
	bx_ksur[hDownNumber], by_ksur[hDownNumber],
	cx_ksur[hDownNumber],Y_downPoint_stair) // длинна внешняя
		
		
		} // end function sizeElement_hDown
	
//////////////// clip
	
	function clip(okno){
	if (okno == "element"){scale = scale2 * 2;
	x1 = x1 + 30;
	y1 = y1 - 20; 
		}
	if (okno == "element2"){scale = scale2 * 2;
	x1 = x1 - 70;
	y1 = y1 - 20; 
		}
	if (okno == "element3"){scale = scale2 * 2;
	x1 = x1 + 200 - (number * step) * scale;
	y1 = y1 + 145 - (long_y_ttva ) * scale;
		
	//	x1 = x1 -50 - (long_x_ttva - step ) * scale;
	//	y1 = y1 - 200 - (long_y_ttva - ((step/height)* height)* 1.7 ) * scale;
		
//	if (fun == 5)	{test('xz1: ', xz1,' yz1: ', yz1, ' x1: ', x1, ' y1: ', y1)}
		}
		
	if (okno == "clip"){scale = scale1; x1 = x1 - 20}
	if (okno == "clip2"){scale = scale2;
	x1 = x1 - 20;
	y1 = y1 - 20; }
	if (okno == "clip3"){scale = scale2;
	x1 = x1 - (long_x_ttva - step * 2) * scale;
	y1 = y1 - (long_y_ttva - ((step/height)* height)* 1.7 ) * scale;
	}
	if (okno == "clip4"){scale = scale2; }
	if (okno == "clip4.1"){scale = scale2;
	x1 = x1 - (long_x_ttva * 0.85 ) * scale;
	y1 = y1 - (long_y_ttva - ((step/height)* height) * 0.63) * scale;
	}

	}
	
	function X(x,y) {
	xRot = ((x - x0) * Math.cos(angleRadian) - (y - y0) * Math.sin(angleRadian) + x0);
	return xRot;
	};
	function Y(x,y) {
	yRot = ((x - x0) * Math.sin(angleRadian) + (y - y0) * Math.cos(angleRadian) + y0);
	return yRot;
	};
	
	function ant(vector, h, line, a1,a2, A,okno ,text){ // интелект линии анотации
	/*
	vector = 1,3 вертикальнле направление
	vector = 2,4 горизонтальное напрвление
	 h - ,высота подъёма при горизонтальном направлении
	line - линия под текстом
	а1,а2, А - промежуточные и общая координата
	*/
	var A0 = a1 + ((a2 - a1) / 2);
	globalCalk(width, step, width2,height, scale, number,x,y, okno);
	clip(okno);
	var canvas = document.getElementById(okno), 
	context = canvas.getContext("2d");
	context.beginPath();
		 if (vector == 1) {	 
		 context.moveTo(A, A0);
		 context.lineTo(A - line , A0);
		 context.textAlign = 'left';
		 context.textBaseline = 'top';
		 context.font = "bold 20px sans-serif";
		 context.fillText( text , A -line - h, A0)	 		 
		 }
	if (vector == 3) {

	context.moveTo(A, A0);
	context.lineTo(A + line , A0);
    context.textAlign = 'right';
	context.textBaseline = 'bottom';
	context.font = "bold 20px sans-serif";
	context.fillText( text , A +line + h, A0)	 	

	}
	if (vector == 2) {
	context.moveTo(A0, A);
	context.lineTo(A0, A - h);	
	context.lineTo(A0 + line, A - h);
	context.textAlign = 'right';
	context.textBaseline = 'bottom';
	context.font = "bold 20px sans-serif";
	context.fillText( text , A0 +line , A - h)	 	
	}
	
	if (vector == 4) {
	context.moveTo(A0, A);
	context.lineTo(A0, A + h);	
	context.lineTo(A0 - line, A + h);
	context.textAlign = 'left';
	context.textBaseline = 'top';
	context.font = "bold 20px sans-serif";
	context.fillText( text , A0 -line , A + h)	 	
	}
	context.strokeStyle = "green";
	context.stroke();
	}
	
	function ant_stair(okno){ // установка линий анотации для косоура
	
	ant(2, 15, 100,ax_StepKsur[number-2] ,bx_StepKsur[number-2], ay_StepKsur[number-2] -( width * scale),okno ,'ступень');
	ant(3, 25, 100,by_ksur[number-2] ,cy_ksur[number-2], bx_ksur[number-2] +( width2 * scale),okno ,'подступёнок')
	ant(4, 25, 100,dx_ksur[number-2] ,cx_ksur[number-2], dy_ksur[number-2] ,okno ,'h-косоур')
	ant(4, 25, 100,dx_StepKsur[number-2] ,cx_StepKsur[number-2], cy_StepKsur[number-2],okno ,'L-косоур');
	ant(4, 10, 270,dx_ksur[number-1] ,cx_ksur[number-1], Y_downPoint_stair ,okno ,'нижний h-косоур (h_down)')
	//	test("ant ax_ksur: ", ax_ksur[number-2], " bx : ", bx_ksur[number-2], )
	}
	
	function ant_ttva(okno){
		ant(4, 20, 100,X(dx_ttva,dy_ttva) ,X(cx_ttva,cy_ttva), Y(dx_ttva,dy_ttva) ,okno ,'тетива')
	}

	   // test("a: ",a," |b: ",b," |c: ",c," |h: ",h, " |x_size: ", x_size)
	} //end function Math


    
    //test("a: ",a," |b: ",b," |c: ",c," |h: ",h, " |x_size: ", x_size)
	//test("long_x_ksur: ",long_x_ksur," /long_y_ksur: ", long_y_ksur, " /long_ksur: ",long_ksur," /y_sizeKsur",y_size, " | x_sizeKsur: ", x_size);
	 //console.log(Math.sqrt(a),Math.sqrt(b),c );
	// test(globalCountCalk, " global  ", scale) ;	
	//console.log("width stairCalk " + width);
	//	alert ("globslCalk");
	//	test("1 цикл - ax_ksur[count]: ",ax_ksur[count], " ay_ksur[count]: " , ay_ksur[count], "bx_ksur[count]: ", bx_ksur[count], "by_ksur[count]: ", by_ksur[count])
	//	console.log(ax_StepKsur);				
	//	context.lineTo(x - width2, y+long_y_ttva * scale );
	//	context.lineTo((x-width2 + long_x_ttva - endFase_ttva) * scale , y+long_y_ttva  * scale);
	