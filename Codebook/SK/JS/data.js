function start_Data(){// стартовые инициализации переменных
stepstyle = "step"; //вводные данные положения ступени
stepstyle2 = "step"; // шаг или подступёнок
count_test = 1;//переключатель видимости
count_tabl = 1;//переключатель видимости
count_setting = 1;//переключатель видимости

count_stair_step=0; //счётчик запуска функции stair_step()
count_navClipTest = 0;//счётчик запуска функции navClip()
count_navClip = 1// переключатель видимости navElem()
count_sizeClipTest = 0;//счётчик запуска функции sizeClip()
count_sizeClip = 0// переключатель видимости sizeElem()
count_hand= 0; //переключатель ручного управления

count_vis_ttva=0; //переключатель видимости тетевы
count_vis_ksur=0; //переключатель видимости тетевы
count_vis_stair_step=0; //переключатель видимости тетевы
count_vis_front=0; // переключатель масштаба на первые ступени
count_vis_back=0; // переключатель масштаба на последние ступени

count_math_fun = 1; // переключатель конструктива лестницы

dataCtrl = 1; // переключатель режима контроля за неверным вводом
test_display_main = 0;
// длинна срезов:
l_fase_ksur_g = 1; 
l_fase_ttva_g = 1;
l_fase_ksur_v = 1;
l_fase_ttva_v = 1;

ksur_K=1;
// коэффициентное отношение среза тетевы к сечению профиля:
cut_v=1;
cut_g=1;

//✋
hand_navGNum= 0;
hand_navVNum= 0;
navGNum=0;// инициализация навигации
navVNum=0;

sensitivity = 400; //свайп

//Получение поля, в котором будут выводиться сообщения
msgBox = document.getElementById("msg-box");

left = document.getElementById("left");
right = document.getElementById("right");
up = document.getElementById("up");
down = document.getElementById("down");
large = document.getElementById("large");
small = document.getElementById("small");

sizettva = document.getElementById("sizettva");
sizeksur = document.getElementById("sizeksur");
sizeStairStep = document.getElementById("sizeStairStep");
sizeFront = document.getElementById("sizeFront");
sizeBack = document.getElementById("sizeBack");
}
function data_stair (){  // получаем внешние данные
data_radio(); //данные радиокнопок
	//точки позиции сенсора
  hand_navGNum= 0;
  hand_navVNum= 0;
  off_g=null;
  off_v=null;
  
  speed_move = 3;// еденицы смещения рендора по сенсору
  
  navGNum=0;// инициализация навигации
  navVNum=0;
  navSize=0;
 visual_VAR=0;
 	
 	visual_ttva=1// отображение элемента лестницы.1 или 0
 	visual_stair_step=1// отображение элемента лестницы.1 или 0
 	visual_ksur=1// отображение элемента лестницы.1 или 0
 	
 	goout = 0; // w напуск ступеней
 	
 	data = {
 	x: 20,
 	y: 10,
	width: parseFloat( document.getElementById('width').value), //толщина ступени
	going: parseFloat( document.getElementById('going').value), // выпуск ступени
	width2: parseFloat( document.getElementById('width2').value), //толщина подcтупёнка	
	lenght: parseFloat( document.getElementById('step').value), //ширина ступени		
	height: parseFloat( document.getElementById('height').value), //высота подступёнка			
	number: parseFloat( document.getElementById('number').value), //количество ступеней			
	s_ttva: parseFloat( document.getElementById('s_ttva').value), // сечение профиля тетевы			
	s_ksur: parseFloat( document.getElementById('s_ksur').value), // сечение профиля косоура	
	indent: parseFloat( document.getElementById('indent').value), // длинна сноски размерной линии
	lng: parseFloat( document.getElementById('long').value), // длинна марша
	big: parseFloat( document.getElementById('big').value), // высота марша
	}

	if (dataCtrl == 1) {data_control()}

	if (stepstyle2 == "step") { data.height = data.height - data.width;} // высота шага
	  
	}// end

function data_control (){
	if (data.number < 2) {alert("Не корректное число ступеней. Протокол программы не позволяет вычисление менее двух ступеней.Приносим извинения")
				data.number = 8;
				;}
	
	if (data.width < 1 || data.width > data.lenght) {alert("Не корректное число. Толщина ступени требует коррекции")
	data.width = 4;
				;}
	if (data.going < -data.lenght || data.width > data.lenght) {alert("Не корректное число. Вылет ступени требует коррекции")
	data.going = 2;
				;}

	if (data.width2 < 1 || data.width2 > data.lenght) {alert("Не корректное число. Толщина подступёнка требует коррекции")
	data.width2 = 3;
			;}

	if (data.lenght < 1 || data.lenght > data.height*8) {alert("Не корректное число.Глубина ступени требует коррекции")
	data.lenght = 30;
			;}
	
	if (data.height < 1 || data.height > data.lenght*8) {alert("Не корректное число. Высота подступёнка требует коррекции")
	data.height = 20;
				;}
	
	if (data.s_ttva < 1 || data.s_ttva > data.lenght) {alert("Не корректное число. Сечение тетевы требует коррекции")
	data.s_ttva = 4;
				;}
	
	if (data.s_ksur < 1 || data.s_ksur > data.lenght) {alert("Не корректное число. Сечение косоура требует коррекции")
	data.s_ksur = 4;
				;}
	
	

	} // 
	
	function data_radio(){// данные с радиокнопок
	for (var i = 0; i < myForm.stepStyle.length; i++) {
	myForm.stepStyle[i].addEventListener("click", function (e){
	stepstyle = e.target.value;
	console.log( "stepstyle:" + stepstyle)
	});
	}
	
	for (var i = 0; i < myForm2.stepStyle2.length; i++) {
	myForm2.stepStyle2[i].addEventListener("click", function (e){
	stepstyle2 = e.target.value;
	console.log( "stepstyle2:" + stepstyle2)
	});
	}
	
	}