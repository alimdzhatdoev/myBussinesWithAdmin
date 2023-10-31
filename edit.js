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
const url = new URL(window.location.href);
const queryParams = url.searchParams;
const id = queryParams.get("id_new");
if (id) {
    getData("news", id, "admin").then((response) => {
        $("#news_find_new .new_block__title").text(response.title);
        $("#news_find_new .new_block__img img").attr(
            "src",
            `admin/img/${response.img}`
        );
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
        });
});


//SLIDER