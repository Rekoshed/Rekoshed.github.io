function test_addHtml(){ // HTML элепенты
//секция setting
//test_addInput("setting","интелектуальный ввод: ","inteliget",555);
test_addInput("setting","высота марша: ","big",1000);
test_addInput("setting","глубина марша: ","long",700);
test_addInput("setting","длинна тетевы: ","long_ttva",1750);
test_addInput("setting","глубина ступени: ","step",180);
test_addInput("setting","толщина ступени: ","width",50);
test_addInput("setting","вылет ступени: ","going",25);
test_addInput("setting","толщина подступёнка: ","width2",30);
test_addInput("setting","количество ступеней: ","number",8);
test_addInput("setting","профиль тетевы: ","s_ttva",80);
test_addInput("setting","профиль косоура: ","s_ksur",40);
test_addInput("setting","длинна сноски размерной линии: ","indent",30);
//test_addInput("setting",": ","",);

// секция tabl
test_addItem1('tabl',"L косоур:","spisok-lKsur");
test_addItem1('tabl',"H косоур:","spisok-downKsur");
test_addItem1('tabl',"Нижний Н-косоур:","spisok-downKsur");
test_addItem1('tabl',"L тетевы  наружний:","LfrontTtva");
test_addItem1('tabl',"метраж для косоура:","spisok-ksurTotal");
test_addItem1('tabl',":","");
test_addItem1('tabl',"Длинна марша:","l_stair");
test_addItem1('tabl',"Высота марша:","h_stair");
test_addItem1('tabl',"Высота шага:","h_step");
test_addItem1('tabl',"Глубина ступени косоура:","long_x_ksur");
test_addItem1('tabl',"Высота ступени косоура:","long_y_ksur");
test_addItem1('tabl',"Шаг ступени на тетиве:","long_ksur");
test_addItem1('tabl',":","");

//секция test
test_addItem2('test',"display_visible():","test1","test1.1");
test_addItem2('test',"start_Data():","startDt","startDt1");
test_addItem2('test',"stair_step():","test5","test5.1");
test_addItem2('test',"ttva_drow():","ttvaDrow","ttvaDrow.2");
test_addItem2('test',"ttva A:/ttva B:","ttvaDrow_a","ttvaDrow_b");
test_addItem2('test',"stair_step_drow():","test2","test2.1");
test_addItem2('test',"нижняя точка лестницы:","test3","test3.1");
test_addItem2('test',"(radio)stepStyle 1&2:","printBlock","printBlock.2");
test_addItem2('test',"navClip():","navClipTest","navClipTest.2");
test_addItem2('test',"ksur_drow():","ksur_drow","ksur_drow.2");
test_addItem2('test',"ksur A:/ksur B:","ksurDrow_a","ksurDrow_b");
test_addItem2('test',"ttva_bx:/ksur_v_cx:","ttva_bx","ksur_v_dx");
test_addItem3('test',"ksur_A/ksur_B/ksur_C:","ksur_A","ksur_B","ksur_C");
test_addItem2('test',"sizeClip():","sizeClipTest","sizeClipTest.2");
test_addItem2('test',"vis_ttva():","visTtvaTest","visTtvaTest.2");
test_addItem2('test',"vis_ksur():","visKsurTest","visKsurTest.2");
test_addItem2('test',"vis_stair_step():","visStairStepTest","visStairStepTest.2");
test_addItem3('test',"size_: смещение и размер:","sizea","sizeb","sizeABL");
test_addItem2('test',"ttva_cutX & Y:","ttvaCut","ttvaCut.2");
test_addItem2('test',"коэффициенты ksur:","ksurCut","ksurCut.2");
test_addItem3('test',"stair_step_w:","ssw","ssw.2","ssw.3");
test_addItem3('test',"nav:","navV","navG","navS");
test_addItem3('test',"goout:","goout","goout.2","goout.3");
test_addItem3('test',"long_A/big_B/long_ttwa_C:","w_A","w_B","w_C");
test_addItem3('test',"math_w переменные:","ttvaw_step","ttvaw_step1","");
test_addItem3('test',":","","","");
test_addItem2('test',"  :","","");

}; // end HTML

function test_display (){
test_script_math = " ❌  ";
test_script_stair = " ❌  ";
  test_work("test1",2);
  test_work("test2",'запуск:'+test_display_main);
		// состояние радиокнопок
	document.getElementById("printBlock").innerHTML = stepstyle;
	document.getElementById("printBlock.2").innerHTML = stepstyle2;
};

