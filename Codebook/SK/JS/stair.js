
function stair_step_drow(){ 
canvas = document.getElementById(view), 
context = canvas.getContext("2d");

context.beginPath();
context.moveTo(50, 0);

var i = 0;

 for(i=0; i<data.number; i++) {// старт цикла отрисовки ступеней

	context.strokeStyle = "red";
	context.fillStyle = "blue";
   //ступень
	context.fillRect( step[i].start_x, step[i].start_y, step[i].finish_x,step[i].finish_y);
	context.strokeRect(step[i].start_x, step[i].start_y, step[i].finish_x,step[i].finish_y);
   //подсtупёнок
	context.fillStyle = "gray";
    context.fillRect( pod_step[i].start_x, pod_step[i].start_y, pod_step[i].finish_x, pod_step[i].finish_y);
    context.strokeRect(pod_step[i].start_x, pod_step[i].start_y, pod_step[i].finish_x, pod_step[i].finish_y);
    context.closePath()	
test_work("test2",1); 
test_work("test2.1","i="+i);
} // finish цикла отрисовки ступеней

} // end function stair_step_drow

function ttva_drow(){ 
canvas = document.getElementById(view), 
context = canvas.getContext("2d");
context.beginPath();
context.strokeStyle = "black";
context.moveTo (ttva.ax,ttva.ay);
context.lineTo(ttva.bx, ttva.by);
context.lineTo(ttva_back.cx, ttva_back.cy);
context.lineTo(ttva_back.dx, ttva_back.dy);
context.lineTo(ttva.ax, ttva.ay);
context.stroke();
context.closePath()	
test_work("ttvaDrow_a","ax:"+ (parseInt(ttva.ax*10))/10 +" ay:" + (parseInt(ttva.ay*10))/10 );
test_work("ttvaDrow_b","bx:"+ (parseInt(ttva.bx*10))/10 +" by:" + (parseInt(ttva.by*10))/10 );		
//console.log( "ax: "+ttva.ax+" ay: " +ttva.ay )	
//console.log("bx: "+ttva.bx+" by: " +ttva.by )	
test_work("ttvaDrow",1);
//test_work("test2",1);
//test_work("test2.1","i="+i);

} // end function ttva_drow()

function control_ttva_drow(visual){ 
var end = data.number
canvas = document.getElementById(view), 
context = canvas.getContext("2d");
context.beginPath();
context.strokeStyle = "green";
switch (visual){
 case 1:
context.moveTo (control_ttva.ax,control_ttva.ay);
context.lineTo(control_ttva.bx, control_ttva.by);
// верхнее сечение для среза
context.moveTo (ttva_back.dx,ttva_back.dy);
context.lineTo(ttva_Point_acx, ttva_Point_acy);
// нижнее сечение для среза
context.moveTo (ttva_back.cx,ttva_back.cy);
context.lineTo(ttva_Point_bcx, ttva_Point_bcy);
break;
case 2:
	context.strokeRect(stepw[end].start_x, stepw[end].start_y, stepw[end].finish_x,stepw[end].finish_y);
break;
	} // switch
context.stroke();	

//console.log("ax: "+control_ttva.ax+" ay: " +control_ttva.ay )	
//console.log("bx: "+control_ttva.bx+" by: " +control_ttva.by )	
context.closePath()	
test_work("ttvaDrow",1);
//test_work("test2",1);
//test_work("test2.1","i="+i);

} // end function control_ttva_drow()

function ksur_drow(){ 
canvas = document.getElementById(view), 
context = canvas.getContext("2d");

context.beginPath();
context.strokeStyle = "DarkOrange";
context.fillStyle = "rgba(130,150,200,0.2)";
var i = 0;

 for(i=0; i<data.number; i++) {// старт цикла отрисовки ступеней
context.moveTo (ksur_g[i].ax,ksur_g[i].ay);
context.lineTo(ksur_g[i].bx, ksur_g[i].by);
context.lineTo(ksur_g[i].cx, ksur_g[i].cy);
if (i>0) {context.lineTo(ksur_g[i].dx, ksur_g[i].dy);}

//console.log("ksur_day: "+ ksur_day +" ksur_g[i].dy:" + ksur_g[i].dy)
if(i==0 & ksur_day <= ksur_g[i].cy ){//угол срезан верхнего косоура
	     context.lineTo(ksur_g[i].dx, ksur_g[i].dy)
		 context.lineTo(ksur_dax,ksur_day)
		 }; // ttva ax / bc
if(i==0 && ksur_day > ksur_g[i].dy){// полноценный угол верхнего косоура
		 context.lineTo(ksur_dax, ksur_g[i].dy );
		 // верхний добавыш:
		 four_Angle(ksur_dax, ksur_dax+data.s_ksur*scale, ksur_dax+data.s_ksur*scale,ksur_dax,
		 			ksur_g[i].dy,ksur_g[i].dy, ksur_day+fase_ksur_v*scale, ksur_day)
		 };  
         context.lineTo(ksur_g[i].ax, ksur_g[i].ay);
         
         context.strokeText( i+1 ,ksur_g[i].ax+ data.lenght*0.1, ksur_g[i].ay);
} // finish цикла отрисовки ksur_g
context.fill()
	
for(i=0; i<data.number; i++) {// старт цикла отрисовки ступеней
context.moveTo (ksur_v[i].ax,ksur_v[i].ay);
context.lineTo(ksur_v[i].bx, ksur_v[i].by);

if (i < data.number-1){// порядковые подступёнки
context.lineTo(ksur_v[i].cx, ksur_v[i].cy);
context.lineTo(ksur_v[i].dx, ksur_v[i].dy);
				}
if (i == data.number-1){// нижний 
	if(ksur_v[i].dx > ksur_ttva_down){ //ttva.bx. ровный прямоугольник
context.lineTo(ksur_v[i].cx, max_y);
context.lineTo(ksur_v[i].dx, max_y);
context.lineTo(ksur_v[i].ax, ksur_v[i].ay);
four_Angle( ksur_v[i].dx, ksur_v[i].dx,ksur_ttva_down, ksur_ttva_down-fase_ksur_g*scale,
			max_y-data.s_ksur *scale,max_y,max_y, max_y-data.s_ksur*scale )
context.lineTo(ksur_v[i].dx, max_y-data.s_ksur *scale);
					}
	if(ksur_v[i].dx < ksur_ttva_down){ // ttva.bx. отсечённый угол
context.lineTo(ksur_v[i].cx, max_y);
context.lineTo(ksur_ttva_down, max_y);// ttva.bx
context.lineTo(ksur_v[i].dx, max_y-ksur_cutY);
context.lineTo(ksur_v[i].ax, ksur_v[i].ay);
					}
		
				}// end if
context.lineTo(ksur_v[i].ax, ksur_v[i].ay);

} // finish цикла отрисовки ksur_g
context.fill()
context.stroke();	
context.closePath()	
test_work("ksurDrow_a","ax:"+ (parseInt(ksur_g[0].ax*10))/10 +" ay:" + (parseInt(ksur_g[0].ay*10))/10 );
test_work("ksurDrow_b","bx:"+ (parseInt(ksur_g[0].bx*10))/10 +" by:" + (parseInt(ksur_g[0].by*10))/10 );	
test_work("ksur_drow",1);
test_work("ksur_drow.2","i="+i);
} // end function  ksur_drow()

