
function globalCalk(width, step, width2,height,scale,number,x,y, okno){
//console.log("width stairCalk " + width);
alert ("globslCalk");
x1 = x + width2;
y1 = y;
x_step = [];y_step = []; x_height = []; y_height = []; // переменные для хранения координат start
xe_step = []; ye_step = [];xe_height = [];ye_height = []; // переменные для хранения координат end

ax_ksur = [], bx_ksur = [], cx_ksur = [], dx_ksur = []; // инициализация координат подступенника косоура
ay_ksur = [], by_ksur = [], cy_ksur = [], dy_ksur = []; // инициализация координат подступенника косоура

ax_StepKsur = [], bx_StepKsur = [], cx_StepKsur = [], dx_StepKsur = []; // инициализация координат ступени косоура
ay_StepKsur = [], by_StepKsur = [], cy_StepKsur = [], dy_StepKsur = []; // инициализация координат ступени косоура


l_stair = step  * number; //длинна марша
h_stair = (width + height) * number;// высота марша
h_step = height + width; // подъём шага

	diff_index_stair = width * ( step/(height + width ) );// коэффициент сторон.методом деления одной стороны на другую

/* a */  long_y_ttva = (height + width ) * number;
/* b */	 long_x_ttva = (number * step) - diff_index_stair;  
/* c */	 long_ttva = Math.sqrt( Math.pow(long_x_ttva,2) + Math.pow(long_y_ttva,2));// длинна тетевы
	
var count = 0;
scale1 = (350 - (15) - x) / l_stair; //индекс масштаба первого холста
scale2 = (350- (30) - x) / (step * 2.5); //индекс масштаба второго холста
  
  if (okno == "clip"){scale = scale1; x1 = x1 - 20}
  if (okno == "clip2"){scale = scale2; x1 = x1 + 20 }
  

  // test(globalCountCalk, " global  ", scale) ;	
width = width * scale;
step = step * scale; 
width2 = width2 * scale;
height = height * scale;  


var p_Fase_ksur = (triangle_cos (long_x_ttva,long_y_ttva,s_ksur)) * scale;//срез подступёнка косоура
var p_Fase_StepKsur = (triangle_cos (long_y_ttva,long_x_ttva,s_ksur)) * scale;//срез подступёнка косоура


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
		
		// размер нижнего торца тетевы
	var endFase_ttva = triangle_cos (long_y_ttva,long_ttva,s_ttva);
	// размер верхнего торца тетевы
	var startFase_ttva = triangle_cos (long_x_ttva,long_ttva,s_ttva);
		
// отрисовка металической тетевы		

ax_ttva = ax_StepKsur[0];
ay_ttva = ay_StepKsur[0];
bx_ttva = ax_StepKsur[0]+long_x_ttva  * scale;
by_ttva = ay_ttva - width +long_y_ttva * scale;	
cx_ttva = ax_StepKsur[0] - endFase_ttva * scale + long_x_ttva * scale;
cy_ttva = by_ttva;// нижнее сечение тетевы
dx_ttva = ax_ttva;
dy_ttva = ay_StepKsur[0]+ startFase_ttva * scale;
	
// Расчёт размерной линии
count = 1;	
long_x_ksur = bx_StepKsur[count] - ax_StepKsur[count] ;	// a	 
long_y_ksur = cy_ksur[count] - by_ksur[count] ;	// b	 
long_ksur = Math.sqrt( Math.pow(long_x_ksur,2) + Math.pow(long_y_ksur,2));// длинна шага ступени комоура на тетеве	/ c /	 
h_ksur = (long_x_ksur * long_y_ksur) / long_ksur; // c
h_sizeKsur = h_ksur;
x_sizeKsur = triangle_sin (long_y_ksur,long_ksur, h_sizeKsur); //привязка по Х / b /
y_sizeKsur = Math.sqrt( Math.pow(x_sizeKsur,2) + Math.pow(h_sizeKsur,2));// привязка по Y	/ a /	 
// текст
i = 0.9;

ax_lineStepKsur = ax_StepKsur[count] - x_sizeKsur * i;
ay_lineStepKsur = ay_StepKsur[count] + y_sizeKsur * i;
bx_lineStepKsur = cx_ksur[count] - x_sizeKsur * i;
by_lineStepKsur = cy_ksur[count] + y_sizeKsur * i;

x_textStepKsur = ax_lineStepKsur + (bx_lineStepKsur - ax_lineStepKsur) / 2;
y_textStepKsur = ay_lineStepKsur + (by_lineStepKsur - ay_lineStepKsur) / 2;

	 var globalCountCalk = 1;
	 count = 0;
}	//end function	globalCalk
