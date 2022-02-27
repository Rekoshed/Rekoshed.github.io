function test_display (){
test_script_math = " ❌  ";
test_script_stair = " ❌  ";
	document.getElementById("test1").innerHTML = " нет";
	document.getElementById("test1.1").innerHTML = 'запуск:'+test_display_main;
		// состояние радиокнопок
	document.getElementById("printBlock").innerHTML = stepstyle;
	document.getElementById("printBlock.2").innerHTML = stepstyle2;
}

function test_work (str,indikator) {
if (indikator == 2){indikator = " 🆓 "}
if (indikator == 1){indikator = " ✅  "}
if (indikator == 0){indikator = " ❌  "}

document.getElementById(str).innerHTML = indikator
}

function test2_work (str,coment,str2,indikator) {
if (indikator == 2){indikator = " 🆓 "}
if (indikator == 1){indikator = " ✅  "}
if (indikator == 0){indikator = " ❌  "}
document.getElementById(str).innerHTML = coment
document.getElementById(str2).innerHTML = indikator
}

function test_vis(){
 test_work ("visTtvaTest",2);
 test_work ("visKsurTest",2);
}