//alert("math")

function math_fun(visual){
switch(visual){
 case 1:
clear("clip");
test_display();
scale_()
stair_step()
math_ksur()
math_ttva()
math_test()
break;
case 2:
clear("clip");
test_display();
scale_()
stair_step_w()
math_test()
break;}

}

function math(visual){
  switch(visual){
   case 1:
   	data_stair()
   	display_visible("main");
	math_fun(count_math_fun)
   break;
   case 2:
math_fun(count_math_fun)
	if (visual_VAR=="count_vis_ttva"){//тетева и размеры
if (count_vis_ttva == 1) {
document.getElementById("sizettva").style["background"] = 'red';
visual_ttva=1// отображение элемента лестницы.
visual_stair_step=0 // отображение элемента лестницы.
visual_ksur=0// отображение элемента лестницы.
math_fun(count_math_fun)
size_ttva(count_math_fun);
};
if (count_vis_ttva == 2) {
visual_sizeElem()// показываем исходное состояние кнопок sizeElem
math_fun(count_math_fun)
};

	}; // end if visual_VAR
	
if (visual_VAR=="count_vis_ksur"){// ksur и размеры
if (count_vis_ksur == 1) {
document.getElementById("sizeksur").style["background"] = 'red';
visual_ttva=0// отображение элемента лестницы.
visual_stair_step=0 // отображение элемента лестницы.
visual_ksur=1// отображение элемента лестницы.
math_fun(count_math_fun)
size_ksur(count_math_fun);
};
if (count_vis_ksur == 2) {
visual_sizeElem()// показываем исходное состояние кнопок sizeElem
math_fun(count_math_fun)
};

}; // end if visual_VAR

if (visual_VAR=="count_vis_stair_step"){// ksur и размеры
if (count_vis_stair_step == 1) {
document.getElementById("sizeStairStep").style["background"] = 'red';
visual_ttva=0// отображение элемента лестницы.
visual_stair_step=1 // отображение элемента лестницы.
visual_ksur=0// отображение элемента лестницы.
math_fun(count_math_fun)
size_stair_step(count_math_fun);
};
if (count_vis_stair_step == 2) {
visual_sizeElem()// показываем исходное состояние кнопок sizeElem
math_fun(count_math_fun)
};

}; // end if visual_VAR
   break;
   case 3:
   display_visible("main");
   break;

		}//end switch
	} //end function math

function stair_step(){ // расчёт ступеней и подступёнков
test_work ("test5",0)

step_style=0; // коррекция размера ступени
substep_style=0;// коррекция размера подступёнка
if (stepstyle == "step") { substep_style = data.width;}// первичные данные стыка ступени


step = []; // объявляем массив ступени
pod_step = []; // объявляем массив подступёнка

for(i=0; i<data.number; i++){ 
 
 if (stepstyle == "step" && i==data.number-1) {substep_style = 0;} //вторичные данные стыка ступени
 if (stepstyle == "sub_step" && i==1) {step_style = data.width2;}
  step[i] = {
    start_x: x1-step_style*scale,
    start_y: y1,
    finish_x: (data.lenght+step_style +data.going ) *scale,
    finish_y: data.width*scale,
  }
   x1 = x1 + data.lenght*scale;

  pod_step[i] = {
    start_x: x1-data.width2*scale,
    start_y: y1+data.width*scale,
    finish_x: data.width2*scale,
    finish_y: (data.height+substep_style) *scale,
  }

  y1 = y1 + (data.width+data.height)*scale;
// if(stepstyle2 == "step" ){y2 = y2 - data.width*scale}
  } // end for

  max_x = x1// край по ступени
  max_y = y1// низ по подсупёнку
  
  test_work("test3", "max x:"+ parseInt(max_x) );
  test_work("test3.1","max y:"+ parseInt(max_y) );
  
  test_work("test2",0);
  test_work ("test5",1)
  count_stair_step++
  test_work ("test5.1",'запуск:'+ count_stair_step );

 if (visual_stair_step == 1) {stair_step_drow()};// условие функции отрисовки

} // end stair_step()

