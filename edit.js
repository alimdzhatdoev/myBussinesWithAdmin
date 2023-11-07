import {
    getData
} from "./admin/library.js";

//Выгрузка всех новостей в новости
getData("news", "", "admin").then((response) => {
    let block = $("#news_All").empty();
    const maxCharacters = 100;

    response.forEach((element) => {
        block.append(`
            <div class="events_block">
                <div class="events_block__top">
                    <img src="admin/img/${element.img[0]}" alt="" />
                </div>
                <div class="events_block__bottom">
                <div class="events_block__bottom___line">
                    <img src="img/forEvent.png" alt="" />
                </div>
                <div class="events_block__bottom___title">
                    ${element.title.slice(0, maxCharacters)}...
                </div>
                <div class="events_block__bottom___dops">
                    <div class="events_block__bottom___dops____date">${
                      element.date
                    }</div>
                    <a href="new.html?id_new=${
                      element.id
                    }" class="events_block__bottom___dops____readMore">
                        Читать дальше >>
                    </a>
                </div>
                </div>
            </div>
        `);
    });
});

//Редактирование новости
const url_new = new URL(window.location.href);
const queryParams_new = url_new.searchParams;
const id_new = queryParams_new.get("id_new");
if (id_new) {
    getData("news", id_new, "admin").then((response) => {
        $("#news_find_new .new_block__title").text(response.title);
        $("#newName").text(response.title);

        for (let i = 0; i < response.img.length; i++) {
            $("#news_find_new .new_block__img").append(`
                <img src="admin/img/${response.img[i]}" alt="" />
            `);
        }

        $("#news_find_new .new_block__text").html(
            JSON.parse(response.text).content
        );
    });
}

//Выгрузка всех новостей на главную
getData("news", "", "admin").then((response) => {
    let block = $("#news_show_main_page").empty();
    const maxCharacters = 100;

    let value = 6;
    let length = response.length;

    if (value > length) {
        value = length;
    }

    for (let i = 0; i < value; i++) {
        block.append(`
            <div class="events_block">
                <div class="events_block__top">
                    <img src="admin/img/${response[i].img[0]}" alt="" />
                </div>
                <div class="events_block__bottom">
                <div class="events_block__bottom___line">
                    <img src="img/forEvent.png" alt="" />
                </div>
                <div class="events_block__bottom___title">
                    ${response[i].title.slice(0, maxCharacters)}...
                </div>
                <div class="events_block__bottom___dops">
                    <div class="events_block__bottom___dops____date">${
                      response[i].date
                    }</div>
                    <a href="new.html?id_new=${
                      response[i].id
                    }" class="events_block__bottom___dops____readMore">
                        Читать дальше >>
                    </a>
                </div>
                </div>
            </div>
        `);
    }
});

// ---------------------------------------------------------

//выгрузка всех слайдов в слайдер
$(document).ready(function () {
    getData("slider", "", "admin")
        .then((response) => {
            let slides = '';
            response.forEach((element) => {
                slides += `
                    <div class="swiper-slide slider">
                        <div class="slider_left">
                            <img src="admin/img/${element.img}" alt="" />
                        </div>
                        <div class="slider_right">
                            <p class="slider_right__title">
                                ${element.title}
                            </p>
                            <p class="slider_right__desc">
                                ${JSON.parse(element.text).content}
                            </p>
                            <a href="${element.link}" class="slider_right__button">Узнать больше</a>
                        </div>
                    </div>
                `;
            });

            const swiperHtml = `
                <swiper class="mySwiper" pagination="true">
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                    <div class="swiper-pagination"></div>
                </swiper>
            `;

            $("#slider_all_show").html(swiperHtml);

            if ($("#slider_all_show").length) {
                const swiper = new Swiper('.mySwiper', {
                    // Опциональные параметры
                    direction: 'horizontal',
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: {
                        delay: 5000,
                    },
                });
            }
        });
});

// ---------------------------------------------------------