function test_work (str,indikator) {
if (indikator == 2){indikator = " 🆓 "}
if (indikator == 1){indikator = " ✅  "}
if (indikator == 0){indikator = " ❌  "}
document.getElementById(str).innerHTML = indikator
};

function test2_work (str,coment,str2,indikator) {
if (indikator == 2){indikator = " 🆓 "}
if (indikator == 1){indikator = " ✅  "}
if (indikator == 0){indikator = " ❌  "}
document.getElementById(str).innerHTML = coment
document.getElementById(str2).innerHTML = indikator
};

function test_vis(){
 test_work ("visTtvaTest",2);
 test_work ("visKsurTest",2);
};

function test_text(tId,tData){
var div = document.getElementById('test');
var elem = document.createElement("p");
elem.innerHTML = tId+': '+ tData;
div.appendChild(elem);
}

function test_text1(tId,tData){
var div = document.getElementById('test');
var elem = document.createElement("p");
elem.innerHTML = "<span class='tId'>"+tId+'</span>: '+ tData;
div.appendChild(elem);
}

function test_text2(tId,tData,tId2,tData2){
var div = document.getElementById('test');
var elem = document.createElement("p");
elem.innerHTML = "<span class='tId'>"+tId+'</span>: '+ tData + "<span class='tId2'>"+tId2+'</span>: '+ tData2;
div.appendChild(elem);
}

function test_text3(tId,tData,tId2,tData2,tId3,tData3){
var div = document.getElementById('test');
var elem = document.createElement("p");
elem.innerHTML = "<span class='tId'>"+tId+'</span>: '+ tData + "<span class='tId2'>"+tId2+'</span>: '+ tData2+ "<span class='tId3'>"+tId3+'</span>: '+ tData3;
div.appendChild(elem);
}

function test_addItem1(mainID,print,testID1){
	var idTest = document.getElementById(mainID);

var conTest1 = document.createElement('div');
conTest1.className ="container";
var pTest1 = document.createElement('p');
pTest1.innerHTML= print; 
var divTest1 = document.createElement('div');
divTest1.id = testID1; divTest1.className='itemTest';

conTest1.appendChild(pTest1);
conTest1.appendChild(divTest1);
idTest.appendChild(conTest1);
};


function test_addItem2(mainID,print,testID1,testID2){
	var idTest = document.getElementById(mainID);

var conTest1 = document.createElement('div');
conTest1.className ="container";
var divTest1 = document.createElement('div');
var pTest1 = document.createElement('p');
pTest1.innerHTML= print; 
divTest1.id = testID1; divTest1.className='itemTest';

var divTest11 = document.createElement('div')
divTest11.id = testID2; divTest11.className='itemTest';

conTest1.appendChild(pTest1);
conTest1.appendChild(divTest1);
conTest1.appendChild(divTest11);
idTest.appendChild(conTest1);

};

function test_addItem3(mainID,print,testID1,testID2,testID3){
	var idTest = document.getElementById(mainID);

var conTest1 = document.createElement('div');
conTest1.className ="container";
var pTest1 = document.createElement('p');
pTest1.innerHTML= print; 

var divTest1 = document.createElement('div');
divTest1.id = testID1; divTest1.className='itemTest';

var divTest11 = document.createElement('div')
divTest11.id = testID2; divTest11.className='itemTest';

var divTest12 = document.createElement('div')
divTest12.id = testID3; divTest12.className='itemTest';

conTest1.appendChild(pTest1);
conTest1.appendChild(divTest1);
conTest1.appendChild(divTest11);
conTest1.appendChild(divTest12);
idTest.appendChild(conTest1);

};

function test_addInput(mainID,print,ID,val){
var set = document.getElementById(mainID);
var xset = document.createElement("div");
xset.className ="container";
// создаем новое поле ввода
var new_field = document.createElement("input");
// установим для поля ввода тип данных 'text'
new_field.setAttribute("type", "number");
// установим имя для поля ввода
new_field.setAttribute("value", val);

new_field.className = "inpt";
// определим место вствки нового поля ввода (перед каким элементом его вставить)
var pos = xset.childElementCount;
// добавим поле ввода в форму
  var pSet1 = document.createElement('p');
  pSet1.innerHTML= print; 
xset.insertBefore(pSet1, xset.childNodes[pos]);
xset.appendChild(new_field);
set.appendChild(xset);
new_field.id = ID;
} // addInput

