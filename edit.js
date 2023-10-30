import {
    getData
} from "./admin/library.js";

//Выгрузка всех новостей
getData("news", "", "admin")
    .then((response) => {
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
                        <div class="events_block__bottom___dops____date">${element.date}</div>
                        <a href="new.html?id=${
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
const id = queryParams.get("id");
if (id) {
    getData("news", id, "admin")
        .then((response) => {
            $("#news_find_new .new_block__title").text(response.title);
            $("#news_find_new .new_block__img img").attr("src", `admin/img/${response.img}`);
            $("#news_find_new .new_block__text").html(JSON.parse(response.text).content);
        });
}

//Выгрузка всех новостей
getData("news", "", "admin")
    .then((response) => {
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
                        <div class="events_block__bottom___dops____date">${response[i].date}</div>
                        <a href="new.html?id=${
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