//Выгрузка всех услуг
getData("services", "", "admin").then((response) => {
    let block = $("#service_all").empty();

    function getFileExtension(filename) {
        return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    }

    response.forEach((element) => {
        fetch(`admin/img/${element.img[0]}`)
            .then(elem => {
                let extension = getFileExtension(element.img[0]);
                if (extension == 'svg') {
                    return elem.text()
                } else {
                    return "img"
                }
            })
            .then(data => {
                let imgData;
                if (data == 'img') {
                    imgData = `<img src='admin/img/${element.img[0]}' />`;
                } else {
                    imgData = data;
                }
                block.append(`
                    <div class="service_block">
                        <div class="service_block__img1">
                            <img src="img/my-bussiness logo.png" alt="" />
                        </div>
                        <div class="service_block__img2">
                            <img src="img/hoverServiceEllipce.png" alt="" />
                        </div>
                        <div class="service_block__main">
                            <div class="service_block__main___top" >
                                ${imgData}
                            </div>
                            <div class="service_block__main___bottom">
                                <div class="service_block__main___bottom____text">
                                ${element.title}
                                </div>
                                <a href="openService.html?id_service=${element.id}" class="service_block__main___bottom____button">
                                    <svg width="66" height="64" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M65 32C65 49.092 50.7023 63 33 63C15.2977 63 1 49.092 1 32C1 14.908 15.2977 1 33 1C50.7023 1 65 14.908 65 32Z"
                                        stroke="#562211" stroke-width="2" />
                                    <path
                                        d="M45.7071 32.7071C46.0976 32.3166 46.0976 31.6834 45.7071 31.2929L39.3431 24.9289C38.9526 24.5384 38.3195 24.5384 37.9289 24.9289C37.5384 25.3195 37.5384 25.9526 37.9289 26.3431L43.5858 32L37.9289 37.6569C37.5384 38.0474 37.5384 38.6805 37.9289 39.0711C38.3195 39.4616 38.9526 39.4616 39.3431 39.0711L45.7071 32.7071ZM20 33L45 33L45 31L20 31L20 33Z"
                                        fill="#562211" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `)
            })
            .catch(error => {
                console.error('Ошибка при загрузке SVG: ', error);
            });

    });
});

//Редактирование услуги
const url_service = new URL(window.location.href);
const queryParams_service = url_service.searchParams;
const id_service = queryParams_service.get("id_service");
if (id_service) {
    getData("services", id_service, "admin").then((response) => {
        $("#services_find_service .new_block__title").text(response.title);
        $("#newName").text(response.title);
        $("#services_find_service .new_block__desc").text(response.subtitle);

        for (let i = 0; i < response.img.length; i++) {
            $("#news_find_new .new_block__img").append(`
                <img src="admin/img/${response.img[i]}" alt="" />
            `);
        }

        $("#services_find_service .new_block__nums").html(
            JSON.parse(response.text).content
        );
    });
}

//Выгрузка всех услуг на главную
getData("services", "", "admin").then((response) => {
    let block = $("#services_show_main_page").empty();

    let value = 6;
    let length = response.length;

    if (value > length) {
        value = length;
    }

    function getFileExtension(filename) {
        return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    }

    for (let i = 0; i < value; i++) {
        fetch(`admin/img/${response[i].img[0]}`)
            .then(elem => {
                let extension = getFileExtension(response[i].img[0]);
                if (extension == 'svg') {
                    return elem.text()
                } else {
                    return "img"
                }
            })
            .then(data => {
                let imgData;
                if (data == 'img') {
                    imgData = `<img src='admin/img/${response[i].img[0]}' />`;
                } else {
                    imgData = data;
                }
                block.append(`
                    <div class="service_block">
                        <div class="service_block__img1">
                            <img src="img/my-bussiness logo.png" alt="" />
                        </div>
                        <div class="service_block__img2">
                            <img src="img/hoverServiceEllipce.png" alt="" />
                        </div>
                        <div class="service_block__main">
                            <div class="service_block__main___top" >
                                ${imgData}
                            </div>
                            <div class="service_block__main___bottom">
                                <div class="service_block__main___bottom____text">
                                ${response[i].title}
                                </div>
                                <a href="openService.html?id_service=${response[i].id}" class="service_block__main___bottom____button">
                                    <svg width="66" height="64" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M65 32C65 49.092 50.7023 63 33 63C15.2977 63 1 49.092 1 32C1 14.908 15.2977 1 33 1C50.7023 1 65 14.908 65 32Z"
                                        stroke="#562211" stroke-width="2" />
                                    <path
                                        d="M45.7071 32.7071C46.0976 32.3166 46.0976 31.6834 45.7071 31.2929L39.3431 24.9289C38.9526 24.5384 38.3195 24.5384 37.9289 24.9289C37.5384 25.3195 37.5384 25.9526 37.9289 26.3431L43.5858 32L37.9289 37.6569C37.5384 38.0474 37.5384 38.6805 37.9289 39.0711C38.3195 39.4616 38.9526 39.4616 39.3431 39.0711L45.7071 32.7071ZM20 33L45 33L45 31L20 31L20 33Z"
                                        fill="#562211" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `)
            })
            .catch(error => {
                console.error('Ошибка при загрузке SVG: ', error);
            });

    };
});

