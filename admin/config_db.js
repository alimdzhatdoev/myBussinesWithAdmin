export function schema() {
    return ({
        "slider": {
            "menuName": "Слайды",
            "title": {
                "name": "Заголовок слайда",
                "element": "input",
                "type": "text",
                "required": true
            },
            "text": {
                "name": "Текст слайда",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "link": {
                "name": "Ссылка для кнопки",
                "element": "input",
                "type": "text",
                "required": true
            },
            "img": {
                "name": "Картинки слайда",
                "element": "input",
                "type": "file",
                "required": true
            },
        },
        "news": {
            "menuName": "Новости",
            "title": {
                "name": "Заголовок новости",
                "element": "input",
                "type": "text",
                "required": true
            },
            "text": {
                "name": "Текст новости",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "date": {
                "name": "Дата загрузки новости",
                "element": "input",
                "type": "date",
                "required": true
            },
            "img": {
                "name": "Картинки новости",
                "element": "input",
                "type": "file",
                "required": true
            },
        },
        "services": {
            "menuName": "Услуги",
            "title": {
                "name": "Заголовок услуги",
                "element": "input",
                "type": "text",
                "required": true
            },
            "subtitle": {
                "name": "Подзаголовок услуги",
                "element": "input",
                "type": "text",
                "required": true
            },
            "text": {
                "name": "Текст услуги",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "tags": {
                "name": "Организационно правовая форма",
                "element": "input",
                "type": "text",
                "data": ["Физ. лица", "Самозанятый", "СМСП"],
                "selectOne": false,
                "required": true
            },
            "tags_next": {
                "name": "Центры",
                "element": "input",
                "type": "text",
                "data": ["ЦПП", "ЦПЭ", "ЦКССКПФ", "ЦИСС", "ЦМИТ"],
                "selectOne": false,
                "required": true
            },
            "img": {
                "name": "Картинки услуги",
                "element": "input",
                "type": "file",
                "required": true
            },
        },
        "banners": {
            "menuName": "Баннер",
            "title": {
                "name": "Название баннера",
                "element": "input",
                "type": "text",
                "required": true
            },
            "link": {
                "name": "Ссылка для баннера",
                "element": "input",
                "type": "text",
                "required": true
            },
            "img": {
                "name": "Картинки баннера",
                "element": "input",
                "type": "file",
                "required": true
            },
        },
        "videoblog": {
            "menuName": "Видеоблог",
            "title": {
                "name": "Название Видеоблога",
                "element": "input",
                "type": "text",
                "required": true
            },
            "link": {
                "name": "Ссылка для Видеоблога",
                "element": "input",
                "type": "text",
                "required": true
            },
            "date": {
                "name": "Дата загрузки Видеоблога",
                "element": "input",
                "type": "date",
                "required": true
            },
            "img": {
                "name": "Картинки Видеоблога (Если не загрузится видео, замена превью)",
                "element": "input",
                "type": "file",
                "required": true
            },
        },
        "map": {
            "menuName": "Карта СМСП",
            "title": {
                "name": "Название района",
                "element": "input",
                "type": "text",
                "required": true
            },
            'block_1': {
                "name": "ИП",
                "element": "input",
                "type": "text",
                "required": true
            },
            'block_2': {
                "name": "ЮЛ",
                "element": "input",
                "type": "text",
                "required": true
            },
            'block_3': {
                "name": "Всего СМСП",
                "element": "input",
                "type": "text",
                "required": true
            },          
            "img": {
                "name": "Герб района",
                "element": "input",
                "type": "file",
                "required": true
            }
        },
        "supports": {
            "menuName": "Меры поддержки",
            "title": {
                "name": "Заголовок меры поддержки",
                "element": "input",
                "type": "text",
                "required": true
            },
            "subtitle": {
                "name": "Подзаголовок меры поддержки",
                "element": "input",
                "type": "text",
                "required": true
            },
            "text": {
                "name": "Текст меры поддержки",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "tags": {
                "name": "Тип мер поддержки",
                "element": "input",
                "type": "text",
                "data": ["Региональная мера поддержки", "Федеральная мера поддержки"],
                "selectOne": true,
                "required": true
            },
            "tags_next": {
                "name": "Теги меры поддержки",
                "element": "input",
                "type": "text",
                "data": ["Самозанятому", "Предпринимателю", "Социальному предпринимателю", "Планирование бизнеса"],
                "selectOne": false,
                "required": true
            },
            'popular': {
                "name": "Популярная мера поддержки",
                "element": "input",
                "type": "text",
                "data": ["Да", "Нет"],
                "selectOne": true,
                "required": true
            },
            "date": {
                "name": "Дата загрузки меры поддержки",
                "element": "input",
                "type": "date",
                "required": true
            },
            "img": {
                "name": "Картинки меры поддержки",
                "element": "input",
                "type": "file",
                "required": true
            },
        },
        "knowledgeBase": {
            "menuName": "База знаний",
            "title": {
                "name": "Заголовок базы знаний",
                "element": "input",
                "type": "text",
                "required": true
            },
            "text": {
                "name": "Текст базы знаний",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "date": {
                "name": "Дата загрузки базы знаний",
                "element": "input",
                "type": "date",
                "required": true
            },
            "img": {
                "name": "Картинки базы знаний",
                "element": "input",
                "type": "file",
                "required": true
            },
        },
        "vitrina": {
            "menuName": "Витрина предпринимателей",
            "title": {
                "name": "Название услуги",
                "element": "input",
                "type": "text",
                "required": true
            },
            "person_name": {
                "name": "ФИО",
                "element": "input",
                "type": "text",
                "required": true
            },            
            "person_number": {
                "name": "Номер телефона",
                "element": "input",
                "type": "text",
                "required": true
            },            
            "person_email": {
                "name": "Электронная почта",
                "element": "input",
                "type": "text",
                "required": true
            },            
            "person_city": {
                "name": "Город",
                "element": "input",
                "type": "text",
                "required": true
            },            
            "text": {
                "name": "Оказываемые услуги",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "img": {
                "name": "Картинки оказываемой услуги",
                "element": "input",
                "type": "file",
                "required": true
            },
        }
    })
}