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
                "name": "Теги услуги",
                "element": "input",
                "type": "text",
                "data": ["Услуги", "Самозанятый", "ИП"],
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
    })
}