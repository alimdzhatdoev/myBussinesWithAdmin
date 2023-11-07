let a = 1;
$('.header_left__menu').click(function () {
  if (a == 1) {
    $('.header_left__menu').append(`
            <div class="header_left__menu___drop">
                <a href="/">Главная</a>
                <a href="news.html">Новости</a>
                <a href="supports.html">Меры поддержки</a>
                <a href="service.html">Услуги</a>
                <a href="about.html">О нас</a>
                <a href="contacts.html">Контакты</a>
                <a href="base_knowledge.html">База знаний</a>
                <a href="showcases.html">Витрина предпринимателей</a>
            </div>
        `)

    $('.header_left__menu___drop').css('display', 'flex');

    a = 0
  } else
  if (a == 0) {
    $('.header_left__menu___drop').remove();
    a = 1
  }
})
