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

$(".regButton").click(function () {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 425) {
    $(".activeButton").css("transform", "translate(146px)");
  } else {
    $(".activeButton").css("transform", "translate(243px)");
  }

  $(".activeButton").css("background", "linear-gradient(67deg, #B967C9 2.17%, rgba(0, 0, 0, 0.00) 114.97%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #402C9B");

  $(".support_top__right___gerbs img").eq(0).css("opacity", "0.3");
  $(".support_top__right___gerbs img").eq(1).css("opacity", "1");

  setTimeout(() => {
    $(".regButton").css("color", "#fff");
    $(".fedButton").css("color", "#000");
  }, "100");

  $(".support_top").css("background", "linear-gradient(67deg, #B967C9 2.17%, rgba(0, 0, 0, 0.00) 114.97%), #402C9B");

  $(".support_top__left img").eq(0).attr("src", "img/mainImgSupport2_circle1.png")
  $(".support_top__left img").eq(1).attr("src", "img/mainImgSupport2_circle2.png")
  $(".rightCircle").attr("src", "img/mainImgSupport2_circle3.png")

  $(".showSupport1").css("display", "none")
  $(".showSupport2").css("display", "flex")

  $(".support_popular__blocks___item____tag").css("background", "#C88DC5")
  $(".support_all__blocks___item____text_____date").css("color", "#733897")
  $(".support_all__blocks___item____text_____button").css("background", "#733897")
})

$(".fedButton").click(function () {
  $(".activeButton").css("transform", "translate(0px)");
  $(".activeButton").css("background", "linear-gradient(249deg, #32AEDB -28.54%, rgba(0, 0, 0, 0.00) 93.07%), #402C9B");

  $(".support_top__right___gerbs img").eq(0).css("opacity", "1");
  $(".support_top__right___gerbs img").eq(1).css("opacity", "0.3");
  setTimeout(() => {
    $(".fedButton").css("color", "#fff");
    $(".regButton").css("color", "#000");
  }, "100");

  $(".support_top").css("background", "linear-gradient(73deg, #2E78E7 2.36%, rgba(0, 0, 0, 0.00) 103.33%), #402C9B");

  $(".support_top__left img").eq(0).attr("src", "img/mainImgSupport1_circle1.png")
  $(".support_top__left img").eq(1).attr("src", "img/mainImgSupport1_circle2.png")
  $(".rightCircle").attr("src", "img/mainImgSupport1_circle3.png")

  $(".showSupport1").css("display", "flex")
  $(".showSupport2").css("display", "none")

  $(".support_popular__blocks___item____tag").css("background", "#8692C3")

  $(".support_all__blocks___item____text_____date").css("color", "#3D2A92")
  $(".support_all__blocks___item____text_____button").css("background", "#3D2A92")
})