// ---------------------------------------------------------

//Выгрузка баннера на главную
$(document).ready(function () {
    getData("banners", "", "admin")
        .then((response) => {
            let slides = '';
            response.forEach((element) => {
                slides += `
                    <div class="swiper-slide slider">
                        <a href="${element.link}" target="_blank">
                            <img src="admin/img/${element.img}" alt="" />
                        </a>
                    </div>
                `;
            });

            const swiperHtml = `
                <swiper class="mySwiper mainBanner">
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                </swiper>
            `;

            $("#main_banner").html(swiperHtml);

            if ($("#slider_all_show").length) {
                const swiper = new Swiper('.mainBanner', {
                    // Опциональные параметры
                    direction: 'horizontal',
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                });
            }
        });
});

// ---------------------------------------------------------

//Выгрузка всех видеоблоков в видеоблоки
getData("videoblog", "", "admin").then((response) => {
    let block = $("#video_All").empty();

    response.forEach((element) => {
        block.append(`
            <div class="video_videos__block">
                <div class="video_videos__block___img">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="${element.link}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
                <div class="video_videos__block___date">${element.date}</div>
                <div class="video_videos__block___text">
                    ${element.title}
                </div>
            </div>
        `);
    });
});

//Выгрузка всех видеоблоков на главную
getData("videoblog", "", "admin").then((response) => {
    let block = $("#show_videos_main").empty();

    let value = 6;
    let length = response.length;

    if (value > length) {
        value = length;
    }

    for (let i = 0; i < value; i++) {
        block.append(`
            <div class="video_videos__block">
                <div class="video_videos__block___img">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="${response[i].link}" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
                <div class="video_videos__block___date">${response[i].date}</div>
                <div class="video_videos__block___text">
                    ${response[i].title}
                </div>
            </div>
        `);
    }
});

// ---------------------------------------------------------

//Выгрузка всех районов на главную
getData("map", "", "admin").then((response) => {
    let all_IP = 0;
    let all_UL = 0;
    let all_SMSP = 0;

    let all_IP_not_city = 0;
    let all_UL_not_city = 0;
    let all_SMSP_not_city = 0;

    let all_samozanyatiy = 0;

    if ($("#moveBlockMain").length) {
        response.forEach((element) => {
            if (element.title != 'Самозанятые') {
                all_IP += +element.block_1;
                all_UL += +element.block_2;
                all_SMSP += +element.block_3;
                showBlockInfoAndColor(element.title, element);
            }
            if (element.title != 'г. Черкесск' && element.title != 'Самозанятые') {
                all_IP_not_city += +element.block_1;
                all_UL_not_city += +element.block_2;
                all_SMSP_not_city += +element.block_3;
            }
            if (element.title == 'Самозанятые') {
                all_samozanyatiy += +element.block_3;
            }

        });

        $('#all_IP').text(all_IP);
        $('#all_UL').text(all_UL);
        $('#all_SMSP').text(all_SMSP);
        $('#all_IP_not_city').text(all_IP_not_city);
        $('#all_UL_not_city').text(all_UL_not_city);
        $('#all_SMSP_not_city').text(all_SMSP_not_city);
        $('#all_samozanyatiy').text(all_samozanyatiy);
    }
});

