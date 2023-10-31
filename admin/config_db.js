export function schema() {
    return ({
        "slider": {
            "menuName": "Слайды",
            "title": {
                "name": "Название слайда",
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
                "name": "Название новости",
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
    })
}