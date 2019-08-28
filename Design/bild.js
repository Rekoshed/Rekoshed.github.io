function toolbar(main, back){// toolbar для контентовых и тестовых  страниц сайта
document.write("<div class='toolbar'><a href='" + main + "'>Главная</a><a href='" + back + "'>Назад</a><a href='#'>Контакты</a><a href='#'>О сайте</a></div>");
}

function toolbar_main(main, back){// toolbar для главных страниц. Просто отсутствует <div class='tolbar'>  </div>
    document.write("<a href='" + main + "'>Главная</a><a href='" + back + "'>Назад</a><a href='#'>Контакты</a><a href='#'>О сайте</a>");
    }