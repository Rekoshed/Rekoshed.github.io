
 

function toolbar(main, work = "me-work.html",contacts = "me-contacs.html", price = "me-price.html"){
    document.write("<a href='" + main + "'>Главная</a><a href='" + work + "'>Мои работы</a><a href='" + contacts + "'>Контакты</a><a href='" + price + "'>Услуги и цены</a>");
    }
    
function aside(st){// список ссылок в блок aside
 // st - указать глубину погружения файла
 // это наш родительский div
 var aside = document.querySelector("aside");
 
 var headerInfoWelder = document.createElement("h3")
 var headerCalc = document.createElement("h3")
 
 // ниже мы создаём список калькулятора
 var listCalk = document.createElement("ul")
 
 // создаём элементы списка калькулятора
 var linkl = document.createElement("li")
 var linkll = document.createElement("li")
 var linklll = document.createElement("li")
 var linklV = document.createElement("li")
 var linkV = document.createElement("li")
 var linkVl = document.createElement("li")
 var linkVll = document.createElement("li")
 
 var liCalk1 = 'Измерения объёмов';
 var liCalk2 = 'Расчёт дуги';
 var liCalk3 = 'Вычислить площадь'
 
 
 // добавляем ссылки в элементы списка
 headerCalc.innerHTML = "Строительный калькулятор";
 linkl.innerHTML = "<a href='" + st + "Size/bild-calk.html' > " + liCalk1 + "</a>";
 linkll.innerHTML = "<a href='" + st + "Size/bild-calkArc.html' >" + liCalk2 + "</a>";
 linklll.innerHTML = "<a href='" + st + "Size/bild-calkArea.html' >" + liCalk3 + "</a>";

 aside.appendChild(headerCalc);
 // добавляем список в родительский div
 aside.appendChild(listCalk);
 // добавляем в список его элементв с ссылками

 listCalk.appendChild(linkl);
 listCalk.appendChild(linkll);
 listCalk.appendChild(linklll);
 listCalk.appendChild(linklV);
 listCalk.appendChild(linkV);
 
 // ниже мы создаём список информации о сварке
 var listInfo = document.createElement("ul")
 
 // создаём элементы списка инфы о сварке
 var Welderl = document.createElement("li")
 var Welderll = document.createElement("li")
 var Welderlll = document.createElement("li")
 var WelderlV = document.createElement("li")
 var WelderV = document.createElement("li")
 var WelderVl = document.createElement("li")
 var WelderVll = document.createElement("li")
 
 var liInfo1 = 'Конструкции из профильной трубы'
 var liInfo2 = 'Сварка профильной трубы инвертором'
 
 // добавляем ссылки в элементы списка
 headerInfoWelder.innerHTML = "Информация о сварке"
 Welderl.innerHTML = "<a href='" + st + "Size/info-1.html' > " + liInfo1 + "</a>"
 Welderll.innerHTML = "<a href='" + st + "Size/info-2-invertor.html' > " + liInfo2 + "</a>"
 /*WelderlV.innerHTML = "<a href='" + st + "PhytonStudent/PyMain.html' ><h2>Python</h2></a>"
 WelderV.innerHTML = "<a href='" + st + "Style/Style_main.html' ><h2>Style</h2></a>"
 */
 aside.appendChild(headerInfoWelder);
 // добавляем список в родительский div
 aside.appendChild(listInfo);
 // добавляем в список его элементв с ссылками
 
 listInfo.appendChild(Welderl);
 listInfo.appendChild(Welderll);
 listInfo.appendChild(Welderlll);
 listInfo.appendChild(WelderlV);
 listInfo.appendChild(WelderV);
 
 
 }
 
 
 function header(){
 
  var headerMain = document.querySelector("header");
  // first block
   var item1 = document.createElement("div");
   // назначаем блоку класс
   item1.classList.add("item");
   item1.classList.add("decor");
   
   var headerWork = document.createElement("h1");
   var nameWork = document.createElement("p");
   
   headerWork.innerHTML = "СВАРЩИК";
   nameWork.innerHTML = "электро-дуговая сварка";
    
    headerMain.appendChild(item1);
    item1.appendChild(headerWork);
    item1.appendChild(nameWork);

    
    
   
   var item2 = document.createElement("div");
	// назначаем блоку класс
	item2.classList.add("item");
	item2.classList.add("decor");
   
   var phone = document.createElement("h2");
   var name = document.createElement("h2");
   var locate = document.createElement("h5");
   
   phone.innerHTML = "89056190962";
   name.innerHTML = "Алексей";
   locate.innerHTML = "г.Струнино"
   
   headerMain.appendChild(item2);
   item2.appendChild(phone);
   item2.appendChild(name);
   item2.appendChild(locate)   
 }
 
 function footer(){
 
   var footerMain = document.querySelector("footer");
   // first block
   var devel = document.createElement("div");
 
   var fLike = document.createElement("p");
   var fcontact = document.createElement("p");
   
   fLike.innerHTML = "Понравился сайт?";
   fcontact.innerHTML = "<a>свяжитесь с разработчиком</a>";
   
   footerMain.appendChild(devel);
   devel.appendChild(fLike);
   devel.appendChild(fcontact);
   
 }