function showBlockInfoAndColor(idBlock, data) {
    let draggable = document.getElementById(idBlock);
    let moveBlockMain = document.getElementById('moveBlockMain');
    let openBlock = document.getElementById('openBlock');


    draggable.onmousemove = function (event) {
        let mouseX = event.clientX - moveBlockMain.getBoundingClientRect().left - 210;
        let mouseY = event.clientY - moveBlockMain.getBoundingClientRect().top - 165;

        $(".fil0").removeClass('showColorBlock');
        $(this).addClass('showColorBlock');

        $(".info_block__showMouse___data____data___title").text($(this).attr('data_name'))

        $(".ip_block").text(data.block_1)
        $(".ul_block").text(data.block_2)
        $(".smsp_block").text(data.block_3)

        $(".info_block__showMouse").show()
        $(".info_block__showMouse").css({
            "left": mouseX + "px",
            "top": mouseY + "px",
            "z-index": "9999"
        })
    };

    openBlock.onmouseenter = function (event) {
        $(".info_block__showMouse").show();
    };

    draggable.onmouseleave = function () {
        $(".info_block__showMouse").hide()
        $(".fil0").removeClass('showColorBlock');
    }
}

// ---------------------------------------------------------

//Выгрузка всех мер поддержки 

function showSupports(tag, blockName, response) {
    let block = $(`.${blockName}`).empty();

    response.forEach((element) => {
        if (element.tags == tag) {
            block.append(`
                <div class="support_all__blocks___item">
                    <div class="support_all__blocks___item____img">
                        <img src="admin/img/${element.img[0]}" alt="" />
                    </div>
                    <div class="support_all__blocks___item____text">
                        <div class="support_all__blocks___item____text_____date">
                            ${element.date}
                        </div>
                        <div class="support_all__blocks___item____text_____title">
                            ${element.title}
                        </div>
                        <div class="support_all__blocks___item____text_____desc">
                            ${element.subtitle}
                        </div>
                        <a href="openSupport.html?id_support=${element.id}" class="support_all__blocks___item____text_____button">
                            Узнать больше
                        </a>
                    </div>
                </div>
            `);
        }
    });
}

function showPopularSupports(tag, blockName, response) {
    let block = $(`.${blockName}`).empty();

    response.forEach((element) => {
        if (element.tags == tag && element.popular == 'Да') {
            block.append(`
                <div class="support_popular__blocks___item">
                    <div class="support_popular__blocks___item____img">
                        <img src="admin/img/${element.img[0]}" alt="" />
                    </div>
                    <div class="support_popular__blocks___item____tag">Популярно</div>
                    <div class="support_popular__blocks___item____elems">
                    <div class="support_popular__blocks___item____elems_____text">
                        ${element.title}
                    </div>
                    <a href="openSupport.html?id_support=${element.id}" class="support_popular__blocks___item____elems_____button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="66"
                            height="64"
                            viewBox="0 0 66 64"
                            fill="none"
                        >
                        <path
                            d="M65 32C65 49.092 50.7023 63 33 63C15.2977 63 1 49.092 1 32C1 14.908 15.2977 1 33 1C50.7023 1 65 14.908 65 32Z"
                            stroke="#8692C3"
                            stroke-width="2"
                        />
                        <path
                            d="M45.7071 32.7071C46.0976 32.3166 46.0976 31.6834 45.7071 31.2929L39.3431 24.9289C38.9526 24.5384 38.3195 24.5384 37.9289 24.9289C37.5384 25.3195 37.5384 25.9526 37.9289 26.3431L43.5858 32L37.9289 37.6569C37.5384 38.0474 37.5384 38.6805 37.9289 39.0711C38.3195 39.4616 38.9526 39.4616 39.3431 39.0711L45.7071 32.7071ZM20 33L45 33L45 31L20 31L20 33Z"
                            fill="#8692C3"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
            `);
        }
    });
}

