function math_ttva_w() {//расчёт тетевы
// срезы концов тетевы:расчёт верен
  data.long_A = cut_l (stepw[0].start_x, stepw[data.number].start_y+stepw[data.number].finish_y, stepw[data.number].start_x , stepw[data.number].finish_y +stepw[data.number].start_y ); //  глубина марша лестницы
  data.long_ttva = cut_l ( stepw[0].start_x, stepw[0].start_y, stepw[data.number].start_x + stepw[data.number].finish_x, stepw[data.number].start_y); //  тетева
  data.big = cut_l ( stepw[0].start_x, stepw[0].start_y, stepw[0].start_x, stepw[data.number].start_y); //  высота лестницы
 // cut - это С (находит длинну) / В(предпоследний аргумент) * В малое(последний аргумент).получаем С малое.его и двигаем по оси Х
 var ttvaw_cutX = cut (stepw[0].start_x, stepw[0].start_y, stepw[data.number].start_x + stepw[data.number].finish_x, stepw[data.number].start_y,data.big,s_ttva_w);
ttvaw_step = triangle_alfa (data.width,data.big,data.long_A) * scale//выравнивание ступеней по краю тетевы
ttvaw_cutElem = triangle_alfa (s_ttva_w,data.big,data.long_A) * scale//срез сегмента тетевы
test_work("ttvaw_step",'ttvaw_step:<b style="color:Indigo">'+ +(parseInt(ttvaw_step*10))/10);
test_work("ttvaw_step1",'ttvaw_cutElem:<b style="color:Indigo">'+ +(parseInt(ttvaw_cutElem*10))/10);
  ttvaw = {
	ax: stepw[0].start_x,
	ay: stepw[0].start_y,
	bx: stepw[0].start_x + ttvaw_cutX * scale+navSize, //(data.width2*scale) - triangle_alfa (data.width, data.height + data.width , data.lenght )*scale,
	by: stepw[0].start_y ,
	
  	cx: stepw[data.number].start_x + ttvaw_cutX*scale+navSize,
	cy: stepw[data.number].start_y,
	dx: stepw[data.number].start_x,
  	dy: stepw[data.number].start_y,
  	
  };
  
  ttvaw2 = {
  	ax: stepw[0].start_x - ttvaw_step +stepw[0].finish_x - ttvaw_cutX *scale,
  	ay: stepw[0].start_y, 
  	bx: stepw[0].start_x + stepw[0].finish_x - ttvaw_step , //(data.width2*scale) - triangle_alfa (data.width, data.height + data.width , data.lenght )*scale,
  	by: stepw[0].start_y ,
  	
  	cx: stepw[data.number].start_x - ttvaw_step + stepw[data.number].finish_x,
  	cy: stepw[data.number].start_y,
  	dx: stepw[data.number].start_x - ttvaw_step + stepw[data.number].finish_x - ttvaw_cutX*scale,
  	dy: stepw[data.number].start_y,
  	
  };
  
  ttvaw_elem = {
  	ax: stepw[0].start_x + ttvaw_cutX * scale+navSize,
  	ay: stepw[0].start_y,
  	bx: stepw[0].start_x -ttvaw_step +stepw[0].finish_x - ttvaw_cutX *scale,
    by: stepw[0].start_y, 
    
  	cx: stepw[0].start_x -ttvaw_step +stepw[0].finish_x - ttvaw_cutX *scale + ttvaw_cutElem,
	cy: stepw[0].start_y + s_ttva_w * scale, 
  	dx: stepw[0].start_x + ttvaw_cutElem +ttvaw_cutX * scale+navSize,
	dy: stepw[0].start_y + s_ttva_w * scale,
  }
  ttvaw_elem2 = {
  ax: stepw[data.number].start_x + ttvaw_cutX*scale+navSize - ttvaw_cutElem,
  ay: stepw[data.number].start_y - s_ttva_w * scale,
  bx: stepw[data.number].start_x - ttvaw_step + stepw[data.number].finish_x - ttvaw_cutX*scale - ttvaw_cutElem,
  by: stepw[data.number].start_y - s_ttva_w * scale,
  
  cx: stepw[data.number].start_x - ttvaw_step + stepw[data.number].finish_x - ttvaw_cutX*scale,
  cy: stepw[data.number].start_y,
  dx: stepw[data.number].start_x + ttvaw_cutX*scale+navSize,
  dy: stepw[data.number].start_y,
  }
  

  test_work("w_C", "<b style='color:Indigo'>" +(parseInt(data.long_ttva*10))/10);
  test_work("w_A", "<b style='color:Indigo'>" +(parseInt(data.long_A*10))/10);
  test_work("w_B", "<b style='color:Indigo'>" +(parseInt(data.big*10))/10);
  
//console.log('ttvaw_cutX - '+ttvaw_cutX+'scale:'+scale)

 /* test_work("ttvaCut", (parseInt(ttva_cutX*10))/10);
  test_work("ttvaCut.2", (parseInt(ttva_cutY*10))/10);
  test_work("ttvaDrow",0);
  test_work("ttva_bx", (parseInt(ttva.bx*10))/10 );
contrPoint()*/
 if (visual_ttva == 1) {ttva_w_drow()};// условие функции отрисовки
} // end function math_ttva_w()

function stair_step_w(){ // расчёт ступеней и подступёнков
test_work ("ssw",0)
 	goout = 0; 
 	goout_diff=0;

goout=data.lenght- (data.lng/(data.number+2))
goout_diff= (goout-(data.lenght-goout)) /(data.number);

step_style=0; // коррекция размера ступени
substep_style=0;// коррекция размера подступёнка
if (stepstyle == "step") { substep_style = data.width;}// первичные данные стыка ступени


stepw = []; // объявляем массив ступени

for(i=0; i<data.number+1; i++){ 
 
 if (stepstyle == "step" && i==data.number-1) {substep_style = 0;} //вторичные данные стыка ступени
// if (stepstyle == "sub_step" && i==1) {step_style = data.width2;}
  stepw[i] = {
    start_x: x1,
    start_y: y1,
    finish_x: data.lenght *scale,
    finish_y: data.width *scale,
  }
   x1 = x1 + (data.lenght-goout-goout_diff) *scale;
   y1 = y1 + (data.width+data.height)*scale;
  } // end for

  max_x = x1// край по ступени
  max_y = y1// низ по подсупёнку
  
 test_work("test3", "max x:<b style='color:Indigo'>"+ parseInt(max_x) );
 test_work("test3.1","max y:<b style='color:Indigo'>"+ parseInt(max_y) );
  
  goout_step=0 // for test
  goout_step = data.lenght-goout;
  goout_size = goout_step* (data.number+2);
  goout_w=  goout-(data.lenght-goout);
  goout_wn= (goout-(data.lenght-goout)) /(data.number+2);
  //console.log("width="+ goout_w ,"wn="+goout_wn)
  test_work ("goout", 'diff:' + "<b style='color:Indigo'>" +goout_diff+'</b> goout:'+"<b style='color:Magenta'>"+(parseInt(goout*10))/10);
  test_work ("goout.2", "step" + "<b style='color:Magenta'>"+(parseInt(goout_step*10))/10) ;
  test_work ("goout.3", "size" +"<b style='color:Magenta'>" +(parseInt(goout_size*10))/10) ;

  
  test_work("test2",0);
  test_work ("ssw",1)
 // count_stair_step++
 // test_work ("test5.1",'запуск:'+ count_stair_step );

if (visual_stair_step == 1) {stair_step_w_drow()};// условие функции отрисовки

} // end stair_step_w()
