function toolbar(main, back){// toolbar для контентовых и тестовых  страниц сайта
document.write("<div class='toolbar'><a href='" + main + "'>Главная</a><a href='" + back + "'>Назад</a><a href='#'>Контакты</a><a href='#'>О сайте</a></div>");
}

function toolbar_main(main, back){// toolbar для главных страниц. Просто отсутствует <div class='tolbar'>  </div>
    document.write("<a href='" + main + "'>Главная</a><a href='" + back + "'>Назад</a><a href='#'>Контакты</a><a href='#'>О сайте</a>");
    }
function item2(st){// список ссылок в блок item2
    // st - указать глубину погружения файла
    // это наш родительский div
    var itemDiv = document.querySelector("div.item2");
    
    // ниже мы создаём список
	var list = document.createElement("ul")
	// создаём элементы списка
	var linkl = document.createElement("li")
	var linkll = document.createElement("li")
	var linklll = document.createElement("li")
	var linklV = document.createElement("li")
	var linkV = document.createElement("li")
	var linkVl = document.createElement("li")
	var linkVll = document.createElement("li")
	
	// добавляем ссылки в элементы списка
	linkl.innerHTML = "<a href='" + st + "HTMLStudent/HTMLMain.html' ><h2>HTML</h2></a>"
	linkll.innerHTML = "<a href='" + st + "CssStudent/CSSmain.html' ><h2>CSS</h2></a>"
	linklll.innerHTML = "<a href='" + st + "ScriptStudent/ScriptMain.html' ><h2>Java Script</h2></a>"
	linklV.innerHTML = "<a href='" + st + "PhytonStudent/PyMain.html' ><h2>Python</h2></a>"
	linkV.innerHTML = "<a href='" + st + "Style/Style_main.html' ><h2>Style</h2></a>"
	
	// добавляем список в родительский div
	itemDiv.appendChild(list);
	// добавляем в список его элементв с ссылками
	list.appendChild(linkl);
	list.appendChild(linkll);
	list.appendChild(linklll);
	list.appendChild(linklV);
	list.appendChild(linkV);
	
	}
	