getData("supports", "", "admin").then((response) => {
    showSupports('Федеральная мера поддержки', 'support_all__blocks', response)
    $(".regButton").click(function () {
        showSupports('Региональная мера поддержки', 'support_all__blocks', response);
        showPopularSupports('Региональная мера поддержки', 'support_popular__blocks', response);

        $(".support_popular__title").text('Самые популярные региональные меры поддержки');

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

        $(".support_popular__blocks___item____tag").css("background", "#C88DC5")
        $(".support_all__blocks___item____text_____date").css("color", "#733897")
        $(".support_all__blocks___item____text_____button").css("background", "#733897")
    })

    $(".fedButton").click(function () {
        showSupports('Федеральная мера поддержки', 'support_all__blocks', response);
        showPopularSupports('Федеральная мера поддержки', 'support_popular__blocks', response);

        $(".support_popular__title").text('Самые популярные федеральные меры поддержки');

        let screenWidth = window.innerWidth;
        if (screenWidth <= 425) {
            $(".activeButton").css("transform", "translate(146px)");
        } else {
            $(".activeButton").css("transform", "translate(243px)");
        }

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

        $(".support_popular__blocks___item____tag").css("background", "#8692C3")
        $(".support_all__blocks___item____text_____date").css("color", "#3D2A92")
        $(".support_all__blocks___item____text_____button").css("background", "#3D2A92")
    })
});

//Редактирование меры поддержки
const url_supports = new URL(window.location.href);
const queryParams_supports = url_service.searchParams;
const id_support = queryParams_service.get("id_support");
if (id_support) {
    getData("supports", id_support, "admin").then((response) => {
        $("#supports_find_support .new_block__title").text(response.title);
        $("#supports_find_support #supportName").text(response.title);
        $("#supports_find_support .new_block__desc").text(response.subtitle);
        $("#supports_find_support .new_block__textDesc").html(JSON.parse(response.text).content);

        for (let i = 0; i < response.img.length; i++) {
            $("#supports_find_support .new_block__img").append(`
                <img src="admin/img/${response.img[i]}" alt="" />
            `);
        }

    });
}

// ---------------------------------------------------------


//Выгрузка базы знаний в базу знаний
getData("knowledgeBase", "", "admin").then((response) => {
    let block = $("#KB_All").empty();
    const maxCharacters = 100;

    response.forEach((element) => {
        block.append(`
            <div class="events_block">
                <div class="events_block__top">
                    <img src="admin/img/${element.img[0]}" alt="" />
                </div>
                <div class="events_block__bottom">
                <div class="events_block__bottom___line">
                    <img src="img/forEvent.png" alt="" />
                </div>
                <div class="events_block__bottom___title">
                    ${element.title.slice(0, maxCharacters)}...
                </div>
                <div class="events_block__bottom___dops">
                    <div class="events_block__bottom___dops____date">${
                      element.date
                    }</div>
                    <a href="show_base.html?id_KB=${
                      element.id
                    }" class="events_block__bottom___dops____readMore">
                        Читать дальше >>
                    </a>
                </div>
                </div>
            </div>
        `);
    });
});

//Редактирование базы знаний
const url_KB = new URL(window.location.href);
const queryParams_KB = url_KB.searchParams;
const id_KB = queryParams_new.get("id_KB");
if (id_KB) {
    getData("knowledgeBase", id_KB, "admin").then((response) => {
        $("#KBs_find_KB .new_block__title").text(response.title);
        $("#KBs_find_KB #newName").text(response.title);

        for (let i = 0; i < response.img.length; i++) {
            $("#KBs_find_KB .new_block__img").append(`
                <img src="admin/img/${response.img[i]}" alt="" />
            `);
        }

        $("#KBs_find_KB .new_block__text").html(
            JSON.parse(response.text).content
        );
    });
}