let a = 1;

$('body').on('click', '.header_left__menu', function (event) {
  event.stopPropagation();
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
    `);

    $('.header_left__menu___drop').css('display', 'flex');

    a = 0;
  } else if (a == 0) {
    $('.header_left__menu___drop').remove();
    a = 1;
  }
});

$(document).click(function (event) {
  if (!$(event.target).closest('.header_left__menu').length) {
    $('.header_left__menu___drop').remove();
    a = 1;
  }
});

// ------------------------------------------------------------------------------

// Поиск

function search(thisData, topBlockName, checkTitle){
  let inputValue = thisData.val().toLowerCase();
  let blocks = $(topBlockName);

  let count = 0;
  blocks.each(function (index, element) {
    let blockText = $(element).find(checkTitle).text().toLowerCase(); 
    if (blockText.includes(inputValue)) {
      $(element).show();
      count++;
    } else {
      $(element).hide();
    }
  });

  if (count > 0) {
    $('.filter__count').text(`Найдено: ${count}`);
    $('.filter__count').css('width', '10%');
    $('.filter__search').css('width', '90%');
    $('.filter').css('gap', '20px');
  } else {
    $('.filter__count').text(`Ничего не найдено`);
    $('.filter__count').css('width', '15%');
    $('.filter__search').css('width', '85%');
    $('.filter').css('gap', '0px');
  }
}

$("#news_search").on('input', '.filter__search___input', function () {
  search($(this), '.events_block', '.events_block__bottom___title');
});

$("#service_search").on('input', '.filter__search___input', function () {
  search($(this), '.service_block', '.service_block__main___bottom____text');
});