function  grid_drow(){ 
canvas = document.getElementById(view), 
context = canvas.getContext("2d");
context.beginPath();
context.strokeStyle = "black";
context.moveTo (ttva.ax,ttva.ay);
context.lineTo(ttva.bx, ttva.by);
context.lineTo(ttva_back.cx, ttva_back.cy);
context.lineTo(ttva_back.dx, ttva_back.dy);
context.lineTo(ttva.ax, ttva.ay);
context.stroke();
test_work("ttvaDrow_a","ax:"+ (parseInt(ttva.ax*10))/10 +" ay:" + (parseInt(ttva.ay*10))/10 );
test_work("ttvaDrow_b","bx:"+ (parseInt(ttva.bx*10))/10 +" by:" + (parseInt(ttva.by*10))/10 );		
//console.log( "ax: "+ttva.ax+" ay: " +ttva.ay )	
//console.log("bx: "+ttva.bx+" by: " +ttva.by )	
context.closePath()	
test_work("ttvaDrow",1);
//test_work("test2",1);
//test_work("test2.1","i="+i);

} // end function ttva_drow()

function four_Angle(ax,bx,cx,dx,ay,by,cy,dy){
context.moveTo (ax,ay);
context.lineTo(bx,by);
context.lineTo(cx,cy);
context.lineTo(dx,dy);
context.lineTo(ax,ay);
}


///wwwwww
function stair_step_w_drow(){ 
canvas = document.getElementById(view), 
context = canvas.getContext("2d");

context.beginPath();
context.moveTo(50, 0);

var i = 0;

 for(i=0; i<data.number; i++) {// старт цикла отрисовки ступеней

	context.strokeStyle = "red";
	context.fillStyle = "blue";
   //ступень
	context.fillRect( stepw[i].start_x, stepw[i].start_y, stepw[i].finish_x,stepw[i].finish_y);
	context.strokeRect(stepw[i].start_x, stepw[i].start_y, stepw[i].finish_x,stepw[i].finish_y);
   //подсtупёнок
    context.closePath()	
//test_work("test2",1);
//test_work("test2.1","i="+i);
} // finish цикла отрисовки ступеней

} // end function stair_step_w_drow
function ttva_w_drow(){ 
canvas = document.getElementById(view), 
context = canvas.getContext("2d");
context.beginPath();
context.strokeStyle = "black";
context.fillStyle = "rgba(0,0,0,0.6)";
four_Angle(ttvaw.ax,ttvaw.bx,ttvaw.cx,ttvaw.dx,ttvaw.ay,ttvaw.by,ttvaw.cy,ttvaw.dy);
four_Angle(ttvaw2.ax,ttvaw2.bx,ttvaw2.cx,ttvaw2.dx,ttvaw2.ay,ttvaw2.by,ttvaw2.cy,ttvaw2.dy);
four_Angle(ttvaw_elem.ax,ttvaw_elem.bx,ttvaw_elem.cx,ttvaw_elem.dx,ttvaw_elem.ay,ttvaw_elem.by,ttvaw_elem.cy,ttvaw_elem.dy);
four_Angle(ttvaw_elem2.ax,ttvaw_elem2.bx,ttvaw_elem2.cx,ttvaw_elem2.dx,ttvaw_elem2.ay,ttvaw_elem2.by,ttvaw_elem2.cy,ttvaw_elem2.dy);
context.stroke();
context.fill() 
context.closePath()	
//test_work("ttvaDrow_a","ax:"+ (parseInt(ttva.ax*10))/10 +" ay:" + (parseInt(ttva.ay*10))/10 );
//test_work("ttvaDrow_b","bx:"+ (parseInt(ttva.bx*10))/10 +" by:" + (parseInt(ttva.by*10))/10 );		
//console.log( "ax: "+ttva.ax+" ay: " +ttva.ay )	
//console.log("bx: "+ttva.bx+" by: " +ttva.by )	
/test_work("ttvaDrow",1);
//test_work("test2",1);
//test_work("test2.1","i="+i);

} // end function ttva_drow()