function math_ttva(){//расчёт тетевы
// срезы концов тетевы:расчёт верен
  ttva_cutX = cut (ksur_g[1].ax,ksur_g[1].ay, ksur_g[1].dx,ksur_g[1].dy,data.s_ksur,data.s_ttva);
  ttva_cutY = cut ( ksur_v[0].cx,ksur_v[0].cy, ksur_v[0].dx,ksur_v[0].dy,data.s_ksur,data.s_ttva);


  ttva = {
	ax: step[0].start_x,
	ay: pod_step[0].start_y + triangle_alfa(data.width2, data.lenght, data.height+data.width) *scale,// triangle_alfa (min_a,max_a,max_b)
	bx: max_x - (data.width2*scale) - triangle_alfa (data.width, data.height + data.width , data.lenght )*scale,
	by: max_y,
	
  }

  ttva_back = {//отрисовка обратной стороны тетевы
  	cx: ttva.bx - ttva_cutX*scale,
	cy: max_y,
	dx: ttva.ax,
  	dy: ttva.ay + ttva_cutY*scale,
  	
  };


  test_work("ttvaCut", (parseInt(ttva_cutX*10))/10);
  test_work("ttvaCut.2", (parseInt(ttva_cutY*10))/10);
  test_work("ttvaDrow",0);
  test_work("ttva_bx", (parseInt(ttva.bx*10))/10 );
contrPoint()
 if (visual_ttva == 1) {ttva_drow()};// условие функции отрисовки
} // end function math_ttva()

function math_control_ttva(){//контрольная линия для тетевы

  control_ttva = { // линия соприкосновения тетевы и косоура
	ax: step[0].start_x-(data.width2*scale),
	ay: pod_step[0].start_y,// triangle_alfa (min_a,max_a,max_b)
	bx: max_x-(data.width2*scale),
	by: max_y+(data.width*scale),
  }
 // test_work("CttvaDrow",0);
  control_ttva_drow(count_math_fun)
} // end function math_ttva()

function math_ksur(){ // расчёт ступеней и подступёнков
//test_work ("mathKsur",0)
ksur_g_start=0; // коррекция размера первой ступени
substep_style=0;// коррекция размера подступёнка

 
ksur_g = []; // объявляем массив горизонтального косоура
ksur_v = []; // объявляем массив вертикального косоура
fase_ksur_g = triangle_alfa (data.s_ksur ,data.height+data.width, data.lenght );//срез подступёнка косоура
fase_ksur_v = triangle_alfa (data.s_ksur , data.lenght,data.height+data.width);//срез подступёнка косоура

for(i=0; i<data.number; i++){ 
 
 if (i > 0) { ksur_g_start= data.width2;} //условие для первой ступени косоура

  ksur_g[i] = {
    ax: x2-ksur_g_start*scale,
    bx: pod_step[i].start_x,
    cx: pod_step[i].start_x,
    dx: x2-data.width2*scale + fase_ksur_g*scale,
    
    
    ay: y2+data.width*scale,
    by: y2+data.width*scale,
    cy: y2+ (data.width+data.s_ksur) *scale,
    dy: y2+ (data.width+data.s_ksur) *scale,
    
  }
   x2 = x2 + data.lenght*scale;

  ksur_v[i] = {
ax: x2- (data.width2+data.s_ksur) *scale,
bx: pod_step[i].start_x,
cx: pod_step[i].start_x,
dx: x2- (data.width2+data.s_ksur) *scale,


ay: y2+ (data.width+data.s_ksur) *scale,
by: y2+ (data.width+data.s_ksur) *scale,
cy: y2+data.width*scale+(data.width+data.height)*scale,
dy: y2+data.width*scale -fase_ksur_v*scale+(data.width+data.height)*scale,
  };//ksur_v

 
  y2 = y2 + (data.width+data.height)* scale;

  } // end for
  

i=i-1;
if(i<0){i=0}; // дебаг для значения 1 ступень

  max_x = x1// край по ступени
  max_y = y1// низ по подсупёнку
// ttva.bx:
ksur_ttva_down = max_x - (data.width2*scale) - triangle_alfa (data.width, data.height + data.width , data.lenght )*scale;// точка ttva.bx

// ttva.a - промежуточная точка верхнего гор.косоура 
ksur_dax = data.x - navGNum;
ksur_day = data.y -navVNum+data.width*scale+triangle_alfa(data.width2, data.lenght, data.height+data.width) *scale;

 test_work("ksur_v_dx", (parseInt(ksur_v[i].dx*10))/10 );
 test_work("ksur_drow",0);
 ksur_cutY = triangle_alfa (ksur_ttva_down - ksur_v[i].dx , data.lenght,data.height+data.width); // высота среза нижнего косоура по Y
 if (visual_ksur == 1) {ksur_drow()};// условие функции отрисовки

} // end stair_step()


