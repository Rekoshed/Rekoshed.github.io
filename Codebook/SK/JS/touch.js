

document.body.addEventListener('touchmove', function(evt){
     hand_navGNum= -(evt.changedTouches[0].clientX)
     hand_navVNum= -(evt.changedTouches[0].clientY)

     switch(count_hand){
     case 1:
     if (off_g > hand_navGNum){navGNum=navGNum - speed_move}
     if (off_g < hand_navGNum){navGNum=navGNum + speed_move}
     if (off_v > hand_navVNum){navVNum=navVNum - speed_move}
     if (off_v < hand_navVNum){navVNum=navVNum + speed_move}
      
     off_g = hand_navGNum
     off_v = hand_navVNum
		break;
     }
math(2);
}); 


//Перехватываем события
addEventListener("touchstart", function (e) { TouchStart(e); }); //Начало касания
addEventListener("touchmove", function (e) { TouchMove(e); }); //Движение пальцем по экрану
//Пользователь отпустил экран
addEventListener("touchend", function (e) { TouchEnd(e); });
//Отмена касания
addEventListener("touchcancel", function (e) { TouchEnd(e); });

function TouchStart(e)
{
    //Получаем текущую позицию касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    touchPosition = { x: touchStart.x, y: touchStart.y };

}

function TouchMove(e)
{
    //Получаем новую позицию
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
}

function TouchEnd(e)
{
    CheckAction(); //Определяем, какой жест совершил пользователь

    //Очищаем позиции
    touchStart = null;
    touchPosition = null;
}

function CheckAction()
{
    var d = //Получаем расстояния от начальной до конечной точек по обеим осям
    {
   	 x: touchStart.x - touchPosition.x,
   	 y: touchStart.y - touchPosition.y
    };

    var msg = ""; //Сообщение

    if(Math.abs(d.x) > Math.abs(d.y)) //Проверяем, движение по какой оси было длиннее
    {
   	 if(Math.abs(d.x) > sensitivity) //Проверяем, было ли движение достаточно длинным
   	 {
   		 if(d.x > 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
   		 {
   			 msg = "Swipe Left";
   		 }
   		 else //Иначе он двигал им слева направо
   		 {
   			 msg = "Swipe Right";
   		 }
   	 }
    }
    else //Аналогичные проверки для вертикальной оси
    {
   	 if(Math.abs(d.y) > sensitivity)
   	 {
   		 if(d.y > 0) //Свайп вверх
   		 {
   	
   			 msg = "Swipe up";
   			if(document.getElementById("setting").style["display"] == "inline") 
   			{ display_visible('setting')}
   		 }
   		 else //Свайп вниз
   		 {
  
   			 msg = "Swipe down";
 			if(document.getElementById("setting").style["display"] == "none") 
 			{ display_visible('setting')}
   		 }
   	 }
    }

    msgBox.innerText = msg; //Выводим сообщение

}
