import {
    getData
} from "./admin/library.js";

//NEWS

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

//NEWS

// ---------------------------------------------------------

//SLIDER

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

//SLIDER

// ---------------------------------------------------------

//SERVICES

//Выгрузка всех услуг
getData("services", "", "admin").then((response) => {
    let block = $("#service_all").empty();

    response.forEach((element) => {
        fetch(`admin/img/${element.img[0]}`)
            .then(response => response.text())
            .then(data => {
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
                                ${data}
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

//Редактирование новости
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

//SERVICES

// ---------------------------------------------------------