function math_ttva_w(){//расчёт тетевы
// срезы концов тетевы:расчёт верен


  ttva_cutX = cut (ksur_g[1].ax,ksur_g[1].ay, ksur_g[1].dx,ksur_g[1].dy,data.s_ksur,data.s_ttva);
  ttva_cutY = cut ( ksur_v[0].cx,ksur_v[0].cy, ksur_v[0].dx,ksur_v[0].dy,data.s_ksur,data.s_ttva);


  ttva = {
	ax: step[0].start_x,
	ay: pod_step[0].start_y + triangle_alfa(data.width2, data.lenght, data.height+data.width) *scale,// triangle_alfa (min_a,max_a,max_b)
	bx: max_x - (data.width2*scale) - triangle_alfa (data.width, data.height + data.width , data.lenght )*scale,
	by: max_y,
	
  }

  ttva_back = {//отрисовка обратной стороны тетевы
  	cx: ttva.bx - ttva_cutX*scale,
	cy: max_y,
	dx: ttva.ax,
  	dy: ttva.ay + ttva_cutY*scale,
  	
  };


  test_work("ttvaCut", (parseInt(ttva_cutX*10))/10);
  test_work("ttvaCut.2", (parseInt(ttva_cutY*10))/10);
  test_work("ttvaDrow",0);
  test_work("ttva_bx", (parseInt(ttva.bx*10))/10 );
contrPoint()
 if (visual_ttva == 1) {ttva_drow()};// условие функции отрисовки
} // end function math_ttva_w()

function stair_step_w(){ // расчёт ступеней и подступёнков
test_work ("ssw",0)
goout = data.lenght-(data.lenght*(data.lng/(data.lenght*data.number+data.going)))
step_style=0; // коррекция размера ступени
substep_style=0;// коррекция размера подступёнка
if (stepstyle == "step") { substep_style = data.width;}// первичные данные стыка ступени


stepw = []; // объявляем массив ступени

for(i=0; i<data.number+1; i++){ 
 
 if (stepstyle == "step" && i==data.number-1) {substep_style = 0;} //вторичные данные стыка ступени
 if (stepstyle == "sub_step" && i==1) {step_style = data.width2;}
  stepw[i] = {
    start_x: x1-step_style*scale,
    start_y: y1,
    finish_x: (data.lenght+step_style +data.going ) *scale,
    finish_y: data.width*scale,
  }
   x1 = x1 + (data.lenght-goout) *scale;

  y1 = y1 + (data.width+data.height)*scale;
// if(stepstyle2 == "step" ){y2 = y2 - data.width*scale}
  } // end for

  max_x = x1// край по ступени
  max_y = y1// низ по подсупёнку
  
 // test_work("test3", "max x:"+ parseInt(max_x) );
 // test_work("test3.1","max y:"+ parseInt(max_y) );
  test_work ("goout", (parseInt(goout*10))/10);
  test_work("test2",0);
  test_work ("ssw",1)
 // count_stair_step++
 // test_work ("test5.1",'запуск:'+ count_stair_step );

if (visual_stair_step == 1) {stair_step_w_drow()};// условие функции отрисовки

} // end stair_step_w()


function math_grid(){

 for(i=0; i<360; i++){  //координатная сетка
 }
grid_drow()
}

